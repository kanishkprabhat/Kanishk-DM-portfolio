import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '#resume' },
];

export const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleClick = (href: string, e: React.MouseEvent) => {
    if (window.location.hash === href) {
      e.preventDefault();
      if (href === '#resume') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
      <nav
        aria-label="Main Navigation"
        className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 border-b border-x border-white/10 shadow-2xl backdrop-blur-md"
      >
        {NAV_ITEMS.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isActive = currentHash === item.href;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(item.href, e)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-[10px] sm:text-xs md:text-sm font-normal tracking-wide transition-colors duration-200 whitespace-nowrap cursor-pointer relative py-0.5"
              style={{
                color: isHovered || isActive ? '#E1E0CC' : 'rgba(225, 224, 204, 0.75)',
              }}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary/70 rounded-full" />
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
