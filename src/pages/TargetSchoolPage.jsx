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
        category: todo.quizFilter.category,
        subCategory: todo.quizFilter.subCategory,
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
            🏫 志望校を選択（関西最難関 ＆ 開成）:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
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

              <div className="mt-3 px-4 py-1.5 rounded-full border text-xs font-black bg-white/15 border-white/30 text-white">
                判定：{report.rankLabel}
              </div>
            </div>

            {/* Right: Strategy & Radar */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-300 tracking-wider">
                  🔥 出題の特徴 ＆ 合格のツボ
                </span>
                <h3 className="text-lg font-extrabold mt-0.5">{school.tagline}</h3>
              </div>

              <ul className="space-y-1.5 text-xs md:text-sm text-indigo-100/90 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10">
                {school.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* 4-Axis Radar Chart */}
              <div className="h-44 w-full pt-1">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={report.radarData}>
                    <PolarGrid stroke="#ffffff30" />
                    <PolarAngleAxis dataKey="subject" stroke="#cbd5e1" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis domain={[0, 100]} stroke="transparent" />
                    <Radar
                      name="到達力"
                      dataKey="value"
                      stroke="#fbbf24"
                      fill="#fbbf24"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
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
                ★マークがついている分野はこの学校で特に合否を分ける最重要分野です
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              全解答数: {report.totalAnswered}問
            </span>
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
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-gray-800 dark:text-gray-100">
                      {c.category}
                    </span>
                    {c.isPriority && (
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-amber-400 text-slate-900 rounded">
                        最頻出 ★★★
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-black ${
                      c.isPassed ? 'text-emerald-600' : 'text-rose-500'
                    }`}
                  >
                    {c.isPassed ? '合格水準 🎉' : `あと ${Math.abs(c.diff)}%`}
                  </span>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                  <span>正答率: <strong className="text-gray-800 dark:text-white">{c.accuracy}%</strong> ({c.total}問演習)</span>
                  <span>目標: {report.targetScore}%</span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full transition-all ${
                      c.isPassed ? 'bg-emerald-500' : c.accuracy >= 50 ? 'bg-amber-400' : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.min(100, c.accuracy)}%` }}
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
