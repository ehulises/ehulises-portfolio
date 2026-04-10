"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!elements.length) return;

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    const fallback = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("is-visible"));
    }, 1500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
