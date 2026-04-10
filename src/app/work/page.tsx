import Link from "next/link";
import StatShuffle from "../components/StatShuffle";

type ExperienceItem = {
  company: string;
  role: string;
  badge: string;
  meta: string;
  bullets: string[];
  tags: string[];
  note?: {
    title: string;
    body: string;
    href: string;
    label: string;
  };
};

const headlineStats = [
  { value: "Microsoft", label: "2 PM internships plus a builder PM rotation" },
  { value: "Founder", label: "Grew a culture-led brand and 4,000+ community" },
  { value: "25%", label: "Average ROI improvement across consulting work" },
  { value: "92%", label: "Accuracy lift on a shipped verification system" },
];

const selectedExperience: ExperienceItem[] = [
  {
    company: "SLAD LLC",
    role: "Founder",
    badge: "Entrepreneurial",
    meta: "Houston, TX - Jun 2023 to Jan 2026",
    bullets: [
      "Launched culture-led apparel collections and grew a 4,000+ community.",
      "Built Power BI dashboards to track engagement and site traffic, driving a 21% CTR lift.",
      "Optimized targeting and A/B tested creatives, resulting in 113% follower growth and 807k+ impressions.",
    ],
    tags: ["Community", "Growth", "Dashboards"],
  },
  {
    company: "Microsoft",
    role: "Product Manager",
    badge: "Technology",
    meta: "Redmond, WA - Jun 2024 to Aug 2024",
    bullets: [
      "Defined the product charter for a self-serve rollout policy tool and secured stakeholder buy-in.",
      "Delivered configuration pipelines that cut 60 engineering hours per month.",
      "Synthesized 600+ requests and 40+ interviews into personas, journeys, and prioritized requirements.",
    ],
    tags: ["Workflow Systems", "Research", "Stakeholder Alignment"],
  },
  {
    company: "Microsoft",
    role: "Product Manager",
    badge: "Technology",
    meta: "Redmond, WA - Jun 2023 to Aug 2023",
    bullets: [
      "Designed a scheduling tool for system-freeze management with clear success criteria.",
      "Led weekly program updates, risk logs, and action items to keep teams aligned.",
      "Produced a 30-page product spec and partnered with design, data, and engineering on delivery.",
    ],
    tags: ["Program Mgmt", "Risk", "Specs"],
  },
  {
    company: "Microsoft",
    role: "New Technologist (SWE + PM)",
    badge: "Technology",
    meta: "Redmond, WA - Jun 2022 to Aug 2022",
    bullets: [
      "Built React UI and Python pipelines for automated document verification.",
      "Led cross-functional development across React, Swift, Python, and Java.",
      "Improved verification accuracy from 76% to 92% through testing and iteration.",
    ],
    tags: ["React", "Python", "Mobile"],
  },
  {
    company: "Whistleslick Press",
    role: "Marketing Strategy Consultant",
    badge: "Consulting",
    meta: "Evanston, IL - Jan 2022 to Apr 2022",
    bullets: [
      "Conducted market and channel analysis to shape digital growth strategy.",
      "Designed experiments for content cadence, positioning, and engagement tactics.",
      "Presented a roadmap to leadership and earned recognition for execution.",
    ],
    tags: ["Market Analysis", "Experiments", "Leadership"],
    note: {
      title: "Recommendation Letter",
      body: "Feedback from Whistleslick leadership on strategy delivery and execution.",
      href: "/recommendation-letter.pdf",
      label: "View Letter",
    },
  },
];

const additionalExperience: ExperienceItem[] = [
  {
    company: "Mercadotecnia USA",
    role: "Marketing & Analytics Consultant / Founder",
    badge: "Consulting",
    meta: "Houston, TX - Jun 2022 to Jun 2023",
    bullets: [
      "Conducted SEO audits and keyword performance analyses, increasing average client site traffic by 38% within three months.",
      "Built dashboards for CTR, bounce rate, and lead conversions; guided budget reallocation and improved ROI by 25% on average.",
      "Ran A/B tests on ad copy, social creatives, and landing pages, boosting campaign effectiveness and reducing CAC.",
    ],
    tags: ["SEO", "Dashboards", "A/B Testing"],
  },
  {
    company: "MD Anderson Cancer Center",
    role: "Cancer Research Intern",
    badge: "Medicine",
    meta: "Houston, TX - Jun 2020 to Aug 2021",
    bullets: [
      "Explored combination therapies between oncolytic viruses and CAR-T cells under the mentorship of Dr. Katy Rezvani.",
      "Synthesized findings on immune cell exhaustion and tumor resistance; co-authored a scientific poster and proposed clinical directions for combination immunotherapy.",
      "Analyzed 100+ hour cytotoxicity time-series using GFP normalization and viability staining; identified a 3x increase in sustained tumor-killing versus standalone treatments.",
    ],
    tags: ["Research", "Data Analysis", "Scientific Communication"],
  },
  {
    company: "Independent Real Estate",
    role: "Wholesale Real Estate Operator",
    badge: "Real Estate",
    meta: "Houston, TX - Jul 2021 to Jun 2023",
    bullets: [
      "Sourced and qualified seller leads, tracked outreach pipelines, and focused on off-market opportunities across Houston submarkets.",
      "Prepared purchase and assignment contracts, analyzed comps and neighborhood pricing, and modeled deal margins before moving forward.",
      "Worked negotiations with sellers and buyers, keeping terms, follow-ups, and handoffs organized through each stage of the deal cycle.",
    ],
    tags: ["Lead Generation", "Market Analysis", "Negotiation"],
  },
  {
    company: "Independent Trading",
    role: "Equities & Options Trader",
    badge: "Markets",
    meta: "Houston, TX",
    bullets: [
      "Built daily watchlists around price action, volume, catalysts, and key support and resistance levels to identify high-conviction setups.",
      "Kept a trade journal and review process to study entries, exits, position sizing, and repeated execution mistakes over time.",
      "Used risk rules, scenario planning, and market context to stay disciplined under volatility and improve decision quality.",
    ],
    tags: ["Technical Analysis", "Risk Management", "Trade Journal"],
  },
];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="experience-card reveal">
      <div>
        <div className="experience-company">
          <div className="kicker">{item.company}</div>
          <span className="experience-badge">{item.badge}</span>
        </div>
        <h2 className="experience-title">{item.role}</h2>
        <div className="work-meta">{item.meta}</div>
        <div className="tag-row">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="experience-body">
        <ul className="inline-list list-chevron">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {item.note ? (
          <div className="callout warm">
            <div className="kicker">{item.note.title}</div>
            <p className="hero-subtitle">{item.note.body}</p>
            <div className="hero-actions">
              <a className="button" href={item.note.href} target="_blank" rel="noreferrer">
                {item.note.label}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Work</div>
        <div className="page-intro">
          <div className="page-hero reveal">
            <div className="kicker">Work Experience</div>
            <h1 className="hero-title">A track record of shipping systems, driving growth, and owning outcomes.</h1>
            <p className="hero-subtitle">
              Across enterprise product, founder-led GTM, and technical builds, the common thread is
              creating clarity, aligning people quickly, and moving metrics in the right direction.
            </p>
          </div>
          <aside className="card page-side-card reveal">
            <div className="kicker">Sector Range</div>
            <h2 className="section-title">The throughline spans more than one industry.</h2>
            <ul className="inline-list list-chevron">
              <li>Technology and product systems</li>
              <li>Entrepreneurial and founder-led work</li>
              <li>Consulting and performance marketing</li>
              <li>Medicine, research, real estate, and markets</li>
            </ul>
          </aside>
        </div>

        <div className="proof-strip">
          {headlineStats.map((stat) => (
            <div className="proof-chip reveal" key={stat.label}>
              <StatShuffle className="proof-value" value={stat.value} />
              <div className="proof-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="section-tight">
          <div className="section-heading reveal">
            <div className="kicker">Selected Experience</div>
            <h2 className="section-title">The strongest signal across product, founder work, and execution.</h2>
            <p className="section-lede">
              Roles chosen to show how I operate in different environments while keeping a clear
              throughline: structure the problem, align the team, and drive tangible outcomes.
            </p>
          </div>
          <div className="work-stack">
            {selectedExperience.map((item) => (
              <ExperienceCard item={item} key={`${item.company}-${item.role}-${item.meta}`} />
            ))}
          </div>
        </div>

        <div className="section-tight">
          <div className="section-heading reveal">
            <div className="kicker">Additional Experience</div>
            <h2 className="section-title">More signal on analytics, consulting, markets, and deal-making range.</h2>
          </div>
          <div className="work-stack">
            {additionalExperience.map((item) => (
              <ExperienceCard item={item} key={`${item.company}-${item.role}-${item.meta}`} />
            ))}
          </div>
        </div>

        <div className="section-tight">
          <div className="callout reveal">
            <div className="kicker">Want the deeper version?</div>
            <h2 className="section-title">Case studies show how I think, not just where I worked.</h2>
            <p className="hero-subtitle">
              The resume-level summary is useful, but the case studies show how I frame problems,
              choose tradeoffs, and build momentum with teams.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/case-studies">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
