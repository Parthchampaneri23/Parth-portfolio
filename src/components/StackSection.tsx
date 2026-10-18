'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Cloud, Cpu, Database } from 'lucide-react';
import InteractiveHeading from './InteractiveHeading';

const CATEGORIES = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE'];

const SKILLS = [
  // Row 1 (Kept exactly as requested)
  { name: 'Next.js', category: 'FRONTEND', icon: Code2, level: '95%', color: '#000000' },
  { name: 'React.js', category: 'FRONTEND', icon: Code2, level: '95%', color: '#61DAFB' },
  { name: 'TypeScript', category: 'FRONTEND', icon: Code2, level: '90%', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'FRONTEND', icon: Code2, level: '95%', color: '#38BDF8' },
  { name: 'Node.js', category: 'BACKEND', icon: Server, level: '90%', color: '#339933' },
  { name: 'Express.js', category: 'BACKEND', icon: Server, level: '88%', color: '#000000' },

  // Row 2 (MERN Developer Skills)
  { name: 'MongoDB', category: 'DATABASE', icon: Database, level: '90%', color: '#47A248' },
  { name: 'REST APIs', category: 'BACKEND', icon: Server, level: '92%', color: '#FF6C37' },
  { name: 'Redux Toolkit', category: 'FRONTEND', icon: Code2, level: '88%', color: '#764ABC' },
  { name: 'HTML5 & CSS3', category: 'FRONTEND', icon: Code2, level: '95%', color: '#E34F26' },
  { name: 'Git & GitHub', category: 'TOOLS', icon: Cloud, level: '92%', color: '#F05032' },
  { name: 'Postman', category: 'BACKEND', icon: Server, level: '90%', color: '#FF6C37' },

  // Row 3 (MERN Developer & TOOLS)
  { name: 'Mongoose ODM', category: 'DATABASE', icon: Database, level: '88%', color: '#880000' },
  { name: 'JWT Security', category: 'BACKEND', icon: Server, level: '90%', color: '#000000' },
  { name: 'Axios & Fetch', category: 'FRONTEND', icon: Code2, level: '92%', color: '#5A29E4' },
];

export default function StackSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === 'ALL' || skill.category === activeCategory
  );

  return (
    <section id="stack" className="relative py-16 px-4 sm:px-8 lg:px-16 border-t border-[var(--line)]">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-widest block mb-2">
          {"// 05. TECH STACK"}
        </span>
        <InteractiveHeading
          text="TOOLS & MATRIX."
          className="text-5xl sm:text-7xl lg:text-8xl"
        />
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 ${isActive
                ? 'bg-[var(--red)] text-[var(--on-red)] border-[var(--red)] shadow-md shadow-[var(--red)]/20 scale-105'
                : 'bg-[var(--panel-2)] text-[var(--muted)] border-[var(--line)] hover:text-[var(--text)]'
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skill Cards Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[var(--panel)] border border-[var(--line)] rounded-xl p-4 flex flex-col justify-between h-36 shadow-lg hover:border-[var(--insp)]/50 transition-colors overflow-hidden"
              >
                {/* Header: Icon & category tag */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[var(--panel-2)] border border-[var(--line)] flex items-center justify-center text-[var(--text)] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[var(--muted)] font-semibold uppercase">
                    {skill.level}
                  </span>
                </div>

                {/* Bottom: Skill Title & Level bar */}
                <div>
                  <b className="font-sans font-bold text-sm sm:text-base text-[var(--text)] block truncate">
                    {skill.name}
                  </b>
                  <span className="font-mono text-[10px] text-[var(--muted)] block mt-0.5">
                    {skill.category}
                  </span>

                  {/* Level Bar */}
                  <div className="w-full h-1 bg-[var(--line)] rounded-full mt-2.5 overflow-hidden">
                    <div
                      className="h-full bg-[var(--red)] rounded-full group-hover:bg-[var(--insp)] transition-colors"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
