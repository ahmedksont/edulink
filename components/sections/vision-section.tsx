"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { useTranslations } from "next-intl";

export function VisionSection() {
  const t = useTranslations("vision");

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-hidden
        py-28
        md:py-40
        px-6
        md:px-12
        lg:px-24
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/uni2.jpg"
          alt="Vision background"
          fill
          priority={false}
          sizes="100vw"
          className="
            object-cover
            scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CINEMATIC DEPTH */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/40
            via-black/50
            to-black/90
          "
        />

        {/* SOFT VIOLET TINT */}
        <div className="absolute inset-0 bg-violet-500/[0.05]" />
      </div>

      {/* LIGHT GLOWS */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[300px]
            rounded-full
            bg-violet-500/10
            blur-2xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[250px]
            h-[250px]
            rounded-full
            bg-fuchsia-500/10
            blur-2xl
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-20
          mx-auto
          max-w-5xl
          text-center
        "
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
          }}
          className="
            mb-8
            font-display
            text-5xl
            md:text-7xl
            font-semibold
            tracking-[-0.05em]
            leading-[0.92]
            text-white
          "
        >
          {t("title")}
        </motion.h2>

        {/* UNDERLINE */}
        <div
          className="
            mx-auto
            mb-14
            h-px
            w-[120px]
            bg-gradient-to-r
            from-transparent
            via-violet-400
            to-transparent
          "
        />

        {/* TEXT BLOCK */}
        <div className="space-y-8">
          {/* PARAGRAPH 1 */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.1,
            }}
            className="
              mx-auto
              max-w-4xl
              text-lg
              md:text-2xl
              font-medium
              tracking-tight
              leading-relaxed
              text-white/80
            "
          >
            {t("paragraph1")}
          </motion.p>

          {/* PARAGRAPH 2 */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
            className="
              mx-auto
              max-w-4xl
              text-lg
              md:text-2xl
              font-medium
              tracking-tight
              leading-relaxed
              text-white/80
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-violet-300
                via-violet-100
                to-fuchsia-300
                bg-clip-text
                font-semibold
                text-transparent
              "
            >
              {t("highlight")}
            </span>{" "}
            {t("paragraph3")}
          </motion.p>

          {/* BOTTOM ACCENT */}
          <div
            className="
              mx-auto
              mt-10
              h-px
              w-[180px]
              bg-gradient-to-r
              from-transparent
              via-violet-400/70
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}