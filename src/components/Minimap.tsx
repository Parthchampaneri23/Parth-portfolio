'use client';

interface MinimapProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const SECTIONS = [
  { id: 'top', title: 'Hero' },
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'work', title: 'Work' },
  { id: 'stack', title: 'Stack' },
  { id: 'education', title: 'Education' },
  { id: 'contact', title: 'Contact' },
];

export default function Minimap({ activeTab, setActiveTab }: MinimapProps) {
  const scrollTo = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-3 top-[80px] bottom-[40px] w-7 z-40 hidden xl:flex flex-col justify-between opacity-50 hover:opacity-100 transition-opacity duration-300 py-4 group">
      {SECTIONS.map((sec) => {
        const isActive = activeTab === sec.id;
        return (
          <div
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className={`relative flex-1 my-1 rounded bg-[var(--line)] cursor-pointer transition-all ${
              isActive ? 'bg-[var(--insp)] ring-2 ring-[var(--insp)]/40 scale-110' : 'hover:bg-[var(--text)]/40'
            }`}
          >
            {/* Hover tooltip label */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 font-mono text-[11px] font-medium text-[var(--text)] bg-[var(--panel-2)] border border-[var(--line)] px-2.5 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {sec.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
