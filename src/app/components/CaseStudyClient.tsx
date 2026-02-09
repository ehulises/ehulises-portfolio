"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { caseStudyBySlug } from "@/app/data/caseStudies";

type Props = {
  slug?: string;
};

export default function CaseStudyClient({ slug }: Props) {
  const pathname = usePathname();
  const fallbackSlug = pathname.split("/").filter(Boolean).pop();
  const resolvedSlug = slug || fallbackSlug;
  const study = caseStudyBySlug(resolvedSlug);

  if (!study) {
    return (
      <section className="section fade-in">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/case-studies">Case Studies</Link> / Not found
          </div>
          <div className="section-tight">
            <div className="card reveal">
              <div className="kicker">Missing case study</div>
              <h1 className="section-title">This case study isn’t available yet.</h1>
              <p className="hero-subtitle">
                If you reached this page from a link, I can add the detail page on request.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/case-studies">
                  Back to case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> / <Link href="/case-studies">Case Studies</Link> / {study.title}
        </div>

        <div className="case-detail">
          <div className="case-hero reveal">
            <div className="kicker">
              {study.company} · {study.timeline}
            </div>
            <h1 className="hero-title">{study.title}</h1>
            <p className="hero-subtitle">{study.summary}</p>
            <div className="tag-row">
              {study.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="case-stats reveal">
            <div className="kicker">Impact Metrics</div>
            <ul className="inline-list">
              {study.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="case-facts reveal">
          {study.quickFacts.map((fact) => (
            <div className="case-fact" key={fact.label}>
              <div className="kicker">{fact.label}</div>
              <div className="hero-subtitle">{fact.value}</div>
            </div>
          ))}
        </div>

        <div className="case-body">
          {study.sections.map((section) => (
            <div className="case-section reveal" key={section.heading}>
              <h2 className="section-title">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p className="hero-subtitle" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="section-tight">
          <Link className="button" href="/case-studies">
            Back to case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
