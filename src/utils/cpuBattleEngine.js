/**
 * 総合実力テスト専用 CPU対戦エンジン
 * レベル別CPUキャラクター、解答シミュレーション、勝敗判定
 */

export const CPU_LEVELS = {
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
        '君の解答ペース、少々遅いのではないか？'
      ],
      wrong: [
        'な、なに…！？この我が計算ミスを…！？',
        'ぐぬぬ…痛恨のケアレスミス…！',
        'フン、少々油断したようだな…次は外さん！'
      ],
      win: 'フハハ！我が計算領域を超えるには、まだ100年早い！',
      lose: 'バ、バカな…この我が敗北するとは…！君の実力、本物だな。',
      draw: '引き分けだと…！？我が計算に並び立つ者がいようとは…！'
    }
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
        '君もなかなかやるね！負けられないな。'
      ],
      wrong: [
        'あちゃ〜！問題文の聞き方を読み違えた…！',
        'うわ、悔しい！ここで落とすとは…！',
        'くそっ、まだ君にリードを許すわけには…！'
      ],
      win: 'やったー！僕の勝ちだね！次も良い勝負をしよう！',
      lose: '完敗だ…！君の集中力と正確さ、本当にすごいよ。',
      draw: '同点か！まさに互角の戦いだったね。再戦しよう！'
    }
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
        'どんどんいくぜ！ついてこれるか！？'
      ],
      wrong: [
        'うわぁ〜！選択肢で迷って外した〜！',
        'くっそー！最後の計算が合わなかったぜ！',
        'うそだろ！？次は絶対に正解してやる！'
      ],
      win: '勝ったぜー！努力は裏切らないって証明できたな！',
      lose: 'くやしい〜！でもめちゃくちゃ楽しかったぜ！次は勝つ！',
      draw: 'ドローか！お互い一歩も引かなかったな！ナイスファイト！'
    }
  },
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
        '先生に教えてもらった通りに解けたピヨ！'
      ],
      wrong: [
        'ピヨ〜！難しくて間違えちゃったピヨ…',
        'うぅ…解説をしっかり読んで復習するピヨ…',
        '次は当ててみせるピヨ！'
      ],
      win: 'えっ！？ぼくが勝っちゃったピヨ！？夢みたいピヨ〜！',
      lose: 'やっぱり君は強いピヨ…！ぼくももっと勉強するピヨ！',
      draw: '引き分けピヨ！一緒に頑張れて楽しかったピヨ！'
    }
  }
};

/**
 * CPUが問題を解くシミュレーション関数
 * @param {Object} question 問題データ
 * @param {string} cpuLevelId 'oni' | 'master' | 'rival' | 'rookie'
 * @returns {Object} { isCorrect, selectedAnswer, timeSec, quote }
 */
export const simulateCpuAnswer = (question, cpuLevelId = 'master') => {
  const cpu = CPU_LEVELS[cpuLevelId] || CPU_LEVELS.master;
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
export const determineBattleResult = (userScore, cpuScore, cpuLevelId = 'master') => {
  const cpu = CPU_LEVELS[cpuLevelId] || CPU_LEVELS.master;
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
