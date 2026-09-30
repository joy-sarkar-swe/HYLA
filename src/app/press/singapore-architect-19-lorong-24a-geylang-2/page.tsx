
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Singapore Architect #273 – 19 Lorong 24A Geylang — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light"><span className="micro">05 / Press</span><h1 className="split-reveal">Singapore Architect #273 – 19 Lorong 24A Geylang</h1><p>From HYLA’s publication archive.</p></section><section className="press-detail" data-tone="light"><img src="/assets/portfolio/press-singapore-architect-19-lorong-24a-geylang-2-hero.webp" alt="Singapore Architect #273 – 19 Lorong 24A Geylang" className="" loading="lazy" decoding="async" /><div><span className="micro">Publication record</span><h2>Singapore Architect #273 – 19 Lorong 24A Geylang</h2><p>This feature is part of the practice’s published archive. Read the article and its full publication details on HYLA’s official website.</p><a className="line-link" href="https://www.hyla.com.sg/press/singapore-architect-19-lorong-24a-geylang-2/"><span>Read the original feature</span></a><a className="line-link" href="/press/"><span>Back to press</span></a></div></section>
    </main>
  );
}
