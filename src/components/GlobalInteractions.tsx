'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reveal: IntersectionObserver | undefined;

    // Reveal animations
    if (!reducedMotion.matches && 'IntersectionObserver' in window) {
      document.body.classList.add('motion-enabled');
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      reveal = observer;
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }

    // Parallax logic
    const planes = Array.from(document.querySelectorAll('.parallax')) as HTMLElement[];
    let ticking = false;
    let frame = 0;
    const updatePlanes = () => {
      ticking = false;
      if (reducedMotion.matches || window.innerWidth < 651) return;
      for (const plane of planes) {
        const parent = plane.parentElement;
        if (!parent) continue;
        const r = parent.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const progress = (window.innerHeight / 2 - r.top - r.height / 2) / window.innerHeight;
        plane.style.transform = `translate3d(0,${Math.max(-40, Math.min(40, progress * 38))}px,0)`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        frame = requestAnimationFrame(updatePlanes);
      }
    };

    if (planes.length) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      updatePlanes();
    }

    // Clean up wipe effect
    const wipe = document.querySelector('.page-wipe');
    if (wipe) {
      wipe.classList.remove('leaving');
    }

    const handleReducedMotion = () => {
      if (reducedMotion.matches) {
        document.body.classList.remove('motion-enabled');
        planes.forEach((p) => {
          p.style.transform = '';
        });
      }
    };
    reducedMotion.addEventListener('change', handleReducedMotion);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reducedMotion.removeEventListener('change', handleReducedMotion);
      cancelAnimationFrame(frame);
      reveal?.disconnect();
      document.body.classList.remove('motion-enabled');
    };
  }, [pathname]);

  return <div className="page-wipe" aria-hidden="true"></div>;
}
