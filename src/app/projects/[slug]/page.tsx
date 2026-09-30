import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import OptimizedImage from '@/components/OptimizedImage';
import projectData from '@/data/projects.json';

type Props = { params: Promise<{ slug: string }> };
type ProjectRecord = Omit<typeof projectData['villa-urbano'], 'film'> & {
  film?: typeof projectData['villa-urbano']['film'];
};

const projects: Record<string, ProjectRecord> = projectData;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!Object.hasOwn(projects, slug)) notFound();
  return projects[slug].metadata;
}

export default async function ProjectDetail({ params }: Props) {
  await connection();
  const { slug } = await params;
  if (!Object.hasOwn(projects, slug)) notFound();
  const project = projects[slug];

  return (
    <main id="main" tabIndex={-1}>
      <section className="project-cover" data-tone="light">
        <div className="project-eyebrow micro">
          <Link href={project.category.href}>{project.category.label}</Link>
          <span>{project.number}</span>
        </div>
        <h1 className="split-reveal">{project.title}</h1>
        <div className="project-cover-meta">
          <span>{project.location}</span>
          <span>{project.year}</span>
          <a href="#photographs">{project.exploreLabel}</a>
        </div>
      </section>

      <section className="project-opening" data-tone="dark">
        <OptimizedImage src={project.opening.src} alt={project.opening.alt} className="" fetchPriority="high" decoding="async" sizes="100vw" />
        <span className="micro">{project.opening.caption}</span>
      </section>

      <nav className="project-sections" aria-label="Project sections">
        <span>{project.navigation.title}</span>
        <div>
          {project.navigation.links.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>
      </nav>

      <section id="overview" className="project-story" data-tone="light">
        <span className="micro">{project.story.eyebrow}</span>
        <div className="story-grid">
          <div>
            <h2 className="reveal">{project.story.heading}</h2>
            <p className="project-lead">{project.story.leadIsQuote ? <q>{project.story.lead}</q> : project.story.lead}</p>
            <p>{project.story.body}</p>
            <a className="line-link" href={project.story.original.href}><span>{project.story.original.label}</span></a>
          </div>
          <div className="story-aside">
            <span className="micro">{project.story.asideEyebrow}</span>
            <p>{project.story.aside}</p>
            <a href={project.story.asideLink.href} className="line-link">{project.story.asideLink.label}</a>
          </div>
        </div>
      </section>

      <section id="photographs" className="photo-essay" data-tone="light">
        <div className="essay-heading">
          <span className="micro">02 / A spatial study</span>
          <h2>Seen from<br /><em>within.</em></h2>
          <p>Select a photograph to explore.</p>
        </div>
        <div className="project-gallery">
          {project.gallery.map((photo) => (
            <button className="gallery-image reveal " data-gallery="project" data-photo={photo.photo} data-alt={photo.photoAlt} key={photo.photo}>
              <OptimizedImage src={photo.image.src} alt={photo.image.alt} className="" loading="lazy" decoding="async" sizes="(max-width: 550px) 88vw, 44vw" />
              <span>{photo.label}</span>
            </button>
          ))}
        </div>
      </section>

      {project.film && (
        <section id="film" className="project-film" data-tone="light">
          <div className="film-heading">
            <span className="micro">{project.film.eyebrow}</span>
            <h2>Walk through<br />the <em>space.</em></h2>
            <p>{project.film.credit}</p>
          </div>
          <div className="film-player">
            <button className="film-poster" data-video={project.film.video} aria-label={project.film.ariaLabel}>
              <OptimizedImage src={project.film.image.src} alt={project.film.image.alt} className="" loading="lazy" decoding="async" sizes="92vw" />
              <span className="film-play">{project.film.play}</span>
              <span className="film-label">{project.film.label}</span>
            </button>
          </div>
          <a className="line-link" href={project.film.original.href} target="_blank" rel="noopener">{project.film.original.label}</a>
        </section>
      )}

      <section id="details" className="project-details" data-tone="light">
        <div><span className="micro">Project record</span><h2>The <em>details.</em></h2></div>
        <dl>
          {project.details.map((item, index) => (
            <div key={`${item.label}-${index}`}><dt>{item.label}</dt><dd>{item.value}</dd></div>
          ))}
        </dl>
      </section>

      <section className="project-credit" data-tone="light">
        <Link className="line-link" href={project.credit.href}><span>{project.credit.label}</span></Link>
      </section>

      <Link href={project.next.href} className="next-project" data-tone="dark">
        <OptimizedImage src={project.next.image.src} alt={project.next.image.alt} className="" loading="lazy" decoding="async" sizes="100vw" />
        <div><span className="micro">{project.next.eyebrow}</span><h2>{project.next.title}</h2><span className="micro">{project.next.label}</span></div>
      </Link>
    </main>
  );
}
