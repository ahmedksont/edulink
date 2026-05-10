"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedText } from "@/components/ui/animated-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChevronDown } from "lucide-react";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      {/* OVERLAYS */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Mobile video */}
          <source
            src="/mobile-video.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />

          {/* Desktop video */}
          <source
            src="/new.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
        </video>
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
        className="relative z-10 text-center max-w-6xl mx-auto"
      >

       {/* TITLE */}
<AnimatedText
  text={t("title")}
  className={`
    ${outfit.className}
    
    text-5xl
    sm:text-6xl
    md:text-8xl
    lg:text-[7rem]

    font-black
    tracking-[-0.07em]
    leading-[0.85]

    mb-6
    md:mb-8

    text-white
  `}
  delay={0.1}
  style={{
    textShadow: `
      0 0 12px rgba(167,139,250,0.25),
      0 0 30px rgba(139,92,246,0.18),
      0 10px 40px rgba(0,0,0,0.55)
    `,
  }}
/>

{/* SUB TITLE */}
<AnimatedText
  text={t("sub-title")}
  className={`
    ${outfit.className}

    mt-2

    text-3xl
    sm:text-4xl
    md:text-6xl
    lg:text-[4.5rem]

    font-medium
    tracking-[-0.04em]
    leading-[0.95]

    mb-10
    md:mb-12

    text-white/90
  `}
  delay={0.2}
  style={{
    textShadow: `
      0 0 10px rgba(139,92,246,0.12),
      0 10px 40px rgba(0,0,0,0.8)
    `,
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
  className={`
    ${outfit.className}

    text-sm
    md:text-lg

    font-light

    tracking-tight
    leading-relaxed

    text-white/70

    max-w-2xl
    mx-auto

    mb-10
    md:mb-14
  `}
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
            className={`
              ${outfit.className}
              px-8
              py-4
              md:px-10
              md:py-5
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-500
              text-white
              font-semibold
              tracking-tight
              text-lg
              shadow-[0_10px_50px_rgba(139,92,246,0.45)]
              hover:scale-105
              transition-all
              duration-300
            `}
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