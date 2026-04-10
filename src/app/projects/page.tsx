import Link from "next/link";

const projects = [
  {
    kicker: "AI / Writing Tool",
    title: "Rubric's Cube",
    body:
      "Built a full-stack app that ingests a rubric and essay (text/PDF), parses criteria, and generates scores with targeted feedback. FastAPI backend integrates with Vertex AI, uses OCR fallbacks with PyMuPDF + pytesseract, and applies regex-based parsing with pytest coverage. Frontend is a Vite SPA with Chakra UI and drag-and-drop uploads.",
    tags: ["FastAPI", "Vertex AI", "OCR", "React"],
    tone: "tinted",
  },
  {
    kicker: "Trading Tool",
    title: "Trading Signal Workspace",
    body:
      "Built a decision-support tool for equities and options workflows that ingests market data, scores setups against a risk checklist, and surfaces watchlist candidates with price, volume, and momentum context. Combined Python data pipelines, backtesting notebooks, and a lightweight interface for journaling trades and reviewing execution after the close.",
    tags: ["Python", "Market Data", "Backtesting", "React Dashboard"],
    tone: "sky",
  },
  {
    kicker: "ML Recommender",
    title: "Uusic",
    body:
      "Developed a recommendation engine using the Million Song Dataset and Last.fm data. Trained a Siamese-style PyTorch model with triplet loss, benchmarked against a KNN baseline, and shipped a Flask app for persona-based recommendations and precision and recall metrics.",
    tags: ["PyTorch", "Recommender Systems", "Flask", "Data Engineering"],
    tone: "sage",
  },
  {
    kicker: "Streaming Analysis",
    title: "YouTube Quality Guard",
    body:
      "Built a streaming analysis system using Python automation, FFmpeg, and youtube-dl to compare Free vs. Premium YouTube streams across content types. Engineered a benchmarking pipeline with libvmaf, PSNR, SSIM, and Google's UVQ to reveal that Premium tiers do not always outperform Free streams.",
    tags: ["Python", "FFmpeg", "Streaming QA", "Data Viz"],
    tone: "sun",
  },
  {
    kicker: "Mobile Systems",
    title: "Second Brain",
    body:
      "Designing and building a productivity app that automates schedules, wellness breaks, and daily activities into personalized calendar blocks. Managing iOS (TestFlight) and Android (internal Play Store) releases, with a shared C++ scheduling engine, OS-level background tasks, and performance tuning via Instruments and Android Studio.",
    tags: ["Swift", "Kotlin", "C++", "Mobile Systems"],
    tone: "tinted",
  },
  {
    kicker: "Simulation System",
    title: "Agent-Based Wildfire Response Simulation",
    body:
      "Built a large-scale agent-based simulation over real GIS terrain (10-meter resolution) modeling fire spread, weather, and firefighter deployment. Implemented distributed agent logic, dynamic weather and fuel models, and ran parameter sweeps that surfaced a critical threshold where scaling resources reduced burn area by roughly 40%.",
    tags: ["Python", "ABM", "GIS", "Simulation"],
    tone: "sky",
  },
];

export default function Projects() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Projects</div>
        <div className="page-intro">
          <div className="page-hero reveal">
            <div className="kicker">Projects</div>
            <h1 className="hero-title">Technical builds that show how I think and make things real.</h1>
            <p className="hero-subtitle">
              A mix of personal, academic, and self-directed projects across AI, data, mobile,
              simulation, and market tools. The common thread is building systems that turn messy
              inputs into clearer decisions.
            </p>
          </div>
          <aside className="card page-side-card reveal">
            <div className="kicker">Most Comfortable With</div>
            <h2 className="section-title">Tools I tend to reach for fastest.</h2>
            <div className="tag-row">
              <span className="tag">Python</span>
              <span className="tag">SQL</span>
              <span className="tag">Power BI</span>
              <span className="tag">Tableau</span>
              <span className="tag">React</span>
              <span className="tag">FastAPI</span>
            </div>
          </aside>
        </div>

        <div className="grid-2">
          {projects.map((project) => (
            <div className={`card ${project.tone} reveal`} key={project.title}>
              <div className="kicker">{project.kicker}</div>
              <h2 className="section-title">{project.title}</h2>
              <p className="hero-subtitle">{project.body}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-tight">
          <div className="callout reveal">
            <div className="kicker">Why These Matter</div>
            <h2 className="section-title">They show builder depth, not just technical familiarity.</h2>
            <p className="hero-subtitle">
              These projects are where product thinking, experimentation, and technical execution
              overlap the most for me. They are often the fastest way to understand how I approach
              systems, ambiguity, and iteration.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/contact">
                Ask Me About a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
