import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "../components/PageIntro";
import {
  earlierRoles,
  microsoftRoles,
  slad,
  wrth,
  wrthProductLines,
  type Position,
} from "../data/experience";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Experience across WRTH, Microsoft, SLAD LLC, and earlier consulting, research, and operator roles.",
};

function Role({ item }: { item: Position }) {
  return (
    <article className="role reveal">
      <div className="role__aside">
        <p className="role__period">{item.period}</p>
        {item.location ? <p className="role__location">{item.location}</p> : null}
      </div>
      <div className="role__body">
        <h3 className="h3">
          {item.role}
          <span className="role__company"> · {item.company}</span>
        </h3>
        {item.summary ? <p className="role__summary">{item.summary}</p> : null}
        <ul className="prose-list">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {item.caseStudy ? (
          <Link className="link-arrow" href={`/case-studies/${item.caseStudy}`}>
            Read the case study
          </Link>
        ) : null}
        {item.letter ? (
          <p className="role__letter">
            {item.letter.note}{" "}
            <a className="link-arrow" href={item.letter.href} target="_blank" rel="noreferrer">
              {item.letter.label}
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Product leadership, engineering depth, and a business I ran myself."
        lede="The throughline is taking an ambiguous problem, defining it precisely, and staying with it through launch. At WRTH today, at Microsoft before that, and as a founder in between."
      />

      <section className="section section--gray" aria-labelledby="wrth-heading">
        <div className="container">
          <div className="company-head reveal">
            <p className="eyebrow">Current</p>
            <h2 className="h2" id="wrth-heading">
              WRTH
            </h2>
          </div>
          <Role item={wrth} />
          <div className="role role--nested reveal">
            <div className="role__aside">
              <p className="role__period">Product lines</p>
            </div>
            <ul className="product-lines product-lines--compact role__body">
              {wrthProductLines.map((line) => (
                <li className="product-line" key={line.name}>
                  <h3 className="h4">{line.name}</h3>
                  <p>{line.body}</p>
                  {line.href ? (
                    <Link className="link-arrow" href={line.href}>
                      Case study<span className="sr-only">: {line.name}</span>
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="microsoft-heading">
        <div className="container">
          <div className="company-head reveal">
            <p className="eyebrow">2022 – 2024</p>
            <h2 className="h2" id="microsoft-heading">
              Microsoft
            </h2>
          </div>
          {microsoftRoles.map((role) => (
            <Role item={role} key={role.period} />
          ))}
        </div>
      </section>

      <section className="section section--gray" aria-labelledby="slad-heading">
        <div className="container">
          <div className="company-head reveal">
            <p className="eyebrow">Founder</p>
            <h2 className="h2" id="slad-heading">
              SLAD LLC
            </h2>
          </div>
          <Role item={slad} />
        </div>
      </section>

      <section className="section" aria-labelledby="earlier-heading">
        <div className="container">
          <div className="company-head reveal">
            <p className="eyebrow">Earlier and alongside</p>
            <h2 className="h2" id="earlier-heading">
              Consulting, research, and operating range.
            </h2>
          </div>
          {earlierRoles.map((role) => (
            <Role item={role} key={role.company} />
          ))}
        </div>
      </section>
    </>
  );
}
