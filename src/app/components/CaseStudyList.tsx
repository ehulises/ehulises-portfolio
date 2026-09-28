import Link from "next/link";
import type { CaseStudy } from "../data/caseStudies";

type Props = {
  studies: CaseStudy[];
  headingLevel?: "h2" | "h3";
};

export default function CaseStudyList({ studies, headingLevel: Heading = "h3" }: Props) {
  return (
    <ul className="study-list">
      {studies.map((study) => (
        <li key={study.slug} className="reveal">
          <Link className="study-row" href={`/case-studies/${study.slug}`}>
            <span className="study-row__meta">
              {study.company} · {study.timeline}
            </span>
            <Heading className="study-row__title">{study.title}</Heading>
            <span className="study-row__summary">{study.summary}</span>
            <span className="study-row__outcome">{study.outcome}</span>
            <span className="study-row__cta" aria-hidden="true">
              Read case study
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
