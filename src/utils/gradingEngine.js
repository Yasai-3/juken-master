/**
 * オフライン自動採点エンジン
 * - 4択問題 (choice)
 * - 一問一答・語句入力問題 (input)
 * - 短文記述問題 (descriptive)
 */

// 全角英数→半角、空白除去、記号の正規化
export const normalizeText = (str = '') => {
  return String(str)
    .trim()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/[\s　、。・「」『』（）()！!？?]/g, '')
    .toLowerCase();
};

// カタカナをひらがなに変換（読み仮名一致チェック用）
export const katakanaToHiragana = (str = '') => {
  return String(str).replace(/[\u30a1-\u30f6]/g, (match) => {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
};

// 漢字が含まれているか判定
const containsKanji = (str = '') => /[\u4e00-\u9faf]/.test(str);

/**
 * 解答を採点し、詳細なフィードバックを返す
 */
export const gradeAnswer = (questionData, userAnswer, options = { strictKanji: false }) => {
  const qType = questionData.questionType || 'choice';
  const rawUser = String(userAnswer || '').trim();
  const correctAns = String(questionData.answer || '').trim();

  // 1. 4択選択問題
  if (qType === 'choice') {
    const isCorrect = rawUser === correctAns;
    return {
      isCorrect,
      scoreRatio: isCorrect ? 1 : 0,
      statusLabel: isCorrect ? '正解！' : '不正解',
      feedbackMessage: isCorrect
        ? '選択肢を正しく選べました！'
        : `正解は「${correctAns}」です。解説を読んで根拠を確認しましょう。`,
      matchedKeywords: [],
      missingKeywords: [],
      userAnswer: rawUser,
      correctAns,
    };
  }

  // 2. 一問一答・語句入力問題
  if (qType === 'input') {
    if (!rawUser) {
      return {
        isCorrect: false,
        scoreRatio: 0,
        statusLabel: '未入力',
        feedbackMessage: `正解は「${correctAns}」です。`,
        matchedKeywords: [],
        missingKeywords: [],
        userAnswer: '（未入力）',
        correctAns,
      };
    }

    const normUser = normalizeText(rawUser);
    const hiraUser = katakanaToHiragana(normUser);

    // 許容解答リストを作成（正解＋別解＋「〜の法則」等の末尾ゆれ）
    const candidates = new Set([
      correctAns,
      ...(Array.isArray(questionData.acceptableAnswers) ? questionData.acceptableAnswers : []),
    ]);

    let exactMatch = false;
    let kanaOnlyMatch = false;

    for (const cand of candidates) {
      const normCand = normalizeText(cand);
      const hiraCand = katakanaToHiragana(normCand);

      if (!normCand) continue;

      if (normUser === normCand) {
        // 元の正解が漢字を含み、ユーザーの入力に漢字がなく、問題文に「漢字」指定がある場合
        const requiresKanji =
          options.strictKanji ||
          questionData.question.includes('漢字') ||
          (containsKanji(correctAns) && !containsKanji(rawUser) && cand !== correctAns);

        if (requiresKanji && containsKanji(correctAns) && !containsKanji(rawUser)) {
          kanaOnlyMatch = true;
        } else {
          exactMatch = true;
          break;
        }
      } else if (hiraUser === hiraCand) {
        if (containsKanji(correctAns) && !containsKanji(rawUser)) {
          kanaOnlyMatch = true;
        } else {
          exactMatch = true;
          break;
        }
      }
    }

    if (exactMatch) {
      return {
        isCorrect: true,
        scoreRatio: 1,
        statusLabel: '正解！',
        feedbackMessage:
          rawUser === correctAns
            ? '正確な表記でバッチリ正解です！'
            : `正解です！（模範表記：「${correctAns}」）`,
        matchedKeywords: [correctAns],
        missingKeywords: [],
        userAnswer: rawUser,
        correctAns,
      };
    }

    if (kanaOnlyMatch) {
      const askKanjiInPrompt = questionData.question.includes('漢字');
      const isCorrect = !askKanjiInPrompt && !options.strictKanji;
      return {
        isCorrect,
        isAlmostCorrect: true,
        scoreRatio: isCorrect ? 0.8 : 0.5,
        statusLabel: isCorrect ? '正解（漢字に注意！）' : 'おしい！（漢字指定）',
        feedbackMessage: `読み方は合っていますが、中学受験本番に向けて漢字「${correctAns}」で書けるように練習しましょう！`,
        matchedKeywords: [],
        missingKeywords: [correctAns],
        userAnswer: rawUser,
        correctAns,
      };
    }

    return {
      isCorrect: false,
      scoreRatio: 0,
      statusLabel: '不正解',
      feedbackMessage: `正解は「${correctAns}」です。声に出して書いて覚えましょう！`,
      matchedKeywords: [],
      missingKeywords: [correctAns],
      userAnswer: rawUser,
      correctAns,
    };
  }

  // 3. 短文記述問題 (descriptive)
  const keywords = Array.isArray(questionData.keywords) && questionData.keywords.length > 0
    ? questionData.keywords
    : [correctAns].filter(Boolean);

  if (!rawUser) {
    return {
      isCorrect: false,
      scoreRatio: 0,
      statusLabel: '未入力',
      feedbackMessage: '記述問題は分からなくてもキーワードを1つでも書く習慣をつけましょう！',
      matchedKeywords: [],
      missingKeywords: keywords,
      userAnswer: '（未入力）',
      correctAns,
      canSelfOverride: true,
    };
  }

  const normUser = katakanaToHiragana(normalizeText(rawUser));
  const matchedKeywords = [];
  const missingKeywords = [];

  keywords.forEach((kw) => {
    const normKw = katakanaToHiragana(normalizeText(kw));
    if (normKw && normUser.includes(normKw)) {
      matchedKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  });

  const ratio = keywords.length > 0 ? matchedKeywords.length / keywords.length : 0;
  const isCorrect = ratio >= 0.75 || (keywords.length === 1 && ratio === 1);
  const isPartial = !isCorrect && ratio >= 0.4;

  let statusLabel = 'もう一歩（記述確認）';
  let feedbackMessage = '模範解答と自分の解答を見比べて、抜けていた視点を確認しましょう。';

  if (isCorrect) {
    statusLabel = '記述クリア！（正解）';
    feedbackMessage = '必要な重要キーワードをすべて含めて説明できています！模範解答の表現も確認してみましょう。';
  } else if (isPartial) {
    statusLabel = '部分点（おしい！）';
    feedbackMessage = `「${matchedKeywords.join('・')}」は書けています！さらに「${missingKeywords.join('・')}」の要素が入ると満点解答になります。`;
  } else if (missingKeywords.length > 0) {
    feedbackMessage = `採点キーワード「${missingKeywords.join('・')}」を使って説明できるように復習しましょう。（※別の言い回しで正解の場合は下のボタンで「正解にする」を選べます）`;
  }

  return {
    isCorrect,
    isAlmostCorrect: isPartial,
    scoreRatio: ratio,
    statusLabel,
    feedbackMessage,
    matchedKeywords,
    missingKeywords,
    userAnswer: rawUser,
    correctAns,
    canSelfOverride: true,
  };
};
