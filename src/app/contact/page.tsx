
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space. An independent HYLA website concept by Zentura.",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light"><span className="micro">06 / Contact</span><h1 className="split-reveal">Your story.<br />Our <em>starting point.</em></h1><p>A new home, a new place, or a conversation about what could be.</p></section><section className="contact-page" data-tone="light"><div className="contact-main"><span className="micro">Project enquiries</span><a href="mailto:admin@hyla.com.sg" className="big-email">admin@hyla.com.sg</a><a href="tel:+6563242488">+65 6324 2488</a><p>Tell us a little about your project,<br />its location and what you have in mind.</p><a href="mailto:admin@hyla.com.sg?subject=Project%20enquiry" className="solid-button">Begin a conversation</a></div><div className="contact-aside"><span className="micro">Find the studio</span><h2>81 Club Street<br />#02-01</h2><p>Singapore 069449</p><a className="line-link" href="https://www.google.com/maps/search/?api=1&query=81+Club+Street+Singapore+069449" target="_blank" rel="noopener">Open in Google Maps</a><div className="contact-careers"><span className="micro">Careers</span><a href="mailto:jobs@hyla.com.sg">jobs@hyla.com.sg</a><p>Résumé and portfolio / Maximum 10 MB</p></div><a className="line-link" href="https://www.instagram.com/hyla_architects/" target="_blank" rel="noopener">Instagram</a></div></section>
    </main>
  );
}
