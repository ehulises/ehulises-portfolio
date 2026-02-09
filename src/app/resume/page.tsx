const resumeUrl = "/resume.pdf";

export default function Resume() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Home / Resume</div>
        <div className="section-tight">
          <div className="grid-2">
            <div className="card reveal">
              <div className="kicker">Resume</div>
              <h1 className="section-title">Download PDF</h1>
              <p className="hero-subtitle">
                Latest resume for Ehulises Rodriguez, Jr. Open to PM (GTM/Analytics) roles with a
                SWE background.
              </p>
              <p className="hero-subtitle" style={{ marginTop: "10px" }}>
                Last updated: February 2026
              </p>
              <div className="hero-actions">
                <a className="button primary" href={resumeUrl} download>
                  Download Resume
                </a>
                <a className="button" href={resumeUrl} target="_blank" rel="noreferrer">
                  Open in New Tab
                </a>
              </div>
            </div>
            <div className="card reveal">
              <div className="kicker">Highlights</div>
              <ul className="inline-list">
                <li>Microsoft PM who built rollout governance systems saving 60 engineering hours/month</li>
                <li>Founder who grew a 4,000+ community and delivered 113% IG growth + 147% QoQ sessions</li>
                <li>SWE background: shipped React + Python pipelines, improving accuracy from 76% to 92%</li>
                <li>GTM + analytics: dashboards, A/B testing, and ROI lift of ~25% for clients</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-tight">
          <div className="card reveal" style={{ padding: "0" }}>
            <iframe
              title="Resume PDF"
              src={resumeUrl}
              style={{ width: "100%", height: "80vh", border: "none", borderRadius: "18px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
