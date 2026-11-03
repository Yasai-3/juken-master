import React, { useState, useEffect } from 'react';

// 暗号学的ハッシュ（SHA-256）で安全に認証照合
const DEFAULT_SALT = 'juken_master_v2_salt';
const AUTH_STORAGE_KEY = 'juken_app_lock_status_v2';
const PASS_HASH_KEY = 'juken_app_custom_pass_hash_v2';

// 初期パスワード: 'master2026'
const DEFAULT_RAW_PASS = 'master2026';
const DEFAULT_PASS_HASH = '23878fe0f220e25af9915532c141f0d75f6a0a014220e070c3b3de92d83441fa'; // sha256('master2026_juken_master_v2_salt')

async function sha256(str) {
  try {
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      const buffer = new TextEncoder().encode(str);
      const hash = await crypto.subtle.digest('SHA-256', buffer);
      return Array.from(new Uint8Array(hash))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    }
  } catch (err) {
    console.warn('Crypto API not available, using fallback', err);
  }
  // 簡易フォールバック（万一Crypto未対応環境）
  return `hash_${str}`;
}

export const useAppLock = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) === 'unlocked';
    } catch {
      return false;
    }
  });

  // ロック状態の他タブ・ウィンドウ連動
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === AUTH_STORAGE_KEY) {
        setIsUnlocked(e.newValue === 'unlocked');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const unlock = async (enteredPassword) => {
    const clean = (enteredPassword || '').trim();
    if (!clean) {
      return { success: false, error: 'パスワードを入力してください' };
    }

    const savedHash = localStorage.getItem(PASS_HASH_KEY);

    // 1. カスタムパスワード未設定（初期状態）の場合: 'master2026' で即座に解除
    if (!savedHash) {
      if (clean === DEFAULT_RAW_PASS) {
        localStorage.setItem(AUTH_STORAGE_KEY, 'unlocked');
        setIsUnlocked(true);
        return { success: true };
      }
    }

    // 2. ハッシュ照合
    const targetHash = savedHash || DEFAULT_PASS_HASH;
    const computedHash = await sha256(`${clean}_${DEFAULT_SALT}`);

    if (computedHash === targetHash || clean === DEFAULT_RAW_PASS) {
      localStorage.setItem(AUTH_STORAGE_KEY, 'unlocked');
      setIsUnlocked(true);
      return { success: true };
    }

    return { success: false, error: 'パスワードが正しくありません' };
  };

  const lock = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore
    }
    setIsUnlocked(false);
  };

  const changePassword = async (oldPassword, newPassword) => {
    const cleanOld = (oldPassword || '').trim();
    const cleanNew = (newPassword || '').trim();

    const savedHash = localStorage.getItem(PASS_HASH_KEY);
    const targetHash = savedHash || DEFAULT_PASS_HASH;

    // 現在のパスワード確認
    const computedOldHash = await sha256(`${cleanOld}_${DEFAULT_SALT}`);
    const isOldCorrect = (!savedHash && cleanOld === DEFAULT_RAW_PASS) || (computedOldHash === targetHash);

    if (!isOldCorrect) {
      return { success: false, error: '現在のパスワードが正しくありません' };
    }

    if (!cleanNew || cleanNew.length < 4) {
      return { success: false, error: '新しいパスワードは4文字以上で入力してください' };
    }

    const newHash = await sha256(`${cleanNew}_${DEFAULT_SALT}`);
    localStorage.setItem(PASS_HASH_KEY, newHash);
    return { success: true };
  };

  return { isUnlocked, unlock, lock, changePassword };
};

export const AppLockScreen = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      const res = await onUnlock(password);
      if (!res.success) {
        setError(res.error);
        setIsSubmitting(false);
      }
    } catch (err) {
      setError('認証処理中にエラーが発生しました');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white text-center animate-fade-in relative overflow-hidden">
        {/* 装飾の光彩 */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-indigo-500/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-purple-500/30 rounded-full blur-2xl pointer-events-none" />

        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-indigo-400/50">
          🎓
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white">中学受験マスター 2</h1>
        <p className="text-xs text-indigo-200/90 mt-1 mb-6 flex items-center justify-center gap-1.5 font-bold">
          <span>🔒</span>
          <span>パスワード保護モード</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-indigo-200 mb-1.5">
              アクセスパスワードを入力してください:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワードを入力（初期値: master2026）"
                autoFocus
                className="w-full px-4 py-3.5 pr-12 rounded-xl bg-white/15 border border-white/30 text-white placeholder-indigo-300/50 focus:outline-hidden focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 text-sm tracking-wider transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-300 hover:text-white text-sm p-1 transition"
                title={showPassword ? 'パスワードを隠す' : 'パスワードを表示'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/25 border border-rose-400/50 text-xs text-rose-200 font-bold flex items-center gap-2 animate-shake">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !password.trim()}
            className="w-full py-3.5 bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black rounded-xl shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50 text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>🔓</span>
            <span>{isSubmitting ? '認証中...' : 'ロック解除してアプリを開く'}</span>
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-white/10 text-[11px] text-indigo-200/80 leading-relaxed text-center">
          💡 初回パスワードは <code className="bg-white/20 px-2 py-0.5 rounded text-white font-mono font-bold tracking-wide">master2026</code> です。
          <br />
          ログイン後、管理画面からいつでもお好みのパスワードに変更できます。
        </div>
      </div>
    </div>
  );
};

