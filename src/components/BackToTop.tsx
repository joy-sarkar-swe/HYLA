'use client';

export default function BackToTop() {
  return (
    <button data-top onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      Back to top
    </button>
  );
}
