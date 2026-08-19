import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onOpenSparkModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSparkModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-editorial border-b border-[#171717]/10 shadow-sm' : 'py-7 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group text-left"
          data-cursor="true"
          data-cursor-label="HOME"
        >
          <div className="relative w-7 h-7 flex items-center justify-center">
            <span className="absolute w-full h-full rounded-full border border-[#171717]/40 group-hover:scale-110 group-hover:border-[#0047AB] transition-all duration-300"></span>
            <span className="w-2.5 h-2.5 bg-[#E34234] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-wider text-[#171717]">MUSE</span>
            <span className="text-[9px] font-mono tracking-widest text-[#6B6862] -mt-1 hidden sm:inline">N° 42.89 / CREATIVE LAB</span>
          </div>
        </button>

        {/* Minimal Editorial Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: 'DISCOVER', id: 'spark' },
            { name: 'MIX', id: 'connect' },
            { name: 'EXPLORE', id: 'explore' },
            { name: 'ABOUT', id: 'dna' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-mono tracking-widest text-[#171717]/70 hover:text-[#171717] relative group transition-colors uppercase py-1"
              data-cursor="true"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E34234] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Small Action CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('make')}
            className="px-5 py-2.5 rounded-full border border-[#171717]/80 hover:border-[#171717] bg-[#171717] text-[#FAF7F2] text-xs font-mono tracking-widest hover:bg-[#0047AB] transition-all duration-300 flex items-center gap-2 group shadow-sm hover:shadow-md"
            data-cursor="true"
            data-cursor-label="CREATE"
          >
            <span>FIND YOUR MUSE</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};
