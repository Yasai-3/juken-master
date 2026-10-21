import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 GitHub Pages デプロイ準備を開始します...');

// 1. ビルド実行
console.log('📦 アプリケーションをビルド中 (Vite)...');
execSync('npm run build', { stdio: 'inherit' });

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  console.error('❌ dist フォルダが見つかりません。');
  process.exit(1);
}

// 2. GitHub Pages用 404.html 作成（SPA用リダイレクト保険）
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
// Jekyll処理無効化ファイル作成（アンダースコア付きファイル等の消失防止）
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8');

console.log('✅ ビルドおよびデプロイ用ファイルの準備が完了しました！');
