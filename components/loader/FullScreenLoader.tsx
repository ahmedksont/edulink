"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FullScreenLoader() {
  const t = useTranslations();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white">
      {/* Glow Background */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-violet-700/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center"
      >
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="EDULINK"
          className="relative w-16 md:w-24 drop-shadow-[0_0_25px_rgba(168,85,247,0.65)]"
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.03, 1],
            filter: [
              "drop-shadow(0 0 10px rgba(168,85,247,0.4))",
              "drop-shadow(0 0 30px rgba(168,85,247,0.9))",
              "drop-shadow(0 0 10px rgba(168,85,247,0.4))",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Loading Text */}
        <motion.p
          className="mt-8 text-[11px] md:text-sm tracking-[0.35em] text-violet-400 font-light uppercase text-center"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          {t("loader.text")}
        </motion.p>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-violet-500"
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}