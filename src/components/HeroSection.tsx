import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gardeImg from "@/assets/garde-malade.jpg";
import soinsImg from "@/assets/soins-infirmiers.jpg";

const HeroSection = () => (
  <section className="pt-14">
    <div className="max-w-6xl mx-auto px-5 pt-16 md:pt-24 pb-8">
      {/* Centered headline */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-primary text-sm font-medium mb-4 tracking-wide uppercase">
          Soins à domicile · Bruxelles
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-5">
          Vos soins, votre bien-être,{" "}
          <span className="text-primary">chez vous.</span>
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          Soins infirmiers et garde malade.
          Intervention rapide dans à Bruxelles et périphérie.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/etre-appele">
            <Button size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Être appelé
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="gap-2">
              Demander un soin
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Asymmetric image grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <Link
          href="/nos-services#soins-infirmiers"
          className="md:col-span-7 relative overflow-hidden rounded-2xl group block"
        >
          <img
            src={gardeImg.src}
            alt="Infirmière accompagnant un patient à domicile"
            className="w-full h-64 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
            <p className="text-white text-sm font-medium">Soins infirmiers à domicile</p>
            <p className="text-white/75 text-xs">Pansements, injections, perfusions</p>
          </div>
        </Link>
        <Link
          href="/nos-services#garde-malade"
          className="md:col-span-5 relative overflow-hidden rounded-2xl group block"
        >
          <img
            src={soinsImg.src}
            alt="Garde malade accompagnant un patient"
            className="w-full h-64 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
            <p className="text-white text-sm font-medium">Garde malade</p>
            <p className="text-white/75 text-xs">Présence attentive jour et nuit</p>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
