import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('data-cursor')
      ) {
        setIsHovered(true);
        const cursorLabel = target.getAttribute('data-cursor-label');
        if (cursorLabel) setHoverText(cursorLabel);
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small central dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#171717] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer reactive aura ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center border border-[#171717]/30 bg-[#171717]/5 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 16),
          y: mousePosition.y - (isHovered ? 28 : 16),
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          borderColor: isHovered ? '#0047AB' : 'rgba(23,23,23,0.25)',
          backgroundColor: isHovered ? 'rgba(0,71,171,0.08)' : 'rgba(23,23,23,0.02)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.2 }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-tighter text-[#0047AB] uppercase font-bold"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
