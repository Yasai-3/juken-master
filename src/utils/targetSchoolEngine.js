/**
 * 志望校別 出題プロファイル マスターデータ
 * - targetAccuracy: 合格目安総合正答率 (%)
 * - weights: 分野別の重要度倍率 (1.0 = 標準, 1.3〜1.6 = 重点単元)
 * - questionTypeWeights: 形式別の重要度倍率 (難関記述校など)
 * - difficultyWeights: 難易度別の重要度倍率
 * - focusTags: 合否を分ける最頻出キー単元
 * - features: 学校ごとの出題特徴と攻略ポイント
 */
export const TARGET_SCHOOLS = [
  {
    id: 'nada',
    name: '灘中学校',
    region: '関西（兵庫）',
    category: '最難関・男子校',
    targetScore: 85,
    tagline: '最高峰の思考力と実験データ分析・物理化学計算の極致',
    features: [
      '物理・化学の初見実験・複雑計算が合否を決定づける',
      '知識の丸暗記ではなく、原理原則から導く論理的思考力が必須',
      '社会は理科重点校（3科受検対応）だが、4科型では近現代史・統計の超難問対応',
    ],
    weights: {
      物理: 1.6,
      化学: 1.5,
      生物: 1.1,
      地学: 1.1,
      歴史: 1.0,
      地理: 1.0,
    },
    difficultyWeights: {
      basic: 0.6,
      standard: 1.0,
      advanced: 1.8, // 応用問題が圧倒的に重要
    },
    questionTypeWeights: {
      choice: 0.8,
      input: 1.2,
      descriptive: 1.5,
    },
    focusTags: [
      '水圧と浮力・力の合成と分解',
      '電流と回路・オームの法則・電力と熱量',
      '中和と塩',
      '化学実験データ計算',
      '光合成・呼吸・蒸散',
      '地震のゆれと発生・プレートの動き',
    ],
  },
  {
    id: 'kaisei',
    name: '開成中学校',
    region: '関東（東京）',
    category: '最難関・男子校',
    targetScore: 80,
    tagline: '4分野均等バランス ＆ 長文リード文からの実験考察・短文記述',
    features: [
      '理科4分野（物化生地）から大問4題が均等に出題される総合力勝負',
      '会話文・リード文の条件設定を正確に読み取り記述する表現力',
      '社会は近現代史・時事問題・地図読解の細かい記述問題が頻出',
    ],
    weights: {
      物理: 1.3,
      化学: 1.3,
      生物: 1.3,
      地学: 1.3,
      歴史: 1.4,
      地理: 1.3,
    },
    difficultyWeights: {
      basic: 0.7,
      standard: 1.1,
      advanced: 1.6,
    },
    questionTypeWeights: {
      choice: 0.8,
      input: 1.1,
      descriptive: 1.6, // 記述の配点が高い
    },
    focusTags: [
      '植物のつくりとはたらき（光合成・呼吸・蒸散）',
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '前線と天気の変化・日本の四季と気団・台風と防災',
      '運動と力・仕事と力学的エネルギー・熱の伝わり方',
      '戦後・現代（占領改革〜平成・令和）',
      '日本の農林水産業・工業・エネルギー・伝統工芸',
    ],
  },
  {
    id: 'todaiji',
    name: '東大寺学園中学校',
    region: '関西（奈良）',
    category: '最難関・男子校',
    targetScore: 78,
    tagline: '圧倒的な処理スピードと計算量・ハイレベルな考察と記述',
    features: [
      '問題数が多く、制限時間内に膨大な計算とデータ読み取りをこなす瞬発力',
      '理科は浮力・てこ、水溶液・気体計算の難問が名物',
      '社会は統計資料・史料の読み解きと、歴史の因果関係を説明する語句・短文記述',
    ],
    weights: {
      物理: 1.5,
      化学: 1.5,
      生物: 1.1,
      地学: 1.2,
      歴史: 1.3,
      地理: 1.3,
    },
    difficultyWeights: {
      basic: 0.7,
      standard: 1.2,
      advanced: 1.6,
    },
    questionTypeWeights: {
      choice: 0.9,
      input: 1.3,
      descriptive: 1.4,
    },
    focusTags: [
      '力のつり合い・水圧と浮力・力の合成と分解',
      '酸化と還元・発熱と吸熱・質量保存と定比例の法則',
      '気体の発生と性質・熱膨張と比熱',
      '太陽と月（満ち欠け・日食と月食）・太陽系の惑星',
      '欧米の近代化と幕末・開国',
      '環境問題・世界遺産・生活文化・重要統計資料',
    ],
  },
  {
    id: 'nishiyamato',
    name: '西大和学園中学校',
    region: '関西（奈良）',
    category: '最難関・共学校',
    targetScore: 82,
    tagline: '超スピード高得点勝負 ＆ 現代社会・時事問題・世界地理の宝庫',
    features: [
      '合格最低点が高く、標準〜発展の知識を1問も落とさないスピードと正確性',
      '社会は時事問題の出題割合が日本一レベルで、世界地理や現代社会・SDGsが頻出',
      '理科も広範な知識と典型的な実験計算を素早くミスゼロで処理する力',
    ],
    weights: {
      物理: 1.2,
      化学: 1.3,
      生物: 1.2,
      地学: 1.2,
      歴史: 1.3,
      地理: 1.6, // 地理・現代社会の配点比重大
    },
    difficultyWeights: {
      basic: 0.8,
      standard: 1.3,
      advanced: 1.4,
    },
    questionTypeWeights: {
      choice: 1.2, // スピード4択・選択の比重が高い
      input: 1.2,
      descriptive: 1.0,
    },
    focusTags: [
      '世界地理（自然・気候・宗教・各州の産業と生活）',
      '日本の人口・交通通信・貿易・国際協力',
      '環境問題・世界遺産・生活文化・重要統計資料',
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '電流と回路・オームの法則・電力と熱量',
      '人体①（消化・吸収・呼吸・排出・血液循環）',
    ],
  },
  {
    id: 'seiko',
    name: '大阪星光学院中学校',
    region: '関西（大阪）',
    category: '難関・男子校',
    targetScore: 80,
    tagline: '正統派・標準発展のノーミス完成度 ＆ 典型実験計算の完全攻略',
    features: [
      '奇問悪問はなく、中学受験の王道良問がズラリと並ぶ完成度勝負',
      '理科は力学・電気・中和・溶解度など頻出計算問題で確実に満点を狙う',
      '社会は通史の正しい時代把握、各地方の地誌・産業データを網羅する力',
    ],
    weights: {
      物理: 1.4,
      化学: 1.4,
      生物: 1.2,
      地学: 1.2,
      歴史: 1.3,
      地理: 1.3,
    },
    difficultyWeights: {
      basic: 0.9,
      standard: 1.3,
      advanced: 1.3,
    },
    questionTypeWeights: {
      choice: 1.0,
      input: 1.3,
      descriptive: 1.1,
    },
    focusTags: [
      '電流と回路・オームの法則・電力と熱量',
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '運動と力・仕事と力学的エネルギー・熱の伝わり方',
      '江戸時代',
      '明治時代（維新・憲法・日清日露）',
      '日本の農林水産業・工業・エネルギー・伝統工芸',
    ],
  },
  {
    id: 'takatsuki',
    name: '高槻中学校',
    region: '関西（大阪）',
    category: '難関・共学校',
    targetScore: 75,
    tagline: '基礎標準の堅実な穴埋め ＆ 生命・環境・科学的思考力問題',
    features: [
      '近年共学化で難易度急上昇。標準的な知識の抜け漏れがないことが絶対条件',
      '医大系列として生物や人体・環境分野への関心と思考力を問う問題が特徴',
      '社会は地理・歴史の重要語句・漢字を正しく書く一問一答と基本短文記述',
    ],
    weights: {
      物理: 1.2,
      化学: 1.2,
      生物: 1.5, // 生物・生命科学に特色
      地学: 1.2,
      歴史: 1.2,
      地理: 1.2,
    },
    difficultyWeights: {
      basic: 1.1,
      standard: 1.3,
      advanced: 1.0,
    },
    questionTypeWeights: {
      choice: 1.1,
      input: 1.3, // 正確な語句入力
      descriptive: 1.1,
    },
    focusTags: [
      '人体①（消化・吸収・呼吸・排出・血液循環）',
      '人体②（感覚・神経・脳・骨格と筋肉）',
      '植物のつくりとはたらき（光合成・呼吸・蒸散）',
      '顕微鏡・細胞・水中の小さな生物',
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '日本の地形・気候区分と自然災害・防災',
    ],
  },
];

/**
 * 志望校に対する学習者の到達度・判定・ToDoを計算するエンジン
 */
export function calculateTargetSchoolProgress(schoolId, history, wrongAnswers, allQuestions) {
  const school = TARGET_SCHOOLS.find((s) => s.id === schoolId) || TARGET_SCHOOLS[0];

  // 全解答結果を集約
  const questionMap = new Map();
  allQuestions.forEach((q) => questionMap.set(q.id, q));

  let totalWeightedScore = 0;
  let totalWeightedMax = 0;

  // 4軸レーダーチャート用スコア (0-100)
  const axisStats = {
    knowledge: { correct: 0, total: 0 }, // 知識・網羅性
    thinking: { correct: 0, total: 0 },  // 考察・応用力 (advanced)
    expression: { correct: 0, total: 0 },// 記述・表現力 (descriptive)
    speed: { correct: 0, total: 0 },     // 安定度・正答率
  };

  // 分野別スコア
  const subjectScores = {
    物理: { correct: 0, total: 0, weight: school.weights['物理'] || 1.0 },
    化学: { correct: 0, total: 0, weight: school.weights['化学'] || 1.0 },
    生物: { correct: 0, total: 0, weight: school.weights['生物'] || 1.0 },
    地学: { correct: 0, total: 0, weight: school.weights['地学'] || 1.0 },
    歴史: { correct: 0, total: 0, weight: school.weights['歴史'] || 1.0 },
    地理: { correct: 0, total: 0, weight: school.weights['地理'] || 1.0 },
  };

  // タグ別スコア
  const tagStats = {};

  (history || []).forEach((entry) => {
    (entry.results || []).forEach((r) => {
      const q = questionMap.get(r.id) || r;
      const cat = q.category || 'その他';
      const diff = q.difficulty || 'standard';
      const qType = q.questionType || 'choice';

      const catWeight = school.weights[cat] || 1.0;
      const diffWeight = school.difficultyWeights[diff] || 1.0;
      const typeWeight = school.questionTypeWeights[qType] || 1.0;
      const combinedWeight = catWeight * diffWeight * typeWeight;

      totalWeightedMax += combinedWeight;
      if (r.isCorrect) {
        totalWeightedScore += combinedWeight;
      }

      // レーダー軸集計
      axisStats.knowledge.total++;
      if (r.isCorrect) axisStats.knowledge.correct++;

      if (diff === 'advanced') {
        axisStats.thinking.total++;
        if (r.isCorrect) axisStats.thinking.correct++;
      }

      if (qType === 'descriptive') {
        axisStats.expression.total++;
        if (r.isCorrect) axisStats.expression.correct++;
      }

      axisStats.speed.total++;
      if (r.isCorrect) axisStats.speed.correct++;

      // 分野別
      if (subjectScores[cat]) {
        subjectScores[cat].total++;
        if (r.isCorrect) subjectScores[cat].correct++;
      }

      // 頻出タグ集計
      const tag = q.subCategory || q.knowledgeTag;
      if (tag) {
        if (!tagStats[tag]) tagStats[tag] = { tag, correct: 0, total: 0, category: cat };
        tagStats[tag].total++;
        if (r.isCorrect) tagStats[tag].correct++;
      }
    });
  });

  // 総合到達度スコア (0-100%)
  const rawWeightedAcc = totalWeightedMax > 0 ? (totalWeightedScore / totalWeightedMax) * 100 : 0;
  // 経験問題数によるペナルティ補正（問題数が極端に少ないときは100%に張り付かないようにする）
  const totalAnswered = (history || []).reduce((acc, h) => acc + (h.total || 0), 0);
  const experienceFactor = Math.min(1.0, totalAnswered / 60); // 60問解いて本来のスコア
  const progressScore = Math.round(rawWeightedAcc * (0.4 + 0.6 * experienceFactor));

  // 合否判定ランク
  let rank = 'D';
  let rankLabel = '要特訓';
  let rankColor = 'text-rose-500 bg-rose-50 border-rose-200';
  const diffToTarget = school.targetScore - progressScore;

  if (progressScore >= school.targetScore) {
    rank = 'A';
    rankLabel = '合格安全圏 🎉';
    rankColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
  } else if (progressScore >= school.targetScore - 7) {
    rank = 'B';
    rankLabel = '合格射程圏 🎯';
    rankColor = 'text-blue-700 bg-blue-50 border-blue-300';
  } else if (progressScore >= school.targetScore - 15) {
    rank = 'C';
    rankLabel = 'あと一歩 🧗';
    rankColor = 'text-amber-700 bg-amber-50 border-amber-300';
  }

  // 4軸レーダーチャートデータ (0-100)
  const calcAcc = (st, fallback) => (st.total > 0 ? Math.round((st.correct / st.total) * 100) : fallback);
  const radarData = [
    { subject: '基礎網羅率', value: Math.min(100, Math.round((totalAnswered / 120) * 100)), fullMark: 100 },
    { subject: '応用考察力', value: calcAcc(axisStats.thinking, 40), fullMark: 100 },
    { subject: '記述表現力', value: calcAcc(axisStats.expression, 35), fullMark: 100 },
    { subject: '全体安定度', value: calcAcc(axisStats.speed, 50), fullMark: 100 },
  ];

  // 分野別達成状況リスト
  const categoryStatus = Object.entries(subjectScores).map(([cat, val]) => {
    const acc = val.total > 0 ? Math.round((val.correct / val.total) * 100) : 0;
    const target = school.targetScore;
    const isPriority = (val.weight || 1.0) >= 1.3;
    return {
      category: cat,
      accuracy: acc,
      total: val.total,
      weight: val.weight,
      isPriority,
      isPassed: acc >= target,
      diff: acc - target,
    };
  });

  // 合格のためのToDoアクションリスト（具体的残り問題数）を自動生成
  const todos = [];

  // ToDo 1: 最重点分野で正答率が足りないもの
  const weakPriorityCat = categoryStatus
    .filter((c) => c.isPriority && c.total >= 0 && c.accuracy < school.targetScore)
    .sort((a, b) => a.accuracy - b.accuracy)[0];

  if (weakPriorityCat) {
    const targetQCount = Math.max(5, 12 - weakPriorityCat.total);
    todos.push({
      id: 'todo_cat',
      badge: '最重要分野',
      title: `${school.name}最頻出の「${weakPriorityCat.category}」をあと${targetQCount}問マスター`,
      description: `現在正答率 ${weakPriorityCat.accuracy}% (合格ライン ${school.targetScore}%)。重点配点分野の底上げが最優先です。`,
      quizFilter: {
        category: weakPriorityCat.category,
        limit: 5,
        difficulty: 'standard',
      },
    });
  }

  // ToDo 2: 志望校の頻出タグでまだ解いていない／正答率が低いもの
  const targetTag = school.focusTags.find((tag) => {
    const stat = tagStats[tag];
    return !stat || stat.total < 5 || (stat.correct / stat.total) < 0.75;
  }) || school.focusTags[0];

  if (targetTag) {
    todos.push({
      id: 'todo_tag',
      badge: '出題頻度★★★',
      title: `合否を分ける名物単元「${targetTag}」を特訓`,
      description: `過去問で毎年問われる重要テーマです。基本〜応用まで確実に得点源にしましょう。`,
      quizFilter: {
        subCategory: targetTag,
        limit: 5,
        difficulty: 'all',
      },
    });
  }

  // ToDo 3: 応用問題 (advanced) または 記述問題 (descriptive) の補強
  if (axisStats.thinking.total < 8 || (axisStats.thinking.correct / Math.max(1, axisStats.thinking.total)) < 0.7) {
    todos.push({
      id: 'todo_advanced',
      badge: '合否決定問題',
      title: `難関突破のための「応用・実験考察問題」に挑戦`,
      description: `初見の実験データや複雑な計算問題に慣れることで、上位合格圏への壁を突破します。`,
      quizFilter: {
        difficulty: 'advanced',
        limit: 5,
      },
    });
  } else if (axisStats.expression.total < 6) {
    todos.push({
      id: 'todo_descriptive',
      badge: '記述力強化',
      title: `差がつく「短文記述トレーニング」を5問クリア`,
      description: `部分点を確実に拾うためのキーワード記述力を鍛えます。`,
      quizFilter: {
        questionType: 'descriptive',
        limit: 5,
      },
    });
  }

  // ToDo 4: 弱点ノートからの復習
  if (wrongAnswers && wrongAnswers.length > 0) {
    todos.push({
      id: 'todo_wrong',
      badge: 'ミス撲滅',
      title: `弱点復習ノートから未解消のミスを5問解き直す`,
      description: `現在 ${wrongAnswers.length}問のミスが残っています。二度と同じ間違いをしないことが最大の近道です。`,
      quizFilter: {
        mode: 'review',
        limit: 5,
      },
    });
  }

  return {
    school,
    progressScore,
    targetScore: school.targetScore,
    diffToTarget,
    rank,
    rankLabel,
    rankColor,
    totalAnswered,
    radarData,
    categoryStatus,
    todos,
  };
}
