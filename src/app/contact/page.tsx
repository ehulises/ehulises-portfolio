export default function Contact() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Home / Contact</div>
        <h1 className="section-title" style={{ marginTop: "24px" }}>
          Contact
        </h1>
        <div className="grid-2" style={{ marginTop: "32px" }}>
          <div className="card reveal">
            <div className="kicker">Let’s talk</div>
            <h2 className="section-title">Open to PM (GTM/Analytics) roles</h2>
            <p className="hero-subtitle">
              I bring a SWE background to product work and enjoy building systems with fast
              feedback loops. Open to remote work and relocation anywhere.
            </p>
            <div className="tag-row">
              <span className="tag">Product Strategy</span>
              <span className="tag">GTM</span>
              <span className="tag">Analytics</span>
              <span className="tag">SWE</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="kicker">Reach me</div>
            <ul className="inline-list">
              <li>
                Email: <a href="mailto:ehulisesrodriguez@gmail.com">ehulisesrodriguez@gmail.com</a>
              </li>
              <li>
                Phone: <a href="tel:+18328127022">(832) 812-7022</a>
              </li>
              <li>Location: Houston, Texas</li>
              <li>
                LinkedIn: <a href="https://www.linkedin.com/in/ehulises/">linkedin.com/in/ehulises</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-tight">
          <div className="callout sage reveal">
            <div className="kicker">Preferred conversations</div>
            <p className="hero-subtitle">
              Roles focused on workflow automation, product ops, lifecycle growth, and GTM
              enablement. Happy to share case study details or references upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
