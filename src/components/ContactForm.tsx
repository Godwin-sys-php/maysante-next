"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const data = {
      nom: fd.get("nom") as string,
      telephone: fd.get("telephone") as string,
      email: fd.get("email") as string,
      message: fd.get("message") as string,
    };

    if (!data.nom || !data.email || !data.message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-2xl text-foreground mb-6">Envoyez-nous un message</h2>

        {success ? (
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-800 text-sm">
            ✅ Votre message a bien été envoyé. Nous vous répondrons rapidement !
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-foreground block mb-1.5">Nom complet *</label>
              <input
                name="nom"
                type="text"
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-sm text-foreground block mb-1.5">Téléphone</label>
              <input
                name="telephone"
                type="tel"
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="04XX XX XX XX"
              />
            </div>
            <div>
              <label className="text-sm text-foreground block mb-1.5">Email *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="votre@email.be"
              />
            </div>
            <div>
              <label className="text-sm text-foreground block mb-1.5">Message *</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full border border-border rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Décrivez votre besoin..."
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Envoi…" : "Envoyer"}
            </Button>
          </form>
        )}
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
              <p className="text-sm text-muted-foreground">info@maysante.be</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Zone d&apos;intervention</p>
              <p className="text-sm text-muted-foreground">Bruxelles et périphérie</p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-card border border-border rounded-lg">
          <p className="text-sm text-foreground font-medium mb-2">Horaires</p>
          <p className="text-sm text-muted-foreground">
            Nous sommes disponibles 7 jours sur 7 pour répondre à vos demandes de soins.
            N&apos;hésitez pas à nous contacter à tout moment.
          </p>
        </div>
      </div>
    </div>
  );
}
