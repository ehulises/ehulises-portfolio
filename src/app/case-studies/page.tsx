import type { Metadata } from "next";
import CaseStudyList from "../components/CaseStudyList";
import PageIntro from "../components/PageIntro";
import { caseStudies } from "../data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How I frame problems, make product decisions, and ship: WRTH, Microsoft, and SLAD case studies.",
};

const groups = [
  { id: "wrth", label: "WRTH", note: "Current work", company: "WRTH" },
  { id: "microsoft", label: "Microsoft", note: "2022 – 2024", company: "Microsoft" },
  { id: "slad", label: "SLAD LLC", note: "Founder", company: "SLAD LLC" },
];

export default function CaseStudies() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="The thinking behind the outcomes."
        lede="Each one covers the problem, the people it served, the decisions and tradeoffs I made, how it shipped, and what I learned."
      />
      {groups.map((group, index) => (
        <section
          key={group.id}
          className={index % 2 === 0 ? "section section--gray" : "section"}
          aria-labelledby={`${group.id}-heading`}
        >
          <div className="container">
            <div className="company-head reveal">
              <p className="eyebrow">{group.note}</p>
              <h2 className="h2" id={`${group.id}-heading`}>
                {group.label}
              </h2>
            </div>
            <CaseStudyList studies={caseStudies.filter((study) => study.company === group.company)} />
          </div>
        </section>
      ))}
    </>
  );
}
