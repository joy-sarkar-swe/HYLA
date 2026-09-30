import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import OptimizedImage from '@/components/OptimizedImage';
import pressData from '@/data/press.json';

type Props = { params: Promise<{ slug: string }> };
type PressRecord = typeof pressData['starhub'];

const press: Record<string, PressRecord> = pressData;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!Object.hasOwn(press, slug)) notFound();
  return press[slug].metadata;
}

export default async function PressDetail({ params }: Props) {
  await connection();
  const { slug } = await params;
  if (!Object.hasOwn(press, slug)) notFound();
  const item = press[slug];

  return (
    <main id="main" tabIndex={-1}>
      <section className="page-intro" data-tone="light">
        <span className="micro">{item.eyebrow}</span>
        <h1 className="split-reveal">{item.title}</h1>
        <p>{item.intro}</p>
      </section>
      <section className="press-detail" data-tone="light">
        <OptimizedImage src={item.image.src} alt={item.image.alt} className="" loading="lazy" decoding="async" sizes="100vw" />
        <div>
          <span className="micro">{item.label}</span>
          <h2>{item.detailTitle}</h2>
          <p>{item.body}</p>
          <a className="line-link" href={item.original.href}><span>{item.original.label}</span></a>
          <Link className="line-link" href={item.back.href}><span>{item.back.label}</span></Link>
        </div>
      </section>
    </main>
  );
}
