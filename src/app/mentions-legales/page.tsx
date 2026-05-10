import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site maysante.be — éditeur, hébergeur, propriété intellectuelle et coordonnées de contact.",
  alternates: { canonical: "https://maysante.be/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <h1 className="text-4xl text-foreground mb-3">Mentions légales</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-BE", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-gray max-w-none
            prose-headings:font-semibold prose-headings:text-foreground prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground prose-li:leading-relaxed
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline">

            <h2>1. Éditeur du site</h2>
            <p>
              Le présent site <strong>maysante.be</strong> est édité par :
            </p>
            <ul>
              <li><strong>Dénomination :</strong> Maysanté</li>
              <li><strong>Forme juridique :</strong> [À COMPLÉTER — ex : SRL, ASBL, indépendant]</li>
              <li><strong>Siège social :</strong> [À COMPLÉTER — adresse complète]</li>
              <li><strong>Numéro d'entreprise (BCE) :</strong> [À COMPLÉTER — BE 0XXX.XXX.XXX]</li>
              <li><strong>Téléphone :</strong> <a href="tel:+32456872138">+32 456 87 21 38</a></li>
              <li><strong>Email :</strong> <a href="mailto:contact@maysante.be">contact@maysante.be</a></li>
              <li><strong>Responsable de publication :</strong> [À COMPLÉTER — nom du dirigeant]</li>
            </ul>

            <h2>2. Hébergement</h2>
            <p>
              Le site <strong>maysante.be</strong> ainsi que l'instance d'analyse d'audience{" "}
              <strong>analytics.maysante.be</strong> (Umami auto-hébergé) sont hébergés sur un
              serveur loué auprès de :
            </p>
            <ul>
              <li><strong>DigitalOcean LLC</strong></li>
              <li>101 Avenue of the Americas, 10th Floor, New York, NY 10013, États-Unis</li>
              <li><a href="https://www.digitalocean.com" target="_blank" rel="noopener">digitalocean.com</a></li>
              <li>Localisation du datacenter : Amsterdam (Pays-Bas)</li>
            </ul>

            <h2>3. Activité réglementée</h2>
            <p>
              Maysanté propose des prestations de soins infirmiers et de garde malade à domicile.
              Les soins infirmiers sont dispensés par des infirmier(ère)s diplômé(e)s, agréé(e)s par l'INAMI
              [à confirmer]. Numéro INAMI : [À COMPLÉTER, le cas échéant].
            </p>

            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site (textes, images, logo, code source, structure, charte graphique)
              est la propriété exclusive de Maysanté ou de ses partenaires. Toute reproduction, représentation,
              diffusion ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite
              et constitue une contrefaçon sanctionnée par le Code de droit économique belge.
            </p>

            <h2>5. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Maysanté ne peut être tenue responsable
              du contenu de ces sites ni des dommages éventuels résultant de leur consultation.
            </p>

            <h2>6. Responsabilité</h2>
            <p>
              Les informations diffusées sur le site sont fournies à titre informatif. Elles ne sauraient en
              aucun cas se substituer à un avis médical. En cas de doute ou d'urgence médicale, contactez votre
              médecin traitant ou le 112.
            </p>
            <p>
              Maysanté s'efforce d'assurer l'exactitude et la mise à jour des informations publiées, mais ne
              peut garantir l'absence d'erreur ni la disponibilité permanente du site.
            </p>

            <h2>7. Droit applicable</h2>
            <p>
              Les présentes mentions sont régies par le droit belge. Tout litige relatif à l'utilisation du
              site relève de la compétence exclusive des tribunaux de Bruxelles.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question concernant le site ou ces mentions légales, vous pouvez nous écrire à
              {" "}<a href="mailto:contact@maysante.be">contact@maysante.be</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
