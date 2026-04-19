import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Stethoscope, ShieldCheck } from "lucide-react";
import gardeImg from "@/assets/garde-malade.jpg";
import soinsImg from "@/assets/soins-infirmiers.jpg";

const allServices = [
  {
    id: "soins-infirmiers",
    icon: Stethoscope,
    title: "Soins infirmiers à domicile",
    desc: "Pansements, injections, perfusions, suivi post-opératoire, accompagnement quotidien, suivi alimentation (entérale, parentérale), stomie, bas de contention, pilulier, soins urinaires et d'hygiène.",
    image: gardeImg,
    details: [
      "Pansements simples et complexes",
      "Injections sous-cutanées et intramusculaires",
      "Pose et surveillance de perfusions",
      "Soins post-opératoires",
      "Surveillance des paramètres vitaux",
      "Alimentation entérale et parentérale",
      "Stomie",
      "Pose et retrait bas de contention",
      "Surveillance et administration médicaments",
      "Pilulier",
      "Soins urinaires",
      "Soins d'hygiène",
    ],
  },
  {
    id: "garde-malade",
    icon: ShieldCheck,
    title: "Garde malade",
    desc: "Présence attentive et bienveillante, de jour comme de nuit, pour assurer sécurité, confort et sérénité à vos proches.",
    image: soinsImg,
    details: [
      "Garde de jour et de nuit",
      "Aide aux gestes quotidiens",
      "Surveillance de l'état de santé",
      "Compagnie et soutien moral",
      "Transmission d'informations à la famille",
    ],
  },
];

export default function NosServices() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-14">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h1 className="text-4xl text-foreground mb-3">Nos services</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            Découvrez nos soins personnalisés à domicile, adaptés à vos besoins quotidiens.
          </p>

          <div className="space-y-20">
            {allServices.map((s, i) => (
              <div
                key={s.title}
                id={s.id}
                className={`scroll-mt-24 grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl text-foreground">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="text-sm text-foreground flex gap-2.5">
                        <span className="text-primary mt-0.5 shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                  {s.image ? (
                    <img
                      src={s.image.src}
                      alt={s.title}
                      className="w-full h-72 md:h-80 object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="w-full h-72 md:h-80 rounded-2xl bg-accent/50 flex items-center justify-center">
                      <s.icon className="w-16 h-16 text-primary/20" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}
