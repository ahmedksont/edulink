"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { useTranslations } from "next-intl";

import {
  useEffect,
  useState,
} from "react";

const ripuGallery = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
  "/p5.jpg",
  "/p6.jpg",
  "/p7.jpg",
  "/p8.jpg",
  "/p9.jpg",
  "/p10.jpg",
  "/p11.jpg",
];

export function RipuSection() {
  const t = useTranslations("ripu");

  const prefersReducedMotion =
    useReducedMotion();

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () =>
      window.removeEventListener(
        "resize",
        checkMobile
      );
  }, []);

  const shouldAnimate =
    !isMobile &&
    !prefersReducedMotion;

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldAnimate ? 24 : 8,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="ripu"
      className="
        relative
        overflow-hidden
        py-18
        md:py-32
        px-2
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
          via-violet-300/50
          to-transparent
        "
      />

      {/* SOFT BACKGROUND GLOW */}

      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="
            h-[160px]
            w-[280px]
            md:h-[260px]
            md:w-[500px]
            rounded-full
            bg-violet-500/10
            blur-[50px]
            md:blur-2xl
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HERO */}

        <div
          className="
            grid
            items-center
            gap-12
            md:grid-cols-2
            md:gap-20
          "
        >
          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: shouldAnimate
                ? 0.5
                : 0.3,
            }}
          >
            <h2
              className="
                mb-6
                text-4xl
                sm:text-5xl
                md:text-5xl
                font-bold
              "
            >
              {t("title")} :{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-violet-500
                  via-fuchsia-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                {t("subtitle")}
              </span>
            </h2>

            <p
              className="
                mb-8
                md:mb-10
                max-w-xl
                text-base
                md:text-xl
                leading-relaxed
                text-black/60
              "
            >
              {t("description")}
            </p>

            <a
              href="https://www.ripusousse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-fuchsia-500
                px-6
                md:px-7
                py-3
                md:py-4
                text-base
                md:text-lg
                font-semibold
                text-white
                shadow-[0_10px_25px_rgba(139,92,246,0.22)]
                transition-transform
                duration-200
                md:hover:scale-[1.02]
              "
            >
              {t("cta")}
            </a>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: shouldAnimate
                ? 0.6
                : 0.3,
            }}
            className="
              relative
              flex
              justify-center
              md:justify-end
            "
          >
            {/* GLOW */}

            <div
              className="
                absolute
                top-1/2
                left-1/2
                h-[180px]
                w-[180px]
                md:h-[360px]
                md:w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-500/15
                blur-[60px]
                md:blur-2xl
              "
            />

            {/* POSTER */}

            <motion.div
              whileHover={
                shouldAnimate
                  ? { y: -4 }
                  : {}
              }
              transition={{
                duration: 0.2,
              }}
              className="
                relative
                z-10
                h-[320px]
                w-[220px]
                md:h-[500px]
                md:w-[360px]
                overflow-hidden
                rounded-[28px]
                md:rounded-[32px]
                border
                border-white/20
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                md:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >
              <Image
                src="/ripu.jpg"
                alt="RIPU Poster"
                width={360}
                height={500}
                className="w-full h-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-white/10
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* GALLERY */}

        <div className="mt-16 md:mt-36">
          {/* HEADER */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: shouldAnimate
                ? 0.5
                : 0.3,
            }}
            className="mb-10 text-center"
          >
            <h3
              className="
               mb-6
                text-4xl
                sm:text-5xl
                md:text-5xl
                font-bold
              "
            >
              <span>
                {t("galleryTitle")}{" "}
              </span>

              <span className="text-violet-500">
                {t(
                  "galleryHighlight"
                )}
              </span>
            </h3>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                md:text-lg
                leading-relaxed
                text-black/60
              "
            >
              {t(
                "galleryDescription"
              )}
            </p>
          </motion.div>

          {/* SLIDER */}

          <div className="relative overflow-hidden">
            {/* LEFT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                bottom-0
                z-20
                w-10
                md:w-32
                bg-gradient-to-r
                from-white
                to-transparent
              "
            />

            {/* RIGHT FADE */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                bottom-0
                z-20
                w-10
                md:w-32
                bg-gradient-to-l
                from-white
                to-transparent
              "
            />

            {/* TRACK */}

            <motion.div
              animate={
                shouldAnimate
                  ? {
                      x: [
                        "0%",
                        "-50%",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Infinity,
              }}
              className="
                flex
                w-max
                gap-4
                md:gap-6
              "
            >
              {[
                ...ripuGallery,
                ...ripuGallery,
              ].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={
                    shouldAnimate
                      ? { y: -4 }
                      : {}
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    group
                    relative
                    h-[180px]
                    w-[260px]
                    md:h-[280px]
                    md:w-[420px]
                    shrink-0
                    overflow-hidden
                    rounded-[24px]
                    md:rounded-3xl
                    border
                    border-black/5
                    bg-white
                    shadow-[0_6px_20px_rgba(0,0,0,0.05)]
                    md:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                  "
                >
                  <Image
                    src={src}
                    alt={`RIPU Gallery ${
                      i + 1
                    }`}
                    fill
                    sizes="
                      (max-width: 768px) 260px,
                      420px
                    "
                    className="
                      object-cover
                    "
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}