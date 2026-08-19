import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dna, RefreshCw, Cpu } from 'lucide-react';

interface Trait {
  id: string;
  name: string;
  value: number; // percentage
  color: string;
  radius: number; // base ring size
  speed: number;
  description: string;
}

const INITIAL_TRAITS: Trait[] = [
  { id: 'visual', name: 'VISUAL', value: 91, color: '#0047AB', radius: 240, speed: 25, description: 'Perceives concepts through spatial harmony and color weight.' },
  { id: 'curious', name: 'CURIOUS', value: 82, color: '#E34234', radius: 190, speed: 20, description: 'Relentlessly explores lateral associations across disciplines.' },
  { id: 'experimental', name: 'EXPERIMENTAL', value: 76, color: '#B8A1D9', radius: 150, speed: 15, description: 'Embraces chaotic prototypes and serendipitous glitches.' },
  { id: 'emotional', name: 'EMOTIONAL', value: 68, color: '#E5C158', radius: 110, speed: 12, description: 'Channels subconscious intuition and visceral resonance.' },
  { id: 'analytical', name: 'ANALYTICAL', value: 54, color: '#171717', radius: 75, speed: 8, description: 'Structures raw inspiration into robust golden ratios.' },
];

export const CreativeDNA: React.FC = () => {
  const [traits, setTraits] = useState<Trait[]>(INITIAL_TRAITS);
  const [activeTrait, setActiveTrait] = useState<Trait | null>(INITIAL_TRAITS[0]);

  const handleSliderChange = (id: string, newVal: number) => {
    setTraits((prev) =>
      prev.map((t) => (t.id === id ? { ...t, value: newVal } : t))
    );
    if (activeTrait?.id === id) {
      setActiveTrait((prev) => (prev ? { ...prev, value: newVal } : null));
    }
  };

  const handleReset = () => {
    setTraits(INITIAL_TRAITS);
  };

  return (
    <section id="dna" className="relative min-h-screen w-full py-28 px-6 md:px-12 bg-[#FAF7F2] overflow-hidden border-t border-[#171717]/10">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#0047AB] font-bold tracking-widest uppercase">
              04 / YOUR CREATIVE DNA
            </span>
            <div className="w-12 h-[1px] bg-[#0047AB]" />
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-[#171717] leading-[0.88]">
            WHAT KIND OF
            <br />
            <span className="italic font-light text-[#E34234]">CREATOR ARE YOU?</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-full border border-[#171717]/20 bg-[#F2EDE4] hover:bg-[#171717] hover:text-white font-mono text-xs tracking-wider transition-colors flex items-center gap-2"
            data-cursor="true"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>REBALANCE PERSONA</span>
          </button>
        </div>
      </div>

      {/* Interactive Orbital Visualization Canvas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Orbital Rings Visual System */}
        <div className="md:col-span-7 relative h-[480px] sm:h-[550px] w-full rounded-3xl border border-[#171717]/15 bg-[#F2EDE4]/80 backdrop-blur-md p-6 flex items-center justify-center overflow-hidden shadow-xl">
          {/* Central User Core Node */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#171717] text-[#FAF7F2] flex flex-col items-center justify-center shadow-2xl border-4 border-white"
            >
              <Dna className="w-6 h-6 text-[#E34234] mb-1" />
              <span className="font-mono text-[9px] tracking-widest uppercase font-bold">CORE</span>
            </motion.div>
          </div>

          {/* Orbital Concentric Trait Rings */}
          {traits.map((trait) => {
            const isSelected = activeTrait?.id === trait.id;
            const scaledRadius = trait.radius * (0.65 + (trait.value / 100) * 0.45);

            return (
              <motion.div
                key={trait.id}
                className="absolute rounded-full border-2 cursor-pointer transition-all duration-300 flex items-start justify-center pt-2"
                style={{
                  width: scaledRadius * 2,
                  height: scaledRadius * 2,
                  borderColor: isSelected ? trait.color : `${trait.color}40`,
                  borderStyle: trait.id === 'analytical' ? 'dashed' : 'solid',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: isSelected ? 1.04 : 1,
                }}
                transition={{
                  rotate: { duration: trait.speed, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 0.3 },
                }}
                onClick={() => setActiveTrait(trait)}
                data-cursor="true"
                data-cursor-label={trait.name}
              >
                {/* Trait Pulse Dot on Ring Boundary */}
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shadow-md -mt-2.5 transition-transform group-hover:scale-150"
                  style={{ backgroundColor: trait.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Trait Rebalancer Sliders & Descriptions */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="border-b border-[#171717]/10 pb-4">
            <span className="font-mono text-xs text-[#6B6862] tracking-widest uppercase">
              CREATIVE PROFILE ANALYSIS
            </span>
            <h3 className="font-display font-bold text-2xl text-[#171717] mt-1">
              ADJUST TRAIT INTENSITY
            </h3>
          </div>

          <div className="space-y-4">
            {traits.map((trait) => {
              const isSelected = activeTrait?.id === trait.id;

              return (
                <div
                  key={trait.id}
                  onClick={() => setActiveTrait(trait)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#171717] bg-[#FAF7F2] shadow-md'
                      : 'border-[#171717]/10 bg-[#F2EDE4]/40 hover:bg-[#F2EDE4]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: trait.color }}
                      />
                      <span className="font-display font-extrabold text-lg tracking-tight text-[#171717]">
                        {trait.name}
                      </span>
                    </div>

                    <span className="font-mono text-sm font-bold text-[#171717]">
                      {trait.value}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={trait.value}
                    onChange={(e) => handleSliderChange(trait.id, parseInt(e.target.value))}
                    className="w-full h-1.5 bg-[#171717]/10 rounded-lg appearance-none cursor-pointer accent-[#0047AB]"
                  />

                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs font-sans text-[#6B6862] mt-3 pt-2 border-t border-[#171717]/10 leading-relaxed"
                    >
                      {trait.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
