import React, { useState, useEffect } from 'react';

// 暗号学的ハッシュ（SHA-256）で安全に認証照合
const DEFAULT_SALT = 'juken_master_v2_salt';
const AUTH_STORAGE_KEY = 'juken_app_lock_status_v2';
const PASS_HASH_KEY = 'juken_app_custom_pass_hash_v2';

// デフォルトパスワード（初期値：受験マスター2にちなんで 'juken2026' または 'master2026'）
// 初期パスワード: 'master2026'
const DEFAULT_PASS_HASH = '23878fe0f220e25af9915532c141f0d75f6a0a014220e070c3b3de92d83441fa'; // sha256('master2026_juken_master_v2_salt')

async function sha256(str) {
  const buffer = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export const useAppLock = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) === 'unlocked';
    } catch {
      return false;
    }
  });

  const unlock = async (enteredPassword) => {
    const targetHash = localStorage.getItem(PASS_HASH_KEY) || DEFAULT_PASS_HASH;
    const computedHash = await sha256(`${enteredPassword}_${DEFAULT_SALT}`);
    if (computedHash === targetHash) {
      localStorage.setItem(AUTH_STORAGE_KEY, 'unlocked');
      setIsUnlocked(true);
      return { success: true };
    }
    return { success: false, error: 'パスワードが正しくありません' };
  };

  const lock = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsUnlocked(false);
  };

  const changePassword = async (oldPassword, newPassword) => {
    const targetHash = localStorage.getItem(PASS_HASH_KEY) || DEFAULT_PASS_HASH;
    const computedOldHash = await sha256(`${oldPassword}_${DEFAULT_SALT}`);
    if (computedOldHash !== targetHash) {
      return { success: false, error: '現在のパスワードが正しくありません' };
    }
    if (!newPassword || newPassword.length < 4) {
      return { success: false, error: '新しいパスワードは4文字以上で入力してください' };
    }
    const newHash = await sha256(`${newPassword}_${DEFAULT_SALT}`);
    localStorage.setItem(PASS_HASH_KEY, newHash);
    return { success: true };
  };

  return { isUnlocked, unlock, lock, changePassword };
};

export const AppLockScreen = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    const res = await onUnlock(password);
    if (!res.success) {
      setError(res.error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl text-white text-center animate-fade-in">
        <div className="w-20 h-20 mx-auto mb-4 bg-indigo-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg border border-indigo-400">
          🎓
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight">中学受験マスター 2</h1>
        <p className="text-xs text-indigo-200 mt-1 mb-6">
          🔒 プライベート保護モード（閲覧パスワードが必要です）
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-indigo-200 mb-1">
              アクセスパスワード:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力（初期値: master2026）"
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-indigo-300/60 focus:outline-hidden focus:ring-2 focus:ring-indigo-400 text-sm tracking-wider"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-xs text-rose-200 font-bold">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !password}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-extrabold rounded-xl shadow-lg transition disabled:opacity-50 text-sm flex items-center justify-center gap-2"
          >
            <span>🔓</span>
            <span>{isSubmitting ? '認証中...' : 'ロック解除してアプリを開く'}</span>
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-white/10 text-[11px] text-indigo-300/80 leading-relaxed text-center">
          💡 初期パスワードは <code className="bg-white/20 px-1.5 py-0.5 rounded text-white font-bold">master2026</code> です。
          <br />
          ログイン後、管理画面からお好きなパスワードに変更できます。
        </div>
      </div>
    </div>
  );
};
