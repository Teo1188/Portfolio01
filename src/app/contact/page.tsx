import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import contactImage from '@/assets/images/Contactme-img.png';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20"> {/* Ajusta el padding-top según tu header */}
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section del Contacto */}
          <div className="flex flex-col items-center text-center mb-12">
            <Image
                src={contactImage}
                className="size-[150px] h-auto mt-10 pb-20 animate-bounce"
                alt="personality character based in teo"
              />
            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Let&apos;s Talk
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Do you have a project in mind? I&apos;d love to hear from you. Send me a message and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Formulario */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}