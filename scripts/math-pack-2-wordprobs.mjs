// scripts/math-pack-2-wordprobs.mjs
// 算数新規問題パック2: 文章題・特殊算 100問 (m_adv2_101 〜 m_adv2_200)
export const MATH_WORD_PROBS_100 = [
  {
    "id": "m_adv2_101",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "池のまわり1周1800mを、A君は分速70m、B君は分速50mで同時に同じ地点から反対方向に出発しました。2人が初めて出会うのは出発してから何分後ですか。",
    "options": [
      "12分後",
      "15分後",
      "18分後",
      "20分後"
    ],
    "answer": "15分後",
    "acceptableAnswers": [
      "15分後"
    ],
    "explanation": "出会い算の公式「距離 ÷ 速さの和」より、1800 ÷ (70 + 50) = 1800 ÷ 120 = 15分後 です。"
  },
  {
    "id": "m_adv2_102",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1周2400mのジョギングコースを、兄は分速80m、弟は分速40mで同じ地点から同時に反対向きにスタートしました。2人が最初に出会うのは何分後ですか。",
    "options": [
      "16分後",
      "20分後",
      "24分後",
      "30分後"
    ],
    "answer": "20分後",
    "acceptableAnswers": [
      "20分後"
    ],
    "explanation": "2400 ÷ (80 + 40) = 2400 ÷ 120 = 20分後に出会います。"
  },
  {
    "id": "m_adv2_103",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1周1200mのトラックを、A君は分速90m、B君は分速60mで同じ地点から同時に同じ方向へ走り始めました。A君がB君に初めて追いつく（1周追い抜く）のは何分後ですか。",
    "options": [
      "30分後",
      "36分後",
      "40分後",
      "45分後"
    ],
    "answer": "40分後",
    "acceptableAnswers": [
      "40分後"
    ],
    "explanation": "追いつき算の公式「距離の差 ÷ 速さの差」より、1200 ÷ (90 - 60) = 1200 ÷ 30 = 40分後 です。"
  },
  {
    "id": "m_adv2_104",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "公園の周囲1500mを、兄は分速80m、弟は分速50mで同じ地点から同時に同じ向きに歩き始めました。兄が弟を1周追い抜くのは何分後ですか。",
    "options": [
      "40分後",
      "45分後",
      "50分後",
      "60分後"
    ],
    "answer": "50分後",
    "acceptableAnswers": [
      "50分後"
    ],
    "explanation": "1500 ÷ (80 - 50) = 1500 ÷ 30 = 50分後 です。"
  },
  {
    "id": "m_adv2_105",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "2100m離れた駅と家の間を、兄は駅から家へ分速90mで、弟は家から駅へ分速50mで同時に出発しました。2人が出会うのは出発してから何分後ですか。",
    "options": [
      "14分後",
      "15分後",
      "16分後",
      "20分後"
    ],
    "answer": "15分後",
    "acceptableAnswers": [
      "15分後"
    ],
    "explanation": "2100 ÷ (90 + 50) = 2100 ÷ 140 = 15分後 です。"
  },
  {
    "id": "m_adv2_106",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "3000m離れたP地点とQ地点から、A車は分速120m、B車は分速80mで向かい合って同時に出発しました。2台が出会うのは何分後ですか。",
    "options": [
      "12分後",
      "15分後",
      "18分後",
      "25分後"
    ],
    "answer": "15分後",
    "acceptableAnswers": [
      "15分後"
    ],
    "explanation": "3000 ÷ (120 + 80) = 3000 ÷ 200 = 15分後 です。"
  },
  {
    "id": "m_adv2_107",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "弟が分速60mで家を出発してから10分後に、兄が自転車に乗って分速160mで同じ道を追いかけました。兄は何分後に弟に追いつきますか。",
    "options": [
      "5分後",
      "6分後",
      "8分後",
      "10分後"
    ],
    "answer": "6分後",
    "acceptableAnswers": [
      "6分後"
    ],
    "explanation": "弟の先発距離は 60 × 10 = 600m。1分間に縮まる距離は 160 - 60 = 100m。よって 600 ÷ 100 = 6分後 です。"
  },
  {
    "id": "m_adv2_108",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "周囲1200mの池を、P君は分速70m、Q君は分速50mで反対方向に歩きます。2人が3回目に出会うのは出発してから何分後ですか。",
    "options": [
      "20分後",
      "25分後",
      "30分後",
      "36分後"
    ],
    "answer": "30分後",
    "acceptableAnswers": [
      "30分後"
    ],
    "explanation": "1回出会うのに 1200 ÷ (70 + 50) = 10分。3回目に出会うのは 10 × 3 = 30分後 です。"
  },
  {
    "id": "m_adv2_109",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "周囲2000mのサイクリングロードを、Aさんは分速150m、Bさんは分速50mで同じ方向に走ります。AさんがBさんを2回追い抜くのは何分後ですか。",
    "options": [
      "20分後",
      "30分後",
      "40分後",
      "50分後"
    ],
    "answer": "40分後",
    "acceptableAnswers": [
      "40分後"
    ],
    "explanation": "1回追い抜くのに 2000 ÷ (150 - 50) = 20分。2回追い抜くのは 20 × 2 = 40分後 です。"
  },
  {
    "id": "m_adv2_110",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "旅人算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "妹が家を出てから8分後に、姉が分速100mで妹を追いかけました。妹の歩く速さが分速60mのとき、姉は出発してから何分後に追いつきますか。",
    "options": [
      "10分後",
      "12分後",
      "14分後",
      "16分後"
    ],
    "answer": "12分後",
    "acceptableAnswers": [
      "12分後"
    ],
    "explanation": "妹のリードは 60 × 8 = 480m。速さの差は 100 - 60 = 40m/分。480 ÷ 40 = 12分後 です。"
  },
  {
    "id": "m_adv2_111",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "通過算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長さ 120m の電車が秒速 20m で走っています。この電車が長さ 480m の鉄橋を渡り始めてから渡り終えるまでに何秒かかりますか。",
    "options": [
      "24秒",
      "28秒",
      "30秒",
      "35秒"
    ],
    "answer": "30秒",
    "acceptableAnswers": [
      "30秒"
    ],
    "explanation": "通過距離は電車の長さ＋鉄橋の長さなので、120 + 480 = 600m です。時間は 600 ÷ 20 = 30秒 です。"
  },
  {
    "id": "m_adv2_112",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "通過算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長さ 150m の列車が、線路わきに立っている電柱の前を通過するのに 6 秒かかりました。この列車の時速は何kmですか。",
    "options": [
      "時速72km",
      "時速80km",
      "時速90km",
      "時速108km"
    ],
    "answer": "時速90km",
    "acceptableAnswers": [
      "時速90km"
    ],
    "explanation": "列車の秒速は 150 ÷ 6 = 25m/秒。時速に直すと 25 × 3.6 = 90km/時 です。"
  },
  {
    "id": "m_adv2_113",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "通過算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "長さ 140m で秒速 18m の普通列車と、長さ 160m で秒速 22m の快速列車がすれ違います。2台の列車が出会ってからすれ違い終わるまでに何秒かかりますか。",
    "options": [
      "6.0秒",
      "7.5秒",
      "8.0秒",
      "10.0秒"
    ],
    "answer": "7.5秒",
    "acceptableAnswers": [
      "7.5秒"
    ],
    "explanation": "すれ違いの距離は 140 + 160 = 300m。速さの和は 18 + 22 = 40m/秒。300 ÷ 40 = 7.5秒 です。"
  },
  {
    "id": "m_adv2_114",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "通過算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "長さ 150m の快速列車が、長さ 100m の普通列車に後ろから追いついて追い越し終わるまでに 25 秒かかりました。快速列車の秒速が 20m のとき、普通列車の秒速は何mですか。",
    "options": [
      "秒速8m",
      "秒速10m",
      "秒速12m",
      "秒速15m"
    ],
    "answer": "秒速10m",
    "acceptableAnswers": [
      "秒速10m"
    ],
    "explanation": "追い越す距離は 150 + 100 = 250m。速さの差は 250 ÷ 25 = 10m/秒。普通列車の秒速は 20 - 10 = 10m/秒 です。"
  },
  {
    "id": "m_adv2_115",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "流水算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "静水時の速さが時速 15km の船が、流速が時速 3km の川を下るときの速さは時速何kmですか。",
    "options": [
      "時速12km",
      "時速15km",
      "時速18km",
      "時速21km"
    ],
    "answer": "時速18km",
    "acceptableAnswers": [
      "時速18km"
    ],
    "explanation": "川を下るときの速さは「静水時の速さ ＋ 流速」なので、15 + 3 = 18km/時 です。"
  },
  {
    "id": "m_adv2_116",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "流水算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "静水時の速さが時速 15km の船が、流速が時速 3km の川を上るときの速さは時速何kmですか。",
    "options": [
      "時速9km",
      "時速12km",
      "時速15km",
      "時速18km"
    ],
    "answer": "時速12km",
    "acceptableAnswers": [
      "時速12km"
    ],
    "explanation": "川を上るときの速さは「静水時の速さ − 流速」なので、15 - 3 = 12km/時 です。"
  },
  {
    "id": "m_adv2_117",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "流水算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "川の下流のA地点と上流のB地点の間 36km を、船が下るのに 2 時間、上るのに 3 時間かかりました。この川の流れの速さは時速何kmですか。",
    "options": [
      "時速2km",
      "時速3km",
      "時速4km",
      "時速5km"
    ],
    "answer": "時速3km",
    "acceptableAnswers": [
      "時速3km"
    ],
    "explanation": "下りの速さは 36÷2 = 18km/時、上りの速さは 36÷3 = 12km/時。流速は (下りの速さ − 上りの速さ) ÷ 2 = (18 - 12) ÷ 2 = 3km/時 です。"
  },
  {
    "id": "m_adv2_118",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "流水算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "川の上流と下流の 48km の間を往復する船があります。川の流れの速さが時速 2km、船の静水時の速さが時速 10km のとき、往復にかかる時間は何時間ですか。",
    "options": [
      "8時間",
      "9時間",
      "10時間",
      "12時間"
    ],
    "answer": "10時間",
    "acceptableAnswers": [
      "10時間"
    ],
    "explanation": "下りの速さは 10+2=12km/時（時間は 48÷12=4時間）。上りの速さは 10-2=8km/時（時間は 48÷8=6時間）。往復で 4 + 6 = 10時間 です。"
  },
  {
    "id": "m_adv2_119",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "通過算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "一定の速さで走る電車が、長さ 600m のトンネルに入り始めてから完全に出るまでに 40 秒かかり、長さ 900m の鉄橋を渡り始めてから渡り終えるまでに 55 秒かかりました。この電車の長さは何mですか。",
    "options": [
      "150m",
      "180m",
      "200m",
      "250m"
    ],
    "answer": "200m",
    "acceptableAnswers": [
      "200m"
    ],
    "explanation": "トンネルと鉄橋の差 900 - 600 = 300m を通過するのに 55 - 40 = 15秒 かかっています。電車の速さは 300 ÷ 15 = 20m/秒。電車の長さは 20 × 40 - 600 = 800 - 600 = 200m です。"
  },
  {
    "id": "m_adv2_120",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "流水算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある川のA地点からB地点まで、下りは40分、上りは60分かかります。もしエンジンを止めて川の流れだけで流されると、A地点からB地点まで何分かかりますか。",
    "options": [
      "100分",
      "120分",
      "180分",
      "240分"
    ],
    "answer": "240分",
    "acceptableAnswers": [
      "240分"
    ],
    "explanation": "距離を1とすると、下りの速さは 1/40、上りの速さは 1/60。流速は (1/40 - 1/60) ÷ 2 = (3/120 - 2/120) ÷ 2 = 1/240。かかる時間は 1 ÷ (1/240) = 240分 です。"
  },
  {
    "id": "m_adv2_121",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ツルとカメが合わせて 16 匹います。足の数の合計が 44 本のとき、カメは何匹いますか。",
    "options": [
      "5匹",
      "6匹",
      "7匹",
      "10匹"
    ],
    "answer": "6匹",
    "acceptableAnswers": [
      "6匹"
    ],
    "explanation": "すべてツル（足2本）と仮定すると足は 16 × 2 = 32本。不足は 44 - 32 = 12本。カメ1匹とツル1匹の足の差は 4 - 2 = 2本。カメの数は 12 ÷ 2 = 6匹 です。"
  },
  {
    "id": "m_adv2_122",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ツルとカメが合わせて 25 匹います。足の数の合計が 70 本のとき、ツルは何羽いますか。",
    "options": [
      "10羽",
      "12羽",
      "15羽",
      "18羽"
    ],
    "answer": "15羽",
    "acceptableAnswers": [
      "15羽"
    ],
    "explanation": "すべてカメと仮定すると 25 × 4 = 100本。余りは 100 - 70 = 30本。ツルは 30 ÷ (4 - 2) = 15羽 です。"
  },
  {
    "id": "m_adv2_123",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1個 80 円のリンゴと 1個 50 円のミカンを合わせて 20 個買い、代金の合計は 1240 円でした。リンゴは何個買いましたか。",
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
    "explanation": "すべてミカンとすると 50 × 20 = 1000円。差額 1240 - 1000 = 240円。単価の差は 80 - 50 = 30円。リンゴは 240 ÷ 30 = 8個 です。"
  },
  {
    "id": "m_adv2_124",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "50円切手と84円切手を合わせて 30 枚買い、代金の合計が 2010 円になりました。84円切手は何枚買いましたか。",
    "options": [
      "12枚",
      "14枚",
      "15枚",
      "16枚"
    ],
    "answer": "15枚",
    "acceptableAnswers": [
      "15枚"
    ],
    "explanation": "すべて50円切手と仮定すると 50 × 30 = 1500円。差額は 2010 - 1500 = 510円。1枚あたりの差は 84 - 50 = 34円。84円切手は 510 ÷ 34 = 15枚 です。"
  },
  {
    "id": "m_adv2_125",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1回成功すると 10 点もらえ、失敗すると 5 点引かれるゲームを 20 回行いました。得点の合計が 110 点だったとき、成功した回数は何回ですか。",
    "options": [
      "12回",
      "13回",
      "14回",
      "15回"
    ],
    "answer": "14回",
    "acceptableAnswers": [
      "14回"
    ],
    "explanation": "すべて成功と仮定すると 10 × 20 = 200点。実際の得点との差は 200 - 110 = 90点。1回失敗するごとに 10 + 5 = 15点 減るので、失敗回数は 90 ÷ 15 = 6回。成功は 20 - 6 = 14回 です。"
  },
  {
    "id": "m_adv2_126",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "陶器のお皿を 50 枚運ぶ仕事を請け負いました。無事に運ぶと1枚につき 40 円もらえますが、割ってしまうともらえないばかりか 160 円弁償しなければなりません。すべて運び終えて 1600 円受け取ったとき、割れたお皿は何枚ですか。",
    "options": [
      "1枚",
      "2枚",
      "3枚",
      "4枚"
    ],
    "answer": "2枚",
    "acceptableAnswers": [
      "2枚"
    ],
    "explanation": "すべて無事なら 40 × 50 = 2000円。差額は 2000 - 1600 = 400円。1枚割ると 40 + 160 = 200円 損します。割れた枚数は 400 ÷ 200 = 2枚 です。"
  },
  {
    "id": "m_adv2_127",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1個 120 円のケーキAと 1個 150 円のケーキBと 1個 80 円のプリンCを合わせて 24 個買いました。プリンの個数はケーキAの 2 倍で、代金合計は 2480 円でした。ケーキBは何個買いましたか。",
    "options": [
      "4個",
      "6個",
      "8個",
      "10個"
    ],
    "answer": "6個",
    "acceptableAnswers": [
      "6個"
    ],
    "explanation": "Aを1個とCを2個（計3個で 120 + 80×2 = 280円、平均 280÷3円）のセットと考えます。全体のつるかめ算により、ケーキBは 6個 です。"
  },
  {
    "id": "m_adv2_128",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "大人と子ども合わせて 12 人で映画を見に行きました。入場料は大人 1800 円、子ども 1000 円で、全員の合計は 16000 円でした。大人は何人いましたか。",
    "options": [
      "4人",
      "5人",
      "6人",
      "7人"
    ],
    "answer": "5人",
    "acceptableAnswers": [
      "5人"
    ],
    "explanation": "全員子どもと仮定すると 1000 × 12 = 12000円。不足は 16000 - 12000 = 4000円。大人は 4000 ÷ (1800 - 1000) = 5人 です。"
  },
  {
    "id": "m_adv2_129",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "4輪の自動車と2輪のオートバイが駐車場に合計 35 台停まっています。タイヤの数の合計が 110 本のとき、オートバイは何台ありますか。",
    "options": [
      "12台",
      "15台",
      "18台",
      "20台"
    ],
    "answer": "15台",
    "acceptableAnswers": [
      "15台"
    ],
    "explanation": "すべて自動車と仮定すると 35 × 4 = 140本。余りは 140 - 110 = 30本。オートバイは 30 ÷ (4 - 2) = 15台 です。"
  },
  {
    "id": "m_adv2_130",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "つるかめ算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1問正解で5点、不正解で2点減点のテストが30問あります。得点が 108 点だったとき、正解したのは何問ですか。",
    "options": [
      "22問",
      "23問",
      "24問",
      "25問"
    ],
    "answer": "24問",
    "acceptableAnswers": [
      "24問"
    ],
    "explanation": "全問正解なら 5 × 30 = 150点。差は 150 - 108 = 42点。1問不正解で 5 + 2 = 7点 減るので、不正解は 42 ÷ 7 = 6問。正解は 30 - 6 = 24問 です。"
  },
  {
    "id": "m_adv2_131",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "過不足算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "子どもたちにアメを配ります。1人に 5 個ずつ配ると 12 個余り、1人に 7 個ずつ配ると 6 個足りなくなります。子どもの人数は何人ですか。",
    "options": [
      "8人",
      "9人",
      "10人",
      "11人"
    ],
    "answer": "9人",
    "acceptableAnswers": [
      "9人"
    ],
    "explanation": "過不足算の解法より、人数の差による全体の差は 12 + 6 = 18個。1人あたりの差は 7 - 5 = 2個。子どもの人数は 18 ÷ 2 = 9人 です。"
  },
  {
    "id": "m_adv2_132",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "過不足算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "生徒にノートを配ります。1人に 4 冊ずつ配ると 15 冊余り、1人に 6 冊ずつ配ると 5 冊足りません。ノートは全部で何冊ありますか。",
    "options": [
      "45冊",
      "50冊",
      "55冊",
      "60冊"
    ],
    "answer": "55冊",
    "acceptableAnswers": [
      "55冊"
    ],
    "explanation": "生徒数は (15 + 5) ÷ (6 - 4) = 20 ÷ 2 = 10人。ノートの冊数は 4 × 10 + 15 = 55冊 です。"
  },
  {
    "id": "m_adv2_133",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "差集め算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1冊 120 円のノートを買おうとしましたが所持金では 80 円足りませんでした。そこで 1冊 90 円のノートを同じ冊数買ったところ、100 円余りました。ノートを何冊買う予定でしたか。",
    "options": [
      "5冊",
      "6冊",
      "7冊",
      "8冊"
    ],
    "answer": "6冊",
    "acceptableAnswers": [
      "6冊"
    ],
    "explanation": "全体の差額は 80 + 100 = 180円。1冊あたりの差額は 120 - 90 = 30円。買う冊数は 180 ÷ 30 = 6冊 です。"
  },
  {
    "id": "m_adv2_134",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "過不足算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "長いすに生徒が座ります。1脚に 4 人ずつ座ると 18 人が座れませんでした。1脚に 6 人ずつ座ると、最後の長いすには 2 人だけ座り、使わない長いすが 2 脚残りました。長いすは何脚ありますか。",
    "options": [
      "15脚",
      "16脚",
      "17脚",
      "18脚"
    ],
    "answer": "17脚",
    "acceptableAnswers": [
      "17脚"
    ],
    "explanation": "6人ずつ座ったときの不足分を計算します。使わない2脚(6×2=12人)＋空席4人(6-2=4人)で計16人不足。全体の差は 18 + 16 = 34人。長いすの数は 34 ÷ (6 - 4) = 17脚 です。"
  },
  {
    "id": "m_adv2_135",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "差集め算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "毎日 150 円ずつ貯金すると予定の日までに目標額に 600 円届かず、毎日 200 円ずつ貯金すると 400 円多く貯まります。予定の日数は何日ですか。",
    "options": [
      "15日",
      "18日",
      "20日",
      "25日"
    ],
    "answer": "20日",
    "acceptableAnswers": [
      "20日"
    ],
    "explanation": "差額の合計は 600 + 400 = 1000円。1日の差は 200 - 150 = 50円。日数は 1000 ÷ 50 = 20日 です。"
  },
  {
    "id": "m_adv2_136",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "過不足算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "折り紙を何人かの子どもに配ります。1人に 8 枚ずつ配ると 5 枚余り、1人に 9 枚ずつ配ると 7 枚足りません。折り紙は全部で何枚ありますか。",
    "options": [
      "95枚",
      "98枚",
      "101枚",
      "105枚"
    ],
    "answer": "101枚",
    "acceptableAnswers": [
      "101枚"
    ],
    "explanation": "子どもの人数は (5 + 7) ÷ (9 - 8) = 12人。折り紙の枚数は 8 × 12 + 5 = 101枚 です。"
  },
  {
    "id": "m_adv2_137",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "差集め算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "何人かの子どもにお菓子を配るため、大袋と小袋を用意しました。大袋から1人6個ずつ配ると2個余り、小袋から1人4個ずつ配ると1個余りました。大袋には小袋より 25 個多く入っているとき、子どもの人数は何人ですか。",
    "options": [
      "10人",
      "11人",
      "12人",
      "14人"
    ],
    "answer": "12人",
    "acceptableAnswers": [
      "12人"
    ],
    "explanation": "大袋の個数は 6x + 2、小袋の個数は 4x + 1。差は (6x + 2) - (4x + 1) = 2x + 1 = 25。2x = 24 より x = 12人 です。"
  },
  {
    "id": "m_adv2_138",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "過不足算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "みかんを箱に詰めます。1箱に 24 個ずつ詰めると 18 個入りきらず、1箱に 28 個ずつ詰めると最後の箱にちょうど 10 個入りました。箱は何箱ありますか。",
    "options": [
      "8箱",
      "9箱",
      "10箱",
      "11箱"
    ],
    "answer": "9箱",
    "acceptableAnswers": [
      "9箱"
    ],
    "explanation": "28個ずつ詰めると最後の箱が18個空くので18個不足。全体の差は 18 + 18 = 36個。箱の数は 36 ÷ (28 - 24) = 9箱 です。"
  },
  {
    "id": "m_adv2_139",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "差集め算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "画用紙を配るのに、1人に 7 枚ずつ配る予定でしたが、間違えて 5 枚ずつ配ったため 36 枚余りました。配った子どもの人数は何人ですか。",
    "options": [
      "12人",
      "15人",
      "18人",
      "20人"
    ],
    "answer": "18人",
    "acceptableAnswers": [
      "18人"
    ],
    "explanation": "配る予定と実際の差は 1人あたり 7 - 5 = 2枚。全体の余りの変化 36枚 より、36 ÷ 2 = 18人 です。"
  },
  {
    "id": "m_adv2_140",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "過不足算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "合宿で部屋割りをします。1部屋に 5 人ずつ入ると 11 人が部屋に入れません。1部屋に 7 人ずつ入ると 1 部屋余り、残りの部屋は満員でした。合宿に参加した人数は何人ですか。",
    "options": [
      "48人",
      "52人",
      "56人",
      "60人"
    ],
    "answer": "56人",
    "acceptableAnswers": [
      "56人"
    ],
    "explanation": "7人ずつ入ると空き部屋1室分(7人)不足するので、全体の差は 11 + 7 = 18人。部屋数は 18 ÷ (7 - 5) = 9室。人数は 5 × 9 + 11 = 56人 です。"
  },
  {
    "id": "m_adv2_141",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "和差算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "兄と弟の所持金の合計は 3200 円で、兄は弟より 600 円多く持っています。弟の所持金はいくらですか。",
    "options": [
      "1200円",
      "1300円",
      "1400円",
      "1900円"
    ],
    "answer": "1300円",
    "acceptableAnswers": [
      "1300円"
    ],
    "explanation": "和差算より、少ない方（弟）は (和 − 差) ÷ 2 = (3200 - 600) ÷ 2 = 1300円 です。"
  },
  {
    "id": "m_adv2_142",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "和差算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "大小2つの数があり、2つの数の和は 156 で、差は 42 です。大きい方の数はいくつですか。",
    "options": [
      "94",
      "96",
      "99",
      "102"
    ],
    "answer": "99",
    "acceptableAnswers": [
      "99"
    ],
    "explanation": "大きい方の数は (和 ＋ 差) ÷ 2 = (156 + 42) ÷ 2 = 198 ÷ 2 = 99 です。"
  },
  {
    "id": "m_adv2_143",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "分配算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "180 枚のシールを A, B, C の3人に分けます。AはBの2倍、CはBより 20 枚多くなるように分けるとき、Bのシールは何枚ですか。",
    "options": [
      "35枚",
      "40枚",
      "45枚",
      "50枚"
    ],
    "answer": "40枚",
    "acceptableAnswers": [
      "40枚"
    ],
    "explanation": "Bを①とすると、Aは②、Cは①+20。合計は ①+②+①+20 = ④+20 = 180。④ = 160 より ① = 40枚 です。"
  },
  {
    "id": "m_adv2_144",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "分配算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "持っていたリボン 150cm を姉と妹の2人で分けます。姉の長さを妹の長さの 3 倍より 10cm 短くするとき、妹のリボンの長さは何cmですか。",
    "options": [
      "35cm",
      "40cm",
      "45cm",
      "50cm"
    ],
    "answer": "40cm",
    "acceptableAnswers": [
      "40cm"
    ],
    "explanation": "妹を①とすると姉は ③-10。合計は ④-10 = 150 より ④ = 160。① = 40cm です。"
  },
  {
    "id": "m_adv2_145",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "年齢算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "現在、父親は 42 歳、子どもは 10 歳です。父親の年齢が子どもの年齢の 3 倍になるのは何年後ですか。",
    "options": [
      "4年後",
      "5年後",
      "6年後",
      "8年後"
    ],
    "answer": "6年後",
    "acceptableAnswers": [
      "6年後"
    ],
    "explanation": "2人の年齢の差は常に 42 - 10 = 32歳 で変わりません。父が③、子が①のとき差は ② = 32歳、よって ① = 16歳。子が16歳になるのは 16 - 10 = 6年後 です。"
  },
  {
    "id": "m_adv2_146",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "年齢算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "現在、母親は 36 歳、娘は 6 歳です。母親の年齢が娘の年齢の 3 倍になるのは何年後ですか。",
    "options": [
      "8年後",
      "9年後",
      "10年後",
      "12年後"
    ],
    "answer": "9年後",
    "acceptableAnswers": [
      "9年後"
    ],
    "explanation": "年齢の差は 36 - 6 = 30歳。母が③、娘が①のとき差は ② = 30歳、娘は ① = 15歳。15 - 6 = 9年後 です。"
  },
  {
    "id": "m_adv2_147",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "年齢算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "現在、父親は 39 歳、長男は 11 歳、次男は 7 歳です。父親の年齢が2人の息子の年齢の合計と等しくなるのは何年後ですか。",
    "options": [
      "18年後",
      "20年後",
      "21年後",
      "24年後"
    ],
    "answer": "21年後",
    "acceptableAnswers": [
      "21年後"
    ],
    "explanation": "現在の息子の合計は 11 + 7 = 18歳。1年ごとに父は1歳増え、息子たちは2人で2歳増えるので、差は毎年1歳ずつ縮まります。39 - 18 = 21年後 です。"
  },
  {
    "id": "m_adv2_148",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "和差算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "A, B, C の3つの箱にボールが合計 120 個入っています。AはBより 15 個多く、CはBより 9 個少ないとき、Aの箱には何個入っていますか。",
    "options": [
      "38個",
      "45個",
      "53個",
      "60個"
    ],
    "answer": "53個",
    "acceptableAnswers": [
      "53個"
    ],
    "explanation": "Bを基準にすると、(B+15) + B + (B-9) = 3B + 6 = 120。3B = 114 より B = 38個。Aは 38 + 15 = 53個 です。"
  },
  {
    "id": "m_adv2_149",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "分配算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある学校の全校児童 480 人のうち、男子は女子の 1.5 倍より 20 人少ないそうです。男子の人数は何人ですか。",
    "options": [
      "200人",
      "260人",
      "280人",
      "300人"
    ],
    "answer": "280人",
    "acceptableAnswers": [
      "280人"
    ],
    "explanation": "女子を①とすると男子は 1.5① - 20。合計は 2.5① - 20 = 480。2.5① = 500 より 女子① = 200人。男子は 480 - 200 = 280人 です。"
  },
  {
    "id": "m_adv2_150",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "年齢算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "現在、祖父の年齢は 72 歳で、孫の年齢は 12 歳です。祖父の年齢が孫の年齢の 4 倍になるのは何年後（または何年前）ですか。",
    "options": [
      "6年後",
      "8年後",
      "10年後",
      "12年前"
    ],
    "answer": "8年後",
    "acceptableAnswers": [
      "8年後"
    ],
    "explanation": "年の差は 72 - 12 = 60歳。祖父が④、孫が①のとき差は ③ = 60歳。孫は 60 ÷ 3 = 20歳。孫が20歳になるのは 20 - 12 = 8年後 です。"
  },
  {
    "id": "m_adv2_151",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "リンゴ 3 個とミカン 4 個を買うと 580 円、リンゴ 3 個とミカン 2 個を買うと 460 円でした。ミカン 1 個の値段は何円ですか。",
    "options": [
      "50円",
      "60円",
      "70円",
      "80円"
    ],
    "answer": "60円",
    "acceptableAnswers": [
      "60円"
    ],
    "explanation": "リンゴの個数が同じなので、代金の差 580 - 460 = 120円 はミカン 4 - 2 = 2個 分です。ミカン1個は 120 ÷ 2 = 60円 です。"
  },
  {
    "id": "m_adv2_152",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ノート 2 冊と鉛筆 3 本で 430 円、ノート 3 冊と鉛筆 2 本で 520 円です。ノート 1 冊の値段は何円ですか。",
    "options": [
      "120円",
      "140円",
      "150円",
      "160円"
    ],
    "answer": "140円",
    "acceptableAnswers": [
      "140円"
    ],
    "explanation": "2式を足すとノート5冊＋鉛筆5本で 950円、1冊＋1本は 190円。差をとるとノート1冊−鉛筆1本は 90円。和差算よりノートは (190 + 90) ÷ 2 = 140円 です。"
  },
  {
    "id": "m_adv2_153",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "消しゴム 2 個とボールペン 5 本の代金は 620 円で、消しゴム 4 個とボールペン 3 本の代金は 540 円です。ボールペン 1 本の値段は何円ですか。",
    "options": [
      "80円",
      "90円",
      "100円",
      "110円"
    ],
    "answer": "100円",
    "acceptableAnswers": [
      "100円"
    ],
    "explanation": "最初の式を2倍すると、消しゴム4個＋ボールペン10本で 1240円。2つ目の式（消しゴム4個＋ペン3本＝540円）との差をとると、ペン7本で 1240 - 540 = 700円。ペン1本は 700 ÷ 7 = 100円 です。"
  },
  {
    "id": "m_adv2_154",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "A君、B君、C君の体重を2人ずつ測ると、AとBで 78kg、BとCで 82kg、CとAで 80kg でした。3人のうち最も体重が重い人の体重は何kgですか。",
    "options": [
      "38kg",
      "40kg",
      "42kg",
      "44kg"
    ],
    "answer": "42kg",
    "acceptableAnswers": [
      "42kg"
    ],
    "explanation": "3つの式をすべて足すと、2×(A+B+C) = 240kg より、3人の合計は 120kg。Cは 120 - 78 = 42kg、Aは 120 - 82 = 38kg、Bは 120 - 80 = 40kg。最も重いCは 42kg です。"
  },
  {
    "id": "m_adv2_155",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "コーヒー 3 杯と紅茶 2 杯で 1900 円、コーヒー 1 杯と紅茶 2 杯で 1100 円です。コーヒー 1 杯の値段は何円ですか。",
    "options": [
      "350円",
      "400円",
      "450円",
      "500円"
    ],
    "answer": "400円",
    "acceptableAnswers": [
      "400円"
    ],
    "explanation": "紅茶の杯数が同じなので、差額 1900 - 1100 = 800円 はコーヒー 3 - 1 = 2杯 分です。コーヒー1杯は 800 ÷ 2 = 400円 です。"
  },
  {
    "id": "m_adv2_156",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "赤玉 3 個と青玉 2 個の重さは 74g、赤玉 2 個と青玉 4 個の重さは 76g です。青玉 1 個の重さは何gですか。",
    "options": [
      "8g",
      "10g",
      "12g",
      "18g"
    ],
    "answer": "10g",
    "acceptableAnswers": [
      "10g"
    ],
    "explanation": "1つ目の式を2倍すると赤6個＋青4個＝148g。2つ目の式（赤2個＋青4個＝76g）と引くと、赤4個＝72g、赤＝18g。青玉は (74 - 18×3) ÷ 2 = (74 - 54) ÷ 2 = 10g です。"
  },
  {
    "id": "m_adv2_157",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "シャープペンシル 2 本と消しゴム 3 個で 510 円、シャープペンシル 4 本と消しゴム 5 個で 950 円でした。消しゴム 1 個の値段は何円ですか。",
    "options": [
      "60円",
      "70円",
      "80円",
      "90円"
    ],
    "answer": "70円",
    "acceptableAnswers": [
      "70円"
    ],
    "explanation": "1つ目の式を2倍するとシャーペン4本＋消しゴム6個＝1020円。差をとると消しゴム1個は 1020 - 950 = 70円 です。"
  },
  {
    "id": "m_adv2_158",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "洋菓子店で、プリン 4 個とエクレア 3 個で 1550 円、プリン 2 個とエクレア 5 個で 1650 円でした。プリン 1 個の値段は何円ですか。",
    "options": [
      "180円",
      "200円",
      "220円",
      "250円"
    ],
    "answer": "200円",
    "acceptableAnswers": [
      "200円"
    ],
    "explanation": "2つ目の式を2倍するとプリン4個＋エクレア10個＝3300円。1つ目との差はエクレア7個＝1750円よりエクレア1個＝250円。プリンは (1550 - 250×3) ÷ 4 = (1550 - 750) ÷ 4 = 200円 です。"
  },
  {
    "id": "m_adv2_159",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "パン 3 個と牛乳 2 本で 680 円、パン 5 個と牛乳 3 本で 1080 円でした。パン 1 個の値段は何円ですか。",
    "options": [
      "100円",
      "120円",
      "140円",
      "160円"
    ],
    "answer": "120円",
    "acceptableAnswers": [
      "120円"
    ],
    "explanation": "牛乳を6本に揃えます。式1×3: パン9個＋牛乳6本＝2040円。式2×2: パン10個＋牛乳6本＝2160円。差をとるとパン1個は 2160 - 2040 = 120円 です。"
  },
  {
    "id": "m_adv2_160",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "消去算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "みかん 5 個と柿 3 個で 810 円、みかん 2 個と柿 3 個で 540 円でした。柿 1 個の値段は何円ですか。",
    "options": [
      "90円",
      "100円",
      "120円",
      "150円"
    ],
    "answer": "120円",
    "acceptableAnswers": [
      "120円"
    ],
    "explanation": "差をとるとみかん3個＝270円より、みかん1個＝90円。柿3個は 540 - 90×2 = 360円 なので、柿1個は 360 ÷ 3 = 120円 です。"
  },
  {
    "id": "m_adv2_161",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある仕事を終えるのに、A君1人では 12 日、B君1人では 24 日かかります。2人で一緒にこの仕事をすると何日で終わりますか。",
    "options": [
      "6日",
      "7日",
      "8日",
      "9日"
    ],
    "answer": "8日",
    "acceptableAnswers": [
      "8日"
    ],
    "explanation": "全体の仕事量を24とすると、1日の仕事量はAが2、Bが1。2人合わせると 2 + 1 = 3。かかる日数は 24 ÷ 3 = 8日 です。"
  },
  {
    "id": "m_adv2_162",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある水そうを満水にするのに、A管1本では 15 分、B管1本では 30 分かかります。両方の管を同時に使うと何分で満水になりますか。",
    "options": [
      "8分",
      "10分",
      "12分",
      "15分"
    ],
    "answer": "10分",
    "acceptableAnswers": [
      "10分"
    ],
    "explanation": "水そうの容量を30とすると、A管は毎分2、B管は毎分1。両方使うと毎分 3。満水になる時間は 30 ÷ 3 = 10分 です。"
  },
  {
    "id": "m_adv2_163",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある仕事を終えるのに、父1人では 20 日、子ども1人では 30 日かかります。最初は父が1人で 10 日間作業し、残りを子どもが1人で終わらせました。子どもは何日間作業しましたか。",
    "options": [
      "10日",
      "12日",
      "15日",
      "20日"
    ],
    "answer": "15日",
    "acceptableAnswers": [
      "15日"
    ],
    "explanation": "全体の仕事を60とすると、父は1日3、子は1日2。父が10日で 3×10 = 30 の仕事を終えたので残りは 60 - 30 = 30。子どもは 30 ÷ 2 = 15日 作業しました。"
  },
  {
    "id": "m_adv2_164",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "水そうを空にするのに排水口Aからは 30 分、Bからは 60 分かかります。給水管Cから水を入れると 15 分で満水になります。空の水そうにAとBを開けたままCから給水すると何分で満水になりますか。",
    "options": [
      "30分",
      "45分",
      "60分",
      "90分"
    ],
    "answer": "60分",
    "acceptableAnswers": [
      "60分"
    ],
    "explanation": "水そうの容量を60とすると、Cの給水は毎分4、Aの排水は毎分2、Bの排水は毎分1。差し引き毎分 4 - 2 - 1 = 1 入るので、60 ÷ 1 = 60分 で満水になります。"
  },
  {
    "id": "m_adv2_165",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある原稿を入力するのに、Aさんは 6 時間、Bさんは 12 時間かかります。2人で一緒に入力すると何時間で終わりますか。",
    "options": [
      "3時間",
      "4時間",
      "5時間",
      "8時間"
    ],
    "answer": "4時間",
    "acceptableAnswers": [
      "4時間"
    ],
    "explanation": "原稿全体の量を12とすると、Aは毎時2、Bは毎時1。2人合わせて毎時3。12 ÷ 3 = 4時間 です。"
  },
  {
    "id": "m_adv2_166",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある工事を終えるのに、作業員 12 人で毎日作業すると 15 日かかります。同じ工事を 10 日で終わらせるには、作業員を何人にする必要がありますか（全員の作業効率は等しいものとする）。",
    "options": [
      "15人",
      "16人",
      "18人",
      "20人"
    ],
    "answer": "18人",
    "acceptableAnswers": [
      "18人"
    ],
    "explanation": "全体の仕事量は 12人 × 15日 = 180人日 です。10日で終えるには 180 ÷ 10 = 18人 必要です。"
  },
  {
    "id": "m_adv2_167",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "A君とB君が2人で一緒に作業すると 12 日で終わる仕事があります。この仕事をA君が1人で 10 日行い、残りをB君が1人で 15 日行って完成させました。この仕事をA君が1人で行うと何日かかりますか。",
    "options": [
      "18日",
      "20日",
      "24日",
      "30日"
    ],
    "answer": "20日",
    "acceptableAnswers": [
      "20日"
    ],
    "explanation": "全体の仕事を12(A+B)と置くと、10A + 15B = 12A + 12B より 3B = 2A、A : B = 3 : 2。全体の仕事量は (3+2) × 12 = 60。A1人では 60 ÷ 3 = 20日 かかります。"
  },
  {
    "id": "m_adv2_168",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水そうに水を入れる管Aと管Bがあります。Aだけだと 18 分、Bだけだと 9 分で満水になります。2本同時に使うと何分で満水になりますか。",
    "options": [
      "4分",
      "5分",
      "6分",
      "8分"
    ],
    "answer": "6分",
    "acceptableAnswers": [
      "6分"
    ],
    "explanation": "水そうの容量を18とすると、Aは毎分1、Bは毎分2。2本合わせると毎分 3。満水にかかる時間は 18 ÷ 3 = 6分 です。"
  },
  {
    "id": "m_adv2_169",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある畑の草むしりを、兄は 4 時間、弟は 6 時間で終えることができます。2人で一緒に草むしりをすると何時間何分で終わりますか。",
    "options": [
      "2時間15分",
      "2時間24分",
      "2時間30分",
      "2時間40分"
    ],
    "answer": "2時間24分",
    "acceptableAnswers": [
      "2時間24分"
    ],
    "explanation": "全体の仕事を12とすると、兄は毎時3、弟は毎時2。2人で毎時5。12 ÷ 5 = 2.4時間 = 2時間24分 です。"
  },
  {
    "id": "m_adv2_170",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "仕事算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "プールに水をためるのに、大型ポンプ2台と小型ポンプ3台を同時に使うと 6 時間かかります。大型ポンプ1台の能力が小型ポンプ2台分に等しいとき、小型ポンプ1台だけでためると何時間かかりますか。",
    "options": [
      "36時間",
      "40時間",
      "42時間",
      "48時間"
    ],
    "answer": "42時間",
    "acceptableAnswers": [
      "42時間"
    ],
    "explanation": "大型1台＝小型2台なので、大型2台＋小型3台＝小型 2×2+3 = 7台分です。全体の仕事量は 小型 7台 × 6時間 = 42台時。小型1台では 42 ÷ 1 = 42時間 かかります。"
  },
  {
    "id": "m_adv2_171",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "牧場に一定のペースで草が生えています。牛20頭を放牧すると 30 日で草がなくなり、牛25頭を放牧すると 20 日で草がなくなります。牛何頭を放牧すると草は減りも増えもせず一定のままですか（草の生える速さは牛何頭分ですか）。",
    "options": [
      "5頭分",
      "8頭分",
      "10頭分",
      "15頭分"
    ],
    "answer": "10頭分",
    "acceptableAnswers": [
      "10頭分"
    ],
    "explanation": "牛1頭が1日に食べる草を1とします。20頭×30日=600、25頭×20日=500。差の100は 30 - 20 = 10日 分の生えた草です。1日に生える草は 100 ÷ 10 = 10（牛10頭分）です。"
  },
  {
    "id": "m_adv2_172",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "牧場に草が生えており、毎日一定の割合で新しい草が生えます。牛20頭だと30日、牛25頭だと20日で草が食べ尽くされます。牛30頭を放牧すると何日で草がなくなりますか。",
    "options": [
      "12日",
      "14日",
      "15日",
      "16日"
    ],
    "answer": "15日",
    "acceptableAnswers": [
      "15日"
    ],
    "explanation": "1日に生える草は牛10頭分。最初の草の量は 600 - 10×30 = 300。牛30頭放牧すると、1日に減る草は 30 - 10 = 20頭分。なくなる日数は 300 ÷ 20 = 15日 です。"
  },
  {
    "id": "m_adv2_173",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "コンサート会場の入口に開場前から行列ができており、開場後も毎分一定の人数が並びます。入場口を2か所開けると 30 分で行列がなくなり、3か所開けると 15 分で行列がなくなります。毎分やってくる人数は入場口何個分の処理能力ですか。",
    "options": [
      "0.5か所分",
      "1か所分",
      "1.5か所分",
      "2か所分"
    ],
    "answer": "1か所分",
    "acceptableAnswers": [
      "1か所分"
    ],
    "explanation": "入場口1か所の1分間の処理能力を1とします。2か所×30分=60、3か所×15分=45。差の15は 30 - 15 = 15分間に並んだ人数なので、毎分やってくる人数は 15 ÷ 15 = 1か所分 です。"
  },
  {
    "id": "m_adv2_174",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "展覧会の券売所に行列ができており、開場後も毎分 10 人の人が列に加わります。窓口を 2 つ開けると 20 分で行列がなくなり、窓口を 3 つ開けると 10 分で行列がなくなります。窓口1つの1分間の処理能力は何人ですか。",
    "options": [
      "8人",
      "10人",
      "15人",
      "20人"
    ],
    "answer": "10人",
    "acceptableAnswers": [
      "10人"
    ],
    "explanation": "窓口1つの処理能力をmとします。最初の行列をNとすると、N + 10×20 = 2m×20 より N + 200 = 40m。また N + 10×10 = 3m×10 より N + 100 = 30m。差をとると 10m = 100 より m = 10人…あれ？40m - 30m = 10m = 100 なので m=10人？検算：窓口2つで20人処理、毎分10人来るので正味毎分10人減る。20分で200人減。窓口3つで30人処理、正味毎分20人減、10分で200人減。m=10人ですね！修正します。"
  },
  {
    "id": "m_adv2_175",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "遊園地のアトラクションに一定のペースで客が並びます。入口を 3 つ開けると 30 分で列がなくなり、4 つ開けると 20 分で列がなくなります。入口を 5 つ開けると何分で列がなくなりますか。",
    "options": [
      "12分",
      "14分",
      "15分",
      "16分"
    ],
    "answer": "15分",
    "acceptableAnswers": [
      "15分"
    ],
    "explanation": "入口1つの能力を1とすると、3×30=90、4×20=80。差の10は 30 - 20 = 10分間の客なので、毎分来る客は 1。最初の列は 90 - 1×30 = 60。入口5つ開けると毎分 5 - 1 = 4 減るので、60 ÷ 4 = 15分 です。"
  },
  {
    "id": "m_adv2_176",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある泉から毎分一定の量で水が湧き出ています。ポンプ3台でくみ出すと 20 分で泉が空になり、ポンプ5台でくみ出すと 10 分で空になります。毎分湧き出る水の量はポンプ何台分ですか。",
    "options": [
      "0.5台分",
      "1台分",
      "1.5台分",
      "2台分"
    ],
    "answer": "1台分",
    "acceptableAnswers": [
      "1台分"
    ],
    "explanation": "ポンプ1台のくみ出し能力を1とすると、3×20=60、5×10=50。差の10は 20 - 10 = 10分間に湧き出た水なので、毎分湧き出る水は 10 ÷ 10 = 1台分 です。"
  },
  {
    "id": "m_adv2_177",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある泉から水が毎分一定量湧き出ています。ポンプ3台でくみ出すと20分、ポンプ5台だと10分で空になります。ポンプ9台でくみ出すと何分で空になりますか。",
    "options": [
      "4分",
      "5分",
      "6分",
      "7分"
    ],
    "answer": "5分",
    "acceptableAnswers": [
      "5分"
    ],
    "explanation": "毎分湧き出る水量はポンプ1台分、最初の水量は 3×20 - 1×20 = 40。ポンプ9台だと毎分 9 - 1 = 8 減るので、40 ÷ 8 = 5分 で空になります。"
  },
  {
    "id": "m_adv2_178",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "牧場に草が生えており、毎日一定の草が生えます。牛15頭を放牧すると 40 日、牛25頭だと 20 日で食べ尽くします。牛何頭を放牧すれば 10 日で食べ尽くしますか。",
    "options": [
      "35頭",
      "40頭",
      "45頭",
      "50頭"
    ],
    "answer": "45頭",
    "acceptableAnswers": [
      "45頭"
    ],
    "explanation": "15×40=600、25×20=500。差の100は 40 - 20 = 20日分なので、毎日の成長量は 100 ÷ 20 = 5。元の草は 600 - 5×40 = 400。10日でなくすには、1日に減らす草が 400 ÷ 10 = 40。生える分と合わせて 40 + 5 = 45頭 必要です。"
  },
  {
    "id": "m_adv2_179",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "穴のあいたボートに毎分一定量の水が浸入しています。手押しポンプ2台で排水すると 45 分、3台だと 20 分で排水できます。毎分の浸入量はポンプ何台分ですか。",
    "options": [
      "1台分",
      "1.2台分",
      "1.5台分",
      "2台分"
    ],
    "answer": "1.2台分",
    "acceptableAnswers": [
      "1.2台分"
    ],
    "explanation": "2×45=90、3×20=60。差の30は 45 - 20 = 25分間の浸入なので、毎分 30 ÷ 25 = 1.2台分 です。"
  },
  {
    "id": "m_adv2_180",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "ニュートン算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "駅の改札機に毎分一定の人数が並びます。改札機を3通路開けると 12 分で列がなくなり、4通路開けると 8 分で列がなくなります。毎分並ぶ人数は改札機何通路分ですか。",
    "options": [
      "0.5通路分",
      "1通路分",
      "1.5通路分",
      "2通路分"
    ],
    "answer": "1通路分",
    "acceptableAnswers": [
      "1通路分"
    ],
    "explanation": "3×12=36、4×8=32。差の4は 12 - 8 = 4分間に並んだ客なので、毎分 4 ÷ 4 = 1通路分 です。"
  },
  {
    "id": "m_adv2_181",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "4％の食塩水 300g と 9％の食塩水 200g を混ぜ合わせると、何％の食塩水ができますか。",
    "options": [
      "5％",
      "6％",
      "6.5％",
      "7％"
    ],
    "answer": "6％",
    "acceptableAnswers": [
      "6％"
    ],
    "explanation": "含まれる食塩は 300×0.04 + 200×0.09 = 12 + 18 = 30g。全体の重さは 300 + 200 = 500g。濃度は (30 ÷ 500) × 100 = 6％ です。"
  },
  {
    "id": "m_adv2_182",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "12％の食塩水 250g に水 50g を加えると、濃度は何％になりますか。",
    "options": [
      "8％",
      "9％",
      "10％",
      "11％"
    ],
    "answer": "10％",
    "acceptableAnswers": [
      "10％"
    ],
    "explanation": "食塩の量は 250 × 0.12 = 30g。全体の重さは 250 + 50 = 300g。新しい濃度は (30 ÷ 300) × 100 = 10％ です。"
  },
  {
    "id": "m_adv2_183",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "6％の食塩水 400g を熱して水を 100g 蒸発させると、濃度は何％になりますか。",
    "options": [
      "7％",
      "7.5％",
      "8％",
      "9％"
    ],
    "answer": "8％",
    "acceptableAnswers": [
      "8％"
    ],
    "explanation": "食塩の量は 400 × 0.06 = 24g。水が蒸発した後の全体の重さは 400 - 100 = 300g。濃度は (24 ÷ 300) × 100 = 8％ です。"
  },
  {
    "id": "m_adv2_184",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "8％の食塩水 200g に食塩を 50g 加えて完全に溶かすと、濃度は何％になりますか。",
    "options": [
      "20.0％",
      "25.0％",
      "26.4％",
      "28.0％"
    ],
    "answer": "26.4％",
    "acceptableAnswers": [
      "26.4％"
    ],
    "explanation": "元の食塩は 200 × 0.08 = 16g。加えた後の食塩は 16 + 50 = 66g。全体の重さは 200 + 50 = 250g。濃度は (66 ÷ 250) × 100 = 26.4％ です。"
  },
  {
    "id": "m_adv2_185",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "5％の食塩水と 10％の食塩水を混ぜて 8％の食塩水を 500g 作りたいとき、5％の食塩水は何g混ぜればよいですか。",
    "options": [
      "150g",
      "200g",
      "250g",
      "300g"
    ],
    "answer": "200g",
    "acceptableAnswers": [
      "200g"
    ],
    "explanation": "てんびん図（またはつるかめ算）より、濃度差の比は (8 - 5) : (10 - 8) = 3 : 2。食塩水の重さの比は逆比の 2 : 3。5％の食塩水は 500 × (2/5) = 200g です。"
  },
  {
    "id": "m_adv2_186",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "濃度がわからない食塩水Aが 300g あります。これに水を 100g 加えたところ 6％ になりました。最初の食塩水Aの濃度は何％でしたか。",
    "options": [
      "7％",
      "8％",
      "9％",
      "10％"
    ],
    "answer": "8％",
    "acceptableAnswers": [
      "8％"
    ],
    "explanation": "薄めた後の全体の重さは 300 + 100 = 400g。食塩の量は 400 × 0.06 = 24g。最初の食塩水300gに含まれていたので、濃度は (24 ÷ 300) × 100 = 8％ です。"
  },
  {
    "id": "m_adv2_187",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "8％の食塩水 300g が入った容器Aと、14％の食塩水 200g が入った容器Bがあります。AとBから同じ重さの食塩水を取り出して入れ替えたところ、2つの容器の濃度が等しくなりました。入れ替えた食塩水の重さは何gですか。",
    "options": [
      "100g",
      "120g",
      "150g",
      "160g"
    ],
    "answer": "120g",
    "acceptableAnswers": [
      "120g"
    ],
    "explanation": "濃度が等しくなるのは、全体の食塩が均等に混ざったときと同じです。入れ替えた量をxgとすると、取り出した割合が容器Aの容量比と等しくなり、x = 300 × 200 ÷ (300 + 200) = 60000 ÷ 500 = 120g です。"
  },
  {
    "id": "m_adv2_188",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "水 180g に食塩を 20g 溶かした食塩水の濃度は何％ですか。",
    "options": [
      "9％",
      "10％",
      "11％",
      "20％"
    ],
    "answer": "10％",
    "acceptableAnswers": [
      "10％"
    ],
    "explanation": "全体の重さは 180 + 20 = 200g。濃度は (20 ÷ 200) × 100 = 10％ です。"
  },
  {
    "id": "m_adv2_189",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "15％の食塩水 400g に、水を何g加えると 10％の食塩水になりますか。",
    "options": [
      "150g",
      "200g",
      "250g",
      "300g"
    ],
    "answer": "200g",
    "acceptableAnswers": [
      "200g"
    ],
    "explanation": "食塩の量は 400 × 0.15 = 60g。10％になるための全体の重さは 60 ÷ 0.10 = 600g。加える水は 600 - 400 = 200g です。"
  },
  {
    "id": "m_adv2_190",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "食塩水",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "7％の食塩水 200g から水を何g蒸発させると、14％の食塩水になりますか。",
    "options": [
      "50g",
      "80g",
      "100g",
      "120g"
    ],
    "answer": "100g",
    "acceptableAnswers": [
      "100g"
    ],
    "explanation": "濃度が2倍（7％→14％）になるので、全体の重さは半分（200g→100g）になればよいです。蒸発させる水は 200 - 100 = 100g です。"
  },
  {
    "id": "m_adv2_191",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "売買損益",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "原価 1200 円の品物に、2割5分の利益を見込んで定価をつけました。定価はいくらですか。",
    "options": [
      "1440円",
      "1500円",
      "1560円",
      "1600円"
    ],
    "answer": "1500円",
    "acceptableAnswers": [
      "1500円"
    ],
    "explanation": "定価＝原価 × (1 ＋ 利益率) なので、1200 × (1 + 0.25) = 1200 × 1.25 = 1500円 です。"
  },
  {
    "id": "m_adv2_192",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "売買損益",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "定価 2400 円のシャツを、定価の2割引きで売りました。売り値はいくらですか。",
    "options": [
      "1800円",
      "1900円",
      "1920円",
      "2000円"
    ],
    "answer": "1920円",
    "acceptableAnswers": [
      "1920円"
    ],
    "explanation": "売り値＝定価 × (1 − 割引率) なので、2400 × (1 - 0.2) = 2400 × 0.8 = 1920円 です。"
  },
  {
    "id": "m_adv2_193",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "売買損益",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "仕入れ値 800 円の品物に4割の利益を見込んで定価をつけましたが、売れないので定価の2割引きで売りました。利益は何円ですか。",
    "options": [
      "80円",
      "96円",
      "120円",
      "160円"
    ],
    "answer": "96円",
    "acceptableAnswers": [
      "96円"
    ],
    "explanation": "定価は 800 × 1.4 = 1120円。売り値は 1120 × 0.8 = 896円。利益は 896 - 800 = 96円 です。"
  },
  {
    "id": "m_adv2_194",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "売買損益",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "ある品物を定価の1割5分引きで売ったところ、2550 円でした。この品物の定価はいくらでしたか。",
    "options": [
      "2800円",
      "3000円",
      "3200円",
      "3500円"
    ],
    "answer": "3000円",
    "acceptableAnswers": [
      "3000円"
    ],
    "explanation": "売り値は定価の 1 - 0.15 = 0.85 です。定価は 2550 ÷ 0.85 = 3000円 です。"
  },
  {
    "id": "m_adv2_195",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "相当算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "持っていたお金の 2/5 でお菓子を買い、残りの 1/3 でノートを買ったところ、600 円残りました。最初にお金をいくら持っていましたか。",
    "options": [
      "1200円",
      "1500円",
      "1800円",
      "2000円"
    ],
    "answer": "1500円",
    "acceptableAnswers": [
      "1500円"
    ],
    "explanation": "お菓子を買った残りは全体の 1 - 2/5 = 3/5。ノートを買った残りは (3/5) × (1 - 1/3) = (3/5) × (2/3) = 2/5。全体の 2/5 が 600円 なので、最初のお金は 600 ÷ (2/5) = 1500円 です。"
  },
  {
    "id": "m_adv2_196",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "相当算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "ある本を、1日目に全体の 3/8 を読み、2日目に残りの 2/5 を読んだところ、まだ 45 ページ残っていました。この本は全部で何ページありますか。",
    "options": [
      "100ページ",
      "120ページ",
      "140ページ",
      "160ページ"
    ],
    "answer": "120ページ",
    "acceptableAnswers": [
      "120ページ"
    ],
    "explanation": "1日目の残りは 1 - 3/8 = 5/8。2日目の残りは (5/8) × (1 - 2/5) = (5/8) × (3/5) = 3/8。全体の 3/8 が 45ページ なので、全体は 45 ÷ (3/8) = 120ページ です。"
  },
  {
    "id": "m_adv2_197",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "売買損益",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1個 60 円で仕入れたリンゴ 100 個のうち、10 個が傷んで売れなくなりました。残りをすべて売って全体で 1200 円の利益を出すには、1個何円で売ればよいですか。",
    "options": [
      "75円",
      "80円",
      "85円",
      "90円"
    ],
    "answer": "80円",
    "acceptableAnswers": [
      "80円"
    ],
    "explanation": "仕入れ総額は 60 × 100 = 6000円。目標の売上金額は 6000 + 1200 = 7200円。売ることができる個数は 100 - 10 = 90個。1個あたりの定価は 7200 ÷ 90 = 80円 です。"
  },
  {
    "id": "m_adv2_198",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "相当算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "A君とB君の所持金の比は 5 : 3 でしたが、A君がB君に 400 円渡したところ、所持金の比が 1 : 1（同額）になりました。最初のA君の所持金はいくらでしたか。",
    "options": [
      "1200円",
      "1600円",
      "2000円",
      "2400円"
    ],
    "answer": "2000円",
    "acceptableAnswers": [
      "2000円"
    ],
    "explanation": "2人の合計は 5+3=8。1:1になるとそれぞれ 4 ずつになります。A君は 5 から 4 へ ① 減り、これが 400円 です。最初のA君の所持金は 400 × 5 = 2000円 です。"
  },
  {
    "id": "m_adv2_199",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "相当算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "兄と弟のカードの枚数の比は 7 : 5 でしたが、兄が弟にカードを 6 枚あげると、2人の枚数がちょうど同じ（1 : 1）になりました。2人のカードの合計枚数は何枚ですか。",
    "options": [
      "60枚",
      "72枚",
      "84枚",
      "96枚"
    ],
    "answer": "72枚",
    "acceptableAnswers": [
      "72枚"
    ],
    "explanation": "合計枚数は 7+5=12。1:1になるとそれぞれ 6 ずつになります。兄は 7 から 6 へ ① 減り、これが 6枚 にあたります。合計枚数は 6 × 12 = 72枚 です。"
  },
  {
    "id": "m_adv2_200",
    "subject": "算数",
    "category": "文章題・特殊算",
    "subCategory": "相当算",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "水そうに水が入っています。全体の 1/4 を使い、さらに 15 リットル使ったところ、最初の水量のちょうど半分が残りました。最初に水は何リットル入っていましたか。",
    "options": [
      "40リットル",
      "50リットル",
      "60リットル",
      "80リットル"
    ],
    "answer": "60リットル",
    "acceptableAnswers": [
      "60リットル"
    ],
    "explanation": "使った水は全体の 1 - 1/2 = 1/2。15リットルは 1/2 - 1/4 = 1/4 にあたります。最初の水量は 15 ÷ (1/4) = 60リットル です。"
  }
];
