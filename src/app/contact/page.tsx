import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Maysanté pour un soin infirmier ou une garde malade à domicile à Bruxelles. Réponse rapide, disponible 7j/7 au +32 456 87 21 38.",
  alternates: { canonical: "https://maysante.be/contact" },
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-14">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h1 className="text-4xl text-foreground mb-3">Contact</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            Besoin d&apos;un soin ou d&apos;un renseignement ? Contactez-nous, nous vous répondons rapidement.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
