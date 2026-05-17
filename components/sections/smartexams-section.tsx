"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import {
  Sparkles,
  BrainCircuit,
  GraduationCap,
} from "lucide-react";

export function SmartExamSection() {
  const t = useTranslations("smartExam");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      id="smart-exam"
      className="
        relative
        py-20
        md:py-28
        px-6
        md:px-12
        lg:px-24
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-violet-50/40
        to-white
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-100/20 to-white" />

      {/* Glow Orbs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-fuchsia-200/30 blur-[100px] rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-violet-300/20 blur-[120px] rounded-full" />

      <div className="relative w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* TITLE */}
            <h2
             className="
               mb-6
                text-4xl
                sm:text-5xl
                md:text-5xl
                font-bold
              "
            >
              Smart{" "}
              <span className="bg-gradient-to-r from-violet-500 to-purple-700 bg-clip-text text-transparent">
                Exam
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-lg
                md:text-xl
                text-black/60
                tracking-[-0.02em]
                leading-relaxed
                mb-10
                max-w-2xl
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

            {/* FEATURES */}
            <div className="space-y-5 mt-10 mb-10">
              {/* FEATURE 1 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-50
                    to-white
                    border
                    border-violet-100
                    shadow-[0_8px_30px_rgba(139,92,246,0.08)]
                    flex items-center justify-center
                    shrink-0
                  "
                >
                  <BrainCircuit className="w-5 h-5 text-violet-500" />
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">
                    {t("aiTitle")}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("aiDescription")}
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-11 h-11
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-50
                    to-white
                    border
                    border-violet-100
                    shadow-[0_8px_30px_rgba(139,92,246,0.08)]
                    flex items-center justify-center
                    shrink-0
                  "
                >
                  <GraduationCap className="w-5 h-5 text-violet-500" />
                </div>

                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">
                    {t("educationTitle")}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("educationDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENT CARD */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.8 }}
              whileHover={isMobile ? {} : { scale: 1.015 }}
              className="
                relative
                flex
                flex-col
                md:flex-row
                items-start
                md:items-center
                gap-5
                p-4
                md:p-6
                rounded-[2rem]
                border
                border-violet-500/20
                bg-[#141422]/80
                backdrop-blur-2xl
                overflow-hidden
                shadow-[0_20px_60px_rgba(139,92,246,0.18)]
              "
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-transparent pointer-events-none" />

              {/* IEEE Badge */}
              <motion.div
                animate={isMobile ? {} : { y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative shrink-0 self-center md:self-auto"
              >
                <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl scale-125" />

                <div
                  className="
                    relative
                    w-20
                    h-20
                    md:w-28
                    md:h-28
                    rounded-full
                    p-[3px]
                    md:p-[4px]
                    bg-gradient-to-br
                    from-violet-400
                    to-fuchsia-500
                  "
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/smart-exam.png"
                      alt="IEEE Award"
                      width={75}
                      height={75}
                      className="object-contain md:scale-100 scale-90"
                    />
                  </div>
                </div>
              </motion.div>

              {/* TEXT + SDG */}
              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  justify-between
                  gap-4
                  md:gap-6
                  w-full
                "
              >
                {/* TEXT */}
                <div>
                  <p className="text-white text-lg md:text-2xl font-semibold mb-2">
                    {t("award")}
                  </p>

                  <p className="text-white/70 leading-relaxed text-sm md:text-base max-w-lg">
                    {t("awardDescription")}
                  </p>
                </div>

                {/* SDG 4 */}
                <motion.div
                  animate={isMobile ? {} : { y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="
                    w-14
                    h-14
                    md:w-20
                    md:h-20
                    rounded-xl
                    md:rounded-2xl
                    bg-white
                    flex
                    items-center
                    justify-center
                    shrink-0
                    self-start
                    sm:self-auto
                    shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                  "
                >
                  <Image
                    src="/sdg4.jpg"
                    alt="SDG 4 Quality Education"
                    width={42}
                    height={42}
                    className="object-contain md:scale-100 scale-90"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: isMobile ? 0.98 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.3 : 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-violet-400/30 blur-[80px] rounded-full" />

            {/* Main Image */}
            <div
              className="
                relative
                rounded-[2.5rem]
                overflow-hidden
                border
                border-white/80
                bg-white
                shadow-[0_30px_80px_rgba(139,92,246,0.18)]
              "
            >
              <Image
                src="/team.png"
                alt="Smart Exam"
                width={1200}
                height={900}
                className="
                  w-full
                  h-auto
                  object-cover
                  scale-[1.02]
                  hover:scale-[1.05]
                  transition-transform
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}