import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getHistory,
  clearHistory,
  getWrongAnswers,
  getAllQuestions,
  getSettings,
  getCachedAiAdvice,
  saveCachedAiAdvice,
  getHistorySnapshots,
  saveHistorySnapshot,
  restoreHistorySnapshot,
  deleteHistorySnapshot,
} from '../utils/storage';
import {
  analyzeLearningProgress,
  DIFFICULTY_LABELS,
  QUESTION_TYPE_LABELS,
} from '../utils/advisorEngine';
import { generateAiCoachingReport } from '../utils/geminiGenerator';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const HistoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dailyData, setDailyData] = useState([]);
  const [accuracyData, setAccuracyData] = useState([]);
  const [subAccData, setSubAccData] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [analysis, setAnalysis] = useState(null);

  // Active Tab state ('overview' | 'units' | 'wrongs')
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'overview');
  const [unitSubjectFilter, setUnitSubjectFilter] = useState('all');
  const [wrongSubjectFilter, setWrongSubjectFilter] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  // AI Report state
  const [aiReport, setAiReport] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  // Safe Snapshots & Clear Confirmation Modal state
  const [snapshots, setSnapshots] = useState([]);
  const [showSnapshotPanel, setShowSnapshotPanel] = useState(false);
  const [snapshotLabelInput, setSnapshotLabelInput] = useState('');
  const [snapshotMsg, setSnapshotMsg] = useState('');
  const [showClearModal, setShowClearModal] = useState(false);
  const [restoreConfirmTarget, setRestoreConfirmTarget] = useState(null);

  useEffect(() => {
    loadData();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadData = () => {
    const hist = getHistory() || [];
    const wrong = getWrongAnswers() || [];
    const allQuestions = getAllQuestions() || [];

    setWrongAnswers(wrong);
    processCharts(hist);
    setAnalysis(analyzeLearningProgress(hist, wrong, allQuestions));
    setAiReport(getCachedAiAdvice());
    setSnapshots(getHistorySnapshots());
  };

  const processCharts = (hist) => {
    if (!hist || hist.length === 0) {
      setDailyData([]);
      setAccuracyData([]);
      setSubAccData([]);
      return;
    }

    const dailyMap = {};
    const catMap = {};
    const subMap = {};

    hist.forEach((entry) => {
      const ts = entry.timestamp || entry.date || new Date().toISOString();
      const date = new Date(ts).toLocaleDateString('ja-JP');

      if (!dailyMap[date]) dailyMap[date] = { date, total: 0 };

      const count = entry.total || 0;
      dailyMap[date].total += count;

      // ラベルは出題条件(filters)ではなく「実際に解いた問題」の分野から判定する
      // （条件と中身がズレた過去の記録も正しく表示されるようにするため）
      let categoryLabel = 'その他';
      const results = Array.isArray(entry.results) ? entry.results : [];
      const cats = [...new Set(results.map((r) => r.category).filter(Boolean))];
      const subjs = [...new Set(results.map((r) => r.subject).filter(Boolean))];
      if (entry.mode === 'review') {
        categoryLabel = '復習';
      } else if (cats.length === 1) {
        categoryLabel = cats[0];
      } else if (subjs.length === 1) {
        categoryLabel = `${subjs[0]}総合`;
      } else if (subjs.length > 1) {
        categoryLabel = '教科横断総合';
      } else if (entry.filters?.category) {
        categoryLabel = entry.filters.category;
      } else if (entry.filters?.subject) {
        categoryLabel =
          entry.mode === 'combined'
            ? `${entry.filters.subject}総合`
            : entry.filters.subject;
      }

      if (!dailyMap[date][categoryLabel]) dailyMap[date][categoryLabel] = 0;
      dailyMap[date][categoryLabel] += count;

      if (entry.results && Array.isArray(entry.results)) {
        entry.results.forEach((r) => {
          const cat = r.category || 'その他';
          if (!catMap[cat]) catMap[cat] = { name: cat, correct: 0, total: 0 };
          catMap[cat].total++;
          if (r.isCorrect) catMap[cat].correct++;

          const sub = r.subCategory || '未分類';
          const subKey = `${cat}__${sub}`;
          if (!subMap[subKey]) {
            const detectedSubj =
              r.subject ||
              (['速さ', '数の性質', '平面図形の比', '平面図形の面積', '平面図形', '立体図形', '割合と比', '規則性', '場合の数', '文章題・特殊算', '数の性質・規則性', '場合の数・論理', '平面図形・立体図形'].includes(cat)
                ? '算数'
                : ['ことわざ', '慣用句', '故事成語', '四字熟語', '和語', '季語・外来語', '助数詞・類義語・対義語'].includes(cat)
                  ? '国語'
                  : ['歴史', '地理', '公民'].includes(cat)
                    ? '社会'
                    : '理科');
            subMap[subKey] = {
              name: sub,
              subject: detectedSubj,
              category: cat,
              correct: 0,
              total: 0,
              choiceCorrect: 0,
              choiceTotal: 0,
              writeCorrect: 0,
              writeTotal: 0,
            };
          }
          subMap[subKey].total++;
          if (r.isCorrect) subMap[subKey].correct++;

          if ((r.questionType || 'choice') === 'choice') {
            subMap[subKey].choiceTotal++;
            if (r.isCorrect) subMap[subKey].choiceCorrect++;
          } else {
            subMap[subKey].writeTotal++;
            if (r.isCorrect) subMap[subKey].writeCorrect++;
          }
        });
      }
    });

    setDailyData(Object.values(dailyMap).slice(-7));

    const accData = Object.values(catMap)
      .map((d) => ({
        name: d.name,
        accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
        total: d.total,
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
    setAccuracyData(accData);

    const subData = Object.values(subMap)
      .map((d) => ({
        ...d,
        accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
        choiceAcc:
          d.choiceTotal > 0 ? Math.round((d.choiceCorrect / d.choiceTotal) * 100) : null,
        writeAcc:
          d.writeTotal > 0 ? Math.round((d.writeCorrect / d.writeTotal) * 100) : null,
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
    setSubAccData(subData);
  };

  const handleGenerateAiCoach = async () => {
    const settings = getSettings();
    if (!settings.geminiApiKey) {
      setAiError('AI詳細診断を利用するには、「AI作問・管理」画面の「設定」タブでGemini APIキーを登録してください。');
      return;
    }
    if (!analysis || analysis.totalAnswered === 0) {
      setAiError('まずは問題を1問以上解いてから診断を実行してください。');
      return;
    }

    setAiLoading(true);
    setAiError('');
    try {
      const report = await generateAiCoachingReport({
        apiKey: settings.geminiApiKey,
        model: settings.geminiModel,
        analysisSummary: analysis,
      });
      saveCachedAiAdvice(report);
      setAiReport(getCachedAiAdvice());
    } catch (e) {
      setAiError(e.message || 'AI診断レポートの生成に失敗しました。');
    } finally {
      setAiLoading(false);
    }
  };

  const handleSaveSnapshot = () => {
    const snap = saveHistorySnapshot(snapshotLabelInput, false);
    setSnapshotLabelInput('');
    setSnapshots(getHistorySnapshots());
    setSnapshotMsg(`💾 「${snap.label}」として現在の成績・復習リストを安全に保管しました！`);
    setTimeout(() => setSnapshotMsg(''), 4500);
  };

  const handleExecuteRestore = (snap, mode = 'replace') => {
    try {
      restoreHistorySnapshot(snap.id, mode);
      setRestoreConfirmTarget(null);
      loadData();
      setSnapshotMsg(
        mode === 'merge'
          ? `✅ 「${snap.label}」の記録を現在の成績に合算しました！`
          : `✅ 「${snap.label}」（${new Date(snap.createdAt).toLocaleString('ja-JP')}）の状態を復元しました！`
      );
      setTimeout(() => setSnapshotMsg(''), 5000);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleDeleteSnapshot = (snapId) => {
    deleteHistorySnapshot(snapId);
    setSnapshots(getHistorySnapshots());
  };

  const handleConfirmClearHistory = () => {
    clearHistory();
    setShowClearModal(false);
    loadData();
    setShowSnapshotPanel(true);
    setSnapshotMsg(
      '🗑️ 履歴をリセットしました。（※消去直前のデータは下の「セーブ記録一覧」に自動保管されているため、いつでもワンタップで復元できます）'
    );
  };

  const CATEGORY_COLORS = {
    生物: '#6366f1',
    物理: '#3b82f6',
    化学: '#06b6d4',
    地学: '#10b981',
    歴史: '#f59e0b',
    地理: '#f97316',
    公民: '#8b5cf6',
    理科総合: '#84cc16',
    社会総合: '#eab308',
    国語総合: '#10b981',
    教科横断総合: '#059669',
    ことわざ: '#ec4899',
    慣用句: '#f43f5e',
    故事成語: '#8b5cf6',
    四字熟語: '#a855f7',
    和語: '#06b6d4',
    '季語・外来語': '#14b8a6',
    '助数詞・類義語・対義語': '#3b82f6',
    復習: '#94a3b8',
    その他: '#64748b',
  };
  const getCategoryColor = (cat) => CATEGORY_COLORS[cat] || '#6366f1';

  const dataKeys =
    dailyData.length > 0
      ? Array.from(
          new Set(
            dailyData.flatMap((d) =>
              Object.keys(d).filter((k) => k !== 'date' && k !== 'total')
            )
          )
        )
      : [];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 p-4 md:p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 pb-12">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline text-base md:text-lg"
          >
            ← ホームに戻る
          </button>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            📊 成績分析 ＆ 学習アドバイス
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleSaveSnapshot}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow transition-colors flex items-center gap-1.5"
              title="現時点までの学習履歴と弱点リストを安全に保管します"
            >
              <span>💾</span>
              <span>現在の成績を記録（セーブ）</span>
            </button>
            <button
              type="button"
              onClick={() => setShowSnapshotPanel((prev) => !prev)}
              className="bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700 text-indigo-700 dark:text-indigo-300 px-3.5 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm transition-colors flex items-center gap-1"
            >
              <span>📂</span>
              <span>記録ロード / 復元 ({snapshots.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setShowClearModal(true)}
              className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 px-3.5 py-2 rounded-xl text-xs md:text-sm font-bold transition-colors"
            >
              履歴を全消去
            </button>
          </div>
        </header>

        {snapshotMsg && (
          <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 text-xs md:text-sm font-bold shadow-sm flex items-center justify-between gap-2">
            <span>{snapshotMsg}</span>
            <button
              type="button"
              onClick={() => setSnapshotMsg('')}
              className="text-emerald-600 hover:text-emerald-800 font-extrabold text-xs"
            >
              ✕
            </button>
          </div>
        )}

        {/* Safe Snapshot Save & Restore Drawer */}
        {showSnapshotPanel && (
          <div className="bg-white dark:bg-gray-800 border-2 border-indigo-400 rounded-2xl p-5 md:p-6 shadow-lg space-y-4">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-3">
              <div>
                <h2 className="text-base md:text-lg font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                  <span>🛡️</span>
                  <span>成績セーブポイント保管庫（記録 ＆ 復元ロード）</span>
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  重要な節目で記録を残したり、万が一「全消去」してしまった後でもここからワンタップで元の状態に戻せます。
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSnapshotPanel(false)}
                className="text-xs font-bold text-gray-400 hover:text-gray-600 px-2 py-1"
              >
                ✕ 閉じる
              </button>
            </div>

            {/* Named Save Input */}
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center bg-slate-50 dark:bg-gray-700/40 p-3 rounded-xl">
              <input
                type="text"
                value={snapshotLabelInput}
                onChange={(e) => setSnapshotLabelInput(e.target.value)}
                placeholder="メモ名を入力（例：10月模試前の記録、理科一通り完了 など ※空欄でもOK）"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-xs md:text-sm"
              />
              <button
                type="button"
                onClick={handleSaveSnapshot}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs md:text-sm font-extrabold shadow-sm transition flex-shrink-0"
              >
                💾 名前をつけて現在の成績を記録
              </button>
            </div>

            {/* Snapshot List */}
            {snapshots.length === 0 ? (
              <p className="text-xs md:text-sm text-gray-500 py-3 text-center">
                まだ保管されたセーブ記録はありません。「💾 現在の成績を記録（セーブ）」を押すとここに保管されます。
              </p>
            ) : (
              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {snapshots.map((snap) => (
                  <div
                    key={snap.id}
                    className={`p-3.5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                      snap.isAuto
                        ? 'bg-amber-50/60 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-extrabold ${
                            snap.isAuto
                              ? 'bg-amber-500 text-white'
                              : 'bg-indigo-600 text-white'
                          }`}
                        >
                          {snap.isAuto ? '自動保護' : '手動セーブ'}
                        </span>
                        <span className="font-extrabold text-sm text-gray-800 dark:text-gray-100">
                          {snap.label}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(snap.createdAt).toLocaleString('ja-JP')}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 flex flex-wrap gap-x-4 gap-y-1">
                        <span>累計解答: <strong>{snap.summary?.totalAnswered ?? 0}問</strong></span>
                        <span>正答率: <strong>{snap.summary?.accuracy ?? 0}%</strong></span>
                        <span>弱点復習ノート: <strong>{snap.summary?.wrongCount ?? 0}問</strong></span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-end md:self-center">
                      <button
                        type="button"
                        onClick={() => setRestoreConfirmTarget(snap)}
                        className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-lg shadow-sm transition"
                      >
                        📂 この記録をロード（復元）
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteSnapshot(snap.id)}
                        className="px-2.5 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-rose-100 hover:text-rose-600 text-gray-500 text-xs font-bold rounded-lg transition"
                        title="この記録を削除"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Modal 1: 履歴全消去の確認ポップアップ */}
        {showClearModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-rose-400 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 text-rose-600">
                <span className="text-3xl">⚠️</span>
                <h3 className="text-lg md:text-xl font-extrabold">
                  本当に学習履歴を全消去しますか？
                </h3>
              </div>

              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
                <p>
                  現在の<strong>学習履歴（累計 {analysis?.totalAnswered || 0} 問）</strong>と、
                  <strong>弱点復習ノート（{wrongAnswers.length} 問）</strong>をすべてリセットします。
                </p>
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-xs">
                  🛡️ <strong>安心セーフティ機能：</strong>
                  <br />
                  間違って消去してしまった場合でも、消去直前のデータは自動的に<strong>「📂 記録ロード / 復元」</strong>にバックアップ保管されるため、後からいつでも元に戻せます。
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowClearModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-700 dark:text-gray-200 font-extrabold text-sm transition"
                >
                  キャンセル（消去しない）
                </button>
                <button
                  type="button"
                  onClick={handleConfirmClearHistory}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-md transition"
                >
                  はい、全消去する
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal 2: 記録ロード（復元）の確認ポップアップ */}
        {restoreConfirmTarget && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl border-2 border-indigo-400 space-y-4 animate-fade-in">
              <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
                <span className="text-2xl">📂</span>
                <h3 className="text-lg font-extrabold">
                  保管された記録をロード（復元）しますか？
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-xs space-y-1">
                <div className="font-extrabold text-sm text-gray-800 dark:text-gray-100">
                  {restoreConfirmTarget.label}
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  保存日時: {new Date(restoreConfirmTarget.createdAt).toLocaleString('ja-JP')}
                </div>
                <div className="text-gray-700 dark:text-gray-200 pt-1">
                  累計解答: <strong>{restoreConfirmTarget.summary?.totalAnswered ?? 0}問</strong> ／
                  正答率: <strong>{restoreConfirmTarget.summary?.accuracy ?? 0}%</strong> ／
                  弱点ノート: <strong>{restoreConfirmTarget.summary?.wrongCount ?? 0}問</strong>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleExecuteRestore(restoreConfirmTarget, 'replace')}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs md:text-sm shadow transition"
                >
                  🔄 この記録の時点に完全に戻す（復元）
                </button>
                <button
                  type="button"
                  onClick={() => handleExecuteRestore(restoreConfirmTarget, 'merge')}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs md:text-sm shadow transition"
                >
                  ➕ 現在の成績にこの記録を合算（マージ）する
                </button>
                <button
                  type="button"
                  onClick={() => setRestoreConfirmTarget(null)}
                  className="w-full py-2 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold text-xs transition mt-1"
                >
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Top Summary KPI Cards */}
        {analysis && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {/* 累計解答数 */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-gray-400">累計解答数</div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white mt-1">
                  {analysis.totalAnswered}
                  <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">問</span>
                </div>
              </div>
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700/60 flex flex-wrap gap-x-2 gap-y-0.5">
                <span className="text-violet-600 dark:text-violet-400">算: {analysis.bySubject?.['算数']?.total || 0}</span>
                <span className="text-blue-600 dark:text-blue-400">理: {analysis.bySubject?.['理科']?.total || 0}</span>
                <span className="text-amber-600 dark:text-amber-400">社: {analysis.bySubject?.['社会']?.total || 0}</span>
                <span className="text-emerald-600 dark:text-emerald-400">国: {analysis.bySubject?.['国語']?.total || 0}</span>
              </div>
            </div>

            {/* 総合正答率 */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-gray-400">総合正答率</div>
                <div className="text-2xl md:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1">
                  {analysis.overallAccuracy}
                  <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">%</span>
                </div>
              </div>
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                正解: {analysis.totalCorrect} / {analysis.totalAnswered}問
              </div>
            </div>

            {/* 算数の正答率 */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-gray-400 flex items-center justify-between">
                  <span>算数の正答率</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-200">算数</span>
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-violet-600 dark:text-violet-400 mt-1">
                  {analysis.bySubject?.['算数']?.total > 0
                    ? Math.round(
                        (analysis.bySubject['算数'].correct /
                          analysis.bySubject['算数'].total) *
                          100
                      )
                    : '--'}
                  <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">%</span>
                </div>
              </div>
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                解答: {analysis.bySubject?.['算数']?.total || 0}問
                {analysis.bySubject?.['算数']?.total > 0 && ` (${analysis.bySubject['算数'].correct}問正解)`}
              </div>
            </div>

            {/* 理科の正答率 */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-gray-400 flex items-center justify-between">
                  <span>理科の正答率</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200">理科</span>
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">
                  {analysis.bySubject?.['理科']?.total > 0
                    ? Math.round(
                        (analysis.bySubject['理科'].correct /
                          analysis.bySubject['理科'].total) *
                          100
                      )
                    : '--'}
                  <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">%</span>
                </div>
              </div>
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                解答: {analysis.bySubject?.['理科']?.total || 0}問
                {analysis.bySubject?.['理科']?.total > 0 && ` (${analysis.bySubject['理科'].correct}問正解)`}
              </div>
            </div>

            {/* 社会の正答率 */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-gray-400 flex items-center justify-between">
                  <span>社会の正答率</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-200">社会</span>
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">
                  {analysis.bySubject?.['社会']?.total > 0
                    ? Math.round(
                        (analysis.bySubject['社会'].correct /
                          analysis.bySubject['社会'].total) *
                          100
                      )
                    : '--'}
                  <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">%</span>
                </div>
              </div>
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                解答: {analysis.bySubject?.['社会']?.total || 0}問
                {analysis.bySubject?.['社会']?.total > 0 && ` (${analysis.bySubject['社会'].correct}問正解)`}
              </div>
            </div>

            {/* 国語の正答率 */}
            <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-gray-400 flex items-center justify-between">
                  <span>国語の正答率</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200">国語</span>
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                  {analysis.bySubject?.['国語']?.total > 0
                    ? Math.round(
                        (analysis.bySubject['国語'].correct /
                          analysis.bySubject['国語'].total) *
                          100
                      )
                    : '--'}
                  <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">%</span>
                </div>
              </div>
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                解答: {analysis.bySubject?.['国語']?.total || 0}問
                {analysis.bySubject?.['国語']?.total > 0 && ` (${analysis.bySubject['国語'].correct}問正解)`}
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="sticky top-2 z-30 bg-slate-100/95 dark:bg-gray-900/95 backdrop-blur-md pt-1 pb-1">
          <div className="flex border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-3 px-2 sm:px-4 rounded-xl font-extrabold text-xs sm:text-sm md:text-base transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60'
              }`}
            >
              <span className="text-base sm:text-lg">📊</span>
              <span className="truncate">総合分析・アドバイス</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('units')}
              className={`flex-1 py-3 px-2 sm:px-4 rounded-xl font-extrabold text-xs sm:text-sm md:text-base transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'units'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60'
              }`}
            >
              <span className="text-base sm:text-lg">📋</span>
              <span className="truncate">単元別 詳細分析</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('wrongs')}
              className={`flex-1 py-3 px-2 sm:px-4 rounded-xl font-extrabold text-xs sm:text-sm md:text-base transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'wrongs'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60'
              }`}
            >
              <span className="text-base sm:text-lg">📝</span>
              <span className="truncate">弱点復習ノート</span>
              <span
                className={`ml-0.5 px-2 py-0.5 rounded-full text-[11px] font-black ${
                  activeTab === 'wrongs'
                    ? 'bg-white text-indigo-700'
                    : wrongAnswers.length > 0
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {wrongAnswers.length}
              </span>
            </button>
          </div>
        </div>

        {/* ===================== TAB 1: 総合分析・アドバイス ===================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Section 1: オフライン自動学習アドバイス（今後どの問題・知識を伸ばせばよいか） */}
        {analysis && (
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-indigo-200 text-xs font-extrabold mb-2">
                  🧭 オフライン常時分析エンジン
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold">
                  今後どのような問題・知識を伸ばせばよいかのアドバイス
                </h2>
              </div>
              <button
                type="button"
                onClick={handleGenerateAiCoach}
                disabled={aiLoading}
                className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold rounded-xl shadow transition text-xs md:text-sm flex items-center gap-2 self-start md:self-auto"
              >
                <span>✨</span>
                <span>
                  {aiLoading
                    ? 'AIコーチが分析中...'
                    : 'Gemini AIで詳細コーチングレポートを作成'}
                </span>
              </button>
            </div>

            {aiError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-300/40 text-xs text-rose-100">
                {aiError}
              </div>
            )}

            {/* Advice Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analysis.adviceCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-500/40 text-indigo-100 border border-indigo-300/30">
                      {card.badge}
                    </span>
                    <h3 className="text-base md:text-lg font-extrabold leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  {card.recommendedAction && (
                    <button
                      type="button"
                      onClick={() =>
                        navigate('/quiz', { state: card.recommendedAction.quizState })
                      }
                      className="w-full py-2.5 px-4 bg-white text-indigo-800 hover:bg-indigo-50 font-extrabold rounded-lg text-xs md:text-sm transition shadow"
                    >
                      ▶ {card.recommendedAction.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Gemini AI Detailed Coaching Report (Cached Offline) */}
            {aiReport && (
              <div className="mt-6 bg-white text-slate-800 rounded-xl p-5 md:p-6 shadow-lg space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    <h3 className="text-lg font-extrabold text-indigo-900">
                      AI専属コーチからの学習診断レポート
                    </h3>
                  </div>
                  {aiReport.updatedAt && (
                    <span className="text-xs text-gray-400">
                      作成日時: {new Date(aiReport.updatedAt).toLocaleString('ja-JP')}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="font-extrabold text-emerald-800 mb-1">
                      👏 素晴らしい点・成長ポイント
                    </div>
                    <p className="text-gray-700 leading-relaxed">{aiReport.praisePoint}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <div className="font-extrabold text-amber-800 mb-1">
                      🔍 つまずきの原因分析
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {aiReport.weaknessAnalysis}
                    </p>
                  </div>
                </div>

                {Array.isArray(aiReport.nextActionPlan) && (
                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                    <div className="font-extrabold text-indigo-900 mb-2 text-sm">
                      📌 今週伸ばすべき重点アクションプラン
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-800 list-disc list-inside">
                      {aiReport.nextActionPlan.map((step, i) => (
                        <li key={i} className="leading-relaxed font-medium">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {aiReport.encouragementMessage && (
                  <div className="text-center text-sm font-extrabold text-indigo-700 pt-1">
                    💬 「{aiReport.encouragementMessage}」
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Section 2: 難易度別 ＆ 出題形式別 得点力バランス */}
        {analysis && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Difficulty Balance */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-100 mb-4">
                🎯 難易度別の到達度バランス
              </h2>
              <div className="space-y-4">
                {analysis.difficultyStats.map((d) => (
                  <div key={d.key} className="space-y-1.5">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-700 dark:text-gray-200">{d.name}</span>
                      <span className="text-gray-500">
                        {d.accuracy !== null ? `${d.accuracy}% (${d.correct}/${d.total}問)` : '未挑戦'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          d.accuracy === null
                            ? 'w-0'
                            : d.accuracy >= 80
                              ? 'bg-emerald-500'
                              : d.accuracy >= 55
                                ? 'bg-amber-400'
                                : 'bg-rose-500'
                        }`}
                        style={{ width: `${d.accuracy || 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Question Type Balance */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-100 mb-4">
                ✏️ 出題形式別の得点力（選択 vs 語句入力 vs 記述）
              </h2>
              <div className="space-y-4">
                {analysis.questionTypeStats.map((t) => (
                  <div key={t.key} className="space-y-1.5">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-700 dark:text-gray-200">{t.name}</span>
                      <span className="text-gray-500">
                        {t.accuracy !== null ? `${t.accuracy}% (${t.correct}/${t.total}問)` : '未挑戦'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          t.accuracy === null
                            ? 'w-0'
                            : t.accuracy >= 80
                              ? 'bg-indigo-500'
                              : t.accuracy >= 55
                                ? 'bg-purple-500'
                                : 'bg-rose-500'
                        }`}
                        style={{ width: `${t.accuracy || 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section 3: 優先して伸ばすべき知識テーマ（Knowledge Tags）＆ 単元 */}
        {analysis && (analysis.priorityUnits.length > 0 || analysis.weakKnowledgeTags.length > 0) && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-100 mb-4">
              🔥 優先して伸ばすべき単元・知識テーマ TOP 5
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analysis.priorityUnits.map((u, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-rose-100 dark:border-gray-700 bg-rose-50/40 dark:bg-gray-700/40 flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs font-extrabold rounded bg-rose-500 text-white">
                        優先 #{idx + 1}
                      </span>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">
                        {u.subject} / {u.category}
                      </span>
                    </div>
                    <div className="text-base font-extrabold text-gray-800 dark:text-white mt-1">
                      {u.subCategory}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      正答率: <span className="font-bold text-rose-600">{u.accuracy}%</span>（{u.correct}/{u.total}問）
                      {u.unresolvedWrongs > 0 && `・未解消ミス ${u.unresolvedWrongs}問`}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      navigate('/quiz', {
                        state: {
                          mode: 'specific',
                          subject: u.subject,
                          category: u.category,
                          subCategory: u.subCategory,
                          limit: 5,
                        },
                      })
                    }
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-xl shadow flex-shrink-0"
                  >
                    特訓する →
                  </button>
                </div>
              ))}
            </div>

            {analysis.weakKnowledgeTags.length > 0 && (
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="text-xs font-extrabold text-gray-500 dark:text-gray-400 mb-2">
                  🏷️ 復習が必要な具体的知識タグ:
                </div>
                <div className="flex flex-wrap gap-2">
                  {analysis.weakKnowledgeTags.map((kt, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-gray-700 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-gray-600"
                    >
                      {kt.tag}（正答率 {kt.accuracy}%）
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section 4: 学習量グラフ ＆ 分野別正答率グラフ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-100 mb-4">
              📅 日次学習量 (直近7日間)
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {dataKeys.map((key) => (
                    <Bar
                      key={key}
                      dataKey={key}
                      stackId="a"
                      fill={getCategoryColor(key)}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-100 mb-4">
              📈 分野別 正答率 (%)
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={accuracyData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={80}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Bar dataKey="accuracy" fill="#6366f1" name="正答率(%)">
                    {accuracyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.accuracy >= 80
                            ? '#10b981'
                            : entry.accuracy >= 50
                              ? '#f59e0b'
                              : '#ef4444'
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* ===================== TAB 2: 単元別 詳細分析 ===================== */}
    {activeTab === 'units' && (
      <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-md space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-700 pb-4">
          <div>
            <h2 className="text-lg md:text-xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <span>📋</span>
              <span>単元別 詳細分析（選択問題 vs 入力・記述問題の定着比較）</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              「見て選べる知識（4択）」と「自分で書ける知識（語句入力・記述）」の定着差を比較し、弱点単元を重点特訓できます。
            </p>
          </div>

          {/* 教科絞り込みフィルター */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto bg-slate-100 dark:bg-gray-700/60 p-1 rounded-xl">
            {[
              { key: 'all', label: 'すべて' },
              { key: '算数', label: '算数' },
              { key: '国語', label: '国語' },
              { key: '理科', label: '理科' },
              { key: '社会', label: '社会' },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setUnitSubjectFilter(f.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                  unitSubjectFilter === f.key
                    ? 'bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 shadow-xs'
                    : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {subAccData.length === 0 ? (
          <div className="text-center py-12 text-gray-400 space-y-2">
            <span className="text-4xl">📚</span>
            <p className="text-sm font-bold">まだ学習履歴がありません。</p>
            <p className="text-xs">問題を解くと単元ごとの詳細な到達度・比較データが表示されます。</p>
          </div>
        ) : (() => {
          const filteredUnits = subAccData.filter((d) =>
            unitSubjectFilter === 'all' ? true : d.subject === unitSubjectFilter
          );

          if (filteredUnits.length === 0) {
            return (
              <div className="text-center py-10 text-gray-400 space-y-1">
                <p className="text-sm font-bold">{unitSubjectFilter} の学習履歴はまだありません。</p>
                <p className="text-xs">{unitSubjectFilter} の問題を解くとここに詳細が表示されます。</p>
              </div>
            );
          }

          return (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 text-xs">
                    <th className="py-2.5 pr-3">教科</th>
                    <th className="py-2.5 pr-4">分野</th>
                    <th className="py-2.5 pr-4">単元</th>
                    <th className="py-2.5 pr-4">正解 / 回答数</th>
                    <th className="py-2.5 pr-4">4択正答率</th>
                    <th className="py-2.5 pr-4">入力・記述正答率</th>
                    <th className="py-2.5 pr-4">総合正答率</th>
                    <th className="py-2.5 text-right">アクション</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUnits.map((d, idx) => {
                    const gap =
                      d.choiceAcc !== null && d.writeAcc !== null
                        ? d.choiceAcc - d.writeAcc
                        : null;
                    return (
                      <tr
                        key={idx}
                        className="border-b border-gray-100 dark:border-gray-800/80 hover:bg-slate-50 dark:hover:bg-gray-750 transition"
                      >
                        <td className="py-3 pr-3">
                          <span
                            className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                              d.subject === '国語'
                                ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200'
                                : d.subject === '社会'
                                  ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200'
                                  : 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200'
                            }`}
                          >
                            {d.subject}
                          </span>
                        </td>
                        <td className="py-3 pr-4 font-bold text-indigo-600 dark:text-indigo-400 text-xs">
                          {d.category}
                        </td>
                        <td className="py-3 pr-4 font-extrabold text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                          {d.name}
                        </td>
                        <td className="py-3 pr-4 text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
                          <span className="font-bold">{d.correct}</span> / {d.total}問
                        </td>
                        <td className="py-3 pr-4 text-xs font-bold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          {d.choiceAcc !== null ? `${d.choiceAcc}%` : '--'}
                          {d.choiceTotal > 0 && (
                            <span className="text-[10px] font-normal text-gray-400 ml-1">
                              ({d.choiceTotal}問)
                            </span>
                          )}
                        </td>
                        <td className="py-3 pr-4 text-xs font-bold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          {d.writeAcc !== null ? `${d.writeAcc}%` : '--'}
                          {d.writeTotal > 0 && (
                            <span className="text-[10px] font-normal text-gray-400 ml-1">
                              ({d.writeTotal}問)
                            </span>
                          )}
                          {gap !== null && gap >= 20 && (
                            <span
                              className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-200 font-bold"
                              title="4択に比べ入力・記述で点数が落ちています。語句入力の特訓が有効です。"
                            >
                              要特訓
                            </span>
                          )}
                        </td>
                        <td className="py-3 pr-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-2 rounded-full ${
                                  d.accuracy >= 80
                                    ? 'bg-emerald-500'
                                    : d.accuracy >= 50
                                      ? 'bg-amber-400'
                                      : 'bg-rose-500'
                                }`}
                                style={{ width: `${d.accuracy}%` }}
                              />
                            </div>
                            <span className="text-xs font-extrabold text-gray-700 dark:text-gray-200">
                              {d.accuracy}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() =>
                              navigate('/quiz', {
                                state: {
                                  mode: 'specific',
                                  subject: d.subject,
                                  category: d.category,
                                  subCategory: d.name,
                                  limit: 5,
                                },
                              })
                            }
                            className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white dark:bg-gray-700 dark:text-indigo-300 dark:hover:bg-indigo-600 dark:hover:text-white rounded-lg text-xs font-extrabold transition shadow-2xs"
                          >
                            特訓 →
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })()}
      </div>
    )}

    {/* ===================== TAB 3: 現在の弱点復習ノート ===================== */}
    {activeTab === 'wrongs' && (
      <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-md space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-700 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg md:text-xl font-extrabold text-gray-800 dark:text-gray-100">
                📝 現在の弱点復習ノート
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-500 text-white">
                {wrongAnswers.length}問
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              間違えた問題は自動的にここに集約されます。再挑戦して正解すると自動的にリストから卒業します。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* 教科フィルター */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-gray-700/60 p-1 rounded-xl">
              {[
                { key: 'all', label: 'すべて' },
                { key: '算数', label: '算数' },
                { key: '国語', label: '国語' },
                { key: '理科', label: '理科' },
                { key: '社会', label: '社会' },
              ].map((f) => {
                const count =
                  f.key === 'all'
                    ? wrongAnswers.length
                    : wrongAnswers.filter((q) => q.subject === f.key).length;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setWrongSubjectFilter(f.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all flex items-center gap-1 ${
                      wrongSubjectFilter === f.key
                        ? 'bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 shadow-xs'
                        : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                  >
                    <span>{f.label}</span>
                    {count > 0 && <span className="text-[10px] opacity-80">({count})</span>}
                  </button>
                );
              })}
            </div>

            {wrongAnswers.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (showAllAnswers) {
                      setShowAllAnswers(false);
                      setRevealedAnswers({});
                    } else {
                      setShowAllAnswers(true);
                    }
                  }}
                  className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-xs font-bold transition flex items-center gap-1 shadow-xs"
                >
                  <span>{showAllAnswers ? '🙈 すべての答えを隠す' : '👁️ すべての答えを表示'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const filtered =
                      wrongSubjectFilter === 'all'
                        ? wrongAnswers
                        : wrongAnswers.filter((q) => q.subject === wrongSubjectFilter);
                    if (filtered.length === 0) return;
                    navigate('/quiz', {
                      state: {
                        mode: 'custom_list',
                        customQuestionsList: filtered,
                        limit: Math.min(filtered.length, 30),
                      },
                    });
                  }}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold rounded-xl shadow transition flex items-center gap-1.5"
                >
                  <span>▶</span>
                  <span>
                    {wrongSubjectFilter === 'all'
                      ? '弱点をまとめて復習する'
                      : `${wrongSubjectFilter}の弱点を復習`}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {wrongAnswers.length > 0 && (
          <div className="px-3.5 py-2.5 bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100/70 dark:border-indigo-900/50 rounded-xl text-xs text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
            <span>💡</span>
            <span>
              <strong>暗記チェック機能</strong>：問題文を読んで頭の中で答えてから「👁️ 答えと解説を見る」を押すか、答えを見ずに「この問題を再挑戦 →」を押してテストできます。
            </span>
          </div>
        )}

        {wrongAnswers.length === 0 ? (
          <div className="text-center py-12 text-gray-400 space-y-2">
            <span className="text-4xl">🎉</span>
            <p className="text-sm font-bold">現在、復習リストに残っている問題はありません！</p>
            <p className="text-xs">素晴らしい定着度です。新しい問題に挑戦してみましょう。</p>
          </div>
        ) : (() => {
          const filteredWrongs = wrongAnswers.filter((q) =>
            wrongSubjectFilter === 'all' ? true : q.subject === wrongSubjectFilter
          );

          if (filteredWrongs.length === 0) {
            return (
              <div className="text-center py-10 text-gray-400 space-y-1">
                <p className="text-sm font-bold">{wrongSubjectFilter} の弱点問題はありません！</p>
                <p className="text-xs">この調子で他教科の復習も進めましょう。</p>
              </div>
            );
          }

          return (
            <div className="space-y-3">
              {filteredWrongs.map((q) => {
                const isRevealed = showAllAnswers || !!revealedAnswers[q.id];
                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition space-y-3 bg-white dark:bg-gray-800/50 shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`px-2 py-0.5 text-xs font-extrabold rounded ${
                            q.subject === '算数'
                              ? 'bg-violet-100 text-violet-800 dark:bg-violet-900/60 dark:text-violet-200'
                              : q.subject === '国語'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                                : q.subject === '社会'
                                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200'
                          }`}
                        >
                          {q.subject}
                        </span>
                        <span className="px-2 py-0.5 text-xs font-bold rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                          {q.category} / {q.subCategory}
                        </span>
                        <span className="px-2 py-0.5 text-xs font-bold rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          {DIFFICULTY_LABELS[q.difficulty] || '標準'} ・{' '}
                          {QUESTION_TYPE_LABELS[q.questionType] || '4択'}
                        </span>
                        {q.knowledgeTag && (
                          <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                            🏷️ {q.knowledgeTag}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          navigate('/quiz', {
                            state: {
                              mode: 'custom_list',
                              customQuestionsList: [q],
                              limit: 1,
                            },
                          })
                        }
                        className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-extrabold shadow-xs transition flex items-center gap-1"
                      >
                        <span>この問題を再挑戦</span>
                        <span>→</span>
                      </button>
                    </div>

                    <p className="font-bold text-gray-800 dark:text-gray-100 text-sm md:text-base leading-relaxed pl-0.5">
                      Q. {q.question}
                    </p>

                    {q.figureSvg && (
                      <div className="my-2 flex justify-center bg-slate-50 dark:bg-gray-900/60 p-2.5 rounded-xl border border-gray-200/80 dark:border-gray-700">
                        <div
                          className="max-w-xs w-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-48"
                          dangerouslySetInnerHTML={{ __html: q.figureSvg }}
                        />
                      </div>
                    )}

                    <div className="pt-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          setRevealedAnswers((prev) => ({
                            ...prev,
                            [q.id]: !isRevealed,
                          }));
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                          isRevealed
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            : 'bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800'
                        }`}
                      >
                        <span>{isRevealed ? '🙈 答えと解説を隠す' : '👁️ 答えと解説を見る'}</span>
                      </button>

                      {isRevealed && (
                        <div className="mt-2.5 p-3 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 space-y-2">
                          <div className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                            <span className="text-gray-500 dark:text-gray-400">正解:</span>
                            <span className="text-rose-600 dark:text-rose-400 font-black text-sm md:text-base">
                              {q.answer}
                            </span>
                          </div>
                          {q.explanation && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pt-1.5 border-t border-indigo-100 dark:border-indigo-900/60">
                              💡 解説: {q.explanation}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>
    )}

    {/* Page Bottom: Back to Top Helper Button */}
    <div className="pt-4 pb-8 flex justify-center">
      <button
        type="button"
        onClick={scrollToTop}
        className="px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm font-extrabold shadow-sm transition flex items-center gap-1.5"
      >
        <span>↑</span>
        <span>ページの最上部へ戻る</span>
      </button>
    </div>

    {/* Floating Action Button: Scroll To Top */}
    {showScrollTop && (
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3.5 md:p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white/40 focus:outline-hidden"
        title="ページの最上部へ戻る"
        aria-label="最上部へ戻る"
      >
        <span className="text-lg md:text-xl font-black leading-none">↑</span>
      </button>
    )}
      </div>
    </div>
  );
};

export default HistoryPage;
