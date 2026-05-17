"use client";

import {
  useTranslations,
  useLocale,
} from "next-intl";

import Link from "next/link";

import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Send,
} from "lucide-react";

import { useState } from "react";

export function Footer() {
  const t = useTranslations("footer");

  const locale = useLocale();

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const navigationItems = [
    {
      key: "about",
      href: "about",
    },

    {
      key: "programs",
      href: "programs",
    },

    {
      key: "community",
      href: "community",
    },

    {
      key: "contact",
      href: "contact",
    },
  ];

  const quickLinks = [
    {
      key: "events",
      href: "https://ripusousse.com",
    },

    {
      key: "news",
      href: "/news",
    },

    {
      key: "partners",
      href: "/partners",
    },

    {
      key: "faq",
      href: "/faq",
    },
  ];

  const handleSubscribe = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!email) return;

    try {
      setLoading(true);

      const res = await fetch(
        "/api/newsletter",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            locale,
          }),
        }
      );

      if (res.ok) {
        setSuccess(true);

        setEmail("");

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-gray-200
        bg-gradient-to-b
        from-gray-50
        to-white
        text-gray-900
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-0
            h-96
            w-96
            rounded-full
            bg-violet-500/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-96
            w-96
            rounded-full
            bg-purple-500/5
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-16
          md:px-12
        "
      >
        {/* GRID */}
        <div
          className="
            mb-12
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* BRAND */}
          <div>
            <h3
              className="
                mb-2
                text-3xl
                font-bold
              "
            >
              <span>EduLink</span>

              
            </h3>

            <div
              className="
                mt-2
                flex
                items-center
                gap-2
              "
            >
              <Sparkles
                className="
                  h-4
                  w-4
                  text-violet-500
                "
              />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-gray-500
                "
              >
                {t("tag")}
              </span>
            </div>

            <p
              className="
                mt-4
                text-sm
                text-gray-600
              "
            >
              {t("description")}
            </p>

            {/* SOCIALS */}
            <div
              className="
                mt-4
                flex
                gap-3
              "
            >
              <a
                href="#"
                className="
                  rounded-full
                  bg-gray-100
                  p-2
                  transition
                  hover:bg-violet-500
                  hover:text-white
                "
              >
                <Linkedin size={16} />
              </a>

              <a
                href="#"
                className="
                  rounded-full
                  bg-gray-100
                  p-2
                  transition
                  hover:bg-violet-500
                  hover:text-white
                "
              >
                <Twitter size={16} />
              </a>

              <a
                href="#"
                className="
                  rounded-full
                  bg-gray-100
                  p-2
                  transition
                  hover:bg-violet-500
                  hover:text-white
                "
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* NAV */}
          <div>
            <h4
              className="
                mb-4
                font-semibold
              "
            >
              {t("navTitle")}
            </h4>

            <ul className="space-y-2">
              {navigationItems.map(
                (item) => (
                  <li key={item.key}>
                    <Link
                      href={`/${locale}/#${item.href}`}
                      className="
                        text-gray-600
                        transition
                        hover:text-violet-500
                      "
                    >
                      {t(
                        `nav.${item.key}`
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4
              className="
                mb-4
                font-semibold
              "
            >
              {t("quickTitle")}
            </h4>

            <ul className="space-y-2">
              {quickLinks.map(
                (link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="
                        text-gray-600
                        transition
                        hover:text-violet-500
                      "
                    >
                      {t(
                        `quick.${link.key}`
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4
              className="
                mb-4
                font-semibold
              "
            >
              {t("contactTitle")}
            </h4>

            <div
              className="
                space-y-2
                text-sm
                text-gray-600
              "
            >
              <p
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <MapPin
                  size={14}
                  className="text-violet-500"
                />

                {t("address")}
              </p>

              <p
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Mail
                  size={14}
                  className="text-violet-500"
                />

                {t("email")}
              </p>

              <p
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Phone
                  size={14}
                  className="text-violet-500"
                />

                {t("phone")}
              </p>
            </div>

            {/* NEWSLETTER */}
            <form
              onSubmit={
                handleSubscribe
              }
              className="
                mt-4
                flex
                gap-2
              "
            >
              <input
                type="email"
                required
                placeholder={t(
                  "placeholder"
                )}
                className="
                  flex-1
                  rounded-lg
                  border
                  px-3
                  py-2
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-500
                "
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />

              <button
                disabled={loading}
                className="
                  rounded-lg
                  bg-violet-500
                  px-3
                  text-white
                  transition
                  hover:bg-violet-600
                  disabled:opacity-50
                "
              >
                <Send size={16} />
              </button>
            </form>

            {success && (
              <p
                className="
                  mt-2
                  text-xs
                  text-green-600
                "
              >
                {t("success")}
              </p>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            pt-6
            text-sm
            text-gray-500
            md:flex-row
          "
        >
          <p>
  {t.rich("rights", {
    name: () => (
      <a
        href="https://ahmedksontini.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-violet-500
          opacity-80
          transition
          hover:underline
          hover:opacity-100
        "
      >
        Ahmed Ksontini
      </a>
    ),
  })}
</p>
          {/* LANG SWITCH */}
          <div className="flex gap-3">
            <Link
              href="/en"
              className="
                transition
                hover:text-violet-500
              "
            >
              EN
            </Link>

            <Link
              href="/fr"
              className="
                transition
                hover:text-violet-500
              "
            >
              FR
            </Link>

            <Link
              href="/de"
              className="
                transition
                hover:text-violet-500
              "
            >
              DE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}