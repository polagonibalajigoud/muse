import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, Square, Palette, Image as ImageIcon, Trash2, Camera, Sparkles, RefreshCw } from 'lucide-react';

interface CanvasElement {
  id: string;
  type: 'text' | 'shape' | 'color-blob' | 'sketch-quote';
  content?: string;
  color: string;
  x: number;
  y: number;
  rotation: number;
  size: number;
}

const PRESET_WORDS = ['UNFINISHED', 'RESONANCE', 'SILENCE', 'STRUCTURE', 'CHAOS', 'VOID', 'LIGHT', 'RHYTHM'];
const PALETTE_COLORS = ['#0047AB', '#E34234', '#B8A1D9', '#E5C158', '#171717', '#FAF7F2'];

export const MakeSection: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<CanvasElement[]>([
    { id: '1', type: 'text', content: 'START HERE', color: '#171717', x: 120, y: 140, rotation: -6, size: 28 },
    { id: '2', type: 'shape', color: '#0047AB', x: 380, y: 100, rotation: 12, size: 110 },
    { id: '3', type: 'color-blob', color: '#E34234', x: 260, y: 220, rotation: -15, size: 140 },
  ]);

  const [activeColor, setActiveColor] = useState('#0047AB');
  const [captured, setCaptured] = useState(false);

  const addText = () => {
    const randomWord = PRESET_WORDS[Math.floor(Math.random() * PRESET_WORDS.length)];
    const newEl: CanvasElement = {
      id: Date.now().toString(),
      type: 'text',
      content: randomWord,
      color: activeColor,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 150,
      rotation: Math.floor(Math.random() * 30) - 15,
      size: 24 + Math.floor(Math.random() * 16),
    };
    setElements((prev) => [...prev, newEl]);
  };

  const addShape = () => {
    const newEl: CanvasElement = {
      id: Date.now().toString(),
      type: 'shape',
      color: activeColor,
      x: 120 + Math.random() * 250,
      y: 120 + Math.random() * 150,
      rotation: Math.floor(Math.random() * 45),
      size: 80 + Math.floor(Math.random() * 50),
    };
    setElements((prev) => [...prev, newEl]);
  };

  const addBlob = () => {
    const newEl: CanvasElement = {
      id: Date.now().toString(),
      type: 'color-blob',
      color: activeColor,
      x: 150 + Math.random() * 200,
      y: 100 + Math.random() * 180,
      rotation: Math.floor(Math.random() * 360),
      size: 100 + Math.floor(Math.random() * 60),
    };
    setElements((prev) => [...prev, newEl]);
  };

  const handleClear = () => {
    setElements([]);
  };

  const handleSnapshot = () => {
    setCaptured(true);
    setTimeout(() => setCaptured(false), 2500);
  };

  return (
    <section id="make" className="relative min-h-screen w-full py-28 px-6 md:px-12 bg-[#FAF7F2] border-t border-[#171717]/10">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#E34234] font-bold tracking-widest uppercase">
              05 / MAKE
            </span>
            <div className="w-12 h-[1px] bg-[#E34234]" />
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-[#171717] leading-[0.88]">
            DON'T WAIT FOR
            <br />
            <span className="italic font-light text-[#0047AB]">THE PERFECT IDEA.</span>
          </h2>
          <p className="font-mono text-xs text-[#6B6862] mt-4 tracking-widest uppercase">
            START WITH SOMETHING UNFINISHED.
          </p>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={addText}
            className="px-4 py-2.5 rounded-full border border-[#171717]/20 bg-[#F2EDE4] hover:bg-[#171717] hover:text-white font-mono text-xs tracking-wider transition-colors flex items-center gap-2"
            data-cursor="true"
          >
            <Type className="w-4 h-4 text-[#0047AB]" />
            <span>+ TEXT</span>
          </button>

          <button
            onClick={addShape}
            className="px-4 py-2.5 rounded-full border border-[#171717]/20 bg-[#F2EDE4] hover:bg-[#171717] hover:text-white font-mono text-xs tracking-wider transition-colors flex items-center gap-2"
            data-cursor="true"
          >
            <Square className="w-4 h-4 text-[#E34234]" />
            <span>+ SHAPE</span>
          </button>

          <button
            onClick={addBlob}
            className="px-4 py-2.5 rounded-full border border-[#171717]/20 bg-[#F2EDE4] hover:bg-[#171717] hover:text-white font-mono text-xs tracking-wider transition-colors flex items-center gap-2"
            data-cursor="true"
          >
            <ImageIcon className="w-4 h-4 text-[#E5C158]" />
            <span>+ BLOB</span>
          </button>

          {/* Color Selector */}
          <div className="flex items-center gap-1 bg-[#F2EDE4] p-1.5 rounded-full border border-[#171717]/20">
            {PALETTE_COLORS.map((c) => (
              <button
                key={c}
                onClick={() => setActiveColor(c)}
                className={`w-5 h-5 rounded-full border transition-transform ${
                  activeColor === c ? 'scale-125 border-black shadow-sm' : 'border-transparent'
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <button
            onClick={handleSnapshot}
            className="px-5 py-2.5 rounded-full bg-[#171717] text-[#FAF7F2] font-mono text-xs tracking-widest uppercase hover:bg-[#0047AB] transition-colors flex items-center gap-2 shadow-md"
            data-cursor="true"
          >
            <Camera className="w-4 h-4" />
            <span>SNAPSHOT</span>
          </button>

          <button
            onClick={handleClear}
            className="w-10 h-10 rounded-full border border-[#171717]/20 hover:bg-[#E34234] hover:text-white hover:border-[#E34234] flex items-center justify-center transition-colors"
            data-cursor="true"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Drag & Compose Studio Canvas */}
      <div
        ref={canvasRef}
        className="max-w-7xl mx-auto relative h-[520px] sm:h-[600px] w-full rounded-3xl border-2 border-dashed border-[#171717]/25 bg-[#F2EDE4]/70 backdrop-blur-md p-8 overflow-hidden shadow-2xl select-none"
      >
        {/* Canvas Background Grid Coordinates */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-[#6B6862] tracking-widest">
          STUDIO CANVAS / FREE FORM COMPOSER
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#6B6862] tracking-widest">
          DRAG ELEMENTS TO BUILD YOUR CREATIVE COMPOSITION
        </div>

        {/* Floating Draggable Canvas Elements */}
        {elements.map((el) => (
          <motion.div
            key={el.id}
            drag
            dragConstraints={canvasRef}
            dragElastic={0.1}
            whileHover={{ scale: 1.05, cursor: 'grab' }}
            whileTap={{ scale: 0.98, cursor: 'grabbing' }}
            className="absolute pointer-events-auto"
            style={{
              left: el.x,
              top: el.y,
              rotate: el.rotation,
            }}
          >
            {el.type === 'text' && (
              <div
                className="font-display font-extrabold tracking-tight px-4 py-2 rounded-lg border border-[#171717]/15 backdrop-blur-md shadow-lg"
                style={{ fontSize: el.size, color: el.color, backgroundColor: '#FAF7F2' }}
              >
                {el.content}
              </div>
            )}

            {el.type === 'shape' && (
              <div
                className="rounded-2xl border-2 border-[#171717]/30 shadow-lg flex items-center justify-center backdrop-blur-sm"
                style={{
                  width: el.size,
                  height: el.size,
                  backgroundColor: el.color,
                }}
              >
                <div className="w-6 h-6 rounded-full border border-white/50" />
              </div>
            )}

            {el.type === 'color-blob' && (
              <div
                className="rounded-full blur-sm opacity-80 shadow-2xl"
                style={{
                  width: el.size,
                  height: el.size,
                  backgroundColor: el.color,
                }}
              />
            )}
          </motion.div>
        ))}

        {elements.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#171717]">
              <Sparkles className="w-4 h-4 text-[#0047AB]" />
              <span>CANVAS IS EMPTY. USE TOOLBAR ABOVE TO SPARK NEW ELEMENTS.</span>
            </div>
          </div>
        )}

        {/* Snapshot Notification Modal */}
        <AnimatePresence>
          {captured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#171717] text-[#FAF7F2] px-6 py-3 rounded-full font-mono text-xs tracking-widest flex items-center gap-3 shadow-2xl z-50"
            >
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
              <span>CREATIVE SNAPSHOT CAPTURED TO YOUR MUSE ARCHIVE!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
