import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { communes } from "@/lib/communes";

export const metadata: Metadata = {
  title: "Soins à domicile par commune — Bruxelles et périphérie",
  description:
    "Soins infirmiers et garde malade à domicile dans les 19 communes de Bruxelles et la périphérie. Trouvez votre commune et bénéficiez d'une intervention rapide 7j/7.",
  alternates: { canonical: "https://maysante.be/soins-domicile" },
};

export default function SoinsDomicileIndex() {
  const bxl = communes.filter((c) => c.region === "bruxelles");
  const peri = communes.filter((c) => c.region === "peripherie");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-primary text-sm font-medium mb-3 tracking-wide uppercase">
            Zone d'intervention
          </p>
          <h1 className="text-4xl md:text-5xl text-foreground mb-4 leading-tight">
            Soins à domicile par commune
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-12">
            Nous intervenons dans les 19 communes de la Région de Bruxelles-Capitale
            et plusieurs communes de la périphérie immédiate. Sélectionnez votre commune
            pour découvrir les services disponibles près de chez vous.
          </p>

          <section className="mb-14">
            <h2 className="text-xl text-foreground mb-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Région de Bruxelles-Capitale
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {bxl.map((c) => (
                <Link
                  key={c.slug}
                  href={`/soins-domicile/${c.slug}`}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <div>
                    <p className="text-foreground font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {c.postalCodes.join(" · ")}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Périphérie de Bruxelles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {peri.map((c) => (
                <Link
                  key={c.slug}
                  href={`/soins-domicile/${c.slug}`}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <div>
                    <p className="text-foreground font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {c.postalCodes.join(" · ")}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
