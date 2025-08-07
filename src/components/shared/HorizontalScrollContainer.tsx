"use client";

import { ReactNode, useRef, useEffect } from "react";

export const HorizontalScrollContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let isScrolling = false;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling || Math.abs(e.deltaY) < 30) return;

      e.preventDefault(); // ← MUY importante para que no propague

      isScrolling = true;

      const sectionWidth = window.innerWidth;
      const direction = e.deltaY > 0 ? 1 : -1;
      const targetScrollLeft = container.scrollLeft + direction * sectionWidth;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });

      // Bloquea nuevos scrolls hasta que termine el movimiento
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // duración de la transición (ajustable)
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className="horizontal-scroll-container">
      {children}
    </div>
  );
};
