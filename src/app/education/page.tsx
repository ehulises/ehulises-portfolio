import Link from "next/link";

const academicBackground = [
  {
    school: "Northwestern University",
    credential: "B.S. Computer Science",
    details: "Evanston, IL · 2025 · GPA 3.6/4",
    tags: ["Systems", "AI/ML", "Engineering"],
    tone: "tinted",
  },
  {
    school: "Houston Community College",
    credential: "A.S. Science",
    details: "Houston, TX · 2021 · Highest Honors · GPA 3.99/4",
    tags: ["STEM", "Honors"],
    tone: "sky",
  },
  {
    school: "North Houston Early College HS",
    credential: "Dual Enrollment",
    details: "Houston, TX · 2021 · Rank 1 · GPA 4.76/4",
    tags: ["Leadership", "Valedictorian"],
    tone: "sage",
  },
];

const leadershipRoles = [
  {
    org: "Society of Professional Hispanic Engineers",
    title: "Secretary, Mentor",
    meta: "Sep 2021 - Jun 2025",
    bullets: [
      "Led mentorship for 8 underrepresented students into internships at top firms.",
      "Iterated on resume workshops and interview prep based on mentee feedback.",
    ],
  },
  {
    org: "Phi Gamma Delta",
    title: "President, Treasurer",
    meta: "Mar 2022 - Jun 2025",
    bullets: [
      "Doubled chapter revenue by redesigning budget strategy and fundraising.",
      "Led inclusive community building across 30+ represented backgrounds.",
    ],
  },
];

const notableMentions = [
  "Valedictorian; highest GPA in high school history.",
  "Highest SAT and ACT scores in school history.",
  "Most selective university admission in high school history.",
  "First-generation college student.",
  "Completed an associate's degree before high school diploma.",
];

export default function Education() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Education</div>
        <div className="page-intro">
          <div className="page-hero reveal">
            <div className="kicker">Education & Leadership</div>
            <h1 className="hero-title">A strong technical foundation with leadership and builder energy around it.</h1>
            <p className="hero-subtitle">
              The education story matters less as a list of credentials and more as evidence of range:
              technical depth, leadership, and a consistent pattern of taking ownership early.
            </p>
          </div>
          <aside className="card page-side-card reveal">
            <div className="kicker">Notable Mentions</div>
            <h2 className="section-title">Milestones that shaped the pace behind the work.</h2>
            <ul className="inline-list list-chevron">
              {notableMentions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="section-tight">
          <div className="section-heading reveal">
            <div className="kicker">Academic Foundation</div>
            <h2 className="section-title">Credentials that support the product and builder side of the story.</h2>
          </div>
          <div className="grid-3">
            {academicBackground.map((item) => (
              <div className={`card ${item.tone} reveal`} key={item.school}>
                <div className="kicker">{item.school}</div>
                <h3 className="section-title">{item.credential}</h3>
                <p className="card-meta academic-meta">{item.details}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-tight">
          <div className="section-heading reveal">
            <div className="kicker">Leadership</div>
            <h2 className="section-title">Evidence that I lead, mentor, and build trust beyond classwork.</h2>
          </div>
          <div className="grid-2">
            {leadershipRoles.map((role, index) => (
              <div
                className={`card ${index === 0 ? "tinted" : "sky"} reveal`}
                key={`${role.org}-${role.title}`}
              >
                <div className="kicker">{role.org}</div>
                <h3 className="section-title">{role.title}</h3>
                <div className="work-meta">{role.meta}</div>
                <ul className="inline-list list-chevron">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="section-tight">
          <div className="grid-2">
            <div className="callout sage reveal">
              <div className="kicker">Why It Matters</div>
              <h2 className="section-title">The throughline is ownership early.</h2>
              <p className="hero-subtitle">
                The combination of technical coursework, leadership roles, and self-directed builds
                is what shaped the product style you see across the rest of the portfolio: high
                agency, fast learning, and comfort operating across disciplines.
              </p>
            </div>
            <div className="card reveal">
              <div className="kicker">Leadership Pattern</div>
              <p className="hero-subtitle">
                The story here is not just academic performance. It is a pattern of doing the work,
                leading peers, and taking on responsibility earlier than expected.
              </p>
            </div>
          </div>
        </div>

        <div className="section-tight">
          <div className="callout reveal">
            <div className="kicker">Projects</div>
            <h2 className="section-title">Technical builds live on their own page now.</h2>
            <p className="hero-subtitle">
              I split projects away from education so the build work reads as a broader part of my
              profile, not just classwork. That page now includes personal, academic, and
              self-directed product experiments.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
