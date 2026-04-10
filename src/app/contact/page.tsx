import MailComposer from "../components/MailComposer";

const contactDetails = [
  {
    label: "Email",
    value: "ehulisesrodriguez@gmail.com",
    href: "mailto:ehulisesrodriguez@gmail.com",
  },
  {
    label: "Phone",
    value: "(832) 812-7022",
    href: "tel:+18328127022",
  },
  {
    label: "Location",
    value: "Houston, Texas",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ehulises",
    href: "https://www.linkedin.com/in/ehulises/",
  },
];

export default function Contact() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="breadcrumbs">Contact</div>
        <div className="page-intro">
          <div className="page-hero reveal">
            <div className="kicker">Contact</div>
            <h1 className="hero-title">Easy ways to reach me, plus what I&apos;m looking for next.</h1>
            <p className="hero-subtitle">
              If there&apos;s a role, project, or conversation where product thinking, GTM, analytics,
              and execution range would help, I&apos;m happy to connect.
            </p>
          </div>
          <aside className="card page-side-card reveal">
            <div className="kicker">Best Fit</div>
            <h2 className="section-title">The strongest fit is product work with range.</h2>
            <ul className="inline-list list-chevron">
              <li>Product management and product development</li>
              <li>Workflow systems and product ops</li>
              <li>GTM, analytics, and cross-functional execution</li>
            </ul>
          </aside>
        </div>
        <div className="grid-2">
          <div className="card tinted reveal">
            <div className="kicker">Let&apos;s Talk</div>
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
            <div className="contact-list">
              {contactDetails.map((item) => (
                <div className="contact-item" key={item.label}>
                  <div className="kicker">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-tight">
          <div className="grid-2">
            <div className="callout sage reveal">
              <div className="kicker">Preferred Conversations</div>
              <p className="hero-subtitle">
                Roles focused on product management, product development, workflow automation,
                product ops, lifecycle growth, and GTM enablement. Happy to share case study
                details or references upon request.
              </p>
            </div>
            <div className="card sun reveal">
              <div className="kicker">Working Style</div>
              <p className="hero-subtitle">
                I tend to do my best work with teams that value clear thinking, quick iteration,
                and people who can jump comfortably between strategy and execution.
              </p>
            </div>
          </div>
          <div className="stack-top">
            <MailComposer />
          </div>
        </div>
      </div>
    </section>
  );
}
