// 数の性質・規則性 追加50問 (m_num_031 〜 m_num_080)

export const EXTRA_NUMBERS = [
  // 1. 素因数分解・約数・平方数 (12問)
  {
    id: 'm_num_031',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '素因数分解',
    difficulty: 'standard',
    questionType: 'input',
    question: '120を素因数分解したとき、素因数2の個数は何個ですか。（半角数字で答えなさい）',
    options: [],
    answer: '3',
    acceptableAnswers: ['3', '3個', '３'],
    keywords: ['3', '素因数2', '120'],
    knowledgeTag: '素因数分解の基本',
    explanation: `【解法】
120 = 2³ × 3¹ × 5¹
素因数2の個数は 3個 です。`
  },
  {
    id: 'm_num_032',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '約数の個数',
    difficulty: 'standard',
    questionType: 'input',
    question: '72の正の約数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12個', '１２'],
    keywords: ['12', '約数の個数', '72'],
    knowledgeTag: '約数の個数の公式',
    explanation: `【解法】
72 = 2³ × 3²
約数の個数 = (3 + 1) × (2 + 1) = 4 × 3 = 12個 となります。`
  },
  {
    id: 'm_num_033',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '平方数',
    difficulty: 'standard',
    questionType: 'input',
    question: '1から50までの整数の中で、平方数（ある整数の2乗）は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '7',
    acceptableAnswers: ['7', '7個', '７'],
    keywords: ['7', '平方数', '1から50'],
    knowledgeTag: '平方数の個数（1^2から7^2）',
    explanation: `【解法】
1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49（8²=64 > 50）
したがって、全部で 7個 です。`
  },
  {
    id: 'm_num_034',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '約数の和',
    difficulty: 'advanced',
    questionType: 'input',
    question: '28の自分自身を除くすべての約数の和はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '28',
    acceptableAnswers: ['28', '２８'],
    keywords: ['28', '完全数', '約数の和'],
    knowledgeTag: '完全数の性質（約数の和が自分自身に等しい）',
    explanation: `【解法】
28の約数は 1, 2, 4, 7, 14, 28 です。
自分自身（28）を除く約数の和 = 1 + 2 + 4 + 7 + 14 = 28
自分自身と等しくなるこのような数を「完全数」と呼びます。`
  },
  {
    id: 'm_num_035',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '公約数と公倍数',
    difficulty: 'standard',
    questionType: 'input',
    question: '48と72の最大公約数はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '24',
    acceptableAnswers: ['24', '２４'],
    keywords: ['24', '最大公約数', '連除法'],
    knowledgeTag: '最大公約数（GCD）の求め方',
    explanation: `【解法】
48 = 24 × 2、72 = 24 × 3
共通する最大の約数は 24 となります。`
  },
  {
    id: 'm_num_036',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '公約数と公倍数',
    difficulty: 'standard',
    questionType: 'input',
    question: '12と18の最小公倍数はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '36',
    acceptableAnswers: ['36', '３６'],
    keywords: ['36', '最小公倍数', '公倍数'],
    knowledgeTag: '最小公倍数（LCM）の求め方',
    explanation: `【解法】
12と18の最小公倍数は 36 となります。`
  },
  {
    id: 'm_num_037',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '素数',
    difficulty: 'standard',
    questionType: 'input',
    question: '20以下の素数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '8個', '８'],
    keywords: ['8', '素数の個数', '20以下'],
    knowledgeTag: '20以下の素数の書き出し',
    explanation: `【解法】
20以下の素数は、2, 3, 5, 7, 11, 13, 17, 19 の 8個 です。`
  },
  {
    id: 'm_num_038',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '素因数分解',
    difficulty: 'advanced',
    questionType: 'input',
    question: '54にできるだけ小さい正の整数mをかけて、ある整数の3乗（立方数）にしたいです。mはいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '４'],
    keywords: ['4', '立方数', '3乗'],
    knowledgeTag: '素因数分解と立方数（3乗数）の条件',
    explanation: `【解法】
54 = 2¹ × 3³
立方数（ある整数の3乗）にするには、素因数の指数がすべて3の倍数になる必要があります。
3の指数は3ですが、2の指数は1なので、2をあと2個（2² = 4）かける必要があります。
よって m = 4 となります。（54 × 4 = 216 = 6³）`
  },
  {
    id: 'm_num_039',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '約数の個数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '約数の個数がちょうど4個ある整数のうち、最も小さい2桁の整数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '１０'],
    keywords: ['10', '約数4個', '2つの素数の積'],
    knowledgeTag: '約数が4個ある整数の形（p^3 または p*q）',
    explanation: `【解法】
約数が4個ある数は、素数pの3乗（p³）または 2つの異なる素数の積（p×q）です。
2桁の整数（10以上）で最小のものを探します。
10 = 2 × 5（約数は 1, 2, 5, 10 の4個）
したがって、最も小さい2桁の数は 10 となります。`
  },
  {
    id: 'm_num_040',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '倍数の個数',
    difficulty: 'standard',
    questionType: 'input',
    question: '1から100までの整数の中で、3の倍数でも5の倍数でもある数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6個', '６'],
    keywords: ['6', '公倍数', '15の倍数'],
    knowledgeTag: '公倍数の個数計算',
    explanation: `【解法】
3と5の最小公倍数は15です。
100 ÷ 15 = 6 余り 10
したがって、15の倍数は 6個 あります。`
  },
  {
    id: 'm_num_041',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '倍数の判定法',
    difficulty: 'standard',
    questionType: 'input',
    question: '5桁の整数「34A52」が9の倍数であるとき、数字Aは何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '４'],
    keywords: ['4', '9の倍数', '各位の和'],
    knowledgeTag: '9の倍数判定法（各位の和が9の倍数）',
    explanation: `【解法】
各位の和 = 3 + 4 + A + 5 + 2 = A + 14
これが9の倍数になるのは A = 4（和18）のときです。`
  },
  {
    id: 'm_num_042',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '倍数の判定法',
    difficulty: 'standard',
    questionType: 'input',
    question: '4桁の整数「728B」が4の倍数であるとき、一の位の数字Bとして考えられるもののうち最も大きい数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '８'],
    keywords: ['8', '4の倍数', '下2桁'],
    knowledgeTag: '4の倍数判定法（下2桁が4の倍数）',
    explanation: `【解法】
下2桁「8B」が4の倍数になればよいです。
考えられるBは 0, 4, 8 です。
最も大きい数字は 8 となります。`
  },

  // 2. 余りの周期・剰余 (12問)
  {
    id: 'm_num_043',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りの周期',
    difficulty: 'standard',
    questionType: 'input',
    question: '3を50回かけた数（3の50乗）の一の位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '９'],
    keywords: ['9', '一の位', '3の累乗'],
    knowledgeTag: '3の累乗の一の位の周期性',
    explanation: `【解法】
3¹=3, 3²=9, 3³=27(7), 3⁴=81(1), 3⁵=243(3), …
一の位は「3, 9, 7, 1」の 4周期 です。
50 ÷ 4 = 12 余り 2
周期の2番目なので、一の位は 9 となります。`
  },
  {
    id: 'm_num_044',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りの周期',
    difficulty: 'standard',
    questionType: 'input',
    question: '4を2025回かけた数（4の2025乗）の一の位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '４'],
    keywords: ['4', '一の位', '4の累乗'],
    knowledgeTag: '4の累乗の一の位の周期性（2周期）',
    explanation: `【解法】
4¹=4, 4²=16(6), 4³=64(4), 4⁴=256(6), …
奇数乗は 4、偶数乗は 6 です。
2025は奇数なので、一の位は 4 となります。`
  },
  {
    id: 'm_num_045',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りと倍数',
    difficulty: 'standard',
    questionType: 'input',
    question: '6で割っても8で割っても3余る正の整数のうち、最も小さい整数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '27',
    acceptableAnswers: ['27', '２７'],
    keywords: ['27', '余りが共通', '公倍数'],
    knowledgeTag: '余りが等しい倍数問題',
    explanation: `【解法】
6と8の最小公倍数は 24 です。
条件を満たす数は 24の倍数 + 3 です。
最も小さい正の整数は 24 + 3 = 27 となります。`
  },
  {
    id: 'm_num_046',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りと倍数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '4で割ると1余り、6で割ると3余る正の整数のうち、2桁で最も小さい整数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '21',
    acceptableAnswers: ['21', '２１'],
    keywords: ['21', '不足共通', '2桁最小'],
    knowledgeTag: '不足が共通する倍数問題',
    explanation: `【解法】
4で割ると1余る＝あと3あれば割り切れる（3不足）
6で割ると3余る＝あと3あれば割り切れる（3不足）
4と6の最小公倍数12の倍数より3小さい数です。
12 - 3 = 9（1桁）
24 - 3 = 21（2桁で最小）
したがって 21 となります。`
  },
  {
    id: 'm_num_047',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りの周期',
    difficulty: 'advanced',
    questionType: 'input',
    question: '2の100乗を「5」で割ったときの余りはいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '1',
    acceptableAnswers: ['1', '１'],
    keywords: ['1', '合同式', '2の累乗'],
    knowledgeTag: '累乗の余りの周期性（フェルマーの小定理的思考）',
    explanation: `【解法】
2¹÷5=余り2, 2²÷5=余り4, 2³÷5=余り3, 2⁴÷5=余り1
余りは「2, 4, 3, 1」の 4周期 です。
100 ÷ 4 = 25 余り 0（割り切れる）
周期の最後なので、余りは 1 となります。`
  },
  {
    id: 'm_num_048',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '倍数の個数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から200までの整数の中で、「3の倍数であるが5の倍数ではない」数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '53',
    acceptableAnswers: ['53', '53個', '５３'],
    keywords: ['53', 'ベン図', '差'],
    knowledgeTag: '集合とベン図・特定部分の要素数',
    explanation: `【解法】
・3の倍数：200 ÷ 3 = 66個
・3と5の公倍数（15の倍数）：200 ÷ 15 = 13個
3の倍数から15の倍数を引くと、
66 - 13 = 53個 となります。`
  },
  {
    id: 'm_num_049',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りの周期',
    difficulty: 'advanced',
    questionType: 'input',
    question: '8の200乗の一の位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '６'],
    keywords: ['6', '8の累乗', '一の位'],
    knowledgeTag: '8の累乗の一の位の周期性',
    explanation: `【解法】
8¹=8, 8²=64(4), 8³=512(2), 8⁴=4096(6), …
一の位は「8, 4, 2, 6」の 4周期 です。
200 ÷ 4 = 50 余り 0
周期の最後なので、一の位は 6 となります。`
  },
  {
    id: 'm_num_050',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '不定方程式',
    difficulty: 'advanced',
    questionType: 'input',
    question: '3x + 5y = 31 を満たす正の整数(x, y)の組は何組ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '2',
    acceptableAnswers: ['2', '2組', '２'],
    keywords: ['2', '不定方程式', '整数解'],
    knowledgeTag: '1次不定方程式の正の整数解の個数',
    explanation: `【解法】
3x = 31 - 5y
y = 1 のとき：3x = 26（割り切れない）
y = 2 のとき：3x = 21 → x = 7 (OK)
y = 3 のとき：3x = 16
y = 4 のとき：3x = 11
y = 5 のとき：3x = 6 → x = 2 (OK)
y = 6 のとき：3x = 1
したがって、(x, y) = (7, 2), (2, 5) の 2組 です。`
  },
  {
    id: 'm_num_051',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'ユークリッドの互除法',
    difficulty: 'advanced',
    questionType: 'input',
    question: '247と143の最大公約数はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '13',
    acceptableAnswers: ['13', '１３'],
    keywords: ['13', '互除法', '大きな数の公約数'],
    knowledgeTag: 'ユークリッドの互除法',
    explanation: `【解法】
247 ÷ 143 = 1 余り 104
143 ÷ 104 = 1 余り 39
104 ÷ 39 = 2 余り 26
39 ÷ 26 = 1 余り 13
26 ÷ 13 = 2 余り 0
最大公約数は 13 となります。`
  },
  {
    id: 'm_num_052',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りと倍数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '100以下の自然数で、約数が全部で2個しかない数（素数）の個数はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '25',
    acceptableAnswers: ['25', '25個', '２５'],
    keywords: ['25', '100以下の素数', 'エラトステネス'],
    knowledgeTag: '100以下の素数の個数（暗記必須の25個）',
    explanation: `【解法】
約数がちょうど2個ある数は「素数」です。
100以下の素数は全部で 25個 あります。`
  },
  {
    id: 'm_num_053',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '素因数分解',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から30までのすべての整数の積を計算したとき、末尾には0が何個並びますか。（半角数字で答えなさい）',
    options: [],
    answer: '7',
    acceptableAnswers: ['7', '7個', '７'],
    keywords: ['7', '末尾の0', '素因数5'],
    knowledgeTag: 'ルジャンドルの公式（30!に含まれる5の個数）',
    explanation: `【解法】
30に含まれる素因数5の個数：
30 ÷ 5 = 6個
30 ÷ 25 = 1個
合計 = 6 + 1 = 7個 となります。`
  },
  {
    id: 'm_num_054',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りの周期',
    difficulty: 'advanced',
    questionType: 'input',
    question: '9の99乗の一の位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '９'],
    keywords: ['9', '9の累乗', '奇数乗'],
    knowledgeTag: '9の累乗の一の位（奇数乗は9、偶数乗は1）',
    explanation: `【解法】
9¹=9, 9²=81(1), 9³=729(9), …
奇数乗は 9、偶数乗は 1 です。
99乗は奇数乗なので、一の位は 9 となります。`
  },

  // 3. 数列・規則性・群数列・フィボナッチ (14問)
  {
    id: 'm_num_055',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '等差数列',
    difficulty: 'standard',
    questionType: 'input',
    question: '等差数列 4, 7, 10, 13, 16, … の第30番目の数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '91',
    acceptableAnswers: ['91', '９１'],
    keywords: ['91', '等差数列', '一般項'],
    knowledgeTag: '等差数列の第N項の公式',
    explanation: `【解法】
初項 = 4、公差 = 3
第30項 = 4 + 3 × (30 - 1) = 4 + 87 = 91 となります。`
  },
  {
    id: 'm_num_056',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '等差数列の和',
    difficulty: 'standard',
    questionType: 'input',
    question: '1から50までの奇数（1, 3, 5, …, 49）の合計はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '625',
    acceptableAnswers: ['625', '６２５'],
    keywords: ['625', '奇数の和', 'Nの2乗'],
    knowledgeTag: '連続するN個の奇数の和＝N^2',
    explanation: `【解法】
1から49までの奇数の個数は (49 + 1) ÷ 2 = 25個 です。
連続する奇数の和は「個数の2乗」になります。
25² = 625 となります。
（※公式 (1 + 49) × 25 ÷ 2 = 50 × 25 ÷ 2 = 625 でも求まります）`
  },
  {
    id: 'm_num_057',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '群数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '自然数が次のように群に分けられています。\n(1),  (2, 3),  (4, 5, 6),  (7, 8, 9, 10), …\n第15群の最初の数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '106',
    acceptableAnswers: ['106', '１０６'],
    keywords: ['106', '群数列', '第N群の最初'],
    knowledgeTag: '群数列の最初の項の求め方',
    explanation: `【解法】
第14群の最後までに含まれる数の総数を求めます。
1から14までの和 = (1 + 14) × 14 ÷ 2 = 105個
したがって、第14群の最後の数は 105 です。
第15群の最初の数はその次の数なので 106 となります。`
  },
  {
    id: 'm_num_058',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '三角数',
    difficulty: 'standard',
    questionType: 'input',
    question: '1から10までの整数の和（第10番目の三角数）はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '55',
    acceptableAnswers: ['55', '５５'],
    keywords: ['55', '三角数', '1から10の和'],
    knowledgeTag: '三角数の公式 n(n+1)/2',
    explanation: `【解法】
(1 + 10) × 10 ÷ 2 = 55 となります。`
  },
  {
    id: 'm_num_059',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'フィボナッチ数列',
    difficulty: 'standard',
    questionType: 'input',
    question: 'フィボナッチ数列 1, 1, 2, 3, 5, 8, 13, … の第9番目の数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '34',
    acceptableAnswers: ['34', '３４'],
    keywords: ['34', 'フィボナッチ', '第9項'],
    knowledgeTag: 'フィボナッチ数列の漸化式',
    explanation: `【解法】
第1項: 1, 第2項: 1, 第3項: 2, 第4項: 3, 第5項: 5, 第6項: 8, 第7項: 13, 第8項: 21, 第9項: 13 + 21 = 34 となります。`
  },
  {
    id: 'm_num_060',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '規則性と周期',
    difficulty: 'standard',
    questionType: 'input',
    question: '白丸と黒丸が次のように並んでいます。\n○●●○○●●○○●●…（○1個、●2個、○2個、●2個…ではなく、○●●の3個周期）\n3文字の並び「○●●」が繰り返されるとき、第50番目の記号は「○」ですか「●」ですか。（「○」または「●」で答えなさい）',
    options: [],
    answer: '●',
    acceptableAnswers: ['●', '黒', '黒丸'],
    keywords: ['●', '周期算', '記号の並び'],
    knowledgeTag: '周期算の基本（あまりと対応）',
    explanation: `【解法】
「○●●」の 3文字周期 です。
50 ÷ 3 = 16 余り 2
2番目の記号なので「●」となります。`
  },
  {
    id: 'm_num_061',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '群数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '正の奇数を 1, 3, 5, 7, 9, … と並べたとき、第25番目の奇数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '49',
    acceptableAnswers: ['49', '４９'],
    keywords: ['49', '第N番目の奇数', '2n-1'],
    knowledgeTag: '第N番目の奇数の公式 (2n-1)',
    explanation: `【解法】
2 × 25 - 1 = 49 となります。`
  },
  {
    id: 'm_num_062',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '等差数列の和',
    difficulty: 'standard',
    questionType: 'input',
    question: '2から40までの偶数（2, 4, 6, …, 40）をすべて足した合計はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '420',
    acceptableAnswers: ['420', '４２０'],
    keywords: ['420', '偶数の和', '等差数列'],
    knowledgeTag: '連続する偶数の和（n(n+1)）',
    explanation: `【解法】
偶数の個数は 40 ÷ 2 = 20個 です。
合計 = (2 + 40) × 20 ÷ 2 = 42 × 10 = 420 となります。
※公式 n × (n + 1) = 20 × 21 = 420`
  },
  {
    id: 'm_num_063',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '周期算',
    difficulty: 'standard',
    questionType: 'input',
    question: '数字の列 1, 2, 3, 4, 1, 2, 3, 4, … のように、4個の数字「1, 2, 3, 4」が繰り返されます。初めから第30番目までのすべての数字の合計はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '73',
    acceptableAnswers: ['73', '７３'],
    keywords: ['73', '周期算', '周期の和'],
    knowledgeTag: '周期算の合計の求め方',
    explanation: `【解法】
1周期（1 + 2 + 3 + 4）の和 = 10
30 ÷ 4 = 7 周期 余り 2個
・7周期分の和：10 × 7 = 70
・余り2個の和（1 + 2）：3
合計 = 70 + 3 = 73 となります。`
  },
  {
    id: 'm_num_064',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'フィボナッチ数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1歩で1段または2段登ることができる階段があります。5段の階段の登り方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '8通り', '８'],
    keywords: ['8', '階段', 'フィボナッチ'],
    knowledgeTag: '階段の登り方の数（フィボナッチ数列）',
    explanation: `【解法】
1段: 1通り, 2段: 2通り, 3段: 3通り, 4段: 5通り, 5段: 8通り となります。`
  },
  {
    id: 'm_num_065',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '階差数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '数列 2, 3, 5, 8, 12, 17, … の第10番目の数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '47',
    acceptableAnswers: ['47', '４７'],
    keywords: ['47', '階差数列', '三角数'],
    knowledgeTag: '階差数列の第N項',
    explanation: `【解法】
階差数列は 1, 2, 3, 4, 5, … です。
第10項 = 初項2 + (1から9までの和)
= 2 + 45 = 47 となります。`
  },
  {
    id: 'm_num_066',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '群数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1, 2, 2, 3, 3, 3, 4, 4, 4, 4, … のように、整数nがn個ずつ並ぶ数列があります。第50番目の数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '１０'],
    keywords: ['10', '群数列', '三角数'],
    knowledgeTag: 'nがn個並ぶ群数列',
    explanation: `【解法】
1からnまでの和が50を超えるnを探します。
1から9までの和 = 45
1から10までの和 = 55
46番目から55番目まではすべて「10」です。
したがって、50番目の数は 10 となります。`
  },
  {
    id: 'm_num_067',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'パスカルの三角形',
    difficulty: 'standard',
    questionType: 'input',
    question: 'パスカルの三角形の第5行（1, 4, 6, 4, 1）のすべての数の合計はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '16',
    acceptableAnswers: ['16', '１６'],
    keywords: ['16', 'パスカル', '2の4乗'],
    knowledgeTag: 'パスカルの三角形の行の合計（2^(n-1)）',
    explanation: `【解法】
1 + 4 + 6 + 4 + 1 = 16（2⁴ = 16）となります。`
  },
  {
    id: 'm_num_068',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '規則性と周期',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から100までの整数を書いたとき、数字「1」は全部で何回現れますか。（半角数字で答えなさい）',
    options: [],
    answer: '21',
    acceptableAnswers: ['21', '21回', '２１'],
    keywords: ['21', '数字の出現回数', '1から100'],
    knowledgeTag: '1から100に含まれる特定数字の個数',
    explanation: `【解法】
・一の位が1：1, 11, 21, …, 91 の 10回
・十の位が1：10, 11, 12, …, 19 の 10回
・百の位が1：100 の 1回
合計 = 10 + 10 + 1 = 21回 となります。`
  },

  // 4. N進法・小数・数の性質総合 (12問)
  {
    id: 'm_num_069',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'N進法',
    difficulty: 'standard',
    questionType: 'input',
    question: '10進法の数「25」を、2進法で表しなさい。（半角数字で答えなさい）',
    options: [],
    answer: '11001',
    acceptableAnswers: ['11001', '１１００１'],
    keywords: ['11001', '2進法', '25'],
    knowledgeTag: '10進法から2進法の変換',
    explanation: `【解法】
25 = 16 + 8 + 1 = 2⁴ + 2³ + 2⁰ →「11001」となります。`
  },
  {
    id: 'm_num_070',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'N進法',
    difficulty: 'standard',
    questionType: 'input',
    question: '2進法で表された「1011」を、普段の10進法で表しなさい。（半角数字で答えなさい）',
    options: [],
    answer: '11',
    acceptableAnswers: ['11', '１１'],
    keywords: ['11', '2進法から10進法', '位取り'],
    knowledgeTag: '2進法から10進法への展開',
    explanation: `【解法】
1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 となります。`
  },
  {
    id: 'm_num_071',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'N進法',
    difficulty: 'advanced',
    questionType: 'input',
    question: '10進法の「43」を、5進法で表しなさい。（半角数字で答えなさい）',
    options: [],
    answer: '133',
    acceptableAnswers: ['133', '１３３'],
    keywords: ['133', '5進法', 'N進法'],
    knowledgeTag: '5進法への変換',
    explanation: `【解法】
43 ÷ 5 = 8 余り 3
8 ÷ 5 = 1 余り 3
1 ÷ 5 = 0 余り 1
下から順に並べて「133」となります。（25×1 + 5×3 + 3 = 43）`
  },
  {
    id: 'm_num_072',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '循環小数',
    difficulty: 'standard',
    questionType: 'input',
    question: '分数 1/7 を小数で表したとき、小数第50位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '４'],
    keywords: ['4', '1/7', '循環小数'],
    knowledgeTag: '1/7の循環節（142857の6周期）',
    explanation: `【解法】
1 ÷ 7 = 0.142857 142857 …
6文字「1, 4, 2, 8, 5, 7」が繰り返されます。
50 ÷ 6 = 8 余り 2
2番目の数字なので 4 となります。`
  },
  {
    id: 'm_num_073',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '循環小数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '循環小数 0.444…（0.4の4循環）を既約分数で表しなさい。（半角の分数で答えなさい。例：4/9）',
    options: [],
    answer: '4/9',
    acceptableAnswers: ['4/9', '４／９'],
    keywords: ['4/9', '循環小数', '分数変換'],
    knowledgeTag: '循環小数の分数表現（分母9）',
    explanation: `【解法】
0.444… = 4/9 となります。`
  },
  {
    id: 'm_num_074',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '約数の個数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '100の正の約数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '9個', '９'],
    keywords: ['9', '100の約数', '平方数'],
    knowledgeTag: '平方数100の約数の個数',
    explanation: `【解法】
100 = 2² × 5²
約数の個数 = (2 + 1) × (2 + 1) = 3 × 3 = 9個 となります。`
  },
  {
    id: 'm_num_075',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '素数',
    difficulty: 'advanced',
    questionType: 'input',
    question: '2つの異なる素数の和が31になるとき、その2つの素数の積（かけ算）はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '58',
    acceptableAnswers: ['58', '５８'],
    keywords: ['58', '素数の和31', '偶数素数2'],
    knowledgeTag: '素数の偶奇性（和が奇数なら1つは2）',
    explanation: `【解法】
2つの素数の和が「31（奇数）」なので、一方は必ず偶数の素数「2」でなければなりません。
もう一方の素数は、
31 - 2 = 29 （29は素数）

よって、2つの素数の積は、
2 × 29 = 58
となります。`
  },
  {
    id: 'm_num_076',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '互いに素',
    difficulty: 'standard',
    questionType: 'input',
    question: '1から10までの整数の中で、10と「互いに素」である整数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4個', '４'],
    keywords: ['4', '互いに素', 'オイラー'],
    knowledgeTag: '互いに素な数の個数（10のオイラー関数）',
    explanation: `【解法】
10の素因数は2と5です。
2の倍数でも5の倍数でもない数を探します。
1, 3, 7, 9 の 4個 です。`
  },
  {
    id: 'm_num_077',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '素因数分解',
    difficulty: 'advanced',
    questionType: 'input',
    question: '3桁の整数の中で、約数が最も多い数の約数の個数は何個ですか。（半角数字で答えなさい）',
    options: [],
    answer: '32',
    acceptableAnswers: ['32', '32個', '３２'],
    keywords: ['32', '最多の約数', '高度合成数'],
    knowledgeTag: '高度合成数と約数の最大個数',
    explanation: `【解法】
840 = 2³ × 3¹ × 5¹ × 7¹ → (3+1)(1+1)(1+1)(1+1) = 4×2×2×2 = 32個
720 = 2⁴ × 3² × 5¹ → 5×3×2 = 30個
最大は 32個 となります。`
  },
  {
    id: 'm_num_078',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'N進法',
    difficulty: 'advanced',
    questionType: 'input',
    question: '0と1だけを使って数を表す2進法で、10進法の「8」を表しなさい。（半角数字で答えなさい）',
    options: [],
    answer: '1000',
    acceptableAnswers: ['1000', '１０００'],
    keywords: ['1000', '2の3乗', '2進法'],
    knowledgeTag: '2の累乗の2進法表現',
    explanation: `【解法】
8 = 2³ なので、2進法では「1000」となります。`
  },
  {
    id: 'm_num_079',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '倍数の個数',
    difficulty: 'standard',
    questionType: 'input',
    question: '2桁の整数（10から99）のうち、7の倍数は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '13',
    acceptableAnswers: ['13', '13個', '１３'],
    keywords: ['13', '2桁の7の倍数', '倍数個数'],
    knowledgeTag: '特定範囲の倍数の個数',
    explanation: `【解法】
(99 ÷ 7) - (9 ÷ 7) = 14 - 1 = 13個 となります。`
  },
  {
    id: 'm_num_080',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '規則性と周期',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から100までの整数をすべて掛け合わせた積の一の位の数字は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '0',
    acceptableAnswers: ['0', '０'],
    keywords: ['0', '一の位', '積'],
    knowledgeTag: '連続整数の積の一の位（2と5の因数）',
    explanation: `【解法】
因数に 2 と 5（10の倍数）が豊富に含まれるため、積の末尾には0が多数並びます。
したがって、一の位は 0 となります。`
  }
];
