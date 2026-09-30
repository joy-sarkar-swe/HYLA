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
  const currentTitle = PATH_TITLES[pathname.replace(/\/$/, '') || '/'] || 'HYLA';

  useEffect(() => {
    let toneTick = false;
    let frame = 0;
    const updateDock = () => {
      toneTick = false;
      const y = window.innerHeight - 50;
      const section = document.elementFromPoint(10, y)?.closest<HTMLElement>('[data-tone]');
      
      setIsLight(section?.dataset.tone === 'dark');
    };

    const onScroll = () => {
      if (!toneTick) {
        toneTick = true;
        frame = requestAnimationFrame(updateDock);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    
    updateDock();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

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
