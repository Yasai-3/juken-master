// scripts/math-pack-3-numbers-comb.mjs
// 算数 Pack 3: 数の性質・規則性・場合の数・論理推論 100問 (m_adv2_201 〜 m_adv2_300)
export const mathPack3 = [
  {
    "id": "m_adv2_201",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "360 の正の約数は全部で何個ありますか。",
    "options": [
      "18個",
      "20個",
      "24個",
      "28個"
    ],
    "answer": "24個",
    "acceptableAnswers": [
      "24個"
    ],
    "explanation": "360 = 2³ × 3² × 5 です。約数の個数は (3+1)×(2+1)×(1+1) = 4×3×2 = 24個 です。"
  },
  {
    "id": "m_adv2_202",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "720 の正の約数は全部で何個ありますか。",
    "options": [
      "24個",
      "30個",
      "32個",
      "36個"
    ],
    "answer": "30個",
    "acceptableAnswers": [
      "30個"
    ],
    "explanation": "720 = 2⁴ × 3² × 5 です。約数の個数は (4+1)×(2+1)×(1+1) = 5×3×2 = 30個 です。"
  },
  {
    "id": "m_adv2_203",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1から100までの整数のうち、正の約数が奇数個ある数は全部で何個ありますか。",
    "options": [
      "8個",
      "9個",
      "10個",
      "11個"
    ],
    "answer": "10個",
    "acceptableAnswers": [
      "10個"
    ],
    "explanation": "約数が奇数個ある数は「平方数（同じ数を2回かけた数）」です。1²=1 から 10²=100 までの 10個 です。"
  },
  {
    "id": "m_adv2_204",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1から100までの整数のうち、正の約数がちょうど3個ある数は全部で何個ありますか。",
    "options": [
      "3個",
      "4個",
      "5個",
      "6個"
    ],
    "answer": "4個",
    "acceptableAnswers": [
      "4個"
    ],
    "explanation": "約数が3個の数は「素数の2乗」です。2²=4, 3²=9, 5²=25, 7²=49 の 4個 です（11²=121で100を超える）。"
  },
  {
    "id": "m_adv2_205",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "100から300までの整数のうち、7の倍数は何個ありますか。",
    "options": [
      "27個",
      "28個",
      "29個",
      "30個"
    ],
    "answer": "28個",
    "acceptableAnswers": [
      "28個"
    ],
    "explanation": "300÷7 = 42 あまり 6、99÷7 = 14 あまり 1。よって 42 - 14 = 28個…失礼、100÷7=14.28なので最小は 7×15=105、最大は 7×42=294。42 - 15 + 1 = 28個です。"
  },
  {
    "id": "m_adv2_206",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1から200までの整数のうち、4でも6でも割り切れない数は何個ありますか。",
    "options": [
      "67個",
      "130個",
      "133個",
      "134個"
    ],
    "answer": "133個",
    "acceptableAnswers": [
      "133個"
    ],
    "explanation": "4の倍数は 200÷4=50個、6の倍数は 200÷6=33個。公倍数12の倍数は 200÷12=16個。4または6の倍数は 50+33-16=67個。よって割り切れない数は 200 - 67 = 133個 です。"
  },
  {
    "id": "m_adv2_207",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1から300までの整数のうち、3の倍数であるが5の倍数ではない数は何個ありますか。",
    "options": [
      "60個",
      "75個",
      "80個",
      "85個"
    ],
    "answer": "80個",
    "acceptableAnswers": [
      "80個"
    ],
    "explanation": "3の倍数は 300÷3=100個。3と5の公倍数(15の倍数)は 300÷15=20個。よって 100 - 20 = 80個 です。"
  },
  {
    "id": "m_adv2_208",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "2つの整数 A と B があります。最大公約数が 12 で、最小公倍数が 144 のとき、A と B の積はいくつですか。",
    "options": [
      "864",
      "1296",
      "1728",
      "2073"
    ],
    "answer": "1728",
    "acceptableAnswers": [
      "1728"
    ],
    "explanation": "2数の積は (最大公約数) × (最小公倍数) に等しくなります。よって 12 × 144 = 1728 です。"
  },
  {
    "id": "m_adv2_209",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "2つの2けたの整数があり、最大公約数が 8、最小公倍数が 96 です。この2つの整数の和はいくつですか。",
    "options": [
      "48",
      "56",
      "64",
      "72"
    ],
    "answer": "56",
    "acceptableAnswers": [
      "56"
    ],
    "explanation": "2数を 8a, 8b（aとbは互いに素）と置くと、8×a×b = 96 より a×b = 12 です。互いに素な組は (a,b)=(1,12) または (3,4)。2桁より a=3, b=4 となり、数は 24 と 32 です。和は 24 + 32 = 56 です。"
  },
  {
    "id": "m_adv2_210",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある整数で 85 を割ると 1 余り、115 を割ると 3 余ります。このような整数のうち最も大きい数はいくつですか。",
    "options": [
      "14",
      "21",
      "28",
      "42"
    ],
    "answer": "28",
    "acceptableAnswers": [
      "28"
    ],
    "explanation": "85 - 1 = 84、115 - 3 = 112 を割り切る数なので、84 と 112 の公約数です。84と112の最大公約数は 28 です（余り3より大きいので適する）。"
  },
  {
    "id": "m_adv2_211",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある整数を 5 で割ると 2 余り、7 で割ると 4 余る整数のうち、2けたで最も小さい数はいくつですか。",
    "options": [
      "17",
      "22",
      "32",
      "37"
    ],
    "answer": "32",
    "acceptableAnswers": [
      "32"
    ],
    "explanation": "どちらも「割る数より 3 不足している」数です。5と7の公倍数35の倍数より3小さい数なので、35 - 3 = 32 です。"
  },
  {
    "id": "m_adv2_212",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある整数を 6 で割ると 1 余り、8 で割ると 5 余る整数のうち、3けたで最も小さい数はいくつですか。",
    "options": [
      "101",
      "105",
      "109",
      "113"
    ],
    "answer": "109",
    "acceptableAnswers": [
      "109"
    ],
    "explanation": "条件は「6で割ると5不足、8で割ると3不足」…差が揃いません。書き出すと、8で割って5余る数は 5, 13, 21, 29...。このうち6で割って1余る最小は 13 (13÷6=2あまり1)。周期はLCM(6,8)=24。一般項は 24×n + 13。3桁最小は n=4 のとき 24×4 + 13 = 109 です。"
  },
  {
    "id": "m_adv2_213",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1 から 50 までの整数をすべてかけ合わせた数 (1×2×3×…×50) は、末尾に 0 が連続して何個並びますか。",
    "options": [
      "10個",
      "11個",
      "12個",
      "14個"
    ],
    "answer": "12個",
    "acceptableAnswers": [
      "12個"
    ],
    "explanation": "末尾の0の個数は、素因数5の個数に等しいです。50÷5 = 10、50÷25 = 2。合計 10 + 2 = 12個 です。"
  },
  {
    "id": "m_adv2_214",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1 から 100 までの整数をすべてかけ合わせた数は、2 で最大何回割り切ることができますか。",
    "options": [
      "94回",
      "96回",
      "97回",
      "98回"
    ],
    "answer": "97回",
    "acceptableAnswers": [
      "97回"
    ],
    "explanation": "100÷2=50, 100÷4=25, 100÷8=12, 100÷16=6, 100÷32=3, 100÷64=1。合計 50+25+12+6+3+1 = 97回 です。"
  },
  {
    "id": "m_adv2_215",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "3 を 40 回かけた数 (3⁴⁰) の一の位の数字はいくつですか。",
    "options": [
      "1",
      "3",
      "7",
      "9"
    ],
    "answer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "explanation": "3の累乗の一の位は 3, 9, 7, 1 の 4個の周期で繰り返します。40 ÷ 4 = 10 あまり 0 なので、周期の最後である 1 です。"
  },
  {
    "id": "m_adv2_216",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "7 を 50 回かけた数 (7⁵⁰) の一の位の数字はいくつですか。",
    "options": [
      "1",
      "3",
      "7",
      "9"
    ],
    "answer": "9",
    "acceptableAnswers": [
      "9"
    ],
    "explanation": "7の累乗の一の位は 7, 9, 3, 1 の 4個の周期です。50 ÷ 4 = 12 あまり 2 なので、2番目の 9 です。"
  },
  {
    "id": "m_adv2_217",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "分母が 24 で、約分できない（既約分数である）真分数は全部で何個ありますか。",
    "options": [
      "6個",
      "8個",
      "10個",
      "12個"
    ],
    "answer": "8個",
    "acceptableAnswers": [
      "8個"
    ],
    "explanation": "24 = 2³ × 3 なので、1から23のうち 2の倍数でも3の倍数でもない数の個数です。23個中、2の倍数は11個、3の倍数は7個、6の倍数は3個。23 - (11+7-3) = 23 - 15 = 8個 です。"
  },
  {
    "id": "m_adv2_218",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "5/7 を小数で表したとき、小数第 100 位の数字はいくつですか。",
    "options": [
      "1",
      "2",
      "4",
      "7"
    ],
    "answer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "explanation": "5 ÷ 7 = 0.714285714285… で「714285」の 6桁が循環します。100 ÷ 6 = 16 あまり 4。循環節の4番目の数字は 2…あれ？7, 1, 4, 2, 8, 5 の4番目は2です。検算：5÷7=0.714285... 1番目7, 2番目1, 3番目4, 4番目2, 5番目8, 6番目5。4番目は2ですね！選択肢修正します。"
  },
  {
    "id": "m_adv2_219",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "10進法の数 29 を 2進法で表すとどうなりますか。",
    "options": [
      "10111",
      "11011",
      "11101",
      "11110"
    ],
    "answer": "11101",
    "acceptableAnswers": [
      "11101"
    ],
    "explanation": "29 = 16 + 8 + 4 + 1 = 1×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰ より、2進法では 11101 です。"
  },
  {
    "id": "m_adv2_220",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "3進法で表された数 2102₍₃₎ を 10進法で表すといくつになりますか。",
    "options": [
      "58",
      "62",
      "65",
      "71"
    ],
    "answer": "65",
    "acceptableAnswers": [
      "65"
    ],
    "explanation": "2×3³ + 1×3² + 0×3¹ + 2×3⁰ = 2×27 + 1×9 + 0 + 2 = 54 + 9 + 2 = 65 です。"
  },
  {
    "id": "m_adv2_221",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "0, 1, 2 の3つの数字だけを使って、小さい順に 1, 2, 10, 11, 12, 20, 21, … と並べます。50番目の数はいくつですか。",
    "options": [
      "1122",
      "1211",
      "1212",
      "2012"
    ],
    "answer": "1212",
    "acceptableAnswers": [
      "1212"
    ],
    "explanation": "これは3進法の数え方と同じです。50 を 3 で割っていくと、50 = 1×27 + 2×9 + 1×3 + 2×1 より 1212 です。"
  },
  {
    "id": "m_adv2_222",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "3けたの整数のうち、各位の数字の和が 6 になる数は全部で何個ありますか。",
    "options": [
      "18個",
      "20個",
      "21個",
      "24個"
    ],
    "answer": "21個",
    "acceptableAnswers": [
      "21個"
    ],
    "explanation": "百の位 a (1〜6)、十の位 b (0〜5)、一の位 c (0〜5) で a+b+c=6。a'=a-1 とすると a'+b+c=5 (a',b,c≧0)。〇5個と仕切り2本の並べ方で 7C2 = 21個 です。"
  },
  {
    "id": "m_adv2_223",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある4けたの整数 4□7△ は 9 の倍数でもあり 4 の倍数でもあります。このとき □ と △ に入る数字の和として考えられるもののうち最大のものはいくつですか。",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "answer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "explanation": "4の倍数より下2桁 7△ は 72 または 76。9の倍数より各位の和 4+□+7+△ = 11+□+△ が9の倍数。△=2のとき 13+□ が9の倍数→□=5(和7)。△=6のとき 17+□ が9の倍数→□=1(和7)または…9の倍数で最大？11+□+△が18なら□+△=7。27なら□+△=16(□=9,△=7だが△は偶数。△=6なら□=10で不可)。よって最大は 7 です！修正します。"
  },
  {
    "id": "m_adv2_224",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1から100までの整数をすべて足すといくつになりますか。",
    "options": [
      "4950",
      "5000",
      "5050",
      "5150"
    ],
    "answer": "5050",
    "acceptableAnswers": [
      "5050"
    ],
    "explanation": "等差数列の和の公式より、(1 + 100) × 100 ÷ 2 = 101 × 50 = 5050 です。"
  },
  {
    "id": "m_adv2_225",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1から99までの奇数をすべて足すといくつになりますか。",
    "options": [
      "2400",
      "2450",
      "2500",
      "2550"
    ],
    "answer": "2500",
    "acceptableAnswers": [
      "2500"
    ],
    "explanation": "1から始まる連続する奇数の和は「個数の2乗」になります。奇数は (99+1)÷2 = 50個あるので、50 × 50 = 2500 です。"
  },
  {
    "id": "m_adv2_226",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "3けたの整数のうち、回文数（前から読んでも後ろから読んでも同じ数。例：121, 353）は全部で何個ありますか。",
    "options": [
      "81個",
      "90個",
      "99個",
      "100個"
    ],
    "answer": "90個",
    "acceptableAnswers": [
      "90個"
    ],
    "explanation": "百の位は 1〜9 の 9通り。一の位は百の位と同じで 1通り。十の位は 0〜9 の 10通り。よって 9 × 10 × 1 = 90個 です。"
  },
  {
    "id": "m_adv2_227",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "連続する3つの整数の積が 2184 であるとき、この3つの整数の真ん中の数はいくつですか。",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": "13",
    "acceptableAnswers": [
      "13"
    ],
    "explanation": "10×10×10=1000、15×15×15=3375 です。一の位が4になる3連続数の積を調べると、12×13×14 = 156 × 14 = 2184 となります。真ん中の数は 13 です。"
  },
  {
    "id": "m_adv2_228",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "分子と分母の和が 120 で、約分すると 3/5 になる分数の分子はいくつですか。",
    "options": [
      "40",
      "45",
      "48",
      "75"
    ],
    "answer": "45",
    "acceptableAnswers": [
      "45"
    ],
    "explanation": "約分して 3/5 なので、分子と分母の比は 3 : 5 です。和が 120 なので、比の1あたりは 120 ÷ (3+5) = 15。分子は 3 × 15 = 45 です。"
  },
  {
    "id": "m_adv2_229",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある2けたの整数があります。十の位と一の位の数字を入れかえてできる数は、もとの数より 36 小さくなります。もとの数の各位の数字の差はいくつですか。",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "explanation": "十の位を a、一の位を b とすると、(10a + b) - (10b + a) = 9(a - b) = 36 より、a - b = 4 です。"
  },
  {
    "id": "m_adv2_230",
    "subject": "算数",
    "category": "算数",
    "subcategory": "数の性質",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1から100までの整数の中に、数字「3」は何回現れますか。",
    "options": [
      "10回",
      "19回",
      "20回",
      "21回"
    ],
    "answer": "20回",
    "acceptableAnswers": [
      "20回"
    ],
    "explanation": "一の位が3の数は 3, 13, 23, …, 93 の 10個。十の位が3の数は 30, 31, …, 39 の 10個（33は両方で1回ずつ数える）。合計 10 + 10 = 20回 です。"
  },
  {
    "id": "m_adv2_231",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "等差数列 5, 9, 13, 17, 21, … の第 30 項（30番目の数）はいくつですか。",
    "options": [
      "117",
      "121",
      "125",
      "129"
    ],
    "answer": "121",
    "acceptableAnswers": [
      "121"
    ],
    "explanation": "初項が 5、公差が 4 です。30番目の数は 5 + 4 × (30 - 1) = 5 + 116 = 121 です。"
  },
  {
    "id": "m_adv2_232",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "等差数列 7, 12, 17, 22, … において、初めて 200 を超えるのは何番目ですか。",
    "options": [
      "39番目",
      "40番目",
      "41番目",
      "42番目"
    ],
    "answer": "40番目",
    "acceptableAnswers": [
      "40番目"
    ],
    "explanation": "第n項は 7 + 5×(n-1) = 5n + 2 です。5n + 2 > 200 より 5n > 198、n > 39.6。よって 40番目 です。"
  },
  {
    "id": "m_adv2_233",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "数列 1, 3, 6, 10, 15, 21, …（三角数）の第 20 項はいくつですか。",
    "options": [
      "190",
      "200",
      "210",
      "220"
    ],
    "answer": "210",
    "acceptableAnswers": [
      "210"
    ],
    "explanation": "第n項は 1 から n までの整数の和です。第20項は 20 × (20 + 1) ÷ 2 = 210 です。"
  },
  {
    "id": "m_adv2_234",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "フィボナッチ数列 1, 1, 2, 3, 5, 8, 13, 21, … の第 12 項はいくつですか。",
    "options": [
      "89",
      "133",
      "144",
      "233"
    ],
    "answer": "144",
    "acceptableAnswers": [
      "144"
    ],
    "explanation": "第1項から順に 1, 1, 2, 3, 5, 8, 13, 21, 34(9), 55(10), 89(11), 144(12) となります。"
  },
  {
    "id": "m_adv2_235",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "群数列 (1), (2, 3), (4, 5, 6), (7, 8, 9, 10), … において、50 は第何群の何番目にありますか。",
    "options": [
      "第9群の5番目",
      "第10群の5番目",
      "第10群の6番目",
      "第11群の5番目"
    ],
    "answer": "第10群の5番目",
    "acceptableAnswers": [
      "第10群の5番目"
    ],
    "explanation": "第n群の最後の数は n(n+1)÷2 です。n=9のとき 9×10÷2 = 45。よって50は第10群に入り、50 - 45 = 5番目です。"
  },
  {
    "id": "m_adv2_236",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "群数列 (1/1), (1/2, 2/2, 1/2), … 分母と分子の和が等しい分数の並び 1/1, 1/2, 2/1, 1/3, 2/2, 3/1, 1/4, 2/3, … において、3/5 は最初から数えて何番目ですか。",
    "options": [
      "22番目",
      "23番目",
      "24番目",
      "25番目"
    ],
    "answer": "24番目",
    "acceptableAnswers": [
      "24番目"
    ],
    "explanation": "第n群は分母と分子の和が n+1 の分数で n個 あります。3/5 は和が8なので第7群。第7群は 1/7, 2/6, 3/5… なので3番目。第6群までの個数は 6×7÷2 = 21個。よって 21 + 3 = 24番目 です。"
  },
  {
    "id": "m_adv2_237",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "「A, B, C, D, E」の5文字がこの順序でくり返し並んでいます。「ABCDEABCDE…」の最初から数えて 88 番目の文字は何ですか。",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "explanation": "5文字ごとの周期です。88 ÷ 5 = 17 あまり 3 より、周期の3番目の文字である C です。"
  },
  {
    "id": "m_adv2_238",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "碁石を正方形の形にすき間なくぎっしりと並べた（中実方陣）ところ、一番外側の1列に並んだ碁石の数は 44 個でした。碁石は全部で何個ありますか。",
    "options": [
      "121個",
      "144個",
      "169個",
      "196個"
    ],
    "answer": "144個",
    "acceptableAnswers": [
      "144個"
    ],
    "explanation": "1辺の個数を n とすると、最外周の個数は 4n - 4 = 44 より 4n = 48、n = 12個。全部の個数は 12 × 12 = 144個 です。"
  },
  {
    "id": "m_adv2_239",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "碁石を正方形の形に中空（2列の中空方陣）に並べたところ、一番外側の1辺には 15 個の碁石が並んでいました。碁石は全部で何個ありますか。",
    "options": [
      "96個",
      "104個",
      "112個",
      "120個"
    ],
    "answer": "104個",
    "acceptableAnswers": [
      "104個"
    ],
    "explanation": "全体の一辺15個の正方形から、中央の空洞（一辺 15 - 2×2 = 11個）を引きます。15² - 11² = 225 - 121 = 104個 です。"
  },
  {
    "id": "m_adv2_240",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "碁石で正三角形の形にぎっしり並べた（正三角形方陣）とき、1辺に 12 個並びました。碁石は全部で何個ありますか。",
    "options": [
      "66個",
      "72個",
      "78個",
      "84個"
    ],
    "answer": "78個",
    "acceptableAnswers": [
      "78個"
    ],
    "explanation": "1段目に1個、2段目に2個、…、12段目に12個並ぶので、1から12までの和です。12 × 13 ÷ 2 = 78個 です。"
  },
  {
    "id": "m_adv2_241",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長さ 180m の道路の片側に、端から端まで 12m おきに木を植えます。木は全部で何本必要ですか。",
    "options": [
      "14本",
      "15本",
      "16本",
      "17本"
    ],
    "answer": "16本",
    "acceptableAnswers": [
      "16本"
    ],
    "explanation": "両端に木を植える植木算です。間の数は 180 ÷ 12 = 15か所。木の数は 15 + 1 = 16本 です。"
  },
  {
    "id": "m_adv2_242",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "池のまわりの長さが 360m あります。この池の周囲に 15m おきに木を植えるとき、木は全部で何本必要ですか。",
    "options": [
      "23本",
      "24本",
      "25本",
      "26本"
    ],
    "answer": "24本",
    "acceptableAnswers": [
      "24本"
    ],
    "explanation": "池の周り（円形）の植木算では、間の数と木の数が一致します。360 ÷ 15 = 24本 です。"
  },
  {
    "id": "m_adv2_243",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "同じ長さのストローを使って、正方形を横に1列につなげていきます。正方形を 25 個作るには、ストローは何本必要ですか。",
    "options": [
      "75本",
      "76本",
      "77本",
      "100本"
    ],
    "answer": "76本",
    "acceptableAnswers": [
      "76本"
    ],
    "explanation": "最初の1個に4本、その後は1個増えるごとに3本増えます。4 + 3 × (25 - 1) = 4 + 72 = 76本 です。"
  },
  {
    "id": "m_adv2_244",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "同じ長さのおはじきを使って、正三角形を横に1列につなげていきます。正三角形を 30 個作るには、おはじきは何個必要ですか。",
    "options": [
      "60個",
      "61個",
      "62個",
      "90個"
    ],
    "answer": "61個",
    "acceptableAnswers": [
      "61個"
    ],
    "explanation": "最初が3個で、1個増えるごとに2個増えます。3 + 2 × (30 - 1) = 3 + 58 = 61個 です。"
  },
  {
    "id": "m_adv2_245",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある年の 5 月 1 日が火曜日であるとき、同じ年の 8 月 1 日は何曜日ですか。",
    "options": [
      "火曜日",
      "金曜日",
      "水曜日",
      "木曜日"
    ],
    "answer": "水曜日",
    "acceptableAnswers": [
      "水曜日"
    ],
    "explanation": "5月(31日)、6月(30日)、7月(31日)の日数の合計は 31 + 30 + 31 = 92日。92 ÷ 7 = 13 あまり 1。火曜日の1日後は水曜日です。"
  },
  {
    "id": "m_adv2_246",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "あるうるう年の 2 月 1 日が日曜日であるとき、同じ年の 3 月 1 日は何曜日ですか。",
    "options": [
      "火曜日",
      "月曜日",
      "水曜日",
      "日曜日"
    ],
    "answer": "月曜日",
    "acceptableAnswers": [
      "月曜日"
    ],
    "explanation": "うるう年の2月は29日あります。29 ÷ 7 = 4 あまり 1。日曜日の1日後は月曜日です。"
  },
  {
    "id": "m_adv2_247",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "白黒の碁石を「●○○●○○○●○○○○…」のように、黒1個のあとに白が1個ずつ増える規則で並べます。50番目の碁石は何色ですか。",
    "options": [
      "どちらでもない",
      "黒",
      "白",
      "判定できない"
    ],
    "answer": "白",
    "acceptableAnswers": [
      "白"
    ],
    "explanation": "第n組は「黒1個、白n個」の計(n+1)個です。各組の個数は 2, 3, 4, 5, 6, 7, 8, 9, 10…。第8組までで (2+9)×8÷2 = 44個。50番目は第9組（黒1個、白9個）の 50 - 44 = 6番目。黒1個のあとなので白です。"
  },
  {
    "id": "m_adv2_248",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある規則で分数が並んでいます: 1/2, 1/3, 2/3, 1/4, 2/4, 3/4, 1/5, 2/5, … 。この数列の 40 番目の分数は何ですか。",
    "options": [
      "4/9",
      "3/10",
      "4/10",
      "5/10"
    ],
    "answer": "4/10",
    "acceptableAnswers": [
      "4/10"
    ],
    "explanation": "分母がnの組には (n-1)個の分数が並びます。第1組(分母2):1個、第2組(分母3):2個、…第8組(分母9):8個。1から8までの和は 36個。40番目は第9組(分母10)の 40 - 36 = 4番目なので 4/10 です。"
  },
  {
    "id": "m_adv2_249",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "白と黒のタイルを交互に並べて市松模様を作ります。縦 8 枚、横 11 枚並べたとき、黒いタイルが白いタイルより多い場合、黒いタイルは何枚ありますか。",
    "options": [
      "40枚",
      "42枚",
      "44枚",
      "45枚"
    ],
    "answer": "44枚",
    "acceptableAnswers": [
      "44枚"
    ],
    "explanation": "全体の枚数は 8 × 11 = 88枚 です。偶数枚なので白と黒の枚数は同数で、88 ÷ 2 = 44枚 ずつになります。"
  },
  {
    "id": "m_adv2_250",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "数列 2, 5, 10, 17, 26, 37, … の第 15 項はいくつですか。",
    "options": [
      "197",
      "212",
      "226",
      "257"
    ],
    "answer": "226",
    "acceptableAnswers": [
      "226"
    ],
    "explanation": "各項は n² + 1 の形になっています。15² + 1 = 225 + 1 = 226 です。"
  },
  {
    "id": "m_adv2_251",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "数列 1, 2, 4, 7, 11, 16, … の第 20 項はいくつですか。",
    "options": [
      "181",
      "190",
      "191",
      "211"
    ],
    "answer": "191",
    "acceptableAnswers": [
      "191"
    ],
    "explanation": "階差数列が 1, 2, 3, 4, 5… です。第20項は 1 + (1から19までの和) = 1 + 19×20÷2 = 1 + 190 = 191 です。"
  },
  {
    "id": "m_adv2_252",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1本のテープを何回か折ってから、真ん中をハサミで1回切断しました。すると全部で 17 本の短いテープができました。テープを何回折ったでしょうか。",
    "options": [
      "3回",
      "4回",
      "5回",
      "6回"
    ],
    "answer": "4回",
    "acceptableAnswers": [
      "4回"
    ],
    "explanation": "テープをn回半分に折ると層数は 2ⁿ になります。真ん中を切ると、輪の部分が切れて 2ⁿ + 1 本になります。2ⁿ + 1 = 17 より 2ⁿ = 16、n = 4回 です。"
  },
  {
    "id": "m_adv2_253",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1から100までの整数を並べた表で、上から3行目、左から5列目にあるマスのように、縦と横の規則で並ぶ数を考えます。奇数段・偶数段で向きが変わる「蛇行並び」で、1行あたり10個並ぶとき、45 は上から何行目、左から何列目にありますか。",
    "options": [
      "上から4行目、左から5列目",
      "上から4行目、左から6列目",
      "上から5行目、左から5列目",
      "上から5行目、左から6列目"
    ],
    "answer": "上から5行目、左から5列目",
    "acceptableAnswers": [
      "上から5行目、左から5列目"
    ],
    "explanation": "45÷10 = 4 あまり 5 より5行目です。奇数行(1,3,5行目)は左から右へ並ぶので、左から5列目となります。"
  },
  {
    "id": "m_adv2_254",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "あるルールで数字の暗号を作ります。「1→2, 2→5, 3→10, 4→17, 5→26」。このルールで「8」を変換するといくつになりますか。",
    "options": [
      "50",
      "64",
      "65",
      "82"
    ],
    "answer": "65",
    "acceptableAnswers": [
      "65"
    ],
    "explanation": "入力数を n とすると、n² + 1 に変換されています。8² + 1 = 64 + 1 = 65 です。"
  },
  {
    "id": "m_adv2_255",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "一辺に碁石が 7 個並ぶ中実方陣の外側に、さらに碁石を1周並べて新しい方陣を作ります。碁石は新たに何個必要ですか。",
    "options": [
      "28個",
      "30個",
      "32個",
      "36個"
    ],
    "answer": "32個",
    "acceptableAnswers": [
      "32個"
    ],
    "explanation": "新しい方陣の一辺は 7 + 2 = 9個 です。最外周の個数は 4 × 9 - 4 = 32個 必要です。"
  },
  {
    "id": "m_adv2_256",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "階段を1歩で1段または2段上るとき、6段の階段を上る方法は何通りありますか。",
    "options": [
      "8通り",
      "11通り",
      "13通り",
      "21通り"
    ],
    "answer": "13通り",
    "acceptableAnswers": [
      "13通り"
    ],
    "explanation": "フィボナッチ数列になります。1段:1, 2段:2, 3段:3, 4段:5, 5段:8, 6段:13通り です。"
  },
  {
    "id": "m_adv2_257",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "階段を1歩で1段または2段上るとき、7段の階段を上る方法は何通りありますか。",
    "options": [
      "13通り",
      "18通り",
      "21通り",
      "34通り"
    ],
    "answer": "21通り",
    "acceptableAnswers": [
      "21通り"
    ],
    "explanation": "6段が13通り、5段が8通りなので、7段は 13 + 8 = 21通り です。"
  },
  {
    "id": "m_adv2_258",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "黒石と白石を交互に「●○●○●…」と並べます。全部で 75 個並べたとき、黒石は何個ありますか。",
    "options": [
      "37個",
      "38個",
      "39個",
      "40個"
    ],
    "answer": "38個",
    "acceptableAnswers": [
      "38個"
    ],
    "explanation": "奇数番目が黒、偶数番目が白です。(75 + 1) ÷ 2 = 38個 が黒石です。"
  },
  {
    "id": "m_adv2_259",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "100本のくじがあり、5本引くごとに1本のボーナスくじがもらえます。ボーナスくじからもさらにボーナスがもらえるとき、最大で何本のくじを引くことができますか。",
    "options": [
      "120本",
      "123本",
      "124本",
      "125本"
    ],
    "answer": "124本",
    "acceptableAnswers": [
      "124本"
    ],
    "explanation": "くじを4本引くと実質的に1本減る計算になります。100本でまず20本ボーナス(計120本、余り0)、20本で4本ボーナス(計124本、余り0)、4本ではボーナスもらえず終了。合計 100 + 20 + 4 = 124本 です。"
  },
  {
    "id": "m_adv2_260",
    "subject": "算数",
    "category": "算数",
    "subcategory": "規則性",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "空きビン 3 本を持っていくと、新しいジュース 1 本と交換してもらえます。最初に 20 本のジュースを買ったとき、交換も含めて全部で何本のジュースを飲むことができますか。",
    "options": [
      "27本",
      "28本",
      "29本",
      "30本"
    ],
    "answer": "29本",
    "acceptableAnswers": [
      "29本"
    ],
    "explanation": "20÷3=6あまり2(6本飲む、空きビン6+2=8本)。8÷3=2あまり2(2本飲む、空きビン2+2=4本)。4÷3=1あまり1(1本飲む、空きビン1+1=2本で終了)。合計 20 + 6 + 2 + 1 = 29本 です。"
  },
  {
    "id": "m_adv2_261",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "男子 4 人、女子 3 人の合計 7 人が一列に並びます。両端が女子になる並び方は何通りありますか。",
    "options": [
      "360通り",
      "720通り",
      "1440通り",
      "2160通り"
    ],
    "answer": "720通り",
    "acceptableAnswers": [
      "720通り"
    ],
    "explanation": "両端の女子の選び方は 3 × 2 = 6通り。間の5人の並び方は 5! = 120通り。よって 6 × 120 = 720通り です。"
  },
  {
    "id": "m_adv2_262",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "男子 3 人、女子 3 人が一列に並ぶとき、男女が交互に並ぶ並び方は何通りありますか。",
    "options": [
      "36通り",
      "72通り",
      "144通り",
      "288通り"
    ],
    "answer": "72通り",
    "acceptableAnswers": [
      "72通り"
    ],
    "explanation": "男女男女男女 または 女男女男女男 の 2パターン。それぞれ 男子の並び 3! = 6通り、女子の並び 3! = 6通り。よって 2 × 6 × 6 = 72通り です。"
  },
  {
    "id": "m_adv2_263",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "6 人の生徒を 2 人ずつの 3 つのグループ A, B, C に分ける分け方は何通りありますか。",
    "options": [
      "15通り",
      "45通り",
      "90通り",
      "180通り"
    ],
    "answer": "90通り",
    "acceptableAnswers": [
      "90通り"
    ],
    "explanation": "6C2 × 4C2 × 2C2 = 15 × 6 × 1 = 90通り です。"
  },
  {
    "id": "m_adv2_264",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "6 人の生徒を 2 人ずつの 3 つの組に分ける（組に名前の区別はない）分け方は何通りありますか。",
    "options": [
      "15通り",
      "30通り",
      "45通り",
      "90通り"
    ],
    "answer": "15通り",
    "acceptableAnswers": [
      "15通り"
    ],
    "explanation": "組の区別がないので、3つの組の並び順 3! = 6 で割ります。90 ÷ 6 = 15通り です。"
  },
  {
    "id": "m_adv2_265",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "7 人の中から 4 人の委員を選ぶ選び方は何通りありますか。",
    "options": [
      "21通り",
      "28通り",
      "35通り",
      "42通り"
    ],
    "answer": "35通り",
    "acceptableAnswers": [
      "35通り"
    ],
    "explanation": "7C4 = 7C3 = (7 × 6 × 5) ÷ (3 × 2 × 1) = 35通り です。"
  },
  {
    "id": "m_adv2_266",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "0, 1, 2, 3, 4 の 5 枚のカードから異なる 3 枚を選んで 3 けたの整数を作ります。全部で何個作れますか。",
    "options": [
      "36個",
      "48個",
      "60個",
      "64個"
    ],
    "answer": "48個",
    "acceptableAnswers": [
      "48個"
    ],
    "explanation": "百の位は 0 以外の 4通り。十の位は残りの 4通り、一の位は残りの 3通り。よって 4 × 4 × 3 = 48個 です。"
  },
  {
    "id": "m_adv2_267",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "0, 1, 2, 3, 4 の 5 枚のカードから異なる 3 枚を選んで 3 けたの偶数を作ります。全部で何個作れますか。",
    "options": [
      "24個",
      "28個",
      "30個",
      "36個"
    ],
    "answer": "30個",
    "acceptableAnswers": [
      "30個"
    ],
    "explanation": "一の位が 0 のとき: 4 × 3 = 12個。一の位が 2 または 4 のとき: 百の位は 0 と一の位以外の 3通り、十の位は 3通りで 3 × 3 × 2 = 18個。合計 12 + 18 = 30個 です。"
  },
  {
    "id": "m_adv2_268",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "正八角形の頂点を結んでできる三角形は全部で何個ありますか。",
    "options": [
      "48個",
      "54個",
      "56個",
      "64個"
    ],
    "answer": "56個",
    "acceptableAnswers": [
      "56個"
    ],
    "explanation": "8つの頂点から 3つを選ぶ組み合わせなので、8C3 = (8 × 7 × 6) ÷ (3 × 2 × 1) = 56個 です。"
  },
  {
    "id": "m_adv2_269",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "正十角形の対角線は全部で何本ありますか。",
    "options": [
      "25本",
      "30本",
      "35本",
      "40本"
    ],
    "answer": "35本",
    "acceptableAnswers": [
      "35本"
    ],
    "explanation": "n角形の対角線の本数は n(n - 3) ÷ 2 本です。10 × 7 ÷ 2 = 35本 です。"
  },
  {
    "id": "m_adv2_270",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "碁盤の目のような道路網で、東西に 4 区画、南北に 3 区画ある長方形の街路があります。左下の点から右上の点まで最短距離で行く道順は何通りありますか。",
    "options": [
      "28通り",
      "32通り",
      "35通り",
      "42通り"
    ],
    "answer": "35通り",
    "acceptableAnswers": [
      "35通り"
    ],
    "explanation": "東へ 4回、北へ 3回 進む順列なので、(4 + 3)! ÷ (4! × 3!) = 7C3 = 35通り です。"
  },
  {
    "id": "m_adv2_271",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "東西に 4 区画、南北に 3 区画の道路で、中心の交差点（東へ2、北へ1）を通る最短の道順は何通りありますか。",
    "options": [
      "12通り",
      "15通り",
      "18通り",
      "24通り"
    ],
    "answer": "18通り",
    "acceptableAnswers": [
      "18通り"
    ],
    "explanation": "スタートから中心までは 3C1 = 3通り。中心からゴールまでは東2北2なので 4C2 = 6通り。よって 3 × 6 = 18通り です。"
  },
  {
    "id": "m_adv2_272",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "大小 2 個のサイコロを同時に振るとき、出た目の和が 8 になる場合は何通りありますか。",
    "options": [
      "4通り",
      "5通り",
      "6通り",
      "7通り"
    ],
    "answer": "5通り",
    "acceptableAnswers": [
      "5通り"
    ],
    "explanation": "和が8になる目の組み合わせは (2,6), (3,5), (4,4), (5,3), (6,2) の 5通り です。"
  },
  {
    "id": "m_adv2_273",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "大小 2 個のサイコロを同時に振るとき、出た目の積が偶数になる場合は何通りありますか。",
    "options": [
      "9通り",
      "18通り",
      "24通り",
      "27通り"
    ],
    "answer": "27通り",
    "acceptableAnswers": [
      "27通り"
    ],
    "explanation": "すべての出方は 6 × 6 = 36通り。積が奇数になるのは両方奇数の 3 × 3 = 9通り。よって 36 - 9 = 27通り です。"
  },
  {
    "id": "m_adv2_274",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "10円玉 4 枚、50円玉 3 枚、100円玉 2 枚があります。これらの一部または全部を使って支払うことができる金額（0円を除く）は何通りありますか。",
    "options": [
      "35通り",
      "39通り",
      "45通り",
      "59通り"
    ],
    "answer": "39通り",
    "acceptableAnswers": [
      "39通り"
    ],
    "explanation": "50円2枚で100円となり金額が重複します。100円玉2枚を50円玉4枚に両替すると、50円玉が7枚、10円玉が4枚。50円玉の使い方は0〜7の8通り、10円玉は0〜4の5通り。8×5 - 1 = 39通り…あ、10円玉4枚では50円を作れないのでこれで重複なし。39通り？選択肢を修正します。"
  },
  {
    "id": "m_adv2_275",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "10円玉 3 枚、50円玉 1 枚、100円玉 2 枚があります。これらの一部または全部を使って、おつりなしで支払える金額（0円を除く）は何通りありますか。",
    "options": [
      "18通り",
      "20通り",
      "23通り",
      "24通り"
    ],
    "answer": "23通り",
    "acceptableAnswers": [
      "23通り"
    ],
    "explanation": "10円玉(0〜3枚:4通り)、50円玉(0〜1枚:2通り)、100円玉(0〜2枚:3通り)。金額の重複がないか確認：最大280円。10円で50円は作れず、50円1枚で100円は作れないので重複ゼロ。よって 4 × 2 × 3 - 1 = 23通り です。"
  },
  {
    "id": "m_adv2_276",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "赤玉 3 個、青玉 2 個、白玉 1 個の合計 6 個の玉を一列に並べる並べ方は何通りありますか。",
    "options": [
      "30通り",
      "60通り",
      "90通り",
      "120通り"
    ],
    "answer": "60通り",
    "acceptableAnswers": [
      "60通り"
    ],
    "explanation": "同じものを含む順列です。6! ÷ (3! × 2! × 1!) = 720 ÷ (6 × 2) = 60通り です。"
  },
  {
    "id": "m_adv2_277",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "4 人でじゃんけんを 1 回するとき、あいこ（引き分け）になる手の出方は何通りありますか。",
    "options": [
      "27通り",
      "33通り",
      "39通り",
      "42通り"
    ],
    "answer": "39通り",
    "acceptableAnswers": [
      "39通り"
    ],
    "explanation": "全員の手の出方は 3⁴ = 81通り。全員が同じ手になるのが 3通り。3種類の手がすべて出るのは、手が2人・1人・1人となる分け方 4C2 × 3! = 6 × 6 = 36通り。よってあいこは 3 + 36 = 39通り…あれ？4C2×3!=36通り。36+3=39通りです。修正します。"
  },
  {
    "id": "m_adv2_278",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "5 人のチームで総当たり戦（リーグ戦）を行うとき、試合数は全部で何試合になりますか。",
    "options": [
      "8試合",
      "10試合",
      "12試合",
      "15試合"
    ],
    "answer": "10試合",
    "acceptableAnswers": [
      "10試合"
    ],
    "explanation": "5チームから2チームを選ぶ組み合わせなので、5C2 = (5 × 4) ÷ 2 = 10試合 です。"
  },
  {
    "id": "m_adv2_279",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "16 チームが参加するトーナメント戦（勝ち抜き戦）で、優勝チームが決まるまでに行われる試合数は全部で何試合ですか。",
    "options": [
      "14試合",
      "15試合",
      "16試合",
      "31試合"
    ],
    "answer": "15試合",
    "acceptableAnswers": [
      "15試合"
    ],
    "explanation": "1試合ごとに必ず 1チームが脱落します。16チーム中、優勝の1チームを除く 15チームが負けるので、15試合 です。"
  },
  {
    "id": "m_adv2_280",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "立方体の 6 つの面を、赤・青・黄・緑・白・黒の 6 色すべてを使って塗り分ける方法は何通りありますか（回転して同じになるものは1通りとみなす）。",
    "options": [
      "24通り",
      "30通り",
      "36通り",
      "120通り"
    ],
    "answer": "30通り",
    "acceptableAnswers": [
      "30通り"
    ],
    "explanation": "1色を底面に固定すると、反対側（上面）の選び方が 5通り。側面の4面を円順列で塗る方法が (4 - 1)! = 6通り。よって 5 × 6 = 30通り です。"
  },
  {
    "id": "m_adv2_281",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "円形のテーブルに 5 人が座る座り方（円順列）は何通りありますか。",
    "options": [
      "20通り",
      "24通り",
      "60通り",
      "120通り"
    ],
    "answer": "24通り",
    "acceptableAnswers": [
      "24通り"
    ],
    "explanation": "円順列の公式 (n - 1)! より、(5 - 1)! = 4! = 24通り です。"
  },
  {
    "id": "m_adv2_282",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "男子 3 人と女子 3 人が円形のテーブルに座るとき、男女が交互に座る座り方は何通りありますか。",
    "options": [
      "6通り",
      "12通り",
      "24通り",
      "36通り"
    ],
    "answer": "12通り",
    "acceptableAnswers": [
      "12通り"
    ],
    "explanation": "まず男子3人を円形に並べると (3-1)! = 2通り。その間の3か所に女子3人を並べる方法が 3! = 6通り。よって 2 × 6 = 12通り です。"
  },
  {
    "id": "m_adv2_283",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "8 本のくじの中に当たりが 3 本入っています。同時に 2 本引くとき、2 本とも当たりである組み合わせは何通りありますか。",
    "options": [
      "1通り",
      "3通り",
      "6通り",
      "8通り"
    ],
    "answer": "3通り",
    "acceptableAnswers": [
      "3通り"
    ],
    "explanation": "当たり3本から2本を選ぶ組み合わせなので、3C2 = 3通り です。"
  },
  {
    "id": "m_adv2_284",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "8 本のくじの中に当たりが 3 本入っています。同時に 2 本引くとき、少なくとも 1 本が当たりである組み合わせは何通りありますか。",
    "options": [
      "15通り",
      "18通り",
      "21通り",
      "25通り"
    ],
    "answer": "18通り",
    "acceptableAnswers": [
      "18通り"
    ],
    "explanation": "すべての引き方は 8C2 = 28通り。2本ともハズレ(5本から2本)は 5C2 = 10通り。よって 28 - 10 = 18通り です。"
  },
  {
    "id": "m_adv2_285",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "リンゴ、ミカン、バナナの 3 種類の果物から、重複を許して合わせて 6 個選ぶ選び方は何通りありますか（1個も選ばない果物があってもよい）。",
    "options": [
      "21通り",
      "28通り",
      "36通り",
      "45通り"
    ],
    "answer": "28通り",
    "acceptableAnswers": [
      "28通り"
    ],
    "explanation": "〇6個と仕切り2本の並べ方になります。(6 + 2)C2 = 8C2 = (8 × 7) ÷ 2 = 28通り です。"
  },
  {
    "id": "m_adv2_286",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "区別のつかない 7 個のアメを、A, B, C の 3 人に少なくとも 1 個ずつ配る配り方は何通りありますか。",
    "options": [
      "12通り",
      "15通り",
      "18通り",
      "21通り"
    ],
    "answer": "15通り",
    "acceptableAnswers": [
      "15通り"
    ],
    "explanation": "あらかじめ1個ずつ配ると残り4個。4個のアメを3人に分ける(0個可)ので、〇4個と仕切り2本で (4+2)C2 = 6C2 = 15通り です。"
  },
  {
    "id": "m_adv2_287",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1 から 6 までの数字が書かれたカードが 1 枚ずつあります。この中から 2 枚を選んだとき、数の和が奇数になる組み合わせは何通りありますか。",
    "options": [
      "6通り",
      "8通り",
      "9通り",
      "12通り"
    ],
    "answer": "9通り",
    "acceptableAnswers": [
      "9通り"
    ],
    "explanation": "和が奇数になるには「奇数1枚と偶数1枚」を選ぶ必要があります。奇数{1,3,5}から1枚(3通り)、偶数{2,4,6}から1枚(3通り)で、3 × 3 = 9通り です。"
  },
  {
    "id": "m_adv2_288",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "A, B, C, D の 4 人がプレゼント交換をします。全員が自分のプレゼント以外のものを受け取る配り方（完全順列・撹乱順列）は何通りありますか。",
    "options": [
      "6通り",
      "8通り",
      "9通り",
      "12通り"
    ],
    "answer": "9通り",
    "acceptableAnswers": [
      "9通り"
    ],
    "explanation": "4個の要素の完全順列は 9通り です（モンモール数: D(1)=0, D(2)=1, D(3)=2, D(4)=9）。"
  },
  {
    "id": "m_adv2_289",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "5 人の完全順列（5人全員が自分のもの以外のプレゼントを受け取る方法）は何通りありますか。",
    "options": [
      "36通り",
      "40通り",
      "44通り",
      "48通り"
    ],
    "answer": "44通り",
    "acceptableAnswers": [
      "44通り"
    ],
    "explanation": "モンモール数の漸化式 D(n) = (n-1)(D(n-1) + D(n-2)) より、D(5) = 4 × (9 + 2) = 4 × 11 = 44通り です。"
  },
  {
    "id": "m_adv2_290",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "A, B, C の3人が徒競走をしました。同着はないものとします。Aは「私は2位ではなかった」、Bは「私は1位だった」、Cは「私は1位ではなかった」と言っています。3人のうち本当のことを言っているのは1人だけです。1位になったのは誰ですか。",
    "options": [
      "A",
      "B",
      "C",
      "特定できない"
    ],
    "answer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "explanation": "仮定して検証します。Bが本当とするとBが1位、Aは2位でなく3位、Cは1位でないのでCの発言も本当となり矛盾。Cが本当とするとCは2位か3位、Bは嘘なのでBは1位でない→Aが1位。Aの発言「2位でない」も本当となり2人が本当で矛盾。Aが本当ならAは1位か3位、BとCは嘘なのでCは1位！Cが1位ならAは3位、Bは2位。このとき発言を検証するとA「2位でない」〇、B「1位」×、C「1位でない」×となり、本当はAの1人だけで辻褄が合います。よって1位は C です。"
  },
  {
    "id": "m_adv2_291",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "コインを 4 回投げるとき、表がちょうど 3 回出る出方は何通りありますか。",
    "options": [
      "3通り",
      "4通り",
      "6通り",
      "8通り"
    ],
    "answer": "4通り",
    "acceptableAnswers": [
      "4通り"
    ],
    "explanation": "4回のうち表が出る回を3回選ぶ組み合わせなので、4C3 = 4通り です。"
  },
  {
    "id": "m_adv2_292",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "コインを 5 回投げるとき、表がちょうど 2 回出る出方は何通りありますか。",
    "options": [
      "8通り",
      "10通り",
      "12通り",
      "15通り"
    ],
    "answer": "10通り",
    "acceptableAnswers": [
      "10通り"
    ],
    "explanation": "5回のうち表が出る回を2回選ぶ組み合わせなので、5C2 = (5 × 4) ÷ 2 = 10通り です。"
  },
  {
    "id": "m_adv2_293",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "3枚の硬貨を同時に投げるとき、少なくとも1枚が表になる出方は何通りありますか。",
    "options": [
      "4通り",
      "6通り",
      "7通り",
      "8通り"
    ],
    "answer": "7通り",
    "acceptableAnswers": [
      "7通り"
    ],
    "explanation": "すべての出方は 2³ = 8通り。すべて裏が出るのは 1通り。よって 8 - 1 = 7通り です。"
  },
  {
    "id": "m_adv2_294",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "A, B, C, D の 4 人の中から代表 2 人を選ぶとき、A が必ず選ばれる選び方は何通りありますか。",
    "options": [
      "2通り",
      "3通り",
      "4通り",
      "6通り"
    ],
    "answer": "3通り",
    "acceptableAnswers": [
      "3通り"
    ],
    "explanation": "A以外の3人(B, C, D)の中から残り1人を選べばよいので、3通り です。"
  },
  {
    "id": "m_adv2_295",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "A, B, C, D の 4 人の中から代表 2 人を選ぶとき、A が選ばれない選び方は何通りありますか。",
    "options": [
      "2通り",
      "3通り",
      "4通り",
      "6通り"
    ],
    "answer": "3通り",
    "acceptableAnswers": [
      "3通り"
    ],
    "explanation": "A以外の3人の中から2人を選ぶので、3C2 = 3通り です。"
  },
  {
    "id": "m_adv2_296",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "外見は全く同じ 9 枚の金貨の中に、1 枚だけ軽い偽物が混ざっています。上皿天秤を最小で何回使えば、確実に偽物を見つけ出すことができますか。",
    "options": [
      "2回",
      "3回",
      "4回",
      "5回"
    ],
    "answer": "2回",
    "acceptableAnswers": [
      "2回"
    ],
    "explanation": "3枚ずつ3グループに分けます。1回目に3枚と3枚を比べると、偽物を含む3枚が特定できます。2回目にその3枚から1枚ずつ天秤に乗せれば、確実に偽物が特定できます。よって2回です。"
  },
  {
    "id": "m_adv2_297",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "外見は全く同じ 27 枚のコインの中に、1 枚だけ重い偽物があります。上皿天秤を最小で何回使えば、確実に偽物を特定できますか。",
    "options": [
      "2回",
      "3回",
      "4回",
      "5回"
    ],
    "answer": "3回",
    "acceptableAnswers": [
      "3回"
    ],
    "explanation": "毎回 1/3 ずつ絞り込めます。3³ = 27 より、最小 3回 で確実に特定できます。"
  },
  {
    "id": "m_adv2_298",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1 から 9 までの数字を 1 回ずつ使って 3×3 のマス目を埋める魔方陣（縦・横・斜めの和がすべて等しい）において、真ん中（中心）のマスに入る数字はいくつですか。",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "explanation": "1から9の合計は 45 で、各列の和は 45÷3 = 15 です。中心のマスを通る列は4本（縦、横、斜め2本）あり、それらすべての対称性から中心は平均値の 5 に決まります。"
  },
  {
    "id": "m_adv2_299",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "3けたの整数のうち、各位の数字がすべて異なる奇数は全部で何個ありますか。",
    "options": [
      "288個",
      "320個",
      "360個",
      "400個"
    ],
    "answer": "320個",
    "acceptableAnswers": [
      "320個"
    ],
    "explanation": "一の位は奇数{1,3,5,7,9}の5通り。百の位は0と一の位を除く8通り。十の位は百と一の位を除く8通り。よって 5 × 8 × 8 = 320個 です。"
  },
  {
    "id": "m_adv2_300",
    "subject": "算数",
    "category": "算数",
    "subcategory": "場合の数",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "4けたの整数のうち、各桁に同じ数字が少なくとも2つ含まれる数は全部で何個ありますか。",
    "options": [
      "4000個",
      "4464個",
      "4536個",
      "4860個"
    ],
    "answer": "4464個",
    "acceptableAnswers": [
      "4464個"
    ],
    "explanation": "4けたの整数は全部で 9000個（1000〜9999）。すべての桁が異なる数は、千の位9通り、百の位9通り、十の位8通り、一の位7通りで 9×9×8×7 = 4536個。よって 9000 - 4536 = 4464個 です。"
  }
];
