import Link from "next/link";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 className="h2 footer-cta__title">
            Have a hard product problem? I&apos;d like to hear about it.
          </h2>
          <div className="footer-cta__links">
            <a className="link-arrow link-arrow--large" href="mailto:ehulisesrodriguez@gmail.com">
              ehulisesrodriguez@gmail.com
            </a>
            <a
              className="link-arrow link-arrow--large"
              href="https://www.linkedin.com/in/ehulises/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="footer-cta__meta">
            Houston, Texas. Open to Product Manager and Technical Product Manager conversations,
            remote or relocation.
          </p>
        </div>

        <div className="footer-bottom">
          <nav aria-label="Footer">
            <ul className="footer-nav">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="footer-copyright">© {new Date().getFullYear()} Ehulises Rodriguez, Jr.</p>
        </div>
      </div>
    </footer>
  );
}
