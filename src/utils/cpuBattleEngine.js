/**
 * 総合実力テスト専用 CPU対戦エンジン
 * レベル別CPUキャラクター、解答シミュレーション、勝敗判定
 */

export const CPU_LEVELS = {
  rookie: {
    id: 'rookie',
    name: '見習いヒヨコ「ピヨ太」',
    shortName: '見習い',
    badge: '🐱',
    title: '基礎トレーニングレベル',
    description: '一生懸命頑張る勉強中の仲間。勝利の味を掴むのに最適。正答率約45%！',
    accuracy: {
      basic: 0.65,
      standard: 0.45,
      advanced: 0.25,
    },
    avgSpeedSec: 20,
    themeColor: 'from-amber-900 via-orange-950 to-slate-900 border-amber-500 text-amber-300',
    quotes: {
      intro: 'ぼくも一生懸命がんばるピヨ！よろしくお願いします！',
      correct: [
        'やったピヨ！基本を思い出したピヨ！',
        '正解できたピヨ！うれしいピヨ〜！',
        '先生に教えてもらった通りに解けたピヨ！',
      ],
      wrong: [
        'ピヨ〜！難しくて間違えちゃったピヨ…',
        'うぅ…解説をしっかり読んで復習するピヨ…',
        '次は当ててみせるピヨ！',
      ],
      win: 'えっ！？ぼくが勝っちゃったピヨ！？夢みたいピヨ〜！',
      lose: 'やっぱり君は強いピヨ…！ぼくももっと勉強するピヨ！',
      draw: '引き分けピヨ！一緒に頑張れて楽しかったピヨ！',
    },
  },
  rival: {
    id: 'rival',
    name: '熱血チャレンジャー「ハヤト」',
    shortName: '熱血',
    badge: '🐺',
    title: '標準実戦レベル',
    description: '得意分野では爆発的な強さを発揮する熱血ライバル。正答率約65%！',
    accuracy: {
      basic: 0.85,
      standard: 0.65,
      advanced: 0.45,
    },
    avgSpeedSec: 16,
    themeColor: 'from-emerald-900 via-teal-950 to-slate-900 border-emerald-500 text-emerald-300',
    quotes: {
      intro: 'オレの特訓の成果を見せてやるぜ！勝負だ！',
      correct: [
        'よっしゃ正解！手応えバッチリだぜ！',
        'オレの直感と特訓の成果がピタリと当たった！',
        'この問題はオレの得意分野だ！',
        'どんどんいくぜ！ついてこれるか！？',
      ],
      wrong: [
        'うわぁ〜！選択肢で迷って外した〜！',
        'くっそー！最後の計算が合わなかったぜ！',
        'うそだろ！？次は絶対に正解してやる！',
      ],
      win: '勝ったぜー！努力は裏切らないって証明できたな！',
      lose: 'くやしい〜！でもめちゃくちゃ楽しかったぜ！次は勝つ！',
      draw: 'ドローか！お互い一歩も引かなかったな！ナイスファイト！',
    },
  },
  master: {
    id: 'master',
    name: '秀才ライバル「タクミ」',
    shortName: '秀才',
    badge: '🦁',
    title: '難関校合格安定レベル',
    description: '幅広い分野を完璧に網羅する名門進学塾のトップ生。正答率約80%！',
    accuracy: {
      basic: 0.95,
      standard: 0.85,
      advanced: 0.70,
    },
    avgSpeedSec: 12,
    themeColor: 'from-blue-900 via-indigo-950 to-slate-900 border-blue-500 text-blue-300',
    quotes: {
      intro: '今日は僕が勝つよ！全力をぶつけ合おう！',
      correct: [
        'よし、しっかり解法が見えた！',
        '過去問で何度も復習したパターンだね。',
        'テンポよく正解！このペースを維持するよ。',
        '君もなかなかやるね！負けられないな。',
      ],
      wrong: [
        'あちゃ〜！問題文の聞き方を読み違えた…！',
        'うわ、悔しい！ここで落とすとは…！',
        'くそっ、まだ君にリードを許すわけには…！',
      ],
      win: 'やったー！僕の勝ちだね！次も良い勝負をしよう！',
      lose: '完敗だ…！君の集中力と正確さ、本当にすごいよ。',
      draw: '同点か！まさに互角の戦いだったね。再戦しよう！',
    },
  },
  oni: {
    id: 'oni',
    name: '鬼神ロボ「カイセキ」',
    shortName: '鬼神',
    badge: '👹',
    title: '最難関・灘開成突破レベル',
    description: 'ほぼミスをしない究極の計算力と知識を持つ絶対王者。正答率約95%！',
    accuracy: {
      basic: 0.99,
      standard: 0.96,
      advanced: 0.90,
    },
    avgSpeedSec: 8,
    themeColor: 'from-purple-900 via-rose-950 to-red-900 border-red-500 text-rose-300',
    quotes: {
      intro: 'フッ、我が知識の領域に踏み込むか。容赦はせんぞ。',
      correct: [
        'この程度、まばたきする間に解ける。',
        '想定通りの平易な問題だな。',
        '計算誤差ゼロ。当然の結果だ。',
        '君の解答ペース、少々遅いのではないか？',
      ],
      wrong: [
        'な、なに…！？この我が計算ミスを…！？',
        'ぐぬぬ…痛恨のケアレスミス…！',
        'フン、少々油断したようだな…次は外さん！',
      ],
      win: 'フハハ！我が計算領域を超えるには、まだ100年早い！',
      lose: 'バ、バカな…この我が敗北するとは…！君の実力、本物だな。',
      draw: '引き分けだと…！？我が計算に並び立つ者がいようとは…！',
    },
  },
};

/**
 * CPUが問題を解くシミュレーション関数
 * @param {Object} question 問題データ
 * @param {string} cpuLevelId 'oni' | 'master' | 'rival' | 'rookie'
 * @returns {Object} { isCorrect, selectedAnswer, timeSec, quote }
 */
export const simulateCpuAnswer = (question, cpuLevelId = 'rookie') => {
  const cpu = CPU_LEVELS[cpuLevelId] || CPU_LEVELS.rookie;
  const diff = question.difficulty || 'standard';
  const prob = cpu.accuracy[diff] ?? 0.70;

  // 正誤判定
  const isCorrect = Math.random() < prob;

  // CPUの選択肢
  let selectedAnswer = question.answer;
  if (!isCorrect) {
    if (Array.isArray(question.options) && question.options.length > 1) {
      // 不正解の選択肢からランダムに1つ選ぶ
      const wrongOptions = question.options.filter(
        (opt) => String(opt).trim() !== String(question.answer).trim()
      );
      if (wrongOptions.length > 0) {
        selectedAnswer = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      } else {
        selectedAnswer = '（誤答）';
      }
    } else {
      selectedAnswer = '（誤答）';
    }
  }

  // 思考秒数（平均秒数 ± ランダム揺らぎ）
  const jitter = Math.floor(Math.random() * 7) - 3;
  const timeSec = Math.max(3, cpu.avgSpeedSec + jitter);

  // 一言セリフ
  const quoteList = isCorrect ? cpu.quotes.correct : cpu.quotes.wrong;
  const quote = quoteList[Math.floor(Math.random() * quoteList.length)];

  return {
    isCorrect,
    selectedAnswer,
    timeSec,
    quote,
    cpuName: cpu.name,
    cpuBadge: cpu.badge,
    cpuLevelId,
  };
};

/**
 * 勝敗判定
 */
export const determineBattleResult = (userScore, cpuScore, cpuLevelId = 'rookie') => {
  const cpu = CPU_LEVELS[cpuLevelId] || CPU_LEVELS.rookie;
  if (userScore > cpuScore) {
    return {
      result: 'win',
      badge: '🏆',
      title: 'YOU WIN!! （あなたの完全勝利！）',
      subtitle: `${cpu.badge} ${cpu.name} を見事に打ち破りました！`,
      quote: cpu.quotes.lose,
      themeColor: 'from-amber-500 via-yellow-500 to-amber-600',
      textColor: 'text-amber-500 dark:text-amber-300',
    };
  }
  if (userScore < cpuScore) {
    return {
      result: 'lose',
      badge: '💀',
      title: 'YOU LOSE... （惜敗・リベンジ求む！）',
      subtitle: `${cpu.badge} ${cpu.name} の高い壁に阻まれました…！`,
      quote: cpu.quotes.win,
      themeColor: 'from-rose-600 via-red-600 to-rose-700',
      textColor: 'text-rose-500 dark:text-rose-300',
    };
  }
  return {
    result: 'draw',
    badge: '🤝',
    title: 'DRAW!! （互角の引き分け！）',
    subtitle: `${cpu.badge} ${cpu.name} と互角の好勝負を繰り広げました！`,
    quote: cpu.quotes.draw,
    themeColor: 'from-indigo-600 via-purple-600 to-indigo-700',
    textColor: 'text-indigo-500 dark:text-indigo-300',
  };
};

/**
 * 総合実力テストでCPU対戦が許可される条件判定
 * - 算数の場合: 10問 または 20問
 * - 他教科（国理社）の場合: 20問
 */
export const isCpuBattleEligible = (subject, limit) => {
  const count = Number(limit || 0);
  if (subject === '算数') {
    return count === 10 || count === 20;
  }
  return count === 20;
};

// ==========================================
// 🏆 CPU対戦 討伐称号 ＆ 実績コレクション
// ==========================================
export const RECENT_DAYS_LIMIT = 30; // 鬼神関連称号の有効判定期間（直近30日）

export const CPU_ACHIEVEMENTS = [
  {
    id: 'muhai_haoh',
    title: '無敗の覇王',
    badge: '👑',
    category: '鬼神討伐',
    priority: 100,
    rarity: 'legendary', // legendary | epic | rare | common
    description: '最難関「鬼神」に対して10連勝を達成する。',
    conditionText: '鬼神カイセキに10連勝',
    check: ({ maxOniStreak }) => maxOniStreak >= 10,
    getProgress: ({ maxOniStreak }) => ({
      current: maxOniStreak,
      target: 10,
      unit: '連勝',
      percent: Math.min(100, Math.round((maxOniStreak / 10) * 100)),
    }),
  },
  {
    id: 'oni_densetsu',
    title: '鬼殺しの伝説',
    badge: '👑',
    category: '鬼神討伐',
    priority: 90,
    rarity: 'legendary',
    isTimeLimited: true,
    description: '直近1ヶ月間（30日以内）で最難関「鬼神」を5回以上撃破する。',
    conditionText: '直近1ヶ月で鬼神5勝（期限あり）',
    check: ({ recentOniDefeats }) => recentOniDefeats >= 5,
    getProgress: ({ recentOniDefeats, totalOniDefeats }) => ({
      current: recentOniDefeats,
      target: 5,
      unit: '体',
      percent: Math.min(100, Math.round((recentOniDefeats / 5) * 100)),
      totalAllTime: totalOniDefeats,
      expired: recentOniDefeats < 5 && totalOniDefeats >= 5,
    }),
  },
  {
    id: 'shitennou',
    title: '四天王制覇',
    badge: '🏅',
    category: 'キャリア',
    priority: 85,
    rarity: 'epic',
    description: '見習い・熱血・秀才・鬼神の全4キャラクターを各5回以上撃破する。',
    conditionText: '全4キャラを各5勝以上',
    check: ({ levelStats }) =>
      (levelStats.rookie?.wins || 0) >= 5 &&
      (levelStats.rival?.wins || 0) >= 5 &&
      (levelStats.master?.wins || 0) >= 5 &&
      (levelStats.oni?.wins || 0) >= 5,
    getProgress: ({ levelStats }) => {
      const counts = [
        levelStats.rookie?.wins || 0,
        levelStats.rival?.wins || 0,
        levelStats.master?.wins || 0,
        levelStats.oni?.wins || 0,
      ];
      const cleared = counts.filter((c) => c >= 5).length;
      return {
        current: cleared,
        target: 4,
        unit: 'キャラ達成',
        percent: Math.round((cleared / 4) * 100),
        details: [
          { name: 'ピヨ太', wins: counts[0], target: 5 },
          { name: 'ハヤト', wins: counts[1], target: 5 },
          { name: 'タクミ', wins: counts[2], target: 5 },
          { name: 'カイセキ', wins: counts[3], target: 5 },
        ],
      };
    },
  },
  {
    id: 'oni_hunter',
    title: '鬼神ハンター',
    badge: '⚔️',
    category: '鬼神討伐',
    priority: 75,
    rarity: 'epic',
    isTimeLimited: true,
    description: '直近1ヶ月間（30日以内）で最難関「鬼神」を1回以上撃破する。',
    conditionText: '直近1ヶ月で鬼神1勝（期限あり）',
    check: ({ recentOniDefeats }) => recentOniDefeats >= 1,
    getProgress: ({ recentOniDefeats, totalOniDefeats }) => ({
      current: recentOniDefeats,
      target: 1,
      unit: '体',
      percent: Math.min(100, Math.round((recentOniDefeats / 1) * 100)),
      totalAllTime: totalOniDefeats,
      expired: recentOniDefeats < 1 && totalOniDefeats >= 1,
    }),
  },
  {
    id: 'perfect_victory',
    title: '完全無欠のパーフェクト',
    badge: '🎯',
    category: '実戦の極致',
    priority: 70,
    rarity: 'epic',
    description: 'CPU対戦で20問または10問の全問正解（満点）を達成して勝利する。',
    conditionText: '満点全問正解で勝利',
    check: ({ hasPerfectWin }) => hasPerfectWin,
    getProgress: ({ hasPerfectWin }) => ({
      current: hasPerfectWin ? 1 : 0,
      target: 1,
      unit: '回',
      percent: hasPerfectWin ? 100 : 0,
    }),
  },
  {
    id: 'four_subjects_master',
    title: '四教科の覇王',
    badge: '🌟',
    category: 'キャリア',
    priority: 68,
    rarity: 'rare',
    description: '算数・国語・理科・社会の全4教科でそれぞれCPUに勝利する。',
    conditionText: '算・国・理・社すべてでCPUに勝利',
    check: ({ winSubjects }) => winSubjects.size >= 4,
    getProgress: ({ winSubjects }) => ({
      current: winSubjects.size,
      target: 4,
      unit: '教科',
      percent: Math.round((winSubjects.size / 4) * 100),
    }),
  },
  {
    id: 'lightning_win',
    title: '疾風迅雷の電撃戦',
    badge: '⚡',
    category: '実戦の極致',
    priority: 65,
    rarity: 'rare',
    description: '規定制限時間の半分未満の驚異的なスピードでCPUに勝利する。',
    conditionText: '制限時間の半分未満で勝利',
    check: ({ hasSpeedWin }) => hasSpeedWin,
    getProgress: ({ hasSpeedWin }) => ({
      current: hasSpeedWin ? 1 : 0,
      target: 1,
      unit: '回',
      percent: hasSpeedWin ? 100 : 0,
    }),
  },
  {
    id: 'shusai_killer',
    title: '秀才キラー',
    badge: '🏹',
    category: 'ライバル討伐',
    priority: 60,
    rarity: 'rare',
    description: '名門進学塾トップレベルの秀才「タクミ」を10回以上撃破する。',
    conditionText: '秀才タクミを10勝撃破',
    check: ({ levelStats }) => (levelStats.master?.wins || 0) >= 10,
    getProgress: ({ levelStats }) => {
      const wins = levelStats.master?.wins || 0;
      return {
        current: wins,
        target: 10,
        unit: '勝',
        percent: Math.min(100, Math.round((wins / 10) * 100)),
      };
    },
  },
  {
    id: 'veteran_warrior',
    title: '百戦錬磨の闘士',
    badge: '🔥',
    category: 'キャリア',
    priority: 55,
    rarity: 'rare',
    description: 'CPU対戦に通算30戦以上参戦し、激戦を戦い抜く。',
    conditionText: 'CPU対戦 通算30戦参戦',
    check: ({ total }) => total >= 30,
    getProgress: ({ total }) => ({
      current: total,
      target: 30,
      unit: '戦',
      percent: Math.min(100, Math.round((total / 30) * 100)),
    }),
  },
  {
    id: 'close_match_hero',
    title: '逆転の勇士',
    badge: '🛡️',
    category: '実戦の極致',
    priority: 50,
    rarity: 'rare',
    description: '1点差の緊迫した激闘を制して勝利をもぎ取る。',
    conditionText: '1点差の接戦で勝利',
    check: ({ hasCloseWin }) => hasCloseWin,
    getProgress: ({ hasCloseWin }) => ({
      current: hasCloseWin ? 1 : 0,
      target: 1,
      unit: '回',
      percent: hasCloseWin ? 100 : 0,
    }),
  },
  {
    id: 'rival_breaker',
    title: '熱血ブレーカー',
    badge: '🐺',
    category: 'ライバル討伐',
    priority: 45,
    rarity: 'common',
    description: '熱血チャレンジャー「ハヤト」を10回以上撃破する。',
    conditionText: '熱血ハヤトを10勝撃破',
    check: ({ levelStats }) => (levelStats.rival?.wins || 0) >= 10,
    getProgress: ({ levelStats }) => {
      const wins = levelStats.rival?.wins || 0;
      return {
        current: wins,
        target: 10,
        unit: '勝',
        percent: Math.min(100, Math.round((wins / 10) * 100)),
      };
    },
  },
  {
    id: 'nankan_hunter',
    title: '難関校ハンター',
    badge: '🦁',
    category: 'ライバル討伐',
    priority: 40,
    rarity: 'common',
    description: 'CPU対戦で通算5勝以上を達成する。',
    conditionText: 'CPU対戦 通算5勝達成',
    check: ({ wins }) => wins >= 5,
    getProgress: ({ wins }) => ({
      current: wins,
      target: 5,
      unit: '勝',
      percent: Math.min(100, Math.round((wins / 5) * 100)),
    }),
  },
  {
    id: 'hiyoko_graduate',
    title: 'ヒヨコ卒業生',
    badge: '🐣',
    category: 'ライバル討伐',
    priority: 35,
    rarity: 'common',
    description: '見習いヒヨコ「ピヨ太」を5回以上撃破して基本を卒業する。',
    conditionText: '見習いピヨ太を5勝撃破',
    check: ({ levelStats }) => (levelStats.rookie?.wins || 0) >= 5,
    getProgress: ({ levelStats }) => {
      const wins = levelStats.rookie?.wins || 0;
      return {
        current: wins,
        target: 5,
        unit: '勝',
        percent: Math.min(100, Math.round((wins / 5) * 100)),
      };
    },
  },
  {
    id: 'first_victory',
    title: '初勝利の歓喜',
    badge: '✨',
    category: 'キャリア',
    priority: 20,
    rarity: 'common',
    description: 'CPU対戦で初めての1勝を達成する。',
    conditionText: 'CPU対戦で初勝利',
    check: ({ wins }) => wins >= 1,
    getProgress: ({ wins }) => ({
      current: wins,
      target: 1,
      unit: '勝',
      percent: Math.min(100, wins >= 1 ? 100 : 0),
    }),
  },
  {
    id: 'challenger',
    title: '挑戦のチャレンジャー',
    badge: '🌱',
    category: 'キャリア',
    priority: 10,
    rarity: 'common',
    description: 'ライバルCPUとの熱いバトルに名乗りを上げた挑戦者の証。',
    conditionText: 'CPU対戦モードに参戦',
    check: () => true,
    getProgress: () => ({
      current: 1,
      target: 1,
      unit: '達成',
      percent: 100,
    }),
  },
];

/**
 * CPU対戦履歴から詳細な戦績メトリクスと実績達成状況を算出する
 */
export const calculateBattleAchievements = (history = []) => {
  const total = history.length;
  const now = Date.now();
  const oneMonthAgo = now - RECENT_DAYS_LIMIT * 24 * 60 * 60 * 1000;

  let wins = 0;
  let losses = 0;
  let draws = 0;
  let totalOniDefeats = 0;
  let recentOniDefeats = 0;
  let hasPerfectWin = false;
  let hasSpeedWin = false;
  let hasCloseWin = false;
  const winSubjects = new Set();

  const levelStats = {
    oni: { total: 0, wins: 0 },
    master: { total: 0, wins: 0 },
    rival: { total: 0, wins: 0 },
    rookie: { total: 0, wins: 0 },
  };

  // 時系列昇順（古い順）にソートして鬼神の連勝数を算出
  const sortedHistory = [...history].sort(
    (a, b) => new Date(a.timestamp || 0).getTime() - new Date(b.timestamp || 0).getTime()
  );

  let currentOniStreak = 0;
  let maxOniStreak = 0;

  sortedHistory.forEach((h) => {
    const lvl = h.cpuLevelId || 'master';
    if (!levelStats[lvl]) {
      levelStats[lvl] = { total: 0, wins: 0 };
    }
    levelStats[lvl].total += 1;

    const battleTime = new Date(h.timestamp || 0).getTime();
    const isRecent = battleTime >= oneMonthAgo;

    if (h.result === 'win') {
      wins += 1;
      levelStats[lvl].wins += 1;
      if (h.subject) {
        winSubjects.add(h.subject);
      }

      if (lvl === 'oni') {
        totalOniDefeats += 1;
        if (isRecent) {
          recentOniDefeats += 1;
        }
        currentOniStreak += 1;
        if (currentOniStreak > maxOniStreak) {
          maxOniStreak = currentOniStreak;
        }
      }

      // 満点勝利判定（totalQuestions と userScore が一致）
      if (h.totalQuestions > 0 && h.userScore === h.totalQuestions) {
        hasPerfectWin = true;
      }

      // 電撃戦判定（制限時間あり かつ 経過秒数が制限時間の半分以下）
      if (
        h.elapsedSeconds > 0 &&
        h.timeLimitSeconds > 0 &&
        h.elapsedSeconds <= Math.floor(h.timeLimitSeconds / 2)
      ) {
        hasSpeedWin = true;
      }

      // 1点差接戦判定
      if (typeof h.userScore === 'number' && typeof h.cpuScore === 'number') {
        if (h.userScore - h.cpuScore === 1) {
          hasCloseWin = true;
        }
      }
    } else if (h.result === 'lose') {
      losses += 1;
      if (lvl === 'oni') {
        currentOniStreak = 0;
      }
    } else {
      draws += 1;
    }
  });

  const winRate = total > 0 ? Math.round((wins / total) * 1000) / 10 : 0;

  const statsContext = {
    total,
    wins,
    losses,
    draws,
    winRate,
    totalOniDefeats,
    recentOniDefeats,
    maxOniStreak,
    currentOniStreak,
    levelStats,
    hasPerfectWin,
    hasSpeedWin,
    hasCloseWin,
    winSubjects,
  };

  // 各実績の達成判定
  const achievements = CPU_ACHIEVEMENTS.map((ach) => {
    const unlocked = Boolean(ach.check(statsContext, history));
    const progress = ach.getProgress(statsContext, history);
    return {
      ...ach,
      unlocked,
      progress,
    };
  });

  // 獲得済みの中から優先度（priority）が最も高い称号をメイン称号とする
  const unlockedList = achievements.filter((a) => a.unlocked);
  unlockedList.sort((a, b) => (b.priority || 0) - (a.priority || 0));
  const currentTitle = unlockedList[0] || achievements[achievements.length - 1]; // フォールバックは挑戦のチャレンジャー

  return {
    stats: statsContext,
    achievements,
    currentTitle,
    unlockedCount: unlockedList.length,
    totalCount: achievements.length,
    recentDays: RECENT_DAYS_LIMIT,
  };
};
