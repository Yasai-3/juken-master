import fs from "fs";
import path from "path";

const MATH_PILOT_QUESTIONS = [
  {
    "id": "m_speed_001",
    "subject": "算数",
    "category": "速さ",
    "subCategory": "比を使う旅人算",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "A地点とB地点の間を、P君とQ君が同時にそれぞれの地点を出発して休まず往復します。P君とQ君の走る速さの比は 5 : 3 です。\n2人が2回目に出会ったのは、A地点から160m離れた地点でした。\nA地点からB地点までの距離は何mですか。（半角数字で答えなさい）",
    "options": [],
    "answer": "1280",
    "acceptableAnswers": [
      "1280",
      "1280m",
      "1280メートル",
      "１２８０"
    ],
    "keywords": [
      "1280",
      "比",
      "往復"
    ],
    "knowledgeTag": "比を使う旅人算・複数回出会い",
    "explanation": "【解法】\n2人が2回目に出会うまでに走った合計距離は、片道（A〜B）の3倍です。\n速さの比が P:Q = 5:3 なので、2人が進んだ距離の比も 5:3 となります。\n\nP君が走った距離は、片道3本分のうち\n3 × 5/(5+3) = 15/8（片道1本と 7/8）です。\n\nP君はA地点を出発してB地点で折り返し、A地点に向かう途中でQ君と出会うため、2回目に出会った地点はA地点から\n1 - 7/8 = 1/8 の地点になります。\n\nこの 1/8 が 160m にあたるため、A地点からB地点までの距離は、\n160 ÷ (1/8) = 1280m となります。"
  },
  {
    "id": "m_speed_002",
    "subject": "算数",
    "category": "速さ",
    "subCategory": "流水算",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "一定の速さで流れる川の上流にP地点、下流にQ地点があります。\n静水時での速さが異なる船Aと船Bがあり、船AがP〜Q間を上るのにかかる時間と、船Bが下るのにかかる時間の比は 5 : 2 です。\nまた、船Aと船Bの静水時の速さの比が 7 : 5 であるとき、川の流れの速さと船Aの静水時の速さの比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）",
    "options": [],
    "answer": "1:7",
    "acceptableAnswers": [
      "1:7",
      "1：7",
      "1対7",
      "１：７"
    ],
    "keywords": [
      "1:7",
      "流水算",
      "静水時"
    ],
    "knowledgeTag": "流水算・比と時間の積",
    "explanation": "【解法】\n同じ距離を進むとき、速さの比は「時間の比の逆比」になります。\n(船Aの上りの速さ) : (船Bの下りの速さ) = (1/5) : (1/2) = 2 : 5 です。\n\n船Aの上りの速さを ②、船Bの下りの速さを ⑤ とおきます。\n船Aと船Bの静水時の速さの比は 7 : 5 なので、Aの静水時を [7]、Bの静水時を [5]、川の流れの速さを (川) とおきます。\n\n上りの速さ：[7] - (川) = ②  … ①\n下りの速さ：[5] + (川) = ⑤  … ②\n\n①と②を連立して解くと、\n(川の流れの速さ) : (船Aの静水時の速さ) = 1 : 7 と整数の比になります。"
  },
  {
    "id": "m_speed_003",
    "subject": "算数",
    "category": "速さ",
    "subCategory": "比を使う旅人算",
    "difficulty": "standard",
    "questionType": "input",
    "question": "兄はA町からB町へ、弟はB町からA町へ向かって同時に歩き始めました。2人は途中のP地点で出会い、そのとき兄は弟より1.2km多く進んでいました。\nその後、兄は出会ってから24分後にB町に着き、弟は出会ってから54分後にA町に着きました。\nA町からB町までの距離は何kmですか。（半角の整数または小数で答えなさい）",
    "options": [],
    "answer": "6",
    "acceptableAnswers": [
      "6",
      "6km",
      "6キロ",
      "6.0",
      "６"
    ],
    "keywords": [
      "6",
      "出会い",
      "時間の逆比"
    ],
    "knowledgeTag": "旅人算・出会い後の時間と速さの比",
    "explanation": "【解法】\n2人が出会った後の時間比は 兄:弟 = 24分 : 54分 = 4 : 9 です。\n同じ区間を進むのにかかった時間比から、兄と弟の速さの比は所要時間の逆比の比率（平方根比）になります。\n(兄の速さ) : (弟の速さ) = √54 : √24 = √9 : √4 = 3 : 2\n\n速さの比が 3 : 2 なので、同時に出発して出会うまでに進んだ距離の比も\n(A〜P) : (P〜B) = 3 : 2 です。\n\n進んだ距離の差（③ - ② = ①）が 1.2km にあたるので、比の① = 1.2km です。\nA町からB町までの全距離は ③ + ② = ⑤ なので、\n1.2km × 5 = 6km となります。"
  },
  {
    "id": "m_num_001",
    "subject": "算数",
    "category": "数の性質",
    "subCategory": "素因数分解と倍数",
    "difficulty": "standard",
    "questionType": "input",
    "question": "1から50までのすべての連続する整数の積（1 × 2 × 3 × … × 50）を計算したとき、その積の末尾（一の位から）には連続して「0」が何個並びますか。（半角数字で答えなさい）",
    "options": [],
    "answer": "12",
    "acceptableAnswers": [
      "12",
      "12個",
      "１２"
    ],
    "keywords": [
      "12",
      "素因数分解",
      "末尾の0"
    ],
    "knowledgeTag": "素因数分解・ルジャンドルの公式",
    "explanation": "【解法】\n積の末尾に「0」が1個つくのは、素因数に「10 = 2 × 5」が1組含まれるときです。\n素因数「5」の個数を数えます。\n\n・5の倍数の個数：50 ÷ 5 = 10個\n・25（5×5）の倍数の個数：50 ÷ 25 = 2個\n合計：10 + 2 = 12個\n\nしたがって、末尾には「0」が連続して 12個 並びます。"
  },
  {
    "id": "m_num_002",
    "subject": "算数",
    "category": "数の性質",
    "subCategory": "規則性と周期",
    "difficulty": "standard",
    "questionType": "input",
    "question": "分数 5/13 を小数で表したとき、小数第100位の数字は何ですか。（半角数字で答えなさい）",
    "options": [],
    "answer": "6",
    "acceptableAnswers": [
      "6",
      "６"
    ],
    "keywords": [
      "6",
      "循環小数",
      "周期"
    ],
    "knowledgeTag": "分数の小数変換・循環周期",
    "explanation": "【解法】\n5 ÷ 13 = 0.384615 384615 …\n「3, 8, 4, 6, 1, 5」という 6個の数字が1つのセットとなって繰り返し現れます。\n\n100 ÷ 6 = 16 余り 4\nセットの4番目の数字は「6」です。\nしたがって、小数第100位の数字は 6 となります。"
  },
  {
    "id": "m_num_003",
    "subject": "算数",
    "category": "数の性質",
    "subCategory": "倍数と約数",
    "difficulty": "standard",
    "questionType": "input",
    "question": "3桁の整数（100から999まで）のうち、4でも6でも割り切れない整数は全部で何個ありますか。（半角数字で答えなさい）",
    "options": [],
    "answer": "600",
    "acceptableAnswers": [
      "600",
      "600個",
      "６００"
    ],
    "keywords": [
      "600",
      "倍数の個数",
      "ベン図"
    ],
    "knowledgeTag": "倍数の個数・集合とベン図",
    "explanation": "【解法】\n3桁の整数全体：999 - 100 + 1 = 900個\n4と6の最小公倍数は12です。\n\n・4の倍数：(999 ÷ 4) - (99 ÷ 4) = 249 - 24 = 225個\n・6の倍数：(999 ÷ 6) - (99 ÷ 6) = 166 - 16 = 150個\n・12の倍数：(999 ÷ 12) - (99 ÷ 12) = 83 - 8 = 75個\n\n4または6で割り切れる個数：225 + 150 - 75 = 300個\n割り切れない整数：900 - 300 = 600個 となります。"
  },
  {
    "id": "m_geom_ratio_001",
    "subject": "算数",
    "category": "平面図形の比",
    "subCategory": "相似と面積比",
    "difficulty": "standard",
    "questionType": "input",
    "question": "【図形問題】上底ADの長さが4cm、下底BCの長さが6cmの台形ABCDがあります。\n図のように、対角線ACとBDの交点をOとしたところ、三角形AODの面積が8cm²でした。\nこのとき、台形ABCD全体の面積は何cm²ですか。（半角数字で答えなさい）",
    "options": [],
    "answer": "50",
    "acceptableAnswers": [
      "50",
      "50cm2",
      "50㎠",
      "５０"
    ],
    "keywords": [
      "50",
      "相似比",
      "台形"
    ],
    "knowledgeTag": "台形と砂時計相似・面積比",
    "figureSvg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 台形本体 -->\n  <polygon points=\"100,45 220,45 250,175 70,175\" fill=\"#1e293b\" fill-opacity=\"0.6\" stroke=\"#6366f1\" stroke-width=\"2.5\" />\n  <!-- 対角線 AC, BD -->\n  <line x1=\"100\" y1=\"45\" x2=\"250\" y2=\"175\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <line x1=\"220\" y1=\"45\" x2=\"70\" y2=\"175\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <!-- △AOD (ハイライト) -->\n  <polygon points=\"100,45 220,45 160,97\" fill=\"#fbbf24\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <text x=\"160\" y=\"73\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#fde68a\" filter=\"url(#glow)\">8 cm²</text>\n  <!-- 交点O -->\n  <circle cx=\"160\" cy=\"97\" r=\"3.5\" fill=\"#f59e0b\" />\n  <text x=\"175\" y=\"104\" font-size=\"14\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow)\">O</text>\n  <!-- 頂点ラベル（明るい白） -->\n  <text x=\"82\" y=\"42\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow)\">A</text>\n  <text x=\"230\" y=\"42\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow)\">D</text>\n  <text x=\"52\" y=\"185\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow)\">B</text>\n  <text x=\"260\" y=\"185\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow)\">C</text>\n  <!-- 長さラベル -->\n  <text x=\"160\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow)\">AD = 4cm</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow)\">BC = 6cm</text>\n</svg>",
    "explanation": "【解法】\nAD // BC より、三角形AODと三角形COBは相似です。\n相似比は AD : BC = 4 : 6 = 2 : 3 です。\n面積比は相似比の2乗なので、\n(△AOD) : (△COB) = 2² : 3² = 4 : 9 です。\n\n△AOD = 8cm² より、比の[1]あたり 2cm² です。\nよって △COB = 9 × 2 = 18cm² です。\n\nまた、高さ共通より △AOB = △AOD × (3/2) = 12cm²、△DOC = 12cm² です。\n台形全体の面積 = 8 + 18 + 12 + 12 = 50cm² となります。"
  },
  {
    "id": "m_geom_ratio_002",
    "subject": "算数",
    "category": "平面図形の比",
    "subCategory": "図形の折り返し",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "【図形問題】縦の長さが6cm、横の長さが8cmの長方形ABCDがあります。\n図のように、この長方形を対角線BDで折り返したとき、折り返した辺BCが辺ADと交わる点をPとします。\nこのとき、線分APの長さは何cmですか。（小数または既約分数で答えなさい）",
    "options": [],
    "answer": "1.75",
    "acceptableAnswers": [
      "1.75",
      "7/4",
      "1.75cm",
      "7/4cm",
      "1と3/4"
    ],
    "keywords": [
      "1.75",
      "7/4",
      "折り返し",
      "二等辺三角形"
    ],
    "knowledgeTag": "長方形の折り返し・二等辺三角形の発見",
    "figureSvg": "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow2\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 元の長方形の点線枠 -->\n  <rect x=\"70\" y=\"50\" width=\"160\" height=\"120\" fill=\"none\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <!-- 折り返し対角線 BD -->\n  <line x1=\"70\" y1=\"170\" x2=\"230\" y2=\"50\" stroke=\"#818cf8\" stroke-width=\"2.5\" />\n  <!-- 折り返された三角形 BDC' (数学的厳密座標: C'=(114.8, 16.4)) -->\n  <polygon points=\"70,170 230,50 114.8,16.4\" fill=\"#6366f1\" fill-opacity=\"0.25\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <!-- 直角三角形 ABP (APの長さを求める部分) -->\n  <polygon points=\"70,170 70,50 105,50\" fill=\"#f43f5e\" fill-opacity=\"0.3\" stroke=\"#f43f5e\" stroke-width=\"2\" />\n  <!-- 交点P (厳密座標: (105, 50)) -->\n  <circle cx=\"105\" cy=\"50\" r=\"4\" fill=\"#fbbf24\" />\n  <text x=\"105\" y=\"38\" font-size=\"14\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow2)\">P</text>\n  <!-- 頂点ラベル -->\n  <text x=\"52\" y=\"48\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow2)\">A</text>\n  <text x=\"242\" y=\"48\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow2)\">D</text>\n  <text x=\"52\" y=\"185\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow2)\">B</text>\n  <text x=\"240\" y=\"180\" font-size=\"13\" font-weight=\"bold\" fill=\"#64748b\" filter=\"url(#glow2)\">C</text>\n  <text x=\"120\" y=\"15\" font-size=\"13\" font-weight=\"bold\" fill=\"#a78bfa\" filter=\"url(#glow2)\">C'</text>\n  <!-- 寸法ラベル -->\n  <text x=\"42\" y=\"115\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow2)\">6cm</text>\n  <text x=\"175\" y=\"40\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow2)\">8cm</text>\n</svg>",
    "explanation": "【解法】\n折り返し角 ∠PBD = ∠CBD、錯角 ∠PDB = ∠CBD より、\n∠PBD = ∠PDB となり、三角形PBDは PB = PD の二等辺三角形です。\n\nPD = x cm とおくと、PB = x cm、AP = 8 - x cm です。\n直角三角形ABPにおいて、\n6² + (8 - x)² = x²\n36 + 64 - 16x + x² = x²\n100 = 16x  より  x = 6.25cm\n\nよって AP = 8 - 6.25 = 1.75cm（7/4 cm）となります。"
  },
  {
    "id": "m_geom_ratio_003",
    "subject": "算数",
    "category": "平面図形の比",
    "subCategory": "線分比と面積比",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "【図形問題】三角形ABCにおいて、辺AB上に点D、辺AC上に点Eがあり、AD : DB = 2 : 3、AE : EC = 3 : 4 です。\n図のように、線分BEと線分CDの交点をPとするとき、三角形PBCの面積と三角形ABC全体の面積の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）",
    "options": [],
    "answer": "2:5",
    "acceptableAnswers": [
      "2:5",
      "2：5",
      "2対5",
      "２：５"
    ],
    "keywords": [
      "2:5",
      "メネラウス",
      "チェバ",
      "ベンツの定理"
    ],
    "knowledgeTag": "三角形の内部の交点・面積比の連比",
    "figureSvg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow3\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 三角形全体 ABC -->\n  <polygon points=\"160,30 60,190 260,190\" fill=\"#1e293b\" fill-opacity=\"0.6\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n  <!-- 線分 BE, CD (交点P=(163.5, 123.8)) -->\n  <line x1=\"60\" y1=\"190\" x2=\"202.9\" y2=\"98.6\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <line x1=\"260\" y1=\"190\" x2=\"120\" y2=\"94\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <!-- △PBC (求める面積部分) -->\n  <polygon points=\"163.5,123.8 60,190 260,190\" fill=\"#38bdf8\" fill-opacity=\"0.3\" stroke=\"#0ea5e9\" stroke-width=\"2.5\" />\n  <!-- 交点P -->\n  <circle cx=\"163.5\" cy=\"123.8\" r=\"4\" fill=\"#f43f5e\" />\n  <text x=\"163.5\" y=\"115\" font-size=\"14\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\" filter=\"url(#glow3)\">P</text>\n  <!-- 分割点 D, E -->\n  <circle cx=\"120\" cy=\"94\" r=\"3\" fill=\"#818cf8\" />\n  <circle cx=\"202.9\" cy=\"98.6\" r=\"3\" fill=\"#818cf8\" />\n  <text x=\"92\" y=\"90\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" filter=\"url(#glow3)\">D (2:3)</text>\n  <text x=\"215\" y=\"95\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" filter=\"url(#glow3)\">E (3:4)</text>\n  <!-- 頂点ラベル（明るい白） -->\n  <text x=\"160\" y=\"20\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow3)\">A</text>\n  <text x=\"42\" y=\"200\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow3)\">B</text>\n  <text x=\"270\" y=\"200\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow3)\">C</text>\n</svg>",
    "explanation": "【解法】\n三角形の内部の点Pと各頂点を結んでできる面積比の性質を利用します。\n直線BEについて、(△PAB) : (△PBC) = AE : EC = 3 : 4\n直線CDについて、(△PCA) : (△PBC) = AD : DB = 2 : 3\n\n共通する△PBCを比の12にそろえると、\n△PBC = [12]\n△PAB = [9]\n△PCA = [8]\n△ABC全体に対する比を計算すると、\n(△PBCの面積) : (△ABC全体の面積) = 2 : 5 となります。"
  },
  {
    "id": "m_geom_ratio_004",
    "subject": "算数",
    "category": "平面図形の比",
    "subCategory": "相似と面積比",
    "difficulty": "standard",
    "questionType": "input",
    "question": "【図形問題】直角をはさむ2辺の長さが AB = 6cm、BC = 8cm の直角三角形ABCがあります。\n図のように、直角三角形の内部に直角の頂点Bを共有する正方形BDEFをぴったり入れました。\nこのとき、正方形BDEFの1辺の長さは何cmですか。（既約分数で答えなさい）",
    "options": [],
    "answer": "24/7",
    "acceptableAnswers": [
      "24/7",
      "24/7cm",
      "3と3/7",
      "3と3/7cm"
    ],
    "keywords": [
      "24/7",
      "直角三角形",
      "内接正方形"
    ],
    "knowledgeTag": "直角三角形と内接正方形の相似比",
    "figureSvg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow4\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 直角三角形 ABC (A=(60,35), B=(60,185), C=(260,185)) -->\n  <polygon points=\"60,35 60,185 260,185\" fill=\"#1e293b\" fill-opacity=\"0.5\" stroke=\"#94a3b8\" stroke-width=\"2.5\" />\n  <!-- 正方形 BDEF (一辺 85.71px、頂点E=(145.71, 99.29) は斜辺ACに1pxの狂いなく厳密に内接) -->\n  <rect x=\"60\" y=\"99.29\" width=\"85.71\" height=\"85.71\" fill=\"#fbbf24\" fill-opacity=\"0.25\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n  <!-- 直角マーク -->\n  <polyline points=\"60,173 72,173 72,185\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n  <polyline points=\"60,111.29 72,111.29 72,99.29\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\" />\n  <!-- 接点Eのハイライト点 -->\n  <circle cx=\"145.71\" cy=\"99.29\" r=\"3.5\" fill=\"#f59e0b\" />\n  <!-- 頂点ラベル（明るい白） -->\n  <text x=\"42\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow4)\">A</text>\n  <text x=\"42\" y=\"198\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow4)\">B</text>\n  <text x=\"270\" y=\"195\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow4)\">C</text>\n  <text x=\"42\" y=\"103\" font-size=\"13\" font-weight=\"bold\" fill=\"#fbbf24\" filter=\"url(#glow4)\">D</text>\n  <text x=\"152\" y=\"94\" font-size=\"13\" font-weight=\"bold\" fill=\"#fbbf24\" filter=\"url(#glow4)\">E</text>\n  <text x=\"142\" y=\"202\" font-size=\"13\" font-weight=\"bold\" fill=\"#fbbf24\" filter=\"url(#glow4)\">F</text>\n  <!-- 寸法ラベル -->\n  <text x=\"25\" y=\"70\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow4)\">6cm</text>\n  <text x=\"180\" y=\"205\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow4)\">BC = 8cm</text>\n</svg>",
    "explanation": "【解法】\n正方形の向かい合う辺は平行なので、DE // BC です。\nこれにより、上の小さな三角形ADEと、直角三角形ABC全体は相似になります。\n相似比は AB : BC = 6 : 8 = 3 : 4 です。\n\n正方形BDEFの1辺の長さを x cm とおくと、\nDE = x cm、AD = 6 - x cm です。\n\n△ADE ∽ △ABC より、\n(6 - x) : x = 3 : 4\n3x = 24 - 4x\n7x = 24\nx = 24/7 cm （3と3/7 cm）\n\nしたがって、正方形の1辺の長さは 24/7 cm となります。"
  },
  {
    "id": "m_geom_ratio_005",
    "subject": "算数",
    "category": "平面図形の比",
    "subCategory": "平行四辺形と比",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "【図形問題】平行四辺形ABCDがあり、辺BC上に点Eをとったところ、BE : EC = 2 : 1 となりました。\n図のように、対角線BDと線分AEの交点をFとします。\nこのとき、三角形AFDの面積と、四角形FECDの面積の比を最も簡単な整数の比で答えなさい。（例：1:2 のように答えなさい）",
    "options": [],
    "answer": "9:11",
    "acceptableAnswers": [
      "9:11",
      "9：11",
      "9対11"
    ],
    "keywords": [
      "9:11",
      "平行四辺形",
      "砂時計相似"
    ],
    "knowledgeTag": "平行四辺形内の相似と面積比",
    "figureSvg": "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow5\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 平行四辺形本体 ABCD -->\n  <polygon points=\"90,40 290,40 250,180 50,180\" fill=\"#1e293b\" fill-opacity=\"0.6\" stroke=\"#6366f1\" stroke-width=\"2.5\" />\n  <!-- 対角線 BD -->\n  <line x1=\"50\" y1=\"180\" x2=\"290\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <!-- 線分 AE (E=(183.33, 180)) -->\n  <line x1=\"90\" y1=\"40\" x2=\"183.33\" y2=\"180\" stroke=\"#a78bfa\" stroke-width=\"2\" />\n  <!-- △AFD (ハイライト、厳密交点 F=(146, 124)) -->\n  <polygon points=\"90,40 290,40 146,124\" fill=\"#fbbf24\" fill-opacity=\"0.25\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <!-- 四角形 FECD (ハイライト) -->\n  <polygon points=\"146,124 183.33,180 250,180 290,40\" fill=\"#a78bfa\" fill-opacity=\"0.2\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <!-- 交点F (直線BDと線分AEの厳密な交点) -->\n  <circle cx=\"146\" cy=\"124\" r=\"4\" fill=\"#f43f5e\" />\n  <text x=\"135\" y=\"120\" font-size=\"14\" font-weight=\"bold\" fill=\"#f43f5e\" filter=\"url(#glow5)\">F</text>\n  <!-- 点E -->\n  <circle cx=\"183.33\" cy=\"180\" r=\"3\" fill=\"#a78bfa\" />\n  <!-- 頂点ラベル（明るい白） -->\n  <text x=\"75\" y=\"32\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow5)\">A</text>\n  <text x=\"300\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow5)\">D</text>\n  <text x=\"32\" y=\"190\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow5)\">B</text>\n  <text x=\"260\" y=\"190\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow5)\">C</text>\n  <text x=\"183.33\" y=\"202\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow5)\">E (2:1)</text>\n</svg>",
    "explanation": "【解法】\nAD // BC より、三角形AFDと三角形EFBは相似です。\nAD = BC = 2 + 1 = 3 なので、相似比は AD : BE = 3 : 2 です。\n面積比は (△AFD) : (△EFB) = 3² : 2² = [9] : [4] です。\n\nDF : FB = 3 : 2 より、△ABF = [4] × (3/2) = [6] です。\n△ABD = [9] + [6] = [15] なので、平行四辺形全体は [30] です。\n四角形FECDの面積 = 30 - (△AFD[9] + △ABF[6] + △EFB[4]) = [11] です。\n\nしたがって、\n(三角形AFDの面積) : (四角形FECDの面積) = 9 : 11 となります。"
  },
  {
    "id": "m_geom_ratio_006",
    "subject": "算数",
    "category": "平面図形の比",
    "subCategory": "線分比と面積比",
    "difficulty": "standard",
    "questionType": "input",
    "question": "【図形問題】四角形ABCDの対角線ACとBDの交点をOとします。\n図のように、三角形ABOの面積が12cm²、三角形BCOの面積が18cm²、三角形CDOの面積が24cm²であるとき、三角形DAOの面積は何cm²ですか。（半角数字で答えなさい）",
    "options": [],
    "answer": "16",
    "acceptableAnswers": [
      "16",
      "16cm2",
      "16㎠",
      "１６"
    ],
    "keywords": [
      "16",
      "対角線交点",
      "面積比"
    ],
    "knowledgeTag": "四角形の対角線分割と向かい合う面積の積",
    "figureSvg": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow6\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 四角形 ABCD -->\n  <polygon points=\"110,45 280,60 235,185 60,160\" fill=\"#1e293b\" fill-opacity=\"0.5\" stroke=\"#94a3b8\" stroke-width=\"2.5\" />\n  <!-- 対角線 AC, BD (数学的厳密交点 O=(160, 110)) -->\n  <line x1=\"110\" y1=\"45\" x2=\"235\" y2=\"185\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <line x1=\"280\" y1=\"60\" x2=\"60\" y2=\"160\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <!-- 交点O -->\n  <circle cx=\"160\" cy=\"110\" r=\"3.5\" fill=\"#f59e0b\" />\n  <text x=\"168\" y=\"105\" font-size=\"14\" font-weight=\"bold\" fill=\"#f59e0b\" filter=\"url(#glow6)\">O</text>\n  <!-- 面積テキスト -->\n  <text x=\"100\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow6)\">12 cm²</text>\n  <text x=\"145\" y=\"165\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow6)\">18 cm²</text>\n  <text x=\"215\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow6)\">24 cm²</text>\n  <text x=\"180\" y=\"65\" font-size=\"13\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow6)\">? cm²</text>\n  <!-- 頂点ラベル（明るい白） -->\n  <text x=\"98\" y=\"38\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow6)\">A</text>\n  <text x=\"290\" y=\"60\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow6)\">D</text>\n  <text x=\"242\" y=\"198\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow6)\">C</text>\n  <text x=\"42\" y=\"170\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow6)\">B</text>\n</svg>",
    "explanation": "【解法】\n対角線の交点Oによって分かれた三角形の底辺比に注目します。\n△ABO : △BCO = AO : OC = 12 : 18 = 2 : 3 です。\n\n反対側の三角形でも同じ比が成り立ちます。\n△DAO : △CDO = AO : OC = 2 : 3\n\n△CDOの面積が 24cm² なので、\n△DAO = 24 × (2/3) = 16cm² となります。\n※向かい合う三角形の積（12 × 24 = 18 × △DAO）からも求められます。"
  },
  {
    "id": "m_geom_area_001",
    "subject": "算数",
    "category": "平面図形の面積",
    "subCategory": "円とおうぎ形",
    "difficulty": "basic",
    "questionType": "input",
    "question": "【図形問題】1辺の長さが10cmの正方形ABCDがあります。\n図のように、頂点Bを中心とする半径10cmの円弧ACと、頂点Dを中心とする半径10cmの円弧ACを引いてできる、中央の葉っぱのような形をした部分の面積は何cm²ですか。\nただし、円周率は3.14とします。（半角数字で答えなさい）",
    "options": [],
    "answer": "57",
    "acceptableAnswers": [
      "57",
      "57cm2",
      "57㎠",
      "５７"
    ],
    "keywords": [
      "57",
      "葉っぱ型",
      "円周率3.14"
    ],
    "knowledgeTag": "円とおうぎ形・葉っぱ型の面積公式",
    "figureSvg": "<svg viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow7\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <rect x=\"40\" y=\"40\" width=\"160\" height=\"160\" fill=\"#1e293b\" fill-opacity=\"0.5\" stroke=\"#475569\" stroke-width=\"2\" />\n  <path d=\"M 40,40 A 160,160 0 0,1 200,200 A 160,160 0 0,1 40,40\" fill=\"#10b981\" fill-opacity=\"0.3\" stroke=\"#10b981\" stroke-width=\"2.5\" />\n  <text x=\"24\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow7)\">A</text>\n  <text x=\"210\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow7)\">D</text>\n  <text x=\"24\" y=\"215\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow7)\">B</text>\n  <text x=\"210\" y=\"215\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow7)\">C</text>\n  <text x=\"120\" y=\"30\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow7)\">10 cm</text>\n  <text x=\"24\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow7)\">10 cm</text>\n</svg>",
    "explanation": "【解法】\n半径10cm、中心角90度のおうぎ形2つの面積の合計から、正方形ABCDの面積を引きます。\n\n・おうぎ形2つの面積：10 × 10 × 3.14 × (1/4) × 2 = 157cm²\n・正方形ABCDの面積：10 × 10 = 100cm²\n葉っぱ型の面積 = 157 - 100 = 57cm²\n\n※公式「1辺×1辺 × 0.57」＝ 10 × 10 × 0.57 = 57cm²"
  },
  {
    "id": "m_geom_area_002",
    "subject": "算数",
    "category": "平面図形の面積",
    "subCategory": "図形の転がり移動",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "【図形問題】1辺の長さが6cmの正三角形ABCが、直線Lの上をすべることなく時計回りに1回転します。\n図のように、頂点Aが動いて描く線の長さは何cmですか。ただし、円周率は3.14とします。（小数で答えなさい）",
    "options": [],
    "answer": "25.12",
    "acceptableAnswers": [
      "25.12",
      "25.12cm",
      "２５．１２"
    ],
    "keywords": [
      "25.12",
      "転がり移動",
      "正三角形"
    ],
    "knowledgeTag": "正多角形の転がり移動・軌跡の長さ",
    "figureSvg": "<svg viewBox=\"0 0 360 170\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow8\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 直線 L -->\n  <line x1=\"20\" y1=\"130\" x2=\"340\" y2=\"130\" stroke=\"#64748b\" stroke-width=\"3\" />\n  <text x=\"345\" y=\"135\" font-size=\"13\" font-weight=\"bold\" fill=\"#94a3b8\">L</text>\n  <!-- 最初の三角形 (1辺 60px) -->\n  <polygon points=\"50,78 20,130 80,130\" fill=\"#6366f1\" fill-opacity=\"0.3\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <text x=\"50\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow8)\">A</text>\n  <text x=\"15\" y=\"148\" font-size=\"12\" font-weight=\"bold\" fill=\"#cbd5e1\" filter=\"url(#glow8)\">B</text>\n  <text x=\"80\" y=\"148\" font-size=\"12\" font-weight=\"bold\" fill=\"#cbd5e1\" filter=\"url(#glow8)\">C</text>\n  <!-- 弧1: 半径60、中心C(80,130)でAが回転して床に着地(140,130) -->\n  <path d=\"M 50,78 A 60,60 0 0,1 140,130\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\" />\n  <circle cx=\"140\" cy=\"130\" r=\"3.5\" fill=\"#f43f5e\" />\n  <text x=\"140\" y=\"148\" font-size=\"12\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\" filter=\"url(#glow8)\">A</text>\n  <!-- 弧2: 半径60、中心(170,78)を経て(230,78)へ立ち上がる -->\n  <path d=\"M 140,130 A 60,60 0 0,1 230,78\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\" />\n  <circle cx=\"230\" cy=\"78\" r=\"3.5\" fill=\"#f43f5e\" />\n  <text x=\"230\" y=\"68\" font-size=\"13\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\" filter=\"url(#glow8)\">A</text>\n  <!-- 最終位置の三角形 -->\n  <polygon points=\"230,78 200,130 260,130\" fill=\"#334155\" fill-opacity=\"0.3\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <text x=\"180\" y=\"25\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow8)\">頂点Aの動く軌跡（2本の円弧）</text>\n</svg>",
    "explanation": "【解法】\n正三角形が転がるとき、頂点Aは半径6cm、中心角120度のおうぎ形の弧を2回描きます。\n(直径12cm) × 3.14 × (120/360) × 2\n= 12 × 3.14 × (2/3) = 8 × 3.14 = 25.12cm となります。"
  },
  {
    "id": "m_geom_area_003",
    "subject": "算数",
    "category": "平面図形の面積",
    "subCategory": "正六角形の分割",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "【図形問題】面積が72cm²の正六角形ABCDEFがあります。\n図のように、各辺AB, BC, CD, DE, EF, FAの中点を順に結んでできる、内側の正六角形の面積は何cm²ですか。（半角数字で答えなさい）",
    "options": [],
    "answer": "54",
    "acceptableAnswers": [
      "54",
      "54cm2",
      "54㎠",
      "５４"
    ],
    "keywords": [
      "54",
      "正六角形",
      "中点"
    ],
    "knowledgeTag": "正六角形の面積分割・中点連結の比",
    "figureSvg": "<svg viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow9\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 外側の正六角形 (半径80, 面積72cm2) -->\n  <polygon points=\"200,120 160,189.3 80,189.3 40,120 80,50.7 160,50.7\" fill=\"#1e293b\" fill-opacity=\"0.5\" stroke=\"#94a3b8\" stroke-width=\"2.5\" />\n  <!-- 内側の正六角形 (中点連結, 面積54cm2) -->\n  <polygon points=\"180,154.6 120,189.3 60,154.6 60,85.4 120,50.7 180,85.4\" fill=\"#6366f1\" fill-opacity=\"0.3\" stroke=\"#818cf8\" stroke-width=\"2.5\" />\n  <text x=\"120\" y=\"125\" font-size=\"14\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow9)\">面積 = ? cm²</text>\n  <text x=\"120\" y=\"32\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow9)\">外側の正六角形 = 72 cm²</text>\n</svg>",
    "explanation": "【解法】\n外側と内側の正六角形の面積比は 4 : 3 になります。\n外側の面積が 72cm² なので、内側の面積は\n72 × (3/4) = 54cm² となります。"
  },
  {
    "id": "m_geom_area_004",
    "subject": "算数",
    "category": "平面図形の面積",
    "subCategory": "円とおうぎ形",
    "difficulty": "standard",
    "questionType": "input",
    "question": "【図形問題】直角をはさむ2辺の長さが AB = 6cm、AC = 8cm、斜辺 BC = 10cm の直角三角形ABCがあります。\n図のように、3辺AB, AC, BCを直径とする半円を描きました。\nこのとき、着色された2つの三日月のような部分の面積の合計は何cm²ですか。ただし、円周率は3.14とします。（半角数字で答えなさい）",
    "options": [],
    "answer": "24",
    "acceptableAnswers": [
      "24",
      "24cm2",
      "24㎠",
      "２４"
    ],
    "keywords": [
      "24",
      "ヒポクラテスの三日月",
      "直角三角形"
    ],
    "knowledgeTag": "ヒポクラテスの三日月・直角三角形との等積性",
    "figureSvg": "<svg viewBox=\"0 0 340 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow10\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 斜辺BCの半円の内側（タレスの定理により直角頂点A(90,180)を通る円弧） -->\n  <path d=\"M 90,60 A 100,100 0 0,1 250,180 Z\" fill=\"#1e293b\" fill-opacity=\"0.4\" stroke=\"#475569\" stroke-width=\"1.5\" />\n  <!-- 三日月1 (AB=6cmを直径とする外側半円 - 斜辺半円) -->\n  <path d=\"M 90,60 A 60,60 0 0,0 90,180 A 100,100 0 0,1 90,60 Z\" fill=\"#fbbf24\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <!-- 三日月2 (AC=8cmを直径とする外側半円 - 斜辺半円) -->\n  <path d=\"M 90,180 A 80,80 0 0,0 250,180 A 100,100 0 0,1 90,180 Z\" fill=\"#fbbf24\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <!-- 直角三角形 ABC (A=(90,180), B=(90,60), C=(250,180)) -->\n  <polygon points=\"90,60 90,180 250,180\" fill=\"#38bdf8\" fill-opacity=\"0.15\" stroke=\"#38bdf8\" stroke-width=\"2.5\" />\n  <!-- 直角マーク -->\n  <polyline points=\"90,168 102,168 102,180\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\" />\n  <!-- 頂点ラベル（明るい白） -->\n  <text x=\"75\" y=\"55\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow10)\">B</text>\n  <text x=\"75\" y=\"195\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow10)\">A</text>\n  <text x=\"258\" y=\"195\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow10)\">C</text>\n  <!-- 寸法ラベル -->\n  <text x=\"40\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow10)\">6cm</text>\n  <text x=\"170\" y=\"202\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" filter=\"url(#glow10)\">8cm</text>\n  <text x=\"180\" y=\"110\" font-size=\"12\" font-weight=\"bold\" fill=\"#cbd5e1\" filter=\"url(#glow10)\">10cm</text>\n  <text x=\"170\" y=\"28\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow10)\">三日月部分の面積 = ? cm²</text>\n</svg>",
    "explanation": "【解法】\n直角三角形の各辺を直径とする「ヒポクラテスの三日月」の有名問題です。\n\n三日月2つの面積の和は、直角三角形ABCの面積そのものと等しくなります。\n(直角三角形ABCの面積) = 6 × 8 ÷ 2 = 24cm²\n\nよって、三日月の面積の合計は 24cm² となります。"
  },
  {
    "id": "m_geom_area_005",
    "subject": "算数",
    "category": "平面図形の面積",
    "subCategory": "図形の転がり移動",
    "difficulty": "standard",
    "questionType": "input",
    "question": "【図形問題】1辺の長さが10cmの正方形の外側を、半径2cmの円がすべることなく転がって1周します。\n図のように、円が通過した部分全体の面積は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）",
    "options": [],
    "answer": "210.24",
    "acceptableAnswers": [
      "210.24",
      "210.24cm2",
      "210.24㎠",
      "２１０．２４"
    ],
    "keywords": [
      "210.24",
      "円の通過面積",
      "正方形"
    ],
    "knowledgeTag": "円の転がり移動・外側の通過面積",
    "figureSvg": "<svg viewBox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow11\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 通過領域全体 (半径40の角丸正方形) -->\n  <rect x=\"50\" y=\"50\" width=\"200\" height=\"200\" rx=\"40\" ry=\"40\" fill=\"#fbbf24\" fill-opacity=\"0.25\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <!-- 中央の正方形 10cm×10cm (x=90, y=90, 幅120, 高さ120) -->\n  <rect x=\"90\" y=\"90\" width=\"120\" height=\"120\" fill=\"#0f172a\" stroke=\"#6366f1\" stroke-width=\"2.5\" />\n  <!-- 4隅のおうぎ形境界線（点線） -->\n  <line x1=\"90\" y1=\"50\" x2=\"90\" y2=\"90\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <line x1=\"210\" y1=\"50\" x2=\"210\" y2=\"90\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <line x1=\"90\" y1=\"210\" x2=\"90\" y2=\"250\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <line x1=\"210\" y1=\"210\" x2=\"210\" y2=\"250\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <line x1=\"50\" y1=\"90\" x2=\"90\" y2=\"90\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <line x1=\"210\" y1=\"90\" x2=\"250\" y2=\"90\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <line x1=\"50\" y1=\"210\" x2=\"90\" y2=\"210\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <line x1=\"210\" y1=\"210\" x2=\"250\" y2=\"210\" stroke=\"#f59e0b\" stroke-dasharray=\"3,3\" />\n  <!-- 転がる円 (半径20 = 半径2cm) -->\n  <circle cx=\"70\" cy=\"150\" r=\"20\" fill=\"#38bdf8\" fill-opacity=\"0.4\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <circle cx=\"70\" cy=\"150\" r=\"3\" fill=\"#38bdf8\" />\n  <line x1=\"70\" y1=\"150\" x2=\"90\" y2=\"150\" stroke=\"#38bdf8\" stroke-width=\"1.5\" />\n  <text x=\"72\" y=\"142\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\">2cm</text>\n  <!-- ラベル -->\n  <text x=\"150\" y=\"155\" font-size=\"13\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow11)\">10cm正方形</text>\n  <text x=\"150\" y=\"32\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow11)\">円が通過した部分全体の面積</text>\n</svg>",
    "explanation": "【解法】\n円の直径は 2 × 2 = 4cm なので、通過する幅は 4cm です。\n\n1. 正方形の4辺の外側にできる長方形 4個：\n4 × 10 × 4 = 160cm²\n\n2. 正方形の4隅にできるおうぎ形 4個（合わせると半径4cmの円1個分）：\n4 × 4 × 3.14 = 50.24cm²\n\n通過した部分全体の面積 = 160 + 50.24 = 210.24cm² となります。"
  },
  {
    "id": "m_geom_area_006",
    "subject": "算数",
    "category": "平面図形の面積",
    "subCategory": "円とおうぎ形",
    "difficulty": "advanced",
    "questionType": "input",
    "question": "【図形問題】1辺の長さが12cmの正方形ABCDがあります。\n図のように、正方形の4辺をそれぞれ直径とする半円を正方形の内側に描きました。\nこのとき、中央にできる4枚の花びらのような着色部分の面積の合計は何cm²ですか。ただし、円周率は3.14とします。（小数で答えなさい）",
    "options": [],
    "answer": "82.08",
    "acceptableAnswers": [
      "82.08",
      "82.08cm2",
      "82.08㎠",
      "８２．０８"
    ],
    "keywords": [
      "82.08",
      "花びら",
      "4つの半円"
    ],
    "knowledgeTag": "4つの半円の重なり・花びら型の面積",
    "figureSvg": "<svg viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n  <defs>\n    <filter id=\"glow12\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.5\"/>\n    </filter>\n  </defs>\n  <!-- 正方形本体 ABCD (一辺 160px) -->\n  <rect x=\"40\" y=\"40\" width=\"160\" height=\"160\" fill=\"#1e293b\" fill-opacity=\"0.5\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n  <!-- 4本の半円円弧 (半径80) -->\n  <path d=\"M 40,120 A 80,80 0 0,1 200,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <path d=\"M 40,120 A 80,80 0 0,0 200,120\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <path d=\"M 120,40 A 80,80 0 0,1 120,200\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <path d=\"M 120,40 A 80,80 0 0,0 120,200\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <!-- 4枚の花びら（重なり部分） -->\n  <!-- 上の花びら -->\n  <path d=\"M 120,40 A 80,80 0 0,0 40,120 A 80,80 0 0,1 120,120 A 80,80 0 0,1 200,120 A 80,80 0 0,0 120,40\" fill=\"#38bdf8\" fill-opacity=\"0.35\" stroke=\"#0ea5e9\" stroke-width=\"2\" />\n  <!-- 下の花びら -->\n  <path d=\"M 120,200 A 80,80 0 0,0 40,120 A 80,80 0 0,0 120,120 A 80,80 0 0,0 200,120 A 80,80 0 0,0 120,200\" fill=\"#38bdf8\" fill-opacity=\"0.35\" stroke=\"#0ea5e9\" stroke-width=\"2\" />\n  <!-- 左の花びら -->\n  <path d=\"M 40,120 A 80,80 0 0,0 120,40 A 80,80 0 0,1 120,120 A 80,80 0 0,1 120,200 A 80,80 0 0,0 40,120\" fill=\"#38bdf8\" fill-opacity=\"0.35\" stroke=\"#0ea5e9\" stroke-width=\"2\" />\n  <!-- 右の花びら -->\n  <path d=\"M 200,120 A 80,80 0 0,0 120,40 A 80,80 0 0,0 120,120 A 80,80 0 0,0 120,200 A 80,80 0 0,0 200,120\" fill=\"#38bdf8\" fill-opacity=\"0.35\" stroke=\"#0ea5e9\" stroke-width=\"2\" />\n  <!-- 頂点ラベル（明るい白） -->\n  <text x=\"25\" y=\"38\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow12)\">A</text>\n  <text x=\"210\" y=\"38\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow12)\">D</text>\n  <text x=\"25\" y=\"215\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow12)\">B</text>\n  <text x=\"210\" y=\"215\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" filter=\"url(#glow12)\">C</text>\n  <text x=\"120\" y=\"28\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow12)\">12 cm</text>\n</svg>",
    "explanation": "【解法】\n(花びら4枚の面積) = (半径6cmの半円 4個の面積) - (正方形ABCDの面積)\n\n・半径6cmの半円4個（＝半径6cmの円2個分）：\n6 × 6 × 3.14 × 2 = 72 × 3.14 = 226.08cm²\n\n・正方形ABCDの面積：\n12 × 12 = 144cm²\n\n花びら部分の面積の合計 = 226.08 - 144 = 82.08cm² となります。"
  }
];

const mathPackPath = path.resolve("src/data/math_pilot_pack.json");
fs.writeFileSync(mathPackPath, JSON.stringify(MATH_PILOT_QUESTIONS, null, 2), "utf8");

const sampleQuizPath = path.resolve("src/data/sampleQuiz.json");
const sampleData = JSON.parse(fs.readFileSync(sampleQuizPath, "utf8"));
const existingQuestions = sampleData.questions || sampleData;
const existingIds = new Set(MATH_PILOT_QUESTIONS.map(q => q.id));
const filteredExisting = existingQuestions.filter(q => !existingIds.has(q.id));
const updatedQuestions = [...filteredExisting, ...MATH_PILOT_QUESTIONS];
const outputData = Array.isArray(sampleData) ? updatedQuestions : { ...sampleData, questions: updatedQuestions };
fs.writeFileSync(sampleQuizPath, JSON.stringify(outputData, null, 2), "utf8");
console.log("Synced math pilot questions perfectly.");
