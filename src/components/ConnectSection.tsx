import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, Sliders, ArrowRightLeft } from 'lucide-react';

interface Combination {
  id: string;
  leftTitle: string;
  rightTitle: string;
  resultTitle: string;
  resultSub: string;
  leftColor: string;
  rightColor: string;
  mixedColor: string;
  leftShape: 'circle' | 'square' | 'ring' | 'triangle';
  rightShape: 'blob' | 'pill' | 'hexagon' | 'wave' | 'square';
}

const COMBINATIONS: Combination[] = [
  {
    id: '1',
    leftTitle: 'ARCHITECTURE',
    rightTitle: 'MUSIC',
    resultTitle: 'SPATIAL SOUND',
    resultSub: 'New ideas often live between familiar ones. Acoustic structures carved into space.',
    leftColor: '#0047AB',
    rightColor: '#E34234',
    mixedColor: '#7B2CBF',
    leftShape: 'square',
    rightShape: 'blob',
  },
  {
    id: '2',
    leftTitle: 'NOSTALGIA',
    rightTitle: 'TECHNOLOGY',
    resultTitle: 'MEMORY MACHINE',
    resultSub: 'Analog human emotion synthesized into digital kinetic archives.',
    leftColor: '#B8A1D9',
    rightColor: '#0047AB',
    mixedColor: '#3A0CA3',
    leftShape: 'circle',
    rightShape: 'hexagon',
  },
  {
    id: '3',
    leftTitle: 'NATURE',
    rightTitle: 'FASHION',
    resultTitle: 'ORGANIC FORM',
    resultSub: 'Wearable biomorphic architectures responding to surrounding humidity and pulse.',
    leftColor: '#E5C158',
    rightColor: '#E34234',
    mixedColor: '#F77F00',
    leftShape: 'ring',
    rightShape: 'pill',
  },
  {
    id: '4',
    leftTitle: 'FILM',
    rightTitle: 'ARCHITECTURE',
    resultTitle: 'MOVING SPACE',
    resultSub: 'Cinematic compositions built with temporal brick, light, and perspective.',
    leftColor: '#E34234',
    rightColor: '#B8A1D9',
    mixedColor: '#9D4EDD',
    leftShape: 'triangle',
    rightShape: 'square',
  },
];

export const ConnectSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [fusionProgress, setFusionProgress] = useState(0.85); // 0 (separated) to 1 (fully merged)

  const currentCombo = COMBINATIONS[selectedIdx];

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % COMBINATIONS.length);
  };

  return (
    <section id="connect" className="relative min-h-screen w-full py-28 px-6 md:px-12 bg-[#FAF7F2] overflow-hidden border-t border-[#171717]/10">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#0047AB] font-bold tracking-widest uppercase">
              02 / CONNECT
            </span>
            <div className="w-12 h-[1px] bg-[#0047AB]" />
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-[#171717] leading-[0.88]">
            WHAT HAPPENS
            <br />
            <span className="italic font-light text-[#E34234]">WHEN TWO IDEAS MEET?</span>
          </h2>
        </div>

        {/* Combination Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {COMBINATIONS.map((combo, idx) => (
            <button
              key={combo.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                selectedIdx === idx
                  ? 'bg-[#171717] text-[#FAF7F2] shadow-md scale-105'
                  : 'bg-[#F2EDE4] text-[#171717]/70 hover:bg-[#171717]/10'
              }`}
              data-cursor="true"
            >
              0{idx + 1} / {combo.leftTitle} + {combo.rightTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Collision Arena Canvas */}
      <div className="max-w-7xl mx-auto relative min-h-[550px] rounded-3xl border border-[#171717]/15 bg-[#F2EDE4]/70 backdrop-blur-md p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-xl">
        {/* Background Visual Color Blend */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 transition-all duration-700 blur-3xl"
          style={{
            background: `radial-gradient(circle at ${50 - (1 - fusionProgress) * 30}% 50%, ${currentCombo.leftColor}, transparent 60%), radial-gradient(circle at ${50 + (1 - fusionProgress) * 30}% 50%, ${currentCombo.rightColor}, transparent 60%)`,
          }}
        />

        {/* Collision Controls Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#171717]/10 pb-4">
          <div className="flex items-center gap-3">
            <Sliders className="w-4 h-4 text-[#0047AB]" />
            <span className="font-mono text-xs tracking-widest text-[#171717] font-semibold uppercase">
              COLLISION INTENSITY
            </span>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="font-mono text-xs text-[#6B6862]">DISTANT</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={fusionProgress}
              onChange={(e) => setFusionProgress(parseFloat(e.target.value))}
              className="w-full sm:w-64 accent-[#0047AB] cursor-pointer"
            />
            <span className="font-mono text-xs text-[#E34234] font-bold">MERGED</span>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#171717]/20 hover:bg-[#171717] hover:text-white font-mono text-xs tracking-wider transition-colors"
            data-cursor="true"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>CYCLE PAIR</span>
          </button>
        </div>

        {/* Main Kinetic Visual Fusion Stage */}
        <div className="relative z-10 my-12 flex items-center justify-between min-h-[280px]">
          {/* Left Concept Object */}
          <motion.div
            className="flex flex-col items-center justify-center text-center z-10"
            animate={{
              x: `${(1 - fusionProgress) * -160}px`,
              opacity: fusionProgress > 0.9 ? 0.3 : 1,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div
              className="w-32 h-32 md:w-44 md:h-44 rounded-2xl flex items-center justify-center border border-[#171717]/20 shadow-lg mb-4 backdrop-blur-md"
              style={{ backgroundColor: `${currentCombo.leftColor}30` }}
            >
              <div
                className="w-20 h-20 rounded-xl"
                style={{ backgroundColor: currentCombo.leftColor }}
              />
            </div>
            <span className="font-display font-extrabold text-2xl md:text-4xl text-[#171717] tracking-tight uppercase">
              {currentCombo.leftTitle}
            </span>
          </motion.div>

          {/* Emergent Center Synthesis Node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center pointer-events-none">
            <motion.div
              animate={{
                scale: 0.5 + fusionProgress * 0.7,
                rotate: fusionProgress * 180,
              }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center shadow-2xl border border-white/40 backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, ${currentCombo.leftColor}, ${currentCombo.mixedColor}, ${currentCombo.rightColor})`,
              }}
            >
              <div className="w-full h-full rounded-full border-2 border-white/50 animate-ping opacity-25" />
            </motion.div>
          </div>

          {/* Right Concept Object */}
          <motion.div
            className="flex flex-col items-center justify-center text-center z-10"
            animate={{
              x: `${(1 - fusionProgress) * 160}px`,
              opacity: fusionProgress > 0.9 ? 0.3 : 1,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div
              className="w-32 h-32 md:w-44 md:h-44 rounded-full flex items-center justify-center border border-[#171717]/20 shadow-lg mb-4 backdrop-blur-md"
              style={{ backgroundColor: `${currentCombo.rightColor}30` }}
            >
              <div
                className="w-20 h-20 rounded-full"
                style={{ backgroundColor: currentCombo.rightColor }}
              />
            </div>
            <span className="font-display font-extrabold text-2xl md:text-4xl text-[#171717] tracking-tight uppercase">
              {currentCombo.rightTitle}
            </span>
          </motion.div>
        </div>

        {/* Revealed Emergent Concept Result */}
        <div className="relative z-10 pt-6 border-t border-[#171717]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCombo.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono tracking-widest text-[#E34234] uppercase font-bold">
                  EMERGENT SYNTHESIS
                </span>
              </div>
              <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#171717] uppercase tracking-tighter">
                # {currentCombo.resultTitle}
              </h3>
              <p className="text-sm font-sans text-[#6B6862] max-w-2xl mt-1">
                {currentCombo.resultSub}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFusionProgress(fusionProgress > 0.5 ? 0.2 : 0.95)}
              className="px-6 py-3 rounded-full bg-[#171717] text-[#FAF7F2] font-mono text-xs tracking-widest uppercase hover:bg-[#0047AB] transition-colors flex items-center gap-2"
              data-cursor="true"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>{fusionProgress > 0.5 ? 'SEPARATE' : 'COLLIDE'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
