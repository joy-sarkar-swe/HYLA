'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer data-tone="dark">
      <div className="footer-top">
        <span className="micro">A place to begin</span>
        <Link href="/contact/" className="footer-invite">
          Let’s make<br />room for <em>possibility.</em>
        </Link>
      </div>
      <div className="footer-grid">
        <Link className="wordmark" href="/">HYLA<span>ARCHITECTS</span></Link>
        <div>
          <a href="mailto:admin@hyla.com.sg">admin@hyla.com.sg</a>
          <a href="tel:+6563242488">+65 6324 2488</a>
        </div>
        <div>
          <p>81 Club Street, #02-01<br />Singapore 069449</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/projects/">Projects</Link>
          <Link href="/about/">Practice</Link>
          <Link href="/approach/">Approach</Link>
          <Link href="/team/">People</Link>
          <Link href="/press/">Press</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          Independent website concept by{' '}
          <a href="https://zentura.agency/" target="_blank" rel="noopener noreferrer">
            Zentura
          </a>
          .<br />Not commissioned by or affiliated with HYLA Architects.
        </p>
        <Link href="/concept/">About this concept & credits</Link>
        <button data-top onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top
        </button>
      </div>
      <div className="footer-big" aria-hidden="true">HYLA</div>
    </footer>
  );
}
