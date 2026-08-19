import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight, X, Sparkles } from 'lucide-react';

interface ArtItem {
  id: string;
  num: string;
  category: string;
  title: string;
  medium: string;
  aspectRatio: string; // e.g. 'col-span-12 md:col-span-7 h-[420px]'
  bgColor: string;
  accentColor: string;
  description: string;
  shapeType: 'geometry' | 'typography' | 'wave' | 'minimal' | 'arch';
}

const ARTWORKS: ArtItem[] = [
  {
    id: '1',
    num: '01 / FORM',
    category: 'COLOR × ARCHITECTURE',
    title: 'THE MONOLITH AT DAWN',
    medium: 'Spatial Chromatics & Soft Shadows',
    aspectRatio: 'col-span-12 md:col-span-7 h-[420px]',
    bgColor: '#FAF7F2',
    accentColor: '#0047AB',
    description: 'An exploration of minimal monolithic forms reacting to early morning spectral refraction.',
    shapeType: 'arch',
  },
  {
    id: '2',
    num: '02 / FREQUENCY',
    category: 'SOUND × GRAPHICS',
    title: 'RESONANT TOPOGRAPHY',
    medium: 'Procedural Wave Formations',
    aspectRatio: 'col-span-12 md:col-span-5 h-[420px]',
    bgColor: '#171717',
    accentColor: '#E34234',
    description: 'Translating sub-bass frequencies into tactile topographical maps printed on silk.',
    shapeType: 'wave',
  },
  {
    id: '3',
    num: '03 / TACTILE',
    category: 'TEXTURE × MEMORY',
    title: 'FRAGMENTS OF AN UNNOTICED CITY',
    medium: 'Paper Collages & Micro-Typography',
    aspectRatio: 'col-span-12 md:col-span-4 h-[460px]',
    bgColor: '#F2EDE4',
    accentColor: '#B8A1D9',
    description: 'Tactile artifacts collected from urban walks, arranged in mathematical golden ratios.',
    shapeType: 'typography',
  },
  {
    id: '4',
    num: '04 / KINETIC',
    category: 'MOVEMENT × LIGHT',
    title: 'ORBITAL EQUILIBRIUM',
    medium: 'Kinetic Light Sculptures',
    aspectRatio: 'col-span-12 md:col-span-8 h-[460px]',
    bgColor: '#FAF7F2',
    accentColor: '#E5C158',
    description: 'A study of continuous orbital loops where friction gives birth to warmth and color.',
    shapeType: 'geometry',
  },
  {
    id: '5',
    num: '05 / SYNTHESIS',
    category: 'NATURE × COMPUTATION',
    title: 'PHOTOSYNTHETIC SHADOWS',
    medium: 'Algorithmic Botanical Renderings',
    aspectRatio: 'col-span-12 md:col-span-6 h-[400px]',
    bgColor: '#F2EDE4',
    accentColor: '#0047AB',
    description: 'Generative plant growth algorithms simulating sunlight competition in dense pine canopies.',
    shapeType: 'minimal',
  },
  {
    id: '6',
    num: '06 / TEMPORAL',
    category: 'TIME × VOID',
    title: 'CHRONO-GEOMETRY',
    medium: 'Laser Etched Acrylic & Smoke',
    aspectRatio: 'col-span-12 md:col-span-6 h-[400px]',
    bgColor: '#FAF7F2',
    accentColor: '#E34234',
    description: 'Capturing the slow decay of geometric shadows as light passes through distorted lenses.',
    shapeType: 'arch',
  },
];

export const ExploreGallery: React.FC = () => {
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null);

  return (
    <section id="explore" className="relative min-h-screen w-full py-28 px-6 md:px-12 bg-[#FAF7F2] border-t border-[#171717]/10">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#E34234] font-bold tracking-widest uppercase">
              03 / EXPLORE
            </span>
            <div className="w-12 h-[1px] bg-[#E34234]" />
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-[#171717] leading-[0.88]">
            FOLLOW
            <br />
            <span className="italic font-light text-[#0047AB]">YOUR CURIOSITY.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm font-sans text-[#6B6862] leading-relaxed">
            A digital exhibition showcasing unexpected artistic synthesis. Click any exhibit fragment to reveal its underlying creative process.
          </p>
        </div>
      </div>

      {/* Asymmetric Exhibition Gallery Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
        {ARTWORKS.map((art, idx) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            onClick={() => setSelectedArt(art)}
            className={`group relative rounded-3xl overflow-hidden border border-[#171717]/15 p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:shadow-2xl ${art.aspectRatio}`}
            style={{ backgroundColor: art.bgColor }}
            data-cursor="true"
            data-cursor-label="INSPECT"
          >
            {/* Top Micro Label */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-widest text-[#171717]/80 uppercase">
                {art.num}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#6B6862] uppercase bg-[#171717]/5 px-2.5 py-1 rounded-full">
                {art.category}
              </span>
            </div>

            {/* Middle Artwork Visual Elements */}
            <div className="relative z-10 my-auto flex items-center justify-center pointer-events-none">
              {art.shapeType === 'arch' && (
                <div className="w-36 h-48 rounded-t-full border-2 border-[#171717]/80 flex items-end justify-center pb-4 transition-transform duration-700 group-hover:scale-110">
                  <div
                    className="w-20 h-28 rounded-t-full"
                    style={{ backgroundColor: art.accentColor }}
                  />
                </div>
              )}

              {art.shapeType === 'wave' && (
                <svg width="220" height="120" viewBox="0 0 220 120" fill="none" className="transition-transform duration-700 group-hover:scale-110">
                  <path d="M0 60 Q 55 0, 110 60 T 220 60" stroke={art.accentColor} strokeWidth="6" strokeLinecap="round" />
                  <path d="M0 80 Q 55 20, 110 80 T 220 80" stroke="#FAF7F2" strokeWidth="3" opacity="0.6" />
                </svg>
              )}

              {art.shapeType === 'typography' && (
                <div className="text-center font-display font-extrabold text-7xl text-[#171717]/20 group-hover:text-[#171717] transition-colors duration-500">
                  FORM
                  <br />
                  <span className="text-3xl font-mono text-[#0047AB]">× 049</span>
                </div>
              )}

              {art.shapeType === 'geometry' && (
                <div className="relative w-40 h-40 flex items-center justify-center transition-transform duration-700 group-hover:rotate-45">
                  <div className="absolute w-36 h-36 border-2 border-dashed border-[#171717]/40 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
                  <div className="w-20 h-20 bg-[#E5C158] rounded-xl shadow-lg" />
                </div>
              )}

              {art.shapeType === 'minimal' && (
                <div className="flex items-center gap-4 transition-transform duration-700 group-hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-[#0047AB]" />
                  <div className="w-16 h-16 rounded-sm bg-[#E34234]" />
                  <div className="w-16 h-16 rounded-full border-2 border-[#171717]" />
                </div>
              )}
            </div>

            {/* Bottom Card Title & Reveal CTA */}
            <div className="relative z-10 pt-4 border-t border-[#171717]/10 flex items-end justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-[#171717] tracking-tight group-hover:text-[#0047AB] transition-colors">
                  {art.title}
                </h3>
                <span className="font-mono text-xs text-[#6B6862] block mt-0.5">
                  {art.medium}
                </span>
              </div>

              <div className="w-10 h-10 rounded-full border border-[#171717]/20 group-hover:bg-[#171717] group-hover:text-white flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Artwork Inspection Modal Overlay */}
      <AnimatePresence>
        {selectedArt && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-[#171717]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-3xl border border-[#171717]/20 p-8 sm:p-12 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#171717]/20 bg-[#F2EDE4] hover:bg-[#171717] hover:text-white flex items-center justify-center transition-colors"
                data-cursor="true"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-4 h-4 text-[#0047AB]" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#0047AB] uppercase">
                  EXHIBIT DETAIL / {selectedArt.num}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#171717] tracking-tight uppercase mb-2">
                {selectedArt.title}
              </h2>
              <span className="font-mono text-xs text-[#E34234] block mb-6 font-bold tracking-widest">
                {selectedArt.category} — {selectedArt.medium}
              </span>

              <div className="w-full h-48 rounded-2xl bg-[#F2EDE4] border border-[#171717]/10 flex items-center justify-center mb-6 shadow-inner">
                <div
                  className="w-24 h-24 rounded-full"
                  style={{ backgroundColor: selectedArt.accentColor }}
                />
              </div>

              <p className="font-sans text-base text-[#171717]/85 leading-relaxed mb-8">
                {selectedArt.description}
              </p>

              <div className="flex items-center justify-between border-t border-[#171717]/10 pt-6">
                <span className="font-mono text-xs text-[#6B6862]">CATALOGUE ID: MUSE-2026-EXHIBIT</span>
                <button
                  onClick={() => setSelectedArt(null)}
                  className="px-6 py-2.5 rounded-full bg-[#171717] text-[#FAF7F2] font-mono text-xs tracking-widest hover:bg-[#0047AB] transition-colors"
                >
                  CLOSE EXHIBIT
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
