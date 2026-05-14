"use client";

import { useRef, useState, useEffect } from "react";

import {
  motion,
  useInView,
} from "framer-motion";

import {
  useTranslations,
  useLocale,
} from "next-intl";

import { Send } from "lucide-react";

import { toast } from "sonner";

export function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const ref = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const isInView = useInView(
    ref,
    { once: true }
  );

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

  const handleChange = (
    e:
      React.ChangeEvent<
        HTMLInputElement |
        HTMLTextAreaElement
      >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            ...formData,
            locale,
          }),
        }
      );

      if (res.ok) {
        toast.success(
          "Message sent successfully 🚀"
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(
          "Something went wrong ❌"
        );
      }
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to send message ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gray-900" />

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 12 : 40,
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
            duration: isMobile ? 0.3 : 0.8,
          }}
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
            <form
              onSubmit={
                handleSubmit
              }
              className="space-y-4"
            >

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={
                    formData.firstName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder={t(
                    "firstName"
                  )}
                  className="input"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  value={
                    formData.lastName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder={t(
                    "lastName"
                  )}
                  className="input"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder={t(
                  "email"
                )}
                className="input"
                required
              />

              <textarea
                rows={4}
                name="message"
                value={
                  formData.message
                }
                onChange={
                  handleChange
                }
                placeholder={t(
                  "message"
                )}
                className="textarea"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="btn"
              >
                <Send className="w-4 h-4" />

                {loading
                  ? "Sending..."
                  : t("cta")}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}