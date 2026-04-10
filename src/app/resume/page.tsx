const resumeUrl = "/resume.pdf";

const resumeHighlights = [
  "Microsoft PM who built rollout governance systems that saved 60 engineering hours per month.",
  "Founder who grew a 4,000+ community and drove 113% follower growth with 807k+ impressions.",
  "Builder with React, Python, Swift, and C++ experience across product systems and tools.",
  "Best aligned with PM roles spanning GTM, analytics, workflow systems, and cross-functional execution.",
];

export default function Resume() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Resume</div>
        <div className="page-hero-grid">
          <div className="card tinted reveal">
            <div className="kicker">Resume</div>
            <h1 className="hero-title">A concise view of the work, range, and outcomes.</h1>
            <p className="hero-subtitle">
              Latest resume for Ehulises Rodriguez, Jr. Open to PM (GTM/Analytics) roles with a
              SWE background.
            </p>
            <p className="card-meta">Last updated: February 2026</p>
            <div className="hero-actions">
              <a className="button primary" href={resumeUrl} download>
                Download Resume
              </a>
              <a className="button" href={resumeUrl} target="_blank" rel="noreferrer">
                Open in New Tab
              </a>
            </div>
          </div>
          <div className="card reveal resume-highlights-card">
            <div className="kicker">Highlights</div>
            <ul className="inline-list list-chevron">
              {resumeHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-tight">
          <div className="card reveal resume-card">
            <iframe className="resume-frame" title="Resume PDF" src={resumeUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
