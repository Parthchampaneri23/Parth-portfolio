'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';

export default function HeroSection() {
  const nameWords = ['PARTH'.split(''), 'CHAMPANERI'.split('')];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto">
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Kicker tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[var(--muted)] font-medium mb-4 tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--red)]" />
            MERN STACK DEVELOPER
          </motion.div>

          {/* Large Animated Title - Split into clean lines */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.8rem] tracking-tighter uppercase leading-[0.88] text-[var(--text)] select-none my-2 max-w-full overflow-visible"
          >
            {nameWords.map((word, wIdx) => (
              <span key={wIdx} className="block whitespace-nowrap">
                {word.map((char, cIdx) => (
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
          </motion.h1>

          {/* Role badge subhead */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--insp)] uppercase bg-[var(--insp)]/10 border border-[var(--insp)]/30 px-3.5 py-1.5 rounded-full"
          >
            MERN &amp; NEXT.JS WEBSITES & AITOOLS
          </motion.div>

          {/* Hero Lede Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-base sm:text-lg text-[var(--muted)] max-w-xl font-sans leading-relaxed"
          >
            MERN Stack Developer with hands-on experience building scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Experienced in developing responsive UIs, REST APIs, and full-stack solutions, with a strong interest in modern web technologies and AI-powered applications.
          </motion.p>

          {/* Action CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToSection('work')}
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--red)] text-[var(--on-red)] font-sans font-bold text-sm sm:text-base tracking-tight overflow-hidden shadow-lg shadow-[var(--red)]/30 hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>View Featured Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-[var(--line)] bg-[var(--panel)]/60 backdrop-blur-md text-[var(--text)] font-sans font-semibold text-sm sm:text-base hover:bg-[var(--line)] transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-[var(--insp)]" />
              <span>Contact &amp; Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Portrait Painting frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[var(--line)] group">
            {/* Portrait Image */}
            <img
              src="/images/profile pic.png"
              alt="Parth Champaneri"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Museum Wall Label Tag overlay */}
            <div className="absolute right-4 bottom-4 z-20 w-60 p-3.5 rounded-xl bg-[var(--cream)]/95 text-[#0B1233] shadow-xl border border-black/10 backdrop-blur-md transition-transform duration-300">
              <b className="font-display font-black text-sm uppercase tracking-tight block">
                Parth Champaneri
              </b>
              <i className="not-italic text-xs text-[#525B80] font-mono block mt-0.5">
                MERN Stack Developer
              </i>
              <span className="text-[10px] font-mono text-[#525B80]/80 mt-1 block">
                DAHANU, Maharashtra, India
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Foot Status Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-12 pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--muted)] z-10"
      >
        {/* Availability status */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ping-dot flex-none" />
          <span className="text-[var(--text)] font-medium">
            Available for Full-Time Software &amp; Mern Stack Development Opportunities
          </span>
        </div>

        {/* Scroll cue */}
        <div
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-3 cursor-pointer hover:text-[var(--text)] transition-colors"
        >
          <span className="uppercase tracking-wider">Scroll to explore</span>
          <div className="relative w-[1.5px] h-8 bg-[var(--line)] overflow-hidden cue-line" />
        </div>
      </motion.div>
    </section>
  );
}
