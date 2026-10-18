'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import FluidCanvas from '@/components/FluidCanvas';
import Navbar from '@/components/Navbar';
import Minimap from '@/components/Minimap';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorkSection from '@/components/WorkSection';
import StackSection from '@/components/StackSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('top');

  useEffect(() => {
    // Scroll spy to update active section tab
    const sections = ['top', 'about', 'experience', 'work', 'stack', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden selection:bg-[var(--red)] selection:text-[var(--on-red)]">
      {/* Initial Loader Splash */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Custom Lens Cursor */}
      <CustomCursor />

      {/* Background Interactive Fluid Mesh */}
      <FluidCanvas />

      {/* Fixed Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Fixed Side Minimap Navigation */}
      <Minimap activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />

      {/* Page Sections */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <StackSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  );
}
