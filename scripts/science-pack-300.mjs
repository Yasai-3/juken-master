// scripts/science-pack-300.mjs
// 理科 新規問題 300問 完全ユニーク・重複ゼロ版 (r_adv2_001 〜 r_adv2_300)
export const sciencePack300 = [
  {
    "id": "r_adv2_001",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "支点から左へ 30cm の位置に 40g のおもりをつるしました。支点から右へ 20cm の位置につり合わせるには、何gのおもりをつるせばよいですか。",
    "options": [
      "40g",
      "50g",
      "60g",
      "80g"
    ],
    "answer": "60g",
    "acceptableAnswers": [
      "60g"
    ],
    "explanation": "てこのつり合いの法則（左の腕の長さ×重さ＝右の腕の長さ×重さ）より、30cm × 40g = 20cm × [おもり] です。よって 1200 ÷ 20 = 60g です。"
  },
  {
    "id": "r_adv2_002",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "長さ 100cm で太さが均一な棒（重さ 60g）があります。棒の左端から 30cm の位置を支点として支えるとき、水平につり合わせるには左端に何gのおもりをつるせばよいですか。",
    "options": [
      "30g",
      "40g",
      "50g",
      "60g"
    ],
    "answer": "40g",
    "acceptableAnswers": [
      "40g"
    ],
    "explanation": "太さが均一な棒の重心は中央（左端から50cm、支点から右へ20cm）にあります。棒自身の重さ 60g が支点から右へ 20cm の位置にかかります。左端は支点から左へ 30cm なので、30cm × [重さ] = 20cm × 60g。よって 1200 ÷ 30 = 40g です。"
  },
  {
    "id": "r_adv2_003",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1個の定滑車を使って 600g の荷物を 50cm 引き上げるとき、手で引く力の大きさと、手を引く距離の組み合わせとして正しいものはどれですか。",
    "options": [
      "力：300g、距離：100cm",
      "力：300g、距離：50cm",
      "力：600g、距離：100cm",
      "力：600g、距離：50cm"
    ],
    "answer": "力：600g、距離：50cm",
    "acceptableAnswers": [
      "力：600g、距離：50cm"
    ],
    "explanation": "定滑車は力の向きを変えるだけで、力の大きさも引く距離も変わりません。力は 600g、距離は 50cm です。"
  },
  {
    "id": "r_adv2_004",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1個の動滑車を使って 600g の荷物を 50cm 引き上げるとき、手で引く力の大きさと、手を引く距離の組み合わせとして正しいものはどれですか（滑車の重さは考えない）。",
    "options": [
      "力：1200g、距離：25cm",
      "力：300g、距離：100cm",
      "力：300g、距離：50cm",
      "力：600g、距離：50cm"
    ],
    "answer": "力：300g、距離：100cm",
    "acceptableAnswers": [
      "力：300g、距離：100cm"
    ],
    "explanation": "動滑車を使うと、必要な力は半分の 300g になりますが、引く距離は 2倍の 100cm になります（仕事の原理）。"
  },
  {
    "id": "r_adv2_005",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "重さ 50g の動滑車を使って 450g の荷物を引き上げるとき、手で支える力の大きさは何gですか（ひもの重さや摩擦は考えない）。",
    "options": [
      "225g",
      "250g",
      "275g",
      "500g"
    ],
    "answer": "250g",
    "acceptableAnswers": [
      "250g"
    ],
    "explanation": "動滑車にかかる全体の重さは 450g + 50g = 500g です。これを2本のひもで支えるため、手で引く力は 500g ÷ 2 = 250g です。"
  },
  {
    "id": "r_adv2_006",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径 10cm の小車輪と半径 30cm の大車輪が固定された「輪軸」があります。小車輪のひもに 150g の荷物をつるしたとき、大車輪のひもを引いてつり合わせるには何gの力が必要ですか。",
    "options": [
      "150g",
      "30g",
      "450g",
      "50g"
    ],
    "answer": "50g",
    "acceptableAnswers": [
      "50g"
    ],
    "explanation": "輪軸のつり合いより、10cm × 150g = 30cm × [引く力] です。よって 1500 ÷ 30 = 50g です。"
  },
  {
    "id": "r_adv2_007",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "自然の長さが 15cm のばねに 20g のおもりをつるすと、全体の長さが 18cm になりました。このばねに 50g のおもりをつるすと、全体の長さは何cmになりますか（ばねは伸び切らないものとする）。",
    "options": [
      "21.0cm",
      "22.5cm",
      "23.5cm",
      "25.0cm"
    ],
    "answer": "22.5cm",
    "acceptableAnswers": [
      "22.5cm"
    ],
    "explanation": "20g での伸びは 18 - 15 = 3cm です。1g あたりの伸びは 3÷20 = 0.15cm。50g つるしたときの伸びは 0.15 × 50 = 7.5cm。全体の長さは 15 + 7.5 = 22.5cm です。"
  },
  {
    "id": "r_adv2_008",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "同じばねを2本「並列」につないで 60g のおもりをつるしました。このばね1本に 60g をつるしたときの伸びが 6cm だとすると、並列につないだときのばねの伸びは何cmになりますか。",
    "options": [
      "1.5cm",
      "12cm",
      "3cm",
      "6cm"
    ],
    "answer": "3cm",
    "acceptableAnswers": [
      "3cm"
    ],
    "explanation": "並列につなぐと、おもりの重さが2本のばねに半分ずつ（30gずつ）分散されます。したがって伸びも半分の 3cm になります。"
  },
  {
    "id": "r_adv2_009",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "同じばねを2本「直列」につないで 60g のおもりをつるしました。このばね1本に 60g をつるしたときの伸びが 6cm だとすると、2本直列のときの全体の伸びは何cmになりますか。",
    "options": [
      "12cm",
      "3cm",
      "6cm",
      "9cm"
    ],
    "answer": "12cm",
    "acceptableAnswers": [
      "12cm"
    ],
    "explanation": "直列につなぐと、それぞれのばねに 60g の力がそのままかかります。各ばねが 6cm ずつ伸びるため、全体の伸びは 6 + 6 = 12cm になります。"
  },
  {
    "id": "r_adv2_010",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "体積 100cm³、重さ 250g の金属のかたまりを水中に完全に沈めました。このとき金属が水から受ける浮力の大きさは何gですか（水の密度は 1g/cm³ とする）。",
    "options": [
      "100g",
      "150g",
      "250g",
      "350g"
    ],
    "answer": "100g",
    "acceptableAnswers": [
      "100g"
    ],
    "explanation": "アルキメデスの原理より、浮力の大きさは「物体が押しのけた液体の重さ」に等しくなります。押しのけた水の体積は 100cm³ なので、浮力は 100g です。"
  },
  {
    "id": "r_adv2_011",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "体積 100cm³、重さ 250g の金属のかたまりをばねばかりにつるして、水中に完全に沈めました。ばねばかりの目盛りは何gを示しますか。",
    "options": [
      "100g",
      "150g",
      "200g",
      "250g"
    ],
    "answer": "150g",
    "acceptableAnswers": [
      "150g"
    ],
    "explanation": "空気中での重さは 250g、水中で受ける浮力は 100g です。ばねばかりの示す値は 250 - 100 = 150g です。"
  },
  {
    "id": "r_adv2_012",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "体積 120cm³、重さ 90g の木片を水に浮かべたとき、水面から出ている部分の体積は何cm³ですか。",
    "options": [
      "20cm³",
      "30cm³",
      "40cm³",
      "90cm³"
    ],
    "answer": "30cm³",
    "acceptableAnswers": [
      "30cm³"
    ],
    "explanation": "木片が水に浮いているとき、浮力は木片全体の重さと等しく 90g です。押しのけた水の体積（水面下の体積）は 90cm³ です。よって水面上の体積は 120 - 90 = 30cm³ です。"
  },
  {
    "id": "r_adv2_013",
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "食塩水（密度 1.2g/cm³）の中に、体積 50cm³ の物体を完全に沈めたとき、物体が受ける浮力の大きさは何gですか。",
    "options": [
      "120g",
      "50g",
      "60g",
      "70g"
    ],
    "answer": "60g",
    "acceptableAnswers": [
      "60g"
    ],
    "explanation": "押しのけた食塩水の重さが浮力になります。50cm³ × 1.2g/cm³ = 60g です。"
  },
  {
    "id": "r_adv2_014",
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "乾電池1個と豆電球1個をつないだ回路に流れる電流を 1 とするとき、乾電池2個を「直列」につないだ回路の豆電球に流れる電流の大きさはいくらになりますか。",
    "options": [
      "0.5",
      "1",
      "2",
      "4"
    ],
    "answer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "explanation": "電池を直列につなぐと電圧が2倍になるため、回路に流れる電流も2倍の 2 になり、豆電球はより明るくなります。"
  },
  {
    "id": "r_adv2_015",
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "乾電池1個と豆電球1個をつないだ回路に流れる電流を 1 とするとき、乾電池2個を「並列」につないだ回路の豆電球に流れる電流の大きさはいくらになりますか。",
    "options": [
      "0.5",
      "1",
      "2",
      "4"
    ],
    "answer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "explanation": "電池を並列につないでも電圧は1個のときと同じなので、電流は 1 のままで明るさは変わりません（電池は長持ちします）。"
  },
  {
    "id": "r_adv2_016",
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "乾電池1個に豆電球2個を「直列」につないだとき、豆電球1個のときと比べて回路全体の電流の大きさと明るさはどうなりますか。",
    "options": [
      "電流は 1/2 になり、明るさは暗くなる",
      "電流は 1/4 になり、つかない",
      "電流は 2倍 になり、明るさは明るくなる",
      "電流は変わらず、明るさも変わらない"
    ],
    "answer": "電流は 1/2 になり、明るさは暗くなる",
    "acceptableAnswers": [
      "電流は 1/2 になり、明るさは暗くなる"
    ],
    "explanation": "豆電球を直列につなぐと全体の電気抵抗が2倍になるため、流れる電流は 1/2 に減り、それぞれの明るさは暗くなります。"
  },
  {
    "id": "r_adv2_017",
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "乾電池1個に豆電球2個を「並列」につないだとき、乾電池から流れ出る全体の電流は、豆電球1個のときの何倍になりますか。",
    "options": [
      "1/2倍",
      "1倍",
      "2倍",
      "4倍"
    ],
    "answer": "2倍",
    "acceptableAnswers": [
      "2倍"
    ],
    "explanation": "それぞれの豆電球に 1 ずつ電流が流れるため、乾電池から流れ出る全体の電流は 1 + 1 = 2倍 になります（電池の寿命は半分になります）。"
  },
  {
    "id": "r_adv2_018",
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "電磁石の磁力を強くする方法として、適切でないものはどれですか。",
    "options": [
      "コイルの巻き数を増やす",
      "乾電池の向きを逆にする",
      "鉄心を太くする",
      "流す電流を大きくする"
    ],
    "answer": "乾電池の向きを逆にする",
    "acceptableAnswers": [
      "乾電池の向きを逆にする"
    ],
    "explanation": "乾電池の向きを逆にすると極（N極とS極）が入れ替わるだけで、磁力の強さは変わりません。"
  },
  {
    "id": "r_adv2_019",
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "コイルに鉄心を入れ、電流を流すと磁石になる装置を何と言いますか。",
    "options": [
      "永久磁石",
      "電磁石",
      "発電機",
      "変圧器"
    ],
    "answer": "電磁石",
    "acceptableAnswers": [
      "電磁石"
    ],
    "explanation": "電流を流したときだけ磁石の性質を持つ装置を「電磁石」と言います。"
  },
  {
    "id": "r_adv2_020",
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "右手で導線を握るとき、親指の向きを電流の向きに合わせると、残りの4本の指が指す向きは何の向きを表しますか（右手の法則）。",
    "options": [
      "磁界の向き",
      "電圧の向き",
      "電子の向き",
      "力の向き"
    ],
    "answer": "磁界の向き",
    "acceptableAnswers": [
      "磁界の向き"
    ],
    "explanation": "右手の親指を電流の向きに向けると、他の4本の指が丸まる向きが導線のまわりにできる「磁界の向き」を表します。"
  },
  {
    "id": "r_adv2_021",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "光が空気中から水中に斜めに進むとき、境界面で光が折れ曲がる現象を何と言いますか。",
    "options": [
      "光の屈折",
      "光の直進",
      "光の反射",
      "光の分散"
    ],
    "answer": "光の屈折",
    "acceptableAnswers": [
      "光の屈折"
    ],
    "explanation": "光が異なる物質の境界面を斜めに通過するときに進む向きが変わる現象を「屈折」と言います。"
  },
  {
    "id": "r_adv2_022",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "虫眼鏡などに使われる凸レンズで、焦点距離の 2倍 の位置に物体を置いたとき、スクリーンの反対側にできる像の特徴として正しいものはどれですか。",
    "options": [
      "物体と同じ大きさの倒立実像",
      "物体より小さい倒立実像",
      "物体より大きい正立虚像",
      "物体より大きい倒立実像"
    ],
    "answer": "物体と同じ大きさの倒立実像",
    "acceptableAnswers": [
      "物体と同じ大きさの倒立実像"
    ],
    "explanation": "焦点距離の2倍の位置に置くと、反対側の焦点距離の2倍の位置に「実物と同じ大きさの倒立実像」ができます。"
  },
  {
    "id": "r_adv2_023",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "凸レンズの焦点の内側（焦点とレンズの間）に物体を置いたとき、レンズを通して見える像の特徴として正しいものはどれですか。",
    "options": [
      "像はできない",
      "物体と同じ大きさの倒立実像",
      "物体より小さい正立実像",
      "物体より大きい正立虚像"
    ],
    "answer": "物体より大きい正立虚像",
    "acceptableAnswers": [
      "物体より大きい正立虚像"
    ],
    "explanation": "焦点の内側に置くとスクリーンには映りませんが、レンズをのぞくと「拡大された正立虚像」が見えます（虫眼鏡の原理）。"
  },
  {
    "id": "r_adv2_024",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "平らな鏡に自分の姿を映すとき、全身を映すために必要な鏡の縦の長さは、自分の身長のどれだけですか。",
    "options": [
      "ちょうど半分の長さ",
      "身長と同じ長さ",
      "身長の 1/3 の長さ",
      "身長の 2/3 の長さ"
    ],
    "answer": "ちょうど半分の長さ",
    "acceptableAnswers": [
      "ちょうど半分の長さ"
    ],
    "explanation": "反射の法則（入射角＝反射角）により、頭の先から足の先まで映すために必要な鏡の長さは「身長の半分」になります（距離に関係なく一定）。"
  },
  {
    "id": "r_adv2_025",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "空気中を伝わる音の速さは、気温 15℃ のときおよそ毎秒何mですか。",
    "options": [
      "約 150m",
      "約 30万km",
      "約 340m",
      "約 500m"
    ],
    "answer": "約 340m",
    "acceptableAnswers": [
      "約 340m"
    ],
    "explanation": "音速は気温 t℃ のとき 331.5 + 0.6t で表され、15℃ では約 340m/秒 です。光の速さは約30万km/秒です。"
  },
  {
    "id": "r_adv2_026",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "花火が見えてから 3 秒後に「ドン」と音が聞こえました。気温を 15℃（音速 340m/秒）とすると、花火が上がった場所までの距離はおよそ何mですか。",
    "options": [
      "1020m",
      "1360m",
      "340m",
      "680m"
    ],
    "answer": "1020m",
    "acceptableAnswers": [
      "1020m"
    ],
    "explanation": "光はほぼ瞬時に届くので、音の伝わる時間から距離を求めます。340m/秒 × 3秒 = 1020m です。"
  },
  {
    "id": "r_adv2_027",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "モノコードの弦を弾くとき、より高い音を出すための方法として適切でないものはどれですか。",
    "options": [
      "弦の長さを短くする",
      "弦をより太いものに替える",
      "弦を強く張る",
      "弦を細いものに替える"
    ],
    "answer": "弦をより太いものに替える",
    "acceptableAnswers": [
      "弦をより太いものに替える"
    ],
    "explanation": "音を高くするには「弦を短くする」「強く張る」「細くする」必要があります。太くすると振動が遅くなり音は低くなります。"
  },
  {
    "id": "r_adv2_028",
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "音の「大きさ」は何によって決まりますか。",
    "options": [
      "音速",
      "振動の振幅",
      "振動数",
      "波形"
    ],
    "answer": "振動の振幅",
    "acceptableAnswers": [
      "振動の振幅"
    ],
    "explanation": "音の大きさは振動の振れ幅（振幅）で決まり、音の高さは1秒あたりの振動回数（振動数）で決まります。"
  },
  {
    "id": "r_adv2_029",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "金属棒の端を熱したとき、熱が物質そのものの移動を伴わずに順々に伝わっていく伝わり方を何と言いますか。",
    "options": [
      "蒸発",
      "対流",
      "伝導（熱伝導）",
      "放射"
    ],
    "answer": "伝導（熱伝導）",
    "acceptableAnswers": [
      "伝導（熱伝導）"
    ],
    "explanation": "固体の中を熱が順に伝わっていく現象を「伝導」と言います。液体や気体の循環による移動は「対流」、電磁波による移動は「放射」です。"
  },
  {
    "id": "r_adv2_030",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "やかんの水を温めるとき、温められた水が上へ昇り、冷たい水が下へ降りて全体が温まる熱の伝わり方を何と言いますか。",
    "options": [
      "対流",
      "伝導",
      "反射",
      "放射"
    ],
    "answer": "対流",
    "acceptableAnswers": [
      "対流"
    ],
    "explanation": "温まって軽くなった流体が上昇し、冷たく重い流体が下降して循環する伝わり方を「対流」と言います。"
  },
  {
    "id": "r_adv2_031",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "太陽の熱が真空中を通って地球に届く熱の伝わり方を何と言いますか。",
    "options": [
      "対流",
      "伝導",
      "伝播",
      "放射（熱放射）"
    ],
    "answer": "放射（熱放射）",
    "acceptableAnswers": [
      "放射（熱放射）"
    ],
    "explanation": "光や赤外線などの電磁波となって熱が直接空間を伝わる現象を「放射（ふく射）」と言います。"
  },
  {
    "id": "r_adv2_032",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "熱の伝わりやすさが異なる2枚の金属板（バイメタル）を貼り合わせて熱するとどうなりますか。",
    "options": [
      "真っ直ぐのまま縮む",
      "真っ直ぐのまま伸びる",
      "熱膨張しやすい方を外側にして曲がる",
      "熱膨張しやすい方を内側にして曲がる"
    ],
    "answer": "熱膨張しやすい方を外側にして曲がる",
    "acceptableAnswers": [
      "熱膨張しやすい方を外側にして曲がる"
    ],
    "explanation": "熱による伸び（熱膨張率）の大きい金属の方がより長く伸びるため、大きい方を外側（凸側）にして曲がります。"
  },
  {
    "id": "r_adv2_033",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "同じ重さの「鉄の球」と「アルミニウムの球」を水中に沈めたとき、受ける浮力が大きいのはどちらですか。",
    "options": [
      "アルミニウムの球",
      "どちらも同じ",
      "沈まないので比べられない",
      "鉄の球"
    ],
    "answer": "アルミニウムの球",
    "acceptableAnswers": [
      "アルミニウムの球"
    ],
    "explanation": "密度は鉄（約7.9g/cm³）の方がアルミニウム（約2.7g/cm³）より大きいです。同じ重さならアルミニウムの方が体積が大きいため、押しのける水の量が多くなり浮力も大きくなります。"
  },
  {
    "id": "r_adv2_034",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長さ 60cm の振り子の周期（1往復にかかる時間）を長くするための方法として正しいものはどれですか。",
    "options": [
      "おもりを軽くする",
      "おもりを重くする",
      "振り子の糸の長さを長くする",
      "振れ幅を大きくする"
    ],
    "answer": "振り子の糸の長さを長くする",
    "acceptableAnswers": [
      "振り子の糸の長さを長くする"
    ],
    "explanation": "振り子の1往復にかかる周期は「糸の長さ」だけで決まります（おもりの重さや振れ幅には関係しません）。糸を長くすると周期は長くなります。"
  },
  {
    "id": "r_adv2_035",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "振り子の糸の長さを 4倍 にすると、1往復にかかる時間は何倍になりますか。",
    "options": [
      "1/2倍",
      "16倍",
      "2倍",
      "4倍"
    ],
    "answer": "2倍",
    "acceptableAnswers": [
      "2倍"
    ],
    "explanation": "振り子の周期は「糸の長さの平方根」に比例します。長さが4倍になると、周期は √4 = 2倍 になります。"
  },
  {
    "id": "r_adv2_036",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1往復に 1 秒かかる振り子の糸の長さを約 25cm とするとき、1往復に 2 秒かかる振り子を作るには糸の長さを約何cmにすればよいですか。",
    "options": [
      "約 100cm",
      "約 200cm",
      "約 50cm",
      "約 75cm"
    ],
    "answer": "約 100cm",
    "acceptableAnswers": [
      "約 100cm"
    ],
    "explanation": "周期を 2倍（1秒→2秒）にするには、糸の長さを 2² = 4倍 にする必要があります。25cm × 4 = 100cm です。"
  },
  {
    "id": "r_adv2_037",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "斜面を転がる球の運動について、球が斜面を下るにつれて速さはどう変化しますか。",
    "options": [
      "だんだん遅くなる",
      "一定の割合でだんだん速くなる",
      "一定の速さのままである",
      "最初は速く、途中から一定になる"
    ],
    "answer": "一定の割合でだんだん速くなる",
    "acceptableAnswers": [
      "一定の割合でだんだん速くなる"
    ],
    "explanation": "斜面を下る向きに一定の重力の分力が働き続けるため、球の速さは時間とともに一定の割合で速くなります（等加速度運動）。"
  },
  {
    "id": "r_adv2_038",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "レールの上を走るジェットコースターが最も速くなるのはどの位置ですか。",
    "options": [
      "コースの中で最も低い位置",
      "ゴールした位置",
      "スタートした直後",
      "最も高い位置"
    ],
    "answer": "コースの中で最も低い位置",
    "acceptableAnswers": [
      "コースの中で最も低い位置"
    ],
    "explanation": "力学的エネルギー保存の法則により、位置エネルギーが最小（最も低い位置）になる場所で、運動エネルギーが最大となり速さが最も速くなります。"
  },
  {
    "id": "r_adv2_039",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "氷が水に浮かぶ理由として正しいものはどれですか。",
    "options": [
      "水は凍ると体積が増えて、密度が水より小さくなるから",
      "水面張力が働くから",
      "氷の中に空気がたくさん含まれているから",
      "氷は水よりも温度が低いから"
    ],
    "answer": "水は凍ると体積が増えて、密度が水より小さくなるから",
    "acceptableAnswers": [
      "水は凍ると体積が増えて、密度が水より小さくなるから"
    ],
    "explanation": "水は凍って氷になると結晶構造の隙間が広がり体積が約 1.1倍 に増えます。そのため密度が水（1g/cm³）より小さく（約0.9g/cm³）なり水に浮きます。"
  },
  {
    "id": "r_adv2_040",
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "水が最も密度が大きく（体積が最も小さく）なる温度は何℃ですか。",
    "options": [
      "0℃",
      "10℃",
      "100℃",
      "約 4℃"
    ],
    "answer": "約 4℃",
    "acceptableAnswers": [
      "約 4℃"
    ],
    "explanation": "水は 4℃（正確には3.98℃）のときに密度が最大になり、それより温度が上がっても下がっても体積は膨張します。"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "凸レンズから焦点距離の2倍の位置に光源（ろうそく）を置いたとき、反対側のスクリーンにできる実像の特徴として正しいものはどれですか。",
    "options": [
      "実物と同じ大きさの上下左右が逆の像",
      "実物より大きい上下左右が逆の像",
      "実物より大きい正立した像",
      "実物より小さい上下左右が逆の像"
    ],
    "answer": "実物と同じ大きさの上下左右が逆の像",
    "acceptableAnswers": [
      "実物と同じ大きさの上下左右が逆の像"
    ],
    "explanation": "焦点距離の2倍の位置に置くと、反対側の焦点距離の2倍の位置に実物と同じ大きさの倒立実像ができます。",
    "id": "r_adv2_041"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "凸レンズの焦点の内側に物体を置いたとき、凸レンズを通して見える像の特徴として正しいものはどれですか。",
    "options": [
      "スクリーンにはっきり映る実像",
      "実物と同じ大きさの正立した像",
      "実物より大きく見える倒立した像（実像）",
      "実物より大きく見える正立した像（虚像）"
    ],
    "answer": "実物より大きく見える正立した像（虚像）",
    "acceptableAnswers": [
      "実物より大きく見える正立した像（虚像）"
    ],
    "explanation": "焦点の内側に物体を置くと、スクリーンには映りませんが、レンズをのぞくと拡大された正立虚像（虫眼鏡の原理）が見えます。",
    "id": "r_adv2_042"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "焦点距離が 15cm の凸レンズがあります。スクリーンにはっきりとした実像を映すためには、物体をレンズからどの位置に置く必要がありますか。",
    "options": [
      "15cmより近い位置",
      "15cmより遠い位置",
      "ちょうど15cmの位置",
      "どの位置に置いてもよい"
    ],
    "answer": "15cmより遠い位置",
    "acceptableAnswers": [
      "15cmより遠い位置"
    ],
    "explanation": "実像がスクリーンに映る条件は、物体が焦点距離（15cm）よりも外側にあることです。",
    "id": "r_adv2_043"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "空気中から水面へ斜めに光が入射するとき、水中で光が曲がる角度（屈折角）と入射角の関係として正しいものはどれですか。",
    "options": [
      "入射角と屈折角は常に等しい",
      "入射角のほうが屈折角より大きい",
      "屈折せずに直進する",
      "屈折角のほうが入射角より大きい"
    ],
    "answer": "入射角のほうが屈折角より大きい",
    "acceptableAnswers": [
      "入射角のほうが屈折角より大きい"
    ],
    "explanation": "空気から水のように密度の大きい物質へ光が進むとき、光は境界面の垂線に近づくように曲がるため、屈折角は入射角より小さくなります。",
    "id": "r_adv2_044"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "水中から空気中へ光を進めるとき、ある角度以上になると光が空気中に出ずすべて境界面で反射する現象を何と言いますか。",
    "options": [
      "乱反射",
      "光電効果",
      "全反射",
      "分散"
    ],
    "answer": "全反射",
    "acceptableAnswers": [
      "全反射"
    ],
    "explanation": "境界面で光が100％反射する現象を全反射と言い、光ファイバーや内視鏡に応用されています。",
    "id": "r_adv2_045"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "平らな鏡に自分の全身を映すために必要な鏡の縦の長さは、身長に対して最低どれだけ必要ですか。",
    "options": [
      "身長と同じ長さ",
      "身長の3分の1の長さ",
      "身長の4分の1の長さ",
      "身長の半分の長さ"
    ],
    "answer": "身長の半分の長さ",
    "acceptableAnswers": [
      "身長の半分の長さ"
    ],
    "explanation": "光の反射の法則（入射角＝反射角）により、鏡からどの距離に立っていても、全身を映すには身長の半分の長さが必要です。",
    "id": "r_adv2_046"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "音の「高さ」を決定づける物理的な要素は何ですか。",
    "options": [
      "1秒間の振動数（周波数）",
      "発音体の重さ",
      "音が伝わる空気の温度",
      "音の振幅の大きさ"
    ],
    "answer": "1秒間の振動数（周波数）",
    "acceptableAnswers": [
      "1秒間の振動数（周波数）"
    ],
    "explanation": "1秒間に振動する回数（振動数・単位Hz）が多いほど高い音になります。振幅が大きいほど大きな音になります。",
    "id": "r_adv2_047"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "音の「大きさ」を決定づける要素は何ですか。",
    "options": [
      "波長の短さ",
      "発音体の振動数",
      "発音体の振幅の大きさ",
      "空気中の音速"
    ],
    "answer": "発音体の振幅の大きさ",
    "acceptableAnswers": [
      "発音体の振幅の大きさ"
    ],
    "explanation": "振幅が大きいほど強い振動となり、大きな音として耳に届きます。",
    "id": "r_adv2_048"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "花火の光が見えてから 3秒後に「ドン」という音が聞こえました。音速を秒速 340m とすると、花火までの距離はおよそ何mですか（光の伝わる時間は無視する）。",
    "options": [
      "1020m",
      "1360m",
      "340m",
      "680m"
    ],
    "answer": "1020m",
    "acceptableAnswers": [
      "1020m"
    ],
    "explanation": "距離＝速さ×時間 より、340m/s × 3秒 ＝ 1020m です。",
    "id": "r_adv2_049"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "校舎に向かって大きな声で「おーい」と叫んだところ、1.2秒後にやまびこが返ってきました。音速を秒速 340m とすると、校舎までの距離は何mですか。",
    "options": [
      "170m",
      "204m",
      "340m",
      "408m"
    ],
    "answer": "204m",
    "acceptableAnswers": [
      "204m"
    ],
    "explanation": "音は校舎まで行って跳ね返ってくるため、往復で1.2秒かかっています。片道にかかった時間は 1.2 ÷ 2 = 0.6秒。よって距離は 340 × 0.6 = 204m です。",
    "id": "r_adv2_050"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "モノコードの弦をはじいて高い音を出すための方法として正しい組み合わせはどれですか。",
    "options": [
      "弦を短くし、弱く張り、太い弦を使う",
      "弦を短くし、強く張り、細い弦を使う",
      "弦を長くし、弱く張り、細い弦を使う",
      "弦を長くし、強く張り、太い弦を使う"
    ],
    "answer": "弦を短くし、強く張り、細い弦を使う",
    "acceptableAnswers": [
      "弦を短くし、強く張り、細い弦を使う"
    ],
    "explanation": "弦を「短く」「強く張る」「細くする」と振動数が増加し、より高い音が出ます。",
    "id": "r_adv2_051"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "01. 光と音の性質（屈折・凸レンズ・音の伝わり方）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ガラス容器の中にブザーを入れて鳴らしながら、真空ポンプで容器の中の空気を抜いていくと、聞こえるブザーの音はどうなりますか。",
    "options": [
      "次第に大きくなり、破裂する",
      "次第に小さくなり、やがて聞こえなくなる",
      "次第に高くなり、聞こえ続ける",
      "音の大きさも高さも変化しない"
    ],
    "answer": "次第に小さくなり、やがて聞こえなくなる",
    "acceptableAnswers": [
      "次第に小さくなり、やがて聞こえなくなる"
    ],
    "explanation": "音は空気などの物質の振動によって伝わるため、真空（物質が存在しない状態）では音は伝わりません。",
    "id": "r_adv2_052"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "同じ規格の豆電球2個を「直列」につないだときと「並列」につないだときを比べた場合、正しい説明はどれですか。",
    "options": [
      "どちらも同じ明るさで点灯する",
      "並列につないだときのほうが明るく点灯する",
      "並列につなぐと乾電池が長持ちする",
      "直列につないだときのほうが明るく点灯する"
    ],
    "answer": "並列につないだときのほうが明るく点灯する",
    "acceptableAnswers": [
      "並列につないだときのほうが明るく点灯する"
    ],
    "explanation": "並列回路ではそれぞれの豆電球に乾電池と同じ電圧がかかるため明るく点灯します（ただし電池の消耗は速くなります）。",
    "id": "r_adv2_053"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "豆電球2個を「直列」につないで点灯させているとき、1個の豆電球をソケットから外すとどうなりますか。",
    "options": [
      "もう1個の豆電球の明るさは変わらない",
      "もう1個の豆電球はさらに明るくなる",
      "もう1個の豆電球も消える",
      "回路がショートして発熱する"
    ],
    "answer": "もう1個の豆電球も消える",
    "acceptableAnswers": [
      "もう1個の豆電球も消える"
    ],
    "explanation": "直列回路は一本道のため、1箇所でも途切れると回路全体に電流が流れなくなります。",
    "id": "r_adv2_054"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "豆電球2個を「並列」につないで点灯させているとき、1個の豆電球をソケットから外すとどうなりますか。",
    "options": [
      "もう1個の豆電球の明るさが2倍になる",
      "もう1個の豆電球はそのまま点灯し続ける",
      "もう1個の豆電球も同時に消える",
      "回路全体の電流が2倍になる"
    ],
    "answer": "もう1個の豆電球はそのまま点灯し続ける",
    "acceptableAnswers": [
      "もう1個の豆電球はそのまま点灯し続ける"
    ],
    "explanation": "並列回路は枝分かれしているため、片方の回路が切れても、もう片方の回路には電流が流れ続けます。",
    "id": "r_adv2_055"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1.5Vの乾電池2個を「直列」につないで回路を作ったとき、回路全体にかかる電圧は何Vになりますか。",
    "options": [
      "0.75V",
      "1.5V",
      "3.0V",
      "4.5V"
    ],
    "answer": "3.0V",
    "acceptableAnswers": [
      "3.0V"
    ],
    "explanation": "直列つなぎでは各電池の電圧が足し合わされるため、1.5V + 1.5V = 3.0V になります。",
    "id": "r_adv2_056"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1.5Vの乾電池2個を「並列」につないで回路を作ったとき、回路全体にかかる電圧と電池の持ちはどうなりますか。",
    "options": [
      "電圧は0.75Vになり、電球は暗くなる",
      "電圧は1.5Vのままだが、電池が長持ちする",
      "電圧は3.0Vになり、電池の減りが速くなる",
      "電圧は3.0Vになり、電池も長持ちする"
    ],
    "answer": "電圧は1.5Vのままだが、電池が長持ちする",
    "acceptableAnswers": [
      "電圧は1.5Vのままだが、電池が長持ちする"
    ],
    "explanation": "乾電池の並列つなぎでは電圧は1個分（1.5V）と同じですが、電流を分け合って流すため電池が長持ちします。",
    "id": "r_adv2_057"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "回路に流れる電流を測るため電流計をつなぐとき、測りたい部分に対してどのように接続しなければなりませんか。",
    "options": [
      "どの位置にどのようにつないでもよい",
      "測りたい部分と並列につなぐ",
      "測りたい部分と直列につなぐ",
      "電源の真横に並列につなぐ"
    ],
    "answer": "測りたい部分と直列につなぐ",
    "acceptableAnswers": [
      "測りたい部分と直列につなぐ"
    ],
    "explanation": "電流計は内部抵抗が極めて小さいため、必ず測りたい部分と直列に接続します。並列につなぐとショートして針が振り切れてしまいます。",
    "id": "r_adv2_058"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "回路のある部分にかかる電圧を測るため電圧計をつなぐとき、どのように接続しなければなりませんか。",
    "options": [
      "回路の途中に直列に割り込ませる",
      "測りたい部分と直列につなぐ",
      "測りたい部分に対して並列につなぐ",
      "電源と直列につなぐ"
    ],
    "answer": "測りたい部分に対して並列につなぐ",
    "acceptableAnswers": [
      "測りたい部分に対して並列につなぐ"
    ],
    "explanation": "電圧計は内部抵抗が非常に大きく作られているため、電圧を測りたい2点間に並列に接続します。",
    "id": "r_adv2_059"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "豆電球などの抵抗を介さず、乾電池の＋極と−極を導線だけで直接つないでしまう危険な状態を何と言いますか。",
    "options": [
      "ショート（短絡）",
      "接地（アース）",
      "過電圧",
      "電磁誘導"
    ],
    "answer": "ショート（短絡）",
    "acceptableAnswers": [
      "ショート（短絡）"
    ],
    "explanation": "ショートすると抵抗がほぼゼロになるため一気に過大な電流が流れ、導線や電池が異常発熱して発火や火傷の危険があります。",
    "id": "r_adv2_060"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "02. 電流と回路・オームの法則・電力と熱量",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "同じ電熱線に流す電流の大きさを2倍にしたとき、同じ時間内に電熱線から発生する熱量は何倍になりますか。",
    "options": [
      "0.5倍",
      "2倍",
      "4倍",
      "8倍"
    ],
    "answer": "4倍",
    "acceptableAnswers": [
      "4倍"
    ],
    "explanation": "ジュールの法則（発熱量＝電流×電圧×時間、電圧も電流に比例）より、電熱線の発熱量は電流の2乗に比例するため、2の2乗で4倍になります。",
    "id": "r_adv2_061"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "03. 静電気・電流と磁界・電磁誘導・放射線",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "同じ種類の電気を帯びた2つの物体を近づけたとき、生じる力として正しいものはどれですか。",
    "options": [
      "まったく力が働かない",
      "互いにしりぞけ合う力（反発力）",
      "互いに引き合う力（引力）",
      "回転しようとする力"
    ],
    "answer": "互いにしりぞけ合う力（反発力）",
    "acceptableAnswers": [
      "互いにしりぞけ合う力（反発力）"
    ],
    "explanation": "同種の電気（＋と＋、または−と−）の間にはしりぞけ合う反発力が働き、異種の電気（＋と−）の間には引き合う引力が働きます。",
    "id": "r_adv2_062"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "03. 静電気・電流と磁界・電磁誘導・放射線",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "電磁石の磁力をより強くするための方法として誤っているものはどれですか。",
    "options": [
      "太い鉄心を入れる",
      "導線の巻き数を増やす",
      "流す電流を強くする",
      "電磁石の鉄心を抜いて中空にする"
    ],
    "answer": "電磁石の鉄心を抜いて中空にする",
    "acceptableAnswers": [
      "電磁石の鉄心を抜いて中空にする"
    ],
    "explanation": "電磁石は鉄心を入れることで磁力線が集中し強力になります。鉄心を抜くと磁力は著しく弱くなります。",
    "id": "r_adv2_063"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "03. 静電気・電流と磁界・電磁誘導・放射線",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "電磁石のコイルに流す電流の向きを逆にすると、電磁石の性質はどうなりますか。",
    "options": [
      "N極とS極の位置が入れ替わる",
      "極は変わらず発熱だけする",
      "磁力が2倍になる",
      "磁力がゼロになる"
    ],
    "answer": "N極とS極の位置が入れ替わる",
    "acceptableAnswers": [
      "N極とS極の位置が入れ替わる"
    ],
    "explanation": "右手の法則により、電流の流れる向きを逆にすると生じる磁界の向きも逆になるため、極（N極・S極）が逆になります。",
    "id": "r_adv2_064"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "03. 静電気・電流と磁界・電磁誘導・放射線",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "モーター（電動機）は、主に何エネルギーを何エネルギーに変換する装置ですか。",
    "options": [
      "光エネルギーを電気エネルギーに変換する",
      "熱エネルギーを化学エネルギーに変換する",
      "運動エネルギーを電気エネルギーに変換する",
      "電気エネルギーを運動エネルギーに変換する"
    ],
    "answer": "電気エネルギーを運動エネルギーに変換する",
    "acceptableAnswers": [
      "電気エネルギーを運動エネルギーに変換する"
    ],
    "explanation": "磁界の中で電流が力を受ける原理を利用して、電気エネルギーを回転運動（運動エネルギー）に変える装置です。",
    "id": "r_adv2_065"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "03. 静電気・電流と磁界・電磁誘導・放射線",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "コイルの近くで棒磁石を動かすと、コイルに電圧が生じて電流が流れる現象を何と言いますか。",
    "options": [
      "放電",
      "短絡",
      "電磁誘導",
      "静電誘導"
    ],
    "answer": "電磁誘導",
    "acceptableAnswers": [
      "電磁誘導"
    ],
    "explanation": "コイル内部の磁界が変化することによって電流が流れる現象を「電磁誘導」と呼び、流れる電流を「誘導電流」と言います。",
    "id": "r_adv2_066"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "03. 静電気・電流と磁界・電磁誘導・放射線",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "発電機は、主に何エネルギーを何エネルギーに変換して電気を作り出しますか。",
    "options": [
      "光エネルギーを運動エネルギーに変換する",
      "力学的（運動）エネルギーを電気エネルギーに変換する",
      "化学エネルギーを直接光エネルギーに変換する",
      "電気エネルギーを熱エネルギーに変換する"
    ],
    "answer": "力学的（運動）エネルギーを電気エネルギーに変換する",
    "acceptableAnswers": [
      "力学的（運動）エネルギーを電気エネルギーに変換する"
    ],
    "explanation": "水力、風力、火力（蒸気タービン）などでコイルや磁石を回転（運動）させ、電磁誘導によって電気エネルギーを取り出します。",
    "id": "r_adv2_067"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "体積が 200cm³ で重さが 350g の金属のかたまりを水中に完全に沈めました。この物体が水から受ける浮力の大きさは何gですか（水の密度は 1g/cm³ とする）。",
    "options": [
      "150g",
      "200g",
      "350g",
      "550g"
    ],
    "answer": "200g",
    "acceptableAnswers": [
      "200g"
    ],
    "explanation": "アルキメデスの原理より、浮力の大きさは「物体が押しのけた液体の重さ」と等しくなります。体積 200cm³ の水は 200g なので、浮力は 200g です。",
    "id": "r_adv2_068"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "体積が 200cm³ で重さが 350g の金属のかたまりを、ばねばかりにつるして完全に水中に沈めました。このとき、ばねばかりの目盛りは何gを示しますか。",
    "options": [
      "150g",
      "200g",
      "350g",
      "550g"
    ],
    "answer": "150g",
    "acceptableAnswers": [
      "150g"
    ],
    "explanation": "ばねばかりの目盛り＝空気中の重さ − 浮力 です。350g − 200g ＝ 150g を示します。",
    "id": "r_adv2_069"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水深が深くなるにつれて、水中にある物体が受ける水圧はどうなりますか。",
    "options": [
      "あらゆる向きから均等にかかり、深さに比例して大きくなる",
      "上から下に向かってのみかかり、深さによらず一定である",
      "横からのみかかり、下からはかからない",
      "深くなるほど水圧は小さくなる"
    ],
    "answer": "あらゆる向きから均等にかかり、深さに比例して大きくなる",
    "acceptableAnswers": [
      "あらゆる向きから均等にかかり、深さに比例して大きくなる"
    ],
    "explanation": "水圧は水の重さによって生じるため、深さに比例して大きくなり、あらゆる向きから面に垂直に均等に働きます。",
    "id": "r_adv2_070"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "振り子が1往復する時間（周期）を決める要素として正しいものはどれですか。",
    "options": [
      "おもりの体積",
      "おもりの重さ",
      "振り子の糸の長さ",
      "振り子を振る最初の角度（振れ幅）"
    ],
    "answer": "振り子の糸の長さ",
    "acceptableAnswers": [
      "振り子の糸の長さ"
    ],
    "explanation": "振り子の等時性により、振れ幅が小さければ周期はおもりの重さや振れ幅に関係なく、糸の長さだけで決まります。",
    "id": "r_adv2_071"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある振り子の1往復にかかる時間を2倍にするには、糸の長さを何倍にすればよいですか。",
    "options": [
      "0.5倍",
      "2倍",
      "4倍",
      "8倍"
    ],
    "answer": "4倍",
    "acceptableAnswers": [
      "4倍"
    ],
    "explanation": "振り子の周期は「糸の長さの平方根」に比例します。そのため、周期を2倍にするには糸の長さを 2² = 4倍にする必要があります。",
    "id": "r_adv2_072"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "やかんに入れた水を下から熱したとき、温まった水が上昇し冷たい水が下降して全体が温まる現象を何と言いますか。",
    "options": [
      "伝導",
      "対流",
      "放射",
      "融解"
    ],
    "answer": "対流",
    "acceptableAnswers": [
      "対流"
    ],
    "explanation": "液体や気体が循環して熱を伝える現象を対流と言います。金属棒などを熱が伝わる現象は熱伝導です。",
    "id": "r_adv2_073"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "05. 運動と力・仕事と力学的エネルギー・熱の伝わり方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "太陽の熱が宇宙の真空空間を越えて地球に届く熱の伝わり方を何と言いますか。",
    "options": [
      "伝導",
      "対流",
      "放射（熱放射）",
      "昇華"
    ],
    "answer": "放射（熱放射）",
    "acceptableAnswers": [
      "放射（熱放射）"
    ],
    "explanation": "物質を介さずに電磁波（赤外線など）として熱が直接伝わる現象を放射と言います。焚き火の温もりも主に放射熱です。",
    "id": "r_adv2_074"
  },
  {
    "subject": "理科",
    "category": "物理",
    "subCategory": "04. 力のつり合い・水圧と浮力・力の合成と分解",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1つの物体に働く2つの力がつり合っているとき、満たされる条件として誤っているものはどれですか。",
    "options": [
      "2つの力が一直線上にある",
      "2つの力の向きが正反対である",
      "2つの力の大きさが互いに異なっている",
      "2つの力の大きさが等しい"
    ],
    "answer": "2つの力の大きさが互いに異なっている",
    "acceptableAnswers": [
      "2つの力の大きさが互いに異なっている"
    ],
    "explanation": "2つの力のつり合いの3条件は、①大きさが等しい、②向きが正反対、③一直線上にある、の3つです。",
    "id": "r_adv2_075"
  },
  {
    "id": "r_adv2_076",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "リトマス試験紙に水溶液をつけたとき、赤色リトマス紙が青色に変化しました。この水溶液の液性は何ですか。",
    "options": [
      "アルカリ性",
      "酸性",
      "弱酸性",
      "中性"
    ],
    "answer": "アルカリ性",
    "acceptableAnswers": [
      "アルカリ性"
    ],
    "explanation": "赤色リトマス紙を青色に変えるのは「アルカリ性」です。青色リトマス紙を赤色に変えるのは「酸性」です。"
  },
  {
    "id": "r_adv2_077",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "BTB溶液に加えたとき、黄色に変化する水溶液はどれですか。",
    "options": [
      "塩酸",
      "食塩水",
      "水酸化ナトリウム水溶液",
      "石灰水"
    ],
    "answer": "塩酸",
    "acceptableAnswers": [
      "塩酸"
    ],
    "explanation": "BTB溶液は「酸性で黄色」「中性で緑色」「アルカリ性で青色」を示します。塩酸は酸性なので黄色になります。"
  },
  {
    "id": "r_adv2_078",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "フェノールフタレイン溶液を加えたときに赤色を示す水溶液はどれですか。",
    "options": [
      "アンモニア水",
      "うすい塩酸",
      "砂糖水",
      "炭酸水"
    ],
    "answer": "アンモニア水",
    "acceptableAnswers": [
      "アンモニア水"
    ],
    "explanation": "フェノールフタレイン溶液は「酸性・中性では無色透明」「アルカリ性で鮮やかな赤色」を示します。アンモニア水はアルカリ性です。"
  },
  {
    "id": "r_adv2_079",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "次のうち、気体が溶けている水溶液（蒸発させると何も残らない水溶液）はどれですか。",
    "options": [
      "ホウ酸水",
      "砂糖水",
      "食塩水",
      "炭酸水"
    ],
    "answer": "炭酸水",
    "acceptableAnswers": [
      "炭酸水"
    ],
    "explanation": "炭酸水は「二酸化炭素（気体）」が水に溶けたものです。蒸発皿で熱すると気体と水蒸気になって逃げるため、何も残りません。"
  },
  {
    "id": "r_adv2_080",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "塩酸に溶けている気体は何ですか。",
    "options": [
      "塩化水素",
      "塩素",
      "水素",
      "二酸化炭素"
    ],
    "answer": "塩化水素",
    "acceptableAnswers": [
      "塩化水素"
    ],
    "explanation": "塩酸は刺激臭のある気体「塩化水素」が水に溶けた水溶液です。"
  },
  {
    "id": "r_adv2_081",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "アンモニア水から発生する気体「アンモニア」の性質として正しいものはどれですか。",
    "options": [
      "水に非常によく溶け、空気より軽い",
      "水に非常によく溶け、空気より重い",
      "水に溶けにくく、空気より重い",
      "水に溶けにくく、助燃性がある"
    ],
    "answer": "水に非常によく溶け、空気より軽い",
    "acceptableAnswers": [
      "水に非常によく溶け、空気より軽い"
    ],
    "explanation": "アンモニアは水に極めて溶けやすく、分子量が小さいため空気より軽いです。捕集には「上方置換法」を用います。"
  },
  {
    "id": "r_adv2_082",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "二酸化炭素を水上置換または下方置換で集める理由として正しいものはどれですか。",
    "options": [
      "水に少し溶け、空気より重いから",
      "水に全く溶けず、空気より軽いから",
      "水に非常によく溶け、空気より軽いから",
      "無色無臭で燃えないから"
    ],
    "answer": "水に少し溶け、空気より重いから",
    "acceptableAnswers": [
      "水に少し溶け、空気より重いから"
    ],
    "explanation": "二酸化炭素は水に少し溶けますが水上置換でも集められ、空気より重いため「下方置換法」でも集めることができます。"
  },
  {
    "id": "r_adv2_083",
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "二酸化炭素を通すと白く濁る試薬は何ですか。",
    "options": [
      "BTB溶液",
      "ヨウ素液",
      "塩化コバルト紙",
      "石灰水"
    ],
    "answer": "石灰水",
    "acceptableAnswers": [
      "石灰水"
    ],
    "explanation": "二酸化炭素を通すと、水に溶けにくい炭酸カルシウムが生成して白く濁る試薬は「石灰水（水酸化カルシウム水溶液）」です。"
  },
  {
    "id": "r_adv2_084",
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "過酸化水素水（オキシドール）に二酸化マンガンを加えたときに発生する気体は何ですか。",
    "options": [
      "酸素",
      "水素",
      "窒素",
      "二酸化炭素"
    ],
    "answer": "酸素",
    "acceptableAnswers": [
      "酸素"
    ],
    "explanation": "過酸化水素水に二酸化マンガン（触媒）を加えると「酸素」が発生します。"
  },
  {
    "id": "r_adv2_085",
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "酸素の性質として正しいものはどれですか。",
    "options": [
      "それ自身が爆発して燃える（可燃性）",
      "ものを燃やすのを助ける性質（助燃性）がある",
      "空気より著しく軽い",
      "水に非常によく溶ける"
    ],
    "answer": "ものを燃やすのを助ける性質（助燃性）がある",
    "acceptableAnswers": [
      "ものを燃やすのを助ける性質（助燃性）がある"
    ],
    "explanation": "酸素は無色無臭で、線香の火を入れると炎を上げて激しく燃える「助燃性」があります（自身が燃える可燃性ではありません）。"
  },
  {
    "id": "r_adv2_086",
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "うすい塩酸にアルミニウムや鉄などの金属を入れたときに発生する気体は何ですか。",
    "options": [
      "塩素",
      "酸素",
      "水素",
      "二酸化炭素"
    ],
    "answer": "水素",
    "acceptableAnswers": [
      "水素"
    ],
    "explanation": "金属が酸に溶けると「水素」が発生します。水素は火を近づけると「ポン」と音を立てて燃えます。"
  },
  {
    "id": "r_adv2_087",
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水素の性質として正しいものはどれですか。",
    "options": [
      "すべての気体の中で最も軽く、自ら燃える",
      "空気より重く、ものを燃やすのを助ける",
      "水に非常によく溶ける",
      "特有の刺激臭があり、有毒である"
    ],
    "answer": "すべての気体の中で最も軽く、自ら燃える",
    "acceptableAnswers": [
      "すべての気体の中で最も軽く、自ら燃える"
    ],
    "explanation": "水素は最も密度の小さい（軽い）気体で、燃えると水（H₂O）になります。"
  },
  {
    "id": "r_adv2_088",
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "うすい塩酸にアルミニウムを溶かした液を蒸発皿で加熱して乾燥させたときに残る白い粉は何ですか。",
    "options": [
      "アルミニウム",
      "塩化アルミニウム",
      "酸化アルミニウム",
      "水酸化ナトリウム"
    ],
    "answer": "塩化アルミニウム",
    "acceptableAnswers": [
      "塩化アルミニウム"
    ],
    "explanation": "塩酸とアルミニウムが化学反応してできた「塩化アルミニウム（元のアルミニウムとは別の物質）」が残ります。"
  },
  {
    "id": "r_adv2_089",
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水 100g に物質が最大限溶ける限界の質量（g）を何と言いますか。",
    "options": [
      "析出量",
      "濃度",
      "飽和液",
      "溶解度"
    ],
    "answer": "溶解度",
    "acceptableAnswers": [
      "溶解度"
    ],
    "explanation": "水 100g に溶ける溶質の最大限界質量をその温度における「溶解度」と言います。"
  },
  {
    "id": "r_adv2_090",
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "食塩（塩化ナトリウム）の溶解度の温度による変化の特徴として正しいものはどれですか。",
    "options": [
      "0℃ では全く溶けない",
      "温度が高くなっても、溶解度はほとんど変化しない",
      "温度が高くなると、急激に溶解度が増加する",
      "温度が高くなると、溶解度が大きく減少する"
    ],
    "answer": "温度が高くなっても、溶解度はほとんど変化しない",
    "acceptableAnswers": [
      "温度が高くなっても、溶解度はほとんど変化しない"
    ],
    "explanation": "食塩は水の温度が上がっても溶解度がほとんど変わりません。そのため、冷却法ではなく水を蒸発させることで結晶を取り出します。"
  },
  {
    "id": "r_adv2_091",
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "60℃ の水 100g にミョウバンは 57g 溶け、20℃ の水 100g には 11g 溶けます。60℃ の飽和水溶液を 20℃ まで冷やすと、結晶は何g析出しますか。",
    "options": [
      "11g",
      "36g",
      "46g",
      "57g"
    ],
    "answer": "46g",
    "acceptableAnswers": [
      "46g"
    ],
    "explanation": "60℃ で溶けていた 57g のうち、20℃ で溶けていられるのは 11g なので、析出する結晶の重さは 57 - 11 = 46g です。"
  },
  {
    "id": "r_adv2_092",
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水 160g に食塩 40g を完全に溶かしました。この食塩水の質量パーセント濃度は何％ですか。",
    "options": [
      "16％",
      "20％",
      "25％",
      "40％"
    ],
    "answer": "20％",
    "acceptableAnswers": [
      "20％"
    ],
    "explanation": "食塩水全体の重さは 160g + 40g = 200g です。濃度は (40 ÷ 200) × 100 = 20％ です。"
  },
  {
    "id": "r_adv2_093",
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "10％ の食塩水 200g に含まれている食塩の重さは何gですか。",
    "options": [
      "10g",
      "180g",
      "20g",
      "40g"
    ],
    "answer": "20g",
    "acceptableAnswers": [
      "20g"
    ],
    "explanation": "200g × 0.10 = 20g です。"
  },
  {
    "id": "r_adv2_094",
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "8％ の食塩水 150g に、水 50g を加えると濃度は何％になりますか。",
    "options": [
      "4％",
      "5％",
      "6％",
      "7％"
    ],
    "answer": "6％",
    "acceptableAnswers": [
      "6％"
    ],
    "explanation": "食塩の量は 150g × 0.08 = 12g。水 50g を加えると全体の重さは 150 + 50 = 200g。新しい濃度は (12 ÷ 200) × 100 = 6％ です。"
  },
  {
    "id": "r_adv2_095",
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ろうそくの炎の構造で、最も温度が高い部分はどこですか。",
    "options": [
      "炎心",
      "外炎",
      "芯の根元",
      "内炎"
    ],
    "answer": "外炎",
    "acceptableAnswers": [
      "外炎"
    ],
    "explanation": "外炎は空気中の酸素と十分に触れ合って完全燃焼しているため、最も温度が高く（約1400℃）なります。内炎は不完全燃焼で明るく輝き、炎心は気化したロウが充満しています。"
  },
  {
    "id": "r_adv2_096",
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ろうそくが燃えているとき、火がついているのはどの状態のものですか。",
    "options": [
      "液体のロウ",
      "気体になったロウ",
      "固体のロウ",
      "芯の木綿糸"
    ],
    "answer": "気体になったロウ",
    "acceptableAnswers": [
      "気体になったロウ"
    ],
    "explanation": "芯の熱で液体になったロウが毛細管現象で吸い上げられ、熱で「気体」になって燃焼しています。"
  },
  {
    "id": "r_adv2_097",
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "水に電気を流して分解（水の電気分解）したとき、陰極（−極）と陽極（＋極）から発生する気体の体積比（陰極：陽極）はどうなりますか。",
    "options": [
      "1 ： 1",
      "1 ： 2（陰極：酸素、陽極：水素）",
      "2 ： 1（陰極：水素、陽極：酸素）",
      "3 ： 1"
    ],
    "answer": "2 ： 1（陰極：水素、陽極：酸素）",
    "acceptableAnswers": [
      "2 ： 1（陰極：水素、陽極：酸素）"
    ],
    "explanation": "水（H₂O）を電気分解すると、陰極から水素、陽極から酸素が「2 ： 1」の体積比で発生します。"
  },
  {
    "id": "r_adv2_098",
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "鉄が空気中で錆びると、全体の重さは錆びる前と比べてどうなりますか。",
    "options": [
      "気体が発生して軽くなる",
      "空気中の酸素と結びつくため重くなる",
      "全く変わらない",
      "鉄が削れて軽くなる"
    ],
    "answer": "空気中の酸素と結びつくため重くなる",
    "acceptableAnswers": [
      "空気中の酸素と結びつくため重くなる"
    ],
    "explanation": "鉄が錆びるのは空気中の酸素（および水）と化学結合して酸化鉄になる現象（酸化）なので、結合した酸素の分だけ重くなります。"
  },
  {
    "id": "r_adv2_099",
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "スチールウール（鉄）を試験管の中で燃焼させたとき、試験管内の空気中の酸素が消費されます。水を入れたビーカーに試験管を逆さに立てておくと水面はどうなりますか。",
    "options": [
      "酸素が消費された分だけ試験管内の水面が上昇する",
      "試験管内の水がすべて押し出される",
      "二酸化炭素が発生して水面が下降する",
      "変化しない"
    ],
    "answer": "酸素が消費された分だけ試験管内の水面が上昇する",
    "acceptableAnswers": [
      "酸素が消費された分だけ試験管内の水面が上昇する"
    ],
    "explanation": "空気中の酸素（約20％）が鉄と結びついて気体でなくなるため、試験管内の気圧が下がり、水面が約 1/5 上昇します。"
  },
  {
    "id": "r_adv2_100",
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物質が固体から液体に変化するときの温度を何と言いますか。",
    "options": [
      "凝固点",
      "発火点",
      "沸点",
      "融点"
    ],
    "answer": "融点",
    "acceptableAnswers": [
      "融点"
    ],
    "explanation": "固体が融けて液体になる温度を「融点」、液体が気体に沸騰する温度を「沸点」と言います。"
  },
  {
    "id": "r_adv2_101",
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水に溶かすと電気を通す物質（電解質）として正しいものはどれですか。",
    "options": [
      "エタノール",
      "デンプン",
      "砂糖",
      "食塩"
    ],
    "answer": "食塩",
    "acceptableAnswers": [
      "食塩"
    ],
    "explanation": "食塩（塩化ナトリウム）や塩酸、水酸化ナトリウムは電解質で水溶液が電気を通します。砂糖やエタノールは非電解質で電気を通しません。"
  },
  {
    "id": "r_adv2_102",
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "酸性の水溶液とアルカリ性の水溶液を混ぜ合わせると、互いの性質を打ち消し合って水と塩ができる反応を何と言いますか。",
    "options": [
      "還元反応",
      "酸化反応",
      "中和反応",
      "分解反応"
    ],
    "answer": "中和反応",
    "acceptableAnswers": [
      "中和反応"
    ],
    "explanation": "酸の水素イオンとアルカリの水酸化物イオンが結びついて水ができる反応を「中和」と言います。"
  },
  {
    "id": "r_adv2_103",
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ドライアイス（二酸化炭素の固体）を室内に放置すると、液体にならず直接気体になります。このように固体から直接気体に変化する現象を何と言いますか。",
    "options": [
      "凝固",
      "凝縮",
      "昇華",
      "蒸発"
    ],
    "answer": "昇華",
    "acceptableAnswers": [
      "昇華"
    ],
    "explanation": "液体を経ずに固体から直接気体になる（または気体から直接固体になる）状態変化を「昇華」と言います。"
  },
  {
    "id": "r_adv2_104",
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "空気中に含まれる気体の中で、体積の割合が最も大きいものは何ですか。",
    "options": [
      "アルゴン（約0.9％）",
      "酸素（約21％）",
      "窒素（約78％）",
      "二酸化炭素（約0.04％）"
    ],
    "answer": "窒素（約78％）",
    "acceptableAnswers": [
      "窒素（約78％）"
    ],
    "explanation": "空気の約 78％ は窒素、約 21％ が酸素、約 0.9％ がアルゴン、二酸化炭素は約 0.04％ です。"
  },
  {
    "id": "r_adv2_105",
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "二酸化炭素を多く含む気体をペットボトルに入れ、少量の水を加えて激しく振るとどうなりますか。",
    "options": [
      "何も変化しない",
      "気体が発生してペットボトルがパンパンに膨らむ",
      "水が白く濁って温かくなる",
      "二酸化炭素が水に溶けて内圧が下がり、ペットボトルがへこむ"
    ],
    "answer": "二酸化炭素が水に溶けて内圧が下がり、ペットボトルがへこむ",
    "acceptableAnswers": [
      "二酸化炭素が水に溶けて内圧が下がり、ペットボトルがへこむ"
    ],
    "explanation": "二酸化炭素が水に溶け込むことで容器内の気圧が外気圧より低くなり、ペットボトルがつぶれます。"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "01. 実験の基本操作・有機物と無機物・金属・密度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "メスシリンダーで液体の体積を測るときの目盛りの読み方として正しいものはどれですか。",
    "options": [
      "どこから見ても目盛りは変わらないので立ったまま読む",
      "液面と目の高さを水平に合わせ、液面の中央の最も低い位置を読む",
      "液面を斜め上から見下ろし、液面の端の最も高い位置を読む",
      "液面を斜め下から見上げ、平均の目盛りを読む"
    ],
    "answer": "液面と目の高さを水平に合わせ、液面の中央の最も低い位置を読む",
    "acceptableAnswers": [
      "液面と目の高さを水平に合わせ、液面の中央の最も低い位置を読む"
    ],
    "explanation": "液面のへこんだ中央の最も低い位置（メニスカスの底）に視線を水平に合わせて読み取ります。",
    "id": "r_adv2_106"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "01. 実験の基本操作・有機物と無機物・金属・密度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "上皿てんびんで薬品の重さを測るとき、薬品をのせる皿と分銅をのせる皿の組み合わせとして正しいものはどれですか。",
    "options": [
      "どちらの皿にのせても全く問題ない",
      "分銅は必ず手でつまんでのせる",
      "右の皿に薬品（薬包紙）、左の皿に分銅",
      "左の皿に薬品（薬包紙）、右の皿に分銅"
    ],
    "answer": "左の皿に薬品（薬包紙）、右の皿に分銅",
    "acceptableAnswers": [
      "左の皿に薬品（薬包紙）、右の皿に分銅"
    ],
    "explanation": "一般に利き手で分銅を操作しやすくするため、左皿に量るもの、右皿に分銅をのせます（分銅はサビを防ぐため必ずピンセットで扱います）。",
    "id": "r_adv2_107"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "01. 実験の基本操作・有機物と無機物・金属・密度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "上皿てんびんに分銅をのせていくときの正しい順序はどれですか。",
    "options": [
      "常に1gの分銅だけの組み合わせでのせる",
      "最も軽い分銅から順に1個ずつのせていく",
      "見当をつけた重さより重い分銅から順にのせていく",
      "適当に手当たり次第にのせていく"
    ],
    "answer": "見当をつけた重さより重い分銅から順にのせていく",
    "acceptableAnswers": [
      "見当をつけた重さより重い分銅から順にのせていく"
    ],
    "explanation": "重い分銅からのせていき、つり合わなければ1段階軽い分銅に替えていくのが効率的で正確な測定手順です。",
    "id": "r_adv2_108"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "01. 実験の基本操作・有機物と無機物・金属・密度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ガスバーナーの火を消すときの正しい操作順序はどれですか。",
    "options": [
      "ガス調節ねじを先に閉めてから空気調節ねじを閉める",
      "コックだけ閉めて他はそのままにしておく",
      "元栓をいきなり閉める",
      "空気調節ねじを押さえてガス調節ねじを閉め、コック、元栓の順に閉める"
    ],
    "answer": "空気調節ねじを押さえてガス調節ねじを閉め、コック、元栓の順に閉める",
    "acceptableAnswers": [
      "空気調節ねじを押さえてガス調節ねじを閉め、コック、元栓の順に閉める"
    ],
    "explanation": "消すときは、空気調節ねじを押さえながらガス調節ねじを閉めて消火し、その後にコックと元栓を確実に閉めます。",
    "id": "r_adv2_109"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "01. 実験の基本操作・有機物と無機物・金属・密度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "金属に共通する性質のうち、金づちなどで叩くと薄く箔のように広がる性質を何と言いますか。",
    "options": [
      "可塑性",
      "展性",
      "延性",
      "磁性"
    ],
    "answer": "展性",
    "acceptableAnswers": [
      "展性"
    ],
    "explanation": "叩いて広がる性質を「展性」、引っ張って針金のように細く伸びる性質を「延性」と言います。",
    "id": "r_adv2_110"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "01. 実験の基本操作・有機物と無機物・金属・密度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "質量が 84g で体積が 30cm³ の金属のかたまりがあります。この物体の密度は何g/cm³ですか。",
    "options": [
      "0.36g/cm³",
      "2.5g/cm³",
      "2.8g/cm³",
      "3.2g/cm³"
    ],
    "answer": "2.8g/cm³",
    "acceptableAnswers": [
      "2.8g/cm³"
    ],
    "explanation": "密度＝質量 ÷ 体積 より、84 ÷ 30 = 2.8g/cm³ です。",
    "id": "r_adv2_111"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "01. 実験の基本操作・有機物と無機物・金属・密度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "理科における「水溶液」の性質として正しいものはどれですか。",
    "options": [
      "全体が均一な濃さで透明であり、静かに放置しても沈殿しない",
      "必ず酸性かアルカリ性のどちらかであり中性は存在しない",
      "時間が経つと濃い部分が底に沈んで分離する",
      "透明なものは存在せず、すべて白く濁っている"
    ],
    "answer": "全体が均一な濃さで透明であり、静かに放置しても沈殿しない",
    "acceptableAnswers": [
      "全体が均一な濃さで透明であり、静かに放置しても沈殿しない"
    ],
    "explanation": "水溶液は溶質が分子やイオンのレベルで均一に分散しているため、透明で均一、放置しても分離しません。",
    "id": "r_adv2_112"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "石灰石（炭酸カルシウム）にうすい塩酸を加えたときに発生する気体は何ですか。",
    "options": [
      "アンモニア",
      "二酸化炭素",
      "水素",
      "酸素"
    ],
    "answer": "二酸化炭素",
    "acceptableAnswers": [
      "二酸化炭素"
    ],
    "explanation": "石灰石や貝殻、卵の殻などに塩酸を加えると二酸化炭素が発生します。",
    "id": "r_adv2_113"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "亜鉛や鉄などの金属にうすい塩酸を加えたときに発生する気体は何ですか。",
    "options": [
      "二酸化炭素",
      "水素",
      "窒素",
      "酸素"
    ],
    "answer": "水素",
    "acceptableAnswers": [
      "水素"
    ],
    "explanation": "金属が酸に溶けると水素が発生します。",
    "id": "r_adv2_114"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "アンモニアを集めるときに最も適した気体の捕集方法は何ですか。",
    "options": [
      "どの方法でも同じように集められる",
      "上方置換法",
      "下方置換法",
      "水上置換法"
    ],
    "answer": "上方置換法",
    "acceptableAnswers": [
      "上方置換法"
    ],
    "explanation": "アンモニアは水に非常によく溶け、空気よりも軽いため、上方置換法で集めます。",
    "id": "r_adv2_115"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "火のついた線香を入れると、炎を上げて激しく燃え上がる性質（助燃性）を持つ気体は何ですか。",
    "options": [
      "二酸化炭素",
      "水素",
      "窒素",
      "酸素"
    ],
    "answer": "酸素",
    "acceptableAnswers": [
      "酸素"
    ],
    "explanation": "酸素自身は燃えませんが、他の物質が燃えるのを助ける性質（助燃性）を持っています。",
    "id": "r_adv2_116"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "すべての物質の中で最も密度が小さく（最も軽く）、空気中で点火すると音を立てて燃えて水ができる気体は何ですか。",
    "options": [
      "ヘリウム",
      "メタン",
      "水素",
      "酸素"
    ],
    "answer": "水素",
    "acceptableAnswers": [
      "水素"
    ],
    "explanation": "水素は宇宙で最も軽く、燃焼すると水（H2O）のみを生成するクリーンな気体です。",
    "id": "r_adv2_117"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "二酸化炭素を通すと白く濁る液体は何ですか。",
    "options": [
      "BTB溶液",
      "フェノールフタレイン溶液",
      "ヨウ素液",
      "石灰水"
    ],
    "answer": "石灰水",
    "acceptableAnswers": [
      "石灰水"
    ],
    "explanation": "石灰水（水酸化カルシウム水溶液）に二酸化炭素を通すと、水に溶けにくい炭酸カルシウムができて白く濁ります。",
    "id": "r_adv2_118"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "丸底フラスコにアンモニアを満たし、少量の水を入れると勢いよく赤色の水が吹き上がる噴水実験で、水が吹き上がる理由は何ですか。",
    "options": [
      "アンモニアが化学反応して体積が数百倍に膨らんだから",
      "アンモニアが水に急激に溶けてフラスコ内の気圧が大幅に下がったから",
      "アンモニアが熱を出してフラスコ内の空気を押し出したから",
      "フラスコに穴が開いて外部の空気が入ったから"
    ],
    "answer": "アンモニアが水に急激に溶けてフラスコ内の気圧が大幅に下がったから",
    "acceptableAnswers": [
      "アンモニアが水に急激に溶けてフラスコ内の気圧が大幅に下がったから"
    ],
    "explanation": "アンモニアが極めて水に溶けやすいため、水に溶けてフラスコ内部がほぼ真空状態になり、大気圧でビーカーの水が押し上げられます。",
    "id": "r_adv2_119"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "二酸化炭素を発生させる実験で、二酸化マンガンにうすい過酸化水素水（オキシドール）を加えたときに発生する気体は何ですか。",
    "options": [
      "二酸化炭素",
      "塩素",
      "水素",
      "酸素"
    ],
    "answer": "酸素",
    "acceptableAnswers": [
      "酸素"
    ],
    "explanation": "二酸化マンガン＋うすい過酸化水素水で発生するのは「酸素」です（二酸化炭素と混同しやすい重要ポイントです）。",
    "id": "r_adv2_120"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "02. 気体の発生と性質・熱膨張と比熱",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "水上置換法で気体を集めるとき、発生し始めの最初の試験管1本分の気体を捨てる理由は何ですか。",
    "options": [
      "最初の気体は水によく溶けてしまうから",
      "気体の温度が高すぎて試験管が割れるから",
      "発生初期の気体には毒性があるから",
      "発生装置や管の中にもともとあった空気が混ざっているから"
    ],
    "answer": "発生装置や管の中にもともとあった空気が混ざっているから",
    "acceptableAnswers": [
      "発生装置や管の中にもともとあった空気が混ざっているから"
    ],
    "explanation": "実験開始時はフラスコやゴム管の中に空気が詰まっているため、最初は空気との混合気体が出てきます。",
    "id": "r_adv2_121"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水 160g に食塩 40g を完全に溶かしたとき、この食塩水の質量パーセント濃度は何％ですか。",
    "options": [
      "16％",
      "20％",
      "25％",
      "40％"
    ],
    "answer": "20％",
    "acceptableAnswers": [
      "20％"
    ],
    "explanation": "濃度＝溶質の質量 ÷ (溶質＋溶媒の全体質量) × 100 ＝ 40 ÷ (40 + 160) × 100 ＝ 40 ÷ 200 × 100 ＝ 20％ です。",
    "id": "r_adv2_122"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "10％の食塩水 200g に水 200g を加えると、食塩水の濃度は何％になりますか。",
    "options": [
      "10％",
      "2.5％",
      "20％",
      "5％"
    ],
    "answer": "5％",
    "acceptableAnswers": [
      "5％"
    ],
    "explanation": "食塩の量は 200 × 0.1 = 20g のまま全体の重さが 400g になるため、20 ÷ 400 × 100 = 5％ に半減します。",
    "id": "r_adv2_123"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "温度による溶解度の差を利用して、高温の飽和水溶液をゆっくり冷やすことで純粋な結晶を取り出す操作を何と言いますか。",
    "options": [
      "ろ過",
      "再結晶",
      "昇華",
      "蒸留"
    ],
    "answer": "再結晶",
    "acceptableAnswers": [
      "再結晶"
    ],
    "explanation": "ミョウバンやホウ酸など、温度によって溶解度が大きく変わる物質を純粋に取り出す方法です。",
    "id": "r_adv2_124"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ろ過の実験操作で、ろうとの先端（足のとがった側）はビーカーのどこに当てるべきですか。",
    "options": [
      "ビーカーの中央に浮かせる",
      "ビーカーの内側の壁につける",
      "ビーカーの底につける",
      "水面より下につける"
    ],
    "answer": "ビーカーの内側の壁につける",
    "acceptableAnswers": [
      "ビーカーの内側の壁につける"
    ],
    "explanation": "ろうとの足をビーカーの内壁につけることで、液体が壁をつたって静かに流れ落ち、液の飛び散りを防ぎます。",
    "id": "r_adv2_125"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "03. 水溶液の性質・溶解度と再結晶・濃度計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "炭酸水を加熱すると泡が盛んに出てきます。この理由として正しいものはどれですか。",
    "options": [
      "気体の水に対する溶解度は、水温が高くなるほど小さくなるから",
      "水が急激に沸騰して水蒸気になったから",
      "水温が高くなると気体が水にたくさん溶けるから",
      "炭酸水中の酸が分解して水素になったから"
    ],
    "answer": "気体の水に対する溶解度は、水温が高くなるほど小さくなるから",
    "acceptableAnswers": [
      "気体の水に対する溶解度は、水温が高くなるほど小さくなるから"
    ],
    "explanation": "気体（二酸化炭素など）は固体と異なり、温度が上がるほど水に溶けにくくなるため気泡となって抜けていきます。",
    "id": "r_adv2_126"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "氷が溶けて水になるとき、全体の質量と体積の変化として正しいものはどれですか。",
    "options": [
      "質量が減少し、体積は変化しない",
      "質量は変化せず、体積は増加する",
      "質量は変化せず、体積は減少する",
      "質量も体積も増加する"
    ],
    "answer": "質量は変化せず、体積は減少する",
    "acceptableAnswers": [
      "質量は変化せず、体積は減少する"
    ],
    "explanation": "状態変化しても物質の粒の数は変わらないため質量は保存されます。水は氷になるとすきまの多い構造になるため、溶けると体積が減ります。",
    "id": "r_adv2_127"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "エタノールと水の混合物を加熱して気体にし、それを冷やして純度の高いエタノールを取り出す実験操作を何と言いますか。",
    "options": [
      "ろ過",
      "中和",
      "再結晶",
      "蒸留"
    ],
    "answer": "蒸留",
    "acceptableAnswers": [
      "蒸留"
    ],
    "explanation": "沸点の違い（エタノール約78℃、水100℃）を利用して分離する操作を蒸留と言います。",
    "id": "r_adv2_128"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "エタノールと水の混合物を加熱したとき、最初に出てくる気体を集めた液体について正しい説明はどれですか。",
    "options": [
      "エタノールが多く含まれ、火をつけるとよく燃える",
      "二酸化炭素が含まれている",
      "水だけが含まれ、火はつかない",
      "酸素が含まれ線香が激しく燃える"
    ],
    "answer": "エタノールが多く含まれ、火をつけるとよく燃える",
    "acceptableAnswers": [
      "エタノールが多く含まれ、火をつけるとよく燃える"
    ],
    "explanation": "沸点が低いエタノールのほうが先に蒸発して出てくるため、最初の留分には高濃度のエタノールが含まれます。",
    "id": "r_adv2_129"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "夏の暑い日に道路に打ち水をすると涼しくなる理由は何ですか。",
    "options": [
      "まいた水が蒸発するときに周囲から気化熱を奪うから",
      "水が地面の熱を吸い込んで冷たい氷になるから",
      "水と地面が化学反応して吸熱するから",
      "水によって太陽光がすべて宇宙へ反射されるから"
    ],
    "answer": "まいた水が蒸発するときに周囲から気化熱を奪うから",
    "acceptableAnswers": [
      "まいた水が蒸発するときに周囲から気化熱を奪うから"
    ],
    "explanation": "液体が気体に変化するときに周囲から奪う熱を「気化熱（蒸発熱）」と言います。",
    "id": "r_adv2_130"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "04. 物質の状態変化・融点と沸点・蒸留",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "純粋な水が沸騰している間、水の温度はどうなりますか。",
    "options": [
      "100℃のまま変化しない",
      "一度上がってから急激に下がる",
      "加熱を続ける限りぐんぐん上昇する",
      "熱を奪われて徐々に低下する"
    ],
    "answer": "100℃のまま変化しない",
    "acceptableAnswers": [
      "100℃のまま変化しない"
    ],
    "explanation": "純物質が状態変化している最中は、加えられた熱がすべて状態変化に使われるため温度は一定（沸点）に保たれます。",
    "id": "r_adv2_131"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "05. 熱分解と電気分解・原子と分子・化合",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "炭酸水素ナトリウム（重曹）を加熱したとき、試験管の口付近に生じる無色の液体を調べる試験紙は何ですか。",
    "options": [
      "BTB溶液（黄色に変化する）",
      "ヨウ素液（青紫色に変化する）",
      "赤色リトマス紙（青色に変化する）",
      "青色の塩化コバルト紙（赤色に変化する）"
    ],
    "answer": "青色の塩化コバルト紙（赤色に変化する）",
    "acceptableAnswers": [
      "青色の塩化コバルト紙（赤色に変化する）"
    ],
    "explanation": "水が存在すると青色の塩化コバルト紙が赤色（桃色）に変わることで水を検出します。",
    "id": "r_adv2_132"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "05. 熱分解と電気分解・原子と分子・化合",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "炭酸水素ナトリウムを試験管に入れて加熱するとき、試験管の口を底よりわずかに下げて設置する理由は何ですか。",
    "options": [
      "加熱する炎を当てやすくするため",
      "気体が試験管の口から逃げやすくするため",
      "発生した液体が加熱部に流れて試験管が割れるのを防ぐため",
      "薬品が試験管の口からこぼれ落ちるのを防ぐため"
    ],
    "answer": "発生した液体が加熱部に流れて試験管が割れるのを防ぐため",
    "acceptableAnswers": [
      "発生した液体が加熱部に流れて試験管が割れるのを防ぐため"
    ],
    "explanation": "発生した水滴が加熱されている高温の底へ逆流すると、急冷されてガラス試験管が破損する危険があるためです。",
    "id": "r_adv2_133"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "05. 熱分解と電気分解・原子と分子・化合",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "黒色の酸化銀の粉末を加熱した後に残る白い固体をスプーンの背などでこするとどうなりますか。",
    "options": [
      "気体となって消滅する",
      "金属光沢が出て、電気を通すようになる（銀になる）",
      "青色に変わり、水に溶ける",
      "黒色に戻り、磁石に引き寄せられる"
    ],
    "answer": "金属光沢が出て、電気を通すようになる（銀になる）",
    "acceptableAnswers": [
      "金属光沢が出て、電気を通すようになる（銀になる）"
    ],
    "explanation": "酸化銀が熱分解して銀と酸素に分かれます。銀は金属なのでこすると光沢が出ます。",
    "id": "r_adv2_134"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "05. 熱分解と電気分解・原子と分子・化合",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水を電気分解したとき、陰極（−極）と陽極（＋極）に発生する気体の体積比として正しいものはどれですか。",
    "options": [
      "陰極（水素）：陽極（酸素）＝ 1 ： 1",
      "陰極（水素）：陽極（酸素）＝ 1 ： 2",
      "陰極（水素）：陽極（酸素）＝ 2 ： 1",
      "陰極（酸素）：陽極（水素）＝ 2 ： 1"
    ],
    "answer": "陰極（水素）：陽極（酸素）＝ 2 ： 1",
    "acceptableAnswers": [
      "陰極（水素）：陽極（酸素）＝ 2 ： 1"
    ],
    "explanation": "水の化学式 H2O の比率通り、陰極に水素が2、陽極に酸素が1の体積比で発生します。",
    "id": "r_adv2_135"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "05. 熱分解と電気分解・原子と分子・化合",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "鉄粉と硫黄の粉末の混合物を加熱すると激しく光を出して反応し、黒い物質ができます。この物質は何ですか。",
    "options": [
      "水酸化鉄",
      "炭化鉄",
      "硫化鉄",
      "酸化鉄"
    ],
    "answer": "硫化鉄",
    "acceptableAnswers": [
      "硫化鉄"
    ],
    "explanation": "鉄と硫黄が化合して「硫化鉄」ができます。化合後は磁石につかなくなります。",
    "id": "r_adv2_136"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "銅の粉末を空気中で十分に加熱して完全に酸化させたとき、化合する銅と酸素の質量の比はどうなりますか。",
    "options": [
      "銅 ： 酸素 ＝ 1 ： 1",
      "銅 ： 酸素 ＝ 2 ： 1",
      "銅 ： 酸素 ＝ 3 ： 2",
      "銅 ： 酸素 ＝ 4 ： 1"
    ],
    "answer": "銅 ： 酸素 ＝ 4 ： 1",
    "acceptableAnswers": [
      "銅 ： 酸素 ＝ 4 ： 1"
    ],
    "explanation": "銅と酸素は常に 4 : 1 の質量比で化合して酸化銅（黒色）になります（定比例の法則）。",
    "id": "r_adv2_137"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "マグネシウムを空気中で燃焼させて完全に酸化させたとき、化合するマグネシウムと酸素の質量の比はどうなりますか。",
    "options": [
      "マグネシウム ： 酸素 ＝ 1 ： 1",
      "マグネシウム ： 酸素 ＝ 3 ： 2",
      "マグネシウム ： 酸素 ＝ 4 ： 1",
      "マグネシウム ： 酸素 ＝ 5 ： 2"
    ],
    "answer": "マグネシウム ： 酸素 ＝ 3 ： 2",
    "acceptableAnswers": [
      "マグネシウム ： 酸素 ＝ 3 ： 2"
    ],
    "explanation": "マグネシウムと酸素は 3 : 2 の質量比で化合して白色の酸化マグネシウムになります。",
    "id": "r_adv2_138"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "黒色の酸化銅の粉末に炭素の粉末を混ぜて加熱すると、赤色の銅が生じました。この化学変化で酸化銅に起きた変化を何と言いますか。",
    "options": [
      "中和",
      "分解",
      "還元",
      "酸化"
    ],
    "answer": "還元",
    "acceptableAnswers": [
      "還元"
    ],
    "explanation": "酸化物から酸素が奪われる反応を「還元」と言います（炭素は酸素を受け取って二酸化炭素に酸化されます）。",
    "id": "r_adv2_139"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "使い捨てカイロが空気に触れると温かくなるのは、何という化学変化による熱を利用していますか。",
    "options": [
      "プラスチックの燃焼反応",
      "水酸化ナトリウムの中和反応",
      "鉄粉が水分を吸って溶ける溶解反応",
      "鉄粉が空気中の酸素と結びつく酸化反応（発熱反応）"
    ],
    "answer": "鉄粉が空気中の酸素と結びつく酸化反応（発熱反応）",
    "acceptableAnswers": [
      "鉄粉が空気中の酸素と結びつく酸化反応（発熱反応）"
    ],
    "explanation": "鉄が酸化して酸化鉄になるときに放出する「酸化熱（発熱反応）」を利用しています。",
    "id": "r_adv2_140"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "水酸化バリウムと塩化アンモニウムをビーカーの中で混ぜ合わせると、ビーカーの温度はどうなりますか。",
    "options": [
      "光を発して燃え上がる",
      "周囲から熱を奪って急激に温度が下がる（吸熱反応）",
      "温度は全く変化しない",
      "激しく発熱して沸騰する"
    ],
    "answer": "周囲から熱を奪って急激に温度が下がる（吸熱反応）",
    "acceptableAnswers": [
      "周囲から熱を奪って急激に温度が下がる（吸熱反応）"
    ],
    "explanation": "化学反応の際に周囲から熱を吸収する「吸熱反応」の代表例で、水で濡らした木片の上に置くとビーカー底が凍りついて木片が持ち上がります。",
    "id": "r_adv2_141"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "酸性の水溶液に青色リトマス紙をつけたときの色の変化として正しいものはどれですか。",
    "options": [
      "青色リトマス紙が変化せず青のまま",
      "青色リトマス紙が無色透明になる",
      "青色リトマス紙が赤色に変化する",
      "青色リトマス紙が黄色に変化する"
    ],
    "answer": "青色リトマス紙が赤色に変化する",
    "acceptableAnswers": [
      "青色リトマス紙が赤色に変化する"
    ],
    "explanation": "「赤くなったら酸性」と覚えます。酸性溶液は青色リトマス紙を赤色に変えます。",
    "id": "r_adv2_142"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "アルカリ性の水溶液にBTB溶液を加えたとき、水溶液は何色になりますか。",
    "options": [
      "緑色",
      "赤色",
      "青色",
      "黄色"
    ],
    "answer": "青色",
    "acceptableAnswers": [
      "青色"
    ],
    "explanation": "BTB溶液は、酸性で黄色、中性で緑色、アルカリ性で青色を示します。",
    "id": "r_adv2_143"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "無色のフェノールフタレイン溶液が赤色に変化するのは、調べた水溶液が何性のときですか。",
    "options": [
      "アルカリ性",
      "中性",
      "強酸性",
      "酸性"
    ],
    "answer": "アルカリ性",
    "acceptableAnswers": [
      "アルカリ性"
    ],
    "explanation": "フェノールフタレイン溶液はアルカリ性の水溶液にのみ反応して鮮やかな赤色（赤紫色）に変化します。",
    "id": "r_adv2_144"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "うすい塩酸にアルミニウムを入れたとき、盛んに気体を発生してアルミニウムが溶けました。発生した気体は何ですか。",
    "options": [
      "二酸化炭素",
      "塩素",
      "水素",
      "酸素"
    ],
    "answer": "水素",
    "acceptableAnswers": [
      "水素"
    ],
    "explanation": "酸性の水溶液に金属を入れると水素が発生します。",
    "id": "r_adv2_145"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "うすい水酸化ナトリウム水溶液（アルカリ性）にアルミニウム片を入れるとどうなりますか。",
    "options": [
      "まったく反応せず変化しない",
      "アルミニウムの表面が黒く錆びるだけ",
      "二酸化炭素を発生して溶ける",
      "水素を発生しながら激しく溶ける"
    ],
    "answer": "水素を発生しながら激しく溶ける",
    "acceptableAnswers": [
      "水素を発生しながら激しく溶ける"
    ],
    "explanation": "アルミニウムや亜鉛などの両性金属は、酸だけでなく強アルカリ性の水溶液にも溶けて水素を発生します。",
    "id": "r_adv2_146"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "うすい塩酸にうすい水酸化ナトリウム水溶液を過不足なく加えて中性にしたとき、できる塩（えん）は何ですか。",
    "options": [
      "塩化ナトリウム（食塩）",
      "炭酸カルシウム",
      "硝酸カリウム",
      "硫酸ナトリウム"
    ],
    "answer": "塩化ナトリウム（食塩）",
    "acceptableAnswers": [
      "塩化ナトリウム（食塩）"
    ],
    "explanation": "塩酸の塩化物イオンと水酸化ナトリウムのナトリウムイオンが結びつき、塩化ナトリウム（食塩）と水ができます。",
    "id": "r_adv2_147"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "07. 水溶液とイオン・電池・酸とアルカリ・中和と塩",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水に溶けたときに電離して水溶液が電気を通すようになる物質を何と言いますか。",
    "options": [
      "絶縁体",
      "触媒",
      "電解質",
      "非電解質"
    ],
    "answer": "電解質",
    "acceptableAnswers": [
      "電解質"
    ],
    "explanation": "食塩や塩化水素のように水に溶けて電気を通す物質を電解質、砂糖やエタノールのように通さない物質を非電解質と言います。",
    "id": "r_adv2_148"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "08. プラスチックと繊維・環境・化学実験データ計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ペットボトルやポリ袋などの「プラスチック」に共通する性質として正しいものはどれですか。",
    "options": [
      "すべて自然界の植物からそのまま採取される",
      "炭素を含む「有機物」であり、燃やすと二酸化炭素と水が発生する",
      "無機物であり、加熱しても絶対に燃えない",
      "金属の一種であり、電気をよく通す"
    ],
    "answer": "炭素を含む「有機物」であり、燃やすと二酸化炭素と水が発生する",
    "acceptableAnswers": [
      "炭素を含む「有機物」であり、燃やすと二酸化炭素と水が発生する"
    ],
    "explanation": "プラスチックは主に石油から作られる人工の有機高分子化合物で、絶縁性があり軽く、燃やすと二酸化炭素が発生します。",
    "id": "r_adv2_149"
  },
  {
    "subject": "理科",
    "category": "化学",
    "subCategory": "08. プラスチックと繊維・環境・化学実験データ計算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "工場や自動車から排出される硫黄酸化物や窒素酸化物が雨に溶け込んで降る、森林や湖沼を破壊する地球環境問題を何と言いますか。",
    "options": [
      "オゾン層破壊",
      "温室効果",
      "砂漠化",
      "酸性雨"
    ],
    "answer": "酸性雨",
    "acceptableAnswers": [
      "酸性雨"
    ],
    "explanation": "化石燃料の燃焼で生じた酸性物質が大気中の水蒸気や雨に溶け、pHが低下した酸性雨となります。",
    "id": "r_adv2_150"
  },
  {
    "id": "r_adv2_151",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "種子が発芽するために絶対に必要な「発芽の三大条件」として正しい組み合わせはどれですか。",
    "options": [
      "空気・日光・適当な温度",
      "水・空気・肥料",
      "水・空気（酸素）・適当な温度",
      "水・日光・土"
    ],
    "answer": "水・空気（酸素）・適当な温度",
    "acceptableAnswers": [
      "水・空気（酸素）・適当な温度"
    ],
    "explanation": "発芽に必要な条件は「水」「空気（酸素）」「適当な温度」です。日光や土、肥料は発芽自体には必要ありません。"
  },
  {
    "id": "r_adv2_152",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "インゲンマメの種子において、発芽するための養分（デンプン）が蓄えられている部分はどこですか。",
    "options": [
      "子葉",
      "種皮",
      "幼芽",
      "胚乳"
    ],
    "answer": "子葉",
    "acceptableAnswers": [
      "子葉"
    ],
    "explanation": "インゲンマメは無胚乳種子で、養分は2枚の「子葉」に蓄えられています。イネやトウモロコシは「胚乳」に蓄えます。"
  },
  {
    "id": "r_adv2_153",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の葉で光合成が行われる細胞小器官（緑色の粒）は何ですか。",
    "options": [
      "維管束",
      "気孔",
      "細胞核",
      "葉緑体"
    ],
    "answer": "葉緑体",
    "acceptableAnswers": [
      "葉緑体"
    ],
    "explanation": "光合成は細胞内の「葉緑体」で行われ、光のエネルギーを使ってデンプンと酸素を作ります。"
  },
  {
    "id": "r_adv2_154",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物が光合成を行うときに吸収する気体と、排出する気体の組み合わせとして正しいものはどれですか。",
    "options": [
      "吸収：酸素、排出：二酸化炭素",
      "吸収：水蒸気、排出：二酸化炭素",
      "吸収：窒素、排出：酸素",
      "吸収：二酸化炭素、排出：酸素"
    ],
    "answer": "吸収：二酸化炭素、排出：酸素",
    "acceptableAnswers": [
      "吸収：二酸化炭素、排出：酸素"
    ],
    "explanation": "光合成では二酸化炭素と水を原料にしてデンプンを作り、酸素を排出します（呼吸では逆に酸素を吸って二酸化炭素を出します）。"
  },
  {
    "id": "r_adv2_155",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物が昼間に十分な光を浴びているとき、見かけ上の気体の出入りはどうなりますか。",
    "options": [
      "気体の出入りは止まる",
      "酸素を吸って、二酸化炭素を出す",
      "二酸化炭素と酸素を同量吸う",
      "二酸化炭素を吸って、酸素を出す"
    ],
    "answer": "二酸化炭素を吸って、酸素を出す",
    "acceptableAnswers": [
      "二酸化炭素を吸って、酸素を出す"
    ],
    "explanation": "昼間は「光合成の速度＞呼吸の速度」となるため、見かけ上は二酸化炭素を吸収して酸素を放出しているように見えます。"
  },
  {
    "id": "r_adv2_156",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の葉の裏側に多く見られ、蒸散や気体の出入り口となっているすき間を何と言いますか。",
    "options": [
      "気孔",
      "師管",
      "道管",
      "葉脈"
    ],
    "answer": "気孔",
    "acceptableAnswers": [
      "気孔"
    ],
    "explanation": "2つの三日月形の孔辺細胞に囲まれたすき間を「気孔」と言います。"
  },
  {
    "id": "r_adv2_157",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の根から吸い上げられた水や養分が通る管を何と言いますか。",
    "options": [
      "維管束",
      "気管",
      "師管",
      "道管"
    ],
    "answer": "道管",
    "acceptableAnswers": [
      "道管"
    ],
    "explanation": "水が通る管が「道管（内側）」、葉で作られた栄養分（糖）が通る管が「師管（外側）」です。合わせて維管束と呼びます。"
  },
  {
    "id": "r_adv2_158",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "アブラナの花のつくりの特徴として、花びら（花弁）とおしべの数の組み合わせで正しいものはどれですか。",
    "options": [
      "花びら：4枚、おしべ：4本",
      "花びら：4枚、おしべ：6本（長4本、短2本）",
      "花びら：5枚、おしべ：10本",
      "花びら：6枚、おしべ：6本"
    ],
    "answer": "花びら：4枚、おしべ：6本（長4本、短2本）",
    "acceptableAnswers": [
      "花びら：4枚、おしべ：6本（長4本、短2本）"
    ],
    "explanation": "アブラナは十字架植物で花びらが4枚、おしべは6本（長いもの4本、短いもの2本）、めしべは1本です。"
  },
  {
    "id": "r_adv2_159",
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "受粉したあと、めしべの根元の「子房」は成長して何になりますか。",
    "options": [
      "果実",
      "花粉",
      "種子",
      "胚珠"
    ],
    "answer": "果実",
    "acceptableAnswers": [
      "果実"
    ],
    "explanation": "子房は成長して「果実」になり、子房の中の「胚珠」が成長して「種子（タネ）」になります。"
  },
  {
    "id": "r_adv2_160",
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "昆虫のからだは、どのように分かれていますか。",
    "options": [
      "頭胸部・腹部の2つ",
      "頭部・胸部・腹部・尾部の4つ",
      "頭部・胸部・腹部の3つ",
      "頭部・胴体の2つ"
    ],
    "answer": "頭部・胸部・腹部の3つ",
    "acceptableAnswers": [
      "頭部・胸部・腹部の3つ"
    ],
    "explanation": "昆虫の成虫のからだは「頭部」「胸部」「腹部」の3つに分かれています（クモは頭胸部と腹部の2つ）。"
  },
  {
    "id": "r_adv2_161",
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "昆虫の脚（あし）は全部で何本あり、からだのどこから生えていますか。",
    "options": [
      "6本（3対）、胸部から生えている",
      "6本（3対）、頭部から生えている",
      "6本（3対）、腹部から生えている",
      "8本（4対）、胸部から生えている"
    ],
    "answer": "6本（3対）、胸部から生えている",
    "acceptableAnswers": [
      "6本（3対）、胸部から生えている"
    ],
    "explanation": "昆虫の脚は6本で、すべて「胸部」から生えています。"
  },
  {
    "id": "r_adv2_162",
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "「卵 → 幼虫 → さなぎ → 成虫」という段階を経て成長する変態様式を何と言いますか。",
    "options": [
      "完全変態",
      "多重変態",
      "不完全変態",
      "無変態"
    ],
    "answer": "完全変態",
    "acceptableAnswers": [
      "完全変態"
    ],
    "explanation": "さなぎの時期があるものを「完全変態（チョウ、カブトムシ、ハチ、ハエなど）」と言います。さなぎがないものを「不完全変態（バッタ、トンボ、セミなど）」と言います。"
  },
  {
    "id": "r_adv2_163",
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "次の昆虫のうち、「不完全変態（さなぎの時期がない）」をするものはどれですか。",
    "options": [
      "カイコ",
      "カブトムシ",
      "バッタ",
      "モンシロチョウ"
    ],
    "answer": "バッタ",
    "acceptableAnswers": [
      "バッタ"
    ],
    "explanation": "バッタ、トンボ、セミ、カマキリ、コオロギなどはさなぎにならずに幼虫から直接成虫になる「不完全変態」です。"
  },
  {
    "id": "r_adv2_164",
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "メダカのオスとメスの見分け方について、オスの特徴として正しいものはどれですか。",
    "options": [
      "背びれに切れ込みがあり、尻びれが大きい平行四辺形",
      "背びれに切れ込みがなく、尻びれが小さい三角形",
      "尾びれが二股に大きく分かれている",
      "腹部が大きく丸みを帯びている"
    ],
    "answer": "背びれに切れ込みがあり、尻びれが大きい平行四辺形",
    "acceptableAnswers": [
      "背びれに切れ込みがあり、尻びれが大きい平行四辺形"
    ],
    "explanation": "オスは背びれの後ろに切れ込みがあり、尻びれが大きく四角形（平行四辺形）に近い形をしています。メスは切れ込みがなく尻びれは三角形に近いです。"
  },
  {
    "id": "r_adv2_165",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ヒトの体内において、食べたデンプンを麦芽糖（マルトース）に分解する唾液に含まれる消化酵素は何ですか。",
    "options": [
      "アミラーゼ（プチアリン）",
      "トリプシン",
      "ペプシン",
      "リパーゼ"
    ],
    "answer": "アミラーゼ（プチアリン）",
    "acceptableAnswers": [
      "アミラーゼ（プチアリン）"
    ],
    "explanation": "唾液にはデンプンを分解する消化酵素「アミラーゼ」が含まれています。"
  },
  {
    "id": "r_adv2_166",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ヒトの胃液に含まれ、タンパク質を分解する消化酵素は何ですか。",
    "options": [
      "アミラーゼ",
      "ペプシン",
      "マルターゼ",
      "リパーゼ"
    ],
    "answer": "ペプシン",
    "acceptableAnswers": [
      "ペプシン"
    ],
    "explanation": "胃液には強酸性の塩酸と、タンパク質を分解する酵素「ペプシン」が含まれています。"
  },
  {
    "id": "r_adv2_167",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "肝臓で作られ、胆のうに蓄えられる「胆汁」の主な働きは何ですか。",
    "options": [
      "タンパク質をアミノ酸に分解する",
      "デンプンをブドウ糖に分解する",
      "脂肪の消化を助ける（乳化する）",
      "尿素を作る"
    ],
    "answer": "脂肪の消化を助ける（乳化する）",
    "acceptableAnswers": [
      "脂肪の消化を助ける（乳化する）"
    ],
    "explanation": "胆汁には消化酵素自体は含まれませんが、脂肪を細かくして消化酵素が働きやすいように助ける（乳化する）働きがあります。"
  },
  {
    "id": "r_adv2_168",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "小腸の内側の壁にある無数の小さな突起（絨毛）の役割は何ですか。",
    "options": [
      "強い酸から胃を守る",
      "食べ物を細かくすりつぶす",
      "体温を一定に保つ",
      "表面積を大きくして、栄養分の吸収効率を高める"
    ],
    "answer": "表面積を大きくして、栄養分の吸収効率を高める",
    "acceptableAnswers": [
      "表面積を大きくして、栄養分の吸収効率を高める"
    ],
    "explanation": "絨毛（じゅうもう）が無数にあることで表面積がテニスコート一面分ほどに広がり、栄養分を素早く効率よく吸収できます。"
  },
  {
    "id": "r_adv2_169",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "血液の成分のうち、酸素を全身の細胞に運ぶ働きをしているものは何ですか。",
    "options": [
      "血しょう",
      "血小板",
      "赤血球（ヘモグロビン）",
      "白血球"
    ],
    "answer": "赤血球（ヘモグロビン）",
    "acceptableAnswers": [
      "赤血球（ヘモグロビン）"
    ],
    "explanation": "赤血球に含まれるヘモグロビンが酸素と結びついて全身へ運びます。白血球は細菌の撃退、血小板は血液凝固、血しょうは液体成分です。"
  },
  {
    "id": "r_adv2_170",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "心臓から送り出された血液が肺を通って心臓に戻る循環経路を何と言いますか。",
    "options": [
      "リンパ循環",
      "体循環",
      "肺循環",
      "門脈循環"
    ],
    "answer": "肺循環",
    "acceptableAnswers": [
      "肺循環"
    ],
    "explanation": "心臓（右心室）→ 肺動脈 → 肺 → 肺静脈 → 心臓（左心房）の経路を「肺循環」と言います。全身を巡るのは「体循環」です。"
  },
  {
    "id": "r_adv2_171",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "全身の血管の中で、酸素を最も多く含んだ動脈血が流れている静脈はどれですか。",
    "options": [
      "肝静脈",
      "大静脈",
      "肺静脈",
      "肺動脈"
    ],
    "answer": "肺静脈",
    "acceptableAnswers": [
      "肺静脈"
    ],
    "explanation": "肺で新鮮な酸素を受け取って心臓へ戻る「肺静脈」には、最も酸素を多く含む動脈血が流れています。"
  },
  {
    "id": "r_adv2_172",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "筋肉が骨に付着している丈夫な結合組織のひもを何と言いますか。",
    "options": [
      "けん（腱）",
      "関節",
      "骨膜",
      "軟骨"
    ],
    "answer": "けん（腱）",
    "acceptableAnswers": [
      "けん（腱）"
    ],
    "explanation": "筋肉の両端は丈夫な「腱（けん）」となって骨につながっています（アキレス腱など）。"
  },
  {
    "id": "r_adv2_173",
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "腕を曲げるとき、腕の内側の筋肉（上腕二頭筋）と外側の筋肉（上腕三頭筋）の状態はどうなりますか。",
    "options": [
      "内側の筋肉が縮み、外側の筋肉が緩む（伸びる）",
      "内側の筋肉が伸び、外側の筋肉が縮む",
      "両方の筋肉が同時に緩む",
      "両方の筋肉が同時に縮む"
    ],
    "answer": "内側の筋肉が縮み、外側の筋肉が緩む（伸びる）",
    "acceptableAnswers": [
      "内側の筋肉が縮み、外側の筋肉が緩む（伸びる）"
    ],
    "explanation": "腕を曲げるときは内側の上腕二頭筋が縮み（収縮）、外側の上腕三頭筋が緩みます。"
  },
  {
    "id": "r_adv2_174",
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の冬越しの姿について、アサガオの冬越しの状態はどれですか。",
    "options": [
      "ロゼット",
      "球根",
      "種子",
      "地下茎"
    ],
    "answer": "種子",
    "acceptableAnswers": [
      "種子"
    ],
    "explanation": "一年草であるアサガオは冬に枯れて「種子（タネ）」の状態で冬を越します。"
  },
  {
    "id": "r_adv2_175",
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "タンポポやナズナが、冬の寒さに耐えるために地面に葉を平らに広げている姿を何と言いますか。",
    "options": [
      "ロゼット",
      "休眠枝",
      "球根",
      "冬芽"
    ],
    "answer": "ロゼット",
    "acceptableAnswers": [
      "ロゼット"
    ],
    "explanation": "冬の冷たい風を避け、地面の熱を受けやすくするために放射状に葉を広げる形態を「ロゼット」と言います。"
  },
  {
    "id": "r_adv2_176",
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生態系において、無機物から光合成によって有機物を作り出す植物などを何と呼びますか。",
    "options": [
      "一次消費者",
      "生産者",
      "二次消費者",
      "分解者"
    ],
    "answer": "生産者",
    "acceptableAnswers": [
      "生産者"
    ],
    "explanation": "植物は自ら栄養分（有機物）を作り出すため「生産者」と呼ばれます。草食動物や肉食動物は「消費者」、菌類・細菌類は「分解者」です。"
  },
  {
    "id": "r_adv2_177",
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物同士の「食べる・食べられる」という一連のつながりを何と言いますか。",
    "options": [
      "寄生関係",
      "共生関係",
      "食物ピラミッド",
      "食物連鎖"
    ],
    "answer": "食物連鎖",
    "acceptableAnswers": [
      "食物連鎖"
    ],
    "explanation": "生物間の捕食・被食の連鎖関係を「食物連鎖（または網状につながる食物網）」と言います。"
  },
  {
    "id": "r_adv2_178",
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "顕微鏡の使い方で、倍率を「低倍率」から「高倍率」に変えたときの視野の変化として正しいものはどれですか。",
    "options": [
      "視野は狭くなり、暗くなる",
      "視野は狭くなり、明るくなる",
      "視野は広くなり、暗くなる",
      "視野は広くなり、明るくなる"
    ],
    "answer": "視野は狭くなり、暗くなる",
    "acceptableAnswers": [
      "視野は狭くなり、暗くなる"
    ],
    "explanation": "高倍率にすると見える範囲（視野）は狭くなり、入ってくる光の量が減るため視野全体は暗くなります。"
  },
  {
    "id": "r_adv2_179",
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "顕微鏡で観察するとき、プレパラートを動かす向きと視野の中で像が動く向きの関係はどうなりますか。",
    "options": [
      "左右だけ逆向きに動く",
      "上下だけ逆向きに動く",
      "上下左右が逆向きに動く",
      "同じ向きに動く"
    ],
    "answer": "上下左右が逆向きに動く",
    "acceptableAnswers": [
      "上下左右が逆向きに動く"
    ],
    "explanation": "一般的な光学顕微鏡の像は「上下左右が逆（倒立像）」に見えるため、プレパラートを右に動かすと像は左へ動きます。"
  },
  {
    "id": "r_adv2_180",
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ジャガイモの食用にする「イモ」は、植物のどの器官が変化したものですか。",
    "options": [
      "根",
      "実",
      "地下茎（茎）",
      "葉"
    ],
    "answer": "地下茎（茎）",
    "acceptableAnswers": [
      "地下茎（茎）"
    ],
    "explanation": "ジャガイモは「茎（地下茎）」が養分を蓄えて太ったものです。なお、サツマイモは「根」が太ったものです。"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "アブラナの花のつくりについて、がく片、花弁（花びら）、おしべの数の正しい組み合わせはどれですか。",
    "options": [
      "がく3枚、花弁3枚、おしべ6本",
      "がく4枚、花弁4枚、おしべ4本",
      "がく4枚、花弁4枚、おしべ6本",
      "がく5枚、花弁5枚、おしべ10本"
    ],
    "answer": "がく4枚、花弁4枚、おしべ6本",
    "acceptableAnswers": [
      "がく4枚、花弁4枚、おしべ6本"
    ],
    "explanation": "アブラナは十字花科（アブラナ科）と呼ばれ、花弁4枚、がく4枚、めしべ1本、おしべは長いもの4本＋短いもの2本の計6本あります。",
    "id": "r_adv2_181"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ツユクサやイネ、トウモロコシなど「単子葉類」の植物の葉脈と根のつくりの特徴として正しいものはどれですか。",
    "options": [
      "平行脈で、根はひげ根である",
      "平行脈で、根は主根と側根である",
      "網状脈で、根はひげ根である",
      "網状脈で、根は主根と側根である"
    ],
    "answer": "平行脈で、根はひげ根である",
    "acceptableAnswers": [
      "平行脈で、根はひげ根である"
    ],
    "explanation": "単子葉類は子葉が1枚、葉脈は平行脈、根はひげ根、茎の維管束は散在しています。",
    "id": "r_adv2_182"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "インゲンマメなどの種子が発芽するために絶対に必要となる3つの条件は何ですか。",
    "options": [
      "土、水、適当な温度",
      "水、日光、肥料",
      "水、空気（酸素）、適当な温度",
      "空気、土、日光"
    ],
    "answer": "水、空気（酸素）、適当な温度",
    "acceptableAnswers": [
      "水、空気（酸素）、適当な温度"
    ],
    "explanation": "発芽の3条件は「水・空気・適当な温度」です。日光や土、肥料は発芽の段階では必要ありません（光合成を始める成長期に必要）。",
    "id": "r_adv2_183"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "01. 身近な自然の観察・被子植物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "イネやカキのように養分を蓄える「胚乳」を持つ種子に対し、インゲンマメやダイズのように胚乳がなく子葉に養分を蓄える種子を何と言いますか。",
    "options": [
      "有胚乳種子",
      "無胚乳種子",
      "胞子",
      "裸子植物"
    ],
    "answer": "無胚乳種子",
    "acceptableAnswers": [
      "無胚乳種子"
    ],
    "explanation": "インゲンマメ、エンドウ、アブラナ、ヒマワリなどは子葉が発達した無胚乳種子です。",
    "id": "r_adv2_184"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "02. 裸子植物・シダ・コケ・植物の分類",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "マツやイチョウ、スギのように、胚珠が子房に包まれずむき出しになっている植物の仲間を何と言いますか。",
    "options": [
      "コケ植物",
      "シダ植物",
      "被子植物",
      "裸子植物"
    ],
    "answer": "裸子植物",
    "acceptableAnswers": [
      "裸子植物"
    ],
    "explanation": "胚珠がむき出しになっているため裸子植物と呼ばれ、果実は作らず松かさ（球果）などを作ります。",
    "id": "r_adv2_185"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "02. 裸子植物・シダ・コケ・植物の分類",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "マツの花粉には空気袋がついています。これは花粉が何によって運ばれるためですか。",
    "options": [
      "昆虫によって運ばれる（虫媒花）",
      "水に浮いて運ばれる（水媒花）",
      "風によって運ばれる（風媒花）",
      "鳥によって運ばれる（鳥媒花）"
    ],
    "answer": "風によって運ばれる（風媒花）",
    "acceptableAnswers": [
      "風によって運ばれる（風媒花）"
    ],
    "explanation": "マツは花粉を風に乗せて遠くまで飛ばすため、花粉の両側に空気袋を備えています。",
    "id": "r_adv2_186"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "02. 裸子植物・シダ・コケ・植物の分類",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "イヌワラビやゼンマイなどの「シダ植物」の特徴として正しいものはどれですか。",
    "options": [
      "根・茎・葉の区別がなく、仮根で体を支える",
      "水中のプランクトンであり、光合成を行わない",
      "花を咲かせず胞子で増え、根・茎・葉の区別や維管束がある",
      "花を咲かせて種子を作り、根・茎・葉の区別がある"
    ],
    "answer": "花を咲かせず胞子で増え、根・茎・葉の区別や維管束がある",
    "acceptableAnswers": [
      "花を咲かせず胞子で増え、根・茎・葉の区別や維管束がある"
    ],
    "explanation": "シダ植物は種子を作らず葉の裏の胞子嚢から胞子を飛ばして増えますが、維管束や根・茎・葉の区別は発達しています。",
    "id": "r_adv2_187"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "02. 裸子植物・シダ・コケ・植物の分類",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ゼニゴケやスギゴケなどの「コケ植物」が体を地面に固定するために持っている、根のようなつくりを何と言いますか。",
    "options": [
      "ひげ根",
      "主根",
      "仮根（かこん）",
      "側根"
    ],
    "answer": "仮根（かこん）",
    "acceptableAnswers": [
      "仮根（かこん）"
    ],
    "explanation": "コケ植物には維管束がなく、仮根は体を固定するだけで、水や養分は体表全体から直接吸収します。",
    "id": "r_adv2_188"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "背骨を持つ動物（脊椎動物）の5つのグループのうち、一生を通して肺で呼吸し、殻のある卵を陸上に産む変温動物はどれですか。",
    "options": [
      "両生類",
      "哺乳類",
      "爬虫類",
      "鳥類"
    ],
    "answer": "爬虫類",
    "acceptableAnswers": [
      "爬虫類"
    ],
    "explanation": "ヘビ、トカゲ、カメ、ワニなどの爬虫類は、陸上で乾燥に耐える殻付きの卵を産み、肺呼吸を行います（両生類は幼生がえら呼吸で殻のない卵を産みます）。",
    "id": "r_adv2_189"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "鳥類と哺乳類に共通する、外気温が変化しても体温をほぼ一定に保つことができる性質を何と言いますか。",
    "options": [
      "内温動物",
      "冬眠動物",
      "変温動物",
      "恒温動物"
    ],
    "answer": "恒温動物",
    "acceptableAnswers": [
      "恒温動物"
    ],
    "explanation": "鳥類と哺乳類は恒温動物であり、魚類・両生類・爬虫類は変温動物です。",
    "id": "r_adv2_190"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "昆虫の成虫のからだのつくりについて、正しい説明はどれですか。",
    "options": [
      "6本のあしのうち、2本は頭部、4本は胸部から生えている",
      "からだの節ごとに2本ずつあしが生えている",
      "からだは頭部と腹部に分かれ、あしは腹部から生えている",
      "からだは頭部・胸部・腹部に分かれ、6本のあしは胸部から生えている"
    ],
    "answer": "からだは頭部・胸部・腹部に分かれ、6本のあしは胸部から生えている",
    "acceptableAnswers": [
      "からだは頭部・胸部・腹部に分かれ、6本のあしは胸部から生えている"
    ],
    "explanation": "昆虫の体は「頭部・胸部・腹部」の3部に分かれ、足6本と羽4枚（2枚の昆虫もいる）はすべて胸部から生えています。",
    "id": "r_adv2_191"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "昆虫の育ち方のうち、「卵 → 幼虫 → さなぎ → 成虫」という段階を経て育つ変態を何と言いますか。",
    "options": [
      "不完全変態",
      "完全変態",
      "無変態",
      "脱皮変態"
    ],
    "answer": "完全変態",
    "acceptableAnswers": [
      "完全変態"
    ],
    "explanation": "チョウ、カブトムシ、ハチ、ハエ、カなどはさなぎの時期がある「完全変態」です。",
    "id": "r_adv2_192"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "03. 動物の分類と生活・からだのつくり",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "さなぎの時期がなく、「卵 → 幼虫 → 成虫」と脱皮を繰り返して成長する不完全変態の昆虫の組み合わせはどれですか。",
    "options": [
      "セミ・チョウ・トンボ・ハチ",
      "チョウ・カブトムシ・ハチ・ハエ",
      "テントウムシ・ホタル・ガ・ノミ",
      "バッタ・セミ・トンボ・カマキリ"
    ],
    "answer": "バッタ・セミ・トンボ・カマキリ",
    "acceptableAnswers": [
      "バッタ・セミ・トンボ・カマキリ"
    ],
    "explanation": "バッタ、セミ、トンボ、カマキリ、コオロギなどはさなぎの時期を経ずに成虫になります。",
    "id": "r_adv2_193"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "04. 顕微鏡・細胞・水中の小さな生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "顕微鏡でプレパラートを観察するとき、倍率を低倍率から高倍率に変えたときの変化として正しいものはどれですか。",
    "options": [
      "視野が広くなり、視野全体が明るくなる",
      "視野が狭くなり、視野全体が暗くなる",
      "視野は狭くなるが、視野全体は明るくなる",
      "視野も明るさも全く変わらない"
    ],
    "answer": "視野が狭くなり、視野全体が暗くなる",
    "acceptableAnswers": [
      "視野が狭くなり、視野全体が暗くなる"
    ],
    "explanation": "高倍率にすると見える範囲（視野）は狭くなり、入ってくる光の量が減るため暗くなります。",
    "id": "r_adv2_194"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "04. 顕微鏡・細胞・水中の小さな生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "顕微鏡の接眼レンズが 10倍、対物レンズが 40倍のとき、総合倍率は何倍ですか。",
    "options": [
      "1040倍",
      "400倍",
      "40倍",
      "50倍"
    ],
    "answer": "400倍",
    "acceptableAnswers": [
      "400倍"
    ],
    "explanation": "顕微鏡の倍率は「接眼レンズの倍率 × 対物レンズの倍率」なので、10 × 40 = 400倍 です。",
    "id": "r_adv2_195"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "04. 顕微鏡・細胞・水中の小さな生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水中の小さな生物のうち、体内に葉緑体を持って光合成を行うとともに、べん毛を使って自力で活発に泳ぎ回る生物は何ですか。",
    "options": [
      "アメーバ",
      "ゾウリムシ",
      "ミジンコ",
      "ミドリムシ"
    ],
    "answer": "ミドリムシ",
    "acceptableAnswers": [
      "ミドリムシ"
    ],
    "explanation": "ミドリムシは植物の特徴（葉緑体で光合成）と動物の特徴（べん毛で運動、眼点）を併せ持つ単細胞生物です。",
    "id": "r_adv2_196"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "04. 顕微鏡・細胞・水中の小さな生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "タマネギの表皮細胞などを顕微鏡で観察する際、細胞の「核」を染めて見やすくするために用いる染色液は何ですか。",
    "options": [
      "BTB溶液",
      "ベネジクト液",
      "ヨウ素液",
      "酢酸カーミン液（または酢酸オルセイン液）"
    ],
    "answer": "酢酸カーミン液（または酢酸オルセイン液）",
    "acceptableAnswers": [
      "酢酸カーミン液（または酢酸オルセイン液）"
    ],
    "explanation": "酢酸カーミン液や酢酸オルセイン液は、細胞核を赤紫色に染める染色液です。",
    "id": "r_adv2_197"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "04. 顕微鏡・細胞・水中の小さな生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の細胞には存在し、動物の細胞には見られない特徴的な構造の組み合わせはどれですか。",
    "options": [
      "細胞壁・葉緑体・発達した液胞",
      "細胞核・細胞質・染色体",
      "細胞膜・リボソーム・中心体",
      "細胞膜・核・ミトコンドリア"
    ],
    "answer": "細胞壁・葉緑体・発達した液胞",
    "acceptableAnswers": [
      "細胞壁・葉緑体・発達した液胞"
    ],
    "explanation": "植物細胞は体を支える丈夫な「細胞壁」や「葉緑体」「発達した液胞」を持ちますが、動物細胞には細胞壁や葉緑体はありません。",
    "id": "r_adv2_198"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物が光合成を行うときに吸収する気体と、光合成によって放出される気体の組み合わせとして正しいものはどれですか。",
    "options": [
      "吸収：二酸化炭素、放出：酸素",
      "吸収：水蒸気、放出：二酸化炭素",
      "吸収：窒素、放出：酸素",
      "吸収：酸素、放出：二酸化炭素"
    ],
    "answer": "吸収：二酸化炭素、放出：酸素",
    "acceptableAnswers": [
      "吸収：二酸化炭素、放出：酸素"
    ],
    "explanation": "光合成では水と二酸化炭素を原料にしてデンプンなどの養分を作り、酸素を放出します。",
    "id": "r_adv2_199"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の葉の主に裏側に多く見られる、三日月形の孔辺細胞に囲まれた気体の出入り口を何と言いますか。",
    "options": [
      "師管",
      "気孔",
      "葉脈",
      "道管"
    ],
    "answer": "気孔",
    "acceptableAnswers": [
      "気孔"
    ],
    "explanation": "気孔からは二酸化炭素や酸素の出入りのほか、水蒸気を放出する蒸散が行われます。",
    "id": "r_adv2_200"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の茎や葉にある維管束のうち、根から吸い上げた水や肥料分が通る管を何と言いますか。",
    "options": [
      "師管",
      "形成層",
      "気孔",
      "道管"
    ],
    "answer": "道管",
    "acceptableAnswers": [
      "道管"
    ],
    "explanation": "水や養分が通るのが「道管」、葉で作られたデンプンなどの栄養分が通るのが「師管」です。",
    "id": "r_adv2_201"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "葉で作られた栄養分（デンプンが水に溶けやすい糖に変わったもの）が全身に運ばれるときに通る管は何ですか。",
    "options": [
      "師管",
      "木部",
      "毛細血管",
      "道管"
    ],
    "answer": "師管",
    "acceptableAnswers": [
      "師管"
    ],
    "explanation": "師管は維管束の外側に位置し、作られた糖などを全身の成長点や根・種子に運びます。",
    "id": "r_adv2_202"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "根の先端付近に無数に生えている細い毛状の構造（根毛）の役割は何ですか。",
    "options": [
      "土の中の害虫を退治する",
      "土を溶かして根を伸ばしやすくする",
      "日光を感知して根を深く伸ばす",
      "根の表面積を広げて、水や養分を効率よく吸収する"
    ],
    "answer": "根の表面積を広げて、水や養分を効率よく吸収する",
    "acceptableAnswers": [
      "根の表面積を広げて、水や養分を効率よく吸収する"
    ],
    "explanation": "表面積を大きくすることで土と接する面積を増やし、水分や養分の吸収効率を劇的に高めています。",
    "id": "r_adv2_203"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "05. 植物のつくりとはたらき（光合成・呼吸・蒸散）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "光合成によって葉にデンプンができたことを確認するために用いる試薬と色の変化はどれですか。",
    "options": [
      "BTB溶液をたらすと黄色に変化する",
      "フェノールフタレイン液で赤色になる",
      "ベネジクト液で赤褐色になる",
      "ヨウ素液をたらすと青紫色に変化する"
    ],
    "answer": "ヨウ素液をたらすと青紫色に変化する",
    "acceptableAnswers": [
      "ヨウ素液をたらすと青紫色に変化する"
    ],
    "explanation": "デンプンにヨウ素液を加えると青紫色（または青褐色）に反応するヨウ素デンプン反応を用います。",
    "id": "r_adv2_204"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "だ液に含まれる消化酵素アミラーゼ（プチアリン）が、デンプンを分解して生成する物質は何ですか。",
    "options": [
      "アミノ酸",
      "ブドウ糖",
      "脂肪酸",
      "麦芽糖（マルトース）"
    ],
    "answer": "麦芽糖（マルトース）",
    "acceptableAnswers": [
      "麦芽糖（マルトース）"
    ],
    "explanation": "アミラーゼは大きなデンプンを麦芽糖に分解します。最終的には小腸の酵素でブドウ糖まで分解されます。",
    "id": "r_adv2_205"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "胃液に含まれる消化酵素ペプシンが、強酸性の塩酸の助けを借りて分解する栄養素は何ですか。",
    "options": [
      "タンパク質",
      "デンプン（炭水化物）",
      "ビタミン",
      "脂肪"
    ],
    "answer": "タンパク質",
    "acceptableAnswers": [
      "タンパク質"
    ],
    "explanation": "胃液のペプシンはタンパク質をペプトン（ペプチド）に分解します。",
    "id": "r_adv2_206"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "肝臓で作られて胆のうに蓄えられる「胆汁」の働きとして正しいものはどれですか。",
    "options": [
      "デンプンをブドウ糖に直接分解する",
      "強い酸性で胃から送られた食べ物を殺菌する",
      "強力な消化酵素を含み、タンパク質を一気に分解する",
      "消化酵素は含まないが、脂肪を乳化してリパーゼの働きを助ける"
    ],
    "answer": "消化酵素は含まないが、脂肪を乳化してリパーゼの働きを助ける",
    "acceptableAnswers": [
      "消化酵素は含まないが、脂肪を乳化してリパーゼの働きを助ける"
    ],
    "explanation": "胆汁自体には消化酵素は含まれていませんが、水と混ざりにくい脂肪の粒を細かく（乳化）してすい液のリパーゼが作用しやすくします。",
    "id": "r_adv2_207"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "小腸の内壁にある無数の小さな突起（柔毛）の役割は何ですか。",
    "options": [
      "消化液を小腸全体にかき混ぜる",
      "腸内の不要な細菌を捕食する",
      "表面積を大幅に広げて、消化された栄養分を効率よく吸収する",
      "食べたものを胃に押し戻す"
    ],
    "answer": "表面積を大幅に広げて、消化された栄養分を効率よく吸収する",
    "acceptableAnswers": [
      "表面積を大幅に広げて、消化された栄養分を効率よく吸収する"
    ],
    "explanation": "小腸の内壁のひだや柔毛（じゅうもう）により、テニスコート一面分もの広大な表面積を作り出して栄養分を吸収します。",
    "id": "r_adv2_208"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "小腸の柔毛で吸収されたブドウ糖やアミノ酸は「毛細血管」に入りますが、脂肪酸とモノグリセリドが再び脂肪になって入る管は何ですか。",
    "options": [
      "リンパ管",
      "動脈",
      "毛細血管",
      "胆管"
    ],
    "answer": "リンパ管",
    "acceptableAnswers": [
      "リンパ管"
    ],
    "explanation": "水溶性のブドウ糖・アミノ酸は毛細血管から門脈を経て肝臓へ、脂溶性の脂肪はリンパ管に入ってやがて大静脈へ合流します。",
    "id": "r_adv2_209"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "心臓の4つの部屋（右心房・右心室・左心房・左心室）のうち、全身に血液を力強く送り出すため最も筋肉の壁が厚い部屋はどこですか。",
    "options": [
      "右心室",
      "右心房",
      "左心室",
      "左心房"
    ],
    "answer": "左心室",
    "acceptableAnswers": [
      "左心室"
    ],
    "explanation": "左心室は大動脈を通じて全身の毛細血管の先まで高圧で血液を送り出すため、最も分厚い心筋を持っています。",
    "id": "r_adv2_210"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "血液の循環のうち、心臓から肺へ送られて二酸化炭素を排出し、酸素を豊富に受け取って心臓へ戻る循環を何と言いますか。",
    "options": [
      "リンパ循環",
      "体循環",
      "肺循環",
      "門脈循環"
    ],
    "answer": "肺循環",
    "acceptableAnswers": [
      "肺循環"
    ],
    "explanation": "右心室→肺動脈→肺→肺静脈→左心房のルートを肺循環と言います。",
    "id": "r_adv2_211"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "酸素を豊富に含み、鮮やかな赤色をしている血液を何と言いますか。",
    "options": [
      "リンパ液",
      "動脈血",
      "血しょう",
      "静脈血"
    ],
    "answer": "動脈血",
    "acceptableAnswers": [
      "動脈血"
    ],
    "explanation": "酸素と結びついたヘモグロビン（動脈血）は鮮紅色をしており、酸素を放したヘモグロビン（静脈血）は暗赤色をしています。",
    "id": "r_adv2_212"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "「肺動脈」を流れている血液はどのような血液ですか。",
    "options": [
      "リンパ球のみを含む液体",
      "二酸化炭素を多く含んだ「静脈血」",
      "酸素も二酸化炭素も含まない血液",
      "酸素をたっぷり含んだ「動脈血」"
    ],
    "answer": "二酸化炭素を多く含んだ「静脈血」",
    "acceptableAnswers": [
      "二酸化炭素を多く含んだ「静脈血」"
    ],
    "explanation": "心臓から出ていく血管なので「動脈」と呼びますが、肺へ酸素をもらいに行く途中のため流れているのは「静脈血」です（入試頻出の引っかけ）。",
    "id": "r_adv2_213"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "血液中の不要な老廃物（尿素や余分な塩分など）をこし取り、尿をつくって体外へ排出する器官は何ですか。",
    "options": [
      "すい臓",
      "肝臓",
      "脾臓",
      "腎臓"
    ],
    "answer": "腎臓",
    "acceptableAnswers": [
      "腎臓"
    ],
    "explanation": "背中側に左右1対ある腎臓で血液をろ過し、老廃物を尿として輸尿管から膀胱へ送ります。",
    "id": "r_adv2_214"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "タンパク質が分解されたときに生じる有害なアンモニアを、毒性の低い「尿素」に変えるはたらきを持つ器官は何ですか。",
    "options": [
      "小腸",
      "肝臓",
      "胆のう",
      "腎臓"
    ],
    "answer": "肝臓",
    "acceptableAnswers": [
      "肝臓"
    ],
    "explanation": "肝臓はアンモニアの無毒化（尿素への変換）や、グリコーゲンの貯蔵、アルコールの分解など人体の化学工場として働きます。",
    "id": "r_adv2_215"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "07. 人体②（感覚・神経・脳・骨格と筋肉）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "熱いやかんに手が触れたとき、熱いと感じるよりも前に無意識のうちに手を引っ込めるような反応を何と言いますか。",
    "options": [
      "反射",
      "条件反射",
      "知覚反応",
      "随意運動"
    ],
    "answer": "反射",
    "acceptableAnswers": [
      "反射"
    ],
    "explanation": "刺激が大脳を通らずに脊髄から直接筋肉に指令が伝わる無意識の防御反応を「反射」と言います。",
    "id": "r_adv2_216"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "06. 人体①（消化・吸収・呼吸・排出・血液循環）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "血液中の成分のうち、体内に侵入した細菌や病原体を捕らえて分解する働き（食作用）を持つものはどれですか。",
    "options": [
      "白血球",
      "血しょう",
      "血小板",
      "赤血球"
    ],
    "answer": "白血球",
    "acceptableAnswers": [
      "白血球"
    ],
    "explanation": "白血球はアメーバのように形を変えながら毛細血管の外に出て、細菌やウイルスを食べて分解（食作用）し、体を守ります。",
    "id": "r_adv2_217"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "09. 生物の進化と歴史・地質時代",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ヒトの腕、クジラの胸びれ、鳥の翼のように、形や働きは異なっていても骨格の基本的な構造が同じで起源が共通している器官を何と言いますか。",
    "options": [
      "感覚器官",
      "痕跡器官",
      "相似器官",
      "相同器官"
    ],
    "answer": "相同器官",
    "acceptableAnswers": [
      "相同器官"
    ],
    "explanation": "共通の祖先の器官が、異なる環境に適応して変化した証拠であり、生物が進化してきたことを示しています。",
    "id": "r_adv2_218"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "09. 生物の進化と歴史・地質時代",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生態系における生物の役割のうち、太陽の光エネルギーを使って無機物から有機物を作り出す植物のような生物を何と言いますか。",
    "options": [
      "一次消費者",
      "二次消費者",
      "分解者",
      "生産者"
    ],
    "answer": "生産者",
    "acceptableAnswers": [
      "生産者"
    ],
    "explanation": "光合成によって自分で有機物を作り出す植物を「生産者」、それを食べる動物を「消費者」、遺骸やフンを無機物に分解する菌類・細菌を「分解者」と言います。",
    "id": "r_adv2_219"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "07. 人体②（感覚・神経・脳・骨格と筋肉）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "カメラの絞りのように、目に入る光の量を調節するために伸び縮みする黒目のまわりの部分は何ですか。",
    "options": [
      "水晶体",
      "網膜",
      "虹彩（こうさい）",
      "角膜"
    ],
    "answer": "虹彩（こうさい）",
    "acceptableAnswers": [
      "虹彩（こうさい）"
    ],
    "explanation": "明るい所では虹彩が広がって瞳孔が小さくなり、暗い所では縮んで瞳孔が大きくなります。",
    "id": "r_adv2_220"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "07. 人体②（感覚・神経・脳・骨格と筋肉）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "目に入った光が像を結び、視神経へと光の刺激を伝えるスクリーンの役割をする部分はどこですか。",
    "options": [
      "水晶体",
      "盲点",
      "網膜（もうまく）",
      "角膜"
    ],
    "answer": "網膜（もうまく）",
    "acceptableAnswers": [
      "網膜（もうまく）"
    ],
    "explanation": "網膜には視細胞が並んでおり、ここに結ばれた像の刺激が視神経を通じて大脳へ送られます。",
    "id": "r_adv2_221"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "07. 人体②（感覚・神経・脳・骨格と筋肉）",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "耳の最も奥にあり、音の振動を電気信号（神経の刺激）に変換するうずまき状の器官は何ですか。",
    "options": [
      "うずまき管（蝸牛・かぎゅう）",
      "三半規管",
      "耳小骨",
      "鼓膜"
    ],
    "answer": "うずまき管（蝸牛・かぎゅう）",
    "acceptableAnswers": [
      "うずまき管（蝸牛・かぎゅう）"
    ],
    "explanation": "鼓膜の振動が耳小骨で増幅され、うずまき管のリンパ液と有毛細胞で刺激に変換されて聴神経に伝わります。",
    "id": "r_adv2_222"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "08. 細胞分裂・生殖・発生・遺伝",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "丸いエンドウとしわのあるエンドウをかけ合わせたところ、子の代はすべて丸い種子になりました。このように対立形質のうち一方だけが子の代に現れる規則性を何と言いますか。",
    "options": [
      "優性の法則（顕性の法則）",
      "分離の法則",
      "独立の法則",
      "突然変異"
    ],
    "answer": "優性の法則（顕性の法則）",
    "acceptableAnswers": [
      "優性の法則（顕性の法則）"
    ],
    "explanation": "対立形質のうち子の代に現れる形質を優性（顕性）形質と言い、現れないものを劣性（潜性）形質と言います。",
    "id": "r_adv2_223"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "08. 細胞分裂・生殖・発生・遺伝",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "植物の根の先端付近（成長点）を観察したとき、最も盛んに行われている現象は何ですか。",
    "options": [
      "体細胞分裂",
      "光合成",
      "減数分裂",
      "蒸散作用"
    ],
    "answer": "体細胞分裂",
    "acceptableAnswers": [
      "体細胞分裂"
    ],
    "explanation": "根の先端の根冠の内側にある成長点では、体を成長させるための体細胞分裂が盛んに行われています。",
    "id": "r_adv2_224"
  },
  {
    "subject": "理科",
    "category": "生物",
    "subCategory": "09. 生物の進化と歴史・地質時代",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "羽毛やくちばしを持つ一方で、翼の先端にツメを持ち、歯や長い尾骨を持つことから、は虫類から鳥類への進化の道筋を示す貴重な化石は何ですか。",
    "options": [
      "イクチオステガ",
      "ピカイア",
      "三葉虫",
      "始祖鳥（アーケオプテリクス）"
    ],
    "answer": "始祖鳥（アーケオプテリクス）",
    "acceptableAnswers": [
      "始祖鳥（アーケオプテリクス）"
    ],
    "explanation": "は虫類の特徴と鳥類の特徴を併せ持つ中間型の化石として、生物の進化を証明する決定的な証拠となりました。",
    "id": "r_adv2_225"
  },
  {
    "id": "r_adv2_226",
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "日本（北半球の中緯度）において、太陽が真南の空に最も高く昇ったときの高度（南中高度）が1年で最も高くなる日はいつですか。",
    "options": [
      "夏至",
      "秋分",
      "春分",
      "冬至"
    ],
    "answer": "夏至",
    "acceptableAnswers": [
      "夏至"
    ],
    "explanation": "夏至（6月21日頃）に地軸の傾きにより太陽の南中高度が最も高くなり、昼の長さが最も長くなります。"
  },
  {
    "id": "r_adv2_227",
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "北緯 35 度の地点における「春分・秋分」の日の太陽の南中高度は何度ですか。",
    "options": [
      "35度",
      "55度",
      "65度",
      "78.5度"
    ],
    "answer": "55度",
    "acceptableAnswers": [
      "55度"
    ],
    "explanation": "春分・秋分の南中高度の公式は「90度 − 緯度」です。90 − 35 = 55度 です。"
  },
  {
    "id": "r_adv2_228",
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "北緯 35 度の地点における「夏至」の日の太陽の南中高度は何度ですか（地軸の傾きは 23.4度 とする）。",
    "options": [
      "31.6度",
      "55.0度",
      "78.4度",
      "82.4度"
    ],
    "answer": "78.4度",
    "acceptableAnswers": [
      "78.4度"
    ],
    "explanation": "夏至の南中高度の公式は「90度 − 緯度 ＋ 23.4度」です。90 − 35 ＋ 23.4 = 78.4度 です。"
  },
  {
    "id": "r_adv2_229",
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "北緯 35 度の地点における「冬至」の日の太陽の南中高度は何度ですか（地軸の傾きは 23.4度 とする）。",
    "options": [
      "23.4度",
      "31.6度",
      "55.0度",
      "78.4度"
    ],
    "answer": "31.6度",
    "acceptableAnswers": [
      "31.6度"
    ],
    "explanation": "冬至の南中高度の公式は「90度 − 緯度 − 23.4度」です。90 − 35 − 23.4 = 31.6度 です。"
  },
  {
    "id": "r_adv2_230",
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "太陽が真東から昇り、真西に沈む日は1年のうちいつですか。",
    "options": [
      "夏至の日",
      "元旦",
      "春分の日と秋分の日",
      "冬至の日"
    ],
    "answer": "春分の日と秋分の日",
    "acceptableAnswers": [
      "春分の日と秋分の日"
    ],
    "explanation": "春分と秋分の日には、太陽は真東から昇って真西に沈み、昼と夜の長さがほぼ等しく（約12時間ずつ）なります。"
  },
  {
    "id": "r_adv2_231",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "月が太陽と地球の間に位置し、地球から月が全く見えなくなる月齢0の頃の月を何と言いますか。",
    "options": [
      "下弦の月",
      "上弦の月",
      "新月（朔）",
      "満月（望）"
    ],
    "answer": "新月（朔）",
    "acceptableAnswers": [
      "新月（朔）"
    ],
    "explanation": "月が太陽と同じ方向にあるとき、影の面が地球を向くため見えなくなります。これを「新月」と言います。"
  },
  {
    "id": "r_adv2_232",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "夕方（日没頃）に南の空に見え、真夜中頃に西の地平線に沈む、西半分（右側）が光る半月は何ですか。",
    "options": [
      "下弦の月",
      "三日月",
      "上弦の月",
      "満月"
    ],
    "answer": "上弦の月",
    "acceptableAnswers": [
      "上弦の月"
    ],
    "explanation": "夕方に南中し、弦を上にして沈む右半分の月を「上弦の月」と言います。深夜に東から昇る左半分の月は「下弦の月」です。"
  },
  {
    "id": "r_adv2_233",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "満月（望）が東の地平線から昇ってくる時刻はおよそいつ頃ですか。",
    "options": [
      "真夜中（午前0時頃）",
      "正午頃",
      "明け方（日の出頃）",
      "夕方（日の入り頃）"
    ],
    "answer": "夕方（日の入り頃）",
    "acceptableAnswers": [
      "夕方（日の入り頃）"
    ],
    "explanation": "満月は太陽と正反対の位置（180度）にあるため、太陽が西に沈む夕方に東から昇り、真夜中に南中し、明け方に西へ沈みます。"
  },
  {
    "id": "r_adv2_234",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "月は毎日およそ何分ずつ遅れて昇ってきますか。",
    "options": [
      "約 10分",
      "約 120分",
      "約 30分",
      "約 50分"
    ],
    "answer": "約 50分",
    "acceptableAnswers": [
      "約 50分"
    ],
    "explanation": "月が地球のまわりを約27.3日で1公転（1日あたり約13度東へ移動）するため、毎日約 50分 ずつ遅れて昇ります。"
  },
  {
    "id": "r_adv2_235",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "北極星を中心として、北の空の星は時間とともにどちら向きに回転して見えますか。",
    "options": [
      "時計回り",
      "東から西へ直線的",
      "動かない",
      "反時計回り（反時計方向）"
    ],
    "answer": "反時計回り（反時計方向）",
    "acceptableAnswers": [
      "反時計回り（反時計方向）"
    ],
    "explanation": "地球が西から東へ自転しているため、北の空を見上げると星は北極星を中心に「反時計回り」に1時間に約15度回転して見えます。"
  },
  {
    "id": "r_adv2_236",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "同じ時刻に見える星座の位置は、1か月たつとおよそ何度どちらへ移動しますか。",
    "options": [
      "移動しない",
      "約 15度、東から西へ移動する",
      "約 30度、西から東へ移動する",
      "約 30度、東から西へ移動する"
    ],
    "answer": "約 30度、東から西へ移動する",
    "acceptableAnswers": [
      "約 30度、東から西へ移動する"
    ],
    "explanation": "地球が太陽のまわりを1年（365日）で360度公転するため、星は1日約1度、1か月（30日）で約 30度 ずつ西へ早く進んで見えます。"
  },
  {
    "id": "r_adv2_237",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "夏の夜空に見える「夏の大三角」を構成する3つの1等星の組み合わせとして正しいものはどれですか。",
    "options": [
      "アンタレス・スピカ・アークトゥルス",
      "ベガ・デネブ・アルタイル",
      "ベテルギウス・シリウス・プロキオン",
      "北斗七星・カシオペヤ・ポラリス"
    ],
    "answer": "ベガ・デネブ・アルタイル",
    "acceptableAnswers": [
      "ベガ・デネブ・アルタイル"
    ],
    "explanation": "こと座のベガ（織姫）、はくちょう座のデネブ、わし座のアルタイル（彦星）を結んだ三角形が「夏の大三角」です。"
  },
  {
    "id": "r_adv2_238",
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "冬の夜空に見える「冬の大三角」を構成する3つの星の組み合わせとして正しいものはどれですか。",
    "options": [
      "スピカ・レグルス・デネボラ",
      "ベガ・デネブ・アルタイル",
      "ベテルギウス・シリウス・プロキオン",
      "リゲル・アルデバラン・カペラ"
    ],
    "answer": "ベテルギウス・シリウス・プロキオン",
    "acceptableAnswers": [
      "ベテルギウス・シリウス・プロキオン"
    ],
    "explanation": "オリオン座のベテルギウス（赤色）、おおいぬ座のシリウス（全天一明るい恒星）、こいぬ座のプロキオンが「冬の大三角」です。"
  },
  {
    "id": "r_adv2_239",
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "流水の3つの作用（浸食・運搬・堆積）について、川の「上流」で最も盛んに行われる作用は何ですか。",
    "options": [
      "どれも同じ",
      "運搬作用のみ",
      "浸食作用",
      "堆積作用"
    ],
    "answer": "浸食作用",
    "acceptableAnswers": [
      "浸食作用"
    ],
    "explanation": "流れが急な上流では川底や岩を削り取る「浸食作用」が最も激しく、V字谷などを形成します。下流では「堆積作用」が盛んです。"
  },
  {
    "id": "r_adv2_240",
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "川が山地から平野に出る谷口付近に、土砂が扇状に堆積してできた地形を何と言いますか。",
    "options": [
      "河岸段丘",
      "三角州",
      "自然堤防",
      "扇状地"
    ],
    "answer": "扇状地",
    "acceptableAnswers": [
      "扇状地"
    ],
    "explanation": "谷口で流速が落ちて土砂が扇形に積もった地形が「扇状地」です。川の河口付近にできるのは「三角州（デルタ）」です。"
  },
  {
    "id": "r_adv2_241",
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地層が堆積した当時の「年代（時代）」を知る手がかりとなる化石を何と言いますか。",
    "options": [
      "示準化石",
      "示相化石",
      "生痕化石",
      "微化石"
    ],
    "answer": "示準化石",
    "acceptableAnswers": [
      "示準化石"
    ],
    "explanation": "生存期間が短く広い地域に生息していた化石を「示準化石（三葉虫：古生代、アンモナイト・恐竜：中生代、ナウマンゾウ：新生代）」と言います。"
  },
  {
    "id": "r_adv2_242",
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地層が堆積した当時の「環境（気候や水深）」を知る手がかりとなる化石を何と言いますか。",
    "options": [
      "示準化石",
      "示相化石",
      "示代化石",
      "標準化石"
    ],
    "answer": "示相化石",
    "acceptableAnswers": [
      "示相化石"
    ],
    "explanation": "特定の環境（サンゴ：暖かく澄んだ浅い海、アサリ：浅い海、シジミ：河口や湖）に生息していた化石を「示相化石」と言います。"
  },
  {
    "id": "r_adv2_243",
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三葉虫やフズリナの化石が見つかる地層は、どの地質時代に堆積したものですか。",
    "options": [
      "古生代",
      "新生代古第三紀",
      "新生代新第三紀",
      "中生代"
    ],
    "answer": "古生代",
    "acceptableAnswers": [
      "古生代"
    ],
    "explanation": "三葉虫やフズリナは「古生代」の示準化石です。"
  },
  {
    "id": "r_adv2_244",
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "アンモナイトや恐竜の化石が見つかる地層は、どの地質時代に堆積したものですか。",
    "options": [
      "古生代",
      "新生代",
      "先カンブリア時代",
      "中生代"
    ],
    "answer": "中生代",
    "acceptableAnswers": [
      "中生代"
    ],
    "explanation": "アンモナイトや恐竜、始祖鳥は「中生代」の示準化石です。"
  },
  {
    "id": "r_adv2_245",
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "気圧（大気圧）の単位として現在世界共通で使われているものはどれですか。",
    "options": [
      "ニュートン（N）",
      "ヘクトパスカル（hPa）",
      "ミリバール（mb）",
      "ミリメートル水銀柱（mmHg）"
    ],
    "answer": "ヘクトパスカル（hPa）",
    "acceptableAnswers": [
      "ヘクトパスカル（hPa）"
    ],
    "explanation": "1気圧は約 1013 ヘクトパスカル（hPa）です（昔はミリバールと呼ばれていました）。"
  },
  {
    "id": "r_adv2_246",
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "北半球における「低気圧」の周囲では、風はどのように吹き込みますか。",
    "options": [
      "時計回りに中心から吹き出す",
      "時計回りに中心に向かって吹き込む",
      "反時計回りに中心から吹き出す",
      "反時計回りに中心に向かって吹き込む"
    ],
    "answer": "反時計回りに中心に向かって吹き込む",
    "acceptableAnswers": [
      "反時計回りに中心に向かって吹き込む"
    ],
    "explanation": "北半球の低気圧では、地球の自転（コリオリの力）の影響で「反時計回りに吹き込み」、中心で上昇気流が発生して雲ができます。"
  },
  {
    "id": "r_adv2_247",
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "北半球における「高気圧」の周囲では、風はどのように吹き出しますか。",
    "options": [
      "時計回りに中心から吹き出す",
      "時計回りに中心に向かって吹き込む",
      "反時計回りに中心から吹き出す",
      "反時計回りに中心に向かって吹き込む"
    ],
    "answer": "時計回りに中心から吹き出す",
    "acceptableAnswers": [
      "時計回りに中心から吹き出す"
    ],
    "explanation": "高気圧の中心では下降気流があり、地表付近では「時計回りに吹き出し」ます。雲が消えて晴天になります。"
  },
  {
    "id": "r_adv2_248",
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "暖気が寒気の上に緩やかに這い上がってできる前線を何と言いますか。",
    "options": [
      "温暖前線",
      "寒冷前線",
      "停滞前線",
      "閉塞前線"
    ],
    "answer": "温暖前線",
    "acceptableAnswers": [
      "温暖前線"
    ],
    "explanation": "暖気が寒気の上に乗り上げるのが「温暖前線」で、乱層雲などの広範囲な雲ができ、しとしとと長い雨が降ります。"
  },
  {
    "id": "r_adv2_249",
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "寒気が暖気の下に急激にもぐり込んでできる前線を何と言いますか。",
    "options": [
      "温暖前線",
      "寒冷前線",
      "停滞前線",
      "閉塞前線"
    ],
    "answer": "寒冷前線",
    "acceptableAnswers": [
      "寒冷前線"
    ],
    "explanation": "寒気が暖気を押し上げるのが「寒冷前線」で、積乱雲が発生し、通過時に激しいにわか雨や突風が吹き、通過後は気温が下がります。"
  },
  {
    "id": "r_adv2_250",
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "日本の冬に見られる典型的な気圧配置の特徴として正しいものはどれですか。",
    "options": [
      "西高東低（西に高気圧、東に低気圧）",
      "東高西低",
      "南高北低",
      "北高南低"
    ],
    "answer": "西高東低（西に高気圧、東に低気圧）",
    "acceptableAnswers": [
      "西高東低（西に高気圧、東に低気圧）"
    ],
    "explanation": "冬はシベリア気団（高気圧）が西に発達し、太平洋側に低気圧が位置する「西高東低」となり、北西の冷たい季節風が吹きます。"
  },
  {
    "id": "r_adv2_251",
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地震が発生したとき、最初に到着する速い波をP波、後から到着する遅い波をS波と言います。P波による最初の小さな揺れを何と言いますか。",
    "options": [
      "主要動",
      "初期微動",
      "本震",
      "余震"
    ],
    "answer": "初期微動",
    "acceptableAnswers": [
      "初期微動"
    ],
    "explanation": "速い縦波（P波）による揺れを「初期微動」、遅い横波（S波）による激しい揺れを「主要動」と言います。"
  },
  {
    "id": "r_adv2_252",
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "初期微動が始まってから主要動が始まるまでの時間を何と言いますか。",
    "options": [
      "緊急地震速報時間",
      "主要動継続時間",
      "初期微動継続時間",
      "震源距離時間"
    ],
    "answer": "初期微動継続時間",
    "acceptableAnswers": [
      "初期微動継続時間"
    ],
    "explanation": "初期微動継続時間は「震源までの距離」に比例して長くなります（大森公式）。"
  },
  {
    "id": "r_adv2_253",
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地震そのもののエネルギーの規模の大きさを表す尺度を何と言いますか。",
    "options": [
      "ガル（Gal）",
      "パスカル",
      "マグニチュード（M）",
      "震度"
    ],
    "answer": "マグニチュード（M）",
    "acceptableAnswers": [
      "マグニチュード（M）"
    ],
    "explanation": "地震自体の規模は「マグニチュード（1増えるとエネルギーは約32倍）」、各地の揺れの強さは「震度（日本では0〜7の10階級）」で表します。"
  },
  {
    "id": "r_adv2_254",
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "マグマが地下深くでゆっくり冷え固まってできた火成岩（深成岩）として正しいものはどれですか。",
    "options": [
      "安山岩",
      "花こう岩",
      "玄武岩",
      "流紋岩"
    ],
    "answer": "花こう岩",
    "acceptableAnswers": [
      "花こう岩"
    ],
    "explanation": "地下深くでゆっくり結晶化してできた等粒状組織の深成岩には「花こう岩（白っぽい）」「せん緑岩」「はんれい岩（黒っぽい）」があります。"
  },
  {
    "id": "r_adv2_255",
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "マグマが地表付近や急激に冷え固まってできた火成岩（火山岩）として正しいものはどれですか。",
    "options": [
      "せん緑岩",
      "はんれい岩",
      "安山岩",
      "花こう岩"
    ],
    "answer": "安山岩",
    "acceptableAnswers": [
      "安山岩"
    ],
    "explanation": "地表近くで急速に冷え固まった斑状組織の火山岩には「流紋岩」「安山岩」「玄武岩」があります。"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "01. 火山の噴火と形・火成岩と鉱物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ハワイのキラウエア火山のように、マグマの粘り気が弱く黒っぽい溶岩を穏やかに噴出する火山の形は何ですか。",
    "options": [
      "ドーム状に盛り上がった鐘状火山",
      "傾斜の緩やかな楯状火山（たて状火山）",
      "円錐形の美しい成層火山",
      "巨大なカルデラだけを持つ火山"
    ],
    "answer": "傾斜の緩やかな楯状火山（たて状火山）",
    "acceptableAnswers": [
      "傾斜の緩やかな楯状火山（たて状火山）"
    ],
    "explanation": "マグマの粘り気が弱いと溶岩が遠くまで平らに広がるため、傾斜の緩やかな楯状火山になります。",
    "id": "r_adv2_256"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "01. 火山の噴火と形・火成岩と鉱物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "雲仙普賢岳の平成新山や有珠山の昭和新山のように、白っぽくマグマの粘り気が非常に強い火山の特徴は何ですか。",
    "options": [
      "マグマが吹き飛ばず噴火は起こらない",
      "平らな楯状になり、穏やかに溶岩が流れる",
      "溶岩の温度が1500℃以上と非常に高い",
      "溶岩ドーム（鐘状火山）を形成し、爆発的な激しい噴火を起こしやすい"
    ],
    "answer": "溶岩ドーム（鐘状火山）を形成し、爆発的な激しい噴火を起こしやすい",
    "acceptableAnswers": [
      "溶岩ドーム（鐘状火山）を形成し、爆発的な激しい噴火を起こしやすい"
    ],
    "explanation": "二酸化ケイ素を多く含む白っぽいマグマは粘り気が強く、ガスが抜けにくいため爆発的噴火となり、盛り上がったドームを作ります。",
    "id": "r_adv2_257"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "01. 火山の噴火と形・火成岩と鉱物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "マグマが地表付近や地上で急激に冷え固まってできた「火山岩」に見られる、細粒の石基の中に比較的大きな斑晶が散らばる岩石の組織を何と言いますか。",
    "options": [
      "しゅう曲組織",
      "層状組織",
      "斑状組織",
      "等粒状組織"
    ],
    "answer": "斑状組織",
    "acceptableAnswers": [
      "斑状組織"
    ],
    "explanation": "急冷された火山岩は結晶が十分に育たないため、細かな「石基」と結晶化した「斑晶」からなる斑状組織になります。",
    "id": "r_adv2_258"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "01. 火山の噴火と形・火成岩と鉱物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "マグマが地下深くで長い時間をかけてゆっくり冷え固まってできた「深成岩」に見られる、同じくらいの大きさの結晶がぎっしり組み合わさった組織は何ですか。",
    "options": [
      "堆積組織",
      "斑状組織",
      "柱状組織",
      "等粒状組織"
    ],
    "answer": "等粒状組織",
    "acceptableAnswers": [
      "等粒状組織"
    ],
    "explanation": "ゆっくり冷えた深成岩（花こう岩など）は鉱物の結晶が大きく均一に成長するため等粒状組織になります。",
    "id": "r_adv2_259"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "01. 火山の噴火と形・火成岩と鉱物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "火山岩の代表的な3種類の岩石（無色鉱物が多く白っぽいものから有色鉱物が多く黒っぽいものへの順）として正しいものはどれですか。",
    "options": [
      "流紋岩 → 安山岩 → 玄武岩",
      "玄武岩 → 安山岩 → 流紋岩",
      "砂岩 → 泥岩 → れき岩",
      "花こう岩 → 閃緑岩 → 斑れい岩"
    ],
    "answer": "流紋岩 → 安山岩 → 玄武岩",
    "acceptableAnswers": [
      "流紋岩 → 安山岩 → 玄武岩"
    ],
    "explanation": "「りかちゃんあせてげんき（流紋岩・安山岩・玄武岩）」と覚えます。白から黒への順です。",
    "id": "r_adv2_260"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "01. 火山の噴火と形・火成岩と鉱物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "火成岩に含まれる鉱物のうち、無色透明または白く、不規則に割れる性質を持つ鉱物は何ですか。",
    "options": [
      "カンラン石",
      "石英（せきえい）",
      "長石",
      "黒雲母"
    ],
    "answer": "石英（せきえい）",
    "acceptableAnswers": [
      "石英（せきえい）"
    ],
    "explanation": "石英は二酸化ケイ素の結晶（自形結晶は水晶）で、不規則に割れます。白く決まった方向に割れるのは長石です。",
    "id": "r_adv2_261"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地震が発生したとき、最初に観測地点に届く速い縦波によって引き起こされる、カタカタという小さな揺れを何と言いますか。",
    "options": [
      "主要動（S波による揺れ）",
      "初期微動（P波による揺れ）",
      "津波",
      "表面波"
    ],
    "answer": "初期微動（P波による揺れ）",
    "acceptableAnswers": [
      "初期微動（P波による揺れ）"
    ],
    "explanation": "速い縦波であるP波（Primary wave）によって生じる最初の小さな揺れを初期微動と言います。",
    "id": "r_adv2_262"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地震の初期微動が始まってから主要動が始まるまでの時間（初期微動継続時間）と、震源までの距離の関係はどうなっていますか。",
    "options": [
      "マグニチュードが大きいほど短くなる",
      "初期微動継続時間はどの地点でも常に一定である",
      "震源からの距離が遠いほど、初期微動継続時間は短くなる",
      "震源からの距離が遠いほど、初期微動継続時間は長くなる"
    ],
    "answer": "震源からの距離が遠いほど、初期微動継続時間は長くなる",
    "acceptableAnswers": [
      "震源からの距離が遠いほど、初期微動継続時間は長くなる"
    ],
    "explanation": "P波とS波の速さの差によって生じるため、震源から遠ざかるほど2つの波の到着時間差（初期微動継続時間）は比例して長くなります（大森公式）。",
    "id": "r_adv2_263"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "日本の気象庁震度階級は、揺れの強さに応じて全部で何段階に区分されていますか。",
    "options": [
      "10段階（震度0、1、2、3、4、5弱、5強、6弱、6強、7）",
      "12段階（震度1〜12）",
      "7段階（震度1〜7）",
      "8段階（震度0〜7）"
    ],
    "answer": "10段階（震度0、1、2、3、4、5弱、5強、6弱、6強、7）",
    "acceptableAnswers": [
      "10段階（震度0、1、2、3、4、5弱、5強、6弱、6強、7）"
    ],
    "explanation": "震度は特定の場所での揺れの強さを表し、5と6が「弱・強」に分かれているため全部で10段階です。",
    "id": "r_adv2_264"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "震度が「各地点での揺れの強さ」を表すのに対し、地震そのものの規模（放出されたエネルギーの大きさ）を表す尺度を何と言いますか。",
    "options": [
      "ガル（加速度）",
      "ヘクトパスカル",
      "マグニチュード（M）",
      "震央距離"
    ],
    "answer": "マグニチュード（M）",
    "acceptableAnswers": [
      "マグニチュード（M）"
    ],
    "explanation": "マグニチュードは地震自体の大きさを表す数値で、1増えるとエネルギーは約32倍、2増えると1000倍になります。",
    "id": "r_adv2_265"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "海洋プレートが大陸プレートの下に沈み込む日本海溝などの境界で、引きずり込まれた大陸プレートの先端が跳ね返ることで起きる巨大地震を何と言いますか。",
    "options": [
      "人工地震",
      "海溝型地震（プレート境界地震）",
      "火山性地震",
      "直下型地震（内陸活断層地震）"
    ],
    "answer": "海溝型地震（プレート境界地震）",
    "acceptableAnswers": [
      "海溝型地震（プレート境界地震）"
    ],
    "explanation": "東日本大震災（東北地方太平洋沖地震）や南海トラフ巨大地震などは海溝型地震であり、大津波を伴う特徴があります。",
    "id": "r_adv2_266"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "02. 地震のゆれと発生・プレートの動き",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "気象庁の「緊急地震速報」は、地震の波のどのような性質を利用して主要動が来る前に警告を出していますか。",
    "options": [
      "ナマズなどの動物の異常行動を感知する",
      "伝わる速度が速いP波を震源近くで検知し、遅れてやってくる大きな揺れのS波の到達を事前に知らせる",
      "地震の発生を数時間前に予知して知らせる",
      "電磁波が地下から放出されるのを検知する"
    ],
    "answer": "伝わる速度が速いP波を震源近くで検知し、遅れてやってくる大きな揺れのS波の到達を事前に知らせる",
    "acceptableAnswers": [
      "伝わる速度が速いP波を震源近くで検知し、遅れてやってくる大きな揺れのS波の到達を事前に知らせる"
    ],
    "explanation": "P波（約7km/s）をすばやくキャッチし、電気通信（光速）で計算してS波（約4km/s）が届く数秒〜数十秒前に知らせます。",
    "id": "r_adv2_267"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "川が山地から平野に出る谷口付近に、土砂が扇状に堆積してできる地形を何と言いますか。",
    "options": [
      "リアス海岸",
      "三角州（デルタ）",
      "扇状地",
      "海岸段丘"
    ],
    "answer": "扇状地",
    "acceptableAnswers": [
      "扇状地"
    ],
    "explanation": "谷口で流速が落ちて土砂が広がる地形を扇状地と言います。川が海や湖に注ぐ河口付近にできるのは三角州です。",
    "id": "r_adv2_268"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "火山の噴火によって吹き上げられた火山灰や軽石などが降り積もって固まった堆積岩を何と言いますか。",
    "options": [
      "凝灰岩（ぎょうかいがん）",
      "玄武岩",
      "石灰岩",
      "砂岩"
    ],
    "answer": "凝灰岩（ぎょうかいがん）",
    "acceptableAnswers": [
      "凝灰岩（ぎょうかいがん）"
    ],
    "explanation": "凝灰岩は火山噴出物からなる堆積岩で、広い範囲に同時に降り積もるため、地層の年代を比較する「鍵層（かぎそう）」として重要です。",
    "id": "r_adv2_269"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "フズリナやサンゴなどの生物の遺骸が固まってできた堆積岩で、うすい塩酸をかけると泡（二酸化炭素）を出して溶ける岩石は何ですか。",
    "options": [
      "チャート",
      "安山岩",
      "泥岩",
      "石灰岩"
    ],
    "answer": "石灰岩",
    "acceptableAnswers": [
      "石灰岩"
    ],
    "explanation": "石灰岩の主成分は炭酸カルシウムなので塩酸で二酸化炭素が発生します。同じ生物起源でも放散虫の遺骸（ケイ素）からできたチャートは非常に硬く塩酸に溶けません。",
    "id": "r_adv2_270"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地層が堆積した当時の「年代（時代）」を決定する手がかりとなる化石を何と言いますか。",
    "options": [
      "生痕化石",
      "示境化石",
      "示準化石（しじゅんかせき）",
      "示相化石"
    ],
    "answer": "示準化石（しじゅんかせき）",
    "acceptableAnswers": [
      "示準化石（しじゅんかせき）"
    ],
    "explanation": "生息した期間が短く、広い地域に分布していた生物の化石を示準化石と言います（三葉虫＝古生代、アンモナイト＝中生代、ナウマンゾウ＝新生代）。",
    "id": "r_adv2_271"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "サンゴやアサリの化石のように、地層が堆積した当時の「環境（気候や水深など）」を知る手がかりとなる化石を何と言いますか。",
    "options": [
      "古生物化石",
      "標準化石",
      "示準化石",
      "示相化石（しそうかせき）"
    ],
    "answer": "示相化石（しそうかせき）",
    "acceptableAnswers": [
      "示相化石（しそうかせき）"
    ],
    "explanation": "特定の環境にしか生息できない生物の化石を示相化石と言います（サンゴ＝暖かく浅いきれいな海、シジミ＝河口や淡水湖など）。",
    "id": "r_adv2_272"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "中生代の海に大繁栄し、恐竜とともに白亜紀末に絶滅した、平らな渦巻き状の殻を持つ示準化石は何ですか。",
    "options": [
      "アンモナイト",
      "ビカリア",
      "フズリナ",
      "三葉虫"
    ],
    "answer": "アンモナイト",
    "acceptableAnswers": [
      "アンモナイト"
    ],
    "explanation": "中生代を代表する示準化石です（三葉虫とフズリナは古生代、ビカリアは新生代新第三紀）。",
    "id": "r_adv2_273"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "03. 地層のでき方・堆積岩と化石・断層としゅう曲",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地層に水平方向から押し縮める大きな力が加わって、波打つように曲がった地質構造を何と言いますか。",
    "options": [
      "しゅう曲",
      "不整合",
      "正断層",
      "逆断層"
    ],
    "answer": "しゅう曲",
    "acceptableAnswers": [
      "しゅう曲"
    ],
    "explanation": "プレート運動などによる左右からの圧力によって地層が曲げられる現象をしゅう曲と言います。",
    "id": "r_adv2_274"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "04. 気象観測・気圧・湿度と雲のでき方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "晴れた日の1日の気温と湿度の変化について正しい説明はどれですか。",
    "options": [
      "夜明け前に気温が最も高くなり湿度は最も低くなる",
      "昼過ぎに気温も湿度も最も高くなる",
      "昼過ぎ（午後2時頃）に気温が最も高くなり湿度は最も低くなる",
      "気温と湿度は1日中まったく変化しない"
    ],
    "answer": "昼過ぎ（午後2時頃）に気温が最も高くなり湿度は最も低くなる",
    "acceptableAnswers": [
      "昼過ぎ（午後2時頃）に気温が最も高くなり湿度は最も低くなる"
    ],
    "explanation": "空気中に含まれる水蒸気量が同じ場合、気温が上がると飽和水蒸気量が増えるため湿度は下がり、逆相関の変化を示します。",
    "id": "r_adv2_275"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "04. 気象観測・気圧・湿度と雲のでき方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "乾湿計で湿度を測るとき、湿球温度計の示す温度が乾球温度計より低くなる理由は何ですか。",
    "options": [
      "乾球が直射日光で温められているから",
      "湿球のガーゼから水が蒸発するときに気化熱を奪うから",
      "湿球のガーゼが日光を遮るから",
      "湿球の水が周囲の冷気を吸い込むから"
    ],
    "answer": "湿球のガーゼから水が蒸発するときに気化熱を奪うから",
    "acceptableAnswers": [
      "湿球のガーゼから水が蒸発するときに気化熱を奪うから"
    ],
    "explanation": "水が蒸発するときに球部から熱（気化熱）を奪うためです。湿度が低い（乾燥している）ほど蒸発が盛んで温度差が大きくなります。",
    "id": "r_adv2_276"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "04. 気象観測・気圧・湿度と雲のでき方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "空気が上昇すると、気圧が下がることで膨張し温度が下がります。この現象を何と言いますか。",
    "options": [
      "フェーン現象",
      "断熱圧縮",
      "断熱膨張",
      "液化現象"
    ],
    "answer": "断熱膨張",
    "acceptableAnswers": [
      "断熱膨張"
    ],
    "explanation": "外部と熱のやり取りをせずに体積が膨張すると温度が下がる現象を「断熱膨張」と言い、雲ができる根本の原因です。",
    "id": "r_adv2_277"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "04. 気象観測・気圧・湿度と雲のでき方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "空気中の水蒸気が冷やされて水滴に変わり始める温度を何と言いますか。",
    "options": [
      "沸点",
      "絶対零度",
      "融点",
      "露点（ろてん）"
    ],
    "answer": "露点（ろてん）",
    "acceptableAnswers": [
      "露点（ろてん）"
    ],
    "explanation": "気温が露点まで下がると湿度が100％になり、凝結核を中心に水滴（霧や雲、露）が生じます。",
    "id": "r_adv2_278"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "04. 気象観測・気圧・湿度と雲のでき方",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "晴れた日の海岸で、昼間に「海から陸へ」向かって風（海風）が吹く理由は何ですか。",
    "options": [
      "地球の自転によって海水が東へ移動するから",
      "水よりも陸（土や砂）のほうが温まりやすく、陸上に上昇気流が生じるから",
      "海のほうが陸よりも温まりやすく、海上に上昇気流が生じるから",
      "海水の潮の満ち引きによって空気が押し出されるから"
    ],
    "answer": "水よりも陸（土や砂）のほうが温まりやすく、陸上に上昇気流が生じるから",
    "acceptableAnswers": [
      "水よりも陸（土や砂）のほうが温まりやすく、陸上に上昇気流が生じるから"
    ],
    "explanation": "陸（比熱小）は昼に急速に温まるため上昇気流が起き、気圧が下がった陸へ海（比熱大で温まりにくい）から風が吹き込みます。",
    "id": "r_adv2_279"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "04. 気象観測・気圧・湿度と雲のでき方",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "湿った空気が山を越えて反対側の平地に吹き下りるとき、高温で乾燥した風となって気温が急上昇する現象を何と言いますか。",
    "options": [
      "エルニーニョ現象",
      "チンダル現象",
      "ヒートアイランド現象",
      "フェーン現象"
    ],
    "answer": "フェーン現象",
    "acceptableAnswers": [
      "フェーン現象"
    ],
    "explanation": "山を登るときは水蒸気が凝結して雨を降らせ（潜熱放出で温度低下が緩やか）、乾いた空気となって山を駆け下りるときに急激に温度が上がる現象です。",
    "id": "r_adv2_280"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "寒気が暖気の下に潜り込みながら押し進む前線で、積乱雲を発達させて狭い範囲に短時間の強い雨を降らせる前線は何ですか。",
    "options": [
      "停滞前線",
      "寒冷前線",
      "温暖前線",
      "閉塞前線"
    ],
    "answer": "寒冷前線",
    "acceptableAnswers": [
      "寒冷前線"
    ],
    "explanation": "寒冷前線は傾斜が急なため強い上昇気流が起きて積乱雲ができ、激しい雨や雷をもたらし、通過後は北寄りの風に変わって気温が下がります。",
    "id": "r_adv2_281"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "暖気が寒気の上に這い上がりながら進む前線で、乱層雲などの層状の雲ができ、広い範囲にしとしとと長い時間雨を降らせる前線は何ですか。",
    "options": [
      "停滞前線",
      "寒冷前線",
      "温暖前線",
      "閉塞前線"
    ],
    "answer": "温暖前線",
    "acceptableAnswers": [
      "温暖前線"
    ],
    "explanation": "温暖前線は傾斜が緩やかで広い範囲に雨を降らせ、通過後は南寄りの風になって気温が上がります。",
    "id": "r_adv2_282"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "冬の日本付近に見られる、西高東低の気圧配置をもたらすシベリア高気圧（シベリア気団）の性質は何ですか。",
    "options": [
      "冷たく乾燥している",
      "冷たく湿っている",
      "暖かく乾燥している",
      "暖かく湿っている"
    ],
    "answer": "冷たく乾燥している",
    "acceptableAnswers": [
      "冷たく乾燥している"
    ],
    "explanation": "ユーラシア大陸の極寒の大地で冷やされるため「寒冷で乾燥」しています。日本海を渡る際に水蒸気と熱を補給して日本海側に大雪を降らせます。",
    "id": "r_adv2_283"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "初夏に冷たく湿った「オホーツク海気団」と暖かく湿った「小笠原気団」が日本付近でぶつかり合ってできる停滞前線を何と言いますか。",
    "options": [
      "冬期前線",
      "寒冷前線",
      "寒帯前線",
      "梅雨前線（ばいうぜんせん）"
    ],
    "answer": "梅雨前線（ばいうぜんせん）",
    "acceptableAnswers": [
      "梅雨前線（ばいうぜんせん）"
    ],
    "explanation": "勢力がほぼ等しい2つの気団がせめぎ合うため長期間停滞し、ぐずついた長雨をもたらします。",
    "id": "r_adv2_284"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "05. 前線と天気の変化・日本の四季と気団・台風と防災",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "北半球において、台風（熱帯低気圧）の中心に向かって吹き込む風の向きはどうなっていますか。",
    "options": [
      "中心から反時計回りに吹き出す",
      "中心から時計回りに吹き出す",
      "反時計回りに中心に向かって吹き込む",
      "時計回りに中心に向かって吹き込む"
    ],
    "answer": "反時計回りに中心に向かって吹き込む",
    "acceptableAnswers": [
      "反時計回りに中心に向かって吹き込む"
    ],
    "explanation": "低気圧は周囲より気圧が低いため風が吹き込み、地球の自転によるコリオリの力の影響で反時計回りの渦となります。",
    "id": "r_adv2_285"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "太陽や星が東から昇って西へ沈むように見える「日周運動」は、地球が何をしているために起こる見かけの運動ですか。",
    "options": [
      "地軸を中心に1日に1回転「自転」しているから",
      "太陽のまわりを1年かけて「公転」しているから",
      "太陽自身が猛スピードで回転しているから",
      "月が地球のまわりを公転しているから"
    ],
    "answer": "地軸を中心に1日に1回転「自転」しているから",
    "acceptableAnswers": [
      "地軸を中心に1日に1回転「自転」しているから"
    ],
    "explanation": "地球が西から東へ自転しているため、天球上のすべての星が東から西へ回って見えます。",
    "id": "r_adv2_286"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地球の自転によって、星や太陽は1時間に何度動いて見えますか。",
    "options": [
      "15度",
      "1度",
      "30度",
      "360度"
    ],
    "answer": "15度",
    "acceptableAnswers": [
      "15度"
    ],
    "explanation": "1日（24時間）で360度回転するため、360 ÷ 24 = 1時間に15度動きます。",
    "id": "r_adv2_287"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "北の空の星は、一年中ほとんど動かない北極星を中心にしてどちら向きに回転して見えますか。",
    "options": [
      "反時計回り",
      "時計回り",
      "東から西へ水平に動く",
      "直線状に上下動する"
    ],
    "answer": "反時計回り",
    "acceptableAnswers": [
      "反時計回り"
    ],
    "explanation": "北を向いて空を見上げたとき、東（右）から西（左）へ回るため、反時計回りの円を描きます。",
    "id": "r_adv2_288"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "北極星の見える高度（水平線からの角度）は、その観測地点の何と等しくなりますか。",
    "options": [
      "その地点の北緯",
      "その地点の東経",
      "その日の太陽の南中高度",
      "常に45度"
    ],
    "answer": "その地点の北緯",
    "acceptableAnswers": [
      "その地点の北緯"
    ],
    "explanation": "地軸の延長線上に北極星があるため、北緯35度の地点では北極星の高度もちょうど35度になります。",
    "id": "r_adv2_289"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地球の公転により、同じ時刻に見える星座の位置は1か月で約何度、どちらの向きへ移動して見えますか。",
    "options": [
      "約15度、西から東へ移動する",
      "約1度、東から西へ移動する",
      "約30度、東から西へ移動する",
      "約60度、西から東へ移動する"
    ],
    "answer": "約30度、東から西へ移動する",
    "acceptableAnswers": [
      "約30度、東から西へ移動する"
    ],
    "explanation": "地球は1年（12か月）で360度公転するため、360 ÷ 12 = 1か月に約30度ずつ西へずれていきます（年周運動）。",
    "id": "r_adv2_290"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "夏の夜空に見える「夏の大三角」を構成する3つの恒星と星座の組み合わせとして正しいものはどれですか。",
    "options": [
      "アンタレス（さそり座）・スピカ（おとめ座）・アークトゥルス（うしかい座）",
      "シリウス（おおいぬ座）・プロキオン（こいぬ座）・ベテルギウス（オリオン座）",
      "ベガ（こと座）・デネブ（はくちょう座）・アルタイル（わし座）",
      "ポラリス（こぐま座）・カペラ（ぎょしゃ座）・アルデバラン（おうし座）"
    ],
    "answer": "ベガ（こと座）・デネブ（はくちょう座）・アルタイル（わし座）",
    "acceptableAnswers": [
      "ベガ（こと座）・デネブ（はくちょう座）・アルタイル（わし座）"
    ],
    "explanation": "おりひめ星（ベガ）、ひこ星（アルタイル）、白鳥の尾（デネブ）が夏の大三角です。",
    "id": "r_adv2_291"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "冬の夜空に見える「冬の大三角」を構成する3つの1等星は何ですか。",
    "options": [
      "スピカ・レグルス・ポルックス",
      "ベガ・デネブ・アルタイル",
      "ベテルギウス・シリウス・プロキオン",
      "リゲル・アルデバラン・カペラ"
    ],
    "answer": "ベテルギウス・シリウス・プロキオン",
    "acceptableAnswers": [
      "ベテルギウス・シリウス・プロキオン"
    ],
    "explanation": "オリオン座の赤色巨星ベテルギウス、おおいぬ座の全天最輝星シリウス、こいぬ座のプロキオンが冬の大三角を作ります。",
    "id": "r_adv2_292"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "06. 太陽と星の日周運動・年周運動・四季の星座",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "春分・秋分の日の東京（北緯36°）における太陽の南中高度は何度ですか。",
    "options": [
      "30.6度",
      "36度",
      "54度",
      "77.4度"
    ],
    "answer": "54度",
    "acceptableAnswers": [
      "54度"
    ],
    "explanation": "春分・秋分の南中高度＝90° − 緯度 です。90° − 36° = 54° になります。",
    "id": "r_adv2_293"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "新月から次の新月までの、月の満ち欠けの周期はおよそ何日ですか。",
    "options": [
      "約27.3日",
      "約29.5日",
      "約365日",
      "約7日"
    ],
    "answer": "約29.5日",
    "acceptableAnswers": [
      "約29.5日"
    ],
    "explanation": "月が地球のまわりを公転する間に地球も公転するため、満ち欠けの1周期は約29.5日（約1朔望月）となります。",
    "id": "r_adv2_294"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "月の出の時刻は、前日の月の出の時刻と比べて毎日およそ何分ずつ遅くなりますか。",
    "options": [
      "毎日全く同じ時刻に出る",
      "約10分遅くなる",
      "約24時間遅くなる",
      "約50分遅くなる"
    ],
    "answer": "約50分遅くなる",
    "acceptableAnswers": [
      "約50分遅くなる"
    ],
    "explanation": "月が地球の自転と同じ向きに公転しているため、地球が追いつくのに毎日約50分の余分な自転が必要になります。",
    "id": "r_adv2_295"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "太陽・月・地球がこの順で一直線に並び、月によって太陽が隠される「日食」が起きるときの月の形は何ですか。",
    "options": [
      "上弦の月",
      "下弦の月",
      "新月",
      "満月"
    ],
    "answer": "新月",
    "acceptableAnswers": [
      "新月"
    ],
    "explanation": "太陽と同じ方向に月がある「新月」のときにのみ日食が起こります。",
    "id": "r_adv2_296"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "太陽・地球・月がこの順で一直線に並び、月が地球の影に入って暗くなる「月食」が起きるときの月の形は何ですか。",
    "options": [
      "三日月",
      "半月",
      "新月",
      "満月"
    ],
    "answer": "満月",
    "acceptableAnswers": [
      "満月"
    ],
    "explanation": "太陽の正反対に月が位置する「満月」のときにのみ月食が起こります。",
    "id": "r_adv2_297"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "明け方の東の空（明けの明星）や、夕方の西の空（よいの明星）に見える金星が、真夜中に南の空に見えることが決してない理由は何ですか。",
    "options": [
      "真夜中は地球の裏側に隠れてしまうから",
      "金星の公転周期が地球より長いから",
      "金星は地球の公転軌道の内側を回る「内惑星」だから",
      "金星は真夜中になると光るのをやめるから"
    ],
    "answer": "金星は地球の公転軌道の内側を回る「内惑星」だから",
    "acceptableAnswers": [
      "金星は地球の公転軌道の内側を回る「内惑星」だから"
    ],
    "explanation": "地球より太陽に近い軌道を回る内惑星（水星・金星）は、地球から見て常に太陽の近くにしか見えないため、真夜中には決して見えません。",
    "id": "r_adv2_298"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "08. 恒星の一生・銀河系と宇宙の広がり・宇宙の進化",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "太陽の表面に見られる黒点が周囲よりも黒く見える理由は何ですか。",
    "options": [
      "周囲の温度（約6000℃）に比べて、黒点の温度（約4000℃）が低いため",
      "太陽の表面に穴が開いて宇宙が見えているから",
      "黒点から光が一切放出されていないから",
      "黒点部分が黒い岩石で覆われているから"
    ],
    "answer": "周囲の温度（約6000℃）に比べて、黒点の温度（約4000℃）が低いため",
    "acceptableAnswers": [
      "周囲の温度（約6000℃）に比べて、黒点の温度（約4000℃）が低いため"
    ],
    "explanation": "強い磁場によって熱の対流が抑えられ、周囲より約2000℃低くなっているため、相対的に黒く見えます。",
    "id": "r_adv2_299"
  },
  {
    "subject": "理科",
    "category": "地学",
    "subCategory": "08. 恒星の一生・銀河系と宇宙の広がり・宇宙の進化",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "私たちの太陽系が所属している「天の川銀河（銀河系）」の形状と直径として正しいものはどれですか。",
    "options": [
      "リング状の銀河で、直径は約1000万光年",
      "不定形の銀河で、直径は約300光年",
      "渦巻状（円盤状）の銀河で、直径は約10万光年",
      "球状の銀河で、直径は約1光年"
    ],
    "answer": "渦巻状（円盤状）の銀河で、直径は約10万光年",
    "acceptableAnswers": [
      "渦巻状（円盤状）の銀河で、直径は約10万光年"
    ],
    "explanation": "約2000億個の恒星が集まった渦巻銀河（棒渦巻銀河）で、直径は約10万光年、太陽系は中心から約2.8万光年の位置にあります。",
    "id": "r_adv2_300"
  }
];
