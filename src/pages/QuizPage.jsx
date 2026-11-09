import React, { useState, useEffect, useRef } from 'react';
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
  saveAchievementTestRecord,
} from '../utils/storage';
import { gradeAnswer } from '../utils/gradingEngine';
import { DIFFICULTY_LABELS, QUESTION_TYPE_LABELS } from '../utils/advisorEngine';
import {
  generateAchievementTestQuestions,
  calculateAchievementLevel,
  calculateTimeLevel,
  calculateDualAxisEvaluation,
  getComprehensiveTimeLimit,
  analyzeAchievementResults,
  ACHIEVEMENT_CONFIG,
} from '../utils/achievementEngine';

const formatSeconds = (sec) => {
  const s = Math.max(0, Math.floor(sec || 0));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m < 10 ? '0' : ''}${m}:${rem < 10 ? '0' : ''}${rem}`;
};

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
  const [achievementReport, setAchievementReport] = useState(null);

  // ★ タイムクロック & タイムオーバー管理用ステート
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [timeLimitSeconds, setTimeLimitSeconds] = useState(0);
  const [isTimeOver, setIsTimeOver] = useState(false);

  // ★ 総合実力テスト（制限時間・タイムオーバー付き）の厳格な判定:
  // ホーム画面の「🌟 総合実力テスト」から明示的に開始された場合のみ発動。
  // 普通に教科・分野の項目から選んだ「全体から出題（総合）」や通常演習では絶対に発動させない。
  const isComprehensiveTimed =
    (mode === 'comprehensive' || (mode === 'combined' && filters.isTimed === true)) &&
    !filters.category &&
    !filters.subCategory;

  // タイマーのクロージャ問題を防ぐ最新状態保持用Ref
  const stateRef = useRef({
    questions: [],
    currentIndex: 0,
    score: 0,
    quizResults: [],
    elapsedSeconds: 0,
    timeLimitSeconds: 0,
    isComprehensiveTimed: false,
  });

  useEffect(() => {
    stateRef.current = {
      questions,
      currentIndex,
      score,
      quizResults,
      elapsedSeconds,
      timeLimitSeconds,
      isComprehensiveTimed,
    };
  }, [questions, currentIndex, score, quizResults, elapsedSeconds, timeLimitSeconds, isComprehensiveTimed]);

  useEffect(() => {
    const settings = getSettings();
    const allQuestions = getAllQuestions();

    // ★ 定期 学習到達度テストモード（分野均等・標準〜応用中心・教科別問題数）
    if (mode === 'achievement') {
      const achievementQuestions = generateAchievementTestQuestions(
        allQuestions,
        filters.subject,
        settings
      );
      setQuestions(achievementQuestions);
      setCurrentIndex(0);
      setScore(0);
      setQuizResults([]);
      setAchievementReport(null);
      setShowResult(false);
      setFinished(false);
      setElapsedSeconds(0);
      setRemainingSeconds(0);
      setTimeLimitSeconds(0);
      setIsTimeOver(false);
      setLoading(false);
      return;
    }

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

    // ① 教科フィルター (理科 / 社会 / 算数 / 国語)
    if (filters.subject && filters.subject !== 'all') {
      filtered = filtered.filter((q) => q.subject === filters.subject);
    }

    // ② 分野・カテゴリフィルター
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
    setElapsedSeconds(0);
    setIsTimeOver(false);

    // ★ 総合実力テストモード（制限時間付き）の場合のみ制限時間を計算・セット
    if (isComprehensiveTimed) {
      const limitSec = getComprehensiveTimeLimit(filters.subject || '理科', limit);
      setTimeLimitSeconds(limitSec);
      setRemainingSeconds(limitSec);
    } else {
      setTimeLimitSeconds(0);
      setRemainingSeconds(0);
    }

    setLoading(false);
  }, [mode, JSON.stringify(filters), isComprehensiveTimed]);

  // タイムオーバー発生時の強制終了処理
  const handleTimeOver = () => {
    setIsTimeOver(true);
    const {
      questions: curQuestions,
      currentIndex: curIdx,
      score: curScore,
      quizResults: curResults,
      timeLimitSeconds: tLimit,
    } = stateRef.current;

    // 残りの未回答問題を不正解として記録
    const answeredIds = new Set(curResults.map((r) => r.questionId));
    const unansweredEntries = [];

    for (let i = curIdx; i < curQuestions.length; i++) {
      const q = curQuestions[i];
      if (!answeredIds.has(q.id)) {
        unansweredEntries.push({
          questionId: q.id,
          question: q.question,
          subject: q.subject,
          category: q.category,
          subCategory: q.subCategory,
          difficulty: q.difficulty || 'standard',
          questionType: q.questionType || 'choice',
          knowledgeTag: q.knowledgeTag || '',
          userAnswer: '（時間切れ・未回答）',
          correctAns: q.answer,
          isCorrect: false,
          scoreRatio: 0,
        });
        saveWrongAnswer(q, '（時間切れ・未回答）');
      }
    }

    const finalResults = [...curResults, ...unansweredEntries];
    setQuizResults(finalResults);

    saveHistory({
      mode: 'comprehensive',
      filters,
      score: curScore,
      total: curQuestions.length,
      results: finalResults,
      elapsedSeconds: tLimit,
      timeLimitSeconds: tLimit,
      isTimeOver: true,
      timestamp: new Date().toISOString(),
    });

    setFinished(true);
  };

  // ⏱️ タイムクロック（ストップウォッチ & カウントダウン）インターバル制御
  useEffect(() => {
    // 総合実力テスト（制限時間あり）または到達度テストの場合のみタイマーを作動
    // 通常の教科・分野・単元演習ではタイマーは作動させない
    const shouldRunTimer = isComprehensiveTimed || mode === 'achievement';
    if (!shouldRunTimer || loading || finished || isTimeOver || showResult) {
      return;
    }

    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);

      if (isComprehensiveTimed) {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeOver();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, finished, isTimeOver, showResult, mode, isComprehensiveTimed]);

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

  const finishQuiz = (forcedTimeOver = false) => {
    const totalQuestions = questions.length;
    let achievementData = null;

    if (mode === 'achievement' && filters.subject) {
      const levelInfo = calculateAchievementLevel(score, totalQuestions);
      const timeInfo = calculateTimeLevel(elapsedSeconds);
      const dualAxisInfo = calculateDualAxisEvaluation(levelInfo.rank, timeInfo.rank);
      const analysis = analyzeAchievementResults(questions, quizResults);

      achievementData = {
        subject: filters.subject,
        score,
        total: totalQuestions,
        rate: levelInfo.rate,
        level: levelInfo,
        timeLevel: timeInfo,
        dualAxis: dualAxisInfo,
        elapsedSeconds,
        categoryBreakdown: analysis.categoryBreakdown,
        strongestCategory: analysis.strongestCategory,
        weakestCategory: analysis.weakestCategory,
      };
      setAchievementReport(achievementData);
      saveAchievementTestRecord(filters.subject, achievementData);
    }

    saveHistory({
      mode,
      filters,
      score,
      total: totalQuestions,
      results: quizResults,
      elapsedSeconds,
      timeLimitSeconds,
      isTimeOver: forcedTimeOver,
      achievementData,
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
    const isAchievementMode = mode === 'achievement' && achievementReport;
    const levelInfo = isAchievementMode ? achievementReport.level : null;
    const timeInfo = isAchievementMode ? achievementReport.timeLevel : null;
    const dualAxis = isAchievementMode ? achievementReport.dualAxis : null;
    const isCombinedMode = isComprehensiveTimed;

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-900 p-4 animate-fade-in">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-3xl w-full">
          {/* 総合実力テスト タイムオーバー警告バナー */}
          {isCombinedMode && isTimeOver && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border-2 border-rose-500/50 text-rose-800 dark:text-rose-200 flex items-center gap-3">
              <span className="text-3xl animate-bounce">⏰</span>
              <div>
                <h3 className="text-base md:text-lg font-black text-rose-600 dark:text-rose-400">
                  制限時間オーバー（時間切れ）！
                </h3>
                <p className="text-xs md:text-sm font-bold opacity-90">
                  規定の制限時間（{Math.floor(timeLimitSeconds / 60)}分）を経過したためテスト終了となりました。未回答の問題は不正解として復習リストに記録されています。
                </p>
              </div>
            </div>
          )}

          {/* 総合実力テスト 時間内完答バナー */}
          {isCombinedMode && !isTimeOver && (
            <div className="mb-6 p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">⏱️</span>
                <span className="text-xs md:text-sm font-black">
                  所要時間: <span className="font-mono text-base">{formatSeconds(elapsedSeconds)}</span>（制限時間 {Math.floor(timeLimitSeconds / 60)}分以内）
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-600 text-white font-extrabold shadow-sm">
                🎉 時間内に完答達成！
              </span>
            </div>
          )}

          {/* 到達度テスト専用 豪華ヘッダー */}
          {isAchievementMode ? (
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-purple-500/20 border border-amber-400/50 text-amber-700 dark:text-amber-300 font-black text-xs uppercase tracking-wider mb-2">
                <span>🏆</span>
                <span>定期 学習到達度判定テスト結果（正答率 × 時間 両軸判定）</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white">
                【{filters.subject}】学習到達度 レポート
              </h2>
            </div>
          ) : (
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-6">
              テスト結果発表
            </h2>
          )}

          {/* 到達度テスト用 「正答率 × スピード」両軸判定総合カード */}
          {isAchievementMode && levelInfo && timeInfo && dualAxis && (
            <div className="mb-8 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl border-2 border-indigo-400/50 relative overflow-hidden text-center">
              {/* 装飾のバックライト */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* 総合評価の称号 */}
              <div className="text-5xl mb-2">{dualAxis.badge}</div>
              <div className="inline-block px-4 py-1 rounded-full text-xs font-black bg-white/20 text-white mb-2">
                正答率 × スピード 総合称号
              </div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-1 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                {dualAxis.title}
              </h3>
              <p className="text-xs md:text-sm font-extrabold text-indigo-200 mb-4">
                〜 {dualAxis.tagline} 〜
              </p>

              {/* 両軸の2カラムカード */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-left">
                {/* 軸1: 正答率 */}
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-black text-amber-300 flex items-center gap-1">
                      <span>🎯</span>
                      <span>正答率 判定</span>
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-black bg-amber-400/20 text-amber-300 border border-amber-300/40">
                      {levelInfo.badge} {levelInfo.title}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white mb-1">
                    {levelInfo.rate}% <span className="text-xs font-normal text-indigo-200">({score}/{questions.length}問正解)</span>
                  </div>
                  <div className="text-[11px] text-indigo-100 leading-tight">
                    {levelInfo.subtitle}
                  </div>
                </div>

                {/* 軸2: スピード（時間） */}
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-black text-cyan-300 flex items-center gap-1">
                      <span>⏱️</span>
                      <span>解答スピード 判定</span>
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-black bg-cyan-400/20 text-cyan-300 border border-cyan-300/40">
                      {timeInfo.badge} {timeInfo.title}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white mb-1 font-mono">
                    {timeInfo.timeFormatted} <span className="text-xs font-normal text-indigo-200">({timeInfo.subtitle})</span>
                  </div>
                  <div className="text-[11px] text-indigo-100 leading-tight">
                    {timeInfo.description}
                  </div>
                </div>
              </div>

              {/* 総合アドバイス文章 */}
              <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm leading-relaxed text-indigo-100 mb-4">
                <span className="font-bold text-amber-200">💡 総合アドバイス: </span>
                {dualAxis.advice}
              </div>

              {/* 分野別実力ブレイクダウン */}
              {achievementReport.categoryBreakdown && achievementReport.categoryBreakdown.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/15 text-left">
                  <h4 className="text-xs font-black text-indigo-200 mb-3 flex items-center gap-1.5">
                    <span>📊</span>
                    <span>分野別 得点率（得意・弱点分析）:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {achievementReport.categoryBreakdown.map((catItem) => (
                      <div
                        key={catItem.category}
                        className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between"
                      >
                        <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                          <span className="text-white truncate max-w-[140px]">{catItem.category}</span>
                          <span className="font-mono text-amber-300 font-extrabold">
                            {catItem.correct}/{catItem.total}問 ({catItem.rate}%)
                          </span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              catItem.rate >= 80
                                ? 'bg-emerald-400'
                                : catItem.rate >= 60
                                ? 'bg-amber-400'
                                : 'bg-rose-400'
                            }`}
                            style={{ width: `${catItem.rate}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 時間評価基準のガイド注釈 */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 text-[10px] text-indigo-200/90 font-medium">
                <span className="font-bold text-amber-300">⏱️ 時間評価基準:</span>
                <span>⚡ S: 10分以内</span>
                <span>/</span>
                <span>🚀 A: 15分以内</span>
                <span>/</span>
                <span>⏱️ B: 20分以内</span>
                <span>/</span>
                <span>🐢 C: 25分以内</span>
                <span>/</span>
                <span>⏳ D: 25分以上</span>
              </div>

              <div className="mt-2 text-[11px] text-indigo-300/80">
                🔒 次回の到達度テストは <strong>2週間後</strong> に受験可能です（定期的な実力測定に活用してください）。
              </div>
            </div>
          )}

          {/* 通常サークルスコア表示 */}
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
                    ? '🌟 素晴らしい成績です！この調子で上位校合格を目指しましょう！'
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
      {/* 到達度テスト受験中バナー */}
      {mode === 'achievement' && (
        <div className="w-full max-w-2xl mb-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-purple-500/20 border border-amber-400/40 flex items-center justify-between text-xs font-black shadow-sm">
          <span className="flex items-center gap-1.5 text-amber-800 dark:text-amber-200">
            <span>🏆</span>
            <span>【{filters.subject}】定期 到達度テスト（正答率×時間 両軸判定）</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-400/30 text-amber-950 dark:text-amber-200 text-[11px] font-extrabold">
            目標: 10〜20分以内
          </span>
        </div>
      )}

      {/* 総合実力テスト受験中バナー */}
      {isComprehensiveTimed && (
        <div className="w-full max-w-2xl mb-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-400/40 flex items-center justify-between text-xs font-black shadow-sm">
          <span className="flex items-center gap-1.5 text-indigo-900 dark:text-indigo-200">
            <span>🌟</span>
            <span>【{filters.subject}】総合実力テスト（制限時間: {Math.floor(timeLimitSeconds / 60)}分）</span>
          </span>
          <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 text-[11px] font-extrabold">
            ⏰ 00:00でタイムオーバー
          </span>
        </div>
      )}

      {/* タイムクロック（タイマー）＆ 進行状況バー */}
      <div className="w-full max-w-2xl mb-3 flex flex-wrap items-center justify-between gap-2 text-gray-700 dark:text-gray-200 font-bold">
        <button
          type="button"
          onClick={handleQuit}
          className="text-xs md:text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3.5 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-sm"
        >
          ← 中断
        </button>

        {/* タイムクロック表示部 */}
        {isComprehensiveTimed && (
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-black text-sm transition-all shadow-sm ${
              remainingSeconds <= 60
                ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                : remainingSeconds <= 180
                ? 'bg-amber-100 border-amber-400 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200'
                : 'bg-white dark:bg-gray-800 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
            }`}
          >
            <span>⏱️</span>
            <span>残り時間:</span>
            <span className="font-mono text-base tracking-wider font-extrabold">
              {formatSeconds(remainingSeconds)}
            </span>
            {showResult && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-white font-bold">
                解説中(停止)
              </span>
            )}
          </div>
        )}

        {mode === 'achievement' && (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-gray-800 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 font-black text-sm shadow-sm">
            <span>⏱️</span>
            <span>経過:</span>
            <span className="font-mono text-base tracking-wider">
              {formatSeconds(elapsedSeconds)}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 font-extrabold">
              {elapsedSeconds <= 600
                ? '⚡ 10分以内 (S)'
                : elapsedSeconds <= 900
                ? '🚀 15分以内 (A)'
                : elapsedSeconds <= 1200
                ? '⏱️ 20分以内 (B)'
                : elapsedSeconds <= 1500
                ? '🐢 25分以内 (C)'
                : '⏳ 25分超過 (D)'}
            </span>
            {showResult && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold">
                解説中(停止)
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2.5">
          <span className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-extrabold">
            スコア: {score}点
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
