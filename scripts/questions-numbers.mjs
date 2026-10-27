// 数の性質分野（素因数分解・倍数約数・余り・周期・N進法・群数列など：全22問）

export const NUMBERS_QUESTIONS = [
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
  {
    id: 'm_num_004',
    subject: '算数',
    category: '数の性質',
    subCategory: '約数の個数',
    difficulty: 'standard',
    questionType: 'input',
    question: '360の約数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '24',
    acceptableAnswers: ['24', '24個', '２４'],
    keywords: ['24', '約数の個数', '素因数分解'],
    knowledgeTag: '約数の個数の公式',
    explanation: `【解法】
360を素因数分解します。
360 = 2³ × 3² × 5¹
約数の個数は、各素因数の指数に1を足してかけ合わせたものです。
(3 + 1) × (2 + 1) × (1 + 1) = 4 × 3 × 2 = 24個 となります。`
  },
  {
    id: 'm_num_005',
    subject: '算数',
    category: '数の性質',
    subCategory: '平方数と約数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から100までの整数の中で、約数の個数が奇数個である数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10個', '１０'],
    keywords: ['10', '奇数個', '平方数'],
    knowledgeTag: '約数が奇数個＝平方数',
    explanation: `【解法】
約数は通常ペア（例：12なら 1×12, 2×6, 3×4）で現れるため偶数個になります。
約数が奇数個になるのは、ペアが自分自身同士（例：3×3=9）になる「平方数（整数の2乗）」だけです。
1から100までの平方数は、
1², 2², 3², …, 10² の 10個 です。`
  },
  {
    id: 'm_num_006',
    subject: '算数',
    category: '数の性質',
    subCategory: '余りの周期性',
    difficulty: 'advanced',
    questionType: 'input',
    question: '7を2024回かけた数（7の2024乗）の一の位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '1',
    acceptableAnswers: ['1', '１'],
    keywords: ['1', '一の位', '周期'],
    knowledgeTag: '累乗の一の位・周期性',
    explanation: `【解法】
7を繰り返し掛けたときの一の位の数字の規則性を調べます。
7¹ = 7
7² = 49 → 9
7³ = 343 → 3
7⁴ = 2401 → 1
7⁵ = 16807 → 7
「7, 9, 3, 1」の 4個の数字が周期4で繰り返されます。
2024 ÷ 4 = 506 余り 0（割り切れる）
周期の最後の数字なので、一の位は 1 となります。`
  },
  {
    id: 'm_num_007',
    subject: '算数',
    category: '数の性質',
    subCategory: '余りと倍数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '5で割ると2余り、7で割ると4余る正の整数のうち、最も小さい整数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '32',
    acceptableAnswers: ['32', '３２'],
    keywords: ['32', '余り', '不足'],
    knowledgeTag: '不足に注目する倍数問題',
    explanation: `【解法】
「5で割ると2余る」＝「あと3あれば5で割り切れる（3不足）」
「7で割ると4余る」＝「あと3あれば7で割り切れる（3不足）」
どちらも「あと3あれば割り切れる」という共通点があります。
求める数は、5と7の公倍数より3小さい数です。
5と7の最小公倍数は35なので、
最も小さい正の整数は 35 - 3 = 32 となります。`
  },
  {
    id: 'm_num_008',
    subject: '算数',
    category: '数の性質',
    subCategory: 'N進法',
    difficulty: 'standard',
    questionType: 'input',
    question: '普段使っている10進法の数「53」を、2進法で表しなさい。（半角数字で答えなさい）',
    options: [],
    answer: '110101',
    acceptableAnswers: ['110101', '１１０１０１'],
    keywords: ['110101', '2進法', 'N進法'],
    knowledgeTag: '10進法から2進法への変換',
    explanation: `【解法】
53を2で繰り返し割り、余りを下から順に並べます。
53 ÷ 2 = 26 余り 1
26 ÷ 2 = 13 余り 0
13 ÷ 2 = 6  余り 1
6  ÷ 2 = 3  余り 0
3  ÷ 2 = 1  余り 1
1  ÷ 2 = 0  余り 1
下から順に並べると「110101」となります。
（検算：32 + 16 + 4 + 1 = 53）`
  },
  {
    id: 'm_num_009',
    subject: '算数',
    category: '数の性質',
    subCategory: '素因数分解',
    difficulty: 'standard',
    questionType: 'input',
    question: '180にできるだけ小さい正の整数Nをかけて、ある整数の2乗（平方数）にしたいです。Nはいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '5',
    acceptableAnswers: ['5', '５'],
    keywords: ['5', '平方数', '素因数分解'],
    knowledgeTag: '素因数分解と平方数の条件',
    explanation: `【解法】
180を素因数分解します。
180 = 2² × 3² × 5¹
整数の2乗（平方数）になるには、素因数の指数がすべて偶数でなければなりません。
2の指数は2（偶数）、3の指数は2（偶数）ですが、5の指数は1（奇数）です。
したがって、5をあと1個かければ指数がすべて偶数（2² × 3² × 5² = 30²）になります。
よって N = 5 となります。`
  },
  {
    id: 'm_num_010',
    subject: '算数',
    category: '数の性質',
    subCategory: '最大公約数と最小公倍数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '2つの正の整数AとB（A < B）があります。AとBの最大公約数は12、最小公倍数は144です。このようなAとBの組は何組ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '2',
    acceptableAnswers: ['2', '2組', '２'],
    keywords: ['2', '最大公約数', '最小公倍数'],
    knowledgeTag: '最大公約数と最小公倍数の積の性質',
    explanation: `【解法】
A = 12 × a、B = 12 × b（aとbは互いに素な整数、a < b）とおきます。
最小公倍数 = 12 × a × b = 144
a × b = 144 ÷ 12 = 12
かけて12になり、互いに素な整数の組(a, b)を探します。
・(1, 12) → A=12, B=144（OK）
・(2, 6) → 2と6は互いに素でないので不可
・(3, 4) → A=36, B=48（OK）
条件を満たす組は 2組 となります。`
  },
  {
    id: 'm_num_011',
    subject: '算数',
    category: '数の性質',
    subCategory: '約数の総和',
    difficulty: 'advanced',
    questionType: 'input',
    question: '72のすべての約数の和を求めなさい。（半角数字で答えなさい）',
    options: [],
    answer: '195',
    acceptableAnswers: ['195', '１９５'],
    keywords: ['195', '約数の和', '素因数分解'],
    knowledgeTag: '約数の総和の公式',
    explanation: `【解法】
72 = 2³ × 3²
約数の総和の公式：
(1 + 2 + 4 + 8) × (1 + 3 + 9)
= 15 × 13
= 195 となります。`
  },
  {
    id: 'm_num_012',
    subject: '算数',
    category: '数の性質',
    subCategory: '群数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '分数が次のように並んでいます。\n1/1,  1/2, 2/1,  1/3, 2/2, 3/1,  1/4, 2/3, 3/2, 4/1, …\nこの数列の50番目の分数は何ですか。（半角の分数で答えなさい。例：3/4）',
    options: [],
    answer: '5/6',
    acceptableAnswers: ['5/6', '５／６'],
    keywords: ['5/6', '群数列', '分数数列'],
    knowledgeTag: '分数の群数列・項数の計算',
    explanation: `【解法】
(分子 + 分母) の値ごとにグループ（群）に分けます。
第1群：1/1（和2、1個）
第2群：1/2, 2/1（和3、2個）
第3群：1/3, 2/2, 3/1（和4、3個）
第n群には n個の分数が含まれます。
1からnまでの和が50に近づくnを探します。
1から9までの和 = (1 + 9) × 9 ÷ 2 = 45個
第9群の最後が 45番目 です。
50番目は、第10群の 50 - 45 = 5番目 の分数です。
第10群は分子と分母の和が 11（1+10）で、分子が1から順に増えます。
5番目の分数は 分子が5、分母が 11 - 5 = 6 なので 5/6 となります。`
  },
  {
    id: 'm_num_013',
    subject: '算数',
    category: '数の性質',
    subCategory: '規則性と周期',
    difficulty: 'standard',
    questionType: 'input',
    question: '次のように並んだ数の列があります。\n1, 2, 4, 7, 11, 16, 22, …\nこの数列の第20番目の数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '191',
    acceptableAnswers: ['191', '１９１'],
    keywords: ['191', '階差数列', '三角数'],
    knowledgeTag: '階差数列と一般項',
    explanation: `【解法】
隣り合う数の差を調べると、
+1, +2, +3, +4, +5, +6, …
と1ずつ増えています（階差数列）。
第20番目の数は、初項1に「1から19までの和」を足したものです。
1から19までの和 = (1 + 19) × 19 ÷ 2 = 190
第20項 = 1 + 190 = 191 となります。`
  },
  {
    id: 'm_num_014',
    subject: '算数',
    category: '数の性質',
    subCategory: '余りと周期',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある規則で並んだ数列があります。1, 1, 2, 3, 5, 8, 13, 21, …（前の2つの数の和が次の数になるフィボナッチ数列）。\nこの数列の数を奇数は「奇」、偶数は「偶」と表したとき、第100番目の数は奇数ですか偶数ですか。（「奇数」または「偶数」と答えなさい）',
    options: [],
    answer: '奇数',
    acceptableAnswers: ['奇数', '奇'],
    keywords: ['奇数', '偶奇性', 'フィボナッチ'],
    knowledgeTag: 'フィボナッチ数列の偶奇周期',
    explanation: `【解法】
偶数・奇数のパターンを調べます。
1(奇), 1(奇), 2(偶), 3(奇), 5(奇), 8(偶), 13(奇), 21(奇), 34(偶), …
「奇, 奇, 偶」の 3個周期 で繰り返されます。
100 ÷ 3 = 33 余り 1
余り1なので、周期の1番目である「奇数」となります。`
  },
  {
    id: 'm_num_015',
    subject: '算数',
    category: '数の性質',
    subCategory: '不定方程式',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1個80円のりんごと、1個130円の梨を何個かずつ買って、代金の合計をちょうど1500円にしたいです。どちらも少なくとも1個は買うとき、りんごと梨はそれぞれ何個買えばよいですか。りんごの個数を答えなさい。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '9個', '９'],
    keywords: ['9', '不定方程式', '整数解'],
    knowledgeTag: '不定方程式・倍数とお金の条件',
    explanation: `【解法】
りんごをx個、梨をy個（x, yは正の整数）とします。
80x + 130y = 1500
両辺を10で割ると、
8x + 13y = 150
8x = 150 - 13y
8xは偶数なので、150 - 13y も偶数 → yは偶数です。
・y = 2 のとき：8x = 150 - 26 = 124（8で割り切れない）
・y = 4 のとき：8x = 150 - 52 = 98（8で割り切れない）
・y = 6 のとき：8x = 150 - 78 = 72 → x = 9（適する！）
・y = 8 のとき：8x = 150 - 104 = 46（割り切れない）
・y = 10 のとき：8x = 150 - 130 = 20（割り切れない）
したがって、りんごは 9個、梨は 6個 です。`
  },
  {
    id: 'm_num_016',
    subject: '算数',
    category: '数の性質',
    subCategory: 'N進法',
    difficulty: 'advanced',
    questionType: 'input',
    question: '0, 1, 2, 3 の4種類の数字だけを使ってできる整数を、小さい順に並べます。\n1, 2, 3, 10, 11, 12, 13, 20, …\nこのとき、100番目の数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '1210',
    acceptableAnswers: ['1210', '１２１０'],
    keywords: ['1210', '4進法', 'N進法'],
    knowledgeTag: '4種類の数字で表す数・4進法',
    explanation: `【解法】
0, 1, 2, 3 の4つの数字を使った位取り記数法なので、これは「4進法」そのものです。
10進法の「100」を4進法に変換します。
100 ÷ 4 = 25 余り 0
25 ÷ 4 = 6 余り 1
6 ÷ 4 = 1 余り 2
1 ÷ 4 = 0 余り 1
下から並べると「1210」となります。`
  },
  {
    id: 'm_num_017',
    subject: '算数',
    category: '数の性質',
    subCategory: '素因数分解',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から100までの整数をすべてかけた積（100!）は、素数3で最大何回割り切れますか。（半角数字で答えなさい）',
    options: [],
    answer: '48',
    acceptableAnswers: ['48', '48回', '４８'],
    keywords: ['48', 'ルジャンドル', '素因数'],
    knowledgeTag: '階乗の素因数の個数',
    explanation: `【解法】
100の中に含まれる素因数3の個数を数えます。
・3の倍数：100 ÷ 3 = 33個
・9（3²）の倍数：100 ÷ 9 = 11個
・27（3³）の倍数：100 ÷ 27 = 3個
・81（3⁴）の倍数：100 ÷ 81 = 1個
合計 = 33 + 11 + 3 + 1 = 48個
したがって、最大 48回 割り切れます。`
  },
  {
    id: 'm_num_018',
    subject: '算数',
    category: '数の性質',
    subCategory: '倍数と約数',
    difficulty: 'standard',
    questionType: 'input',
    question: '1から100までの整数のうち、約数がちょうど3個ある数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4個', '４'],
    keywords: ['4', '約数が3個', '素数の2乗'],
    knowledgeTag: '約数が3個＝素数の2乗',
    explanation: `【解法】
約数がちょうど3個ある数は、「素数の2乗」に限られます。
（素数pの約数は 1, p, p² の3個）
1から100までの素数の2乗を探します。
・2² = 4
・3² = 9
・5² = 25
・7² = 49
（11² = 121 で100を超える）
したがって、全部で 4個 となります。`
  },
  {
    id: 'm_num_019',
    subject: '算数',
    category: '数の性質',
    subCategory: '中国剰余定理',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある整数Xを3で割ると1余り、5で割ると2余り、7で割ると3余ります。このような正の整数Xのうち、最も小さい数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '52',
    acceptableAnswers: ['52', '５２'],
    keywords: ['52', '中国剰余', 'あまり'],
    knowledgeTag: '余りの異なる連立合同式',
    explanation: `【解法】
5で割ると2余り、7で割ると3余る数を探します。
7で割ると3余る数：3, 10, 17, 24, 31, 38, …
このうち5で割ると2余る最小の数は 17 です。
5と7の公倍数は35なので、この条件を満たす数は 17, 52, 87, … です。
この中から「3で割ると1余る数」を探します。
・17 ÷ 3 = 5 余り 2
・52 ÷ 3 = 17 余り 1（条件を満たす！）
したがって、最も小さい正の整数は 52 となります。`
  },
  {
    id: 'm_num_020',
    subject: '算数',
    category: '数の性質',
    subCategory: '倍数の判定法',
    difficulty: 'standard',
    questionType: 'input',
    question: '4桁の整数「5A3B」が9でも4でも割り切れるとき、2桁の数「AB」として考えられる最も大きい数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '82',
    acceptableAnswers: ['82', '８２'],
    keywords: ['82', '倍数判定', '各位の和'],
    knowledgeTag: '4の倍数判定と9の倍数判定',
    explanation: `【解法】
・4の倍数の条件：下2桁「3B」が4の倍数
3Bが4の倍数になるのは B = 2 または B = 6 です。
・9の倍数の条件：各位の和（5 + A + 3 + B = A + B + 8）が9の倍数
1. B = 2 のとき：A + 2 + 8 = A + 10 が9の倍数 → A = 8（AB = 82）
2. B = 6 のとき：A + 6 + 8 = A + 14 が9の倍数 → A = 4（AB = 46）
最も大きい数は 82 となります。`
  },
  {
    id: 'm_num_021',
    subject: '算数',
    category: '数の性質',
    subCategory: '周期性と倍数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から200までの整数をすべて足し合わせた合計はいくらですか。（半角数字で答えなさい）',
    options: [],
    answer: '20100',
    acceptableAnswers: ['20100', '２０１００'],
    keywords: ['20100', '等差数列の和', 'ガウス'],
    knowledgeTag: '連続整数の和（ガウスの公式）',
    explanation: `【解法】
等差数列の和の公式：(最初 + 最後) × 個数 ÷ 2
合計 = (1 + 200) × 200 ÷ 2
= 201 × 100
= 20100 となります。`
  },
  {
    id: 'm_num_022',
    subject: '算数',
    category: '数の性質',
    subCategory: '循環小数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '循環小数 0.272727… を最も簡単な既約分数で表しなさい。（半角の分数で答えなさい。例：3/4）',
    options: [],
    answer: '3/11',
    acceptableAnswers: ['3/11', '３／１１'],
    keywords: ['3/11', '循環小数', '既約分数'],
    knowledgeTag: '循環小数の分数変換',
    explanation: `【解法】
X = 0.272727… とおきます。
100X = 27.272727…
2式の差をとると、
99X = 27
X = 27/99
分子と分母を9で約分すると、3/11 となります。`
  }
];
