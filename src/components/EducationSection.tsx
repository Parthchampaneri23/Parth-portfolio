'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';
import InteractiveHeading from './InteractiveHeading';

const EDUCATION_ITEMS = [
  {
    type: 'MASTER DEGREE',
    title: 'M.SC IN INFORMATION TECHNOLOGY',
    institution: 'N.B.MEHTA COLLEGE OF SCIENCE AND COMMERCE,',
    location: 'DAHANU, MAHARASHTRA',
    period: '2024 - 2026',
    grade: 'GPA: 9.24 / 10.0',
    icon: GraduationCap,
    highlights: [
      'Specialized in Web Application Development, Database Systems & Software Engineering',
      'Hands-on experience in building full-stack MERN applications and RESTful APIs',
      'Focus on Modern Web Technologies, Core Data Structures & System Architecture',
    ],
  },

  {
    type: 'BACHLOR OF SCIENCE',
    title: 'B.SC IN INFORMATION TECHNOLOGY',
    institution: 'N.B.MEHTA COLLEGE OF SCIENCE AND COMMERCE,',
    location: 'DAHANU, MAHARASHTRA',
    period: '2021 - 2024',
    grade: 'GPA: 8.76 / 10.0',
    icon: GraduationCap,
    highlights: [
      'Foundational coursework in Computer Programming, Relational Databases & Web Technologies',
      'Explored core programming concepts, database fundamentals & modern web development trends',
      'Earned high marks in core subjects, setting the stage for advanced studies in Information Technology',
    ],
  }
];
/* CERTIFICATIONS */
export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-8 lg:px-16 border-t border-[var(--line)]">
      {/* Section Header */}
      <div className="mb-16">
        <span className="font-mono text-xs font-semibold text-[var(--red)] uppercase tracking-widest block mb-2">
          {"// 06. ACADEMICS & CERTIFICATIONS"}
        </span>
        <InteractiveHeading
          text="EDUCATION & DECK."
          className="text-5xl sm:text-7xl lg:text-8xl"
        />
      </div>

      {/* Cards Deck Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {EDUCATION_ITEMS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-[var(--red)]/40 transition-colors group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-[var(--red)]/10 text-[var(--red)] border border-[var(--red)]/20">
                    {item.type}
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-2xl text-[var(--text)] tracking-tight leading-snug group-hover:text-[var(--red)] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans font-semibold text-sm text-[var(--muted)] mt-1">
                  {item.institution}
                </p>

                <div className="mt-4 inline-block font-mono text-xs font-bold text-[var(--insp)] bg-[var(--insp)]/10 px-3 py-1 rounded border border-[var(--insp)]/20">
                  {item.grade}
                </div>

                {/* Bullet Highlights */}
                <ul className="mt-6 space-y-2 text-xs sm:text-sm text-[var(--muted)] font-sans">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[var(--red)] font-mono font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Icon */}
              <div className="mt-8 pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                <span>{item.location}</span>
                <IconComp className="w-5 h-5 text-[var(--text)] group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
