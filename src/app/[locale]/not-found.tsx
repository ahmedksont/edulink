"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Home,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import { HeroSection } from "../../../components/sections/hero-section-new";

export default function NotFound() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#7c3aed_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative z-10 max-w-3xl w-full"
        >

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl shadow-2xl p-10 md:p-16 text-center">

            {/* Glow */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,#a78bfa,transparent_35%)]" />

            {/* Badge */}
            <div className="relative flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
                <Sparkles className="w-4 h-4" />
                Error 404
              </div>
            </div>

            {/* 404 */}
            <motion.h1
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
            >
              404
            </motion.h1>

            {/* Title */}
            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              The page you are looking for
              does not exist, may have been
              moved, or you may not have
              permission to access it.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-violet-600
                  px-8
                  py-4
                  text-white
                  font-medium
                  transition-all
                  hover:bg-violet-700
                  hover:shadow-lg
                  hover:shadow-violet-500/20
                  active:scale-[0.98]
                  w-full
                  sm:w-auto
                "
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>

              <button
                onClick={() =>
                  window.history.back()
                }
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-8
                  py-4
                  text-gray-800
                  font-medium
                  transition-all
                  hover:border-violet-300
                  hover:bg-violet-50
                  active:scale-[0.98]
                  w-full
                  sm:w-auto
                "
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}