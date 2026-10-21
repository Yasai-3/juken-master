/**
 * 志望校別 出題プロファイル マスターデータ（全8校）
 * - targetAccuracy: 合格目安総合正答率 (%)
 * - examSubjects: 受験対象教科 (灘は理科のみの3教科型、他校は理科・社会の4教科型)
 * - weights: 分野別の重要度倍率 (1.0 = 標準, 1.3〜1.9 = 重点単元)
 * - questionTypeWeights: 形式別の重要度倍率
 * - difficultyWeights: 難易度別の重要度倍率
 * - focusTags: 合否を分ける最頻出キー単元
 * - features: 学校ごとの出題特徴と攻略ポイント
 */
export const TARGET_SCHOOLS = [
  {
    id: 'nada',
    name: '灘中学校',
    region: '関西（兵庫）',
    category: '最難関・男子校（3教科入試）',
    examSubjects: ['理科'], // 3教科型入試のため社会は判定対象外！
    targetScore: 85,
    tagline: '最高峰の思考力と実験データ分析・物理化学計算の極致（理科特化）',
    features: [
      '入試教科は国・算・理の3教科。社会の出題はなく理科の配点比重が非常に高い',
      '物理・化学の初見実験・複雑計算が合否を決定づける（高度な論理的考察力）',
      '知識の丸暗記は一切通用せず、グラフ・数値データから法則性を自力で見抜く力',
    ],
    weights: {
      物理: 2.0,
      化学: 1.8,
      生物: 1.0,
      地学: 1.0,
      歴史: 0.0,
      地理: 0.0,
    },
    difficultyWeights: {
      basic: 0.5,
      standard: 1.0,
      advanced: 2.2, // 応用問題が圧倒的
    },
    questionTypeWeights: {
      choice: 0.7,
      input: 1.3,
      descriptive: 1.6,
    },
    radarExpectations: {
      knowledge: 1.0,
      thinking: 2.4, // 考察力要求が極大
      expression: 1.8,
      stability: 1.5,
    },
    focusTags: [
      '水圧と浮力・力の合成と分解',
      '電流と回路・オームの法則・電力と熱量',
      '酸化と還元・発熱と吸熱・質量保存と定比例の法則',
      '化学実験データ計算',
      '植物のつくりとはたらき（光合成・呼吸・蒸散）',
      '気象観測・気圧・湿度と雲のでき方',
    ],
  },
  {
    id: 'tsukukoma',
    name: '筑波大学附属駒場中学校',
    region: '関東（東京）',
    category: '最難関・国立男子校（4教科入試）',
    examSubjects: ['理科', '社会'],
    targetScore: 86,
    tagline: '日本一の合格難易度 ＆ 多面的な科学的探究力・高度な資料分析記述',
    features: [
      '40分で密度の濃い大問4題。思考力・考察力・計算力を高い次元で融合させた超難問',
      '社会は地形図の精密読解、歴史資料の深い背景理解、時事と現代社会の論述',
      '小問数が多く時間配分が極めてシビア。初見の実験系でも即座に本質を見抜く直観力',
    ],
    weights: {
      物理: 1.6,
      化学: 1.5,
      生物: 1.4,
      地学: 1.4,
      歴史: 1.5,
      地理: 1.5,
    },
    difficultyWeights: {
      basic: 0.5,
      standard: 1.0,
      advanced: 2.0,
    },
    questionTypeWeights: {
      choice: 0.7,
      input: 1.2,
      descriptive: 1.8, // 記述・考察が極めて高い
    },
    radarExpectations: {
      knowledge: 1.2,
      thinking: 2.2, // 応用考察力
      expression: 2.0, // 記述表現力
      stability: 1.8, // 安定度
    },
    focusTags: [
      '運動と力・仕事と力学的エネルギー・熱の伝わり方',
      '化学実験データ計算',
      '生物の進化と歴史・地質時代',
      '天体の1日の動き・年周運動',
      '地図の読み方・縮尺・地形図と日本の領域',
      '戦後・現代（占領改革〜平成・令和）',
    ],
  },
  {
    id: 'kaisei',
    name: '開成中学校',
    region: '関東（東京）',
    category: '最難関・男子校（4教科入試）',
    examSubjects: ['理科', '社会'],
    targetScore: 80,
    tagline: '4分野均等バランス ＆ 長文リード文からの実験考察・短文記述',
    features: [
      '理科4分野（物化生地）から均等出題。会話文や初見の実験条件を読み解く記述力',
      '社会は地理・歴史・公民の複合問題、近現代史や時事問題の記述が頻出',
      '知識の深さに加え、理由や背景を端的に説明できる文章表現力が必須',
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
      descriptive: 1.6,
    },
    radarExpectations: {
      knowledge: 1.3,
      thinking: 1.7,
      expression: 1.9, // 開成は記述重視
      stability: 1.3,
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
    id: 'seiko_kanagawa',
    name: '聖光学院中学校',
    region: '関東（神奈川）',
    category: '最難関・男子校（4教科入試）',
    examSubjects: ['理科', '社会'],
    targetScore: 83,
    tagline: '超緻密な知識網羅性 ＆ 膨大な問題数を捌く圧倒的スピードと正確性',
    features: [
      '神奈川最難関校。理科・社会ともに小問数が非常に多く、膨大な知識の網羅率が要求される',
      '理科は計算・グラフ・細かい知識まで隙のない完成度が必要で高得点勝負になりやすい',
      '社会は地理・歴史・公民・時事の全域から標準〜発展知識が隈なく出題される',
    ],
    weights: {
      物理: 1.3,
      化学: 1.3,
      生物: 1.3,
      地学: 1.3,
      歴史: 1.4,
      地理: 1.4,
    },
    difficultyWeights: {
      basic: 0.9,
      standard: 1.3,
      advanced: 1.4,
    },
    questionTypeWeights: {
      choice: 1.3, // スピーディな正答が要
      input: 1.3,
      descriptive: 1.1,
    },
    radarExpectations: {
      knowledge: 1.9, // 知識網羅性が最重要
      thinking: 1.4,
      expression: 1.2,
      stability: 2.0, // ミス撲滅・安定度が極大
    },
    focusTags: [
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '人体①（消化・吸収・呼吸・排出・血液循環）',
      '恒星の一生・銀河系と宇宙の広がり・宇宙の進化',
      '日本の農林水産業・工業・エネルギー・伝統工芸',
      '日本の人口・交通通信・貿易・国際協力',
      '通史・文化史・旧国名・単位',
    ],
  },
  {
    id: 'todaiji',
    name: '東大寺学園中学校',
    region: '関西（奈良）',
    category: '最難関・男子校（4教科入試）',
    examSubjects: ['理科', '社会'],
    targetScore: 78,
    tagline: '圧倒的な処理スピードと計算量・ハイレベルな考察と記述',
    features: [
      '問題数が多く、制限時間内に膨大な計算とデータ読み取りをこなす瞬発力',
      '理科は浮力・てこ、水溶液・気体計算の難問が名物',
      '社会は統計資料・史料の読み解きと、歴史の因果関係を説明する語句・短文記述',
    ],
    weights: {
      物理: 1.6,
      化学: 1.6,
      生物: 1.1,
      地学: 1.2,
      歴史: 1.3,
      地理: 1.3,
    },
    difficultyWeights: {
      basic: 0.7,
      standard: 1.2,
      advanced: 1.7,
    },
    questionTypeWeights: {
      choice: 0.9,
      input: 1.3,
      descriptive: 1.4,
    },
    radarExpectations: {
      knowledge: 1.2,
      thinking: 2.0, // 物理化学計算・考察
      expression: 1.5,
      stability: 1.4,
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
    category: '最難関・共学校（4教科入試）',
    examSubjects: ['理科', '社会'],
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
      地理: 1.7, // 地理・現代社会が圧倒的
    },
    difficultyWeights: {
      basic: 0.8,
      standard: 1.4,
      advanced: 1.3,
    },
    questionTypeWeights: {
      choice: 1.4,
      input: 1.2,
      descriptive: 1.0,
    },
    radarExpectations: {
      knowledge: 1.8, // 知識網羅
      thinking: 1.3,
      expression: 1.1,
      stability: 1.9, // スピードと安定性
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
    category: '難関・男子校（4教科入試）',
    examSubjects: ['理科', '社会'],
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
      choice: 1.1,
      input: 1.3,
      descriptive: 1.1,
    },
    radarExpectations: {
      knowledge: 1.5,
      thinking: 1.5,
      expression: 1.3,
      stability: 1.6,
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
    category: '難関・共学校（4教科入試）',
    examSubjects: ['理科', '社会'],
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
      生物: 1.6, // 生物が突出
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
      input: 1.3,
      descriptive: 1.1,
    },
    radarExpectations: {
      knowledge: 1.4,
      thinking: 1.2,
      expression: 1.2,
      stability: 1.4,
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
  const isNada = school.id === 'nada';

  const questionMap = new Map();
  allQuestions.forEach((q) => questionMap.set(q.id, q));

  let totalWeightedScore = 0;
  let totalWeightedMax = 0;
  let schoolEligibleAnswered = 0;

  // 4軸レーダーチャート集計
  // 学校ごとの重点単元・難度・形式がリアルに数値に跳ね返るように個別集計
  const radarRaw = {
    knowledge: { score: 0, max: 0 },
    thinking: { score: 0, max: 0 },
    expression: { score: 0, max: 0 },
    stability: { score: 0, max: 0 },
  };

  // 分野別スコア
  const subjectScores = {
    物理: { correct: 0, total: 0, weight: school.weights['物理'] || 1.0 },
    化学: { correct: 0, total: 0, weight: school.weights['化学'] || 1.0 },
    生物: { correct: 0, total: 0, weight: school.weights['生物'] || 1.0 },
    地学: { correct: 0, total: 0, weight: school.weights['地学'] || 1.0 },
  };

  if (!isNada) {
    subjectScores['歴史'] = { correct: 0, total: 0, weight: school.weights['歴史'] || 1.0 };
    subjectScores['地理'] = { correct: 0, total: 0, weight: school.weights['地理'] || 1.0 };
  }

  const tagStats = {};

  (history || []).forEach((entry) => {
    (entry.results || []).forEach((r) => {
      const q = questionMap.get(r.id) || r;
      const subj = q.subject || '理科';
      const cat = q.category || 'その他';
      const diff = q.difficulty || 'standard';
      const qType = q.questionType || 'choice';

      // 灘の場合は社会の解答データを合否・レーダー判定から除外
      if (isNada && subj === '社会') {
        return;
      }

      schoolEligibleAnswered++;

      const catWeight = school.weights[cat] ?? 1.0;
      const diffWeight = school.difficultyWeights[diff] || 1.0;
      const typeWeight = school.questionTypeWeights[qType] || 1.0;
      const combinedWeight = catWeight * diffWeight * typeWeight;

      totalWeightedMax += combinedWeight;
      if (r.isCorrect) {
        totalWeightedScore += combinedWeight;
      }

      // レーダー軸①：基礎網羅率（学校が重視する分野の重み付けを反映）
      const kFactor = (school.radarExpectations?.knowledge || 1.0) * catWeight;
      radarRaw.knowledge.max += kFactor;
      if (r.isCorrect) radarRaw.knowledge.score += kFactor;

      // レーダー軸②：応用考察力（advanced・学校の思考力要求倍率を反映）
      const thFactor =
        (school.radarExpectations?.thinking || 1.0) *
        (diff === 'advanced' ? 3.0 : diff === 'standard' ? 1.0 : 0.2) *
        catWeight;
      radarRaw.thinking.max += thFactor;
      if (r.isCorrect) radarRaw.thinking.score += thFactor;

      // レーダー軸③：記述表現力（descriptive / input・学校の記述要求倍率を反映）
      const exFactor =
        (school.radarExpectations?.expression || 1.0) *
        (qType === 'descriptive' ? 3.5 : qType === 'input' ? 1.8 : 0.4);
      radarRaw.expression.max += exFactor;
      if (r.isCorrect) radarRaw.expression.score += exFactor;

      // レーダー軸④：全体安定度（ミス率と学校の安定性要求倍率を反映）
      const stFactor = (school.radarExpectations?.stability || 1.0) * combinedWeight;
      radarRaw.stability.max += stFactor;
      if (r.isCorrect) radarRaw.stability.score += stFactor;

      // 分野別
      if (subjectScores[cat]) {
        subjectScores[cat].total++;
        if (r.isCorrect) subjectScores[cat].correct++;
      }

      // 頻出タグ
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
  const requiredCount = isNada ? 35 : 50;
  const experienceFactor = Math.min(1.0, schoolEligibleAnswered / requiredCount);
  const progressScore = Math.round(rawWeightedAcc * (0.4 + 0.6 * experienceFactor));

  // 合否判定ランク
  let rank = 'D';
  let rankLabel = 'D判定：要特訓';
  let rankColor = 'text-rose-600 bg-rose-50 border-rose-300';
  const diffToTarget = school.targetScore - progressScore;

  if (progressScore >= school.targetScore) {
    rank = 'A';
    rankLabel = 'A判定：合格安全圏 🎉';
    rankColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
  } else if (progressScore >= school.targetScore - 7) {
    rank = 'B';
    rankLabel = 'B判定：合格射程圏 🎯';
    rankColor = 'text-blue-700 bg-blue-50 border-blue-300';
  } else if (progressScore >= school.targetScore - 15) {
    rank = 'C';
    rankLabel = 'C判定：あと一歩 🧗';
    rankColor = 'text-amber-700 bg-amber-50 border-amber-300';
  }

  // 4軸レーダーチャートデータ（学校ごとの要求比率により学校間で明確に数値が変動）
  const calcRadarValue = (raw, expWeight = 1.0) => {
    if (raw.max <= 0) return 0;
    const actualAcc = (raw.score / raw.max) * 100;
    // 志望校の要求水準（expWeightが2.0なら厳しい基準、1.2なら甘い基準）で補正
    const normalizedToSchool = actualAcc / (expWeight / 1.4);
    return Math.min(100, Math.max(0, Math.round(normalizedToSchool * (0.3 + 0.7 * experienceFactor))));
  };

  const radarData = [
    {
      subject: '基礎網羅率',
      value: calcRadarValue(radarRaw.knowledge, school.radarExpectations?.knowledge || 1.3),
      fullMark: 100,
    },
    {
      subject: '応用考察力',
      value: calcRadarValue(radarRaw.thinking, school.radarExpectations?.thinking || 1.6),
      fullMark: 100,
    },
    {
      subject: '記述表現力',
      value: calcRadarValue(radarRaw.expression, school.radarExpectations?.expression || 1.5),
      fullMark: 100,
    },
    {
      subject: '全体安定度',
      value: calcRadarValue(radarRaw.stability, school.radarExpectations?.stability || 1.5),
      fullMark: 100,
    },
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

  // 合格ToDoアクションリスト
  const todos = [];

  // 1. 最重点分野
  const weakPriorityCat = categoryStatus
    .filter((c) => c.isPriority && c.total >= 0 && c.accuracy < school.targetScore)
    .sort((a, b) => a.accuracy - b.accuracy)[0];

  if (weakPriorityCat) {
    const targetQCount = Math.max(5, 12 - weakPriorityCat.total);
    todos.push({
      id: 'todo_cat',
      badge: '最重要分野',
      title: `${school.name}最頻出の「${weakPriorityCat.category}」をあと${targetQCount}問マスター`,
      description: `現在正答率 ${weakPriorityCat.accuracy}% (合格目標 ${school.targetScore}%)。重点配点分野の底上げが最優先です。`,
      quizFilter: {
        category: weakPriorityCat.category,
        limit: 5,
        difficulty: isNada || school.id === 'tsukukoma' ? 'advanced' : 'standard',
      },
    });
  }

  // 2. 頻出単元
  const targetTag = school.focusTags.find((tag) => {
    const stat = tagStats[tag];
    return !stat || stat.total < 5 || (stat.correct / stat.total) < 0.75;
  }) || school.focusTags[0];

  if (targetTag) {
    todos.push({
      id: 'todo_tag',
      badge: '出題頻度★★★',
      title: `合否を分ける名物単元「${targetTag}」を特訓`,
      description: `${school.name}の過去問で頻出の重要単元です。確実な得点源に仕上げましょう。`,
      quizFilter: {
        subCategory: targetTag,
        limit: 5,
        difficulty: 'all',
      },
    });
  }

  // 3. 難度・形式特訓
  if (isNada || school.id === 'tsukukoma') {
    todos.push({
      id: 'todo_advanced',
      badge: `${school.name}必須難問`,
      title: `合否を決める「応用・実験データ考察問題」に挑戦`,
      description: `初見の実験考察や複雑な計算を解き切る力が合否を決定づけます。`,
      quizFilter: {
        difficulty: 'advanced',
        category: isNada ? '物理' : undefined,
        limit: 5,
      },
    });
  } else if (school.questionTypeWeights.descriptive >= 1.5) {
    todos.push({
      id: 'todo_descriptive',
      badge: '記述力養成',
      title: `差がつく「短文記述トレーニング」を5問クリア`,
      description: `${school.name}で頻出の理由・背景説明記述で満点を狙います。`,
      quizFilter: {
        questionType: 'descriptive',
        limit: 5,
      },
    });
  } else {
    todos.push({
      id: 'todo_speed',
      badge: '高得点勝負',
      title: `落とせない標準知識・語句入力を素早く解く特訓`,
      description: `${school.name}は高得点争い。ケアレスミスをゼロにするスピード演習です。`,
      quizFilter: {
        difficulty: 'standard',
        questionType: 'input',
        limit: 5,
      },
    });
  }

  // 4. 弱点復習
  const relevantWrong = (wrongAnswers || []).filter((w) => !isNada || w.subject === '理科');
  if (relevantWrong.length > 0) {
    todos.push({
      id: 'todo_wrong',
      badge: 'ミス撲滅',
      title: `弱点復習ノートから未解消のミスを5問解き直す`,
      description: `現在 ${relevantWrong.length}問のミスが残っています。同じ間違いをゼロにすることが合格への最短ルートです。`,
      quizFilter: {
        mode: 'review',
        subject: isNada ? '理科' : undefined,
        limit: 5,
      },
    });
  }

  return {
    school,
    isNada,
    progressScore,
    targetScore: school.targetScore,
    diffToTarget,
    rank,
    rankLabel,
    rankColor,
    totalAnswered: schoolEligibleAnswered,
    radarData,
    categoryStatus,
    todos,
  };
}
