/**
 * 定期 学習到達度テスト（実力判定テスト）専用エンジン
 * 2週間に1回受験可能、分野均等配分・標準〜応用中心の出題と5段階レベル判定
 */

export const ACHIEVEMENT_CONFIG = {
  '算数': {
    totalCount: 15,
    icon: '📐',
    durationHint: '約25〜35分',
    description: '計算・文章題・数の性質・図形の全4分野から15問を厳選出題',
  },
  '国語': {
    totalCount: 30,
    icon: '📖',
    durationHint: '約20〜25分',
    description: '漢字・ことわざ・慣用句・語句文法の全7分野から30問を満遍なく出題',
  },
  '理科': {
    totalCount: 30,
    icon: '🧪',
    durationHint: '約20〜25分',
    description: '物理・化学・生物・地学の全4大分野から30問を満遍なく出題',
  },
  '社会': {
    totalCount: 30,
    icon: '🏯',
    durationHint: '約20〜25分',
    description: '歴史・地理（＋公民）の全分野から30問を満遍なく出題',
  },
};

/**
 * 到達度レベル判定（5段階基準）
 * 🏆 レベル S: 90% 以上
 * 🥇 レベル A: 75% 〜 89.9%
 * 🥈 レベル B: 60% 〜 74.9%
 * 🥉 レベル C: 45% 〜 59.9%
 * ⚠️ レベル D: 45% 未満
 */
export const calculateAchievementLevel = (score, total) => {
  if (!total || total <= 0) {
    return {
      rank: 'D',
      title: 'レベル D',
      subtitle: '単元復習強化レベル',
      rate: 0,
      badge: '⚠️',
      themeColor: 'from-rose-500 to-red-600',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      description: '各分野の基本問題に戻って土台を再構築しましょう。日々の基本演習が実力アップの近道です。',
    };
  }

  const rate = Math.round((score / total) * 1000) / 10;

  if (rate >= 90) {
    return {
      rank: 'S',
      title: 'レベル S',
      subtitle: '最難関突破レベル',
      rate,
      badge: '🏆',
      themeColor: 'from-amber-400 via-orange-500 to-yellow-500',
      badgeBg: 'bg-amber-400/20 text-amber-300 border-amber-300/50',
      description: '灘・筑駒・開成など最難関校に十分通用する卓越した実力です！難問・応用問題も確実に得点できています。',
    };
  }
  if (rate >= 75) {
    return {
      rank: 'A',
      title: 'レベル A',
      subtitle: '難関校合格安定レベル',
      rate,
      badge: '🥇',
      themeColor: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
      description: '高い完成度と安定感があります。志望校合格圏内です。弱点単元を補強してレベルS（90%超）を目指しましょう！',
    };
  }
  if (rate >= 60) {
    return {
      rank: 'B',
      title: 'レベル B',
      subtitle: '標準定着レベル',
      rate,
      badge: '🥈',
      themeColor: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      description: '基本〜標準レベルは着実に定着しています。応用問題の解法パターンを増やすことで、さらに上位へ伸ばせます。',
    };
  }
  if (rate >= 45) {
    return {
      rank: 'C',
      title: 'レベル C',
      subtitle: '基礎固め・発展途上レベル',
      rate,
      badge: '🥉',
      themeColor: 'from-violet-500 to-purple-600',
      badgeBg: 'bg-violet-500/20 text-violet-300 border-violet-400/40',
      description: '特定分野に伸びしろがあります。間違えた単元を弱点復習ノートで徹底的に見直し、基礎を盤石にしましょう。',
    };
  }
  return {
    rank: 'D',
    title: 'レベル D',
    subtitle: '単元復習強化レベル',
    rate,
    badge: '⚠️',
    themeColor: 'from-rose-500 to-red-600',
    badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
    description: '各分野の基本問題に戻って土台を再構築しましょう。日々の基本演習が実力アップの近道です。',
  };
};

/**
 * 到達度判定テスト用の満遍ない問題抽出
 * - 標準（standard）と応用（advanced）を中心に選出
 * - 各カテゴリー（分野）から均等に配分
 */
export const generateAchievementTestQuestions = (allQuestions, subject, settings = {}) => {
  const config = ACHIEVEMENT_CONFIG[subject] || { totalCount: 30 };
  const targetTotal = config.totalCount;

  // 1. 対象教科の問題を抽出
  const subjectPool = allQuestions.filter((q) => q.subject === subject);
  if (subjectPool.length === 0) return [];

  // 2. 分野（category）ごとにグルーピング
  const categoryMap = new Map();
  subjectPool.forEach((q) => {
    const cat = q.category || '一般';
    if (!categoryMap.has(cat)) {
      categoryMap.set(cat, []);
    }
    categoryMap.get(cat).push(q);
  });

  // 社会の「公民」のように1問しかない極小カテゴリは、問題数が十分ある主要カテゴリ（歴史・地理）を優先
  const categories = Array.from(categoryMap.keys()).filter((cat) => {
    return (categoryMap.get(cat) || []).length >= 5;
  });

  // 万一フィルタで空になった場合は全体カテゴリを採用
  const effectiveCategories = categories.length > 0 ? categories : Array.from(categoryMap.keys());
  const catCount = effectiveCategories.length;

  // 3. 各カテゴリーへの目標問題数配分
  const baseCountPerCat = Math.floor(targetTotal / catCount);
  let remainder = targetTotal % catCount;

  const targetPerCategory = {};
  effectiveCategories.forEach((cat) => {
    let alloc = baseCountPerCat;
    if (remainder > 0) {
      alloc += 1;
      remainder -= 1;
    }
    targetPerCategory[cat] = alloc;
  });

  // 4. 各カテゴリーから「標準」「応用」を中心に抽出
  const selectedQuestions = [];

  effectiveCategories.forEach((cat) => {
    const pool = categoryMap.get(cat) || [];
    const alloc = targetPerCategory[cat] || baseCountPerCat;

    // 難易度別に分類
    const standardPool = pool.filter((q) => q.difficulty === 'standard');
    const advancedPool = pool.filter((q) => q.difficulty === 'advanced');
    const basicPool = pool.filter((q) => q.difficulty === 'basic');

    // シャッフル
    const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
    const shuffledStd = shuffleArray(standardPool);
    const shuffledAdv = shuffleArray(advancedPool);
    const shuffledBsc = shuffleArray(basicPool);

    // 標準と応用の目標数（標準約60〜70%, 応用約30〜40%）
    const targetAdv = Math.max(1, Math.round(alloc * 0.35));
    const targetStd = alloc - targetAdv;

    const catSelected = [];

    // 応用を抽出
    const advPicked = shuffledAdv.slice(0, targetAdv);
    catSelected.push(...advPicked);

    // 標準を抽出
    const stdPicked = shuffledStd.slice(0, targetStd);
    catSelected.push(...stdPicked);

    // 足りない分は、余っている標準→応用→基礎から補充
    const pickedIds = new Set(catSelected.map((q) => q.id));
    const remainingCandidates = [
      ...shuffledStd.filter((q) => !pickedIds.has(q.id)),
      ...shuffledAdv.filter((q) => !pickedIds.has(q.id)),
      ...shuffledBsc.filter((q) => !pickedIds.has(q.id)),
    ];

    while (catSelected.length < alloc && remainingCandidates.length > 0) {
      catSelected.push(remainingCandidates.shift());
    }

    selectedQuestions.push(...catSelected);
  });

  // 全体で万一目標数に満たない場合の補充
  if (selectedQuestions.length < targetTotal) {
    const selectedIds = new Set(selectedQuestions.map((q) => q.id));
    const allRemaining = subjectPool
      .filter((q) => !selectedIds.has(q.id))
      .sort((a, b) => {
        // 応用・標準を優先
        const score = (diff) => (diff === 'advanced' ? 3 : diff === 'standard' ? 2 : 1);
        return score(b.difficulty) - score(a.difficulty);
      });

    while (selectedQuestions.length < targetTotal && allRemaining.length > 0) {
      selectedQuestions.push(allRemaining.shift());
    }
  }

  // 5. 出題順序を全体でランダムシャッフルし、選択肢シャッフルを適用
  return selectedQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, targetTotal)
    .map((q, idx) => {
      let finalOptions = q.options;
      if (q.questionType === 'choice' && settings.shuffleOptions && Array.isArray(q.options)) {
        finalOptions = [...q.options].sort(() => Math.random() - 0.5);
      }
      return {
        ...q,
        options: finalOptions,
        achievementCategory: q.category || '一般',
        achievementIndex: idx + 1,
      };
    });
};

/**
 * 到達度テスト結果の分野別詳細集計
 */
export const analyzeAchievementResults = (questions, results) => {
  const categoryStats = {};

  questions.forEach((q, idx) => {
    const cat = q.category || q.achievementCategory || '一般';
    if (!categoryStats[cat]) {
      categoryStats[cat] = { category: cat, total: 0, correct: 0, wrong: 0 };
    }
    categoryStats[cat].total += 1;

    const res = results[idx];
    if (res && res.isCorrect) {
      categoryStats[cat].correct += 1;
    } else {
      categoryStats[cat].wrong += 1;
    }
  });

  const categoryBreakdown = Object.values(categoryStats).map((item) => {
    const rate = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
    return {
      ...item,
      rate,
    };
  });

  // 最も得意な分野（正答率最高）と苦手な分野（正答率最低）を特定
  const sorted = [...categoryBreakdown].sort((a, b) => b.rate - a.rate);
  const strongestCategory = sorted.length > 0 && sorted[0].rate >= 70 ? sorted[0].category : null;
  const weakestCategory =
    sorted.length > 0 && sorted[sorted.length - 1].rate < 70
      ? sorted[sorted.length - 1].category
      : null;

  return {
    categoryBreakdown,
    strongestCategory,
    weakestCategory,
  };
};
