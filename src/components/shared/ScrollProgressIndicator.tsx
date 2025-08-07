"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalWidth =
        document.querySelector(".horizontal-content")?.scrollWidth || 0;
      const scrollPosition = window.scrollX;
      const viewportWidth = window.innerWidth;
      const newProgress = (scrollPosition / (totalWidth - viewportWidth)) * 100;
      setProgress(Math.min(100, Math.max(0, newProgress)));
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-200 z-50">
      <div
        className="h-full bg-orange-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
