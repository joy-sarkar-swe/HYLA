import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The practice — HYLA Architects",
  description: "Architecture that considers people, place and the experience of space.",
};

export default function About() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light">
        <span className="micro">02 / The practice</span>
        <h1 className="split-reveal">
          Personal.<br />Considered.<br /><em>Enduring.</em>
        </h1>
        <p>An architectural practice rooted in Singapore.</p>
      </section>
      <section className="about-image" data-tone="light">
        <Image
          src="/assets/villa-court.jpg"
          alt="The courtyard of Villa Urbano"
          className="reveal"
          width={1200}
          height={800}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </section>
      <section className="editorial" data-tone="light">
        <span className="micro">Who we are</span>
        <div>
          <h2 className="reveal">Architecture with<br />a personal <em>point of view.</em></h2>
          <p className="large-copy">
            HYLA is an architectural practice founded and led by Principal Architect Han Loke Kwang.
          </p>
          <p>
            With a strong focus on landed residential projects, the practice considers each client and site individually. Its architecture is shaped by spatial experience, thoughtful details and a close relationship with the tropical environment.
          </p>
          <p>
            The work has received Singapore Institute of Architects Design Awards and URA Architectural Heritage Awards, and has appeared in international publications including the Phaidon Atlas of 21st Century World Architecture.
          </p>
          <Link className="line-link" href="/team/">
            <span>The people behind the practice</span>
          </Link>
        </div>
      </section>
      <section className="recognition" data-tone="light">
        <span className="micro">Recognition</span>
        <div>
          <h3>Singapore Institute of Architects</h3>
          <p>Design Awards</p>
        </div>
        <div>
          <h3>Urban Redevelopment Authority</h3>
          <p>Architectural Heritage Awards</p>
        </div>
        <div>
          <h3>Phaidon</h3>
          <p>Atlas of 21st Century World Architecture</p>
        </div>
        <Link className="line-link" href="/press/">
          <span>Explore the press archive</span>
        </Link>
      </section>
    </main>
  );
}
