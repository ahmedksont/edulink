"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  motion,
  useInView,
  useReducedMotion,
  Variants,
} from "framer-motion";

import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const prefersReducedMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        bg-[#f5f5f4]
        px-5 py-20
        md:px-10 md:py-28
        lg:px-24 lg:py-32
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-1/2 top-0
            h-[450px] w-[450px]
            -translate-x-1/2
            rounded-full
            bg-violet-100/30
            blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            grid gap-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* TITLE */}
            <h2
              className="
                max-w-xl
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.06em]
                text-black
                md:text-6xl
              "
            >
              {t("title")}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-[1.9]
                text-black/60
                md:text-lg
              "
            >
              {t("description")}
            </p>

            {/* FEATURE CARDS */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {/* CARD 1 */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex items-center gap-4
                  rounded-3xl
                  border border-black/[0.05]
                  bg-white
                  p-4 md:p-5
                  shadow-[0_6px_24px_rgba(0,0,0,0.04)]
                "
              >
                <div
                  className="
                    flex h-16 w-16 shrink-0
                    items-center justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-violet-50
                  "
                >
                  <Image
                    src="/sdg4.png"
                    alt="SDG 4"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                      text-base
                      font-semibold
                      tracking-[-0.02em]
                      text-black
                      md:text-lg
                    "
                  >
                    {t("sdg4")}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-relaxed
                      text-black/55
                      md:text-[15px]
                    "
                  >
                    {t("sdg4text")}
                  </p>
                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex items-center gap-4
                  rounded-3xl
                  border border-black/[0.05]
                  bg-white
                  p-4 md:p-5
                  shadow-[0_6px_24px_rgba(0,0,0,0.04)]
                "
              >
                <div
                  className="
                    flex h-16 w-16 shrink-0
                    items-center justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-violet-50
                  "
                >
                  <Image
                    src="/sdg17.png"
                    alt="SDG 17"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                      text-base
                      font-semibold
                      tracking-[-0.02em]
                      text-black
                      md:text-lg
                    "
                  >
                    {t("sdg17")}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-relaxed
                      text-black/55
                      md:text-[15px]
                    "
                  >
                    {t("sdg17text")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.15,
            }}
            className="
              grid gap-5
              items-stretch
              lg:grid-cols-[0.82fr_0.48fr]
            "
          >
            {/* LARGE IMAGE */}
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              "
            >
              <div
                className="
                  relative
                  flex items-center justify-center
                  h-[420px]
                  md:h-[560px]
                  lg:h-full
                  lg:min-h-[640px]
                "
              >
                <Image
                  src="/mem.png"
                  alt="About"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/5
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* RIGHT STACK */}
            <div
              className="
                grid grid-cols-2 gap-4
                lg:flex lg:h-full lg:flex-col lg:gap-5
              "
            >
              {/* QUOTE CARD */}
              <div
                className="
                  relative
                  flex flex-col justify-between
                  overflow-hidden
                  rounded-[1.8rem]
                  border border-violet-100
                  bg-white
                  p-5
                  shadow-[0_8px_30px_rgba(124,58,237,0.06)]
                  lg:flex-1 lg:p-6
                "
              >
                {/* Quote icon */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -top-2
                    left-4
                    select-none
                    text-[4rem]
                    font-serif
                    leading-none
                    text-violet-100/70
                  "
                >
                  “
                </span>

                <div
                  className="
                    relative z-10
                    flex h-full flex-col
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-violet-600
                      md:text-xs
                    "
                  >
                    EduLink
                  </p>

                  <div
                    className="
                      flex flex-1 items-center justify-center
                      text-center
                    "
                  >
                    <h3
                      className="
                        max-w-[12rem]
                        text-lg
                        font-bold
                        leading-snug
                        tracking-[-0.03em]
                        text-black
                        italic
                        md:text-2xl
                      "
                    >
                      {t("cardTitle")}
                    </h3>
                  </div>
                </div>
              </div>

              {/* ROBOT CARD */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[1.8rem]
                  bg-white
                  shadow-[0_10px_35px_rgba(0,0,0,0.05)]
                  lg:flex-1
                "
              >
                <div
                  className="
                    relative
                    h-full
                    min-h-[220px]
                    overflow-hidden
                    rounded-inherit
                    lg:min-h-[300px]
                  "
                >
                  <Image
                    src="/mar2.png"
                    alt="Robot"
                    fill
                    className="
                      object-cover
                    "
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}