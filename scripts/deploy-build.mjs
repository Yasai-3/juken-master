import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = path.resolve('.');
const indexHtmlPath = path.join(rootDir, 'index.html');

// 1. ソースコード用の index.html テンプレート
const sourceIndexHtml = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#4f46e5" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="中学受験マスター2" />
    <link rel="manifest" href="./manifest.json" />
    <link rel="icon" type="image/svg+xml" href="./icon.svg" />
    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
    <title>中学受験マスター2 - AI作問＆弱点コーチング</title>
  </head>
  <body class="bg-slate-50 text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

console.log('1. エントリポイントを /src/main.jsx にセット中...');
fs.writeFileSync(indexHtmlPath, sourceIndexHtml, 'utf8');

console.log('2. Vite ビルドを実行中...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('3. GitHub Pages 用成果物をルートにコピー中...');
const distHtml = fs.readFileSync(path.join(rootDir, 'dist/index.html'), 'utf8');
fs.writeFileSync(indexHtmlPath, distHtml, 'utf8');

const distAssets = path.join(rootDir, 'dist/assets');
const rootAssets = path.join(rootDir, 'assets');
if (fs.existsSync(rootAssets)) {
  fs.rmSync(rootAssets, { recursive: true, force: true });
}
execSync(`cp -r "${distAssets}" "${rootAssets}"`);

// PWA / Service Worker 関連アセットのルート配置
const pwaFiles = [
  'sw.js',
  'manifest.json',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
];

for (const file of pwaFiles) {
  const distFile = path.join(rootDir, 'dist', file);
  const publicFile = path.join(rootDir, 'public', file);
  const rootTarget = path.join(rootDir, file);

  if (fs.existsSync(distFile)) {
    fs.copyFileSync(distFile, rootTarget);
  } else if (fs.existsSync(publicFile)) {
    fs.copyFileSync(publicFile, rootTarget);
  }
}
console.log('   PWA・Service Worker ファイル群をルートに配置しました。');

console.log('4. スタンドアローン版 HTML を生成中...');
execSync('node scripts/build-standalone.mjs', { stdio: 'inherit' });

console.log('✨ すべてのビルド・成果物配置が完了しました！');
