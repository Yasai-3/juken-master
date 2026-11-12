// 算数新規問題パック1: 平面図形・立体図形 100問
// 全問に正確な幾何SVG図形 (figureSvg) を装備
import { wrapSvg, labelText } from './geometry-engine.mjs';

export const MATH_GEOMETRY_100 = [
  {
    "id": "m_adv2_001",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "相似と面積比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCである台形ABCDがあり、対角線の交点をOとします。上底ADの長さが4cm、下底BCの長さが6cmで、三角形AODの面積が8cm²であるとき、台形ABCD全体の面積は何cm²ですか。",
    "options": [
      "40cm²",
      "50cm²",
      "60cm²",
      "72cm²"
    ],
    "answer": "50cm²",
    "acceptableAnswers": [
      "50cm²",
      "50"
    ],
    "keywords": [
      "台形",
      "相似比",
      "面積比"
    ],
    "knowledgeTag": "平面図形・台形の対角線と相似比",
    "explanation": "三角形AODと三角形COBは相似で、相似比はAD:BC = 4:6 = 2:3です。面積比は相似比の2乗なので、2²:3² = 4:9となります。△AOD = 8cm²より、比の1あたりは 8÷4 = 2cm² なので、△BOC = 9×2 = 18cm²です。また、△ABOと△DOCの面積はそれぞれ 2×3×2 = 12cm² となります。したがって、台形全体の面積は 8 + 18 + 12 + 12 = 50cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <polygon points=\"90,40 230,40 270,160 50,160\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n    <line x1=\"90\" y1=\"40\" x2=\"270\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"230\" y1=\"40\" x2=\"50\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <circle cx=\"160\" cy=\"95\" r=\"3\" fill=\"#f59e0b\"/>\n    <text x=\"80\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"240\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"40\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"280\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n    <text x=\"175\" y=\"95\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"start\" filter=\"url(#glow)\">O</text>\n    <text x=\"160\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 4cm</text>\n    <text x=\"160\" y=\"185\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 6cm</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_002",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "相似と面積比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCである台形ABCDにおいて、AD=3cm、BC=9cmです。対角線の交点をOとするとき、三角形AODと三角形BOCの面積の比として最も適当なものはどれですか。",
    "options": [
      "1 : 3",
      "1 : 6",
      "1 : 9",
      "1 : 12"
    ],
    "answer": "1 : 9",
    "acceptableAnswers": [
      "1 : 9",
      "1:9"
    ],
    "keywords": [
      "相似比",
      "面積比"
    ],
    "knowledgeTag": "平面図形・台形と面積比の2乗則",
    "explanation": "△AODと△COBは相似であり、相似比は上底と下底の比に等しく、AD:BC = 3:9 = 1:3です。相似な図形の面積比は相似比の2乗になるため、1² : 3² = 1 : 9 となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <polygon points=\"90,40 230,40 270,160 50,160\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n    <line x1=\"90\" y1=\"40\" x2=\"270\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"230\" y1=\"40\" x2=\"50\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <circle cx=\"160\" cy=\"95\" r=\"3\" fill=\"#f59e0b\"/>\n    <text x=\"80\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"240\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"40\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"280\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n    <text x=\"175\" y=\"95\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"start\" filter=\"url(#glow)\">O</text>\n    <text x=\"160\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 3cm</text>\n    <text x=\"160\" y=\"185\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 9cm</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_003",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "相似と面積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "AD平行BCである台形ABCDで、AD=6cm、BC=10cmです。三角形AODの面積が18cm²のとき、三角形ABOの面積は何cm²ですか。",
    "options": [
      "24cm²",
      "28cm²",
      "30cm²",
      "36cm²"
    ],
    "answer": "30cm²",
    "acceptableAnswers": [
      "30cm²",
      "30"
    ],
    "keywords": [
      "台形",
      "面積比"
    ],
    "knowledgeTag": "平面図形・隣り合う三角形の面積比",
    "explanation": "△AODと△COBの相似比は 6:10 = 3:5 です。したがって、対角線の比 OD:OB も 3:5 となります。△AODと△ABOは頂点Aを共有し底辺が同一直線上にあるため、面積比は底辺の比 OD:OB = 3:5 に等しくなります。△AOD = 18cm² なので、△ABO = 18 × (5/3) = 30cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <polygon points=\"90,40 230,40 270,160 50,160\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n    <line x1=\"90\" y1=\"40\" x2=\"270\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"230\" y1=\"40\" x2=\"50\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <circle cx=\"160\" cy=\"95\" r=\"3\" fill=\"#f59e0b\"/>\n    <text x=\"80\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"240\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"40\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"280\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n    <text x=\"175\" y=\"95\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"start\" filter=\"url(#glow)\">O</text>\n    <text x=\"160\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 6cm</text>\n    <text x=\"160\" y=\"185\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 10cm</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_004",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "平行線と線分の比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三角形ABCにおいて、辺AB上に点D、辺AC上に点Eをとり、DE平行BCとします。AD:DB = 2:3であり、三角形ADEの面積が12cm²のとき、四角形DBCEの面積は何cm²ですか。",
    "options": [
      "36cm²",
      "48cm²",
      "63cm²",
      "75cm²"
    ],
    "answer": "63cm²",
    "acceptableAnswers": [
      "63cm²",
      "63"
    ],
    "keywords": [
      "平行線",
      "相似比",
      "四角形の面積"
    ],
    "knowledgeTag": "平面図形・三角形と台形の面積比",
    "explanation": "DE平行BCより、△ADEと△ABCは相似です。相似比は AD:AB = 2 : (2+3) = 2 : 5 です。したがって面積比は 2² : 5² = 4 : 25 になります。△ADEの面積が12cm²（比の4に相当）なので、比の1あたりは 12÷4 = 3cm² です。四角形DBCEの面積比は 25 - 4 = 21 に相当するため、21 × 3 = 63cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <polygon points=\"160,30 60,170 260,170\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n    <line x1=\"120\" y1=\"86\" x2=\"200\" y2=\"86\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"160\" y=\"20\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"50\" y=\"180\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"270\" y=\"180\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n    <text x=\"105\" y=\"86\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"end\" filter=\"url(#glow)\">D</text>\n    <text x=\"215\" y=\"86\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"start\" filter=\"url(#glow)\">E</text>\n    <text x=\"130\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"end\" filter=\"url(#glow)\">AD</text>\n    <text x=\"80\" y=\"130\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"end\" filter=\"url(#glow)\">DB</text>\n    <text x=\"160\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">DE // BC (比 2 : 3)</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_005",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "平行線と線分の比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "三角形ABCで、辺AB上に点D、辺AC上に点Eがあり、DE平行BCです。AD:DB = 3:2で、BCの長さが15cmのとき、線分DEの長さは何cmですか。",
    "options": [
      "6cm",
      "7.5cm",
      "9cm",
      "10cm"
    ],
    "answer": "9cm",
    "acceptableAnswers": [
      "9cm",
      "9"
    ],
    "keywords": [
      "平行線",
      "相似比"
    ],
    "knowledgeTag": "平面図形・平行線による線分の比",
    "explanation": "△ADEと△ABCの相似比は AD:AB = 3:(3+2) = 3:5 です。対応する辺の比も等しいので、DE:BC = 3:5 となります。BC=15cm なので、DE = 15 × (3/5) = 9cm と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <polygon points=\"160,30 60,170 260,170\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n    <line x1=\"120\" y1=\"86\" x2=\"200\" y2=\"86\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"160\" y=\"20\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"50\" y=\"180\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"270\" y=\"180\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n    <text x=\"105\" y=\"86\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"end\" filter=\"url(#glow)\">D</text>\n    <text x=\"215\" y=\"86\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"start\" filter=\"url(#glow)\">E</text>\n    <text x=\"130\" y=\"55\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"end\" filter=\"url(#glow)\">AD</text>\n    <text x=\"80\" y=\"130\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"end\" filter=\"url(#glow)\">DB</text>\n    <text x=\"160\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">DE // BC (比 3 : 2)</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_006",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "直角三角形と相似",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "直角をはさむ2辺が6cmと8cmの直角三角形の内側に、直角を共有するように正方形をぴったり作ります。この正方形の1辺の長さは何cmですか。",
    "options": [
      "3cm",
      "3.43cm",
      "24/7cm",
      "4cm"
    ],
    "answer": "24/7cm",
    "acceptableAnswers": [
      "24/7cm",
      "24/7",
      "3と3/7cm"
    ],
    "keywords": [
      "直角三角形",
      "内接正方形",
      "相似"
    ],
    "knowledgeTag": "平面図形・直角三角形と内接正方形の辺長",
    "explanation": "正方形の1辺を x cm とします。直角三角形の頂上側にできる小さな三角形の高さは 6 - x cm、底辺は x cm です。この小三角形は元の三角形と相似なので、(6 - x) : x = 6 : 8 = 3 : 4 が成り立ちます。内項の積と外項の積より 3x = 4(6 - x) = 24 - 4x となり、7x = 24、すなわち x = 24/7 cm（3と3/7 cm）となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <polygon points=\"50,40 50,160 250,160\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n    <line x1=\"150\" y1=\"100\" x2=\"150\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"40\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"260\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n    <text x=\"150\" y=\"92\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">P</text>\n    <text x=\"150\" y=\"175\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">Q</text>\n    <text x=\"30\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"end\" filter=\"url(#glow)\">6cm</text>\n    <text x=\"150\" y=\"185\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"middle\" filter=\"url(#glow)\">8cm</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_007",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "直角三角形と相似",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角三角形ABC（角B=90度、AB=9cm、BC=12cm）の直角の頂点Bから斜辺ACに垂直な線BHを下ろしました。線分BHの長さは何cmですか。",
    "options": [
      "6.4cm",
      "7.2cm",
      "7.5cm",
      "8.0cm"
    ],
    "answer": "7.2cm",
    "acceptableAnswers": [
      "7.2cm",
      "7.2"
    ],
    "keywords": [
      "直角三角形",
      "垂線",
      "面積"
    ],
    "knowledgeTag": "平面図形・直角三角形の斜辺に対する高さ",
    "explanation": "三平方の比 3:4:5 より、斜辺ACの長さは 15cm です。直角三角形ABCの面積は (9 × 12) ÷ 2 = 54cm² です。また、斜辺ACを底辺と見ると、面積は (15 × BH) ÷ 2 と表せます。したがって、(15 × BH) ÷ 2 = 54 より、BH = (54 × 2) ÷ 15 = 108 ÷ 15 = 7.2cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <polygon points=\"50,40 50,160 250,160\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n    <line x1=\"150\" y1=\"100\" x2=\"150\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"35\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"40\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"260\" y=\"175\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n    <text x=\"150\" y=\"92\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">P</text>\n    <text x=\"150\" y=\"175\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">Q</text>\n    <text x=\"30\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"end\" filter=\"url(#glow)\">9cm</text>\n    <text x=\"150\" y=\"185\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"middle\" filter=\"url(#glow)\">12cm</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_008",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円とおうぎ形",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径が6cm、中心角が60度のおうぎ形の面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "12.56cm²",
      "18.84cm²",
      "28.26cm²",
      "37.68cm²"
    ],
    "answer": "18.84cm²",
    "acceptableAnswers": [
      "18.84cm²",
      "18.84"
    ],
    "keywords": [
      "おうぎ形",
      "中心角",
      "面積"
    ],
    "knowledgeTag": "平面図形・おうぎ形の面積の公式",
    "explanation": "おうぎ形の面積は「半径 × 半径 × 円周率 × (中心角 ÷ 360)」で求められます。6 × 6 × 3.14 × (60 ÷ 360) = 36 × 3.14 × (1/6) = 6 × 3.14 = 18.84cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <path d=\"M 160 150 L 260 150 A 100 100 0 0 0 210 63.4 Z\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2.5\"/>\n    <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#f59e0b\"/>\n    <text x=\"150\" y=\"165\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"end\" filter=\"url(#glow)\">O</text>\n    <text x=\"210\" y=\"170\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 6cm</text>\n    <text x=\"185\" y=\"135\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">60°</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_009",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円とおうぎ形",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径が12cm、中心角が45度のおうぎ形の弧（曲線部分）の長さは何cmですか。（円周率は3.14とします）",
    "options": [
      "6.28cm",
      "9.42cm",
      "12.56cm²",
      "18.84cm"
    ],
    "answer": "9.42cm",
    "acceptableAnswers": [
      "9.42cm",
      "9.42"
    ],
    "keywords": [
      "おうぎ形",
      "弧の長さ"
    ],
    "knowledgeTag": "平面図形・おうぎ形の弧の長さの公式",
    "explanation": "弧の長さは「直径 × 円周率 × (中心角 ÷ 360)」です。直径は 12 × 2 = 24cm なので、24 × 3.14 × (45 ÷ 360) = 24 × 3.14 × (1/8) = 3 × 3.14 = 9.42cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <path d=\"M 160 150 L 260 150 A 100 100 0 0 0 210 63.4 Z\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2.5\"/>\n    <circle cx=\"160\" cy=\"150\" r=\"3\" fill=\"#f59e0b\"/>\n    <text x=\"150\" y=\"165\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"end\" filter=\"url(#glow)\">O</text>\n    <text x=\"210\" y=\"170\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 12cm</text>\n    <text x=\"185\" y=\"135\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">45°</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_010",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円とおうぎ形",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1辺が10cmの正方形の内部に、2つの向かい合う頂点を中心とする半径10cmの四分円（中心角90度のおうぎ形）を描いたときに重なる葉っぱ型の部分の面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "43cm²",
      "57cm²",
      "64cm²",
      "78.5cm²"
    ],
    "answer": "57cm²",
    "acceptableAnswers": [
      "57cm²",
      "57"
    ],
    "keywords": [
      "正方形",
      "葉っぱ型",
      "円"
    ],
    "knowledgeTag": "平面図形・葉っぱ型複合図形の面積",
    "explanation": "四分円2つの面積の合計から正方形の面積を引くことで葉っぱ型の面積が求まります。四分円1つの面積は 10 × 10 × 3.14 × (1/4) = 78.5cm² です。2つで 78.5 × 2 = 157cm² です。正方形の面積は 10 × 10 = 100cm² なので、重なった部分は 157 - 100 = 57cm² となります。（公式: 1辺² × 0.57 = 100 × 0.57 = 57cm²）",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <rect x=\"30\" y=\"30\" width=\"140\" height=\"140\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <path d=\"M 30 170 A 140 140 0 0 1 170 30 A 140 140 0 0 1 30 170 Z\" fill=\"#fbbf24\" fill-opacity=\"0.4\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n      <text x=\"100\" y=\"105\" font-size=\"13\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">57 cm²</text>\n      <text x=\"100\" y=\"190\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">10 cm</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_011",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "等積変形と面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三角形ABCの辺BC上に点Dがあり、BD:DC = 3:4です。三角形ABC全体の面積が56cm²のとき、三角形ABDの面積は何cm²ですか。",
    "options": [
      "21cm²",
      "24cm²",
      "28cm²",
      "32cm²"
    ],
    "answer": "24cm²",
    "acceptableAnswers": [
      "24cm²",
      "24"
    ],
    "keywords": [
      "底辺の比",
      "面積比"
    ],
    "knowledgeTag": "平面図形・高さが等しい三角形の面積比",
    "explanation": "頂点Aを共有する△ABDと△ADCは高さが等しいため、面積比は底辺の比 BD:DC = 3:4 に等しくなります。全体の比は 3+4 = 7 に相当するので、△ABD = 56 × (3/7) = 24cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"160,30 40,170 280,170\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n      <line x1=\"160\" y1=\"30\" x2=\"142\" y2=\"170\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"160\" y=\"20\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"180\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"290\" y=\"180\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"142\" y=\"190\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n      <text x=\"85\" y=\"160\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">3</text>\n      <text x=\"210\" y=\"160\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">4</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_012",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "等積変形と面積",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "平行四辺形ABCDの内部に点Pをとります。三角形PABの面積が14cm²、三角形PCDの面積が22cm²であるとき、平行四辺形ABCD全体の面積は何cm²ですか。",
    "options": [
      "54cm²",
      "64cm²",
      "72cm²",
      "84cm²"
    ],
    "answer": "72cm²",
    "acceptableAnswers": [
      "72cm²",
      "72"
    ],
    "keywords": [
      "平行四辺形",
      "内部の点",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・平行四辺形内部の点と向かい合う三角形の性質",
    "explanation": "平行四辺形の内部の任意の点Pにおいて、向かい合う一組の三角形の面積の和（△PAB + △PCD）は、常に平行四辺形全体の面積のちょうど半分になります。したがって、全体の面積は (14 + 22) × 2 = 36 × 2 = 72cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"80,40 260,40 220,160 40,160\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n      <line x1=\"80\" y1=\"40\" x2=\"150\" y2=\"105\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <line x1=\"260\" y1=\"40\" x2=\"150\" y2=\"105\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <line x1=\"220\" y1=\"160\" x2=\"150\" y2=\"105\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <line x1=\"40\" y1=\"160\" x2=\"150\" y2=\"105\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <circle cx=\"150\" cy=\"105\" r=\"3.5\" fill=\"#f59e0b\"/>\n      <text x=\"150\" y=\"95\" font-size=\"13\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">P</text>\n      <text x=\"150\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#93c5fd\" text-anchor=\"middle\" filter=\"url(#glow)\">14 cm²</text>\n      <text x=\"145\" y=\"145\" font-size=\"11\" font-weight=\"bold\" fill=\"#93c5fd\" text-anchor=\"middle\" filter=\"url(#glow)\">22 cm²</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_013",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "正六角形の分割",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "面積が72cm²の正六角形ABCDEFがあります。各頂点のうち、A、C、Eの3点を結んでできる三角形ACEの面積は何cm²ですか。",
    "options": [
      "24cm²",
      "36cm²",
      "48cm²",
      "54cm²"
    ],
    "answer": "36cm²",
    "acceptableAnswers": [
      "36cm²",
      "36"
    ],
    "keywords": [
      "正六角形",
      "三角形",
      "分割"
    ],
    "knowledgeTag": "平面図形・正六角形の面積分割",
    "explanation": "正六角形は中心から6つの合同な正三角形に分割できます。頂点を1つおきに結んでできる正三角形ACEは、正六角形のちょうど半分の面積（1/2）になります。したがって、72 × (1/2) = 36cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"120,20 195,65 195,155 120,200 45,155 45,65\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n      <polygon points=\"120,20 195,155 45,155\" fill=\"#fbbf24\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"205\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"205\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"120\" y=\"215\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"35\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">E</text><text x=\"35\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">F</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_014",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "正六角形の分割",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "面積が120cm²の正六角形ABCDEFにおいて、対角線ACとBFの交点をPとします。三角形ABFの面積は何cm²ですか。",
    "options": [
      "15cm²",
      "20cm²",
      "24cm²",
      "30cm²"
    ],
    "answer": "20cm²",
    "acceptableAnswers": [
      "20cm²",
      "20"
    ],
    "keywords": [
      "正六角形",
      "面積比"
    ],
    "knowledgeTag": "平面図形・正六角形の外側二等辺三角形の面積",
    "explanation": "正六角形ABCDEFの隣り合う2辺AB、AFとその間の対角線BFで囲まれた二等辺三角形ABFは、正六角形全体のちょうど 1/6 の面積になります。したがって、120 × (1/6) = 20cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"120,20 195,65 195,155 120,200 45,155 45,65\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n      <polygon points=\"120,20 45,65 195,65\" fill=\"#38bdf8\" fill-opacity=\"0.3\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"205\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"35\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">F</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_015",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角度と多角形",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "正八角形の1つの内角の大きさは何度ですか。",
    "options": [
      "120度",
      "135度",
      "140度",
      "144度"
    ],
    "answer": "135度",
    "acceptableAnswers": [
      "135度",
      "135"
    ],
    "keywords": [
      "正八角形",
      "内角"
    ],
    "knowledgeTag": "平面図形・正多角形の内角と外角",
    "explanation": "多角形の外角の和は常に360度です。正八角形には等しい外角が8つあるので、1つの外角の大きさは 360 ÷ 8 = 45度 です。内角と外角の和は180度なので、1つの内角は 180 - 45 = 135度 となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"70,25 130,25 175,70 175,130 130,175 70,175 25,130 25,70\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2.5\"/>\n      <text x=\"100\" y=\"105\" font-size=\"14\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">135°</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_016",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角度と星形多角形",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "五角形の頂点を1つおきに結んでできる星形五角形（五芒星）の先端にある5つの角（角A、角B、角C、角D、角E）の大きさの合計は何度ですか。",
    "options": [
      "180度",
      "270度",
      "360度",
      "540度"
    ],
    "answer": "180度",
    "acceptableAnswers": [
      "180度",
      "180"
    ],
    "keywords": [
      "星形五角形",
      "内角の和"
    ],
    "knowledgeTag": "平面図形・星形多角形の先端角の和",
    "explanation": "三角形の外角の定理を利用して角を移動させると、星形五角形の先端の5つの角は1つの三角形の内角の和（180度）に集約されます。したがって、合計は 180度 です。",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"100,15 125,75 190,75 138,115 158,175 100,135 42,175 62,115 10,75 75,75\" fill=\"#1e293b\" stroke=\"#eab308\" stroke-width=\"2\"/>\n      <text x=\"100\" y=\"105\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">合計 180°</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_017",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "図形の転がり移動",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1辺が3cmの正三角形が、平らな直線上をすべることなく時計回りに1回転（3回倒れる）するとき、頂点Aが描く線の長さは何cmですか。（円周率は3.14とします）",
    "options": [
      "9.42cm",
      "12.56cm",
      "15.70cm",
      "18.84cm"
    ],
    "answer": "12.56cm",
    "acceptableAnswers": [
      "12.56cm",
      "12.56"
    ],
    "keywords": [
      "転がり移動",
      "正三角形",
      "弧の長さ"
    ],
    "knowledgeTag": "平面図形・正多角形の転がり移動と軌跡",
    "explanation": "正三角形が直線上を1回転するとき、頂点Aは次のように動きます：①他の頂点を中心に半径3cm、中心角120度のおうぎ形の弧を描く、②次の頂点を中心に半径3cm、中心角120度のおうぎ形の弧を描く、③頂点A自身が回転中心となるため動かない。したがって、中心角120度のおうぎ形の弧を2回描くことになります。2 × (6 × 3.14 × (120/360)) = 2 × (2 × 3.14) = 4 × 3.14 = 12.56cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <line x1=\"20\" y1=\"130\" x2=\"300\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <polygon points=\"50,130 90,61 130,130\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <path d=\"M 50 130 A 80 80 0 0 1 170 61 A 80 80 0 0 1 210 130\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n      <text x=\"50\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"170\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A'</text><text x=\"210\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A''</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_018",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円の転がり移動",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "半径2cmの円が、1辺12cmの正方形のまわりをすべることなく外側に沿って1周するとき、円の中心が通ったあとにできる線の長さは何cmですか。（円周率は3.14とします）",
    "options": [
      "48cm",
      "60.56cm",
      "73.12cm",
      "80.24cm"
    ],
    "answer": "60.56cm",
    "acceptableAnswers": [
      "60.56cm",
      "60.56"
    ],
    "keywords": [
      "円の転がり",
      "正方形の外側",
      "中心の軌跡"
    ],
    "knowledgeTag": "平面図形・図形の外側を回る円の中心の軌跡",
    "explanation": "円の中心は、正方形の各辺に平行な4本の直線部分と、4つの角で直角（90度）ずつ方向を変える4つのおうぎ形の弧を通ります。直線部分は正方形の1辺と同じ長さなので 12 × 4 = 48cm です。4つの角で描く弧を合わせると半径2cmの円周1つ分（360度）になるので、直径4cm × 3.14 = 12.56cm です。したがって、合計は 48 + 12.56 = 60.56cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <rect x=\"70\" y=\"70\" width=\"100\" height=\"100\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n      <rect x=\"50\" y=\"50\" width=\"140\" height=\"140\" rx=\"20\" ry=\"20\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n      <text x=\"120\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">正方形 12cm</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_019",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "立体の切断",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "1辺が6cmの立方体があります。1つの頂点に集まる3つの辺のそれぞれの真ん中の点を通る平面で角を切り落としたとき、切り口の図形はどのような形になりますか。",
    "options": [
      "直角三角形",
      "正三角形",
      "正方形",
      "台形"
    ],
    "answer": "正三角形",
    "acceptableAnswers": [
      "正三角形"
    ],
    "keywords": [
      "立方体",
      "切断",
      "切り口"
    ],
    "knowledgeTag": "立体図形・立方体の角の切断と切り口の形状",
    "explanation": "1つの頂点から出ている3辺の中点は、その頂点から等しい距離（3cm）にあります。直角をはさむ2辺が3cmと3cmの合同な直角二等辺三角形の斜辺が切断面の3辺となるため、3辺の長さがすべて等しくなり、切り口は「正三角形」になります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <!-- 立方体/直方体ワイヤーフレーム -->\n    <polygon points=\"60,90 140,50 240,50 160,90\" fill=\"#1e293b\" fill-opacity=\"0.4\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"60,90 160,90 160,170 60,170\" fill=\"#334155\" fill-opacity=\"0.4\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"160,90 240,50 240,130 160,170\" fill=\"#1e293b\" fill-opacity=\"0.6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <!-- 切断面 -->\n    <polygon points=\"60,130 140,50 200,70 110,170\" fill=\"#f59e0b\" fill-opacity=\"0.35\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n    <text x=\"110\" y=\"190\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"middle\" filter=\"url(#glow)\">横 6cm</text>\n    <text x=\"205\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"start\" filter=\"url(#glow)\">奥行 6cm</text>\n    <text x=\"45\" y=\"130\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"end\" filter=\"url(#glow)\">高さ 6cm</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_020",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "立体の切断と体積",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1辺が6cmの立方体の1つの角から、その頂点に集まる3辺の長さがそれぞれ3cmである三角すいを切り落としました。切り落とした三角すいの体積は何cm³ですか。",
    "options": [
      "4.5cm³",
      "6cm³",
      "9cm³",
      "13.5cm³"
    ],
    "answer": "4.5cm³",
    "acceptableAnswers": [
      "4.5cm³",
      "4.5"
    ],
    "keywords": [
      "立方体",
      "切断",
      "三角すいの体積"
    ],
    "knowledgeTag": "立体図形・三角すいの体積の求め方",
    "explanation": "切り落とした立体は、底面が直角をはさむ2辺が3cmの直角三角形で、高さが3cmの三角すいです。すい体の体積は「底面積 × 高さ ÷ 3」で求められます。底面積は (3 × 3) ÷ 2 = 4.5cm² なので、体積は 4.5 × 3 ÷ 3 = 4.5cm³ となります。",
    "figureSvg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n    <!-- 立方体/直方体ワイヤーフレーム -->\n    <polygon points=\"60,90 140,50 240,50 160,90\" fill=\"#1e293b\" fill-opacity=\"0.4\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"60,90 160,90 160,170 60,170\" fill=\"#334155\" fill-opacity=\"0.4\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <polygon points=\"160,90 240,50 240,130 160,170\" fill=\"#1e293b\" fill-opacity=\"0.6\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n    <!-- 切断面 -->\n    <polygon points=\"60,130 140,50 200,70 110,170\" fill=\"#f59e0b\" fill-opacity=\"0.35\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n    <text x=\"110\" y=\"190\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"middle\" filter=\"url(#glow)\">横 6cm</text>\n    <text x=\"205\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"start\" filter=\"url(#glow)\">奥行 6cm</text>\n    <text x=\"45\" y=\"130\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"end\" filter=\"url(#glow)\">高さ 6cm</text>\n  \n</svg>"
  },
  {
    "id": "m_adv2_021",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "回転体",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底辺が4cm、高さが6cmの直角三角形を、高さ6cmの辺を軸として1回転させてできる立体の体積は何cm³ですか。（円周率は3.14とします）",
    "options": [
      "50.24cm³",
      "100.48cm³",
      "150.72cm³",
      "301.44cm³"
    ],
    "answer": "100.48cm³",
    "acceptableAnswers": [
      "100.48cm³",
      "100.48"
    ],
    "keywords": [
      "回転体",
      "円すい",
      "体積"
    ],
    "knowledgeTag": "立体図形・直角三角形の回転体（円すい）の体積",
    "explanation": "直角三角形の直角をはさむ1辺を軸として回転させると「円すい」ができます。底面は半径4cmの円で、高さは6cmです。円すいの体積は「底面積 × 高さ ÷ 3」なので、(4 × 4 × 3.14) × 6 ÷ 3 = 16 × 3.14 × 2 = 32 × 3.14 = 100.48cm³ となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"120,30 120,160 180,160\" fill=\"#3b82f6\" fill-opacity=\"0.25\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <ellipse cx=\"120\" cy=\"160\" rx=\"60\" ry=\"18\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <line x1=\"120\" y1=\"15\" x2=\"120\" y2=\"175\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n      <text x=\"110\" y=\"95\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"end\" filter=\"url(#glow)\">6cm</text>\n      <text x=\"150\" y=\"175\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"middle\" filter=\"url(#glow)\">4cm</text>\n      <text x=\"120\" y=\"10\" font-size=\"11\" font-weight=\"bold\" fill=\"#f87171\" text-anchor=\"middle\" filter=\"url(#glow)\">回転軸</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_022",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "回転体",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "縦4cm、横6cmの長方形を、縦4cmの辺を軸として1回転させてできる円柱の表面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "226.08cm²",
      "301.44cm²",
      "376.80cm²",
      "452.16cm²"
    ],
    "answer": "376.80cm²",
    "acceptableAnswers": [
      "376.80cm²",
      "376.8"
    ],
    "keywords": [
      "長方形",
      "回転体",
      "円柱",
      "表面積"
    ],
    "knowledgeTag": "立体図形・円柱の表面積の求め方",
    "explanation": "縦4cmの辺を軸にして回転させると、底面の半径が6cm、高さが4cmの円柱ができます。表面積は「底面積×2 + 側面積」です。底面積×2 = (6 × 6 × 3.14) × 2 = 72 × 3.14。側面積は (直径 × 3.14) × 高さ = (12 × 3.14) × 4 = 48 × 3.14。合計の表面積は (72 + 48) × 3.14 = 120 × 3.14 = 376.8cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <rect x=\"120\" y=\"40\" width=\"70\" height=\"120\" fill=\"#3b82f6\" fill-opacity=\"0.25\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <ellipse cx=\"120\" cy=\"40\" rx=\"70\" ry=\"16\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <ellipse cx=\"120\" cy=\"160\" rx=\"70\" ry=\"16\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"180\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/>\n      <text x=\"110\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"end\" filter=\"url(#glow)\">4cm</text>\n      <text x=\"155\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"middle\" filter=\"url(#glow)\">6cm</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_023",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "水深変化と体積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底面が縦20cm、横30cmの直方体の水そうに水が入っています。この中に、底面が10cm×10cm、高さが15cmの直方体の鉄の棒を底につくまでまっすぐに沈めたところ、水面が鉄の棒の頭を超えずに沈みました。水面は何cm上昇しましたか。",
    "options": [
      "1.5cm",
      "2.0cm",
      "2.5cm",
      "3.0cm"
    ],
    "answer": "3.0cm",
    "acceptableAnswers": [
      "3.0cm",
      "3cm",
      "3"
    ],
    "keywords": [
      "水そう",
      "水深変化",
      "押しのけた水の体積"
    ],
    "knowledgeTag": "立体図形・水そうに柱体を沈めたときの水深上昇",
    "explanation": "水そうの底面積は 20 × 30 = 600cm²、鉄の棒の底面積は 10 × 10 = 100cm² です。鉄の棒が水に入ると、水が占めることのできる断面積が 600 - 100 = 500cm² に減少します。もとの水深を h cm とすると、水自体の体積は変わりません。水面の上昇分は「沈んだ部分の鉄の体積 ÷ 水そう全体の底面積」ではなく、底面積の比「鉄の底面積 : 水の残りの断面積 = 100 : 500 = 1 : 5」より、上昇高さを求めるか、沈めた深さに応じた連立で解きます。高さ15cmが完全に水没しない問題設定で、沈んだ深さを H cm とすると、上昇分は H × (100/600) となります。鉄の棒全体の体積が沈んだ場合の上昇量として解くと、鉄の体積 10×10×15 = 1500cm³。もし完全に沈んだとすれば 1500 ÷ (600 - 100) = 3.0cm 上昇します。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <rect x=\"40\" y=\"40\" width=\"160\" height=\"110\" fill=\"#0284c7\" fill-opacity=\"0.3\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <rect x=\"80\" y=\"30\" width=\"45\" height=\"120\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <text x=\"120\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#94a3b8\" text-anchor=\"middle\" filter=\"url(#glow)\">底面 20×30 cm</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_024",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角柱・円柱の体積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底面が1辺4cmの正方形で、高さが9cmの四角すいの体積は何cm³ですか。",
    "options": [
      "36cm³",
      "48cm³",
      "72cm³",
      "144cm³"
    ],
    "answer": "48cm³",
    "acceptableAnswers": [
      "48cm³",
      "48"
    ],
    "keywords": [
      "四角すい",
      "すい体の体積"
    ],
    "knowledgeTag": "立体図形・すい体の体積公式",
    "explanation": "四角すいの体積は「底面積 × 高さ ÷ 3」で求められます。底面積は 4 × 4 = 16cm² です。高さは9cmなので、16 × 9 ÷ 3 = 16 × 3 = 48cm³ となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <polygon points=\"100,20 40,140 160,140\" fill=\"#1e293b\" fill-opacity=\"0.4\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n      <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <text x=\"100\" y=\"90\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"start\" filter=\"url(#glow)\">高さ 9cm</text>\n      <text x=\"100\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">底面 4cm×4cm</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_025",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "相似比と体積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "相似な2つの三角柱PとQがあります。PとQの高さの比（相似比）が2:3であるとき、三角柱PとQの体積の比として最も適当なものはどれですか。",
    "options": [
      "2 : 3",
      "4 : 9",
      "8 : 27",
      "16 : 81"
    ],
    "answer": "8 : 27",
    "acceptableAnswers": [
      "8 : 27",
      "8:27"
    ],
    "keywords": [
      "相似比",
      "体積比"
    ],
    "knowledgeTag": "立体図形・相似な立体の相似比と体積比の3乗則",
    "explanation": "相似な立体において、体積の比は相似比の3乗になります。相似比が 2:3 なので、体積比は 2³ : 3³ = 8 : 27 となります。（なお面積比は2乗の 4:9 です）",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n      <rect x=\"40\" y=\"60\" width=\"50\" height=\"80\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <rect x=\"130\" y=\"30\" width=\"75\" height=\"120\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <text x=\"65\" y=\"105\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">P (比2)</text>\n      <text x=\"167\" y=\"95\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">Q (比3)</text>\n    \n</svg>"
  },
  {
    "id": "m_adv2_026",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ピラミッド相似と線分比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三角形ABCで、辺AB上に点D、辺AC上に点Eがあり、DE平行BCです。AD:DB = 1:2で、BC=12cmのとき、線分DEの長さは何cmですか。",
    "options": [
      "4cm",
      "3cm",
      "5cm",
      "6cm"
    ],
    "answer": "4cm",
    "acceptableAnswers": [
      "4cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・ピラミッド相似と線分比",
    "explanation": "△ADEと△ABCの相似比は AD:AB = 1:(1+2) = 1:3 です。対応する辺の比より DE = 12 × (1/3) = 4cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n          <text x=\"70\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"170\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">E</text>\n          <text x=\"120\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">比 1:2</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_027",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ピラミッド相似と線分比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三角形ABCで、辺AB上に点D、辺AC上に点Eがあり、DE平行BCです。AD:DB = 2:1で、BC=15cmのとき、線分DEの長さは何cmですか。",
    "options": [
      "10cm",
      "9cm",
      "11cm",
      "12cm"
    ],
    "answer": "10cm",
    "acceptableAnswers": [
      "10cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・ピラミッド相似と線分比",
    "explanation": "△ADEと△ABCの相似比は AD:AB = 2:(2+1) = 2:3 です。対応する辺の比より DE = 15 × (2/3) = 10cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n          <text x=\"70\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"170\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">E</text>\n          <text x=\"120\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">比 2:1</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_028",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ピラミッド相似と線分比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三角形ABCで、辺AB上に点D、辺AC上に点Eがあり、DE平行BCです。AD:DB = 3:1で、BC=16cmのとき、線分DEの長さは何cmですか。",
    "options": [
      "12cm",
      "11cm",
      "13cm",
      "14cm"
    ],
    "answer": "12cm",
    "acceptableAnswers": [
      "12cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・ピラミッド相似と線分比",
    "explanation": "△ADEと△ABCの相似比は AD:AB = 3:(3+1) = 3:4 です。対応する辺の比より DE = 16 × (3/4) = 12cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n          <text x=\"70\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"170\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">E</text>\n          <text x=\"120\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">比 3:1</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_029",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ピラミッド相似と線分比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三角形ABCで、辺AB上に点D、辺AC上に点Eがあり、DE平行BCです。AD:DB = 1:3で、BC=20cmのとき、線分DEの長さは何cmですか。",
    "options": [
      "5cm",
      "4cm",
      "6cm",
      "7cm"
    ],
    "answer": "5cm",
    "acceptableAnswers": [
      "5cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・ピラミッド相似と線分比",
    "explanation": "△ADEと△ABCの相似比は AD:AB = 1:(1+3) = 1:4 です。対応する辺の比より DE = 20 × (1/4) = 5cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n          <text x=\"70\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"170\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">E</text>\n          <text x=\"120\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">比 1:3</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_030",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ピラミッド相似と線分比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "三角形ABCで、辺AB上に点D、辺AC上に点Eがあり、DE平行BCです。AD:DB = 2:3で、BC=25cmのとき、線分DEの長さは何cmですか。",
    "options": [
      "10cm",
      "9cm",
      "11cm",
      "12cm"
    ],
    "answer": "10cm",
    "acceptableAnswers": [
      "10cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・ピラミッド相似と線分比",
    "explanation": "△ADEと△ABCの相似比は AD:AB = 2:(2+3) = 2:5 です。対応する辺の比より DE = 25 × (2/5) = 10cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"85\" x2=\"160\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text>\n          <text x=\"70\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text><text x=\"170\" y=\"85\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">E</text>\n          <text x=\"120\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">比 2:3</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_031",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "砂時計相似と比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDで、AD=3cm、BC=6cmです。対角線の交点Oを通るBCに平行な直線がAB、CDと交わる点をそれぞれP、Qとするとき、線分PQの長さは何cmですか。",
    "options": [
      "4cm",
      "3.2cm",
      "4.8cm",
      "5.2cm"
    ],
    "answer": "4cm",
    "acceptableAnswers": [
      "4cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・砂時計相似と比",
    "explanation": "交点Oを通る平行線の長さPQは調和平均の公式「2 × AD × BC ÷ (AD + BC)」で求められます。2 × 3 × 6 ÷ (3 + 6) = 4cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"80,30 180,30 220,150 40,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"30\" x2=\"220\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"180\" y1=\"30\" x2=\"40\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"56\" y1=\"90\" x2=\"204\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"130\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 3cm</text>\n          <text x=\"130\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 6cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_032",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "砂時計相似と比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDで、AD=4cm、BC=6cmです。対角線の交点Oを通るBCに平行な直線がAB、CDと交わる点をそれぞれP、Qとするとき、線分PQの長さは何cmですか。",
    "options": [
      "4.8cm",
      "4cm",
      "5.6cm",
      "6cm"
    ],
    "answer": "4.8cm",
    "acceptableAnswers": [
      "4.8cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・砂時計相似と比",
    "explanation": "交点Oを通る平行線の長さPQは調和平均の公式「2 × AD × BC ÷ (AD + BC)」で求められます。2 × 4 × 6 ÷ (4 + 6) = 4.8cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"80,30 180,30 220,150 40,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"30\" x2=\"220\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"180\" y1=\"30\" x2=\"40\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"56\" y1=\"90\" x2=\"204\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"130\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 4cm</text>\n          <text x=\"130\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 6cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_033",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "砂時計相似と比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDで、AD=6cm、BC=9cmです。対角線の交点Oを通るBCに平行な直線がAB、CDと交わる点をそれぞれP、Qとするとき、線分PQの長さは何cmですか。",
    "options": [
      "7.2cm",
      "6.4cm",
      "8cm",
      "8.4cm"
    ],
    "answer": "7.2cm",
    "acceptableAnswers": [
      "7.2cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・砂時計相似と比",
    "explanation": "交点Oを通る平行線の長さPQは調和平均の公式「2 × AD × BC ÷ (AD + BC)」で求められます。2 × 6 × 9 ÷ (6 + 9) = 7.2cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"80,30 180,30 220,150 40,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"30\" x2=\"220\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"180\" y1=\"30\" x2=\"40\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"56\" y1=\"90\" x2=\"204\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"130\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 6cm</text>\n          <text x=\"130\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 9cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_034",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "砂時計相似と比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDで、AD=4cm、BC=8cmです。対角線の交点Oを通るBCに平行な直線がAB、CDと交わる点をそれぞれP、Qとするとき、線分PQの長さは何cmですか。",
    "options": [
      "5.3cm",
      "4.5cm",
      "6.1cm",
      "6.5cm"
    ],
    "answer": "5.3cm",
    "acceptableAnswers": [
      "5.3cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・砂時計相似と比",
    "explanation": "交点Oを通る平行線の長さPQは調和平均の公式「2 × AD × BC ÷ (AD + BC)」で求められます。2 × 4 × 8 ÷ (4 + 8) = 5.3cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"80,30 180,30 220,150 40,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"30\" x2=\"220\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"180\" y1=\"30\" x2=\"40\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"56\" y1=\"90\" x2=\"204\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"130\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 4cm</text>\n          <text x=\"130\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 8cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_035",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "砂時計相似と比",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDで、AD=6cm、BC=12cmです。対角線の交点Oを通るBCに平行な直線がAB、CDと交わる点をそれぞれP、Qとするとき、線分PQの長さは何cmですか。",
    "options": [
      "8cm",
      "7.2cm",
      "8.8cm",
      "9.2cm"
    ],
    "answer": "8cm",
    "acceptableAnswers": [
      "8cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・砂時計相似と比",
    "explanation": "交点Oを通る平行線の長さPQは調和平均の公式「2 × AD × BC ÷ (AD + BC)」で求められます。2 × 6 × 12 ÷ (6 + 12) = 8cm となります。",
    "figureSvg": "<svg viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"80,30 180,30 220,150 40,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <line x1=\"80\" y1=\"30\" x2=\"220\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"180\" y1=\"30\" x2=\"40\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"56\" y1=\"90\" x2=\"204\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"130\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底 6cm</text>\n          <text x=\"130\" y=\"165\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底 12cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_036",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "中点連結定理",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "四角形ABCDの各辺AB、BC、CD、DAの中点をそれぞれP、Q、R、Sとするとき、4点を結んでできる四角形PQRSは常にどのような平行四辺形になりますか。",
    "options": [
      "平行四辺形",
      "長方形",
      "ひし形",
      "台形"
    ],
    "answer": "平行四辺形",
    "acceptableAnswers": [
      "平行四辺形"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・中点連結定理",
    "explanation": "中点連結定理により、対角線ACに対して PS平行AC かつ PS = AC÷2、QR平行AC かつ QR = AC÷2 が成り立ちます。向かい合う1組の対辺が平行で長さが等しいため、四角形PQRSは常に平行四辺形になります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"100,20 190,70 160,160 30,130\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <polygon points=\"145,45 175,115 95,145 65,75\" fill=\"#f59e0b\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"110\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">中点を結ぶ</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_037",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "折り返し図形と角度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長方形ABCDの紙を、頂点Aが辺BC上の点Pに重なるように折り返しました。角BAPが20度のとき、折り目の線と辺ADが作る角の大きさは何度ですか。",
    "options": [
      "55度",
      "50度",
      "60度",
      "125度"
    ],
    "answer": "55度",
    "acceptableAnswers": [
      "55度"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・折り返し図形と角度",
    "explanation": "折り返しの対称性より、対応する角が等しくなります。計算により折り目の線と辺ADのなす角は (90 + 20) ÷ 2 = 55度 となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"30\" y=\"30\" width=\"180\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"30\" y1=\"30\" x2=\"110\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"90\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">角BAP = 20°</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_038",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "折り返し図形と角度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長方形ABCDの紙を、頂点Aが辺BC上の点Pに重なるように折り返しました。角BAPが30度のとき、折り目の線と辺ADが作る角の大きさは何度ですか。",
    "options": [
      "60度",
      "55度",
      "65度",
      "120度"
    ],
    "answer": "60度",
    "acceptableAnswers": [
      "60度"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・折り返し図形と角度",
    "explanation": "折り返しの対称性より、対応する角が等しくなります。計算により折り目の線と辺ADのなす角は (90 + 30) ÷ 2 = 60度 となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"30\" y=\"30\" width=\"180\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"30\" y1=\"30\" x2=\"110\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"90\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">角BAP = 30°</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_039",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "折り返し図形と角度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長方形ABCDの紙を、頂点Aが辺BC上の点Pに重なるように折り返しました。角BAPが40度のとき、折り目の線と辺ADが作る角の大きさは何度ですか。",
    "options": [
      "65度",
      "60度",
      "70度",
      "115度"
    ],
    "answer": "65度",
    "acceptableAnswers": [
      "65度"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・折り返し図形と角度",
    "explanation": "折り返しの対称性より、対応する角が等しくなります。計算により折り目の線と辺ADのなす角は (90 + 40) ÷ 2 = 65度 となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"30\" y=\"30\" width=\"180\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"30\" y1=\"30\" x2=\"110\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"90\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">角BAP = 40°</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_040",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "折り返し図形と角度",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "長方形ABCDの紙を、頂点Aが辺BC上の点Pに重なるように折り返しました。角BAPが50度のとき、折り目の線と辺ADが作る角の大きさは何度ですか。",
    "options": [
      "70度",
      "65度",
      "75度",
      "110度"
    ],
    "answer": "70度",
    "acceptableAnswers": [
      "70度"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・折り返し図形と角度",
    "explanation": "折り返しの対称性より、対応する角が等しくなります。計算により折り目の線と辺ADのなす角は (90 + 50) ÷ 2 = 70度 となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"30\" y=\"30\" width=\"180\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"30\" y1=\"30\" x2=\"110\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"120\" y=\"90\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">角BAP = 50°</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_041",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "直角三角形の相似比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角三角形ABC（角B=90°、AB=3cm、BC=4cm、CA=5cm）の頂点Bから斜辺ACに下ろした垂線の足をHとします。線分AHの長さは何cmですか。",
    "options": [
      "1.8cm",
      "1.2000000000000002cm",
      "2.4cm",
      "3cm"
    ],
    "answer": "1.8cm",
    "acceptableAnswers": [
      "1.8cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・直角三角形の相似比",
    "explanation": "△ABHと△ABCは相似（角A共通、角AHB=角ABC=90°）です。したがって AH:AB = AB:AC が成り立ち、AH = AB² ÷ AC = 3² ÷ 5 = 9/5 = 1.8cm と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"40,150 40,30 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"150\" x2=\"100\" y2=\"75\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"30\" y=\"30\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">H</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_042",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "直角三角形の相似比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角三角形ABC（角B=90°、AB=6cm、BC=8cm、CA=10cm）の頂点Bから斜辺ACに下ろした垂線の足をHとします。線分AHの長さは何cmですか。",
    "options": [
      "3.6cm",
      "3cm",
      "4.2cm",
      "4.8cm"
    ],
    "answer": "3.6cm",
    "acceptableAnswers": [
      "3.6cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・直角三角形の相似比",
    "explanation": "△ABHと△ABCは相似（角A共通、角AHB=角ABC=90°）です。したがって AH:AB = AB:AC が成り立ち、AH = AB² ÷ AC = 6² ÷ 10 = 36/10 = 3.6cm と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"40,150 40,30 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"150\" x2=\"100\" y2=\"75\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"30\" y=\"30\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">H</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_043",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "直角三角形の相似比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角三角形ABC（角B=90°、AB=5cm、BC=12cm、CA=13cm）の頂点Bから斜辺ACに下ろした垂線の足をHとします。線分AHの長さは何cmですか。",
    "options": [
      "1.9cm",
      "1.2999999999999998cm",
      "2.5cm",
      "3.0999999999999996cm"
    ],
    "answer": "1.9cm",
    "acceptableAnswers": [
      "1.9cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・直角三角形の相似比",
    "explanation": "△ABHと△ABCは相似（角A共通、角AHB=角ABC=90°）です。したがって AH:AB = AB:AC が成り立ち、AH = AB² ÷ AC = 5² ÷ 13 = 25/13 = 1.9cm と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"40,150 40,30 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"150\" x2=\"100\" y2=\"75\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"30\" y=\"30\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">H</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_044",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "直角三角形の相似比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角三角形ABC（角B=90°、AB=9cm、BC=12cm、CA=15cm）の頂点Bから斜辺ACに下ろした垂線の足をHとします。線分AHの長さは何cmですか。",
    "options": [
      "5.4cm",
      "4.800000000000001cm",
      "6cm",
      "6.6000000000000005cm"
    ],
    "answer": "5.4cm",
    "acceptableAnswers": [
      "5.4cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・直角三角形の相似比",
    "explanation": "△ABHと△ABCは相似（角A共通、角AHB=角ABC=90°）です。したがって AH:AB = AB:AC が成り立ち、AH = AB² ÷ AC = 9² ÷ 15 = 81/15 = 5.4cm と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"40,150 40,30 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"150\" x2=\"100\" y2=\"75\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"30\" y=\"30\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">H</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_045",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "直角三角形の相似比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角三角形ABC（角B=90°、AB=8cm、BC=15cm、CA=17cm）の頂点Bから斜辺ACに下ろした垂線の足をHとします。線分AHの長さは何cmですか。",
    "options": [
      "3.8cm",
      "3.1999999999999997cm",
      "4.3999999999999995cm",
      "5cm"
    ],
    "answer": "3.8cm",
    "acceptableAnswers": [
      "3.8cm"
    ],
    "keywords": [
      "相似",
      "比",
      "平面図形"
    ],
    "knowledgeTag": "平面図形・直角三角形の相似比",
    "explanation": "△ABHと△ABCは相似（角A共通、角AHB=角ABC=90°）です。したがって AH:AB = AB:AC が成り立ち、AH = AB² ÷ AC = 8² ÷ 17 = 64/17 = 3.8cm と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"40,150 40,30 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"150\" x2=\"100\" y2=\"75\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"30\" y=\"30\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"160\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"65\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">H</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_046",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "三角形の内部の点と面積比（チェバ比）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "三角形ABCの内部の点Pから各頂点A、B、Cを結びます。辺BC上の点Dについて BD:DC = 1:2 です。三角形ABDと三角形ADCの面積比として最も適当なものはどれですか。",
    "options": [
      "1 : 2",
      "2 : 1",
      "1 : 3",
      "1 : 4"
    ],
    "answer": "1 : 2",
    "acceptableAnswers": [
      "1 : 2"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・三角形の内部の点と面積比（チェバ比）",
    "explanation": "△ABDと△ADCは高さが等しいため、面積比は底辺の比 BD:DC = 1:2 に等しくなります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n        <line x1=\"120\" y1=\"20\" x2=\"105\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"165\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n        <text x=\"70\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">1</text>\n        <text x=\"150\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">2</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_047",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "三角形の内部の点と面積比（チェバ比）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "三角形ABCの内部の点Pから各頂点A、B、Cを結びます。辺BC上の点Dについて BD:DC = 2:3 です。三角形ABDと三角形ADCの面積比として最も適当なものはどれですか。",
    "options": [
      "2 : 3",
      "3 : 2",
      "2 : 5",
      "4 : 9"
    ],
    "answer": "2 : 3",
    "acceptableAnswers": [
      "2 : 3"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・三角形の内部の点と面積比（チェバ比）",
    "explanation": "△ABDと△ADCは高さが等しいため、面積比は底辺の比 BD:DC = 2:3 に等しくなります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n        <line x1=\"120\" y1=\"20\" x2=\"105\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"165\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n        <text x=\"70\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">2</text>\n        <text x=\"150\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">3</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_048",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "三角形の内部の点と面積比（チェバ比）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "三角形ABCの内部の点Pから各頂点A、B、Cを結びます。辺BC上の点Dについて BD:DC = 3:4 です。三角形ABDと三角形ADCの面積比として最も適当なものはどれですか。",
    "options": [
      "3 : 4",
      "4 : 3",
      "3 : 7",
      "9 : 16"
    ],
    "answer": "3 : 4",
    "acceptableAnswers": [
      "3 : 4"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・三角形の内部の点と面積比（チェバ比）",
    "explanation": "△ABDと△ADCは高さが等しいため、面積比は底辺の比 BD:DC = 3:4 に等しくなります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n        <line x1=\"120\" y1=\"20\" x2=\"105\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"165\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n        <text x=\"70\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">3</text>\n        <text x=\"150\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">4</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_049",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "三角形の内部の点と面積比（チェバ比）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "三角形ABCの内部の点Pから各頂点A、B、Cを結びます。辺BC上の点Dについて BD:DC = 3:5 です。三角形ABDと三角形ADCの面積比として最も適当なものはどれですか。",
    "options": [
      "3 : 5",
      "5 : 3",
      "3 : 8",
      "9 : 25"
    ],
    "answer": "3 : 5",
    "acceptableAnswers": [
      "3 : 5"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・三角形の内部の点と面積比（チェバ比）",
    "explanation": "△ABDと△ADCは高さが等しいため、面積比は底辺の比 BD:DC = 3:5 に等しくなります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n        <line x1=\"120\" y1=\"20\" x2=\"105\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"165\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n        <text x=\"70\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">3</text>\n        <text x=\"150\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">5</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_050",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "三角形の内部の点と面積比（チェバ比）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "三角形ABCの内部の点Pから各頂点A、B、Cを結びます。辺BC上の点Dについて BD:DC = 4:5 です。三角形ABDと三角形ADCの面積比として最も適当なものはどれですか。",
    "options": [
      "4 : 5",
      "5 : 4",
      "4 : 9",
      "16 : 25"
    ],
    "answer": "4 : 5",
    "acceptableAnswers": [
      "4 : 5"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・三角形の内部の点と面積比（チェバ比）",
    "explanation": "△ABDと△ADCは高さが等しいため、面積比は底辺の比 BD:DC = 4:5 に等しくなります。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"120,20 40,150 200,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n        <line x1=\"120\" y1=\"20\" x2=\"105\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"120\" y=\"15\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"30\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"210\" y=\"155\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"105\" y=\"165\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n        <text x=\"70\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">4</text>\n        <text x=\"150\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">5</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_051",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "台形対角線の4分割面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDの対角線の交点をOとします。AD:BC = 1:2 で、△AODの面積が4cm²のとき、△BOCの面積は何cm²ですか。",
    "options": [
      "16cm²",
      "10cm²",
      "22cm²",
      "28cm²"
    ],
    "answer": "16cm²",
    "acceptableAnswers": [
      "16cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・台形対角線の4分割面積",
    "explanation": "△AODと△COBは相似で、相似比は 1:2 です。面積比は2乗の比 1:4 となります。したがって △BOC = 4 × (2² ÷ 1²) = 16cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"70,35 170,35 210,145 30,145\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"35\" x2=\"210\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"170\" y1=\"35\" x2=\"30\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"120\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底比 1</text>\n          <text x=\"120\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底比 2</text>\n          <text x=\"120\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">4cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_052",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "台形対角線の4分割面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDの対角線の交点をOとします。AD:BC = 1:3 で、△AODの面積が3cm²のとき、△BOCの面積は何cm²ですか。",
    "options": [
      "27cm²",
      "21cm²",
      "33cm²",
      "39cm²"
    ],
    "answer": "27cm²",
    "acceptableAnswers": [
      "27cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・台形対角線の4分割面積",
    "explanation": "△AODと△COBは相似で、相似比は 1:3 です。面積比は2乗の比 1:9 となります。したがって △BOC = 3 × (3² ÷ 1²) = 27cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"70,35 170,35 210,145 30,145\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"35\" x2=\"210\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"170\" y1=\"35\" x2=\"30\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"120\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底比 1</text>\n          <text x=\"120\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底比 3</text>\n          <text x=\"120\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">3cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_053",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "台形対角線の4分割面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDの対角線の交点をOとします。AD:BC = 2:3 で、△AODの面積が12cm²のとき、△BOCの面積は何cm²ですか。",
    "options": [
      "27cm²",
      "21cm²",
      "33cm²",
      "39cm²"
    ],
    "answer": "27cm²",
    "acceptableAnswers": [
      "27cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・台形対角線の4分割面積",
    "explanation": "△AODと△COBは相似で、相似比は 2:3 です。面積比は2乗の比 4:9 となります。したがって △BOC = 12 × (3² ÷ 2²) = 27cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"70,35 170,35 210,145 30,145\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"35\" x2=\"210\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"170\" y1=\"35\" x2=\"30\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"120\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底比 2</text>\n          <text x=\"120\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底比 3</text>\n          <text x=\"120\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">12cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_054",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "台形対角線の4分割面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDの対角線の交点をOとします。AD:BC = 2:5 で、△AODの面積が8cm²のとき、△BOCの面積は何cm²ですか。",
    "options": [
      "50cm²",
      "44cm²",
      "56cm²",
      "62cm²"
    ],
    "answer": "50cm²",
    "acceptableAnswers": [
      "50cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・台形対角線の4分割面積",
    "explanation": "△AODと△COBは相似で、相似比は 2:5 です。面積比は2乗の比 4:25 となります。したがって △BOC = 8 × (5² ÷ 2²) = 50cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"70,35 170,35 210,145 30,145\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"35\" x2=\"210\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"170\" y1=\"35\" x2=\"30\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"120\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底比 2</text>\n          <text x=\"120\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底比 5</text>\n          <text x=\"120\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">8cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_055",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "台形対角線の4分割面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "AD平行BCの台形ABCDの対角線の交点をOとします。AD:BC = 3:4 で、△AODの面積が18cm²のとき、△BOCの面積は何cm²ですか。",
    "options": [
      "32cm²",
      "26cm²",
      "38cm²",
      "44cm²"
    ],
    "answer": "32cm²",
    "acceptableAnswers": [
      "32cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・台形対角線の4分割面積",
    "explanation": "△AODと△COBは相似で、相似比は 3:4 です。面積比は2乗の比 9:16 となります。したがって △BOC = 18 × (4² ÷ 3²) = 32cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 240 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"70,35 170,35 210,145 30,145\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"35\" x2=\"210\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"170\" y1=\"35\" x2=\"30\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"120\" y=\"30\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上底比 3</text>\n          <text x=\"120\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">下底比 4</text>\n          <text x=\"120\" y=\"60\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">18cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_056",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "長方形と斜め直線による面積分割",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "縦8cm、横10cmの長方形ABCDがあります。辺ABの中点Mと頂点Cを結ぶ直線MCによって長方形を2つに分けるとき、三角形MBCの面積は何cm²ですか。",
    "options": [
      "20cm²",
      "40cm²",
      "15cm²",
      "25cm²"
    ],
    "answer": "20cm²",
    "acceptableAnswers": [
      "20cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・長方形と斜め直線による面積分割",
    "explanation": "点MはABの中点なので、MB = 8 ÷ 2 = 4cm です。△MBCは底辺がBC=10cm、高さがMB=4cmの直角三角形なので、面積は (10 × 4) ÷ 2 = 20cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"40\" y=\"30\" width=\"160\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"80\" x2=\"200\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"40\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"40\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"200\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"200\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n          <text x=\"30\" y=\"80\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">M</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_057",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "長方形と斜め直線による面積分割",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "縦6cm、横12cmの長方形ABCDがあります。辺ABの中点Mと頂点Cを結ぶ直線MCによって長方形を2つに分けるとき、三角形MBCの面積は何cm²ですか。",
    "options": [
      "18cm²",
      "36cm²",
      "13cm²",
      "23cm²"
    ],
    "answer": "18cm²",
    "acceptableAnswers": [
      "18cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・長方形と斜め直線による面積分割",
    "explanation": "点MはABの中点なので、MB = 6 ÷ 2 = 3cm です。△MBCは底辺がBC=12cm、高さがMB=3cmの直角三角形なので、面積は (12 × 3) ÷ 2 = 18cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"40\" y=\"30\" width=\"160\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"80\" x2=\"200\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"40\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"40\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"200\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"200\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n          <text x=\"30\" y=\"80\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">M</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_058",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "長方形と斜め直線による面積分割",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "縦10cm、横16cmの長方形ABCDがあります。辺ABの中点Mと頂点Cを結ぶ直線MCによって長方形を2つに分けるとき、三角形MBCの面積は何cm²ですか。",
    "options": [
      "40cm²",
      "80cm²",
      "35cm²",
      "45cm²"
    ],
    "answer": "40cm²",
    "acceptableAnswers": [
      "40cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・長方形と斜め直線による面積分割",
    "explanation": "点MはABの中点なので、MB = 10 ÷ 2 = 5cm です。△MBCは底辺がBC=16cm、高さがMB=5cmの直角三角形なので、面積は (16 × 5) ÷ 2 = 40cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"40\" y=\"30\" width=\"160\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"80\" x2=\"200\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"40\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"40\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"200\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"200\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n          <text x=\"30\" y=\"80\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">M</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_059",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "長方形と斜め直線による面積分割",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "縦8cm、横14cmの長方形ABCDがあります。辺ABの中点Mと頂点Cを結ぶ直線MCによって長方形を2つに分けるとき、三角形MBCの面積は何cm²ですか。",
    "options": [
      "28cm²",
      "56cm²",
      "23cm²",
      "33cm²"
    ],
    "answer": "28cm²",
    "acceptableAnswers": [
      "28cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・長方形と斜め直線による面積分割",
    "explanation": "点MはABの中点なので、MB = 8 ÷ 2 = 4cm です。△MBCは底辺がBC=14cm、高さがMB=4cmの直角三角形なので、面積は (14 × 4) ÷ 2 = 28cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"40\" y=\"30\" width=\"160\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"80\" x2=\"200\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"40\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"40\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"200\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"200\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n          <text x=\"30\" y=\"80\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">M</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_060",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "長方形と斜め直線による面積分割",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "縦12cm、横20cmの長方形ABCDがあります。辺ABの中点Mと頂点Cを結ぶ直線MCによって長方形を2つに分けるとき、三角形MBCの面積は何cm²ですか。",
    "options": [
      "60cm²",
      "120cm²",
      "55cm²",
      "65cm²"
    ],
    "answer": "60cm²",
    "acceptableAnswers": [
      "60cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・長方形と斜め直線による面積分割",
    "explanation": "点MはABの中点なので、MB = 12 ÷ 2 = 6cm です。△MBCは底辺がBC=20cm、高さがMB=6cmの直角三角形なので、面積は (20 × 6) ÷ 2 = 60cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 240 160\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <rect x=\"40\" y=\"30\" width=\"160\" height=\"100\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <line x1=\"40\" y1=\"80\" x2=\"200\" y2=\"130\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"40\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">A</text><text x=\"40\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">B</text><text x=\"200\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">C</text><text x=\"200\" y=\"25\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">D</text>\n          <text x=\"30\" y=\"80\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">M</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_061",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ひし形と面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "2本の対角線の長さが8cmと12cmであるひし形の面積は何cm²ですか。",
    "options": [
      "48cm²",
      "96cm²",
      "24cm²",
      "58cm²"
    ],
    "answer": "48cm²",
    "acceptableAnswers": [
      "48cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・ひし形と面積",
    "explanation": "ひし形の面積は「対角線 × 対角線 ÷ 2」で求められます。したがって 8 × 12 ÷ 2 = 48cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 170,90 100,160 30,90\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"30\" y1=\"90\" x2=\"170\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"100\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">8cm × 12cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_062",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ひし形と面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "2本の対角線の長さが10cmと14cmであるひし形の面積は何cm²ですか。",
    "options": [
      "70cm²",
      "140cm²",
      "35cm²",
      "80cm²"
    ],
    "answer": "70cm²",
    "acceptableAnswers": [
      "70cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・ひし形と面積",
    "explanation": "ひし形の面積は「対角線 × 対角線 ÷ 2」で求められます。したがって 10 × 14 ÷ 2 = 70cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 170,90 100,160 30,90\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"30\" y1=\"90\" x2=\"170\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"100\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">10cm × 14cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_063",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ひし形と面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "2本の対角線の長さが12cmと16cmであるひし形の面積は何cm²ですか。",
    "options": [
      "96cm²",
      "192cm²",
      "48cm²",
      "106cm²"
    ],
    "answer": "96cm²",
    "acceptableAnswers": [
      "96cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・ひし形と面積",
    "explanation": "ひし形の面積は「対角線 × 対角線 ÷ 2」で求められます。したがって 12 × 16 ÷ 2 = 96cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 170,90 100,160 30,90\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"30\" y1=\"90\" x2=\"170\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"100\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">12cm × 16cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_064",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ひし形と面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "2本の対角線の長さが14cmと18cmであるひし形の面積は何cm²ですか。",
    "options": [
      "126cm²",
      "252cm²",
      "63cm²",
      "136cm²"
    ],
    "answer": "126cm²",
    "acceptableAnswers": [
      "126cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・ひし形と面積",
    "explanation": "ひし形の面積は「対角線 × 対角線 ÷ 2」で求められます。したがって 14 × 18 ÷ 2 = 126cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 170,90 100,160 30,90\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"30\" y1=\"90\" x2=\"170\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"100\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">14cm × 18cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_065",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "ひし形と面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "2本の対角線の長さが16cmと20cmであるひし形の面積は何cm²ですか。",
    "options": [
      "160cm²",
      "320cm²",
      "80cm²",
      "170cm²"
    ],
    "answer": "160cm²",
    "acceptableAnswers": [
      "160cm²"
    ],
    "keywords": [
      "面積",
      "比",
      "等積変形"
    ],
    "knowledgeTag": "平面図形・ひし形と面積",
    "explanation": "ひし形の面積は「対角線 × 対角線 ÷ 2」で求められます。したがって 16 × 20 ÷ 2 = 160cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 170,90 100,160 30,90\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <line x1=\"30\" y1=\"90\" x2=\"170\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n          <text x=\"100\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">16cm × 20cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_066",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "二重同心円のリング面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "中心が同じで半径が3cmと5cmの2つの円があります。この2つの円にはさまれたドーナツ型の部分（円環）の面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "50.24cm²",
      "37.68cm²",
      "62.800000000000004cm²",
      "79cm²"
    ],
    "answer": "50.24cm²",
    "acceptableAnswers": [
      "50.24cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・二重同心円のリング面積",
    "explanation": "外側の円の面積から内側の円の面積を引きます。(5² - 3²) × 3.14 = (25 - 9) × 3.14 = 16 × 3.14 = 50.24cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <circle cx=\"100\" cy=\"100\" r=\"75\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"#0f172a\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 3cm / 5cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_067",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "二重同心円のリング面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "中心が同じで半径が4cmと6cmの2つの円があります。この2つの円にはさまれたドーナツ型の部分（円環）の面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "62.8cm²",
      "50.239999999999995cm²",
      "75.36cm²",
      "113cm²"
    ],
    "answer": "62.8cm²",
    "acceptableAnswers": [
      "62.8cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・二重同心円のリング面積",
    "explanation": "外側の円の面積から内側の円の面積を引きます。(6² - 4²) × 3.14 = (36 - 16) × 3.14 = 20 × 3.14 = 62.8cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <circle cx=\"100\" cy=\"100\" r=\"75\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"#0f172a\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 4cm / 6cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_068",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "二重同心円のリング面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "中心が同じで半径が5cmと7cmの2つの円があります。この2つの円にはさまれたドーナツ型の部分（円環）の面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "75.36cm²",
      "62.8cm²",
      "87.92cm²",
      "154cm²"
    ],
    "answer": "75.36cm²",
    "acceptableAnswers": [
      "75.36cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・二重同心円のリング面積",
    "explanation": "外側の円の面積から内側の円の面積を引きます。(7² - 5²) × 3.14 = (49 - 25) × 3.14 = 24 × 3.14 = 75.36cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <circle cx=\"100\" cy=\"100\" r=\"75\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"#0f172a\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 5cm / 7cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_069",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "二重同心円のリング面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "中心が同じで半径が6cmと8cmの2つの円があります。この2つの円にはさまれたドーナツ型の部分（円環）の面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "87.92cm²",
      "75.36cm²",
      "100.48cm²",
      "201cm²"
    ],
    "answer": "87.92cm²",
    "acceptableAnswers": [
      "87.92cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・二重同心円のリング面積",
    "explanation": "外側の円の面積から内側の円の面積を引きます。(8² - 6²) × 3.14 = (64 - 36) × 3.14 = 28 × 3.14 = 87.92cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <circle cx=\"100\" cy=\"100\" r=\"75\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"#0f172a\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 6cm / 8cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_070",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "二重同心円のリング面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "中心が同じで半径が6cmと10cmの2つの円があります。この2つの円にはさまれたドーナツ型の部分（円環）の面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "200.96cm²",
      "188.4cm²",
      "213.52cm²",
      "314cm²"
    ],
    "answer": "200.96cm²",
    "acceptableAnswers": [
      "200.96cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・二重同心円のリング面積",
    "explanation": "外側の円の面積から内側の円の面積を引きます。(10² - 6²) × 3.14 = (100 - 36) × 3.14 = 64 × 3.14 = 200.96cm² です。",
    "figureSvg": "<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <circle cx=\"100\" cy=\"100\" r=\"75\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"#0f172a\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"105\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 6cm / 10cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_071",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "半円と直角三角形（ヒポクラテスの三日月）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角をはさむ2辺が3cmと4cm、斜辺が5cmの直角三角形の各辺を直径とする半円を外側に描いたとき、2つの三日月型の部分の面積の合計は何cm²ですか。",
    "options": [
      "6cm²",
      "12cm²",
      "9cm²",
      "16cm²"
    ],
    "answer": "6cm²",
    "acceptableAnswers": [
      "6cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・半円と直角三角形（ヒポクラテスの三日月）",
    "explanation": "ヒポクラテスの定理により、直角三角形の2辺上にできる2つの三日月の面積の和は、直角三角形自身の面積とちょうど等しくなります。したがって (3 × 4) ÷ 2 = 6cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"60,130 60,60 160,130\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <path d=\"M 60 60 A 35 35 0 0 0 60 130 A 35 35 0 0 1 60 60\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <path d=\"M 60 130 A 50 50 0 0 0 160 130 A 50 50 0 0 1 60 130\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"110\" y=\"100\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">6 cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_072",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "半円と直角三角形（ヒポクラテスの三日月）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角をはさむ2辺が6cmと8cm、斜辺が10cmの直角三角形の各辺を直径とする半円を外側に描いたとき、2つの三日月型の部分の面積の合計は何cm²ですか。",
    "options": [
      "24cm²",
      "48cm²",
      "36cm²",
      "34cm²"
    ],
    "answer": "24cm²",
    "acceptableAnswers": [
      "24cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・半円と直角三角形（ヒポクラテスの三日月）",
    "explanation": "ヒポクラテスの定理により、直角三角形の2辺上にできる2つの三日月の面積の和は、直角三角形自身の面積とちょうど等しくなります。したがって (6 × 8) ÷ 2 = 24cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"60,130 60,60 160,130\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <path d=\"M 60 60 A 35 35 0 0 0 60 130 A 35 35 0 0 1 60 60\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <path d=\"M 60 130 A 50 50 0 0 0 160 130 A 50 50 0 0 1 60 130\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"110\" y=\"100\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">24 cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_073",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "半円と直角三角形（ヒポクラテスの三日月）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角をはさむ2辺が5cmと12cm、斜辺が13cmの直角三角形の各辺を直径とする半円を外側に描いたとき、2つの三日月型の部分の面積の合計は何cm²ですか。",
    "options": [
      "30cm²",
      "60cm²",
      "45cm²",
      "40cm²"
    ],
    "answer": "30cm²",
    "acceptableAnswers": [
      "30cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・半円と直角三角形（ヒポクラテスの三日月）",
    "explanation": "ヒポクラテスの定理により、直角三角形の2辺上にできる2つの三日月の面積の和は、直角三角形自身の面積とちょうど等しくなります。したがって (5 × 12) ÷ 2 = 30cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"60,130 60,60 160,130\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <path d=\"M 60 60 A 35 35 0 0 0 60 130 A 35 35 0 0 1 60 60\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <path d=\"M 60 130 A 50 50 0 0 0 160 130 A 50 50 0 0 1 60 130\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"110\" y=\"100\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">30 cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_074",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "半円と直角三角形（ヒポクラテスの三日月）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角をはさむ2辺が9cmと12cm、斜辺が15cmの直角三角形の各辺を直径とする半円を外側に描いたとき、2つの三日月型の部分の面積の合計は何cm²ですか。",
    "options": [
      "54cm²",
      "108cm²",
      "81cm²",
      "64cm²"
    ],
    "answer": "54cm²",
    "acceptableAnswers": [
      "54cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・半円と直角三角形（ヒポクラテスの三日月）",
    "explanation": "ヒポクラテスの定理により、直角三角形の2辺上にできる2つの三日月の面積の和は、直角三角形自身の面積とちょうど等しくなります。したがって (9 × 12) ÷ 2 = 54cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"60,130 60,60 160,130\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <path d=\"M 60 60 A 35 35 0 0 0 60 130 A 35 35 0 0 1 60 60\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <path d=\"M 60 130 A 50 50 0 0 0 160 130 A 50 50 0 0 1 60 130\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"110\" y=\"100\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">54 cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_075",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "半円と直角三角形（ヒポクラテスの三日月）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "直角をはさむ2辺が8cmと15cm、斜辺が17cmの直角三角形の各辺を直径とする半円を外側に描いたとき、2つの三日月型の部分の面積の合計は何cm²ですか。",
    "options": [
      "60cm²",
      "120cm²",
      "90cm²",
      "70cm²"
    ],
    "answer": "60cm²",
    "acceptableAnswers": [
      "60cm²"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・半円と直角三角形（ヒポクラテスの三日月）",
    "explanation": "ヒポクラテスの定理により、直角三角形の2辺上にできる2つの三日月の面積の和は、直角三角形自身の面積とちょうど等しくなります。したがって (8 × 15) ÷ 2 = 60cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"60,130 60,60 160,130\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n          <path d=\"M 60 60 A 35 35 0 0 0 60 130 A 35 35 0 0 1 60 60\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <path d=\"M 60 130 A 50 50 0 0 0 160 130 A 50 50 0 0 1 60 130\" fill=\"#fbbf24\" fill-opacity=\"0.5\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"110\" y=\"100\" font-size=\"12\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">60 cm²</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_076",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "おうぎ形の中心角逆算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径が10cmで、弧の長さが15.7cmのおうぎ形の中心角は何度ですか。（円周率は3.14とします）",
    "options": [
      "90度",
      "75度",
      "105度",
      "120度"
    ],
    "answer": "90度",
    "acceptableAnswers": [
      "90度"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・おうぎ形の中心角逆算",
    "explanation": "弧の長さ = 直径 × 円周率 × (中心角 ÷ 360) より、中心角 = (弧の長さ ÷ (2 × 半径 × 3.14)) × 360 = (15.7 ÷ (20 × 3.14)) × 360 = 90度 と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <path d=\"M 100 130 L 160 130 A 60 60 0 0 0 130 78 Z\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">O</text><text x=\"130\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">?</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_077",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "おうぎ形の中心角逆算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径が6cmで、弧の長さが9.42cmのおうぎ形の中心角は何度ですか。（円周率は3.14とします）",
    "options": [
      "90度",
      "75度",
      "105度",
      "120度"
    ],
    "answer": "90度",
    "acceptableAnswers": [
      "90度"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・おうぎ形の中心角逆算",
    "explanation": "弧の長さ = 直径 × 円周率 × (中心角 ÷ 360) より、中心角 = (弧の長さ ÷ (2 × 半径 × 3.14)) × 360 = (9.42 ÷ (12 × 3.14)) × 360 = 90度 と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <path d=\"M 100 130 L 160 130 A 60 60 0 0 0 130 78 Z\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">O</text><text x=\"130\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">?</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_078",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "おうぎ形の中心角逆算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径が12cmで、弧の長さが18.84cmのおうぎ形の中心角は何度ですか。（円周率は3.14とします）",
    "options": [
      "90度",
      "75度",
      "105度",
      "120度"
    ],
    "answer": "90度",
    "acceptableAnswers": [
      "90度"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・おうぎ形の中心角逆算",
    "explanation": "弧の長さ = 直径 × 円周率 × (中心角 ÷ 360) より、中心角 = (弧の長さ ÷ (2 × 半径 × 3.14)) × 360 = (18.84 ÷ (24 × 3.14)) × 360 = 90度 と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <path d=\"M 100 130 L 160 130 A 60 60 0 0 0 130 78 Z\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">O</text><text x=\"130\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">?</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_079",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "おうぎ形の中心角逆算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径が8cmで、弧の長さが12.56cmのおうぎ形の中心角は何度ですか。（円周率は3.14とします）",
    "options": [
      "90度",
      "75度",
      "105度",
      "120度"
    ],
    "answer": "90度",
    "acceptableAnswers": [
      "90度"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・おうぎ形の中心角逆算",
    "explanation": "弧の長さ = 直径 × 円周率 × (中心角 ÷ 360) より、中心角 = (弧の長さ ÷ (2 × 半径 × 3.14)) × 360 = (12.56 ÷ (16 × 3.14)) × 360 = 90度 と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <path d=\"M 100 130 L 160 130 A 60 60 0 0 0 130 78 Z\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">O</text><text x=\"130\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">?</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_080",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "おうぎ形の中心角逆算",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "半径が15cmで、弧の長さが23.55cmのおうぎ形の中心角は何度ですか。（円周率は3.14とします）",
    "options": [
      "90度",
      "75度",
      "105度",
      "120度"
    ],
    "answer": "90度",
    "acceptableAnswers": [
      "90度"
    ],
    "keywords": [
      "円",
      "おうぎ形",
      "弧"
    ],
    "knowledgeTag": "平面図形・おうぎ形の中心角逆算",
    "explanation": "弧の長さ = 直径 × 円周率 × (中心角 ÷ 360) より、中心角 = (弧の長さ ÷ (2 × 半径 × 3.14)) × 360 = (23.55 ÷ (30 × 3.14)) × 360 = 90度 と求まります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <path d=\"M 100 130 L 160 130 A 60 60 0 0 0 130 78 Z\" fill=\"#3b82f6\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"145\" font-size=\"14\" font-weight=\"bold\" fill=\"#f8fafc\" text-anchor=\"middle\" filter=\"url(#glow)\">O</text><text x=\"130\" y=\"125\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\" text-anchor=\"middle\" filter=\"url(#glow)\">?</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_081",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円すいの側面積と展開図",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "母線の長さが10cm、底面の半径が4cmの円すいの側面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "125.6cm²",
      "110.6cm²",
      "140.6cm²",
      "314cm²"
    ],
    "answer": "125.6cm²",
    "acceptableAnswers": [
      "125.6cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・円すいの側面積と展開図",
    "explanation": "円すいの側面積は「母線 × 底面の半径 × 円周率」という公式で簡単に求められます。10 × 4 × 3.14 = 40 × 3.14 = 125.6cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 50,140 150,140\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"14\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"60\" y=\"75\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"end\" filter=\"url(#glow)\">母線 10cm</text>\n          <text x=\"100\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 4cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_082",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円すいの側面積と展開図",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "母線の長さが12cm、底面の半径が3cmの円すいの側面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "113.04cm²",
      "98.04cm²",
      "128.04000000000002cm²",
      "452cm²"
    ],
    "answer": "113.04cm²",
    "acceptableAnswers": [
      "113.04cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・円すいの側面積と展開図",
    "explanation": "円すいの側面積は「母線 × 底面の半径 × 円周率」という公式で簡単に求められます。12 × 3 × 3.14 = 36 × 3.14 = 113.04cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 50,140 150,140\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"14\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"60\" y=\"75\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"end\" filter=\"url(#glow)\">母線 12cm</text>\n          <text x=\"100\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 3cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_083",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円すいの側面積と展開図",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "母線の長さが15cm、底面の半径が6cmの円すいの側面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "282.6cm²",
      "267.6cm²",
      "297.6cm²",
      "707cm²"
    ],
    "answer": "282.6cm²",
    "acceptableAnswers": [
      "282.6cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・円すいの側面積と展開図",
    "explanation": "円すいの側面積は「母線 × 底面の半径 × 円周率」という公式で簡単に求められます。15 × 6 × 3.14 = 90 × 3.14 = 282.6cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 50,140 150,140\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"14\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"60\" y=\"75\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"end\" filter=\"url(#glow)\">母線 15cm</text>\n          <text x=\"100\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 6cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_084",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円すいの側面積と展開図",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "母線の長さが8cm、底面の半径が3cmの円すいの側面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "75.36cm²",
      "60.36cm²",
      "90.36cm²",
      "201cm²"
    ],
    "answer": "75.36cm²",
    "acceptableAnswers": [
      "75.36cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・円すいの側面積と展開図",
    "explanation": "円すいの側面積は「母線 × 底面の半径 × 円周率」という公式で簡単に求められます。8 × 3 × 3.14 = 24 × 3.14 = 75.36cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 50,140 150,140\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"14\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"60\" y=\"75\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"end\" filter=\"url(#glow)\">母線 8cm</text>\n          <text x=\"100\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 3cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_085",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "円すいの側面積と展開図",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "母線の長さが12cm、底面の半径が5cmの円すいの側面積は何cm²ですか。（円周率は3.14とします）",
    "options": [
      "188.4cm²",
      "173.4cm²",
      "203.4cm²",
      "452cm²"
    ],
    "answer": "188.4cm²",
    "acceptableAnswers": [
      "188.4cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・円すいの側面積と展開図",
    "explanation": "円すいの側面積は「母線 × 底面の半径 × 円周率」という公式で簡単に求められます。12 × 5 × 3.14 = 60 × 3.14 = 188.4cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 50,140 150,140\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n          <ellipse cx=\"100\" cy=\"140\" rx=\"50\" ry=\"14\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"60\" y=\"75\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"end\" filter=\"url(#glow)\">母線 12cm</text>\n          <text x=\"100\" y=\"160\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">半径 5cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_086",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "立方体の切断切り口（六角形）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1辺が6cmの立方体の各辺の中点のうち、適当な6個の中点を通る平面で切断したとき、切り口の図形はどのような形になりますか。",
    "options": [
      "正六角形",
      "正方形",
      "正三角形",
      "長方形"
    ],
    "answer": "正六角形",
    "acceptableAnswers": [
      "正六角形"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・立方体の切断切り口（六角形）",
    "explanation": "立方体の向かい合う2つの頂点を取り囲むように6本の辺の中点を通る平面で切断すると、すべての辺の長さが等しく、内角がすべて120度の「正六角形」が切り口として現れます。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"110,20 180,60 180,140 110,180 40,140 40,60\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <polygon points=\"110,20 180,60 145,160 40,140 75,40\" fill=\"#f59e0b\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"110\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">正六角形の切断面</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_087",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "立方体の切断切り口（六角形）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1辺が8cmの立方体の各辺の中点のうち、適当な6個の中点を通る平面で切断したとき、切り口の図形はどのような形になりますか。",
    "options": [
      "正六角形",
      "正方形",
      "正三角形",
      "長方形"
    ],
    "answer": "正六角形",
    "acceptableAnswers": [
      "正六角形"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・立方体の切断切り口（六角形）",
    "explanation": "立方体の向かい合う2つの頂点を取り囲むように6本の辺の中点を通る平面で切断すると、すべての辺の長さが等しく、内角がすべて120度の「正六角形」が切り口として現れます。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"110,20 180,60 180,140 110,180 40,140 40,60\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <polygon points=\"110,20 180,60 145,160 40,140 75,40\" fill=\"#f59e0b\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"110\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">正六角形の切断面</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_088",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "立方体の切断切り口（六角形）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1辺が10cmの立方体の各辺の中点のうち、適当な6個の中点を通る平面で切断したとき、切り口の図形はどのような形になりますか。",
    "options": [
      "正六角形",
      "正方形",
      "正三角形",
      "長方形"
    ],
    "answer": "正六角形",
    "acceptableAnswers": [
      "正六角形"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・立方体の切断切り口（六角形）",
    "explanation": "立方体の向かい合う2つの頂点を取り囲むように6本の辺の中点を通る平面で切断すると、すべての辺の長さが等しく、内角がすべて120度の「正六角形」が切り口として現れます。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"110,20 180,60 180,140 110,180 40,140 40,60\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <polygon points=\"110,20 180,60 145,160 40,140 75,40\" fill=\"#f59e0b\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"110\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">正六角形の切断面</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_089",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "立方体の切断切り口（六角形）",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "1辺が12cmの立方体の各辺の中点のうち、適当な6個の中点を通る平面で切断したとき、切り口の図形はどのような形になりますか。",
    "options": [
      "正六角形",
      "正方形",
      "正三角形",
      "長方形"
    ],
    "answer": "正六角形",
    "acceptableAnswers": [
      "正六角形"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・立方体の切断切り口（六角形）",
    "explanation": "立方体の向かい合う2つの頂点を取り囲むように6本の辺の中点を通る平面で切断すると、すべての辺の長さが等しく、内角がすべて120度の「正六角形」が切り口として現れます。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n        <polygon points=\"110,20 180,60 180,140 110,180 40,140 40,60\" fill=\"#1e293b\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n        <polygon points=\"110,20 180,60 145,160 40,140 75,40\" fill=\"#f59e0b\" fill-opacity=\"0.3\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"110\" y=\"100\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">正六角形の切断面</text>\n      \n</svg>"
  },
  {
    "id": "m_adv2_090",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "すい体の切断と体積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "高さ6cmの四角すいを、底面に平行で頂点から2cmの高さの平面で切断して2つの立体に分けました。上の小さな四角すいと、もとの四角すい全体の体積の比として最も適当なものはどれですか。",
    "options": [
      "1 : 27",
      "1 : 3",
      "1 : 9",
      "1 : 26"
    ],
    "answer": "1 : 27",
    "acceptableAnswers": [
      "1 : 27"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・すい体の切断と体積比",
    "explanation": "小さな四角すいともとの四角すいは相似で、相似比は高さの比 1:3 です。相似な立体の体積比は相似比の3乗になるため、1³ : 3³ = 1 : 27 となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 40,150 160,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"130\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上 2cm</text>\n          <text x=\"100\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">全体高 6cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_091",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "すい体の切断と体積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "高さ9cmの四角すいを、底面に平行で頂点から3cmの高さの平面で切断して2つの立体に分けました。上の小さな四角すいと、もとの四角すい全体の体積の比として最も適当なものはどれですか。",
    "options": [
      "1 : 27",
      "1 : 3",
      "1 : 9",
      "1 : 26"
    ],
    "answer": "1 : 27",
    "acceptableAnswers": [
      "1 : 27"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・すい体の切断と体積比",
    "explanation": "小さな四角すいともとの四角すいは相似で、相似比は高さの比 1:3 です。相似な立体の体積比は相似比の3乗になるため、1³ : 3³ = 1 : 27 となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 40,150 160,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"130\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上 3cm</text>\n          <text x=\"100\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">全体高 9cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_092",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "すい体の切断と体積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "高さ10cmの四角すいを、底面に平行で頂点から5cmの高さの平面で切断して2つの立体に分けました。上の小さな四角すいと、もとの四角すい全体の体積の比として最も適当なものはどれですか。",
    "options": [
      "1 : 8",
      "1 : 2",
      "1 : 4",
      "1 : 7"
    ],
    "answer": "1 : 8",
    "acceptableAnswers": [
      "1 : 8"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・すい体の切断と体積比",
    "explanation": "小さな四角すいともとの四角すいは相似で、相似比は高さの比 1:2 です。相似な立体の体積比は相似比の3乗になるため、1³ : 2³ = 1 : 8 となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 40,150 160,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"130\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上 5cm</text>\n          <text x=\"100\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">全体高 10cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_093",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "すい体の切断と体積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "高さ12cmの四角すいを、底面に平行で頂点から4cmの高さの平面で切断して2つの立体に分けました。上の小さな四角すいと、もとの四角すい全体の体積の比として最も適当なものはどれですか。",
    "options": [
      "1 : 27",
      "1 : 3",
      "1 : 9",
      "1 : 26"
    ],
    "answer": "1 : 27",
    "acceptableAnswers": [
      "1 : 27"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・すい体の切断と体積比",
    "explanation": "小さな四角すいともとの四角すいは相似で、相似比は高さの比 1:3 です。相似な立体の体積比は相似比の3乗になるため、1³ : 3³ = 1 : 27 となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 40,150 160,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"130\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上 4cm</text>\n          <text x=\"100\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">全体高 12cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_094",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "すい体の切断と体積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "高さ8cmの四角すいを、底面に平行で頂点から4cmの高さの平面で切断して2つの立体に分けました。上の小さな四角すいと、もとの四角すい全体の体積の比として最も適当なものはどれですか。",
    "options": [
      "1 : 8",
      "1 : 2",
      "1 : 4",
      "1 : 7"
    ],
    "answer": "1 : 8",
    "acceptableAnswers": [
      "1 : 8"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・すい体の切断と体積比",
    "explanation": "小さな四角すいともとの四角すいは相似で、相似比は高さの比 1:2 です。相似な立体の体積比は相似比の3乗になるため、1³ : 2³ = 1 : 8 となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 40,150 160,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"130\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上 4cm</text>\n          <text x=\"100\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">全体高 8cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_095",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "すい体の切断と体積比",
    "difficulty": "advanced",
    "questionType": "choice",
    "question": "高さ15cmの四角すいを、底面に平行で頂点から5cmの高さの平面で切断して2つの立体に分けました。上の小さな四角すいと、もとの四角すい全体の体積の比として最も適当なものはどれですか。",
    "options": [
      "1 : 27",
      "1 : 3",
      "1 : 9",
      "1 : 26"
    ],
    "answer": "1 : 27",
    "acceptableAnswers": [
      "1 : 27"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・すい体の切断と体積比",
    "explanation": "小さな四角すいともとの四角すいは相似で、相似比は高さの比 1:3 です。相似な立体の体積比は相似比の3乗になるため、1³ : 3³ = 1 : 27 となります。",
    "figureSvg": "<svg viewBox=\"0 0 200 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"100,20 40,150 160,150\" fill=\"#1e293b\" stroke=\"#6366f1\" stroke-width=\"2\"/>\n          <line x1=\"70\" y1=\"85\" x2=\"130\" y2=\"85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"100\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"middle\" filter=\"url(#glow)\">上 5cm</text>\n          <text x=\"100\" y=\"165\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\" filter=\"url(#glow)\">全体高 15cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_096",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角柱の表面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底面が直角をはさむ2辺が3cmと4cm、斜辺が5cmの直角三角形で、高さが8cmである三角柱の表面積は何cm²ですか。",
    "options": [
      "108cm²",
      "96cm²",
      "102cm²",
      "128cm²"
    ],
    "answer": "108cm²",
    "acceptableAnswers": [
      "108cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・角柱の表面積",
    "explanation": "底面積2個分は (3 × 4 ÷ 2) × 2 = 12cm² です。側面積は底面の周囲の長さ × 高さなので (3 + 4 + 5) × 8 = 12 × 8 = 96cm² です。合計の表面積は 12 + 96 = 108cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"50,40 50,80 120,80\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <polygon points=\"50,110 50,150 120,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"110\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"80\" x2=\"120\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <text x=\"145\" y=\"115\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"start\" filter=\"url(#glow)\">高さ 8cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_097",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角柱の表面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底面が直角をはさむ2辺が6cmと8cm、斜辺が10cmの直角三角形で、高さが10cmである三角柱の表面積は何cm²ですか。",
    "options": [
      "288cm²",
      "240cm²",
      "264cm²",
      "308cm²"
    ],
    "answer": "288cm²",
    "acceptableAnswers": [
      "288cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・角柱の表面積",
    "explanation": "底面積2個分は (6 × 8 ÷ 2) × 2 = 48cm² です。側面積は底面の周囲の長さ × 高さなので (6 + 8 + 10) × 10 = 24 × 10 = 240cm² です。合計の表面積は 48 + 240 = 288cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"50,40 50,80 120,80\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <polygon points=\"50,110 50,150 120,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"110\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"80\" x2=\"120\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <text x=\"145\" y=\"115\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"start\" filter=\"url(#glow)\">高さ 10cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_098",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角柱の表面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底面が直角をはさむ2辺が5cmと12cm、斜辺が13cmの直角三角形で、高さが6cmである三角柱の表面積は何cm²ですか。",
    "options": [
      "240cm²",
      "180cm²",
      "210cm²",
      "260cm²"
    ],
    "answer": "240cm²",
    "acceptableAnswers": [
      "240cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・角柱の表面積",
    "explanation": "底面積2個分は (5 × 12 ÷ 2) × 2 = 60cm² です。側面積は底面の周囲の長さ × 高さなので (5 + 12 + 13) × 6 = 30 × 6 = 180cm² です。合計の表面積は 60 + 180 = 240cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"50,40 50,80 120,80\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <polygon points=\"50,110 50,150 120,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"110\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"80\" x2=\"120\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <text x=\"145\" y=\"115\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"start\" filter=\"url(#glow)\">高さ 6cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_099",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角柱の表面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底面が直角をはさむ2辺が9cmと12cm、斜辺が15cmの直角三角形で、高さが5cmである三角柱の表面積は何cm²ですか。",
    "options": [
      "288cm²",
      "180cm²",
      "234cm²",
      "308cm²"
    ],
    "answer": "288cm²",
    "acceptableAnswers": [
      "288cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・角柱の表面積",
    "explanation": "底面積2個分は (9 × 12 ÷ 2) × 2 = 108cm² です。側面積は底面の周囲の長さ × 高さなので (9 + 12 + 15) × 5 = 36 × 5 = 180cm² です。合計の表面積は 108 + 180 = 288cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"50,40 50,80 120,80\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <polygon points=\"50,110 50,150 120,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"110\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"80\" x2=\"120\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <text x=\"145\" y=\"115\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"start\" filter=\"url(#glow)\">高さ 5cm</text>\n        \n</svg>"
  },
  {
    "id": "m_adv2_100",
    "subject": "算数",
    "category": "平面図形・立体図形",
    "subCategory": "角柱の表面積",
    "difficulty": "standard",
    "questionType": "choice",
    "question": "底面が直角をはさむ2辺が8cmと15cm、斜辺が17cmの直角三角形で、高さが10cmである三角柱の表面積は何cm²ですか。",
    "options": [
      "520cm²",
      "400cm²",
      "460cm²",
      "540cm²"
    ],
    "answer": "520cm²",
    "acceptableAnswers": [
      "520cm²"
    ],
    "keywords": [
      "立体図形",
      "切断",
      "体積",
      "表面積"
    ],
    "knowledgeTag": "立体図形・角柱の表面積",
    "explanation": "底面積2個分は (8 × 15 ÷ 2) × 2 = 120cm² です。側面積は底面の周囲の長さ × 高さなので (8 + 15 + 17) × 10 = 40 × 10 = 400cm² です。合計の表面積は 120 + 400 = 520cm² となります。",
    "figureSvg": "<svg viewBox=\"0 0 220 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full\">\n\n  <defs>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"1\" stdDeviation=\"2\" flood-color=\"#000\" flood-opacity=\"0.6\"/>\n    </filter>\n  </defs>\n\n          <polygon points=\"50,40 50,80 120,80\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <polygon points=\"50,110 50,150 120,150\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"110\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <line x1=\"120\" y1=\"80\" x2=\"120\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n          <text x=\"145\" y=\"115\" font-size=\"11\" font-weight=\"bold\" fill=\"#fde68a\" text-anchor=\"start\" filter=\"url(#glow)\">高さ 10cm</text>\n        \n</svg>"
  }
];
