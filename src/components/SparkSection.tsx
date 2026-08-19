import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Sparkles, Link2 } from 'lucide-react';

interface WordNode {
  id: string;
  word: string;
  x: number; // percentage pos
  y: number;
  size: string; // text size class
  style: 'serif' | 'sans' | 'mono' | 'italic';
  pairId: string;
  resultTitle: string;
  resultDesc: string;
  tagColor: string;
}

const WORDS: WordNode[] = [
  {
    id: 'music',
    word: 'MUSIC',
    x: 18,
    y: 22,
    size: 'text-3xl sm:text-5xl font-extrabold',
    style: 'sans',
    pairId: 'architecture',
    resultTitle: 'SPATIAL SOUND',
    resultDesc: 'Architecture designed for acoustic resonance and emotional depth.',
    tagColor: '#0047AB',
  },
  {
    id: 'architecture',
    word: 'ARCHITECTURE',
    x: 65,
    y: 28,
    size: 'text-2xl sm:text-4xl font-light tracking-widest',
    style: 'serif',
    pairId: 'music',
    resultTitle: 'SPATIAL SOUND',
    resultDesc: 'Buildings that speak in physical harmonies and temporal reverberations.',
    tagColor: '#0047AB',
  },
  {
    id: 'film',
    word: 'FILM',
    x: 12,
    y: 62,
    size: 'text-4xl sm:text-6xl font-black italic',
    style: 'italic',
    pairId: 'light',
    resultTitle: 'CINEMATIC MEMORY',
    resultDesc: 'Freezing time through light leaks, grain, and motion shadows.',
    tagColor: '#E34234',
  },
  {
    id: 'light',
    word: 'LIGHT',
    x: 48,
    y: 72,
    size: 'text-3xl sm:text-5xl font-mono tracking-tighter',
    style: 'mono',
    pairId: 'film',
    resultTitle: 'CINEMATIC MEMORY',
    resultDesc: 'Photons revealing lost frames of human emotion.',
    tagColor: '#E34234',
  },
  {
    id: 'nature',
    word: 'NATURE',
    x: 42,
    y: 18,
    size: 'text-3xl sm:text-5xl font-serif italic',
    style: 'italic',
    pairId: 'fashion',
    resultTitle: 'ORGANIC FORM',
    resultDesc: 'Biomorphic fashion inspired by botanical cell structures.',
    tagColor: '#E5C158',
  },
  {
    id: 'fashion',
    word: 'FASHION',
    x: 80,
    y: 60,
    size: 'text-2xl sm:text-4xl font-semibold',
    style: 'sans',
    pairId: 'nature',
    resultTitle: 'ORGANIC FORM',
    resultDesc: 'Wearable sculptures reflecting the textures of moss and bark.',
    tagColor: '#E5C158',
  },
  {
    id: 'memory',
    word: 'MEMORY',
    x: 32,
    y: 45,
    size: 'text-3xl sm:text-5xl font-extrabold tracking-tight',
    style: 'serif',
    pairId: 'travel',
    resultTitle: 'NOSTALGIC MAPS',
    resultDesc: 'Cartography of places that only exist in forgotten dreams.',
    tagColor: '#B8A1D9',
  },
  {
    id: 'travel',
    word: 'TRAVEL',
    x: 82,
    y: 18,
    size: 'text-2xl sm:text-4xl font-mono',
    style: 'mono',
    pairId: 'memory',
    resultTitle: 'NOSTALGIC MAPS',
    resultDesc: 'Wandering through geographies of sensory recollections.',
    tagColor: '#B8A1D9',
  },
  {
    id: 'sound',
    word: 'SOUND',
    x: 60,
    y: 48,
    size: 'text-3xl sm:text-5xl font-bold',
    style: 'sans',
    pairId: 'movement',
    resultTitle: 'KINETIC RHYTHM',
    resultDesc: 'Physical choreography translated directly into sonic frequency.',
    tagColor: '#0047AB',
  },
  {
    id: 'movement',
    word: 'MOVEMENT',
    x: 22,
    y: 80,
    size: 'text-2xl sm:text-4xl font-light italic',
    style: 'italic',
    pairId: 'sound',
    resultTitle: 'KINETIC RHYTHM',
    resultDesc: 'Gesture and kinetic momentum giving birth to melody.',
    tagColor: '#0047AB',
  },
  {
    id: 'color',
    word: 'COLOR',
    x: 70,
    y: 82,
    size: 'text-4xl sm:text-6xl font-black',
    style: 'sans',
    pairId: 'people',
    resultTitle: 'EMOTIONAL PALETTE',
    resultDesc: 'Human empathy expressed through pure chromatic shifts.',
    tagColor: '#E34234',
  },
  {
    id: 'people',
    word: 'PEOPLE',
    x: 10,
    y: 38,
    size: 'text-2xl sm:text-4xl font-mono tracking-widest',
    style: 'mono',
    pairId: 'color',
    resultTitle: 'EMOTIONAL PALETTE',
    resultDesc: 'Collective aura vibrating in living, breathing spectrums.',
    tagColor: '#E34234',
  },
];

export const SparkSection: React.FC = () => {
  const [activeWordId, setActiveWordId] = useState<string | null>(null);

  const activeNode = WORDS.find((w) => w.id === activeWordId);
  const pairedNode = activeNode ? WORDS.find((w) => w.id === activeNode.pairId) : null;

  return (
    <section id="spark" className="relative min-h-screen w-full py-28 px-6 md:px-12 bg-[#FAF7F2] overflow-hidden border-t border-[#171717]/10">
      {/* Header Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#E34234] font-bold tracking-widest uppercase">
              01 / SPARK
            </span>
            <div className="w-12 h-[1px] bg-[#E34234]" />
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-[#171717] leading-[0.9]">
            EVERYTHING
            <br />
            <span className="italic font-light text-[#0047AB]">STARTS SMALL.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm font-sans text-[#6B6862] leading-relaxed">
            Hover over any scattered spark below. Watch how MUSE instantly identifies hidden synergies floating beneath the surface.
          </p>
        </div>
      </div>

      {/* Floating Canvas for Words */}
      <div className="relative max-w-7xl mx-auto h-[600px] sm:h-[650px] w-full rounded-2xl border border-[#171717]/15 bg-[#F2EDE4]/60 backdrop-blur-sm p-8 overflow-hidden shadow-inner">
        {/* SVG Connecting Line between Active and Paired Node */}
        {activeNode && pairedNode && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              x1={`${activeNode.x}%`}
              y1={`${activeNode.y}%`}
              x2={`${pairedNode.x}%`}
              y2={`${pairedNode.y}%`}
              stroke={activeNode.tagColor}
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            {/* Midpoint Sparkle Indicator */}
            <circle
              cx={`${(activeNode.x + pairedNode.x) / 2}%`}
              cy={`${(activeNode.y + pairedNode.y) / 2}%`}
              r="10"
              fill={activeNode.tagColor}
              className="animate-ping opacity-75"
            />
          </svg>
        )}

        {/* Floating Words */}
        {WORDS.map((node) => {
          const isActive = activeWordId === node.id;
          const isPaired = pairedNode?.id === node.id;

          return (
            <motion.div
              key={node.id}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              animate={{
                y: [0, -10, 0],
                scale: isActive ? 1.2 : isPaired ? 1.15 : 1,
                color: isActive
                  ? node.tagColor
                  : isPaired
                  ? node.tagColor
                  : '#171717',
              }}
              transition={{
                y: { duration: 4 + (node.x % 3), repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 0.3 },
                color: { duration: 0.3 },
              }}
              onMouseEnter={() => setActiveWordId(node.id)}
              onMouseLeave={() => setActiveWordId(null)}
              data-cursor="true"
              data-cursor-label="CONNECT"
            >
              <div
                className={`relative group transition-all duration-300 ${node.size} ${
                  isActive || isPaired ? 'drop-shadow-lg' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span>{node.word}</span>
                {(isActive || isPaired) && (
                  <motion.span
                    layoutId={`badge-${node.id}`}
                    className="absolute -top-3 -right-3 w-3 h-3 rounded-full"
                    style={{ backgroundColor: node.tagColor }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Emergent Connection Card Overlay */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 glass-editorial border border-[#171717]/20 p-6 rounded-xl shadow-2xl z-20"
            >
              <div className="flex items-center justify-between mb-3 border-b border-[#171717]/10 pb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0047AB]" />
                  <span className="font-mono text-[10px] tracking-widest text-[#0047AB] uppercase font-bold">
                    DISCOVERED CONNECTION
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-[#6B6862]">
                  <span>{activeNode.word}</span>
                  <Link2 className="w-3 h-3" />
                  <span>{pairedNode?.word}</span>
                </div>
              </div>

              <h4 className="font-display font-extrabold text-2xl text-[#171717] uppercase tracking-tight mb-1">
                {activeNode.resultTitle}
              </h4>
              <p className="text-xs font-sans text-[#6B6862] leading-relaxed">
                {activeNode.resultDesc}
              </p>

              <div className="mt-4 pt-3 border-t border-[#171717]/10 flex items-center justify-between text-[10px] font-mono text-[#171717]/80">
                <span>SYNTHESIS COMPLETE</span>
                <span className="text-[#E34234] font-bold">EXPLORE IDEA →</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Hint when idle */}
        {!activeWordId && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#171717] bg-[#FAF7F2] px-4 py-2 rounded-full border border-[#171717]/20 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#E34234] animate-pulse" />
              <span>HOVER OVER ANY WORD TO SPARK A SYNTHESIS</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
