import fs from 'fs';

// 1. 完全手動で修正する「前提抜け28問」
const explicit28Map = {
  // 慣用句
  'kokugo_kan_003': '「頭が下がる」とは相手に対してどのような心情を抱くことか、最も適切な説明を1つ選びなさい。',
  'kokugo_kan_005': '相手の「顔をつぶす」とはどういうことか、最も適切な説明を1つ選びなさい。',
  'kokugo_kan_010': '「目もくれない」とはどのような態度か、最も適切な説明を1つ選びなさい。',
  'kokugo_kan_027': '予算などに対して「足が出る」とはどういうことか、最も適切な説明を1つ選びなさい。',
  'kokugo_kan_045': '先生からの忠告を「肝に銘じる」とはどのように心に留めることか、最も適切な説明を1つ選びなさい。',
  'kokugo_kan_063': '「鶴の一声」とはどのような言葉か、最も適切な説明を1つ選びなさい。',

  // 季語・外来語
  'kokugo_kigo_005': '「春一番」とはどのような気象現象か、最も適切な説明を1つ選びなさい。',
  'kokugo_kigo_024': '「夕立」とはどのような雨か、最も適切な説明を1つ選びなさい。',
  'kokugo_kigo_060': '外来語「アイデンティティ」とはどのような認識か、最も適切な説明を1つ選びなさい。',

  // 故事成語
  'kokugo_koji_006': '「他山の石」を「他人の立派な行動を手本にする」という意味で使うのが誤りである理由として、最も適切なものを1つ選びなさい。',
  'kokugo_koji_059': '「青は藍より出でて藍より青し」という言葉が「弟子が師匠を超える」意味になる理由として、最も適切なものを1つ選びなさい。',
  'kokugo_koji_087': '故事「守株（株を守る）」で、農夫がウサギをもう一度捕まえようとして切り株を見張り続けた行動が愚かである理由として、最も適切なものを1つ選びなさい。',

  // ことわざ
  'kokugo_koto_014': 'ことわざ「可愛い子には旅をさせよ」で、子どもに旅をさせることが愛情といえる理由として最も適切なものを1つ選びなさい。',

  // 和語
  'kokugo_wago_011': '「さりげない気遣い」とはどのような配慮か、最も適切な説明を1つ選びなさい。',
  'kokugo_wago_043': '「つれない態度」とはどのような態度か、最も適切な説明を1つ選びなさい。',

  // 四字熟語
  'kokugo_yoji_007': '「傍若無人な振る舞い」とはどのような振る舞いか、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_012': '「臨機応変な対応」とはどのような対応か、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_027': '「五里霧中の状態」とはどのような状況か、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_030': '「波瀾万丈な人生」とはどのような人生か、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_039': '「紆余曲折を経て合意に達した」とはどのような過程を経たのか、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_043': '「一意専心に取り組む」とはどのような態度か、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_050': '研究開発で「試行錯誤を繰り返す」とはどのように取り組むことか、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_054': '「首尾一貫した主張」とはどのような主張か、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_067': '「一挙両得」とはどのような成果か、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_077': '二つの案が「大同小異である」とはどういうことか、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_080': '「針小棒大に話す」とはどのように話すことか、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_083': '「以心伝心の間柄」とはどのような関係か、最も適切な説明を1つ選びなさい。',
  'kokugo_yoji_088': '「疑心暗鬼に陥る」とはどのような精神状態か、最も適切な説明を1つ選びなさい。',
};

// 2. 末尾重複パターンの整形関数
function cleanQuestionText(id, origText) {
  if (explicit28Map[id]) {
    return explicit28Map[id];
  }

  let text = origText.trim();

  // 重複末尾の除去
  if (text.includes('。として最も適切なものを1つ選びなさい')) {
    text = text.replace(/。として最も適切なものを1つ選びなさい。?$/, '');
    
    // 疑問文・選択指示文で終わっている場合は「。」を付与
    if (text.endsWith('どれですか') || text.endsWith('何といいますか') || text.endsWith('選びなさい')) {
      text = text.endsWith('。') ? text : text + '。';
    } 
    // 「〜を漢字２文字で答えなさい」など
    else if (/を漢字[１２３４5-9一二三四五]+文字で答えなさい$/.test(text)) {
      text = text.replace(/を漢字[１２３４5-9一二三四五]+文字で答えなさい$/, 'として最も適切なものを1つ選びなさい。');
    }
    // 「〜を漢字で答えなさい」など
    else if (/を漢字で答えなさい$/.test(text)) {
      text = text.replace(/を漢字で答えなさい$/, 'として最も適切なものを1つ選びなさい。');
    }
    // 「〜をひらがな○文字で答えなさい」など
    else if (/をひらがな[１２３４5-9一二三四五]+文字で答えなさい$/.test(text)) {
      text = text.replace(/をひらがな[１２３４5-9一二三四五]+文字で答えなさい$/, 'として最も適切なものを1つ選びなさい。');
    }
    // 「〜言葉を漢字として」などの不自然な語順を整理
    else if (/を答えなさい$/.test(text)) {
      text = text.replace(/を答えなさい$/, 'として最も適切なものを1つ選びなさい。');
    }
    else if (/で答えなさい$/.test(text)) {
      text = text.replace(/で答えなさい$/, 'として最も適切なものを1つ選びなさい。');
    }
    else if (/答えなさい$/.test(text)) {
      text = text.replace(/答えなさい$/, 'として最も適切なものを1つ選びなさい。');
    }
    else {
      text = text.endsWith('。') ? text : text + '。';
    }
  }

  // 「〜言葉を漢字として最も適切なものを」等の不自然表現の修正
  text = text.replace(/言葉を漢字として最も適切なものを/, '言葉として最も適切なものを');
  text = text.replace(/四字熟語を漢字４文字として最も適切なものを/, '四字熟語として最も適切なものを');
  text = text.replace(/対義語を漢字２文字として最も適切なものを/, '対義語として最も適切なものを');
  text = text.replace(/対義語を漢字２文字でとして最も適切なものを/, '対義語として最も適切なものを');

  return text;
}

// 処理対象ファイル
const sampleQuizPath = 'src/data/sampleQuiz.json';
const sampleQuiz = JSON.parse(fs.readFileSync(sampleQuizPath, 'utf8'));

let fixedCount = 0;
sampleQuiz.forEach(q => {
  if (q.subject === '国語') {
    const original = q.question;
    const fixed = cleanQuestionText(q.id, original);
    if (fixed !== original) {
      q.question = fixed;
      fixedCount++;
    }
  }
});

console.log(`sampleQuiz.json で修正した国語問題数: ${fixedCount}`);
fs.writeFileSync(sampleQuizPath, JSON.stringify(sampleQuiz, null, 2), 'utf8');

// japanese_packs にも同期
const packFiles = [
  'src/data/japanese_packs/jp_josu_ruigi_tai.json',
  'src/data/japanese_packs/jp_kanyou.json',
  'src/data/japanese_packs/jp_kigo_gairai.json',
  'src/data/japanese_packs/jp_koji.json',
  'src/data/japanese_packs/jp_kotowaza.json',
  'src/data/japanese_packs/jp_wago.json',
  'src/data/japanese_packs/jp_yoji.json'
];

packFiles.forEach(packFile => {
  if (!fs.existsSync(packFile)) return;
  const pack = JSON.parse(fs.readFileSync(packFile, 'utf8'));
  let packFixed = 0;
  pack.forEach(q => {
    const original = q.question;
    const fixed = cleanQuestionText(q.id, original);
    if (fixed !== original) {
      q.question = fixed;
      packFixed++;
    }
  });
  if (packFixed > 0) {
    fs.writeFileSync(packFile, JSON.stringify(pack, null, 2), 'utf8');
    console.log(`${packFile} で修正した問題数: ${packFixed}`);
  }
});
