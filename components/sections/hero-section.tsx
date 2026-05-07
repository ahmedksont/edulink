"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedText } from "@/components/ui/animated-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("../3d/HeroScene"),
  { ssr: false }
);

export function HeroSection() {
  const t = useTranslations("hero");

  const ref = useRef<HTMLDivElement>(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-[100svh]
        flex
        items-center
        justify-center
        px-6
        py-24
        md:py-0
        overflow-hidden
      "
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Desktop 3D Scene */}
        
          <HeroScene />

      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* GRID */}
      <div
        className="
          hidden
          md:block
          absolute
          inset-0
          z-[1]
          opacity-[0.03]
          dark:opacity-[0.06]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 pointer-events-none" />

      {/* GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-violet-500/15 blur-[40px] md:blur-[100px] rounded-full" />
      </div>

      {/* CONTENT */}
      <motion.div
        style={{
          y: isMobile ? 0 : y,
          opacity,
        }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* TITLE */}
        <AnimatedText
          text={t("title")}
          className="
            font-display
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-[5.5rem]
            font-semibold
            tracking-[-0.05em]
            leading-[0.9]
            mb-6
            text-white
          "
          delay={0.1}
          style={{
            textShadow:
              "0 10px 30px rgba(0,0,0,0.8)",
          }}
        />

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="
            font-sans
            text-base
            md:text-xl
            font-medium
            tracking-tight
            leading-relaxed
            text-white/75
            max-w-2xl
            mx-auto
            mb-10
            md:mb-12
          "
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
        >
          <MagneticButton
            className="
              px-6 py-3
              md:px-8 md:py-4
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-500
              text-white
              font-semibold
              tracking-tight
              text-base md:text-lg
              shadow-[0_10px_40px_rgba(139,92,246,0.35)]
              hover:scale-105
              transition-all duration-300
            "
          >
            {t("cta")}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}