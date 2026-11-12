import fs from 'fs';
import path from 'path';
import { MATH_GEOMETRY_100 } from './math-pack-1-geometry.mjs';
import { wrapSvg, labelText } from './geometry-engine.mjs';

// 追加75問の幾何問題データ
const additionalGeometry = [];

// 26-45: 相似と比 (20問)
const similarityTemplates = [
  {
    sub: 'ピラミッド相似と線分比',
    diff: 'standard',
    q: (i, r1, r2, len) => `三角形ABCで、辺AB上に点D、辺AC上に点Eがあり、DE平行BCです。AD:DB = ${r1}:${r2}で、BC=${len}cmのとき、線分DEの長さは何cmですか。`,
    solve: (r1, r2, len) => {
      const de = (len * r1) / (r1 + r2);
      return {
        ans: `${de}cm`,
        opts: [`${de}cm`, `${de - 1}cm`, `${de + 1}cm`, `${de + 2}cm`],
        exp: `△ADEと△ABCの相似比は AD:AB = ${r1}:(${r1}+${r2}) = ${r1}:${r1+r2} です。対応する辺の比より DE = ${len} × (${r1}/${r1+r2}) = ${de}cm となります。`,
        svg: wrapSvg('0 0 240 180', `
          <polygon points="120,20 40,150 200,150" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
          <line x1="80" y1="85" x2="160" y2="85" stroke="#f59e0b" stroke-width="2"/>
          ${labelText(120, 15, 'A')}${labelText(30, 155, 'B')}${labelText(210, 155, 'C')}
          ${labelText(70, 85, 'D')}${labelText(170, 85, 'E')}
          ${labelText(120, 105, `比 ${r1}:${r2}`, 'middle', '#fde68a', 11)}
        `)
      };
    },
    params: [
      [1, 2, 12], [2, 1, 15], [3, 1, 16], [1, 3, 20], [2, 3, 25]
    ]
  },
  {
    sub: '砂時計相似と比',
    diff: 'standard',
    q: (i, top, bot, oH) => `AD平行BCの台形ABCDで、AD=${top}cm、BC=${bot}cmです。対角線の交点Oを通るBCに平行な直線がAB、CDと交わる点をそれぞれP、Qとするとき、線分PQの長さは何cmですか。`,
    solve: (top, bot) => {
      const pq = Math.round(((2 * top * bot) / (top + bot)) * 10) / 10;
      return {
        ans: `${pq}cm`,
        opts: [`${pq}cm`, `${pq - 0.8}cm`, `${pq + 0.8}cm`, `${pq + 1.2}cm`],
        exp: `交点Oを通る平行線の長さPQは調和平均の公式「2 × AD × BC ÷ (AD + BC)」で求められます。2 × ${top} × ${bot} ÷ (${top} + ${bot}) = ${pq}cm となります。`,
        svg: wrapSvg('0 0 260 180', `
          <polygon points="80,30 180,30 220,150 40,150" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
          <line x1="80" y1="30" x2="220" y2="150" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="180" y1="30" x2="40" y2="150" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="56" y1="90" x2="204" y2="90" stroke="#f59e0b" stroke-width="2"/>
          ${labelText(130, 25, `上底 ${top}cm`, 'middle', '#fde68a', 11)}
          ${labelText(130, 165, `下底 ${bot}cm`, 'middle', '#fde68a', 11)}
        `)
      };
    },
    params: [
      [3, 6], [4, 6], [6, 9], [4, 8], [6, 12]
    ]
  },
  {
    sub: '中点連結定理',
    diff: 'standard',
    q: (i, bc) => `四角形ABCDの各辺AB、BC、CD、DAの中点をそれぞれP、Q、R、Sとするとき、4点を結んでできる四角形PQRSは常にどのような平行四辺形になりますか。`,
    solve: () => ({
      ans: '平行四辺形',
      opts: ['平行四辺形', '長方形', 'ひし形', '台形'],
      exp: `中点連結定理により、対角線ACに対して PS平行AC かつ PS = AC÷2、QR平行AC かつ QR = AC÷2 が成り立ちます。向かい合う1組の対辺が平行で長さが等しいため、四角形PQRSは常に平行四辺形になります。`,
      svg: wrapSvg('0 0 220 180', `
        <polygon points="100,20 190,70 160,160 30,130" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
        <polygon points="145,45 175,115 95,145 65,75" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/>
        ${labelText(110, 100, '中点を結ぶ', 'middle', '#fde68a', 11)}
      `)
    }),
    params: [[10]]
  },
  {
    sub: '折り返し図形と角度',
    diff: 'standard',
    q: (i, deg) => `長方形ABCDの紙を、頂点Aが辺BC上の点Pに重なるように折り返しました。角BAPが${deg}度のとき、折り目の線と辺ADが作る角の大きさは何度ですか。`,
    solve: (deg) => {
      const foldAng = (90 + deg) / 2;
      return {
        ans: `${foldAng}度`,
        opts: [`${foldAng}度`, `${foldAng - 5}度`, `${foldAng + 5}度`, `${180 - foldAng}度`],
        exp: `折り返しの対称性より、対応する角が等しくなります。計算により折り目の線と辺ADのなす角は (90 + ${deg}) ÷ 2 = ${foldAng}度 となります。`,
        svg: wrapSvg('0 0 240 160', `
          <rect x="30" y="30" width="180" height="100" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
          <line x1="30" y1="30" x2="110" y2="130" stroke="#f59e0b" stroke-width="2"/>
          ${labelText(120, 90, `角BAP = ${deg}°`, 'middle', '#fde68a', 11)}
        `)
      };
    },
    params: [[20], [30], [40], [50]]
  },
  {
    sub: '直角三角形の相似比',
    diff: 'advanced',
    q: (i, a, b, c) => `直角三角形ABC（角B=90°、AB=${a}cm、BC=${b}cm、CA=${c}cm）の頂点Bから斜辺ACに下ろした垂線の足をHとします。線分AHの長さは何cmですか。`,
    solve: (a, b, c) => {
      const ah = Math.round(((a * a) / c) * 10) / 10;
      return {
        ans: `${ah}cm`,
        opts: [`${ah}cm`, `${ah - 0.6}cm`, `${ah + 0.6}cm`, `${ah + 1.2}cm`],
        exp: `△ABHと△ABCは相似（角A共通、角AHB=角ABC=90°）です。したがって AH:AB = AB:AC が成り立ち、AH = AB² ÷ AC = ${a}² ÷ ${c} = ${a*a}/${c} = ${ah}cm と求まります。`,
        svg: wrapSvg('0 0 240 180', `
          <polygon points="40,150 40,30 200,150" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
          <line x1="40" y1="150" x2="100" y2="75" stroke="#f59e0b" stroke-width="2"/>
          ${labelText(30, 30, 'A')}${labelText(30, 160, 'B')}${labelText(210, 160, 'C')}${labelText(105, 65, 'H')}
        `)
      };
    },
    params: [
      [3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]
    ]
  }
];

let qCount = 26;
similarityTemplates.forEach(t => {
  t.params.forEach(p => {
    if (qCount > 45) return;
    const res = t.solve(...p);
    additionalGeometry.push({
      id: `m_adv2_${String(qCount).padStart(3, '0')}`,
      subject: '算数',
      category: '平面図形・立体図形',
      subCategory: t.sub,
      difficulty: t.diff,
      questionType: 'choice',
      question: t.q(qCount, ...p),
      options: res.opts,
      answer: res.ans,
      acceptableAnswers: [res.ans],
      keywords: ['相似', '比', '平面図形'],
      knowledgeTag: `平面図形・${t.sub}`,
      explanation: res.exp,
      figureSvg: res.svg,
    });
    qCount++;
  });
});

// 46-65: 面積比と等積変形 (20問)
const areaTemplates = [
  {
    sub: '三角形の内部の点と面積比（チェバ比）',
    diff: 'advanced',
    q: (i, r1, r2, total) => `三角形ABCの内部の点Pから各頂点A、B、Cを結びます。辺BC上の点Dについて BD:DC = ${r1}:${r2} です。三角形ABDと三角形ADCの面積比として最も適当なものはどれですか。`,
    solve: (r1, r2) => ({
      ans: `${r1} : ${r2}`,
      opts: [`${r1} : ${r2}`, `${r2} : ${r1}`, `${r1} : ${r1 + r2}`, `${r1 * r1} : ${r2 * r2}`],
      exp: `△ABDと△ADCは高さが等しいため、面積比は底辺の比 BD:DC = ${r1}:${r2} に等しくなります。`,
      svg: wrapSvg('0 0 240 180', `
        <polygon points="120,20 40,150 200,150" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
        <line x1="120" y1="20" x2="105" y2="150" stroke="#f59e0b" stroke-width="2"/>
        ${labelText(120, 15, 'A')}${labelText(30, 155, 'B')}${labelText(210, 155, 'C')}${labelText(105, 165, 'D')}
        ${labelText(70, 140, `${r1}`, 'middle', '#fde68a', 11)}
        ${labelText(150, 140, `${r2}`, 'middle', '#fde68a', 11)}
      `)
    }),
    params: [[1, 2], [2, 3], [3, 4], [3, 5], [4, 5]]
  },
  {
    sub: '台形対角線の4分割面積',
    diff: 'standard',
    q: (i, topR, botR, topArea) => `AD平行BCの台形ABCDの対角線の交点をOとします。AD:BC = ${topR}:${botR} で、△AODの面積が${topArea}cm²のとき、△BOCの面積は何cm²ですか。`,
    solve: (topR, botR, topArea) => {
      const boc = Math.round(topArea * (botR / topR) * (botR / topR));
      return {
        ans: `${boc}cm²`,
        opts: [`${boc}cm²`, `${boc - 6}cm²`, `${boc + 6}cm²`, `${boc + 12}cm²`],
        exp: `△AODと△COBは相似で、相似比は ${topR}:${botR} です。面積比は2乗の比 ${topR*topR}:${botR*botR} となります。したがって △BOC = ${topArea} × (${botR}² ÷ ${topR}²) = ${boc}cm² です。`,
        svg: wrapSvg('0 0 240 180', `
          <polygon points="70,35 170,35 210,145 30,145" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
          <line x1="70" y1="35" x2="210" y2="145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="170" y1="35" x2="30" y2="145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
          ${labelText(120, 30, `上底比 ${topR}`, 'middle', '#fde68a', 11)}
          ${labelText(120, 160, `下底比 ${botR}`, 'middle', '#fde68a', 11)}
          ${labelText(120, 60, `${topArea}cm²`, 'middle', '#38bdf8', 11)}
        `)
      };
    },
    params: [[1, 2, 4], [1, 3, 3], [2, 3, 12], [2, 5, 8], [3, 4, 18]]
  },
  {
    sub: '長方形と斜め直線による面積分割',
    diff: 'standard',
    q: (i, w, h, cutW) => `縦${h}cm、横${w}cmの長方形ABCDがあります。辺ABの中点Mと頂点Cを結ぶ直線MCによって長方形を2つに分けるとき、三角形MBCの面積は何cm²ですか。`,
    solve: (w, h) => {
      const area = Math.round((w * (h / 2)) / 2);
      return {
        ans: `${area}cm²`,
        opts: [`${area}cm²`, `${area * 2}cm²`, `${area - 5}cm²`, `${area + 5}cm²`],
        exp: `点MはABの中点なので、MB = ${h} ÷ 2 = ${h/2}cm です。△MBCは底辺がBC=${w}cm、高さがMB=${h/2}cmの直角三角形なので、面積は (${w} × ${h/2}) ÷ 2 = ${area}cm² となります。`,
        svg: wrapSvg('0 0 240 160', `
          <rect x="40" y="30" width="160" height="100" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
          <line x1="40" y1="80" x2="200" y2="130" stroke="#f59e0b" stroke-width="2"/>
          ${labelText(40, 25, 'A')}${labelText(40, 145, 'B')}${labelText(200, 145, 'C')}${labelText(200, 25, 'D')}
          ${labelText(30, 80, 'M')}
        `)
      };
    },
    params: [[10, 8], [12, 6], [16, 10], [14, 8], [20, 12]]
  },
  {
    sub: 'ひし形と面積',
    diff: 'standard',
    q: (i, d1, d2) => `2本の対角線の長さが${d1}cmと${d2}cmであるひし形の面積は何cm²ですか。`,
    solve: (d1, d2) => {
      const area = (d1 * d2) / 2;
      return {
        ans: `${area}cm²`,
        opts: [`${area}cm²`, `${d1 * d2}cm²`, `${area / 2}cm²`, `${area + 10}cm²`],
        exp: `ひし形の面積は「対角線 × 対角線 ÷ 2」で求められます。したがって ${d1} × ${d2} ÷ 2 = ${area}cm² です。`,
        svg: wrapSvg('0 0 200 180', `
          <polygon points="100,20 170,90 100,160 30,90" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
          <line x1="100" y1="20" x2="100" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="30" y1="90" x2="170" y2="90" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/>
          ${labelText(100, 80, `${d1}cm × ${d2}cm`, 'middle', '#fde68a', 11)}
        `)
      };
    },
    params: [[8, 12], [10, 14], [12, 16], [14, 18], [16, 20]]
  }
];

areaTemplates.forEach(t => {
  t.params.forEach(p => {
    if (qCount > 65) return;
    const res = t.solve(...p);
    additionalGeometry.push({
      id: `m_adv2_${String(qCount).padStart(3, '0')}`,
      subject: '算数',
      category: '平面図形・立体図形',
      subCategory: t.sub,
      difficulty: t.diff,
      questionType: 'choice',
      question: t.q(qCount, ...p),
      options: res.opts,
      answer: res.ans,
      acceptableAnswers: [res.ans],
      keywords: ['面積', '比', '等積変形'],
      knowledgeTag: `平面図形・${t.sub}`,
      explanation: res.exp,
      figureSvg: res.svg,
    });
    qCount++;
  });
});

// 66-80: 円・おうぎ形・弧・図形の移動 (15問)
const circleTemplates = [
  {
    sub: '二重同心円のリング面積',
    diff: 'standard',
    q: (i, rIn, rOut) => `中心が同じで半径が${rIn}cmと${rOut}cmの2つの円があります。この2つの円にはさまれたドーナツ型の部分（円環）の面積は何cm²ですか。（円周率は3.14とします）`,
    solve: (rIn, rOut) => {
      const diffSq = rOut * rOut - rIn * rIn;
      const area = Math.round(diffSq * 3.14 * 100) / 100;
      return {
        ans: `${area}cm²`,
        opts: [`${area}cm²`, `${area - 12.56}cm²`, `${area + 12.56}cm²`, `${Math.round(rOut*rOut*3.14)}cm²`],
        exp: `外側の円の面積から内側の円の面積を引きます。(${rOut}² - ${rIn}²) × 3.14 = (${rOut*rOut} - ${rIn*rIn}) × 3.14 = ${diffSq} × 3.14 = ${area}cm² です。`,
        svg: wrapSvg('0 0 200 200', `
          <circle cx="100" cy="100" r="75" fill="#3b82f6" fill-opacity="0.3" stroke="#60a5fa" stroke-width="2"/>
          <circle cx="100" cy="100" r="45" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
          ${labelText(100, 105, `半径 ${rIn}cm / ${rOut}cm`, 'middle', '#fde68a', 11)}
        `)
      };
    },
    params: [[3, 5], [4, 6], [5, 7], [6, 8], [6, 10]]
  },
  {
    sub: '半円と直角三角形（ヒポクラテスの三日月）',
    diff: 'advanced',
    q: (i, a, b, c) => `直角をはさむ2辺が${a}cmと${b}cm、斜辺が${c}cmの直角三角形の各辺を直径とする半円を外側に描いたとき、2つの三日月型の部分の面積の合計は何cm²ですか。`,
    solve: (a, b) => {
      const triArea = (a * b) / 2;
      return {
        ans: `${triArea}cm²`,
        opts: [`${triArea}cm²`, `${triArea * 2}cm²`, `${Math.round(triArea * 1.5)}cm²`, `${triArea + 10}cm²`],
        exp: `ヒポクラテスの定理により、直角三角形の2辺上にできる2つの三日月の面積の和は、直角三角形自身の面積とちょうど等しくなります。したがって (${a} × ${b}) ÷ 2 = ${triArea}cm² となります。`,
        svg: wrapSvg('0 0 220 180', `
          <polygon points="60,130 60,60 160,130" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
          <path d="M 60 60 A 35 35 0 0 0 60 130 A 35 35 0 0 1 60 60" fill="#fbbf24" fill-opacity="0.5" stroke="#f59e0b" stroke-width="1.5"/>
          <path d="M 60 130 A 50 50 0 0 0 160 130 A 50 50 0 0 1 60 130" fill="#fbbf24" fill-opacity="0.5" stroke="#f59e0b" stroke-width="1.5"/>
          ${labelText(110, 100, `${triArea} cm²`, 'middle', '#fde68a', 12)}
        `)
      };
    },
    params: [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]]
  },
  {
    sub: 'おうぎ形の中心角逆算',
    diff: 'standard',
    q: (i, r, arc) => `半径が${r}cmで、弧の長さが${arc}cmのおうぎ形の中心角は何度ですか。（円周率は3.14とします）`,
    solve: (r, arc) => {
      const deg = Math.round((arc / (2 * r * 3.14)) * 360);
      return {
        ans: `${deg}度`,
        opts: [`${deg}度`, `${deg - 15}度`, `${deg + 15}度`, `${deg + 30}度`],
        exp: `弧の長さ = 直径 × 円周率 × (中心角 ÷ 360) より、中心角 = (弧の長さ ÷ (2 × 半径 × 3.14)) × 360 = (${arc} ÷ (${2*r} × 3.14)) × 360 = ${deg}度 と求まります。`,
        svg: wrapSvg('0 0 200 180', `
          <path d="M 100 130 L 160 130 A 60 60 0 0 0 130 78 Z" fill="#3b82f6" fill-opacity="0.3" stroke="#60a5fa" stroke-width="2"/>
          ${labelText(100, 145, 'O')}${labelText(130, 125, '?', 'middle', '#fbbf24', 12)}
        `)
      };
    },
    params: [[10, 15.7], [6, 9.42], [12, 18.84], [8, 12.56], [15, 23.55]]
  }
];

circleTemplates.forEach(t => {
  t.params.forEach(p => {
    if (qCount > 80) return;
    const res = t.solve(...p);
    additionalGeometry.push({
      id: `m_adv2_${String(qCount).padStart(3, '0')}`,
      subject: '算数',
      category: '平面図形・立体図形',
      subCategory: t.sub,
      difficulty: t.diff,
      questionType: 'choice',
      question: t.q(qCount, ...p),
      options: res.opts,
      answer: res.ans,
      acceptableAnswers: [res.ans],
      keywords: ['円', 'おうぎ形', '弧'],
      knowledgeTag: `平面図形・${t.sub}`,
      explanation: res.exp,
      figureSvg: res.svg,
    });
    qCount++;
  });
});

// 81-100: 立体図形・切断・回転体・水深 (20問)
const solidTemplates = [
  {
    sub: '円すいの側面積と展開図',
    diff: 'standard',
    q: (i,母線, r) => `母線の長さが${母線}cm、底面の半径が${r}cmの円すいの側面積は何cm²ですか。（円周率は3.14とします）`,
    solve: (母線, r) => {
      const area = Math.round(母線 * r * 3.14 * 100) / 100;
      return {
        ans: `${area}cm²`,
        opts: [`${area}cm²`, `${area - 15}cm²`, `${area + 15}cm²`, `${Math.round(母線*母線*3.14)}cm²`],
        exp: `円すいの側面積は「母線 × 底面の半径 × 円周率」という公式で簡単に求められます。${母線} × ${r} × 3.14 = ${母線 * r} × 3.14 = ${area}cm² となります。`,
        svg: wrapSvg('0 0 200 180', `
          <polygon points="100,20 50,140 150,140" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
          <ellipse cx="100" cy="140" rx="50" ry="14" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
          ${labelText(60, 75, `母線 ${母線}cm`, 'end', '#fde68a', 11)}
          ${labelText(100, 160, `半径 ${r}cm`, 'middle', '#38bdf8', 11)}
        `)
      };
    },
    params: [[10, 4], [12, 3], [15, 6], [8, 3], [12, 5]]
  },
  {
    sub: '立方体の切断切り口（六角形）',
    diff: 'advanced',
    q: (i, edge) => `1辺が${edge}cmの立方体の各辺の中点のうち、適当な6個の中点を通る平面で切断したとき、切り口の図形はどのような形になりますか。`,
    solve: () => ({
      ans: '正六角形',
      opts: ['正六角形', '正方形', '正三角形', '長方形'],
      exp: `立方体の向かい合う2つの頂点を取り囲むように6本の辺の中点を通る平面で切断すると、すべての辺の長さが等しく、内角がすべて120度の「正六角形」が切り口として現れます。`,
      svg: wrapSvg('0 0 220 180', `
        <polygon points="110,20 180,60 180,140 110,180 40,140 40,60" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
        <polygon points="110,20 180,60 145,160 40,140 75,40" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/>
        ${labelText(110, 100, '正六角形の切断面', 'middle', '#fde68a', 11)}
      `)
    }),
    params: [[6], [8], [10], [12]]
  },
  {
    sub: 'すい体の切断と体積比',
    diff: 'advanced',
    q: (i, hTotal, hCut) => `高さ${hTotal}cmの四角すいを、底面に平行で頂点から${hCut}cmの高さの平面で切断して2つの立体に分けました。上の小さな四角すいと、もとの四角すい全体の体積の比として最も適当なものはどれですか。`,
    solve: (hTotal, hCut) => {
      const g = (a, b) => b ? g(b, a % b) : a;
      const d = g(hCut, hTotal);
      const r1 = hCut / d;
      const r2 = hTotal / d;
      const v1 = r1 * r1 * r1;
      const v2 = r2 * r2 * r2;
      return {
        ans: `${v1} : ${v2}`,
        opts: [`${v1} : ${v2}`, `${r1} : ${r2}`, `${r1*r1} : ${r2*r2}`, `${v1} : ${v2 - v1}`],
        exp: `小さな四角すいともとの四角すいは相似で、相似比は高さの比 ${r1}:${r2} です。相似な立体の体積比は相似比の3乗になるため、${r1}³ : ${r2}³ = ${v1} : ${v2} となります。`,
        svg: wrapSvg('0 0 200 180', `
          <polygon points="100,20 40,150 160,150" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
          <line x1="70" y1="85" x2="130" y2="85" stroke="#f59e0b" stroke-width="2"/>
          ${labelText(100, 60, `上 ${hCut}cm`, 'middle', '#fde68a', 10)}
          ${labelText(100, 165, `全体高 ${hTotal}cm`, 'middle', '#38bdf8', 10)}
        `)
      };
    },
    params: [[6, 2], [9, 3], [10, 5], [12, 4], [8, 4], [15, 5]]
  },
  {
    sub: '角柱の表面積',
    diff: 'standard',
    q: (i, a, b, c, h) => `底面が直角をはさむ2辺が${a}cmと${b}cm、斜辺が${c}cmの直角三角形で、高さが${h}cmである三角柱の表面積は何cm²ですか。`,
    solve: (a, b, c, h) => {
      const baseArea = (a * b) / 2;
      const sideArea = (a + b + c) * h;
      const totalArea = baseArea * 2 + sideArea;
      return {
        ans: `${totalArea}cm²`,
        opts: [`${totalArea}cm²`, `${sideArea}cm²`, `${totalArea - baseArea}cm²`, `${totalArea + 20}cm²`],
        exp: `底面積2個分は (${a} × ${b} ÷ 2) × 2 = ${a * b}cm² です。側面積は底面の周囲の長さ × 高さなので (${a} + ${b} + ${c}) × ${h} = ${a+b+c} × ${h} = ${sideArea}cm² です。合計の表面積は ${a*b} + ${sideArea} = ${totalArea}cm² となります。`,
        svg: wrapSvg('0 0 220 180', `
          <polygon points="50,40 50,80 120,80" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
          <polygon points="50,110 50,150 120,150" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="50" y1="40" x2="50" y2="110" stroke="#3b82f6" stroke-width="1.5"/>
          <line x1="120" y1="80" x2="120" y2="150" stroke="#3b82f6" stroke-width="1.5"/>
          ${labelText(145, 115, `高さ ${h}cm`, 'start', '#fde68a', 11)}
        `)
      };
    },
    params: [[3, 4, 5, 8], [6, 8, 10, 10], [5, 12, 13, 6], [9, 12, 15, 5], [8, 15, 17, 10]]
  }
];

solidTemplates.forEach(t => {
  t.params.forEach(p => {
    if (qCount > 100) return;
    const res = t.solve(...p);
    additionalGeometry.push({
      id: `m_adv2_${String(qCount).padStart(3, '0')}`,
      subject: '算数',
      category: '平面図形・立体図形',
      subCategory: t.sub,
      difficulty: t.diff,
      questionType: 'choice',
      question: t.q(qCount, ...p),
      options: res.opts,
      answer: res.ans,
      acceptableAnswers: [res.ans],
      keywords: ['立体図形', '切断', '体積', '表面積'],
      knowledgeTag: `立体図形・${t.sub}`,
      explanation: res.exp,
      figureSvg: res.svg,
    });
    qCount++;
  });
});

console.log(`Generated ${additionalGeometry.length} additional geometry questions. Total will be: ${MATH_GEOMETRY_100.length + additionalGeometry.length}`);

// math-pack-1-geometry.mjs に書き出し
const all100 = [...MATH_GEOMETRY_100, ...additionalGeometry];
const targetPath = path.resolve('scripts/math-pack-1-geometry.mjs');
const fileContent = fs.readFileSync(targetPath, 'utf8');

// MATH_GEOMETRY_100 の配列の中身を置換
const newCode = `// 算数新規問題パック1: 平面図形・立体図形 100問
// 全問に正確な幾何SVG図形 (figureSvg) を装備
import { wrapSvg, labelText } from './geometry-engine.mjs';

export const MATH_GEOMETRY_100 = ${JSON.stringify(all100, null, 2)};
`;

fs.writeFileSync(targetPath, newCode, 'utf8');
console.log(`Successfully updated ${targetPath} with ${all100.length} questions!`);
