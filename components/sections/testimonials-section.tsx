"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations("testimonials");

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const testimonials = [
    {
      key: "t1",
      author: "Vittorio Stile,",
      roleKey: "t1.role",
      company: "Italy",
      stars: 5,
      rotation: "-rotate-6",
      image: "/vittorio.jpeg",
    },
    {
      key: "t2",
      author: "Souhir M'rabet",
      roleKey: "t2.role",
      company: "Paris",
      stars: 5,
      rotation: "rotate-3",
      image: "/souhir.jpeg",
    },
    {
      key: "t3",
      author: "Azza Lotfi ",
      roleKey: "t3.role",
      company: "Tunisie",
      stars: 5,
      rotation: "rotate-6",
      image: "/azza.jpeg",
    },
    
    {
      key: "t4",
      author: "Maher Abdelli ",
      roleKey: "t4.role",
      company: "ISET Kairouan ,Tunisie",
      stars: 5,
      rotation: "rotate-3",
      image: "/maher.jpeg",
    }
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
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isLeft = index === 0;
            const isCenter = index === 1;
            const isRight = index === 2;

            return (
              <div
                key={testimonial.key}
                className={`
                  relative
                  transition-all
                  duration-500
                  ${isMobile ? "" : testimonial.rotation}

                  ${
                    isMobile
                      ? "scale-100 opacity-100"
                      : hoveredCard === index
                      ? "scale-110 z-20 rotate-0"
                      : isCenter
                      ? "scale-100 opacity-100 z-10"
                      : "scale-95 opacity-70 z-0"
                  }
                `}
                onMouseEnter={() => !isMobile && setHoveredCard(index)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
              >
                <div
                  className={`
                    bg-gray-900
                    rounded-2xl
                    p-6
                    w-80
                    min-h-[380px]
                    transition-all
                    duration-500
                    flex
                    flex-col
                    border

                    ${
                      hoveredCard === index
                        ? "shadow-2xl shadow-violet-500/30 border-violet-500/60 ring-4 ring-violet-500/20"
                        : "border-gray-800"
                    }
                  `}
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
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-1">
                    "{t(`${testimonial.key}.quote`)}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-800">
                    {/* USER PHOTO */}
                    <img
  src={testimonial.image}
  alt={testimonial.author}
  className="
    w-16
    h-16
    md:w-20
    md:h-20
    rounded-full
    object-cover
    mr-4
    flex-shrink-0
    border-2
    border-violet-500/40
    shadow-lg
  "
/>

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