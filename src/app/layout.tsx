import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import RevealProvider from "./components/RevealProvider";
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
              <div className="logo-block">
                <span className="logo-mark">ER</span>
                <div>
                  <div className="logo-name">Ehulises Rodriguez, Jr.</div>
                  <div className="logo-role">PM (GTM/Analytics) · SWE background</div>
                </div>
              </div>
              <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/work">Work</Link>
                <Link href="/education">Education</Link>
                <Link href="/case-studies">Case Studies</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/contact" className="nav-cta">
                  Contact
                </Link>
              </nav>
            </div>
          </header>
          <main className="page">{children}</main>
          <footer className="site-footer">
            <div className="container footer-row">
              <div>
                <div className="footer-title">Let’s build something that ships.</div>
                <div className="footer-sub">
                  Houston, Texas · Open to PM (GTM/Analytics) roles · Remote or relocation anywhere
                </div>
              </div>
              <div className="footer-links">
                <a href="mailto:ehulisesrodriguez@gmail.com">ehulisesrodriguez@gmail.com</a>
                <a href="https://www.linkedin.com/in/ehulises/">linkedin.com/in/ehulises</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
