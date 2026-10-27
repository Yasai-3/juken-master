import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllQuestions,
  getWrongAnswers,
  getHistory,
  syncWithLocalServer,
  syncWithCloud,
  getLastSyncInfo,
  getSettings,
} from '../utils/storage';
import { analyzeLearningProgress } from '../utils/advisorEngine';

const Home = () => {
  const navigate = useNavigate();
  const [wrongAnswersCounts, setWrongAnswersCounts] = useState({ science: 0, social: 0, japanese: 0 });
  const [menuData, setMenuData] = useState([]);
  const [totalQuestionsCount, setTotalQuestionsCount] = useState(0);
  const [topAdvice, setTopAdvice] = useState(null);

  // Selection State
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter & Options State
  const [questionLimit, setQuestionLimit] = useState(5);
  const [comprehensiveLimit, setComprehensiveLimit] = useState(10);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all'); // all, basic, standard, advanced
  const [selectedQuestionType, setSelectedQuestionType] = useState('all'); // all, choice, input, descriptive

  // Wi-Fi Sync State
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');
  const [syncError, setSyncError] = useState('');
  const [lastSyncInfo, setLastSyncInfo] = useState(getLastSyncInfo());
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [syncServerUrlInput, setSyncServerUrlInput] = useState(getSettings().syncServerUrl || '');
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const loadDashboardData = useCallback(() => {
    const allQuestions = getAllQuestions();
    setTotalQuestionsCount(allQuestions.length);

    const wrongAnswers = getWrongAnswers();
    setWrongAnswersCounts({
      math: wrongAnswers.filter((q) => q.subject === '算数').length,
      science: wrongAnswers.filter((q) => q.subject === '理科').length,
      social: wrongAnswers.filter((q) => q.subject === '社会').length,
      japanese: wrongAnswers.filter((q) => q.subject === '国語').length,
    });

    const history = getHistory();
    const analysis = analyzeLearningProgress(history, wrongAnswers, allQuestions);
    if (analysis.adviceCards && analysis.adviceCards.length > 0) {
      setTopAdvice(analysis.adviceCards[0]);
    } else {
      setTopAdvice(null);
    }

    // Build Subject -> Category -> SubCategory structure
    const structure = {};
    allQuestions.forEach((q) => {
      if (!q.subject || !q.category || !q.subCategory) return;

      if (!structure[q.subject]) {
        structure[q.subject] = { subject: q.subject, count: 0, categories: {} };
      }
      structure[q.subject].count++;

      if (!structure[q.subject].categories[q.category]) {
        structure[q.subject].categories[q.category] = {
          name: q.category,
          count: 0,
          subCategories: new Set(),
        };
      }
      structure[q.subject].categories[q.category].count++;
      structure[q.subject].categories[q.category].subCategories.add(q.subCategory);
    });

    const formattedMenu = Object.values(structure).map((subj) => ({
      subject: subj.subject,
      count: subj.count,
      categories: Object.values(subj.categories).map((cat) => ({
        name: cat.name,
        count: cat.count,
        subCategories: Array.from(cat.subCategories).sort((a, b) =>
          a.localeCompare(b, 'ja', { numeric: true })
        ),
      })),
    }));

    // 算数・国語・理科・社会の順に表示
    const subjectOrder = { 算数: 1, 国語: 2, 理科: 3, 社会: 4 };
    formattedMenu.sort(
      (a, b) => (subjectOrder[a.subject] || 99) - (subjectOrder[b.subject] || 99)
    );
    setMenuData(formattedMenu);
  }, []);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  const handleCloudSync = async () => {
    setIsSyncing(true);
    setSyncMessage('');
    setSyncError('');
    try {
      const info = await syncWithCloud();
      setLastSyncInfo(info);
      loadDashboardData();
      setSyncMessage(
        `☁️ クラウド同期完了！（履歴: ${info.historyCount}件 / 弱点: ${info.wrongCount}問 / 全端末共通最新化）`
      );
      setTimeout(() => setSyncMessage(''), 5000);
    } catch (err) {
      setSyncError(`クラウド同期に失敗しました: ${err.message}`);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleWifiSync = async (targetUrl = '') => {
    setIsSyncing(true);
    setSyncMessage('');
    setSyncError('');
    try {
      const info = await syncWithLocalServer(targetUrl || syncServerUrlInput);
      setLastSyncInfo(info);
      setSyncServerUrlInput(info.serverUrl);
      loadDashboardData();
      setSyncMessage(
        `✅ 同期完了！（履歴: ${info.historyCount}件 / 弱点: ${info.wrongCount}問 / 追加問題: ${info.customQuestionsCount}問）`
      );
      setTimeout(() => setSyncMessage(''), 5000);
    } catch (err) {
      setSyncError(
        `同期サーバーに接続できませんでした。Mac側で「Wi-Fi同期サーバー起動.command」または「npm run sync」が起動しているか確認してください。（詳細: ${err.message}）`
      );
    } finally {
      setIsSyncing(false);
    }
  };

  const startQuiz = (mode, filters = {}) => {
    navigate('/quiz', {
      state: {
        mode,
        limit: filters.limit || questionLimit,
        difficulty: filters.difficulty ?? selectedDifficulty,
        questionType: filters.questionType ?? selectedQuestionType,
        ...filters,
      },
    });
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedCategory(null);
    setQuestionLimit(5);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    }
  };

  // 共通の難易度・形式フィルターバー
  const renderFilterBar = () => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-100 dark:border-gray-700 mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-extrabold text-gray-500 dark:text-gray-400 mr-1">
          🎯 難易度:
        </span>
        {[
          { id: 'all', label: 'すべて' },
          { id: 'basic', label: '★☆☆ 基礎' },
          { id: 'standard', label: '★★☆ 標準' },
          { id: 'advanced', label: '★★★ 応用' },
        ].map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setSelectedDifficulty(d.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedDifficulty === d.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-extrabold text-gray-500 dark:text-gray-400 mr-1">
          ✏️ 出題形式:
        </span>
        {[
          { id: 'all', label: 'すべて' },
          { id: 'choice', label: '4択選択' },
          { id: 'input', label: '語句入力' },
          { id: 'descriptive', label: '短文記述' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedQuestionType(t.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              selectedQuestionType === t.id
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderSubjectSelection = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Top Learning Coach Banner */}
      {topAdvice && (
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 rounded-2xl p-5 md:p-6 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-white/20 text-indigo-50">
              <span>🧭 AI学習コーチからの提案</span>
              <span>・</span>
              <span>{topAdvice.badge}</span>
            </div>
            <h3 className="text-lg md:text-xl font-extrabold leading-snug">
              {topAdvice.title}
            </h3>
            <p className="text-xs md:text-sm text-indigo-100 leading-relaxed max-w-2xl">
              {topAdvice.description}
            </p>
          </div>
          {topAdvice.recommendedAction && (
            <button
              type="button"
              onClick={() =>
                startQuiz(
                  topAdvice.recommendedAction.quizState.mode,
                  topAdvice.recommendedAction.quizState
                )
              }
              className="flex-shrink-0 w-full md:w-auto px-5 py-3 bg-white text-indigo-700 hover:bg-indigo-50 font-extrabold rounded-xl shadow-md transition text-sm text-center"
            >
              ▶ {topAdvice.recommendedAction.label}
            </button>
          )}
        </div>
      )}

      {renderFilterBar()}

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuData.map((data) => (
          <button
            key={data.subject}
            type="button"
            onClick={() => handleSubjectClick(data)}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:border-indigo-400 border-2 border-transparent transition-all text-center group relative overflow-hidden"
          >
            <div className="text-5xl mb-2.5 group-hover:scale-105 transition-transform">
              {data.subject === '算数'
                ? '📐'
                : data.subject === '理科'
                  ? '🔬'
                  : data.subject === '国語'
                    ? '📖'
                    : '🌏'}
            </div>
            <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {data.subject}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 truncate">
              {data.categories.map((c) => c.name).join('・')}
            </p>
            <span className="inline-block mt-2.5 text-xs font-bold bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 px-3 py-0.5 rounded-full">
              収録: {data.count}問
            </span>
          </button>
        ))}
      </div>

      {/* Comprehensive Test Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-md border border-indigo-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center">
              <span className="text-2xl mr-2">🌟</span> 総合実力テスト
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              上で選んだ難易度・出題形式の条件でランダムに出題します
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-xl p-1.5 shadow-sm">
            <span className="text-xs font-bold text-gray-600 dark:text-gray-300 ml-2">出題数:</span>
            {[5, 10, 20].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setComprehensiveLimit(num)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  comprehensiveLimit === num
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {num}問
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            type="button"
            onClick={() => startQuiz('combined', { subject: '算数', limit: comprehensiveLimit })}
            className="p-3.5 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-violet-700 dark:text-violet-300 border-l-4 border-violet-500 text-left flex justify-between items-center"
          >
            <span>📐 算数 総合テスト</span>
            <span className="text-xs bg-violet-50 dark:bg-gray-600 px-2 py-0.5 rounded-lg">開始 →</span>
          </button>
          <button
            type="button"
            onClick={() => startQuiz('combined', { subject: '国語', limit: comprehensiveLimit })}
            className="p-3.5 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-emerald-700 dark:text-emerald-300 border-l-4 border-emerald-500 text-left flex justify-between items-center"
          >
            <span>📖 国語 総合テスト</span>
            <span className="text-xs bg-emerald-50 dark:bg-gray-600 px-2 py-0.5 rounded-lg">開始 →</span>
          </button>
          <button
            type="button"
            onClick={() => startQuiz('combined', { subject: '理科', limit: comprehensiveLimit })}
            className="p-3.5 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-500 text-left flex justify-between items-center"
          >
            <span>🧪 理科 総合テスト</span>
            <span className="text-xs bg-indigo-50 dark:bg-gray-600 px-2 py-0.5 rounded-lg">開始 →</span>
          </button>
          <button
            type="button"
            onClick={() => startQuiz('combined', { subject: '社会', limit: comprehensiveLimit })}
            className="p-3.5 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-amber-700 dark:text-amber-300 border-l-4 border-amber-500 text-left flex justify-between items-center"
          >
            <span>🏯 社会 総合テスト</span>
            <span className="text-xs bg-amber-50 dark:bg-gray-600 px-2 py-0.5 rounded-lg">開始 →</span>
          </button>
        </div>
      </div>

      {/* Review & Main Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* NEW: 志望校別 到達度 ＆ 合格ナビ */}
        <button
          type="button"
          onClick={() => navigate('/target-schools')}
          className="col-span-full p-5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-2xl shadow-lg hover:opacity-95 transition-all font-black text-lg md:text-xl flex items-center justify-between px-6 border border-amber-300"
        >
          <div className="flex items-center gap-3 text-left">
            <span className="text-3xl bg-white/20 p-2 rounded-xl">🎯</span>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-amber-100">
                灘・筑駒・開成・聖光・東大寺・西大和・星光・高槻
              </div>
              <div>志望校別 到達度 ＆ 合格ToDoナビ</div>
            </div>
          </div>
          <span className="text-xs md:text-sm font-extrabold bg-white text-orange-600 px-4 py-2 rounded-xl shadow-sm">
            到達度をチェック →
          </span>
        </button>

        <button
          type="button"
          onClick={() =>
            startQuiz('review', {
              limit: 50,
              subject: '算数',
              difficulty: 'all',
              questionType: 'all',
            })
          }
          disabled={!wrongAnswersCounts.math}
          className={`p-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl shadow-md hover:opacity-95 transition-all font-bold text-base flex items-center justify-center space-x-2 ${
            !wrongAnswersCounts.math ? 'opacity-45 cursor-not-allowed' : ''
          }`}
        >
          <span>📐</span>
          <span>算数 弱点復習（{wrongAnswersCounts.math || 0}問）</span>
        </button>

        <button
          type="button"
          onClick={() =>
            startQuiz('review', {
              limit: 50,
              subject: '国語',
              difficulty: 'all',
              questionType: 'all',
            })
          }
          disabled={wrongAnswersCounts.japanese === 0}
          className={`p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-md hover:opacity-95 transition-all font-bold text-base flex items-center justify-center space-x-2 ${
            wrongAnswersCounts.japanese === 0 ? 'opacity-45 cursor-not-allowed' : ''
          }`}
        >
          <span>📖</span>
          <span>国語 弱点復習（{wrongAnswersCounts.japanese}問）</span>
        </button>

        <button
          type="button"
          onClick={() =>
            startQuiz('review', {
              limit: 50,
              subject: '理科',
              difficulty: 'all',
              questionType: 'all',
            })
          }
          disabled={wrongAnswersCounts.science === 0}
          className={`p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-md hover:opacity-95 transition-all font-bold text-base flex items-center justify-center space-x-2 ${
            wrongAnswersCounts.science === 0 ? 'opacity-45 cursor-not-allowed' : ''
          }`}
        >
          <span>🔬</span>
          <span>理科 弱点復習（{wrongAnswersCounts.science}問）</span>
        </button>

        <button
          type="button"
          onClick={() =>
            startQuiz('review', {
              limit: 50,
              subject: '社会',
              difficulty: 'all',
              questionType: 'all',
            })
          }
          disabled={wrongAnswersCounts.social === 0}
          className={`p-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-2xl shadow-md hover:opacity-95 transition-all font-bold text-base flex items-center justify-center space-x-2 ${
            wrongAnswersCounts.social === 0 ? 'opacity-45 cursor-not-allowed' : ''
          }`}
        >
          <span>🌏</span>
          <span>社会 弱点復習（{wrongAnswersCounts.social}問）</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/history')}
          className="md:col-span-1 p-5 bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-gray-700 text-indigo-700 dark:text-indigo-300 rounded-2xl shadow-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all font-extrabold text-lg flex items-center justify-center space-x-2"
        >
          <span>📊</span>
          <span>成績分析・学習アドバイス</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="md:col-span-2 p-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-md hover:opacity-95 transition-all font-extrabold text-lg flex items-center justify-center space-x-2"
        >
          <span>✨</span>
          <span>AI作問スタジオ（画像・PDF読込）/ 管理</span>
        </button>
      </div>
    </div>
  );

  const renderCategorySelection = () => (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <button
          type="button"
          onClick={handleBack}
          className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center hover:underline"
        >
          ← 教科選択に戻る
        </button>
      </div>

      {renderFilterBar()}

      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 border-b-4 border-indigo-500 inline-block pb-1">
        {selectedSubject.subject}の分野を選択
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {selectedSubject.categories.map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg hover:bg-indigo-50/60 dark:hover:bg-indigo-900/20 transition-all text-left border-l-4 border-indigo-500"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-100">
                {category.name}
              </h3>
              <span className="text-xs font-bold bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-indigo-300 px-2.5 py-0.5 rounded-full">
                {category.count}問
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {category.subCategories.join(' / ')}
            </p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderSubCategorySelection = () => (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <button
          type="button"
          onClick={handleBack}
          className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center hover:underline"
        >
          ← {selectedSubject.subject}の分野一覧に戻る
        </button>

        {/* Question Limit Selector */}
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-sm border border-gray-200 dark:border-gray-700">
          <span className="text-xs font-bold text-gray-600 dark:text-gray-300 ml-2">出題数:</span>
          {[5, 10, 15].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setQuestionLimit(num)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                questionLimit === num
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {num}問
            </button>
          ))}
        </div>
      </div>

      {renderFilterBar()}

      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 border-b-4 border-pink-500 inline-block pb-1">
        {selectedCategory.name}の単元を選択
      </h2>

      {/* Option to test entire category */}
      <button
        type="button"
        onClick={() =>
          startQuiz('combined', {
            subject: selectedSubject.subject,
            category: selectedCategory.name,
            limit: questionLimit,
          })
        }
        className="w-full mb-6 p-4 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-xl font-extrabold hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors text-center shadow-sm"
      >
        📌 {selectedCategory.name}全体から出題 ({questionLimit}問)
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {selectedCategory.subCategories.map((sub) => (
          <button
            key={sub}
            type="button"
            onClick={() =>
              startQuiz('specific', {
                subject: selectedSubject.subject,
                category: selectedCategory.name,
                subCategory: sub,
                limit: questionLimit,
              })
            }
            className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-400 transition-all text-center border-2 border-gray-100 dark:border-gray-700 font-bold text-gray-800 dark:text-gray-100"
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 flex flex-col items-center justify-start p-4 md:p-6 font-sans">
      <div className="w-full max-w-4xl mt-4 md:mt-8 mb-12">
        <header className="text-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold border ${
              isOnline
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700 animate-pulse'
            }`}>
              <span>{isOnline ? '🟢 完全オフライン対応（全問保存済）' : '📡 オフライン動作中（全問学習可能）'}</span>
              <span>・</span>
              <span>全 {totalQuestionsCount} 問</span>
            </div>

            <button
              type="button"
              onClick={handleCloudSync}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-extrabold shadow-sm transition disabled:opacity-50"
            >
              <span>{isSyncing ? '⏳ クラウド同期中...' : '☁️ クラウド自動同期 (Mac & タブレット)'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowSyncModal((prev) => !prev)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold hover:bg-gray-50 transition"
              title="Wi-Fi同期サーバー設定・接続ガイド"
            >
              <span>📡 タブレット接続案内</span>
            </button>
          </div>

          {syncMessage && (
            <div className="max-w-xl mx-auto mb-3 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-sm">
              {syncMessage}
            </div>
          )}

          {syncError && (
            <div className="max-w-xl mx-auto mb-3 px-4 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold shadow-sm text-left">
              <p>{syncError}</p>
              <button
                type="button"
                onClick={() => setShowSyncModal(true)}
                className="mt-1 underline text-rose-800 font-extrabold"
              >
                ▶ 接続先URLの確認・変更はこちら
              </button>
            </div>
          )}

          {showSyncModal && (
            <div className="max-w-2xl mx-auto mb-6 p-4 md:p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-emerald-400 shadow-lg text-left space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm md:text-base font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-1.5">
                  <span>📡</span>
                  <span>Mac ⇔ Androidタブレット Wi-Fi双方向同期＆接続ガイド</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setShowSyncModal(false)}
                  className="text-xs font-bold text-gray-400 hover:text-gray-600"
                >
                  ✕ 閉じる
                </button>
              </div>

              <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1.5 bg-slate-50 dark:bg-gray-700/50 p-3 rounded-xl">
                <p className="font-bold text-emerald-700 dark:text-emerald-300">
                  【使い方（自宅Wi-Fiで最新状態に同期＆オフライン利用）】
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Macのフォルダ内にある <strong>「Wi-Fi同期サーバー起動.command」</strong> をダブルクリック（またはターミナルで <code>npm run sync</code>）します。
                  </li>
                  <li>
                    Macの画面に表示される <strong>タブレット用URL（例: http://192.168.x.x:3030）</strong> をAndroidタブレットのChromeで開きます。
                  </li>
                  <li>
                    Chromeのメニューから <strong>「ホーム画面に追加」</strong> すると、タブレットにアプリとして保存され、外出先などオフラインでも全{totalQuestionsCount}問を学習できます。
                  </li>
                  <li>
                    Macやタブレットで上の <strong>「🔄 Wi-FiでMac・タブレット同期」</strong> ボタンを押すと、両方の学習履歴・弱点問題・追加問題が自動で合算（マージ）されます！
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center pt-1">
                <label className="text-xs font-bold text-gray-600 dark:text-gray-300 flex-shrink-0">
                  同期サーバーURL:
                </label>
                <input
                  type="text"
                  value={syncServerUrlInput}
                  onChange={(e) => setSyncServerUrlInput(e.target.value)}
                  placeholder="http://192.168.1.10:3030"
                  className="flex-1 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-xs font-mono"
                />
                <button
                  type="button"
                  onClick={() => handleWifiSync(syncServerUrlInput)}
                  disabled={isSyncing}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-extrabold transition"
                >
                  接続して今すぐ同期
                </button>
              </div>

              {lastSyncInfo && (
                <div className="text-[11px] text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-1 pt-1 border-t border-gray-100 dark:border-gray-700">
                  <span>
                    最終同期: {new Date(lastSyncInfo.syncedAt).toLocaleString('ja-JP')}
                  </span>
                  {lastSyncInfo.lanUrls && lastSyncInfo.lanUrls.length > 0 && (
                    <span className="text-indigo-600 dark:text-indigo-300 font-bold">
                      タブレット接続先: {lastSyncInfo.lanUrls.join(' , ')}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
            中学受験マスター 2
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            画像・PDFからのAI作問 ＆ 弱点分析・記述トレーニング
          </p>
        </header>

        {!selectedSubject && renderSubjectSelection()}
        {selectedSubject && !selectedCategory && renderCategorySelection()}
        {selectedSubject && selectedCategory && renderSubCategorySelection()}
      </div>
    </div>
  );
};

export default Home;
