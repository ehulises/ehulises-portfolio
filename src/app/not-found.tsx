import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container page-intro intro">
      <p className="eyebrow">404</p>
      <h1 className="h1">This page doesn’t exist.</h1>
      <p className="lede">It may have moved during the redesign. Everything is still reachable from here.</p>
      <div className="actions">
        <Link className="btn btn--primary" href="/">
          Go home
        </Link>
        <Link className="link-arrow" href="/case-studies">
          Case studies
        </Link>
      </div>
    </section>
  );
}
