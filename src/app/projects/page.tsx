import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal, academic, and self-directed builds across AI, data, mobile, and simulation.",
};

const projects = [
  {
    kind: "AI writing tool",
    title: "Rubric’s Cube",
    body: "A full-stack app that ingests a rubric and an essay (text or PDF), parses the criteria, and generates scores with targeted feedback. A FastAPI backend integrates with Vertex AI, falls back to OCR with PyMuPDF and pytesseract, and uses regex-based parsing with pytest coverage. The front end is a Vite SPA with Chakra UI and drag-and-drop uploads.",
    stack: "FastAPI · Vertex AI · OCR · React",
  },
  {
    kind: "Trading tool",
    title: "Trading Signal Workspace",
    body: "A decision-support tool for equities and options that ingests market data, scores setups against a risk checklist, and surfaces watchlist candidates with price, volume, and momentum context. Python data pipelines, backtesting notebooks, and a lightweight interface for journaling trades and reviewing execution after the close.",
    stack: "Python · Market data · Backtesting · React",
  },
  {
    kind: "ML recommender",
    title: "Uusic",
    body: "A recommendation engine built on the Million Song Dataset and Last.fm data. A Siamese-style PyTorch model trained with triplet loss, benchmarked against a KNN baseline, and shipped as a Flask app with persona-based recommendations and precision and recall metrics.",
    stack: "PyTorch · Recommender systems · Flask",
  },
  {
    kind: "Streaming analysis",
    title: "YouTube Quality Guard",
    body: "A streaming analysis system using Python automation, FFmpeg, and youtube-dl to compare Free and Premium YouTube streams across content types. A benchmarking pipeline with libvmaf, PSNR, SSIM, and Google’s UVQ showed that Premium tiers don’t always outperform Free.",
    stack: "Python · FFmpeg · Streaming QA · Data viz",
  },
  {
    kind: "Mobile systems",
    title: "Second Brain",
    body: "A productivity app that turns schedules, wellness breaks, and daily activities into personalized calendar blocks. iOS (TestFlight) and Android (internal Play Store) releases share a C++ scheduling engine, with OS-level background tasks and performance tuning in Instruments and Android Studio.",
    stack: "Swift · Kotlin · C++",
  },
  {
    kind: "Simulation",
    title: "Agent-Based Wildfire Response Simulation",
    body: "A large-scale agent-based simulation over real 10-meter GIS terrain, modeling fire spread, weather, and firefighter deployment. Parameter sweeps surfaced a critical threshold where scaling resources reduced burn area by roughly 40%.",
    stack: "Python · Agent-based modeling · GIS",
  },
];

export default function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Things I built to understand a problem properly."
        lede="Personal, academic, and self-directed builds across AI, data, mobile, simulation, and markets. They’re where product curiosity and hands-on engineering overlap."
      />
      <section className="section section--top-rule" aria-label="Projects">
        <div className="container">
          <ul className="project-grid">
            {projects.map((project) => (
              <li className="project reveal" key={project.title}>
                <p className="eyebrow">{project.kind}</p>
                <h2 className="h3">{project.title}</h2>
                <p>{project.body}</p>
                <p className="project__stack">{project.stack}</p>
              </li>
            ))}
          </ul>
          <p className="section-foot">
            Most comfortable with Python, SQL, React, TypeScript, and PostgreSQL.{" "}
            <Link className="link-arrow" href="/contact">
              Ask me about a project
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
