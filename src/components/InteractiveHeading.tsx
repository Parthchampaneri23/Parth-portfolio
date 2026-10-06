'use client';

import { motion } from 'framer-motion';

interface InteractiveHeadingProps {
  text: string;
  className?: string;
}

export default function InteractiveHeading({ text, className = '' }: InteractiveHeadingProps) {
  const words = text.split(' ');

  return (
    <h2 className={`font-display font-black tracking-tighter uppercase text-[var(--text)] select-none ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {word.split('').map((char, cIdx) => (
            <motion.span
              key={cIdx}
              whileHover={{ scale: 1.15, color: 'var(--red)', y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="inline-block cursor-pointer"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
}
