import fs from 'fs';

const sampleQuizPath = 'src/data/sampleQuiz.json';
const data = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf8'));

// 1. Direct ID overrides for maximum precision
const idOverrides = {
  // 国語
  "kokugo_kigo_001": "季語・外来語・季節の季語の識別",
  "kokugo_kigo_006": "季語・外来語・季節の季語の識別",
  "kokugo_kigo_014": "季語・外来語・季節の季語の識別",
  "kokugo_kigo_029": "季語・外来語・季節の季語の識別",
  "kokugo_kigo_035": "季語・外来語・季節の季語の識別",
  "kokugo_kigo_045": "季語・外来語・季節の季語の識別",

  // 算数
  "m_num_033": "整数の性質・平方数の個数の規則性",
  "m_num_044": "数の性質・累乗の一の位の周期性",
  "m_num_052": "数の性質・素数の個数と性質",
  "m_num_054": "数の性質・累乗の一の位の周期性",
  "m_num_072": "数の規則性・循環小数の周期性",
  "m_comb_074": "場合の数・さいころの出目の条件",
  "m_solid_003": "立体図形・立方体の切断面の形状",
  "m_solid_020": "立体図形・円すいの高さと展開図",

  // 理科
  "s_bio_plant_2": "植物のつくりとはたらき・水分調節と気孔の働き",
  "s_phys_force_1": "力のつり合い・ばねののびと重さの比例関係",
  "s_phys_lever_1": "てこのしくみ・てこの規則性と3つの重要位置",
  "sci_bio_p01_13": "身近な植物の観察・スミレの花の受粉戦略",
  "sci_bio_p02_04": "種子をつくらない植物・シダやコケのふえ方",
  "sci_bio_p02_10": "動物の生活とからだ・環境への適応とからだの色",
  "sci_bio_p02_12": "動物の生活とからだ・鳥類の骨と効率的な呼吸器官",
  "sci_bio_p02_21": "無脊椎動物のなかま・節足動物の体の構造と外殻",
  "sci_bio_p02_22": "無脊椎動物のなかま・軟体動物の内臓保護と筋肉質の膜",
  "sci_bio_p03_03": "植物のつくりとはたらき・花の土台と食べる部位の由来",
  "sci_bio_p03_08": "生物のからだと細胞・細胞の観察と染色液の反応",
  "sci_bio_p03_10": "水中の小さな生物・せん毛で動く単細胞プランクトン",
  "sci_bio_p03_11": "水中の小さな生物・光合成と運動を行う水中の微生物",
  "sci_bio_p03_19": "植物の呼吸と気体・二酸化炭素の検出実験",
  "sci_bio_p03_20": "葉のつくりとはたらき・気体の出入り口と孔辺細胞",
  "sci_bio_p03_25": "光合成・植物細胞の観察と葉緑体の動き",
  "sci_bio_p04_08": "消化と吸収のしくみ・小腸の内壁構造と効率的な栄養吸収",
  "sci_bio_p04_10": "呼吸のしくみ・肺の微細構造と効率的な気体交換",
  "sci_bio_p04_13": "排出のしくみ・血液中の老廃物のろ過と排出器官",
  "sci_bio_p04_15": "排出のしくみ・原尿からの有用成分の再吸収",
  "sci_bio_p04_16": "血液循環のしくみ・心臓の部屋の構造と全身への拍出",
  "sci_bio_p04_17": "血液循環のしくみ・心臓と肺を結ぶ血管と血液の循環",
  "sci_bio_p04_23": "感覚器官のしくみ・内耳の構造と音の電気信号変換",
  "sci_bio_p05_05": "細胞分裂と生物の成長・細胞分裂における遺伝物質の分配",
  "sci_bio_p05_09": "生物のふえ方・受精を行わない生物のふえ方",
  "sci_bio_p05_12": "生物のふえ方・生殖細胞をつくるための特別な分裂",
  "sci_bio_p05_18": "遺伝のしくみ・エンドウの交配による遺伝規則性の発見",
  "sci_bio_p05_22": "遺伝子の科学・細胞核に含まれる遺伝情報の本体",
  "sci_bio_p05_24": "遺伝子の科学・人工多能性幹細胞の開発と応用",
  "sci_bio_p06_04": "生物の進化・は虫類と鳥類の中間的特徴をもつ化石",
  "sci_chem_p01_03": "有機物と無機物・炭素を含む物質の分類と燃焼の特徴",
  "sci_chem_p01_10": "気体の発生と性質・水素の捕集と可燃性の確認",
  "sci_chem_p01_12": "気体の発生と性質・二酸化炭素の性質と検出法",
  "sci_chem_p01_15": "気体の発生と性質・水に非常によくとける刺激臭の気体",
  "sci_chem_p02_05": "水溶液の性質・酸性・アルカリ性とリトマス試験紙",
  "sci_chem_p02_08": "水溶液の性質・酸性・アルカリ性と指示薬の色の変化",
  "sci_chem_p03_09": "物質の燃焼と変化・炭素を含む物質の分類と性質",
  "sci_chem_p04_08": "物質の状態変化・沸点の違いを利用した液体の分離",
  "sci_chem_p04_12": "水溶液の濃度と溶解度・冷やすことで結晶を取り出す操作",
  "sci_chem_p04_18": "水溶液の中和・酸とアルカリが反応してできる塩",
  "sci_chem_p05_04": "化学変化と熱・熱を発生する化学反応と利用",
  "sci_chem_p05_07": "化学変化と熱・熱を吸収する化学反応のしくみ",
  "sci_phys_p01_05": "光の反射と屈折・光が境界面で折れ曲がる現象",
  "sci_phys_p01_08": "光の反射と屈折・全反射のしくみと光ファイバー",
  "sci_phys_p02_06": "音の性質・音の高さと弦の振動数",
  "sci_phys_p02_09": "音の性質・音の大きさと振幅の関係",
  "sci_phys_p03_07": "電流回路とオームの法則・電圧と電流の比例関係",
  "sci_phys_p03_14": "電流がつくる磁界・コイルを流れる電流と電磁石",
  "sci_phys_p04_06": "物体の運動と速さ・だるま落としと静止の性質",
  "sci_phys_p04_11": "物体の運動と速さ・物体の落下と加速の規則性",
  "sci_phys_p05_05": "仕事と力学的エネルギー・高いところにある物体がもつエネルギー",
  "sci_phys_p05_08": "仕事と力学的エネルギー・動いている物体がもつエネルギー",
  "sci_earth_p01_04": "大地の変化・火山岩と深成岩の冷え固まり方",
  "sci_earth_p01_08": "大地の変化・火成岩に含まれる磁性鉱物",
  "sci_earth_p01_12": "大地の変化・地震の揺れの伝わり方と初期微動",
  "sci_earth_p01_15": "大地の変化・地層が受ける圧力と変形・波打ち",
  "sci_earth_p02_06": "大地の変化・過去の環境を知る手がかりとなる化石",
  "sci_earth_p02_09": "大地の変化・地層の堆積年代を知る手がかりとなる化石",
  "sci_earth_p03_04": "気象の観測と変化・飽和水蒸気量と結露の温度",
  "sci_earth_p03_08": "気象の観測と変化・積乱雲の連なりと集中豪雨",
  "sci_earth_p04_06": "前線と天気の変化・熱帯低気圧の発達と暴風雨",
  "sci_earth_p04_11": "前線と天気の変化・冬の日本海側に大雪をもたらす気団",
  "sci_earth_p04_19": "地球の公転と年周運動・天球上の太陽の通り道と星座",
  "sci_earth_p05_04": "天体の動き・太陽の表面のようすと強い磁場",
  "sci_earth_p05_08": "天体の動き・月が太陽を隠す天体現象",
  "sci_earth_p05_11": "天体の動き・太陽のまわりを公転する天体の仲間",
  "sci_earth_p05_15": "天体の動き・自ら光を放つ恒星と太陽系",
  "sci_earth_p05_18": "天体の動き・月が地球の影に入る天体現象",
  "sci_earth_p06_01": "宇宙の広がり・自ら光り輝く天体の一生",
  "sci_earth_p06_03": "宇宙の広がり・無数の恒星が集まる大集団",
  "sci_adv_bio_020": "マツの受粉と種子の散布・風を利用した散布様式",
  "sci_adv_bio_038": "植物細胞と動物細胞・細胞小器官と染色の特徴",

  // 社会
  "soc_p06_15": "室町時代（産業と経済の発達）・商工業者の同業者組合と特権",
  "soc_p06_17": "室町時代（民衆の成長と一揆）・農民による自治組織と寄合",
  "soc_p07_13": "安土桃山時代（織田信長の統一事業）・商業の自由化と城下町の発展",
  "soc_p08_13": "江戸幕府の対外政策・キリシタン農民の大規模蜂起",
  "soc_p18_20": "現代（オイル・ショックから平成・現代へ）・都市直下型の大規模震災",
  "soc_p18_24": "現代（オイル・ショックから平成・現代へ）・アメリカ発の世界的金融危機",

  // 地理
  "soc_geo_agri_1": "日本の農業・気候に応じた野菜栽培の工夫",
  "soc_geo_p01_09": "地図の見方・地形図の記号・令和制定の新しい地図記号",
  "soc_geo_p01_12": "地図の見方・地球儀と地図・角度を正しく表す正角図法",
  "soc_geo_p01_14": "地図の見方・地球儀と地図・面積を正しく表す正積図法",
  "soc_geo_p01_22": "日本の地形・河川の谷口の堆積地形とその利用",
  "soc_geo_p01_24": "日本の地形・河口付近の低湿地とその利用",
  "soc_geo_p01_25": "日本の地形・川沿いに広がる階段状の段丘地形",
  "soc_geo_p01_27": "日本の地形・複雑に入り組んだ沈水海岸と養殖業",
  "soc_geo_p01_28": "日本の地形・氷河がつくる浸食地形と湾",
  "soc_geo_p01_30": "日本の地形・本州中央部を横断する地溝帯",
  "soc_geo_p01_32": "日本の地形・海溝やプレート境界と巨大地震の想定",
  "soc_geo_p01_33": "日本の地形・自然災害への備えと被害予測地図",
  "soc_geo_p01_38": "日本の気候・山地に挟まれた降水量の少ない地域",
  "soc_geo_p01_42": "日本の気候・北海道の気候の特色と初夏の気候",
  "soc_geo_p02_02": "日本列島の河川・日本屈指の急流河川と勾配",
  "soc_geo_p02_05": "日本列島の島々・南西方面に連なる弧状列島",
  "soc_geo_p02_07": "日本列島の領土・日本の東西南北の端の島",
  "soc_geo_p02_08": "日本列島の領土・東シナ海の島々と排他的経済水域",
  "soc_geo_p02_11": "九州地方・九州最大の河川の下流に広がる平野",
  "soc_geo_p02_12": "九州地方・平野に網の目のように広がる水路網",
  "soc_geo_p02_13": "九州地方・南九州の火山灰性台地と農業の工夫",
  "soc_geo_p02_16": "九州地方・温暖な気候をいかした野菜栽培",
  "soc_geo_p02_17": "九州地方・火山の噴火と防災・島原半島の活火山",
  "soc_geo_p02_20": "九州地方・公害病の発生と環境再生",
  "soc_geo_p02_24": "中国・四国地方・瀬戸内海沿岸の臨海工業地域",
  "soc_geo_p02_28": "中国・四国地方・本州と四国を結ぶ長大架橋ルート",
  "soc_geo_p02_32": "中国・四国地方・温暖な気候をいかした野菜の促成栽培",
  "soc_geo_p02_36": "近畿地方・京都の伝統工芸と絹織物",
  "soc_geo_p02_38": "近畿地方・近畿の水がめと呼ばれる日本最大の古代湖",
  "soc_geo_p02_41": "近畿地方・大阪湾の人工島と国際拠点空港",
  "soc_geo_p03_03": "中部地方・扇状地の地形をいかした果樹栽培",
  "soc_geo_p03_08": "中部地方・日本アルプスの高嶺と中央高地の気候",
  "soc_geo_p03_12": "中部地方・中京工業地帯と輸送機械産業",
  "soc_geo_p03_15": "中部地方・河川下流の低湿地と水害に備えた輪中集落",
  "soc_geo_p03_18": "中部地方・日本海側の冬の気候と伝統産業",
  "soc_geo_p03_23": "関東地方・関東平野をおおう火山灰土と畑作",
  "soc_geo_p03_26": "関東地方・東京湾岸の臨海工業地帯と貿易",
  "soc_geo_p03_29": "関東地方・利根川下流域の水郷地帯と水運",
  "soc_geo_p03_34": "東北地方・津軽平野の果樹栽培と気候",
  "soc_geo_p03_38": "東北地方・太平洋側の初夏の冷たく湿った風",
  "soc_geo_p03_42": "東北地方・伝統的な漆器づくりと地域産業",
  "soc_geo_p04_04": "北海道地方・広大な平野での大規模畑作",
  "soc_geo_p04_08": "北海道地方・冷涼な台地での大規模酪農",
  "soc_geo_p04_12": "北海道地方・オホーツク海沿岸の豊かな自然保護",
  "soc_geo_p04_16": "北海道地方・先住民族の伝統文化と共生",
  "soc_geo_p05_03": "日本の工業・太平洋ベルトと臨海型工業地域",
  "soc_geo_p05_07": "日本の工業・先端技術産業と高速交通網の結びつき",
  "soc_geo_p05_12": "日本の水産業・漁業形態ごとの漁獲量変化",
  "soc_geo_p05_16": "日本の水産業・魚介類を人工的に育てて増やす漁業",
  "soc_geo_p05_21": "日本の貿易・原料輸入と工業製品輸出の構造変化",
  "soc_geo_p05_25": "日本のエネルギー・火力発電とエネルギー自給率",
  "soc_geo_p05_29": "地球環境問題・紫外線増加を防ぐオゾン層保護",
  "soc_geo_p05_34": "自然環境の保護・水鳥の生息地を守る国際湿地条約",
  "soc_geo_p05_35": "自然環境の保護・手つかずの自然林が残る世界自然遺産",
  "soc_geo_p05_36": "地球規模の環境問題・温室効果ガスの増加と気候変動",
  "soc_geo_p05_38": "地球規模の環境問題・大気汚染物質が溶け込んだ降水",
  "soc_geo_p05_41": "世界の地形・ヒマラヤ山脈と世界最高峰の山",
  "soc_geo_p06_02": "世界の気候区分・雨季と乾季がある熱帯の草原気候",
  "soc_geo_p06_04": "世界の気候区分・暖流と偏西風がもたらす西岸の温暖な気候",
  "soc_geo_p06_07": "世界の気候変動・ペルー沖の海水温異常上昇現象",
  "soc_geo_p06_08": "世界の国々・東南アジアで独立を維持した国家",
  "soc_geo_p06_11": "近代のアジア・中国東北部に建国された国家",
  "soc_geo_p06_12": "アフリカ州・多くの植民地が一斉に独立を果たした年",
  "soc_geo_p06_14": "アフリカ州・限られた一次産品輸出に頼る経済体質",
  "soc_geo_p06_17": "アフリカ州・アフリカ大陸北部に広がる世界最大の砂漠",
  "soc_geo_p06_19": "ヨーロッパ州・共通通貨ユーロを導入した地域統合体",
  "soc_geo_p06_20": "ヨーロッパ州・地域統合体からの加盟国離脱問題",
  "soc_geo_p06_26": "北アメリカ州・農業分布の境界となる降水量線",
  "soc_geo_p06_27": "北アメリカ州・肉牛の大規模肥育場のしくみ",
  "soc_geo_p06_30": "世界の生活・中央アジア草原地帯の移動式住居",
  "soc_geo_p06_36": "日本の世界遺産・日本で最初に登録された木造寺院群",
  "soc_geo_p06_38": "日本の世界遺産・信仰の対象と芸術の源泉となった霊峰",
  "soc_geo_p06_39": "日本の世界遺産・伝統的手法による金銀山遺構",
  "soc_geo_p06_41": "世界遺産の分類・自然と文化の両方の価値をもつ遺産",
  "soc_geo_p07_38": "国際協力・政府による開発途上国への資金・技術支援",
  "soc_geo_p07_41": "国際協力・民間主導で国際社会に貢献する非政府組織"
};

console.log("Applying complete sanitization to sampleQuiz.json...");

let directOverrideCount = 0;
let ruleSanitizedCount = 0;

data.forEach((q) => {
  const oldTag = (q.knowledgeTag || '').trim();
  const ans = String(q.answer || '').trim();
  const cleanAns = ans.replace(/[（\(].*?[）\)]/g, '').trim();

  // 1. Direct ID match
  if (idOverrides[q.id]) {
    q.knowledgeTag = idOverrides[q.id];
    directOverrideCount++;
    return;
  }

  // 2. Exact match in tag if tag contains cleanAns
  if (cleanAns && cleanAns.length >= 2 && oldTag.includes(cleanAns)) {
    let newTag = oldTag;

    if (oldTag.includes('・')) {
      const parts = oldTag.split('・');
      const safeParts = parts.map(p => {
        if (!p.includes(cleanAns)) return p;
        let cleaned = p.split(cleanAns).join('').replace(/^[と・、\s]+|[と・、\s]+$/g, '');
        if (cleaned.length < 2) {
          if (q.category === '歴史') return '政治と社会の変遷';
          if (q.category === '地理') return '地域と産業の特色';
          if (q.category === '生物') return '生物の構造とはたらき';
          if (q.category === '化学') return '物質の性質と変化';
          if (q.category === '物理') return '物体の運動と力';
          if (q.category === '地学') return '地球と宇宙の現象';
          return `${q.category}の重要知識`;
        }
        return cleaned;
      });
      newTag = safeParts.filter(Boolean).join('・');
    } else {
      let cleaned = oldTag.split(cleanAns).join('').replace(/^[と・、\s]+|[と・、\s]+$/g, '');
      if (cleaned.length < 2) {
        if (q.category === '歴史') newTag = '日本の歴史・政治の変遷';
        else if (q.category === '地理') newTag = '日本の地理・産業と地形';
        else if (q.category === '生物') newTag = '生物の生活と体のつくり';
        else if (q.category === '化学') newTag = '物質の性質と化学変化';
        else if (q.category === '物理') newTag = '力と運動・エネルギー';
        else if (q.category === '地学') newTag = '大地の変化と天気のようす';
        else newTag = `${q.category || q.subject}の重要事項`;
      } else {
        newTag = cleaned;
      }
    }

    q.knowledgeTag = newTag;
    ruleSanitizedCount++;
  }
});

console.log(`Direct overrides applied: ${directOverrideCount}`);
console.log(`Rule sanitizations applied: ${ruleSanitizedCount}`);

// Verify remaining spoilers
let remainingSpoilers = 0;
const stillSpoiling = [];

data.forEach((q) => {
  const tag = (q.knowledgeTag || '').trim();
  const ans = String(q.answer || '').trim();
  const cleanAns = ans.replace(/[（\(].*?[）\)]/g, '').trim();

  if (cleanAns.length >= 2 && tag.includes(cleanAns)) {
    remainingSpoilers++;
    stillSpoiling.push({ id: q.id, sub: q.subject, tag, ans: cleanAns, q: q.question.slice(0, 30) });
  }
});

console.log(`Remaining exact spoilers count: ${remainingSpoilers}`);
if (remainingSpoilers > 0) {
  console.log("Sample remaining spoilers:", stillSpoiling.slice(0, 10));
} else {
  console.log("SUCCESS: 0 exact spoilers remain in sampleQuiz.json!");
  fs.writeFileSync(sampleQuizPath, JSON.stringify(data, null, 2), 'utf8');
  console.log("Updated sampleQuiz.json successfully.");
}
