import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'équipe Maysanté : des professionnels de santé qualifiés, présents dans les 19 communes de Bruxelles-Capitale pour des soins à domicile humains et personnalisés.",
  alternates: { canonical: "https://maysante.be/a-propos" },
};

export default function APropos() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-14">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h1 className="text-4xl text-foreground mb-3">À propos</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            Une équipe de professionnels qualifiés au service de votre bien-être.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl text-foreground mb-4">Notre mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chez Maysanté, nous croyons que les meilleurs soins sont ceux prodigués avec humanité.
                Notre équipe de professionnels qualifiés s'engage à vous offrir des services de santé
                personnalisés dans le respect de vos besoins et de votre dignité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fondée à Bruxelles, notre structure est née de la conviction qu'un accompagnement
                de qualité à domicile permet de préserver l'autonomie et le confort des patients,
                tout en soulageant leurs proches.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-foreground mb-4">Notre approche</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Proximité",
                    text: "Nous sommes présents dans toutes les communes de Bruxelles pour un service de proximité rapide et efficace.",
                  },
                  {
                    title: "Respect",
                    text: "Chaque patient est unique. Nous respectons vos besoins, vos valeurs et votre rythme de vie.",
                  },
                  {
                    title: "Bienveillance",
                    text: "Notre approche humaine et chaleureuse vous accompagne avec douceur dans votre parcours de soins.",
                  },
                ].map((v) => (
                  <div key={v.title}>
                    <h3 className="text-foreground font-semibold mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-12">
            <h2 className="text-2xl text-foreground mb-6">Pourquoi nous choisir</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { num: "7j/7", label: "Disponibilité", text: "Nous sommes joignables tous les jours, y compris le week-end." },
                { num: "19", label: "Communes couvertes", text: "Toute la Région de Bruxelles-Capitale plus les communes avoisinantes." },
                { num: "100%", label: "Personnalisé", text: "Chaque prise en charge est adaptée à la situation individuelle du patient." },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-light text-primary mb-1">{s.num}</p>
                  <p className="text-foreground font-semibold text-sm mb-1">{s.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
