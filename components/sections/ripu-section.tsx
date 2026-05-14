"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      id="ripu"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* TOP SEPARATOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-300/50 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[400px] bg-violet-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* ================================================= */}
        {/* HERO CONTENT */}
        {/* ================================================= */}

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
          >
            {/* TITLE */}
            <h2
              className="
                font-display
                text-4xl
                md:text-6xl
                font-black
                tracking-[-0.05em]
                leading-[0.95]
                text-black
                mb-8
              "
            >
              {t("title")} —{" "}
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                {t("subtitle")}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-black/60
                text-lg
                md:text-xl
                leading-relaxed
                max-w-xl
                mb-10
              "
            >
              {t("description")}
            </p>

            {/* CTA */}
            <a
              href="https://www.ripusousse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center

                px-7
                py-4

                rounded-full

                bg-gradient-to-r
                from-violet-500
                to-fuchsia-500

                text-white
                font-semibold
                text-lg

                shadow-[0_15px_50px_rgba(139,92,246,0.35)]

                hover:scale-105
                hover:shadow-[0_20px_70px_rgba(139,92,246,0.45)]

                transition-all
                duration-300
              "
            >
              {t("cta")}
            </a>
          </motion.div>

          {/* RIGHT POSTER */}
          <motion.div
            initial={{ opacity: 0, scale: isMobile ? 0.97 : 0.9, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end relative"
          >
            {/* BACKGROUND GLOW */}
            <div
              className="
                absolute

                w-[320px]
                h-[320px]

                md:w-[420px]
                md:h-[420px]

                bg-violet-500/20
                blur-[120px]
                rounded-full

                top-1/2
                left-1/2

                -translate-x-1/2
                -translate-y-1/2

                pointer-events-none
              "
            />

            {/* POSTER */}
            <motion.div
              whileHover={
                isMobile ? {} : { y: -8, scale: 1.02 }
              }
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                z-10

                w-[260px]
                h-[360px]

                md:w-[360px]
                md:h-[500px]

                rounded-[32px]
                overflow-hidden

                border border-white/20

                shadow-[0_30px_80px_rgba(0,0,0,0.25)]

                group
              "
            >
              <Image
                src="/ripu.jpg"
                alt="RIPU Poster"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
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

              {/* LIGHT REFLECTION */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-white/20
                  via-transparent
                  to-transparent

                  opacity-60
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* GALLERY */}
        {/* ================================================= */}

        <div className="mt-36">
          {/* GALLERY TITLE */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.5 }}
            className="text-center mb-14"
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
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                {t("galleryHighlight")}
              </span>
            </h3>

            <p className="mt-5 text-black/60 text-lg max-w-2xl mx-auto leading-relaxed">
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
              {[...ripuGallery, ...ripuGallery].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={
                    isMobile ? {} : { y: -10, scale: 1.03 }
                  }
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

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0

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
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}