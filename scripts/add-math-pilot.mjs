import fs from 'fs';
import path from 'path';

const MATH_PILOT_QUESTIONS = [
  // 1. 速さ（比を使う旅人算・流水算）
  {
    id: 'm_speed_001',
    subject: '算数',
    category: '速さ',
    subCategory: '比を使う旅人算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'A地点とB地点の間を、P君とQ君が同時にそれぞれの地点を出発して休まず往復します。P君とQ君の走る速さの比は 5 : 3 です。\n2人が2回目に出会ったのは、A地点から160m離れた地点でした。\nA地点からB地点までの距離は何mですか。（半角数字で答えなさい）',
    options: [],
    answer: '1280',
    acceptableAnswers: ['1280', '1280m', '1280メートル', '１２８０'],
    keywords: ['1280', '比', '往復'],
    knowledgeTag: '比を使う旅人算・複数回出会い',
    explanation: `【解法】
2人が2回目に出会うまでに走った合計距離は、片道（A〜B）の3倍です。
速さの比が P:Q = 5:3 なので、2人が進んだ距離の比も 5:3 となります。

P君が走った距離は、片道3本分のうち
3 × 5/(5+3) = 15/8（片道1本と 7/8）です。

P君はA地点を出発してB地点で折り返し、A地点に向かう途中でQ君と出会うため、2回目に出会った地点はA地点から
1 - 7/8 = 1/8 の地点になります。

この 1/8 が 160m にあたるため、A地点からB地点までの距離は、
160 ÷ (1/8) = 1280m となります。`
  },
  {
    id: 'm_speed_002',
    subject: '算数',
    category: '速さ',
    subCategory: '流水算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '一定の速さで流れる川の上流にP地点、下流にQ地点があります。\n静水時での速さが異なる船Aと船Bがあり、船AがP〜Q間を上るのにかかる時間と、船Bが下るのにかかる時間の比は 5 : 2 です。\nまた、船Aと船Bの静水時の速さの比が 7 : 5 であるとき、川の流れの速さと船Aの静水時の速さの比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '1:7',
    acceptableAnswers: ['1:7', '1：7', '1対7', '１：７'],
    keywords: ['1:7', '流水算', '静水時'],
    knowledgeTag: '流水算・比と時間の積',
    explanation: `【解法】
同じ距離を進むとき、速さの比は「時間の比の逆比」になります。
(船Aの上りの速さ) : (船Bの下りの速さ) = (1/5) : (1/2) = 2 : 5 です。

船Aの上りの速さを ②、船Bの下りの速さを ⑤ とおきます。
船Aと船Bの静水時の速さの比は 7 : 5 なので、Aの静水時を [7]、Bの静水時を [5]、川の流れの速さを (川) とおきます。

上りの速さ：[7] - (川) = ②  … ①
下りの速さ：[5] + (川) = ⑤  … ②

①と②を連立して解くと、
(川の流れの速さ) : (船Aの静水時の速さ) = 1 : 7 と整数の比になります。`
  },
  {
    id: 'm_speed_003',
    subject: '算数',
    category: '速さ',
    subCategory: '比を使う旅人算',
    difficulty: 'standard',
    questionType: 'input',
    question: '兄はA町からB町へ、弟はB町からA町へ向かって同時に歩き始めました。2人は途中のP地点で出会い、そのとき兄は弟より1.2km多く進んでいました。\nその後、兄は出会ってから24分後にB町に着き、弟は出会ってから54分後にA町に着きました。\nA町からB町までの距離は何kmですか。（半角の整数または小数で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6km', '6キロ', '6.0', '６'],
    keywords: ['6', '出会い', '時間の逆比'],
    knowledgeTag: '旅人算・出会い後の時間と速さの比',
    explanation: `【解法】
2人が出会った後の時間比は 兄:弟 = 24分 : 54分 = 4 : 9 です。
同じ区間を進むのにかかった時間比から、兄と弟の速さの比は所要時間の逆比の比率（平方根比）になります。
(兄の速さ) : (弟の速さ) = √54 : √24 = √9 : √4 = 3 : 2

速さの比が 3 : 2 なので、同時に出発して出会うまでに進んだ距離の比も
(A〜P) : (P〜B) = 3 : 2 です。

進んだ距離の差（③ - ② = ①）が 1.2km にあたるので、比の① = 1.2km です。
A町からB町までの全距離は ③ + ② = ⑤ なので、
1.2km × 5 = 6km となります。`
  },

  // 2. 数の性質
  {
    id: 'm_num_001',
    subject: '算数',
    category: '数の性質',
    subCategory: '素因数分解と倍数',
    difficulty: 'standard',
    questionType: 'input',
    question: '1から50までのすべての連続する整数の積（1 × 2 × 3 × … × 50）を計算したとき、その積の末尾（一の位から）には連続して「0」が何個並びますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12個', '１２'],
    keywords: ['12', '素因数分解', '末尾の0'],
    knowledgeTag: '素因数分解・ルジャンドルの公式',
    explanation: `【解法】
積の末尾に「0」が1個つくのは、素因数に「10 = 2 × 5」が1組含まれるときです。
素因数「5」の個数を数えます。

・5の倍数の個数：50 ÷ 5 = 10個
・25（5×5）の倍数の個数：50 ÷ 25 = 2個
合計：10 + 2 = 12個

したがって、末尾には「0」が連続して 12個 並びます。`
  },
  {
    id: 'm_num_002',
    subject: '算数',
    category: '数の性質',
    subCategory: '規則性と周期',
    difficulty: 'standard',
    questionType: 'input',
    question: '分数 5/13 を小数で表したとき、小数第100位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '６'],
    keywords: ['6', '循環小数', '周期'],
    knowledgeTag: '分数の小数変換・循環周期',
    explanation: `【解法】
5 ÷ 13 = 0.384615 384615 …
「3, 8, 4, 6, 1, 5」という 6個の数字が1つのセットとなって繰り返し現れます。

100 ÷ 6 = 16 余り 4
セットの4番目の数字は「6」です。
したがって、小数第100位の数字は 6 となります。`
  },
  {
    id: 'm_num_003',
    subject: '算数',
    category: '数の性質',
    subCategory: '倍数と約数',
    difficulty: 'standard',
    questionType: 'input',
    question: '3桁の整数（100から999まで）のうち、4でも6でも割り切れない整数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '600',
    acceptableAnswers: ['600', '600個', '６００'],
    keywords: ['600', '倍数の個数', 'ベン図'],
    knowledgeTag: '倍数の個数・集合とベン図',
    explanation: `【解法】
3桁の整数全体：999 - 100 + 1 = 900個
4と6の最小公倍数は12です。

・4の倍数：(999 ÷ 4) - (99 ÷ 4) = 249 - 24 = 225個
・6の倍数：(999 ÷ 6) - (99 ÷ 6) = 166 - 16 = 150個
・12の倍数：(999 ÷ 12) - (99 ÷ 12) = 83 - 8 = 75個

4または6で割り切れる個数：225 + 150 - 75 = 300個
割り切れない整数：900 - 300 = 600個 となります。`
  },

  // 3. 平面図形の比（すべて図形描写付き）
  {
    id: 'm_geom_ratio_001',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '相似と面積比',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】上底ADの長さが4cm、下底BCの長さが6cmの台形ABCDがあります。\n図のように、対角線ACとBDの交点をOとしたところ、三角形AODの面積が8cm²でした。\nこのとき、台形ABCD全体の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '50',
    acceptableAnswers: ['50', '50cm2', '50㎠', '５０'],
    keywords: ['50', '相似比', '台形'],
    knowledgeTag: '台形と砂時計相似・面積比',
    figureSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <polygon points="100,40 220,40 280,160 40,160" fill="#f8fafc" stroke="#4f46e5" stroke-width="2.5" />
  <line x1="100" y1="40" x2="280" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="220" y1="40" x2="40" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <polygon points="100,40 220,40 160,88" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="160" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">8 cm²</text>
  <text x="88" y="35" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <text x="225" y="35" font-size="13" font-weight="bold" fill="#1e293b">D</text>
  <text x="25" y="175" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="285" y="175" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <text x="160" y="108" font-size="13" font-weight="bold" fill="#4338ca" text-anchor="middle">O</text>
  <text x="160" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#6366f1">AD = 4cm</text>
  <text x="160" y="182" text-anchor="middle" font-size="12" font-weight="bold" fill="#6366f1">BC = 6cm</text>
</svg>`,
    explanation: `【解法】
AD // BC より、三角形AODと三角形COBは相似です。
相似比は AD : BC = 4 : 6 = 2 : 3 です。
面積比は相似比の2乗なので、
(△AOD) : (△COB) = 2² : 3² = 4 : 9 です。

△AOD = 8cm² より、比の[1]あたり 2cm² です。
よって △COB = 9 × 2 = 18cm² です。

また、高さ共通より △AOB = △AOD × (3/2) = 12cm²、△DOC = 12cm² です。
台形全体の面積 = 8 + 18 + 12 + 12 = 50cm² となります。`
  },
  {
    id: 'm_geom_ratio_002',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '図形の折り返し',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】縦の長さが6cm、横の長さが8cmの長方形ABCDがあります。\n図のように、この長方形を対角線BDで折り返したとき、折り返した辺BCが辺ADと交わる点をPとします。\nこのとき、線分APの長さは何cmですか。（小数または既約分数で答えなさい）',
    options: [],
    answer: '1.75',
    acceptableAnswers: ['1.75', '7/4', '1.75cm', '7/4cm', '1と3/4'],
    keywords: ['1.75', '7/4', '折り返し', '二等辺三角形'],
    knowledgeTag: '長方形の折り返し・二等辺三角形の発見',
    figureSvg: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect x="50" y="40" width="200" height="150" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="50" y1="190" x2="250" y2="40" stroke="#6366f1" stroke-width="2.5" />
  <polygon points="50,190 250,40 214,202" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5" stroke-linejoin="round" />
  <polygon points="50,190 50,40 94,40" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <circle cx="94" cy="40" r="4" fill="#dc2626" />
  <text x="94" y="28" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">P</text>
  <text x="35" y="40" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <text x="260" y="40" font-size="13" font-weight="bold" fill="#1e293b">D</text>
  <text x="35" y="200" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="260" y="200" font-size="13" font-weight="bold" fill="#94a3b8">C</text>
  <text x="225" y="215" font-size="13" font-weight="bold" fill="#7c3aed">C'</text>
  <text x="25" y="120" font-size="12" font-weight="bold" fill="#64748b">6cm</text>
  <text x="150" y="22" font-size="12" font-weight="bold" fill="#64748b">AD = 8cm</text>
</svg>`,
    explanation: `【解法】
折り返し角 ∠PBD = ∠CBD、錯角 ∠PDB = ∠CBD より、
∠PBD = ∠PDB となり、三角形PBDは PB = PD の二等辺三角形です。

PD = x cm とおくと、PB = x cm、AP = 8 - x cm です。
直角三角形ABPにおいて、
6² + (8 - x)² = x²
36 + 64 - 16x + x² = x²
100 = 16x  より  x = 6.25cm

よって AP = 8 - 6.25 = 1.75cm（7/4 cm）となります。`
  },
  {
    id: 'm_geom_ratio_003',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '線分比と面積比',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】三角形ABCにおいて、辺AB上に点D、辺AC上に点Eがあり、AD : DB = 2 : 3、AE : EC = 3 : 4 です。\n図のように、線分BEと線分CDの交点をPとするとき、三角形PBCの面積と三角形ABC全体の面積の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '2:5',
    acceptableAnswers: ['2:5', '2：5', '2対5', '２：５'],
    keywords: ['2:5', 'メネラウス', 'チェバ', 'ベンツの定理'],
    knowledgeTag: '三角形の内部の交点・面積比の連比',
    figureSvg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <polygon points="160,30 50,180 270,180" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
  <line x1="50" y1="180" x2="207" y2="94" stroke="#6366f1" stroke-width="2" />
  <line x1="270" y1="180" x2="116" y2="90" stroke="#6366f1" stroke-width="2" />
  <polygon points="152,130 50,180 270,180" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="160" y="22" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">A</text>
  <text x="35" y="190" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="280" y="190" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <text x="92" y="90" font-size="11" font-weight="bold" fill="#475569">D(2:3)</text>
  <text x="220" y="95" font-size="11" font-weight="bold" fill="#475569">E(3:4)</text>
  <circle cx="152" cy="130" r="3.5" fill="#dc2626" />
  <text x="155" y="125" font-size="13" font-weight="bold" fill="#dc2626">P</text>
</svg>`,
    explanation: `【解法】
三角形の内部の点Pと各頂点を結んでできる面積比の性質を利用します。
直線BEについて、(△PAB) : (△PBC) = AE : EC = 3 : 4
直線CDについて、(△PCA) : (△PBC) = AD : DB = 2 : 3

共通する△PBCを比の12にそろえると、
△PBC = [12]
△PAB = [9]
△PCA = [8]
△ABC全体に対する比を計算すると、
(△PBCの面積) : (△ABC全体の面積) = 2 : 5 となります。`
  },
  {
    id: 'm_geom_ratio_004',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '相似と面積比',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】直角をはさむ2辺の長さが AB = 6cm、BC = 8cm の直角三角形ABCがあります。\n図のように、直角三角形の内部に直角の頂点Bを共有する正方形BDEFをぴったり入れました。\nこのとき、正方形BDEFの1辺の長さは何cmですか。（既約分数で答えなさい）',
    options: [],
    answer: '24/7',
    acceptableAnswers: ['24/7', '24/7cm', '3と3/7', '3と3/7cm'],
    keywords: ['24/7', '直角三角形', '内接正方形'],
    knowledgeTag: '直角三角形と内接正方形の相似比',
    figureSvg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <polygon points="50,30 50,190 250,190" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
  <rect x="50" y="121.4" width="68.6" height="68.6" fill="#fef3c7" stroke="#d97706" stroke-width="2.5" />
  <polyline points="50,180 60,180 60,190" fill="none" stroke="#64748b" stroke-width="1.5" />
  <polyline points="50,131.4 60,131.4 60,121.4" fill="none" stroke="#d97706" stroke-width="1.5" />
  <text x="35" y="30" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <text x="35" y="205" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="260" y="200" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <text x="35" y="125" font-size="12" font-weight="bold" fill="#d97706">D</text>
  <text x="125" y="115" font-size="12" font-weight="bold" fill="#d97706">E</text>
  <text x="120" y="205" font-size="12" font-weight="bold" fill="#d97706">F</text>
  <text x="25" y="80" font-size="12" font-weight="bold" fill="#64748b">6cm</text>
  <text x="150" y="210" font-size="12" font-weight="bold" fill="#64748b">BC = 8cm</text>
</svg>`,
    explanation: `【解法】
正方形の向かい合う辺は平行なので、DE // BC です。
これにより、上の小さな三角形ADEと、直角三角形ABC全体は相似になります。
相似比は AB : BC = 6 : 8 = 3 : 4 です。

正方形BDEFの1辺の長さを x cm とおくと、
DE = x cm、AD = 6 - x cm です。

△ADE ∽ △ABC より、
(6 - x) : x = 3 : 4
3x = 24 - 4x
7x = 24
x = 24/7 cm （3と3/7 cm）

したがって、正方形の1辺の長さは 24/7 cm となります。`
  },
  {
    id: 'm_geom_ratio_005',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '平行四辺形と比',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】平行四辺形ABCDがあり、辺BC上に点Eをとったところ、BE : EC = 2 : 1 となりました。\n図のように、対角線BDと線分AEの交点をFとします。\nこのとき、三角形AFDの面積と、四角形FECDの面積の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
    options: [],
    answer: '9:11',
    acceptableAnswers: ['9:11', '9：11', '9対11'],
    keywords: ['9:11', '平行四辺形', '砂時計相似'],
    knowledgeTag: '平行四辺形内の相似と面積比',
    figureSvg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <polygon points="90,30 290,30 250,170 50,170" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
  <line x1="50" y1="170" x2="290" y2="30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="90" y1="30" x2="183.3" y2="170" stroke="#6366f1" stroke-width="2" />
  <polygon points="90,30 290,30 210,86" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <polygon points="210,86 183.3,170 250,170 290,30" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5" />
  <circle cx="210" cy="86" r="3.5" fill="#dc2626" />
  <text x="212" y="80" font-size="12" font-weight="bold" fill="#dc2626">F</text>
  <text x="75" y="25" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <text x="300" y="25" font-size="13" font-weight="bold" fill="#1e293b">D</text>
  <text x="35" y="180" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="255" y="180" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <text x="180" y="188" font-size="12" font-weight="bold" fill="#6366f1">E(2:1)</text>
</svg>`,
    explanation: `【解法】
AD // BC より、三角形AFDと三角形EFBは相似です。
AD = BC = 2 + 1 = 3 なので、相似比は AD : BE = 3 : 2 です。
面積比は (△AFD) : (△EFB) = 3² : 2² = [9] : [4] です。

DF : FB = 3 : 2 より、△ABF = [4] × (3/2) = [6] です。
△ABD = [9] + [6] = [15] なので、平行四辺形全体は [30] です。
四角形FECDの面積 = 30 - (△AFD[9] + △ABF[6] + △EFB[4]) = [11] です。

したがって、
(三角形AFDの面積) : (四角形FECDの面積) = 9 : 11 となります。`
  },
  {
    id: 'm_geom_ratio_006',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '線分比と面積比',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】四角形ABCDの対角線ACとBDの交点をOとします。\n図のように、三角形ABOの面積が12cm²、三角形BCOの面積が18cm²、三角形CDOの面積が24cm²であるとき、三角形DAOの面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '16',
    acceptableAnswers: ['16', '16cm2', '16㎠', '１６'],
    keywords: ['16', '対角線交点', '面積比'],
    knowledgeTag: '四角形の対角線分割と向かい合う面積の積',
    figureSvg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <polygon points="120,30 260,70 220,170 50,140" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
  <line x1="120" y1="30" x2="220" y2="170" stroke="#6366f1" stroke-width="2" />
  <line x1="260" y1="70" x2="50" y2="140" stroke="#6366f1" stroke-width="2" />
  <text x="110" y="25" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <text x="270" y="70" font-size="13" font-weight="bold" fill="#1e293b">D</text>
  <text x="225" y="185" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <text x="35" y="145" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="145" y="105" font-size="12" font-weight="bold" fill="#dc2626">O</text>
  <text x="100" y="100" font-size="12" font-weight="bold" fill="#2563eb">12 cm²</text>
  <text x="135" y="145" font-size="12" font-weight="bold" fill="#2563eb">18 cm²</text>
  <text x="190" y="120" font-size="12" font-weight="bold" fill="#2563eb">24 cm²</text>
  <text x="180" y="65" font-size="12" font-weight="bold" fill="#d97706">? cm²</text>
</svg>`,
    explanation: `【解法】
対角線の交点Oによって分かれた三角形の底辺比に注目します。
△ABO : △BCO = AO : OC = 12 : 18 = 2 : 3 です。

反対側の三角形でも同じ比が成り立ちます。
△DAO : △CDO = AO : OC = 2 : 3

△CDOの面積が 24cm² なので、
△DAO = 24 × (2/3) = 16cm² となります。
※向かい合う三角形の積（12 × 24 = 18 × △DAO）からも求められます。`
  },

  // 4. 平面図形の面積（すべて図形描写付き）
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
    figureSvg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect x="40" y="40" width="160" height="160" fill="#f8fafc" stroke="#475569" stroke-width="2" />
  <path d="M 40,40 A 160,160 0 0,1 200,200 A 160,160 0 0,1 40,40" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" />
  <text x="25" y="35" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <text x="210" y="35" font-size="13" font-weight="bold" fill="#1e293b">D</text>
  <text x="25" y="215" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="210" y="215" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <text x="120" y="30" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">10 cm</text>
  <text x="25" y="125" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">10 cm</text>
</svg>`,
    explanation: `【解法】
半径10cm、中心角90度のおうぎ形2つの面積の合計から、正方形ABCDの面積を引きます。

・おうぎ形2つの面積：10 × 10 × 3.14 × (1/4) × 2 = 157cm²
・正方形ABCDの面積：10 × 10 = 100cm²
葉っぱ型の面積 = 157 - 100 = 57cm²

※公式「1辺×1辺 × 0.57」＝ 10 × 10 × 0.57 = 57cm²`
  },
  {
    id: 'm_geom_area_002',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '図形の転がり移動',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】1辺の長さが6cmの正三角形ABCが、直線Lの上をすべることなく時計回りに1回転します。\n図のように、頂点Aが動いて描く線の長さは何cmですか。ただし、円周率は3.14とします。（小数で答えなさい）',
    options: [],
    answer: '25.12',
    acceptableAnswers: ['25.12', '25.12cm', '２５．１２'],
    keywords: ['25.12', '転がり移動', '正三角形'],
    knowledgeTag: '正多角形の転がり移動・軌跡の長さ',
    figureSvg: `<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <line x1="20" y1="130" x2="340" y2="130" stroke="#334155" stroke-width="3" />
  <polygon points="50,46 20,130 80,130" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" />
  <text x="50" y="40" font-size="12" font-weight="bold" fill="#7c3aed" text-anchor="middle">A</text>
  <text x="15" y="145" font-size="11" font-weight="bold" fill="#475569">B</text>
  <text x="80" y="145" font-size="11" font-weight="bold" fill="#475569">C</text>
  <path d="M 50,46 A 60,60 0 0,1 140,130" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,3" />
  <circle cx="140" cy="130" r="3" fill="#dc2626" />
  <text x="140" y="145" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">A</text>
  <path d="M 140,130 A 60,60 0 0,1 230,46" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,3" />
  <circle cx="230" cy="46" r="3" fill="#dc2626" />
  <text x="230" y="40" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">A</text>
  <polygon points="230,46 200,130 260,130" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
  <text x="180" y="20" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">頂点Aが描く軌跡（2本の円弧）</text>
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
    question: '【図形問題】面積が72cm²の正六角形ABCDEFがあります。\n図のように、各辺AB, BC, CD, DE, EF, FAの中点を順に結んでできる、内側の正六角形の面積は何cm²ですか。（半角数字で答えなさい）',
    options: [],
    answer: '54',
    acceptableAnswers: ['54', '54cm2', '54㎠', '５４'],
    keywords: ['54', '正六角形', '中点'],
    knowledgeTag: '正六角形の面積分割・中点連結の比',
    figureSvg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <polygon points="210,120 165,198 75,198 30,120 75,42 165,42" fill="#f8fafc" stroke="#475569" stroke-width="2.5" />
  <polygon points="187.5,159 120,198 52.5,159 52.5,81 120,42 187.5,81" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5" />
  <text x="120" y="125" font-size="13" font-weight="bold" fill="#6d28d9" text-anchor="middle">面積 = ? cm²</text>
  <text x="120" y="25" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">外側の正六角形 = 72 cm²</text>
</svg>`,
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
    figureSvg: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <path d="M 80,60 A 100,100 0 0,0 240,180 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
  <path d="M 80,60 A 60,60 0 0,0 80,180 A 100,100 0 0,1 80,60" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <path d="M 80,180 A 80,80 0 0,0 240,180 A 100,100 0 0,1 80,180" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <polygon points="80,60 80,180 240,180" fill="#ede9fe" stroke="#4f46e5" stroke-width="2.5" />
  <polyline points="80,170 90,170 90,180" fill="none" stroke="#4f46e5" stroke-width="1.5" />
  <text x="65" y="55" font-size="13" font-weight="bold" fill="#1e293b">B</text>
  <text x="65" y="195" font-size="13" font-weight="bold" fill="#1e293b">A</text>
  <text x="245" y="195" font-size="13" font-weight="bold" fill="#1e293b">C</text>
  <text x="40" y="120" font-size="12" font-weight="bold" fill="#64748b">6cm</text>
  <text x="150" y="200" font-size="12" font-weight="bold" fill="#64748b">8cm</text>
  <text x="175" y="110" font-size="12" font-weight="bold" fill="#64748b">10cm</text>
  <text x="160" y="25" font-size="12" font-weight="bold" fill="#d97706" text-anchor="middle">三日月部分の面積 = ? cm²</text>
</svg>`,
    explanation: `【解法】
直角三角形の各辺を直径とする「ヒポクラテスの三日月」の有名問題です。

三日月2つの面積の和は、直角三角形ABCの面積そのものと等しくなります。
(直角三角形ABCの面積) = 6 × 8 ÷ 2 = 24cm²

よって、三日月の面積の合計は 24cm² となります。`
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
    figureSvg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <path d="M 60,100 A 40,40 0 0,1 100,60 L 200,60 A 40,40 0 0,1 240,100 L 240,200 A 40,40 0 0,1 200,240 L 100,240 A 40,40 0 0,1 60,200 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <rect x="100" y="100" width="100" height="100" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <circle cx="80" cy="150" r="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" />
  <circle cx="80" cy="150" r="3" fill="#7c3aed" />
  <line x1="80" y1="150" x2="100" y2="150" stroke="#7c3aed" stroke-width="1.5" />
  <text x="85" y="142" font-size="10" font-weight="bold" fill="#7c3aed">2cm</text>
  <text x="150" y="155" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">10cm正方形</text>
  <line x1="100" y1="60" x2="100" y2="100" stroke="#d97706" stroke-dasharray="3,3" />
  <line x1="200" y1="60" x2="200" y2="100" stroke="#d97706" stroke-dasharray="3,3" />
  <line x1="100" y1="200" x2="100" y2="240" stroke="#d97706" stroke-dasharray="3,3" />
  <line x1="200" y1="200" x2="200" y2="240" stroke="#d97706" stroke-dasharray="3,3" />
  <text x="150" y="25" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">円が通過した部分全体の面積</text>
</svg>`,
    explanation: `【解法】
円の直径は 2 × 2 = 4cm なので、通過する幅は 4cm です。

1. 正方形の4辺の外側にできる長方形 4個：
4 × 10 × 4 = 160cm²

2. 正方形の4隅にできるおうぎ形 4個（合わせると半径4cmの円1個分）：
4 × 4 × 3.14 = 50.24cm²

通過した部分全体の面積 = 160 + 50.24 = 210.24cm² となります。`
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
    figureSvg: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect x="30" y="30" width="180" height="180" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
  <path d="M 30,120 A 90,90 0 0,1 210,120 A 90,90 0 0,1 30,120" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <path d="M 120,30 A 90,90 0 0,1 120,210 A 90,90 0 0,1 120,30" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <path d="M 120,30 A 90,90 0 0,1 210,120 A 90,90 0 0,1 120,210 A 90,90 0 0,1 30,120 A 90,90 0 0,1 120,30" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="20" y="25" font-size="12" font-weight="bold" fill="#1e293b">A</text>
  <text x="220" y="25" font-size="12" font-weight="bold" fill="#1e293b">D</text>
  <text x="20" y="225" font-size="12" font-weight="bold" fill="#1e293b">B</text>
  <text x="220" y="225" font-size="12" font-weight="bold" fill="#1e293b">C</text>
  <text x="120" y="20" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">12 cm</text>
</svg>`,
    explanation: `【解法】
(花びら4枚の面積) = (半径6cmの半円 4個の面積) - (正方形ABCDの面積)

・半径6cmの半円4個（＝半径6cmの円2個分）：
6 × 6 × 3.14 × 2 = 72 × 3.14 = 226.08cm²

・正方形ABCDの面積：
12 × 12 = 144cm²

花びら部分の面積の合計 = 226.08 - 144 = 82.08cm² となります。`
  }
];

// 1. math_pilot_pack.json に保存
const mathPackPath = path.resolve('src/data/math_pilot_pack.json');
fs.writeFileSync(mathPackPath, JSON.stringify(MATH_PILOT_QUESTIONS, null, 2), 'utf8');
console.log(`Saved ${MATH_PILOT_QUESTIONS.length} math pilot questions to ${mathPackPath}`);

// 2. sampleQuiz.json にマージ（重複IDは上書き）
const sampleQuizPath = path.resolve('src/data/sampleQuiz.json');
const sampleData = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf8'));
const existingQuestions = sampleData.questions || sampleData;

const existingIds = new Set(MATH_PILOT_QUESTIONS.map(q => q.id));
const filteredExisting = existingQuestions.filter(q => !existingIds.has(q.id));
const updatedQuestions = [...filteredExisting, ...MATH_PILOT_QUESTIONS];

const outputData = Array.isArray(sampleData) ? updatedQuestions : { ...sampleData, questions: updatedQuestions };
fs.writeFileSync(sampleQuizPath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`Merged into sampleQuiz.json. Total questions: ${updatedQuestions.length}`);
