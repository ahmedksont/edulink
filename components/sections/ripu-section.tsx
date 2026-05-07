"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  "/ripu1.png",
  "/ripu2.png",
  "/ripu3.png",
  "/ripu4.png",
];

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

  return (
    <section
      id="ripu"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* TOP SEPARATOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-300/50 to-transparent" />

      {/* GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* ========================================= */}
        {/* TOP CONTENT */}
        {/* ========================================= */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
              {t("label")}
            </span>

            {/* TITLE */}
            <h2
              className="
              font-display
              text-4xl
              md:text-6xl
              font-semibold
              tracking-[-0.04em]
              leading-[0.95]
              mb-6
              text-black
            "
            >
              {t("title")} —{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                {t("subtitle")}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-xl">
              {t("description")}
            </p>

            {/* CTA */}
            <a
              href="https://www.ripusousse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                px-6 py-3
                rounded-full
                bg-gradient-to-r from-violet-500 to-fuchsia-500
                text-white
                font-semibold
                tracking-tight
                shadow-[0_10px_40px_rgba(139,92,246,0.35)]
                hover:scale-105
                transition-all duration-300
              "
            >
              {t("cta")}
            </a>
          </motion.div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[280px] h-[120px] md:w-[420px] md:h-[170px] relative">
              <Image
                src="/logoripu.png"
                alt="RIPU Logo"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* TOP IMAGES */}
        {/* ========================================= */}

        <div className="relative flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
          {images.map((src, i) => (
            <motion.div
  key={i}
  initial={{
    opacity: 0,
    y: 40,
    rotate: -5,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    rotate: i % 2 === 0 ? -4 : 4,
  }}
  transition={{
    delay: i * 0.1,
  }}
  viewport={{ once: true }}
  className="
    relative
    w-[72vw]
    h-[160px]
    sm:w-[78vw]
    sm:h-[190px]
    md:w-[360px]
    md:h-[170px]
    rounded-3xl
    overflow-hidden
    shadow-[0_10px_40px_rgba(0,0,0,0.12)]
    group
  "
>
              <Image
                src={src}
                alt={`RIPU ${i}`}
                fill
                className="
                  object-cover
                  scale-105
                  group-hover:scale-125
                  transition-transform
                  duration-700
                  ease-out
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/10
                  group-hover:bg-black/0
                  transition duration-500
                "
              />
            </motion.div>
          ))}
        </div>

        {/* ========================================= */}
        {/* RIPU 25 GALLERY */}
        {/* ========================================= */}

        <div className="mt-32">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
              {t("galleryLabel")}
            </span>

            <h3
              className="
                font-display
                text-4xl
                md:text-6xl
                font-semibold
                tracking-[-0.04em]
                leading-[0.95]
                text-black
              "
            >
              {t("galleryTitle")}{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                {t("galleryHighlight")}
              </span>
            </h3>

            <p className="mt-5 text-black/60 text-lg max-w-2xl mx-auto">
              {t("galleryDescription")}
            </p>
          </motion.div>

          {/* CAROUSEL */}
          <div className="relative overflow-hidden">
            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            {/* TRACK */}
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 35,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-6 w-max"
            >
              {[...ripuGallery, ...ripuGallery].map(
                (src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      relative
                      w-[320px]
                      h-[220px]
                      md:w-[420px]
                      md:h-[280px]
                      rounded-3xl
                      overflow-hidden
                      shrink-0
                      bg-white
                      border border-black/5
                      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                      group
                    "
                  >
                    <Image
                      src={src}
                      alt={`RIPU Gallery ${i}`}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
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
                        opacity-60
                        group-hover:opacity-30
                        transition
                      "
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}