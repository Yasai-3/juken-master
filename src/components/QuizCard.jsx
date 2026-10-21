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
  } = questionData;

  const [textAnswer, setTextAnswer] = useState('');

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
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {subject && (
            <span className="text-xs font-extrabold tracking-wider text-white bg-white/20 px-3 py-1 rounded-full border border-white/30">
              {subject === '理科' ? '🔬 理科' : '🌏 社会'}
            </span>
          )}
          {category && (
            <span className="text-xs font-bold text-indigo-50 bg-indigo-900/30 px-3 py-1 rounded-full">
              {category}
            </span>
          )}
          {subCategory && (
            <span className="text-xs font-bold text-indigo-50 bg-indigo-900/30 px-3 py-1 rounded-full">
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
          <span className="text-xs font-bold bg-white text-indigo-700 px-2.5 py-1 rounded-full shadow-sm">
            {QUESTION_TYPE_LABELS[questionType] || '4択選択'}
          </span>
        </div>
      </div>

      {/* Knowledge Tag Subbar */}
      {knowledgeTag && (
        <div className="bg-indigo-50 dark:bg-gray-700/60 px-6 py-2 text-xs font-medium text-indigo-700 dark:text-indigo-300 border-b border-indigo-100 dark:border-gray-700 flex items-center gap-1.5">
          <span>🏷️ テーマ:</span>
          <span className="font-bold">{knowledgeTag}</span>
        </div>
      )}

      {/* Question Body */}
      <div className="p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-relaxed whitespace-pre-wrap">
          {question}
        </h2>

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
