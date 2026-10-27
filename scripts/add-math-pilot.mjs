import fs from "fs";
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
