import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EtreAppeleForm from "@/components/EtreAppeleForm";

export const metadata: Metadata = {
  title: "Être rappelé",
  description:
    "Demandez à être rappelé par l'équipe Maysanté pour organiser vos soins infirmiers ou une garde malade à domicile à Bruxelles. Sans engagement, réponse dans la journée.",
  alternates: { canonical: "https://maysante.be/etre-appele" },
};

export default function EtreAppele() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-14 relative overflow-hidden">
        {/* Decorative gradient backdrop */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
          <EtreAppeleForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
