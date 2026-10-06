'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface TabItem {
  id: string;
  label: string;
  color: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  tabs: TabItem[];
  activeTab: string;
  onSelectTab: (id: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  tabs,
  activeTab,
  onSelectTab,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 pb-12 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab(tab.id);
                    onClose();
                  }}
                  className={`flex items-center gap-4 text-3xl font-display font-extrabold uppercase tracking-tight transition-colors ${isActive ? 'text-[var(--red)]' : 'text-[var(--text)] hover:text-[var(--red)]'
                    }`}
                >
                  <span className="text-xs font-mono text-[var(--muted)] font-normal">
                    0{idx + 1}
                  </span>
                  <span>{tab.label.replace('// ', '').split('. ')[1]}</span>
                </a>
              );
            })}
          </div>

          <div className="border-t border-[var(--line)] pt-6 flex justify-between items-center text-xs font-mono text-[var(--muted)]">
            <span>PARTH CHAMPANERI</span>
            <span>DAHANU, IN</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
