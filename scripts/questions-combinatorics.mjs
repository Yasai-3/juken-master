// 場合の数・論理 分野（順列・組合せ、道順、サイコロ・コイン、塗り分け、条件整理など：全25問）
import * as Geo from './geometry-engine.mjs';

export const COMBINATORICS_QUESTIONS = [
  // 1. 順列・並べ方
  {
    id: 'm_comb_001',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: '1, 2, 3, 4, 5 の5枚のカードから3枚を選んで並べ、3桁の整数を作ります。全部で何通りの整数が作れますか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60通り', '６０'],
    keywords: ['60', '順列', '3桁の整数'],
    knowledgeTag: '順列（Pの計算）の基本',
    explanation: `【解法】
・百の位：5通り
・十の位：残り4通り
・一の位：残り3通り
5 × 4 × 3 = 60通り となります。`
  },
  {
    id: 'm_comb_002',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: '0, 1, 2, 3, 4 の5枚のカードから3枚を選んで並べ、3桁の整数を作ります。全部で何通りの整数が作れますか。（半角数字で答えなさい）',
    options: [],
    answer: '48',
    acceptableAnswers: ['48', '48通り', '４８'],
    keywords: ['48', '0を含む順列', '3桁'],
    knowledgeTag: '最高位に0が入らない順列',
    explanation: `【解法】
百の位には「0」を使えません。
・百の位：1, 2, 3, 4 の 4通り
・十の位：残りの4枚から選ぶので 4通り（0も使える）
・一の位：残りの3枚から選ぶので 3通り
4 × 4 × 3 = 48通り となります。`
  },
  {
    id: 'm_comb_003',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '男子3人と女子2人の合計5人が1列に並びます。両端がともに男子である並び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '36',
    acceptableAnswers: ['36', '36通り', '３６'],
    keywords: ['36', '両端の条件', '順列'],
    knowledgeTag: '条件のある順列・両端の固定',
    explanation: `【解法】
1. 両端の男子の選び方・並べ方：
男子3人から2人を選んで左右に並べるので 3 × 2 = 6通り
2. 間の3人（男子1人と女子2人）の並べ方：
3 × 2 × 1 = 6通り
全体 = 6 × 6 = 36通り となります。`
  },
  {
    id: 'm_comb_004',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '円順列',
    difficulty: 'standard',
    questionType: 'input',
    question: '5人が円形のテーブルのまわりに座るとき、座り方は全部で何通りありますか。（回転して同じになるものは1通りとみなします。半角数字で答えなさい）',
    options: [],
    answer: '24',
    acceptableAnswers: ['24', '24通り', '２４'],
    keywords: ['24', '円順列', '回転同型'],
    knowledgeTag: '円順列の公式 (n-1)!',
    explanation: `【解法】
1人を固定して考えると、残りの4人の並び順になります。
(5 - 1)! = 4 × 3 × 2 × 1 = 24通り となります。`
  },

  // 2. 組合せ・選び方
  {
    id: 'm_comb_005',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '8人の生徒の中から、学級委員を3人選ぶ選び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '56',
    acceptableAnswers: ['56', '56通り', '５６'],
    keywords: ['56', '組合せ', 'Cの計算'],
    knowledgeTag: '組合せ（コンビネーション）の基本',
    explanation: `【解法】
8人から区別のない3人を選ぶ組み合わせ：
(8 × 7 × 6) ÷ (3 × 2 × 1) = 336 ÷ 6 = 56通り となります。`
  },
  {
    id: 'm_comb_006',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'standard',
    questionType: 'input',
    question: '10人が集まって、全員が他のすべての人と1回ずつ握手をします。握手は全部で何回行われますか。（半角数字で答えなさい）',
    options: [],
    answer: '45',
    acceptableAnswers: ['45', '45回', '４５'],
    keywords: ['45', '握手', '対戦数'],
    knowledgeTag: '総当たり対戦数・握手の回数（nC2）',
    explanation: `【解法】
10人の中からペア（2人）を選ぶ組み合わせと同じです。
(10 × 9) ÷ (2 × 1) = 45回 となります。`
  },
  {
    id: 'm_comb_007',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '男子4人、女子5人の合計9人の中から、男子2人と女子2人の合計4人の代表を選ぶ選び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60通り', '６０'],
    keywords: ['60', '積の法則', '代表選び'],
    knowledgeTag: '条件付き組合せ・積の法則',
    explanation: `【解法】
・男子4人から2人選ぶ：(4 × 3) ÷ (2 × 1) = 6通り
・女子5人から2人選ぶ：(5 × 4) ÷ (2 × 1) = 10通り
積の法則より、6 × 10 = 60通り となります。`
  },
  {
    id: 'm_comb_008',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'グループ分け',
    difficulty: 'advanced',
    questionType: 'input',
    question: '6人の子どもを、2人ずつの3つのグループA、B、Cに分ける分け方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '90',
    acceptableAnswers: ['90', '90通り', '９０'],
    keywords: ['90', 'グループ分け', '組の区別あり'],
    knowledgeTag: '組の区別があるグループ分け',
    explanation: `【解法】
・グループAの2人を選ぶ：6C2 = (6 × 5) ÷ 2 = 15通り
・グループBの2人を選ぶ：残り4人から 4C2 = (4 × 3) ÷ 2 = 6通り
・グループCは自動的に決まる（1通り）
15 × 6 × 1 = 90通り となります。
（※組に区別がない場合は 90 ÷ 3! = 15通りになります）`
  },

  // 3. 道順・最短経路
  {
    id: 'm_comb_009',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】図のような縦3マス、横4マスの碁盤の目のような道があります。\n地点Aから地点Bまで、最短の道のりで行く道順は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '35',
    acceptableAnswers: ['35', '35通り', '３５'],
    keywords: ['35', '最短経路', '道順'],
    knowledgeTag: '碁盤の目の最短経路（足し算の法則・同じものを含む順列）',
    figureSvg: Geo.createGridPath({ cols: 4, rows: 3 }),
    explanation: `【解法】
右へ4回、上へ3回進むので、合計7回の進み方の並べ替えです。
7C3 = (7 × 6 × 5) ÷ (3 × 2 × 1) = 35通り となります。
（交差点に数を書き込んで足していく方法でも簡単に求められます）`
  },
  {
    id: 'm_comb_010',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'advanced',
    questionType: 'input',
    question: '縦4マス、横4マスの碁盤の目のような道があります。左下の地点Aから中央の交差点Pを通り、右上の地点Bまで最短の道のりで行く道順は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '36',
    acceptableAnswers: ['36', '36通り', '３６'],
    keywords: ['36', '特定の点を通る道順', '積の法則'],
    knowledgeTag: '経由地を指定された最短経路',
    figureSvg: Geo.createGridPath({ cols: 4, rows: 4 }),
    explanation: `【解法】
(AからPへの道順) × (PからBへの道順) の積の法則を使います。

・Aから中央の交差点Pまで（右へ2回、上へ2回）：
  4C2 = (4 × 3) ÷ (2 × 1) = 6通り

・交差点PからBまで（右へ2回、上へ2回）：
  4C2 = (4 × 3) ÷ (2 × 1) = 6通り

よって、中央の交差点Pを通る全体の最短道順は、
6 × 6 = 36通り
となります。`
  },

  // 4. サイコロ・コイン
  {
    id: 'm_comb_011',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、出た目の数の和が「8」になる出方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '5',
    acceptableAnswers: ['5', '5通り', '５'],
    keywords: ['5', 'サイコロ', '目の和8'],
    knowledgeTag: 'サイコロ2個の目の和の場合の数',
    explanation: `【解法】
(大, 小) の組を書き出します。
(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)
全部で 5通り となります。`
  },
  {
    id: 'm_comb_012',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'advanced',
    questionType: 'input',
    question: '大小2個のサイコロを同時に投げるとき、出た目の数の積（かけ算）が「12」になる出方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4通り', '４'],
    keywords: ['4', 'サイコロ', '目の積12'],
    knowledgeTag: 'サイコロ2個の目の積',
    explanation: `【解法】
1から6までの整数の積で12になる組：
(2, 6), (3, 4), (4, 3), (6, 2)
全部で 4通り となります。`
  },
  {
    id: 'm_comb_013',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: '硬貨を4枚同時に投げるとき、表がちょうど2枚出る出方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6通り', '６'],
    keywords: ['6', 'コイン', '表が2枚'],
    knowledgeTag: 'コイン投げの組合せ（4C2）',
    explanation: `【解法】
4枚の硬貨の中から表が出る2枚を選ぶ組み合わせと同じです。
4C2 = (4 × 3) ÷ (2 × 1) = 6通り となります。`
  },

  // 5. 色の塗り分け
  {
    id: 'm_comb_014',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '色の塗り分け',
    difficulty: 'standard',
    questionType: 'input',
    question: '【図形問題】図のように田の字型に分かれた4つの地域A, B, C, Dがあります。\n赤、青、黄、緑の4色を使って、隣り合う地域が同じ色にならないように塗り分けます。使える色が4色あるとき、塗り分け方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '84',
    acceptableAnswers: ['84', '84通り', '８４'],
    keywords: ['84', '色の塗り分け', '田の字'],
    knowledgeTag: '平面の塗り分け問題（同色の場合分け）',
    figureSvg: Geo.createColoringMap({ regions: 4 }),
    explanation: `【解法】
A, B, C, D のうち、向かい合う A と D、あるいは B と C の関係に着目します。
AとDが同じ色の場合と、異なる色の場合で分類します。
1. AとDが同じ色の場合：
・AとDの色：4通り
・Bの色：残り3通り
・Cの色：残り3通り
4 × 3 × 3 = 36通り
2. AとDが異なる色の場合：
・Aの色：4通り
・Dの色：残り3通り
・Bの色：AともDとも違うので残り2通り
・Cの色：AともDとも違うので残り2通り
4 × 3 × 2 × 2 = 48通り
合計 = 36 + 48 = 84通り となります。`
  },
  {
    id: 'm_comb_015',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '色の塗り分け',
    difficulty: 'standard',
    questionType: 'input',
    question: '正三角形を3等分した3つの部分を、赤・青・黄の3色すべてを使って1色ずつ塗り分けるとき、回転して同じになるものを除くと何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '2',
    acceptableAnswers: ['2', '2通り', '２'],
    keywords: ['2', '円順列', '正三角形塗り分け'],
    knowledgeTag: '正多角形の塗り分けと円順列',
    explanation: `【解法】
3つの場所を異なる3色で塗る円順列と同じです。
(3 - 1)! = 2 × 1 = 2通り（時計回りに赤青黄か、赤黄青の2通り）となります。`
  },

  // 6. 条件整理・論理・推理
  {
    id: 'm_comb_016',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'リーグ戦・対戦表',
    difficulty: 'standard',
    questionType: 'input',
    question: 'A, B, C, D, E の5チームがサッカーの総当たり戦（リーグ戦）を行いました。引き分けはなく、各チームの勝敗は次のようになりました。\n・Aは4勝0敗\n・Bは3勝1敗\n・Cは2勝2敗\n・Dは1勝3敗\nこのとき、Eチームの成績は何勝何敗ですか。（例：0勝4敗 のように答えなさい）',
    options: [],
    answer: '0勝4敗',
    acceptableAnswers: ['0勝4敗', '0勝', '0-4'],
    keywords: ['0勝4敗', 'リーグ戦', '勝ち負けの合計'],
    knowledgeTag: '総当たり戦の勝敗合計の保存則',
    explanation: `【解法】
5チームの総試合数 = 5C2 = (5 × 4) ÷ 2 = 10試合です。
引き分けがないので、全チームの勝ち数の合計は試合数と同じ「10勝」になります。
A(4) + B(3) + C(2) + D(1) = 10勝
すでに4チームの勝ち数の合計が 10勝 に達しているため、Eチームの勝ち数は 0勝 です。
各チーム4試合ずつ戦うので、Eチームは 0勝4敗 となります。`
  },
  {
    id: 'm_comb_017',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '推理・論理',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'A, B, C の3人が徒競走をしました。3人に順位を聞いたところ、次のように答えました。\n・A「私は1位ではありませんでした」\n・B「私は2位でした」\n・C「私は2位ではありませんでした」\n3人のうち、本当のことを言っているのは1人だけで、他の2人はうそをついています。1位だったのは誰ですか。（A, B, C のいずれかで答えなさい）',
    options: [],
    answer: 'B',
    acceptableAnswers: ['B', 'B君', 'Ｂ'],
    keywords: ['B', 'うそつき問題', '仮定'],
    knowledgeTag: 'うそつき問題・真偽の仮定法',
    explanation: `【解法】
誰が本当のことを言っているか仮定します。
1. Aが本当と仮定：
Aは2位か3位。BとCはうそなので、Bは2位ではない、Cは2位。
するとCが2位、Aが3位、Bが1位。このときBの発言「2位」はうそで整合します。
2. Bが本当と仮定：
Bが2位。AはうそなのでAは1位。CはうそなのでCは2位…BとCで2位が重複し矛盾。
3. Cが本当と仮定：
Cは1位か3位。AはうそなのでAは1位。BはうそなのでBは2位以外（3位）。するとCが2位になりCの発言と矛盾。
したがって、本当を言っているのはAで、順位は 1位がB、2位がC、3位がA となります。
1位は B です。`
  },
  {
    id: 'm_comb_018',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '支払える金額',
    difficulty: 'advanced',
    questionType: 'input',
    question: '10円玉が4枚、50円玉が1枚、100円玉が2枚あります。これらの一部または全部を使って、お釣りなしでちょうど支払うことができる金額（0円を除く）は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '29',
    acceptableAnswers: ['29', '29通り', '２９'],
    keywords: ['29', '硬貨', '支払える金額'],
    knowledgeTag: '硬貨の組合せと両替による重複解消',
    explanation: `【解法】
10円玉4枚では50円を作れないため、10円玉と50円玉・100円玉の間に重複はありません。
・10円玉（0〜4枚）：5通り
・50円玉と100円玉で作れる金額：
50円玉1枚と100円玉2枚で作れるのは、
0, 50, 100, 150, 200, 250円 の 6通り です。
これらを組み合わせると、
5 × 6 = 30通り
ここから「0円」の1通りを除くので、
30 - 1 = 29通り となります。`
  },
  {
    id: 'm_comb_019',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'standard',
    questionType: 'input',
    question: '1, 2, 3, 4 の4枚のカードを並べてできる4桁の整数のうち、「偶数」は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12通り', '１２'],
    keywords: ['12', '偶数', '一の位の条件'],
    knowledgeTag: '偶数の条件と順列',
    explanation: `【解法】
偶数になるには、一の位が「2」または「4」でなければなりません。
1. 一の位が2の場合：千、百、十の位に残りの3枚を並べるので 3 × 2 × 1 = 6通り
2. 一の位が4の場合：同様に 3 × 2 × 1 = 6通り
合計 = 6 + 6 = 12通り となります。`
  },
  {
    id: 'm_comb_020',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '重複組合せ',
    difficulty: 'advanced',
    questionType: 'input',
    question: '区別のつかない8個のアメを、A君、B君、C君の3人に少なくとも1個は配る配り方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '21',
    acceptableAnswers: ['21', '21通り', '２１'],
    keywords: ['21', '仕切り板', '重複組合せ'],
    knowledgeTag: '仕切り板による玉の分配（重複組合せ）',
    explanation: `【解法】
横に並んだ8個のアメの間（すき間7か所）から、仕切りを入れる2か所を選びます。
7C2 = (7 × 6) ÷ (2 × 1) = 21通り となります。`
  },
  {
    id: 'm_comb_021',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'トーナメント戦',
    difficulty: 'standard',
    questionType: 'input',
    question: '16チームが参加する勝ち残り式（トーナメント戦）の大会で、優勝が決まるまでに行われる全試合数は何試合ですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15試合', '１５'],
    keywords: ['15', 'トーナメント', '試合数'],
    knowledgeTag: 'トーナメント戦の試合数（N-1の法則）',
    explanation: `【解法】
トーナメント戦では、1試合ごとに必ず1チームが敗退します。
優勝する1チーム以外の 16 - 1 = 15チーム が敗退する必要があるため、
全試合数は必ず 16 - 1 = 15試合 となります。`
  },
  {
    id: 'm_comb_022',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: 'サイコロ・コイン',
    difficulty: 'standard',
    questionType: 'input',
    question: 'サイコロを2個同時に投げるとき、2つのサイコロの目の差が「2」になる出方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '8通り', '８'],
    keywords: ['8', '目の差2', 'サイコロ'],
    knowledgeTag: 'サイコロ2個の目の差',
    explanation: `【解法】
差が2になるペア：
(1, 3), (2, 4), (3, 5), (4, 6) の4組
大小の入れ替えを考えると、4 × 2 = 8通り となります。`
  },
  {
    id: 'm_comb_023',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '組合せ・選び方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '円周上に等間隔に並んだ6個の点があります。この中から3個の点を選んで結んでできる三角形は全部で何個ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '20',
    acceptableAnswers: ['20', '20個', '２０'],
    keywords: ['20', '円周上の点', '三角形の個数'],
    knowledgeTag: '円周上の点から作られる図形の個数',
    explanation: `【解法】
円周上の3点はどの3点も一直線上に並ばないため、任意の3点を選べば必ず三角形ができます。
6C3 = (6 × 5 × 4) ÷ (3 × 2 × 1) = 20個 となります。`
  },
  {
    id: 'm_comb_024',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '順列・並べ方',
    difficulty: 'advanced',
    questionType: 'input',
    question: '4人の生徒A, B, C, Dがそれぞれ自分の帽子を1つずつ持っています。4人が適当に1つずつ帽子を選んだとき、4人全員が「自分の帽子ではない帽子」を選ぶ選び方は全部で何通りありますか。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '9通り', '完全順列', '攪乱順列'],
    keywords: ['9', '完全順列', 'モンモール数'],
    knowledgeTag: '完全順列（モンモール数）の基本',
    explanation: `【解法】
有名問題「完全順列（攪乱順列）」です。
4人の場合の完全順列の数は 9通り です。
（※樹形図でAがBを取った場合（3通り）× 3 = 9通り と導けます）`
  },
  {
    id: 'm_comb_025',
    subject: '算数',
    category: '場合の数・論理',
    subCategory: '道順（最短経路）',
    difficulty: 'advanced',
    questionType: 'input',
    question: '縦4マス、横4マスの碁盤の目の道で、中央の交差点Pを必ず通ってAからBまで行く最短道順は何通りですか。（半角数字で答えなさい）',
    options: [],
    answer: '36',
    acceptableAnswers: ['36', '36通り', '３６'],
    keywords: ['36', '中央を通る', '積の法則'],
    knowledgeTag: '経由地付き最短経路（積の法則）',
    figureSvg: Geo.createGridPath({ cols: 4, rows: 4 }),
    explanation: `【解法】
AからPまでの最短経路：4C2 = (4 × 3) ÷ 2 = 6通り
PからBまでの最短経路：4C2 = (4 × 3) ÷ 2 = 6通り
全体の道順 = 6 × 6 = 36通り となります。`
  }
];
