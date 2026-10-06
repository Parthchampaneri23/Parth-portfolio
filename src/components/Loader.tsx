'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onFinish();
          }, 600);
        }, 300);
      } else {
        setProgress(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.7, 0, 0.2, 1] } }}
          className="fixed inset-0 z-[400] bg-[var(--bg)] text-[var(--text)] flex flex-col justify-between p-6 sm:p-12 pointer-events-none select-none"
        >
          {/* Top info */}
          <div className="flex justify-between items-center text-xs font-mono text-[var(--muted)] pt-[env(safe-area-inset-top,0px)]">
            <span>PARTH CHAMPANERI // PORTFOLIO 2026</span>
            <span>DAHANU, IN</span>
          </div>

          {/* Center drop animation element */}
          <div className="relative w-full flex-1 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [0.8, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full bg-[var(--red)] shadow-lg shadow-[var(--red)]/40"
            />
          </div>

          {/* Bottom number counter and progress bar */}
          <div className="w-full pb-[env(safe-area-inset-bottom,0px)]">
            <div className="flex justify-between items-end mb-4">
              <div className="font-display font-black text-7xl sm:text-9xl tracking-tighter leading-none text-[var(--text)] font-mono">
                {progress.toString().padStart(2, '0')}
                <span className="text-2xl sm:text-4xl text-[var(--red)]">%</span>
              </div>
              <div className="text-right text-xs font-mono text-[var(--muted)] hidden sm:block">
                <b className="text-[var(--text)] block font-sans text-sm">INITIALIZING ENVIRONMENT</b>
                LOADING ASSETS &amp; 3D CANVAS
              </div>
            </div>

            {/* Progress line */}
            <div className="w-full h-[2px] bg-[var(--line)] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-[var(--red)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
