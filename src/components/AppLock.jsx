import React, { useState, useEffect } from 'react';

// 暗号学的ハッシュ（SHA-256）で安全に認証照合
const DEFAULT_SALT = 'juken_master_v2_salt';
const AUTH_STORAGE_KEY = 'juken_app_lock_status_v2';
const PASS_HASH_KEY = 'juken_app_custom_pass_hash_v2';

// 初期パスワード: 'master2026'（画面には一切表示しない）
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

  // カスタムパスワード未設定かつロック解除中の場合はパスワード設定が必要
  const [requiresPasswordChange, setRequiresPasswordChange] = useState(() => {
    try {
      const unlocked = localStorage.getItem(AUTH_STORAGE_KEY) === 'unlocked';
      const hasCustom = Boolean(localStorage.getItem(PASS_HASH_KEY));
      return unlocked && !hasCustom;
    } catch {
      return false;
    }
  });

  // ロック状態の他タブ・ウィンドウ連動
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === AUTH_STORAGE_KEY) {
        const unlocked = e.newValue === 'unlocked';
        setIsUnlocked(unlocked);
        const hasCustom = Boolean(localStorage.getItem(PASS_HASH_KEY));
        setRequiresPasswordChange(unlocked && !hasCustom);
      } else if (e.key === PASS_HASH_KEY) {
        const hasCustom = Boolean(e.newValue);
        if (hasCustom) {
          setRequiresPasswordChange(false);
        }
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

    // 1. カスタムパスワード未設定（初期状態）の場合: 初期パスワードで認証
    if (!savedHash) {
      if (clean === DEFAULT_RAW_PASS) {
        localStorage.setItem(AUTH_STORAGE_KEY, 'unlocked');
        setIsUnlocked(true);
        setRequiresPasswordChange(true); // 初回パスワード設定画面へ自動遷移
        return { success: true, needsChange: true };
      }
      return { success: false, error: 'パスワードが正しくありません' };
    }

    // 2. カスタムパスワード設定済みの場合: ハッシュ照合
    const computedHash = await sha256(`${clean}_${DEFAULT_SALT}`);
    if (computedHash === savedHash) {
      localStorage.setItem(AUTH_STORAGE_KEY, 'unlocked');
      setIsUnlocked(true);
      setRequiresPasswordChange(false);
      return { success: true, needsChange: false };
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

  // 初回ログイン時の新しいパスワード登録（現在のパスワード不要）
  const setInitialPassword = async (newPassword) => {
    const cleanNew = (newPassword || '').trim();
    if (!cleanNew || cleanNew.length < 4) {
      return { success: false, error: '新しいパスワードは4文字以上で入力してください' };
    }
    const newHash = await sha256(`${cleanNew}_${DEFAULT_SALT}`);
    localStorage.setItem(PASS_HASH_KEY, newHash);
    localStorage.setItem(AUTH_STORAGE_KEY, 'unlocked');
    setRequiresPasswordChange(false);
    return { success: true };
  };

  // 通常のパスワード変更（現在パスワード要確認）
  const changePassword = async (oldPassword, newPassword) => {
    const cleanOld = (oldPassword || '').trim();
    const cleanNew = (newPassword || '').trim();

    const savedHash = localStorage.getItem(PASS_HASH_KEY);
    const targetHash = savedHash || DEFAULT_PASS_HASH;

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
    setRequiresPasswordChange(false);
    return { success: true };
  };

  // パスワードを忘れた場合の初期化（初期状態へリセット）
  const resetToDefaultPassword = () => {
    try {
      localStorage.removeItem(PASS_HASH_KEY);
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore
    }
    setIsUnlocked(false);
    setRequiresPasswordChange(false);
    return { success: true };
  };

  return {
    isUnlocked,
    requiresPasswordChange,
    unlock,
    lock,
    setInitialPassword,
    changePassword,
    resetToDefaultPassword,
    hasCustomPassword: Boolean(typeof window !== 'undefined' && localStorage.getItem(PASS_HASH_KEY)),
  };
};

/**
 * 通常のロック解除画面（初期パスワードの表記は完全排除）
 */
export const AppLockScreen = ({ onUnlock, onReset }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInfoMsg('');
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

  const handleForgotClick = () => {
    const confirmed = window.confirm(
      'パスワードを初期パスワードにリセットしますか？\n\nリセット後は初期パスワードでログインし、新しいパスワードを再設定できます。'
    );
    if (confirmed && onReset) {
      onReset();
      setPassword('');
      setError('');
      setInfoMsg('パスワードを初期状態にリセットしました。初期パスワードを入力して解除してください。');
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
              アクセスパスワード:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワードを入力"
                autoFocus
                className="w-full px-4 py-3.5 pr-12 rounded-xl bg-white/15 border border-white/30 text-white placeholder-indigo-300/40 focus:outline-hidden focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 text-sm tracking-wider transition"
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

          {infoMsg && (
            <div className="p-3 rounded-xl bg-emerald-500/25 border border-emerald-400/50 text-xs text-emerald-200 font-bold flex items-center gap-2">
              <span>✓</span>
              <span>{infoMsg}</span>
            </div>
          )}

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

        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center">
          <button
            type="button"
            onClick={handleForgotClick}
            className="text-xs text-indigo-300/80 hover:text-indigo-100 hover:underline transition flex items-center gap-1 cursor-pointer"
          >
            <span>🔄</span>
            <span>パスワードをお忘れの場合（初期化）</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * 初回ログイン時の専用パスワード設定画面（自動遷移）
 */
export const InitialPasswordSetupScreen = ({ onSubmit }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const cleanNew = newPassword.trim();
    const cleanConfirm = confirmPassword.trim();

    if (!cleanNew || cleanNew.length < 4) {
      setError('パスワードは4文字以上で入力してください');
      return;
    }
    if (cleanNew !== cleanConfirm) {
      setError('確認用パスワードが一致しません');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await onSubmit(cleanNew);
      if (!res.success) {
        setError(res.error || 'パスワードの設定に失敗しました');
        setIsSubmitting(false);
      }
    } catch (err) {
      setError('処理中にエラーが発生しました');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white text-center animate-fade-in relative overflow-hidden">
        {/* 装飾の光彩 */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-emerald-500/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-indigo-500/30 rounded-full blur-2xl pointer-events-none" />

        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-tr from-emerald-600 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-emerald-400/50">
          🔑
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white">新しいパスワードの設定</h1>
        <p className="text-xs text-indigo-200 mt-2 mb-6 leading-relaxed">
          初回ログインが完了しました。<br />
          安全にご利用いただくため、<strong>あなた専用の新しいパスワード</strong>を設定してください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-indigo-200 mb-1.5">
              新しいパスワード（4文字以上）:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="新しいパスワードを入力"
                autoFocus
                className="w-full px-4 py-3.5 pr-12 rounded-xl bg-white/15 border border-white/30 text-white placeholder-indigo-300/40 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:bg-white/20 text-sm tracking-wider transition"
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

          <div>
            <label className="block text-xs font-bold text-indigo-200 mb-1.5">
              新しいパスワード（確認用）:
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="もう一度入力してください"
              className="w-full px-4 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-indigo-300/40 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:bg-white/20 text-sm tracking-wider transition"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/25 border border-rose-400/50 text-xs text-rose-200 font-bold flex items-center gap-2 animate-shake">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !newPassword.trim() || !confirmPassword.trim()}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-black rounded-xl shadow-lg shadow-emerald-600/30 transition-all disabled:opacity-50 text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>✓</span>
            <span>{isSubmitting ? '登録中...' : 'パスワードを設定してアプリを始める'}</span>
          </button>
        </form>

        <p className="mt-5 text-[11px] text-indigo-300/80 leading-relaxed text-center">
          ※設定したパスワードは忘れないようメモなどに保管してください。
        </p>
      </div>
    </div>
  );
};


