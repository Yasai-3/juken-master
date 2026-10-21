/**
 * 志望校別 出題プロファイル マスターデータ（全8校）
 * - targetScore: 合格目安総合到達度 (%)
 * - examSubjects: 受験対象教科 (灘は理科のみの3教科型、他校は理科・社会の4教科型)
 * - weights: 分野別の重要度倍率 (1.0 = 標準, 1.3〜2.2 = 重点単元)
 * - questionTypeWeights: 形式別の重要度倍率
 * - difficultyWeights: 難易度別の重要度倍率
 * - focusTags: 合否を分ける最頻出キー単元
 * - features: 学校ごとの出題特徴と攻略ポイント
 * - targetRadar: 学校が求める4軸の合格目標水準 (0-100)
 * - requiredCount: 信頼性のある到達度判定に必要な実戦問題数
 * - minAdvancedCount: 合格圏(B判定以上)に必要な難問正解数
 */
export const TARGET_SCHOOLS = [
  {
    id: 'nada',
    name: '灘中学校',
    region: '関西（兵庫）',
    category: '最難関・男子校（3教科入試）',
    examSubjects: ['理科'], // 3教科型入試のため社会は完全除外！
    targetScore: 90, // 日本最高峰の合格到達度目標
    requiredCount: 50, // 最低50問の理科実戦演習が必要
    minAdvancedCount: 4, // 難問正解4問以上でなければB判定以上不可
    tagline: '最高峰の思考力と実験データ分析・物理化学計算の極致（理科特化）',
    features: [
      '入試教科は国・算・理の3教科。社会の出題はなく理科の配点比重が非常に高い',
      '物理・化学の初見実験・複雑計算が合否を決定づける（高度な論理的考察力）',
      '標準問題をいくら解いても合格圏に届かず、超難問（発展・考察）の突破力が必須',
    ],
    weights: {
      物理: 2.2,
      化学: 2.0,
      生物: 1.0,
      地学: 1.0,
      歴史: 0.0,
      地理: 0.0,
    },
    difficultyWeights: {
      basic: 0.3,
      standard: 1.0,
      advanced: 2.8, // 応用問題の配点比重が圧倒的
    },
    questionTypeWeights: {
      choice: 0.6,
      input: 1.3,
      descriptive: 1.8,
    },
    targetRadar: {
      knowledge: 82,
      thinking: 96, // 応用考察力が突出して高い合格水準
      expression: 86,
      stability: 90,
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
    targetScore: 90, // 日本一の合格難易度
    requiredCount: 60,
    minAdvancedCount: 4,
    tagline: '日本一の合格難易度 ＆ 多面的な科学的探究力・高度な資料分析記述',
    features: [
      '40分で密度の濃い大問4題。思考力・考察力・計算力を高い次元で融合させた超難問',
      '社会は地形図の精密読解、歴史資料の深い背景理解、時事と現代社会の論述記述',
      '基礎の正答率が高いだけでは届かず、超難問と多面的記述のクリアが必須',
    ],
    weights: {
      物理: 1.7,
      化学: 1.6,
      生物: 1.4,
      地学: 1.4,
      歴史: 1.6,
      地理: 1.6,
    },
    difficultyWeights: {
      basic: 0.4,
      standard: 1.0,
      advanced: 2.6,
    },
    questionTypeWeights: {
      choice: 0.6,
      input: 1.3,
      descriptive: 2.0, // 記述配点が極めて高い
    },
    targetRadar: {
      knowledge: 88,
      thinking: 96, // 応用考察力最難関
      expression: 94, // 記述表現力最難関
      stability: 92,
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
    targetScore: 84,
    requiredCount: 50,
    minAdvancedCount: 2,
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
      basic: 0.6,
      standard: 1.1,
      advanced: 2.0,
    },
    questionTypeWeights: {
      choice: 0.7,
      input: 1.2,
      descriptive: 1.8,
    },
    targetRadar: {
      knowledge: 88,
      thinking: 88,
      expression: 90,
      stability: 85,
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
    targetScore: 84,
    requiredCount: 50,
    minAdvancedCount: 2,
    tagline: '超緻密な知識網羅性 ＆ 膨大な問題数を捌く圧倒的スピードと正確性',
    features: [
      '神奈川最難関校。小問数が非常に多く、膨大な知識の網羅率とミスゼロが要求される',
      '理科は計算・グラフ・細かい知識まで隙のない完成度が必要で高得点勝負',
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
      basic: 0.8,
      standard: 1.3,
      advanced: 1.6,
    },
    questionTypeWeights: {
      choice: 1.3,
      input: 1.3,
      descriptive: 1.2,
    },
    targetRadar: {
      knowledge: 94, // 知識網羅性が最高峰
      thinking: 84,
      expression: 80,
      stability: 94, // 安定度・正確性が最高峰
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
    targetScore: 80,
    requiredCount: 45,
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
      basic: 0.6,
      standard: 1.2,
      advanced: 1.8,
    },
    questionTypeWeights: {
      choice: 0.8,
      input: 1.3,
      descriptive: 1.5,
    },
    targetRadar: {
      knowledge: 84,
      thinking: 90,
      expression: 82,
      stability: 84,
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
    targetScore: 80,
    requiredCount: 40,
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
      地理: 1.7,
    },
    difficultyWeights: {
      basic: 0.7,
      standard: 1.4,
      advanced: 1.4,
    },
    questionTypeWeights: {
      choice: 1.3,
      input: 1.2,
      descriptive: 1.1,
    },
    targetRadar: {
      knowledge: 90,
      thinking: 82,
      expression: 78,
      stability: 92,
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
    targetScore: 76,
    requiredCount: 35,
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
      basic: 0.8,
      standard: 1.3,
      advanced: 1.3,
    },
    questionTypeWeights: {
      choice: 1.1,
      input: 1.3,
      descriptive: 1.1,
    },
    targetRadar: {
      knowledge: 85,
      thinking: 80,
      expression: 78,
      stability: 84,
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
    targetScore: 72,
    requiredCount: 30,
    tagline: '基礎標準の堅実な穴埋め ＆ 生命・環境・科学的思考力問題',
    features: [
      '近年共学化で難易度急上昇。標準的な知識の抜け漏れがないことが絶対条件',
      '医大系列として生物や人体・環境分野への関心と思考力を問う問題が特徴',
      '社会は地理・歴史の重要語句・漢字を正しく書く一問一答と基本短文記述',
    ],
    weights: {
      物理: 1.1,
      化学: 1.1,
      生物: 1.5,
      地学: 1.1,
      歴史: 1.2,
      地理: 1.1,
    },
    difficultyWeights: {
      basic: 1.0,
      standard: 1.2,
      advanced: 1.1,
    },
    questionTypeWeights: {
      choice: 1.1,
      input: 1.2,
      descriptive: 1.1,
    },
    targetRadar: {
      knowledge: 80,
      thinking: 72,
      expression: 70,
      stability: 78,
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
 * 単元名の正規化（"05. 運動と力…" のような番号プレフィックスを除去して比較できるようにする）
 */
export const normalizeSubCategory = (s) =>
  String(s || '')
    .replace(/^\s*\d+\s*[.．、]\s*/, '')
    .trim();

/** 分野 → 教科 の対応表 */
const CATEGORY_TO_SUBJECT = {
  物理: '理科',
  化学: '理科',
  生物: '理科',
  地学: '理科',
  歴史: '社会',
  地理: '社会',
  公民: '社会',
};

/**
 * 志望校に対する学習者の到達度・判定・ToDoを計算するエンジン
 */
export function calculateTargetSchoolProgress(schoolId, history, wrongAnswers, allQuestions) {
  const school = TARGET_SCHOOLS.find((s) => s.id === schoolId) || TARGET_SCHOOLS[0];
  const isNada = school.id === 'nada';
  const isTsukukoma = school.id === 'tsukukoma';

  const questionMap = new Map();
  allQuestions.forEach((q) => questionMap.set(q.id, q));

  let totalWeightedScore = 0;
  let totalWeightedMax = 0;
  let schoolEligibleAnswered = 0;

  // 4軸レーダー用の統計
  let basicStandardTotal = 0;
  let basicStandardCorrect = 0;

  let advancedTotal = 0;
  let advancedCorrect = 0;

  let expressionTotal = 0;
  let expressionCorrect = 0;

  let overallTotal = 0;
  let overallCorrect = 0;

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

      // 灘の場合は社会の解答データを完全に除外
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

      overallTotal++;
      if (r.isCorrect) overallCorrect++;

      // 4軸集計
      // ① 基礎網羅率 (basic, standard)
      if (diff === 'basic' || diff === 'standard') {
        basicStandardTotal++;
        if (r.isCorrect) basicStandardCorrect++;
      }

      // ② 応用考察力 (advanced)
      if (diff === 'advanced') {
        advancedTotal++;
        if (r.isCorrect) advancedCorrect++;
      }

      // ③ 記述表現力 (descriptive, input)
      if (qType === 'descriptive' || qType === 'input') {
        expressionTotal++;
        if (r.isCorrect) expressionCorrect++;
      }

      // 分野別
      if (subjectScores[cat]) {
        subjectScores[cat].total++;
        if (r.isCorrect) subjectScores[cat].correct++;
      }

      // 頻出タグ（番号プレフィックスを除去した単元名で集計）
      const tag = normalizeSubCategory(q.subCategory);
      if (tag) {
        if (!tagStats[tag]) tagStats[tag] = { tag, correct: 0, total: 0, category: cat };
        tagStats[tag].total++;
        if (r.isCorrect) tagStats[tag].correct++;
      }
    });
  });

  // 経験問題数によるペナルティ係数（灘・筑駒は他校よりも多くの演習を要求）
  const requiredCount = school.requiredCount || 40;
  const experienceFactor = Math.min(1.0, schoolEligibleAnswered / requiredCount);

  // 総合到達度スコア (0-100%)
  const rawWeightedAcc = totalWeightedMax > 0 ? (totalWeightedScore / totalWeightedMax) * 100 : 0;
  let progressScore = Math.round(rawWeightedAcc * (0.35 + 0.65 * experienceFactor));

  // 灘・筑駒のシビアな足切り判定（難問未修時の安全装置）
  // 難問(advanced)の正解数が足りない場合、どれだけ基礎が良くても合格圏(70%以上)には到達させない
  let severeWarning = null;
  const minAdv = school.minAdvancedCount || 0;
  if ((isNada || isTsukukoma) && minAdv > 0 && advancedCorrect < minAdv) {
    if (progressScore > 68) {
      progressScore = 68; // C判定上限に抑え込む
    }
    severeWarning = isNada
      ? `※灘中合格ライン判定には、理科（物理・化学）の難問・実験考察の正解実績（現在${advancedCorrect}問/目標${minAdv}問以上）が必須です。`
      : `※筑駒合格ライン判定には、高度な応用考察・記述問題の正解実績（現在${advancedCorrect}問/目標${minAdv}問以上）が必須です。`;
  }

  // 合否判定ランク (A, B, C, D)
  let rank = 'D';
  let rankLabel = 'D判定：要特訓';
  let rankColor = 'text-rose-600 bg-rose-50 border-rose-300';
  const diffToTarget = school.targetScore - progressScore;

  if (isNada || isTsukukoma) {
    // 灘・筑駒の厳格な合否判定
    if (progressScore >= 90 && advancedCorrect >= minAdv) {
      rank = 'A';
      rankLabel = 'A判定：合格安全圏 🎉';
      rankColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
    } else if (progressScore >= 82 && advancedCorrect >= Math.max(2, minAdv - 1)) {
      rank = 'B';
      rankLabel = 'B判定：合格射程圏 🎯';
      rankColor = 'text-blue-700 bg-blue-50 border-blue-300';
    } else if (progressScore >= 70) {
      rank = 'C';
      rankLabel = 'C判定：あと一歩 🧗';
      rankColor = 'text-amber-700 bg-amber-50 border-amber-300';
    } else {
      rank = 'D';
      rankLabel = 'D判定：要特訓 ⚠️';
      rankColor = 'text-rose-600 bg-rose-50 border-rose-300';
    }
  } else {
    // 他校の合否判定
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
    } else {
      rank = 'D';
      rankLabel = 'D判定：要特訓';
      rankColor = 'text-rose-600 bg-rose-50 border-rose-300';
    }
  }

  // 4軸レーダーチャートの算出
  // 生徒の実際の能力（基礎・応用・記述・安定）を自然に評価し、学校の合格目標ライン(target)と比較
  const calcCurrentKnowledge = () => {
    if (basicStandardTotal === 0) return 0;
    const rate = (basicStandardCorrect / basicStandardTotal) * 100;
    return Math.min(100, Math.round(rate * (0.4 + 0.6 * experienceFactor)));
  };

  const calcCurrentThinking = () => {
    // 応用問題の正解率と演習量を評価
    if (advancedTotal === 0) {
      // 応用をまだ解いていない場合は基礎力に応じた低い初期値
      return Math.round(calcCurrentKnowledge() * 0.35);
    }
    const acc = (advancedCorrect / advancedTotal) * 100;
    const advExp = Math.min(1.0, advancedTotal / (isNada || isTsukukoma ? 8 : 5));
    return Math.min(100, Math.round(acc * (0.4 + 0.6 * advExp)));
  };

  const calcCurrentExpression = () => {
    if (expressionTotal === 0) {
      return Math.round(calcCurrentKnowledge() * 0.4);
    }
    const acc = (expressionCorrect / expressionTotal) * 100;
    const expExp = Math.min(1.0, expressionTotal / 6);
    return Math.min(100, Math.round(acc * (0.4 + 0.6 * expExp)));
  };

  const calcCurrentStability = () => {
    if (overallTotal === 0) return 0;
    const acc = (overallCorrect / overallTotal) * 100;
    return Math.min(100, Math.round(acc * (0.4 + 0.6 * experienceFactor)));
  };

  const targetRadar = school.targetRadar || {
    knowledge: 85,
    thinking: 85,
    expression: 80,
    stability: 85,
  };

  const currentKnowledge = calcCurrentKnowledge();
  const currentThinking = calcCurrentThinking();
  const currentExpression = calcCurrentExpression();
  const currentStability = calcCurrentStability();

  const radarData = [
    {
      subject: '基礎網羅率',
      current: currentKnowledge,
      target: targetRadar.knowledge,
      value: currentKnowledge, // 互換性用
      fullMark: 100,
    },
    {
      subject: '応用考察力',
      current: currentThinking,
      target: targetRadar.thinking,
      value: currentThinking, // 互換性用
      fullMark: 100,
    },
    {
      subject: '記述表現力',
      current: currentExpression,
      target: targetRadar.expression,
      value: currentExpression, // 互換性用
      fullMark: 100,
    },
    {
      subject: '全体安定度',
      current: currentStability,
      target: targetRadar.stability,
      value: currentStability, // 互換性用
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
  // ※ToDoの表示内容（教科・分野・単元・難易度・形式）と、実際に出題される問題が必ず一致するよう
  //   quizFilter には subject / category / subCategory を明示的に指定する
  const todos = [];
  const TODO_LIMIT = 5;
  const DIFF_LABEL = { basic: '基礎', standard: '標準', advanced: '応用・難問' };

  // 灘は社会を出題対象外にするため、問題プールも理科のみに限定
  const eligibleQuestions = (allQuestions || []).filter(
    (q) => !isNada || (q.subject || '理科') === '理科'
  );
  const countQuestions = (f) =>
    eligibleQuestions.filter(
      (q) =>
        (!f.subject || q.subject === f.subject) &&
        (!f.category || q.category === f.category) &&
        (!f.subCategory || normalizeSubCategory(q.subCategory) === f.subCategory) &&
        (!f.difficulty || q.difficulty === f.difficulty) &&
        (!f.questionType || q.questionType === f.questionType)
    ).length;

  // 1. 最重点分野
  const weakPriorityCat = categoryStatus
    .filter((c) => c.isPriority && c.accuracy < school.targetScore)
    .sort((a, b) => a.accuracy - b.accuracy)[0];

  if (weakPriorityCat) {
    const cat = weakPriorityCat.category;
    const subj = CATEGORY_TO_SUBJECT[cat];
    // 灘・筑駒は応用問題で特訓。ただし該当分野の応用問題が不足する場合は全難易度から出題
    let diff = isNada || isTsukukoma ? 'advanced' : 'standard';
    if (countQuestions({ subject: subj, category: cat, difficulty: diff }) < TODO_LIMIT) {
      diff = 'all';
    }
    const remaining = Math.max(0, 12 - weakPriorityCat.total);
    todos.push({
      id: 'todo_cat',
      badge: `最重要分野（${subj}）`,
      title: `${school.name}最頻出の「${subj}・${cat}」${diff !== 'all' ? `${DIFF_LABEL[diff]}問題` : ''}を${TODO_LIMIT}問特訓`,
      description: `現在正答率 ${weakPriorityCat.accuracy}%（合格目標 ${school.targetScore}%）・解答数 ${weakPriorityCat.total}問${
        remaining > 0 ? `（安定判定まであと${remaining}問）` : ''
      }。重点配点分野の底上げが最優先です。`,
      quizFilter: {
        subject: subj,
        category: cat,
        difficulty: diff,
        limit: TODO_LIMIT,
      },
    });
  }

  // 2. 頻出単元（実際に問題データが存在する単元のみを対象にする）
  const tagIndex = {};
  eligibleQuestions.forEach((q) => {
    const key = normalizeSubCategory(q.subCategory);
    if (key && !tagIndex[key]) tagIndex[key] = { subject: q.subject, category: q.category };
  });
  const availableTags = school.focusTags
    .map(normalizeSubCategory)
    .filter((tag) => tagIndex[tag]);
  const targetTag =
    availableTags.find((tag) => {
      const stat = tagStats[tag];
      return !stat || stat.total < 5 || stat.correct / stat.total < 0.75;
    }) || availableTags[0];

  if (targetTag) {
    const info = tagIndex[targetTag];
    todos.push({
      id: 'todo_tag',
      badge: `出題頻度★★★（${info.subject}・${info.category}）`,
      title: `合否を分ける名物単元「${targetTag}」を特訓`,
      description: `${school.name}の過去問で頻出の重要単元です（${info.subject} ＞ ${info.category}）。確実な得点源に仕上げましょう。`,
      quizFilter: {
        subject: info.subject,
        category: info.category,
        subCategory: targetTag,
        difficulty: 'all',
        limit: TODO_LIMIT,
      },
    });
  }

  // 3. 難度・形式特訓
  if (isNada || isTsukukoma) {
    // 灘：物理・化学の応用問題（ToDo①と重複しない分野を優先）／筑駒：理科・社会の応用問題
    const nadaCat = isNada
      ? ['物理', '化学'].find(
          (c) =>
            c !== weakPriorityCat?.category &&
            countQuestions({ subject: '理科', category: c, difficulty: 'advanced' }) >= TODO_LIMIT
        )
      : undefined;
    todos.push({
      id: 'todo_advanced',
      badge: `${school.name}必須難問`,
      title: isNada
        ? `合否を決める「理科${nadaCat ? `・${nadaCat}` : ''}」の応用・実験考察問題に挑戦`
        : `合否を決める「理科・社会」の応用・資料考察問題に挑戦`,
      description: isNada
        ? `灘の合否は物理・化学の難問突破力で決まります。初見の実験考察や複雑な計算を解き切る特訓です。`
        : `筑駒の合否は難問の突破力で決まります。理科・社会の応用問題から出題します。`,
      quizFilter: {
        subject: isNada ? '理科' : undefined,
        category: nadaCat,
        difficulty: 'advanced',
        limit: TODO_LIMIT,
      },
    });
  } else if (school.questionTypeWeights.descriptive >= 1.5) {
    todos.push({
      id: 'todo_descriptive',
      badge: '記述力養成',
      title: `差がつく「短文記述トレーニング（理科・社会）」を${TODO_LIMIT}問クリア`,
      description: `${school.name}で頻出の理由・背景説明記述で満点を狙います。`,
      quizFilter: {
        questionType: 'descriptive',
        difficulty: 'all',
        limit: TODO_LIMIT,
      },
    });
  } else {
    todos.push({
      id: 'todo_speed',
      badge: '高得点勝負',
      title: `落とせない「標準レベルの語句入力（理科・社会）」を${TODO_LIMIT}問特訓`,
      description: `${school.name}は高得点争い。ケアレスミスをゼロにするスピード演習です。`,
      quizFilter: {
        difficulty: 'standard',
        questionType: 'input',
        limit: TODO_LIMIT,
      },
    });
  }

  // 4. 弱点復習
  const relevantWrong = (wrongAnswers || []).filter((w) => !isNada || w.subject === '理科');
  if (relevantWrong.length > 0) {
    todos.push({
      id: 'todo_wrong',
      badge: 'ミス撲滅',
      title: `弱点復習ノートから未解消の${isNada ? '理科の' : ''}ミスを${TODO_LIMIT}問解き直す`,
      description: `現在 ${relevantWrong.length}問のミスが残っています。同じ間違いをゼロにすることが合格への最短ルートです。`,
      quizFilter: {
        mode: 'review',
        subject: isNada ? '理科' : undefined,
        difficulty: 'all',
        limit: TODO_LIMIT,
      },
    });
  }

  return {
    school,
    isNada,
    isTsukukoma,
    progressScore,
    targetScore: school.targetScore,
    diffToTarget,
    rank,
    rankLabel,
    rankColor,
    severeWarning,
    totalAnswered: schoolEligibleAnswered,
    radarData,
    categoryStatus,
    todos,
  };
}
