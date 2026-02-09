import Link from "next/link";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Home / Case Studies</div>
        <h1 className="section-title" style={{ marginTop: "24px" }}>
          Case Studies
        </h1>
        <p className="hero-subtitle" style={{ marginBottom: "32px" }}>
          Deep dives into how I frame problems, align teams, and ship outcomes across product, GTM,
          and engineering.
        </p>

        <div className="grid-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              className="case-link reveal"
              href={`/case-studies/${study.slug}`}
            >
              <div className="case-block">
                <div className="kicker">
                  {study.company} · {study.timeline}
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
                <div style={{ marginTop: "18px" }}>
                  <span className="case-link-cta">Read case study →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
