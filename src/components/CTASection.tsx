import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-5">
      <div className="bg-primary rounded-lg p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl text-primary-foreground mb-2">
            Un soin à planifier ?
          </h2>
          <p className="text-primary-foreground/75 text-sm">
            Réponse rapide par téléphone ou WhatsApp.
          </p>
        </div>
        <Link href="/etre-appele">
          <Button variant="secondary" className="gap-2 shrink-0">
            <Phone className="w-4 h-4" />
            Être appelé
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
