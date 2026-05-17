"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { useTranslations } from "next-intl";

import { AnimatedText } from "@/components/ui/animated-text";

export function AboutSection() {
  const t = useTranslations("about");

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );
  }, []);

  const shouldAnimate =
    !isMobile && !shouldReduceMotion;

  const images = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&h=900&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=900&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=900&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=900&fit=crop",
  ];

  return (
    <section
      ref={ref}
      className="
        relative
        py-24
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
        <div
          className="
            absolute
            top-0
            left-1/3
            w-[280px]
            h-[280px]
            md:w-[700px]
            md:h-[700px]
            bg-violet-100/40
            blur-[60px]
            md:blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-1/4
            w-[180px]
            h-[180px]
            md:w-[400px]
            md:h-[400px]
            bg-fuchsia-100/30
            blur-[50px]
            md:blur-[120px]
            rounded-full
          "
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: shouldAnimate ? -60 : 0,
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
              duration: shouldAnimate ? 0.8 : 0.35,
            }}
          >
            {/* TITLE */}

            <AnimatedText
              text={t("title")}
              className="
                 mb-6
                text-4xl
                sm:text-5xl
                md:text-5xl
                font-bold
                text-black
              "
             
            />

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: shouldAnimate ? 20 : 8,
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
                duration: shouldAnimate ? 0.8 : 0.35,
                delay: shouldAnimate ? 0.25 : 0,
              }}
              className="
                text-base
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
                delay: shouldAnimate ? 0.4 : 0,
                duration: shouldAnimate ? 0.8 : 0.3,
              }}
              className="
                h-px
                bg-gradient-to-r
                from-violet-500
                to-transparent
                mt-8
                md:mt-10
              "
            />
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              scale: shouldAnimate ? 0.92 : 1,
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
              duration: shouldAnimate ? 1 : 0.4,
              delay: shouldAnimate ? 0.2 : 0,
            }}
            className="relative"
          >
            {/* GLOW */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-violet-200/20
                to-fuchsia-200/20
                blur-2xl
                md:blur-3xl
                rounded-[3rem]
              "
            />

            {/* IMAGE GRID */}

            <div className="relative grid grid-cols-2 gap-4 md:gap-6">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: shouldAnimate ? 40 : 10,
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
                    duration: shouldAnimate ? 0.7 : 0.35,
                    delay: shouldAnimate
                      ? i * 0.12
                      : 0,
                  }}
                  whileHover={
                    shouldAnimate
                      ? {
                          y: -6,
                          scale: 1.02,
                        }
                      : {}
                  }
                  className={`
                    relative
                    aspect-square
                    rounded-[1.5rem]
                    md:rounded-[2rem]
                    overflow-hidden
                    border border-black/[0.06]
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    md:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                    group
                    bg-white
                    ${
                      !isMobile && i === 1
                        ? "translate-y-10"
                        : ""
                    }
                    ${
                      !isMobile && i === 2
                        ? "-translate-y-10"
                        : ""
                    }
                  `}
                >
                  {/* IMAGE */}

                  <img
                    src={img}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      md:group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                      opacity-70
                    "
                  />

                  {/* HOVER GLOW */}

                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      md:group-hover:opacity-100
                      transition
                      duration-300
                      bg-violet-500/10
                    "
                  />
                </motion.div>
              ))}
            </div>

            {/* FLOATING ORBS */}

            {!isMobile && (
              <>
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
                  animate={
                    shouldAnimate
                      ? {
                          scale: [1, 1.2, 1],
                        }
                      : {}
                  }
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
                  animate={
                    shouldAnimate
                      ? {
                          scale: [1, 1.25, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
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