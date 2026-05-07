"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      key: "t1",
      author: "Maria Beltran",
      roleKey: "t1.role",
      company: "Zoe Immersive",
      stars: 5,
      rotation: "-rotate-12",
    },
    {
      key: "t2",
      author: "Christophe Barraud",
      roleKey: "t2.role",
      company: "Mobsya",
      stars: 5,
      rotation: "rotate-6",
    },
    {
      key: "t3",
      author: "Gauthier Dubruel",
      roleKey: "t3.role",
      company: "UbiSim",
      stars: 5,
      rotation: "rotate-8",
    },
    {
      key: "t4",
      author: "Omar Luethi",
      roleKey: "t4.role",
      company: "Dual Academy",
      stars: 5,
      rotation: "-rotate-6",
    },
    {
      key: "t5",
      author: "Stephane Coillet-Matillon",
      roleKey: "t5.role",
      company: "Kiwix",
      stars: 5,
      rotation: "rotate-5",
    },
    {
      key: "t6",
      author: "Govinda Upadhyay",
      roleKey: "t6.role",
      company: "LEDsafari",
      stars: 5,
      rotation: "-rotate-4",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isCorner = index === 0 || index === testimonials.length - 1;
            const isCenter = index > 0 && index < testimonials.length - 1;

            return (
              <div
                key={testimonial.key}
                className={`relative transition-all duration-500 ${testimonial.rotation} ${
                  isCorner
                    ? hoveredCard === index
                      ? "opacity-100 scale-110 z-20"
                      : "opacity-40 scale-95 z-10"
                    : "opacity-100 scale-100 z-15"
                } ${hoveredCard === index ? "rotate-0" : ""}`}
                style={{
                  transform:
                    hoveredCard === index ? "rotate(0deg) scale(1.1)" : "",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`bg-gray-900 rounded-2xl p-6 w-80 min-h-[380px] transition-all duration-500 flex flex-col ${
                    hoveredCard === index && isCorner
                      ? "shadow-2xl shadow-violet-500/30 border-2 border-violet-500/60 ring-4 ring-violet-500/30"
                      : isCenter
                      ? "shadow-xl border border-gray-800"
                      : "shadow-lg border border-gray-800/60"
                  }`}
                >
                  {/* Stars */}
                  <div className="flex mb-4 gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="h-6 w-6 text-violet-500/30 mb-3" />

                  {/* Quote */}
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-6 flex-1">
                    "{t(`${testimonial.key}.quote`)}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-800">
                    <div className="w-12 h-12 rounded-full mr-3 flex-shrink-0 bg-violet-500/20 flex items-center justify-center">
                      <span className="text-violet-400 font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm truncate">
                        {testimonial.author}
                      </div>

                      <div className="text-gray-400 text-xs truncate">
                        {t(testimonial.roleKey)}
                      </div>

                      <div className="text-violet-400 text-xs font-medium truncate">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
            {t("cta")}
          </h3>
        </div>
      </div>
    </section>
  );
}