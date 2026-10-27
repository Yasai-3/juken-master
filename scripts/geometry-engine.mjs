// 中学受験算数・幾何テンプレート生成エンジン (Geometry Engine)
// 数学の方程式・三角関数・相似比に基づき、1ピクセルも狂いのないSVGを厳密に生成する

export const GLOW_FILTER = `
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.6"/>
    </filter>
  </defs>`;

// 共通SVGラッパー
export function wrapSvg(viewBox, content) {
  return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" class="w-full">\n${GLOW_FILTER}\n${content}\n</svg>`;
}

// 頂点テキスト（純白＆グローでダーク背景でも極めて見やすい）
export function labelText(x, y, text, anchor = "middle", color = "#f8fafc", size = 14) {
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="bold" fill="${color}" text-anchor="${anchor}" filter="url(#glow)">${text}</text>`;
}

// 1. 台形と相似比（砂時計相似・対角線交点O）
export function createTrapezoidSimilarity({ topLen = 4, bottomLen = 6, areaAOD = 8 }) {
  const width = 320, height = 220;
  const H = 130;
  const yTop = 45, yBottom = yTop + H;
  const cx = 160;
  
  // 比率に合わせて上底・下底のピクセル幅を決定
  const scale = 200 / (bottomLen * 1.2);
  const wTop = topLen * scale;
  const wBottom = bottomLen * scale;
  
  const A = { x: cx - wTop / 2, y: yTop };
  const D = { x: cx + wTop / 2, y: yTop };
  const B = { x: cx - wBottom / 2, y: yBottom };
  const C = { x: cx + wBottom / 2, y: yBottom };
  
  // 交点Oの厳密y座標: 上底:下底の比で内分
  const ratio = topLen / (topLen + bottomLen);
  const O = { x: cx, y: yTop + H * ratio };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 台形本体 -->
  <polygon points="${A.x},${A.y} ${D.x},${D.y} ${C.x},${C.y} ${B.x},${B.y}" fill="#1e293b" fill-opacity="0.6" stroke="#6366f1" stroke-width="2.5" />
  <!-- 対角線 AC, BD -->
  <line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="${D.x}" y1="${D.y}" x2="${B.x}" y2="${B.y}" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <!-- △AOD (ハイライト) -->
  <polygon points="${A.x},${A.y} ${D.x},${D.y} ${O.x},${O.y}" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />
  ${labelText(O.x, O.y - 18, `${areaAOD} cm²`, "middle", "#fde68a", 13)}
  <!-- 交点O -->
  <circle cx="${O.x}" cy="${O.y}" r="3.5" fill="#f59e0b" />
  ${labelText(O.x + 14, O.y + 6, "O", "start", "#38bdf8", 14)}
  <!-- 頂点ラベル -->
  ${labelText(A.x - 14, A.y - 2, "A", "end")}
  ${labelText(D.x + 14, D.y - 2, "D", "start")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  <!-- 長さラベル -->
  ${labelText(cx, yTop - 12, `AD = ${topLen}cm`, "middle", "#38bdf8", 12)}
  ${labelText(cx, yBottom + 22, `BC = ${bottomLen}cm`, "middle", "#38bdf8", 12)}
  `);
}

// 2. 直角三角形と内接正方形（1ピクセルの隙間もなく完全接触）
export function createRightTriangleInscribedSquare({ base = 8, height = 6 }) {
  const width = 320, heightBox = 220;
  const B = { x: 60, y: 185 };
  
  const scale = 190 / Math.max(base, height * (base/height));
  const pxBase = base * scale;
  const pxHeight = height * scale;
  
  const A = { x: B.x, y: B.y - pxHeight };
  const C = { x: B.x + pxBase, y: B.y };
  
  // 内接正方形の数学的1辺: side = (base * height) / (base + height)
  const side = (pxBase * pxHeight) / (pxBase + pxHeight);
  const D = { x: B.x, y: B.y - side };
  const F = { x: B.x + side, y: B.y };
  const E = { x: B.x + side, y: B.y - side }; // 斜辺AC上の厳密交点
  
  return wrapSvg(`0 0 ${width} ${heightBox}`, `
  <!-- 直角三角形 ABC -->
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <!-- 内接正方形 BDEF -->
  <rect x="${B.x}" y="${D.y}" width="${side}" height="${side}" fill="#fbbf24" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2.5" />
  <!-- 直角マーク -->
  <polyline points="${B.x},${B.y - 12} ${B.x + 12},${B.y - 12} ${B.x + 12},${B.y}" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <polyline points="${D.x},${D.y + 12} ${D.x + 12},${D.y + 12} ${D.x + 12},${D.y}" fill="none" stroke="#f59e0b" stroke-width="1.5" />
  <!-- 接点E -->
  <circle cx="${E.x}" cy="${E.y}" r="3.5" fill="#f59e0b" />
  <!-- 頂点ラベル -->
  ${labelText(A.x - 14, A.y + 4, "A", "end")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  ${labelText(D.x - 14, D.y + 4, "D", "end", "#fbbf24", 13)}
  ${labelText(E.x + 10, E.y - 6, "E", "start", "#fbbf24", 13)}
  ${labelText(F.x - 2, F.y + 20, "F", "middle", "#fbbf24", 13)}
  <!-- 寸法ラベル -->
  ${labelText(B.x - 28, (A.y + B.y) / 2, `${height}cm`, "end", "#38bdf8", 12)}
  ${labelText((B.x + C.x) / 2, B.y + 22, `BC = ${base}cm`, "middle", "#38bdf8", 12)}
  `);
}

// 3. 三角形内部の交点・比（チェバ・メネラウス・ベンツの定理）
export function createTriangleInternalRatio({ rAD = 2, rDB = 3, rAE = 3, rEC = 4 }) {
  const width = 320, height = 220;
  const A = { x: 160, y: 30 };
  const B = { x: 60, y: 190 };
  const C = { x: 260, y: 190 };
  
  // D on AB, E on AC
  const D = {
    x: A.x + (B.x - A.x) * (rAD / (rAD + rDB)),
    y: A.y + (B.y - A.y) * (rAD / (rAD + rDB))
  };
  const E = {
    x: A.x + (C.x - A.x) * (rAE / (rAE + rEC)),
    y: A.y + (C.y - A.y) * (rAE / (rAE + rEC))
  };
  
  // 直線 BE: y - B.y = m1*(x - B.x)
  const m1 = (E.y - B.y) / (E.x - B.x);
  // 直線 CD: y - C.y = m2*(x - C.x)
  const m2 = (D.y - C.y) / (D.x - C.x);
  
  // 交点P: m1*(x - B.x) + B.y = m2*(x - C.x) + C.y
  const Px = (m2 * C.x - m1 * B.x + B.y - C.y) / (m2 - m1);
  const Py = m1 * (Px - B.x) + B.y;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 三角形 ABC -->
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#1e293b" fill-opacity="0.6" stroke="#94a3b8" stroke-width="2" />
  <!-- 線分 BE, CD -->
  <line x1="${B.x}" y1="${B.y}" x2="${E.x}" y2="${E.y}" stroke="#818cf8" stroke-width="2" />
  <line x1="${C.x}" y1="${C.y}" x2="${D.x}" y2="${D.y}" stroke="#818cf8" stroke-width="2" />
  <!-- △PBC -->
  <polygon points="${Px.toFixed(1)},${Py.toFixed(1)} ${B.x},${B.y} ${C.x},${C.y}" fill="#38bdf8" fill-opacity="0.3" stroke="#0ea5e9" stroke-width="2.5" />
  <!-- 交点P -->
  <circle cx="${Px.toFixed(1)}" cy="${Py.toFixed(1)}" r="4" fill="#f43f5e" />
  ${labelText(Px, Py - 10, "P", "middle", "#f43f5e", 14)}
  <!-- 分割点 D, E -->
  <circle cx="${D.x.toFixed(1)}" cy="${D.y.toFixed(1)}" r="3" fill="#818cf8" />
  <circle cx="${E.x.toFixed(1)}" cy="${E.y.toFixed(1)}" r="3" fill="#818cf8" />
  ${labelText(D.x - 28, D.y - 2, `D (${rAD}:${rDB})`, "end", "#fde68a", 12)}
  ${labelText(E.x + 28, E.y - 2, `E (${rAE}:${rEC})`, "start", "#fde68a", 12)}
  <!-- 頂点ラベル -->
  ${labelText(A.x, A.y - 10, "A")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  `);
}

// 4. 平行四辺形内の相似と対角線交点
export function createParallelogramRatio({ beRatio = 2, ecRatio = 1 }) {
  const width = 340, height = 220;
  const A = { x: 90, y: 40 }, D = { x: 290, y: 40 };
  const B = { x: 50, y: 180 }, C = { x: 250, y: 180 };
  
  // BC = 200px
  const total = beRatio + ecRatio;
  const Ex = B.x + (C.x - B.x) * (beRatio / total);
  const Ey = 180;
  
  // 相似比 AD : BE = total : beRatio
  // 交点F は線分 BD を DF : FB = total : beRatio に内分
  const fRatio = total / (total + beRatio);
  const Fx = D.x + (B.x - D.x) * fRatio;
  const Fy = D.y + (B.y - D.y) * fRatio;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 平行四辺形本体 ABCD -->
  <polygon points="${A.x},${A.y} ${D.x},${D.y} ${C.x},${C.y} ${B.x},${B.y}" fill="#1e293b" fill-opacity="0.6" stroke="#6366f1" stroke-width="2.5" />
  <!-- 対角線 BD -->
  <line x1="${B.x}" y1="${B.y}" x2="${D.x}" y2="${D.y}" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <!-- 線分 AE -->
  <line x1="${A.x}" y1="${A.y}" x2="${Ex.toFixed(1)}" y2="${Ey}" stroke="#a78bfa" stroke-width="2" />
  <!-- △AFD (ハイライト) -->
  <polygon points="${A.x},${A.y} ${D.x},${D.y} ${Fx.toFixed(1)},${Fy.toFixed(1)}" fill="#fbbf24" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2" />
  <!-- 四角形 FECD (ハイライト) -->
  <polygon points="${Fx.toFixed(1)},${Fy.toFixed(1)} ${Ex.toFixed(1)},${Ey} ${C.x},${C.y} ${D.x},${D.y}" fill="#a78bfa" fill-opacity="0.2" stroke="#818cf8" stroke-width="2" />
  <!-- 交点F -->
  <circle cx="${Fx.toFixed(1)}" cy="${Fy.toFixed(1)}" r="4" fill="#f43f5e" />
  ${labelText(Fx - 12, Fy - 4, "F", "end", "#f43f5e", 14)}
  <!-- 点E -->
  <circle cx="${Ex.toFixed(1)}" cy="${Ey}" r="3" fill="#a78bfa" />
  <!-- 頂点ラベル -->
  ${labelText(A.x - 14, A.y - 4, "A", "end")}
  ${labelText(D.x + 14, D.y - 4, "D", "start")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  ${labelText(Ex, Ey + 22, `E (${beRatio}:${ecRatio})`, "middle", "#38bdf8", 12)}
  `);
}

// 5. ヒポクラテスの三日月（水平斜辺配置で一切欠けのない美しい作図）
export function createHippocratesLunes({ a = 6, b = 8, c = 10 }) {
  const width = 340, height = 240;
  // 斜辺 BC を水平に置く (B=(60, 160), C=(260, 160), 長さ 200px)
  const B = { x: 60, y: 160 };
  const C = { x: 260, y: 160 };
  const pxC = 200;
  const pxA = (a / c) * pxC; // 120px
  const pxB = (b / c) * pxC; // 160px
  
  // 頂点A: 垂線の足 H から真上
  const bh = (pxA * pxA) / pxC; // 72px
  const ah = Math.sqrt(pxA * pxA - bh * bh); // 96px
  const A = { x: B.x + bh, y: B.y - ah }; // (132, 64)
  
  const rA = pxA / 2; // 60
  const rB = pxB / 2; // 80
  const rC = pxC / 2; // 100
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 斜辺BCの半円の内側 -->
  <path d="M ${B.x},${B.y} A ${rC},${rC} 0 0,1 ${C.x},${C.y} Z" fill="#1e293b" fill-opacity="0.4" stroke="#475569" stroke-width="1.5" />
  <!-- 三日月1 (ABを直径とする外側半円 - 斜辺半円) -->
  <path d="M ${B.x},${B.y} A ${rA},${rA} 0 0,1 ${A.x},${A.y} A ${rC},${rC} 0 0,0 ${B.x},${B.y} Z" fill="#fbbf24" fill-opacity="0.35" stroke="#f59e0b" stroke-width="2" />
  <!-- 三日月2 (ACを直径とする外側半円 - 斜辺半円) -->
  <path d="M ${A.x},${A.y} A ${rB},${rB} 0 0,1 ${C.x},${C.y} A ${rC},${rC} 0 0,0 ${A.x},${A.y} Z" fill="#fbbf24" fill-opacity="0.35" stroke="#f59e0b" stroke-width="2" />
  <!-- 直角三角形 ABC -->
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2.5" />
  <!-- 直角マーク (Aでの直角) -->
  <circle cx="${A.x}" cy="${A.y}" r="3" fill="#38bdf8" />
  <!-- 頂点ラベル -->
  ${labelText(A.x, A.y - 12, "A")}
  ${labelText(B.x - 14, B.y + 6, "B", "end")}
  ${labelText(C.x + 14, C.y + 6, "C", "start")}
  <!-- 寸法ラベル -->
  ${labelText((A.x + B.x)/2 - 14, (A.y + B.y)/2 - 6, `${a}cm`, "end", "#38bdf8", 12)}
  ${labelText((A.x + C.x)/2 + 14, (A.y + C.y)/2 - 6, `${b}cm`, "start", "#38bdf8", 12)}
  ${labelText((B.x + C.x)/2, B.y + 20, `${c}cm`, "middle", "#cbd5e1", 12)}
  ${labelText(170, 24, "三日月部分の面積 = ? cm²", "middle", "#fde68a", 13)}
  `);
}

// 6. 円が正方形の周りを1周転がる通過領域
export function createCircleRollingSquare({ squareSide = 10, radius = 2 }) {
  const width = 300, height = 300;
  const sq = 120; // 正方形 120px
  const r = 24; // 半径 24px (直径 48px)
  const x0 = (width - sq) / 2; // 90
  const y0 = (height - sq) / 2; // 90
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 通過領域全体 (半径 r*2 の角丸正方形) -->
  <rect x="${x0 - r*2}" y="${y0 - r*2}" width="${sq + r*4}" height="${sq + r*4}" rx="${r*2}" ry="${r*2}" fill="#fbbf24" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2" />
  <!-- 中央の正方形 -->
  <rect x="${x0}" y="${y0}" width="${sq}" height="${sq}" fill="#0f172a" stroke="#6366f1" stroke-width="2.5" />
  <!-- 隅の点線 -->
  <line x1="${x0}" y1="${y0 - r*2}" x2="${x0}" y2="${y0}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="${x0 + sq}" y1="${y0 - r*2}" x2="${x0 + sq}" y2="${y0}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="${x0}" y1="${y0 + sq}" x2="${x0}" y2="${y0 + sq + r*2}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="${x0 + sq}" y1="${y0 + sq}" x2="${x0 + sq}" y2="${y0 + sq + r*2}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="${x0 - r*2}" y1="${y0}" x2="${x0}" y2="${y0}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="${x0 + sq}" y1="${y0}" x2="${x0 + sq + r*2}" y2="${y0}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="${x0 - r*2}" y1="${y0 + sq}" x2="${x0}" y2="${y0 + sq}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="${x0 + sq}" y1="${y0 + sq}" x2="${x0 + sq + r*2}" y2="${y0 + sq}" stroke="#f59e0b" stroke-dasharray="3,3" />
  <!-- 転がる円 -->
  <circle cx="${x0 - r}" cy="${y0 + sq/2}" r="${r}" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8" stroke-width="2" />
  <circle cx="${x0 - r}" cy="${y0 + sq/2}" r="3" fill="#38bdf8" />
  <line x1="${x0 - r}" y1="${y0 + sq/2}" x2="${x0}" y2="${y0 + sq/2}" stroke="#38bdf8" stroke-width="1.5" />
  ${labelText(x0 - r + 3, y0 + sq/2 - 8, `${radius}cm`, "start", "#38bdf8", 11)}
  <!-- ラベル -->
  ${labelText(150, 155, `${squareSide}cm 正方形`, "middle", "#f8fafc", 13)}
  ${labelText(150, 30, "円が通過した部分全体の面積", "middle", "#fde68a", 13)}
  `);
}

// 7. 正方形内の葉っぱ型（2つのおうぎ形重なり）
export function createLeafInSquare({ side = 10 }) {
  const width = 240, height = 240;
  const x = 40, y = 40, s = 160;
  return wrapSvg(`0 0 ${width} ${height}`, `
  <rect x="${x}" y="${y}" width="${s}" height="${s}" fill="#1e293b" fill-opacity="0.5" stroke="#475569" stroke-width="2" />
  <path d="M ${x},${y} A ${s},${s} 0 0,1 ${x+s},${y+s} A ${s},${s} 0 0,1 ${x},${y}" fill="#10b981" fill-opacity="0.3" stroke="#10b981" stroke-width="2.5" />
  ${labelText(x - 14, y - 4, "A", "end")}
  ${labelText(x + s + 14, y - 4, "D", "start")}
  ${labelText(x - 14, y + s + 14, "B", "end")}
  ${labelText(x + s + 14, y + s + 14, "C", "start")}
  ${labelText(x + s/2, y - 10, `${side} cm`, "middle", "#38bdf8", 12)}
  ${labelText(x - 12, y + s/2, `${side} cm`, "end", "#38bdf8", 12)}
  `);
}

// 8. 正六角形の分割（中点連結六角形）
export function createHexagonMidpoints({ area = 72 }) {
  const width = 240, height = 240;
  const cx = 120, cy = 120, R = 80;
  
  const outer = [];
  for (let i = 0; i < 6; i++) {
    const rad = (i * 60) * Math.PI / 180;
    outer.push({ x: cx + R * Math.cos(rad), y: cy + R * Math.sin(rad) });
  }
  const inner = [];
  for (let i = 0; i < 6; i++) {
    const p1 = outer[i];
    const p2 = outer[(i + 1) % 6];
    inner.push({ x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 });
  }
  
  const outerPoints = outer.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const innerPoints = inner.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <polygon points="${outerPoints}" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <polygon points="${innerPoints}" fill="#6366f1" fill-opacity="0.3" stroke="#818cf8" stroke-width="2.5" />
  ${labelText(cx, cy + 6, "面積 = ? cm²", "middle", "#fde68a", 14)}
  ${labelText(cx, 25, `外側の正六角形 = ${area} cm²`, "middle", "#38bdf8", 12)}
  `);
}

// 9. 正方形と4枚の花びら型（4つの半円）
export function createPetalsInSquare({ side = 12 }) {
  const width = 240, height = 240;
  const x = 40, y = 40, s = 160;
  const r = s / 2;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <rect x="${x}" y="${y}" width="${s}" height="${s}" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2" />
  <!-- 半円の点線 -->
  <path d="M ${x},${y+r} A ${r},${r} 0 0,1 ${x+s},${y+r}" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M ${x},${y+r} A ${r},${r} 0 0,0 ${x+s},${y+r}" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M ${x+r},${y} A ${r},${r} 0 0,1 ${x+r},${y+s}" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M ${x+r},${y} A ${r},${r} 0 0,0 ${x+r},${y+s}" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <!-- 4枚の花びら -->
  <path d="M ${x+r},${y} A ${r},${r} 0 0,0 ${x},${y+r} A ${r},${r} 0 0,1 ${x+r},${y+r} A ${r},${r} 0 0,1 ${x+s},${y+r} A ${r},${r} 0 0,0 ${x+r},${y}" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  <path d="M ${x+r},${y+s} A ${r},${r} 0 0,0 ${x},${y+r} A ${r},${r} 0 0,0 ${x+r},${y+r} A ${r},${r} 0 0,0 ${x+s},${y+r} A ${r},${r} 0 0,0 ${x+r},${y+s}" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  <path d="M ${x},${y+r} A ${r},${r} 0 0,0 ${x+r},${y} A ${r},${r} 0 0,1 ${x+r},${y+r} A ${r},${r} 0 0,1 ${x+r},${y+s} A ${r},${r} 0 0,0 ${x},${y+r}" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  <path d="M ${x+s},${y+r} A ${r},${r} 0 0,0 ${x+r},${y} A ${r},${r} 0 0,0 ${x+r},${y+r} A ${r},${r} 0 0,0 ${x+r},${y+s} A ${r},${r} 0 0,0 ${x+s},${y+r}" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  ${labelText(x - 14, y - 4, "A", "end")}
  ${labelText(x + s + 14, y - 4, "D", "start")}
  ${labelText(x - 14, y + s + 14, "B", "end")}
  ${labelText(x + s + 14, y + s + 14, "C", "start")}
  ${labelText(x + s/2, y - 10, `${side} cm`, "middle", "#38bdf8", 12)}
  `);
}

// 10. 三角形と平行線（ピラミッド型相似）
export function createPyramidSimilarity({ topLen = 4, bottomLen = 10, leftRatio = "2 : 3" }) {
  const width = 300, height = 220;
  const A = { x: 150, y: 35 };
  const B = { x: 50, y: 185 };
  const C = { x: 250, y: 185 };
  
  const ratio = topLen / bottomLen;
  const D = { x: A.x + (B.x - A.x) * ratio, y: A.y + (B.y - A.y) * ratio };
  const E = { x: A.x + (C.x - A.x) * ratio, y: A.y + (C.y - A.y) * ratio };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 三角形 ABC -->
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <!-- 平行線 DE -->
  <line x1="${D.x.toFixed(1)}" y1="${D.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}" stroke="#38bdf8" stroke-width="2.5" />
  <!-- △ADE (ハイライト) -->
  <polygon points="${A.x},${A.y} ${D.x.toFixed(1)},${D.y.toFixed(1)} ${E.x.toFixed(1)},${E.y.toFixed(1)}" fill="#38bdf8" fill-opacity="0.25" />
  <!-- 平行マーク -->
  <polygon points="${(D.x+E.x)/2 - 5},${D.y - 4} ${(D.x+E.x)/2 + 3},${D.y} ${(D.x+E.x)/2 - 5},${D.y + 4}" fill="#38bdf8" />
  <polygon points="${(B.x+C.x)/2 - 5},${B.y - 4} ${(B.x+C.x)/2 + 3},${B.y} ${(B.x+C.x)/2 - 5},${B.y + 4}" fill="#94a3b8" />
  <!-- 頂点ラベル -->
  ${labelText(A.x, A.y - 10, "A")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  ${labelText(D.x - 14, D.y + 4, "D", "end")}
  ${labelText(E.x + 14, E.y + 4, "E", "start")}
  <!-- 寸法ラベル -->
  ${labelText((D.x+E.x)/2, D.y - 8, `DE = ${topLen}cm`, "middle", "#38bdf8", 12)}
  ${labelText((B.x+C.x)/2, B.y + 20, `BC = ${bottomLen}cm`, "middle", "#38bdf8", 12)}
  ${labelText((A.x+D.x)/2 - 16, (A.y+D.y)/2, leftRatio, "end", "#fde68a", 12)}
  `);
}

// 11. 直角三角形と斜辺への垂線（直角相似の3つ組・射影定理）
export function createRightTriangleAltitude({ a = 6, b = 8, c = 10 }) {
  const width = 320, height = 220;
  const B = { x: 50, y: 175 };
  const C = { x: 270, y: 175 };
  const pxC = 220;
  const pxA = (a / c) * pxC;
  const bh = (pxA * pxA) / pxC;
  const ah = Math.sqrt(pxA * pxA - bh * bh);
  const A = { x: B.x + bh, y: B.y - ah };
  const H = { x: B.x + bh, y: B.y };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <!-- 垂線 AH -->
  <line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,4" />
  <!-- 直角マーク (H) -->
  <polyline points="${H.x},${H.y - 12} ${H.x + 12},${H.y - 12} ${H.x + 12},${H.y}" fill="none" stroke="#f59e0b" stroke-width="1.5" />
  <!-- 頂点ラベル -->
  ${labelText(A.x, A.y - 10, "A")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  ${labelText(H.x, H.y + 20, "H", "middle", "#f59e0b", 13)}
  <!-- 寸法ラベル -->
  ${labelText((A.x+B.x)/2 - 14, (A.y+B.y)/2 - 4, `AB = ${a}cm`, "end", "#38bdf8", 12)}
  ${labelText((A.x+C.x)/2 + 14, (A.y+C.y)/2 - 4, `AC = ${b}cm`, "start", "#38bdf8", 12)}
  ${labelText((B.x+C.x)/2, B.y + 22, `BC = ${c}cm`, "middle", "#cbd5e1", 12)}
  ${labelText(H.x + 16, (A.y + H.y)/2, "AH = ? cm", "start", "#fde68a", 13)}
  `);
}

// 12. おうぎ形と中心角（弓形面積）
export function createSectorSegment({ radius = 12, angle = 45 }) {
  const width = 260, height = 240;
  const O = { x: 50, y: 190 };
  const rPx = 160;
  const rad = (angle * Math.PI) / 180;
  const B = { x: O.x + rPx, y: O.y };
  const A = { x: O.x + rPx * Math.cos(rad), y: O.y - rPx * Math.sin(rad) };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- おうぎ形本体 -->
  <path d="M ${O.x},${O.y} L ${B.x},${B.y} A ${rPx},${rPx} 0 0,0 ${A.x.toFixed(1)},${A.y.toFixed(1)} Z" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2" />
  <!-- 弦 AB -->
  <line x1="${A.x.toFixed(1)}" y1="${A.y.toFixed(1)}" x2="${B.x}" y2="${B.y}" stroke="#38bdf8" stroke-width="2" />
  <!-- 弓形部分（ハイライト） -->
  <path d="M ${A.x.toFixed(1)},${A.y.toFixed(1)} A ${rPx},${rPx} 0 0,1 ${B.x},${B.y} Z" fill="#fbbf24" fill-opacity="0.35" stroke="#f59e0b" stroke-width="2" />
  <!-- 角度マーク -->
  <path d="M ${O.x + 35},${O.y} A 35,35 0 0,0 ${O.x + 35 * Math.cos(rad)},${O.y - 35 * Math.sin(rad)}" fill="none" stroke="#fde68a" stroke-width="2" />
  ${labelText(O.x + 48, O.y - 12, `${angle}°`, "start", "#fde68a", 12)}
  <!-- ラベル -->
  ${labelText(O.x - 14, O.y + 6, "O", "end")}
  ${labelText(B.x + 14, B.y + 6, "B", "start")}
  ${labelText(A.x, A.y - 10, "A")}
  ${labelText(O.x + rPx/2, O.y + 20, `${radius}cm`, "middle", "#38bdf8", 12)}
  ${labelText(150, 30, "着色部分の面積 = ? cm²", "middle", "#fde68a", 13)}
  `);
}

// 13. 同心円（ドーナツ型）と内円に接する外円の弦
export function createConcentricChord({ chord = 16 }) {
  const width = 260, height = 260;
  const cx = 130, cy = 130;
  const R = 90, r = 54; // R^2 - r^2 = (chord/2)^2 = 8^2 = 64
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 外円と内円の間（ドーナツ部分ハイライト） -->
  <circle cx="${cx}" cy="${cy}" r="${R}" fill="#fbbf24" fill-opacity="0.25" stroke="#6366f1" stroke-width="2.5" />
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0f172a" stroke="#6366f1" stroke-width="2" />
  <!-- 内円に接する弦 AB (接点 T=(cx, cy - r)) -->
  <line x1="${cx - 72}" y1="${cy - r}" x2="${cx + 72}" y2="${cy - r}" stroke="#38bdf8" stroke-width="3" />
  <circle cx="${cx}" cy="${cy - r}" r="3.5" fill="#38bdf8" />
  ${labelText(cx - 84, cy - r + 5, "A", "end")}
  ${labelText(cx + 84, cy - r + 5, "B", "start")}
  ${labelText(cx, cy - r - 12, `弦AB = ${chord}cm`, "middle", "#38bdf8", 13)}
  ${labelText(cx, cy + 8, "O", "middle", "#f8fafc", 13)}
  <circle cx="${cx}" cy="${cy}" r="3" fill="#f8fafc" />
  `);
}

// 14. ひし形と対角線
export function createRhombusDiagonals({ d1 = 12, d2 = 16 }) {
  const width = 280, height = 240;
  const cx = 140, cy = 120;
  const w = 100, h = 75;
  const A = { x: cx, y: cy - h };
  const B = { x: cx - w, y: cy };
  const C = { x: cx, y: cy + h };
  const D = { x: cx + w, y: cy };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}" fill="#1e293b" fill-opacity="0.5" stroke="#6366f1" stroke-width="2.5" />
  <line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="${B.x}" y1="${B.y}" x2="${D.x}" y2="${D.y}" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <!-- 直角マーク -->
  <polyline points="${cx},${cy - 12} ${cx + 12},${cy - 12} ${cx + 12},${cy}" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  ${labelText(A.x, A.y - 8, "A")}
  ${labelText(B.x - 14, B.y + 6, "B", "end")}
  ${labelText(C.x, C.y + 18, "C")}
  ${labelText(D.x + 14, D.y + 6, "D", "start")}
  ${labelText(cx, cy + 5, "O", "end", "#94a3b8", 12)}
  ${labelText(cx + 35, cy - 25, `${d1}cm / ${d2}cm`, "start", "#fde68a", 12)}
  `);
}

// 15. 角出し型相似（階段状・直角が連なる図形）
export function createCornerExtensionSimilarity({ h1 = 3, w1 = 4, h2 = 6, w2 = 8 }) {
  const width = 320, height = 220;
  const A = { x: 50, y: 175 };
  const B = { x: 50, y: 55 };
  const C = { x: 130, y: 55 };
  const D = { x: 130, y: 115 };
  const E = { x: 250, y: 115 };
  const F = { x: 250, y: 175 };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y} ${E.x},${E.y} ${F.x},${F.y}" fill="#1e293b" fill-opacity="0.5" stroke="#6366f1" stroke-width="2.5" />
  <!-- 斜めの直線 AF -->
  <line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="${C.x}" y1="${C.y}" x2="${F.x}" y2="${F.y}" stroke="#38bdf8" stroke-width="2" />
  ${labelText(B.x - 12, (A.y+B.y)/2, `${h1+h2}cm`, "end", "#38bdf8", 12)}
  ${labelText((A.x+F.x)/2, A.y + 20, `${w1+w2}cm`, "middle", "#38bdf8", 12)}
  `);
}

// 16. 三角形の角共有面積比 (S1 : S2 = ab : AB)
export function createTriangleAngleShare({ r1 = 2, r2 = 3, R1 = 3, R2 = 2 }) {
  const width = 300, height = 220;
  const A = { x: 150, y: 35 };
  const B = { x: 50, y: 185 };
  const C = { x: 260, y: 185 };
  
  const f1 = r1 / (r1 + r2);
  const f2 = R1 / (R1 + R2);
  const D = { x: A.x + (B.x - A.x) * f1, y: A.y + (B.y - A.y) * f1 };
  const E = { x: A.x + (C.x - A.x) * f2, y: A.y + (C.y - A.y) * f2 };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <line x1="${D.x.toFixed(1)}" y1="${D.y.toFixed(1)}" x2="${E.x.toFixed(1)}" y2="${E.y.toFixed(1)}" stroke="#38bdf8" stroke-width="2.5" />
  <!-- △ADE (ハイライト) -->
  <polygon points="${A.x},${A.y} ${D.x.toFixed(1)},${D.y.toFixed(1)} ${E.x.toFixed(1)},${E.y.toFixed(1)}" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />
  ${labelText(A.x, A.y - 10, "A")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  ${labelText(D.x - 14, D.y + 4, "D", "end")}
  ${labelText(E.x + 14, E.y + 4, "E", "start")}
  ${labelText((A.x+D.x)/2 - 14, (A.y+D.y)/2, `${r1}`, "end", "#38bdf8", 12)}
  ${labelText((D.x+B.x)/2 - 14, (D.y+B.y)/2, `${r2}`, "end", "#38bdf8", 12)}
  ${labelText((A.x+E.x)/2 + 14, (A.y+E.y)/2, `${R1}`, "start", "#38bdf8", 12)}
  ${labelText((E.x+C.x)/2 + 14, (E.y+C.y)/2, `${R2}`, "start", "#38bdf8", 12)}
  `);
}

// 17. 台形の脚の延長（ピラミッド相似への発展）
export function createTrapezoidLegExtension({ top = 6, bottom = 10, h = 8 }) {
  const width = 300, height = 240;
  const P = { x: 150, y: 30 }; // 頂点P
  const scale = 14;
  const A = { x: 150 - (top * scale) / 2, y: 30 + 65 };
  const D = { x: 150 + (top * scale) / 2, y: 30 + 65 };
  const B = { x: 150 - (bottom * scale) / 2, y: 30 + 175 };
  const C = { x: 150 + (bottom * scale) / 2, y: 30 + 175 };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 台形ABCD (実線) -->
  <polygon points="${A.x},${A.y} ${D.x},${D.y} ${C.x},${C.y} ${B.x},${B.y}" fill="#1e293b" fill-opacity="0.6" stroke="#6366f1" stroke-width="2.5" />
  <!-- 延長部分 △PAD (点線) -->
  <polygon points="${P.x},${P.y} ${A.x},${A.y} ${D.x},${D.y}" fill="#38bdf8" fill-opacity="0.15" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  ${labelText(P.x, P.y - 10, "P")}
  ${labelText(A.x - 14, A.y + 4, "A", "end")}
  ${labelText(D.x + 14, D.y + 4, "D", "start")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  ${labelText(150, A.y - 8, `AD = ${top}cm`, "middle", "#38bdf8", 12)}
  ${labelText(150, B.y + 20, `BC = ${bottom}cm`, "middle", "#38bdf8", 12)}
  `);
}

// 18. 街灯と棒の影（相似比）
export function createShadowProblem({ lampH = 6, poleH = 2, shadowL = 3 }) {
  const width = 320, height = 200;
  const groundY = 165;
  const lampX = 50;
  const poleX = 170;
  const shadowEndX = 260; // 影の先端
  const lampTopY = 40;
  const poleTopY = groundY - (groundY - lampTopY) * ((shadowEndX - poleX) / (shadowEndX - lampX));
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 地面 -->
  <line x1="30" y1="${groundY}" x2="290" y2="${groundY}" stroke="#64748b" stroke-width="3" />
  <!-- 街灯 -->
  <line x1="${lampX}" y1="${groundY}" x2="${lampX}" y2="${lampTopY}" stroke="#fbbf24" stroke-width="4" />
  <circle cx="${lampX}" cy="${lampTopY}" r="6" fill="#fbbf24" />
  <!-- 光線（点線） -->
  <line x1="${lampX}" y1="${lampTopY}" x2="${shadowEndX}" y2="${groundY}" stroke="#fde68a" stroke-width="1.5" stroke-dasharray="4,4" />
  <!-- 棒 -->
  <line x1="${poleX}" y1="${groundY}" x2="${poleX}" y2="${poleTopY.toFixed(1)}" stroke="#38bdf8" stroke-width="3" />
  <!-- 影（太線） -->
  <line x1="${poleX}" y1="${groundY}" x2="${shadowEndX}" y2="${groundY}" stroke="#f43f5e" stroke-width="4" />
  ${labelText(lampX - 16, (groundY + lampTopY)/2, `${lampH}m`, "end", "#fbbf24", 12)}
  ${labelText(poleX - 12, (groundY + poleTopY)/2, `${poleH}m`, "end", "#38bdf8", 12)}
  ${labelText((poleX + shadowEndX)/2, groundY + 18, `影 ${shadowL}m`, "middle", "#f43f5e", 12)}
  ${labelText((lampX + poleX)/2, groundY + 18, "距離 = ? m", "middle", "#cbd5e1", 12)}
  `);
}

// 19. 正方形と内接円（四隅のすき間面積）
export function createSquareInscribedCircle({ side = 10 }) {
  const width = 240, height = 240;
  const x = 40, y = 40, s = 160;
  const cx = x + s/2, cy = y + s/2, r = s/2;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 正方形 (ハイライト) -->
  <rect x="${x}" y="${y}" width="${s}" height="${s}" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2.5" />
  <!-- 内接円（白抜き） -->
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5" />
  ${labelText(x - 14, y - 4, "A", "end")}
  ${labelText(x + s + 14, y - 4, "D", "start")}
  ${labelText(x - 14, y + s + 14, "B", "end")}
  ${labelText(x + s + 14, y + s + 14, "C", "start")}
  ${labelText(cx, y - 10, `${side} cm`, "middle", "#38bdf8", 12)}
  ${labelText(cx, cy + 5, "着色部分 = ? cm²", "middle", "#fde68a", 13)}
  `);
}

// 20. 太極図（S字半円による面積分割）
export function createYinYangDivision({ r = 6 }) {
  const width = 240, height = 240;
  const cx = 120, cy = 120, R = 80;
  const rSmall = R / 2;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 全体円 -->
  <circle cx="${cx}" cy="${cy}" r="${R}" fill="#1e293b" stroke="#94a3b8" stroke-width="2.5" />
  <!-- S字着色領域 -->
  <path d="M ${cx},${cy - R} A ${R},${R} 0 0,1 ${cx},${cy + R} A ${rSmall},${rSmall} 0 0,1 ${cx},${cy} A ${rSmall},${rSmall} 0 0,0 ${cx},${cy - R} Z" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  ${labelText(cx, 25, `半径 = ${r}cm`, "middle", "#38bdf8", 12)}
  ${labelText(cx, cy + 6, "面積 = ? cm²", "middle", "#fde68a", 13)}
  `);
}

// 21. たこ形・直交対角線
export function createKiteDiagonals({ d1 = 10, d2 = 14 }) {
  const width = 260, height = 240;
  const cx = 130, cy = 105;
  const A = { x: cx, y: 35 };
  const B = { x: 60, y: cy };
  const C = { x: cx, y: 205 };
  const D = { x: 200, y: cy };
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}" fill="#1e293b" fill-opacity="0.5" stroke="#6366f1" stroke-width="2.5" />
  <line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="${B.x}" y1="${B.y}" x2="${D.x}" y2="${D.y}" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
  <!-- 直角マーク -->
  <polyline points="${cx},${cy - 10} ${cx + 10},${cy - 10} ${cx + 10},${cy}" fill="none" stroke="#f59e0b" stroke-width="1.5" />
  ${labelText(A.x, A.y - 8, "A")}
  ${labelText(B.x - 14, B.y + 6, "B", "end")}
  ${labelText(C.x, C.y + 18, "C")}
  ${labelText(D.x + 14, D.y + 6, "D", "start")}
  ${labelText(cx + 25, (A.y + C.y)/2 + 20, `${d2}cm`, "start", "#38bdf8", 12)}
  ${labelText((B.x + D.x)/2 - 25, cy - 8, `${d1}cm`, "end", "#38bdf8", 12)}
  `);
}

// 22. 直角三角形に内接する半円
export function createInscribedSemicircle({ a = 6, b = 8 }) {
  const width = 300, height = 220;
  const B = { x: 50, y: 180 };
  const C = { x: 250, y: 180 };
  const A = { x: 50, y: 50 };
  // 底辺 BC 上に直径を持つ半円 (中心 O=(B.x + r, B.y), 斜辺 AC に接する)
  // r = (a * b) / (b + c) = (6 * 8) / (8 + 10) = 48/18 = 8/3 ≈ 2.67
  const c = Math.sqrt(a*a + b*b);
  const rVal = (a * b) / (b + c);
  const pxScale = 200 / b;
  const rPx = rVal * pxScale;
  const Ox = B.x + rPx;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <!-- 内接半円 -->
  <path d="M ${B.x},${B.y} A ${rPx.toFixed(1)},${rPx.toFixed(1)} 0 0,1 ${(B.x + rPx*2).toFixed(1)},${B.y} Z" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />
  <circle cx="${Ox.toFixed(1)}" cy="${B.y}" r="3" fill="#f59e0b" />
  ${labelText(A.x - 14, A.y + 4, "A", "end")}
  ${labelText(B.x - 14, B.y + 8, "B", "end")}
  ${labelText(C.x + 14, C.y + 8, "C", "start")}
  ${labelText(Ox, B.y + 20, "O", "middle", "#f59e0b", 12)}
  ${labelText(B.x - 14, (A.y+B.y)/2, `${a}cm`, "end", "#38bdf8", 12)}
  ${labelText((B.x+C.x)/2, B.y + 22, `BC = ${b}cm`, "middle", "#38bdf8", 12)}
  `);
}

// 23. 正方形内の十字型道路（等積変形）
export function createRoadInSquare({ side = 20, roadW = 2 }) {
  const width = 240, height = 240;
  const x = 40, y = 40, s = 160;
  const rw = (roadW / side) * s;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <rect x="${x}" y="${y}" width="${s}" height="${s}" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />
  <!-- 十字道路 -->
  <rect x="${x + (s - rw)/2}" y="${y}" width="${rw}" height="${s}" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
  <rect x="${x}" y="${y + (s - rw)/2}" width="${s}" height="${rw}" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
  ${labelText(x + s/2, y - 10, `${side} m`, "middle", "#38bdf8", 12)}
  ${labelText(x + (s - rw)/2 + rw/2, y + 25, `幅 ${roadW}m`, "middle", "#fde68a", 10)}
  ${labelText(x + s/2, y + s + 22, "畑（着色部）の面積 = ? ㎡", "middle", "#fde68a", 12)}
  `);
}

// 24. 円に内接する正方形（外円と内円の面積比 2:1）
export function createCircleInscribedSquare({ r = 5 }) {
  const width = 240, height = 240;
  const cx = 120, cy = 120, R = 80;
  
  return wrapSvg(`0 0 ${width} ${height}`, `
  <!-- 外円 -->
  <circle cx="${cx}" cy="${cy}" r="${R}" fill="#fbbf24" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2.5" />
  <!-- 内接正方形 -->
  <rect x="${cx - R * 0.7071}" y="${cy - R * 0.7071}" width="${R * 1.4142}" height="${R * 1.4142}" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5" />
  <line x1="${cx - R}" y1="${cy}" x2="${cx + R}" y2="${cy}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
  ${labelText(cx, cy - 6, `半径 ${r}cm`, "middle", "#38bdf8", 12)}
  ${labelText(cx, 25, "円と正方形のすき間面積 = ? cm²", "middle", "#fde68a", 12)}
  `);
}
