'use client';

interface MinimapProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const SECTIONS = [
  { id: 'top', num: '01', title: 'Hero', color: '#E4311C' },
  { id: 'about', num: '02', title: 'About', color: '#3F6FFF' },
  { id: 'experience', num: '03', title: 'Experience', color: '#3DDC84' },
  { id: 'work', num: '04', title: 'Work', color: '#FFB800' },
  { id: 'stack', num: '05', title: 'Stack', color: '#A06BFF' },
  { id: 'education', num: '06', title: 'Education', color: '#FF6B8B' },
  { id: 'contact', num: '07', title: 'Contact', color: '#00E5FF' },
];

export default function Minimap({ activeTab, setActiveTab }: MinimapProps) {
  const scrollTo = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Section Navigation Minimap"
      className="fixed right-3.5 top-[86px] bottom-[36px] w-9 z-40 hidden xl:flex flex-col justify-between items-center py-3 px-1 rounded-2xl bg-[var(--panel)]/70 backdrop-blur-md border border-[var(--line)] shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[var(--line)] hover:bg-[var(--panel)]/90 group/rail"
    >
      {/* Background track line */}
      <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-[var(--line)] -z-10 rounded-full" />

      {SECTIONS.map((sec) => {
        const isActive = activeTab === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            aria-label={`Jump to ${sec.title} section`}
            className={`group/item relative w-full flex-1 my-1 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)] ${
              isActive
                ? 'bg-[var(--panel-2)] border border-[var(--line)] shadow-md shadow-black/40 scale-105'
                : 'bg-[var(--bg-2)]/50 hover:bg-[var(--panel-2)] border border-transparent hover:border-[var(--line)]'
            }`}
          >
            {/* Colored indicator dot / bar */}
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive ? 'w-2 h-3.5 shadow-sm' : 'w-1.5 h-1.5 opacity-60 group-hover/item:opacity-100 group-hover/item:scale-125'
              }`}
              style={{
                backgroundColor: sec.color,
                boxShadow: isActive ? `0 0 10px ${sec.color}90` : undefined,
              }}
            />

            {/* Section number inside box */}
            <span
              className={`font-mono text-[9px] font-bold mt-1 tracking-tighter transition-colors select-none ${
                isActive ? 'text-[var(--text)]' : 'text-[var(--muted)] group-hover/item:text-[var(--text)]'
              }`}
            >
              {sec.num}
            </span>

            {/* Hover tooltip label matching website theme */}
            <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 flex items-center opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto transition-all duration-200 translate-x-1 group-hover/item:translate-x-0 z-50">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-[var(--text)] bg-[var(--panel)] border border-[var(--line)] px-2.5 py-1.5 rounded-lg shadow-2xl whitespace-nowrap backdrop-blur-md">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: sec.color }}
                />
                <span className="text-[var(--muted)] font-normal">{`// ${sec.num}`}</span>
                <span>{sec.title}</span>
              </div>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
