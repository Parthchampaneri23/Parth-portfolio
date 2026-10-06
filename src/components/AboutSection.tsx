'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import InteractiveHeading from './InteractiveHeading';

const STATS = [
  { target: 2, suffix: '', label: 'Internship Experiences', desc: 'Hands-on industry experience building web apps' },
  { target: 50, suffix: '+', label: 'REST APIs & Endpoints', desc: 'Designed, tested & integrated backend services' },
  { target: 10, suffix: '+', label: 'MERN Stack Projects', desc: 'Responsive web apps & full-stack implementations' },
  { target: 100, suffix: '%', label: 'Responsive UIs & Quality', desc: 'Pixel-perfect layouts & modern React standards' },
];

const STATEMENT_TEXT = "Building responsive web applications using React, Node.js, Express, and MongoDB, with a focus on seamless user experiences and modern AI features.";

function OdometerStat({ target, suffix, label, desc, isDecimal }: { target: number; suffix: string; label: string; desc: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const steps = 40;
          const stepTime = duration / steps;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col border-l-2 border-[var(--red)] pl-4">
      <div className="font-display font-black text-4xl sm:text-6xl text-[var(--text)] tracking-tighter font-mono">
        {isDecimal ? count.toFixed(1) : Math.floor(count)}
        <span className="text-[var(--red)]">{suffix}</span>
      </div>
      <b className="font-sans font-bold text-sm sm:text-base text-[var(--text)] mt-2">
        {label}
      </b>
      <p className="font-mono text-xs text-[var(--muted)] mt-1">
        {desc}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'start 0.2'],
  });

  const words = STATEMENT_TEXT.split(' ');

  return (
    <section id="about" ref={containerRef} className="relative py-24 px-4 sm:px-8 lg:px-16 border-t border-[var(--line)]">
      {/* Section Header */}
      <div className="mb-16">
        <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-widest block mb-2">
          {"// 02. ABOUT ME"}
        </span>
        <InteractiveHeading
          text="CRAFTING CODE & BUILDING MODERN WEBSITES"
          className="text-5xl sm:text-7xl lg:text-8xl"
        />
      </div>

      {/* Grid: Statement & Draggable Lanyard Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: About Statement with Word-by-Word Scroll Scrub Highlight */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <p className="font-display font-extrabold text-2xl sm:text-4xl text-[var(--text)] leading-snug tracking-tight mb-6 flex flex-wrap gap-x-2.5">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              return (
                <motion.span key={i} style={{ opacity }} className="inline-block">
                  {word}
                </motion.span>
              );
            })}
          </p>

          <div className="space-y-4 text-base sm:text-lg text-[var(--muted)] font-sans leading-relaxed">
            <p>
              I am a MERN Stack Developer with hands-on experience in full-stack web development. My core focus is architecting scalable front-end interfaces with React.js and Next.js, building robust RESTful APIs with Node.js and Express.js, and designing efficient database models with MongoDB.
            </p>
            <p>
              I specialize in writing clean, maintainable code, developing responsive user interfaces, and creating innovative web solutions that integrate modern web technologies and AI-powered applications.
            </p>
          </div>
        </div>

        {/* Right: Interactive Draggable 3D Lanyard ID Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[460px]">
          {/* SVG Lanyard Strap tracking drag position */}
          <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none z-10 overflow-visible">
            <path
              d={`M 20 0 Q ${128 + dragOffset.x * 0.3} ${60 + dragOffset.y * 0.3} 236 0`}
              fill="none"
              stroke="var(--red)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="128" cy="30" r="8" fill="var(--text)" />
          </svg>

          {/* Draggable ID Card with Auto Snap-Back Physics */}
          <motion.div
            drag
            dragSnapToOrigin={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.65}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.08, cursor: 'grabbing' }}
            whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
            onDrag={(_, info) => setDragOffset({ x: info.offset.x, y: info.offset.y })}
            onDragEnd={() => setDragOffset({ x: 0, y: 0 })}
            className="w-72 sm:w-80 rounded-2xl bg-[var(--cream)] text-[#0B1233] shadow-2xl border border-black/10 overflow-hidden cursor-grab z-20 select-none relative"
            style={{
              rotate: dragOffset.x * 0.08,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 18,
              mass: 0.8,
            }}
          >
            {/* Holographic Header with shifting animation */}
            <div className="holo-bg h-14 px-4 flex items-center justify-between font-mono text-xs font-bold text-[#0B1233] border-b border-black/10">
              <span>VISITOR PASS</span>
              <span className="bg-[#0B1233] text-[var(--cream)] px-2 py-0.5 rounded text-[10px]">
                MERN STACK DEVELOPER
              </span>
            </div>

            {/* Photo */}
            <div className="p-4 bg-[var(--cream)]">
              <div className="w-full h-48 rounded-xl overflow-hidden bg-[var(--red)] border border-black/10">
                <img
                  src="/images/profile pic.png"
                  alt="Parth Champaneri Badge Photo"
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
              </div>

              {/* Badge Details */}
              <div className="mt-4">
                <b className="font-display font-black text-2xl tracking-tight block text-[#0B1233]">
                  PARTH CHAMPANERI
                </b>
                <span className="text-xs font-sans text-[#3A4368] font-medium block mt-1">
                  MERN Stack Developer
                </span>
                <span className="text-[10px] font-mono text-[#525B80] block mt-0.5">
                  ID: PC-2026-DHU // DAHANU
                </span>
              </div>

              {/* Barcode Footer */}
              <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between">
                <div className="w-32 h-6 bg-[repeating-linear-gradient(90deg,#0B1233_0_2px,transparent_2px_4px,#0B1233_4px_5px,transparent_5px_8px,#0B1233_8px_11px)]" />
                <span className="font-mono text-[10px] text-[#525B80]">VERIFIED</span>
              </div>
            </div>
          </motion.div>

          <span className="font-mono text-xs text-[var(--muted)] mt-6 animate-pulse">
            👆 Drag badge to interact with physics
          </span>
        </div>
      </div>

      {/* Stats Odometer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-[var(--line)]">
        {STATS.map((stat, idx) => (
          <OdometerStat
            key={idx}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            desc={stat.desc}
          />
        ))}
      </div>
    </section>
  );
}
