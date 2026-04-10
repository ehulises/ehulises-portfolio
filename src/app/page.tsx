import Link from "next/link";
import FunFactReveal from "./components/FunFactReveal";
import StatShuffle from "./components/StatShuffle";

const heroStats = [
  { value: "60 hrs/mo", label: "Engineering time saved with Microsoft rollout systems" },
  { value: "113%", label: "Follower growth driven through founder-led experimentation" },
  { value: "92%", label: "Verification accuracy after hands-on product iteration" },
  { value: "4,000+", label: "Community members built around a culture-led brand" },
];

const highlightCards = [
  {
    kicker: "Product Systems",
    title: "Ambiguous problems become usable systems.",
    body:
      "I like turning messy workflows, stakeholder complexity, and scattered feedback into something a team can actually operate against.",
    tone: "tinted",
  },
  {
    kicker: "GTM + Analytics",
    title: "Data gets translated into clear action.",
    body:
      "Dashboards, experiments, KPIs, and operating rituals are part of how I help teams move from activity to signal.",
    tone: "sky",
  },
  {
    kicker: "Builder Range",
    title: "I can bridge strategy and execution.",
    body:
      "A SWE background helps me stay close to the product details, speak engineering fluently, and move ideas toward shipping faster.",
    tone: "sage",
  },
];

const featuredStudies = [
  {
    href: "/case-studies/self-serve-rollout-policy",
    company: "Microsoft",
    title: "Self-serve rollout policy tool",
    body:
      "Defined the charter, aligned stakeholders, and designed a policy system that cut manual governance overhead.",
    tags: ["Product Strategy", "Research", "Workflow"],
    metric: "60 hrs/mo saved",
  },
  {
    href: "/case-studies/slad-growth-system",
    company: "SLAD LLC",
    title: "Growth system for a founder-led brand",
    body:
      "Built a feedback loop across analytics, creative testing, and launches to grow traffic, engagement, and community.",
    tags: ["GTM", "Analytics", "Brand"],
    metric: "147% QoQ sessions",
  },
];

const capabilities = [
  {
    kicker: "Product Discovery",
    body: "Interviews, PRDs, personas, journeys, and requirement synthesis that keep teams aligned.",
    tags: ["User Research", "JTBD", "PRDs"],
    tone: "tinted",
  },
  {
    kicker: "Experimentation",
    body: "A/B testing, KPI definition, cohort analysis, and rollout validation with a bias for measurable learning.",
    tags: ["Metrics", "A/B Tests", "Cohorts"],
    tone: "sky",
  },
  {
    kicker: "Analytics",
    body: "SQL, dashboards, and instrumentation that help teams make faster and cleaner decisions.",
    tags: ["SQL", "Power BI", "Tableau", "Python"],
    tone: "sage",
  },
  {
    kicker: "Systems + Build",
    body: "Prototyping, automation, and cross-platform shipping across web, backend, and mobile surfaces.",
    tags: ["React", "FastAPI", "Swift", "C++", "Docker"],
    tone: "sun",
  },
];

const funFacts = [
  { emoji: "🌎", label: "Road Trips", fact: "Drove from Canada to Mexico" },
  { emoji: "🛣️", label: "Long Drives", fact: "Road-tripped through 30+ U.S. states" },
  { emoji: "🏋️", label: "Lifting", fact: "495 lb deadlift and 315 lb bench at 200 lb bodyweight" },
  { emoji: "🛠️", label: "Hands-On", fact: "Worked as a mechanic for 3 years" },
  { emoji: "🎧", label: "Side Hustles", fact: "Started a DJ business in college" },
  { emoji: "🏛️", label: "Random Skill", fact: "Can identify every country flag" },
];

export default function Home() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <div className="breadcrumbs">Portfolio</div>
          <div className="hero">
            <div className="hero-main reveal">
              <div className="kicker">Product Portfolio</div>
              <div className="hero-name">Ehulises Rodriguez, Jr.</div>
              <h1 className="hero-title">Product manager with founder range and a builder&apos;s instinct.</h1>
              <p className="hero-subtitle">
                I turn ambiguous problems into structured systems across product strategy, GTM,
                analytics, and technical execution. I&apos;ve shipped at Microsoft, built growth
                engines as a founder, and stay close enough to the details to help teams move from
                insight to rollout.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="/work">
                  View Work
                </Link>
                <Link className="button" href="/case-studies">
                  Case Studies
                </Link>
                <Link className="button" href="/resume">
                  Resume PDF
                </Link>
              </div>
              <div className="tag-row">
                <span className="tag">Microsoft PM</span>
                <span className="tag">Founder</span>
                <span className="tag">GTM + Analytics</span>
                <span className="tag">SWE Background</span>
              </div>
            </div>
            <div className="hero-side reveal">
              <div className="card tinted hero-card">
                <div className="kicker">Quick Read</div>
                <h2 className="section-title">Breadth that shows up as leverage.</h2>
                <ul className="inline-list list-chevron">
                  <li>Best fit for PM roles that blend product strategy, GTM, analytics, and execution.</li>
                  <li>Comfortable translating between engineering, business goals, and user needs.</li>
                  <li>Strongest in environments that need structure, momentum, and ownership quickly.</li>
                </ul>
              </div>
              <div className="card sky hero-card">
                <div className="kicker">Currently</div>
                <p className="hero-subtitle">
                  Houston, TX. Open to PM (GTM/Analytics) roles, remote work, or relocation.
                  Looking for teams where I can own a problem end to end and help the group move
                  faster.
                </p>
              </div>
            </div>
          </div>

          <div className="proof-strip">
            {heroStats.map((stat) => (
              <div className="proof-chip reveal" key={stat.label}>
                <StatShuffle className="proof-value" value={stat.value} />
                <div className="proof-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-heading reveal">
            <div className="kicker">Why My Background Works</div>
            <h2 className="section-title">
              Enterprise polish, founder urgency, and enough technical range to connect the dots.
            </h2>
            <p className="section-lede">
              The throughline across my work is creating clarity, aligning people quickly, and
              building systems that make teams faster and more effective.
            </p>
          </div>
          <div className="metric-grid">
            {highlightCards.map((item) => (
              <div className={`card ${item.tone} metric-card reveal`} key={item.title}>
                <div className="kicker">{item.kicker}</div>
                <h3 className="section-title">{item.title}</h3>
                <p className="hero-subtitle">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <div className="kicker">Capabilities</div>
            <h2 className="section-title">Product, analytics, and execution range</h2>
            <p className="section-lede">
              Enough breadth to operate cross-functionally, but still grounded in the details that
              make product work credible.
            </p>
          </div>
          <div className="grid-2">
            {capabilities.map((capability) => (
              <div className={`card ${capability.tone} reveal`} key={capability.kicker}>
                <div className="kicker">{capability.kicker}</div>
                <p className="hero-subtitle">{capability.body}</p>
                <div className="tag-row">
                  {capability.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <div className="kicker">Selected Work</div>
            <h2 className="section-title">Featured case studies</h2>
            <p className="section-lede">
              A closer look at how I frame problems, align teams, and turn research, GTM, and
              systems thinking into outcomes.
            </p>
          </div>
          <div className="grid-2">
            {featuredStudies.map((study) => (
              <Link key={study.href} className="case-link reveal" href={study.href}>
                <div className="case-block">
                  <div className="case-meta">
                    <div className="kicker">{study.company}</div>
                    <span className="case-metric">{study.metric}</span>
                  </div>
                  <h3 className="section-title">{study.title}</h3>
                  <p className="hero-subtitle">{study.body}</p>
                  <div className="tag-row">
                    {study.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="case-link-cta">Read case study</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-actions">
            <Link className="button" href="/case-studies">
              Explore all case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card reveal fun-facts-panel">
            <div className="kicker">Me Outside of Work</div>
            <h2 className="section-title">Fun facts about me</h2>
            <p className="hero-subtitle">
              A few quick things that make the rest of the portfolio feel a little more personal.
            </p>
            <FunFactReveal facts={funFacts} />
          </div>
        </div>
      </section>
    </div>
  );
}
