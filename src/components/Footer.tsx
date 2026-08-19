import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#FAF7F2] py-16 px-6 md:px-12 border-t border-[#171717]/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#E34234]" />
            <h3 className="font-display font-black text-3xl tracking-wider text-[#171717]">MUSE</h3>
          </div>
          <p className="font-display italic text-lg text-[#171717]/70 font-light">
            Make room for ideas.
          </p>
        </div>

        {/* Minimal Navigation Links */}
        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          {[
            { name: 'DISCOVER', id: 'spark' },
            { name: 'MIX', id: 'connect' },
            { name: 'EXPLORE', id: 'explore' },
            { name: 'ABOUT', id: 'dna' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-mono tracking-widest text-[#171717]/70 hover:text-[#0047AB] uppercase transition-colors"
              data-cursor="true"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-[#171717]/20 hover:bg-[#171717] hover:text-[#FAF7F2] flex items-center justify-center transition-all duration-300 group shadow-sm"
          data-cursor="true"
          data-cursor-label="TOP"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Copyright & Coordinates */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#171717]/10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#6B6862] gap-4">
        <span>© {new Date().getFullYear()} MUSE LABS. ALL RIGHTS RESERVED.</span>
        <span className="tracking-widest">DESIGNED FOR UNEXPECTED CONNECTIONS</span>
      </div>
    </footer>
  );
};
