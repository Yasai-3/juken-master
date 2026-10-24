import fs from 'fs';
import path from 'path';

/**
 * 国語 問題パック（jp_*.json）をアプリ内蔵問題 sampleQuiz.json に組み込むスクリプト
 * - 既存の kokugo_ 問題をいったん取り除いてから追加する
 * - 形式チェックに失敗した問題は組み込まずに一覧表示する
 *
 * 使い方: node scripts/merge-japanese-packs.mjs
 */

const japanesePacksDir = path.resolve('src/data/japanese_packs');
const sampleQuizPath = path.resolve('src/data/sampleQuiz.json');

export const UNITS = {
  ことわざ: [
    '01. 人間・生き方・教訓のことわざ',
    '02. 人間関係・協力・争いのことわざ',
    '03. 自然・動物・天候のことわざ',
    '04. 努力・油断・失敗のことわざ',
    '05. 幸福・災い・運命のことわざ',
  ],
  慣用句: [
    '01. からだ（頭・顔・目・耳・鼻・口・舌）の慣用句',
    '02. からだ（手・腕・足・胸・腹・背・腰）の慣用句',
    '03. からだ（心・気・腹・肝・骨）の慣用句',
    '04. 動物・植物・自然を使った慣用句',
    '05. 道具・生活・日常の慣用句',
  ],
  故事成語: [
    '01. 中国の古典・歴史に由来する故事成語①（思想・処世）',
    '02. 中国の古典・歴史に由来する故事成語②（戦い・勝敗）',
    '03. 中国の古典・歴史に由来する故事成語③（学問・努力・才能）',
    '04. 中国の古典・歴史に由来する故事成語④（矛盾・失敗・警告）',
  ],
  四字熟語: [
    '01. 人物の性格・態度・行動を表す四字熟語',
    '02. 情景・自然・状態を表す四字熟語',
    '03. 努力・志・学問を表す四字熟語',
    '04. 数字や対比を含む四字熟語',
    '05. 人間関係・社会・教訓を表す四字熟語',
  ],
  和語: [
    '01. 様子・状態を表す和語',
    '02. 心情・感情を表す和語',
    '03. 行動・動作を表す和語',
    '04. 慣用的な和語・重ね言葉',
  ],
  '季語・外来語': [
    '01. 春の季語（時候・天文・地理・生活・行事・動植物）',
    '02. 夏の季語（時候・天文・地理・生活・行事・動植物）',
    '03. 秋の季語（時候・天文・地理・生活・行事・動植物）',
    '04. 冬・新年の季語（時候・天文・地理・生活・行事・動植物）',
    '05. 日常生活・社会・文化の外来語（カタカナ語）',
    '06. 思考・概念・心情・ビジネスの外来語（カタカナ語）',
  ],
  '助数詞・類義語・対義語': [
    '01. 物の数え方（助数詞）',
    '02. 類義語（意味の似た言葉）',
    '03. 対義語（反対の意味の言葉）',
  ],
};

export const validateQuestion = (q) => {
  const errors = [];
  if (!q.id || !String(q.id).startsWith('kokugo_')) errors.push('idが不正');
  if (q.subject !== '国語') errors.push('subjectが国語でない');
  if (!UNITS[q.category]) errors.push(`categoryが不正: ${q.category}`);
  else if (!UNITS[q.category].includes(q.subCategory)) errors.push(`subCategoryが不正: ${q.subCategory}`);
  if (!['basic', 'standard', 'advanced'].includes(q.difficulty)) errors.push('difficultyが不正');
  if (!q.question || !q.answer || !q.explanation) errors.push('問題文・答え・解説のいずれかが空');
  if (q.questionType === 'choice') {
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push('選択肢が4つでない');
    else if (!q.options.includes(q.answer)) errors.push('answerが選択肢にない');
    else if (new Set(q.options).size !== 4) errors.push('選択肢が重複');
  } else if (q.questionType === 'input') {
    if (!Array.isArray(q.acceptableAnswers) || q.acceptableAnswers.length === 0) errors.push('acceptableAnswersが空');
    else if (!q.acceptableAnswers.includes(q.answer)) errors.push('answerがacceptableAnswersに含まれていない');
  } else if (q.questionType === 'descriptive') {
    if (!Array.isArray(q.keywords) || q.keywords.length < 1) errors.push('keywordsが空');
  } else {
    errors.push(`questionTypeが不正: ${q.questionType}`);
  }
  return errors;
};

const isMain = process.argv[1] && (path.resolve(process.argv[1]) === path.resolve('scripts/merge-japanese-packs.mjs') || process.argv[1].endsWith('merge-japanese-packs.mjs'));
if (isMain) {
  if (!fs.existsSync(japanesePacksDir)) {
    console.log('japanese_packs ディレクトリが存在しません。');
    process.exit(1);
  }

  const files = fs
    .readdirSync(japanesePacksDir)
    .filter((f) => f.startsWith('jp_') && f.endsWith('.json'))
    .sort();

  const existing = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf8'));
  const base = existing.filter((q) => !String(q.id || '').startsWith('kokugo_'));
  const baseIds = new Set(base.map((q) => q.id));

  const added = [];
  const seen = new Set();
  let rejected = 0;
  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(japanesePacksDir, file), 'utf8'));
    let ok = 0;
    for (const q of data) {
      const errs = validateQuestion(q);
      if (seen.has(q.id) || baseIds.has(q.id)) errs.push('id重複');
      if (errs.length) {
        rejected++;
        console.log(`  ✗ ${file} ${q.id}: ${errs.join(' / ')}`);
      } else {
        seen.add(q.id);
        added.push(q);
        ok++;
      }
    }
    console.log(`✓ ${file}: ${ok}/${data.length} 問 読込成功`);
  }

  if (rejected > 0) {
    console.error(`\nエラーが ${rejected} 件あるためマージを中断しました。`);
    process.exit(1);
  }

  const merged = [...base, ...added];
  fs.writeFileSync(sampleQuizPath, JSON.stringify(merged, null, 2), 'utf8');
  console.log(`\n🎉 マージ完了！`);
  console.log(`  元々の問題数: ${base.length}`);
  console.log(`  追加した国語問題数: ${added.length}`);
  console.log(`  マージ後の総問題数: ${merged.length}`);
}
