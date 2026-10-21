#!/bin/zsh
cd "$(dirname "$0")"
echo "🔄 中学受験マスター2 Wi-Fi同期サーバーを起動しています..."
node scripts/sync-server.mjs
