'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [state, setState] = useState<'spot' | 'ring' | 'label'>('spot');
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add custom cursor class to html
    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Check hovered element for data-cursor or clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
        if (isClickable) {
          setState('ring');
        } else {
          setState('spot');
        }
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[500] overflow-hidden">
      {/* Red center dot */}
      <div
        className={`fixed -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-[var(--red)] transition-transform duration-75 ease-out pointer-events-none ${
          state !== 'spot' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />

      {/* Outer interactive ring lens */}
      <div
        className={`fixed -left-4 -top-4 rounded-full pointer-events-none flex items-center justify-center mix-blend-difference transition-all duration-200 ease-out border ${
          state === 'ring'
            ? 'w-10 h-10 border-white bg-transparent scale-100'
            : 'w-8 h-8 border-transparent bg-white/20 scale-50 opacity-0'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
    </div>
  );
}
