// scripts/validate-and-merge-1200.mjs
// 新規1,200問の厳格バリデーション & sampleQuiz.json へのマージ
import fs from 'fs';
import path from 'path';

// 1. 既存問題の読み込み
const sampleQuizPath = path.resolve('src/data/sampleQuiz.json');
const existingQuiz = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf-8'));
console.log(`Loaded existing sampleQuiz.json: ${existingQuiz.length} questions.`);

// 2. 新規問題の読み込み
import { MATH_GEOMETRY_100 as mathPack1 } from './math-pack-1-geometry.mjs';
import { MATH_WORD_PROBS_100 as mathPack2 } from './math-pack-2-wordprobs.mjs';
import { mathPack3 } from './math-pack-3-numbers-comb.mjs';
import { japanesePack300 } from './japanese-pack-300.mjs';
import { sciencePack300 } from './science-pack-300.mjs';
import { socialPack300 } from './social-pack-300.mjs';

const newQuestions = [
  ...mathPack1,
  ...mathPack2,
  ...mathPack3,
  ...japanesePack300,
  ...sciencePack300,
  ...socialPack300
];

console.log(`Loaded new questions: ${newQuestions.length} questions.`);
console.log(`  - 算数 Pack 1 (図形): ${mathPack1.length}`);
console.log(`  - 算数 Pack 2 (文章題): ${mathPack2.length}`);
console.log(`  - 算数 Pack 3 (数・規則・場合): ${mathPack3.length}`);
console.log(`  - 国語 Pack: ${japanesePack300.length}`);
console.log(`  - 理科 Pack: ${sciencePack300.length}`);
console.log(`  - 社会 Pack: ${socialPack300.length}`);

// バリデーション
const errors = [];
const existingIds = new Set(existingQuiz.map(q => q.id));
const existingQuestions = new Set(existingQuiz.map(q => q.question.trim()));

const newIds = new Set();
const newQuestionsText = new Map();

for (let idx = 0; idx < newQuestions.length; idx++) {
  const q = newQuestions[idx];
  const prefix = `[#${idx + 1} ID:${q.id}]`;

  // 1. ID チェック
  if (!q.id) {
    errors.push(`${prefix} IDが空です。`);
  } else {
    if (existingIds.has(q.id)) {
      errors.push(`${prefix} ID "${q.id}" は既存の問題と重複しています。`);
    }
    if (newIds.has(q.id)) {
      errors.push(`${prefix} ID "${q.id}" は新規問題内で重複しています。`);
    }
    newIds.add(q.id);
  }

  // 2. 問題文チェック
  if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
    errors.push(`${prefix} 問題文が空です。`);
  } else {
    const qText = q.question.trim();
    if (existingQuestions.has(qText)) {
      errors.push(`${prefix} 問題文が既存問題と完全一致しています: "${qText.slice(0, 30)}..."`);
    }
    if (newQuestionsText.has(qText)) {
      // 演習テンプレートなどの一部重複許容か完全ユニークか
      // テンプレート生成で重複していないか確認
      errors.push(`${prefix} 問題文が新規問題内で重複しています（重複先: ${newQuestionsText.get(qText)}）: "${qText.slice(0, 30)}..."`);
    }
    newQuestionsText.set(qText, q.id);

    // 欠落・前提不明ワードチェック
    if (qText.startsWith('として') || qText.startsWith('について、') || qText.startsWith('で、')) {
      errors.push(`${prefix} 問題文が不自然な助詞で始まっています（前提欠落の疑い）: "${qText.slice(0, 20)}"`);
    }
    if (qText.includes('前問の') || qText.includes('前問で') || qText.includes('前問に')) {
      errors.push(`${prefix} 前問参照ワードが含まれています: "${qText}"`);
    }

    // ネタバレタグチェック
    if (/【.*】/.test(qText)) {
      errors.push(`${prefix} 問題文に【〜】のネタバレ・テーマタグが含まれています: "${qText}"`);
    }
  }

  // 3. 形式チェック
  if (q.questionType !== 'choice') {
    errors.push(`${prefix} questionType は 'choice' でなければなりません (現在: ${q.questionType})`);
  }

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    errors.push(`${prefix} options は4つの配列でなければなりません (現在: ${q.options ? q.options.length : 'null'})`);
  } else {
    // 重複チェック
    const optSet = new Set(q.options);
    if (optSet.size !== 4) {
      errors.push(`${prefix} options に重複する選択肢があります: ${JSON.stringify(q.options)}`);
    }
    // 空文字チェック
    for (const opt of q.options) {
      if (!opt || typeof opt !== 'string' || opt.trim().length === 0) {
        errors.push(`${prefix} 空の選択肢が含まれています: ${JSON.stringify(q.options)}`);
      }
    }
    // 正解の一致チェック
    if (!q.options.includes(q.answer)) {
      errors.push(`${prefix} answer "${q.answer}" が options に含まれていません: ${JSON.stringify(q.options)}`);
    }
  }

  // acceptableAnswers チェック
  if (!Array.isArray(q.acceptableAnswers) || !q.acceptableAnswers.includes(q.answer)) {
    errors.push(`${prefix} acceptableAnswers に answer が含まれていません。`);
  }

  // 解説チェック
  if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length === 0) {
    errors.push(`${prefix} 解説（explanation）が空です。`);
  }

  // 図形SVGチェック
  if (q.figureSvg) {
    if (!q.figureSvg.includes('<svg') || !q.figureSvg.includes('</svg>')) {
      errors.push(`${prefix} figureSvg の形式が不正です（<svg ... </svg> を含んでいません）。`);
    }
  }
}

console.log(`\n=== バリデーション結果 ===`);
if (errors.length > 0) {
  console.error(`❌ ${errors.length} 件のエラーが見つかりました:`);
  errors.slice(0, 30).forEach(err => console.error(err));
  if (errors.length > 30) {
    console.error(`... 他 ${errors.length - 30} 件のエラー`);
  }
  process.exit(1);
}

console.log(`✅ すべての検証項目をパスしました！（エラー: 0件）`);

// マージとバックアップ
const backupPath = path.resolve('src/data/sampleQuiz.backup.json');
fs.writeFileSync(backupPath, JSON.stringify(existingQuiz, null, 2), 'utf-8');
console.log(`💾 既存データをバックアップしました: ${backupPath}`);

const mergedQuiz = [...existingQuiz, ...newQuestions];
fs.writeFileSync(sampleQuizPath, JSON.stringify(mergedQuiz, null, 2), 'utf-8');
console.log(`🎉 sampleQuiz.json にマージしました！合計問題数: ${mergedQuiz.length} 問 (既存: ${existingQuiz.length} + 新規: ${newQuestions.length})`);
