// Firebase SDK (CDN / 軽量版) を使って外部バンドル不要でクラウド自動同期
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBgw3RMnD8Lm0R0URtc7ZXKHQjnV_gS1qI",
  authDomain: "juken-master.firebaseapp.com",
  projectId: "juken-master",
  storageBucket: "juken-master.firebasestorage.app",
  messagingSenderId: "867441020559",
  appId: "1:867441020559:web:f115fbf5b8d1c14066aafa",
  measurementId: "G-CKMB2TLS5C"
};

const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_CONFIG.projectId}/databases/(default)/documents`;
const DOC_NAME = 'user_data/primary_student';

// JavaScriptオブジェクトをFirestore REST API形式のJSONに相互変換（旧形式フォールバック用）
function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    return Number.isInteger(val) ? { integerValue: String(val) } : { doubleValue: val };
  }
  if (typeof val === 'string') return { stringValue: val };
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(toFirestoreValue) } };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      fields[k] = toFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

function fromFirestoreValue(fVal) {
  if (!fVal || typeof fVal !== 'object') return null;
  if ('nullValue' in fVal) return null;
  if ('booleanValue' in fVal) return fVal.booleanValue;
  if ('integerValue' in fVal) return parseInt(fVal.integerValue, 10);
  if ('doubleValue' in fVal) return fVal.doubleValue;
  if ('stringValue' in fVal) return fVal.stringValue;
  if ('arrayValue' in fVal) {
    return (fVal.arrayValue.values || []).map(fromFirestoreValue);
  }
  if ('mapValue' in fVal) {
    const obj = {};
    for (const [k, v] of Object.entries(fVal.mapValue.fields || {})) {
      obj[k] = fromFirestoreValue(v);
    }
    return obj;
  }
  return null;
}

/**
 * 学習履歴データのクラウド用軽量化
 * - results 配列内の問題文全文・解説等の重複データをカットし、IDと正否・解答に圧縮
 */
export function sanitizeHistoryForCloud(history) {
  if (!Array.isArray(history)) return [];
  // 直近1500セッションを保持
  const targetHistory = history.slice(-1500);
  return targetHistory.map((h) => ({
    date: h.date || h.timestamp,
    timestamp: h.timestamp || h.date,
    mode: h.mode,
    filters: h.filters,
    score: h.score,
    total: h.total,
    results: Array.isArray(h.results)
      ? h.results.map((r) => ({
          id: r.id || r.questionId,
          questionId: r.questionId || r.id,
          isCorrect: Boolean(r.isCorrect),
          userAnswer: r.userAnswer || '',
        }))
      : [],
  }));
}

/**
 * 弱点問題（誤答リスト）のクラウド用軽量化
 * - マスター問題に載っている長大な問題文・解説・幾何SVGコードをカットし、ID・日時・回数に圧縮
 * （※復元時に内蔵マスターデータから自動結合されるため完全無劣化）
 */
export function sanitizeWrongAnswersForCloud(wrongAnswers) {
  if (!Array.isArray(wrongAnswers)) return [];
  return wrongAnswers.map((w) => ({
    id: w.id,
    lastWrongAt: w.lastWrongAt || null,
    wrongCount: w.wrongCount || 1,
    lastUserAnswer: w.lastUserAnswer || '',
    isCustom: Boolean(w.isCustom),
    // ユーザー自作問題の場合のみ、マスターにないため問題文等を保持
    ...(w.isCustom
      ? {
          question: w.question,
          options: w.options,
          answer: w.answer,
          acceptableAnswers: w.acceptableAnswers,
          explanation: w.explanation,
          subject: w.subject,
          category: w.category,
        }
      : {}),
  }));
}

/**
 * クラウド（Firestore）から最新データを取得
 */
export async function fetchCloudData() {
  const url = `${FIRESTORE_BASE_URL}/${DOC_NAME}?key=${FIREBASE_CONFIG.apiKey}`;
  const res = await fetch(url);
  if (res.status === 404) {
    return null; // 初回はまだデータがない
  }
  if (!res.ok) {
    throw new Error(`Firestore読み込みエラー (${res.status})`);
  }
  const json = await res.json();
  const rawFields = json.fields || {};

  const data = {};

  // ① 新形式（圧縮JSON文字列チャンク形式）の解析
  if (rawFields.historyChunk?.stringValue) {
    try {
      data.history = JSON.parse(rawFields.historyChunk.stringValue);
    } catch (e) {
      console.warn('historyChunk parse failed:', e);
      data.history = [];
    }
  }
  if (rawFields.wrongChunk?.stringValue) {
    try {
      data.wrongAnswers = JSON.parse(rawFields.wrongChunk.stringValue);
    } catch (e) {
      console.warn('wrongChunk parse failed:', e);
      data.wrongAnswers = [];
    }
  }
  if (rawFields.customQuestionsChunk?.stringValue) {
    try {
      data.customQuestions = JSON.parse(rawFields.customQuestionsChunk.stringValue);
    } catch (e) {
      console.warn('customQuestionsChunk parse failed:', e);
      data.customQuestions = [];
    }
  }
  if (rawFields.resolvedWrongIdsChunk?.stringValue) {
    try {
      data.resolvedWrongIds = JSON.parse(rawFields.resolvedWrongIdsChunk.stringValue);
    } catch (e) {
      console.warn('resolvedWrongIdsChunk parse failed:', e);
      data.resolvedWrongIds = {};
    }
  }
  if (rawFields.updatedAt?.stringValue) {
    data.updatedAt = rawFields.updatedAt.stringValue;
  }

  // ② 旧形式（mapValue / arrayValue）のフォールバック復元
  for (const [k, v] of Object.entries(rawFields)) {
    if (
      !['historyChunk', 'wrongChunk', 'customQuestionsChunk', 'resolvedWrongIdsChunk', 'formatVersion'].includes(k)
    ) {
      if (data[k] === undefined) {
        data[k] = fromFirestoreValue(v);
      }
    }
  }

  return data;
}

/**
 * クラウド（Firestore）へ最新データを安全・軽量に保存
 * - 1MB制限（HTTP 400）を回避するため、RESTメタデータのオーバーヘッドがないJSON文字列形式で保存
 */
export async function saveCloudData(payload) {
  const url = `${FIRESTORE_BASE_URL}/${DOC_NAME}?key=${FIREBASE_CONFIG.apiKey}`;

  // 1. 各データを徹底軽量化
  const cleanHistory = sanitizeHistoryForCloud(payload.history || []);
  const cleanWrongs = sanitizeWrongAnswersForCloud(payload.wrongAnswers || []);
  const cleanCustom = payload.customQuestions || [];
  const cleanResolved = payload.resolvedWrongIds || {};
  const updatedAt = payload.updatedAt || new Date().toISOString();

  // 2. Firestore REST APIのオーバーヘッド（2.5〜3.5倍膨張）をゼロにするため、
  //    各コレクションをクリーンなJSON文字列として格納
  const fields = {
    updatedAt: { stringValue: updatedAt },
    formatVersion: { integerValue: '2' },
    historyChunk: { stringValue: JSON.stringify(cleanHistory) },
    wrongChunk: { stringValue: JSON.stringify(cleanWrongs) },
    customQuestionsChunk: { stringValue: JSON.stringify(cleanCustom) },
    resolvedWrongIdsChunk: { stringValue: JSON.stringify(cleanResolved) },
    // 旧フィールドの残骸を空にして消去（容量解放）
    history: { arrayValue: { values: [] } },
    wrongAnswers: { arrayValue: { values: [] } },
    snapshots: { arrayValue: { values: [] } },
  };

  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Firestore保存エラー (${res.status}): ${errText}`);
  }
  return await res.json();
}
