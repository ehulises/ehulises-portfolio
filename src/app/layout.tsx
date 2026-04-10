import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import RevealProvider from "./components/RevealProvider";
import SiteNav from "./components/SiteNav";
import "./globals.css";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ehulises Rodriguez, Jr. | Product Manager",
  description:
    "Product manager focused on GTM, analytics, and workflow systems. SWE background; former Microsoft PM and founder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <div className="app-shell">
          <RevealProvider />
          <header className="site-header">
            <div className="container header-row">
              <SiteNav />
            </div>
          </header>
          <main className="page">{children}</main>
          <footer className="site-footer">
            <div className="container">
              <div className="footer-shell reveal">
                <div className="footer-copy">
                  <div className="kicker">Let&apos;s Connect</div>
                  <div className="footer-title">
                    Product thinking, founder energy, and systems that ship.
                  </div>
                  <div className="footer-sub">
                    Houston, Texas - Open to PM and product-adjacent roles - Remote or relocation
                    anywhere
                  </div>
                </div>
                <div className="footer-meta">
                  <div className="footer-item">
                    <div className="footer-label">Email</div>
                    <a className="footer-link" href="mailto:ehulisesrodriguez@gmail.com">
                      ehulisesrodriguez@gmail.com
                    </a>
                  </div>
                  <div className="footer-item">
                    <div className="footer-label">LinkedIn</div>
                    <a className="footer-link" href="https://www.linkedin.com/in/ehulises/">
                      linkedin.com/in/ehulises
                    </a>
                  </div>
                  <div className="footer-item">
                    <div className="footer-label">Resume</div>
                    <Link className="footer-link" href="/resume">
                      View resume
                    </Link>
                  </div>
                  <div className="footer-item">
                    <div className="footer-label">Projects</div>
                    <Link className="footer-link" href="/projects">
                      See projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
