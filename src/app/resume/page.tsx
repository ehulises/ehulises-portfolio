import type { Metadata } from "next";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Ehulises Rodriguez, Jr.",
};

const resumeUrl = "/resume.pdf";

export default function Resume() {
  return (
    <>
      <PageIntro
        eyebrow="Resume"
        title="The one-page version."
        lede="Lead Engineering Manager at WRTH, Product Manager at Microsoft, founder of SLAD, and a Computer Science background, in one PDF."
      >
        <div className="actions">
          <a className="btn btn--primary" href={resumeUrl} download>
            Download PDF
          </a>
          <a className="btn btn--secondary" href={resumeUrl} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
        </div>
        <p className="note">Last updated September 2026.</p>
      </PageIntro>

      <section className="section section--gray section--snug" aria-label="Resume preview">
        <div className="container">
          <div className="resume-frame">
            <iframe title="Resume PDF preview" src={resumeUrl} />
          </div>
          <p className="resume-fallback">
            Preview not loading on your device?{" "}
            <a className="link-arrow" href={resumeUrl} target="_blank" rel="noreferrer">
              Open the PDF
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
