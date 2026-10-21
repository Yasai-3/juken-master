/**
 * Gemini API マルチモーダル作問＆AI学習コーチング生成モジュール
 * - APIキーのサニタイズ（全角空白・改行混入によるSafari Load failed防止）
 * - ListModels API ＋ 軽量プリフライト検証による利用可能モデルの100%確実な自動検出
 * - 大容量データ送信の1回化・ファイルサイズチェック
 */

import { getSettings, saveSettings } from './storage';

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';

export const sanitizeApiKey = (rawKey = '') => {
  return String(rawKey).replace(/[^\x21-\x7E]/g, '').trim();
};

/**
 * ファイルをGemini inlineData用のBase64オブジェクトに変換する
 * 画像の場合は長辺1400px以下にリサイズ圧縮して高速化する
 */
export const fileToGenerativePart = async (file) => {
  const fileSizeMB = file.size / (1024 * 1024);

  if (file.type === 'application/pdf') {
    if (fileSizeMB > 14.5) {
      throw new Error(
        `PDFファイル「${file.name}」のサイズが大きすぎます（${fileSizeMB.toFixed(1)}MB）。\n` +
          `ブラウザからの直接送信上限（約14MB）を超えるため「Load failed」エラーになります。\n` +
          `出題したいページをスクリーンショット（画像）で撮って読み込むか、ページを分割したPDFをご使用ください。`
      );
    }
    const base64 = await readFileAsBase64(file);
    return {
      name: file.name,
      sizeMB: Number(fileSizeMB.toFixed(2)),
      mimeType: 'application/pdf',
      data: base64,
      previewUrl: URL.createObjectURL(file),
      isPdf: true,
    };
  }

  if (file.type.startsWith('image/')) {
    const resized = await resizeImageFile(file, 1400, 0.82);
    const approxMB = (resized.base64.length * 0.75) / (1024 * 1024);
    return {
      name: file.name,
      sizeMB: Number(approxMB.toFixed(2)),
      mimeType: 'image/jpeg',
      data: resized.base64,
      previewUrl: resized.dataUrl,
      isPdf: false,
    };
  }

  throw new Error(`未対応のファイル形式です: ${file.name}（PDFまたは画像を選択してください）`);
};

const readFileAsBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const base64 = result.split(',')[1] || '';
      resolve(base64);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });

const resizeImageFile = (file, maxDimension = 1400, quality = 0.82) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve({
          dataUrl,
          base64: dataUrl.split(',')[1],
        });
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

/**
 * GoogleのListModels APIから現在そのAPIキーで利用可能なGeminiモデル一覧を取得する
 */
export const fetchAvailableGeminiModels = async (rawApiKey) => {
  const cleanKey = sanitizeApiKey(rawApiKey);
  if (!cleanKey) {
    throw new Error('APIキーを入力してください。');
  }

  let res;
  try {
    res = await fetch(`${GEMINI_API_BASE}?key=${encodeURIComponent(cleanKey)}`);
  } catch (err) {
    throw new Error(
      `Googleサーバーへの接続に失敗しました (${err.message})。インターネット接続をご確認ください。`
    );
  }

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`APIキーの確認に失敗しました (${res.status}): ${errText.slice(0, 180)}`);
  }

  const data = await res.json();
  const allModels = Array.isArray(data.models) ? data.models : [];

  // generateContent対応かつテキスト・マルチモーダル生成向けのgeminiモデルを抽出
  const usable = allModels
    .filter((m) => {
      const name = (m.name || '').replace(/^models\//, '');
      const methods = m.supportedGenerationMethods || [];
      if (!methods.includes('generateContent')) return false;
      if (!name.startsWith('gemini-')) return false;
      if (
        name.includes('tts') ||
        name.includes('image') ||
        name.includes('embedding') ||
        name.includes('vision') ||
        name.includes('aqa') ||
        name.includes('thinking')
      ) {
        return false;
      }
      return true;
    })
    .map((m) => (m.name || '').replace(/^models\//, ''));

  // flash系（高速・マルチモーダル対応）を優先しつつ新しい順に並べる
  usable.sort((a, b) => {
    const aIsFlash = a.includes('flash') && !a.includes('lite') ? 1 : 0;
    const bIsFlash = b.includes('flash') && !b.includes('lite') ? 1 : 0;
    if (aIsFlash !== bIsFlash) return bIsFlash - aIsFlash;
    return b.localeCompare(a);
  });

  return usable;
};

/**
 * 重い画像・PDFを送信する前に、10バイトの極小テスト通信で「確実に動作するモデル名」を確定させる
 * これにより、巨大データを複数回POSTしてSafariが「Load failed」になるのを完全に防ぐ
 */
export const verifyAndResolveModel = async (rawApiKey, preferredModel = 'auto') => {
  const cleanKey = sanitizeApiKey(rawApiKey);
  const settings = getSettings();

  // APIから利用可能モデルリストを取得
  const availableList = await fetchAvailableGeminiModels(cleanKey);

  const candidates = [];
  if (preferredModel && preferredModel !== 'auto' && availableList.includes(preferredModel)) {
    candidates.push(preferredModel);
  }
  if (settings.verifiedModel && availableList.includes(settings.verifiedModel)) {
    if (!candidates.includes(settings.verifiedModel)) {
      candidates.push(settings.verifiedModel);
    }
  }
  availableList.forEach((m) => {
    if (!candidates.includes(m)) candidates.push(m);
  });

  const testPing = async (modelName) => {
    const cleanModel = modelName.replace(/^models\//, '');
    const url = `${GEMINI_API_BASE}/${cleanModel}:generateContent?key=${encodeURIComponent(cleanKey)}`;
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: 'ok' }] }],
        generationConfig: { maxOutputTokens: 5 },
      }),
    });
  };

  for (const cand of candidates.slice(0, 6)) {
    const res = await testPing(cand);
    if (res.ok) {
      saveSettings({ verifiedModel: cand });
      return cand;
    }

    if (res.status === 404) {
      const errText = await res.text();
      // エラー文中に "use models/gemini-xxx" の指定があればブラウザ内で直接抽出して検証
      const match = errText.match(/models\/(gemini-[a-zA-Z0-9._-]+)/);
      if (match && match[1]) {
        const suggested = match[1];
        const retryRes = await testPing(suggested);
        if (retryRes.ok) {
          saveSettings({ verifiedModel: suggested });
          return suggested;
        }
      }
    }
  }

  throw new Error('利用可能なGeminiモデルが見つかりませんでした。APIキーの権限をご確認ください。');
};

/**
 * アップロードされた画像・PDF・補足テキストから中学受験向け問題を自動生成する
 */
export const generateQuestionsFromMedia = async ({
  apiKey,
  model = 'auto',
  mediaParts = [],
  sourceText = '',
  subject = 'auto',
  category = '',
  subCategory = '',
  difficulty = 'mix',
  questionType = 'mix',
  count = 6,
  focusInstruction = '',
}) => {
  const cleanKey = sanitizeApiKey(apiKey);
  if (!cleanKey) {
    throw new Error('Gemini APIキーが設定されていません。画面上部の「APIキー設定」から入力してください。');
  }

  // 合計ファイルサイズチェック（14.5MB超はSafariでLoad failedになるため事前ブロック）
  const totalMB = mediaParts.reduce((acc, m) => acc + (m.sizeMB || 0), 0);
  if (totalMB > 14.5) {
    throw new Error(
      `読み込んだファイルの合計サイズが大きすぎます（約${totalMB.toFixed(1)}MB）。\n` +
        `一度に送信できる上限（約14MB）を超えているため通信エラー（Load failed）になります。ファイル数を減らすか、画像（スクリーンショット）でお試しください。`
    );
  }

  // Step 1: 確実に動作するモデルを軽量通信で特定（ここで404モデルを排除）
  const activeModel = await verifyAndResolveModel(cleanKey, model);

  const difficultyInstruction =
    difficulty === 'basic'
      ? 'すべて「basic（基礎：基本用語や一問一答レベル）」で作成してください。'
      : difficulty === 'standard'
        ? 'すべて「standard（標準：塾の週テスト・模試レベル）」で作成してください。'
        : difficulty === 'advanced'
          ? 'すべて「advanced（応用：難関校レベルの理由説明や考察問題）」で作成してください。'
          : '「basic（基礎）」「standard（標準）」「advanced（応用）」をバランスよく混ぜて作成してください。';

  const typeInstruction =
    questionType === 'choice'
      ? 'すべて「choice（4択選択問題：optionsに4つの選択肢を入れる）」で作成してください。'
      : questionType === 'input'
        ? 'すべて「input（一問一答の語句入力問題：答えが1つの重要語句になる問題）」で作成してください。'
        : questionType === 'descriptive'
          ? 'すべて「descriptive（理由や仕組みを1〜2文で説明する短文記述問題）」で作成してください。'
          : '「choice（4択選択問題）」「input（一問一答・語句入力）」「descriptive（短文記述問題）」の3種類を組み合わせて作成してください。';

  const subjectInstruction =
    subject === 'auto'
      ? '教科（subject）は資料の内容から「理科」または「社会」を自動判別してください。'
      : `教科（subject）は必ず「${subject}」にしてください。`;

  const categoryInstruction = category
    ? `分野（category）は「${category}」${subCategory ? `、単元（subCategory）は「${subCategory}」` : ''}としてください。`
    : '分野（category：理科なら「生物」「化学」「物理」「地学」、社会なら「地理」「歴史」「公民」など）と単元（subCategory：例「植物」「水溶液」「江戸時代」など）も資料内容から適切に設定してください。';

  const systemPrompt = `あなたは中学受験（理科・社会）のプロ講師・作問責任者です。
提供された教材の画像・PDF・テキストの内容を正確に読み取り、小学生（4〜6年生）の学力向上に直結する良質な問題を ${count} 問作成してください。

【作問条件】
- ${subjectInstruction}
- ${categoryInstruction}
- 難易度指定: ${difficultyInstruction}
- 問題形式指定: ${typeInstruction}
${focusInstruction ? `- 追加リクエスト: ${focusInstruction}` : ''}
${sourceText ? `- 補足テキスト資料:\n${sourceText}` : ''}

【重要な作成ルール】
1. 元の教材（画像・PDF）に書かれている事実・数値・図表・因果関係に基づいて作問し、小学生にも分かりやすく納得感のある丁寧な解説（explanation）をつけてください。
2. questionType が "choice" の場合：
   - options には必ず4つの選択肢（正解1つ＋中学受験生が迷いやすい自然な誤答3つ）を配列で入れ、answer には正解の選択肢と完全一致する文字列を入れてください。
3. questionType が "input"（語句入力）の場合：
   - answer には最も標準的な漢字表記の正解語句（例：「蒸散」「参勤交代」）を入れてください。
   - acceptableAnswers には、正解の漢字表記、ひらがな読み、別名など許容する解答の配列（例：["蒸散", "じょうさん"]）を必ず入れてください。
4. questionType が "descriptive"（短文記述）の場合：
   - answer には小学生が手本にしやすい簡潔な模範解答（30〜60字程度）を入れてください。
   - keywords には、オフライン自動採点で含まれているか判定するための必須キーワード（2〜3個、例：["気孔", "裏"]）を配列で入れてください。
5. knowledgeTag には、成績分析と弱点アドバイスで使うための具体的な知識テーマ名（例：「植物の蒸散実験と気孔の分布」「江戸時代の参勤交代と五街道の発達」）を入れてください。

出力は必ず以下のJSON配列フォーマットのみを返してください：
[
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "植物",
    "difficulty": "basic | standard | advanced",
    "questionType": "choice | input | descriptive",
    "question": "問題文",
    "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
    "answer": "正解または模範解答",
    "acceptableAnswers": ["正解", "ひらがな読み"],
    "keywords": ["キーワード1", "キーワード2"],
    "knowledgeTag": "具体的な知識テーマ名",
    "explanation": "丁寧でわかりやすい解説"
  }
]`;

  const parts = [
    ...mediaParts.map((m) => ({
      inlineData: {
        mimeType: m.mimeType,
        data: m.data,
      },
    })),
    { text: systemPrompt },
  ];

  // Step 2: 検証済みのモデルに対して1回だけ本番リクエストを送信
  const endpoint = `${GEMINI_API_BASE}/${activeModel}:generateContent?key=${encodeURIComponent(cleanKey)}`;
  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: {
          temperature: 0.4,
          responseMimeType: 'application/json',
        },
      }),
    });
  } catch (netErr) {
    throw new Error(
      `通信中にエラーが発生しました (${netErr.message})。\n` +
        `【考えられる原因】\n` +
        `・読み込んだPDFのページ数やファイルサイズ（現在約${totalMB.toFixed(1)}MB）が大きく、通信がタイムアウトした可能性があります。\n` +
        `・PDFではなく、出題したいページのスクリーンショット（画像1〜3枚）で読み込むと高速・確実に作問できます。`
    );
  }

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini APIエラー (${response.status} / モデル: ${activeModel}):\n${errText.slice(0, 240)}`);
  }

  const result = await response.json();
  const rawText = result?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  if (!rawText) {
    throw new Error('AIから問題データを取得できませんでした。別の画像やPDFでお試しください。');
  }

  const cleaned = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
  const parsed = JSON.parse(cleaned);
  if (!Array.isArray(parsed)) {
    throw new Error('生成されたデータが配列形式ではありませんでした。');
  }

  return parsed;
};

/**
 * 成績集計データをもとに、Gemini AIが個別学習コーチングレポートを生成する
 */
export const generateAiCoachingReport = async ({ apiKey, model = 'auto', analysisSummary }) => {
  const cleanKey = sanitizeApiKey(apiKey);
  if (!cleanKey) {
    throw new Error('Gemini APIキーが設定されていません。管理画面から入力してください。');
  }

  const activeModel = await verifyAndResolveModel(cleanKey, model);

  const prompt = `あなたは経験豊富な中学受験（理科・社会）の専属パーソナルコーチです。
以下の生徒の学習履歴・正答率データを分析し、生徒本人と保護者に向けた温かく具体的な学習アドバイスを作成してください。

【現在の学習データ】
- 総解答数: ${analysisSummary.totalAnswered}問（総合正答率: ${analysisSummary.overallAccuracy}%）
- 難易度別成績: ${JSON.stringify(analysisSummary.difficultyStats)}
- 問題形式別成績: ${JSON.stringify(analysisSummary.questionTypeStats)}
- 優先復習単元: ${JSON.stringify(analysisSummary.priorityUnits)}
- 得意な単元: ${JSON.stringify(analysisSummary.strongUnits)}
- 弱点知識タグ: ${JSON.stringify(analysisSummary.weakKnowledgeTags)}

以下のJSON形式で出力してください：
{
  "praisePoint": "これまでの学習で素晴らしい点・褒めるべき成長ポイント（2〜3文）",
  "weaknessAnalysis": "現在のつまずきの傾向と、なぜそのミスが起きているかの分析（2〜3文）",
  "nextActionPlan": [
    "今週取り組むべき具体的なアクション1（どの単元をどの問題形式で解くべきか）",
    "今週取り組むべき具体的なアクション2（覚え方のコツや図表の見方など）",
    "今週取り組むべき具体的なアクション3（応用・記述に向けたステップアップ法）"
  ],
  "encouragementMessage": "受験に向けた一言応援メッセージ"
}`;

  const endpoint = `${GEMINI_API_BASE}/${activeModel}:generateContent?key=${encodeURIComponent(cleanKey)}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.5,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`AIレポート生成エラー (${response.status})`);
  }

  const result = await response.json();
  const rawText = result?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const cleaned = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
  return JSON.parse(cleaned);
};

/**
 * API枠を消費せずに、AntigravityやGeminiのチャット画面にPDFを添付して一括作問するための専用プロンプトを生成する
 */
export const buildChatPromptForQuestions = ({
  subject = 'auto',
  category = '',
  subCategory = '',
  difficulty = 'mix',
  questionType = 'mix',
  count = 10,
  focusInstruction = '',
}) => {
  const difficultyInstruction =
    difficulty === 'basic'
      ? 'すべて「basic（基礎：基本用語や一問一答レベル）」で作成してください。'
      : difficulty === 'standard'
        ? 'すべて「standard（標準：塾の週テスト・模試レベル）」で作成してください。'
        : difficulty === 'advanced'
          ? 'すべて「advanced（応用：難関校レベルの理由説明や考察問題）」で作成してください。'
          : '「basic（基礎）」「standard（標準）」「advanced（応用）」をバランスよく混ぜて作成してください。';

  const typeInstruction =
    questionType === 'choice'
      ? 'すべて「choice（4択選択問題：optionsに4つの選択肢を入れる）」で作成してください。'
      : questionType === 'input'
        ? 'すべて「input（一問一答の語句入力問題：答えが1つの重要語句になる問題）」で作成してください。'
        : questionType === 'descriptive'
          ? 'すべて「descriptive（理由や仕組みを1〜2文で説明する短文記述問題）」で作成してください。'
          : '「choice（4択選択問題）」「input（一問一答・語句入力）」「descriptive（短文記述問題）」の3種類を組み合わせて作成してください。';

  const subjectInstruction =
    subject === 'auto'
      ? '教科（subject）は資料の内容から「理科」または「社会」を自動判別してください。'
      : `教科（subject）は必ず「${subject}」にしてください。`;

  const categoryInstruction = category
    ? `分野（category）は「${category}」${subCategory ? `、単元（subCategory）は「${subCategory}」` : ''}としてください。`
    : '分野（category：理科なら「生物」「化学」「物理」「地学」、社会なら「地理」「歴史」「公民」など）と単元（subCategory：例「植物」「水溶液」「江戸時代」など）も資料内容から適切に設定してください。';

  return `添付したPDF（または画像・資料）の内容を読み取り、中学受験（理科・社会）の学習アプリに一括登録するための問題を ${count} 問作成してください。

【作問条件】
- ${subjectInstruction}
- ${categoryInstruction}
- 難易度指定: ${difficultyInstruction}
- 問題形式指定: ${typeInstruction}
${focusInstruction ? `- 重点テーマ・追加リクエスト: ${focusInstruction}` : ''}

【厳守ルール】
1. 資料に書かれている事実・数値・図表・因果関係に基づいて作問し、小学生にもわかりやすい丁寧な解説（explanation）をつけてください。
2. questionType が "choice" の場合：options に4つの選択肢を入れ、answer には正解の選択肢と完全一致する文字列を入れてください。
3. questionType が "input"（語句入力）の場合：answer に漢字の正解語句を入れ、acceptableAnswers に漢字表記・ひらがな読み・別名の配列（例：["蒸散", "じょうさん"]）を入れてください。
4. questionType が "descriptive"（短文記述）の場合：answer に模範解答（30〜60字程度）を入れ、keywords に自動採点用の必須キーワード2〜3個（例：["気孔", "裏"]）を配列で入れてください。
5. knowledgeTag には、弱点分析で使う具体的な知識テーマ名（例：「植物の蒸散実験と気孔の分布」）を入れてください。

アプリにそのまま貼り付けて一括登録するため、必ず以下のJSON配列形式（[ から始まり ] で終わる形式）で出力してください：
\`\`\`json
[
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "植物",
    "difficulty": "basic",
    "questionType": "choice",
    "question": "問題文",
    "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
    "answer": "正解",
    "acceptableAnswers": ["正解", "ひらがな読み"],
    "keywords": ["キーワード1", "キーワード2"],
    "knowledgeTag": "具体的な知識テーマ名",
    "explanation": "丁寧でわかりやすい解説"
  }
]
\`\`\``;
};

/**
 * GeminiチャットやAntigravityの回答テキスト（前後の説明文やコードブロックを含む）からJSON配列を自動抽出してパースする
 */
export const parseAiResponseToQuestions = (rawInput = '') => {
  const trimmed = String(rawInput || '').trim();
  if (!trimmed) {
    throw new Error('AIが作成したテキスト（JSON）を貼り付けてください。');
  }

  // 1. まずコードブロック ```json ... ``` があれば優先抽出
  const codeBlockMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidateText = codeBlockMatch ? codeBlockMatch[1].trim() : trimmed;

  // 2. 最初の '[' から最後の ']' までを切り出す
  const firstBracket = candidateText.indexOf('[');
  const lastBracket = candidateText.lastIndexOf(']');

  if (firstBracket === -1 || lastBracket === -1 || lastBracket <= firstBracket) {
    throw new Error(
      'テキスト内に問題データの配列（[ ... ]）が見つかりませんでした。AIの出力全体をコピーして貼り付けてください。'
    );
  }

  const jsonSlice = candidateText.slice(firstBracket, lastBracket + 1);
  let parsed;
  try {
    parsed = JSON.parse(jsonSlice);
  } catch (e) {
    throw new Error(`JSONの解析に失敗しました（途中で切れている可能性があります）: ${e.message}`);
  }

  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error('有効な問題データが見つかりませんでした。');
  }

  return parsed;
};
