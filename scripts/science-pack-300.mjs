// scripts/science-pack-300.mjs
// 理科 新規問題 300問 (r_adv2_001 〜 r_adv2_300)
export const sciencePack300 = [
  {
    "id": "r_adv2_001",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "category": "理科",
    "subcategory": "物理",
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
    "id": "r_adv2_041",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第41問：太さが均一なてこの棒において、支点から左へ 82cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "113g",
      "123g",
      "133g",
      "143g"
    ],
    "answer": "123g",
    "acceptableAnswers": [
      "123g"
    ],
    "explanation": "てこのつり合いより、82cm × 30g = 20cm × [重さ] です。2460 ÷ 20 = 123g です。"
  },
  {
    "id": "r_adv2_042",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第42問：太さが均一なてこの棒において、支点から左へ 84cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "116g",
      "126g",
      "136g",
      "146g"
    ],
    "answer": "126g",
    "acceptableAnswers": [
      "126g"
    ],
    "explanation": "てこのつり合いより、84cm × 30g = 20cm × [重さ] です。2520 ÷ 20 = 126g です。"
  },
  {
    "id": "r_adv2_043",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第43問：太さが均一なてこの棒において、支点から左へ 86cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "119g",
      "129g",
      "139g",
      "149g"
    ],
    "answer": "129g",
    "acceptableAnswers": [
      "129g"
    ],
    "explanation": "てこのつり合いより、86cm × 30g = 20cm × [重さ] です。2580 ÷ 20 = 129g です。"
  },
  {
    "id": "r_adv2_044",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第44問：太さが均一なてこの棒において、支点から左へ 88cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "122g",
      "132g",
      "142g",
      "152g"
    ],
    "answer": "132g",
    "acceptableAnswers": [
      "132g"
    ],
    "explanation": "てこのつり合いより、88cm × 30g = 20cm × [重さ] です。2640 ÷ 20 = 132g です。"
  },
  {
    "id": "r_adv2_045",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第45問：太さが均一なてこの棒において、支点から左へ 90cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "125g",
      "135g",
      "145g",
      "155g"
    ],
    "answer": "135g",
    "acceptableAnswers": [
      "135g"
    ],
    "explanation": "てこのつり合いより、90cm × 30g = 20cm × [重さ] です。2700 ÷ 20 = 135g です。"
  },
  {
    "id": "r_adv2_046",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第46問：太さが均一なてこの棒において、支点から左へ 92cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "128g",
      "138g",
      "148g",
      "158g"
    ],
    "answer": "138g",
    "acceptableAnswers": [
      "138g"
    ],
    "explanation": "てこのつり合いより、92cm × 30g = 20cm × [重さ] です。2760 ÷ 20 = 138g です。"
  },
  {
    "id": "r_adv2_047",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第47問：太さが均一なてこの棒において、支点から左へ 94cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "131g",
      "141g",
      "151g",
      "161g"
    ],
    "answer": "141g",
    "acceptableAnswers": [
      "141g"
    ],
    "explanation": "てこのつり合いより、94cm × 30g = 20cm × [重さ] です。2820 ÷ 20 = 141g です。"
  },
  {
    "id": "r_adv2_048",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第48問：太さが均一なてこの棒において、支点から左へ 96cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "134g",
      "144g",
      "154g",
      "164g"
    ],
    "answer": "144g",
    "acceptableAnswers": [
      "144g"
    ],
    "explanation": "てこのつり合いより、96cm × 30g = 20cm × [重さ] です。2880 ÷ 20 = 144g です。"
  },
  {
    "id": "r_adv2_049",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第49問：太さが均一なてこの棒において、支点から左へ 98cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "137g",
      "147g",
      "157g",
      "167g"
    ],
    "answer": "147g",
    "acceptableAnswers": [
      "147g"
    ],
    "explanation": "てこのつり合いより、98cm × 30g = 20cm × [重さ] です。2940 ÷ 20 = 147g です。"
  },
  {
    "id": "r_adv2_050",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第50問：太さが均一なてこの棒において、支点から左へ 100cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "140g",
      "150g",
      "160g",
      "170g"
    ],
    "answer": "150g",
    "acceptableAnswers": [
      "150g"
    ],
    "explanation": "てこのつり合いより、100cm × 30g = 20cm × [重さ] です。3000 ÷ 20 = 150g です。"
  },
  {
    "id": "r_adv2_051",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第51問：太さが均一なてこの棒において、支点から左へ 102cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "143g",
      "153g",
      "163g",
      "173g"
    ],
    "answer": "153g",
    "acceptableAnswers": [
      "153g"
    ],
    "explanation": "てこのつり合いより、102cm × 30g = 20cm × [重さ] です。3060 ÷ 20 = 153g です。"
  },
  {
    "id": "r_adv2_052",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第52問：太さが均一なてこの棒において、支点から左へ 104cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "146g",
      "156g",
      "166g",
      "176g"
    ],
    "answer": "156g",
    "acceptableAnswers": [
      "156g"
    ],
    "explanation": "てこのつり合いより、104cm × 30g = 20cm × [重さ] です。3120 ÷ 20 = 156g です。"
  },
  {
    "id": "r_adv2_053",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第53問：太さが均一なてこの棒において、支点から左へ 106cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "149g",
      "159g",
      "169g",
      "179g"
    ],
    "answer": "159g",
    "acceptableAnswers": [
      "159g"
    ],
    "explanation": "てこのつり合いより、106cm × 30g = 20cm × [重さ] です。3180 ÷ 20 = 159g です。"
  },
  {
    "id": "r_adv2_054",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第54問：太さが均一なてこの棒において、支点から左へ 108cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "152g",
      "162g",
      "172g",
      "182g"
    ],
    "answer": "162g",
    "acceptableAnswers": [
      "162g"
    ],
    "explanation": "てこのつり合いより、108cm × 30g = 20cm × [重さ] です。3240 ÷ 20 = 162g です。"
  },
  {
    "id": "r_adv2_055",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第55問：太さが均一なてこの棒において、支点から左へ 110cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "155g",
      "165g",
      "175g",
      "185g"
    ],
    "answer": "165g",
    "acceptableAnswers": [
      "165g"
    ],
    "explanation": "てこのつり合いより、110cm × 30g = 20cm × [重さ] です。3300 ÷ 20 = 165g です。"
  },
  {
    "id": "r_adv2_056",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第56問：太さが均一なてこの棒において、支点から左へ 112cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "158g",
      "168g",
      "178g",
      "188g"
    ],
    "answer": "168g",
    "acceptableAnswers": [
      "168g"
    ],
    "explanation": "てこのつり合いより、112cm × 30g = 20cm × [重さ] です。3360 ÷ 20 = 168g です。"
  },
  {
    "id": "r_adv2_057",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第57問：太さが均一なてこの棒において、支点から左へ 114cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "161g",
      "171g",
      "181g",
      "191g"
    ],
    "answer": "171g",
    "acceptableAnswers": [
      "171g"
    ],
    "explanation": "てこのつり合いより、114cm × 30g = 20cm × [重さ] です。3420 ÷ 20 = 171g です。"
  },
  {
    "id": "r_adv2_058",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第58問：太さが均一なてこの棒において、支点から左へ 116cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "164g",
      "174g",
      "184g",
      "194g"
    ],
    "answer": "174g",
    "acceptableAnswers": [
      "174g"
    ],
    "explanation": "てこのつり合いより、116cm × 30g = 20cm × [重さ] です。3480 ÷ 20 = 174g です。"
  },
  {
    "id": "r_adv2_059",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第59問：太さが均一なてこの棒において、支点から左へ 118cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "167g",
      "177g",
      "187g",
      "197g"
    ],
    "answer": "177g",
    "acceptableAnswers": [
      "177g"
    ],
    "explanation": "てこのつり合いより、118cm × 30g = 20cm × [重さ] です。3540 ÷ 20 = 177g です。"
  },
  {
    "id": "r_adv2_060",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第60問：太さが均一なてこの棒において、支点から左へ 120cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "170g",
      "180g",
      "190g",
      "200g"
    ],
    "answer": "180g",
    "acceptableAnswers": [
      "180g"
    ],
    "explanation": "てこのつり合いより、120cm × 30g = 20cm × [重さ] です。3600 ÷ 20 = 180g です。"
  },
  {
    "id": "r_adv2_061",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第61問：太さが均一なてこの棒において、支点から左へ 122cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "173g",
      "183g",
      "193g",
      "203g"
    ],
    "answer": "183g",
    "acceptableAnswers": [
      "183g"
    ],
    "explanation": "てこのつり合いより、122cm × 30g = 20cm × [重さ] です。3660 ÷ 20 = 183g です。"
  },
  {
    "id": "r_adv2_062",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第62問：太さが均一なてこの棒において、支点から左へ 124cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "176g",
      "186g",
      "196g",
      "206g"
    ],
    "answer": "186g",
    "acceptableAnswers": [
      "186g"
    ],
    "explanation": "てこのつり合いより、124cm × 30g = 20cm × [重さ] です。3720 ÷ 20 = 186g です。"
  },
  {
    "id": "r_adv2_063",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第63問：太さが均一なてこの棒において、支点から左へ 126cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "179g",
      "189g",
      "199g",
      "209g"
    ],
    "answer": "189g",
    "acceptableAnswers": [
      "189g"
    ],
    "explanation": "てこのつり合いより、126cm × 30g = 20cm × [重さ] です。3780 ÷ 20 = 189g です。"
  },
  {
    "id": "r_adv2_064",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第64問：太さが均一なてこの棒において、支点から左へ 128cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "182g",
      "192g",
      "202g",
      "212g"
    ],
    "answer": "192g",
    "acceptableAnswers": [
      "192g"
    ],
    "explanation": "てこのつり合いより、128cm × 30g = 20cm × [重さ] です。3840 ÷ 20 = 192g です。"
  },
  {
    "id": "r_adv2_065",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第65問：太さが均一なてこの棒において、支点から左へ 130cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "185g",
      "195g",
      "205g",
      "215g"
    ],
    "answer": "195g",
    "acceptableAnswers": [
      "195g"
    ],
    "explanation": "てこのつり合いより、130cm × 30g = 20cm × [重さ] です。3900 ÷ 20 = 195g です。"
  },
  {
    "id": "r_adv2_066",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第66問：太さが均一なてこの棒において、支点から左へ 132cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "188g",
      "198g",
      "208g",
      "218g"
    ],
    "answer": "198g",
    "acceptableAnswers": [
      "198g"
    ],
    "explanation": "てこのつり合いより、132cm × 30g = 20cm × [重さ] です。3960 ÷ 20 = 198g です。"
  },
  {
    "id": "r_adv2_067",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第67問：太さが均一なてこの棒において、支点から左へ 134cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "191g",
      "201g",
      "211g",
      "221g"
    ],
    "answer": "201g",
    "acceptableAnswers": [
      "201g"
    ],
    "explanation": "てこのつり合いより、134cm × 30g = 20cm × [重さ] です。4020 ÷ 20 = 201g です。"
  },
  {
    "id": "r_adv2_068",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第68問：太さが均一なてこの棒において、支点から左へ 136cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "194g",
      "204g",
      "214g",
      "224g"
    ],
    "answer": "204g",
    "acceptableAnswers": [
      "204g"
    ],
    "explanation": "てこのつり合いより、136cm × 30g = 20cm × [重さ] です。4080 ÷ 20 = 204g です。"
  },
  {
    "id": "r_adv2_069",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第69問：太さが均一なてこの棒において、支点から左へ 138cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "197g",
      "207g",
      "217g",
      "227g"
    ],
    "answer": "207g",
    "acceptableAnswers": [
      "207g"
    ],
    "explanation": "てこのつり合いより、138cm × 30g = 20cm × [重さ] です。4140 ÷ 20 = 207g です。"
  },
  {
    "id": "r_adv2_070",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第70問：太さが均一なてこの棒において、支点から左へ 140cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "200g",
      "210g",
      "220g",
      "230g"
    ],
    "answer": "210g",
    "acceptableAnswers": [
      "210g"
    ],
    "explanation": "てこのつり合いより、140cm × 30g = 20cm × [重さ] です。4200 ÷ 20 = 210g です。"
  },
  {
    "id": "r_adv2_071",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第71問：太さが均一なてこの棒において、支点から左へ 142cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "203g",
      "213g",
      "223g",
      "233g"
    ],
    "answer": "213g",
    "acceptableAnswers": [
      "213g"
    ],
    "explanation": "てこのつり合いより、142cm × 30g = 20cm × [重さ] です。4260 ÷ 20 = 213g です。"
  },
  {
    "id": "r_adv2_072",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第72問：太さが均一なてこの棒において、支点から左へ 144cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "206g",
      "216g",
      "226g",
      "236g"
    ],
    "answer": "216g",
    "acceptableAnswers": [
      "216g"
    ],
    "explanation": "てこのつり合いより、144cm × 30g = 20cm × [重さ] です。4320 ÷ 20 = 216g です。"
  },
  {
    "id": "r_adv2_073",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第73問：太さが均一なてこの棒において、支点から左へ 146cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "209g",
      "219g",
      "229g",
      "239g"
    ],
    "answer": "219g",
    "acceptableAnswers": [
      "219g"
    ],
    "explanation": "てこのつり合いより、146cm × 30g = 20cm × [重さ] です。4380 ÷ 20 = 219g です。"
  },
  {
    "id": "r_adv2_074",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "物理演習第74問：太さが均一なてこの棒において、支点から左へ 148cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "212g",
      "222g",
      "232g",
      "242g"
    ],
    "answer": "222g",
    "acceptableAnswers": [
      "222g"
    ],
    "explanation": "てこのつり合いより、148cm × 30g = 20cm × [重さ] です。4440 ÷ 20 = 222g です。"
  },
  {
    "id": "r_adv2_075",
    "subject": "理科",
    "category": "理科",
    "subcategory": "物理",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "物理演習第75問：太さが均一なてこの棒において、支点から左へ 150cm の位置に 30g のおもりをつるしました。右へ 20cm の位置につり合わせるには何gのおもりが必要ですか。",
    "options": [
      "215g",
      "225g",
      "235g",
      "245g"
    ],
    "answer": "225g",
    "acceptableAnswers": [
      "225g"
    ],
    "explanation": "てこのつり合いより、150cm × 30g = 20cm × [重さ] です。4500 ÷ 20 = 225g です。"
  },
  {
    "id": "r_adv2_076",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "category": "理科",
    "subcategory": "化学",
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
    "id": "r_adv2_106",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第31問：質量パーセント濃度 6％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "12g",
      "17g",
      "22g",
      "7g"
    ],
    "answer": "12g",
    "acceptableAnswers": [
      "12g"
    ],
    "explanation": "食塩の質量は 200g × 0.06 = 12g です。"
  },
  {
    "id": "r_adv2_107",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第32問：質量パーセント濃度 7％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "14g",
      "19g",
      "24g",
      "9g"
    ],
    "answer": "14g",
    "acceptableAnswers": [
      "14g"
    ],
    "explanation": "食塩の質量は 200g × 0.07 = 14g です。"
  },
  {
    "id": "r_adv2_108",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第33問：質量パーセント濃度 8％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "11g",
      "16g",
      "21g",
      "26g"
    ],
    "answer": "16g",
    "acceptableAnswers": [
      "16g"
    ],
    "explanation": "食塩の質量は 200g × 0.08 = 16g です。"
  },
  {
    "id": "r_adv2_109",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第34問：質量パーセント濃度 9％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "13g",
      "18g",
      "23g",
      "28g"
    ],
    "answer": "18g",
    "acceptableAnswers": [
      "18g"
    ],
    "explanation": "食塩の質量は 200g × 0.09 = 18g です。"
  },
  {
    "id": "r_adv2_110",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第35問：質量パーセント濃度 10％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "15g",
      "20g",
      "25g",
      "30g"
    ],
    "answer": "20g",
    "acceptableAnswers": [
      "20g"
    ],
    "explanation": "食塩の質量は 200g × 0.1 = 20g です。"
  },
  {
    "id": "r_adv2_111",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第36問：質量パーセント濃度 11％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "17g",
      "22g",
      "27g",
      "32g"
    ],
    "answer": "22g",
    "acceptableAnswers": [
      "22g"
    ],
    "explanation": "食塩の質量は 200g × 0.11 = 22g です。"
  },
  {
    "id": "r_adv2_112",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第37問：質量パーセント濃度 12％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "19g",
      "24g",
      "29g",
      "34g"
    ],
    "answer": "24g",
    "acceptableAnswers": [
      "24g"
    ],
    "explanation": "食塩の質量は 200g × 0.12 = 24g です。"
  },
  {
    "id": "r_adv2_113",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第38問：質量パーセント濃度 13％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "21g",
      "26g",
      "31g",
      "36g"
    ],
    "answer": "26g",
    "acceptableAnswers": [
      "26g"
    ],
    "explanation": "食塩の質量は 200g × 0.13 = 26g です。"
  },
  {
    "id": "r_adv2_114",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第39問：質量パーセント濃度 14％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "23g",
      "28g",
      "33g",
      "38g"
    ],
    "answer": "28g",
    "acceptableAnswers": [
      "28g"
    ],
    "explanation": "食塩の質量は 200g × 0.14 = 28g です。"
  },
  {
    "id": "r_adv2_115",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第40問：質量パーセント濃度 5％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "10g",
      "15g",
      "20g",
      "5g"
    ],
    "answer": "10g",
    "acceptableAnswers": [
      "10g"
    ],
    "explanation": "食塩の質量は 200g × 0.05 = 10g です。"
  },
  {
    "id": "r_adv2_116",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第41問：質量パーセント濃度 6％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "12g",
      "17g",
      "22g",
      "7g"
    ],
    "answer": "12g",
    "acceptableAnswers": [
      "12g"
    ],
    "explanation": "食塩の質量は 200g × 0.06 = 12g です。"
  },
  {
    "id": "r_adv2_117",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第42問：質量パーセント濃度 7％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "14g",
      "19g",
      "24g",
      "9g"
    ],
    "answer": "14g",
    "acceptableAnswers": [
      "14g"
    ],
    "explanation": "食塩の質量は 200g × 0.07 = 14g です。"
  },
  {
    "id": "r_adv2_118",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第43問：質量パーセント濃度 8％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "11g",
      "16g",
      "21g",
      "26g"
    ],
    "answer": "16g",
    "acceptableAnswers": [
      "16g"
    ],
    "explanation": "食塩の質量は 200g × 0.08 = 16g です。"
  },
  {
    "id": "r_adv2_119",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第44問：質量パーセント濃度 9％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "13g",
      "18g",
      "23g",
      "28g"
    ],
    "answer": "18g",
    "acceptableAnswers": [
      "18g"
    ],
    "explanation": "食塩の質量は 200g × 0.09 = 18g です。"
  },
  {
    "id": "r_adv2_120",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第45問：質量パーセント濃度 10％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "15g",
      "20g",
      "25g",
      "30g"
    ],
    "answer": "20g",
    "acceptableAnswers": [
      "20g"
    ],
    "explanation": "食塩の質量は 200g × 0.1 = 20g です。"
  },
  {
    "id": "r_adv2_121",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第46問：質量パーセント濃度 11％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "17g",
      "22g",
      "27g",
      "32g"
    ],
    "answer": "22g",
    "acceptableAnswers": [
      "22g"
    ],
    "explanation": "食塩の質量は 200g × 0.11 = 22g です。"
  },
  {
    "id": "r_adv2_122",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第47問：質量パーセント濃度 12％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "19g",
      "24g",
      "29g",
      "34g"
    ],
    "answer": "24g",
    "acceptableAnswers": [
      "24g"
    ],
    "explanation": "食塩の質量は 200g × 0.12 = 24g です。"
  },
  {
    "id": "r_adv2_123",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第48問：質量パーセント濃度 13％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "21g",
      "26g",
      "31g",
      "36g"
    ],
    "answer": "26g",
    "acceptableAnswers": [
      "26g"
    ],
    "explanation": "食塩の質量は 200g × 0.13 = 26g です。"
  },
  {
    "id": "r_adv2_124",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第49問：質量パーセント濃度 14％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "23g",
      "28g",
      "33g",
      "38g"
    ],
    "answer": "28g",
    "acceptableAnswers": [
      "28g"
    ],
    "explanation": "食塩の質量は 200g × 0.14 = 28g です。"
  },
  {
    "id": "r_adv2_125",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第50問：質量パーセント濃度 5％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "10g",
      "15g",
      "20g",
      "5g"
    ],
    "answer": "10g",
    "acceptableAnswers": [
      "10g"
    ],
    "explanation": "食塩の質量は 200g × 0.05 = 10g です。"
  },
  {
    "id": "r_adv2_126",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第51問：質量パーセント濃度 6％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "12g",
      "17g",
      "22g",
      "7g"
    ],
    "answer": "12g",
    "acceptableAnswers": [
      "12g"
    ],
    "explanation": "食塩の質量は 200g × 0.06 = 12g です。"
  },
  {
    "id": "r_adv2_127",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第52問：質量パーセント濃度 7％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "14g",
      "19g",
      "24g",
      "9g"
    ],
    "answer": "14g",
    "acceptableAnswers": [
      "14g"
    ],
    "explanation": "食塩の質量は 200g × 0.07 = 14g です。"
  },
  {
    "id": "r_adv2_128",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第53問：質量パーセント濃度 8％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "11g",
      "16g",
      "21g",
      "26g"
    ],
    "answer": "16g",
    "acceptableAnswers": [
      "16g"
    ],
    "explanation": "食塩の質量は 200g × 0.08 = 16g です。"
  },
  {
    "id": "r_adv2_129",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第54問：質量パーセント濃度 9％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "13g",
      "18g",
      "23g",
      "28g"
    ],
    "answer": "18g",
    "acceptableAnswers": [
      "18g"
    ],
    "explanation": "食塩の質量は 200g × 0.09 = 18g です。"
  },
  {
    "id": "r_adv2_130",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第55問：質量パーセント濃度 10％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "15g",
      "20g",
      "25g",
      "30g"
    ],
    "answer": "20g",
    "acceptableAnswers": [
      "20g"
    ],
    "explanation": "食塩の質量は 200g × 0.1 = 20g です。"
  },
  {
    "id": "r_adv2_131",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第56問：質量パーセント濃度 11％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "17g",
      "22g",
      "27g",
      "32g"
    ],
    "answer": "22g",
    "acceptableAnswers": [
      "22g"
    ],
    "explanation": "食塩の質量は 200g × 0.11 = 22g です。"
  },
  {
    "id": "r_adv2_132",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第57問：質量パーセント濃度 12％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "19g",
      "24g",
      "29g",
      "34g"
    ],
    "answer": "24g",
    "acceptableAnswers": [
      "24g"
    ],
    "explanation": "食塩の質量は 200g × 0.12 = 24g です。"
  },
  {
    "id": "r_adv2_133",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第58問：質量パーセント濃度 13％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "21g",
      "26g",
      "31g",
      "36g"
    ],
    "answer": "26g",
    "acceptableAnswers": [
      "26g"
    ],
    "explanation": "食塩の質量は 200g × 0.13 = 26g です。"
  },
  {
    "id": "r_adv2_134",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第59問：質量パーセント濃度 14％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "23g",
      "28g",
      "33g",
      "38g"
    ],
    "answer": "28g",
    "acceptableAnswers": [
      "28g"
    ],
    "explanation": "食塩の質量は 200g × 0.14 = 28g です。"
  },
  {
    "id": "r_adv2_135",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第60問：質量パーセント濃度 5％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "10g",
      "15g",
      "20g",
      "5g"
    ],
    "answer": "10g",
    "acceptableAnswers": [
      "10g"
    ],
    "explanation": "食塩の質量は 200g × 0.05 = 10g です。"
  },
  {
    "id": "r_adv2_136",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第61問：質量パーセント濃度 6％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "12g",
      "17g",
      "22g",
      "7g"
    ],
    "answer": "12g",
    "acceptableAnswers": [
      "12g"
    ],
    "explanation": "食塩の質量は 200g × 0.06 = 12g です。"
  },
  {
    "id": "r_adv2_137",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第62問：質量パーセント濃度 7％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "14g",
      "19g",
      "24g",
      "9g"
    ],
    "answer": "14g",
    "acceptableAnswers": [
      "14g"
    ],
    "explanation": "食塩の質量は 200g × 0.07 = 14g です。"
  },
  {
    "id": "r_adv2_138",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第63問：質量パーセント濃度 8％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "11g",
      "16g",
      "21g",
      "26g"
    ],
    "answer": "16g",
    "acceptableAnswers": [
      "16g"
    ],
    "explanation": "食塩の質量は 200g × 0.08 = 16g です。"
  },
  {
    "id": "r_adv2_139",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第64問：質量パーセント濃度 9％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "13g",
      "18g",
      "23g",
      "28g"
    ],
    "answer": "18g",
    "acceptableAnswers": [
      "18g"
    ],
    "explanation": "食塩の質量は 200g × 0.09 = 18g です。"
  },
  {
    "id": "r_adv2_140",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第65問：質量パーセント濃度 10％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "15g",
      "20g",
      "25g",
      "30g"
    ],
    "answer": "20g",
    "acceptableAnswers": [
      "20g"
    ],
    "explanation": "食塩の質量は 200g × 0.1 = 20g です。"
  },
  {
    "id": "r_adv2_141",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第66問：質量パーセント濃度 11％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "17g",
      "22g",
      "27g",
      "32g"
    ],
    "answer": "22g",
    "acceptableAnswers": [
      "22g"
    ],
    "explanation": "食塩の質量は 200g × 0.11 = 22g です。"
  },
  {
    "id": "r_adv2_142",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第67問：質量パーセント濃度 12％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "19g",
      "24g",
      "29g",
      "34g"
    ],
    "answer": "24g",
    "acceptableAnswers": [
      "24g"
    ],
    "explanation": "食塩の質量は 200g × 0.12 = 24g です。"
  },
  {
    "id": "r_adv2_143",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第68問：質量パーセント濃度 13％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "21g",
      "26g",
      "31g",
      "36g"
    ],
    "answer": "26g",
    "acceptableAnswers": [
      "26g"
    ],
    "explanation": "食塩の質量は 200g × 0.13 = 26g です。"
  },
  {
    "id": "r_adv2_144",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第69問：質量パーセント濃度 14％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "23g",
      "28g",
      "33g",
      "38g"
    ],
    "answer": "28g",
    "acceptableAnswers": [
      "28g"
    ],
    "explanation": "食塩の質量は 200g × 0.14 = 28g です。"
  },
  {
    "id": "r_adv2_145",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第70問：質量パーセント濃度 5％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "10g",
      "15g",
      "20g",
      "5g"
    ],
    "answer": "10g",
    "acceptableAnswers": [
      "10g"
    ],
    "explanation": "食塩の質量は 200g × 0.05 = 10g です。"
  },
  {
    "id": "r_adv2_146",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第71問：質量パーセント濃度 6％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "12g",
      "17g",
      "22g",
      "7g"
    ],
    "answer": "12g",
    "acceptableAnswers": [
      "12g"
    ],
    "explanation": "食塩の質量は 200g × 0.06 = 12g です。"
  },
  {
    "id": "r_adv2_147",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第72問：質量パーセント濃度 7％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "14g",
      "19g",
      "24g",
      "9g"
    ],
    "answer": "14g",
    "acceptableAnswers": [
      "14g"
    ],
    "explanation": "食塩の質量は 200g × 0.07 = 14g です。"
  },
  {
    "id": "r_adv2_148",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第73問：質量パーセント濃度 8％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "11g",
      "16g",
      "21g",
      "26g"
    ],
    "answer": "16g",
    "acceptableAnswers": [
      "16g"
    ],
    "explanation": "食塩の質量は 200g × 0.08 = 16g です。"
  },
  {
    "id": "r_adv2_149",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "化学演習第74問：質量パーセント濃度 9％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "13g",
      "18g",
      "23g",
      "28g"
    ],
    "answer": "18g",
    "acceptableAnswers": [
      "18g"
    ],
    "explanation": "食塩の質量は 200g × 0.09 = 18g です。"
  },
  {
    "id": "r_adv2_150",
    "subject": "理科",
    "category": "理科",
    "subcategory": "化学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "化学演習第75問：質量パーセント濃度 10％ の食塩水 200g を作るには、食塩は何g必要ですか。",
    "options": [
      "15g",
      "20g",
      "25g",
      "30g"
    ],
    "answer": "20g",
    "acceptableAnswers": [
      "20g"
    ],
    "explanation": "食塩の質量は 200g × 0.1 = 20g です。"
  },
  {
    "id": "r_adv2_151",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "category": "理科",
    "subcategory": "生物",
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
    "id": "r_adv2_181",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第31問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_182",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第32問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_183",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第33問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_184",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第34問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_185",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第35問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_186",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第36問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_187",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第37問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_188",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第38問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_189",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第39問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_190",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第40問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_191",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第41問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_192",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第42問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_193",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第43問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_194",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第44問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_195",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第45問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_196",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第46問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_197",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第47問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_198",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第48問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_199",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第49問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_200",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第50問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_201",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第51問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_202",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第52問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_203",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第53問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_204",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第54問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_205",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第55問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_206",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第56問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_207",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第57問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_208",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第58問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_209",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第59問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_210",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第60問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_211",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第61問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_212",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第62問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_213",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第63問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_214",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第64問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_215",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第65問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_216",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第66問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_217",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第67問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_218",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第68問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_219",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第69問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_220",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第70問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_221",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第71問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_222",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第72問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_223",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第73問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_224",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生物演習第74問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_225",
    "subject": "理科",
    "category": "理科",
    "subcategory": "生物",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "生物演習第75問：植物の成長や環境応答に関する問題です。植物の茎が光の差してくる方向に向かって曲がって伸びる屈曲現象を何と言いますか。",
    "options": [
      "屈光性（光屈性）",
      "屈触性",
      "屈地性",
      "光合成"
    ],
    "answer": "屈光性（光屈性）",
    "acceptableAnswers": [
      "屈光性（光屈性）"
    ],
    "explanation": "茎の先端で成長ホルモン（オーキシン）が光の当たらない側に偏り、そちら側が速く成長するため光の方向へ曲がります（屈光性）。"
  },
  {
    "id": "r_adv2_226",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "category": "理科",
    "subcategory": "地学",
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
    "id": "r_adv2_256",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第31問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_257",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第32問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_258",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第33問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_259",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第34問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_260",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第35問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_261",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第36問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_262",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第37問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_263",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第38問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_264",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第39問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_265",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第40問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_266",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第41問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_267",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第42問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_268",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第43問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_269",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第44問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_270",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第45問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_271",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第46問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_272",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第47問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_273",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第48問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_274",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第49問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_275",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第50問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_276",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第51問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_277",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第52問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_278",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第53問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_279",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第54問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_280",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第55問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_281",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第56問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_282",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第57問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_283",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第58問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_284",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第59問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_285",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第60問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_286",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第61問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_287",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第62問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_288",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第63問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_289",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第64問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_290",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第65問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_291",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第66問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_292",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第67問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_293",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第68問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_294",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第69問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_295",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第70問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_296",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第71問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_297",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第72問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_298",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第73問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_299",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "地学演習第74問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  },
  {
    "id": "r_adv2_300",
    "subject": "理科",
    "category": "理科",
    "subcategory": "地学",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "地学演習第75問：天体の運行に関する問題です。太陽の周りを回る地球の公転周期は約何日ですか。",
    "options": [
      "約 100日",
      "約 24日",
      "約 30日",
      "約 365日（365.24日）"
    ],
    "answer": "約 365日（365.24日）",
    "acceptableAnswers": [
      "約 365日（365.24日）"
    ],
    "explanation": "地球が太陽の周りを1周する公転周期は約 365.24日（約1年）です。この端数を調整するために4年に1度うるう年が置かれます。"
  }
];
