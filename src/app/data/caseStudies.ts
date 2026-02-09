export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  timeline: string;
  summary: string;
  tags: string[];
  artifacts: string[];
  visuals: string[];
  quickFacts: Array<{ label: string; value: string }>;
  sections: Array<{ heading: string; body: string[] }>;
  metrics: string[];
};

export const normalizeSlug = (value: string) =>
  decodeURIComponent(value)
    .toLowerCase()
    .trim()
    .replace(/\/+$/, "");

export const caseStudies: CaseStudy[] = [
  {
    slug: "self-serve-rollout-policy",
    title: "Self-serve rollout policy tool",
    company: "Microsoft",
    timeline: "Jun 2024 – Aug 2024",
    summary:
      "Built a policy-driven rollout system that reduced manual governance and accelerated feature releases.",
    tags: ["Product Strategy", "Research", "Ops", "Workflow"],
    quickFacts: [
      { label: "Role", value: "Product Manager" },
      { label: "Team", value: "PM · Eng · Ops · Data" },
      { label: "Scope", value: "Enterprise rollout governance" },
      { label: "Tools", value: "Docs, dashboards, config pipelines" },
    ],
    artifacts: [
      "Persona snapshots and top tasks map",
      "Policy taxonomy + decision tree",
      "Rollout policy templates library",
      "Migration playbook + user guide",
      "Config pipeline architecture notes",
    ],
    visuals: [
      "Policy flow diagram (request → review → publish)",
      "Before/after rollout governance workflow",
      "Policy coverage heatmap concept",
    ],
    metrics: [
      "60 engineering hours saved per month",
      "600+ user requests synthesized",
      "40+ user interviews conducted",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Rollout governance lived across multiple teams with inconsistent ownership. Release decisions were manual, documentation was fragmented, and policy changes took too long to operationalize.",
          "Service teams each maintained local rules, which caused drift in policy interpretation and raised compliance risk. Engineers had to ping multiple owners to ship even small updates.",
          "The net result was delayed releases, unclear accountability, and a growing backlog of pending changes that should have been self-serve.",
        ],
      },
      {
        heading: "Goals",
        body: [
          "Create a self-serve workflow that allows teams to configure rollout policies without engineering intervention.",
          "Standardize how policies are defined, documented, and enforced across the platform.",
          "Reduce time spent on release coordination and cut recurring operational overhead.",
          "Build trust with stakeholders by demonstrating guardrails, auditability, and clear ownership.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Defined a product charter with scope, OKRs, and resource dependencies to align stakeholders early.",
          "Synthesized 600+ requests and 40+ interviews into personas and priority use cases, mapping journeys to identify the highest-friction steps.",
          "Designed configuration pipelines that translated policy intent into reliable system behavior, allowing teams to self-manage updates.",
          "Facilitated weekly stakeholder working sessions to align on policy taxonomy and de-risk migration paths.",
          "Created success metrics tied to adoption, policy coverage, and reduction in manual exceptions.",
        ],
      },
      {
        heading: "Research & Artifacts",
        body: [
          "Mapped user journeys for policy authors, reviewers, and release operators to isolate the most failure-prone steps.",
          "Created a policy taxonomy with clear ownership rules and standardized language to reduce interpretation drift.",
          "Delivered actionable artifacts (templates, playbooks, and guides) so teams could adopt the system without extra training cycles.",
        ],
      },
      {
        heading: "Risks & Tradeoffs",
        body: [
          "Risk: Over-standardizing policies could slow teams with unique rollout needs.",
          "Mitigation: Built a tiered template model with safe defaults and advanced overrides.",
          "Tradeoff: Prioritized adoption over perfect feature completeness to get teams shipping sooner.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "Delivered a structured rollout policy interface supported by configuration pipelines and standardized documentation.",
          "Introduced a policy template library (safe defaults + advanced modes) so teams could start fast and customize when needed.",
          "Authored a user guide, migration playbook, and rollout template to make the tool operationally ready on day one.",
          "Partnered with engineering to create an audit trail that made policy changes transparent and reviewable.",
        ],
      },
      {
        heading: "Impact",
        body: [
          "Cut 60 engineering hours per month by removing manual rollout coordination.",
          "Established a scalable policy layer that aligned release governance across teams.",
          "Improved rollout consistency by consolidating policy definitions into a single source of truth.",
        ],
      },
      {
        heading: "What I’d do next",
        body: [
          "Expand policy analytics to surface the highest-risk rollouts and automate alerts.",
          "Ship a policy recommendation engine based on historical outcomes.",
          "Create a sandbox environment so teams can simulate rollouts before going live.",
        ],
      },
    ],
  },
  {
    slug: "slad-growth-system",
    title: "Growth system for a culture-led brand",
    company: "SLAD LLC",
    timeline: "Jun 2023 – Jan 2026",
    summary:
      "Built a dashboard-driven growth engine that linked community storytelling to measurable performance.",
    tags: ["GTM", "Analytics", "Brand", "Experimentation"],
    quickFacts: [
      { label: "Role", value: "Founder / PM" },
      { label: "Team", value: "Design · Marketing · Data" },
      { label: "Scope", value: "GTM + analytics system" },
      { label: "Tools", value: "Power BI · Meta Ads · A/B tests" },
    ],
    artifacts: [
      "Power BI dashboards (engagement + traffic)",
      "Creative testing matrix",
      "Drop launch GTM checklist",
      "Content playbook with winning formats",
    ],
    visuals: [
      "Funnel view of social → site → conversion",
      "Creative performance comparison grid",
      "Weekly insight review snapshot",
    ],
    metrics: [
      "113% Instagram follower growth",
      "807k+ impressions",
      "147% QoQ spike in website sessions",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The brand’s storytelling resonated, but we lacked visibility into what actually drove conversions. Ad spend decisions were made with limited attribution, and content performance was hard to compare.",
          "Creative performance was evaluated inconsistently, and insights weren’t reaching design and marketing quickly enough to influence the next drop.",
        ],
      },
      {
        heading: "Goals",
        body: [
          "Create a feedback loop that connects cultural storytelling to revenue outcomes.",
          "Identify which channels and creative formats generate the highest click-through and session growth.",
          "Build a repeatable GTM cadence that made launches predictable, measurable, and improvable.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Built Power BI dashboards to track Instagram engagement, web traffic, and campaign performance.",
          "Introduced A/B testing for creatives and audience targeting, and reallocated ad spend based on results.",
          "Partnered with design and marketing to align seasonal drops with analytics insights.",
          "Set up weekly performance reviews that converted metrics into clear creative decisions.",
          "Built a lightweight KPI stack focused on CTR, session depth, and conversion intent signals.",
        ],
      },
      {
        heading: "Research & Artifacts",
        body: [
          "Built a performance taxonomy for content types (story, product, community, behind-the-scenes).",
          "Defined KPIs with clear decision thresholds so the team could reallocate budget quickly.",
          "Documented a launch checklist and a creative testing matrix to make experiments repeatable.",
        ],
      },
      {
        heading: "Risks & Tradeoffs",
        body: [
          "Risk: Over-optimizing for short-term CTR could dilute the brand story.",
          "Mitigation: Balanced performance metrics with qualitative community feedback.",
          "Tradeoff: Prioritized fast iteration over perfect creative polish to keep the feedback loop tight.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "A lightweight GTM system: data dashboards, experimentation rituals, and decision rules for creative investment.",
          "Delivered structured insight reviews that guided each seasonal launch.",
          "Created a content playbook that documented winning story formats, visual patterns, and timing windows.",
        ],
      },
      {
        heading: "Impact",
        body: [
          "Follower base grew 113% and impressions exceeded 807k as targeting improved.",
          "Website sessions spiked 147% quarter-over-quarter, supporting stronger drop performance.",
          "The team shipped with clearer creative confidence and faster iteration between drops.",
        ],
      },
      {
        heading: "What I’d do next",
        body: [
          "Automate cohort tracking to connect campaigns with repeat purchase behavior.",
          "Experiment with lifecycle messaging to convert first-time buyers into repeat customers.",
          "Pilot in-person community events to deepen the brand’s cultural flywheel.",
        ],
      },
    ],
  },
  {
    slug: "system-freeze-scheduling",
    title: "System-freeze scheduling tool",
    company: "Microsoft",
    timeline: "Jun 2023 – Aug 2023",
    summary:
      "Designed a scheduling tool to reduce downtime risk during high-traffic, low-staff windows.",
    tags: ["Program Mgmt", "Risk", "Systems", "Product Ops"],
    quickFacts: [
      { label: "Role", value: "Product Manager" },
      { label: "Team", value: "PM · Eng · Design · Data" },
      { label: "Scope", value: "Release scheduling + risk" },
      { label: "Tools", value: "Figma · specs · dependency maps" },
    ],
    artifacts: [
      "30-page product specification",
      "Figma prototype for scheduling workflows",
      "Dependency map across stakeholder teams",
      "Risk log + escalation playbook",
    ],
    visuals: [
      "Freeze window calendar view concept",
      "Conflict detection heatmap",
      "Approval workflow snapshot",
    ],
    metrics: [
      "30-page product spec delivered",
      "2 feature iterations piloted",
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "System-freeze windows were often coordinated ad hoc, leading to conflicts and unnecessary manual overrides during peak usage.",
          "Multiple orgs had independent schedules, which created blind spots and eroded trust in planned freezes.",
        ],
      },
      {
        heading: "Goals",
        body: [
          "Create a predictable scheduling process that minimizes conflicts and protects uptime.",
          "Align stakeholders across product, design, data, and engineering on a shared rollout plan.",
          "Reduce manual override requests and improve transparency into upcoming freeze periods.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Mapped stakeholder dependencies and defined success criteria for freeze windows.",
          "Prototyped workflows in Figma and documented a 30-page spec to anchor development.",
          "Piloted two iterations to validate conflict reductions before a wider rollout.",
          "Established a weekly operating rhythm with risk logs and escalation paths.",
          "Built a requirements traceability matrix to keep dependencies visible across teams.",
        ],
      },
      {
        heading: "Research & Artifacts",
        body: [
          "Interviewed release owners to map root causes of conflicts and override requests.",
          "Created a dependency map that made cross-org scheduling constraints explicit.",
          "Captured risks and escalation paths in a living playbook to shorten decision cycles.",
        ],
      },
      {
        heading: "Risks & Tradeoffs",
        body: [
          "Risk: A centralized scheduler could be perceived as slowing autonomy.",
          "Mitigation: Established clear SLA windows and fast-track approvals for urgent releases.",
          "Tradeoff: Focused on conflict prevention rather than full automation to ensure adoption.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "Delivered a scheduling tool that surfaced conflicts early and standardized freeze governance.",
          "Created an approval workflow so high-impact freezes received timely signoff without stalling the roadmap.",
        ],
      },
      {
        heading: "Impact",
        body: [
          "Reduced scheduling conflicts and created a repeatable governance blueprint.",
          "Improved stakeholder confidence through transparent timelines and consistent communication.",
        ],
      },
      {
        heading: "What I’d do next",
        body: [
          "Integrate automated risk scoring for release windows.",
          "Connect the scheduler to incident data to proactively avoid historical risk periods.",
          "Expand the tool to cover cross-region release coordination.",
        ],
      },
    ],
  },
];

export const caseStudyBySlug = (slug: string | string[] | undefined) => {
  if (!slug) return undefined;
  const resolved = Array.isArray(slug) ? slug.join("/") : slug;
  const normalized = normalizeSlug(resolved);
  return caseStudies.find((study) => normalizeSlug(study.slug) === normalized);
};
