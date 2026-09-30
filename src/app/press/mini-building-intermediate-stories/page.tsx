
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mini Building – Intermediate Stories — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light"><span className="micro">05 / Press</span><h1 className="split-reveal">Mini Building – Intermediate Stories</h1><p>From HYLA’s publication archive.</p></section><section className="press-detail" data-tone="light"><img src="/assets/portfolio/press-mini-building-intermediate-stories-hero.webp" alt="Mini Building – Intermediate Stories" className="" loading="lazy" decoding="async" /><div><span className="micro">Publication record</span><h2>Mini Building – Intermediate Stories</h2><p>This feature is part of the practice’s published archive. Read the article and its full publication details on HYLA’s official website.</p><a className="line-link" href="https://www.hyla.com.sg/press/mini-building-intermediate-stories/"><span>Read the original feature</span></a><a className="line-link" href="/press/"><span>Back to press</span></a></div></section>
    </main>
  );
}
