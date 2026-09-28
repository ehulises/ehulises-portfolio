export type Stat = { value: string; label: string };

export type Diagram = {
  caption: string;
  stages: Array<{ label: string; items: string[] }>;
  foundation?: { label: string; items: string[] };
};

export type Block =
  | { type: "text"; body: string[] }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; label?: string; text: string }
  | { type: "stats"; items: Stat[] }
  | { type: "steps"; items: Array<{ title: string; body: string }> }
  | { type: "decisions"; items: Array<{ title: string; body: string; tradeoff?: string }> }
  | { type: "people"; items: Array<{ title: string; body: string }> }
  | { type: "diagram"; diagram: Diagram };

export type Section = {
  id: string;
  label: string;
  heading: string;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  summary: string;
  timeline: string;
  outcome: string;
  status?: string;
  facts: Array<{ label: string; value: string }>;
  stats: Stat[];
  sections: Section[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "wrth-merchant-commerce-platform",
    company: "WRTH",
    title: "Building WRTH’s merchant commerce platform from 0 → 1",
    summary:
      "Leading WRTH’s Store/POS from problem definition to its first live transaction, then owning the stabilization work that made it dependable for merchants.",
    timeline: "2026 – Present",
    outcome: "First live transaction",
    facts: [
      { label: "Role", value: "Lead Engineering Manager, product and engineering" },
      { label: "Team", value: "Founders · Product · Engineering · QA · GTM · Ops" },
      { label: "Scope", value: "Checkout, inventory, pricing, tax, fees, tenders, orders, roles" },
      { label: "Stack", value: "Next.js · TypeScript · PostgreSQL · Supabase · Stripe" },
    ],
    stats: [
      { value: "Live", label: "First Store POS transaction completed in production" },
      { value: "8", label: "Post-sale fixes driven within roughly 24 hours of that first sale" },
      { value: "~1,505", label: "Previously unusable inventory items made sellable" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        heading: "One platform for how merchants actually sell.",
        blocks: [
          {
            type: "text",
            body: [
              "WRTH is a startup building a consolidated merchant and event commerce platform: one place for a merchant to manage inventory, price it, and sell it, whether at the counter, at an event, or online.",
              "The Store/POS experience is the foundation of that platform. If a merchant can’t reliably ring up a sale with the right price, tax, and fees, nothing built on top of it matters. That was the product I was asked to take from idea to production.",
            ],
          },
        ],
      },
      {
        id: "problem",
        label: "Problem",
        heading: "A checkout screen is easy. A checkout system merchants trust with money is not.",
        blocks: [
          {
            type: "text",
            body: [
              "In-person commerce looks simple from the counter. Underneath, a single sale touches inventory, pricing, tax behavior, platform fees, tender type, payment hardware, the order record, and the receipt. Every one of those has edge cases that only surface when a real merchant is standing in front of a real customer.",
              "Before anything could be built, the product needed clear answers to questions like these:",
            ],
          },
          {
            type: "list",
            items: [
              "What makes an item sellable, and is that the same thing as being published on a storefront?",
              "How do tax and WRTH’s platform fees behave, and who sees which number?",
              "What happens when a customer pays with cash instead of a card?",
              "Which merchant roles can sell, configure, or change what at the register?",
              "What happens after the sale: orders, receipts, and corrections?",
              "What does “ready to launch” mean, concretely enough to test?",
            ],
          },
        ],
      },
      {
        id: "role",
        label: "My role",
        heading: "Owning the path from problem definition to production.",
        blocks: [
          {
            type: "text",
            body: [
              "As Lead Engineering Manager, my job covered both halves of the work: deciding what the product should do, and making sure it was built, verified, and released correctly.",
            ],
          },
          {
            type: "list",
            items: [
              "Defined product scope and requirements across checkout, inventory, pricing, tax, platform fees, tenders, orders, receipts, merchant roles, and POS hardware.",
              "Turned ambiguous goals into technical tradeoffs, tickets, and acceptance criteria that engineering and QA could execute against.",
              "Wrote the launch acceptance criteria and QA plans, and made release decisions.",
              "Resolved scope, workflow, fee, onboarding, and launch-readiness questions with founders, engineering, QA, GTM, and operations.",
              "Owned post-launch stabilization after the first live transaction.",
            ],
          },
        ],
      },
      {
        id: "users",
        label: "Users",
        heading: "Four parties, one sale.",
        blocks: [
          {
            type: "people",
            items: [
              {
                title: "Merchant owner",
                body: "Sets up the store, inventory, pricing, and who can do what. Needs to trust that every number is right.",
              },
              {
                title: "Staff at the register",
                body: "Needs a fast, predictable checkout on mobile and POS hardware, whether the customer pays by card or cash.",
              },
              {
                title: "Customer",
                body: "Needs a correct total, a payment that goes through, and a receipt.",
              },
              {
                title: "WRTH, the platform",
                body: "Needs tax behavior, platform fees, and order records to be correct and consistent across every merchant.",
              },
            ],
          },
        ],
      },
      {
        id: "decisions",
        label: "Decisions",
        heading: "The product decisions that shaped the system.",
        blocks: [
          {
            type: "decisions",
            items: [
              {
                title: "Keep “sellable” and “published” separate.",
                body: "A merchant’s selling price and a storefront listing are different decisions. The model makes an item sellable at the counter without forcing the merchant to publish it online.",
                tradeoff: "One more concept for merchants to understand, in exchange for matching how physical stores actually operate.",
              },
              {
                title: "Treat cash as a first-class tender.",
                body: "Cash sales needed defined behavior for orders and receipts, not a workaround added after card payments shipped.",
                tradeoff: "More states to specify and test before launch.",
              },
              {
                title: "Make tax and platform fees part of the checkout contract.",
                body: "Tax behavior and WRTH platform fees were specified as requirements, so the price a merchant sets, the total a customer pays, and what the platform collects stay consistent.",
              },
              {
                title: "Bound what each merchant role can do.",
                body: "Roles define who can sell, who can configure, and who can change what, enforced by the system rather than by convention.",
                tradeoff: "A little more setup for merchants in exchange for fewer mistakes at the register.",
              },
              {
                title: "Define launch as a real transaction.",
                body: "Acceptance criteria covered the full path from item to receipt, so “ready” meant a merchant could complete a real sale.",
              },
            ],
          },
        ],
      },
      {
        id: "model",
        label: "System model",
        heading: "How the pieces fit together.",
        blocks: [
          {
            type: "diagram",
            diagram: {
              caption: "Illustrative product model, simplified for a public portfolio. Not a product screenshot.",
              stages: [
                { label: "Setup", items: ["Merchant roles", "POS hardware"] },
                { label: "Catalog", items: ["Inventory", "Selling price", "Storefront publication"] },
                { label: "Checkout", items: ["Pricing", "Tax", "Platform fee", "Cash or card"] },
                { label: "After the sale", items: ["Order", "Receipt", "Post-sale changes"] },
              ],
              foundation: {
                label: "Platform",
                items: [
                  "Next.js / React",
                  "TypeScript",
                  "PostgreSQL on Supabase",
                  "Row-level security",
                  "Stripe Connect & Terminal",
                  "Edge Functions",
                  "CI/CD",
                ],
              },
            },
          },
          {
            type: "text",
            body: [
              "WRTH is multi-tenant: many merchants share one platform, and each must only ever see and act on their own data. Authorization is enforced at the database layer with row-level security, not only in the interface. Payments run through Stripe Connect and Stripe Terminal, and schema changes ship as versioned migrations through CI/CD.",
              "Being able to reason at this level was what let me make product calls directly, like what a role can do, when a sale is complete, or how a fee is recorded, instead of translating every question through someone else.",
            ],
          },
        ],
      },
      {
        id: "execution",
        label: "Execution",
        heading: "From ambiguous goal to release decision.",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Define",
                body: "Frame the problem, the personas, and the behaviors that have to be right before a merchant can sell.",
              },
              {
                title: "Translate",
                body: "Turn each requirement into technical tradeoffs, tickets, and acceptance criteria.",
              },
              {
                title: "Build and verify",
                body: "Work with engineering through implementation and migrations, and with QA on test plans that mirror real sales.",
              },
              {
                title: "Decide",
                body: "Hold launch readiness against the acceptance criteria and make the release call.",
              },
            ],
          },
        ],
      },
      {
        id: "launch",
        label: "Launch",
        heading: "The first live transaction.",
        blocks: [
          {
            type: "text",
            body: [
              "WRTH’s first live Store POS transaction completed successfully: a real merchant, a real customer, and a real payment, running through the system from inventory to receipt.",
            ],
          },
          {
            type: "callout",
            text: "A first live transaction proves the system works once. The next job is making it work every time.",
          },
        ],
      },
      {
        id: "stabilization",
        label: "Stabilization",
        heading: "The 24 hours after launch.",
        blocks: [
          {
            type: "text",
            body: [
              "Real merchant usage surfaces what no test plan fully anticipates. I owned stabilization after the first sale and helped drive 8 post-sale fixes within roughly 24 hours.",
              "From there I drove the next layer of readiness:",
            ],
          },
          {
            type: "list",
            items: [
              "Cash-sale support, so merchants could accept every tender their customers use.",
              "Mobile checkout stability for staff selling from a phone.",
              "Merchant pricing readiness and inventory usability.",
              "A pricing and readiness change that made roughly 1,505 previously unusable inventory items sellable, while keeping a merchant’s selling price distinct from storefront publication.",
            ],
          },
        ],
      },
      {
        id: "outcomes",
        label: "Outcomes",
        heading: "What shipped.",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "0 → 1", label: "Store/POS, from problem definition to production" },
              { value: "8", label: "Post-sale fixes in roughly 24 hours" },
              { value: "~1,505", label: "Inventory items made sellable" },
            ],
          },
          {
            type: "text",
            body: [
              "Beyond the numbers, the platform now has a checkout model that the rest of WRTH builds on. The same foundations of roles, inventory, tax and fee behavior, and payments carry into event commerce.",
            ],
          },
        ],
      },
      {
        id: "beyond",
        label: "Beyond the POS",
        heading: "The same approach across WRTH’s other product lines.",
        blocks: [
          {
            type: "people",
            items: [
              {
                title: "Event commerce",
                body: "Organizer, vendor, and merchant personas with distinct permissions, onboarding, payment readiness, and POS checkout at events. Validated end to end in development.",
              },
              {
                title: "Oracle AI Pricing",
                body: "Helped define the product and data model for confidence-scored valuation: which attributes drive value, how ranges are shown, and how identification connects to inventory.",
              },
              {
                title: "NFC authentication",
                body: "Architected major portions of an NFC and blockchain-backed authentication concept, including tap-to-authenticate UX and patent non-infringement analysis.",
              },
              {
                title: "Live commerce",
                body: "Designed a WhatNot / TikTok Live integration concept from scratch, with 28 wireframes and an engineering-ready spec.",
              },
            ],
          },
        ],
      },
      {
        id: "lessons",
        label: "Lessons",
        heading: "What I’d carry into the next launch.",
        blocks: [
          {
            type: "decisions",
            items: [
              {
                title: "Launch is the start of the product.",
                body: "Plan for the first day of real usage as deliberately as the launch itself: owners, triage, and a fast path from report to fix.",
              },
              {
                title: "Data readiness is product work.",
                body: "More than a thousand items weren’t sellable because of how readiness was defined, not because of a bug in a screen. Modeling decisions deserve product attention.",
              },
              {
                title: "Technical depth improves product judgment.",
                body: "Understanding authorization, payment flows, and migrations let me weigh tradeoffs directly and give engineering clearer, more testable requirements.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "wrth-event-commerce",
    company: "WRTH",
    title: "Designing multi-party event commerce",
    summary:
      "Defining how organizers, vendors, and merchants work together at an event, with clear role boundaries, payment readiness, and checkout, then validating it end to end.",
    timeline: "2026 – Present",
    outcome: "Validated end to end in development",
    status: "Validated end to end in development. Not yet described here as live in production.",
    facts: [
      { label: "Role", value: "Product definition and technical execution" },
      { label: "Personas", value: "Organizer · Vendor · Merchant" },
      { label: "Scope", value: "Onboarding, permissions, inventory, payments, checkout" },
      { label: "Stack", value: "Stripe Connect · Stripe Terminal · PostgreSQL · Supabase" },
    ],
    stats: [
      { value: "3", label: "Distinct personas, each with its own permissions" },
      { value: "End to end", label: "Development flow reached a completed terminal payment" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        heading: "Events multiply every hard part of commerce.",
        blocks: [
          {
            type: "text",
            body: [
              "A store sale has one merchant. An event has an organizer running it, many vendors selling at it, and payments that need to land with the right business, with the right tax and fees, on hardware that has to work in a crowded room.",
              "I owned major portions of the product definition and technical execution for WRTH’s event commerce, building on the Store/POS foundations.",
            ],
          },
        ],
      },
      {
        id: "problem",
        label: "Problem",
        heading: "Who is allowed to do what, and whose sale is it?",
        blocks: [
          {
            type: "text",
            body: [
              "Most of the difficulty in multi-party commerce isn’t the checkout. It’s the boundaries around it: who can invite whom, whose inventory is on sale, which account gets paid, and what happens when a vendor shows up without being ready to take payments.",
            ],
          },
        ],
      },
      {
        id: "personas",
        label: "Personas",
        heading: "Three roles, deliberately kept distinct.",
        blocks: [
          {
            type: "people",
            items: [
              {
                title: "Organizer",
                body: "Creates and runs the event, and decides who participates. Needs visibility without reaching into vendors’ businesses.",
              },
              {
                title: "Vendor",
                body: "Joins an event with an event profile and inventory. Needs a simple path to being ready to sell.",
              },
              {
                title: "Merchant",
                body: "The business behind a sale: checkout, tender, and receipt. Needs the same reliable POS experience it has in store.",
              },
            ],
          },
          {
            type: "callout",
            text: "Keeping these personas separate, even when one person plays more than one role, is what keeps permissions understandable and money routed correctly.",
          },
        ],
      },
      {
        id: "decisions",
        label: "Decisions",
        heading: "Product decisions.",
        blocks: [
          {
            type: "decisions",
            items: [
              {
                title: "Role boundaries first.",
                body: "Permissions for organizers, vendors, and merchants were defined before screens, so every flow had a clear answer to “who can do this?”",
              },
              {
                title: "Payment readiness before selling.",
                body: "Vendors complete onboarding and Stripe Connect payment readiness before they can take a sale at an event.",
                tradeoff: "More onboarding up front, in exchange for no failed payments on event day.",
              },
              {
                title: "Reuse the POS checkout.",
                body: "Event sales run through the same checkout, tax, and fee behavior as the Store/POS rather than a parallel implementation.",
              },
              {
                title: "Accept on a real payment.",
                body: "Event acceptance testing was defined around a completed terminal payment, not a mocked checkout.",
              },
            ],
          },
        ],
      },
      {
        id: "model",
        label: "System model",
        heading: "The event flow.",
        blocks: [
          {
            type: "diagram",
            diagram: {
              caption: "Illustrative flow, simplified for a public portfolio. Not a product screenshot.",
              stages: [
                { label: "Organizer", items: ["Creates event", "Invites vendors"] },
                { label: "Vendor", items: ["Onboarding", "Event profile", "Inventory"] },
                { label: "Readiness", items: ["Permissions", "Stripe Connect", "Tax and fees"] },
                { label: "Event day", items: ["POS checkout", "Terminal payment", "Receipt"] },
              ],
            },
          },
        ],
      },
      {
        id: "execution",
        label: "Execution",
        heading: "Onboarding through acceptance testing.",
        blocks: [
          {
            type: "list",
            items: [
              "Organizer and vendor onboarding, event profiles, and inventory.",
              "Permissions and role boundaries across all three personas.",
              "Payment readiness, tax, and fee behavior on Stripe Connect.",
              "POS checkout for event sales on Stripe Terminal.",
              "Event acceptance testing, with criteria and QA plans tied to a real terminal payment.",
            ],
          },
        ],
      },
      {
        id: "status",
        label: "Status",
        heading: "Where it stands.",
        blocks: [
          {
            type: "text",
            body: [
              "The development event-commerce flow reached a completed terminal payment end to end: organizer, vendor, readiness, checkout, and payment. That validates the model and the integration path. I’m describing it here as validated in development, not as a production launch.",
            ],
          },
        ],
      },
      {
        id: "lessons",
        label: "Lessons",
        heading: "What this reinforced.",
        blocks: [
          {
            type: "list",
            items: [
              "In multi-party products, the permission model is the product. Get it right first and most flows become obvious.",
              "Readiness gates feel like friction in a spec and feel like reliability on event day.",
              "Reusing a proven checkout is worth more than a custom one tuned for a new context.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "self-serve-rollout-policy",
    company: "Microsoft",
    title: "Self-serve rollout policy tool",
    summary:
      "Defined and delivered a policy-driven rollout system that let teams configure releases themselves, cutting manual engineering coordination by roughly 60 hours a month.",
    timeline: "Jun 2024 – Aug 2024",
    outcome: "60 hrs/month saved",
    facts: [
      { label: "Role", value: "Product Manager" },
      { label: "Team", value: "PM · Eng · Ops · Data" },
      { label: "Scope", value: "Enterprise rollout governance" },
      { label: "Tools", value: "Docs, dashboards, config pipelines" },
    ],
    stats: [
      { value: "60 hrs", label: "Engineering time saved per month" },
      { value: "600+", label: "User requests synthesized" },
      { value: "40+", label: "User interviews conducted" },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        heading: "Rollout governance had no single owner.",
        blocks: [
          {
            type: "text",
            body: [
              "Rollout governance lived across multiple teams with inconsistent ownership. Release decisions were manual, documentation was fragmented, and policy changes took too long to operationalize.",
              "Service teams each maintained local rules, which caused drift in policy interpretation and raised compliance risk. Engineers had to ping multiple owners to ship even small updates.",
              "The result was delayed releases, unclear accountability, and a growing backlog of changes that should have been self-serve.",
            ],
          },
        ],
      },
      {
        id: "goals",
        label: "Goals",
        heading: "Make rollout policy self-serve, standard, and trusted.",
        blocks: [
          {
            type: "list",
            items: [
              "Create a self-serve workflow so teams can configure rollout policies without engineering intervention.",
              "Standardize how policies are defined, documented, and enforced across the platform.",
              "Reduce time spent on release coordination and cut recurring operational overhead.",
              "Build trust with stakeholders through guardrails, auditability, and clear ownership.",
            ],
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        heading: "Charter first, then research, then system.",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Charter",
                body: "Defined the product charter, including scope, timeline, OKRs, and resource dependencies, to align stakeholders early.",
              },
              {
                title: "Research",
                body: "Synthesized 600+ requests and 40+ interviews into personas and priority use cases, mapping journeys to find the highest-friction steps.",
              },
              {
                title: "Design",
                body: "Designed configuration pipelines that turned policy intent into reliable system behavior, so teams could self-manage updates.",
              },
              {
                title: "Align",
                body: "Ran weekly stakeholder working sessions on policy taxonomy and migration risk, with success metrics tied to adoption and fewer manual exceptions.",
              },
            ],
          },
          {
            type: "diagram",
            diagram: {
              caption: "Illustrative policy flow. Not a product screenshot.",
              stages: [
                { label: "Request", items: ["Team picks a template", "Sets overrides"] },
                { label: "Review", items: ["Guardrails", "Owner sign-off"] },
                { label: "Publish", items: ["Config pipeline", "Audit trail"] },
              ],
            },
          },
        ],
      },
      {
        id: "research",
        label: "Research",
        heading: "Research and artifacts.",
        blocks: [
          {
            type: "text",
            body: [
              "I mapped user journeys for policy authors, reviewers, and release operators to isolate the most failure-prone steps, then built a policy taxonomy with clear ownership rules and standard language to reduce interpretation drift.",
            ],
          },
          {
            type: "list",
            items: [
              "Persona snapshots and top-tasks map",
              "Policy taxonomy and decision tree",
              "Roadmap, user journeys, and implementation plan",
              "Rollout policy template library",
              "Migration playbook and user guide",
              "Config pipeline architecture notes",
            ],
          },
        ],
      },
      {
        id: "tradeoffs",
        label: "Tradeoffs",
        heading: "Risks and tradeoffs.",
        blocks: [
          {
            type: "decisions",
            items: [
              {
                title: "Standard, with an escape hatch.",
                body: "Over-standardizing could slow teams with unique rollout needs, so I built a tiered template model with safe defaults and advanced overrides.",
              },
              {
                title: "Adoption over completeness.",
                body: "Prioritized getting teams shipping on the new system sooner over perfect feature coverage.",
              },
            ],
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        heading: "What shipped.",
        blocks: [
          {
            type: "list",
            items: [
              "A structured rollout policy interface backed by configuration pipelines and standardized documentation.",
              "A template library with safe defaults and advanced modes, so teams could start fast and customize when needed.",
              "A user guide, migration playbook, and rollout template that made the tool operational on day one.",
              "An audit trail, built with engineering, that made policy changes transparent and reviewable.",
            ],
          },
        ],
      },
      {
        id: "impact",
        label: "Impact",
        heading: "Impact.",
        blocks: [
          {
            type: "list",
            items: [
              "Cut roughly 60 engineering hours per month by removing manual rollout coordination.",
              "Established a scalable policy layer that aligned release governance across teams.",
              "Improved rollout consistency by consolidating policy definitions into a single source of truth.",
            ],
          },
        ],
      },
      {
        id: "next",
        label: "What’s next",
        heading: "What I’d do next.",
        blocks: [
          {
            type: "list",
            items: [
              "Expand policy analytics to surface the highest-risk rollouts and automate alerts.",
              "Ship a policy recommendation engine based on historical outcomes.",
              "Create a sandbox so teams can simulate rollouts before going live.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "system-freeze-scheduling",
    company: "Microsoft",
    title: "System-freeze scheduling tool",
    summary:
      "Designed a scheduling tool that keeps risky releases out of high-traffic, low-staff windows, anchored by a 30-page product spec and piloted over two iterations.",
    timeline: "Jun 2023 – Aug 2023",
    outcome: "30-page product spec",
    facts: [
      { label: "Role", value: "Product Manager" },
      { label: "Team", value: "PM · Eng · Design · Data" },
      { label: "Scope", value: "Release scheduling and risk" },
      { label: "Tools", value: "Figma · specs · dependency maps" },
    ],
    stats: [
      { value: "30", label: "Page product specification, used as the development blueprint" },
      { value: "2", label: "Feature iterations piloted before wider rollout" },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        heading: "Freeze windows were coordinated ad hoc.",
        blocks: [
          {
            type: "text",
            body: [
              "Releases during high-traffic or low-staff windows carry outsized risk. But system-freeze windows were coordinated ad hoc, leading to conflicts and unnecessary manual overrides during peak usage.",
              "Multiple orgs kept independent schedules, which created blind spots and eroded trust in planned freezes.",
            ],
          },
        ],
      },
      {
        id: "goals",
        label: "Goals",
        heading: "Predictable, transparent, and aligned.",
        blocks: [
          {
            type: "list",
            items: [
              "Create a predictable scheduling process that minimizes conflicts and protects uptime.",
              "Align product, design, data, and engineering on a shared rollout plan.",
              "Reduce manual override requests and improve visibility into upcoming freezes.",
            ],
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        heading: "Scope, dependencies, then prototype.",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Scope",
                body: "Defined scope, stakeholder dependencies, and success criteria for freeze windows.",
              },
              {
                title: "Analyze",
                body: "Studied scheduling-conflict rates and resource-utilization data to find the highest-impact improvements.",
              },
              {
                title: "Specify",
                body: "Prototyped workflows in Figma, ran requirement reviews, and wrote a 30-page spec to anchor development.",
              },
              {
                title: "Pilot",
                body: "Piloted two feature iterations with clear success criteria to validate fewer manual overrides before rollout.",
              },
            ],
          },
          {
            type: "text",
            body: [
              "Throughout, I ran weekly program updates with risk logs, action items, and escalation paths, and kept a requirements traceability matrix so dependencies stayed visible across teams.",
            ],
          },
        ],
      },
      {
        id: "research",
        label: "Research",
        heading: "Research and artifacts.",
        blocks: [
          {
            type: "text",
            body: [
              "I interviewed release owners to map the root causes of conflicts and override requests, turned cross-org scheduling constraints into an explicit dependency map, and captured risks and escalation paths in a living playbook to shorten decision cycles.",
            ],
          },
          {
            type: "diagram",
            diagram: {
              caption: "Illustrative scheduling flow. Not a product screenshot.",
              stages: [
                { label: "Plan", items: ["Freeze calendar", "Traffic and staffing"] },
                { label: "Detect", items: ["Conflict check", "Dependency map"] },
                { label: "Approve", items: ["Sign-off workflow", "Fast-track lane"] },
              ],
            },
          },
          {
            type: "list",
            items: [
              "30-page product specification",
              "Figma prototype for scheduling workflows",
              "Dependency map across stakeholder teams",
              "Risk log and escalation playbook",
            ],
          },
        ],
      },
      {
        id: "tradeoffs",
        label: "Tradeoffs",
        heading: "Risks and tradeoffs.",
        blocks: [
          {
            type: "decisions",
            items: [
              {
                title: "Protect autonomy.",
                body: "A central scheduler could be seen as slowing teams down, so I established clear SLA windows and fast-track approvals for urgent releases.",
              },
              {
                title: "Prevention before automation.",
                body: "Focused on conflict prevention rather than full automation to make adoption realistic.",
              },
            ],
          },
        ],
      },
      {
        id: "impact",
        label: "Impact",
        heading: "Solution and impact.",
        blocks: [
          {
            type: "list",
            items: [
              "A scheduling tool that surfaces conflicts early and standardizes freeze governance.",
              "An approval workflow so high-impact freezes get timely sign-off without stalling the roadmap.",
              "Fewer scheduling conflicts and a repeatable governance blueprint.",
              "More stakeholder confidence through transparent timelines and consistent communication.",
            ],
          },
        ],
      },
      {
        id: "next",
        label: "What’s next",
        heading: "What I’d do next.",
        blocks: [
          {
            type: "list",
            items: [
              "Add automated risk scoring for release windows.",
              "Connect the scheduler to incident data to avoid historically risky periods.",
              "Extend the tool to cross-region release coordination.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "document-fact-verification",
    company: "Microsoft",
    title: "Automated document fact-verification",
    summary:
      "Worked as both engineer and PM on an app that verifies facts in documents, building the React front end and Python pipelines and raising verification accuracy from 76% to 92%.",
    timeline: "Jun 2022 – Aug 2022",
    outcome: "76% → 92% accuracy",
    facts: [
      { label: "Role", value: "Software Engineer & Product Manager" },
      { label: "Team", value: "Engineering across React, Swift, Python, Java" },
      { label: "Scope", value: "Requirements, front end, data pipelines, testing" },
      { label: "Stack", value: "React · Python" },
    ],
    stats: [
      { value: "76% → 92%", label: "Document-verification accuracy" },
      { value: "12", label: "Prioritized use cases from 10+ stakeholder interviews" },
      { value: "3", label: "User-testing sessions run" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        heading: "Half engineer, half product manager.",
        blocks: [
          {
            type: "text",
            body: [
              "As a New Technologist at Microsoft, I worked on an app that automates fact verification in documents. The role was deliberately hybrid: I wrote production code and owned the product questions around it.",
            ],
          },
        ],
      },
      {
        id: "research",
        label: "Research",
        heading: "From interviews to twelve use cases.",
        blocks: [
          {
            type: "text",
            body: [
              "I ran 10+ stakeholder interviews to define requirements, then synthesized the feedback into 12 prioritized use cases that set the scope for the build.",
            ],
          },
        ],
      },
      {
        id: "build",
        label: "Build",
        heading: "Building it.",
        blocks: [
          {
            type: "list",
            items: [
              "Built the React front end and the Python data pipelines behind verification.",
              "Coordinated cross-functional development across React, Swift, Python, and Java.",
            ],
          },
        ],
      },
      {
        id: "iterate",
        label: "Iterate",
        heading: "Testing with users, then refining.",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Test", body: "Led 3 user-testing sessions with real documents." },
              { title: "Prioritize", body: "Turned feedback into prioritized backlog items." },
              { title: "Refine", body: "Refined UI flows and the pipeline based on what users struggled with." },
            ],
          },
        ],
      },
      {
        id: "impact",
        label: "Impact",
        heading: "Impact.",
        blocks: [
          {
            type: "callout",
            label: "Result",
            text: "Document-verification accuracy improved from 76% to 92% through testing and iteration.",
          },
          {
            type: "text",
            body: [
              "It was my first experience of how much product quality depends on closing the loop between what users do and what engineering builds, and it’s the pattern I’ve repeated since.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "slad-growth-system",
    company: "SLAD LLC",
    title: "Growth system for a culture-led brand",
    summary:
      "As founder of an independent streetwear brand, built a dashboard-driven growth loop that linked community storytelling to measurable traffic and engagement.",
    timeline: "Jun 2023 – Jan 2026",
    outcome: "147% QoQ sessions",
    facts: [
      { label: "Role", value: "Founder" },
      { label: "Team", value: "Design · Marketing · Data" },
      { label: "Scope", value: "Product, operations, GTM, and analytics" },
      { label: "Tools", value: "Power BI · Meta Ads · A/B tests" },
    ],
    stats: [
      { value: "147%", label: "Quarter-over-quarter growth in website sessions" },
      { value: "113%", label: "Instagram follower growth" },
      { value: "807K+", label: "Impressions" },
    ],
    sections: [
      {
        id: "context",
        label: "Context",
        heading: "Running the whole business.",
        blocks: [
          {
            type: "text",
            body: [
              "SLAD was an independent streetwear brand rooted in Houston and Mexican culture. As founder I ran all of it: product design, suppliers, launches, inventory planning, the e-commerce storefront, customer support, and operations, along with paid social, analytics, and creative testing.",
            ],
          },
        ],
      },
      {
        id: "problem",
        label: "Problem",
        heading: "The story resonated. The data didn’t explain why.",
        blocks: [
          {
            type: "text",
            body: [
              "The brand’s storytelling resonated, but we had little visibility into what actually drove conversions. Ad spend decisions were made with limited attribution, and content performance was hard to compare.",
              "Creative was evaluated inconsistently, and insights weren’t reaching design and marketing fast enough to shape the next drop.",
            ],
          },
        ],
      },
      {
        id: "goals",
        label: "Goals",
        heading: "Connect storytelling to outcomes.",
        blocks: [
          {
            type: "list",
            items: [
              "Create a feedback loop that connects cultural storytelling to revenue outcomes.",
              "Identify which channels and creative formats drive the highest click-through and session growth.",
              "Build a repeatable GTM cadence that makes launches predictable, measurable, and improvable.",
            ],
          },
        ],
      },
      {
        id: "approach",
        label: "Approach",
        heading: "Measure, test, reallocate, repeat.",
        blocks: [
          {
            type: "diagram",
            diagram: {
              caption: "Illustrative growth loop. Not a dashboard screenshot.",
              stages: [
                { label: "Social", items: ["Content", "Paid creative"] },
                { label: "Site", items: ["Sessions", "Session depth"] },
                { label: "Conversion", items: ["Intent signals", "Drop performance"] },
                { label: "Review", items: ["Weekly insights", "Budget shifts"] },
              ],
            },
          },
          {
            type: "list",
            items: [
              "Built Power BI dashboards tracking Instagram engagement, web traffic, and campaign performance.",
              "Introduced A/B testing for creatives and audience targeting, and reallocated ad spend based on results.",
              "Partnered with design and marketing to align seasonal drops with analytics insights.",
              "Ran weekly performance reviews that turned metrics into clear creative decisions.",
              "Kept a lightweight KPI stack focused on CTR, session depth, and conversion-intent signals.",
            ],
          },
        ],
      },
      {
        id: "research",
        label: "Artifacts",
        heading: "Research and artifacts.",
        blocks: [
          {
            type: "list",
            items: [
              "A performance taxonomy for content types: story, product, community, behind the scenes.",
              "KPIs with decision thresholds so budget could be reallocated quickly.",
              "A drop-launch GTM checklist and a creative testing matrix to make experiments repeatable.",
              "A content playbook documenting winning formats, visual patterns, and timing windows.",
            ],
          },
        ],
      },
      {
        id: "tradeoffs",
        label: "Tradeoffs",
        heading: "Risks and tradeoffs.",
        blocks: [
          {
            type: "decisions",
            items: [
              {
                title: "Don’t let CTR flatten the brand.",
                body: "Over-optimizing for short-term click-through could dilute the story, so performance metrics were balanced with qualitative community feedback.",
              },
              {
                title: "Speed over polish.",
                body: "Prioritized fast iteration over perfect creative to keep the feedback loop tight.",
              },
            ],
          },
        ],
      },
      {
        id: "impact",
        label: "Impact",
        heading: "Impact.",
        blocks: [
          {
            type: "list",
            items: [
              "Followers grew 113% and impressions passed 807K as targeting improved.",
              "Website sessions grew 147% quarter over quarter, supporting stronger drops.",
              "A 21% lift in click-through rate after dashboard insights reshaped ad spend.",
              "The team shipped with clearer creative confidence and faster iteration between drops.",
            ],
          },
        ],
      },
      {
        id: "next",
        label: "What’s next",
        heading: "What I’d do next.",
        blocks: [
          {
            type: "list",
            items: [
              "Automate cohort tracking to connect campaigns with repeat purchases.",
              "Test lifecycle messaging to turn first-time buyers into repeat customers.",
              "Pilot in-person community events to deepen the brand’s cultural flywheel.",
            ],
          },
        ],
      },
    ],
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((study) => study.slug === decodeURIComponent(slug).toLowerCase().trim());
