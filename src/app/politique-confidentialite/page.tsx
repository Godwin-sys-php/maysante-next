import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site maysante.be — données collectées, finalités, durée de conservation et exercice de vos droits RGPD.",
  alternates: { canonical: "https://maysante.be/politique-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <h1 className="text-4xl text-foreground mb-3">Politique de confidentialité</h1>
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

            <p>
              Maysanté accorde une importance fondamentale au respect de votre vie privée et à la
              protection de vos données personnelles. La présente politique vous informe de la
              manière dont nous collectons, utilisons et protégeons vos données, conformément au
              Règlement général sur la protection des données (RGPD — Règlement UE 2016/679) et à
              la loi belge du 30 juillet 2018.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement de vos données personnelles est :
            </p>
            <ul>
              <li><strong>Maysanté</strong></li>
              <li>[À COMPLÉTER — adresse complète]</li>
              <li>Email : <a href="mailto:contact@maysante.be">contact@maysante.be</a></li>
              <li>Téléphone : <a href="tel:+32456872138">+32 456 87 21 38</a></li>
            </ul>

            <h2>2. Données collectées et finalités</h2>

            <h3>2.1. Formulaire de contact (/contact)</h3>
            <ul>
              <li><strong>Données :</strong> nom, adresse email, numéro de téléphone, contenu du message.</li>
              <li><strong>Finalité :</strong> répondre à votre demande de contact.</li>
              <li><strong>Base légale :</strong> consentement (art. 6.1.a RGPD) et exécution de mesures précontractuelles (art. 6.1.b RGPD).</li>
              <li><strong>Conservation :</strong> 3 ans après le dernier échange.</li>
            </ul>

            <h3>2.2. Demande d'être appelé (/etre-appele)</h3>
            <ul>
              <li><strong>Données :</strong> prénom, nom, numéro de téléphone, type de soin demandé.</li>
              <li><strong>Finalité :</strong> vous rappeler pour planifier une intervention.</li>
              <li><strong>Base légale :</strong> consentement et mesures précontractuelles.</li>
              <li><strong>Conservation :</strong> 3 ans après le dernier échange.</li>
            </ul>

            <h3>2.3. Mesure d'audience (Umami)</h3>
            <p>
              Nous utilisons <strong>Umami</strong>, une solution d'analyse d'audience{" "}
              <strong>auto-hébergée</strong> sur notre propre serveur (
              <a href="https://analytics.maysante.be" target="_blank" rel="noopener">analytics.maysante.be</a>),
              loué auprès de DigitalOcean. Aucune donnée n'est transmise à un service d'analyse tiers
              type Google Analytics.
            </p>
            <p>
              Umami <strong>n'utilise aucun cookie</strong> et ne collecte aucune donnée personnelle
              identifiante. Les adresses IP ne sont pas stockées et sont anonymisées avant traitement.
            </p>
            <p>
              À ce titre, et conformément aux recommandations de l'APD belge et de la CNIL, aucun
              consentement préalable n'est requis et aucun bandeau cookies n'est affiché.
            </p>

            <h2>3. Destinataires des données</h2>
            <p>
              Vos données sont accessibles uniquement aux membres habilités de l'équipe Maysanté
              chargés du traitement de votre demande. Elles ne sont <strong>jamais vendues</strong>,
              louées ou cédées à des tiers à des fins commerciales.
            </p>
            <p>
              Sous-traitants techniques utilisés :
            </p>
            <ul>
              <li><strong>Vercel Inc.</strong> (États-Unis) — hébergement du site, sous garanties contractuelles types (SCC).</li>
              <li><strong>DigitalOcean LLC</strong> (États-Unis) — hébergement du serveur d'analyse Umami et de la plateforme admin, sous garanties contractuelles types (SCC).</li>
              <li><strong>Resend</strong> — envoi des emails de notification.</li>
              <li><strong>Sanity</strong> — gestion de contenu (articles de blog).</li>
            </ul>

            <h2>4. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour
              protéger vos données contre la perte, l'accès non autorisé, la divulgation ou la
              destruction : chiffrement HTTPS (TLS), en-têtes de sécurité HTTP, validation stricte
              des entrées, limitation du nombre de soumissions par adresse IP, accès administrateur
              protégé par mot de passe (bcrypt) et session chiffrée.
            </p>

            <h2>5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul>
              <li><strong>Droit d'accès</strong> — savoir quelles données nous détenons sur vous.</li>
              <li><strong>Droit de rectification</strong> — corriger des données inexactes.</li>
              <li><strong>Droit à l'effacement</strong> (« droit à l'oubli »).</li>
              <li><strong>Droit d'opposition</strong> au traitement.</li>
              <li><strong>Droit à la limitation</strong> du traitement.</li>
              <li><strong>Droit à la portabilité</strong> des données.</li>
              <li><strong>Droit de retirer votre consentement</strong> à tout moment.</li>
            </ul>
            <p>
              Pour exercer l'un de ces droits, écrivez-nous à
              {" "}<a href="mailto:contact@maysante.be">contact@maysante.be</a>. Nous vous
              répondrons dans un délai maximum d'un mois.
            </p>

            <h2>6. Réclamation</h2>
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés,
              vous pouvez introduire une réclamation auprès de l'Autorité de protection des
              données (APD) :
            </p>
            <ul>
              <li>Rue de la Presse 35, 1000 Bruxelles</li>
              <li>Téléphone : +32 (0)2 274 48 00</li>
              <li>
                Site web :{" "}
                <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener">
                  autoriteprotectiondonnees.be
                </a>
              </li>
            </ul>

            <h2>7. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique à tout moment. Toute
              modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
