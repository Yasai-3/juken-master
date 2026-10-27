import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getHistory,
  getWrongAnswers,
  getAllQuestions,
  getSettings,
  saveSettings,
} from '../utils/storage';
import {
  TARGET_SCHOOLS,
  calculateTargetSchoolProgress,
} from '../utils/targetSchoolEngine';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const TargetSchoolPage = () => {
  const navigate = useNavigate();
  const [selectedSchoolId, setSelectedSchoolId] = useState(() => {
    return getSettings().targetSchoolId || TARGET_SCHOOLS[0].id;
  });
  const [report, setReport] = useState(null);

  useEffect(() => {
    const history = getHistory() || [];
    const wrong = getWrongAnswers() || [];
    const allQuestions = getAllQuestions() || [];

    const calculated = calculateTargetSchoolProgress(
      selectedSchoolId,
      history,
      wrong,
      allQuestions
    );
    setReport(calculated);
  }, [selectedSchoolId]);

  const handleSelectSchool = (schoolId) => {
    setSelectedSchoolId(schoolId);
    saveSettings({ targetSchoolId: schoolId });
  };

  const handleStartTodoQuiz = (todo) => {
    navigate('/quiz', {
      state: {
        mode: todo.quizFilter.mode || 'custom',
        limit: todo.quizFilter.limit || 5,
        difficulty: todo.quizFilter.difficulty || 'all',
        questionType: todo.quizFilter.questionType || 'all',
        subject: todo.quizFilter.subject,
        category: todo.quizFilter.category,
        subCategory: todo.quizFilter.subCategory,
        source: 'target_school_todo',
      },
    });
  };

  if (!report) return null;
  const { school } = report;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 p-4 md:p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-6 pb-12">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline text-sm md:text-base flex items-center gap-1"
          >
            ← ホームに戻る
          </button>
          <div className="text-center md:text-left">
            <span className="inline-block px-3 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-extrabold mb-1">
              🎯 志望校突破ナビゲーション
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100">
              志望校別 到達度 ＆ 合格ToDo
            </h1>
          </div>
          <button
            type="button"
            onClick={() => navigate('/history')}
            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50"
          >
            📊 全般の成績分析を見る
          </button>
        </header>

        {/* School Selector Tabs */}
        <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-xs font-extrabold text-gray-400 mb-2 px-1">
            🏫 志望校を選択（最難関 8校）:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
            {TARGET_SCHOOLS.map((s) => {
              const isSelected = s.id === selectedSchoolId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectSchool(s.id)}
                  className={`p-3 rounded-xl text-center transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold shadow-md scale-102'
                      : 'bg-slate-50 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200 font-bold hover:bg-indigo-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="text-xs opacity-80">{s.region}</div>
                  <div className="text-sm md:text-base font-extrabold mt-0.5 truncate">
                    {s.name.replace('中学校', '')}
                  </div>
                  <div className="text-[11px] mt-1 opacity-90 font-medium">
                    目標: {s.targetScore}%
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 1: Main Target Score Circle & School Profile Card */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Score Circle */}
            <div className="md:col-span-5 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/15 pb-6 md:pb-0 md:pr-6">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-white/20 text-indigo-100 mb-3">
                {school.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {school.name}
              </h2>

              <div className="relative my-4 flex items-center justify-center">
                <svg className="w-44 h-44 transform -rotate-90">
                  <circle
                    cx="88"
                    cy="88"
                    r="72"
                    stroke="currentColor"
                    strokeWidth="12"
                    className="text-white/10"
                    fill="transparent"
                  />
                  <circle
                    cx="88"
                    cy="88"
                    r="72"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeDasharray={452}
                    strokeDashoffset={452 - (452 * Math.min(100, report.progressScore)) / 100}
                    strokeLinecap="round"
                    className="text-amber-400 transition-all duration-1000 ease-out"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    {report.progressScore}
                    <span className="text-xl font-bold text-amber-300">%</span>
                  </span>
                  <span className="text-xs text-indigo-200 mt-0.5">合格到達度</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-200">合格目標ライン:</span>
                <span className="text-base font-extrabold text-amber-300">
                  {school.targetScore}%
                </span>
                <span className="text-xs text-indigo-300">
                  ({report.diffToTarget > 0 ? `あと ${report.diffToTarget}%` : '合格圏突破！'})
                </span>
              </div>

              {/* 演習問題数の充足度ゲージ */}
              <div className="w-full max-w-xs mt-3 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-left space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-indigo-200 font-bold">演習量進捗</span>
                  <span className="font-extrabold text-white">
                    {report.totalAnswered} / {report.requiredCount}問
                    <span className="text-[11px] text-amber-300 ml-1">
                      ({Math.min(100, Math.round((report.totalAnswered / report.requiredCount) * 100))}%)
                    </span>
                  </span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-700 ${
                      report.totalAnswered >= report.requiredCount
                        ? 'bg-emerald-400'
                        : 'bg-gradient-to-r from-amber-400 to-indigo-300'
                    }`}
                    style={{
                      width: `${Math.min(100, (report.totalAnswered / report.requiredCount) * 100)}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-indigo-200">
                  <span>分野網羅: {report.qualifiedCatCount}/{report.totalCatCount}分野 判定基準クリア</span>
                  <span>各分野{report.categoryMinCount}問以上</span>
                </div>
              </div>

              <div className="mt-3 px-4 py-2 rounded-2xl border text-sm font-black bg-white/20 border-white/40 text-white shadow-sm flex items-center justify-center gap-2">
                <span className="text-xl">🏆</span>
                <span>{report.rankLabel}</span>
              </div>

              {report.totalAnswered < report.requiredCount && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-amber-500/20 border border-amber-300/30 text-amber-100 text-xs font-medium leading-relaxed text-left">
                  ⚡ <strong>やる気持続システム</strong>：{school.name}は難関校のため、確かな実力判定には各分野で最低<strong>{report.categoryMinCount}問以上</strong>（全体目標<strong>{report.requiredCount}問</strong>）の実戦演習が必要です（全体あと<strong>{report.requiredCount - report.totalAnswered}問</strong>）。各分野で問題をたくさん解くほど実質到達度が高まります！
                </div>
              )}

              {report.severeWarning && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-rose-500/30 border border-rose-300/40 text-rose-100 text-xs font-semibold leading-relaxed">
                  {report.severeWarning}
                </div>
              )}
            </div>

            {/* Right: Strategy & Radar */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-300 tracking-wider">
                  🔥 出題の特徴 ＆ 合格のツボ
                </span>
                <h3 className="text-lg font-extrabold mt-0.5">{school.tagline}</h3>
              </div>

              {report.isNada && (
                <div className="px-3.5 py-2 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs font-bold flex items-center gap-2">
                  <span>💡</span>
                  <span>灘校は国・算・理の3教科入試のため、社会の出題はなく理科と国語の重要分野で判定します。</span>
                </div>
              )}

              <ul className="space-y-1.5 text-xs md:text-sm text-indigo-100/90 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10">
                {school.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* 4-Axis Radar Chart (目標水準 vs あなたの現在地) */}
              <div className="bg-black/15 p-3 rounded-2xl border border-white/10">
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={report.radarData}>
                      <PolarGrid stroke="#ffffff30" />
                      <PolarAngleAxis dataKey="subject" stroke="#cbd5e1" tick={{ fontSize: 11, fontWeight: 'bold' }} />
                      <PolarRadiusAxis domain={[0, 100]} stroke="transparent" />
                      {/* 目標水準（点線） */}
                      <Radar
                        name="合格目安目標"
                        dataKey="target"
                        stroke="#94a3b8"
                        strokeWidth={1.5}
                        strokeDasharray="4 3"
                        fill="#94a3b8"
                        fillOpacity={0.15}
                      />
                      {/* あなたの現在地 */}
                      <Radar
                        name="あなたの現在地"
                        dataKey="current"
                        stroke="#fbbf24"
                        strokeWidth={2}
                        fill="#fbbf24"
                        fillOpacity={0.45}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center items-center gap-4 text-xs mt-1 text-slate-300 font-bold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 border-t-2 border-dashed border-slate-300"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400 opacity-60"></span>
                    <span className="text-slate-300">合格目安ライン</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm"></span>
                    <span className="text-amber-300">あなたの現在地</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: 分野別 到達状況 ＆ 最重要科目の進捗 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
            <div>
              <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <span>📊</span>
                <span>{school.name} 頻出分野別の到達度バランス</span>
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                ★マークは合否を分ける最重要分野。各分野最低<strong>{report.categoryMinCount}問</strong>の演習を達成すると到達度判定が満額評価されます。
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800">
                網羅度: {report.qualifiedCatCount}/{report.totalCatCount}分野
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                全解答数: {report.totalAnswered}問
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {report.categoryStatus.map((c) => (
              <div
                key={c.category}
                className={`p-4 rounded-2xl border transition-all ${
                  c.isPriority
                    ? 'border-indigo-300 dark:border-indigo-600 bg-indigo-50/40 dark:bg-indigo-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span
                      className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                        c.subject === '国語'
                          ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200'
                          : c.subject === '理科'
                            ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200'
                            : 'bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200'
                      }`}
                    >
                      {c.subject}
                    </span>
                    <span className="font-extrabold text-sm text-gray-800 dark:text-gray-100">
                      {c.category}
                    </span>
                    {c.isPriority && (
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-amber-400 text-slate-900 rounded">
                        最頻出 ★★★
                      </span>
                    )}
                  </div>
                  {c.total === 0 ? (
                    <span className="text-[11px] font-bold text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                      未演習
                    </span>
                  ) : !c.isQualified ? (
                    <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 px-2 py-0.5 rounded">
                      演習中 (あと{c.remainingToQualify}問)
                    </span>
                  ) : (
                    <span
                      className={`text-xs font-black ${
                        c.isPassed ? 'text-emerald-600' : 'text-rose-500'
                      }`}
                    >
                      {c.isPassed ? '合格水準 🎉' : `あと ${Math.abs(c.diff)}%`}
                    </span>
                  )}
                </div>

                <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                  {c.isQualified ? (
                    <span>
                      実効到達度: <strong className="text-gray-800 dark:text-white">{c.effectiveAccuracy}%</strong>
                      <span className="text-[11px] text-gray-400 ml-1">({c.total}問済・有効)</span>
                    </span>
                  ) : (
                    <span>
                      実効到達度: <strong className="text-amber-600 dark:text-amber-400">{c.effectiveAccuracy}%</strong>
                      <span className="text-[11px] text-gray-400 ml-1">
                        (暫定{c.accuracy}%・{c.total}/{c.minRequired}問)
                      </span>
                    </span>
                  )}
                  <span>目標: {report.targetScore}%</span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full transition-all ${
                      c.isPassed
                        ? 'bg-emerald-500'
                        : c.isQualified && c.effectiveAccuracy >= 50
                          ? 'bg-amber-400'
                          : c.total === 0
                            ? 'bg-transparent'
                            : 'bg-indigo-400'
                    }`}
                    style={{ width: `${Math.min(100, c.effectiveAccuracy)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: 【タイプCの目玉】合格のための具体的アクション ToDo リスト */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border-2 border-indigo-200 dark:border-gray-700">
          <div className="mb-4">
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
              ⚡ 最短合格ルート
            </span>
            <h2 className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mt-1">
              {school.name}突破のための「具体的アクション ToDo リスト」
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              現在の弱点と学校の頻出傾向を照合し、優先度順に並べた特訓タスクです。右のボタンから即座に特訓を開始できます。
            </p>
          </div>

          <div className="space-y-3.5">
            {report.todos.map((todo, idx) => (
              <div
                key={todo.id}
                className="p-4 md:p-5 rounded-2xl border-2 border-indigo-100 dark:border-gray-700 bg-slate-50/70 dark:bg-gray-700/40 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-indigo-400 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-black rounded-full bg-indigo-600 text-white">
                      ToDo #{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-bold rounded bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200">
                      {todo.badge}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-extrabold text-gray-800 dark:text-gray-100">
                    {todo.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {todo.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleStartTodoQuiz(todo)}
                  className="flex-shrink-0 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold rounded-xl shadow-md transition text-xs md:text-sm flex items-center justify-center gap-1.5"
                >
                  <span>▶ このToDoを今すぐ特訓 (5問)</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSchoolPage;
