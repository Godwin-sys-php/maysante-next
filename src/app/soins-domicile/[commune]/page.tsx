import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, Stethoscope, ShieldCheck, MapPin, Clock, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { communes, getCommune } from "@/lib/communes";

export async function generateStaticParams() {
  return communes.map((c) => ({ commune: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ commune: string }>;
}): Promise<Metadata> {
  const { commune: slug } = await params;
  const c = getCommune(slug);
  if (!c) return {};

  const title = `Soins infirmiers à domicile à ${c.name}`;
  const description = `Soins infirmiers et garde malade à domicile à ${c.name} (${c.postalCodes.join(", ")}). Disponible 7j/7 — pansements, injections, perfusions, suivi post-opératoire.`;

  return {
    title,
    description,
    alternates: { canonical: `https://maysante.be/soins-domicile/${c.slug}` },
    openGraph: {
      title: `${title} — Maysanté`,
      description,
      url: `https://maysante.be/soins-domicile/${c.slug}`,
      type: "website",
    },
  };
}

export default async function CommunePage({
  params,
}: {
  params: Promise<{ commune: string }>;
}) {
  const { commune: slug } = await params;
  const c = getCommune(slug);
  if (!c) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Soins infirmiers et garde malade à domicile",
    provider: {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      name: "Maysanté",
      telephone: "+32456872138",
      email: "info@maysante.be",
      url: "https://maysante.be",
    },
    areaServed: {
      "@type": "City",
      name: c.name,
      addressRegion: "Bruxelles-Capitale",
      addressCountry: "BE",
      ...(c.postalCodes.length > 0 && { postalCode: c.postalCodes }),
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: "+32456872138",
      availableLanguage: ["fr", "nl"],
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-5">
          <Link
            href="/soins-domicile"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <MapPin className="w-3.5 h-3.5" />
            Toutes les communes
          </Link>

          <div className="mb-10">
            <p className="text-primary text-sm font-medium mb-3 tracking-wide uppercase">
              {c.region === "bruxelles" ? "Bruxelles-Capitale" : "Périphérie de Bruxelles"} ·
              {" "}{c.postalCodes.join(", ")}
            </p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-5 leading-tight">
              Soins infirmiers à domicile à <span className="text-primary">{c.name}</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {c.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+32456872138">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Phone className="w-4 h-4" />
                  +32 456 87 21 38
                </Button>
              </a>
              <Link href="/etre-appele">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  Être appelé
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mb-12">
            <div className="p-5 rounded-xl border border-border">
              <Clock className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Disponible 7j/7</p>
              <p className="text-xs text-muted-foreground mt-1">Jour et nuit</p>
            </div>
            <div className="p-5 rounded-xl border border-border">
              <MapPin className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Intervention rapide</p>
              <p className="text-xs text-muted-foreground mt-1">À {c.name} et alentours</p>
            </div>
            <div className="p-5 rounded-xl border border-border">
              <ShieldCheck className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Professionnels qualifiés</p>
              <p className="text-xs text-muted-foreground mt-1">Équipe diplômée</p>
            </div>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-2xl text-foreground">Soins infirmiers à {c.name}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Notre équipe d'infirmiers diplômés intervient à votre domicile à {c.name} pour
              tous les soins prescrits, en lien avec votre médecin traitant.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Pansements simples et complexes",
                "Injections et perfusions",
                "Suivi post-opératoire",
                "Surveillance des paramètres vitaux",
                "Alimentation entérale et parentérale",
                "Soins de stomie",
                "Bas de contention",
                "Soins d'hygiène",
              ].map((d) => (
                <li key={d} className="text-sm text-foreground flex gap-2.5">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-2xl text-foreground">Garde malade à {c.name}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Une présence attentive, de jour comme de nuit, pour assurer sécurité, confort
              et sérénité à vos proches résidant à {c.name}.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Garde de jour et de nuit",
                "Aide aux gestes quotidiens",
                "Surveillance de l'état de santé",
                "Compagnie et soutien moral",
                "Transmission à la famille",
              ].map((d) => (
                <li key={d} className="text-sm text-foreground flex gap-2.5">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </section>

          {c.neighborhoods && c.neighborhoods.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl text-foreground mb-3">
                Quartiers desservis à {c.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Nous nous déplaçons dans tous les quartiers de la commune, notamment :
              </p>
              <div className="flex flex-wrap gap-2">
                {c.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="px-3 py-1.5 border border-border rounded text-sm text-foreground"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="bg-primary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl text-primary-foreground mb-3">
              Besoin d'un soin à {c.name} ?
            </h2>
            <p className="text-primary-foreground/80 text-sm mb-6 max-w-md mx-auto">
              Réponse rapide par téléphone ou WhatsApp. Devis gratuit, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+32456872138">
                <Button variant="secondary" size="lg" className="gap-2 w-full sm:w-auto">
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </Button>
              </a>
              <Link href="/etre-appele">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Être rappelé
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
