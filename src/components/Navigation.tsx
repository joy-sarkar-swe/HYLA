'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    
    const handleOpen = () => {
      dialog?.showModal();
      document.body.classList.add('menu-open');
    };

    const handleNativeClose = () => {
      document.body.classList.remove('menu-open');
      dialog?.classList.remove('closing');
      document.querySelector('.menu-trigger')?.setAttribute('aria-expanded', 'false');
    };

    document.addEventListener('open-menu', handleOpen);
    dialog?.addEventListener('close', handleNativeClose);
    
    return () => {
      document.removeEventListener('open-menu', handleOpen);
      dialog?.removeEventListener('close', handleNativeClose);
    };
  }, []);

  const closeMenu = () => {
    dialogRef.current?.classList.add('closing');
    setTimeout(() => {
      dialogRef.current?.close();
    }, 180);
  };

  return (
    <dialog id="navigation" className="navigation" ref={dialogRef}>
      <div className="menu-head">
        <Link className="wordmark" href="/" onClick={closeMenu}>
          HYLA<span>ARCHITECTS</span>
        </Link>
        <button className="menu-close" aria-label="Close menu" onClick={closeMenu}>
          Close <span>×</span>
        </button>
      </div>
      <div className="menu-body">
        <nav aria-label="Main navigation">
          <Link href="/projects/" onClick={closeMenu}>
            <span className="menu-number">01</span>
            <span className="menu-word">Projects</span>
          </Link>
          <Link href="/about/" onClick={closeMenu}>
            <span className="menu-number">02</span>
            <span className="menu-word">Practice</span>
          </Link>
          <Link href="/approach/" onClick={closeMenu}>
            <span className="menu-number">03</span>
            <span className="menu-word">Approach</span>
          </Link>
          <Link href="/team/" onClick={closeMenu}>
            <span className="menu-number">04</span>
            <span className="menu-word">People</span>
          </Link>
          <Link href="/press/" onClick={closeMenu}>
            <span className="menu-number">05</span>
            <span className="menu-word">Press</span>
          </Link>
          <Link href="/contact/" onClick={closeMenu}>
            <span className="menu-number">06</span>
            <span className="menu-word">Contact</span>
          </Link>
        </nav>
        <aside>
          <Image
            src="/assets/villa-court.jpg"
            alt="Villa Urbano courtyard"
            width={320}
            height={220}
            unoptimized
          />
          <p className="micro">Design / Detail / Deliver</p>
          <a href="mailto:admin@hyla.com.sg">admin@hyla.com.sg</a>
          <p>81 Club Street, #02-01<br />Singapore 069449</p>
        </aside>
      </div>
      <div className="menu-footer">
        <a href="https://www.instagram.com/hyla_architects/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <span>Independent concept by Zentura</span>
      </div>
    </dialog>
  );
}
