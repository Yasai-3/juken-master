// 場合の数・論理 追加50問 (m_comb_026 〜 m_comb_075)
import * as Geo from './geometry-engine.mjs';

export const EXTRA_COMBINATORICS = [
  // 1. 順列・並べ方 (12問)
  {
    id: 'm_comb_026',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: '4人の生徒A, B, C, Dが横1列に並びます。並び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '24',
    acceptableAnswers: ['24', '24通り', '２４'],
    keywords: ['24', '4人の順列', '4!'],
    knowledgeTag: '順列の基本公式 n!',
    explanation: `【解法】
4 × 3 × 2 × 1 = 24通り となります。`
  },
  {
    id: 'm_comb_027',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: '5人の生徒A, B, C, D, Eが横1列に並びます。AとBの2人が必ず隣り合う並び方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '48',
    acceptableAnswers: ['48', '48通り', '４８'],
    keywords: ['48', '隣り合う順列', 'ひとまとめ'],
    knowledgeTag: '隣り合う条件の順列（ひとまとめ法）',
    explanation: `【解法】
AとBをひとまとめにして1人とみなすと、4人の並び替えになります。
4 × 3 × 2 × 1 = 24通り
AとBの左右の並び替えが 2通り あります。
24 × 2 = 48通り となります。`
  },
  {
    id: 'm_comb_028',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1, 2, 3, 4, 5 の5枚のカードから4枚を選んで並べる4桁の整数のうち、「3000以上」の数は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '72',
    acceptableAnswers: ['72', '72通り', '７２'],
    keywords: ['72', '3000以上', '最高位の条件'],
    knowledgeTag: '範囲指定のある順列（千の位の分類）',
    explanation: `【解法】
千の位は 3, 4, 5 の 3通り です。
残りの百、十、一の位には、残りの4枚から3枚を並べるので、
4 × 3 × 2 = 24通り
合計 = 3 × 24 = 72通り となります。`
  },
  {
    id: 'm_comb_029',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: '赤玉2個、白玉3個の合計5個の玉を1列に並べる並べ方は何通りありますか。（同じ色の玉は区別しません。半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10通り', '１０'],
    keywords: ['10', '同じものを含む順列', '5C2'],
    knowledgeTag: '同じものを含む順列（組合せの利用）',
    explanation: `【解法】
5つの位置から赤玉を置く2か所を選ぶ組み合わせと同じです。
5C2 = (5 × 4) ÷ 2 = 10通り となります。`
  },
  {
    id: 'm_comb_030',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '0, 1, 2, 3, 4 のカードを使ってできる3桁の整数のうち、「5の倍数」は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12通り', '１２'],
    keywords: ['12', '5の倍数', '一の位0'],
    knowledgeTag: '5の倍数の条件（一の位が0または5）',
    explanation: `【解法】
使えるカードに5はないので、一の位は必ず「0」です。
百の位は 1, 2, 3, 4 の 4通り
十の位は 残りの 3通り
4 × 3 = 12通り となります。`
  },
  {
    id: 'm_comb_031',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: '6人が手をつないで輪を作るとき、並び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '120',
    acceptableAnswers: ['120', '120通り', '１２０'],
    keywords: ['120', '円順列', '6人'],
    knowledgeTag: '6人の円順列 (6-1)!',
    explanation: `【解法】
(6 - 1)! = 5! = 5 × 4 × 3 × 2 × 1 = 120通り となります。`
  },
  {
    id: 'm_comb_032',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '男子4人と女子4人が円卓を囲んで交互に座る座り方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '144',
    acceptableAnswers: ['144', '144通り', '１４４'],
    keywords: ['144', '交互に座る', '円順列'],
    knowledgeTag: '男女交互に座る円順列',
    explanation: `【解法】
まず男子4人を円形に座らせます：(4 - 1)! = 6通り
男子の間の4か所の席に女子4人を並べます：4! = 24通り（女子の席は固定されているため通常の順列）
6 × 24 = 144通り となります。`
  },
  {
    id: 'm_comb_033',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: 'A, B, C, D, E の5人が走ったとき、AがBより先にゴールする着順は何通りありますか。（同着はないものとします。半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60通り', '６０'],
    keywords: ['60', '順序の指定', '対称性'],
    knowledgeTag: '順序が指定された順列（対称性による1/2）',
    explanation: `【解法】
全並び順 5! = 120通り のうち、対称性により「AがBより先」と「BがAより先」の通り数は完全に半々です。
120 ÷ 2 = 60通り となります。`
  },
  {
    id: 'm_comb_034',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '「TOKYO」の5文字をすべて並べ替えてできる文字列は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60通り', '６０'],
    keywords: ['60', '同じ文字を含む', 'Oが2個'],
    knowledgeTag: '文字列の並べ替え（重複文字の処理）',
    explanation: `【解法】
文字Oが2個含まれます。
5! ÷ 2! = 120 ÷ 2 = 60通り となります。`
  },
  {
    id: 'm_comb_035',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1, 2, 3 の3種類の数字を重複して使ってよいとき、3桁の整数は全部で何通り作れますか。（半角数字で答えなさい）',
    options: [],
    answer: '27',
    acceptableAnswers: ['27', '27通り', '２７'],
    keywords: ['27', '重複順列', '3の3乗'],
    knowledgeTag: '重複順列の公式 n^r',
    explanation: `【解法】
百の位が3通り、十の位が3通り、一の位が3通り。
3 × 3 × 3 = 27通り となります。`
  },
  {
    id: 'm_comb_036',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: 'A, B, C の3人が横1列に並ぶとき、Aが真ん中になる並び方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '2',
    acceptableAnswers: ['2', '2通り', '２'],
    keywords: ['2', '中央固定', '順列'],
    knowledgeTag: '特定位置の固定順列',
    explanation: `【解法】
BAC または CAB の 2通り です。`
  },
  {
    id: 'm_comb_037',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から6までの数字が1つずつ書かれた6枚のカードから3枚を選んで並べるとき、奇数だけからなる3桁の整数は何通り作れますか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', '奇数のカード', '3P3'],
    knowledgeTag: '条件付きカード順列',
    explanation: `【解法】
奇数のカードは 1, 3, 5 の3枚です。
この3枚すべてを並べるので、3 × 2 × 1 = 6通り となります。`
  },

  // 2. 組合せ・選び方 (12問)
  {
    id: 'm_comb_038',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '7人の中から2人の日直を選ぶ選び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '21',
    acceptableAnswers: ['21', '21通り', '２１'],
    keywords: ['21', '7C2', '日直選び'],
    knowledgeTag: '組合せ 7C2 の計算',
    explanation: `【解法】
(7 × 6) ÷ 2 = 21通り となります。`
  },
  {
    id: 'm_comb_039',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '正八角形の対角線は全部で何本ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '20',
    acceptableAnswers: ['20', '20本', '２０'],
    keywords: ['20', '対角線の本数', '正八角形'],
    knowledgeTag: '多角形の対角線の本数公式 n(n-3)/2',
    explanation: `【解法】
公式：8 × (8 - 3) ÷ 2 = 8 × 5 ÷ 2 = 20本 となります。
（※8個の頂点から2点を選ぶ 8C2 = 28通り から辺の8本を引いて 28 - 8 = 20本）`
  },
  {
    id: 'm_comb_040',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '赤玉4個と青玉3個の入った袋から同時に3個の玉を取り出すとき、赤玉2個と青玉1個が出る取り出し方は何通りありますか。（玉はすべて区別します。半角数字で答えなさい）',
    options: [],
    answer: '18',
    acceptableAnswers: ['18', '18通り', '１８'],
    keywords: ['18', '積の法則', '袋から取り出す'],
    knowledgeTag: '組合せの積の法則',
    explanation: `【解法】
・赤玉4個から2個選ぶ：4C2 = 6通り
・青玉3個から1個選ぶ：3C1 = 3通り
6 × 3 = 18通り となります。`
  },
  {
    id: 'm_comb_041',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '10個の異なるケーキから3個買うとき、選び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '120',
    acceptableAnswers: ['120', '120通り', '１２０'],
    keywords: ['120', '10C3', 'ケーキ選び'],
    knowledgeTag: '組合せ 10C3 の計算',
    explanation: `【解法】
(10 × 9 × 8) ÷ (3 × 2 × 1) = 720 ÷ 6 = 120通り となります。`
  },
  {
    id: 'm_comb_042',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'グループ分け',
    difficulty: 'advanced',
    questionType: 'input',
    question: '4人の生徒を2人ずつの2つの組に分けるとき、組に区別がない（名前がない）場合、分け方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '3',
    acceptableAnswers: ['3', '3通り', '３'],
    keywords: ['3', '組の区別なし', '2人ずつ'],
    knowledgeTag: '組の区別がないグループ分け（重複度の除算）',
    explanation: `【解法】
組A, Bの区別があると 4C2 = 6通り です。
組の区別がないので、2組の入れ替え 2! = 2 で割ります。
6 ÷ 2 = 3通り となります。`
  },
  {
    id: 'm_comb_043',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '9人の生徒を、4人、3人、2人の3つのグループに分ける分け方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '1260',
    acceptableAnswers: ['1260', '1260通り', '１２６０'],
    keywords: ['1260', '異なる人数の組', 'グループ分け'],
    knowledgeTag: '人数の異なるグループ分け',
    explanation: `【解法】
人数がすべて異なるため、組の区別は人数の違いによって自動的につきます。
9C4 × 5C3 × 2C2
= 126 × 10 × 1 = 1260通り となります。`
  },
  {
    id: 'm_comb_044',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '正十角形の頂点を結んでできる三角形は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '120',
    acceptableAnswers: ['120', '120個', '１２０'],
    keywords: ['120', '多角形の頂点から作る三角形', '10C3'],
    knowledgeTag: '正多角形の頂点から選ぶ三角形の個数',
    explanation: `【解法】
10個の頂点から3点を選ぶ組み合わせです。
10C3 = (10 × 9 × 8) ÷ 6 = 120個 となります。`
  },
  {
    id: 'm_comb_045',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1から10までの整数の中から異なる2つの数を選ぶとき、2つの数の和が「奇数」になる選び方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '25',
    acceptableAnswers: ['25', '25通り', '２５'],
    keywords: ['25', '和が奇数', '奇数と偶数'],
    knowledgeTag: '和の偶奇性と組合せ（奇数1個＋偶数1個）',
    explanation: `【解法】
2つの数の和が奇数になるのは「奇数1個 + 偶数1個」のときです。
1から10には奇数が5個、偶数が5個あります。
選び方 = 5 × 5 = 25通り となります。`
  },
  {
    id: 'm_comb_046',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '5枚のコインから3枚選ぶ選び方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10通り', '１０'],
    keywords: ['10', '5C3', 'コイン'],
    knowledgeTag: '5C3 = 5C2 の対称性',
    explanation: `【解法】
5C3 = 5C2 = (5 × 4) ÷ 2 = 10通り となります。`
  },
  {
    id: 'm_comb_047',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '6個の異なるアメを、1個、2個、3個の3つの袋に分ける分け方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60通り', '６０'],
    keywords: ['60', '人数の異なる分配', '6C1*5C2'],
    knowledgeTag: '異なる個数への分割',
    explanation: `【解法】
6C1 × 5C2 × 3C3 = 6 × 10 × 1 = 60通り となります。`
  },
  {
    id: 'm_comb_048',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '生徒6人を3人ずつの2チームに分けるとき、チームに名前をつけない場合、分け方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10通り', '１０'],
    keywords: ['10', '3人ずつ', '区別なし'],
    knowledgeTag: '同数グループ分け（区別なし）',
    explanation: `【解法】
6C3 ÷ 2! = 20 ÷ 2 = 10通り となります。`
  },
  {
    id: 'm_comb_049',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '正六角形の対角線は全部で何本ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '9本', '９'],
    keywords: ['9', '正六角形', '対角線'],
    knowledgeTag: '正六角形の対角線の本数',
    explanation: `【解法】
6 × (6 - 3) ÷ 2 = 6 × 3 ÷ 2 = 9本 となります。`
  },

  // 3. 最短経路・道順 (8問)
  {
    id: 'm_comb_050',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】縦2マス、横3マスの碁盤の目の道を、地点Aから地点Bまで最短で行く道順は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10通り', '１０'],
    keywords: ['10', '最短経路', '2x3'],
    knowledgeTag: '5C2による最短経路の計算',
    figureSvg: Geo.createGridPath({ cols: 3, rows: 2 }),
    explanation: `【解法】
右へ3回、上へ2回進むので、5C2 = 10通り となります。`
  },
  {
    id: 'm_comb_051',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】縦3マス、横3マスの碁盤の目の道を、地点Aから地点Bまで最短で行く道順は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '20',
    acceptableAnswers: ['20', '20通り', '２０'],
    keywords: ['20', '最短経路', '3x3'],
    knowledgeTag: '6C3による最短経路の計算',
    figureSvg: Geo.createGridPath({ cols: 3, rows: 3 }),
    explanation: `【解法】
右へ3回、上へ3回進むので、6C3 = (6 × 5 × 4) ÷ 6 = 20通り となります。`
  },
  {
    id: 'm_comb_052',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'advanced',
    questionType: 'input',
    question: '縦2マス、横4マスの碁盤の目の道で、途中の交差点を工事中で通れない場所が1つある場合を考えます。工事がない場合の全体の最短道順は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15通り', '１５'],
    keywords: ['15', '6C2', '道順'],
    knowledgeTag: '縦2横4の最短経路',
    figureSvg: Geo.createGridPath({ cols: 4, rows: 2 }),
    explanation: `【解法】
右4、上2の合計6回なので、6C2 = (6 × 5) ÷ 2 = 15通り となります。`
  },
  {
    id: 'm_comb_053',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】縦2マス、横2マスの道をAからBまで最短で行く道順は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', '4C2', '2x2'],
    knowledgeTag: '2x2の最短経路',
    figureSvg: Geo.createGridPath({ cols: 2, rows: 2 }),
    explanation: `【解法】
4C2 = 6通り となります。`
  },
  {
    id: 'm_comb_054',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】縦1マス、横5マスの道をAからBまで最短で行く道順は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', '6C1', '細長い道'],
    knowledgeTag: '縦1横Nの最短経路',
    explanation: `【解法】
6C1 = 6通り となります。`
  },
  {
    id: 'm_comb_055',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'advanced',
    questionType: 'input',
    question: '【図形問題】縦3マス、横5マスの碁盤の目の道を最短で行く道順は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '56',
    acceptableAnswers: ['56', '56通り', '５６'],
    keywords: ['56', '8C3', '3x5'],
    knowledgeTag: '8C3の計算',
    figureSvg: Geo.createGridPath({ cols: 5, rows: 3 }),
    explanation: `【解法】
8C3 = (8 × 7 × 6) ÷ 6 = 56通り となります。`
  },
  {
    id: 'm_comb_056',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】縦4マス、横2マスの碁盤の目の道を最短で行く道順は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15通り', '１５'],
    keywords: ['15', '6C2', '縦長道順'],
    knowledgeTag: '6C2の計算',
    figureSvg: Geo.createGridPath({ cols: 2, rows: 4 }),
    explanation: `【解法】
6C2 = 15通り となります。`
  },
  {
    id: 'm_comb_057',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'advanced',
    questionType: 'input',
    question: '立方体の頂点Aから、辺の上だけを通って最も遠い向かい側の頂点Gまで、同じ頂点を2度通らずに最短（3本の辺）で行く行き方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', '立方体の道順', '3!'],
    knowledgeTag: '立体（立方体）の最短経路',
    explanation: `【解法】
x軸、y軸、z軸方向にそれぞれ1回ずつ進む並べ替えなので、3! = 6通り となります。`
  },

  // 4. サイコロ・コイン (8問)
  {
    id: 'm_comb_058',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、出た目の和が「7」になる出方は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', '和が7', 'サイコロ'],
    knowledgeTag: '和が7になるサイコロの目（最も確率が高い）',
    explanation: `【解法】
(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) の 6通り です。`
  },
  {
    id: 'm_comb_059',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、出た目の積が「奇数」になる出方は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '9通り', '９'],
    keywords: ['9', '積が奇数', '奇数×奇数'],
    knowledgeTag: '積が奇数になる条件（奇数×奇数）',
    explanation: `【解法】
積が奇数になるには、2個とも奇数（1, 3, 5）でなければなりません。
3 × 3 = 9通り となります。`
  },
  {
    id: 'm_comb_060',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'advanced',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、出た目の積が「偶数」になる出方は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '27',
    acceptableAnswers: ['27', '27通り', '２７'],
    keywords: ['27', '余事象', '積が偶数'],
    knowledgeTag: '余事象の利用（全体 - 積が奇数）',
    explanation: `【解法】
全体の出方 36通り から「積が奇数（9通り）」を引きます。
36 - 9 = 27通り となります。`
  },
  {
    id: 'm_comb_061',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: '3枚の硬貨を同時に投げるとき、すべての出方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '8通り', '８'],
    keywords: ['8', '2の3乗', 'コイン3枚'],
    knowledgeTag: 'コインの全事象 (2^3)',
    explanation: `【解法】
2 × 2 × 2 = 8通り となります。`
  },
  {
    id: 'm_comb_062',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'advanced',
    questionType: 'input',
    question: '3枚の硬貨を同時に投げるとき、表が「少なくとも1枚」出る出方は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '7',
    acceptableAnswers: ['7', '7通り', '７'],
    keywords: ['7', '少なくとも1枚', '余事象'],
    knowledgeTag: '余事象（全体 - すべて裏）',
    explanation: `【解法】
全体（8通り）から「すべて裏（1通り）」を引きます。
8 - 1 = 7通り となります。`
  },
  {
    id: 'm_comb_063',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、出た目が同じ（ゾロ目）になる出方は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', 'ゾロ目', 'サイコロ'],
    knowledgeTag: 'ゾロ目の場合の数',
    explanation: `【解法】
(1,1), (2,2), (3,3), (4,4), (5,5), (6,6) の 6通り です。`
  },
  {
    id: 'm_comb_064',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'advanced',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、大きいサイコロの目が小さいサイコロの目より大きくなる出方は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15通り', '１５'],
    keywords: ['15', '大＞小', '対称性'],
    knowledgeTag: '大小関係と対称性 (36-6)/2',
    explanation: `【解法】
全36通りからゾロ目6通りを除くと30通り。
大>小 と 小>大 は同じ数なので、30 ÷ 2 = 15通り となります。`
  },
  {
    id: 'm_comb_065',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、出た目の和が「10以上」になる出方は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', '和が10以上', 'サイコロ'],
    knowledgeTag: '和が10以上の組み合わせ書き出し',
    explanation: `【解法】
・和が10：(4,6), (5,5), (6,4) の3通り
・和が11：(5,6), (6,5) の2通り
・和が12：(6,6) の1通り
合計 = 3 + 2 + 1 = 6通り となります。`
  },

  // 5. 塗り分け・条件整理・論理 (10問)
  {
    id: 'm_comb_066',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '色の塗り分け',
    difficulty: 'standard',
    questionType: 'input',
    question: '横に並んだ3つの部屋を、赤・青・黄の3色を使って隣り合う部屋が異なる色になるように塗ります。塗り方は全部で何通りですか。（同じ色を何回使っても構いません。半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12通り', '１２'],
    keywords: ['12', '3部屋塗り分け', '積の法則'],
    knowledgeTag: '1列に並んだ部屋の塗り分け',
    explanation: `【解法】
1番目の部屋：3通り
2番目の部屋：1番目と異なるので2通り
3番目の部屋：2番目と異なるので2通り
3 × 2 × 2 = 12通り となります。`
  },
  {
    id: 'm_comb_067',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '条件整理',
    difficulty: 'standard',
    questionType: 'input',
    question: '4チームでトーナメント戦（勝ち残り式）を行うとき、優勝が決まるまでの全試合数は何試合ですか。（半角数字で答えなさい）',
    options: [],
    answer: '3',
    acceptableAnswers: ['3', '3試合', '３'],
    keywords: ['3', 'トーナメント', '4チーム'],
    knowledgeTag: 'トーナメントの試合数 (N-1)',
    explanation: `【解法】
4 - 1 = 3試合 となります。`
  },
  {
    id: 'm_comb_068',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '条件整理',
    difficulty: 'standard',
    questionType: 'input',
    question: '6チームで総当たり戦（リーグ戦）を行うとき、全試合数は何試合ですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15試合', '１５'],
    keywords: ['15', 'リーグ戦', '6C2'],
    knowledgeTag: 'リーグ戦の試合数 6C2',
    explanation: `【解法】
(6 × 5) ÷ 2 = 15試合 となります。`
  },
  {
    id: 'm_comb_069',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '推理・論理',
    difficulty: 'advanced',
    questionType: 'input',
    question: '赤・青・黄の帽子をかぶったA, B, Cの3人がいます。3人はそれぞれ異なる色の帽子をかぶっています。\n・A「私は青ではありません」\n・B「私は赤です」\nBの発言が本当であるとき、Aは何色の帽子をかぶっていますか。（「赤」「青」「黄」のいずれかで答えなさい）',
    options: [],
    answer: '黄',
    acceptableAnswers: ['黄', '黄色'],
    keywords: ['黄', '推理', '帽子'],
    knowledgeTag: '条件整理と推理の基本',
    explanation: `【解法】
Bが赤なので、AとCは青か黄です。
Aは青ではないので、Aは「黄」となります。`
  },
  {
    id: 'm_comb_070',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '支払える金額',
    difficulty: 'standard',
    questionType: 'input',
    question: '10円玉が3枚、50円玉が1枚あります。これらの一部または全部を使って支払うことができる金額（0円を除く）は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '7',
    acceptableAnswers: ['7', '7通り', '７'],
    keywords: ['7', '硬貨', '金額'],
    knowledgeTag: '硬貨の組合せ（重複なし）',
    explanation: `【解法】
10円（0〜3枚の4通り）× 50円（0〜1枚の2通り）- 1（0円）
= 4 × 2 - 1 = 7通り となります。`
  },
  {
    id: 'm_comb_071',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '条件整理',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'A, B, C, Dの4人がテストを受け、全員点数が異なりました。\n・AはCより高かった\n・CはDより高かった\n・DはBより高かった\n最下位（4位）だったのは誰ですか。（A, B, C, D のいずれかで答えなさい）',
    options: [],
    answer: 'B',
    acceptableAnswers: ['B', 'B君', 'Ｂ'],
    keywords: ['B', '順位', '不等式'],
    knowledgeTag: '不等式による順位整理',
    explanation: `【解法】
与えられた条件から4人の点数の高低関係を整理します。
・A > C
・C > D
・D > B

これらをまとめると、
A > C > D > B
となります。

よって、最下位（4位）だったのは B です。`
  },
  {
    id: 'm_comb_072',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '色の塗り分け',
    difficulty: 'standard',
    questionType: 'input',
    question: '正方形の4隅を4色で塗り分けるとき、回転して一致するものを同じとみなすと何通りありますか。（4色すべて1回ずつ使います。半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', '正方形の塗り分け', '円順列'],
    knowledgeTag: '正方形の4頂点の円順列 (4-1)!',
    explanation: `【解法】
4頂点の円順列なので、(4 - 1)! = 3! = 6通り となります。`
  },
  {
    id: 'm_comb_073',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '重複組合せ',
    difficulty: 'advanced',
    questionType: 'input',
    question: '区別のつかない5個のリンゴを、A君とB君の2人に少なくとも1個は配る配り方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4通り', '４'],
    keywords: ['4', '分配', '仕切り板'],
    knowledgeTag: '2人への玉の分配',
    explanation: `【解法】
(A, B) = (1, 4), (2, 3), (3, 2), (4, 1) の 4通り です。`
  },
  {
    id: 'm_comb_074',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: 'サイコロを1個投げるとき、素数の目が出る出方は何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '3',
    acceptableAnswers: ['3', '3通り', '３'],
    keywords: ['3', '素数の目', '2,3,5'],
    knowledgeTag: 'サイコロの素数の目（2, 3, 5）',
    explanation: `【解法】
2, 3, 5 の 3通り です。（※1は素数ではありません）`
  },
  {
    id: 'm_comb_075',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '条件整理',
    difficulty: 'advanced',
    questionType: 'input',
    question: '8チームでトーナメント戦を行うとき、準決勝（ベスト4）で行われる試合数は何試合ですか。（半角数字で答えなさい）',
    options: [],
    answer: '2',
    acceptableAnswers: ['2', '2試合', '２'],
    keywords: ['2', '準決勝', 'トーナメント'],
    knowledgeTag: 'トーナメント各ラウンドの試合数',
    explanation: `【解法】
4チームが2組に分かれて戦うので、2試合 となります。`
  }
];
