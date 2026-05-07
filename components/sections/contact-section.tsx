"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

export function ContactSection() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/uni3.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            
            {/* LEFT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("title")}
              </h2>
              <p className="text-white/80 max-w-md">
                {t("description")}
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t("firstName")}
                  className="input"
                />
                <input
                  type="text"
                  placeholder={t("lastName")}
                  className="input"
                />
              </div>

              <input
                type="email"
                placeholder={t("email")}
                className="input"
              />

              <textarea
                rows={3}
                placeholder={t("message")}
                className="textarea"
              />

              <button
                type="submit"
                className="btn"
              >
                <Send className="w-4 h-4" />
                {t("cta")}
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}