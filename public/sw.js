const CACHE_NAME = 'juken-master-v2-cache-v3';

// 初回インストール時に確実に保持するコアアセット
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
];

// インストール時: コアアセットを確実にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return Promise.allSettled(
          PRECACHE_URLS.map((url) =>
            fetch(url, { cache: 'no-cache' })
              .then((res) => {
                if (res.ok) return cache.put(url, res);
              })
              .catch((err) => {
                console.warn('[SW] Precache fetch error for:', url, err);
              })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// アクティベート時: 古いバージョンのキャッシュを掃除して即座に制御開始
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// フェッチ処理
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 外部API（Gemini APIやFirebase等）はキャッシュ対象外
  if (url.origin !== self.location.origin) return;

  // ① ページ遷移（HTML / ナビゲーション）リクエストの場合
  // オフライン時でも絶対に index.html を返す（SPA用フォールバック）
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, clone);
              cache.put('./index.html', networkRes.clone());
              cache.put('./', networkRes.clone());
            });
          }
          return networkRes;
        })
        .catch(async () => {
          // オフラインまたはネットワークエラー時: キャッシュのHTMLを返す
          const cached = await caches.match(req);
          if (cached) return cached;
          const fallbackHtml = await caches.match('./index.html');
          if (fallbackHtml) return fallbackHtml;
          const rootFallback = await caches.match('./');
          if (rootFallback) return rootFallback;
          return new Response('Offline: キャッシュされたコンテンツが見つかりません', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          });
        })
    );
    return;
  }

  // ② 静的アセット（JS, CSS, 画像, JSON等）の場合:
  // Cache-First (キャッシュ優先) + ネットワーク更新
  event.respondWith(
    caches.match(req).then((cachedRes) => {
      if (cachedRes) {
        // キャッシュにあれば即座に返し、裏で最新版をフェッチしてキャッシュを更新（Stale-While-Revalidate）
        fetch(req)
          .then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(req, networkRes));
            }
          })
          .catch(() => {});
        return cachedRes;
      }

      // キャッシュにない場合はネットワークから取得してキャッシュに保存
      return fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => {
          // オフラインでアセットが見つからない場合でもクラッシュさせない
          return new Response('', { status: 408, statusText: 'Request timed out / Offline' });
        });
    })
  );
});
