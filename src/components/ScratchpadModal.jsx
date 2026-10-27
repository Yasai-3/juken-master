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
  { label: '太', value: 8 },
];

const SIZE_PRESETS = [
  { id: 'standard', label: '標準', width: 440, height: 360 },
  { id: 'large', label: '大', width: 680, height: 500 },
  { id: 'fullscreen', label: '全画面', width: '95vw', height: '85vh' },
];

const ScratchpadModal = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // 描画設定
  const [tool, setTool] = useState('pen'); // 'pen' | 'eraser'
  const [color, setColor] = useState('#f8fafc');
  const [lineWidth, setLineWidth] = useState(3);
  const [opacity, setOpacity] = useState(0.95); // 半透明度

  // ウィンドウ状態
  const [sizePreset, setSizePreset] = useState('standard');
  const [isMinimized, setIsMinimized] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 460, height: 380 });
  
  // 描画履歴（Undo用）
  const [history, setHistory] = useState([]);
  const isDrawing = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });

  // キャンバスの初期化とリサイズ対応
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    // 現在の描画内容を一時保存
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(canvas, 0, 0);

    // 新しい解像度にセット
    canvas.width = rect.width;
    canvas.height = rect.height;

    // 内容を復元
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.drawImage(tempCanvas, 0, 0);
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(updateCanvasSize, 50);
    }
  }, [isOpen, isMinimized, sizePreset, windowDimensions, updateCanvasSize]);

  // ポインター座標の取得（キャンバスローカル）
  const getCanvasPoint = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // 描画開始
  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    isDrawing.current = true;
    const pt = getCanvasPoint(e);
    lastPoint.current = pt;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 履歴保存（最大15ステップ）
    setHistory((prev) => [...prev.slice(-15), canvas.toDataURL()]);

    ctx.beginPath();
    ctx.arc(pt.x, pt.y, (tool === 'eraser' ? lineWidth * 4 : lineWidth) / 2, 0, Math.PI * 2);
    ctx.fillStyle = tool === 'eraser' ? '#0f172a' : color;
    ctx.fill();
  };

  // 描画中
  const handlePointerMove = (e) => {
    if (!isDrawing.current) return;
    const pt = getCanvasPoint(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
    ctx.lineTo(pt.x, pt.y);

    if (tool === 'eraser') {
      ctx.strokeStyle = '#0f172a'; // ダークモード背景と同化
      ctx.lineWidth = lineWidth * 5;
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }
    ctx.stroke();

    lastPoint.current = pt;
  };

  // 描画終了
  const handlePointerUp = (e) => {
    if (isDrawing.current) {
      isDrawing.current = false;
      try {
        e.target.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // 1つ戻す（Undo）
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

  // 全消去（クリア）
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setHistory((prev) => [...prev.slice(-15), canvas.toDataURL()]);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // サイズプリセット切替
  const handleSelectPreset = (preset) => {
    setSizePreset(preset.id);
    if (preset.id !== 'fullscreen') {
      setWindowDimensions({ width: preset.width, height: preset.height });
    }
  };

  if (!isOpen) return null;

  // 最小化時のフローティングピル
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-2xl font-bold border-2 border-white/40 hover:scale-105 active:scale-95 transition-all"
        >
          <span>📝</span>
          <span>計算用紙を開く</span>
        </button>
      </div>
    );
  }

  const containerStyle =
    sizePreset === 'fullscreen'
      ? { width: '96vw', height: '90vh', maxWidth: '1200px' }
      : { width: `${windowDimensions.width}px`, height: `${windowDimensions.height}px` };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-2 sm:p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
    >
      <div
        ref={containerRef}
        style={{
          ...containerStyle,
          opacity,
          resize: sizePreset === 'fullscreen' ? 'none' : 'both',
          overflow: 'hidden',
        }}
        className="pointer-events-auto flex flex-col bg-slate-900 text-white rounded-2xl shadow-2xl border-2 border-indigo-500/60 transition-opacity backdrop-blur-md"
      >
        {/* ヘッダー・タイトルバー */}
        <div className="flex items-center justify-between px-3 py-2 bg-slate-800/90 border-b border-slate-700 select-none">
          <div className="flex items-center gap-2">
            <span className="text-base">📝</span>
            <span className="text-xs sm:text-sm font-extrabold text-indigo-300">手書き計算用紙・メモ</span>
            
            {/* サイズ切替ボタン */}
            <div className="hidden sm:flex items-center gap-1 ml-2 bg-slate-700/60 p-0.5 rounded-lg text-xs font-bold">
              {SIZE_PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPreset(p)}
                  className={`px-2 py-0.5 rounded ${
                    sizePreset === p.id ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* 半透明度スライダー */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300">
              <span>透かし:</span>
              <input
                type="range"
                min="0.4"
                max="1.0"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-16 h-1.5 accent-indigo-500 cursor-pointer"
                title="問題文が透けて見えるよう透明度を調整できます"
              />
            </div>

            {/* 最小化ボタン */}
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 transition"
              title="小さくたたむ"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
              </svg>
            </button>

            {/* 閉じるボタン */}
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-rose-400 hover:bg-slate-700 transition"
              title="計算用紙を閉じる（内容は次回まで保持されます）"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ツールバー */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-slate-800/60 border-b border-slate-700/60 text-xs select-none">
          {/* ペン・消しゴム切替 */}
          <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-700">
            <button
              type="button"
              onClick={() => setTool('pen')}
              className={`px-2.5 py-1 rounded font-bold flex items-center gap-1 transition ${
                tool === 'pen' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>✏️</span> ペン
            </button>
            <button
              type="button"
              onClick={() => setTool('eraser')}
              className={`px-2.5 py-1 rounded font-bold flex items-center gap-1 transition ${
                tool === 'eraser' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🧹</span> 消しゴム
            </button>
          </div>

          {/* カラーパレット */}
          {tool === 'pen' && (
            <div className="flex items-center gap-1.5">
              {COLOR_PALETTE.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setColor(c.value)}
                  style={{ backgroundColor: c.value }}
                  className={`w-5 h-5 rounded-full transition-transform ${
                    color === c.value ? 'scale-125 ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-800' : 'opacity-70 hover:opacity-100'
                  }`}
                  title={c.name}
                />
              ))}
            </div>
          )}

          {/* 太さ選択 */}
          <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-700">
            {LINE_WIDTHS.map((w) => (
              <button
                key={w.value}
                type="button"
                onClick={() => setLineWidth(w.value)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  lineWidth === w.value ? 'bg-slate-700 text-indigo-300' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

          {/* アクションボタン（Undo, 全消去） */}
          <div className="flex items-center gap-1.5 ml-auto">
            <button
              type="button"
              onClick={handleUndo}
              disabled={history.length === 0}
              className="px-2 py-1 rounded bg-slate-700/80 hover:bg-slate-700 text-slate-300 disabled:opacity-40 disabled:pointer-events-none font-bold text-xs flex items-center gap-1"
              title="1つ戻す"
            >
              <span>↩️</span> 元に戻す
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-2 py-1 rounded bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/40 font-bold text-xs flex items-center gap-1"
              title="すべて消す"
            >
              <span>🗑️</span> 全消去
            </button>
          </div>
        </div>

        {/* キャンバス描画領域 */}
        <div className="relative flex-1 w-full bg-slate-950 overflow-hidden cursor-crosshair touch-none">
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="w-full h-full block"
          />
          {/* リサイズハンドルヒント（右下） */}
          <div className="absolute bottom-1 right-1 pointer-events-none text-slate-600 text-[10px] select-none">
            ◢ 枠を引いて伸縮
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScratchpadModal;
