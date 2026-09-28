export type Position = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  headline?: string;
  highlights: string[];
  caseStudy?: string;
  letter?: { label: string; href: string; note: string };
};

export const wrth: Position = {
  company: "WRTH",
  role: "Lead Engineering Manager",
  period: "2026 – Present",
  summary:
    "WRTH is a startup building a consolidated merchant and event commerce platform. My work spans product, engineering, payments, inventory, AI/data, merchant operations, event commerce, security, QA, and release execution.",
  highlights: [
    "Led 0 → 1 product and engineering delivery of the Store/POS experience, from problem definition through its first live transaction.",
    "Owned post-launch stabilization and helped drive 8 post-sale fixes within roughly 24 hours, then cash-sale support, mobile checkout stability, and pricing readiness.",
    "A pricing and readiness change made roughly 1,505 previously unusable inventory items sellable.",
    "Resolved scope, workflow, monetization, fee, onboarding, and launch-readiness decisions across multiple product lines with founders, engineering, QA, GTM, and operations.",
  ],
  caseStudy: "wrth-merchant-commerce-platform",
};

export const wrthProductLines = [
  {
    name: "Store / POS",
    body: "Merchant checkout, inventory, pricing, tax, platform fees, cash and card tenders, orders, receipts, roles, and POS hardware. Led from problem definition to its first live transaction.",
    href: "/case-studies/wrth-merchant-commerce-platform",
  },
  {
    name: "Event commerce",
    body: "Distinct organizer, vendor, and merchant personas with onboarding, permissions, payment readiness on Stripe Connect, and POS checkout at events. Validated end to end in development.",
    href: "/case-studies/wrth-event-commerce",
  },
  {
    name: "Oracle AI Pricing",
    body: "Helped define the product and data model for confidence-scored valuation: which attributes drive value, how value ranges are shown, and how identification connects to inventory.",
  },
  {
    name: "NFC authentication",
    body: "Architected major portions of an NFC and blockchain-backed authentication concept: tag evaluation, tap-to-authenticate UX, digital provenance, and patent non-infringement analysis that helped clear it for launch.",
  },
  {
    name: "Live commerce",
    body: "Designed a WhatNot / TikTok Live integration concept from scratch: a two-mode inventory model, slot-based fulfillment, 28 UX wireframes, and an engineering-ready spec.",
  },
];

export const microsoftRoles: Position[] = [
  {
    company: "Microsoft",
    role: "Product Manager",
    period: "Jun 2024 – Aug 2024",
    location: "Redmond, WA",
    summary: "Self-serve rollout-policy product.",
    headline: "Defined the charter and delivered configuration pipelines that cut roughly 60 engineering hours a month.",
    highlights: [
      "Defined the product charter, including scope, timeline, OKRs, and resource dependencies, and secured stakeholder buy-in.",
      "Delivered configuration pipelines that cut roughly 60 engineering hours per month.",
      "Synthesized 600+ requests and 40+ interviews into personas, journeys, and prioritized requirements.",
      "Authored the user guide, migration playbook, and rollout template.",
    ],
    caseStudy: "self-serve-rollout-policy",
  },
  {
    company: "Microsoft",
    role: "Product Manager",
    period: "Jun 2023 – Aug 2023",
    location: "Redmond, WA",
    summary: "System-freeze and rollout scheduling.",
    headline: "Wrote a 30-page spec for a tool that keeps risky releases out of high-traffic, low-staff windows.",
    highlights: [
      "Designed and prototyped a scheduling tool that prevents risky releases during high-traffic, low-staff windows.",
      "Ran weekly program updates, risk logs, and requirement reviews to keep teams aligned.",
      "Wrote a 30-page product spec and piloted two iterations using conflict and resource-utilization data.",
    ],
    caseStudy: "system-freeze-scheduling",
  },
  {
    company: "Microsoft",
    role: "Software Engineer & Product Manager",
    period: "Jun 2022 – Aug 2022",
    location: "Redmond, WA",
    summary: "Automated document fact-verification.",
    headline: "Built the React front end and Python pipelines, then raised verification accuracy from 76% to 92%.",
    highlights: [
      "Built the React front end and Python data pipelines.",
      "Turned 10+ stakeholder interviews into 12 prioritized use cases; coordinated work across React, Swift, Python, and Java.",
      "Led 3 user-testing sessions and improved verification accuracy from 76% to 92%.",
    ],
    caseStudy: "document-fact-verification",
  },
];

export const slad: Position = {
  company: "SLAD LLC",
  role: "Founder",
  period: "Jun 2023 – Jan 2026",
  location: "Houston, TX",
  summary:
    "An independent streetwear brand rooted in Houston and Mexican culture. I ran product design, suppliers, launches, inventory planning, e-commerce, customer support, and operations, alongside paid social, analytics, and creative testing.",
  highlights: [
    "Launched culture-led collections and grew a 4,000+ community.",
    "Built Power BI dashboards for engagement and site traffic that reshaped ad spend, driving a 21% CTR lift.",
    "A/B tested creatives and targeting for 113% follower growth, 807K+ impressions, and 147% QoQ growth in website sessions.",
  ],
  caseStudy: "slad-growth-system",
};

export const earlierRoles: Position[] = [
  {
    company: "Whistleslick Press",
    role: "Marketing Strategy Consultant",
    period: "Jan 2022 – Apr 2022",
    location: "Evanston, IL",
    highlights: [
      "Ran market and channel analysis, including SWOT and audience segmentation, to shape a digital growth strategy.",
      "Designed experiments for content cadence, positioning, and engagement.",
      "Presented a roadmap to leadership and earned formal recognition for strategy and execution.",
    ],
    letter: {
      label: "Read the recommendation letter",
      href: "/recommendation-letter.pdf",
      note: "From Whistleslick Press leadership.",
    },
  },
  {
    company: "Mercadotecnia USA",
    role: "Marketing & Analytics Consultant / Founder",
    period: "Jun 2022 – Jun 2023",
    location: "Houston, TX",
    highlights: [
      "SEO audits and keyword analyses that increased average client site traffic by 38% within three months.",
      "Dashboards for CTR, bounce rate, and lead conversion that guided budget reallocation and improved ROI by 25% on average.",
      "A/B tests on ad copy, social creative, and landing pages that improved campaign effectiveness and reduced CAC.",
    ],
  },
  {
    company: "MD Anderson Cancer Center",
    role: "Cancer Research Intern",
    period: "Jun 2020 – Aug 2021",
    location: "Houston, TX",
    highlights: [
      "Explored combination therapies between oncolytic viruses and CAR-T cells under the mentorship of Dr. Katy Rezvani.",
      "Synthesized findings on immune-cell exhaustion and tumor resistance; co-authored a scientific poster proposing clinical directions for combination immunotherapy.",
      "Analyzed 100+ hour cytotoxicity time series using GFP normalization and viability staining, identifying a 3x increase in sustained tumor killing versus standalone treatments.",
    ],
  },
  {
    company: "Independent Real Estate",
    role: "Wholesale Real Estate Operator",
    period: "Jul 2021 – Jun 2023",
    location: "Houston, TX",
    highlights: [
      "Sourced and qualified off-market seller leads and tracked outreach pipelines across Houston submarkets.",
      "Prepared purchase and assignment contracts, analyzed comps, and modeled deal margins.",
      "Negotiated with sellers and buyers and kept terms, follow-ups, and handoffs organized through each deal.",
    ],
  },
  {
    company: "Independent Trading",
    role: "Equities & Options Trader",
    period: "Self-directed",
    location: "Houston, TX",
    highlights: [
      "Built daily watchlists around price action, volume, catalysts, and support and resistance.",
      "Kept a trade journal and review process on entries, exits, sizing, and repeated execution mistakes.",
      "Used risk rules and scenario planning to stay disciplined under volatility.",
    ],
  },
];
