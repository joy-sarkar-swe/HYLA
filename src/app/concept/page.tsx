
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About this concept — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light"><span className="micro">Z / About this concept</span><h1 className="split-reveal">A considered<br /><em>first conversation.</em></h1><p>An independent website concept by Zentura.</p></section><section className="concept-page" data-tone="light"><h2>Architecture, experienced online.</h2><p>This speculative redesign was inspired by the craft and spatial thinking in HYLA’s architecture. It explores a digital experience with photography, project storytelling and a complete portfolio archive.</p><p>It has not been commissioned or endorsed by HYLA Architects. Project names, facts, credited teams and photographs are drawn from the practice’s official website. Architecture and photography remain the work of their respective creators. Photography credits are included on each project page.</p><p>Short quoted extracts on some project pages are identified as excerpts from the original project notes. Publication pages link to their original articles rather than reproducing magazine content.</p><h3>The next step would be listening.</h3><p>A commissioned version would begin with conversations about HYLA’s clients, goals, people and stories. The visual direction, project content and visitor journeys would be developed with the practice.</p><p>Design references: the immersive project presentation of Mersi Architecture, the full-screen imagery and floating navigation of Fluid Glass, and the editorial hierarchy of Studio DADO. All HYLA visual content in this prototype is drawn from HYLA’s own work.</p><p>Contact links open your email or telephone application. No enquiry is submitted or stored by this prototype.</p><a className="line-link" href="https://zentura.agency/" target="_blank" rel="noopener">Meet Zentura</a><a className="line-link" href="https://www.hyla.com.sg/" target="_blank" rel="noopener">HYLA’s official website</a></section>
    </main>
  );
}
