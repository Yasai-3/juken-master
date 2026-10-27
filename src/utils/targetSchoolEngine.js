/**
 * 志望校別 出題プロファイル マスターデータ（全8校）
 * - targetScore: 合格目安総合到達度 (%)
 * - examSubjects: 受験対象教科 (灘は国語・理科の3教科型、他校は国語・理科・社会の4教科型)
 * - weights: 分野別の重要度倍率 (1.0 = 標準, 1.3〜2.2 = 重点単元)
 * - questionTypeWeights: 形式別の重要度倍率
 * - difficultyWeights: 難易度別の重要度倍率
 * - focusTags: 合否を分ける最頻出キー単元
 * - features: 学校ごとの出題特徴と攻略ポイント
 * - targetRadar: 学校が求める4軸の合格目標水準 (0-100)
 * - requiredCount: 信頼性のある到達度判定に必要な実戦問題数（難関校ほど多く要求）
 * - categoryMinCount: 各分野で判定有効となるための最低演習数（満たない場合は実効到達度が減衰）
 * - minAdvancedCount: 合格圏(B判定以上)に必要な難問正解数
 */
export const TARGET_SCHOOLS = [
  {
    id: 'nada',
    name: '灘中学校',
    region: '関西（兵庫）',
    category: '最難関・男子校（3教科入試）',
    examSubjects: ['国語', '理科'], // 3教科型入試のため社会は完全除外！
    targetScore: 90, // 日本最高峰の合格到達度目標
    requiredCount: 1500, // 全体で1500問以上の実戦演習が必要
    categoryMinCount: 150, // 各分野で最低150問演習して初めて実力判定が満額評価！
    minAdvancedCount: 15, // 難問正解15問以上でなければB判定以上不可
    tagline: '最高峰の語彙力・思考力 ＆ 実験データ分析・物理化学計算の極致',
    features: [
      '入試教科は国・算・理の3教科（社会は出題なし）。国語は1日目（知識語彙）と2日目（長文読解）の2日制',
      '国語1日目は難関故事成語・四字熟語・慣用句・和語・外来語が大量出題され、語彙知識の深さが合否を直撃',
      '理科は物理・化学の初見実験・複雑計算が合否を決定づける（高度な論理的考察力）',
      '標準問題をいくら解いても合格圏に届かず、超難問（発展・考察）の突破力が必須',
    ],
    weights: {
      物理: 2.2,
      化学: 2.0,
      生物: 1.0,
      地学: 1.0,
      歴史: 0.0,
      地理: 0.0,
      故事成語: 1.8,
      四字熟語: 1.8,
      慣用句: 1.6,
      和語: 1.6,
      ことわざ: 1.5,
      '助数詞・類義語・対義語': 1.5,
      '季語・外来語': 1.4,
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
      knowledge: 85,
      thinking: 96, // 応用考察力が突出して高い合格水準
      expression: 88,
      stability: 90,
    },
    focusTags: [
      '水圧と浮力・力の合成と分解',
      '電流と回路・オームの法則・電力と熱量',
      '酸化と還元・発熱と吸熱・質量保存と定比例の法則',
      '化学実験データ計算',
      '中国の古典・歴史に由来する故事成語①（思想・処世）',
      '人物の性格・態度・行動を表す四字熟語',
      'からだ（頭・顔・目・耳・鼻・口・舌）の慣用句',
      '慣用的な和語・重ね言葉',
    ],
  },
  {
    id: 'tsukukoma',
    name: '筑波大学附属駒場中学校',
    region: '関東（東京）',
    category: '最難関・国立男子校（4教科入試）',
    examSubjects: ['国語', '理科', '社会'],
    targetScore: 90, // 日本一の合格難易度
    requiredCount: 1500,
    categoryMinCount: 150,
    minAdvancedCount: 15,
    tagline: '日本一の合格難易度 ＆ 多面的な科学的探究力・高度な語彙記述',
    features: [
      '国語は詩歌や随筆、高度な語彙・心情表現・外来語の正確な把握と深い記述力が要求される',
      '理科は40分で密度の濃い大問4題。思考力・考察力・計算力を高い次元で融合させた超難問',
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
      和語: 1.7,
      '季語・外来語': 1.7,
      慣用句: 1.5,
      故事成語: 1.4,
      四字熟語: 1.4,
      ことわざ: 1.3,
      '助数詞・類義語・対義語': 1.4,
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
      knowledge: 90,
      thinking: 96, // 応用考察力最難関
      expression: 95, // 記述表現力最難関
      stability: 92,
    },
    focusTags: [
      '運動と力・仕事と力学的エネルギー・熱の伝わり方',
      '化学実験データ計算',
      '地図の読み方・縮尺・地形図と日本の領域',
      '戦後・現代（占領改革〜平成・令和）',
      '思考・概念・心情・ビジネスの外来語（カタカナ語）',
      '心情・感情を表す和語',
      '春の季語（時候・天文・地理・生活・行事・動植物）',
    ],
  },
  {
    id: 'kaisei',
    name: '開成中学校',
    region: '関東（東京）',
    category: '最難関・男子校（4教科入試）',
    examSubjects: ['国語', '理科', '社会'],
    targetScore: 84,
    requiredCount: 1200,
    categoryMinCount: 120,
    minAdvancedCount: 10,
    tagline: '4分野均等 ＆ 記述・語彙力と長文リード文からの実験考察',
    features: [
      '国語は長文読解に加え、ことわざ・慣用句・語句知識の正確な運用と記述説明力が問われる',
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
      慣用句: 1.5,
      ことわざ: 1.4,
      四字熟語: 1.4,
      和語: 1.4,
      故事成語: 1.3,
      '助数詞・類義語・対義語': 1.4,
      '季語・外来語': 1.3,
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
      stability: 86,
    },
    focusTags: [
      '植物のつくりとはたらき（光合成・呼吸・蒸散）',
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '前線と天気の変化・日本の四季と気団・台風と防災',
      '戦後・現代（占領改革〜平成・令和）',
      'からだ（手・腕・足・胸・腹・背・腰）の慣用句',
      '人間・生き方・教訓のことわざ',
      '数字や対比を含む四字熟語',
    ],
  },
  {
    id: 'seiko_kanagawa',
    name: '聖光学院中学校',
    region: '関東（神奈川）',
    category: '最難関・男子校（4教科入試）',
    examSubjects: ['国語', '理科', '社会'],
    targetScore: 84,
    requiredCount: 1100,
    categoryMinCount: 110,
    minAdvancedCount: 8,
    tagline: '超緻密な知識網羅性 ＆ 膨大な問題数を捌く圧倒的スピードと正確性',
    features: [
      '神奈川最難関校。小問数が非常に多く、語彙・助数詞・類義語対義語から理社まで隙のない完成度勝負',
      '国語は語句・漢字・文法・語彙の処理スピードとノーミス精度が合格の前提条件',
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
      '助数詞・類義語・対義語': 1.5,
      四字熟語: 1.4,
      慣用句: 1.4,
      ことわざ: 1.3,
      故事成語: 1.3,
      和語: 1.3,
      '季語・外来語': 1.3,
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
      knowledge: 95, // 知識網羅性が最高峰
      thinking: 84,
      expression: 82,
      stability: 95, // 安定度・正確性が最高峰
    },
    focusTags: [
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '人体①（消化・吸収・呼吸・排出・血液循環）',
      '日本の農林水産業・工業・エネルギー・伝統工芸',
      '物の数え方（助数詞）',
      '類義語（意味の似た言葉）',
      '対義語（反対の意味の言葉）',
    ],
  },
  {
    id: 'todaiji',
    name: '東大寺学園中学校',
    region: '関西（奈良）',
    category: '最難関・男子校（4教科入試）',
    examSubjects: ['国語', '理科', '社会'],
    targetScore: 80,
    requiredCount: 1000,
    categoryMinCount: 100, // 各分野最低100問演習で判定有効！
    minAdvancedCount: 8,
    tagline: '圧倒的な処理スピードと計算量・古典背景・ハイレベルな考察と記述',
    features: [
      '国語は文学的・思想的な長文に加え、故事成語や四字熟語などの古典的背景を持つ語彙が頻出',
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
      故事成語: 1.6,
      四字熟語: 1.5,
      慣用句: 1.5,
      ことわざ: 1.4,
      和語: 1.4,
      '助数詞・類義語・対義語': 1.4,
      '季語・外来語': 1.3,
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
      knowledge: 86,
      thinking: 90,
      expression: 84,
      stability: 85,
    },
    focusTags: [
      '力のつり合い・水圧と浮力・力の合成と分解',
      '酸化と還元・発熱と吸熱・質量保存と定比例の法則',
      '中国の古典・歴史に由来する故事成語②（戦い・勝敗）',
      '人間関係・社会・教訓を表す四字熟語',
      '欧米の近代化と幕末・開国',
    ],
  },
  {
    id: 'nishiyamato',
    name: '西大和学園中学校',
    region: '関西（奈良）',
    category: '最難関・共学校（4教科入試）',
    examSubjects: ['国語', '理科', '社会'],
    targetScore: 80,
    requiredCount: 800,
    categoryMinCount: 80,
    minAdvancedCount: 6,
    tagline: '超スピード高得点勝負 ＆ 現代社会・時事問題・国語語彙の宝庫',
    features: [
      '合格最低点が高く、国語・理科・社会の標準〜発展の知識を1問も落とさないスピードと正確性',
      '国語は語彙・四字熟語・慣用句・助数詞の一問一答形式が確実に得点源となる',
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
      '助数詞・類義語・対義語': 1.5,
      四字熟語: 1.5,
      慣用句: 1.4,
      故事成語: 1.4,
      和語: 1.3,
      ことわざ: 1.3,
      '季語・外来語': 1.3,
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
      knowledge: 92,
      thinking: 82,
      expression: 80,
      stability: 92,
    },
    focusTags: [
      '世界地理（自然・気候・宗教・各州の産業と生活）',
      '日本の人口・交通通信・貿易・国際協力',
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '物の数え方（助数詞）',
      '慣用的な和語・重ね言葉',
      '人物の性格・態度・行動を表す四字熟語',
    ],
  },
  {
    id: 'seiko',
    name: '大阪星光学院中学校',
    region: '関西（大阪）',
    category: '難関・男子校（4教科入試）',
    examSubjects: ['国語', '理科', '社会'],
    targetScore: 76,
    requiredCount: 600,
    categoryMinCount: 60,
    minAdvancedCount: 4,
    tagline: '正統派・標準発展のノーミス完成度 ＆ 典型実験計算・語彙の完全攻略',
    features: [
      '奇問悪問はなく、中学受験の王道良問がズラリと並ぶ完成度勝負',
      '国語はことわざ・慣用句・四字熟語・漢字の基本〜標準問題で確実に満点を狙う',
      '理科は力学・電気・中和・溶解度など頻出計算問題で確実に得点',
      '社会は通史の正しい時代把握、各地方の地誌・産業データを網羅する力',
    ],
    weights: {
      物理: 1.4,
      化学: 1.4,
      生物: 1.2,
      地学: 1.2,
      歴史: 1.3,
      地理: 1.3,
      ことわざ: 1.4,
      慣用句: 1.4,
      四字熟語: 1.4,
      故事成語: 1.3,
      和語: 1.3,
      '助数詞・類義語・対義語': 1.3,
      '季語・外来語': 1.3,
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
      knowledge: 86,
      thinking: 80,
      expression: 78,
      stability: 85,
    },
    focusTags: [
      '電流と回路・オームの法則・電力と熱量',
      '水溶液の性質・溶解度と再結晶・濃度計算',
      '努力・油断・失敗のことわざ',
      '動物・植物・自然を使った慣用句',
      '数字や対比を含む四字熟語',
    ],
  },
  {
    id: 'takatsuki',
    name: '高槻中学校',
    region: '関西（大阪）',
    category: '難関・共学校（4教科入試）',
    examSubjects: ['国語', '理科', '社会'],
    targetScore: 72,
    requiredCount: 500,
    categoryMinCount: 50, // 各分野最低50問演習で判定有効！
    minAdvancedCount: 2,
    tagline: '基礎標準の堅実な穴埋め ＆ 生命・環境・国語知識の確実な定着',
    features: [
      '近年共学化で難易度急上昇。標準的な知識の抜け漏れがないことが絶対条件',
      '国語は助数詞・慣用句・ことわざなど日常生活に根ざした語彙知識の一問一答が確実に出題',
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
      '助数詞・類義語・対義語': 1.3,
      慣用句: 1.3,
      ことわざ: 1.2,
      四字熟語: 1.2,
      故事成語: 1.2,
      和語: 1.2,
      '季語・外来語': 1.2,
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
      knowledge: 82,
      thinking: 74,
      expression: 72,
      stability: 80,
    },
    focusTags: [
      '人体①（消化・吸収・呼吸・排出・血液循環）',
      '植物のつくりとはたらき（光合成・呼吸・蒸散）',
      '物の数え方（助数詞）',
      '道具・生活・日常の慣用句',
      '人間・生き方・教訓のことわざ',
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
  ことわざ: '国語',
  慣用句: '国語',
  故事成語: '国語',
  四字熟語: '国語',
  和語: '国語',
  '季語・外来語': '国語',
  '助数詞・類義語・対義語': '国語',
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

  // 分野別スコア（理科・社会・国語）
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

  // 国語の全7分野（全校共通）
  const KOKUGO_CATS = [
    'ことわざ',
    '慣用句',
    '故事成語',
    '四字熟語',
    '和語',
    '季語・外来語',
    '助数詞・類義語・対義語',
  ];
  KOKUGO_CATS.forEach((cat) => {
    subjectScores[cat] = { correct: 0, total: 0, weight: school.weights[cat] || 1.0 };
  });

  const tagStats = {};

  (history || []).forEach((entry) => {
    (entry.results || []).forEach((r) => {
      const q = questionMap.get(r.id) || r;
      const subj = q.subject || '理科';
      const cat = q.category || 'その他';
      const diff = q.difficulty || 'standard';
      const qType = q.questionType || 'choice';

      // 灘の場合は社会の解答データのみ除外（国語・理科は集計）
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

  // 分野別最低演習数（各校の難易度に応じた基準値）
  const categoryMinCount = school.categoryMinCount || 5;

  // 分野別実効到達度（演習不足分野の減衰評価）と網羅率の集計
  let totalCatWeight = 0;
  let weightedCatSum = 0;
  let qualifiedCatCount = 0;
  let totalCatCount = 0;

  const categoryStatus = Object.entries(subjectScores).map(([cat, val]) => {
    const rawAcc = val.total > 0 ? Math.round((val.correct / val.total) * 100) : 0;
    const isPriority = (val.weight || 1.0) >= 1.3;
    const isQualified = val.total >= categoryMinCount;
    const experienceRate = Math.min(1.0, val.total / categoryMinCount);
    // 演習数が最低基準に満たない場合は、演習充足率に応じて到達度判定への寄与を減衰
    const effectiveAccuracy = Math.round(rawAcc * experienceRate);
    const target = school.targetScore;

    if (val.weight > 0) {
      totalCatCount++;
      totalCatWeight += val.weight;
      weightedCatSum += effectiveAccuracy * val.weight;
      if (isQualified) {
        qualifiedCatCount++;
      }
    }

    return {
      category: cat,
      subject: CATEGORY_TO_SUBJECT[cat] || 'その他',
      accuracy: rawAcc,
      effectiveAccuracy,
      total: val.total,
      minRequired: categoryMinCount,
      isQualified,
      remainingToQualify: Math.max(0, categoryMinCount - val.total),
      weight: val.weight,
      isPriority,
      isPassed: isQualified && effectiveAccuracy >= target,
      diff: effectiveAccuracy - target,
    };
  });

  // 分野別加重平均実効到達度 (0-100%)
  const weightedEffectiveAcc = totalCatWeight > 0 ? weightedCatSum / totalCatWeight : 0;

  // 全体経験問題数によるペナルティ係数（灘・東大寺など難関校ほど多くの演習量を要求）
  const requiredCount = school.requiredCount || 50;
  const experienceFactor = Math.min(1.0, schoolEligibleAnswered / requiredCount);

  // 総合到達度スコア (0-100%)
  // 分野別実効正答度（演習不足ペナルティ適用済み）× 全体演習充足係数
  let progressScore = Math.round(weightedEffectiveAcc * (0.35 + 0.65 * experienceFactor));

  // 灘・筑駒・開成等のシビアな足切り判定（難問未修時の安全装置）
  let severeWarning = null;
  const minAdv = school.minAdvancedCount || 0;
  if (minAdv > 0 && advancedCorrect < minAdv) {
    if (progressScore > 68) {
      progressScore = 68; // C判定上限に抑え込む
    }
    severeWarning = isNada
      ? `※灘中合格ライン判定には、理科・国語の難問（現在${advancedCorrect}問/目標${minAdv}問以上）の実戦正解実績が必須です。`
      : isTsukukoma
        ? `※筑駒合格ライン判定には、高度な応用考察・記述問題（現在${advancedCorrect}問/目標${minAdv}問以上）の実戦正解実績が必須です。`
        : `※${school.name}合格ライン判定には、応用考察・難問（現在${advancedCorrect}問/目標${minAdv}問以上）の実戦正解実績が必須です。`;
  }

  // 合否判定ランク (A, B, C, D)
  let rank = 'D';
  let rankLabel = 'D判定：要特訓';
  let rankColor = 'text-rose-600 bg-rose-50 border-rose-300';
  const diffToTarget = school.targetScore - progressScore;

  // 演習数が全体目標の半分未満、または分野網羅率が極めて低い場合の判定ガイダンス
  const isEarlyStage = schoolEligibleAnswered < Math.round(requiredCount * 0.5);

  if (isNada || isTsukukoma) {
    if (progressScore >= 90 && advancedCorrect >= minAdv && !isEarlyStage) {
      rank = 'A';
      rankLabel = 'A判定：合格安全圏 🎉';
      rankColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
    } else if (progressScore >= 82 && advancedCorrect >= Math.max(2, minAdv - 1) && !isEarlyStage) {
      rank = 'B';
      rankLabel = 'B判定：合格射程圏 🎯';
      rankColor = 'text-blue-700 bg-blue-50 border-blue-300';
    } else if (progressScore >= 70) {
      rank = 'C';
      rankLabel = 'C判定：あと一歩 🧗';
      rankColor = 'text-amber-700 bg-amber-50 border-amber-300';
    } else {
      rank = 'D';
      rankLabel = isEarlyStage
        ? `D判定：演習蓄積中（現在${schoolEligibleAnswered}/${requiredCount}問）`
        : 'D判定：要特訓 ⚠️';
      rankColor = 'text-rose-600 bg-rose-50 border-rose-300';
    }
  } else {
    if (progressScore >= school.targetScore && !isEarlyStage) {
      rank = 'A';
      rankLabel = 'A判定：合格安全圏 🎉';
      rankColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
    } else if (progressScore >= school.targetScore - 7 && !isEarlyStage) {
      rank = 'B';
      rankLabel = 'B判定：合格射程圏 🎯';
      rankColor = 'text-blue-700 bg-blue-50 border-blue-300';
    } else if (progressScore >= school.targetScore - 15) {
      rank = 'C';
      rankLabel = 'C判定：あと一歩 🧗';
      rankColor = 'text-amber-700 bg-amber-50 border-amber-300';
    } else {
      rank = 'D';
      rankLabel = isEarlyStage
        ? `D判定：演習蓄積中（現在${schoolEligibleAnswered}/${requiredCount}問）`
        : 'D判定：要特訓';
      rankColor = 'text-rose-600 bg-rose-50 border-rose-300';
    }
  }

  // 4軸レーダーチャートの算出
  const calcCurrentKnowledge = () => {
    if (basicStandardTotal === 0) return 0;
    const rate = (basicStandardCorrect / basicStandardTotal) * 100;
    return Math.min(100, Math.round(rate * (0.4 + 0.6 * experienceFactor)));
  };

  const calcCurrentThinking = () => {
    if (advancedTotal === 0) {
      return Math.round(calcCurrentKnowledge() * 0.35);
    }
    const acc = (advancedCorrect / advancedTotal) * 100;
    const targetAdv = minAdv > 0 ? minAdv * 1.5 : 12;
    const advExp = Math.min(1.0, advancedTotal / targetAdv);
    return Math.min(100, Math.round(acc * (0.4 + 0.6 * advExp)));
  };

  const calcCurrentExpression = () => {
    if (expressionTotal === 0) {
      return Math.round(calcCurrentKnowledge() * 0.4);
    }
    const acc = (expressionCorrect / expressionTotal) * 100;
    const expExp = Math.min(1.0, expressionTotal / 15);
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
      value: currentKnowledge,
      fullMark: 100,
    },
    {
      subject: '応用考察力',
      current: currentThinking,
      target: targetRadar.thinking,
      value: currentThinking,
      fullMark: 100,
    },
    {
      subject: '記述表現力',
      current: currentExpression,
      target: targetRadar.expression,
      value: currentExpression,
      fullMark: 100,
    },
    {
      subject: '全体安定度',
      current: currentStability,
      target: targetRadar.stability,
      value: currentStability,
      fullMark: 100,
    },
  ];

  // 合格ToDoアクションリスト
  const todos = [];
  const TODO_LIMIT = 5;
  const DIFF_LABEL = { basic: '基礎', standard: '標準', advanced: '応用・難問' };

  // 灘は社会を除外し、国語・理科を出題対象とする
  const eligibleQuestions = (allQuestions || []).filter(
    (q) => !isNada || (q.subject || '理科') !== '社会'
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

  // 1. 最重点分野（演習不足、または実効到達度が低い重点単元を最優先）
  const weakPriorityCat = categoryStatus
    .filter((c) => c.isPriority && (!c.isQualified || c.effectiveAccuracy < school.targetScore))
    .sort((a, b) => {
      // 演習不足（未判定）のものを最優先、次に実効到達度が低い順
      if (!a.isQualified && b.isQualified) return -1;
      if (a.isQualified && !b.isQualified) return 1;
      return a.effectiveAccuracy - b.effectiveAccuracy;
    })[0];

  if (weakPriorityCat) {
    const cat = weakPriorityCat.category;
    const subj = CATEGORY_TO_SUBJECT[cat];
    let diff = isNada || isTsukukoma ? 'advanced' : 'standard';
    if (countQuestions({ subject: subj, category: cat, difficulty: diff }) < TODO_LIMIT) {
      diff = 'all';
    }
    const remaining = weakPriorityCat.remainingToQualify;
    todos.push({
      id: 'todo_cat',
      badge: `最重要分野（${subj}）`,
      title: `${school.name}最頻出の「${subj}・${cat}」${diff !== 'all' ? `${DIFF_LABEL[diff]}問題` : ''}を${TODO_LIMIT}問特訓`,
      description: weakPriorityCat.isQualified
        ? `現在実効到達度 ${weakPriorityCat.effectiveAccuracy}%（正答率 ${weakPriorityCat.accuracy}%/合格目標 ${school.targetScore}%）。重点配点分野の更なる強化が必要です。`
        : `現在演習数 ${weakPriorityCat.total}問（最低基準 ${categoryMinCount}問まであと${remaining}問）。演習数を満たすことで到達度判定が有効化されます！`,
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
      id: 'todo_focus_tag',
      badge: `キー単元（${info.subject}）`,
      title: `${school.name}合否直結単元「${targetTag}」を${TODO_LIMIT}問特訓`,
      description: `過去問頻出の最重要テーマです。この単元での取りこぼしを防ぐことが合格圏入りの鍵となります。`,
      quizFilter: {
        subject: info.subject,
        category: info.category,
        subCategory: targetTag,
        difficulty: 'all',
        limit: TODO_LIMIT,
      },
    });
  }

  // 3. 難問・考察対策（灘・筑駒・開成など）
  if (isNada || isTsukukoma || school.id === 'kaisei') {
    const advCount = countQuestions({ difficulty: 'advanced' });
    todos.push({
      id: 'todo_advanced',
      badge: '超難問・実験考察突破',
      title: `${school.name}突破のための「応用・難問」を${TODO_LIMIT}問特訓`,
      description: `現在難問正解数 ${advancedCorrect}問（合格圏目安: ${minAdv}問以上/総問題プール: ${advCount}問）。差がつく高難度問題への対応力を鍛えます。`,
      quizFilter: {
        difficulty: 'advanced',
        limit: TODO_LIMIT,
      },
    });
  }

  // 4. 記述・入力対策（筑駒・開成・東大寺など）
  if (school.questionTypeWeights.descriptive >= 1.5) {
    todos.push({
      id: 'todo_descriptive',
      badge: '記述・短文論述特訓',
      title: `${school.name}特有の「記述・短文論述問題」を${TODO_LIMIT}問特訓`,
      description: `理由説明やキーワードを含む表現力を実戦形式で演習します（現在の記述正答率 ${
        expressionTotal > 0 ? Math.round((expressionCorrect / expressionTotal) * 100) : 0
      }%）。`,
      quizFilter: {
        questionType: 'descriptive',
        limit: TODO_LIMIT,
      },
    });
  }

  // 5. 弱点復習（誤答プールからの復習）
  const relevantWrongs = (wrongAnswers || []).filter((q) => !isNada || q.subject !== '社会');
  if (relevantWrongs.length > 0) {
    todos.push({
      id: 'todo_review',
      badge: '弱点即効克服',
      title: `過去に間違えた問題から${Math.min(TODO_LIMIT, relevantWrongs.length)}問を再挑戦`,
      description: `現在${relevantWrongs.length}問のミスがあります。同じミスを本番で繰り返さないよう完全に定着させます。`,
      quizFilter: {
        mode: 'review',
        limit: Math.min(TODO_LIMIT, relevantWrongs.length),
      },
    });
  }

  return {
    school,
    isNada,
    isTsukukoma,
    totalAnswered: schoolEligibleAnswered,
    requiredCount,
    categoryMinCount,
    qualifiedCatCount,
    totalCatCount,
    isEarlyStage,
    progressScore,
    diffToTarget,
    rank,
    rankLabel,
    rankColor,
    radarData,
    categoryStatus,
    todos,
    severeWarning,
  };
}
