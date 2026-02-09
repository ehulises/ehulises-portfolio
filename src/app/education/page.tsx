export default function Education() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Home / Education</div>
        <h1 className="section-title" style={{ marginTop: "24px" }}>
          Education & Leadership
        </h1>
        <div className="grid-2" style={{ marginTop: "32px" }}>
          <div className="card reveal">
            <div className="kicker">Northwestern University</div>
            <h3 className="section-title">B.S. Computer Science</h3>
            <p className="hero-subtitle">Evanston, IL · 2025 · GPA 3.6/4</p>
            <div className="tag-row">
              <span className="tag">Systems</span>
              <span className="tag">AI/ML</span>
              <span className="tag">Engineering</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="kicker">Houston Community College</div>
            <h3 className="section-title">A.S. Science</h3>
            <p className="hero-subtitle">Houston, TX · 2021 · Highest Honors · GPA 3.99/4</p>
            <div className="tag-row">
              <span className="tag">STEM</span>
              <span className="tag">Honors</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="kicker">North Houston Early College HS</div>
            <h3 className="section-title">Dual Enrollment</h3>
            <p className="hero-subtitle">Houston, TX · 2021 · Rank 1 · GPA 4.76/4</p>
            <div className="tag-row">
              <span className="tag">Leadership</span>
              <span className="tag">Valedictorian</span>
            </div>
          </div>
        </div>

        <div className="section-tight">
          <div className="kicker">Extracurriculars</div>
          <div className="card reveal">
            <div className="work-row">
              <div>
                <div className="section-title">Society of Professional Hispanic Engineers</div>
                <div className="work-meta">Secretary, Mentor · Sep 2021 – Jun 2025</div>
              </div>
              <ul className="inline-list">
                <li>Led mentorship for 8 underrepresented students into internships at top firms.</li>
                <li>Iterated on resume workshops and interview prep based on mentee feedback.</li>
              </ul>
            </div>
            <div className="work-row">
              <div>
                <div className="section-title">Phi Gamma Delta</div>
                <div className="work-meta">President, Treasurer · Mar 2022 – Jun 2025</div>
              </div>
              <ul className="inline-list">
                <li>Doubled chapter revenue by redesigning budget strategy and fundraising.</li>
                <li>Led inclusive community building across 30+ represented backgrounds.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-tight">
          <div className="kicker">Notable Mentions</div>
          <div className="card reveal">
            <p className="hero-subtitle" style={{ marginBottom: "16px" }}>
              Notable personal milestones (non-official awards).
            </p>
            <ul className="inline-list">
              <li>Valedictorian; highest GPA in high school history.</li>
              <li>Highest SAT and ACT scores in school history.</li>
              <li>Most selective university admission in high school history.</li>
              <li>First-generation college student.</li>
              <li>Completed an associate’s degree before high school diploma.</li>
            </ul>
          </div>
        </div>

        <div className="section-tight">
          <div className="kicker">Northwestern Projects</div>
          <div className="grid-2" style={{ marginTop: "20px" }}>
            <div className="card reveal">
              <div className="kicker">Northwestern University</div>
              <h3 className="section-title">Rubric’s Cube: AI essay‑editing web app</h3>
              <p className="hero-subtitle">
                Built a full-stack app that ingests a rubric and essay (text/PDF), parses criteria,
                and generates scores with targeted feedback. FastAPI backend integrates with
                Vertex AI, uses OCR fallbacks with PyMuPDF + pytesseract, and applies regex-based
                parsing with pytest coverage. Frontend is a Vite SPA with Chakra UI and
                drag-and-drop uploads.
              </p>
              <div className="tag-row">
                <span className="tag">FastAPI</span>
                <span className="tag">Vertex AI</span>
                <span className="tag">OCR</span>
                <span className="tag">React</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">Northwestern University</div>
              <h3 className="section-title">Uusic: ML music recommender</h3>
              <p className="hero-subtitle">
                Developed a recommendation engine using the Million Song Dataset and Last.fm data.
                Trained a Siamese-style PyTorch model with triplet loss, benchmarked against a
                KNN baseline, and shipped a Flask app for persona-based recommendations and
                precision/recall metrics.
              </p>
              <div className="tag-row">
                <span className="tag">PyTorch</span>
                <span className="tag">Recommender Systems</span>
                <span className="tag">Flask</span>
                <span className="tag">Data Engineering</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">Research Report</div>
              <h3 className="section-title">YouTube Quality Guard</h3>
              <p className="hero-subtitle">
                Built a streaming analysis system using Python automation, FFmpeg, and youtube-dl
                to compare Free vs. Premium YouTube streams across content types. Engineered a
                benchmarking pipeline with libvmaf, PSNR, SSIM, and Google’s UVQ to reveal that
                Premium tiers don’t always outperform Free streams.
              </p>
              <div className="tag-row">
                <span className="tag">Python</span>
                <span className="tag">FFmpeg</span>
                <span className="tag">Streaming QA</span>
                <span className="tag">Data Viz</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">WIP · Mobile App</div>
              <h3 className="section-title">Second Brain</h3>
              <p className="hero-subtitle">
                Designing and building a productivity app that automates schedules, wellness
                breaks, and daily activities into personalized calendar blocks. Managing iOS
                (TestFlight) and Android (internal Play Store) releases, with a shared C++ scheduling
                engine, OS-level background tasks, and performance tuning via Instruments and
                Android Studio.
              </p>
              <div className="tag-row">
                <span className="tag">Swift</span>
                <span className="tag">Kotlin</span>
                <span className="tag">C++</span>
                <span className="tag">Mobile Systems</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">Course Project · Computer Science</div>
              <h3 className="section-title">Agent-Based Wildfire Response Simulation</h3>
              <p className="hero-subtitle">
                Built a large-scale agent-based simulation over real GIS terrain (10-meter
                resolution) modeling fire spread, weather, and firefighter deployment. Implemented
                distributed agent logic, dynamic weather/fuel models, and ran parameter sweeps that
                surfaced a critical threshold where scaling resources reduced burn area by ~40%.
              </p>
              <div className="tag-row">
                <span className="tag">Python</span>
                <span className="tag">ABM</span>
                <span className="tag">GIS</span>
                <span className="tag">Simulation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
