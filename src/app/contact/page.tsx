"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-14">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <h1 className="text-4xl text-foreground mb-3">Contact</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            Besoin d'un soin ou d'un renseignement ? Contactez-nous, nous vous répondons rapidement.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl text-foreground mb-6">Envoyez-nous un message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm text-foreground block mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground block mb-1.5">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="04XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground block mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="votre@email.be"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground block mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>
                <Button type="submit" className="w-full">Envoyer</Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl text-foreground mb-6">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Téléphone</p>
                    <a href="tel:+32456872138" className="text-sm text-muted-foreground hover:text-primary transition-colors">+32 456 87 21 38</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MessageCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Réponse rapide garantie</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@maysante.be</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Zone d'intervention</p>
                    <p className="text-sm text-muted-foreground">Bruxelles et périphérie</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-card border border-border rounded-lg">
                <p className="text-sm text-foreground font-medium mb-2">Horaires</p>
                <p className="text-sm text-muted-foreground">
                  Nous sommes disponibles 7 jours sur 7 pour répondre à vos demandes de soins.
                  N'hésitez pas à nous contacter à tout moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
