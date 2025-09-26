import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image from "next/image";
import portraitImage from '@/assets/images/teo-portrait.png';
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { SectionHeader } from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {" "}
        {/* Ajusta el padding-top según tu header */}
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section del Contacto */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="relative group">
              <Image
                src={portraitImage}
                className="size-[450px] h-auto mb-20 rounded-3xl shadow-2xl 
               transition-transform duration-500 ease-out
               group-hover:rotate-3 group-hover:scale-105"
                alt="portrait image of teo"
              />
              <div />
            </div>
            <SectionHeader
                      eyebrow="About Me"
                      title="Tadeo Gaviria"
                      description="Full Stack Developer with a unique blend of technical
              expertise and visual arts background. I specialize in creating
              modern, user-centric web applications using React, Angular, and
              Java. With experience in both frontend design and backend
              architecture, I bridge the gap between creative vision and
              technical execution. My strength lies in transforming complex
              problems into intuitive digital experiences, combining UI/UX
              design skills with robust full-stack development. Passionate about
              continuous learning and innovative solutions that drive meaningful
              results."
                    />
          </div>
        </div>
        <div>
            <TapeSection />
            <TestimonialsSection />
            <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}