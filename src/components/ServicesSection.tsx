import Link from "next/link";
import { Stethoscope, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Soins infirmiers",
    desc: "Pansements, injections, perfusions, stomie, bas de contention, pilulier, soins urinaires, d'hygiène et administration de médicaments.",
    href: "/nos-services#soins-infirmiers",
  },
  {
    icon: ShieldCheck,
    title: "Garde malade",
    desc: "Présence attentive de jour comme de nuit pour la sécurité et le confort de vos proches.",
    href: "/nos-services#garde-malade",
  },
];

const ServicesSection = () => (
  <section className="py-20 bg-card">
    <div className="max-w-6xl mx-auto px-5">
      <div className="mb-12">
        <h2 className="text-3xl text-foreground mb-3">Nos services</h2>
        <p className="text-muted-foreground max-w-lg">
          Des soins personnalisés à domicile, adaptés à vos besoins quotidiens.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group bg-background border border-border rounded-2xl p-8 flex flex-col gap-4 transition-all hover:border-primary/40 hover:shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-auto">
              En savoir plus
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/nos-services"
          className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
        >
          Voir tous nos services <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
