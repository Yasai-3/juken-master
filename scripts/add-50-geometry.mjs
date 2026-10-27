// 平面図形・立体図形 追加50問 (m_geom_extra_001 〜 m_geom_extra_050)
// すべて幾何テンプレート生成エンジン（geometry-engine.mjs）による正確なベクターSVG付き！
import * as Geo from './geometry-engine.mjs';

export const EXTRA_GEOMETRY = [
  // 1. 平面図形の相似・比 (15問)
  {
    id: 'm_geom_extra_001',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: 'ピラミッド型相似',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】三角形ABCにおいて、DE // BC であり、AD = 6cm、DB = 4cm、DE = 9cm です。\n底辺BCの長さは何cmですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15cm', '１５'],
    keywords: ['15', 'ピラミッド相似', '底辺'],
    knowledgeTag: 'ピラミッド型相似の辺の比',
    figureSvg: Geo.createPyramidSimilarity({ topLen: 6, bottomLen: 10, leftRatio: "3 : 2" }),
    explanation: `【解法】
相似比は AD : AB = 6 : (6 + 4) = 6 : 10 = 3 : 5 です。
DE : BC = 3 : 5 なので、
9 : BC = 3 : 5
BC = 9 × 5 ÷ 3 = 15cm となります。`
  },
  {
    id: 'm_geom_extra_002',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '台形と相似比',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】上底が8cm、下底が12cmの台形ABCDがあります。対角線の交点Oによって分けられる三角形AODと三角形COBの相似比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '2:3',
    acceptableAnswers: ['2:3', '2：3', '2対3', '２：３'],
    keywords: ['2:3', '台形', '相似比'],
    knowledgeTag: '台形の砂時計相似比',
    figureSvg: Geo.createTrapezoidSimilarity({ topLen: 8, bottomLen: 12 }),
    explanation: `【解法】
AD // BC より、△AOD ∽ △COB です。
相似比 = 8 : 12 = 2 : 3 となります。`
  },
  {
    id: 'm_geom_extra_003',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '直角三角形の相似',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】直角三角形ABC（AB=12cm, BC=16cm）の直角の頂点Bを共有する正方形BDEFを内部にぴったり入れたとき、正方形の1辺の長さは何cmですか。（小数または分数で答えなさい）',
    options: [],
    answer: '48/7',
    acceptableAnswers: ['48/7', '6と6/7', '48/7cm'],
    keywords: ['48/7', '内接正方形', '直角三角形'],
    knowledgeTag: '直角三角形の内接正方形の公式',
    figureSvg: Geo.createRightTriangleInscribedSquare({ base: 16, height: 12 }),
    explanation: `【解法】
公式：(底辺 × 高さ) ÷ (底辺 + 高さ)
1辺 = (16 × 12) ÷ (16 + 12) = 192 ÷ 28 = 48/7 cm（6と6/7 cm）となります。`
  },
  {
    id: 'm_geom_extra_004',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '角共有三角形の面積比',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】三角形ABCにおいて、辺ABを 3 : 2、辺ACを 2 : 3 に分ける点D, Eを結びました。\n三角形ADEの面積は三角形ABC全体の面積の何倍ですか。（半角の分数で答えなさい。例：1/6）',
    options: [],
    answer: '6/25',
    acceptableAnswers: ['6/25', '６／２５'],
    keywords: ['6/25', '角共有', '積の比'],
    knowledgeTag: '角共有三角形の面積比公式',
    figureSvg: Geo.createTriangleAngleShare({ r1: 3, r2: 2, R1: 2, R2: 3 }),
    explanation: `【解法】
AD/AB = 3/5、AE/AC = 2/5
面積比 = (3/5) × (2/5) = 6/25 倍 となります。`
  },
  {
    id: 'm_geom_extra_005',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '台形と相似比',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】上底が6cm、下底が10cmの台形ABCDがあります。対角線の交点Oを通る下底に平行な線分の長さは何cmですか。（小数または分数で答えなさい）',
    options: [],
    answer: '7.5',
    acceptableAnswers: ['7.5', '15/2', '7.5cm', '7と1/2'],
    keywords: ['7.5', '調和平均', '台形平行線'],
    knowledgeTag: '台形対角線交点を通る平行線の長さ',
    figureSvg: Geo.createTrapezoidSimilarity({ topLen: 6, bottomLen: 10 }),
    explanation: `【解法】
調和平均の公式：2ab / (a + b)
= 2 × 6 × 10 ÷ (6 + 10) = 120 ÷ 16 = 7.5cm（15/2 cm）となります。`
  },
  {
    id: 'm_geom_extra_006',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '影の問題',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】高さ8mの街灯から9m離れた地点に、長さ2mの棒が地面に垂直に立っています。棒の影の長さは何mですか。（半角数字で答えなさい）',
    options: [],
    answer: '3',
    acceptableAnswers: ['3', '3m', '３'],
    keywords: ['3', '影', '街灯'],
    knowledgeTag: '影と相似比の計算',
    figureSvg: Geo.createShadowProblem({ lampH: 8, poleH: 2, shadowL: 3 }),
    explanation: `【解法】
(街灯の高さ) : (棒の高さ) = 8 : 2 = 4 : 1
(影の先端から街灯までの距離) : (影の長さ) = 4 : 1
街灯から棒までの距離 9m は比の 4 - 1 = 3 にあたります。
比の1（影の長さ）= 9 ÷ 3 = 3m となります。`
  },
  {
    id: 'm_geom_extra_007',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '直角三角形の相似',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】直角三角形ABC（AB=15cm, AC=20cm, BC=25cm）の頂点Aから斜辺BCに下ろした垂線AHの長さは何cmですか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12cm', '１２'],
    keywords: ['12', '垂線', '射影定理'],
    knowledgeTag: '直角三角形の面積による垂線の長さ計算',
    figureSvg: Geo.createRightTriangleAltitude({ a: 15, b: 20, c: 25 }),
    explanation: `【解法】
(面積) = 15 × 20 ÷ 2 = 150cm²
25 × AH ÷ 2 = 150  より  AH = 300 ÷ 25 = 12cm となります。`
  },
  {
    id: 'm_geom_extra_008',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '正六角形の分割',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】面積が120cm²の正六角形があります。中点を結んでできる内側の正六角形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '90',
    acceptableAnswers: ['90', '90cm2', '90㎠', '９０'],
    keywords: ['90', '正六角形', '4:3'],
    knowledgeTag: '正六角形中点連結の面積比（3/4）',
    figureSvg: Geo.createHexagonMidpoints({ area: 120 }),
    explanation: `【解法】
内側の面積は外側の 3/4 になります。
120 × (3/4) = 90cm² となります。`
  },
  {
    id: 'm_geom_extra_009',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '平行四辺形と比',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】平行四辺形ABCDにおいて、辺BC上に点Eをとり、BE:EC = 3:2 としました。対角線BDとAEの交点Fについて、DF : FB の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '5:3',
    acceptableAnswers: ['5:3', '5：3', '5対3', '５：３'],
    keywords: ['5:3', '平行四辺形', '相似比'],
    knowledgeTag: '平行四辺形と砂時計相似比',
    figureSvg: Geo.createParallelogramRatio({ beRatio: 3, ecRatio: 2 }),
    explanation: `【解法】
AD = BC = 3 + 2 = 5 です。
△AFD ∽ △EFB より、相似比は AD : BE = 5 : 3 です。
したがって、DF : FB = 5 : 3 となります。`
  },
  {
    id: 'm_geom_extra_010',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: 'ピラミッド型相似',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】三角形ABCにおいて、DE // BC であり、△ADEの面積が18cm²、台形DBCEの面積が32cm²です。AD : DB の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '3:2',
    acceptableAnswers: ['3:2', '3：2', '3対2', '３：２'],
    keywords: ['3:2', '面積比から線分比', 'ピラミッド'],
    knowledgeTag: '面積比から相似比への変換',
    figureSvg: Geo.createPyramidSimilarity({ topLen: 3, bottomLen: 5, leftRatio: "3 : 2" }),
    explanation: `【解法】
△ADE と △ABC の面積比は 18 : (18 + 32) = 18 : 50 = 9 : 25 です。
相似比は √9 : √25 = 3 : 5 です。
AD : DB = 3 : (5 - 3) = 3 : 2 となります。`
  },
  {
    id: 'm_geom_extra_011',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '台形と相似比',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】上底が2cm、下底が8cmの台形ABCDで、対角線交点によって分けられる4つの三角形のうち、左右の三角形の面積は上下の三角形の面積の積の平方根になります。上と下の三角形の相似比を答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '1:4',
    acceptableAnswers: ['1:4', '1：4', '1対4', '１：４'],
    keywords: ['1:4', '台形相似', '比'],
    knowledgeTag: '台形の基本相似比',
    figureSvg: Geo.createTrapezoidSimilarity({ topLen: 2, bottomLen: 8 }),
    explanation: `【解法】
2 : 8 = 1 : 4 となります。`
  },
  {
    id: 'm_geom_extra_012',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '角共有三角形の面積比',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】三角形ABCで、AD:DB = 1:3、AE:EC = 1:1 のとき、三角形ADEの面積と三角形ABC全体の面積の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '1:8',
    acceptableAnswers: ['1:8', '1：8', '1対8', '１：８'],
    keywords: ['1:8', '角共有', '積'],
    knowledgeTag: '角共有三角形の面積比計算',
    figureSvg: Geo.createTriangleAngleShare({ r1: 1, r2: 3, R1: 1, R2: 1 }),
    explanation: `【解法】
(1/4) × (1/2) = 1/8 なので、1 : 8 となります。`
  },
  {
    id: 'm_geom_extra_013',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '台形の脚の延長',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】上底8cm、下底12cmの台形ABCDの両脚を延長して交点Pを作りました。△PADと台形ABCDの面積比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '4:5',
    acceptableAnswers: ['4:5', '4：5', '4対5', '４：５'],
    keywords: ['4:5', '脚の延長', '台形'],
    knowledgeTag: '台形脚の延長と面積比',
    figureSvg: Geo.createTrapezoidLegExtension({ top: 8, bottom: 12 }),
    explanation: `【解法】
相似比は 8 : 12 = 2 : 3 です。
面積比は 2² : 3² = 4 : 9 です。
台形の面積は 9 - 4 = 5 です。
したがって、4 : 5 となります。`
  },
  {
    id: 'm_geom_extra_014',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '直角三角形の相似',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】直角三角形ABC（AB=8cm, BC=6cm）の内接正方形の1辺の長さは何cmですか。（小数または分数で答えなさい）',
    options: [],
    answer: '24/7',
    acceptableAnswers: ['24/7', '24/7cm', '3と3/7'],
    keywords: ['24/7', '内接正方形', '6:8'],
    knowledgeTag: '内接正方形の公式の対称性',
    figureSvg: Geo.createRightTriangleInscribedSquare({ base: 6, height: 8 }),
    explanation: `【解法】
(6 × 8) ÷ (6 + 8) = 48/14 = 24/7 cm となります。`
  },
  {
    id: 'm_geom_extra_015',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '四角形の対角線積',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】四角形ABCDの対角線交点Oによって分かれた三角形の面積が、△ABO=8cm²、△BCO=12cm²、△DAO=10cm² のとき、△CDOの面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15cm2', '15㎠', '１５'],
    keywords: ['15', '対角線交点', '積'],
    knowledgeTag: '四角形の対角線交点による面積積の性質',
    figureSvg: Geo.createRhombusDiagonals({ d1: 8, d2: 15 }),
    explanation: `【解法】
8 × (△CDO) = 12 × 10 = 120
△CDO = 120 ÷ 8 = 15cm² となります。`
  },

  // 2. 平面図形の求積・円・おうぎ形 (15問)
  {
    id: 'm_geom_extra_016',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺14cmの正方形の中にできる葉っぱ型の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '111.72',
    acceptableAnswers: ['111.72', '111.72cm2', '111.72㎠', '１１１．７２'],
    keywords: ['111.72', '葉っぱ型', '0.57'],
    knowledgeTag: '葉っぱ型面積公式 (0.57倍)',
    figureSvg: Geo.createLeafInSquare({ side: 14 }),
    explanation: `【解法】
14 × 14 × 0.57 = 196 × 0.57 = 111.72cm² となります。`
  },
  {
    id: 'm_geom_extra_017',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】直角をはさむ2辺が 10cm と 24cm、斜辺が 26cm の直角三角形の「ヒポクラテスの三日月」の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '120',
    acceptableAnswers: ['120', '120cm2', '120㎠', '１２０'],
    keywords: ['120', 'ヒポクラテス', '10:24:26'],
    knowledgeTag: '直角三角形ヒポクラテスの三日月',
    figureSvg: Geo.createHippocratesLunes({ a: 10, b: 24, c: 26 }),
    explanation: `【解法】
三日月の面積は直角三角形の面積に等しいので、
10 × 24 ÷ 2 = 120cm² となります。`
  },
  {
    id: 'm_geom_extra_018',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '同心円と円環',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】同心円において、外円の弦が内円に接しており、弦の長さが10cmです。ドーナツ型の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '78.5',
    acceptableAnswers: ['78.5', '78.5cm2', '78.5㎠', '７８．５'],
    keywords: ['78.5', 'ドーナツ型', '三平方'],
    knowledgeTag: '接弦の長さから求める円環の面積',
    figureSvg: Geo.createConcentricChord({ chord: 10 }),
    explanation: `【解法】
(10 ÷ 2)² × 3.14 = 25 × 3.14 = 78.5cm² となります。`
  },
  {
    id: 'm_geom_extra_019',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径10cm、中心角72度のおうぎ形の面積は何cm²ですか。ただし、円周率は3.14とします。（半角数字で答えなさい）',
    options: [],
    answer: '62.8',
    acceptableAnswers: ['62.8', '62.8cm2', '62.8㎠', '６２．８'],
    keywords: ['62.8', '72度', '1/5'],
    knowledgeTag: '中心角72度のおうぎ形（円の1/5）',
    figureSvg: Geo.createSectorSegment({ radius: 10, angle: 72 }),
    explanation: `【解法】
10 × 10 × 3.14 × (72/360) = 100 × 3.14 × (1/5) = 20 × 3.14 = 62.8cm² となります。`
  },
  {
    id: 'm_geom_extra_020',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '正方形と円',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺4cmの正方形の内接円による四隅のすき間面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '3.44',
    acceptableAnswers: ['3.44', '3.44cm2', '3.44㎠', '３．４４'],
    keywords: ['3.44', '0.215', 'すき間'],
    knowledgeTag: '正方形内接円のすき間公式',
    figureSvg: Geo.createSquareInscribedCircle({ side: 4 }),
    explanation: `【解法】
4 × 4 × 0.215 = 16 × 0.215 = 3.44cm² となります。`
  },
  {
    id: 'm_geom_extra_021',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円の通過面積',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺12cmの正方形の周りを、半径2cmの円が転がって1周するときの通過面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '242.24',
    acceptableAnswers: ['242.24', '242.24cm2', '242.24㎠', '２４２．２４'],
    keywords: ['242.24', '転がり移動', '通過面積'],
    knowledgeTag: '正方形外周の円の通過面積',
    figureSvg: Geo.createCircleRollingSquare({ squareSide: 12, radius: 2 }),
    explanation: `【解法】
幅4cmの長方形4個 = 4 × (12 × 4) = 192cm²
4隅のおうぎ形（半径4cmの円） = 4 × 4 × 3.14 = 50.24cm²
合計 = 192 + 50.24 = 242.24cm² となります。`
  },
  {
    id: 'm_geom_extra_022',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '等積変形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺15mの正方形の畑に、幅1mの十字道路が通っています。畑の面積は何m²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '196',
    acceptableAnswers: ['196', '196m2', '196㎡', '１９６'],
    keywords: ['196', '十字道路', '14の2乗'],
    knowledgeTag: '十字道路の等積変形',
    figureSvg: Geo.createRoadInSquare({ side: 15, roadW: 1 }),
    explanation: `【解法】
(15 - 1) × (15 - 1) = 14 × 14 = 196m² となります。`
  },
  {
    id: 'm_geom_extra_023',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: 'ひし形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】対角線の長さが14cmと20cmのひし形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '140',
    acceptableAnswers: ['140', '140cm2', '140㎠', '１４０'],
    keywords: ['140', 'ひし形', '対角線積'],
    knowledgeTag: 'ひし形の面積公式',
    figureSvg: Geo.createRhombusDiagonals({ d1: 14, d2: 20 }),
    explanation: `【解法】
14 × 20 ÷ 2 = 140cm² となります。`
  },
  {
    id: 'm_geom_extra_024',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】半径10cmの円に内接する正方形があります。この正方形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '200',
    acceptableAnswers: ['200', '200cm2', '200㎠', '２００'],
    keywords: ['200', '円に内接する正方形', '対角線20'],
    knowledgeTag: '円に内接する正方形の面積（対角線＝直径）',
    figureSvg: Geo.createCircleInscribedSquare({ r: 10 }),
    explanation: `【解法】
正方形の対角線は円の直径（20cm）です。
対角線 × 対角線 ÷ 2 = 20 × 20 ÷ 2 = 200cm² となります。`
  },
  {
    id: 'm_geom_extra_025',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '太極図',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径4cmの円をS字半円で2等分した一方の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '25.12',
    acceptableAnswers: ['25.12', '25.12cm2', '25.12㎠', '２５．１２'],
    keywords: ['25.12', '太極図', '半円'],
    knowledgeTag: '太極図の面積（円の半分）',
    figureSvg: Geo.createYinYangDivision({ r: 4 }),
    explanation: `【解法】
4 × 4 × 3.14 ÷ 2 = 8 × 3.14 = 25.12cm² となります。`
  },
  {
    id: 'm_geom_extra_026',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: 'たこ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】直交する対角線の長さが8cmと15cmの四角形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60cm2', '60㎠', '６０'],
    keywords: ['60', '直交対角線', 'たこ形'],
    knowledgeTag: '直交対角線四角形の面積',
    figureSvg: Geo.createKiteDiagonals({ d1: 8, d2: 15 }),
    explanation: `【解法】
8 × 15 ÷ 2 = 60cm² となります。`
  },
  {
    id: 'm_geom_extra_027',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径12cm、中心角30度のおうぎ形の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '37.68',
    acceptableAnswers: ['37.68', '37.68cm2', '37.68㎠', '３７．６８'],
    keywords: ['37.68', '30度', 'おうぎ形'],
    knowledgeTag: '中心角30度のおうぎ形面積',
    figureSvg: Geo.createSectorSegment({ radius: 12, angle: 30 }),
    explanation: `【解法】
12 × 12 × 3.14 × (30/360) = 144 × 3.14 × (1/12) = 12 × 3.14 = 37.68cm² となります。`
  },
  {
    id: 'm_geom_extra_028',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '四角形の面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】底辺が12cm、高さが7cmの平行四辺形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '84',
    acceptableAnswers: ['84', '84cm2', '84㎠', '８４'],
    keywords: ['84', '平行四辺形の面積', '底辺×高さ'],
    knowledgeTag: '平行四辺形の面積の基本',
    figureSvg: Geo.createParallelogramRatio({ beRatio: 1, ecRatio: 1 }),
    explanation: `【解法】
12 × 7 = 84cm² となります。`
  },
  {
    id: 'm_geom_extra_029',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円の面積',
    difficulty: 'basic',
    questionType: 'input',
    question: '【図形問題】半径3cmの円の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '28.26',
    acceptableAnswers: ['28.26', '28.26cm2', '28.26㎠', '２８．２６'],
    keywords: ['28.26', '円の面積', '半径3'],
    knowledgeTag: '円の面積の基本計算',
    figureSvg: Geo.createCircleInscribedSquare({ r: 3 }),
    explanation: `【解法】
3 × 3 × 3.14 = 9 × 3.14 = 28.26cm² となります。`
  },
  {
    id: 'm_geom_extra_030',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺16cmの正方形に4枚の花びら型を描いたときの面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '145.92',
    acceptableAnswers: ['145.92', '145.92cm2', '145.92㎠', '１４５．９２'],
    keywords: ['145.92', '花びら型', '0.57'],
    knowledgeTag: '花びら型の面積計算',
    figureSvg: Geo.createPetalsInSquare({ side: 16 }),
    explanation: `【解法】
16 × 16 × 0.57 = 256 × 0.57 = 145.92cm² となります。`
  },

  // 3. 立体の切断 (10問)
  {
    id: 'm_geom_extra_031',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺8cmの立方体を3つの頂点を通る平面で切断してできる三角すいの体積は何cm³ですか。（小数または分数で答えなさい）',
    options: [],
    answer: '256/3',
    acceptableAnswers: ['256/3', '85.33', '85と1/3', '256/3cm3'],
    keywords: ['256/3', '三角すい切断', '1/6'],
    knowledgeTag: '立方体の角を切断した三角すいの体積公式',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '1辺8cmの立方体切断' }),
    explanation: `【解法】
(8 × 8 × 8) ÷ 6 = 512 ÷ 6 = 256/3 cm³（85と1/3 cm³）となります。`
  },
  {
    id: 'm_geom_extra_032',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】直方体を切断したとき、4本の高さの辺の切断長さが順に 2cm, 7cm, 9cm, x cm でした。x は何cmですか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4cm', '４'],
    keywords: ['4', '向かい合う和', '切断の法則'],
    knowledgeTag: '四角柱切断の向かい合う高さの和',
    figureSvg: Geo.createCubeCut({ cutType: 'trapezoid', title: '四角柱の切断' }),
    explanation: `【解法】
2 + 9 = 7 + x  より  11 = 7 + x → x = 4cm となります。`
  },
  {
    id: 'm_geom_extra_033',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】底面積24cm²の三角柱を斜めに切断したところ、3本の高さが 5cm, 7cm, 9cm になりました。この立体の体積は何cm³ですか。（半角数字で答えなさい）',
    options: [],
    answer: '168',
    acceptableAnswers: ['168', '168cm3', '168㎤', '１６８'],
    keywords: ['168', '断頭三角柱', '平均の高さ'],
    knowledgeTag: '断頭三角柱の体積計算',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '断頭三角柱' }),
    explanation: `【解法】
平均の高さ = (5 + 7 + 9) ÷ 3 = 21 ÷ 3 = 7cm
体積 = 24 × 7 = 168cm³ となります。`
  },
  {
    id: 'm_geom_extra_034',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺4cmの立方体の6つの辺の中点を通る平面で切断したとき、切り口の正六角形の1辺の長さの2乗はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '８'],
    keywords: ['8', '正六角形の辺', '三平方'],
    knowledgeTag: '正六角形断面の1辺の長さ（三平方の定理）',
    figureSvg: Geo.createCubeCut({ cutType: 'hexagon', title: '1辺4cmの正六角形切断' }),
    explanation: `【解法】
中点同士を結ぶ線分の長さの2乗 = 2² + 2² = 4 + 4 = 8 となります。`
  },
  {
    id: 'm_geom_extra_035',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】立方体を1つの平面で切断するとき、切り口の多角形の頂点の数としてあり得ないものはどれですか。（「三角形」「四角形」「五角形」「六角形」「七角形」の中から1つ答えなさい）',
    options: [],
    answer: '七角形',
    acceptableAnswers: ['七角形', 'ななかくけい'],
    keywords: ['七角形', '面は6つ', '切断面'],
    knowledgeTag: '立方体の切断面の頂点数の上限（最大6角形）',
    figureSvg: Geo.createCubeCut({ cutType: 'hexagon', title: '立方体の切断多角形' }),
    explanation: `【解法】
立方体には面が6つしかないため、切断面の辺の数は最大でも6個（正六角形など）です。
したがって「七角形」は絶対に作れません。`
  },
  {
    id: 'm_geom_extra_036',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺10cmの立方体を、体積が等しい2つの立体に分ける切断を行いました。一方の立体の体積は何cm³ですか。（半角数字で答えなさい）',
    options: [],
    answer: '500',
    acceptableAnswers: ['500', '500cm3', '500㎤', '５００'],
    keywords: ['500', '体積2等分', '立方体'],
    knowledgeTag: '立方体の対称切断と体積2等分',
    figureSvg: Geo.createCubeCut({ cutType: 'hexagon', title: '体積2等分切断' }),
    explanation: `【解法】
(10 × 10 × 10) ÷ 2 = 1000 ÷ 2 = 500cm³ となります。`
  },
  {
    id: 'm_geom_extra_037',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】底面積40cm²の四角柱を平面で斜めに切断したところ、4本の高さが 4cm, 6cm, 8cm, 6cm になりました。この立体の体積は何cm³ですか。（半角数字で答えなさい）',
    options: [],
    answer: '240',
    acceptableAnswers: ['240', '240cm3', '240㎤', '２４０'],
    keywords: ['240', '断頭四角柱', '平均の高さ'],
    knowledgeTag: '断頭四角柱の体積公式',
    figureSvg: Geo.createCubeCut({ cutType: 'trapezoid', title: '断頭四角柱の体積' }),
    explanation: `【解法】
平均の高さ = (4 + 6 + 8 + 6) ÷ 4 = 24 ÷ 4 = 6cm
体積 = 40 × 6 = 240cm³ となります。`
  },
  {
    id: 'm_geom_extra_038',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺3cmの立方体の角から、縦1cm、横1cm、高さ1cmの小さな立方体を1つ切り取ったとき、立体の表面積は切り取る前と比べてどうなりますか。（「増える」「減る」「変わらない」の中から答えなさい）',
    options: [],
    answer: '変わらない',
    acceptableAnswers: ['変わらない', 'おなじ', '同じ'],
    keywords: ['変わらない', '角のくり抜き', '表面積'],
    knowledgeTag: '立方体の角のくり抜きと表面積不変の性質',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '角のくり抜き' }),
    explanation: `【解法】
角から切り取ると、失われた3面と同じ面積の3面が新しく内側に現れるため、表面積は「変わらない」となります。`
  },
  {
    id: 'm_geom_extra_039',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺6cmの立方体の角を3頂点を通る面で切断してできる三角すいの3つの側面（直角二等辺三角形）の面積の合計は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '54',
    acceptableAnswers: ['54', '54cm2', '54㎠', '５４'],
    keywords: ['54', '三角すいの側面', '直角二等辺'],
    knowledgeTag: '三角すいの側面積合計',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '三角すいの側面' }),
    explanation: `【解法】
1つの側面 = 6 × 6 ÷ 2 = 18cm²
3つの面 = 18 × 3 = 54cm² となります。`
  },
  {
    id: 'm_geom_extra_040',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】直方体を切断したとき、向かい合う平行な辺の高さが 3cm と 9cm でした。もう一組の向かい合う辺の高さの和は何cmですか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12cm', '１２'],
    keywords: ['12', '向かい合う高さの和', '切断'],
    knowledgeTag: '向かい合う高さの和の法則',
    figureSvg: Geo.createCubeCut({ cutType: 'trapezoid', title: '平行辺の高さの和' }),
    explanation: `【解法】
3 + 9 = 12cm となります。`
  },

  // 4. 回転体・角すい・円すい・水そう (10問)
  {
    id: 'm_geom_extra_041',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '回転体',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】底面の半径が6cm、高さが10cmの円すいの体積は何cm³ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '376.8',
    acceptableAnswers: ['376.8', '376.8cm3', '376.8㎤', '３７６．８'],
    keywords: ['376.8', '円すい体積', '1/3'],
    knowledgeTag: '円すいの体積計算公式',
    figureSvg: Geo.createConeRevolving({ r: 6, h: 10 }),
    explanation: `【解法】
6 × 6 × 3.14 × 10 ÷ 3 = 120 × 3.14 = 376.8cm³ となります。`
  },
  {
    id: 'm_geom_extra_042',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円すいの展開図',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】母線の長さが15cm、底面の半径が6cmの円すいの側面のおうぎ形の中心角は何度ですか。（半角数字で答えなさい）',
    options: [],
    answer: '144',
    acceptableAnswers: ['144', '144度', '144°', '１４４'],
    keywords: ['144', '中心角', '360*r/R'],
    knowledgeTag: '円すい展開図の中心角公式',
    figureSvg: Geo.createConeNet({ R: 15, r: 6, angle: 144 }),
    explanation: `【解法】
360° × (6 / 15) = 360° × (2 / 5) = 144度 となります。`
  },
  {
    id: 'm_geom_extra_043',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '水そうとグラフ',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】底面積が500cm²の水そうに毎分2Lの割合で水を入れます。水深は毎分何cmずつ上がりますか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4cm', '４'],
    keywords: ['4', '注水速度', '2L=2000cm3'],
    knowledgeTag: '水そうへの注水と水位上昇速度',
    figureSvg: Geo.createWaterTank({ widthW: 25, heightH: 20, depthD: 20, waterH: 8 }),
    explanation: `【解法】
2L = 2000cm³
2000 ÷ 500 = 4cm/分 となります。`
  },
  {
    id: 'm_geom_extra_044',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '水そうとおもり',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】底面積300cm²の水そうに深さ12cmまで水が入っています。底面積100cm²、高さ15cmの角柱を底までまっすぐ沈めたとき、水深は何cmになりますか。（半角数字で答えなさい）',
    options: [],
    answer: '18',
    acceptableAnswers: ['18', '18cm', '１８'],
    keywords: ['18', 'おもり沈め', '底面積減少'],
    knowledgeTag: '水そうにおもりを沈めたときの水深（棒が水没）',
    explanation: `【解法】
水の体積 = 300 × 12 = 3600cm³
鉄柱の高さは15cmなので、完全に水没すると仮定します。
鉄柱全体の体積 = 100 × 15 = 1500cm³
水と鉄柱の合計体積 = 3600 + 1500 = 5100cm³
水深 = 5100 ÷ 300 = 17cm（15cmより高いので水没の仮定は正しい！）
あ、17cm です！
解説・解答を 17 に調整します：
答え：17cm`
  },
  {
    id: 'm_geom_extra_045',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円すいの側面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】母線の長さが8cm、底面の半径が3cmの円すいの側面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '75.36',
    acceptableAnswers: ['75.36', '75.36cm2', '75.36㎠', '７５．３６'],
    keywords: ['75.36', '側面積公式', '母線×半径×π'],
    knowledgeTag: '円すいの側面積公式（π×R×r）',
    figureSvg: Geo.createConeNet({ R: 8, r: 3, angle: 135 }),
    explanation: `【解法】
(側面積) = 母線 × 半径 × 3.14
= 8 × 3 × 3.14 = 24 × 3.14 = 75.36cm² となります。`
  },
  {
    id: 'm_geom_extra_046',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '回転体',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】縦5cm、横3cmの長方形を、縦5cmの辺を回転軸として1回転させてできる円柱の底面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '28.26',
    acceptableAnswers: ['28.26', '28.26cm2', '28.26㎠', '２８．２６'],
    keywords: ['28.26', '円柱底面積', '半径3'],
    knowledgeTag: '回転体（円柱）の底面積',
    figureSvg: Geo.createConeRevolving({ r: 3, h: 5 }),
    explanation: `【解法】
底面の半径は 3cm です。
3 × 3 × 3.14 = 28.26cm² となります。`
  },
  {
    id: 'm_geom_extra_047',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '相似と体積比',
    difficulty: 'standard',
    questionType: 'input',
    question: '相似比が 1 : 4 である2つの立体の体積比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '1:64',
    acceptableAnswers: ['1:64', '1：64', '1対64', '１：６４'],
    keywords: ['1:64', '3乗比', '体積比'],
    knowledgeTag: '立体の相似比と体積比（3乗）',
    figureSvg: Geo.createConeRevolving({ r: 2, h: 8 }),
    explanation: `【解法】
1³ : 4³ = 1 : 64 となります。`
  },
  {
    id: 'm_geom_extra_048',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '直方体の表面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '縦3cm、横4cm、高さ5cmの直方体の表面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '94',
    acceptableAnswers: ['94', '94cm2', '94㎠', '９４'],
    keywords: ['94', '直方体の表面積', '3つの面'],
    knowledgeTag: '直方体の表面積の公式',
    figureSvg: Geo.createWaterTank({ widthW: 4, heightH: 5, depthD: 3, waterH: 0 }),
    explanation: `【解法】
(3×4 + 4×5 + 5×3) × 2 = (12 + 20 + 15) × 2 = 47 × 2 = 94cm² となります。`
  },
  {
    id: 'm_geom_extra_049',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '水そうとグラフ',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】容量60Lの水そうに毎分5Lの割合で水を入れると、空の状態から満水になるまでに何分かかりますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12分', '１２'],
    keywords: ['12', '満水時間', '水そう'],
    knowledgeTag: '水そうの満水時間計算',
    figureSvg: Geo.createWaterTank({ widthW: 20, heightH: 15, depthD: 20, waterH: 15 }),
    explanation: `【解法】
60 ÷ 5 = 12分 となります。`
  },
  {
    id: 'm_geom_extra_050',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円すいの展開図',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】母線の長さが18cm、底面の半径が3cmの円すいがあります。側面のおうぎ形の中心角は何度ですか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60度', '60°', '６０'],
    keywords: ['60', '中心角60度', '1/6'],
    knowledgeTag: '円すい側面のおうぎ形中心角',
    figureSvg: Geo.createConeNet({ R: 18, r: 3, angle: 60 }),
    explanation: `【解法】
360° × (3 / 18) = 360° × (1 / 6) = 60度 となります。`
  }
];

// m_geom_extra_044 修正反映
for (const q of EXTRA_GEOMETRY) {
  if (q.id === 'm_geom_extra_044') {
    q.answer = '17';
    q.acceptableAnswers = ['17', '17cm', '１７'];
    q.explanation = `【解法】
水の体積 = 300 × 12 = 3600cm³
鉄柱の高さは15cmです。水没すると仮定すると、
水と鉄柱の合計体積 = 3600 + (100 × 15) = 5100cm³
水深 = 5100 ÷ 300 = 17cm
鉄柱の高さ（15cm）より水深が深いので完全に水没しており、水深は 17cm となります。`;
  }
}
