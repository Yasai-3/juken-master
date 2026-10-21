import fs from 'fs';
import path from 'path';

const socialPacksDir = path.resolve('src/data/social_packs');
const sciencePacksDir = path.resolve('src/data/science_packs');
const sampleQuizPath = path.resolve('src/data/sampleQuiz.json');
const exportSocialPackPath = path.resolve('社会_資料集全18巻_一括インポート用.json');
const exportGeoPackPath = path.resolve('社会_地理全7巻300問_一括インポート用.json');
const exportBioPackPath = path.resolve('理科_生物全6巻150問_一括インポート用.json');
const exportChemPackPath = path.resolve('理科_物理化学全6巻150問_一括インポート用.json');
const exportEarthPackPath = path.resolve('理科_地学全6巻150問_一括インポート用.json');

const normalizeHistoricalSubCategory = (q) => {
  const s = String(q.subCategory || '');
  const id = String(q.id || '');

  let knowledgeTag = q.knowledgeTag || s;
  if (s.includes('（') && !knowledgeTag.includes(s)) {
    knowledgeTag = `${s}・${knowledgeTag}`;
  }

  let cleanSub = s;
  if (
    s.includes('古代の国名') ||
    s.includes('日本と世界のあゆみ') ||
    s.includes('日本の文化') ||
    s.includes('年の表し方')
  ) {
    cleanSub = '01. 通史・文化史・旧国名・単位';
  } else if (s.includes('人類の出現') || s.includes('古代文明')) {
    cleanSub = '02. 人類の出現と世界の古代文明';
  } else if (s.includes('旧石器') || s.includes('縄文') || s.includes('弥生') || s.includes('古墳')) {
    cleanSub = '03. 旧石器・縄文・弥生・古墳時代';
  } else if (s.includes('飛鳥') || s.includes('奈良')) {
    cleanSub = '04. 飛鳥・奈良時代';
  } else if (s.startsWith('平安時代')) {
    cleanSub = '05. 平安時代';
  } else if (s.startsWith('鎌倉時代')) {
    cleanSub = '06. 鎌倉時代';
  } else if (s.startsWith('室町時代')) {
    cleanSub = '07. 室町時代';
  } else if (s.startsWith('安土桃山') || s.includes('3つの幕府')) {
    cleanSub = '08. 安土桃山時代';
  } else if (s.startsWith('江戸時代')) {
    cleanSub = '09. 江戸時代';
  } else if (
    s.startsWith('近代ヨーロッパ') ||
    s.startsWith('アジアの動き') ||
    s.includes('幕末') ||
    s.includes('開国')
  ) {
    cleanSub = '10. 欧米の近代化と幕末・開国';
  } else if (
    s.includes('明治') ||
    s.includes('自由民権') ||
    s.includes('大日本帝国憲法') ||
    s.includes('日清・日露') ||
    s.includes('日本の領土')
  ) {
    cleanSub = '11. 明治時代（維新・憲法・日清日露）';
  } else if (s.startsWith('大正時代')) {
    cleanSub = '12. 大正時代（大戦・デモクラシー）';
  } else if (s.includes('昭和') || s.includes('大正〜昭和初期')) {
    cleanSub = '13. 昭和時代（戦前〜第二次世界大戦）';
  } else if (s.startsWith('現代') || id.startsWith('soc_p17') || id.startsWith('soc_p18')) {
    cleanSub = '14. 戦後・現代（占領改革〜平成・令和）';
  }

  return {
    ...q,
    subCategory: cleanSub,
    knowledgeTag,
  };
};

const normalizeGeographySubCategory = (q) => {
  const s = String(q.subCategory || '');

  let knowledgeTag = q.knowledgeTag || s;
  if (s && !knowledgeTag.includes(s)) {
    knowledgeTag = `${s}・${knowledgeTag}`;
  }

  let cleanSub = s;
  if (s.includes('地図の見方') || s.includes('日本列島（二）')) {
    cleanSub = '01. 地図の読み方・縮尺・地形図と日本の領域';
  } else if (
    s.includes('日本の地形') ||
    s.includes('日本列島（一）') ||
    s.includes('日本の気候')
  ) {
    cleanSub = '02. 日本の地形・気候区分と自然災害・防災';
  } else if (s.includes('九州地方') || s.includes('中国・四国地方')) {
    cleanSub = '03. 九州地方・中国・四国地方';
  } else if (s.includes('近畿地方') || s.includes('中部地方')) {
    cleanSub = '04. 近畿地方・中部地方';
  } else if (
    s.includes('関東地方') ||
    s.includes('東京湾') ||
    s.includes('東北地方') ||
    s.includes('北海道地方')
  ) {
    cleanSub = '05. 関東地方・東北地方・北海道地方';
  } else if (
    s.includes('日本の農業') ||
    s.includes('日本の水産業') ||
    s.includes('日本の工業') ||
    s.includes('伝統工業')
  ) {
    cleanSub = '06. 日本の農林水産業・工業・エネルギー・伝統工芸';
  } else if (
    s.includes('日本の人口') ||
    s.includes('交通・通信') ||
    s.includes('貿易') ||
    s.includes('海外協力')
  ) {
    cleanSub = '07. 日本の人口・交通通信・貿易・国際協力';
  } else if (
    s.includes('世界の人口') ||
    s.includes('世界の地形') ||
    s.includes('世界の気候') ||
    s.includes('アジア') ||
    s.includes('アフリカ') ||
    s.includes('ヨーロッパ') ||
    s.includes('北アメリカ') ||
    s.includes('世界の生活')
  ) {
    cleanSub = '08. 世界地理（自然・気候・宗教・各州の産業と生活）';
  } else if (
    s.includes('自然環境保護') ||
    s.includes('世界の環境問題') ||
    s.includes('世界遺産') ||
    s.includes('観光') ||
    s.includes('日本の生活・文化') ||
    s.includes('統計資料')
  ) {
    cleanSub = '09. 環境問題・世界遺産・生活文化・重要統計資料';
  }

  return {
    ...q,
    subject: '社会',
    category: '地理',
    subCategory: cleanSub,
    knowledgeTag,
  };
};

const normalizeBiologySubCategory = (q) => {
  const s = String(q.subCategory || '');
  const id = String(q.id || '');

  let knowledgeTag = q.knowledgeTag || s;
  if (s && !knowledgeTag.includes(s)) {
    knowledgeTag = `${s}・${knowledgeTag}`;
  }

  let cleanSub = s;
  if (
    s.includes('身近な自然') ||
    s.includes('植物の観察') ||
    s.includes('身近な野草') ||
    s.includes('日かげ・水辺') ||
    s.includes('被子植物')
  ) {
    cleanSub = '01. 身近な自然の観察・被子植物';
  } else if (
    s.includes('裸子植物') ||
    s.includes('種子をつくらない植物') ||
    s.includes('植物のなかま')
  ) {
    cleanSub = '02. 裸子植物・シダ・コケ・植物の分類';
  } else if (
    s.includes('動物の生活') ||
    s.includes('脊椎動物') ||
    s.includes('無脊椎動物') ||
    s.includes('イヌとネコ')
  ) {
    cleanSub = '03. 動物の分類と生活・からだのつくり';
  } else if (
    s.includes('顕微鏡') ||
    (s.includes('細胞') && !s.includes('細胞分裂')) ||
    s.includes('水中の小さな生物')
  ) {
    cleanSub = '04. 顕微鏡・細胞・水中の小さな生物';
  } else if (
    s.includes('食べる部位') ||
    s.includes('光合成') ||
    s.includes('呼吸と蒸散') ||
    s.includes('葉のつくり') ||
    s.includes('茎・根のつくり') ||
    s.includes('葉・茎・根のつながり')
  ) {
    cleanSub = '05. 植物のつくりとはたらき（光合成・呼吸・蒸散）';
  } else if (
    s.includes('消化と吸収') ||
    s.includes('呼吸のしくみ') ||
    s.includes('排出のしくみ') ||
    s.includes('血液循環')
  ) {
    cleanSub = '06. 人体①（消化・吸収・呼吸・排出・血液循環）';
  } else if (
    s.includes('感覚器官') ||
    s.includes('神経系') ||
    s.includes('刺激への反応') ||
    s.includes('骨格と筋肉')
  ) {
    cleanSub = '07. 人体②（感覚・神経・脳・骨格と筋肉）';
  } else if (
    s.includes('細胞分裂') ||
    s.includes('生物のふえ方') ||
    s.includes('生物の発生') ||
    s.includes('遺伝')
  ) {
    cleanSub = '08. 細胞分裂・生殖・発生・遺伝';
  } else if (
    s.includes('進化') ||
    s.includes('移り変わり') ||
    s.includes('恐竜') ||
    id.startsWith('sci_bio_p06')
  ) {
    cleanSub = '09. 生物の進化と歴史・地質時代';
  }

  return {
    ...q,
    subCategory: cleanSub,
    knowledgeTag,
  };
};

const normalizePhysChemQuestion = (q) => {
  const s = String(q.subCategory || '');
  const id = String(q.id || '');

  let knowledgeTag = q.knowledgeTag || s;
  if (s && !knowledgeTag.includes(s)) {
    knowledgeTag = `${s}・${knowledgeTag}`;
  }

  // PDF 1〜2 は物理分野
  if (id.startsWith('sci_chem_p01') || id.startsWith('sci_chem_p02')) {
    let cleanSub = s;
    if (s.includes('光') || s.includes('音')) {
      cleanSub = '01. 光と音の性質（屈折・凸レンズ・音の伝わり方）';
    } else if (
      s.includes('電気の実験') ||
      s.includes('回路') ||
      s.includes('電流・電圧') ||
      s.includes('電流のはたらき') ||
      s.includes('電気とわたしたち')
    ) {
      cleanSub = '02. 電流と回路・オームの法則・電力と熱量';
    } else if (
      s.includes('静電気') ||
      s.includes('磁界') ||
      s.includes('電磁誘導') ||
      s.includes('家電')
    ) {
      cleanSub = '03. 静電気・電流と磁界・電磁誘導・放射線';
    } else if (
      s.includes('いろいろな力') ||
      s.includes('力のつり合い') ||
      s.includes('水中の物体') ||
      s.includes('力の合成')
    ) {
      cleanSub = '04. 力のつり合い・水圧と浮力・力の合成と分解';
    } else if (
      s.includes('運動') ||
      s.includes('仕事') ||
      s.includes('エネルギー')
    ) {
      cleanSub = '05. 運動と力・仕事と力学的エネルギー・熱の伝わり方';
    }
    return {
      ...q,
      category: '物理',
      subCategory: cleanSub,
      knowledgeTag,
    };
  }

  // PDF 3〜6 は化学分野
  let cleanSub = s;
  if (
    s.includes('実験の基本操作') ||
    s.includes('有機物と無機物') ||
    s.includes('金属の性質') ||
    s.includes('密度')
  ) {
    cleanSub = '01. 実験の基本操作・有機物と無機物・金属・密度';
  } else if (s.includes('気体') || s.includes('熱の科学')) {
    cleanSub = '02. 気体の発生と性質・熱膨張と比熱';
  } else if (s.includes('水溶液') && !s.includes('イオン')) {
    cleanSub = '03. 水溶液の性質・溶解度と再結晶・濃度計算';
  } else if (s.includes('状態変化') || s.includes('融点と沸点')) {
    cleanSub = '04. 物質の状態変化・融点と沸点・蒸留';
  } else if (
    s.includes('物質の分解') ||
    s.includes('原子・分子') ||
    s.includes('元素と周期表') ||
    s.includes('結びつく反応')
  ) {
    cleanSub = '05. 熱分解と電気分解・原子と分子・化合';
  } else if (
    s.includes('酸化と還元') ||
    s.includes('熱の出入り') ||
    s.includes('化学変化のきまり')
  ) {
    cleanSub = '06. 酸化と還元・発熱と吸熱・質量保存と定比例の法則';
  } else if (
    s.includes('イオン') ||
    s.includes('電池') ||
    s.includes('酸性・アルカリ性') ||
    s.includes('中和と塩')
  ) {
    cleanSub = '07. 水溶液とイオン・電池・酸とアルカリ・中和と塩';
  } else if (
    s.includes('物質の利用') ||
    s.includes('エネルギー資源') ||
    s.includes('実験データ')
  ) {
    cleanSub = '08. プラスチックと繊維・環境・化学実験データ計算';
  }

  return {
    ...q,
    category: '化学',
    subCategory: cleanSub,
    knowledgeTag,
  };
};

const normalizeEarthScienceQuestion = (q) => {
  const s = String(q.subCategory || '');
  const id = String(q.id || '');

  let knowledgeTag = q.knowledgeTag || s;
  if (s && !knowledgeTag.includes(s)) {
    knowledgeTag = `${s}・${knowledgeTag}`;
  }

  let cleanSub = s;
  if (s.includes('火山') || s.includes('火成岩')) {
    cleanSub = '01. 火山の噴火と形・火成岩と鉱物';
  } else if (s.includes('地震') || s.includes('プレート')) {
    cleanSub = '02. 地震のゆれと発生・プレートの動き';
  } else if (
    s.includes('地層') ||
    s.includes('大地の観察') ||
    s.includes('地球とその大気')
  ) {
    cleanSub = '03. 地層のでき方・堆積岩と化石・断層としゅう曲';
  } else if (
    s.includes('雲') ||
    s.includes('気象を観測') ||
    s.includes('圧力と大気圧') ||
    s.includes('水のすがた')
  ) {
    cleanSub = '04. 気象観測・気圧・湿度と雲のでき方';
  } else if (
    s.includes('風のふき方') ||
    s.includes('前線') ||
    s.includes('大気の動き') ||
    s.includes('日本の四季と気団') ||
    s.includes('台風') ||
    s.includes('防災')
  ) {
    cleanSub = '05. 前線と天気の変化・日本の四季と気団・台風と防災';
  } else if (
    s.includes('黄道12星座') ||
    s.includes('天体の1日の動き') ||
    s.includes('公転と年周運動') ||
    s.includes('太陽の1年の動き') ||
    s.includes('1年間の星空') ||
    s.includes('四季の星座')
  ) {
    cleanSub = '06. 太陽と星の日周運動・年周運動・四季の星座';
  } else if (
    s.includes('太陽と恒星') ||
    s.includes('太陽系') ||
    s.includes('月と日食・月食')
  ) {
    cleanSub = '07. 太陽と月（満ち欠け・日食と月食）・太陽系の惑星';
  } else if (
    s.includes('宇宙の広がり') ||
    s.includes('宇宙の進化') ||
    id.startsWith('sci_earth_p06')
  ) {
    cleanSub = '08. 恒星の一生・銀河系と宇宙の広がり・宇宙の進化';
  }

  return {
    ...q,
    category: '地学',
    subCategory: cleanSub,
    knowledgeTag,
  };
};

const existingSample = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf8'));
// 既存の初期サンプル（soc_pXX, soc_geo_pXX, sci_bio_pXX, sci_chem_pXX, sci_earth_pXX 以外）を保持
const baseQuestions = existingSample.filter(
  (q) =>
    !String(q.id || '').startsWith('soc_p') &&
    !String(q.id || '').startsWith('soc_geo_p') &&
    !String(q.id || '').startsWith('sci_bio_p') &&
    !String(q.id || '').startsWith('sci_chem_p') &&
    !String(q.id || '').startsWith('sci_earth_p')
);

const historyFiles = fs
  .readdirSync(socialPacksDir)
  .filter((f) => f.startsWith('pdf_') && f.endsWith('.json'))
  .sort();

let allHistoryQuestions = [];
for (const file of historyFiles) {
  const fullPath = path.join(socialPacksDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  if (Array.isArray(data)) {
    const normalized = data.map(normalizeHistoricalSubCategory);
    allHistoryQuestions.push(...normalized);
    console.log(`✓ [社会・歴史] ${file}: ${normalized.length}問`);
  }
}

const geoFiles = fs
  .readdirSync(socialPacksDir)
  .filter((f) => f.startsWith('geo_') && f.endsWith('.json'))
  .sort();

let allGeoQuestions = [];
for (const file of geoFiles) {
  const fullPath = path.join(socialPacksDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  if (Array.isArray(data)) {
    const normalized = data.map(normalizeGeographySubCategory);
    allGeoQuestions.push(...normalized);
    console.log(`✓ [社会・地理] ${file}: ${normalized.length}問`);
  }
}

const bioFiles = fs
  .readdirSync(sciencePacksDir)
  .filter((f) => f.startsWith('bio_') && f.endsWith('.json'))
  .sort();

let allBioQuestions = [];
for (const file of bioFiles) {
  const fullPath = path.join(sciencePacksDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  if (Array.isArray(data)) {
    const normalized = data.map(normalizeBiologySubCategory);
    allBioQuestions.push(...normalized);
    console.log(`✓ [理科・生物] ${file}: ${normalized.length}問`);
  }
}

const chemFiles = fs
  .readdirSync(sciencePacksDir)
  .filter((f) => f.startsWith('chem_') && f.endsWith('.json'))
  .sort();

let allPhysChemQuestions = [];
for (const file of chemFiles) {
  const fullPath = path.join(sciencePacksDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  if (Array.isArray(data)) {
    const normalized = data.map(normalizePhysChemQuestion);
    allPhysChemQuestions.push(...normalized);
    console.log(`✓ [理科・物理/化学] ${file}: ${normalized.length}問`);
  }
}

const earthFiles = fs
  .readdirSync(sciencePacksDir)
  .filter((f) => f.startsWith('earth_') && f.endsWith('.json'))
  .sort();

let allEarthQuestions = [];
for (const file of earthFiles) {
  const fullPath = path.join(sciencePacksDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  if (Array.isArray(data)) {
    const normalized = data.map(normalizeEarthScienceQuestion);
    allEarthQuestions.push(...normalized);
    console.log(`✓ [理科・地学] ${file}: ${normalized.length}問`);
  }
}

const merged = [
  ...baseQuestions,
  ...allHistoryQuestions,
  ...allGeoQuestions,
  ...allBioQuestions,
  ...allPhysChemQuestions,
  ...allEarthQuestions,
];
fs.writeFileSync(sampleQuizPath, JSON.stringify(merged, null, 2), 'utf8');
fs.writeFileSync(exportSocialPackPath, JSON.stringify(allHistoryQuestions, null, 2), 'utf8');
fs.writeFileSync(exportGeoPackPath, JSON.stringify(allGeoQuestions, null, 2), 'utf8');
fs.writeFileSync(exportBioPackPath, JSON.stringify(allBioQuestions, null, 2), 'utf8');
fs.writeFileSync(exportChemPackPath, JSON.stringify(allPhysChemQuestions, null, 2), 'utf8');
fs.writeFileSync(exportEarthPackPath, JSON.stringify(allEarthQuestions, null, 2), 'utf8');

console.log(`========================================`);
console.log(`社会（歴史）: ${historyFiles.length} ファイル / ${allHistoryQuestions.length} 問`);
console.log(`社会（地理）: ${geoFiles.length} ファイル / ${allGeoQuestions.length} 問`);
console.log(`理科（生物）: ${bioFiles.length} ファイル / ${allBioQuestions.length} 問`);
console.log(`理科（物理・化学）: ${chemFiles.length} ファイル / ${allPhysChemQuestions.length} 問`);
console.log(`理科（地学）: ${earthFiles.length} ファイル / ${allEarthQuestions.length} 問`);
console.log(`アプリ内蔵総問題数: ${merged.length} 問`);
