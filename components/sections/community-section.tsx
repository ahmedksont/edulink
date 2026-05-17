"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { useTranslations } from "next-intl";

import { Linkedin } from "lucide-react";

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

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const prefersReducedMotion =
    useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        md:py-32
        px-6
        md:px-12
        lg:px-24
      "
    >
      {/* TOP SEPARATOR */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          h-px
          w-[90%]
          max-w-6xl
          bg-gradient-to-r
          from-transparent
          via-violet-300/40
          to-transparent
        "
      />

      {/* LIGHT GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-1/4
            w-[450px]
            h-[450px]
            rounded-full
            bg-violet-100/30
            blur-2xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-1/4
            w-[250px]
            h-[250px]
            rounded-full
            bg-fuchsia-100/20
            blur-2xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration:
              prefersReducedMotion ? 0 : 0.5,
          }}
          className="mb-20 max-w-3xl"
        >
          {/* TITLE */}
          <h2
            className="
              
                text-4xl
                sm:text-5xl
                md:text-5xl
                font-bold
                tracking-[-0.05em]
                leading-[0.92]
                mb-6
                md:mb-8
            "
          >
            {t("title")}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-2xl
              text-lg
              md:text-xl
              leading-relaxed
              text-black/60
            "
          >
            {t("description")}
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-wrap
            justify-center
            gap-6
          "
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              animate={
                isInView
                  ? "visible"
                  : "hidden"
              }
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
                  : { y: -6 }
              }
              className="
                group
                relative
                w-full
                md:w-[280px]
              "
            >
              {/* CARD */}
              <div
                className="
                  relative
                  h-full
                  rounded-[1.7rem]
                  border
                  border-black/[0.06]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                "
              >
                {/* TOP */}
                <div
                  className="
                    mb-6
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >
                  {/* AVATAR */}
                  <div className="relative mb-6">
                    {/* SOFT GLOW */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[2rem]
                        bg-violet-500/10
                        blur-2xl
                      "
                    />

                    {/* IMAGE */}
                    <div
                      className="
                        relative
                        h-28
                        w-28
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-white/40
                        shadow-[0_12px_35px_rgba(139,92,246,0.18)]
                      "
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="
                          object-cover
                          object-center
                        "
                      />
                    </div>
                  </div>

                  {/* COMPANY */}
                  <span
                    className="
                      rounded-full
                      border
                      border-black/[0.05]
                      bg-black/[0.03]
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-black/60
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
                      mb-2
                      text-xl
                      font-semibold
                      tracking-tight
                      text-black
                    "
                  >
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p
                    className="
                      mb-4
                      bg-gradient-to-r
                      from-violet-500
                      to-fuchsia-500
                      bg-clip-text
                      text-sm
                      font-semibold
                      tracking-tight
                      text-transparent
                    "
                  >
                    {t(member.roleKey)}
                  </p>
                </div>

                {/* SOCIAL */}
                <div
                  className="
                    flex
                    justify-center
                    border-t
                    border-black/[0.06]
                    pt-5
                  "
                >
                  {member.socials.linkedin && (
                    <a
                      href={
                        member.socials.linkedin
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-violet-300
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-violet-600
                        transition-colors
                        duration-200
                        hover:bg-violet-500
                        hover:text-white
                      "
                    >
                      <Linkedin className="h-4 w-4" />
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