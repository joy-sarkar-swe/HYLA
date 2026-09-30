
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "d + a – Belimbing Avenue — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light"><span className="micro">05 / Press</span><h1 className="split-reveal">d + a – Belimbing Avenue</h1><p>From HYLA’s publication archive.</p></section><section className="press-detail" data-tone="light"><img src="/assets/portfolio/press-d-belimbing-avenue-hero.webp" alt="d + a – Belimbing Avenue" className="" loading="lazy" decoding="async" /><div><span className="micro">Publication record</span><h2>d + a – Belimbing Avenue</h2><p>This feature is part of the practice’s published archive. Read the article and its full publication details on HYLA’s official website.</p><a className="line-link" href="https://www.hyla.com.sg/press/d-belimbing-avenue/"><span>Read the original feature</span></a><a className="line-link" href="/press/"><span>Back to press</span></a></div></section>
    </main>
  );
}
