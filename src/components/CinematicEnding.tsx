import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CinematicEnding: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCtaClick = () => {
    setIsExpanded(true);

    // Trigger subtle celebratory artistic confetti burst
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#0047AB', '#E34234', '#B8A1D9', '#E5C158'],
    });

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <section className="relative min-h-screen w-full py-36 px-6 md:px-12 bg-[#FAF7F2] flex flex-col justify-between overflow-hidden select-none border-t border-[#171717]/10">
      {/* Expanding Abstract Geometric Shape background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          animate={{
            scale: isExpanded ? 18 : [1, 1.15, 1],
            rotate: isExpanded ? 180 : [0, 90, 0],
            opacity: isExpanded ? 0.95 : 0.25,
          }}
          transition={{
            scale: { duration: isExpanded ? 1.5 : 8, repeat: isExpanded ? 0 : Infinity, ease: 'easeInOut' },
            rotate: { duration: isExpanded ? 1.5 : 25, repeat: isExpanded ? 0 : Infinity, ease: 'linear' },
            opacity: { duration: 1 },
          }}
          className="w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full border-2 border-[#171717]/30 backdrop-blur-sm"
          style={{
            background: 'radial-gradient(circle, rgba(0,71,171,0.18) 0%, rgba(227,66,52,0.12) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Top Editorial Label */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-mono text-[#6B6862]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0047AB]" />
          <span>EPILOGUE / THE CANVAS IS YOURS</span>
        </div>
        <span>MUSE N° 2026</span>
      </div>

      {/* Main Enormous Minimal Climax Typography */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center my-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] tracking-tighter uppercase text-[#171717] leading-[0.82]"
        >
          GO MAKE
          <br />
          <span className="italic font-light text-[#E34234]">SOMETHING.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-2xl font-light text-[#171717]/80 mt-8 max-w-xl mx-auto font-sans"
        >
          Your next idea might already be hiding inside you.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={handleCtaClick}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="px-10 py-5 rounded-full bg-[#171717] text-[#FAF7F2] font-mono text-sm tracking-widest uppercase hover:bg-[#0047AB] transition-all duration-500 flex items-center gap-3 shadow-2xl group"
            data-cursor="true"
            data-cursor-label="CREATE"
          >
            <span>FIND YOUR MUSE</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center text-[10px] font-mono text-[#6B6862] tracking-widest uppercase">
        END OF HOMEPAGE — BEGINNING OF CREATION
      </div>
    </section>
  );
};
