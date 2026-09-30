import OptimizedImage from '@/components/OptimizedImage';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our approach — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light"><span className="micro">03 / Our approach</span><h1 className="split-reveal">Clarity, at<br />every <em>scale.</em></h1><p>A way of thinking, from the first conversation to the last detail.</p></section><section className="approach-visual" data-tone="dark"><OptimizedImage src="/assets/villa-detail.jpg" alt="Villa Urbano double-height living space" className="" loading="lazy" decoding="async" sizes="100vw" /><p className="micro">Light / Material / Experience</p></section><section className="approach-intro" data-tone="light"><span className="micro">The starting point</span><h2 className="reveal">The people.<br />The place.<br />The <em>possibilities.</em></h2><p>HYLA’s design approach begins with the client’s requirements and the context of the site. The ambition is architecture that is direct in expression, thoughtful in experience and responsive to the tropical climate.</p></section><section className="approach-steps" data-tone="light"><article className="reveal"><span className="micro">01 / Design</span><h3>Start with understanding.</h3><p>Consider the client’s life and the conditions of the site together. The design grows from that relationship.</p></article><article className="reveal"><span className="micro">02 / Detail</span><h3>Resolve the experience.</h3><p>Study the structure, the materials and how each space will be inhabited. Small decisions give the whole its character.</p></article><article className="reveal"><span className="micro">03 / Deliver</span><h3>Carry the idea through.</h3><p>Keep the architectural intention legible in the built work, with care for the details that bring it to life.</p></article></section>
    </main>
  );
}
