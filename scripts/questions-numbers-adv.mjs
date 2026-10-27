// 数の性質・規則性 発展問題（フィボナッチ、群数列、N進法、約数など：全8問）

export const NUMBERS_ADV_QUESTIONS = [
  {
    id: 'm_num_023',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'フィボナッチ数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'フィボナッチ数列 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … の中で、初めて「3の倍数」になるのは第何番目の数ですか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4番目', '４'],
    keywords: ['4', 'フィボナッチ', '3の倍数'],
    knowledgeTag: 'フィボナッチ数列の倍数周期性',
    explanation: `【解法】
数列を書き出して3で割った余りを調べます。
第1項：1
第2項：1
第3項：2
第4項：3（3の倍数！）
したがって、初めて3の倍数になるのは 第4番目 です。
（※フィボナッチ数列では、4の倍数番目の数がすべて3の倍数になります）`
  },
  {
    id: 'm_num_024',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'フィボナッチ数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '階段を1段または2段ずつ登ります。6段の階段を登る登り方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '13',
    acceptableAnswers: ['13', '13通り', '１３'],
    keywords: ['13', '階段の登り方', 'フィボナッチ'],
    knowledgeTag: '階段の登り方とフィボナッチ数列',
    explanation: `【解法】
n段の登り方を a(n) とおくと、最後が1段登りの場合と2段登りの場合から、
a(n) = a(n-1) + a(n-2) （フィボナッチ数列）が成り立ちます。
・1段：1通り
・2段：2通り
・3段：1 + 2 = 3通り
・4段：2 + 3 = 5通り
・5段：3 + 5 = 8通り
・6段：5 + 8 = 13通り
したがって、全部で 13通り となります。`
  },
  {
    id: 'm_num_025',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '群数列',
    difficulty: 'advanced',
    questionType: 'input',
    question: '奇数が次のように群に分けられています。\n{1},  {3, 5},  {7, 9, 11},  {13, 15, 17, 19}, …\n第10群に含まれるすべての数の和はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '1000',
    acceptableAnswers: ['1000', '１０００'],
    keywords: ['1000', '奇数の群数列', '立方数'],
    knowledgeTag: '奇数の群数列の和（nの3乗の性質）',
    explanation: `【解法】
各群の和を計算してみます。
・第1群の和：1 = 1³
・第2群の和：3 + 5 = 8 = 2³
・第3群の和：7 + 9 + 11 = 27 = 3³
・第4群の和：13 + 15 + 17 + 19 = 64 = 4³
第n群の和は、必ず「n³（nの3乗）」になります。
第10群の和 = 10³ = 1000 となります。`
  },
  {
    id: 'm_num_026',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'N進法',
    difficulty: 'advanced',
    questionType: 'input',
    question: '3進法で「201」と表される数を、普段使っている10進法で表しなさい。（半角数字で答えなさい）',
    options: [],
    answer: '19',
    acceptableAnswers: ['19', '１９'],
    keywords: ['19', '3進法', '位取り'],
    knowledgeTag: 'N進法から10進法への変換',
    explanation: `【解法】
3進法の位取りは、右から順に 1の位（3⁰）、3の位（3¹）、9の位（3²）です。
201(3) = 2 × 3² + 0 × 3¹ + 1 × 3⁰
= 2 × 9 + 0 + 1
= 18 + 1 = 19 となります。`
  },
  {
    id: 'm_num_027',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '素因数分解',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある正の整数Nの約数は全部で6個あり、素因数は2と3だけです。このような整数Nとして考えられる最も小さい数は何ですか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '１２'],
    keywords: ['12', '約数が6個', '最小の数'],
    knowledgeTag: '約数の個数からの逆算',
    explanation: `【解法】
N = 2^a × 3^b のとき、約数の個数は (a + 1)(b + 1) = 6 です。
かけて6になる組：(a+1, b+1) = (2, 3) または (3, 2)
1. (a+1, b+1) = (3, 2) のとき：a = 2, b = 1 → N = 2² × 3¹ = 12
2. (a+1, b+1) = (2, 3) のとき：a = 1, b = 2 → N = 2¹ × 3² = 18
最も小さい数は 12 となります。`
  },
  {
    id: 'm_num_028',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '余りの周期',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から100までの整数をすべて足した合計を「9」で割ったときの余りはいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '1',
    acceptableAnswers: ['1', '１'],
    keywords: ['1', '9で割った余り', '合同式'],
    knowledgeTag: '合計の9で割った余り（9の剰余則）',
    explanation: `【解法】
1から100までの和 = (1 + 100) × 100 ÷ 2 = 101 × 50 = 5050
5050を9で割った余りは、各位の数字の和を9で割った余りと等しくなります。
5 + 0 + 5 + 0 = 10
10 ÷ 9 = 1 余り 1
したがって、余りは 1 となります。`
  },
  {
    id: 'm_num_029',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: 'パスカルの三角形',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'パスカルの三角形の第6行（上から1, 5, 10, 10, 5, 1）のすべての数の合計はいくつですか。（半角数字で答えなさい）',
    options: [],
    answer: '32',
    acceptableAnswers: ['32', '３２'],
    keywords: ['32', 'パスカルの三角形', '2のn乗'],
    knowledgeTag: 'パスカルの三角形の行の和（2の累乗）',
    explanation: `【解法】
合計 = 1 + 5 + 10 + 10 + 5 + 1 = 32
※パスカルの三角形の各行の和は 2^(n-1) になります。
第6行の和 = 2⁵ = 32 となります。`
  },
  {
    id: 'm_num_030',
    subject: '算数',
    category: '数の性質・規則性',
    subCategory: '約数の個数',
    difficulty: 'standard',
    questionType: 'input',
    question: '240の約数のうち、「奇数」であるものは全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4個', '４'],
    keywords: ['4', '奇数の約数', '素因数分解'],
    knowledgeTag: '奇数の約数の個数の求め方',
    explanation: `【解法】
240を素因数分解します。
240 = 2⁴ × 3¹ × 5¹
奇数の約数には素因数2が含まれません。
素因数2を除いた「3¹ × 5¹」の約数の個数を求めます。
(1 + 1) × (1 + 1) = 2 × 2 = 4個（1, 3, 5, 15）となります。`
  }
];
