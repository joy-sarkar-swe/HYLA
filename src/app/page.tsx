import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="home-hero" data-tone="dark">
        <div className="hero-photo parallax">
          <Image
            src="/assets/villa-detail.jpg"
            alt="Villa Urbano living space by HYLA Architects"
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className="hero-shade"></div>
        <div className="hero-kicker micro">
          <span>Architecture / Singapore</span>
          <span>Design. Detail. Deliver.</span>
        </div>
        <div className="hero-title">
          <h1>
            <span className="hero-line">Architecture,</span>
            <span className="hero-line"><em>felt.</em></span>
          </h1>
          <p>
            Spaces that bring people,<br />place and everyday life together.
          </p>
        </div>
        <div className="hero-foot">
          <Link href="/projects/villa-urbano/">
            <span className="micro">In focus / 01</span>
            <strong>Villa Urbano</strong>
            <span>Coronation Walk · 2023</span>
          </Link>
          <a className="hero-scroll" href="#introduction">
            Scroll to explore <i></i>
          </a>
          <span className="micro">An independent Zentura concept</span>
        </div>
      </section>
      <section id="introduction" className="manifesto" data-tone="light">
        <span className="micro">The way we see it</span>
        <h2 className="reveal">
          A home is more than<br />a place. It’s a way<br />of <em>living.</em>
        </h2>
        <div className="manifesto-bottom">
          <p>
            We consider the spaces between.<br />Between inside and outside.<br />Between
            an idea and a life lived.
          </p>
          <Link className="line-link" href="/about/">
            <span>Discover the practice</span>
          </Link>
        </div>
      </section>
      <section className="project-stage" data-tone="dark">
        <div className="stage-image parallax">
          <Image
            src="/assets/portfolio/outside-hero.webp"
            alt="Outside In"
            fill
            sizes="100vw"
          />
        </div>
        <div className="stage-shade"></div>
        <Link href="/projects/outside/" className="stage-story">
          <span className="micro">Selected work / 01</span>
          <h2 className="reveal">Outside In</h2>
          <div className="stage-bottom">
            <span>Residential<br />Singapore</span>
            <span className="line-link">Explore the project</span>
            <span>2022</span>
          </div>
        </Link>
      </section>
      <section className="project-stage" data-tone="dark">
        <div className="stage-image parallax">
          <Image
            src="/assets/portfolio/sanctuary-shell-hero.webp"
            alt="Sanctuary Shell"
            fill
            sizes="100vw"
          />
        </div>
        <div className="stage-shade"></div>
        <Link href="/projects/sanctuary-shell/" className="stage-story">
          <span className="micro">Selected work / 02</span>
          <h2 className="reveal">Sanctuary Shell</h2>
          <div className="stage-bottom">
            <span>Residential<br />Singapore</span>
            <span className="line-link">Explore the project</span>
            <span>2022</span>
          </div>
        </Link>
      </section>
      <section className="project-stage" data-tone="dark">
        <div className="stage-image parallax">
          <Image
            src="/assets/portfolio/30-bencoolen-hero.webp"
            alt="30 Bencoolen"
            fill
            sizes="100vw"
          />
        </div>
        <div className="stage-shade"></div>
        <Link href="/projects/30-bencoolen/" className="stage-story">
          <span className="micro">Selected work / 03</span>
          <h2 className="reveal">30 Bencoolen</h2>
          <div className="stage-bottom">
            <span>Commercial<br />Singapore</span>
            <span className="line-link">Explore the project</span>
            <span>2017</span>
          </div>
        </Link>
      </section>
      <section className="collection-summary" data-tone="light">
        <span className="micro">The complete portfolio</span>
        <h2 className="reveal">
          Many perspectives.<br />One considered <em>approach.</em>
        </h2>
        <div className="category-links">
          <Link href="/projects/residential/">
            <span>Residential</span><sup>82</sup>
          </Link>
          <Link href="/projects/commercial/">
            <span>Commercial</span><sup>09</sup>
          </Link>
        </div>
      </section>
    </main>
  );
}
