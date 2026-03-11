"use client";

import { useState, useEffect, useRef } from "react";

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
  const [text, setText] = useState("");
  const stateRef = useRef({
    wordIndex: 0,
    charIndex: 0,
    isDeleting: false,
    isPaused: false,
    lastTick: 0,
  });

  useEffect(() => {
    let rafId: number;

    const animate = (timestamp: number) => {
      const s = stateRef.current;

      if (s.lastTick === 0) {
        s.lastTick = timestamp;
      }

      const elapsed = timestamp - s.lastTick;
      const currentWord = words[s.wordIndex];

      if (s.isPaused) {
        if (elapsed >= pauseDuration) {
          s.isPaused = false;
          s.isDeleting = true;
          s.lastTick = timestamp;
        }
      } else if (s.isDeleting) {
        if (elapsed >= deletingSpeed) {
          s.charIndex--;
          setText(currentWord.substring(0, s.charIndex));
          s.lastTick = timestamp;

          if (s.charIndex === 0) {
            s.isDeleting = false;
            s.wordIndex = (s.wordIndex + 1) % words.length;
          }
        }
      } else {
        if (elapsed >= typingSpeed) {
          s.charIndex++;
          setText(currentWord.substring(0, s.charIndex));
          s.lastTick = timestamp;

          if (s.charIndex === currentWord.length) {
            s.isPaused = true;
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}
