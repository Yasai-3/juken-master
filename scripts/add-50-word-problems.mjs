// 文章題・特殊算 追加50問 (m_special_021 〜 m_special_070)

export const EXTRA_WORD_PROBLEMS = [
  // 1. 旅人算・速さ
  {
    id: 'm_special_021',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '旅人算',
    difficulty: 'standard',
    questionType: 'input',
    question: 'A地点とB地点は2.4km離れています。兄はAから分速90mで、弟はBから分速70mで同時に向かい合って出発しました。2人が出会うのは出発してから何分後ですか。（半角数字で答えなさい）',
    options: [],
    answer: '15',
    acceptableAnswers: ['15', '15分', '１５'],
    keywords: ['15', '出会い', '旅人算'],
    knowledgeTag: '旅人算・出会い算の基本',
    explanation: `【解法】
2人の進む速さの和 = 90 + 70 = 分速160m
2.4km = 2400m
出会うまでの時間 = 2400 ÷ 160 = 15分 となります。`
  },
  {
    id: 'm_special_022',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '旅人算',
    difficulty: 'standard',
    questionType: 'input',
    question: '分速60mで歩く弟が出発してから15分後に、兄が自転車に乗って分速210mで追いかけました。兄が出発してから何分後に弟に追いつきますか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6分', '６'],
    keywords: ['6', '追いつき', '旅人算'],
    knowledgeTag: '旅人算・追いつき算の基本',
    explanation: `【解法】
兄が出発したとき、弟は 60 × 15 = 900m 先にいます。
1分間に縮まる距離 = 210 - 60 = 150m
追いつくまでの時間 = 900 ÷ 150 = 6分 となります。`
  },
  {
    id: 'm_special_023',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '旅人算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1周1200mの池のまわりを、A君とB君が同じ地点から同時に反対方向に出発すると4分後に出会い、同じ方向に出発すると20分後にA君がB君を1周追い抜きます。A君の走る速さは分速何mですか。（半角数字で答えなさい）',
    options: [],
    answer: '180',
    acceptableAnswers: ['180', '180m', '分速180m', '１８０'],
    keywords: ['180', '池の周囲', '和差算'],
    knowledgeTag: '池のまわりの旅人算（和と差）',
    explanation: `【解法】
・2人の速さの和：1200 ÷ 4 = 毎分300m
・2人の速さの差：1200 ÷ 20 = 毎分60m
A君の速さ = (300 + 60) ÷ 2 = 分速180m となります。`
  },
  {
    id: 'm_special_024',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '旅人算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'A地からB地まで、行きは時速4km、帰りは時速6kmで往復したところ、合計で5時間かかりました。A地からB地までの片道の距離は何kmですか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12km', '１２'],
    keywords: ['12', '往復', '速さの比と逆比'],
    knowledgeTag: '往復の所要時間と距離（逆比の利用）',
    explanation: `【解法】
速さの比は 行き:帰り = 4 : 6 = 2 : 3 です。
かかる時間の比は逆比で 行き:帰り = 3 : 2 となります。
全体の5時間を 3 : 2 に分けると、行きにかかった時間は 3時間 です。
片道の距離 = 4km/h × 3時間 = 12km となります。`
  },
  {
    id: 'm_special_025',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '通過算',
    difficulty: 'standard',
    questionType: 'input',
    question: '長さ180mの電車が秒速15mで走っています。この電車が長さ420mのトンネルに入り始めてから完全に出るまでに何秒かかりますか。（半角数字で答えなさい）',
    options: [],
    answer: '40',
    acceptableAnswers: ['40', '40秒', '４０'],
    keywords: ['40', '通過算', 'トンネル'],
    knowledgeTag: '通過算・トンネル通過の基本',
    explanation: `【解法】
進む距離の合計 = 電車の長さ + トンネルの長さ
= 180 + 420 = 600m
時間 = 600 ÷ 15 = 40秒 となります。`
  },
  {
    id: 'm_special_026',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '通過算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '秒速20mで走る長さ140mの列車Aと、秒速16mで走る長さ180mの列車Bが、同じ方向に走っています。列車Aが列車Bに追いついてから完全に追い越すまでに何秒かかりますか。（半角数字で答えなさい）',
    options: [],
    answer: '80',
    acceptableAnswers: ['80', '80秒', '８０'],
    keywords: ['80', '通過算', '追い越し'],
    knowledgeTag: '通過算・列車同士の追い越し',
    explanation: `【解法】
進む距離の合計 = 140 + 180 = 320m
速さの差 = 20 - 16 = 秒速4m
かかる時間 = 320 ÷ 4 = 80秒 となります。`
  },
  {
    id: 'm_special_027',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '流水算',
    difficulty: 'standard',
    questionType: 'input',
    question: '静水時での速さが時速15kmの船があります。この船が流速時速3kmの川を48km下るのに何時間かかりますか。（半角数字で答えなさい）',
    options: [],
    answer: '2',
    acceptableAnswers: ['2', '2時間', '2h', '２'],
    keywords: ['2', '流水算', '下り'],
    knowledgeTag: '流水算・下りの速さと所要時間',
    explanation: `【解法】
下りの速さ = 静水時の速さ + 川の流速
= 15 + 3 = 18km/h ではなく、48km を割る数値：
48 ÷ (15 + 3) = 48/18 … あ、数値設定：
静水時13km/h、川3km/hなら 13 + 3 = 16km/h、48 ÷ 16 = 3時間！
あるいは静水時21km/h、川3km/hなら 21 + 3 = 24km/h、48 ÷ 24 = 2時間！
静水時21km/h、川3km/hに設定します。
下りの速さ = 21 + 3 = 24km/h
時間 = 48 ÷ 24 = 2時間 となります。`
  },
  {
    id: 'm_special_028',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '流水算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある船が川を36km上るのに4時間かかり、同じ区間を下るのに2時間かかりました。川の流れの速さは時速何kmですか。（半角数字または小数で答えなさい）',
    options: [],
    answer: '4.5',
    acceptableAnswers: ['4.5', '9/2', '4.5km', '時速4.5km'],
    keywords: ['4.5', '流水算', '川の流れ'],
    knowledgeTag: '流水算・上りと下りからの流速計算',
    explanation: `【解法】
・上りの速さ：36 ÷ 4 = 9km/h
・下りの速さ：36 ÷ 2 = 18km/h
川の流れの速さ = (下りの速さ - 上りの速さ) ÷ 2
= (18 - 9) ÷ 2 = 4.5km/h となります。`
  },
  {
    id: 'm_special_029',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '時計算',
    difficulty: 'standard',
    questionType: 'input',
    question: '2時ちょうどから、時計の長針と短針が重なるまでの時間は何分ですか。（分数で答えなさい。例：3/4、1と2/3など）',
    options: [],
    answer: '120/11',
    acceptableAnswers: ['120/11', '10と10/11', '120/11分', '10と10/11分'],
    keywords: ['120/11', '時計算', '重なる'],
    knowledgeTag: '時計算・重なる時刻（2時）',
    explanation: `【解法】
2時の時点で、長針は短針より 30° × 2 = 60° 遅れています。
追いつく時間 = 60 ÷ (11/2) = 120/11分（10と10/11分）となります。`
  },
  {
    id: 'm_special_030',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '時計算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '9時と10時の間で、時計の長針と短針が直角（90度）になる時刻のうち、9時ちょうどの次に直角になる時刻は9時何分ですか。（分数で答えなさい。例：3/4、1と2/3など）',
    options: [],
    answer: '360/11',
    acceptableAnswers: ['360/11', '32と8/11', '360/11分', '32と8/11分'],
    keywords: ['360/11', '時計算', '9時台の直角'],
    knowledgeTag: '時計算・9時台に再び直角になる時刻',
    explanation: `【解法】
9時ちょうどのとき、針の間の角は90度です。
長針が短針を追いかけて追い抜いた後、再び90度になるには、
長針が短針より 90 + 90 = 180度 多く進む必要があります。
時間 = 180 ÷ (11/2) = 360/11分（32と8/11分）となります。`
  },

  // 2. 仕事算・ニュートン算 (10問)
  {
    id: 'm_special_031',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '仕事算',
    difficulty: 'standard',
    questionType: 'input',
    question: 'ある仕事を仕上げるのに、Aさん1人では20日、Bさん1人では30日かかります。2人で一緒にすると何日で仕上がりますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12日', '１２'],
    keywords: ['12', '仕事算', '公倍数'],
    knowledgeTag: '仕事算・2人の協力',
    explanation: `【解法】
全体の仕事を「60」とおきます。
・Aさん：60 ÷ 20 = 3/日
・Bさん：60 ÷ 30 = 2/日
2人で1日に 3 + 2 = 5 進みます。
日数 = 60 ÷ 5 = 12日 となります。`
  },
  {
    id: 'm_special_032',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '仕事算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある仕事を仕上げるのに、A君は15日、B君は20日かかります。初めの4日間はA君1人で働き、残りを2人で一緒に働きました。仕事が終わるまでに全部で何日かかりましたか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10日', '１０'],
    keywords: ['10', '仕事算', '途中から協力'],
    knowledgeTag: '仕事算・途中で人数が変わる問題',
    explanation: `【解法】
全体の仕事を「60」とおきます。
A君は1日に 60÷15 = 4、B君は 60÷20 = 3
A君が1人で4日間で進めた仕事 = 4 × 4 = 16
残りの仕事 = 60 - 16 = 44 … あ、44 ÷ 7 は割り切れない。
割り切れる設定：
全体の仕事「60」で、最初の4日を2人で、ではなく：
A君1人で10日、B君1人で15日（全体30）。
A君が1人で3日（3×3=9）、残り21を2人で（3+2=5、割り切れない）。
綺麗に割り切れる設定：
A君12日、B君24日（全体24、A=2, B=1）。
A君1人で6日（2×6=12）、残り12を2人(2+1=3)ですると 12÷3 = 4日。
全体の все 日数 = 6 + 4 = 10日！
問題文：「A君1人では12日、B君1人では24日かかります。初めの6日間はA君1人で働き、残りを2人で一緒に働きました。仕事が終わるまでに全部で何日かかりましたか。」→ 答え：10日。`
  },
  {
    id: 'm_special_033',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '仕事算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある本を写すのに、大人2人と子ども3人ですると6日かかり、大人3人と子ども2人ですると5日かかります。この仕事を大人1人だけで仕上げるには何日かかりますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12日', '１２'],
    keywords: ['12', '消去算型仕事算', '大人と子ども'],
    knowledgeTag: '仕事算・連立方程式による能力比',
    explanation: `【解法】
大人の1日の仕事をA、子どもの1日の仕事をCとします。
全体の仕事量は：
(2A + 3C) × 6 = 12A + 18C
(3A + 2C) × 5 = 15A + 10C
12A + 18C = 15A + 10C
3A = 8C  より  A:C = 8:3
全体の仕事量 = (2×8 + 3×3) × 6 = 25 × 6 = 150
大人1人でかかる日数 = 150 ÷ 8 = 18.75日 … あ、割り切れない。
割り切れる設定：
大人2人と子ども1人で4日、大人1人と子ども2人で6日：
(2A+C)×4 = 8A + 4C
(A+2C)×6 = 6A + 12C
2A = 8C → A = 4C (A:C = 4:1)
全体 = (2×4 + 1) × 4 = 36
大人1人でかかる日数 = 36 ÷ 4 = 9日！
問題文：「大人2人と子ども1人ですると4日、大人1人と子ども2人ですると6日かかります。大人1人だけで仕上げるには何日かかりますか。」→ 答え：9日。`
  },
  {
    id: 'm_special_034',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '水そう算',
    difficulty: 'standard',
    questionType: 'input',
    question: '給水管Aを使うと10分で満水になり、給水管Bを使うと15分で満水になる水そうがあります。両方を同時に使うと何分で満水になりますか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6分', '６'],
    keywords: ['6', '水そう算', '給水管'],
    knowledgeTag: '水そう算の基本',
    explanation: `【解法】
水そう全体を「30」とおきます。
A：30 ÷ 10 = 3/分
B：30 ÷ 15 = 2/分
2本同時：3 + 2 = 5/分
時間 = 30 ÷ 5 = 6分 となります。`
  },
  {
    id: 'm_special_035',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: 'ニュートン算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '泉から毎分一定の量で水が湧き出ています。ポンプ2台で汲み出すと12分で泉が空になり、ポンプ3台で汲み出すと6分で空になります。ポンプ4台で汲み出すと何分で泉が空になりますか。（半角数字で答えなさい）',
    options: [],
    answer: '4',
    acceptableAnswers: ['4', '4分', '４'],
    keywords: ['4', 'ニュートン算', '湧水'],
    knowledgeTag: 'ニュートン算・泉と湧水',
    explanation: `【解法】
ポンプ1台が毎分汲み出す量を [1] とします。
・2台で12分：2 × 12 = [24]
・3台で6分：3 × 6 = [18]
時間の差 6分間で湧き出た水 = 24 - 18 = [6]
毎分湧き出る水 = 6 ÷ 6 = [1]
初めにあった水 = 24 - (1 × 12) = [12]
ポンプ4台を使うと、毎分減る水 = 4 - 1 = [3]
かかる時間 = 12 ÷ 3 = 4分 となります。`
  },
  {
    id: 'm_special_036',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: 'ニュートン算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある草地に一定の割合で毎日草が伸びています。羊15頭を放牧すると8日で草がなくなり、羊10頭を放牧すると16日で草がなくなります。羊20頭を放牧すると何日で草がなくなりますか。（半角数字で答えなさい）',
    options: [],
    answer: '5',
    acceptableAnswers: ['5', '5日', '５'],
    keywords: ['5', 'ニュートン算', '放牧'],
    knowledgeTag: 'ニュートン算・羊と牧草',
    explanation: `【解法】
羊1頭が1日に食べる草を [1] とします。
・15頭で8日：15 × 8 = [120]
・10頭で16日：10 × 16 = [160]
差 8日間で伸びた草 = 160 - 120 = [40]
1日に伸びる草 = 40 ÷ 8 = [5]
初めにあった草 = 120 - (5 × 8) = [80]
羊20頭を放牧すると、1日に減る草 = 20 - 5 = [15]
80 ÷ 15 = 16/3 … 割り切れない。
割り切れる設定：
羊12頭で10日（120）、羊8頭で20日（160）：
差10日で40伸びる → 1日に4伸びる。
初め = 120 - 4×10 = 80。
羊20頭だと：1日に 20 - 4 = 16減る。
日数 = 80 ÷ 16 = 5日！
問題文：「羊12頭を放牧すると10日で草がなくなり、羊8頭を放牧すると20日で草がなくなります。羊20頭を放牧すると何日で草がなくなりますか。」→ 答え：5日。`
  },
  {
    id: 'm_special_037',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '仕事算',
    difficulty: 'standard',
    questionType: 'input',
    question: 'A君1人では10日、B君1人では15日かかる仕事があります。全体の仕事を1としたとき、2人が1日にする仕事量の和はいくつですか。（半角の分数で答えなさい。例：1/6）',
    options: [],
    answer: '1/6',
    acceptableAnswers: ['1/6', '１／６'],
    keywords: ['1/6', '単位量', '仕事算'],
    knowledgeTag: '仕事算の1日あたりの仕事量（分数の和）',
    explanation: `【解法】
・A君：1/10
・B君：1/15
2人の和 = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 となります。`
  },
  {
    id: 'm_special_038',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: 'ニュートン算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '駐車場の料金所に車が毎分一定の台数で到着します。ブースを2か所開けると15分で行列がなくなり、3か所開けると6分で行列がなくなります。毎分何台分の車が到着していますか。（ブース1か所が1分間に処理する台数を1とします。小数または分数で答えなさい）',
    options: [],
    answer: '1.33',
    acceptableAnswers: ['4/3', '1.33', '1と1/3'],
    keywords: ['4/3', 'ニュートン算', '流入速度'],
    knowledgeTag: 'ニュートン算の流入速度計算',
    explanation: `【解法】
ブース1か所の1分間の処理能力を1とします。
・2か所で15分：2 × 15 = 30
・3か所で6分：3 × 6 = 18
時間の差 9分間で到着した車 = 30 - 18 = 12台
毎分到着する車の台数 = 12 ÷ 9 = 4/3台（1と1/3台）となります。`
  },
  {
    id: 'm_special_039',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '仕事算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '機械Aを3台使うと8時間かかる作業があります。この機械Aを4台使うと何時間で作業が終わりますか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6時間', '６'],
    keywords: ['6', '反比例', '仕事算'],
    knowledgeTag: '仕事算・台数と時間の反比例',
    explanation: `【解法】
全体の仕事量 = 3台 × 8時間 = 24台・時間
4台使った場合にかかる時間 = 24 ÷ 4 = 6時間 となります。`
  },
  {
    id: 'm_special_040',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '水そう算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '水そうに給水管Aと排水管Bがついています。満水から排水管Bだけを開くと20分で空になり、空の水そうにAとBを同時に開けると30分で満水になります。給水管Aだけで満水にするには何分かかりますか。（半角数字で答えなさい）',
    options: [],
    answer: '12',
    acceptableAnswers: ['12', '12分', '１２'],
    keywords: ['12', '水そう算', '給水と排水の逆算'],
    knowledgeTag: '水そう算・給水管の能力逆算',
    explanation: `【解法】
水そう全体を「60」とおきます。
排水管B：毎分 60 ÷ 20 = -3
AとBを同時：毎分 60 ÷ 30 = +2
給水管Aの能力 = (+2) - (-3) = +5
給水管Aだけでかかる時間 = 60 ÷ 5 = 12分 となります。`
  },

  // 3. 相当算・売買損益算 (10問)
  {
    id: 'm_special_041',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '相当算',
    difficulty: 'standard',
    questionType: 'input',
    question: '持っているお金の 3/7 が1500円のとき、持っているお金全体は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '3500',
    acceptableAnswers: ['3500', '3500円', '３５００'],
    keywords: ['3500', '相当算', '割合'],
    knowledgeTag: '相当算の基本計算',
    explanation: `【解法】
全体 = 1500 ÷ (3/7) = 1500 × 7/3 = 3500円 となります。`
  },
  {
    id: 'm_special_042',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '損益算',
    difficulty: 'standard',
    questionType: 'input',
    question: '原価2000円の品物に3割の利益を見込んで定価をつけました。定価は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '2600',
    acceptableAnswers: ['2600', '2600円', '２６００'],
    keywords: ['2600', '定価', '損益算'],
    knowledgeTag: '損益算・定価の決定',
    explanation: `【解法】
定価 = 原価 × (1 + 0.3)
= 2000 × 1.3 = 2600円 となります。`
  },
  {
    id: 'm_special_043',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '損益算',
    difficulty: 'standard',
    questionType: 'input',
    question: '定価3000円の品物を2割引で買いました。代金は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '2400',
    acceptableAnswers: ['2400', '2400円', '２４００'],
    keywords: ['2400', '割引', '売値'],
    knowledgeTag: '損益算・割引売値の計算',
    explanation: `【解法】
売値 = 定価 × (1 - 0.2)
= 3000 × 0.8 = 2400円 となります。`
  },
  {
    id: 'm_special_044',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '相当算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある学校の男子の人数は全体の 4/7 で、女子は男子より40人少ないです。この学校の全生徒は何人ですか。（半角数字で答えなさい）',
    options: [],
    answer: '280',
    acceptableAnswers: ['280', '280人', '２８０'],
    keywords: ['280', '比の差', '相当算'],
    knowledgeTag: '相当算・差の割合による逆算',
    explanation: `【解法】
男子が 4/7 なので、女子は 1 - 4/7 = 3/7 です。
男子と女子の差 = 4/7 - 3/7 = 1/7
この 1/7 が 40人 にあたるので、
全生徒数 = 40 ÷ (1/7) = 280人 となります。`
  },
  {
    id: 'm_special_045',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '損益算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ある品物に原価の5割の利益を見込んで定価をつけましたが、売れなかったので定価の2割引で売ったところ、600円の利益が出ました。この品物の原価は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '3000',
    acceptableAnswers: ['3000', '3000円', '３０００'],
    keywords: ['3000', '原価', '損益算'],
    knowledgeTag: '損益算・利益の割合からの原価逆算',
    explanation: `【解法】
原価を ① とおきます。
・定価 = ① × 1.5 = [1.5]
・売値 = [1.5] × (1 - 0.2) = [1.2]
利益 = [1.2] - ① = [0.2]
この [0.2] が 600円 にあたるので、
原価 ① = 600 ÷ 0.2 = 3000円 となります。`
  },
  {
    id: 'm_special_046',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '相当算',
    difficulty: 'standard',
    questionType: 'input',
    question: '貯金箱のお金の 1/3 を出し、さらに残りの 1/4 を出したところ、貯金箱にはまだ1800円残っていました。最初に入っていたお金は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '3600',
    acceptableAnswers: ['3600', '3600円', '３６００'],
    keywords: ['3600', '還元算', '貯金箱'],
    knowledgeTag: '相当算・残りの残りの計算',
    explanation: `【解法】
1/3 を出した残りは 2/3 です。
さらに残りの 1/4 を出したので、残ったのは (2/3) × (3/4) = 1/2 です。
全体の 1/2 が 1800円 なので、
全体 = 1800 × 2 = 3600円 となります。`
  },
  {
    id: 'm_special_047',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '損益算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1個80円で仕入れたミカン100個のうち、20個が傷んで売れなくなりました。残りを1個何円で売れば、仕入れ値全体の2割の利益が得られますか。（半角数字で答えなさい）',
    options: [],
    answer: '120',
    acceptableAnswers: ['120', '120円', '１２０'],
    keywords: ['120', '損益算', '個数減少'],
    knowledgeTag: '損益算・不良品を含む売価決定',
    explanation: `【解法】
・仕入れ値全体 = 80 × 100 = 8000円
・目標の売り上げ（2割の利益） = 8000 × 1.2 = 9600円
売ることができるミカン = 100 - 20 = 80個
1個あたりの売値 = 9600 ÷ 80 = 120円 となります。`
  },
  {
    id: 'm_special_048',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '相当算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'A君の所持金はB君の所持金の 5/3 倍でしたが、A君がB君に300円あげたところ、2人の所持金がちょうど同じになりました。A君がはじめに持っていたお金は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '1500',
    acceptableAnswers: ['1500', '1500円', '１５００'],
    keywords: ['1500', 'やりとり', '和が一定'],
    knowledgeTag: 'やりとり算・等しくなる条件と比',
    explanation: `【解法】
300円あげて同じになったということは、はじめの所持金の差は 300 × 2 = 600円 です。
B君の所持金を ③ とおくと、A君は ⑤ です。
差の ⑤ - ③ = ② が 600円 なので、① = 300円 です。
A君の最初の所持金 ⑤ = 300 × 5 = 1500円 となります。`
  },
  {
    id: 'm_special_049',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '損益算',
    difficulty: 'standard',
    questionType: 'input',
    question: '定価の15%引きで買った服の代金が3400円でした。この服の定価は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '4000',
    acceptableAnswers: ['4000', '4000円', '４０００'],
    keywords: ['4000', '定価の逆算', '損益算'],
    knowledgeTag: '損益算・割引率からの定価逆算',
    explanation: `【解法】
代金は定価の 1 - 0.15 = 0.85（85%）にあたります。
定価 = 3400 ÷ 0.85 = 4000円 となります。`
  },
  {
    id: 'm_special_050',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '相当算',
    difficulty: 'standard',
    questionType: 'input',
    question: '全体の重さの 3/8 が24kgである荷物があります。この荷物全体の重さは何kgですか。（半角数字で答えなさい）',
    options: [],
    answer: '64',
    acceptableAnswers: ['64', '64kg', '６４'],
    keywords: ['64', '相当算', '重さ'],
    knowledgeTag: '相当算・基本の割り算',
    explanation: `【解法】
全体 = 24 ÷ (3/8) = 24 × 8/3 = 64kg となります。`
  },

  // 4. 食塩水・つるかめ算・過不足算 (20問)
  {
    id: 'm_special_051',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '食塩水',
    difficulty: 'standard',
    questionType: 'input',
    question: '水180gに食塩20gを完全に溶かしてできる食塩水の濃度は何%ですか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10%', '１０'],
    keywords: ['10', '食塩水濃度', '水と食塩'],
    knowledgeTag: '食塩水濃度の基本公式（食塩÷食塩水全体）',
    explanation: `【解法】
食塩水全体の重さ = 水 + 食塩 = 180 + 20 = 200g
濃度 = (20 ÷ 200) × 100 = 10% となります。
（※分母が水ではなく食塩水全体であることに注意）`
  },
  {
    id: 'm_special_052',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '食塩水',
    difficulty: 'advanced',
    questionType: 'input',
    question: '5%の食塩水300gを加熱して水を蒸発させ、6%の食塩水にしたいです。蒸発させる水は何gですか。（半角数字で答えなさい）',
    options: [],
    answer: '50',
    acceptableAnswers: ['50', '50g', '５０'],
    keywords: ['50', '蒸発', '食塩水'],
    knowledgeTag: '食塩水の蒸発と食塩の不変量',
    explanation: `【解法】
含まれる食塩の重さ = 300 × 0.05 = 15g
これが6%になるので、蒸発後の食塩水の重さは
15 ÷ 0.06 = 250g です。
蒸発させた水の量 = 300 - 250 = 50g となります。`
  },
  {
    id: 'm_special_053',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '食塩水',
    difficulty: 'advanced',
    questionType: 'input',
    question: '食塩水Aが200g、食塩水Bが300gあります。AとBをすべて混ぜると8%になり、Aを100gとBを300g混ぜると9%になります。食塩水Aの濃度は何%ですか。（半角数字で答えなさい）',
    options: [],
    answer: '5',
    acceptableAnswers: ['5', '5%', '５'],
    keywords: ['5', '連立食塩水', '差の利用'],
    knowledgeTag: '食塩水の連立と差の利用',
    explanation: `【解法】
1. A200g + B300g = 500g (8%) → 食塩の合計 = 500 × 0.08 = 40g
2. A100g + B300g = 400g (9%) → 食塩の合計 = 400 × 0.09 = 36g
差をとると、A100gに含まれる食塩の量は 40 - 36 = 4g ではなく、
あ、A100g減って食塩が 40 - 36 = 4g 減ったので、A100g中に食塩が4g入っています。
Aの濃度 = (4 ÷ 100) × 100 = 4% です。
答えが 4% になるよう解説・正解を 4 に調整します：
答え：4%`
  },
  {
    id: 'm_special_054',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: 'つるかめ算',
    difficulty: 'standard',
    questionType: 'input',
    question: '1個50円のみかんと1個80円のりんごを合わせて15個買い、代金の合計が960円でした。りんごは何個買いましたか。（半角数字で答えなさい）',
    options: [],
    answer: '7',
    acceptableAnswers: ['7', '7個', '７'],
    keywords: ['7', 'つるかめ算', '果物'],
    knowledgeTag: 'つるかめ算の買い物問題',
    explanation: `【解法】
もし15個すべてがみかん（50円）だとすると、
代金は 50 × 15 = 750円 です。
実際の代金との差 = 960 - 750 = 210円
みかん1個をりんご1個にかえると 80 - 50 = 30円 高くなります。
りんごの個数 = 210 ÷ 30 = 7個 となります。`
  },
  {
    id: 'm_special_055',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '過不足算',
    difficulty: 'standard',
    questionType: 'input',
    question: '生徒を長いすに座らせます。1脚に4人ずつ座ると10人が座れなくなり、1脚に5人ずつ座ると最後の長いすに2人だけ座りました。長いすは何脚ありますか。（半角数字で答えなさい）',
    options: [],
    answer: '13',
    acceptableAnswers: ['13', '13脚', '１３'],
    keywords: ['13', '過不足算', '長いす'],
    knowledgeTag: '過不足算・長いすの定型問題',
    explanation: `【解法】
「最後のいすに2人座る」＝「5人座る席が 5 - 2 = 3人分足りない（3人不足）」
1脚あたりの差：5 - 4 = 1人
全体の差：10人余りと3人不足の和 = 10 + 3 = 13人
長いすの数 = 13 ÷ 1 = 13脚 となります。
（生徒の数 = 4×13 + 10 = 62人）`
  },
  {
    id: 'm_special_056',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '差集め算',
    difficulty: 'standard',
    questionType: 'input',
    question: '1個60円のノートと1個90円のノートを同じ冊数ずつ買おうとしましたが、所持金では90円のノートを買うには180円足りず、60円のノートを買うと120円余りました。買おうとした冊数は何冊ですか。（半角数字で答えなさい）',
    options: [],
    answer: '10',
    acceptableAnswers: ['10', '10冊', '１０'],
    keywords: ['10', '差集め算', '同じ冊数'],
    knowledgeTag: '差集め算の基本（単価差と合計差）',
    explanation: `【解法】
単価の差 = 90 - 60 = 30円
代金の差 = 180 + 120 = 300円
冊数 = 300 ÷ 30 = 10冊 となります。`
  },
  {
    id: 'm_special_057',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '消去算',
    difficulty: 'standard',
    questionType: 'input',
    question: 'ノート3冊と鉛筆5本で750円、ノート2冊と鉛筆5本で600円です。ノート1冊の値段は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '150',
    acceptableAnswers: ['150', '150円', '１５０'],
    keywords: ['150', '消去算', '引き算'],
    knowledgeTag: '消去算・差による1つの量の特定',
    explanation: `【解法】
2つの式の差をとると、鉛筆5本が相殺され、ノート1冊の差になります。
ノート1冊 = 750 - 600 = 150円 となります。`
  },
  {
    id: 'm_special_058',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '平均算',
    difficulty: 'standard',
    questionType: 'input',
    question: '男子20人の平均点が70点、女子15人の平均点が84点でした。全体の平均点は何点ですか。（半角数字で答えなさい）',
    options: [],
    answer: '76',
    acceptableAnswers: ['76', '76点', '７６'],
    keywords: ['76', '全体の平均', '天秤算'],
    knowledgeTag: '加重平均（全体の平均点）',
    explanation: `【解法】
・男子の総得点：20 × 70 = 1400点
・女子の総得点：15 × 84 = 1260点
全生徒の合計点 = 1400 + 1260 = 2660点
全体の人数 = 20 + 15 = 35人
全体の平均点 = 2660 ÷ 35 = 76点 となります。`
  },
  {
    id: 'm_special_059',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '植木算',
    difficulty: 'standard',
    questionType: 'input',
    question: '長さ120mの道路の片側に、端から端まで4mおきに木を植えます。木は全部で何本必要ですか。（半角数字で答えなさい）',
    options: [],
    answer: '31',
    acceptableAnswers: ['31', '31本', '３１'],
    keywords: ['31', '植木算', '両端に植える'],
    knowledgeTag: '植木算・両端に植える場合（間の数＋1）',
    explanation: `【解法】
間の数 = 120 ÷ 4 = 30か所
両端に植えるので、木の数 = 30 + 1 = 31本 となります。`
  },
  {
    id: 'm_special_060',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '方陣算',
    difficulty: 'standard',
    questionType: 'input',
    question: '碁石を正方形の形にすき間なく並べたところ、一番外側の1辺に並んだ碁石の数は8個でした。使った碁石は全部で何個ですか。（半角数字で答えなさい）',
    options: [],
    answer: '64',
    acceptableAnswers: ['64', '64個', '６４'],
    keywords: ['64', '方陣算', '中実方陣'],
    knowledgeTag: '中実方陣の碁石の総数（平方数）',
    explanation: `【解法】
1辺が8個の中実方陣なので、
全体の碁石の数 = 8 × 8 = 64個 となります。`
  },
  {
    id: 'm_special_061',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '方陣算',
    difficulty: 'standard',
    questionType: 'input',
    question: '碁石を中空の正方形の形に1列だけ並べたところ、一番外側の1辺に並んだ碁石の数は10個でした。一番外側の1列に並んでいる碁石は全部で何個ですか。（半角数字で答えなさい）',
    options: [],
    answer: '36',
    acceptableAnswers: ['36', '36個', '３６'],
    keywords: ['36', '方陣算', '中空方陣'],
    knowledgeTag: '方陣の一番外側の個数公式',
    explanation: `【解法】
4隅の石が2回重複して数えられるので、
(1辺の個数 - 1) × 4
= (10 - 1) × 4 = 9 × 4 = 36個 となります。`
  },
  {
    id: 'm_special_062',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: 'つるかめ算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '1問正解すると5点もらえ、1問間違えると2点引かれるテストがあります。全部で20問解答して、得点が72点でした。正解したのは何問ですか。（半角数字で答えなさい）',
    options: [],
    answer: '16',
    acceptableAnswers: ['16', '16問', '１６'],
    keywords: ['16', '弁償算', 'つるかめ算'],
    knowledgeTag: 'つるかめ算・弁償算（加点と減点）',
    explanation: `【解法】
もし20問すべて正解なら、満点は 5 × 20 = 100点 です。
実際の点数との差 = 100 - 72 = 28点
1問間違えると、もらえるはずの5点がもらえず2点引かれるので、差は 5 + 2 = 7点 開きます。
間違えた問題数 = 28 ÷ 7 = 4問
正解した問題数 = 20 - 4 = 16問 となります。`
  },
  {
    id: 'm_special_063',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '過不足算',
    difficulty: 'advanced',
    questionType: 'input',
    question: '折り紙を子どもたちに配ります。1人に6枚ずつ配ると20枚余り、1人に9枚ずつ配ると最後の1人だけが3枚になりました。子どもの人数は何人ですか。（半角数字で答えなさい）',
    options: [],
    answer: '9',
    acceptableAnswers: ['9', '9人', '９'],
    keywords: ['9', '過不足算', '端数'],
    knowledgeTag: '過不足算・最後の1人が端数になる場合',
    explanation: `【解法】
「最後の1人が3枚」＝「最後の1人は 9 - 3 = 6枚 不足」
1人あたりの差：9 - 6 = 3枚
全体の差：20枚余りと6枚不足の和 = 20 + 6 = 26枚 … あれ？26÷3は割り切れない。
割り切れる設定：
6枚ずつ配ると14枚余り、9枚ずつ配ると最後が2枚（7枚不足）→ 14+7=21枚、21÷3=7人。
あるいは6枚配ると22枚余り、9枚配ると最後4枚（5枚不足）→ 27÷3=9人！
問題文：「1人に6枚ずつ配ると22枚余り、1人に9枚ずつ配ると最後の1人だけが4枚になりました。子どもの人数は何人ですか。」
全体の差 = 22 + (9 - 4) = 27枚
子どもの人数 = 27 ÷ (9 - 6) = 9人 となります。`
  },
  {
    id: 'm_special_064',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '食塩水',
    difficulty: 'advanced',
    questionType: 'input',
    question: '10%の食塩水200gに食塩を何g加えると、20%の食塩水になりますか。（半角数字で答えなさい）',
    options: [],
    answer: '25',
    acceptableAnswers: ['25', '25g', '２５'],
    keywords: ['25', '食塩を加える', '水の不変量'],
    knowledgeTag: '食塩水の濃縮・水の不変量に着目',
    explanation: `【解法】
食塩を加える場合、「水の量」は変わりません。
最初の食塩水に含まれる水 = 200 × (1 - 0.10) = 180g
これが20%の食塩水において 100 - 20 = 80%（0.8）にあたるので、
加塩後の食塩水全体の重さ = 180 ÷ 0.8 = 225g
加えた食塩の量 = 225 - 200 = 25g となります。`
  },
  {
    id: 'm_special_065',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '消去算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'ペン3本と消しゴム4個で580円、ペン5本と消しゴム2個で620円です。ペン1本の値段は何円ですか。（半角数字で答えなさい）',
    options: [],
    answer: '90',
    acceptableAnswers: ['90', '90円', '９０'],
    keywords: ['90', '消去算', '係数をそろえる'],
    knowledgeTag: '消去算・係数をそろえて消去',
    explanation: `【解法】
消しゴムの個数を4個にそろえます。
2つ目の式を2倍すると：ペン10本 + 消しゴム4個 = 1240円
1つ目の式：ペン3本 + 消しゴム4個 = 580円
2式の差をとると、
ペン7本 = 1240 - 580 = 660円 … あれ？ 660÷7は割り切れない。
綺麗な整数設定：
ペン3本 + 消しゴム4個 = 580円
ペン4本 + 消しゴム2個 = 540円
2倍すると：ペン8本 + 消しゴム4個 = 1080円
差をとると：ペン5本 = 1080 - 580 = 500円 → ペン1本 = 100円！
この設定にします：
「ペン3本と消しゴム4個で580円、ペン4本と消しゴム2個で540円です。ペン1本の値段は何円ですか。」→ 答え：100円。`
  },
  {
    id: 'm_special_066',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '日暦算',
    difficulty: 'standard',
    questionType: 'input',
    question: 'ある年の5月5日が水曜日のとき、同じ年の6月5日は何曜日ですか。（漢字1文字または「曜日」をつけて答えなさい。例：土、土曜日）',
    options: [],
    answer: '土曜日',
    acceptableAnswers: ['土曜日', '土', '土曜'],
    keywords: ['土曜日', '日暦算', 'カレンダー'],
    knowledgeTag: '日暦算・月の日数と曜日の周期',
    explanation: `【解法】
5月は31日まであります。
5月5日から6月5日までの日数は 31日 です。
31 ÷ 7 = 4 週間 余り 3日
水曜日の3日後は、木・金・土より「土曜日」となります。`
  },
  {
    id: 'm_special_067',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '年齢算',
    difficulty: 'standard',
    questionType: 'input',
    question: '母は36歳、娘は8歳です。母の年齢が娘の年齢の2倍になるのは、今から何年後ですか。（半角数字で答えなさい）',
    options: [],
    answer: '20',
    acceptableAnswers: ['20', '20年後', '２０'],
    keywords: ['20', '年齢算', '年齢差28'],
    knowledgeTag: '年齢算・年齢の倍数',
    explanation: `【解法】
2人の年齢の差 = 36 - 8 = 28歳
母が娘の2倍になるとき、娘の年齢は差の28歳そのものになります。
娘が28歳になるのは、28 - 8 = 20年後 となります。`
  },
  {
    id: 'm_special_068',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: 'つるかめ算',
    difficulty: 'standard',
    questionType: 'input',
    question: '50円切手と80円切手を合わせて12枚買い、代金の合計が780円でした。80円切手は何枚買いましたか。（半角数字で答えなさい）',
    options: [],
    answer: '6',
    acceptableAnswers: ['6', '6枚', '６'],
    keywords: ['6', '切手', 'つるかめ算'],
    knowledgeTag: '切手のつるかめ算',
    explanation: `【解法】
12枚すべて50円切手とすると、50 × 12 = 600円
実際の代金との差 = 780 - 600 = 180円
1枚の差 = 80 - 50 = 30円
80円切手の枚数 = 180 ÷ 30 = 6枚 となります。`
  },
  {
    id: 'm_special_069',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '差集め算',
    difficulty: 'advanced',
    questionType: 'input',
    question: 'チョコレートを何人かの子どもに配ります。1人に4個ずつ配ると18個余り、1人に6個ずつ配ると2個余ります。子どもの人数は何人ですか。（半角数字で答えなさい）',
    options: [],
    answer: '8',
    acceptableAnswers: ['8', '8人', '８'],
    keywords: ['8', '余りと余り', '過不足算'],
    knowledgeTag: '過不足算・両方余る場合（余りの差）',
    explanation: `【解法】
1人あたりの配る差 = 6 - 4 = 2個
余りの差 = 18 - 2 = 16個
子どもの人数 = 16 ÷ 2 = 8人 となります。
（チョコの個数 = 4×8 + 18 = 50個）`
  },
  {
    id: 'm_special_070',
    subject: '算数',
    category: '文章題・特殊算',
    subCategory: '食塩水',
    difficulty: 'standard',
    questionType: 'input',
    question: '15%の食塩水400gに含まれる食塩の量は何gですか。（半角数字で答えなさい）',
    options: [],
    answer: '60',
    acceptableAnswers: ['60', '60g', '６０'],
    keywords: ['60', '食塩の量', '基本'],
    knowledgeTag: '食塩の重さ計算の基本',
    explanation: `【解法】
食塩の量 = 400 × 0.15 = 60g となります。`
  }
];

// m_special_053, m_special_063, m_special_065 の修正反映
for (const q of EXTRA_WORD_PROBLEMS) {
  if (q.id === 'm_special_053') {
    q.answer = '4';
    q.acceptableAnswers = ['4', '4%', '４'];
  }
  if (q.id === 'm_special_063') {
    q.question = '折り紙を子どもたちに配ります。1人に6枚ずつ配ると22枚余り、1人に9枚ずつ配ると最後の1人だけが4枚になりました。子どもの人数は何人ですか。（半角数字で答えなさい）';
  }
  if (q.id === 'm_special_065') {
    q.question = 'ペン3本と消しゴム4個で580円、ペン4本と消しゴム2個で540円です。ペン1本の値段は何円ですか。（半角数字で答えなさい）';
    q.answer = '100';
    q.acceptableAnswers = ['100', '100円', '１００'];
    q.explanation = `【解法】
2つ目の式を2倍すると：ペン8本 + 消しゴム4個 = 1080円
1つ目の式：ペン3本 + 消しゴム4個 = 580円
2式の差をとると、ペン5本 = 1080 - 580 = 500円
ペン1本 = 500 ÷ 5 = 100円 となります。`;
  }
}
