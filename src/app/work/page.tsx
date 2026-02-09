export default function Work() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Home / Work</div>
        <h1 className="section-title" style={{ marginTop: "24px" }}>
          Work Experience
        </h1>
        <p className="hero-subtitle" style={{ marginBottom: "32px" }}>
          A track record of shipping product systems, aligning stakeholders, and driving measurable
          growth across enterprise and founder-led environments.
        </p>

        <div className="kicker">Selected Experience</div>
        <div className="card reveal" style={{ padding: "8px 24px", marginTop: "12px" }}>
          <div className="work-row">
            <div>
              <div className="kicker">SLAD LLC</div>
              <div className="section-title">Founder</div>
              <div className="work-meta">Houston, TX · Jun 2023 – Jan 2026</div>
            </div>
            <ul className="inline-list">
              <li>Launched culture-led apparel collections and grew a 4,000+ community.</li>
              <li>Built Power BI dashboards to track engagement and site traffic, driving a 21% CTR lift.</li>
              <li>Optimized targeting and A/B tested creatives, resulting in 113% follower growth and 807k+ impressions.</li>
            </ul>
          </div>

          <div className="work-row">
            <div>
              <div className="kicker">Microsoft</div>
              <div className="section-title">Product Manager</div>
              <div className="work-meta">Redmond, WA · Jun 2024 – Aug 2024</div>
            </div>
            <ul className="inline-list">
              <li>Defined product charter for a self-serve rollout policy tool and secured stakeholder buy-in.</li>
              <li>Delivered configuration pipelines that cut 60 engineering hours per month.</li>
              <li>Synthesized 600+ requests and 40+ interviews into personas, journeys, and prioritized requirements.</li>
            </ul>
          </div>

          <div className="work-row">
            <div>
              <div className="kicker">Microsoft</div>
              <div className="section-title">Product Manager</div>
              <div className="work-meta">Redmond, WA · Jun 2023 – Aug 2023</div>
            </div>
            <ul className="inline-list">
              <li>Designed a scheduling tool for system-freeze management with clear success criteria.</li>
              <li>Led weekly program updates, risk logs, and action items to keep teams aligned.</li>
              <li>Produced a 30-page product spec and partnered with design, data, and engineering on delivery.</li>
            </ul>
          </div>

          <div className="work-row">
            <div>
              <div className="kicker">Microsoft</div>
              <div className="section-title">New Technologist (SWE + PM)</div>
              <div className="work-meta">Redmond, WA · Jun 2022 – Aug 2022</div>
            </div>
            <ul className="inline-list">
              <li>Built React UI and Python pipelines for automated document verification.</li>
              <li>Led cross-functional development across React, Swift, Python, and Java.</li>
              <li>Improved verification accuracy from 76% to 92% through testing and iteration.</li>
            </ul>
          </div>

          <div className="work-row">
            <div>
              <div className="kicker">Whistleslick Press</div>
              <div className="section-title">Marketing Strategy Consultant</div>
              <div className="work-meta">Evanston, IL · Jan 2022 – Apr 2022</div>
            </div>
            <div>
              <ul className="inline-list">
                <li>Conducted market and channel analysis to shape digital growth strategy.</li>
                <li>Designed experiments for content cadence, positioning, and engagement tactics.</li>
                <li>Presented a roadmap to leadership and earned recognition for execution.</li>
              </ul>
              <div className="callout warm reveal" style={{ marginTop: "16px" }}>
                <div className="kicker">Recommendation Letter</div>
                <p className="hero-subtitle">
                  Feedback from Whistleslick leadership on strategy delivery and execution.
                </p>
                <a
                  className="button"
                  href="/recommendation-letter.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Letter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-tight">
          <div className="kicker">Additional Experience</div>
          <div className="card reveal" style={{ padding: "8px 24px", marginTop: "12px" }}>
            <div className="work-row">
              <div>
                <div className="kicker">Mercadotecnia USA</div>
                <div className="section-title">Marketing & Analytics Consultant · Founder</div>
                <div className="work-meta">Houston, TX · Jun 2022 – Jun 2023</div>
              </div>
              <ul className="inline-list">
                <li>
                  Conducted SEO audits and keyword performance analyses, increasing average client
                  site traffic by 38% within three months.
                </li>
                <li>
                  Built dashboards for CTR, bounce rate, and lead conversions; guided budget
                  reallocation and improved ROI by 25% on average.
                </li>
                <li>
                  Ran A/B tests on ad copy, social creatives, and landing pages, boosting campaign
                  effectiveness and reducing CAC.
                </li>
              </ul>
            </div>
            <div className="work-row">
              <div>
                <div className="kicker">MD Anderson Cancer Center</div>
                <div className="section-title">Cancer Research Intern</div>
                <div className="work-meta">Houston, TX · Jun 2020 – Aug 2021</div>
              </div>
              <ul className="inline-list">
                <li>
                  Explored combination therapies between oncolytic viruses and CAR‑T cells under
                  the mentorship of Dr. Katy Rezvani.
                </li>
                <li>
                  Synthesized findings on immune cell exhaustion and tumor resistance; co‑authored
                  a scientific poster and proposed clinical directions for combination
                  immunotherapy.
                </li>
                <li>
                  Analyzed 100+ hour cytotoxicity time‑series using GFP normalization and viability
                  staining; identified a 3× increase in sustained tumor‑killing versus standalone
                  treatments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
