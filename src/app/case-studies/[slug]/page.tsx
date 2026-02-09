import CaseStudyClient from "@/app/components/CaseStudyClient";
import { caseStudies } from "@/app/data/caseStudies";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: PageProps) {
  return <CaseStudyClient slug={params.slug} />;
}
