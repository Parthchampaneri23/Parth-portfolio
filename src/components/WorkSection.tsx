'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, Pause, Play } from 'lucide-react';
import InteractiveHeading from './InteractiveHeading';

const PROJECTS = [
  {
    id: 1,
    title: 'AUREVIA HEALTHCARE',
    category: 'PHARMACEUTICAL B2B PLATFORM',
    desc: 'B2B pharmaceutical manufacturing web platform providing quality-controlled dosage formulations, dosage product catalogs, and automated quote request workflows for global healthcare brand owners.',
    image: '/images/proj1.png',
    tagline: 'Pharma Manufacturing & B2B Portal',
    features: ['Dosage Catalog', 'Quote Automation', 'ISO Certified'],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://aurevia-healthcare-one.vercel.app/',
    githubUrl: 'https://github.com/Parthchampaneri23',
  },
  {
    id: 2,
    title: 'STEEL NOVA WELD',
    category: 'INDUSTRIAL FABRICATION PLATFORM',
    desc: 'Modern industrial steel fabrication & welding services platform featuring structural steel solutions, project portfolio showcases, service quote inquiries, and high-performance responsive UI.',
    image: '/images/proj2.png',
    tagline: 'Industrial Steel Fabrication Suite',
    features: ['Structural Showcase', 'Quote Request', 'High Performance'],
    tags: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://steel-nova-weld.vercel.app/',
    githubUrl: 'https://github.com/Parthchampaneri23/SteelNova',
  },
  {
    id: 3,
    title: 'EVENTRA PLATFORM',
    category: 'EVENT MANAGEMENT WEB APP',
    desc: 'Comprehensive event management & ticketing web application featuring interactive event discovery, online ticket booking, schedule management, and real-time user updates.',
    image: '/images/proj3.png',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    tagline: 'Event Discovery & Ticketing Engine',
    features: ['Instant Booking', 'Live Schedules', 'User Dashboard'],
    demoUrl: 'https://eventra-weld.vercel.app/',
    githubUrl: 'https://github.com/Parthchampaneri23/eventra',
  },
  {
    id: 4,
    title: 'THE CHAMP SPORTS (TSC)',
    category: 'E-COMMERCE SPORTS PLATFORM',
    desc: 'Full-stack e-commerce web application for athletic gear & sports equipment retail featuring dynamic product catalog, category filters, cart management, and seamless order checkout.',
    image: '/images/proj4.png',
    tagline: 'Athletic Gear E-Commerce Platform',
    features: ['Dynamic Cart', 'Category Filters', 'Mern Stack MERN'],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://tcs-the-champ-sports-livid.vercel.app/',
    githubUrl: 'https://github.com/Parthchampaneri23/tcs-the-champ-sports',
  },
  {
    id: 5,
    title: 'ARIHANT ENGINEERS',
    category: 'INDUSTRIAL ENGINEERING PLATFORM',
    desc: 'Engineering solutions & industrial equipment showcase platform featuring technical product specs, custom manufacturing service inquiries, interactive project gallery, and responsive layout.',
    image: '/images/proj5.png',
    tagline: 'Heavy Material Handling Equipment',
    features: ['Specs Showcase', 'Custom Orders', 'Interactive Gallery'],
    tags: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://arihant-engineers.vercel.app/',
    githubUrl: 'https://github.com/Parthchampaneri23/arihant-engineers',
  },
];

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll carousel timer (5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const safeIndex = currentIndex >= PROJECTS.length ? 0 : currentIndex;
  const project = PROJECTS[safeIndex] || PROJECTS[0];

  return (
    <section id="work" className="relative py-24 px-4 sm:px-8 lg:px-16 border-t border-[var(--line)] overflow-hidden">
      {/* Section Header & Counter */}
      <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-widest block mb-2">
            {"// 04. FEATURED WORK"}
          </span>
          <InteractiveHeading
            text="FEATURED PROJECTS."
            className="text-5xl sm:text-7xl lg:text-8xl"
          />
        </div>

        {/* Counter & Auto-play indicator */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--line)] bg-[var(--panel-2)] text-xs font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-500" />
                <span>Auto-Scroll: Paused</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-[var(--red)] animate-pulse" />
                <span>Auto-Scroll: Live</span>
              </>
            )}
          </button>

          <div className="font-display font-black text-3xl sm:text-5xl text-[var(--text)] font-mono">
            {(safeIndex + 1).toString().padStart(2, '0')}
            <span className="text-[var(--muted)] font-normal text-xl sm:text-3xl">
              / {PROJECTS.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Project Display Grid - Fixed uniform height for all slides */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left: Project Image / Visual Container */}
        <div className="lg:col-span-7 relative h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden bg-[#090d16] border border-[var(--line)] shadow-2xl group flex flex-col justify-between">
          {/* Mockup Browser Window Top Bar */}
          <div className="h-10 bg-[#121824] border-b border-[var(--line)] px-4 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#090d16] border border-[var(--line)] text-xs font-mono text-[var(--muted)] max-w-[240px] sm:max-w-[340px] truncate">
              <span className="text-emerald-400 font-semibold">https://</span>
              <span className="truncate">{project.demoUrl.replace(/^https?:\/\//, '')}</span>
            </div>
            <div className="w-12 text-right">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live Preview" />
            </div>
          </div>

          {/* Screenshot Viewport Container */}
          <div className="relative flex-1 w-full bg-[#090d16] overflow-hidden p-2 sm:p-3 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full relative rounded-lg overflow-hidden border border-[var(--line)]/60 bg-[#0d121d] flex items-start justify-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Creative Bottom Project Highlights & Highlights Bar */}
          <div className="bg-[#121824] border-t border-[var(--line)] px-4 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0 select-none">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--red)]" />
              <span className="font-mono text-xs text-[var(--text)] font-semibold">
                {project.tagline}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.features.map((feat, fIdx) => (
                <span
                  key={fIdx}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#090d16] border border-[var(--line)] text-emerald-400 font-medium flex items-center gap-1"
                >
                  <span className="text-[9px] text-emerald-500">●</span> {feat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Project Details & Controls - Uniform Min-Height Box */}
        <div className="lg:col-span-5 bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-auto lg:h-[480px] shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[var(--insp)] uppercase tracking-wider bg-[var(--insp)]/10 px-3 py-1 rounded-full inline-block mb-3">
                  {project.category}
                </span>

                <h3 className="font-display font-black text-2xl sm:text-4xl text-[var(--text)] tracking-tight line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--muted)] font-sans leading-relaxed mt-3 min-h-[72px] sm:min-h-[84px] line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 py-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--panel-2)] border border-[var(--line)] text-[var(--text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Links */}
                <div className="flex items-center gap-3 pt-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--red)] text-[var(--on-red)] font-sans font-bold text-xs sm:text-sm hover:bg-[var(--red-2)] transition-colors shadow-md"
                  >
                    <span>Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--line)] bg-[var(--panel-2)] text-[var(--text)] font-sans font-semibold text-xs sm:text-sm hover:bg-[var(--line)] transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls & Slide Dots */}
          <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-[var(--line)]">
            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--panel-2)] text-[var(--text)] flex items-center justify-center hover:bg-[var(--line)] hover:border-[var(--red)] transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextProject}
                className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--panel-2)] text-[var(--text)] flex items-center justify-center hover:bg-[var(--line)] hover:border-[var(--red)] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-1.5">
              {PROJECTS.map((_, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setCurrentIndex(pIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${safeIndex === pIdx
                      ? 'w-6 bg-[var(--red)]'
                      : 'w-2 bg-[var(--line)] hover:bg-[var(--muted)]'
                    }`}
                  aria-label={`Go to slide ${pIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

