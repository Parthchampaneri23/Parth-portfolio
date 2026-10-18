'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.round((currentScroll / totalHeight) * 100)));
      }

      // Show button after scrolling down 350px
      if (currentScroll > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group relative flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[var(--panel)]/90 hover:bg-[var(--panel-2)] text-[var(--text)] border border-[var(--line)] shadow-2xl backdrop-blur-md hover:border-[var(--red)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {/* SVG Circular Progress Ring */}
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg className="w-7 h-7 -rotate-90 origin-center" viewBox="0 0 32 32">
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  className="stroke-[var(--line)] fill-none"
                  strokeWidth="2.5"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  className="stroke-[var(--red)] fill-none transition-all duration-150"
                  strokeWidth="2.5"
                  strokeDasharray={81.68}
                  strokeDashoffset={81.68 - (81.68 * scrollProgress) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <ArrowUp className="w-3.5 h-3.5 absolute text-[var(--red)] group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>

            {/* Label & percentage */}
            <div className="hidden sm:flex flex-col items-start font-mono text-[10px] leading-tight pr-1">
              <span className="font-bold tracking-wider text-[var(--text)] group-hover:text-[var(--red)] transition-colors uppercase">
                TOP
              </span>
              <span className="text-[var(--muted)]">{scrollProgress}%</span>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
