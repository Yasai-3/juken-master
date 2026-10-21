import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getCustomQuestions,
  addCustomQuestion,
  addBulkCustomQuestions,
  deleteCustomQuestion,
  saveCustomQuestions,
  updateCustomQuestion,
  exportAllData,
  exportQuestionsOnly,
  importData,
  getSettings,
  saveSettings,
} from '../utils/storage';
import {
  fileToGenerativePart,
  generateQuestionsFromMedia,
  verifyAndResolveModel,
  fetchAvailableGeminiModels,
  buildChatPromptForQuestions,
  parseAiResponseToQuestions,
} from '../utils/geminiGenerator';
import { DIFFICULTY_LABELS, QUESTION_TYPE_LABELS } from '../utils/advisorEngine';

const AdminPage = () => {
  const navigate = useNavigate();
  const [customQuestions, setCustomQuestions] = useState([]);
  const [activeTab, setActiveTab] = useState('ai_studio');
  const [studioMode, setStudioMode] = useState('chat_prompt'); // 'chat_prompt' (API枠消費ゼロ) | 'direct_api'

  // Settings State
  const [settings, setSettings] = useState(getSettings());
  const [settingsSavedMsg, setSettingsSavedMsg] = useState('');
  const [availableModels, setAvailableModels] = useState([]);
  const [testingApi, setTestingApi] = useState(false);

  // AI Studio State
  const [uploadedMedia, setUploadedMedia] = useState([]);
  const [sourceText, setSourceText] = useState('');
  const [aiParams, setAiParams] = useState({
    subject: 'auto',
    category: '',
    subCategory: '',
    difficulty: 'mix',
    questionType: 'mix',
    count: 10,
    focusInstruction: '',
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiError, setAiError] = useState('');
  const [generatedDrafts, setGeneratedDrafts] = useState([]);
  const [chatResponseInput, setChatResponseInput] = useState('');
  const [copiedPromptMsg, setCopiedPromptMsg] = useState('');

  // List Filter State
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Manual Form State
  const [editingId, setEditingId] = useState(null);
  const [manualForm, setManualForm] = useState({
    subject: '理科',
    category: '',
    subCategory: '',
    difficulty: 'standard',
    questionType: 'choice',
    question: '',
    options: ['', '', '', ''],
    answer: '',
    acceptableAnswersStr: '',
    keywordsStr: '',
    knowledgeTag: '',
    explanation: '',
  });

  // JSON Import State
  const [jsonInput, setJsonInput] = useState('');

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    setCustomQuestions(getCustomQuestions());
  };

  const handleSaveSettings = (newPartial) => {
    const updated = saveSettings(newPartial);
    setSettings(updated);
    setSettingsSavedMsg('設定を保存しました');
    setTimeout(() => setSettingsSavedMsg(''), 2500);
  };

  const handleTestApiConnection = async () => {
    if (!settings.geminiApiKey) {
      setAiError('APIキーを入力してから「接続テスト」を押してください。');
      return;
    }
    setTestingApi(true);
    setAiError('');
    try {
      const models = await fetchAvailableGeminiModels(settings.geminiApiKey);
      setAvailableModels(models);
      const verified = await verifyAndResolveModel(
        settings.geminiApiKey,
        settings.geminiModel
      );
      const updated = saveSettings({
        geminiModel: verified,
        verifiedModel: verified,
      });
      setSettings(updated);
      setSettingsSavedMsg(`接続成功！ (${verified})`);
    } catch (err) {
      setAiError(err.message);
    } finally {
      setTestingApi(false);
    }
  };

  // --- AI Studio Handlers ---
  const handleMediaUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setAiError('');
    try {
      const converted = await Promise.all(files.map((f) => fileToGenerativePart(f)));
      setUploadedMedia((prev) => [...prev, ...converted]);
    } catch (err) {
      setAiError(err.message);
    }
  };

  const handleRemoveMedia = (idx) => {
    setUploadedMedia((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleRunAiGeneration = async () => {
    if (uploadedMedia.length === 0 && !sourceText.trim()) {
      setAiError('教材の「画像またはPDFファイル」を追加するか、テキストを入力してください。');
      return;
    }
    if (!settings.geminiApiKey) {
      setAiError('上部のAPIキー入力欄にGemini APIキーを入力してください。');
      return;
    }

    setIsGenerating(true);
    setAiError('');
    try {
      const results = await generateQuestionsFromMedia({
        apiKey: settings.geminiApiKey,
        model: settings.geminiModel,
        mediaParts: uploadedMedia,
        sourceText,
        ...aiParams,
      });
      setGeneratedDrafts(results);
    } catch (err) {
      setAiError(err.message || '問題の自動生成中にエラーが発生しました。');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyPrompt = async () => {
    const promptText = buildChatPromptForQuestions(aiParams);
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedPromptMsg('📋 プロンプトをコピーしました！AntigravityまたはGeminiにPDFと一緒に貼り付けてください。');
      setTimeout(() => setCopiedPromptMsg(''), 4000);
    } catch {
      // Clipboard fallback
      const ta = document.createElement('textarea');
      ta.value = promptText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopiedPromptMsg('📋 プロンプトをコピーしました！');
      setTimeout(() => setCopiedPromptMsg(''), 4000);
    }
  };

  const handleParseChatResponse = (autoSave = false) => {
    setAiError('');
    try {
      const parsedList = parseAiResponseToQuestions(chatResponseInput);
      if (autoSave) {
        const savedList = addBulkCustomQuestions(parsedList);
        loadQuestions();
        setChatResponseInput('');
        setGeneratedDrafts([]);
        alert(`🎉 ${savedList.length}問の問題を一括登録しました！`);
        setActiveTab('list');
      } else {
        setGeneratedDrafts(parsedList);
      }
    } catch (err) {
      setAiError(err.message);
    }
  };

  const handleBulkJsonFilesUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setAiError('');
    let totalAdded = 0;

    for (const file of files) {
      try {
        const text = await file.text();
        const res = importData(text);
        if (res.success) {
          totalAdded += res.count || 0;
        }
      } catch (err) {
        console.error(err);
      }
    }
    loadQuestions();
    alert(`📂 ${files.length}個のファイルから合計 ${totalAdded} 問を一括登録しました！`);
    setActiveTab('list');
  };

  const handleSaveGeneratedDrafts = (andStartQuiz = false) => {
    if (generatedDrafts.length === 0) return;
    const savedList = addBulkCustomQuestions(generatedDrafts);
    loadQuestions();
    setGeneratedDrafts([]);
    setChatResponseInput('');

    if (andStartQuiz) {
      navigate('/quiz', {
        state: {
          mode: 'custom_list',
          customQuestionsList: savedList,
          limit: savedList.length,
        },
      });
    } else {
      alert(`${savedList.length}問を問題バンクに保存しました！（オフラインでいつでも解けます）`);
      setActiveTab('list');
    }
  };

  const handleRemoveDraft = (idx) => {
    setGeneratedDrafts((prev) => prev.filter((_, i) => i !== idx));
  };

  // --- Manual / List Handlers ---
  const handleDelete = (id) => {
    if (window.confirm('この問題を削除しますか？')) {
      deleteCustomQuestion(id);
      loadQuestions();
    }
  };

  const handleEdit = (q) => {
    setManualForm({
      subject: q.subject || '理科',
      category: q.category || '',
      subCategory: q.subCategory || '',
      difficulty: q.difficulty || 'standard',
      questionType: q.questionType || 'choice',
      question: q.question || '',
      options: [...(q.options || []), '', '', '', ''].slice(0, 4),
      answer: q.answer || '',
      acceptableAnswersStr: (q.acceptableAnswers || []).join(', '),
      keywordsStr: (q.keywords || []).join(', '),
      knowledgeTag: q.knowledgeTag || '',
      explanation: q.explanation || '',
    });
    setEditingId(q.id);
    setActiveTab('manual');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setManualForm({
      subject: '理科',
      category: '',
      subCategory: '',
      difficulty: 'standard',
      questionType: 'choice',
      question: '',
      options: ['', '', '', ''],
      answer: '',
      acceptableAnswersStr: '',
      keywordsStr: '',
      knowledgeTag: '',
      explanation: '',
    });
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    const acceptableAnswers = manualForm.acceptableAnswersStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const keywords = manualForm.keywordsStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const questionData = {
      subject: manualForm.subject,
      category: manualForm.category,
      subCategory: manualForm.subCategory,
      difficulty: manualForm.difficulty,
      questionType: manualForm.questionType,
      question: manualForm.question,
      options:
        manualForm.questionType === 'choice'
          ? manualForm.options.filter((o) => o.trim() !== '')
          : [],
      answer: manualForm.answer,
      acceptableAnswers:
        acceptableAnswers.length > 0 ? acceptableAnswers : [manualForm.answer],
      keywords,
      knowledgeTag:
        manualForm.knowledgeTag ||
        `${manualForm.category}・${manualForm.subCategory}`,
      explanation: manualForm.explanation,
    };

    if (editingId) {
      updateCustomQuestion({ ...questionData, id: editingId });
      alert('問題を更新しました');
    } else {
      addCustomQuestion(questionData);
      alert('問題を保存しました');
    }

    cancelEdit();
    loadQuestions();
    setActiveTab('list');
  };

  // --- Backup / Tablet Sync Handlers ---
  const downloadJsonFile = (dataStr, prefix) => {
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${prefix}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = importData(event.target.result);
      if (result.success) {
        alert(
          `データのインポートが完了しました！\n新規追加された問題: ${result.count || 0}件`
        );
        loadQuestions();
      } else {
        alert('インポートに失敗しました: ' + result.error);
      }
    };
    reader.readAsText(file);
  };

  const handleJsonImport = () => {
    const res = importData(jsonInput);
    if (res.success) {
      setJsonInput('');
      alert(`${res.count}問のインポートに成功しました！`);
      loadQuestions();
      setActiveTab('list');
    } else {
      alert('インポートエラー: ' + res.error);
    }
  };

  const filteredQuestions = customQuestions.filter((q) => {
    if (filterSubject !== 'all' && q.subject !== filterSubject) return false;
    if (filterType !== 'all' && q.questionType !== filterType) return false;
    return true;
  });

  const generatedChatPrompt = buildChatPromptForQuestions(aiParams);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 p-4 md:p-6 font-sans">
      <div className="max-w-5xl mx-auto pb-12">
        <header className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
          >
            ← ホームに戻る
          </button>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            ✨ AI作問スタジオ ＆ 一括問題登録
          </h1>
        </header>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-white dark:bg-gray-800 p-1.5 rounded-2xl shadow-sm overflow-x-auto">
          {[
            { id: 'ai_studio', label: '✨ AI一括作問・登録' },
            { id: 'list', label: `📋 登録済み問題 (${customQuestions.length})` },
            { id: 'manual', label: editingId ? '✏️ 問題編集中' : '➕ 手動で問題追加' },
            { id: 'backup', label: '📲 タブレット連携・保存/設定' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id !== 'manual') cancelEdit();
              }}
              className={`flex-1 py-2.5 px-4 rounded-xl font-extrabold text-xs md:text-sm transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 md:p-8 rounded-2xl shadow-lg">
          {/* TAB 1: AI STUDIO */}
          {activeTab === 'ai_studio' && (
            <div className="space-y-6">
              {/* Sub-mode Toggle: Chat Prompt (Zero API) vs Direct API */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-100 dark:bg-gray-700/60 p-2 rounded-2xl">
                <button
                  type="button"
                  onClick={() => {
                    setStudioMode('chat_prompt');
                    setAiError('');
                  }}
                  className={`p-3.5 rounded-xl text-left transition-all border-2 ${
                    studioMode === 'chat_prompt'
                      ? 'bg-white dark:bg-gray-800 border-indigo-600 shadow-md'
                      : 'border-transparent hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-extrabold text-indigo-700 dark:text-indigo-300">
                      💬 Antigravity / Geminiチャットで作問（推奨）
                    </span>
                    <span className="text-[11px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      API枠消費ゼロ
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PDFをGeminiやAntigravityに添付して大量の問題を作り、ここに貼り付けて一括登録します
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStudioMode('direct_api');
                    setAiError('');
                  }}
                  className={`p-3.5 rounded-xl text-left transition-all border-2 ${
                    studioMode === 'direct_api'
                      ? 'bg-white dark:bg-gray-800 border-indigo-600 shadow-md'
                      : 'border-transparent hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-extrabold text-gray-800 dark:text-gray-200">
                      🔑 アプリ内でAPI直接作問
                    </span>
                    <span className="text-[11px] font-bold bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-2 py-0.5 rounded-full">
                      APIキー使用
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    アプリ内に直接画像やPDFを読み込み、Gemini APIキーを使ってその場で生成します
                  </p>
                </button>
              </div>

              {/* Common Parameter Selector */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-gray-700/40 border border-indigo-100 dark:border-gray-700">
                <h2 className="text-base md:text-lg font-extrabold text-gray-800 dark:text-white mb-3">
                  ① 作問する難易度・問題形式・問題数の設定
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                      教科
                    </label>
                    <select
                      value={aiParams.subject}
                      onChange={(e) =>
                        setAiParams({ ...aiParams, subject: e.target.value })
                      }
                      className="w-full p-2.5 text-sm font-bold border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    >
                      <option value="auto">🤖 資料から自動判別（理科/社会）</option>
                      <option value="理科">🔬 理科</option>
                      <option value="社会">🌏 社会</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                      難易度バランス
                    </label>
                    <select
                      value={aiParams.difficulty}
                      onChange={(e) =>
                        setAiParams({ ...aiParams, difficulty: e.target.value })
                      }
                      className="w-full p-2.5 text-sm font-bold border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    >
                      <option value="mix">🌈 基礎・標準・応用をミックス（推奨）</option>
                      <option value="basic">★☆☆ 基礎のみ（一問一答・基本確認）</option>
                      <option value="standard">★★☆ 標準のみ（模試・週テストレベル）</option>
                      <option value="advanced">★★★ 応用のみ（難関校・理由考察）</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                      出題形式
                    </label>
                    <select
                      value={aiParams.questionType}
                      onChange={(e) =>
                        setAiParams({ ...aiParams, questionType: e.target.value })
                      }
                      className="w-full p-2.5 text-sm font-bold border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    >
                      <option value="mix">✨ 4択＋語句入力＋短文記述をミックス</option>
                      <option value="choice">🔘 4択選択問題のみ</option>
                      <option value="input">✍️ 一問一答・語句入力のみ</option>
                      <option value="descriptive">📝 短文記述問題のみ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                      分野名（空欄ならAI自動設定）
                    </label>
                    <input
                      type="text"
                      placeholder="例: 生物 / 歴史 / 地理"
                      value={aiParams.category}
                      onChange={(e) =>
                        setAiParams({ ...aiParams, category: e.target.value })
                      }
                      className="w-full p-2.5 text-sm border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                      単元名（空欄ならAI自動設定）
                    </label>
                    <input
                      type="text"
                      placeholder="例: 植物 / 江戸時代"
                      value={aiParams.subCategory}
                      onChange={(e) =>
                        setAiParams({ ...aiParams, subCategory: e.target.value })
                      }
                      className="w-full p-2.5 text-sm border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                      作成する問題数
                    </label>
                    <select
                      value={aiParams.count}
                      onChange={(e) =>
                        setAiParams({ ...aiParams, count: Number(e.target.value) })
                      }
                      className="w-full p-2.5 text-sm font-bold border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    >
                      <option value={5}>5問</option>
                      <option value={10}>10問（おすすめ）</option>
                      <option value={15}>15問</option>
                      <option value={20}>20問（大量作成）</option>
                      <option value={30}>30問（単元徹底網羅）</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                    💡 追加リクエスト（特定のページ範囲や重点的に出したい内容があれば入力）
                  </label>
                  <input
                    type="text"
                    placeholder="例: PDFの3〜5ページの実験表を中心に作問して / 年号よりも出来事の理由を多く出して"
                    value={aiParams.focusInstruction}
                    onChange={(e) =>
                      setAiParams({ ...aiParams, focusInstruction: e.target.value })
                    }
                    className="w-full p-2.5 text-sm border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              {/* MODE A: CHAT PROMPT & BULK PASTE REGISTRATION (ZERO API QUOTA) */}
              {studioMode === 'chat_prompt' && (
                <div className="space-y-6">
                  {/* Step 2: Copy Prompt */}
                  <div className="p-5 rounded-2xl border-2 border-indigo-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base md:text-lg font-extrabold text-gray-800 dark:text-white">
                          ② 専用プロンプトをコピーして、AI（Gemini / Antigravity）にPDFと渡す
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          上の条件に合わせた専用指示文です。ボタンを押してコピーし、PDFと一緒にAIチャットへ貼り付けてください。
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyPrompt}
                        className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow text-sm whitespace-nowrap"
                      >
                        📋 作問プロンプトをコピーする
                      </button>
                    </div>

                    {copiedPromptMsg && (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                        {copiedPromptMsg}
                      </div>
                    )}

                    <details className="text-xs text-gray-500">
                      <summary className="cursor-pointer font-bold text-indigo-600 hover:underline">
                        生成されるプロンプトの内容を確認する（クリックで開閉）
                      </summary>
                      <pre className="mt-2 p-3 rounded-xl bg-slate-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono text-[11px] max-h-48 overflow-y-auto border">
                        {generatedChatPrompt}
                      </pre>
                    </details>
                  </div>

                  {/* Step 3: Paste AI Output & Bulk Register */}
                  <div className="p-5 rounded-2xl border-2 border-emerald-200 dark:border-gray-700 bg-emerald-50/30 dark:bg-gray-800 space-y-4">
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-gray-800 dark:text-white">
                        ③ AIが出力した回答を貼り付けて一括登録する
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                        AIの回答全文をそのまま貼り付けても、自動でJSON問題データだけを抜き出して登録します。
                      </p>
                    </div>

                    <textarea
                      value={chatResponseInput}
                      onChange={(e) => setChatResponseInput(e.target.value)}
                      rows={6}
                      placeholder="ここにGeminiやAntigravityが出力した回答（[ { ... } ]）をそのまま貼り付けてください..."
                      className="w-full p-4 text-xs md:text-sm font-mono border-2 border-emerald-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:border-emerald-600 focus:outline-none"
                    />

                    {aiError && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-bold whitespace-pre-wrap">
                        ⚠️ {aiError}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={() => handleParseChatResponse(false)}
                        className="flex-1 py-3.5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow text-sm md:text-base transition"
                      >
                        🔍 問題を読み取ってプレビュー確認する
                      </button>
                      <button
                        type="button"
                        onClick={() => handleParseChatResponse(true)}
                        className="flex-1 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow text-sm md:text-base transition"
                      >
                        💾 そのまま問題バンクに一括登録する
                      </button>
                    </div>

                    {/* Or Upload JSON files directly */}
                    <div className="pt-3 border-t border-emerald-200/70 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-gray-600 dark:text-gray-300">
                        📂 Antigravity等で保存した「.jsonファイル」から一括登録する場合（複数ファイル選択可）:
                      </span>
                      <div>
                        <input
                          type="file"
                          accept=".json"
                          multiple
                          onChange={handleBulkJsonFilesUpload}
                          className="hidden"
                          id="bulk-json-upload"
                        />
                        <label
                          htmlFor="bulk-json-upload"
                          className="cursor-pointer inline-block px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg font-extrabold text-indigo-700 dark:text-indigo-300 hover:bg-gray-50 shadow-sm"
                        >
                          JSONファイルを選択して一括追加
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE B: DIRECT API GENERATION */}
              {studioMode === 'direct_api' && (
                <div className="space-y-6">
                  {/* Quick API Key Bar */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-700/50 border border-slate-200 dark:border-gray-700 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label className="block text-xs font-extrabold text-gray-600 dark:text-gray-300">
                        🔑 Gemini APIキー（ブラウザ内にのみ安全に保存されます）
                      </label>
                      {settings.verifiedModel && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                          ✓ 動作確認済みモデル: {settings.verifiedModel}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="password"
                        value={settings.geminiApiKey}
                        onChange={(e) =>
                          handleSaveSettings({
                            geminiApiKey: e.target.value,
                            verifiedModel: '',
                          })
                        }
                        placeholder="AIzaSy... から始まるGemini APIキーを入力"
                        className="flex-1 p-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                      <select
                        value={settings.geminiModel || 'auto'}
                        onChange={(e) =>
                          handleSaveSettings({ geminiModel: e.target.value })
                        }
                        className="p-2.5 text-xs md:text-sm font-bold border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      >
                        <option value="auto">🤖 自動選択（推奨・最新Flashモデル）</option>
                        {availableModels.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={handleTestApiConnection}
                        disabled={testingApi}
                        className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-extrabold rounded-lg shadow whitespace-nowrap"
                      >
                        {testingApi ? '確認中...' : '🔍 接続テスト'}
                      </button>
                    </div>
                    {settingsSavedMsg && (
                      <div className="text-xs font-bold text-emerald-600">
                        ✓ {settingsSavedMsg}
                      </div>
                    )}
                  </div>

                  {/* Upload Images / PDFs */}
                  <div>
                    <h2 className="text-lg font-extrabold text-gray-800 dark:text-white mb-2">
                      ② 教材の画像・PDFを読み込む
                    </h2>
                    <div className="border-2 border-dashed border-indigo-300 dark:border-gray-600 rounded-2xl p-6 text-center bg-indigo-50/40 dark:bg-gray-700/30">
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        multiple
                        onChange={handleMediaUpload}
                        className="hidden"
                        id="media-upload"
                      />
                      <label
                        htmlFor="media-upload"
                        className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3 px-6 rounded-xl shadow inline-flex items-center gap-2 transition"
                      >
                        <span>📷📄</span>
                        <span>画像・PDFファイルを選択する（複数可）</span>
                      </label>
                    </div>

                    {uploadedMedia.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {uploadedMedia.map((item, idx) => (
                          <div
                            key={idx}
                            className="relative border rounded-xl p-2 bg-gray-50 dark:bg-gray-700 flex flex-col items-center"
                          >
                            <button
                              type="button"
                              onClick={() => handleRemoveMedia(idx)}
                              className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center shadow"
                            >
                              ×
                            </button>
                            {item.isPdf ? (
                              <div className="h-24 flex flex-col items-center justify-center text-indigo-600">
                                <span className="text-4xl">📄</span>
                                <span className="text-[11px] font-bold mt-1">PDF資料</span>
                              </div>
                            ) : (
                              <img
                                src={item.previewUrl}
                                alt={item.name}
                                className="h-24 w-full object-cover rounded-lg"
                              />
                            )}
                            <span className="text-[11px] text-gray-600 dark:text-gray-300 truncate w-full text-center mt-1">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-4">
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                        📝 補足テキスト
                      </label>
                      <textarea
                        value={sourceText}
                        onChange={(e) => setSourceText(e.target.value)}
                        rows={2}
                        placeholder="（任意）補足テキストがあれば入力してください。"
                        className="w-full p-3 text-sm border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {aiError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-bold whitespace-pre-wrap">
                      ⚠️ {aiError}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleRunAiGeneration}
                    disabled={isGenerating}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 text-white font-extrabold rounded-xl shadow-lg text-lg transition"
                  >
                    {isGenerating
                      ? '🤖 画像・PDFを解析して問題を作成中...（約10〜20秒）'
                      : '✨ APIを使って自動作問を実行する'}
                  </button>
                </div>
              )}

              {/* Step 3: Generated Drafts Preview */}
              {generatedDrafts.length > 0 && (
                <div className="mt-8 border-t-2 border-indigo-100 dark:border-gray-700 pt-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h3 className="text-xl font-extrabold text-indigo-900 dark:text-indigo-300">
                      🎉 {generatedDrafts.length}問の問題が生成されました！
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleSaveGeneratedDrafts(false)}
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow text-sm"
                      >
                        💾 すべて問題バンクに保存する
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveGeneratedDrafts(true)}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow text-sm"
                      >
                        ▶ 保存して今すぐこの問題を解く！
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {generatedDrafts.map((q, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-indigo-100 dark:border-gray-700 bg-indigo-50/30 dark:bg-gray-700/30 flex justify-between items-start gap-4"
                      >
                        <div className="space-y-1 text-sm">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 text-xs font-extrabold bg-indigo-600 text-white rounded">
                              {q.subject} / {q.category} / {q.subCategory}
                            </span>
                            <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded">
                              {DIFFICULTY_LABELS[q.difficulty] || '標準'}
                            </span>
                            <span className="px-2 py-0.5 text-xs font-bold bg-purple-100 text-purple-800 rounded">
                              {QUESTION_TYPE_LABELS[q.questionType] || '4択'}
                            </span>
                            {q.knowledgeTag && (
                              <span className="text-xs font-bold text-gray-500">
                                🏷️ {q.knowledgeTag}
                              </span>
                            )}
                          </div>
                          <p className="font-bold text-gray-800 dark:text-white mt-1">
                            Q. {q.question}
                          </p>
                          {q.questionType === 'choice' && Array.isArray(q.options) && (
                            <p className="text-xs text-gray-500">
                              選択肢: {q.options.join(' ／ ')}
                            </p>
                          )}
                          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                            正解: {q.answer}
                            {Array.isArray(q.keywords) && q.keywords.length > 0 && (
                              <span className="ml-2 text-indigo-600">
                                （採点キーワード: {q.keywords.join('・')}）
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            解説: {q.explanation}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveDraft(idx)}
                          className="text-xs font-bold text-rose-500 hover:underline flex-shrink-0"
                        >
                          除外
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: QUESTION LIST */}
          {activeTab === 'list' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-extrabold text-gray-800 dark:text-white">
                  登録済みの自作・AI生成問題 ({filteredQuestions.length}問)
                </h2>
                <div className="flex gap-2">
                  <select
                    value={filterSubject}
                    onChange={(e) => setFilterSubject(e.target.value)}
                    className="p-2 text-xs font-bold border rounded-lg dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">すべての教科</option>
                    <option value="理科">理科のみ</option>
                    <option value="社会">社会のみ</option>
                  </select>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="p-2 text-xs font-bold border rounded-lg dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">すべての形式</option>
                    <option value="choice">4択選択</option>
                    <option value="input">語句入力</option>
                    <option value="descriptive">短文記述</option>
                  </select>
                </div>
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="mb-4">該当する問題がまだ登録されていません。</p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ai_studio')}
                    className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl"
                  >
                    ✨ AI作問スタジオで問題を作る
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredQuestions.map((q) => (
                    <div
                      key={q.id}
                      className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl hover:shadow-sm transition flex justify-between items-start gap-4"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-800 rounded">
                            {q.subject} / {q.category} / {q.subCategory}
                          </span>
                          <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded">
                            {DIFFICULTY_LABELS[q.difficulty] || '標準'}
                          </span>
                          <span className="px-2 py-0.5 text-xs font-bold bg-purple-100 text-purple-800 rounded">
                            {QUESTION_TYPE_LABELS[q.questionType] || '4択'}
                          </span>
                        </div>
                        <p className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">
                          {q.question}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          正解: <span className="font-bold">{q.answer}</span>
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <button
                          type="button"
                          onClick={() => handleEdit(q)}
                          className="text-indigo-600 hover:bg-indigo-50 text-xs font-bold border border-indigo-200 px-3 py-1 rounded-lg"
                        >
                          編集
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(q.id)}
                          className="text-rose-500 hover:bg-rose-50 text-xs font-bold border border-rose-200 px-3 py-1 rounded-lg"
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

          {/* TAB 3: MANUAL ADD / EDIT */}
          {activeTab === 'manual' && (
            <form onSubmit={handleManualSubmit} className="space-y-4">
              <h2 className="text-xl font-extrabold mb-4 text-gray-800 dark:text-white">
                {editingId ? '問題を編集' : '問題を1問手動で追加'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    教科
                  </label>
                  <select
                    value={manualForm.subject}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, subject: e.target.value })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="理科">理科</option>
                    <option value="社会">社会</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    分野 (Category)
                  </label>
                  <input
                    type="text"
                    placeholder="例: 生物"
                    value={manualForm.category}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, category: e.target.value })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    単元 (SubCategory)
                  </label>
                  <input
                    type="text"
                    placeholder="例: 植物"
                    value={manualForm.subCategory}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, subCategory: e.target.value })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    難易度
                  </label>
                  <select
                    value={manualForm.difficulty}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, difficulty: e.target.value })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="basic">★☆☆ 基礎</option>
                    <option value="standard">★★☆ 標準</option>
                    <option value="advanced">★★★ 応用</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    問題形式
                  </label>
                  <select
                    value={manualForm.questionType}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, questionType: e.target.value })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="choice">4択選択問題</option>
                    <option value="input">一問一答・語句入力</option>
                    <option value="descriptive">短文記述問題</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    知識テーマタグ (分析用)
                  </label>
                  <input
                    type="text"
                    placeholder="例: 蒸散のしくみ"
                    value={manualForm.knowledgeTag}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, knowledgeTag: e.target.value })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  問題文
                </label>
                <textarea
                  value={manualForm.question}
                  onChange={(e) =>
                    setManualForm({ ...manualForm, question: e.target.value })
                  }
                  className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white h-24"
                  required
                />
              </div>

              {manualForm.questionType === 'choice' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    選択肢 (4つ入力)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {manualForm.options.map((opt, idx) => (
                      <input
                        key={idx}
                        type="text"
                        placeholder={`選択肢 ${idx + 1}`}
                        value={opt}
                        onChange={(e) => {
                          const newOpts = [...manualForm.options];
                          newOpts[idx] = e.target.value;
                          setManualForm({ ...manualForm, options: newOpts });
                        }}
                        className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                      />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  正解・模範解答
                </label>
                <input
                  type="text"
                  value={manualForm.answer}
                  onChange={(e) =>
                    setManualForm({ ...manualForm, answer: e.target.value })
                  }
                  className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              {manualForm.questionType === 'input' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    許容する別解・かな表記（カンマ区切り）
                  </label>
                  <input
                    type="text"
                    placeholder="例: 蒸散, じょうさん"
                    value={manualForm.acceptableAnswersStr}
                    onChange={(e) =>
                      setManualForm({
                        ...manualForm,
                        acceptableAnswersStr: e.target.value,
                      })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}

              {manualForm.questionType === 'descriptive' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    自動採点キーワード（カンマ区切りで2〜3個）
                  </label>
                  <input
                    type="text"
                    placeholder="例: 気孔, 裏"
                    value={manualForm.keywordsStr}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, keywordsStr: e.target.value })
                    }
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  解説
                </label>
                <textarea
                  value={manualForm.explanation}
                  onChange={(e) =>
                    setManualForm({ ...manualForm, explanation: e.target.value })
                  }
                  className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white h-24"
                />
              </div>

              <div className="flex gap-3">
                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="w-1/3 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-xl"
                  >
                    キャンセル
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow"
                >
                  {editingId ? '更新する' : '問題を保存する'}
                </button>
              </div>
            </form>
          )}

          {/* TAB 4: BACKUP / TABLET SYNC / SETTINGS */}
          {activeTab === 'backup' && (
            <div className="space-y-8">
              {/* App Preferences */}
              <div>
                <h2 className="text-lg font-extrabold mb-3 text-gray-800 dark:text-white border-b pb-2">
                  ⚙️ 採点・出題オプション設定
                </h2>
                <div className="space-y-3 text-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.shuffleOptions}
                      onChange={(e) =>
                        handleSaveSettings({ shuffleOptions: e.target.checked })
                      }
                      className="w-4 h-4 text-indigo-600 rounded"
                    />
                    <span className="font-bold text-gray-700 dark:text-gray-200">
                      4択問題の選択肢の順番を毎回シャッフルする（場所暗記を防止）
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.strictKanji}
                      onChange={(e) =>
                        handleSaveSettings({ strictKanji: e.target.checked })
                      }
                      className="w-4 h-4 text-indigo-600 rounded"
                    />
                    <span className="font-bold text-gray-700 dark:text-gray-200">
                      厳格な漢字採点モード（正解に漢字が含まれる場合、ひらがな解答は「おしい（不正解）」にする）
                    </span>
                  </label>
                </div>
              </div>

              {/* Export for Tablet or Backup */}
              <div>
                <h2 className="text-lg font-extrabold mb-3 text-gray-800 dark:text-white border-b pb-2">
                  📲 Mac ⇔ Androidタブレット間のデータ受け渡し（エクスポート）
                </h2>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  MacでAI作成した問題パックや学習履歴をJSONファイルとして書き出せます。GoogleドライブやSDカード、メール等でAndroidタブレットに送り、下の「復元（インポート）」から読み込むだけでオフライン学習ができます。
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      downloadJsonFile(exportQuestionsOnly(), 'juken_questions_pack')
                    }
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3 px-5 rounded-xl shadow text-sm flex items-center gap-2"
                  >
                    <span>📦</span>
                    <span>問題パックのみ書き出す（タブレット配布用）</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      downloadJsonFile(exportAllData(), 'juken_full_backup')
                    }
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-5 rounded-xl shadow text-sm flex items-center gap-2"
                  >
                    <span>⬇️</span>
                    <span>全データ（問題＋成績履歴）をバックアップ保存</span>
                  </button>
                </div>
              </div>

              {/* Import File */}
              <div>
                <h2 className="text-lg font-extrabold mb-3 text-gray-800 dark:text-white border-b pb-2">
                  📥 データの読み込み（インポート / 旧「作問アプリ１」のデータにも対応）
                </h2>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6 text-center bg-gray-50 dark:bg-gray-700/40">
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileImport}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3 px-6 rounded-xl shadow inline-flex items-center gap-2"
                  >
                    <span>📂</span>
                    <span>JSONファイルを選択して読み込む</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    ※既存の問題や履歴は消えずに自動で統合されます。
                  </p>
                </div>

                {/* Direct JSON Paste */}
                <div className="mt-4">
                  <label className="block text-xs font-bold text-gray-500 mb-1">
                    またはJSONテキストを直接貼り付けて追加:
                  </label>
                  <div className="flex gap-2">
                    <textarea
                      value={jsonInput}
                      onChange={(e) => setJsonInput(e.target.value)}
                      rows={2}
                      placeholder='[{"subject":"理科","category":"生物",...}]'
                      className="flex-1 p-2.5 text-xs font-mono border rounded-xl bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
                    />
                    <button
                      type="button"
                      onClick={handleJsonImport}
                      className="px-4 bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold rounded-xl"
                    >
                      追加実行
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
