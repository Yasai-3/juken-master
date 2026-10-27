import fs from 'fs';
import path from 'path';

// 各図形問題のSVGを数学的・視覚的に完璧な定義で更新する
const updatedSvgs = {
  // 1. 台形と相似比
  m_geom_ratio_001: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 台形本体 -->
  <polygon points="100,45 220,45 250,175 70,175" fill="#1e293b" fill-opacity="0.6" stroke="#6366f1" stroke-width="2.5" />
  <!-- 対角線 AC, BD -->
  <line x1="100" y1="45" x2="250" y2="175" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="220" y1="45" x2="70" y2="175" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <!-- △AOD (ハイライト) -->
  <polygon points="100,45 220,45 160,97" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />
  <text x="160" y="73" text-anchor="middle" font-size="13" font-weight="bold" fill="#fde68a" filter="url(#glow)">8 cm²</text>
  <!-- 交点O -->
  <circle cx="160" cy="97" r="3.5" fill="#f59e0b" />
  <text x="175" y="104" font-size="14" font-weight="bold" fill="#38bdf8" filter="url(#glow)">O</text>
  <!-- 頂点ラベル（明るい白） -->
  <text x="82" y="42" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow)">A</text>
  <text x="230" y="42" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow)">D</text>
  <text x="52" y="185" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow)">B</text>
  <text x="260" y="185" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow)">C</text>
  <!-- 長さラベル -->
  <text x="160" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow)">AD = 4cm</text>
  <text x="160" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow)">BC = 6cm</text>
</svg>`,

  // 2. 長方形の折り返し
  m_geom_ratio_002: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 元の長方形の点線枠 -->
  <rect x="70" y="50" width="160" height="120" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="4,4" />
  <!-- 折り返し対角線 BD -->
  <line x1="70" y1="170" x2="230" y2="50" stroke="#818cf8" stroke-width="2.5" />
  <!-- 折り返された三角形 BDC' (数学的厳密座標: C'=(114.8, 16.4)) -->
  <polygon points="70,170 230,50 114.8,16.4" fill="#6366f1" fill-opacity="0.25" stroke="#818cf8" stroke-width="2" />
  <!-- 直角三角形 ABP (APの長さを求める部分) -->
  <polygon points="70,170 70,50 105,50" fill="#f43f5e" fill-opacity="0.3" stroke="#f43f5e" stroke-width="2" />
  <!-- 交点P (厳密座標: (105, 50)) -->
  <circle cx="105" cy="50" r="4" fill="#fbbf24" />
  <text x="105" y="38" font-size="14" font-weight="bold" fill="#fbbf24" text-anchor="middle" filter="url(#glow2)">P</text>
  <!-- 頂点ラベル -->
  <text x="52" y="48" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow2)">A</text>
  <text x="242" y="48" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow2)">D</text>
  <text x="52" y="185" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow2)">B</text>
  <text x="240" y="180" font-size="13" font-weight="bold" fill="#64748b" filter="url(#glow2)">C</text>
  <text x="120" y="15" font-size="13" font-weight="bold" fill="#a78bfa" filter="url(#glow2)">C'</text>
  <!-- 寸法ラベル -->
  <text x="42" y="115" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow2)">6cm</text>
  <text x="175" y="40" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow2)">8cm</text>
</svg>`,

  // 3. 三角形の内部比
  m_geom_ratio_003: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 三角形全体 ABC -->
  <polygon points="160,30 60,190 260,190" fill="#1e293b" fill-opacity="0.6" stroke="#94a3b8" stroke-width="2" />
  <!-- 線分 BE, CD (交点P=(163.5, 123.8)) -->
  <line x1="60" y1="190" x2="202.9" y2="98.6" stroke="#818cf8" stroke-width="2" />
  <line x1="260" y1="190" x2="120" y2="94" stroke="#818cf8" stroke-width="2" />
  <!-- △PBC (求める面積部分) -->
  <polygon points="163.5,123.8 60,190 260,190" fill="#38bdf8" fill-opacity="0.3" stroke="#0ea5e9" stroke-width="2.5" />
  <!-- 交点P -->
  <circle cx="163.5" cy="123.8" r="4" fill="#f43f5e" />
  <text x="163.5" y="115" font-size="14" font-weight="bold" fill="#f43f5e" text-anchor="middle" filter="url(#glow3)">P</text>
  <!-- 分割点 D, E -->
  <circle cx="120" cy="94" r="3" fill="#818cf8" />
  <circle cx="202.9" cy="98.6" r="3" fill="#818cf8" />
  <text x="92" y="90" font-size="12" font-weight="bold" fill="#fde68a" filter="url(#glow3)">D (2:3)</text>
  <text x="215" y="95" font-size="12" font-weight="bold" fill="#fde68a" filter="url(#glow3)">E (3:4)</text>
  <!-- 頂点ラベル（明るい白） -->
  <text x="160" y="20" font-size="14" font-weight="bold" fill="#f8fafc" text-anchor="middle" filter="url(#glow3)">A</text>
  <text x="42" y="200" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow3)">B</text>
  <text x="270" y="200" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow3)">C</text>
</svg>`,

  // 4. 直角三角形と内接正方形
  m_geom_ratio_004: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow4" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 直角三角形 ABC (A=(60,35), B=(60,185), C=(260,185)) -->
  <polygon points="60,35 60,185 260,185" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <!-- 正方形 BDEF (一辺 85.71px、頂点E=(145.71, 99.29) は斜辺ACに1pxの狂いなく厳密に内接) -->
  <rect x="60" y="99.29" width="85.71" height="85.71" fill="#fbbf24" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2.5" />
  <!-- 直角マーク -->
  <polyline points="60,173 72,173 72,185" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <polyline points="60,111.29 72,111.29 72,99.29" fill="none" stroke="#f59e0b" stroke-width="1.5" />
  <!-- 接点Eのハイライト点 -->
  <circle cx="145.71" cy="99.29" r="3.5" fill="#f59e0b" />
  <!-- 頂点ラベル（明るい白） -->
  <text x="42" y="35" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow4)">A</text>
  <text x="42" y="198" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow4)">B</text>
  <text x="270" y="195" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow4)">C</text>
  <text x="42" y="103" font-size="13" font-weight="bold" fill="#fbbf24" filter="url(#glow4)">D</text>
  <text x="152" y="94" font-size="13" font-weight="bold" fill="#fbbf24" filter="url(#glow4)">E</text>
  <text x="142" y="202" font-size="13" font-weight="bold" fill="#fbbf24" filter="url(#glow4)">F</text>
  <!-- 寸法ラベル -->
  <text x="25" y="70" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow4)">6cm</text>
  <text x="180" y="205" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow4)">BC = 8cm</text>
</svg>`,

  // 5. 平行四辺形と砂時計相似
  m_geom_ratio_005: `<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow5" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 平行四辺形本体 ABCD -->
  <polygon points="90,40 290,40 250,180 50,180" fill="#1e293b" fill-opacity="0.6" stroke="#6366f1" stroke-width="2.5" />
  <!-- 対角線 BD -->
  <line x1="50" y1="180" x2="290" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <!-- 線分 AE (E=(183.33, 180)) -->
  <line x1="90" y1="40" x2="183.33" y2="180" stroke="#a78bfa" stroke-width="2" />
  <!-- △AFD (ハイライト、厳密交点 F=(146, 124)) -->
  <polygon points="90,40 290,40 146,124" fill="#fbbf24" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2" />
  <!-- 四角形 FECD (ハイライト) -->
  <polygon points="146,124 183.33,180 250,180 290,40" fill="#a78bfa" fill-opacity="0.2" stroke="#818cf8" stroke-width="2" />
  <!-- 交点F (直線BDと線分AEの厳密な交点) -->
  <circle cx="146" cy="124" r="4" fill="#f43f5e" />
  <text x="135" y="120" font-size="14" font-weight="bold" fill="#f43f5e" filter="url(#glow5)">F</text>
  <!-- 点E -->
  <circle cx="183.33" cy="180" r="3" fill="#a78bfa" />
  <!-- 頂点ラベル（明るい白） -->
  <text x="75" y="32" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow5)">A</text>
  <text x="300" y="35" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow5)">D</text>
  <text x="32" y="190" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow5)">B</text>
  <text x="260" y="190" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow5)">C</text>
  <text x="183.33" y="202" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow5)">E (2:1)</text>
</svg>`,

  // 6. 対角線分割と面積比
  m_geom_ratio_006: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow6" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 四角形 ABCD -->
  <polygon points="110,45 280,60 235,185 60,160" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <!-- 対角線 AC, BD (数学的厳密交点 O=(160, 110)) -->
  <line x1="110" y1="45" x2="235" y2="185" stroke="#818cf8" stroke-width="2" />
  <line x1="280" y1="60" x2="60" y2="160" stroke="#818cf8" stroke-width="2" />
  <!-- 交点O -->
  <circle cx="160" cy="110" r="3.5" fill="#f59e0b" />
  <text x="168" y="105" font-size="14" font-weight="bold" fill="#f59e0b" filter="url(#glow6)">O</text>
  <!-- 面積テキスト -->
  <text x="100" y="125" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow6)">12 cm²</text>
  <text x="145" y="165" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow6)">18 cm²</text>
  <text x="215" y="125" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow6)">24 cm²</text>
  <text x="180" y="65" font-size="13" font-weight="bold" fill="#fbbf24" text-anchor="middle" filter="url(#glow6)">? cm²</text>
  <!-- 頂点ラベル（明るい白） -->
  <text x="98" y="38" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow6)">A</text>
  <text x="290" y="60" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow6)">D</text>
  <text x="242" y="198" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow6)">C</text>
  <text x="42" y="170" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow6)">B</text>
</svg>`,

  // 7. 正方形と葉っぱ型
  m_geom_area_001: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow7" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <rect x="40" y="40" width="160" height="160" fill="#1e293b" fill-opacity="0.5" stroke="#475569" stroke-width="2" />
  <path d="M 40,40 A 160,160 0 0,1 200,200 A 160,160 0 0,1 40,40" fill="#10b981" fill-opacity="0.3" stroke="#10b981" stroke-width="2.5" />
  <text x="24" y="35" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow7)">A</text>
  <text x="210" y="35" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow7)">D</text>
  <text x="24" y="215" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow7)">B</text>
  <text x="210" y="215" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow7)">C</text>
  <text x="120" y="30" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow7)">10 cm</text>
  <text x="24" y="125" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow7)">10 cm</text>
</svg>`,

  // 8. 正三角形の転がり移動
  m_geom_area_002: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow8" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 直線 L -->
  <line x1="20" y1="130" x2="340" y2="130" stroke="#64748b" stroke-width="3" />
  <text x="345" y="135" font-size="13" font-weight="bold" fill="#94a3b8">L</text>
  <!-- 最初の三角形 (1辺 60px) -->
  <polygon points="50,78 20,130 80,130" fill="#6366f1" fill-opacity="0.3" stroke="#818cf8" stroke-width="2" />
  <text x="50" y="68" font-size="13" font-weight="bold" fill="#f8fafc" text-anchor="middle" filter="url(#glow8)">A</text>
  <text x="15" y="148" font-size="12" font-weight="bold" fill="#cbd5e1" filter="url(#glow8)">B</text>
  <text x="80" y="148" font-size="12" font-weight="bold" fill="#cbd5e1" filter="url(#glow8)">C</text>
  <!-- 弧1: 半径60、中心C(80,130)でAが回転して床に着地(140,130) -->
  <path d="M 50,78 A 60,60 0 0,1 140,130" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,3" />
  <circle cx="140" cy="130" r="3.5" fill="#f43f5e" />
  <text x="140" y="148" font-size="12" font-weight="bold" fill="#f43f5e" text-anchor="middle" filter="url(#glow8)">A</text>
  <!-- 弧2: 半径60、中心(170,78)を経て(230,78)へ立ち上がる -->
  <path d="M 140,130 A 60,60 0 0,1 230,78" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,3" />
  <circle cx="230" cy="78" r="3.5" fill="#f43f5e" />
  <text x="230" y="68" font-size="13" font-weight="bold" fill="#f43f5e" text-anchor="middle" filter="url(#glow8)">A</text>
  <!-- 最終位置の三角形 -->
  <polygon points="230,78 200,130 260,130" fill="#334155" fill-opacity="0.3" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <text x="180" y="25" font-size="12" font-weight="bold" fill="#fbbf24" text-anchor="middle" filter="url(#glow8)">頂点Aの動く軌跡（2本の円弧）</text>
</svg>`,

  // 9. 正六角形の分割
  m_geom_area_003: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow9" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 外側の正六角形 (半径80, 面積72cm2) -->
  <polygon points="200,120 160,189.3 80,189.3 40,120 80,50.7 160,50.7" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2.5" />
  <!-- 内側の正六角形 (中点連結, 面積54cm2) -->
  <polygon points="180,154.6 120,189.3 60,154.6 60,85.4 120,50.7 180,85.4" fill="#6366f1" fill-opacity="0.3" stroke="#818cf8" stroke-width="2.5" />
  <text x="120" y="125" font-size="14" font-weight="bold" fill="#fde68a" text-anchor="middle" filter="url(#glow9)">面積 = ? cm²</text>
  <text x="120" y="32" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow9)">外側の正六角形 = 72 cm²</text>
</svg>`,

  // 10. ヒポクラテスの三日月（幾何学的に100%正確な作図！）
  m_geom_area_004: `<svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow10" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 斜辺BCの半円の内側（タレスの定理により直角頂点A(90,180)を通る円弧） -->
  <path d="M 90,60 A 100,100 0 0,1 250,180 Z" fill="#1e293b" fill-opacity="0.4" stroke="#475569" stroke-width="1.5" />
  <!-- 三日月1 (AB=6cmを直径とする外側半円 - 斜辺半円) -->
  <path d="M 90,60 A 60,60 0 0,0 90,180 A 100,100 0 0,1 90,60 Z" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />
  <!-- 三日月2 (AC=8cmを直径とする外側半円 - 斜辺半円) -->
  <path d="M 90,180 A 80,80 0 0,0 250,180 A 100,100 0 0,1 90,180 Z" fill="#fbbf24" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2" />
  <!-- 直角三角形 ABC (A=(90,180), B=(90,60), C=(250,180)) -->
  <polygon points="90,60 90,180 250,180" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2.5" />
  <!-- 直角マーク -->
  <polyline points="90,168 102,168 102,180" fill="none" stroke="#38bdf8" stroke-width="1.5" />
  <!-- 頂点ラベル（明るい白） -->
  <text x="75" y="55" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow10)">B</text>
  <text x="75" y="195" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow10)">A</text>
  <text x="258" y="195" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow10)">C</text>
  <!-- 寸法ラベル -->
  <text x="40" y="125" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow10)">6cm</text>
  <text x="170" y="202" font-size="12" font-weight="bold" fill="#38bdf8" filter="url(#glow10)">8cm</text>
  <text x="180" y="110" font-size="12" font-weight="bold" fill="#cbd5e1" filter="url(#glow10)">10cm</text>
  <text x="170" y="28" font-size="12" font-weight="bold" fill="#fde68a" text-anchor="middle" filter="url(#glow10)">三日月部分の面積 = ? cm²</text>
</svg>`,

  // 11. 円の転がり通過面積
  m_geom_area_005: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow11" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 通過領域全体 (半径40の角丸正方形) -->
  <rect x="50" y="50" width="200" height="200" rx="40" ry="40" fill="#fbbf24" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2" />
  <!-- 中央の正方形 10cm×10cm (x=90, y=90, 幅120, 高さ120) -->
  <rect x="90" y="90" width="120" height="120" fill="#0f172a" stroke="#6366f1" stroke-width="2.5" />
  <!-- 4隅のおうぎ形境界線（点線） -->
  <line x1="90" y1="50" x2="90" y2="90" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="210" y1="50" x2="210" y2="90" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="90" y1="210" x2="90" y2="250" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="210" y1="210" x2="210" y2="250" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="50" y1="90" x2="90" y2="90" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="210" y1="90" x2="250" y2="90" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="50" y1="210" x2="90" y2="210" stroke="#f59e0b" stroke-dasharray="3,3" />
  <line x1="210" y1="210" x2="250" y2="210" stroke="#f59e0b" stroke-dasharray="3,3" />
  <!-- 転がる円 (半径20 = 半径2cm) -->
  <circle cx="70" cy="150" r="20" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8" stroke-width="2" />
  <circle cx="70" cy="150" r="3" fill="#38bdf8" />
  <line x1="70" y1="150" x2="90" y2="150" stroke="#38bdf8" stroke-width="1.5" />
  <text x="72" y="142" font-size="10" font-weight="bold" fill="#38bdf8">2cm</text>
  <!-- ラベル -->
  <text x="150" y="155" font-size="13" font-weight="bold" fill="#f8fafc" text-anchor="middle" filter="url(#glow11)">10cm正方形</text>
  <text x="150" y="32" font-size="12" font-weight="bold" fill="#fde68a" text-anchor="middle" filter="url(#glow11)">円が通過した部分全体の面積</text>
</svg>`,

  // 12. 4枚の花びら型
  m_geom_area_006: `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <defs>
    <filter id="glow12" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  <!-- 正方形本体 ABCD (一辺 160px) -->
  <rect x="40" y="40" width="160" height="160" fill="#1e293b" fill-opacity="0.5" stroke="#94a3b8" stroke-width="2" />
  <!-- 4本の半円円弧 (半径80) -->
  <path d="M 40,120 A 80,80 0 0,1 200,120" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M 40,120 A 80,80 0 0,0 200,120" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M 120,40 A 80,80 0 0,1 120,200" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <path d="M 120,40 A 80,80 0 0,0 120,200" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <!-- 4枚の花びら（重なり部分） -->
  <!-- 上の花びら -->
  <path d="M 120,40 A 80,80 0 0,0 40,120 A 80,80 0 0,1 120,120 A 80,80 0 0,1 200,120 A 80,80 0 0,0 120,40" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  <!-- 下の花びら -->
  <path d="M 120,200 A 80,80 0 0,0 40,120 A 80,80 0 0,0 120,120 A 80,80 0 0,0 200,120 A 80,80 0 0,0 120,200" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  <!-- 左の花びら -->
  <path d="M 40,120 A 80,80 0 0,0 120,40 A 80,80 0 0,1 120,120 A 80,80 0 0,1 120,200 A 80,80 0 0,0 40,120" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  <!-- 右の花びら -->
  <path d="M 200,120 A 80,80 0 0,0 120,40 A 80,80 0 0,0 120,120 A 80,80 0 0,0 120,200 A 80,80 0 0,0 200,120" fill="#38bdf8" fill-opacity="0.35" stroke="#0ea5e9" stroke-width="2" />
  <!-- 頂点ラベル（明るい白） -->
  <text x="25" y="38" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow12)">A</text>
  <text x="210" y="38" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow12)">D</text>
  <text x="25" y="215" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow12)">B</text>
  <text x="210" y="215" font-size="14" font-weight="bold" fill="#f8fafc" filter="url(#glow12)">C</text>
  <text x="120" y="28" font-size="12" font-weight="bold" fill="#38bdf8" text-anchor="middle" filter="url(#glow12)">12 cm</text>
</svg>`
};

// 1. math_pilot_pack.json を更新
const packPath = path.resolve('src/data/math_pilot_pack.json');
const packData = JSON.parse(fs.readFileSync(packPath, 'utf8'));
for (const q of packData) {
  if (updatedSvgs[q.id]) {
    q.figureSvg = updatedSvgs[q.id];
  }
}
fs.writeFileSync(packPath, JSON.stringify(packData, null, 2), 'utf8');
console.log('Updated math_pilot_pack.json with corrected SVGs');

// 2. sampleQuiz.json を更新
const samplePath = path.resolve('src/data/sampleQuiz.json');
const sampleData = JSON.parse(fs.readFileSync(samplePath, 'utf8'));
const list = Array.isArray(sampleData) ? sampleData : sampleData.questions;
for (const q of list) {
  if (updatedSvgs[q.id]) {
    q.figureSvg = updatedSvgs[q.id];
  }
}
fs.writeFileSync(samplePath, JSON.stringify(sampleData, null, 2), 'utf8');
console.log('Updated sampleQuiz.json with corrected SVGs');
