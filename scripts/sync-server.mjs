import http from 'http';
import fs from 'fs';
import path from 'path';
import os from 'os';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3030;
const standaloneHtmlPath = path.resolve('中学受験マスター2_スタンドアローン.html');
const syncDataPath = path.resolve('user_sync_data.json');

// ローカルネットワーク（Wi-Fi）のIPv4アドレス一覧を取得
function getLanUrls(port) {
  const nets = os.networkInterfaces();
  const urls = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        urls.push(`http://${net.address}:${port}`);
      }
    }
  }
  return urls;
}

// 同期データ読み込み
function loadSyncData() {
  if (!fs.existsSync(syncDataPath)) {
    const initial = {
      customQuestions: [],
      history: [],
      wrongAnswers: [],
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(syncDataPath, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
  try {
    return JSON.parse(fs.readFileSync(syncDataPath, 'utf8'));
  } catch {
    return {
      customQuestions: [],
      history: [],
      wrongAnswers: [],
      updatedAt: new Date().toISOString(),
    };
  }
}

// 双方向マージロジック（MacのデータとAndroidタブレットのデータを欠損なく統合）
function mergeSyncData(serverData, clientData) {
  // 1. カスタム問題の統合（ID重複排除、新しい方を優先）
  const questionMap = new Map();
  for (const q of serverData.customQuestions || []) {
    if (q && q.id) questionMap.set(q.id, q);
  }
  for (const q of clientData.customQuestions || []) {
    if (q && q.id) questionMap.set(q.id, q);
  }
  const mergedCustomQuestions = Array.from(questionMap.values());

  // 2. 学習履歴（history）の統合（日時＋科目＋スコアで重複排除し時系列順にソート）
  const historyMap = new Map();
  const makeHistoryKey = (h) => `${h.date || h.timestamp || ''}_${h.subject || ''}_${h.score ?? ''}_${h.total ?? ''}`;
  for (const h of serverData.history || []) {
    if (h) historyMap.set(makeHistoryKey(h), h);
  }
  for (const h of clientData.history || []) {
    if (h) historyMap.set(makeHistoryKey(h), h);
  }
  const mergedHistory = Array.from(historyMap.values()).sort((a, b) =>
    String(a.date || '').localeCompare(String(b.date || ''))
  );

  // 3. 弱点問題（wrongAnswers）の統合
  const wrongMap = new Map();
  for (const w of serverData.wrongAnswers || []) {
    if (w && w.id) wrongMap.set(w.id, w);
  }
  for (const w of clientData.wrongAnswers || []) {
    if (!w || !w.id) continue;
    const existing = wrongMap.get(w.id);
    if (!existing) {
      wrongMap.set(w.id, w);
    } else {
      const isNewer = String(w.lastWrongAt || '') > String(existing.lastWrongAt || '');
      wrongMap.set(w.id, {
        ...existing,
        ...w,
        lastWrongAt: isNewer ? w.lastWrongAt : existing.lastWrongAt,
        lastUserAnswer: isNewer ? w.lastUserAnswer || existing.lastUserAnswer : existing.lastUserAnswer,
        wrongCount: Math.max(existing.wrongCount || 1, w.wrongCount || 1),
      });
    }
  }
  const mergedWrongAnswers = Array.from(wrongMap.values());

  // 4. セーブ記録（snapshots）の統合
  const snapMap = new Map();
  for (const s of serverData.snapshots || []) {
    if (s && s.id) snapMap.set(s.id, s);
  }
  for (const s of clientData.snapshots || []) {
    if (s && s.id) snapMap.set(s.id, s);
  }
  const mergedSnapshots = Array.from(snapMap.values())
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
    .slice(0, 20);

  return {
    customQuestions: mergedCustomQuestions,
    history: mergedHistory,
    wrongAnswers: mergedWrongAnswers,
    snapshots: mergedSnapshots,
    updatedAt: new Date().toISOString(),
  };
}

const manifestJson = JSON.stringify(
  {
    name: '中学受験マスター2 - 理科・社会 AI学習',
    short_name: '受験マスター2',
    description: '中学受験向け理科・社会1006問収録＆オフライン対応学習アプリ',
    start_url: '/',
    display: 'standalone',
    background_color: '#f1f5f9',
    theme_color: '#4f46e5',
    icons: [
      {
        src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%234f46e5"/><text y=".9em" x="50%" text-anchor="middle" font-size="65">🎓</text></svg>',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
    ],
  },
  null,
  2
);

// オフラインでも動作させるためのService Workerスクリプト
const serviceWorkerJs = `
const CACHE_NAME = 'juken-master-v2-cache-v3';
const URLS_TO_CACHE = ['/', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const cloned = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
        return response;
      })
      .catch(() => caches.match(event.request).then((res) => res || caches.match('/')))
  );
});
`;

const server = http.createServer((req, res) => {
  // CORSヘッダー設定（Mac上のfile://で開いたHTMLからもlocalhost:3030へ同期可能にする）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  // 1. 同期APIエンドポイント
  if (reqUrl.pathname === '/api/sync') {
    if (req.method === 'GET') {
      const current = loadSyncData();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ ...current, lanUrls: getLanUrls(PORT) }));
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const clientData = JSON.parse(body || '{}');
          const serverData = loadSyncData();
          const merged = mergeSyncData(serverData, clientData);
          fs.writeFileSync(syncDataPath, JSON.stringify(merged, null, 2), 'utf8');

          const timeStr = new Date().toLocaleTimeString('ja-JP');
          console.log(
            `[${timeStr}] 🔄 同期完了！ (履歴: ${merged.history.length}件 / 弱点: ${merged.wrongAnswers.length}問 / 追加問題: ${merged.customQuestions.length}問)`
          );

          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ ...merged, lanUrls: getLanUrls(PORT) }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
  }

  // 2. PWA Manifest
  if (reqUrl.pathname === '/manifest.json') {
    res.writeHead(200, { 'Content-Type': 'application/manifest+json; charset=utf-8' });
    res.end(manifestJson);
    return;
  }

  // 3. Service Worker（オフラインキャッシュ用）
  if (reqUrl.pathname === '/sw.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
    res.end(serviceWorkerJs);
    return;
  }

  // 4. メインアプリ配信（スタンドアローンHTMLをそのまま返す）
  if (fs.existsSync(standaloneHtmlPath)) {
    const html = fs.readFileSync(standaloneHtmlPath, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('中学受験マスター2_スタンドアローン.html が見つかりません。npm run build を実行してください。');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  const lanUrls = getLanUrls(PORT);
  console.log('\n============================================================');
  console.log('🎓 中学受験マスター2 - Wi-Fi配信＆双方向同期サーバー起動！');
  console.log('============================================================');
  console.log(`💻 Mac本体のブラウザで開く場合:`);
  console.log(`   👉 http://localhost:${PORT}`);
  console.log('\n📱 Androidタブレット（同じWi-Fiに接続）で開く場合:');
  if (lanUrls.length > 0) {
    lanUrls.forEach((u) => console.log(`   👉 ${u}`));
  } else {
    console.log('   （※Wi-Fi接続が確認できませんでした。Wi-Fi設定を確認してください）');
  }
  console.log('\n💡 使い方:');
  console.log('   1. AndroidタブレットのChromeで上記の「👉 http://192.168...」を開きます');
  console.log('   2. Chrome右上のメニューから「ホーム画面に追加」するとオフラインでも使えます');
  console.log('   3. アプリ画面上部の「🔄 Wi-FiでMac・タブレット同期」を押すと学習履歴が統合されます');
  console.log('   ※ 終了するときはこのウィンドウを閉じるか Ctrl + C を押してください');
  console.log('============================================================\n');
});
