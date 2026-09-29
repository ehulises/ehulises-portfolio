import Link from "next/link";
import CaseStudyList from "./components/CaseStudyList";
import StatRow from "./components/StatRow";
import { caseStudies } from "./data/caseStudies";
import { microsoftRoles, slad, wrth, wrthProductLines } from "./data/experience";

const proof = [
  { value: "0 → 1", label: "WRTH Store/POS, from problem definition to first live transaction" },
  { value: "60 hrs/mo", label: "Manual engineering work removed by a self-serve rollout product at Microsoft" },
  { value: "147%", label: "Quarter-over-quarter growth in website sessions at SLAD" },
  { value: "76% → 92%", label: "Document-verification accuracy after user testing at Microsoft" },
];

const wrthStats = [
  {
    value: "2",
    label:
      "Commerce systems taken end to end: Store/POS through its first live transaction, and Event commerce through a successful terminal payment in development",
  },
  {
    value: "5",
    label: "Product lines aligned across founders, engineering, and GTM around shared launch priorities",
  },
  {
    value: "Cleared",
    label:
      "Tap-to-authenticate commerce, cleared for launch through WRTH’s NFC authentication architecture and patent non-infringement analysis",
  },
];

const selectedSlugs = [
  "wrth-merchant-commerce-platform",
  "wrth-event-commerce",
  "self-serve-rollout-policy",
  "slad-growth-system",
];

const principles = [
  {
    title: "Define",
    body: "Turn ambiguous goals into problem statements, personas, product requirements, and acceptance criteria a team can build and test against.",
  },
  {
    title: "Decide",
    body: "Make scope, workflow, monetization, fee, and launch-readiness calls, with the technical tradeoffs visible rather than hidden behind a handoff.",
  },
  {
    title: "Deliver",
    body: "Stay through tickets, QA plans, release decisions, and the stabilization work after launch, when real users find what testing missed.",
  },
];

const stack = [
  {
    label: "Product and platform",
    items:
      "Next.js, React, TypeScript, PostgreSQL, Supabase, Stripe, Stripe Connect, Stripe Terminal, Edge Functions, row-level security, multi-tenant authorization, REST APIs, migrations, CI/CD, Netlify",
  },
  {
    label: "Product practice",
    items:
      "Discovery, user research, PRDs, roadmaps, OKRs, user journeys, acceptance criteria, QA plans, experimentation, A/B testing, launch readiness",
  },
  {
    label: "Data and other builds",
    items: "SQL, Python, Power BI, Tableau, FastAPI, Swift, Kotlin, C++, Java, PyTorch, Docker",
  },
];

const funFacts = [
  { label: "Road trips", fact: "Drove from Canada to Mexico." },
  { label: "Long drives", fact: "Road-tripped through 30+ U.S. states." },
  { label: "Lifting", fact: "495 lb deadlift and 315 lb bench at 200 lb bodyweight." },
  { label: "Hands-on", fact: "Worked as a mechanic for 3 years." },
  { label: "Side hustles", fact: "Started a DJ business in college." },
  { label: "Random skill", fact: "Can identify every country’s flag." },
];

export default function Home() {
  const selected = selectedSlugs
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study) => study !== undefined);

  return (
    <>
      <section className="hero container intro" aria-labelledby="hero-title">
        <p className="hero__name">Ehulises Rodriguez, Jr.</p>
        <h1 className="display" id="hero-title">
          Product leader with technical depth.{" "}
          <span className="display__muted">I take systems from ambiguity to production.</span>
        </h1>
        <p className="lede hero__lede">
          Lead Engineering Manager at WRTH, where I took merchant commerce from problem definition
          to its first live transaction. Previously Product Manager at Microsoft, founder of SLAD,
          and a Northwestern Computer Science graduate.
        </p>
        <div className="actions">
          <Link className="btn btn--primary" href="/case-studies/wrth-merchant-commerce-platform">
            Read the WRTH case study
          </Link>
          <Link className="btn btn--secondary" href="/work">
            View experience
          </Link>
          <Link className="link-arrow" href="/resume">
            Resume
          </Link>
        </div>
      </section>

      <section className="container section--flush" aria-label="Selected results">
        <StatRow stats={proof} className="reveal" />
      </section>

      <section className="section section--gray" aria-labelledby="wrth-title">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">
                Now · {wrth.company} · {wrth.period}
              </p>
              <h2 className="h2" id="wrth-title">
                Building a merchant and event commerce platform, end to end.
              </h2>
            </div>
            <div className="split__body">
              <p className="lede">
                WRTH is a startup consolidating merchant and event commerce into one platform. As{" "}
                {wrth.role}, I work across product definition, engineering, payments, inventory,
                AI/data, security, QA, and release execution.
              </p>
              <Link className="link-arrow" href="/case-studies/wrth-merchant-commerce-platform">
                How the Store/POS went from 0 to 1
              </Link>
            </div>
          </div>

          <StatRow stats={wrthStats} className="stat-row--compact stat-row--wide reveal" />

          <ul className="product-lines">
            {wrthProductLines.map((line) => (
              <li className="product-line reveal" key={line.name}>
                <h3 className="h3">{line.name}</h3>
                <p>{line.body}</p>
                {line.href ? (
                  <Link className="link-arrow" href={line.href}>
                    Case study
                    <span className="sr-only">: {line.name}</span>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="selected-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Selected work</p>
            <h2 className="h2" id="selected-title">
              Problems, decisions, and what shipped.
            </h2>
          </div>
          <CaseStudyList studies={selected} />
          <div className="section-foot">
            <Link className="link-arrow" href="/case-studies">
              All case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--gray" aria-labelledby="microsoft-title">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">Microsoft · 2022 – 2024</p>
              <h2 className="h2" id="microsoft-title">
                Three summers. Three product problems.
              </h2>
            </div>
            <p className="lede split__body">
              Two Product Manager roles and an engineering-plus-product role, each owning a problem
              from research and specification through delivery.
            </p>
          </div>
          <ol className="columns">
            {microsoftRoles.map((role) => (
              <li className="column reveal" key={role.period}>
                <p className="column__meta">{role.period}</p>
                <h3 className="h3">{role.summary}</h3>
                <p className="column__role">{role.role}</p>
                <p>{role.headline}</p>
                {role.caseStudy ? (
                  <Link className="link-arrow" href={`/case-studies/${role.caseStudy}`}>
                    Case study
                    <span className="sr-only">: {role.summary}</span>
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="slad-title">
        <div className="container">
          <div className="split reveal">
            <div>
              <p className="eyebrow">
                {slad.company} · Founder · 2023 – 2026
              </p>
              <h2 className="h2" id="slad-title">
                Running a real business, not just shipping software.
              </h2>
            </div>
            <div className="split__body">
              <p className="lede">{slad.summary}</p>
              <Link className="link-arrow" href={`/case-studies/${slad.caseStudy}`}>
                The growth system behind it
              </Link>
            </div>
          </div>
          <StatRow
            className="stat-row--compact reveal"
            stats={[
              { value: "807K+", label: "Impressions" },
              { value: "113%", label: "Instagram follower growth" },
              { value: "147%", label: "QoQ growth in website sessions" },
            ]}
          />
        </div>
      </section>

      <section className="section section--gray" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">How I work</p>
            <h2 className="h2" id="how-title">
              Product judgment, with an engineer’s grasp of how it gets built.
            </h2>
          </div>
          <ol className="columns">
            {principles.map((item, index) => (
              <li className="column reveal" key={item.title}>
                <p className="column__meta">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="h3">{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
          <dl className="stack reveal">
            {stack.map((group) => (
              <div className="stack__row" key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="personal-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Outside of work</p>
            <h2 className="h2" id="personal-title">
              A few things that don’t fit on a resume.
            </h2>
          </div>
          <dl className="facts">
            {funFacts.map((item) => (
              <div className="facts__item reveal" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.fact}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
