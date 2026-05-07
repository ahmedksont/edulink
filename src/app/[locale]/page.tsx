import { HeroSection } from "../../../components/sections/hero-section";
import { AboutSection } from "../../../components/sections/about-section";
import { ProgramsSection } from "../../../components/sections/programs-section";
import { TeamSection } from "../../../components/sections/community-section";
import { ContactSection } from "../../../components/sections/contact-section";
import { VisionSection } from "@/components/sections/vision-section";
import TestimonialsSection from "../../../components/sections/testimonials-section";
import { RipuSection } from "@/components/sections/ripu-section";
import { SmartExamSection } from "@/components/sections/smartexams-section";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="vision">
        <VisionSection />
      </section>

      <section id="community">
        <TeamSection />
      </section>

      <section id="ripu">
        <RipuSection />
      </section>
      <section id="smart-exam" >
        <SmartExamSection />
      </section>

      <section id="programs">
        <ProgramsSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}