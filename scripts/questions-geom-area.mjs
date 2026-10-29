// 平面図形の面積 分野（全30問：すべて幾何テンプレート生成エンジン使用）
import * as Geo from './geometry-engine.mjs';

export const GEOM_AREA_QUESTIONS = [
  {
    id: 'm_geom_area_001',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'basic',
    questionType: 'input',
    question: '【図形問題】1辺の長さが10cmの正方形ABCDがあります。\n図のように、頂点Bを中心とする半径10cmの円弧ACと、頂点Dを中心とする半径10cmの円弧ACを引いてできる、中央の葉っぱのような形をした部分の面積は何cm²ですか。\nただし、円周率は3.14とします。（半角数字で答えなさい）',
    options: [],
    answer: '57',
    acceptableAnswers: ['57', '57cm2', '57㎠', '５７'],
    keywords: ['57', '葉っぱ型', '円周率3.14'],
    knowledgeTag: '円とおうぎ形・葉っぱ型の面積公式',
    figureSvg: Geo.createLeafInSquare({ side: 10 }),
    explanation: `【解法】
(葉っぱ型の面積) = (半径10cmのおうぎ形2個) - (正方形の面積)
・おうぎ形2個：10 × 10 × 3.14 × (1/4) × 2 = 157cm²
・正方形：10 × 10 = 100cm²
157 - 100 = 57cm²
※有名公式「一辺×一辺 × 0.57」＝ 10 × 10 × 0.57 = 57cm²`
  },
  {
    id: 'm_geom_area_002',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '図形の転がり移動',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺の長さが6cmの正三角形ABCが、直線Lの上をすべることなく時計回りに1回転します。\n頂点Aが動いて描く線の長さは何cmですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '25.12',
    acceptableAnswers: ['25.12', '25.12cm', '２５．１２'],
    keywords: ['25.12', '転がり移動', '正三角形'],
    knowledgeTag: '正多角形の転がり移動・軌跡の長さ',
    figureSvg: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" class="w-full">
${Geo.GLOW_FILTER}
  <line x1="20" y1="130" x2="340" y2="130" stroke="#64748b" stroke-width="3" />
  ${Geo.labelText(345, 135, "L", "start", "#94a3b8", 13)}
  <polygon points="50,78 20,130 80,130" fill="#6366f1" fill-opacity="0.3" stroke="#818cf8" stroke-width="2" />
  ${Geo.labelText(50, 68, "A")}
  ${Geo.labelText(15, 148, "B", "end", "#cbd5e1", 12)}
  ${Geo.labelText(80, 148, "C", "start", "#cbd5e1", 12)}
  <path d="M 50,78 A 60,60 0 0,1 140,130" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,3" />
  <circle cx="140" cy="130" r="3.5" fill="#f43f5e" />
  ${Geo.labelText(140, 148, "A", "middle", "#f43f5e", 12)}
  <path d="M 140,130 A 60,60 0 0,1 230,78" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,3" />
  <circle cx="230" cy="78" r="3.5" fill="#f43f5e" />
  ${Geo.labelText(230, 68, "A", "middle", "#f43f5e", 12)}
  <polygon points="230,78 200,130 260,130" fill="#334155" fill-opacity="0.3" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  ${Geo.labelText(180, 25, "頂点Aの動く軌跡（2本の円弧）", "middle", "#fbbf24", 12)}
</svg>`,
    explanation: `【解法】
正三角形が転がるとき、頂点Aは半径6cm、中心角120度のおうぎ形の弧を2回描きます。
(直径12cm) × 3.14 × (120/360) × 2
= 12 × 3.14 × (2/3) = 8 × 3.14 = 25.12cm となります。`
  },
  {
    id: 'm_geom_area_003',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '正六角形の分割',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】面積が72cm²の正六角形ABCDEFがあります。\n図のように、各辺の中点を順に結んでできる、内側の正六角形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '54',
    acceptableAnswers: ['54', '54cm2', '54㎠', '５４'],
    keywords: ['54', '正六角形', '中点'],
    knowledgeTag: '正六角形の面積分割・中点連結の比',
    figureSvg: Geo.createHexagonMidpoints({ area: 72 }),
    explanation: `【解法】
外側と内側の正六角形の面積比は 4 : 3 になります。
外側の面積が 72cm² なので、内側の面積は
72 × (3/4) = 54cm² となります。`
  },
  {
    id: 'm_geom_area_004',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】直角をはさむ2辺の長さが AB = 6cm、AC = 8cm、斜辺 BC = 10cm の直角三角形ABCがあります。\n図のように、3辺AB, AC, BCを直径とする半円を描きました。\nこのとき、着色された2つの三日月のような部分の面積の合計は何cm²ですか。ただし、円周率は3.14とします。（半角数字で答えなさい）',
    options: [],
    answer: '24',
    acceptableAnswers: ['24', '24cm2', '24㎠', '２４'],
    keywords: ['24', 'ヒポクラテスの三日月', '直角三角形'],
    knowledgeTag: 'ヒポクラテスの三日月・直角三角形との等積性',
    figureSvg: Geo.createHippocratesLunes({ a: 6, b: 8, c: 10 }),
    explanation: `【解法】
有名問題「ヒポクラテスの三日月」です。
(2つの三日月の面積の和)
= (直径6cmの半円) + (直径8cmの半円) + (直角三角形ABC) - (直径10cmの半円)
三平方の定理 6² + 8² = 10² より、2つの小さい半円の面積の和は、斜辺の半円の面積と完全に一致します。
したがって、三日月2つの面積の和は直角三角形ABCの面積そのものと等しくなります。
(面積) = 6 × 8 ÷ 2 = 24cm² となります。`
  },
  {
    id: 'm_geom_area_005',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '図形の転がり移動',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺の長さが10cmの正方形の外側を、半径2cmの円がすべることなく転がって1周します。\n図のように、円が通過した部分全体の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '210.24',
    acceptableAnswers: ['210.24', '210.24cm2', '210.24㎠', '２１０．２４'],
    keywords: ['210.24', '円の通過面積', '正方形'],
    knowledgeTag: '円の転がり移動・外側の通過面積',
    figureSvg: Geo.createCircleRollingSquare({ squareSide: 10, radius: 2 }),
    explanation: `【解法】
円の直径は 2 × 2 = 4cm なので、通過する幅は 4cm です。
1. 正方形の4辺の外側にできる長方形4個：
4 × 10 × 4 = 160cm²
2. 正方形の4隅にできるおうぎ形4個（合わせると半径4cmの円1個分）：
4 × 4 × 3.14 = 50.24cm²
通過した面積の合計 = 160 + 50.24 = 210.24cm² となります。`
  },
  {
    id: 'm_geom_area_006',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺の長さが12cmの正方形ABCDがあります。\n図のように、正方形の4辺をそれぞれ直径とする半円を正方形の内側に描きました。\nこのとき、中央にできる4枚の花びらのような着色部分の面積の合計は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '82.08',
    acceptableAnswers: ['82.08', '82.08cm2', '82.08㎠', '８２．０８'],
    keywords: ['82.08', '花びら', '4つの半円'],
    knowledgeTag: '4つの半円の重なり・花びら型の面積',
    figureSvg: Geo.createPetalsInSquare({ side: 12 }),
    explanation: `【解法】
(花びら4枚の面積) = (半径6cmの半円4個の和) - (正方形ABCDの面積)
・半径6cmの半円4個（＝半径6cmの円2個分）：
6 × 6 × 3.14 × 2 = 72 × 3.14 = 226.08cm²
・正方形ABCDの面積：
12 × 12 = 144cm²
花びら部分の面積 = 226.08 - 144 = 82.08cm² となります。`
  },
  {
    id: 'm_geom_area_007',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】半径が12cm、中心角が45度のおうぎ形OABがあります。\n図のように、弦ABを引いてできる弓形（着色部分）の面積は何cm²ですか。ただし、円周率は3.14とし、三角形OABの面積は36cm²とします。（小数で答えなさい）',
    options: [],
    answer: '20.52',
    acceptableAnswers: ['20.52', '20.52cm2', '20.52㎠', '２０．５２'],
    keywords: ['20.52', '弓形', '中心角45度'],
    knowledgeTag: 'おうぎ形と弓形の面積（中心角45度）',
    figureSvg: Geo.createSectorSegment({ radius: 12, angle: 45 }),
    explanation: `【解法】
(弓形の面積) = (おうぎ形OABの面積) - (三角形OABの面積)

・おうぎ形OABの面積：
12 × 12 × 3.14 × (45 / 360) = 144 × 3.14 × (1/8) = 18 × 3.14 = 56.52cm²

・三角形OABの面積：
問題文の条件より 36cm²

したがって、弓形（着色部分）の面積は、
56.52 - 36 = 20.52cm²
となります。`
  },
  {
    id: 'm_geom_area_008',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '同心円と円環',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】同じ中心Oをもつ2つの同心円があります。\n図のように、外側の円の弦ABが内側の円にちょうど接しており、弦ABの長さは16cmです。\nこのとき、外円と内円の間のドーナツ型（着色部分）の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '200.96',
    acceptableAnswers: ['200.96', '200.96cm2', '200.96㎠', '２００．９６'],
    keywords: ['200.96', 'ドーナツ型', '同心円', '三平方'],
    knowledgeTag: '接する弦の長さから求める円環面積（三平方の定理）',
    figureSvg: Geo.createConcentricChord({ chord: 16 }),
    explanation: `【解法】
外円の半径を R、内円の半径を r とします。
中心Oから弦ABに下ろした垂線の長さは内円の半径 r であり、弦ABを2等分（8cm）します。
直角三角形ができるため、三平方の定理より
R² - r² = 8² = 64
ドーナツ型の面積 = πR² - πr² = π(R² - r²)
= 64 × 3.14 = 200.96cm² となります。（半径が分からなくても面積が求まる有名問題）`
  },
  {
    id: 'm_geom_area_009',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '四角形の面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】2本の対角線の長さが12cmと16cmであるひし形ABCDがあります。\nこのひし形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '96',
    acceptableAnswers: ['96', '96cm2', '96㎠', '９６'],
    keywords: ['96', 'ひし形', '対角線'],
    knowledgeTag: 'ひし形の面積公式',
    figureSvg: Geo.createRhombusDiagonals({ d1: 12, d2: 16 }),
    explanation: `【解法】
ひし形の面積 = (対角線 × 対角線) ÷ 2
= 12 × 16 ÷ 2
= 96cm² となります。`
  },
  {
    id: 'm_geom_area_010',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺が10cmの正方形の内側に、正方形にぴったり接する円を描きました。\n正方形の四隅（円の外側で正方形の内側の着色部分）の面積の合計は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '21.5',
    acceptableAnswers: ['21.5', '21.5cm2', '21.5㎠', '２１．５'],
    keywords: ['21.5', '四隅', '内接円'],
    knowledgeTag: '正方形と内接円のすき間面積',
    figureSvg: Geo.createSquareInscribedCircle({ side: 10 }),
    explanation: `【解法】
(すき間面積) = (正方形の面積) - (円の面積)
・正方形：10 × 10 = 100cm²
・内接円（半径5cm）：5 × 5 × 3.14 = 78.5cm²
すき間面積 = 100 - 78.5 = 21.5cm²
※公式「一辺×一辺 × 0.215」＝ 10 × 10 × 0.215 = 21.5cm²`
  },
  {
    id: 'm_geom_area_011',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径6cmの円を、S字形の2つの半円の線で2等分しました。\n図のように着色された一方の領域の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '56.52',
    acceptableAnswers: ['56.52', '56.52cm2', '56.52㎠', '５６．５２'],
    keywords: ['56.52', '太極図', '等積変形'],
    knowledgeTag: '太極図の等積性・半円の面積',
    figureSvg: Geo.createYinYangDivision({ r: 6 }),
    explanation: `【解法】
S字の曲線で分けられた2つの領域は合同で、面積は円全体のちょうど半分になります。
全体の円の面積 = 6 × 6 × 3.14 = 113.04cm²
一方の面積 = 113.04 ÷ 2 = 56.52cm² となります。`
  },
  {
    id: 'm_geom_area_012',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '四角形の面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】対角線が直交する四角形（たこ形）ABCDがあります。2本の対角線の長さが10cmと14cmであるとき、この四角形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '70',
    acceptableAnswers: ['70', '70cm2', '70㎠', '７０'],
    keywords: ['70', 'たこ形', '直交対角線'],
    knowledgeTag: '対角線が直交する四角形の面積',
    figureSvg: Geo.createKiteDiagonals({ d1: 10, d2: 14 }),
    explanation: `【解法】
対角線が直交する四角形の面積は、ひし形と同じく (対角線 × 対角線) ÷ 2 で求められます。
面積 = 10 × 14 ÷ 2 = 70cm² となります。`
  },
  {
    id: 'm_geom_area_013',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '等積変形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺20mの正方形の土地に、縦と横に幅2mの道路が十字形に通っています。\n道路を除いた畑（着色部分4か所）の面積の合計は何m²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '324',
    acceptableAnswers: ['324', '324m2', '324㎡', '３２４'],
    keywords: ['324', '道路', '等積変形'],
    knowledgeTag: '十字道路の等積移動による面積計算',
    figureSvg: Geo.createRoadInSquare({ side: 20, roadW: 2 }),
    explanation: `【解法】
道路を端に寄せる等積変形を行います。
道路を除いた部分は、縦も横も 20 - 2 = 18m の1つの正方形にまとまります。
畑の面積 = 18 × 18 = 324m² となります。`
  },
  {
    id: 'm_geom_area_014',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】半径5cmの円に内接する正方形があります。\n円の面積から内接する正方形の面積を引いた、すき間（着色部分）の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '28.5',
    acceptableAnswers: ['28.5', '28.5cm2', '28.5㎠', '２８．５'],
    keywords: ['28.5', '内接正方形', '円'],
    knowledgeTag: '円と内接正方形のすき間面積',
    figureSvg: Geo.createCircleInscribedSquare({ r: 5 }),
    explanation: `【解法】
・円の面積：5 × 5 × 3.14 = 78.5cm²
・内接正方形の面積：対角線が円の直径（10cm）なので、ひし形の公式より
10 × 10 ÷ 2 = 50cm²
すき間の面積 = 78.5 - 50 = 28.5cm² となります。`
  },
  {
    id: 'm_geom_area_015',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径6cm、中心角60度のおうぎ形の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '18.84',
    acceptableAnswers: ['18.84', '18.84cm2', '18.84㎠', '１８．８４'],
    keywords: ['18.84', 'おうぎ形', '60度'],
    knowledgeTag: 'おうぎ形の面積基本（中心角60度）',
    figureSvg: Geo.createSectorSegment({ radius: 6, angle: 60 }),
    explanation: `【解法】
(おうぎ形の面積) = 半径 × 半径 × 3.14 × (中心角 / 360)
= 6 × 6 × 3.14 × (60 / 360)
= 36 × 3.14 × (1/6)
= 6 × 3.14 = 18.84cm² となります。`
  },
  {
    id: 'm_geom_area_016',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺8cmの正方形ABCDの中にできる葉っぱ型の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '36.48',
    acceptableAnswers: ['36.48', '36.48cm2', '36.48㎠', '３６．４８'],
    keywords: ['36.48', '葉っぱ型', '0.57'],
    knowledgeTag: '葉っぱ型面積の倍率公式',
    figureSvg: Geo.createLeafInSquare({ side: 8 }),
    explanation: `【解法】
公式：一辺 × 一辺 × 0.57
= 8 × 8 × 0.57 = 64 × 0.57 = 36.48cm² となります。`
  },
  {
    id: 'm_geom_area_017',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】直角をはさむ2辺がともに4cmの直角二等辺三角形の各辺を直径とする「ヒポクラテスの三日月」の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '8cm2', '8㎠', '８'],
    keywords: ['8', 'ヒポクラテス', '直角二等辺三角形'],
    knowledgeTag: '直角二等辺三角形のヒポクラテスの三日月',
    figureSvg: Geo.createHippocratesLunes({ a: 4, b: 4, c: 5.657 }),
    explanation: `【解法】
三日月の面積の和は、内側の直角二等辺三角形の面積と等しくなります。
面積 = 4 × 4 ÷ 2 = 8cm² となります。`
  },
  {
    id: 'm_geom_area_018',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '図形の転がり移動',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺の長さが8cmの正方形の外側を、半径1cmの円が転がって1周するとき、円が通過する部分全体の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '76.56',
    acceptableAnswers: ['76.56', '76.56cm2', '76.56㎠', '７６．５６'],
    keywords: ['76.56', '転がり移動', '正方形外側'],
    knowledgeTag: '正方形の外側を回る円の通過面積',
    figureSvg: Geo.createCircleRollingSquare({ squareSide: 8, radius: 1 }),
    explanation: `【解法】
円の直径 = 2cm（通過する幅2cm）
1. 4辺の外側の長方形：4 × (8 × 2) = 64cm²
2. 4隅のおうぎ形（合わせると半径2cmの円）：2 × 2 × 3.14 = 12.56cm²
合計 = 64 + 12.56 = 76.56cm² となります。`
  },
  {
    id: 'm_geom_area_019',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '四角形の面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】上底が5cm、下底が9cm、高さが6cmの台形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '42',
    acceptableAnswers: ['42', '42cm2', '42㎠', '４２'],
    keywords: ['42', '台形の面積', '公式'],
    knowledgeTag: '台形の面積公式の基本',
    figureSvg: Geo.createTrapezoidSimilarity({ topLen: 5, bottomLen: 9 }),
    explanation: `【解法】
(上底 + 下底) × 高さ ÷ 2
= (5 + 9) × 6 ÷ 2
= 14 × 3 = 42cm² となります。`
  },
  {
    id: 'm_geom_area_020',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径9cm、中心角120度のおうぎ形の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '84.78',
    acceptableAnswers: ['84.78', '84.78cm2', '84.78㎠', '８４．７８'],
    keywords: ['84.78', 'おうぎ形', '120度'],
    knowledgeTag: '中心角120度のおうぎ形面積',
    figureSvg: Geo.createSectorSegment({ radius: 9, angle: 120 }),
    explanation: `【解法】
9 × 9 × 3.14 × (120/360)
= 81 × 3.14 × (1/3)
= 27 × 3.14 = 84.78cm² となります。`
  },
  {
    id: 'm_geom_area_021',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺10cmの正方形の4辺をそれぞれ直径とする半円を4つ描いたとき、4枚の花びら部分の面積は何cm²ですか。ただし、円周率は3.14とします。（半角数字で答えなさい）',
    options: [],
    answer: '57',
    acceptableAnswers: ['57', '57cm2', '57㎠', '５７'],
    keywords: ['57', '4つの半円', '花びら'],
    knowledgeTag: '4つの半円の花びら型面積',
    figureSvg: Geo.createPetalsInSquare({ side: 10 }),
    explanation: `【解法】
半径5cmの半円4個（半径5cmの円2個分）の面積から、正方形の面積を引きます。
5 × 5 × 3.14 × 2 - 10 × 10
= 50 × 3.14 - 100
= 157 - 100 = 57cm² となります。`
  },
  {
    id: 'm_geom_area_022',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径10cm、中心角90度のおうぎ形から、直角二等辺三角形を引いてできる弓形部分の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '28.5',
    acceptableAnswers: ['28.5', '28.5cm2', '28.5㎠', '２８．５'],
    keywords: ['28.5', '弓形', '葉っぱの半分'],
    knowledgeTag: '中心角90度の弓形（葉っぱ型の半分）',
    figureSvg: Geo.createSectorSegment({ radius: 10, angle: 90 }),
    explanation: `【解法】
・おうぎ形：10 × 10 × 3.14 × (1/4) = 78.5cm²
・直角二等辺三角形：10 × 10 ÷ 2 = 50cm²
弓形の面積 = 78.5 - 50 = 28.5cm²
（※葉っぱ型57cm²のちょうど半分です）`
  },
  {
    id: 'm_geom_area_023',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '同心円と円環',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】外円の半径が10cm、内円の半径が6cmのドーナツ型の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '200.96',
    acceptableAnswers: ['200.96', '200.96cm2', '200.96㎠', '２００．９６'],
    keywords: ['200.96', '円環', 'ドーナツ'],
    knowledgeTag: '円環の面積の公式',
    figureSvg: Geo.createConcentricChord({ chord: 16 }),
    explanation: `【解法】
(10² - 6²) × 3.14
= (100 - 36) × 3.14
= 64 × 3.14 = 200.96cm² となります。`
  },
  {
    id: 'm_geom_area_024',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '正方形と円',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺20cmの正方形の4隅から、半径10cm・中心角90度のおうぎ形4個を切り取ったとき、残った中央部分の面積は何cm²ですか。ただし、円周率は3.14とします。（半角数字で答えなさい）',
    options: [],
    answer: '86',
    acceptableAnswers: ['86', '86cm2', '86㎠', '８６'],
    keywords: ['86', '4隅のおうぎ形', '正方形'],
    knowledgeTag: '正方形と4隅のおうぎ形',
    figureSvg: Geo.createSquareInscribedCircle({ side: 20 }),
    explanation: `【解法】
4隅のおうぎ形4個を合わせると、半径10cmの円1個分になります。
・正方形：20 × 20 = 400cm²
・半径10cmの円：10 × 10 × 3.14 = 314cm²
残った面積 = 400 - 314 = 86cm² となります。`
  },
  {
    id: 'm_geom_area_025',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '四角形の面積',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】1辺が10cmで、高さが8cmであるひし形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '80',
    acceptableAnswers: ['80', '80cm2', '80㎠', '８０'],
    keywords: ['80', 'ひし形', '底辺×高さ'],
    knowledgeTag: 'ひし形の面積（底辺×高さ）',
    figureSvg: Geo.createRhombusDiagonals({ d1: 10, d2: 16 }),
    explanation: `【解法】
ひし形は平行四辺形の一種なので、「底辺 × 高さ」でも面積が求まります。
面積 = 10 × 8 = 80cm² となります。`
  },
  {
    id: 'm_geom_area_026',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円の面積',
    difficulty: 'basic',
    questionType: 'input',
    question: '【図形問題】直径が14cmの円の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '153.86',
    acceptableAnswers: ['153.86', '153.86cm2', '153.86㎠', '１５３．８６'],
    keywords: ['153.86', '円の面積', '半径7'],
    knowledgeTag: '円の面積の基本公式',
    figureSvg: Geo.createCircleInscribedSquare({ r: 7 }),
    explanation: `【解法】
半径 = 14 ÷ 2 = 7cm
面積 = 7 × 7 × 3.14 = 49 × 3.14 = 153.86cm² となります。`
  },
  {
    id: 'm_geom_area_027',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '等積変形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺30mの正方形の広場に、縦と横に幅3mの道が十字に通っています。道の部分を除いた広場の面積は何m²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '729',
    acceptableAnswers: ['729', '729m2', '729㎡', '７２９'],
    keywords: ['729', '道', '等積変形'],
    knowledgeTag: '十字道路の等積変形',
    figureSvg: Geo.createRoadInSquare({ side: 30, roadW: 3 }),
    explanation: `【解法】
端に寄せる等積変形により、
(30 - 3) × (30 - 3) = 27 × 27 = 729m² となります。`
  },
  {
    id: 'm_geom_area_028',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】直角をはさむ2辺が AB = 8cm、BC = 15cm、斜辺 AC = 17cm の直角三角形ABCがあります。\n各辺を直径とするヒポクラテスの三日月の面積の合計は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60cm2', '60㎠', '６０'],
    keywords: ['60', 'ヒポクラテス', '8:15:17'],
    knowledgeTag: '直角三角形ヒポクラテスの三日月（8:15:17）',
    figureSvg: Geo.createHippocratesLunes({ a: 8, b: 15, c: 17 }),
    explanation: `【解法】
ヒポクラテスの三日月の面積の和は直角三角形ABCの面積に等しいです。
(面積) = 8 × 15 ÷ 2 = 60cm² となります。`
  },
  {
    id: 'm_geom_area_029',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】半径4cmの円の面積は、半径2cmの円の面積の何倍ですか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4倍', '４'],
    keywords: ['4', '相似比の2乗', '円の面積'],
    knowledgeTag: '円の相似比と面積比',
    figureSvg: Geo.createConcentricChord({ chord: 8 }),
    explanation: `【解法】
半径の比（相似比）は 4 : 2 = 2 : 1 です。
面積比は相似比の2乗なので、2² : 1² = 4 : 1
したがって 4倍 となります。`
  },
  {
    id: 'm_geom_area_030',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '正方形と円',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺が6cmの正方形の内側にぴったり入る円を描いたとき、四隅のすき間面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '7.74',
    acceptableAnswers: ['7.74', '7.74cm2', '7.74㎠', '７．７４'],
    keywords: ['7.74', '0.215', 'すき間'],
    knowledgeTag: '正方形と内接円のすき間公式',
    figureSvg: Geo.createSquareInscribedCircle({ side: 6 }),
    explanation: `【解法】
公式：一辺 × 一辺 × 0.215
= 6 × 6 × 0.215 = 36 × 0.215 = 7.74cm² となります。`
  }
];
