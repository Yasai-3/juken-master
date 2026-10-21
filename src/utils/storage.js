import sampleQuestions from '../data/sampleQuiz.json';

const HISTORY_KEY = 'quiz_app_history';
const WRONG_ANSWERS_KEY = 'quiz_app_wrong_answers';
const CUSTOM_QUESTIONS_KEY = 'quiz_app_custom_questions';
const SETTINGS_KEY = 'quiz_app_settings_v2';
const AI_ADVICE_CACHE_KEY = 'quiz_app_ai_advice_cache';
const LAST_SYNC_KEY = 'quiz_app_last_wifi_sync';
const SNAPSHOTS_KEY = 'quiz_app_history_snapshots_v1';

/**
 * 既存（作問アプリ１）の問題データやインポートデータを新フォーマットに正規化する
 */
export const normalizeQuestion = (q, index = 0) => {
  if (!q) return null;
  const hasOptions = Array.isArray(q.options) && q.options.filter(Boolean).length >= 2;
  const inferredType = q.questionType || (hasOptions ? 'choice' : 'input');
  const difficulty = ['basic', 'standard', 'advanced'].includes(q.difficulty)
    ? q.difficulty
    : 'standard';

  return {
    id: q.id || `q_${Date.now()}_${index}_${Math.random().toString(36).slice(2, 7)}`,
    subject: q.subject || '理科',
    category: q.category || '一般',
    subCategory: q.subCategory || '基本',
    difficulty,
    questionType: inferredType,
    question: q.question || '',
    options: Array.isArray(q.options) ? q.options.filter(Boolean) : [],
    answer: q.answer || '',
    acceptableAnswers: Array.isArray(q.acceptableAnswers)
      ? q.acceptableAnswers
      : q.answer
        ? [q.answer]
        : [],
    keywords: Array.isArray(q.keywords) ? q.keywords : [],
    knowledgeTag: q.knowledgeTag || `${q.category || ''}・${q.subCategory || ''}`.replace(/^・|・$/g, ''),
    explanation: q.explanation || '',
    sourceTitle: q.sourceTitle || '',
    createdAt: q.createdAt || null,
  };
};

export const getAllQuestions = () => {
  const custom = getCustomQuestions();
  const normalizedSamples = sampleQuestions.map((q, i) => normalizeQuestion(q, i)).filter(Boolean);
  return [...normalizedSamples, ...custom];
};

export const saveHistory = (result) => {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  history.push({
    date: new Date().toISOString(),
    ...result,
  });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const getHistory = () => {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
};

export const clearHistory = () => {
  const currentHistory = getHistory();
  const currentWrong = getWrongAnswers();
  const currentAiAdvice = getCachedAiAdvice();

  // 消去前に万が一のための自動復元ポイントを必ず作成する
  if (currentHistory.length > 0 || currentWrong.length > 0) {
    saveHistorySnapshot('⚠️ 全消去直前の自動保護データ', true, {
      history: currentHistory,
      wrongAnswers: currentWrong,
      aiAdvice: currentAiAdvice,
    });
  }

  localStorage.removeItem(HISTORY_KEY);
  localStorage.removeItem(WRONG_ANSWERS_KEY);
  localStorage.removeItem(AI_ADVICE_CACHE_KEY);
};

// --- Safe History Snapshots (セーブポイント記録 ＆ 復元機能) ---
export const getHistorySnapshots = () => {
  try {
    return JSON.parse(localStorage.getItem(SNAPSHOTS_KEY) || '[]');
  } catch {
    return [];
  }
};

export const saveHistorySnapshot = (label = '', isAuto = false, overrideData = null) => {
  const history = overrideData?.history ?? getHistory();
  const wrongAnswers = overrideData?.wrongAnswers ?? getWrongAnswers();
  const aiAdvice = overrideData?.aiAdvice ?? getCachedAiAdvice();

  const totalAnswered = history.reduce((acc, h) => acc + (h.total || 0), 0);
  const totalCorrect = history.reduce((acc, h) => acc + (h.score || 0), 0);
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const snapshot = {
    id: `snap_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    label: label.trim() || (isAuto ? '⚠️ 自動バックアップ' : '📌 手動セーブ記録'),
    isAuto,
    createdAt: new Date().toISOString(),
    summary: {
      sessionsCount: history.length,
      totalAnswered,
      accuracy,
      wrongCount: wrongAnswers.length,
    },
    history,
    wrongAnswers,
    aiAdvice,
  };

  const snapshots = getHistorySnapshots();
  // 最大20件まで新しい順に保持
  const updated = [snapshot, ...snapshots].slice(0, 20);
  localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(updated));
  return snapshot;
};

export const restoreHistorySnapshot = (snapshotId, mode = 'replace') => {
  const snapshots = getHistorySnapshots();
  const target = snapshots.find((s) => s.id === snapshotId);
  if (!target) {
    throw new Error('指定された記録データが見つかりません');
  }

  if (mode === 'merge') {
    const currentHistory = getHistory();
    const existingKeys = new Set(
      currentHistory.map((h) => `${h.date || h.timestamp || ''}_${h.subject || ''}_${h.score ?? ''}`)
    );
    const mergedHistory = [...currentHistory];
    (target.history || []).forEach((h) => {
      const key = `${h.date || h.timestamp || ''}_${h.subject || ''}_${h.score ?? ''}`;
      if (!existingKeys.has(key)) {
        mergedHistory.push(h);
      }
    });
    mergedHistory.sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')));
    localStorage.setItem(HISTORY_KEY, JSON.stringify(mergedHistory));

    const currentWrong = getWrongAnswers();
    const wrongMap = new Map(currentWrong.map((w) => [w.id, w]));
    (target.wrongAnswers || []).forEach((w) => {
      if (w && w.id && !wrongMap.has(w.id)) {
        wrongMap.set(w.id, w);
      }
    });
    localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(Array.from(wrongMap.values())));
  } else {
    // 完全にその時点の状態に戻す（現在の状態が空でない場合は念のため自動退避）
    const currentHistory = getHistory();
    const currentWrong = getWrongAnswers();
    if (currentHistory.length > 0 || currentWrong.length > 0) {
      saveHistorySnapshot('🔄 ロード実行前の自動控え', true);
    }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(target.history || []));
    localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(target.wrongAnswers || []));
    if (target.aiAdvice) {
      localStorage.setItem(AI_ADVICE_CACHE_KEY, JSON.stringify(target.aiAdvice));
    }
  }

  return target;
};

export const deleteHistorySnapshot = (snapshotId) => {
  const snapshots = getHistorySnapshots();
  const updated = snapshots.filter((s) => s.id !== snapshotId);
  localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(updated));
  return updated;
};

export const saveWrongAnswer = (question, userAnswer = '') => {
  const wrongAnswers = JSON.parse(localStorage.getItem(WRONG_ANSWERS_KEY) || '[]');
  const normalized = normalizeQuestion(question);
  const existingIndex = wrongAnswers.findIndex((q) => q.id === normalized.id);

  const entry = {
    ...normalized,
    lastWrongAt: new Date().toISOString(),
    lastUserAnswer: userAnswer,
    wrongCount: existingIndex !== -1 ? (wrongAnswers[existingIndex].wrongCount || 1) + 1 : 1,
  };

  if (existingIndex !== -1) {
    wrongAnswers[existingIndex] = entry;
  } else {
    wrongAnswers.push(entry);
  }
  localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(wrongAnswers));
};

export const removeWrongAnswer = (questionId) => {
  const wrongAnswers = JSON.parse(localStorage.getItem(WRONG_ANSWERS_KEY) || '[]');
  const updated = wrongAnswers.filter((q) => q.id !== questionId);
  localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(updated));
};

export const getWrongAnswers = () => {
  const raw = JSON.parse(localStorage.getItem(WRONG_ANSWERS_KEY) || '[]');
  return raw.map((q, i) => ({
    ...normalizeQuestion(q, i),
    lastWrongAt: q.lastWrongAt || null,
    lastUserAnswer: q.lastUserAnswer || '',
    wrongCount: q.wrongCount || 1,
  }));
};

// --- Custom Question Management ---
export const getCustomQuestions = () => {
  const raw = JSON.parse(localStorage.getItem(CUSTOM_QUESTIONS_KEY) || '[]');
  return raw.map((q, i) => normalizeQuestion(q, i)).filter(Boolean);
};

export const saveCustomQuestions = (questions) => {
  const normalized = questions.map((q, i) => normalizeQuestion(q, i)).filter(Boolean);
  localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(normalized));
};

export const addCustomQuestion = (question) => {
  const questions = getCustomQuestions();
  const normalized = normalizeQuestion({
    ...question,
    id: question.id || `custom_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  });
  questions.unshift(normalized);
  saveCustomQuestions(questions);
  return normalized;
};

export const addBulkCustomQuestions = (newQuestionsList) => {
  const current = getCustomQuestions();
  const normalizedNew = newQuestionsList
    .map((q, idx) =>
      normalizeQuestion({
        ...q,
        id: q.id || `ai_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 7)}`,
        createdAt: new Date().toISOString(),
      })
    )
    .filter(Boolean);
  const merged = [...normalizedNew, ...current];
  saveCustomQuestions(merged);
  return normalizedNew;
};

export const updateCustomQuestion = (updatedQuestion) => {
  const questions = getCustomQuestions();
  const index = questions.findIndex((q) => q.id === updatedQuestion.id);
  if (index !== -1) {
    questions[index] = normalizeQuestion(updatedQuestion, index);
    saveCustomQuestions(questions);
    return true;
  }
  return false;
};

export const deleteCustomQuestion = (questionId) => {
  const questions = getCustomQuestions();
  const updated = questions.filter((q) => q.id !== questionId);
  saveCustomQuestions(updated);
};

// --- Settings (API Key / Model / Tablet Mode) ---
export const getSettings = () => {
  const defaultServerUrl =
    typeof window !== 'undefined' && window.location.protocol.startsWith('http')
      ? window.location.origin
      : 'http://localhost:3030';
  const defaults = {
    geminiApiKey: '',
    geminiModel: 'auto',
    verifiedModel: '',
    shuffleOptions: true,
    strictKanji: false,
    syncServerUrl: defaultServerUrl,
  };
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return { ...defaults, ...saved, syncServerUrl: saved.syncServerUrl || defaultServerUrl };
  } catch {
    return defaults;
  }
};

export const saveSettings = (newSettings) => {
  const current = getSettings();
  const updated = { ...current, ...newSettings };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
  return updated;
};

// --- AI Advice Cache ---
export const getCachedAiAdvice = () => {
  try {
    return JSON.parse(localStorage.getItem(AI_ADVICE_CACHE_KEY) || 'null');
  } catch {
    return null;
  }
};

export const saveCachedAiAdvice = (adviceData) => {
  localStorage.setItem(
    AI_ADVICE_CACHE_KEY,
    JSON.stringify({
      ...adviceData,
      updatedAt: new Date().toISOString(),
    })
  );
};

// --- Data Export / Import for Backup & Tablet Sync ---
export const exportAllData = () => {
  const data = {
    customQuestions: getCustomQuestions(),
    history: getHistory(),
    wrongAnswers: getWrongAnswers(),
    timestamp: new Date().toISOString(),
    version: '2.0',
  };
  return JSON.stringify(data, null, 2);
};

export const exportQuestionsOnly = () => {
  const data = {
    customQuestions: getCustomQuestions(),
    timestamp: new Date().toISOString(),
    version: '2.0-questions-only',
  };
  return JSON.stringify(data, null, 2);
};

export const importData = (jsonData) => {
  try {
    const parsed = JSON.parse(jsonData);

    // 配列単体（作問アプリ１のテンプレートJSONや問題配列）が渡された場合もサポート
    if (Array.isArray(parsed)) {
      const added = addBulkCustomQuestions(parsed);
      return { success: true, count: added.length, type: 'questions_array' };
    }

    if (!parsed.version && !parsed.customQuestions) {
      throw new Error('対応していないJSONデータ形式です');
    }

    const currentQuestions = getCustomQuestions();
    const incomingQuestions = (parsed.customQuestions || []).map((q, i) => normalizeQuestion(q, i));
    const combinedQuestions = [...currentQuestions];
    let addedCount = 0;

    incomingQuestions.forEach((nq) => {
      if (nq && !combinedQuestions.find((cq) => cq.id === nq.id)) {
        combinedQuestions.push(nq);
        addedCount++;
      }
    });
    saveCustomQuestions(combinedQuestions);

    if (Array.isArray(parsed.history)) {
      const currentHistory = getHistory();
      const existingTimestamps = new Set(currentHistory.map((h) => h.timestamp || h.date));
      const newHistory = parsed.history.filter((h) => !existingTimestamps.has(h.timestamp || h.date));
      localStorage.setItem(HISTORY_KEY, JSON.stringify([...currentHistory, ...newHistory]));
    }

    if (Array.isArray(parsed.wrongAnswers)) {
      const currentWrong = getWrongAnswers();
      const combinedWrong = [...currentWrong];
      parsed.wrongAnswers.forEach((nw) => {
        const norm = normalizeQuestion(nw);
        if (norm) {
          const existingIdx = combinedWrong.findIndex((cw) => cw.id === norm.id);
          if (existingIdx === -1) {
            combinedWrong.push({
              ...norm,
              lastWrongAt: nw.lastWrongAt || null,
              lastUserAnswer: nw.lastUserAnswer || '',
              wrongCount: nw.wrongCount || 1,
            });
          } else {
            const cw = combinedWrong[existingIdx];
            combinedWrong[existingIdx] = {
              ...cw,
              ...norm,
              lastWrongAt:
                (nw.lastWrongAt || '') > (cw.lastWrongAt || '') ? nw.lastWrongAt : cw.lastWrongAt,
              lastUserAnswer:
                (nw.lastWrongAt || '') > (cw.lastWrongAt || '')
                  ? nw.lastUserAnswer || cw.lastUserAnswer
                  : cw.lastUserAnswer,
              wrongCount: Math.max(cw.wrongCount || 1, nw.wrongCount || 1),
            };
          }
        }
      });
      localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(combinedWrong));
    }

    return { success: true, count: addedCount, type: 'backup' };
  } catch (e) {
    console.error('Import failed', e);
    return { success: false, error: e.message };
  }
};

// --- Firebase Cloud Bidirectional Sync ---
import { fetchCloudData, saveCloudData } from './firebaseSync';

export const syncWithCloud = async () => {
  const localQuestions = getCustomQuestions();
  const localHistory = getHistory();
  const localWrong = getWrongAnswers();
  const localSnapshots = getHistorySnapshots();

  // 1. クラウドから最新データを取得
  let cloudData = null;
  try {
    cloudData = await fetchCloudData();
  } catch (err) {
    console.warn('Cloud fetch failed, trying to initialize cloud with local data:', err);
  }

  // 2. 双方向マージロジック
  // カスタム問題マージ
  const questionMap = new Map();
  (cloudData?.customQuestions || []).forEach((q) => {
    if (q && q.id) questionMap.set(q.id, q);
  });
  localQuestions.forEach((q) => {
    if (q && q.id) questionMap.set(q.id, q);
  });
  const mergedQuestions = Array.from(questionMap.values());

  // 学習履歴マージ
  const historyMap = new Map();
  const makeHistoryKey = (h) =>
    `${h.date || h.timestamp || ''}_${h.subject || ''}_${h.score ?? ''}_${h.total ?? ''}`;
  (cloudData?.history || []).forEach((h) => {
    if (h) historyMap.set(makeHistoryKey(h), h);
  });
  localHistory.forEach((h) => {
    if (h) historyMap.set(makeHistoryKey(h), h);
  });
  const mergedHistory = Array.from(historyMap.values()).sort((a, b) =>
    String(a.date || '').localeCompare(String(b.date || ''))
  );

  // 弱点問題マージ
  const wrongMap = new Map();
  (cloudData?.wrongAnswers || []).forEach((w) => {
    if (w && w.id) wrongMap.set(w.id, w);
  });
  localWrong.forEach((w) => {
    if (!w || !w.id) return;
    const existing = wrongMap.get(w.id);
    if (!existing) {
      wrongMap.set(w.id, w);
    } else {
      const isNewer = String(w.lastWrongAt || '') > String(existing.lastWrongAt || '');
      wrongMap.set(w.id, {
        ...existing,
        ...w,
        lastWrongAt: isNewer ? w.lastWrongAt : existing.lastWrongAt,
        lastUserAnswer: isNewer ? w.lastUserAnswer || existing.lastUserAnswer : existing.lastUserAnswer,
        wrongCount: Math.max(existing.wrongCount || 1, w.wrongCount || 1),
      });
    }
  });
  const mergedWrong = Array.from(wrongMap.values());

  // スナップショットマージ
  const snapMap = new Map();
  (cloudData?.snapshots || []).forEach((s) => {
    if (s && s.id) snapMap.set(s.id, s);
  });
  localSnapshots.forEach((s) => {
    if (s && s.id) snapMap.set(s.id, s);
  });
  const mergedSnapshots = Array.from(snapMap.values())
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
    .slice(0, 20);

  // 3. ローカルに保存
  saveCustomQuestions(mergedQuestions);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(mergedHistory));
  localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(mergedWrong));
  localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(mergedSnapshots));

  // 4. クラウドにマージ後データを保存
  const cloudPayload = {
    customQuestions: mergedQuestions,
    history: mergedHistory,
    wrongAnswers: mergedWrong,
    snapshots: mergedSnapshots,
    updatedAt: new Date().toISOString(),
  };

  await saveCloudData(cloudPayload);

  const syncInfo = {
    syncedAt: new Date().toISOString(),
    serverUrl: 'Firebase Cloud (Tokyo)',
    historyCount: mergedHistory.length,
    wrongCount: mergedWrong.length,
    customQuestionsCount: mergedQuestions.length,
  };
  localStorage.setItem(LAST_SYNC_KEY, JSON.stringify(syncInfo));
  return syncInfo;
};
export const getLastSyncInfo = () => {
  try {
    return JSON.parse(localStorage.getItem(LAST_SYNC_KEY) || 'null');
  } catch {
    return null;
  }
};

export const syncWithLocalServer = async (customServerUrl = '') => {
  const settings = getSettings();
  let baseUrl = (customServerUrl || settings.syncServerUrl || '').trim().replace(/\/+$/, '');
  if (!baseUrl) {
    baseUrl =
      typeof window !== 'undefined' && window.location.protocol.startsWith('http')
        ? window.location.origin
        : 'http://localhost:3030';
  }

  const payload = {
    customQuestions: getCustomQuestions(),
    history: getHistory(),
    wrongAnswers: getWrongAnswers(),
    snapshots: getHistorySnapshots(),
    deviceInfo: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    timestamp: new Date().toISOString(),
  };

  const res = await fetch(`${baseUrl}/api/sync`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`同期サーバー応答エラー (${res.status})`);
  }

  const mergedServerData = await res.json();

  if (Array.isArray(mergedServerData.customQuestions)) {
    saveCustomQuestions(mergedServerData.customQuestions);
  }
  if (Array.isArray(mergedServerData.history)) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(mergedServerData.history));
  }
  if (Array.isArray(mergedServerData.wrongAnswers)) {
    localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(mergedServerData.wrongAnswers));
  }
  if (Array.isArray(mergedServerData.snapshots)) {
    localStorage.setItem(SNAPSHOTS_KEY, JSON.stringify(mergedServerData.snapshots));
  }

  const syncInfo = {
    syncedAt: new Date().toISOString(),
    serverUrl: baseUrl,
    historyCount: (mergedServerData.history || []).length,
    wrongCount: (mergedServerData.wrongAnswers || []).length,
    customQuestionsCount: (mergedServerData.customQuestions || []).length,
    lanUrls: mergedServerData.lanUrls || [],
  };
  localStorage.setItem(LAST_SYNC_KEY, JSON.stringify(syncInfo));

  if (customServerUrl && customServerUrl !== settings.syncServerUrl) {
    saveSettings({ syncServerUrl: baseUrl });
  }

  return syncInfo;
};
