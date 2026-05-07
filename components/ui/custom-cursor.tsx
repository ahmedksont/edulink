"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const ringRefPos = useRef({
    x: 0,
    y: 0,
  });

  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Disable on mobile/tablet
    if (window.innerWidth < 768) return;

    // Mouse move
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // DOT follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Smooth ring interpolation
    const lerp = (
      start: number,
      end: number,
      factor: number
    ) => start + (end - start) * factor;

    const animate = () => {
      ringRefPos.current.x = lerp(
        ringRefPos.current.x,
        mouseRef.current.x,
        0.12
      );

      ringRefPos.current.y = lerp(
        ringRefPos.current.y,
        mouseRef.current.y,
        0.12
      );

      if (ringRef.current) {
        ringRef.current.style.left = `${ringRefPos.current.x}px`;
        ringRef.current.style.top = `${ringRefPos.current.y}px`;
      }

      rafRef.current =
        requestAnimationFrame(animate);
    };

    animate();

    // Hover states
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const bindHoverEvents = () => {
      const interactables = document.querySelectorAll(
        'a, button, [data-cursor="hover"]'
      );

      interactables.forEach((el) => {
        el.addEventListener(
          "mouseenter",
          onEnter
        );

        el.addEventListener(
          "mouseleave",
          onLeave
        );
      });

      return interactables;
    };

    const interactables = bindHoverEvents();

    window.addEventListener(
      "mousemove",
      onMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        onMove
      );

      cancelAnimationFrame(rafRef.current);

      interactables.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          onEnter
        );

        el.removeEventListener(
          "mouseleave",
          onLeave
        );
      });
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden md:block h-2 w-2 rounded-full bg-violet-500 -translate-x-1/2 -translate-y-1/2"
      />

      {/* RING */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed z-[9998] hidden md:block rounded-full border border-violet-500/70 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out
        ${
          isHovering
            ? "h-14 w-14 bg-violet-500/10 border-violet-400 scale-110"
            : "h-8 w-8"
        }`}
      />
    </>
  );
}