"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const locales = ["fr", "en", "de"] as const;

const navLinks = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "programs", key: "programs" },
  { id: "community", key: "community" },
  { id: "ripu", key: "ripu" },
  { id: "smart-exam", key: "achievement" },
  { id: "contact", key: "contact" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(link.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    const el = document.getElementById(id);

    if (!el) return;

    const offset = 100;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-4 sm:mx-8 rounded-2xl transition-all duration-500
          border border-black/[0.06]
          bg-white
          ${
            scrolled
              ? "px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              : "px-5 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group"
              aria-label="Go to home"
            >
              <Image
                src="/logo.png"
                alt="EduLink Collider"
                width={120}
                height={120}
                priority
                className="h-12 w-auto"
              />

              <span className="hidden sm:block font-bold tracking-tight text-black">
                {" "}
                <span className="bg-gradient-to-r from-neutral-900 via-violet-500 to-purple-400 bg-clip-text text-transparent">
                 EduLink
                </span>
              </span>
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() =>
                    scrollToSection(link.id)
                  }
                  className={`px-4 py-2 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200
                  ${
                    activeSection === link.id
                      ? "bg-violet-50 text-violet-600"
                      : "text-black/60 hover:text-black hover:bg-black/[0.03]"
                  }`}
                >
                  {t(link.key)}
                </button>
              ))}
            </div>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-2">
              {/* LANGUAGE SWITCHER */}
              <div className="hidden sm:flex items-center gap-1 rounded-xl p-1 border border-black/[0.06] bg-black/[0.02]">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    scroll={false}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-tight transition-all
                    ${
                      locale === l
                        ? "bg-violet-500 text-white"
                        : "text-black/60 hover:text-black"
                    }`}
                  >
                    {l}
                  </Link>
                ))}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
                className="lg:hidden w-9 h-9 rounded-xl border border-black/[0.06] bg-black/[0.02] flex items-center justify-center transition-all text-black"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 w-4">
                  <motion.span
                    animate={{
                      rotate: menuOpen ? 45 : 0,
                      y: menuOpen ? 7 : 0,
                    }}
                    className="h-0.5 w-full bg-current rounded-full block"
                  />

                  <motion.span
                    animate={{
                      opacity: menuOpen ? 0 : 1,
                    }}
                    className="h-0.5 w-full bg-current rounded-full block"
                  />

                  <motion.span
                    animate={{
                      rotate: menuOpen ? -45 : 0,
                      y: menuOpen ? -7 : 0,
                    }}
                    className="h-0.5 w-full bg-current rounded-full block"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* BACKDROP */}
            <div
              className="absolute inset-0 bg-white"
              onClick={() =>
                setMenuOpen(false)
              }
            />

            {/* MENU */}
            <div className="relative z-10 pt-28 px-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.06,
                  }}
                  onClick={() =>
                    scrollToSection(link.id)
                  }
                  className="py-4 border-b border-black/[0.06] text-2xl font-bold tracking-tight text-black hover:text-violet-500 transition-colors text-left"
                >
                  {t(link.key)}
                </motion.button>
              ))}

              {/* MOBILE LANGUAGES */}
              <div className="mt-6 flex items-center gap-2">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    scroll={false}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold uppercase tracking-tight transition-all
                    ${
                      locale === l
                        ? "bg-violet-500 text-white"
                        : "bg-black/[0.03] text-black/60 border border-black/[0.06]"
                    }`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}