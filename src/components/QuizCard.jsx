import React, { useState, useEffect } from 'react';
import { DIFFICULTY_LABELS, QUESTION_TYPE_LABELS } from '../utils/advisorEngine';

const DIFFICULTY_STYLES = {
  basic: 'bg-emerald-500/25 text-emerald-50 border-emerald-300/40',
  standard: 'bg-amber-500/25 text-amber-50 border-amber-300/40',
  advanced: 'bg-rose-500/30 text-rose-50 border-rose-300/40',
};

const DIFFICULTY_STARS = {
  basic: '★☆☆',
  standard: '★★☆',
  advanced: '★★★',
};

const QuizCard = ({ questionData, onAnswer }) => {
  const {
    question,
    options = [],
    subject,
    category,
    subCategory,
    difficulty = 'standard',
    questionType = 'choice',
    knowledgeTag,
    keywords = [],
    figureSvg,
  } = questionData;

  const [textAnswer, setTextAnswer] = useState('');

  const displaySubject =
    subject ||
    (['速さ', '数の性質', '平面図形の比', '平面図形の面積', '平面図形', '立体図形', '割合と比', '規則性', '場合の数'].includes(category)
      ? '算数'
      : ['ことわざ', '慣用句', '故事成語', '四字熟語', '和語', '季語・外来語', '助数詞・類義語・対義語'].includes(category)
        ? '国語'
        : ['歴史', '地理', '公民'].includes(category)
          ? '社会'
          : '理科');

  const subjectLabel =
    displaySubject === '算数'
      ? '📐 算数'
      : displaySubject === '国語'
        ? '📖 国語'
        : displaySubject === '理科'
          ? '🔬 理科'
          : '🌏 社会';

  const headerGradient =
    displaySubject === '算数'
      ? 'from-purple-600 via-indigo-600 to-violet-700'
      : displaySubject === '国語'
        ? 'from-emerald-600 to-teal-700'
        : displaySubject === '理科'
          ? 'from-blue-600 to-indigo-700'
          : 'from-amber-600 to-orange-700';

  const subbarColor =
    displaySubject === '算数'
      ? 'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-100 dark:border-purple-900/60'
      : displaySubject === '国語'
        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-100 dark:border-emerald-900/60'
        : displaySubject === '理科'
          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-100 dark:border-blue-900/60'
          : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-100 dark:border-amber-900/60';

  useEffect(() => {
    setTextAnswer('');
  }, [questionData?.id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAnswer(textAnswer);
  };

  return (
    <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 animate-fade-in">
      {/* Header Badges */}
      <div className={`bg-gradient-to-r ${headerGradient} p-4 flex flex-wrap items-center justify-between gap-2`}>
        <div className="flex flex-wrap items-center gap-2">
          {displaySubject && (
            <span className="text-xs font-extrabold tracking-wider text-white bg-white/20 px-3 py-1 rounded-full border border-white/30">
              {subjectLabel}
            </span>
          )}
          {category && (
            <span className="text-xs font-bold text-white/90 bg-black/20 px-3 py-1 rounded-full">
              {category}
            </span>
          )}
          {subCategory && (
            <span className="text-xs font-bold text-white/90 bg-black/20 px-3 py-1 rounded-full">
              {subCategory}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
              DIFFICULTY_STYLES[difficulty] || DIFFICULTY_STYLES.standard
            }`}
          >
            {DIFFICULTY_STARS[difficulty] || '★★☆'} {DIFFICULTY_LABELS[difficulty] || '標準'}
          </span>
          <span className="text-xs font-bold bg-white text-gray-800 px-2.5 py-1 rounded-full shadow-sm">
            {QUESTION_TYPE_LABELS[questionType] || '4択選択'}
          </span>
        </div>
      </div>

      {/* Knowledge Tag Subbar */}
      {knowledgeTag && (
        <div className={`${subbarColor} px-6 py-2 text-xs font-medium border-b flex items-center gap-1.5`}>
          <span>🏷️ テーマ:</span>
          <span className="font-bold">{knowledgeTag}</span>
        </div>
      )}

      {/* Question Body */}
      <div className="p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-relaxed whitespace-pre-wrap">
          {question}
        </h2>

        {/* 図形SVGのインライン表示（算数の図形・理科の実験図など） */}
        {figureSvg && (
          <div className="mb-6 flex justify-center bg-slate-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-200/80 dark:border-gray-700 shadow-inner">
            <div
              className="max-w-sm w-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-60"
              dangerouslySetInnerHTML={{ __html: figureSvg }}
            />
          </div>
        )}

        {/* 1. 4択選択問題 */}
        {questionType === 'choice' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onAnswer(option)}
                className="group relative flex items-center p-4 text-left border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-400 bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 active:scale-[0.99] transition-all"
              >
                <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 font-bold group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                  {index + 1}
                </span>
                <span className="ml-3.5 text-base md:text-lg text-gray-800 dark:text-gray-100 font-bold group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                  {option}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* 2. 一問一答・語句入力問題 */}
        {questionType === 'input' && (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
                ✍️ 答えの語句を入力してください（Enterキーでも送信できます）
              </label>
              <input
                type="text"
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="ここに答えを入力..."
                autoFocus
                className="w-full p-4 text-lg font-bold border-2 border-indigo-200 dark:border-gray-600 rounded-xl focus:border-indigo-600 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-4 px-6 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-bold rounded-xl shadow-md transition text-lg"
              >
                回答して採点する
              </button>
              <button
                type="button"
                onClick={() => onAnswer('')}
                className="py-4 px-5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 font-bold rounded-xl transition text-sm"
              >
                わからない（解説を見る）
              </button>
            </div>
          </form>
        )}

        {/* 3. 短文記述問題 */}
        {questionType === 'descriptive' && (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
                <span>📝 理由・しくみを自分の言葉で説明しましょう</span>
                {keywords.length > 0 && (
                  <span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-0.5 rounded-full">
                    採点キーワード目安: {keywords.length}個
                  </span>
                )}
              </div>
              <textarea
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="例：〜によって…になるから。"
                rows={3}
                autoFocus
                className="w-full p-4 text-base md:text-lg font-medium border-2 border-indigo-200 dark:border-gray-600 rounded-xl focus:border-indigo-600 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white leading-relaxed"
              />
              <div className="text-right text-xs text-gray-400 mt-1">
                現在 {textAnswer.length} 文字
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-md transition text-lg"
              >
                記述を採点する
              </button>
              <button
                type="button"
                onClick={() => onAnswer('')}
                className="py-4 px-5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 font-bold rounded-xl transition text-sm"
              >
                模範解答を見る
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
