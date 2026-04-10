import Link from "next/link";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Case Studies</div>
        <div className="page-intro">
          <div className="page-hero reveal">
            <div className="kicker">Case Studies</div>
            <h1 className="hero-title">How I frame problems, align teams, and ship outcomes.</h1>
            <p className="hero-subtitle">
              These are the deeper reads behind the resume bullets - a closer look at product
              thinking, stakeholder alignment, GTM experimentation, and operating systems that
              improve how teams move.
            </p>
          </div>
          <aside className="card page-side-card reveal">
            <div className="kicker">What They Show</div>
            <ul className="inline-list list-chevron">
              <li>Product management and prioritization</li>
              <li>Cross-functional alignment</li>
              <li>GTM and experimentation thinking</li>
              <li>Systems design and operational clarity</li>
            </ul>
          </aside>
        </div>

        <div className="grid-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              className="case-link reveal"
              href={`/case-studies/${study.slug}`}
            >
              <div className="case-block">
                <div className="case-meta">
                  <div className="kicker">
                    {study.company} - {study.timeline}
                  </div>
                  <span className="case-metric">{study.metrics[0]}</span>
                </div>
                <h2 className="section-title">{study.title}</h2>
                <p className="hero-subtitle">{study.summary}</p>
                <div className="tag-row">
                  {study.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="case-link-cta">Read case study</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
