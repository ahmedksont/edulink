"use client";

import { motion } from "framer-motion";
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

  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/uni1.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-center">
          {features.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <item.icon
                className="w-14 h-14 text-white mb-6 opacity-90"
                strokeWidth={1.5}
              />

              {/* Text */}
              <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                {t(item.key)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}