"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import { useTranslations } from "next-intl";

export function VisionSection() {
  const t = useTranslations("vision");

  const ref = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const isInView = useInView(ref, {
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "15%"]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        py-40
        md:py-52
        px-6
        md:px-12
        lg:px-24
        overflow-hidden
      "
    >
      {/* ===================================== */}
      {/* BACKGROUND */}
      {/* ===================================== */}

      <motion.div
        style={{ y: isMobile ? 0 : bgY }}
        className="absolute -top-32 -bottom-32 inset-x-0 z-0"
      >
        {/* IMAGE */}
        <div
          className="
            absolute inset-0
            bg-cover
            bg-center
            scale-105
          "
          style={{
            backgroundImage:
              "url('/uni2.jpg')",
          }}
        />

        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />

        {/* VIOLET ATMOSPHERE */}
        <div className="absolute inset-0 bg-violet-500/[0.08]" />

        {/* BLUR */}
        <div className="absolute inset-0 backdrop-blur-[4px]" />
      </motion.div>

      {/* ===================================== */}
      {/* GLOWS */}
      {/* ===================================== */}

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/10 blur-[120px] rounded-full" />
      </div>

      {/* ===================================== */}
      {/* CONTENT */}
      {/* ===================================== */}

      <div className="relative z-20 max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: isMobile ? 12 : 40,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: isMobile ? 0.4 : 0.8,
          }}
          className="
            font-display
            text-5xl
            md:text-7xl
            font-semibold
            tracking-[-0.05em]
            leading-[0.92]
            text-white
            mb-8
          "
          style={{
            textShadow:
              "0 10px 40px rgba(0,0,0,0.45)",
          }}
        >
          {t("title")}
        </motion.h2>

        {/* PREMIUM UNDERLINE */}
        <motion.div
          initial={{
            width: 0,
          }}
          animate={
            isInView
              ? {
                  width: 120,
                }
              : {}
          }
          transition={{
            delay: isMobile ? 0.1 : 0.3,
            duration: isMobile ? 0.4 : 0.8,
          }}
          className="
            h-px
            bg-gradient-to-r
            from-transparent
            via-violet-400
            to-transparent
            mx-auto
            mb-14
          "
        />

        {/* TEXT CONTENT */}
        <div className="space-y-10">
          {/* PARAGRAPH 1 */}
          <motion.p
            initial={{
              opacity: 0,
              y: isMobile ? 10 : 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: isMobile ? 0.1 : 0.2,
              duration: isMobile ? 0.3 : 0.5,
            }}
            className="
              text-lg
              md:text-2xl
              font-medium
              tracking-tight
              leading-relaxed
              text-white/80
              max-w-4xl
              mx-auto
            "
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            {t("paragraph1")}
          </motion.p>

          {/* PARAGRAPH 2 */}
          <motion.p
            initial={{
              opacity: 0,
              y: isMobile ? 10 : 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: isMobile ? 0.15 : 0.5,
              duration: isMobile ? 0.3 : 0.5,
            }}
            className="
              text-lg
              md:text-2xl
              font-medium
              tracking-tight
              leading-relaxed
              text-white/80
              max-w-4xl
              mx-auto
            "
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            <span
              className="
                font-semibold
                bg-gradient-to-r
                from-violet-300
                via-violet-100
                to-fuchsia-300
                bg-clip-text
                text-transparent
              "
            >
              {t("highlight")}
            </span>{" "}
            {t("paragraph3")}
          </motion.p>

          {/* BOTTOM ACCENT */}
          <motion.div
            initial={{
              width: 0,
            }}
            animate={
              isInView
                ? {
                    width: 180,
                  }
                : {}
            }
            transition={{
              delay: isMobile ? 0.2 : 0.8,
              duration: isMobile ? 0.4 : 0.8,
            }}
            className="
              h-px
              bg-gradient-to-r
              from-transparent
              via-violet-400/70
              to-transparent
              mx-auto
              mt-10
            "
          />
        </div>
      </div>
    </section>
  );
}