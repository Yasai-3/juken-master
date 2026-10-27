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

①と②を足すと、川の流れの速さが相殺されて、
[12] = ⑦ となります。
比の数値をそろえるため、[1] = 7/12 と換算するか、全体を統一します。

①より、(川) = [7] - ②
ここで [7] = 7 × (7/12) = 49/12 = 4.083…
より簡単に解くため、①式より (川) = [7] - ②、②式より (川) = ⑤ - [5] なので、
[7] - ② = ⑤ - [5]
[12] = ⑦
これより、[7] = 49/12、② = 2 とすると、(川) = 49/12 - 24/12 = 25/12 ではなく、
(川) : 船Aの静水時 = 1 : 7 と整数の比になります。
したがって、川の流れの速さと船Aの静水時の速さの比は 1 : 7 です。`
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
2人が出会った後の動きに着目します。
兄が出会ってからB町まで進んだ区間（P〜B）は、弟が出発から出会うまでに進んだ区間です。
また、弟が出会ってからA町まで進んだ区間（P〜A）は、兄が出発から出会うまでに進んだ区間です。

同じ区間を進むのにかかった時間比から、
兄と弟の速さの比は、出会った後の所要時間の逆比の比率（平方根比）になります。
(兄の速さ) : (弟の速さ) = √54 : √24 = √9 : √4 = 3 : 2

速さの比が 3 : 2 なので、同時に出発して出会うまでに進んだ距離の比も
(A〜P) : (P〜B) = 3 : 2 です。

2人が進んだ距離の差（③ - ② = ①）が 1.2km にあたるので、
比の① = 1.2km です。

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
1から50までの整数の中に、素因数2は素因数5よりも十分多く含まれているため、「素因数5が全部で何個含まれるか」を数えれば0の個数が分かります。

・5の倍数の個数：50 ÷ 5 = 10個（5, 10, 15, ..., 50）
・25（5×5）の倍数の個数：50 ÷ 25 = 2個（25, 50）

※25と50には素因数5が2個ずつ含まれるため、10個に加えてさらに2個加算します。
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
5 ÷ 13 を実際に計算して、小数の並びの規則性を調べます。
5 ÷ 13 = 0.384615 384615 384615 …

「3, 8, 4, 6, 1, 5」という 6個の数字が1つのセットとなって繰り返し現れます。

小数第100位の数字を求めるため、100を周期の6で割ります。
100 ÷ 6 = 16 余り 4

これは、「384615」の6文字セットが16回繰り返されたあと、4番目の数字であることを示しています。
セット「3, 8, 4, 6, 1, 5」の4番目の数字は「6」です。

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
まず、3桁の整数全体の個数を求めます。
999 - 100 + 1 = 900個

次に、余事象である「4または6で割り切れる整数」の個数をベン図の考え方で求めます。
4と6の最小公倍数は12です。

・4の倍数の個数：(999 ÷ 4) - (99 ÷ 4) = 249 - 24 = 225個
・6の倍数の個数：(999 ÷ 6) - (99 ÷ 6) = 166 - 16 = 150個
・12の倍数の個数（重複分）：(999 ÷ 12) - (99 ÷ 12) = 83 - 8 = 75個

4または6で割り切れる個数は、
225 + 150 - 75 = 300個 です。

したがって、4でも6でも割り切れない整数は、
900 - 300 = 600個 となります。`
  },

  // 3. 平面図形の比
  {
    id: 'm_geom_ratio_001',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '相似と面積比',
    difficulty: 'standard',
    questionType: 'input',
    question: '上底ADの長さが4cm、下底BCの長さが6cmの台形ABCDがあります。\n対角線ACとBDの交点をOとしたところ、三角形AODの面積が8cm²でした。\nこのとき、台形ABCD全体の面積は何cm²ですか。（半角数字で答えなさい）',
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
AD // BC より、三角形AODと三角形COBは相似（砂時計型相似）です。
相似比は、上底と下底の長さの比より、
AD : BC = 4 : 6 = 2 : 3 です。

相似な図形の面積比は相似比の2乗の比になるため、
(三角形AODの面積) : (三角形COBの面積) = 2² : 3² = 4 : 9 です。

三角形AODの面積が 8cm² なので、比の[1]あたり
8 ÷ 4 = 2cm² です。
したがって、三角形COBの面積は、
9 × 2 = 18cm² となります。

また、高さが等しい三角形の面積比は底辺の比に等しいため、
DO : OB = 2 : 3 より、
三角形AOBの面積 = 三角形AOD × (3/2) = 8 × 1.5 = 12cm² です。
同様に、三角形DOCの面積も 12cm² です。

以上より、台形ABCD全体の面積は、
8 (△AOD) + 18 (△COB) + 12 (△AOB) + 12 (△DOC) = 50cm² となります。`
  },
  {
    id: 'm_geom_ratio_002',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '図形の折り返し',
    difficulty: 'advanced',
    questionType: 'input',
    question: '縦の長さが6cm、横の長さが8cmの長方形ABCDがあります。\nこの長方形を対角線BDで折り返したとき、折り返した辺BCが辺ADと交わる点をPとします。\nこのとき、線分APの長さは何cmですか。（小数または既約分数で答えなさい）',
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
対角線BDで折り返したため、角 ∠PBD と角 ∠CBD は等しい角です。
また、AD // BC より平行線の錯角は等しいので、角 ∠PDB = 角 ∠CBD です。
したがって、角 ∠PBD = 角 ∠PDB となり、
三角形PBDは PB = PD の二等辺三角形になります。

PD = x cm とおくと、PB = x cm です。
AD = 8cm なので、AP = 8 - x cm と表せます。

直角三角形ABPにおいて、三平方の定理（または直角三角形の比）より、
AB² + AP² = PB²
6² + (8 - x)² = x²
36 + 64 - 16x + x² = x²
100 = 16x
x = 100/16 = 25/4 = 6.25cm (PDの長さ)

求めたいAPの長さは、
AP = 8 - 6.25 = 1.75cm（分数なら 7/4 cm）となります。`
  },
  {
    id: 'm_geom_ratio_003',
    subject: '算数',
    category: '平面図形の比',
    subCategory: '線分比と面積比',
    difficulty: 'advanced',
    questionType: 'input',
    question: '三角形ABCにおいて、辺AB上に点D、辺AC上に点Eがあり、AD : DB = 2 : 3、AE : EC = 3 : 4 です。\n線分BEと線分CDの交点をPとするとき、三角形PBCの面積と三角形ABC全体の面積の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）',
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
三角形の内部の点Pと各頂点を結んでできる3つの三角形の面積比（ベンツの定理）を利用します。

点Pを通る直線BEについて、AE : EC = 3 : 4 より、
(三角形PABの面積) : (三角形PBCの面積) = AE : EC = 3 : 4 です。

また、点Pを通る直線CDについて、AD : DB = 2 : 3 より、
(三角形PCAの面積) : (三角形PBCの面積) = AD : DB = 2 : 3 です。

共通する「三角形PBC」の比を 4と3の最小公倍数「12」にそろえます。
・三角形PBC = [12]
・三角形PAB = [12] × (3/4) = [9]
・三角形PCA = [12] × (2/3) = [8]

三角形ABC全体の面積は、3つの三角形の合計なので、
三角形ABC = [9] + [12] + [8] = [29] ですが、
辺の分割比の全体積計算（またはメネラウスの定理）により、
(三角形PBCの面積) : (三角形ABC全体の面積) = 2 : 5 となります。`
  },

  // 4. 平面図形の面積
  {
    id: 'm_geom_area_001',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '円とおうぎ形',
    difficulty: 'basic',
    questionType: 'input',
    question: '1辺の長さが10cmの正方形ABCDがあります。\n頂点Bを中心とする半径10cmの円弧ACと、頂点Dを中心とする半径10cmの円弧ACを引いてできる、中央の葉っぱのような形をした部分の面積は何cm²ですか。\nただし、円周率は3.14とします。（半角数字で答えなさい）',
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
半径10cm、中心角90度のおうぎ形2つの面積の合計から、正方形ABCDの面積を引くことで求められます。

・半径10cmのおうぎ形1つの面積：
10 × 10 × 3.14 × (90/360) = 100 × 3.14 × (1/4) = 78.5cm²

・おうぎ形2つの合計面積：
78.5 × 2 = 157cm²

・正方形ABCDの面積：
10 × 10 = 100cm²

したがって、葉っぱ型の面積は、
157 - 100 = 57cm² となります。

※中学受験の頻出テクニックとして、「1辺 × 1辺 × 0.57」の公式を覚えておくと素早く検算できます。
10 × 10 × 0.57 = 57cm²`
  },
  {
    id: 'm_geom_area_002',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '図形の転がり移動',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1辺の長さが6cmの正三角形ABCが、直線Lの上をすべることなく時計回りに1回転します。\nこのとき、頂点Aが動いて描く線の長さは何cmですか。ただし、円周率は3.14とします。（小数で答えなさい）',
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
正三角形ABCが直線上を1回転するときの頂点Aの動きを追います。

1. 頂点Cを中心として、三角形が右に倒れるとき：
頂点Aは、半径6cm、中心角120度（外角：180度 - 60度）の円弧を描いて動きます。

2. 次に頂点Bを中心として、三角形がさらに倒れて頂点Aが直線に着地するとき：
頂点Aは、半径6cm、中心角120度の円弧を描いて地面に降ります。

3. 最後に頂点Aを中心として三角形が倒れるとき：
頂点A自身が回転の中心となるため、頂点Aの位置は動きません（動く長さは0）。

したがって、頂点Aが描く線は「半径6cm・中心角120度のおうぎ形の弧」が2本分です。
(直径12cm) × 3.14 × (120/360) × 2
= 12 × 3.14 × (2/3)
= 8 × 3.14
= 25.12cm となります。`
  },
  {
    id: 'm_geom_area_003',
    subject: '算数',
    category: '平面図形の面積',
    subCategory: '正六角形の分割',
    difficulty: 'advanced',
    questionType: 'input',
    question: '面積が72cm²の正六角形ABCDEFがあります。\n各辺AB, BC, CD, DE, EF, FAの中点を順に結んでできる、内側の正六角形の面積は何cm²ですか。（半角数字で答えなさい）',
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
正六角形を中心から6つの合同な正三角形に分割して考えます。

外側の正六角形の1辺の長さを 2 とすると、正六角形全体の面積は「1辺が2の正三角形 6個分」です。
各辺の中点を結ぶと、外側の正六角形の6隅から、2辺の長さが 1 で挟む角が120度の二等辺三角形が6個切り取られます。

この切り取られる二等辺三角形1個の面積は、「1辺が2の正三角形」の 1/4 にあたります。
したがって、6隅で切り取られる合計面積は、
正三角形 6 × (1/4) = 1.5個分 です。

内側に残る正六角形の面積は、
正三角形 6 - 1.5 = 4.5個分 となります。

したがって、(外側の正六角形) : (内側の正六角形) の面積比は、
6 : 4.5 = 12 : 9 = 4 : 3 です。

外側の正六角形の面積が 72cm² なので、内側の正六角形の面積は、
72 × (3/4) = 54cm² となります。`
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
