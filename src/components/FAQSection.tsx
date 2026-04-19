"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Intervenez-vous dans toutes les communes de Bruxelles ?",
    a: "Oui. Nos services couvrent l'ensemble des 19 communes de Bruxelles, sans exception.",
  },
  {
    q: "Comment demander un soin à domicile ?",
    a: "Vous pouvez nous contacter via le formulaire en ligne, par téléphone ou directement par WhatsApp pour une réponse rapide.",
  },
  {
    q: "Êtes-vous disponibles le week-end et les jours fériés ?",
    a: "Absolument. Notre équipe est disponible 7 jours sur 7, y compris les jours fériés, pour assurer une continuité des soins.",
  },
  {
    q: "Travaillez-vous avec mon médecin traitant ?",
    a: "Oui. Nous assurons une coordination directe avec votre médecin afin de garantir la meilleure prise en charge possible et un suivi adapté.",
  },
  {
    q: "Quels types de soins proposez-vous ?",
    a: "Nous proposons : soins infirmiers à domicile, kinésithérapie, garde malade et conseils diabétiques, adaptés à chaque situation et à chaque patient.",
  },
  {
    q: "Les soins sont-ils remboursés par la mutuelle ?",
    a: "La majorité de nos prestations peuvent être partiellement ou totalement remboursées par votre mutuelle, selon votre couverture. Nous vous aidons à comprendre vos droits.",
  },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="max-w-3xl mx-auto px-5">
      <h2 className="text-3xl text-foreground mb-3 text-center">Questions fréquentes</h2>
      <p className="text-muted-foreground text-center mb-10">
        Tout ce que vous devez savoir sur nos services de soins à domicile.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
