import Link from "next/link";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-6xl mx-auto px-5">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <img src={logo.src} alt="Maysanté" className="h-10 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Vos soins, votre bien-être, chez vous, en toute confiance.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Pages</p>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/" className="text-foreground hover:text-primary transition-colors">Accueil</Link></li>
            <li><Link href="/nos-services" className="text-foreground hover:text-primary transition-colors">Nos services</Link></li>
            <li><Link href="/a-propos" className="text-foreground hover:text-primary transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Contact</p>
          <ul className="space-y-1.5 text-sm text-foreground">
            <li><a href="tel:+32456872138" className="hover:text-primary transition-colors">+32 456 87 21 38</a></li>
            <li>Bruxelles, Belgique</li>
            <li>Disponible 7j/7</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maysanté. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
