
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trends New Zealand – Lucky Heights — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light"><span className="micro">05 / Press</span><h1 className="split-reveal">Trends New Zealand – Lucky Heights</h1><p>From HYLA’s publication archive.</p></section><section className="press-detail" data-tone="light"><img src="/assets/portfolio/press-trends-new-zealand-lucky-heights-hero.webp" alt="Trends New Zealand – Lucky Heights" className="" loading="lazy" decoding="async" /><div><span className="micro">Publication record</span><h2>Trends New Zealand – Lucky Heights</h2><p>This feature is part of the practice’s published archive. Read the article and its full publication details on HYLA’s official website.</p><a className="line-link" href="https://www.hyla.com.sg/press/trends-new-zealand-lucky-heights/"><span>Read the original feature</span></a><a className="line-link" href="/press/"><span>Back to press</span></a></div></section>
    </main>
  );
}
