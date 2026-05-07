"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
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
  const [email, setEmail] = useState("");

  const navigationItems = [
    { key: "about", href: "about" },
    { key: "programs", href: "programs" },
    { key: "community", href: "community" },
    { key: "contact", href: "contact" },
  ];

  const quickLinks = [
    { key: "events", href: "https://ripusousse.com", external: true },
    { key: "news", href: "/news" },
    { key: "partners", href: "/partners" },
    { key: "faq", href: "/faq" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden border-t border-gray-200">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-gray-900">EduLink</span>
              <span className="text-violet-500">Collider</span>
            </h3>

            <div className="flex items-center gap-2 mt-2">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {t("tag")}
              </span>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              {t("description")}
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-violet-500 hover:text-white transition">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-violet-500 hover:text-white transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-violet-500 hover:text-white transition">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* NAV */}
          <div>
            <h4 className="font-semibold mb-4">{t("navTitle")}</h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}/${item.href}`}
                    className="text-gray-600 hover:text-violet-500 transition"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">{t("quickTitle")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-violet-500 transition"
                  >
                    {t(`quick.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">{t("contactTitle")}</h4>

            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-violet-500" />
                {t("address")}
              </p>

              <p className="flex items-center gap-2">
                <Mail size={14} className="text-violet-500" />
                {t("email")}
              </p>

              <p className="flex items-center gap-2">
                <Phone size={14} className="text-violet-500" />
                {t("phone")}
              </p>
            </div>

            {/* NEWSLETTER */}
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder={t("placeholder")}
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-violet-500 text-white px-3 rounded-lg hover:bg-violet-600 transition">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          {/* RIGHTS */}
          <p>
            {t.rich("rights", {
              name: () => (
                <a
                  href="https://ahmedksontini.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:underline opacity-80 hover:opacity-100 transition"
                >
                  Ahmed Ksontini
                </a>
              ),
            })}
             <a
                  href="https://ahmedksontini.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:underline opacity-80 hover:opacity-100 transition"
                >
                  Ahmed Ksontini
                </a>
          </p>
          

          {/* LANG SWITCH */}
          <div className="flex gap-3">
            <Link href="/en" className="hover:text-violet-500">EN</Link>
            <Link href="/fr" className="hover:text-violet-500">FR</Link>
            <Link href="/de" className="hover:text-violet-500">DE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}