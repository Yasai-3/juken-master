/**
 * 定期 学習到達度テスト（実力判定テスト）専用エンジン
 * 2週間に1回受験可能、分野均等配分・標準〜応用中心の出題と5段階レベル判定
 */

export const ACHIEVEMENT_CONFIG = {
  '算数': {
    totalCount: 15,
    icon: '📐',
    durationHint: '目標10〜25分',
    description: '計算・文章題・数の性質・図形の全4分野から15問を厳選出題',
  },
  '国語': {
    totalCount: 30,
    icon: '📖',
    durationHint: '目標10〜25分',
    description: '漢字・ことわざ・慣用句・語句文法の全7分野から30問を満遍なく出題',
  },
  '理科': {
    totalCount: 30,
    icon: '🧪',
    durationHint: '目標10〜25分',
    description: '物理・化学・生物・地学の全4大分野から30問を満遍なく出題',
  },
  '社会': {
    totalCount: 30,
    icon: '🏯',
    durationHint: '目標10〜25分',
    description: '歴史・地理（＋公民）の全分野から30問を満遍なく出題',
  },
};

/**
 * 総合実力テスト 制限時間設定（秒単位）
 * 算数: 5問で10分、10問で20分、20問で35分
 * 国語・理科・社会: 5問で7分、10問で15分、20問で25分
 */
export const COMPREHENSIVE_TIME_LIMITS = {
  '算数': { 5: 10 * 60, 10: 20 * 60, 20: 35 * 60 },
  '国語': { 5: 7 * 60, 10: 15 * 60, 20: 25 * 60 },
  '理科': { 5: 7 * 60, 10: 15 * 60, 20: 25 * 60 },
  '社会': { 5: 7 * 60, 10: 15 * 60, 20: 25 * 60 },
};

export const getComprehensiveTimeLimit = (subject, count) => {
  const limits = COMPREHENSIVE_TIME_LIMITS[subject] || COMPREHENSIVE_TIME_LIMITS['理科'];
  return limits[count] || count * 90;
};

/**
 * 学習到達度テスト スピード評価（5段階時間基準）
 * 完了までの時間:
 * - 10分以内 (S): 神速ペース
 * - 15分以内 (A): 快速ペース
 * - 20分以内 (B): 標準ペース
 * - 25分以内 (C): 慎重ペース
 * - 25分以上 (D): じっくり型
 */
export const calculateTimeLevel = (seconds) => {
  const safeSeconds = Math.max(0, Math.floor(seconds || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSec = safeSeconds % 60;
  const timeFormatted = `${minutes}分${remainingSec < 10 ? '0' : ''}${remainingSec}秒`;

  if (safeSeconds <= 600) {
    // 10分以内
    return {
      rank: 'S',
      title: 'スピード S（超神速）',
      subtitle: '10分以内で完了',
      badge: '⚡',
      seconds: safeSeconds,
      timeFormatted,
      description: '極めて素早い解答スピードです！入試本番でも見直し時間をたっぷり確保できる理想的なペースです。',
      color: 'text-amber-500 bg-amber-50 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300',
    };
  }
  if (safeSeconds <= 900) {
    // 15分以内
    return {
      rank: 'A',
      title: 'スピード A（快速ペース）',
      subtitle: '15分以内で完了',
      badge: '🚀',
      seconds: safeSeconds,
      timeFormatted,
      description: 'テンポ良くスムーズに解答できています。入試本番でも余裕を持って解き進められる合格ペースです。',
      color: 'text-blue-500 bg-blue-50 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300',
    };
  }
  if (safeSeconds <= 1200) {
    // 20分以内
    return {
      rank: 'B',
      title: 'スピード B（標準ペース）',
      subtitle: '20分以内で完了',
      badge: '⏱️',
      seconds: safeSeconds,
      timeFormatted,
      description: '標準的な解答ペースです。1問あたりにかける時間を意識して、瞬発力を養うとさらに向上します。',
      color: 'text-emerald-500 bg-emerald-50 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300',
    };
  }
  if (safeSeconds <= 1500) {
    // 25分以内
    return {
      rank: 'C',
      title: 'スピード C（慎重ペース）',
      subtitle: '25分以内で完了',
      badge: '🐢',
      seconds: safeSeconds,
      timeFormatted,
      description: '慎重に考えて解けていますが、難関校入試ではやや時間がタイトになる可能性があります。問題慣れを進めましょう。',
      color: 'text-purple-500 bg-purple-50 border-purple-300 dark:bg-purple-950/40 dark:text-purple-300',
    };
  }
  // 25分以上
  return {
    rank: 'D',
    title: 'スピード D（じっくり型）',
    subtitle: '25分以上所要',
    badge: '⏳',
    seconds: safeSeconds,
    timeFormatted,
    description: '1問にじっくり時間をかけて取り組めました。次は時間配分を意識し、20分以内の完了を目指してみましょう。',
    color: 'text-rose-500 bg-rose-50 border-rose-300 dark:bg-rose-950/40 dark:text-rose-300',
  };
};

/**
 * 正答率ランク × スピードランク の両軸総合判定マトリックス
 */
export const calculateDualAxisEvaluation = (accuracyRank, timeRank) => {
  const matrix = {
    'S-S': {
      title: '神速の天才（極）',
      badge: '👑',
      tagline: '圧倒的な正確性と神速のスピードを兼ね備えた最難関トップレベル！',
      advice: '非の打ち所がありません。最難関校の過去問演習やさらなる難問特訓で実戦力を極限まで高めていきましょう。',
      gradient: 'from-amber-400 via-orange-500 to-yellow-500',
    },
    'S-A': {
      title: '難関校の即戦力マスター',
      badge: '💎',
      tagline: '極めて高い正答率と盤石の解答スピードを両立！',
      advice: '非常にバランスの取れた素晴らしい実力です。本番でも確実に高得点が狙える実戦力が備わっています。',
      gradient: 'from-blue-500 to-indigo-600',
    },
    'S-B': {
      title: '着実なる精密スナイパー',
      badge: '🎯',
      tagline: '完璧な正確性！確実に点数を積み上げる堅実派',
      advice: '正答率はパーフェクトクラスです。基礎〜標準問題の処理速度を少しずつ上げると、見直し時間をさらに生み出せます。',
      gradient: 'from-emerald-500 to-teal-600',
    },
    'S-C': {
      title: '深慮熟考の精鋭',
      badge: '🧠',
      tagline: '高い思考力で難問も確実に正解！スピードアップでさらに飛躍',
      advice: '1問1問丁寧に考え抜く力があります。解き慣れた定型問題は素早く解く意識を持つと、より時間内に余裕が生まれます。',
      gradient: 'from-indigo-500 to-purple-600',
    },
    'S-D': {
      title: '粘り強き精密研究者',
      badge: '🔭',
      tagline: '時間はかかっても確実に正解を引き寄せる深い洞察力',
      advice: '正確性は抜群です！入試本番の時間制限を想定し、まずは20分以内で解き切るタイムアタック練習を取り入れましょう。',
      gradient: 'from-violet-500 to-indigo-600',
    },
    'A-S': {
      title: '疾風怒濤のチャレンジャー',
      badge: '⚡',
      tagline: '神速の解答力！見直しを加えれば最難関レベルへ即到達',
      advice: '解くスピードは最上級です！スピードを少し抑えてケアレスミスをゼロに抑えれば、正答率90%超（レベルS）へ跳ね上がります。',
      gradient: 'from-cyan-500 to-blue-600',
    },
    'A-A': {
      title: '文武両道の実力派',
      badge: '🥇',
      tagline: '正答率・スピードともに上位校合格ラインを突破！',
      advice: '安定感があり、合格圏内にしっかり位置しています。弱点分野を1つずつ補強して、さらなる上位を目指しましょう。',
      gradient: 'from-blue-500 to-cyan-600',
    },
    'A-B': {
      title: '堅実実戦プレイヤー',
      badge: '🛡️',
      tagline: '安定した正答率と標準ペースで着実に前進中',
      advice: '順調に実力が定着しています。得意分野はより素早く解き、苦手分野に時間を配分する実戦テクニックを身につけましょう。',
      gradient: 'from-teal-500 to-emerald-600',
    },
    'A-C': {
      title: 'じっくり型実力者',
      badge: '📚',
      tagline: '高い正答率を維持！解答テンポの向上が次の鍵',
      advice: '理解度は十分に高いです。標準的な問題の演習量を増やして、パッと解法が思い浮かぶ瞬発力を鍛えましょう。',
      gradient: 'from-sky-500 to-indigo-600',
    },
    'A-D': {
      title: '慎重派の確実プレイヤー',
      badge: '📐',
      tagline: '着実な理解力。時間管理を意識してテンポアップを！',
      advice: 'じっくり考えれば正解できます。時間を意識したトレーニング（1問あたり○秒）を取り入れて解答速度を鍛えましょう。',
      gradient: 'from-indigo-400 to-blue-500',
    },
    'B-S': {
      title: '超速の突破口ハンター',
      badge: '🏹',
      tagline: '驚異のスピード！丁寧さと見直しで大化けする原石',
      advice: '解く速度は群を抜いています。問題文の読み間違いや早とちりを防ぐだけで、一気に得点率が跳ね上がります！',
      gradient: 'from-amber-500 to-emerald-500',
    },
    'B-A': {
      title: '快調テンポの成長株',
      badge: '🥈',
      tagline: 'テンポよく解答中！基本を固めれば上位へジャンプ',
      advice: '良いリズムで解けています。間違えた問題を弱点ノートで復習し、確実に得点できる単元を増やしていきましょう。',
      gradient: 'from-emerald-500 to-blue-500',
    },
    'B-B': {
      title: 'バランス型発展プレイヤー',
      badge: '🌱',
      tagline: '正答率・スピードともに標準レベルをしっかりクリア',
      advice: '基本はしっかり身についています。標準〜応用問題の解法パターンをストックし、一段上のレベルを目指しましょう。',
      gradient: 'from-emerald-600 to-teal-600',
    },
    'B-C': {
      title: '基礎充実のマイペース派',
      badge: '🌿',
      tagline: 'マイペースで着実に解答。反復練習でスピードUPへ',
      advice: '基礎力はついています。同じタイプの問題を繰り返し解くことで、悩む時間を減らし処理速度を向上させましょう。',
      gradient: 'from-teal-600 to-cyan-700',
    },
    'B-D': {
      title: '粘り強きチャレンジャー',
      badge: '🧗',
      tagline: '時間をかけてじっくり健闘！反復演習で加速しよう',
      advice: '最後まで粘り強く取り組みました。基礎問題を中心に繰り返し練習し、解法の引き出しをスピーディーに取り出せるようにしましょう。',
      gradient: 'from-slate-600 to-teal-700',
    },
    'C-S': {
      title: 'スピード特化型・要見直し',
      badge: '⚡',
      tagline: '素早い解答力！問題文をしっかり読んで精度を高めよう',
      advice: 'スピードは十分すぎるほどあります！焦らず問題文の条件や聞き方に注意を払い、丁寧な解答を心がけましょう。',
      gradient: 'from-amber-600 to-rose-500',
    },
    'C-A': {
      title: '急成長のポテンシャル',
      badge: '🥉',
      tagline: 'スピード感は良好！基礎単元の見直しで急上昇可能',
      advice: '解答スピードは良好です。苦手な単元の基本問題を日々の学習で集中的に復習し、土台を固めましょう。',
      gradient: 'from-purple-500 to-indigo-600',
    },
    'C-B': {
      title: '基礎ステップアップ中',
      badge: '📘',
      tagline: '標準ペースで基礎を固める大事な時期！',
      advice: '弱点復習ノートを活用して、間違えた問題をすぐ解き直す習慣をつけましょう。着実に伸びていきます。',
      gradient: 'from-violet-500 to-purple-600',
    },
    'C-C': {
      title: '一歩一歩前進プレイヤー',
      badge: '🐾',
      tagline: 'じっくり基礎を固めて着実にステップアップ！',
      advice: '焦る必要はありません。まずは基本問題の正解率100%を目指して、1つずつ単元をマスターしていきましょう。',
      gradient: 'from-indigo-600 to-violet-700',
    },
    'C-D': {
      title: 'じっくり地道な基礎チャレンジャー',
      badge: '🧱',
      tagline: '一問一問を大切に。基礎概念の理解から深めよう',
      advice: '時間をかけて真剣に向き合えました。解説をじっくり読んで、なぜその答えになるのか仕組みを理解していきましょう。',
      gradient: 'from-purple-700 to-rose-700',
    },
    'D-S': {
      title: 'スピード重視・慎重さ強化',
      badge: '⚠️',
      tagline: '早く解くよりも、まずはじっくり正確に解くことを意識！',
      advice: '急いで解きすぎてケアレスミスが増えている可能性があります。まずは時間を気にせず、丁寧に解く練習から始めましょう。',
      gradient: 'from-rose-500 to-orange-600',
    },
    'D-A': {
      title: '基礎力再構築ステップ',
      badge: '⚠️',
      tagline: '焦らず基本の解法を一つずつ復習しましょう',
      advice: 'スピードよりも理解を最優先に。各分野の基本問題に戻って、教科書や解説をじっくり確認しましょう。',
      gradient: 'from-rose-500 to-red-600',
    },
    'D-B': {
      title: 'じっくり土台作り',
      badge: '⚠️',
      tagline: '基本問題を徹底反復し、自信をつけていきましょう',
      advice: '間違えた問題を一つずつ見直し、基本問題を確実に解けるようにすることでぐんぐん実力がアップします。',
      gradient: 'from-rose-600 to-red-700',
    },
    'D-C': {
      title: '基礎再スタート',
      badge: '⚠️',
      tagline: '焦らず一歩ずつ！基本問題の反復演習から始めよう',
      advice: '伸びしろがたくさんあります！日々の学習で基本問題を解く習慣を作り、小さな「できた！」を積み重ねましょう。',
      gradient: 'from-rose-700 to-red-800',
    },
    'D-D': {
      title: '基礎土台・再構築期',
      badge: '⚠️',
      tagline: 'じっくり基礎からやり直せば必ず伸びる！',
      advice: 'まずは分野別の基本問題からスタートしましょう。解説をしっかり読んで、基礎知識を一つずつ定着させていきましょう。',
      gradient: 'from-rose-700 to-red-900',
    },
  };

  const aRank = accuracyRank || 'B';
  const tRank = timeRank || 'B';
  const key = `${aRank}-${tRank}`;
  return matrix[key] || matrix['B-B'];
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
