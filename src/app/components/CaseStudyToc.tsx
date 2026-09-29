"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  sections: Array<{ id: string; label: string }>;
};

// Highlights the section currently being read and shows reading progress.
// Desktop: sticky table of contents. Smaller screens: a slim bar under the header.
export default function CaseStudyToc({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id);
  const [inBody, setInBody] = useState(false);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.35;
      let current = sections[0]?.id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= anchor) current = section.id;
      }
      setActive(current);

      const body = document.querySelector(".cs-body");
      if (body) {
        const rect = body.getBoundingClientRect();
        const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
        barRef.current?.style.setProperty("--progress", String(progress));
        setInBody(rect.top < anchor && rect.bottom > anchor);
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [sections]);

  const activeIndex = sections.findIndex((section) => section.id === active);

  return (
    <>
      <div className="cs-progress" data-visible={inBody ? "" : undefined} aria-hidden="true">
        <span className="cs-progress__label">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span> {sections[activeIndex]?.label}
        </span>
        <span className="cs-progress__bar" ref={barRef} />
      </div>

      <nav className="cs-toc" aria-label="In this case study">
        <p className="cs-toc__title">In this case study</p>
        <ol>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={section.id === active ? "location" : undefined}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
