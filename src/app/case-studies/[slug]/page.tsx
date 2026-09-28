import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyBlocks from "@/app/components/CaseStudyBlocks";
import StatRow from "@/app/components/StatRow";
import { caseStudies, caseStudyBySlug } from "@/app/data/caseStudies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = caseStudyBySlug((await params).slug);
  if (!study) return {};
  return { title: `${study.title} · ${study.company}`, description: study.summary };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const study = caseStudyBySlug((await params).slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="case-study">
      <header className="container cs-hero intro">
        <Link className="link-back" href="/case-studies">
          Case studies
        </Link>
        <p className="eyebrow">
          {study.company} · {study.timeline}
        </p>
        <h1 className="h1 cs-hero__title">{study.title}</h1>
        <p className="lede">{study.summary}</p>
        {study.status ? <p className="cs-status">{study.status}</p> : null}
        <dl className="cs-facts">
          {study.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="section section--gray section--snug" aria-label="Key results">
        <div className="container">
          <StatRow stats={study.stats} />
        </div>
      </section>

      <div className="container cs-layout">
        <nav className="cs-toc" aria-label="In this case study">
          <p className="cs-toc__title">In this case study</p>
          <ol>
            {study.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="cs-body">
          {study.sections.map((section, sectionIndex) => (
            <section
              className="cs-section reveal"
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <p className="cs-section__label">
                <span>{String(sectionIndex + 1).padStart(2, "0")}</span> {section.label}
              </p>
              <h2 className="h2 cs-section__heading" id={`${section.id}-heading`}>
                {section.heading}
              </h2>
              <div className="prose">
                <CaseStudyBlocks blocks={section.blocks} />
              </div>
            </section>
          ))}
        </div>
      </div>

      <nav className="container cs-next" aria-label="Next case study">
        <Link className="cs-next__link" href={`/case-studies/${next.slug}`}>
          <span className="eyebrow">Next case study · {next.company}</span>
          <span className="h2 cs-next__title">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
