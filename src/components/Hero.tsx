import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowDown, Compass } from 'lucide-react';

interface FloatingItem {
  id: string;
  type: 'blob' | 'circle' | 'line' | 'sketch' | 'text' | 'paper' | 'ring' | 'dot';
  content?: string;
  x: number; // base % from left
  y: number; // base % from top
  size: number;
  color: string;
  rotation: number;
  speed: number;
  transformedX?: number; // target % when unified
  transformedY?: number;
}

const INITIAL_ITEMS: FloatingItem[] = [
  { id: '1', type: 'blob', x: 12, y: 18, size: 140, color: '#0047AB', rotation: 15, speed: 0.04, transformedX: 42, transformedY: 48 },
  { id: '2', type: 'circle', x: 80, y: 15, size: 110, color: '#E34234', rotation: -20, speed: 0.03, transformedX: 52, transformedY: 45 },
  { id: '3', type: 'text', content: 'RESONANCE', x: 75, y: 65, size: 16, color: '#171717', rotation: -8, speed: 0.06, transformedX: 48, transformedY: 52 },
  { id: '4', type: 'paper', x: 8, y: 68, size: 130, color: '#B8A1D9', rotation: 25, speed: 0.05, transformedX: 46, transformedY: 55 },
  { id: '5', type: 'ring', x: 88, y: 42, size: 90, color: '#E5C158', rotation: 40, speed: 0.02, transformedX: 50, transformedY: 48 },
  { id: '6', type: 'text', content: 'ARCHIVE_09', x: 18, y: 45, size: 14, color: '#6B6862', rotation: 5, speed: 0.07, transformedX: 44, transformedY: 42 },
  { id: '7', type: 'sketch', x: 68, y: 22, size: 85, color: '#171717', rotation: -12, speed: 0.04, transformedX: 49, transformedY: 44 },
  { id: '8', type: 'line', x: 45, y: 12, size: 160, color: '#0047AB', rotation: -35, speed: 0.03, transformedX: 50, transformedY: 50 },
  { id: '9', type: 'dot', x: 30, y: 80, size: 24, color: '#E34234', rotation: 0, speed: 0.08, transformedX: 51, transformedY: 53 },
  { id: '10', type: 'blob', x: 82, y: 78, size: 100, color: '#B8A1D9', rotation: 50, speed: 0.04, transformedX: 47, transformedY: 49 },
  { id: '11', type: 'text', content: 'VOID & TONE', x: 40, y: 82, size: 15, color: '#171717', rotation: 10, speed: 0.05, transformedX: 53, transformedY: 46 },
  { id: '12', type: 'ring', x: 25, y: 25, size: 70, color: '#E5C158', rotation: -15, speed: 0.03, transformedX: 45, transformedY: 51 },
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [isTransformed, setIsTransformed] = useState(false);

  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 600], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);
  const smoothY = useSpring(rawY, { stiffness: 100, damping: 20 });

  // Auto-trigger transformation on initial scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120 && !isTransformed) {
        setIsTransformed(true);
      } else if (window.scrollY <= 40 && isTransformed) {
        setIsTransformed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransformed]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize mouse pos from -1 to 1 relative to center
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const scrollToSpark = () => {
    const sparkEl = document.getElementById('spark');
    if (sparkEl) sparkEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ opacity: heroOpacity }}
      className="relative min-h-screen w-full pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden select-none bg-[#FAF7F2]"
    >
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 radial-glow-cobalt pointer-events-none rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] radial-glow-vermilion pointer-events-none rounded-full blur-3xl opacity-50" />

      {/* Floating Canvas Objects Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {INITIAL_ITEMS.map((item) => {
          const isItemActive = activeItemId === item.id;
          
          // Target position (scattered vs transformed state)
          const targetX = isTransformed ? (item.transformedX ?? 50) : item.x;
          const targetY = isTransformed ? (item.transformedY ?? 50) : item.y;

          // Mouse magnet offset
          const magnetFactor = isItemActive ? 35 : 18;
          const offsetX = mousePos.x * magnetFactor * item.speed * 100;
          const offsetY = mousePos.y * magnetFactor * item.speed * 100;

          return (
            <motion.div
              key={item.id}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: `${targetX}%`,
                top: `${targetY}%`,
              }}
              animate={{
                x: offsetX,
                y: offsetY,
                rotate: item.rotation + (isTransformed ? 360 : mousePos.x * 12),
                scale: isTransformed ? 0.75 : isItemActive ? 1.25 : 1,
                filter: isItemActive
                  ? 'saturate(1.8) drop-shadow(0 20px 25px rgba(23,23,23,0.18))'
                  : 'saturate(1) drop-shadow(0 4px 6px rgba(23,23,23,0.06))',
              }}
              transition={{
                type: 'spring',
                damping: 24,
                stiffness: 160,
                mass: 0.5,
              }}
              onMouseEnter={() => setActiveItemId(item.id)}
              onMouseLeave={() => setActiveItemId(null)}
              data-cursor="true"
              data-cursor-label="SPARK"
            >
              {item.type === 'blob' && (
                <svg width={item.size} height={item.size} viewBox="0 0 200 200" fill="none">
                  <path
                    d="M45.7,-59.2C58.8,-48.5,68.9,-34.1,72.6,-18.2C76.3,-2.3,73.6,15.1,65.8,29.8C58,44.5,45,56.5,29.6,63.9C14.2,71.3,-3.6,74.1,-20.9,70.1C-38.2,66.1,-55,55.3,-64.7,40.1C-74.4,24.9,-77,5.3,-73.4,-12.7C-69.8,-30.7,-60.1,-47.1,-46.2,-57.6C-32.3,-68.1,-16.2,-72.7,0.4,-73.3C17,-73.9,32.6,-69.9,45.7,-59.2Z"
                    transform="translate(100 100)"
                    fill={item.color}
                    fillOpacity="0.85"
                  />
                </svg>
              )}

              {item.type === 'circle' && (
                <div
                  style={{
                    width: item.size,
                    height: item.size,
                    backgroundColor: item.color,
                  }}
                  className="rounded-full opacity-80 backdrop-blur-sm"
                />
              )}

              {item.type === 'ring' && (
                <div
                  style={{
                    width: item.size,
                    height: item.size,
                    borderColor: item.color,
                  }}
                  className="rounded-full border-2 opacity-70"
                />
              )}

              {item.type === 'text' && (
                <div className="bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#171717]/15 shadow-sm">
                  <span className="font-mono text-xs tracking-widest font-bold uppercase text-[#171717]">
                    {item.content}
                  </span>
                </div>
              )}

              {item.type === 'paper' && (
                <div
                  style={{
                    width: item.size,
                    height: item.size * 0.7,
                    backgroundColor: item.color,
                  }}
                  className="rounded-sm opacity-60 mix-blend-multiply border border-[#171717]/10 flex items-center justify-center p-2"
                >
                  <div className="w-full h-full border border-dashed border-[#171717]/20 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-[#171717]/60">FRAGMENT</span>
                  </div>
                </div>
              )}

              {item.type === 'sketch' && (
                <svg width={item.size} height={item.size} viewBox="0 0 100 100" fill="none">
                  <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke={item.color} strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="50" cy="50" r="18" stroke={item.color} strokeWidth="1.5" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke={item.color} strokeWidth="1" />
                </svg>
              )}

              {item.type === 'line' && (
                <svg width={item.size} height="20" viewBox="0 0 200 20" fill="none">
                  <line x1="0" y1="10" x2="200" y2="10" stroke={item.color} strokeWidth="2" strokeDasharray="6 4" />
                </svg>
              )}

              {item.type === 'dot' && (
                <div
                  style={{
                    width: item.size,
                    height: item.size,
                    backgroundColor: item.color,
                  }}
                  className="rounded-full shadow-inner"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Main Editorial Typography Hero Body */}
      <motion.div style={{ y: smoothY }} className="relative z-10 my-auto max-w-6xl mx-auto w-full pt-8">
        {/* Top Editorial Metadata Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#171717]/15 pb-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E34234] animate-ping" />
            <span className="text-xs font-mono tracking-widest text-[#171717]/70 uppercase">
              INTERACTIVE CANVAS / ISSUE 01
            </span>
          </div>

          {/* Interactive State Toggle */}
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#171717]/20 bg-[#F2EDE4] hover:bg-[#171717] hover:text-[#FAF7F2] text-[11px] font-mono tracking-wider transition-all duration-300"
            data-cursor="true"
            data-cursor-label="TRANSFORM"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0047AB]" />
            <span>
              {isTransformed ? 'STATE: CREATIVE IDEA' : 'STATE: SCATTERED THOUGHTS'}
            </span>
          </button>
        </motion.div>

        {/* Enormous Display Typography */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-7xl sm:text-8xl md:text-9xl lg:text-[13rem] leading-[0.82] tracking-tighter text-[#171717] uppercase select-none"
          >
            IDEAS
            <br />
            NEED
            <br />
            <span className="italic font-light text-[#0047AB]">ROOM.</span>
          </motion.h1>

          {/* Floating Subtle Micro Labels */}
          <div className="absolute -top-4 right-4 md:right-12 hidden sm:block pointer-events-none">
            <span className="font-mono text-[10px] tracking-widest text-[#6B6862] block">COORDINATES</span>
            <span className="font-mono text-xs text-[#171717] font-semibold">37°46'N 122°25'W</span>
          </div>
        </div>

        {/* Subtext Paragraph & Action Controls */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="md:col-span-7 text-lg sm:text-xl md:text-2xl font-light leading-snug text-[#171717]/85 tracking-tight font-sans"
          >
            A place for <span className="font-semibold underline decoration-[#E34234]/60 decoration-2">unfinished thoughts</span>, unexpected connections, and things worth making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="md:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-end"
          >
            <button
              onClick={scrollToSpark}
              className="px-8 py-4 rounded-full bg-[#171717] text-[#FAF7F2] font-mono text-xs tracking-widest uppercase hover:bg-[#0047AB] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group"
              data-cursor="true"
              data-cursor-label="SPARK"
            >
              <span>FIND YOUR MUSE</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">→</span>
            </button>

            <button
              onClick={scrollToSpark}
              className="px-6 py-4 rounded-full border border-[#171717]/30 hover:border-[#171717] text-[#171717] font-mono text-xs tracking-widest uppercase hover:bg-[#F2EDE4] transition-all duration-300 flex items-center justify-center gap-2"
              data-cursor="true"
            >
              <span>START WITH A SPARK</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E34234]" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Editorial Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 pt-8 flex items-center justify-between border-t border-[#171717]/10 text-xs font-mono text-[#6B6862]"
      >
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#0047AB] animate-spin" style={{ animationDuration: '20s' }} />
          <span>SCROLL TO DIVE INTO THE CREATIVE JOURNEY</span>
        </div>
        <span className="hidden sm:inline tracking-widest">00 / INTRO</span>
      </motion.div>
    </motion.section>
  );
};
