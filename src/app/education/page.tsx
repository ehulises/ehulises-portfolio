import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Education",
  description: "B.S. Computer Science, Northwestern University, plus leadership and milestones.",
};

const degrees = [
  {
    school: "Northwestern University",
    credential: "B.S. Computer Science",
    details: "Evanston, IL · 2025 · GPA 3.6/4",
  },
  {
    school: "Houston Community College",
    credential: "A.S. Science",
    details: "Houston, TX · 2021 · Highest Honors · GPA 3.99/4",
  },
  {
    school: "North Houston Early College High School",
    credential: "Dual enrollment",
    details: "Houston, TX · 2021 · Rank 1 · GPA 4.76/4",
  },
];

const leadership = [
  {
    org: "Society of Professional Hispanic Engineers",
    title: "Secretary, Mentor",
    period: "Sep 2021 – Jun 2025",
    bullets: [
      "Mentored 8 underrepresented students through resumes, interview prep, and applications, leading to internships at Microsoft, Google, Goldman Sachs, and Bloomberg.",
      "Iterated on resume workshops and interview prep based on mentee feedback.",
    ],
  },
  {
    org: "Phi Gamma Delta",
    title: "President, Treasurer",
    period: "Mar 2022 – Jun 2025",
    bullets: [
      "Led a 50+ member chapter, doubling revenue within a year by redesigning budget strategy and fundraising while stewarding a six-figure annual budget.",
      "Led inclusive community building across 30+ represented backgrounds.",
    ],
  },
];

const milestones = [
  "First-generation college student.",
  "Completed an associate’s degree before my high school diploma.",
  "Valedictorian, with the highest GPA in my high school’s history.",
  "Highest SAT and ACT scores in school history.",
  "Most selective university admission in school history.",
];

export default function Education() {
  return (
    <>
      <PageIntro
        eyebrow="Education"
        title="A Computer Science foundation, and a habit of taking ownership early."
        lede="The credentials matter less than the pattern: technical depth, leadership, and taking on responsibility earlier than expected."
      />

      <section className="section section--gray" aria-labelledby="degrees-heading">
        <div className="container">
          <div className="company-head reveal">
            <p className="eyebrow">Academic foundation</p>
            <h2 className="h2" id="degrees-heading">
              Degrees
            </h2>
          </div>
          <ul className="columns">
            {degrees.map((degree) => (
              <li className="column reveal" key={degree.school}>
                <p className="column__meta">{degree.school}</p>
                <h3 className="h3">{degree.credential}</h3>
                <p>{degree.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="leadership-heading">
        <div className="container">
          <div className="company-head reveal">
            <p className="eyebrow">Beyond the classroom</p>
            <h2 className="h2" id="leadership-heading">
              Leadership
            </h2>
          </div>
          {leadership.map((role) => (
            <article className="role reveal" key={role.org}>
              <div className="role__aside">
                <p className="role__period">{role.period}</p>
              </div>
              <div className="role__body">
                <h3 className="h3">
                  {role.title}
                  <span className="role__company"> · {role.org}</span>
                </h3>
                <ul className="prose-list">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--gray" aria-labelledby="milestones-heading">
        <div className="container split">
          <div>
            <p className="eyebrow">Milestones</p>
            <h2 className="h2" id="milestones-heading">
              What shaped the pace.
            </h2>
          </div>
          <ul className="prose-list prose-list--large split__body">
            {milestones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
