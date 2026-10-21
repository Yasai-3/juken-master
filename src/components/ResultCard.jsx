import React from 'react';

const ResultCard = ({
  gradeResult,
  questionData,
  onNext,
  onOverrideCorrect,
}) => {
  const {
    isCorrect,
    isAlmostCorrect,
    statusLabel,
    feedbackMessage,
    matchedKeywords = [],
    missingKeywords = [],
    userAnswer,
    correctAns,
    canSelfOverride,
  } = gradeResult;

  const borderColor = isCorrect
    ? 'border-emerald-500'
    : isAlmostCorrect
      ? 'border-amber-500'
      : 'border-rose-500';

  const statusTextColor = isCorrect
    ? 'text-emerald-600 dark:text-emerald-400'
    : isAlmostCorrect
      ? 'text-amber-600 dark:text-amber-400'
      : 'text-rose-600 dark:text-rose-400';

  return (
    <div
      className={`w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden border-t-8 ${borderColor} bg-white dark:bg-gray-800 animate-fade-in-up`}
    >
      <div className="p-6 md:p-8">
        {/* Icon & Status Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 text-3xl font-extrabold ${
              isCorrect
                ? 'bg-emerald-100 text-emerald-600'
                : isAlmostCorrect
                  ? 'bg-amber-100 text-amber-600'
                  : 'bg-rose-100 text-rose-600'
            }`}
          >
            {isCorrect ? '⭕' : isAlmostCorrect ? '🔺' : '❌'}
          </div>
          <h2 className={`text-2xl md:text-3xl font-extrabold ${statusTextColor}`}>
            {statusLabel}
          </h2>
          {feedbackMessage && (
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 font-medium">
              {feedbackMessage}
            </p>
          )}
        </div>

        {/* User Answer & Model Answer Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-700">
            <div className="text-xs font-bold text-gray-400 mb-1">あなたの解答</div>
            <div className="text-base font-bold text-gray-800 dark:text-gray-100 break-words">
              {userAnswer || '（未回答）'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
              正解・模範解答
            </div>
            <div className="text-base font-extrabold text-indigo-900 dark:text-indigo-100 break-words">
              {correctAns}
            </div>
          </div>
        </div>

        {/* Keyword Breakdown for Descriptive Questions */}
        {(matchedKeywords.length > 0 || missingKeywords.length > 0) &&
          questionData?.questionType === 'descriptive' && (
            <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-gray-700/30 border border-slate-200 dark:border-gray-700">
              <div className="text-xs font-bold text-gray-500 dark:text-gray-300 mb-2">
                🔍 記述キーワード採点チェック
              </div>
              <div className="flex flex-wrap gap-2">
                {matchedKeywords.map((kw, i) => (
                  <span
                    key={`m_${i}`}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300"
                  >
                    ✓ 含まれている: {kw}
                  </span>
                ))}
                {missingKeywords.map((kw, i) => (
                  <span
                    key={`u_${i}`}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300"
                  >
                    × 不足キーワード: {kw}
                  </span>
                ))}
              </div>
            </div>
          )}

        {/* Explanation Box */}
        <div className="bg-amber-50/60 dark:bg-gray-700/50 border border-amber-200/80 dark:border-gray-600 rounded-xl p-5 mb-6 text-left">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-extrabold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              💡 解説・覚えておくべきポイント
            </h3>
            {questionData?.knowledgeTag && (
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 bg-white dark:bg-gray-800 px-2.5 py-0.5 rounded-full border border-indigo-100 dark:border-gray-600">
                {questionData.knowledgeTag}
              </span>
            )}
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
            {questionData?.explanation || '解説データがありません。'}
          </p>
        </div>

        {/* Self-grading override for descriptive / input */}
        {(canSelfOverride || questionData?.questionType !== 'choice') && !isCorrect && onOverrideCorrect && (
          <div className="mb-4 text-center">
            <button
              type="button"
              onClick={onOverrideCorrect}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline py-1.5 px-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30"
            >
              🙋 別の言い回し・表記で合っているため「正解」として記録する
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 text-white font-bold rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] transition-all bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-lg"
        >
          次の問題へ進む →
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
