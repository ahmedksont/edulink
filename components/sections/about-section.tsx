"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { useTranslations } from "next-intl";

import { AnimatedText } from "@/components/ui/animated-text";

export function AboutSection() {
  const t = useTranslations("about");

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="
        relative
        py-32
        md:py-40
        px-6
        md:px-12
        lg:px-24
        overflow-hidden
        bg-white
      "
    >
      {/* TOP SEPARATOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-violet-100/40 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* ========================================= */}
          {/* LEFT CONTENT */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
          >
            {/* TITLE */}
            <AnimatedText
              text={t("title")}
              className="
                font-display
                text-5xl
                md:text-7xl
                font-semibold
                tracking-[-0.05em]
                leading-[0.92]
                mb-8
                text-black
              "
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                text-lg
                md:text-xl
                text-black/60
                leading-relaxed
                max-w-2xl
              "
            >
              {t("description")}
            </motion.p>

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
                delay: 0.4,
                duration: 0.8,
              }}
              className="
                h-px
                bg-gradient-to-r
                from-violet-500
                to-transparent
                mt-10
              "
            />
          </motion.div>

          {/* ========================================= */}
          {/* RIGHT VISUAL */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-200/20 to-fuchsia-200/20 blur-3xl rounded-[3rem]" />

            {/* SINGLE IMAGE */}
            <div className="relative">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.9,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  relative
                  rounded-[2.5rem]
                  overflow-hidden
                  border border-black/[0.06]
                  shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                  bg-white
                "
              >
                <img
                  src="/about.jpeg"
                  alt="About"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "
                />
              </motion.div>
            </div>

            {/* FLOATING ORBS */}
            <motion.div
              className="
                absolute
                -top-12
                -right-12
                w-32
                h-32
                bg-violet-500/20
                blur-3xl
                rounded-full
              "
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="
                absolute
                -bottom-12
                -left-12
                w-28
                h-28
                bg-fuchsia-500/20
                blur-3xl
                rounded-full
              "
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}