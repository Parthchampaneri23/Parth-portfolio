'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TABS = [
  { id: 'top', label: '// 01. hero', color: '#E4311C' },
  { id: 'about', label: '// 02. about', color: '#3F6FFF' },
  { id: 'experience', label: '// 03. experience', color: '#3DDC84' },
  { id: 'work', label: '// 04. work', color: '#FFB800' },
  { id: 'stack', label: '// 05. stack', color: '#A06BFF' },
  { id: 'education', label: '// 06. education', color: '#FF6B8B' },
  { id: 'contact', label: '// 07. contact', color: '#00E5FF' },
];

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Force document root to dark theme
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] bg-[var(--bar)] backdrop-blur-xl border-b border-[var(--line)] transition-all duration-300">
        <div className="h-[58px] flex items-center gap-3 px-3 sm:px-6">
          {/* Brand logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('top');
            }}
            className="flex items-center gap-2.5 pr-3 sm:pr-4 border-r border-[var(--line)] no-underline group"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--red)] text-[var(--on-red)] flex items-center justify-center font-display font-black text-sm tracking-tighter group-hover:scale-105 transition-transform">
              PC
            </div>
            <span className="font-sans font-semibold text-sm tracking-tight hidden md:inline-block">
              Parth Champaneri
            </span>
          </a>

          {/* Desktop tabs */}
          <nav className="hidden lg:flex items-center h-full overflow-x-auto no-scrollbar">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(tab.id);
                  }}
                  className={`relative flex items-center gap-2 px-3.5 h-full text-xs font-mono font-medium whitespace-nowrap border-r border-[var(--line)] transition-colors hover:text-[var(--text)] hover:bg-[var(--line)]/30 ${isActive ? 'text-[var(--text)] font-semibold' : 'text-[var(--muted)]'
                    }`}
                >
                  <span
                    className="w-2 h-2 rounded-sm flex-none"
                    style={{ backgroundColor: tab.color }}
                  />
                  {tab.label}

                  {/* Active tab red indicator bottom line */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--red)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right section: Clock, CTA button */}
          <div className="ml-auto flex items-center gap-3">
            {/* Live Clock */}
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-[var(--muted)] px-2 py-1 rounded bg-[var(--line)]/20 border border-[var(--line)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>DHU</span>
              <b className="text-[var(--text)] font-semibold">{time || '12:00:00 PM'}</b>
            </div>

            {/* Let's talk CTA pill */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-[var(--red)] hover:bg-[var(--red-2)] text-[var(--on-red)] font-sans font-semibold text-xs tracking-tight transition-all duration-300 hover:scale-[1.03] shadow-md shadow-[var(--red)]/20"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[var(--line)] bg-[var(--panel-2)] text-[var(--text)] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        tabs={TABS}
        activeTab={activeTab}
        onSelectTab={scrollToSection}
      />
    </>
  );
}
