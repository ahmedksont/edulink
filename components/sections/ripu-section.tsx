"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { useTranslations } from "next-intl";

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
      id="ripu"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
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
          via-violet-300/50
          to-transparent
        "
      />

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="
            h-[260px]
            w-[500px]
            rounded-full
            bg-violet-500/10
            blur-2xl
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HERO */}
        <div
          className="
            grid
            items-center
            gap-16
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
              duration:
                prefersReducedMotion
                  ? 0
                  : 0.5,
            }}
          >
            <h2
              className="
                mb-8
                font-display
                text-4xl
                md:text-6xl
                font-black
                tracking-[-0.05em]
                leading-[0.95]
                text-black
              "
            >
              {t("title")} —{" "}
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
                mb-10
                max-w-xl
                text-lg
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
                px-7
                py-4
                text-lg
                font-semibold
                text-white
                shadow-[0_12px_35px_rgba(139,92,246,0.28)]
                transition-transform
                duration-200
                hover:scale-[1.02]
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
              duration:
                prefersReducedMotion
                  ? 0
                  : 0.6,
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
                h-[260px]
                w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-500/15
                blur-2xl
                md:h-[360px]
                md:w-[360px]
              "
            />

            {/* POSTER */}
            <motion.div
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { y: -4 }
              }
              transition={{
                duration: 0.2,
              }}
              className="
                relative
                z-10
                h-[360px]
                w-[260px]
                overflow-hidden
                rounded-[32px]
                border
                border-white/20
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                md:h-[500px]
                md:w-[360px]
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
        <div className="mt-28 md:mt-36">
          {/* HEADER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration:
                prefersReducedMotion
                  ? 0
                  : 0.5,
            }}
            className="mb-14 text-center"
          >
            <h3
              className="
                font-display
                text-4xl
                md:text-6xl
                font-black
                tracking-[-0.04em]
                leading-[0.95]
                text-black
              "
            >
              {t("galleryTitle")}{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-violet-500
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent
                "
              >
                {t("galleryHighlight")}
              </span>
            </h3>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-relaxed
                text-black/60
              "
            >
              {t("galleryDescription")}
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
                w-16
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
                w-16
                md:w-32
                bg-gradient-to-l
                from-white
                to-transparent
              "
            />

            {/* TRACK */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                    x: [
                      "0%",
                      "-50%",
                    ],
                  }
              }
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
              className="
                flex
                w-max
                gap-6
              "
            >
              {[
                ...ripuGallery,
                ...ripuGallery,
              ].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : { y: -4 }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    group
                    relative
                    h-[220px]
                    w-[320px]
                    shrink-0
                    overflow-hidden
                    rounded-3xl
                    border
                    border-black/5
                    bg-white
                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    md:h-[280px]
                    md:w-[420px]
                  "
                >
                  <Image
                    src={src}
                    alt={`RIPU Gallery ${i + 1
                      }`}
                    fill
                    sizes="
                      (max-width: 768px) 320px,
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