import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import RevealProvider from "./components/RevealProvider";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ehulises Rodriguez, Jr. | Product Leader",
    template: "%s | Ehulises Rodriguez, Jr.",
  },
  description:
    "Product leader with technical depth. Lead Engineering Manager at WRTH, former Microsoft Product Manager, and founder. Taking systems from ambiguity to production.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <RevealProvider />
        <SiteHeader />
        <main id="main" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
