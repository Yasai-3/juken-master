/**
 * 学習履歴・誤答データから「今後の学習アドバイス」「伸ばすべき知識・問題形式」を導き出すオフライン診断エンジン
 */

export const DIFFICULTY_LABELS = {
  basic: '基礎',
  standard: '標準',
  advanced: '応用',
};

export const QUESTION_TYPE_LABELS = {
  choice: '4択選択',
  input: '語句入力',
  descriptive: '短文記述',
};

export const analyzeLearningProgress = (history = [], wrongAnswers = [], allQuestions = []) => {
  const questionMap = new Map(allQuestions.map((q) => [q.id, q]));

  // 集計用マップ
  const bySubject = {
    理科: { correct: 0, total: 0 },
    社会: { correct: 0, total: 0 },
    国語: { correct: 0, total: 0 },
  };
  const byDifficulty = {
    basic: { label: '基礎（用語・基本）', correct: 0, total: 0 },
    standard: { label: '標準（模試・実践）', correct: 0, total: 0 },
    advanced: { label: '応用（難関・記述思考）', correct: 0, total: 0 },
  };
  const byQuestionType = {
    choice: { label: '4択選択問題', correct: 0, total: 0 },
    input: { label: '一問一答・語句入力', correct: 0, total: 0 },
    descriptive: { label: '短文記述問題', correct: 0, total: 0 },
  };
  const byUnit = {}; // key: `${subject}__${category}__${subCategory}`
  const byKnowledgeTag = {}; // key: knowledgeTag

  let totalAnswered = 0;
  let totalCorrect = 0;

  history.forEach((session) => {
    if (Array.isArray(session.results)) {
      session.results.forEach((r) => {
        const refQ = questionMap.get(r.questionId) || {};
        const category = r.category || refQ.category || 'その他';
        const detectedSubject =
          r.subject ||
          refQ.subject ||
          (['ことわざ', '慣用句', '故事成語', '四字熟語', '和語', '季語・外来語', '助数詞・類義語・対義語'].includes(category)
            ? '国語'
            : ['歴史', '地理', '公民'].includes(category)
              ? '社会'
              : '理科');
        const subject = detectedSubject;
        const subCategory = r.subCategory || refQ.subCategory || '基本';
        const difficulty = r.difficulty || refQ.difficulty || 'standard';
        const qType = r.questionType || refQ.questionType || 'choice';
        const knowledgeTag = r.knowledgeTag || refQ.knowledgeTag || `${category}・${subCategory}`;
        const isCorrect = Boolean(r.isCorrect);

        totalAnswered++;
        if (isCorrect) totalCorrect++;

        if (!bySubject[subject]) bySubject[subject] = { correct: 0, total: 0 };
        bySubject[subject].total++;
        if (isCorrect) bySubject[subject].correct++;

        if (byDifficulty[difficulty]) {
          byDifficulty[difficulty].total++;
          if (isCorrect) byDifficulty[difficulty].correct++;
        }

        if (byQuestionType[qType]) {
          byQuestionType[qType].total++;
          if (isCorrect) byQuestionType[qType].correct++;
        }

        const unitKey = `${subject}__${category}__${subCategory}`;
        if (!byUnit[unitKey]) {
          byUnit[unitKey] = {
            subject,
            category,
            subCategory,
            correct: 0,
            total: 0,
            choiceCorrect: 0,
            choiceTotal: 0,
            writeCorrect: 0,
            writeTotal: 0,
            lastStudiedAt: session.timestamp || session.date,
          };
        }
        byUnit[unitKey].total++;
        if (isCorrect) byUnit[unitKey].correct++;
        if (qType === 'choice') {
          byUnit[unitKey].choiceTotal++;
          if (isCorrect) byUnit[unitKey].choiceCorrect++;
        } else {
          byUnit[unitKey].writeTotal++;
          if (isCorrect) byUnit[unitKey].writeCorrect++;
        }
        if ((session.timestamp || session.date) > byUnit[unitKey].lastStudiedAt) {
          byUnit[unitKey].lastStudiedAt = session.timestamp || session.date;
        }

        if (!byKnowledgeTag[knowledgeTag]) {
          byKnowledgeTag[knowledgeTag] = {
            tag: knowledgeTag,
            subject,
            category,
            subCategory,
            correct: 0,
            total: 0,
          };
        }
        byKnowledgeTag[knowledgeTag].total++;
        if (isCorrect) byKnowledgeTag[knowledgeTag].correct++;
      });
    }
  });

  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // 難易度・形式ごとの正答率配列
  const difficultyStats = Object.entries(byDifficulty).map(([key, d]) => ({
    key,
    name: d.label,
    shortName: DIFFICULTY_LABELS[key],
    correct: d.correct,
    total: d.total,
    accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : null,
  }));

  const questionTypeStats = Object.entries(byQuestionType).map(([key, d]) => ({
    key,
    name: d.label,
    shortName: QUESTION_TYPE_LABELS[key],
    correct: d.correct,
    total: d.total,
    accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : null,
  }));

  // 単元ごとの優先度スコア計算（正答率が低い×回答数がある＋現在の未解消弱点数）
  const unitStats = Object.values(byUnit).map((u) => {
    const accuracy = u.total > 0 ? Math.round((u.correct / u.total) * 100) : 0;
    const unresolvedWrongs = wrongAnswers.filter(
      (w) => w.subject === u.subject && w.category === u.category && w.subCategory === u.subCategory
    ).length;

    // 優先度スコア（高いほど要復習）
    const priorityScore = (100 - accuracy) + unresolvedWrongs * 15 + Math.min(u.total * 2, 20);

    return {
      ...u,
      accuracy,
      unresolvedWrongs,
      priorityScore,
    };
  });

  // 優先復習すべき単元TOP5
  const priorityUnits = [...unitStats]
    .filter((u) => u.accuracy < 85 || u.unresolvedWrongs > 0)
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 5);

  // 得意単元（自信につながる単元）
  const strongUnits = [...unitStats]
    .filter((u) => u.total >= 2 && u.accuracy >= 80)
    .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)
    .slice(0, 4);

  // 知識タグごとの弱点抽出
  const weakKnowledgeTags = Object.values(byKnowledgeTag)
    .map((k) => ({
      ...k,
      accuracy: k.total > 0 ? Math.round((k.correct / k.total) * 100) : 0,
    }))
    .filter((k) => k.accuracy < 80)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 6);

  // --- アドバイスカードの生成 ---
  const adviceCards = [];

  if (totalAnswered === 0) {
    adviceCards.push({
      id: 'welcome',
      type: 'info',
      badge: 'スタートガイド',
      title: 'まずは5問解いて、あなたの得意・苦手を診断しましょう！',
      description:
        '問題を解くと、「4択は得意だけれど漢字入力になるとミスが増える単元」や「次に伸ばすべき応用知識」がここに自動表示されます。',
      recommendedAction: {
        label: '理科の総合テスト（5問）を始める',
        quizState: { mode: 'combined', subject: '理科', limit: 5 },
      },
    });
  } else {
    // ① 形式ギャップ分析（4択 vs 語句入力・記述）
    const choiceAcc = questionTypeStats.find((t) => t.key === 'choice')?.accuracy;
    const inputAcc = questionTypeStats.find((t) => t.key === 'input')?.accuracy;
    const descAcc = questionTypeStats.find((t) => t.key === 'descriptive')?.accuracy;
    const inputTotal = byQuestionType.input.total;
    const descTotal = byQuestionType.descriptive.total;

    if (inputTotal + descTotal === 0) {
      adviceCards.push({
        id: 'try_input_mode',
        type: 'NextStep',
        badge: '出題形式のアドバイス',
        title: '「語句入力問題」や「短文記述問題」にも挑戦してみましょう！',
        description:
          '現在は4択問題を中心に学習しています。中学受験本番では「見て選べる知識」を「自分の手で漢字や文章で書ける知識」に引き上げることが得点力アップの鍵になります。',
        recommendedAction: {
          label: '語句入力・記述問題に挑戦する',
          quizState: { mode: 'all', questionType: 'non_choice', limit: 5 },
        },
      });
    } else if (choiceAcc !== null && inputAcc !== null && choiceAcc - inputAcc >= 20) {
      adviceCards.push({
        id: 'gap_choice_vs_input',
        type: 'warning',
        badge: '重要：アウトプット力強化',
        title: `4択（正答率${choiceAcc}%）に比べ、語句入力（${inputAcc}%）で取りこぼしがあります`,
        description:
          '選択肢を見れば思い出せる段階まではしっかり到達できています！ここからは「用語を正確な漢字で書く力（一問一答・語句入力）」を重点的に練習すると、模試の点数が一気に安定します。',
        recommendedAction: {
          label: '語句入力問題だけを特訓する（5問）',
          quizState: { mode: 'all', questionType: 'input', limit: 5 },
        },
      });
    } else if (descAcc !== null && descAcc < 65) {
      adviceCards.push({
        id: 'boost_descriptive',
        type: 'warning',
        badge: '記述・思考力アップ',
        title: `短文記述問題（現在${descAcc}%）は「採点キーワード」を意識して伸ばしましょう`,
        description:
          '「なぜそうなるか」を説明する記述問題では、問題文の条件と結論をつなぐキーワードを2つ以上入れるのがコツです。解説の「必須キーワード」を確認しながら解き直してみましょう。',
        recommendedAction: {
          label: '短文記述問題を練習する（5問）',
          quizState: { mode: 'all', questionType: 'descriptive', limit: 5 },
        },
      });
    }

    // ② 難易度ステップアップ分析
    const basicAcc = difficultyStats.find((d) => d.key === 'basic')?.accuracy;
    const stdAcc = difficultyStats.find((d) => d.key === 'standard')?.accuracy;
    const advAcc = difficultyStats.find((d) => d.key === 'advanced')?.accuracy;

    if (basicAcc !== null && basicAcc < 70) {
      adviceCards.push({
        id: 'foundation_first',
        type: 'focus',
        badge: '難易度アドバイス',
        title: `まずは「基礎（★☆☆）」の正答率80%以上（現在${basicAcc}%）を目指しましょう`,
        description:
          '応用問題に進む前に、基本用語と基本的な仕組みを固めるのが最短ルートです。基礎レベルの問題を繰り返し解いて土台を盤石にしましょう。',
        recommendedAction: {
          label: '基礎レベル問題を集中特訓（5問）',
          quizState: { mode: 'all', difficulty: 'basic', limit: 5 },
        },
      });
    } else if (
      (basicAcc === null || basicAcc >= 80) &&
      (stdAcc === null || stdAcc >= 75) &&
      (advAcc === null || byDifficulty.advanced.total < 5)
    ) {
      adviceCards.push({
        id: 'step_up_advanced',
        type: 'success',
        badge: 'ステップアップ提案',
        title: '基礎・標準の知識が順調に定着しています！次は「応用・思考問題」へ！',
        description:
          '基本的な一問一答や4択は高い正答率を維持できています。実験結果の考察や歴史の背景理由を問う「応用（★★★）」問題に挑戦して、難関校対応の思考力を伸ばしましょう。',
        recommendedAction: {
          label: '応用レベル問題に挑戦する（5問）',
          quizState: { mode: 'all', difficulty: 'advanced', limit: 5 },
        },
      });
    }

    // ③ 最優先の弱点単元アドバイス
    if (priorityUnits.length > 0) {
      const topWeak = priorityUnits[0];
      adviceCards.push({
        id: 'top_weak_unit',
        type: 'priority',
        badge: '最優先で伸ばすべき単元',
        title: `【${topWeak.subject}】「${topWeak.category} ＞ ${topWeak.subCategory}」を優先復習しましょう`,
        description: `現在の正答率は ${topWeak.accuracy}%（未解消の復習問題 ${topWeak.unresolvedWrongs}問）です。この単元の解説をもう一度読み返し、下のボタンからピンポイント復習を行うのが最も効果的です。`,
        recommendedAction: {
          label: `「${topWeak.subCategory}」を今すぐ復習する`,
          quizState: {
            mode: 'specific',
            subject: topWeak.subject,
            category: topWeak.category,
            subCategory: topWeak.subCategory,
            limit: 5,
          },
        },
      });
    }
  }

  return {
    totalAnswered,
    totalCorrect,
    overallAccuracy,
    bySubject,
    difficultyStats,
    questionTypeStats,
    priorityUnits,
    strongUnits,
    weakKnowledgeTags,
    adviceCards,
  };
};
