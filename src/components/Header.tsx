import Link from 'next/link';

export default function Header() {
  return (
    <header className="masthead">
      <Link className="wordmark" href="/" aria-label="HYLA Architects home">
        HYLA<span>ARCHITECTS</span>
      </Link>
      <Link className="mast-contact" href="/contact/">
        Start a conversation
      </Link>
      <span className="mast-city">Singapore / 01°N</span>
    </header>
  );
}
