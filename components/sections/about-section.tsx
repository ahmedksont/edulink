"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  // Respecte les préférences système
  const prefersReducedMotion = useReducedMotion();

  // Animations plus légères
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
        bg-white
        py-24
        md:py-36
        px-6
        md:px-12
        lg:px-24
      "
    >
      {/* TOP SEPARATOR */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-px
          w-[90%]
          max-w-6xl
          bg-gradient-to-r
          from-transparent
          via-violet-300/40
          to-transparent
        "
      />

      {/* LIGHT BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-1/3
            w-[500px]
            h-[500px]
            rounded-full
            bg-violet-100/30
            blur-2xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-1/4
            w-[300px]
            h-[300px]
            rounded-full
            bg-fuchsia-100/20
            blur-2xl
          "
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            lg:gap-24
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
            }}
          >
            {/* TITLE */}
            <h2
              className="
              
                text-4xl
                sm:text-5xl
                md:text-5xl
                font-bold
                tracking-[-0.05em]
                leading-[0.92]
                mb-8
                text-black
              "
            >
              {t("title")}
            </h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : 0.1,
              }}
              className="
                max-w-2xl
                text-lg
                md:text-xl
                leading-relaxed
                text-black/60
              "
            >
              {t("description")}
            </motion.p>

            {/* UNDERLINE */}
            <div
              className="
                mt-10
                h-px
                w-[120px]
                bg-gradient-to-r
                from-violet-500
                to-transparent
              "
            />
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : 0.15,
            }}
            className="relative"
          >
            {/* SOFT GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-[3rem]
                bg-gradient-to-br
                from-violet-200/10
                to-fuchsia-200/10
                blur-2xl
              "
            />

            {/* IMAGE CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-black/[0.06]
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.10)]
              "
            >
              <Image
                src="/abouts.jpeg"
                alt="About"
                width={1200}
                height={1400}
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  40vw
                "
                className="
                  h-auto
                  w-full
                  object-cover
                "
                priority={false}
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* FLOATING ORBS - desktop only */}
            {!prefersReducedMotion && (
              <>
                <motion.div
                  className="
                    absolute
                    -top-10
                    -right-10
                    w-24
                    h-24
                    rounded-full
                    bg-violet-500/10
                    blur-2xl
                    hidden
                    md:block
                  "
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="
                    absolute
                    -bottom-10
                    -left-10
                    w-20
                    h-20
                    rounded-full
                    bg-fuchsia-500/10
                    blur-2xl
                    hidden
                    md:block
                  "
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}