'use client';

import { motion } from 'framer-motion';
import { GitBranch, GitCommit, Calendar, Building2 } from 'lucide-react';

import InteractiveHeading from './InteractiveHeading';

const EXPERIENCES = [
  {
    hash: 'a7f3b91',
    branch: 'feat/mern-fullstack',
    branchColor: '#3F6FFF',
    role: 'MERN Stack Developer',
    company: 'RND TECHNOSOFT',
    period: 'MAY 2026 - PRESENT',
    location: 'Vapi / Gujarat, India',
    bullets: [
      'Built scalable full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.',
      'Designed responsive UI components, integrated RESTful APIs, and implemented secure JWT authentication and role-based access control.',
      'Optimized database queries and API response times for enhanced web performance.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
  },
  {
    hash: 'e4d1c82',
    branch: 'feat/web-apps',
    branchColor: '#3DDC84',
    role: 'Mern Stack Developer Intern',
    company: 'CODEC TECHNOLOGIES',
    period: 'FEB 2025 - MAY 2025',
    location: 'PUNE / Maharashtra, India',
    bullets: [
      'Developed interactive front-end interfaces with React and Tailwind CSS, connecting seamlessly to Node.js backend services.',
      'Created CRUD operations, database models in MongoDB, and integrated third-party APIs.',
      'Participated in code reviews, bug fixes, and performance optimization for web applications.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Git'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 px-4 sm:px-8 lg:px-16 border-t border-[var(--line)]">
      {/* Section Header */}
      <div className="mb-8">
        <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-widest block mb-2">
          {"// 03. EXPERIENCE"}
        </span>
        <InteractiveHeading
          text="WORK & INTERNSHIPS."
          className="text-5xl sm:text-7xl lg:text-8xl"
        />
      </div>

      {/* Timeline Entries */}
      <div className="relative pl-6 sm:pl-10 space-y-12 border-l-2 border-[var(--line)]">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-xl hover:border-[var(--insp)]/40 transition-colors"
          >
            {/* Git node timeline dot */}
            <div
              className="absolute -left-[31px] sm:-left-[47px] top-8 w-5 h-5 rounded-full border-4 border-[var(--bg)] shadow-md"
              style={{ backgroundColor: exp.branchColor }}
            />

            {/* Header info bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--line)]">
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-xs font-semibold px-2.5 py-1 rounded border"
                  style={{
                    backgroundColor: `${exp.branchColor}15`,
                    borderColor: `${exp.branchColor}40`,
                    color: exp.branchColor,
                  }}
                >
                  <GitCommit className="w-3.5 h-3.5 inline mr-1" />
                  {exp.branch}
                </span>
                <span className="font-mono text-xs text-[var(--muted)]">
                  hash: <b className="text-[var(--text)] font-semibold">{exp.hash}</b>
                </span>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs text-[var(--muted)]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--red)]" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Role & Company */}
            <div className="mt-4">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--text)] tracking-tight">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[var(--insp)] mt-1">
                <Building2 className="w-4 h-4" />
                <span>{exp.company}</span>
                <span className="text-[var(--muted)] font-normal text-xs ml-2">
                  {"// " + exp.location}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-[var(--muted)] font-sans">
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="text-[var(--red)] font-mono font-bold mt-0.5">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="mt-6 pt-4 border-t border-[var(--line)] flex flex-wrap gap-2">
              {exp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-xs px-3 py-1 rounded-md bg-[var(--panel-2)] border border-[var(--line)] text-[var(--text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
