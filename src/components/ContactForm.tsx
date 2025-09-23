"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Validar que las variables de entorno existan
  const validateEnvVars = () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Faltan variables de entorno de EmailJS');
      return false;
    }
    return true;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEnvVars()) {
      alert('Error de configuración. Por favor, contacta al administrador.');
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setIsSent(true);
      form.current?.reset();
      
      // Resetear el estado después de 3 segundos
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  if (isSent) {
    return (
      <div className="text-center py-12">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-md mx-auto">
          <p className="font-semibold">Message sent!</p>
          <p>I will respond as soon as possible. 👽</p>
        </div>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input 
            type="text" 
            id="from_name"
            name="from_name"
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input 
            type="email" 
            id="from_email"
            name="from_email"
            required 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <input 
          type="text" 
          id="subject"
          name="subject" 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
          placeholder="How can I help you?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea 
          id="message"
          name="message"  // Este ya coincide con el template
          rows={6} 
          required 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical text-gray-900 placeholder-gray-500"
          placeholder="Tell me about your project..."
        />
      </div>

      <button 
        type="submit" 
        disabled={isSending}
        className="w-full bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
      >
        {isSending ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}