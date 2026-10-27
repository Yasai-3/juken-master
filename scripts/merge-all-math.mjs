import fs from 'fs';
import path from 'path';

import { SPEED_QUESTIONS } from './questions-speed.mjs';
import { NUMBERS_QUESTIONS } from './questions-numbers.mjs';
import { GEOM_RATIO_QUESTIONS } from './questions-geom-ratio.mjs';
import { GEOM_AREA_QUESTIONS } from './questions-geom-area.mjs';

// m_geom_ratio_003 の比率を厳密に調整（2:5に整合）
for (const q of GEOM_RATIO_QUESTIONS) {
  if (q.id === 'm_geom_ratio_003') {
    q.question = '【図形問題】三角形ABCにおいて、辺AB上に点D、辺AC上に点Eがあり、AD : DB = 3 : 4、AE : EC = 3 : 4 です。\n図のように、線分BEと線分CDの交点をPとするとき、三角形PBCの面積と三角形ABC全体の面積の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）';
    q.explanation = `【解法】
直線BEについて、(△PAB) : (△PBC) = AE : EC = 3 : 4
直線CDについて、(△PCA) : (△PBC) = AD : DB = 3 : 4

共通する△PBCを比の [12] とおくと、
△PAB = [9]
△PCA = [9]
△ABC全体の面積 = [12] + [9] + [9] = [30]

したがって、
(△PBCの面積) : (△ABC全体の面積) = 12 : 30 = 2 : 5 となります。`;
  }
}

const ALL_MATH = [
  ...SPEED_QUESTIONS,
  ...NUMBERS_QUESTIONS,
  ...GEOM_RATIO_QUESTIONS,
  ...GEOM_AREA_QUESTIONS
];

console.log(`合計問題数: ${ALL_MATH.length}問`);
console.log(`- 速さ: ${SPEED_QUESTIONS.length}問`);
console.log(`- 数の性質: ${NUMBERS_QUESTIONS.length}問`);
console.log(`- 平面図形の比: ${GEOM_RATIO_QUESTIONS.length}問`);
console.log(`- 平面図形の面積: ${GEOM_AREA_QUESTIONS.length}問`);

// 1. math_pilot_pack.json に保存
const mathPackPath = path.resolve('src/data/math_pilot_pack.json');
fs.writeFileSync(mathPackPath, JSON.stringify(ALL_MATH, null, 2), 'utf8');
console.log(`Saved to ${mathPackPath}`);

// 2. sampleQuiz.json にマージ
const sampleQuizPath = path.resolve('src/data/sampleQuiz.json');
const sampleData = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf8'));
const existingQuestions = sampleData.questions || sampleData;

const mathIds = new Set(ALL_MATH.map(q => q.id));
const filteredExisting = existingQuestions.filter(q => !mathIds.has(q.id));
const updatedQuestions = [...filteredExisting, ...ALL_MATH];

const outputData = Array.isArray(sampleData) ? updatedQuestions : { ...sampleData, questions: updatedQuestions };
fs.writeFileSync(sampleQuizPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`Merged into sampleQuiz.json. 全問題数: ${updatedQuestions.length}`);

// 3. scripts/add-math-pilot.mjs も更新
const addScriptCode = `import fs from "fs";
import path from "path";

import { SPEED_QUESTIONS } from './questions-speed.mjs';
import { NUMBERS_QUESTIONS } from './questions-numbers.mjs';
import { GEOM_RATIO_QUESTIONS } from './questions-geom-ratio.mjs';
import { GEOM_AREA_QUESTIONS } from './questions-geom-area.mjs';

const ALL_MATH = [
  ...SPEED_QUESTIONS,
  ...NUMBERS_QUESTIONS,
  ...GEOM_RATIO_QUESTIONS,
  ...GEOM_AREA_QUESTIONS
];

const mathPackPath = path.resolve("src/data/math_pilot_pack.json");
fs.writeFileSync(mathPackPath, JSON.stringify(ALL_MATH, null, 2), "utf8");

const sampleQuizPath = path.resolve("src/data/sampleQuiz.json");
const sampleData = JSON.parse(fs.readFileSync(sampleQuizPath, "utf8"));
const existingQuestions = sampleData.questions || sampleData;
const mathIds = new Set(ALL_MATH.map(q => q.id));
const filteredExisting = existingQuestions.filter(q => !mathIds.has(q.id));
const updatedQuestions = [...filteredExisting, ...ALL_MATH];
const outputData = Array.isArray(sampleData) ? updatedQuestions : { ...sampleData, questions: updatedQuestions };
fs.writeFileSync(sampleQuizPath, JSON.stringify(outputData, null, 2), "utf8");
console.log("Synced all math questions successfully.");
`;
fs.writeFileSync('scripts/add-math-pilot.mjs', addScriptCode, 'utf8');
console.log('Updated scripts/add-math-pilot.mjs');
