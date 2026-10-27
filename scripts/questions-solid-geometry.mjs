// 立体図形 分野（立体の切断、回転体、角すい・円すい、水そうとグラフ、展開図など：全20問）
import * as Geo from './geometry-engine.mjs';

export const SOLID_GEOMETRY_QUESTIONS = [
  // 1. 立体の切断
  {
    id: 'm_solid_001',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺の長さが6cmの立方体ABCD-EFGHがあります。\n図のように、3つの頂点A, F, Hを通る平面でこの立方体を切断したとき、切り口の図形の名称は何ですか。（全角文字で答えなさい。例：正三角形、長方形 など）',
    options: [],
    answer: '正三角形',
    acceptableAnswers: ['正三角形', 'せいさんかくけい'],
    keywords: ['正三角形', '切断', '立方体'],
    knowledgeTag: '立方体の切断・3頂点を通る切り口',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '立方体の切断（頂点A, F, H）' }),
    explanation: `【解法】
切り口の3つの辺は、AF, FH, HA です。
これらはすべて、立方体の合同な正方形の面の対角線です。
正方形の対角線の長さはすべて等しい（6√2 cm）ので、3辺の長さが等しくなります。
したがって、切り口の図形は「正三角形」となります。`
  },
  {
    id: 'm_solid_002',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺が6cmの立方体を3つの頂点A, F, Hを通る平面で切断したとき、切り取られてできる小さい方の立体（三角すいE-AFH）の体積は何cm³ですか。（半角数字で答えなさい）',
    options: [],
    answer: '36',
    acceptableAnswers: ['36', '36cm3', '36㎤', '３６'],
    keywords: ['36', '三角すいの体積', '切断'],
    knowledgeTag: '立方体の角を切断した三角すいの体積',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '三角すいE-AFHの体積' }),
    explanation: `【解法】
頂点Eを直角の頂点とする三角すいE-AFHを考えます。
底面を直角二等辺三角形EFH（底辺6cm、高さ6cm）とすると、高さは辺AE（6cm）です。
(すい体の体積) = (底面積) × (高さ) ÷ 3
= (6 × 6 ÷ 2) × 6 ÷ 3
= 18 × 2 = 36cm³ となります。
※公式「立方体の体積 × 1/6」＝ 216 ÷ 6 = 36cm³`
  },
  {
    id: 'm_solid_003',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺が6cmの立方体があります。図のように、向かい合う平行な面を通る6つの辺の中点を順に結ぶ平面で切断したとき、切り口の図形の名称は何ですか。（全角文字で答えなさい）',
    options: [],
    answer: '正六角形',
    acceptableAnswers: ['正六角形', 'せいろっかくけい'],
    keywords: ['正六角形', '中点切断', '立方体'],
    knowledgeTag: '立方体の切断・6辺の中点を通る正六角形',
    figureSvg: Geo.createCubeCut({ cutType: 'hexagon', title: '6辺の中点を通る切断' }),
    explanation: `【解法】
6つの辺の中点を結ぶと、切り口の6つの辺はすべて正方形の1辺の半分同士を斜めに結ぶ線分（長さ 3√2 cm）で等しくなり、内角もすべて 120度 になります。
したがって、切り口は「正六角形」となります。`
  },
  {
    id: 'm_solid_004',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺6cmの立方体を、向かい合う平行な6辺の中点を通る平面で切断したとき、切り口の正六角形によって立方体は体積の等しい2つの立体に分かれます。一方の立体の体積は何cm³ですか。（半角数字で答えなさい）',
    options: [],
    answer: '108',
    acceptableAnswers: ['108', '108cm3', '108㎤', '１０８'],
    keywords: ['108', '正六角形切断', '体積2等分'],
    knowledgeTag: '立方体の中心を通る対称な切断と体積2等分',
    figureSvg: Geo.createCubeCut({ cutType: 'hexagon', title: '立方体の体積2等分切断' }),
    explanation: `【解法】
この切断平面は立方体の中心点を通るため、立方体を合同な2つの立体に完全に対称に2等分します。
立方体全体の体積 = 6 × 6 × 6 = 216cm³
一方の立体の体積 = 216 ÷ 2 = 108cm³ となります。`
  },

  // 2. 回転体
  {
    id: 'm_solid_005',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '回転体',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】底辺が4cm、高さが9cmの直角三角形があります。\n図のように、高さ9cmの辺を回転軸としてこの直角三角形を360度回転させてできる立体（円すい）の体積は何cm³ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '150.72',
    acceptableAnswers: ['150.72', '150.72cm3', '150.72㎤', '１５０．７２'],
    keywords: ['150.72', '円すいの体積', '回転体'],
    knowledgeTag: '直角三角形の回転体（円すい）の体積',
    figureSvg: Geo.createConeRevolving({ r: 4, h: 9 }),
    explanation: `【解法】
回転させてできる立体は、底面の半径が4cm、高さが9cmの円すいです。
(円すいの体積) = (底面積) × (高さ) ÷ 3
= (4 × 4 × 3.14) × 9 ÷ 3
= 16 × 3.14 × 3
= 48 × 3.14 = 150.72cm³ となります。`
  },
  {
    id: 'm_solid_006',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '回転体',
    difficulty: 'advanced',
    questionType: 'input',
    question: '縦6cm、横4cmの長方形があります。この長方形の縦6cmの辺を回転軸として1回転させてできる円柱の体積は何cm³ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '301.44',
    acceptableAnswers: ['301.44', '301.44cm3', '301.44㎤', '３０１．４４'],
    keywords: ['301.44', '円柱', '回転体'],
    knowledgeTag: '長方形の回転体（円柱）の体積',
    figureSvg: Geo.createConeRevolving({ r: 4, h: 6 }),
    explanation: `【解法】
底面の半径が4cm、高さが6cmの円柱になります。
(円柱の体積) = 底面積 × 高さ
= (4 × 4 × 3.14) × 6
= 16 × 6 × 3.14
= 96 × 3.14 = 301.44cm³ となります。`
  },
  {
    id: 'm_solid_007',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '回転体',
    difficulty: 'advanced',
    questionType: 'input',
    question: '上底が3cm、下底が6cm、高さが4cmの直角台形があります。高さ4cmの辺を軸として360度回転させてできる立体（円すい台）の体積は何cm³ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '263.76',
    acceptableAnswers: ['263.76', '263.76cm3', '263.76㎤', '２６３．７６'],
    keywords: ['263.76', '円すい台', '回転体'],
    knowledgeTag: '直角台形の回転体（円すい台）の体積',
    figureSvg: Geo.createConeRevolving({ r: 6, h: 8 }),
    explanation: `【解法】
直角台形の斜辺を延長して、大きな円すいから上の小さな円すいを引きます。
相似比は 上の円すい : 全体の円すい = 3 : 6 = 1 : 2 です。
全体の円すいの高さは 4 × 2 = 8cm、上の小さな円すいの高さは 4cm です。
・大きな円すい：6 × 6 × 3.14 × 8 ÷ 3 = 96 × 3.14
・上の小円すい：3 × 3 × 3.14 × 4 ÷ 3 = 12 × 3.14
円すい台の体積 = (96 - 12) × 3.14 = 84 × 3.14 = 263.76cm³ となります。`
  },

  // 3. 円すいの展開図
  {
    id: 'm_solid_008',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円すいの展開図',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】母線の長さが12cm、底面の半径が3cmの円すいがあります。\n図のように、この円すいの側面を展開してできるおうぎ形の中心角は何度ですか。（半角数字で答えなさい）',
    options: [],
    answer: '90',
    acceptableAnswers: ['90', '90度', '90°', '９０'],
    keywords: ['90', '中心角', '母線と半径'],
    knowledgeTag: '円すい展開図の中心角公式（360×r/R）',
    figureSvg: Geo.createConeNet({ R: 12, r: 3, angle: 90 }),
    explanation: `【解法】
円すいの側面の中心角の公式：
(中心角) = 360° × (底面の半径 / 母線)
= 360° × (3 / 12)
= 360° × (1 / 4) = 90度 となります。`
  },
  {
    id: 'm_solid_009',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円すいの展開図',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】母線の長さが10cm、底面の半径が4cmの円すいの表面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '175.84',
    acceptableAnswers: ['175.84', '175.84cm2', '175.84㎠', '１７５．８４'],
    keywords: ['175.84', '円すいの表面積', '側面積公式'],
    knowledgeTag: '円すいの表面積公式（側面積＝π×母線×半径）',
    figureSvg: Geo.createConeNet({ R: 10, r: 4, angle: 144 }),
    explanation: `【解法】
(表面積) = (側面積) + (底面積)
・側面積の超簡単公式：母線 × 半径 × 3.14
10 × 4 × 3.14 = 40 × 3.14 = 125.6cm²
・底面積：4 × 4 × 3.14 = 16 × 3.14 = 50.24cm²
表面積 = (40 + 16) × 3.14 = 56 × 3.14 = 175.84cm² となります。`
  },

  // 4. すい体の体積比
  {
    id: 'm_solid_010',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '相似と体積比',
    difficulty: 'standard',
    questionType: 'input',
    question: '相似な2つの角すいPとQがあり、相似比が 2 : 3 です。Pの体積が24cm³のとき、Qの体積は何cm³ですか。（半角数字で答えなさい）',
    options: [],
    answer: '81',
    acceptableAnswers: ['81', '81cm3', '81㎤', '８１'],
    keywords: ['81', '体積比', '相似比の3乗'],
    knowledgeTag: '相似比と体積比（相似比の3乗）',
    figureSvg: Geo.createConeRevolving({ r: 3, h: 6 }),
    explanation: `【解法】
相似比が 2 : 3 のとき、体積比は相似比の3乗になります。
(体積比) = 2³ : 3³ = 8 : 27
Pの体積が 24cm³（比の8が24）なので、比の1あたり 3cm³ です。
Qの体積 = 27 × 3 = 81cm³ となります。`
  },
  {
    id: 'm_solid_011',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '相似と体積比',
    difficulty: 'advanced',
    questionType: 'input',
    question: '高さが12cmの正四角すいがあります。底面に平行な平面で高さをちょうど真ん中（上から6cm）で切断したとき、切り取られた上の小さな正四角すいと、残った下の台頭四角すいの体積比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '1:7',
    acceptableAnswers: ['1:7', '1：7', '1対7', '１：７'],
    keywords: ['1:7', '台頭すい体', '体積比'],
    knowledgeTag: 'すい体の切断と台頭すい体の体積比',
    figureSvg: Geo.createConeRevolving({ r: 4, h: 8 }),
    explanation: `【解法】
上の小四角すいと、全体の四角すいの相似比は 6 : 12 = 1 : 2 です。
体積比は相似比の3乗なので、
(小四角すい) : (全体) = 1³ : 2³ = 1 : 8
下の残った立体（台頭四角すい）の体積比は 8 - 1 = 7 です。
したがって、(上の小四角すい) : (下の立体) = 1 : 7 となります。`
  },

  // 5. 水そうとグラフ
  {
    id: 'm_solid_012',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '水そうとグラフ',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】底面が縦20cm、横30cmの直方体の水そうに、一定の割合で水を入れます。\n毎分1.2Lの割合で水を入れるとき、水面の高さは毎分何cmずつ上がりますか。（半角数字で答えなさい）',
    options: [],
    answer: '2',
    acceptableAnswers: ['2', '2cm', '２'],
    keywords: ['2', '水そう算', '水位の上昇'],
    knowledgeTag: '水そうへの注水と水位上昇速度',
    figureSvg: Geo.createWaterTank({ widthW: 30, heightH: 20, depthD: 20, waterH: 8 }),
    explanation: `【解法】
・水そうの底面積 = 20 × 30 = 600cm²
・毎分入る水の体積 = 1.2L = 1200cm³
1分間に上昇する高さ = 1200 ÷ 600 = 2cm となります。`
  },
  {
    id: 'm_solid_013',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '水そうとおもり',
    difficulty: 'advanced',
    questionType: 'input',
    question: '底面積が400cm²で深さが30cmの直方体の水そうに、深さ15cmまで水が入っています。\nこの水そうに、底面積が100cm²、高さが20cmの直方体の鉄の棒を底面につくようにまっすぐ立てて沈めたとき、水深は何cmになりますか。（半角数字で答えなさい）',
    options: [],
    answer: '20',
    acceptableAnswers: ['20', '20cm', '２０'],
    keywords: ['20', 'おもりを沈める', '水深'],
    knowledgeTag: '水そうにおもりを沈めたときの水位変化',
    figureSvg: Geo.createWaterTank({ widthW: 20, heightH: 30, depthD: 20, waterH: 20 }),
    explanation: `【解法】
入っている水の体積 = 400 × 15 = 6000cm³
鉄の棒を入れると、水が入ることのできる底面積が
400 - 100 = 300cm² に減少します。
新しい水深 = 6000 ÷ 300 = 20cm
鉄の棒の高さは20cmなので、水面と鉄の棒の頭がぴったり一致します。
したがって、水深は 20cm となります。`
  },

  // 6. 直方体の切断の法則
  {
    id: 'm_solid_014',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】直方体を1つの平面で切断したところ、切り口は四角形になり、4本の高さの辺の切断された長さは順に 3cm, 5cm, 8cm, x cm でした。\nx の長さは何cmですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6cm', '６'],
    keywords: ['6', '切断の法則', '向かい合う和'],
    knowledgeTag: '四角柱切断の向かい合う高さの和の法則',
    figureSvg: Geo.createCubeCut({ cutType: 'trapezoid', title: '四角柱の切断（高さの和）' }),
    explanation: `【解法】
直方体を平面で切断したとき、向かい合う平行な辺の切断長さの和は等しくなります。
(1番目 + 3番目) = (2番目 + 4番目)
3 + 8 = 5 + x
11 = 5 + x  より  x = 6cm となります。`
  },
  {
    id: 'm_solid_015',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '表面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '1辺が5cmの立方体の表面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '150',
    acceptableAnswers: ['150', '150cm2', '150㎠', '１５０'],
    keywords: ['150', '立方体の表面積', '6面'],
    knowledgeTag: '立方体の表面積の計算',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '1辺5cmの立方体' }),
    explanation: `【解法】
立方体には合同な面が6つあります。
表面積 = (1面の面積) × 6
= (5 × 5) × 6 = 25 × 6 = 150cm² となります。`
  },
  {
    id: 'm_solid_016',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '円柱の表面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '底面の半径が3cm、高さが7cmの円柱の表面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '188.4',
    acceptableAnswers: ['188.4', '188.4cm2', '188.4㎠', '１８８．４'],
    keywords: ['188.4', '円柱の表面積', '側面積'],
    knowledgeTag: '円柱の表面積（底面積×2＋側面積）',
    figureSvg: Geo.createConeRevolving({ r: 3, h: 7 }),
    explanation: `【解法】
・底面積2つ分：(3 × 3 × 3.14) × 2 = 18 × 3.14
・側面積：(底面の円周) × 高さ = (2 × 3 × 3.14) × 7 = 42 × 3.14
表面積 = (18 + 42) × 3.14 = 60 × 3.14 = 188.4cm² となります。`
  },
  {
    id: 'm_solid_017',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '立体の切断',
    difficulty: 'advanced',
    questionType: 'input',
    question: '底面積が30cm²の三角柱を平面で斜めに切断したところ、3本の高さの辺の長さがそれぞれ 4cm, 6cm, 8cm になりました。\n切断されてできた下の立体の体積は何cm³ですか。（半角数字で答えなさい）',
    options: [],
    answer: '180',
    acceptableAnswers: ['180', '180cm3', '180㎤', '１８０'],
    keywords: ['180', '断頭三角柱', '平均の高さ'],
    knowledgeTag: '断頭三角柱の体積公式（底面積×平均の高さ）',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '断頭三角柱の体積' }),
    explanation: `【解法】
断頭三角柱の体積公式：(底面積) × (3本の高さの平均)
平均の高さ = (4 + 6 + 8) ÷ 3 = 18 ÷ 3 = 6cm
体積 = 30 × 6 = 180cm³ となります。`
  },
  {
    id: 'm_solid_018',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '水そうとグラフ',
    difficulty: 'advanced',
    questionType: 'input',
    question: '直方体の水そうに満杯まで水が入っています。この水そうを45度傾けたとき、こぼれ出た水の量は水そう全体の何分のいくつですか。（半角の分数で答えなさい。例：1/2）',
    options: [],
    answer: '1/2',
    acceptableAnswers: ['1/2', '１／２'],
    keywords: ['1/2', '水そうの傾き', '45度'],
    knowledgeTag: '水そうの傾きと残る水の量',
    figureSvg: Geo.createWaterTank({ widthW: 20, heightH: 20, depthD: 20, waterH: 10 }),
    explanation: `【解法】
水そうを45度傾けると、水面は底面の対角線を通る平面になります。
残った水は三角柱（直方体を半分に割ったもの）の形になるため、残った水は全体の 1/2 です。
したがって、こぼれ出た水の量も全体の 1/2 となります。`
  },
  {
    id: 'm_solid_019',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '展開図',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1辺が6cmの立方体の頂点Aから、立方体の表面を通って反対側の頂点Gまでひもをかけます。ひもの長さが最も短くなるとき、ひもの長さの2乗はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '180',
    acceptableAnswers: ['180', '１８０'],
    keywords: ['180', 'ひもの最短距離', '展開図'],
    knowledgeTag: '立体の表面を通る最短距離（展開図上の直線）',
    figureSvg: Geo.createCubeCut({ cutType: 'triangle', title: '立方体の表面を通る最短距離' }),
    explanation: `【解法】
展開図を広げると、隣り合う2つの正方形がつながった縦6cm、横12cmの長方形になります。
ひもの最短距離は、展開図上の直線AGです。
直角三角形の斜辺の2乗 = 6² + 12² = 36 + 144 = 180 となります。`
  },
  {
    id: 'm_solid_020',
    subject: '算数',
    category: '平面図形・立体図形',
    subCategory: '回転体',
    difficulty: 'advanced',
    questionType: 'input',
    question: '底面の半径が5cm、母線の長さが13cmの円すいがあります。この円すいの高さは何cmですか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12cm', '１２'],
    keywords: ['12', '三平方の定理', '円すいの高さ'],
    knowledgeTag: '直角三角形の3辺（5:12:13）と円すいの高さ',
    figureSvg: Geo.createConeRevolving({ r: 5, h: 12 }),
    explanation: `【解法】
円すいの母線、底面の半径、高さで直角三角形ができます。
三平方の定理より、
(高さ)² = 13² - 5² = 169 - 25 = 144
144 = 12² なので、高さは 12cm となります。`
  }
];
