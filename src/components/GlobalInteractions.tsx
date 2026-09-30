'use client';

import { useEffect } from 'react';

export default function GlobalInteractions() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Reveal animations
    if (!reducedMotion.matches && 'IntersectionObserver' in window) {
      document.body.classList.add('motion-enabled');
      const reveal = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              reveal.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));
    }

    // Parallax logic
    const planes = Array.from(document.querySelectorAll('.parallax')) as HTMLElement[];
    let ticking = false;
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
        requestAnimationFrame(updatePlanes);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updatePlanes();

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
      reducedMotion.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  return <div className="page-wipe" aria-hidden="true"></div>;
}
