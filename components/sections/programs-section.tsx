"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { useTranslations } from "next-intl";

import {
  BrainCircuit,
  GraduationCap,
  Network,
  Presentation,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    key: "coworking",
  },

  {
    icon: GraduationCap,
    key: "p2p",
  },

  {
    icon: Network,
    key: "ecosystem",
  },

  {
    icon: Presentation,
    key: "events",
  },

  {
    icon: Rocket,
    key: "collisions",
  },
];

export function ProgramsSection() {
  const t = useTranslations("features");

  const prefersReducedMotion =
    useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
        px-6
        md:px-12
        lg:px-24
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/uni1.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10
            text-center
            md:grid-cols-5
          "
        >
          {features.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration:
                  prefersReducedMotion
                    ? 0
                    : 0.45,
                delay:
                  prefersReducedMotion
                    ? 0
                    : i * 0.06,
              }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { y: -4 }
              }
              className="
                flex
                flex-col
                items-center
              "
            >
              {/* Icon */}
              <item.icon
                className="
                  mb-6
                  h-14
                  w-14
                  text-white
                  opacity-90
                "
                strokeWidth={1.5}
              />

              {/* Text */}
              <p
                className="
                  max-w-xs
                  text-sm
                  leading-relaxed
                  text-white/90
                "
              >
                {t(item.key)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}