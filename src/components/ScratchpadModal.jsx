import React, { useRef, useState, useEffect, useCallback } from 'react';

const COLOR_PALETTE = [
  { name: '白', value: '#f8fafc' },
  { name: '黄', value: '#fde047' },
  { name: '青', value: '#38bdf8' },
  { name: '赤', value: '#f43f5e' },
  { name: '緑', value: '#4ade80' },
];

const LINE_WIDTHS = [
  { label: '細', value: 2 },
  { label: '中', value: 4 },
  { label: '太', value: 7 },
];

const ScratchpadModal = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const modalRef = useRef(null);

  // 描画設定
  const [tool, setTool] = useState('pen'); // 'pen' | 'eraser'
  const [color, setColor] = useState('#f8fafc');
  const [lineWidth, setLineWidth] = useState(3);
  const [opacity, setOpacity] = useState(0.95); // 半透明度
  const [showGrid, setShowGrid] = useState(true); // 方眼ガイド
  const isTranslucent = opacity < 0.9;

  // 透かしモードのワンタップトグル (55% ↔ 100%)
  const toggleTranslucent = () => {
    setOpacity((prev) => (prev < 0.85 ? 1.0 : 0.55));
  };

  // ウィンドウの位置・サイズ（ピクセル管理）
  const [position, setPosition] = useState({ x: 40, y: 80 });
  const [size, setSize] = useState({ width: 500, height: 420 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // ドラッグ移動状態
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // リサイズドラッグ状態
  const isResizing = useRef(false);
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0, edge: null });

  // 前回の位置・サイズ（全画面トグル復元用）
  const prevLayout = useRef({ position: { x: 40, y: 80 }, size: { width: 500, height: 420 } });

  // 描画履歴（Undo用）
  const [history, setHistory] = useState([]);
  const isPainting = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });

  // 初回オープン時の位置・サイズ初期化
  useEffect(() => {
    if (isOpen) {
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const isMobile = screenW < 640;

      const initW = isMobile ? Math.min(screenW - 24, 380) : Math.min(540, screenW - 40);
      const initH = isMobile ? Math.min(screenH - 120, 380) : Math.min(440, screenH - 120);

      // PCでは画面右寄り（問題カードの邪魔にならない位置）に配置
      const initX = isMobile
        ? Math.max(12, Math.round((screenW - initW) / 2))
        : Math.max(20, screenW - initW - 30);
      const initY = isMobile ? 60 : Math.max(70, Math.round((screenH - initH) / 2));

      setPosition({ x: initX, y: initY });
      setSize({ width: initW, height: initH });
      setIsFullscreen(false);
      setIsMinimized(false);
    }
  }, [isOpen]);

  // キャンバスの解像度更新と描画内容の保持
  const updateCanvasResolution = useCallback(() => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const newW = Math.floor(rect.width);
    const newH = Math.floor(rect.height);
    if (newW <= 0 || newH <= 0) return;

    // サイズが変わっていなければ何もしない
    if (canvas.width === newW && canvas.height === newH) return;

    // 現在の描画内容を一時バッファに退避
    let tempCanvas = null;
    if (canvas.width > 0 && canvas.height > 0) {
      tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(canvas, 0, 0);
    }

    // キャンバス解像度を新サイズに設定
    canvas.width = newW;
    canvas.height = newH;

    // 描画コンテキストの再設定
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 内容を復元
    if (tempCanvas) {
      ctx.drawImage(tempCanvas, 0, 0);
    }
  }, []);

  // ResizeObserver でコンテナ要素のサイズ変化を監視し、自動でキャンバス解像度を追従
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      updateCanvasResolution();
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [updateCanvasResolution, isOpen]);

  // ==========================================
  // ウィンドウのドラッグ移動 (Header Drag)
  // ==========================================
  const handleHeaderPointerDown = (e) => {
    // ボタンやinput、スライダーのクリック時は移動を開始しない
    if (e.target.closest('button, input, select, a')) return;
    if (isFullscreen) return;

    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleHeaderPointerMove = (e) => {
    if (!isDragging.current || isFullscreen) return;

    const newX = e.clientX - dragOffset.current.x;
    const newY = e.clientY - dragOffset.current.y;

    // 画面外に飛び出さないようクランプ
    const clampedX = Math.max(0, Math.min(window.innerWidth - 80, newX));
    const clampedY = Math.max(0, Math.min(window.innerHeight - 60, newY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleHeaderPointerUp = (e) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // ==========================================
  // ウィンドウのリサイズ操作 (Handle Resize)
  // ==========================================
  const handleResizePointerDown = (e, edge) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFullscreen) return;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    isResizing.current = true;
    resizeStart.current = {
      x: e.clientX,
      y: e.clientY,
      w: size.width,
      h: size.height,
      edge,
    };
  };

  const handleResizePointerMove = (e) => {
    if (!isResizing.current || isFullscreen) return;

    const deltaX = e.clientX - resizeStart.current.x;
    const deltaY = e.clientY - resizeStart.current.y;
    const { edge, w, h } = resizeStart.current;

    const minW = 280;
    const minH = 200;
    const maxW = window.innerWidth - position.x - 10;
    const maxH = window.innerHeight - position.y - 10;

    let newW = size.width;
    let newH = size.height;

    if (edge === 'corner' || edge === 'right') {
      newW = Math.max(minW, Math.min(maxW, w + deltaX));
    }
    if (edge === 'corner' || edge === 'bottom') {
      newH = Math.max(minH, Math.min(maxH, h + deltaY));
    }

    setSize({ width: Math.round(newW), height: Math.round(newH) });
  };

  const handleResizePointerUp = (e) => {
    if (isResizing.current) {
      isResizing.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      setTimeout(updateCanvasResolution, 30);
    }
  };

  // ==========================================
  // プリセット・全画面・最小化の切り替え
  // ==========================================
  const handleApplyPreset = (w, h) => {
    setIsFullscreen(false);
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const targetW = Math.min(w, screenW - 20);
    const targetH = Math.min(h, screenH - 60);

    // 画面内に収まるように位置も調整
    const targetX = Math.min(position.x, screenW - targetW - 10);
    const targetY = Math.min(position.y, screenH - targetH - 10);

    setSize({ width: targetW, height: targetH });
    setPosition({ x: Math.max(10, targetX), y: Math.max(10, targetY) });
    setTimeout(updateCanvasResolution, 40);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // 全画面へ
      prevLayout.current = { position: { ...position }, size: { ...size } };
      setPosition({ x: 10, y: 10 });
      setSize({ width: window.innerWidth - 20, height: window.innerHeight - 20 });
      setIsFullscreen(true);
    } else {
      // 復元
      setPosition(prevLayout.current.position);
      setSize(prevLayout.current.size);
      setIsFullscreen(false);
    }
    setTimeout(updateCanvasResolution, 40);
  };

  // ==========================================
  // キャンバス手書き描画ロジック
  // ==========================================
  const getCanvasPoint = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleCanvasPointerDown = (e) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    isPainting.current = true;
    const pt = getCanvasPoint(e);
    lastPoint.current = pt;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 履歴保存（最大15ステップ）
    setHistory((prev) => [...prev.slice(-15), canvas.toDataURL()]);

    ctx.beginPath();
    const radius = (tool === 'eraser' ? lineWidth * 4 : lineWidth) / 2;
    ctx.arc(pt.x, pt.y, Math.max(1, radius), 0, Math.PI * 2);
    ctx.fillStyle = tool === 'eraser' ? '#0b1120' : color;
    ctx.fill();
  };

  const handleCanvasPointerMove = (e) => {
    if (!isPainting.current) return;
    const pt = getCanvasPoint(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
    ctx.lineTo(pt.x, pt.y);

    if (tool === 'eraser') {
      ctx.strokeStyle = '#0b1120'; // 背景色で消去
      ctx.lineWidth = lineWidth * 5;
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }
    ctx.stroke();

    lastPoint.current = pt;
  };

  const handleCanvasPointerUp = (e) => {
    if (isPainting.current) {
      isPainting.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // Undo (1手戻す)
  const handleUndo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const lastState = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));

    const img = new Image();
    img.src = lastState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  // Clear (全消去)
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setHistory((prev) => [...prev.slice(-15), canvas.toDataURL()]);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  if (!isOpen) return null;

  // 最小化時のフローティングピル（画面右下にコンパクト表示）
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-2xl font-bold border-2 border-white/40 hover:scale-105 active:scale-95 transition-all"
        >
          <span className="text-lg">📝</span>
          <span>計算用紙を開く</span>
        </button>
      </div>
    );
  }

  return (
    <div
      ref={modalRef}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        opacity,
        zIndex: 60,
      }}
      className="flex flex-col bg-slate-900/95 text-white rounded-2xl shadow-2xl border-2 border-indigo-500/70 backdrop-blur-md select-none transition-opacity duration-150"
    >
      {/* ========================================================= */}
      {/* 1. タイトルバー＆ドラッグヘッダー (つかんで自由に移動可能) */}
      {/* ========================================================= */}
      <div
        onPointerDown={handleHeaderPointerDown}
        onPointerMove={handleHeaderPointerMove}
        onPointerUp={handleHeaderPointerUp}
        onPointerCancel={handleHeaderPointerUp}
        className={`flex items-center justify-between px-3 py-2 bg-gradient-to-r from-slate-800 via-indigo-950/60 to-slate-800 border-b border-indigo-500/40 rounded-t-2xl touch-none ${
          isFullscreen ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
        }`}
        title="ここをつかんでドラッグすると好きな場所に移動できます"
      >
        {/* 左側: ドラッグインジケータ ＆ タイトル */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-indigo-400 opacity-80" title="ドラッグして移動">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9-12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-indigo-200 flex items-center gap-1">
            <span>📝</span> 計算用紙
          </span>
          <span className="text-[10px] text-indigo-300/70 hidden md:inline">
            (✋ ヘッダーをつかんで自由に移動)
          </span>
        </div>

        {/* 右側: プリセット切替 ＆ 方眼 ＆ ウィンドウ操作 */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* サイズプリセットボタン */}
          <div className="flex items-center bg-slate-800/90 rounded-lg p-0.5 border border-slate-700 text-[11px] font-bold">
            <button
              type="button"
              onClick={() => handleApplyPreset(460, 380)}
              className="px-1.5 py-0.5 rounded text-slate-300 hover:text-white hover:bg-slate-700"
              title="標準サイズ (460x380)"
            >
              標準
            </button>
            <button
              type="button"
              onClick={() => handleApplyPreset(680, 520)}
              className="px-1.5 py-0.5 rounded text-slate-300 hover:text-white hover:bg-slate-700"
              title="大サイズ (680x520)"
            >
              大
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className={`px-1.5 py-0.5 rounded transition ${
                isFullscreen
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              title={isFullscreen ? '元のサイズに戻す' : '全画面に拡大'}
            >
              {isFullscreen ? '縮小' : '全画面'}
            </button>
          </div>

          {/* 方眼グリッドトグル */}
          <button
            type="button"
            onClick={() => setShowGrid((prev) => !prev)}
            className={`px-2 py-0.5 rounded text-[11px] font-bold transition border ${
              showGrid
                ? 'bg-indigo-900/80 border-indigo-500 text-indigo-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="方眼ガイドの表示/非表示を切り替え"
          >
            # 方眼
          </button>

          {/* 最小化ボタン */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition"
            title="最小化（画面右下に小さく格納）"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
            </svg>
          </button>

          {/* 閉じるボタン */}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-700 transition"
            title="閉じる（書いた内容は保持されます）"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. ツールバー (ペン・消しゴム・色・太さ・透かし・Undo・Clear) */}
      {/* ========================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 px-3 py-1.5 bg-slate-800/80 border-b border-slate-700/80 text-xs select-none">
        {/* 左グループ: ペン/消しゴム + カラー + 太さ */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* ペン / 消しゴム */}
          <div className="flex items-center gap-0.5 bg-slate-900/90 p-0.5 rounded-lg border border-slate-700">
            <button
              type="button"
              onClick={() => setTool('pen')}
              className={`px-2 py-1 rounded font-bold flex items-center gap-1 transition ${
                tool === 'pen'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>✏️</span> ペン
            </button>
            <button
              type="button"
              onClick={() => setTool('eraser')}
              className={`px-2 py-1 rounded font-bold flex items-center gap-1 transition ${
                tool === 'eraser'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🧹</span> 消しゴム
            </button>
          </div>

          {/* カラーパレット */}
          {tool === 'pen' && (
            <div className="flex items-center gap-1">
              {COLOR_PALETTE.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setColor(c.value)}
                  style={{ backgroundColor: c.value }}
                  className={`w-4 h-4 rounded-full transition-transform ${
                    color === c.value
                      ? 'scale-125 ring-2 ring-indigo-400 ring-offset-1 ring-offset-slate-900'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  title={c.name}
                />
              ))}
            </div>
          )}

          {/* 線の太さ */}
          <div className="flex items-center gap-0.5 bg-slate-900/90 p-0.5 rounded-lg border border-slate-700">
            {LINE_WIDTHS.map((w) => (
              <button
                key={w.value}
                type="button"
                onClick={() => setLineWidth(w.value)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  lineWidth === w.value
                    ? 'bg-slate-700 text-indigo-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        {/* 右グループ: 透かしトグル＆スライダー + Undo + Clear */}
        <div className="flex items-center gap-1.5 ml-auto">
          {/* ★ 透かしトグルボタン (ワンタップで半透明 / 不透明を切り替え) */}
          <button
            type="button"
            onClick={toggleTranslucent}
            className={`px-2.5 py-1 rounded-lg text-xs font-black flex items-center gap-1.5 transition-all shadow-sm border ${
              isTranslucent
                ? 'bg-amber-400 text-amber-950 border-amber-300 ring-2 ring-amber-400/50 scale-105 animate-pulse'
                : 'bg-slate-700/80 hover:bg-slate-700 text-slate-200 border-slate-600'
            }`}
            title="ワンタップで背景を半透明にし、問題文や図形を透かして見ながら手書きできます"
          >
            <span>{isTranslucent ? '👁️' : '👁️‍🗨️'}</span>
            <span>{isTranslucent ? `透かしON (${Math.round(opacity * 100)}%)` : '問題を透かす'}</span>
          </button>

          {/* 透かし度スライダー（微調整用） */}
          <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded-lg border border-slate-700 text-[11px] text-slate-300">
            <input
              type="range"
              min="0.30"
              max="1.0"
              step="0.05"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              className="w-14 sm:w-16 h-1.5 accent-amber-400 cursor-pointer"
              title="透明度を微調整できます（30%〜100%）"
            />
            <span className="font-mono text-[10px] w-7 text-right text-amber-300 font-bold">
              {Math.round(opacity * 100)}%
            </span>
          </div>

          {/* 戻す (Undo) */}
          <button
            type="button"
            onClick={handleUndo}
            disabled={history.length === 0}
            className="px-2 py-1 rounded bg-slate-700/80 hover:bg-slate-700 text-slate-200 disabled:opacity-40 disabled:pointer-events-none font-bold text-xs flex items-center gap-1 transition"
            title="1手戻す"
          >
            <span>↩️</span>
            <span className="hidden sm:inline">戻す</span>
          </button>

          {/* 全消去 (Clear) */}
          <button
            type="button"
            onClick={handleClear}
            className="px-2 py-1 rounded bg-rose-950/50 hover:bg-rose-900/70 text-rose-300 border border-rose-800/50 font-bold text-xs flex items-center gap-1 transition"
            title="すべて消去"
          >
            <span>🗑️</span>
            <span className="hidden sm:inline">全消去</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. キャンバス描画領域 (方眼付き＆透かし背景最適化)         */}
      {/* ========================================================= */}
      <div
        ref={canvasContainerRef}
        className={`relative flex-1 w-full overflow-hidden cursor-crosshair touch-none transition-colors ${
          isTranslucent ? 'bg-slate-950/75' : 'bg-slate-950'
        }`}
        style={
          showGrid
            ? {
                backgroundImage:
                  'radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }
            : undefined
        }
      >
        {/* 透かしモード中ガイド案内 */}
        {isTranslucent && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-amber-950 font-black text-[11px] rounded-full shadow-lg border border-amber-300 pointer-events-none select-none flex items-center gap-1.5 z-10">
            <span>👁️</span>
            <span>下の問題が透けて見えています（このまま手書き・補助線が引けます）</span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          onPointerDown={handleCanvasPointerDown}
          onPointerMove={handleCanvasPointerMove}
          onPointerUp={handleCanvasPointerUp}
          onPointerCancel={handleCanvasPointerUp}
          className="w-full h-full block"
        />

        {/* 下部ガイド情報 */}
        <div className="absolute bottom-1 left-2 pointer-events-none text-slate-500 text-[10px] select-none flex items-center gap-2">
          <span>{size.width} × {size.height}px</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. カスタムリサイズハンドル (右下・右辺・下辺)             */}
      {/* ========================================================= */}
      {!isFullscreen && (
        <>
          {/* 右辺リサイズバー (横幅の伸縮) */}
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'right')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            onPointerCancel={handleResizePointerUp}
            className="absolute top-10 right-0 w-2 h-[calc(100%-20px)] cursor-ew-resize hover:bg-indigo-500/40 transition-colors z-20 touch-none"
            title="ドラッグして横幅を変更"
          />

          {/* 下辺リサイズバー (縦幅の伸縮) */}
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'bottom')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            onPointerCancel={handleResizePointerUp}
            className="absolute bottom-0 left-0 h-2 w-[calc(100%-20px)] cursor-ns-resize hover:bg-indigo-500/40 transition-colors z-20 touch-none"
            title="ドラッグして高さを変更"
          />

          {/* 右下コーナーハンドル (斜め伸縮・最も掴みやすい大型ハンドル) */}
          <div
            onPointerDown={(e) => handleResizePointerDown(e, 'corner')}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            onPointerCancel={handleResizePointerUp}
            className="absolute bottom-0 right-0 w-7 h-7 flex items-end justify-end p-1 cursor-nwse-resize bg-indigo-600/30 hover:bg-indigo-600/70 active:bg-indigo-600 rounded-br-2xl border-t border-l border-indigo-400/30 transition-all z-30 touch-none group"
            title="ここをつかんでドラッグすると自由に大きさを変えられます"
          >
            {/* 斜め矢印／リサイズグリフ */}
            <svg
              className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M14 6l4 4-10 10H4v-4L14 6z" opacity="0.4" />
              <path d="M19 15v4h-4l4-4zM15 19h-4l4-4v4z" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default ScratchpadModal;
