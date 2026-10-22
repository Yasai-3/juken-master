import fs from 'fs';
import path from 'path';

/**
 * 理科 応用問題パック（adv_*.json）をアプリ内蔵問題 sampleQuiz.json に組み込むスクリプト
 * - 何度実行しても同じ結果になるよう、既存の sci_adv_ 問題をいったん取り除いてから追加する
 * - 形式チェックに失敗した問題は組み込まずに一覧表示する
 *
 * 使い方: node scripts/merge-advanced-packs.mjs
 */

const sciencePacksDir = path.resolve('src/data/science_packs');
const sampleQuizPath = path.resolve('src/data/sampleQuiz.json');

const UNITS = {
  物理: [
    '01. 光と音の性質（屈折・凸レンズ・音の伝わり方）',
    '02. 電流と回路・オームの法則・電力と熱量',
    '03. 静電気・電流と磁界・電磁誘導・放射線',
    '04. 力のつり合い・水圧と浮力・力の合成と分解',
    '05. 運動と力・仕事と力学的エネルギー・熱の伝わり方',
  ],
  化学: [
    '01. 実験の基本操作・有機物と無機物・金属・密度',
    '02. 気体の発生と性質・熱膨張と比熱',
    '03. 水溶液の性質・溶解度と再結晶・濃度計算',
    '04. 物質の状態変化・融点と沸点・蒸留',
    '05. 熱分解と電気分解・原子と分子・化合',
    '06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則',
    '07. 水溶液とイオン・電池・酸とアルカリ・中和と塩',
    '08. プラスチックと繊維・環境・化学実験データ計算',
  ],
  生物: [
    '01. 身近な自然の観察・被子植物',
    '02. 裸子植物・シダ・コケ・植物の分類',
    '03. 動物の分類と生活・からだのつくり',
    '04. 顕微鏡・細胞・水中の小さな生物',
    '05. 植物のつくりとはたらき（光合成・呼吸・蒸散）',
    '06. 人体①（消化・吸収・呼吸・排出・血液循環）',
    '07. 人体②（感覚・神経・脳・骨格と筋肉）',
    '08. 細胞分裂・生殖・発生・遺伝',
    '09. 生物の進化と歴史・地質時代',
  ],
  地学: [
    '01. 火山の噴火と形・火成岩と鉱物',
    '02. 地震のゆれと発生・プレートの動き',
    '03. 地層のでき方・堆積岩と化石・断層としゅう曲',
    '04. 気象観測・気圧・湿度と雲のでき方',
    '05. 前線と天気の変化・日本の四季と気団・台風と防災',
    '06. 太陽と星の日周運動・年周運動・四季の星座',
    '07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星',
    '08. 恒星の一生・銀河系と宇宙の広がり・宇宙の進化',
  ],
};

export const validateQuestion = (q) => {
  const errors = [];
  if (!q.id || !String(q.id).startsWith('sci_adv_')) errors.push('idが不正');
  if (q.subject !== '理科') errors.push('subjectが理科でない');
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
  } else if (q.questionType === 'descriptive') {
    if (!Array.isArray(q.keywords) || q.keywords.length < 1) errors.push('keywordsが空');
  } else {
    errors.push(`questionTypeが不正: ${q.questionType}`);
  }
  return errors;
};

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve('scripts/merge-advanced-packs.mjs');
if (isMain) {
  const files = fs
    .readdirSync(sciencePacksDir)
    .filter((f) => f.startsWith('adv_') && f.endsWith('.json'))
    .sort();

  const existing = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf8'));
  const base = existing.filter((q) => !String(q.id || '').startsWith('sci_adv_'));
  const baseIds = new Set(base.map((q) => q.id));

  const added = [];
  const seen = new Set();
  let rejected = 0;
  for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(sciencePacksDir, file), 'utf8'));
    let ok = 0;
    for (const q of data) {
      const errs = validateQuestion(q);
      if (seen.has(q.id) || baseIds.has(q.id)) errs.push('id重複');
      if (errs.length) {
        rejected++;
        console.log(`  ✗ ${file} ${q.id}: ${errs.join(' / ')}`);
        continue;
      }
      seen.add(q.id);
      added.push(q);
      ok++;
    }
    console.log(`✓ ${file}: ${ok}問を組み込み`);
  }

  fs.writeFileSync(sampleQuizPath, JSON.stringify([...base, ...added], null, 2), 'utf8');
  console.log('========================================');
  console.log(`応用パック追加: ${added.length}問（除外 ${rejected}問）`);
  console.log(`アプリ内蔵総問題数: ${base.length + added.length}問`);
}
