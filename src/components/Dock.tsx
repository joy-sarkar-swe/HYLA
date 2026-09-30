'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const PATH_TITLES: Record<string, string> = {
  '/': 'Home',
  '/about': 'The practice',
  '/projects': 'Projects',
  '/approach': 'Approach',
  '/team': 'People',
  '/press': 'Press',
  '/contact': 'Contact',
  '/concept': 'Concept',
};

export default function Dock() {
  const [isLight, setIsLight] = useState(false);
  const pathname = usePathname();
  const currentTitle = PATH_TITLES[pathname] || 'HYLA';

  useEffect(() => {
    let toneTick = false;
    const updateDock = () => {
      toneTick = false;
      const toneSections = Array.from(document.querySelectorAll('[data-tone]'));
      const y = window.innerHeight - 50;
      const section = toneSections.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= y && r.bottom >= y;
      }) as HTMLElement | undefined;
      
      setIsLight(section?.dataset.tone === 'dark');
    };

    window.addEventListener('scroll', () => {
      if (!toneTick) {
        toneTick = true;
        requestAnimationFrame(updateDock);
      }
    }, { passive: true });
    
    // Slight delay to ensure elements are mounted
    setTimeout(updateDock, 100);
  }, [pathname]); // also re-run when route changes

  const openMenu = () => {
    document.dispatchEvent(new CustomEvent('open-menu'));
  };

  return (
    <div className={`dock ${isLight ? 'light-dock' : ''}`}>
      <Link className="dock-mark" href="/" aria-label="Home">H</Link>
      <span>{currentTitle}</span>
      <button
        className="menu-trigger"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Open navigation menu"
        onClick={openMenu}
      >
        <i></i><i></i>
      </button>
    </div>
  );
}
