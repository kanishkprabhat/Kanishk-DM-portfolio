import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ResumePage } from './components/ResumePage';
import { DwellProjectPage } from './components/DwellProjectPage';
import { ThePetNestProjectPage } from './components/ThePetNestProjectPage';
import { YouTubeProjectPage } from './components/YouTubeProjectPage';

type PageView = 'home' | 'resume' | 'project-dwell' | 'project-petnest' | 'project-youtube';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(() => {
    const hash = window.location.hash;
    if (hash === '#resume') return 'resume';
    if (hash === '#project-dwell') return 'project-dwell';
    if (hash === '#project-petnest') return 'project-petnest';
    if (hash === '#project-youtube') return 'project-youtube';
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#resume') {
        setCurrentPage('resume');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#project-dwell') {
        setCurrentPage('project-dwell');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#project-petnest') {
        setCurrentPage('project-petnest');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#project-youtube') {
        setCurrentPage('project-youtube');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (hash && hash !== '#') {
          setTimeout(() => {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 60);
        }
      }
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '#home';
  };

  const navigateToWork = () => {
    window.location.hash = '#work';
  };

  if (currentPage === 'resume') {
    return <ResumePage onBackToHome={navigateToHome} />;
  }

  if (currentPage === 'project-dwell') {
    return <DwellProjectPage onBack={navigateToWork} />;
  }

  if (currentPage === 'project-petnest') {
    return <ThePetNestProjectPage onBack={navigateToWork} />;
  }

  if (currentPage === 'project-youtube') {
    return <YouTubeProjectPage onBack={navigateToWork} />;
  }

  return (
    <main className="bg-black text-[#E1E0CC] min-h-screen selection:bg-[#DEDBC8] selection:text-black">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />

      {/* Subtle Studio Footer */}
      <footer
        id="contact"
        className="bg-black border-t border-white/5 py-8 px-6 text-center text-xs text-gray-500 font-light"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="tracking-widest uppercase text-[10px]">
            © {new Date().getFullYear()} Kanishk Prabhat. All rights reserved.
          </span>
          <div className="flex items-center gap-6 text-primary/60 text-xs">
            <a
              href="mailto:kanishkprabha31@gmail.com"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Email
            </a>
            <a
              href="tel:+919102395579"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Phone
            </a>
            <a
              href="https://linkedin.com/in/kanishk-prabhat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="#resume"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
