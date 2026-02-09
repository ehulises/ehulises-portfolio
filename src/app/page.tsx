import Link from "next/link";

export default function Home() {
  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <div className="breadcrumbs">Home / Portfolio</div>
          <div className="hero" style={{ marginTop: "28px" }}>
            <div className="hero-main reveal">
              <div className="kicker">Product Portfolio</div>
              <h1 className="hero-title">Product outcomes, built with clarity.</h1>
              <p className="hero-subtitle">
                I’m Ehulises Rodriguez, Jr., a product manager with a builder’s bias for
                clean systems. I’ve shipped workflow tools at Microsoft, scaled a culture-led
                commerce brand, and turn messy input into crisp, measurable results.
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
            </div>
            <div className="hero-side reveal">
              <div className="card">
                <div className="kicker">Currently</div>
                <h3 className="section-title" style={{ marginBottom: "12px" }}>
                  Houston, TX
                </h3>
                <ul className="inline-list">
                  <li>Open to PM (GTM/Analytics) roles with SWE background</li>
                  <li>Experience across product strategy, analytics, and ops</li>
                  <li>Comfortable leading cross-functional teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid-3">
          <div className="card tight reveal">
            <div className="kicker">🚀 Launches</div>
            <h3 className="section-title">60 hrs saved / month</h3>
            <p className="hero-subtitle">
              Built configuration pipelines that reduced engineering effort on rollout tasks.
            </p>
          </div>
          <div className="card tight reveal">
            <div className="kicker">📊 GTM + Analytics</div>
            <h3 className="section-title">38% traffic lift + 25% ROI</h3>
            <p className="hero-subtitle">
              SEO audits, dashboards, and A/B tests across SLAD, Whistleslick, and Mercadotecnia.
            </p>
          </div>
          <div className="card tight reveal">
            <div className="kicker">🤝 Community</div>
            <h3 className="section-title">4,000+ members</h3>
            <p className="hero-subtitle">
              Built a culture-led apparel community rooted in Houston + Mexican heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Selected Work</div>
          <h2 className="section-title">Featured case studies</h2>
          <div className="grid-2">
            <div className="card reveal">
              <h3 className="section-title">Microsoft · Self-serve rollout policy</h3>
              <p className="hero-subtitle">
                Defined a product charter, aligned stakeholders, and designed a rollout policy tool
                to streamline update governance across teams.
              </p>
              <div className="tag-row">
                <span className="tag">Product Strategy</span>
                <span className="tag">Research</span>
                <span className="tag">Ops</span>
              </div>
            </div>
            <div className="card reveal">
              <h3 className="section-title">SLAD LLC · Growth system</h3>
              <p className="hero-subtitle">
                Built dashboards and experimentation loops to drive CTR lift and quarter-over-quarter
                traffic spikes for a direct-to-consumer brand.
              </p>
              <div className="tag-row">
                <span className="tag">GTM</span>
                <span className="tag">Analytics</span>
                <span className="tag">Brand</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Link className="button" href="/case-studies">
              Explore all case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="kicker">Capabilities</div>
          <h2 className="section-title">Product + analytics matrix</h2>
          <div className="grid-2">
            <div className="card reveal">
              <div className="kicker">Product Discovery</div>
              <p className="hero-subtitle">
                Interviews, PRDs, personas, journey mapping, requirement synthesis.
              </p>
              <div className="tag-row">
                <span className="tag">User Research</span>
                <span className="tag">JTBD</span>
                <span className="tag">PRDs</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">Experimentation</div>
              <p className="hero-subtitle">
                A/B testing, KPI definition, cohort analysis, rollout validation.
              </p>
              <div className="tag-row">
                <span className="tag">Metrics</span>
                <span className="tag">A/B Tests</span>
                <span className="tag">Cohorts</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">Analytics</div>
              <p className="hero-subtitle">
                SQL + dashboards for decision making and performance tracking.
              </p>
              <div className="tag-row">
                <span className="tag">SQL</span>
                <span className="tag">Power BI</span>
                <span className="tag">Tableau</span>
                <span className="tag">Python</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">Systems + Build</div>
              <p className="hero-subtitle">
                Prototyping, automation, and shipping across web + mobile.
              </p>
              <div className="tag-row">
                <span className="tag">React</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Swift</span>
                <span className="tag">C++</span>
                <span className="tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="kicker">Fun Facts</div>
          <div className="card reveal">
            <div className="fun-facts">
              <span className="fact-chip">🌍 Drove from Canada to Mexico</span>
              <span className="fact-chip">🛣️ 30+ U.S. states (40‑hour max drive)</span>
              <span className="fact-chip">🏋🏽 495 lb deadlift, 315 lb bench @ 200 lb</span>
              <span className="fact-chip">🛠️ Mechanic for 3 years</span>
              <span className="fact-chip">🎧 Started a DJ business in college</span>
              <span className="fact-chip">🏛️ Can identify every country flag</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="callout warm reveal">
            <div className="kicker">Now</div>
            <h3 className="section-title" style={{ marginBottom: "8px" }}>
              What I’m optimizing for
            </h3>
            <p className="hero-subtitle">
              Roles that blend product strategy with GTM execution, where I can build structured
              systems, ship iteratively, and partner deeply with engineering teams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
