"use client";

import { useEffect, useRef, useMemo } from "react";

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
};

export function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  // Reserve width for the longest word to prevent layout shift
  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), ""),
    [words],
  );

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let rafId: number;
    let lastTick = 0;
    let isPaused = false;

    const animate = (timestamp: number) => {
      if (lastTick === 0) lastTick = timestamp;
      const elapsed = timestamp - lastTick;
      const currentWord = words[wordIndex];

      if (isPaused) {
        if (elapsed >= pauseDuration) {
          isPaused = false;
          isDeleting = true;
          lastTick = timestamp;
        }
      } else if (isDeleting) {
        if (elapsed >= deletingSpeed) {
          charIndex--;
          el.textContent = currentWord.substring(0, charIndex);
          lastTick = timestamp;
          if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
          }
        }
      } else {
        if (elapsed >= typingSpeed) {
          charIndex++;
          el.textContent = currentWord.substring(0, charIndex);
          lastTick = timestamp;
          if (charIndex === currentWord.length) {
            isPaused = true;
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-block relative ${className}`}>
      {/* Invisible sizer to reserve width for longest word */}
      <span className="invisible" aria-hidden="true">{longestWord}</span>
      {/* Visible typed text — GPU-promoted layer to avoid Chrome reflow jitter */}
      <span
        ref={textRef}
        className="absolute left-0 top-0"
        style={{ willChange: "contents", contain: "layout style" }}
      />
      <span className="animate-blink">|</span>
    </span>
  );
}
