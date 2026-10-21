import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuizCard from '../components/QuizCard';
import ResultCard from '../components/ResultCard';
import {
  saveHistory,
  saveWrongAnswer,
  removeWrongAnswer,
  getWrongAnswers,
  getAllQuestions,
  getSettings,
} from '../utils/storage';
import { gradeAnswer } from '../utils/gradingEngine';
import { DIFFICULTY_LABELS, QUESTION_TYPE_LABELS } from '../utils/advisorEngine';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, ...filters } = location.state || { mode: 'all' };

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gradeResult, setGradeResult] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    const settings = getSettings();
    const allQuestions = getAllQuestions();
    let pool = [];

    if (mode === 'review') {
      pool = getWrongAnswers() || [];
    } else if (mode === 'custom_list' && Array.isArray(filters.customQuestionsList)) {
      pool = filters.customQuestionsList;
    } else {
      pool = [...allQuestions];
    }

    let filtered = [...pool];

    // 単元名の比較用正規化（"05. 運動と力…" → "運動と力…"）
    const normSub = (s) =>
      String(s || '')
        .replace(/^\s*\d+\s*[.．、]\s*/, '')
        .trim();

    // ① 教科フィルター (理科 / 社会)
    if (filters.subject && filters.subject !== 'all') {
      filtered = filtered.filter((q) => q.subject === filters.subject);
    }

    // ② 分野・カテゴリフィルター (物理 / 化学 / 生物 / 地学 / 歴史 / 地理)
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter((q) => q.category === filters.category);
    }

    // ③ 単元・サブカテゴリフィルター（番号プレフィックスの有無を吸収して完全一致）
    if (filters.subCategory && filters.subCategory !== 'all') {
      const targetSub = normSub(filters.subCategory);
      filtered = filtered.filter((q) => normSub(q.subCategory) === targetSub);
    }

    // ④ 難易度フィルター
    if (filters.difficulty && filters.difficulty !== 'all') {
      filtered = filtered.filter((q) => q.difficulty === filters.difficulty);
    }

    // ⑤ 問題形式フィルター
    if (filters.questionType && filters.questionType !== 'all') {
      filtered =
        filters.questionType === 'non_choice'
          ? filtered.filter((q) => q.questionType !== 'choice')
          : filtered.filter((q) => q.questionType === filters.questionType);
    }
    // ※条件に合う問題が0問の場合は、別教科・別分野の問題を混ぜず「条件に合う問題がありません」を表示する

    const limit = filters.limit || 10;
    const shuffled = [...filtered]
      .sort(() => Math.random() - 0.5)
      .slice(0, limit)
      .map((q) => {
        if (q.questionType === 'choice' && settings.shuffleOptions && Array.isArray(q.options)) {
          return {
            ...q,
            options: [...q.options].sort(() => Math.random() - 0.5),
          };
        }
        return q;
      });

    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setQuizResults([]);
    setShowResult(false);
    setFinished(false);
    setLoading(false);
  }, [mode, JSON.stringify(filters)]);

  const handleAnswer = (userResponse) => {
    const settings = getSettings();
    const currentQuestion = questions[currentIndex];
    const graded = gradeAnswer(currentQuestion, userResponse, {
      strictKanji: settings.strictKanji,
    });

    const entry = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      subject: currentQuestion.subject,
      category: currentQuestion.category,
      subCategory: currentQuestion.subCategory,
      difficulty: currentQuestion.difficulty || 'standard',
      questionType: currentQuestion.questionType || 'choice',
      knowledgeTag: currentQuestion.knowledgeTag || '',
      userAnswer: graded.userAnswer,
      correctAns: currentQuestion.answer,
      isCorrect: graded.isCorrect,
      scoreRatio: graded.scoreRatio,
    };

    setQuizResults((prev) => [...prev, entry]);

    if (graded.isCorrect) {
      setScore((prev) => prev + 1);
      removeWrongAnswer(currentQuestion.id);
    } else {
      saveWrongAnswer(currentQuestion, graded.userAnswer);
    }

    setGradeResult(graded);
    setShowResult(true);
  };

  // 記述問題・語句問題で「別表現で正解」として自己採点補正した場合
  const handleOverrideCorrect = () => {
    const currentQuestion = questions[currentIndex];
    setScore((prev) => prev + 1);
    removeWrongAnswer(currentQuestion.id);

    setQuizResults((prev) => {
      const updated = [...prev];
      if (updated.length > 0) {
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          isCorrect: true,
          scoreRatio: 1,
        };
      }
      return updated;
    });

    setGradeResult((prev) => ({
      ...prev,
      isCorrect: true,
      statusLabel: '正解！（自己採点補正）',
      feedbackMessage: '自分の言葉で正しく説明できています！この調子で進めましょう。',
    }));
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setShowResult(false);
      setGradeResult(null);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const totalQuestions = questions.length;
    saveHistory({
      mode,
      filters,
      score,
      total: totalQuestions,
      results: quizResults,
      timestamp: new Date().toISOString(),
    });
    setFinished(true);
  };

  const retryWrongInSession = () => {
    const wrongIds = new Set(quizResults.filter((r) => !r.isCorrect).map((r) => r.questionId));
    const wrongQuestions = questions.filter((q) => wrongIds.has(q.id));
    if (wrongQuestions.length === 0) return;

    navigate('/quiz', {
      state: {
        mode: 'custom_list',
        customQuestionsList: wrongQuestions,
        limit: wrongQuestions.length,
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
          <div className="text-5xl mb-4">📭</div>
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-3">
            条件に合う問題がありません
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            {mode === 'review'
              ? '復習リストにある問題はありません！すべてクリアしています！'
              : '選択中の「難易度」や「出題形式」のフィルターを「すべて」に戻すか、AI作問スタジオで新しい問題を追加してください。'}
          </p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition"
            >
              ホームに戻る
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition"
            >
              ✨ AI作問スタジオで問題を作る
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const wrongInSessionCount = quizResults.filter((r) => !r.isCorrect).length;

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-900 p-4 animate-fade-in">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-3xl w-full">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-6">
            テスト結果発表
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative w-40 h-40 flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {score}
                  <span className="text-xl text-gray-400">/{questions.length}</span>
                </span>
                <span className="text-xs font-bold text-gray-500 mt-1">
                  正答率 {percentage}%
                </span>
              </div>
              <svg className="transform -rotate-90 w-40 h-40">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 70}
                  strokeDashoffset={2 * Math.PI * 70 * (1 - percentage / 100)}
                  className="text-indigo-600 transition-all duration-700 ease-out"
                />
              </svg>
            </div>

            <div className="text-center md:text-left space-y-2">
              <div className="text-xl font-extrabold text-gray-800 dark:text-gray-100">
                {percentage === 100
                  ? '🏆 パーフェクト達成！完璧に理解できています！'
                  : percentage >= 80
                    ? '🌟 素晴らしい成績です！次はさらに上の難易度や記述にも挑戦しましょう！'
                    : '💪 ナイスファイト！間違えた問題を今すぐ確認すると記憶に定着します！'}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                間違えた問題は自動的に「弱点復習リスト」と「学習アドバイス診断」に反映されました。
              </p>
            </div>
          </div>

          {/* Session Question Review Table */}
          <div className="mb-8">
            <h3 className="text-sm font-extrabold text-gray-500 dark:text-gray-400 uppercase mb-3">
              📋 今回の解答振り返り
            </h3>
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              {quizResults.map((r, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 ${
                    r.isCorrect
                      ? 'bg-emerald-50/50 border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800'
                      : 'bg-rose-50/60 border-rose-200 dark:bg-rose-900/10 dark:border-rose-800'
                  }`}
                >
                  <div className="space-y-1 text-left">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-sm font-extrabold">
                        {r.isCorrect ? '⭕' : '❌'} 第{idx + 1}問
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-white dark:bg-gray-700 border text-gray-600 dark:text-gray-300 font-bold">
                        {DIFFICULTY_LABELS[r.difficulty] || '標準'} /{' '}
                        {QUESTION_TYPE_LABELS[r.questionType] || '4択'}
                      </span>
                      {r.knowledgeTag && (
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">
                          🏷️ {r.knowledgeTag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                      {r.question}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      あなたの解答: <span className="font-bold">{r.userAnswer}</span> ／ 正解:{' '}
                      <span className="font-bold text-indigo-700 dark:text-indigo-300">
                        {r.correctAns}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {wrongInSessionCount > 0 && (
              <button
                type="button"
                onClick={retryWrongInSession}
                className="py-4 px-4 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-xl shadow transition text-sm"
              >
                🔥 間違えた {wrongInSessionCount} 問をすぐ解き直す
              </button>
            )}
            <button
              type="button"
              onClick={() => navigate('/history')}
              className="py-4 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-extrabold rounded-xl border border-indigo-200 transition text-sm"
            >
              📊 学習アドバイスを見る
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className={`py-4 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold rounded-xl shadow hover:opacity-95 transition text-sm ${
                wrongInSessionCount === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              🏠 ホームに戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleQuit = () => {
    if (window.confirm('テストを中断してホームに戻りますか？\n（ここまでの記録は保存されません）')) {
      navigate('/');
    }
  };

  const currentQuestion = questions[currentIndex];
  const progressPercentage = Math.round((currentIndex / questions.length) * 100);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mb-4 flex justify-between items-center text-gray-600 dark:text-gray-300 font-bold">
        <button
          type="button"
          onClick={handleQuit}
          className="text-xs md:text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3.5 py-1.5 hover:bg-gray-100 transition shadow-sm"
        >
          ← 中断して戻る
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-extrabold">
            現在スコア: {score}点
          </span>
          <span className="text-sm font-extrabold">
            第 {currentIndex + 1} / {questions.length} 問
          </span>
        </div>
      </div>

      <div className="w-full max-w-2xl mb-6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
        <div
          className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {showResult && gradeResult ? (
        <ResultCard
          gradeResult={gradeResult}
          questionData={currentQuestion}
          onNext={handleNext}
          onOverrideCorrect={handleOverrideCorrect}
        />
      ) : (
        <QuizCard questionData={currentQuestion} onAnswer={handleAnswer} />
      )}
    </div>
  );
};

export default QuizPage;
