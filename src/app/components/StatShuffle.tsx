"use client";

import { useEffect, useState } from "react";

type Props = {
  value: string;
  className?: string;
};

const randomizeCharacter = (character: string) => {
  if (character === " ") {
    return " ";
  }

  if (!/[a-z0-9]/i.test(character)) {
    return character;
  }

  const pool = /\d/.test(character) ? "0123456789" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return pool[Math.floor(Math.random() * pool.length)];
};

export default function StatShuffle({ value, className }: Props) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const start = window.performance.now();
    const duration = 1150;

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const locked = Math.floor(progress * value.length);

      setDisplayValue(
        value
          .split("")
          .map((character, index) => {
            if (index < locked) {
              return character;
            }

            return randomizeCharacter(character);
          })
          .join("")
      );

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span className={className}>{displayValue}</span>;
}
