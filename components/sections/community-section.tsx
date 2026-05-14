"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
} from "framer-motion";

import { useTranslations } from "next-intl";

import {
  Linkedin,
} from "lucide-react";

import Image from "next/image";

const teamMembers = [
  {
    name: "Sonia Sahli",

    roleKey: "sonia.role",

    companyKey: "sonia.company",

    image: "/team/sonia.png",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/soniasahli/",
    },
  },

  {
    name: "Denis Gillet",

    roleKey: "denis.role",

    companyKey: "denis.company",

    image: "/team/denis.png",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/denisgillet/",
    },
  },

  {
    name: "Thierry Spriet",

    roleKey: "thierry.role",

    companyKey: "thierry.company",

    image: "/team/thierry.png",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/thierry-spriet-27324419/",
    },
  },

  {
    name: "Ahmed Ksontini",

    roleKey: "ahmed.role",

    companyKey: "ahmed.company",

    image: "/team/ahmed.png",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/ahmed-ksontini-b38414254/",
    },
  },

  {
    name: "Maram Amamou",

    roleKey: "maram.role",

    companyKey: "maram.company",

    image: "/team/maram.png",

    socials: {
      linkedin:
        "https://www.linkedin.com/in/amamou/",
    },
  },
];

export function TeamSection() {
  const t = useTranslations("team");

  const ref = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      ref={ref}
      className="
        relative
        py-32
        px-6
        md:px-12
        lg:px-24
        overflow-hidden
        bg-white
      "
    >
      {/* TOP SEPARATOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-violet-100/40 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{
              opacity: 0,
              y: isMobile ? 10 : 30,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: isMobile ? 0.3 : 0.5,
            }}
          >
            {/* TITLE */}
            <h2
              className="
                font-display
                text-5xl
                md:text-7xl
                font-semibold
                tracking-[-0.05em]
                leading-[0.95]
                text-black
                mb-6
              "
            >
              {t("title")}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-lg
                md:text-xl
                text-black/60
                leading-relaxed
                max-w-2xl
              "
            >
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: isMobile ? 15 : 50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: isMobile ? Math.min(i * 0.05, 0.15) : i * 0.1,
                duration: isMobile ? 0.3 : 0.6,
              }}
              whileHover={
                isMobile ? {} : { y: -10 }
              }
              className="group relative w-full md:w-[280px]"
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-200/20 to-fuchsia-200/20 opacity-0 group-hover:opacity-100 blur-3xl transition duration-700 rounded-[1.7rem]" />

              {/* CARD */}
              <div
                className="
                  relative
                  h-full
                  rounded-[1.7rem]
                  bg-white
                  border
                  border-black/[0.06]
                  px-5
                  py-4
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-500
                "
              >
                {/* TOP */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* AVATAR */}
                  <div className="relative mb-6 flex justify-center">
                    {/* Glow */}
                    <div className="absolute w-32 h-32 bg-violet-500/15 blur-3xl rounded-[2rem]" />

                    {/* Portrait Frame */}
                    <div
                      className="
                        relative
                        w-28
                        h-28
                        rounded-[2rem]
                        overflow-hidden
                        shadow-[0_15px_45px_rgba(139,92,246,0.22)]
                        border
                        border-white/40
                      "
                    >
                      {/* Gradient Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-white/10
                          via-transparent
                          to-black/10
                          z-10
                          pointer-events-none
                        "
                      />

                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="
                          object-cover
                          object-center
                          group-hover:scale-105
                          transition-transform
                          duration-700
                        "
                      />
                    </div>
                  </div>

                  {/* COMPANY */}
                  <span
                    className="
                      text-xs
                      font-medium
                      px-3 py-1.5
                      rounded-full
                      bg-black/[0.03]
                      text-black/60
                      border border-black/[0.05]
                    "
                  >
                    {t(member.companyKey)}
                  </span>
                </div>

                {/* INFO */}
                <div className="mb-6 text-center">
                  {/* NAME */}
                  <h3
                    className="
                      text-xl
                      font-semibold
                      tracking-tight
                      text-black
                      mb-2
                    "
                  >
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p
                    className="
                      text-sm
                      font-semibold
                      tracking-tight
                      bg-gradient-to-r
                      from-violet-500
                      to-fuchsia-500
                      bg-clip-text
                      text-transparent
                      mb-4
                    "
                  >
                    {t(member.roleKey)}
                  </p>
                </div>

            
              <div className="pt-5 border-t border-black/[0.06] flex justify-center">
  {member.socials.linkedin && (
    <a
      href={member.socials.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-violet-400
        text-violet-600
        bg-white
        hover:bg-violet-500
        hover:text-white
        hover:border-violet-500
        text-sm
        font-medium
        transition-all
        duration-300
      "
    >
      <Linkedin className="w-4 h-4" />
      LinkedIn
    </a>
  )}
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}