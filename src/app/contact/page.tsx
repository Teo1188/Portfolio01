import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20"> {/* Ajusta el padding-top según tu header */}
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section del Contacto */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-6xl md:text-7xl mb-4">
              Let&apos;s Talk
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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