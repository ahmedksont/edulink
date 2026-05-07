"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,

      smoothWheel: true,

      wheelMultiplier: 1,

      touchMultiplier: 2,

      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);

      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, {
      immediate: true,
    });
  }, [pathname]);

  return <>{children}</>;
}