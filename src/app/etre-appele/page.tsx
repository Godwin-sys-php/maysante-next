"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneField from "@/components/PhoneField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const callbackSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty({ message: "Le prénom est requis" })
    .max(50, { message: "Le prénom doit faire moins de 50 caractères" }),
  lastName: z
    .string()
    .trim()
    .nonempty({ message: "Le nom est requis" })
    .max(50, { message: "Le nom doit faire moins de 50 caractères" }),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Le numéro est requis" })
    .refine((v) => isValidPhoneNumber(v), {
      message: "Numéro de téléphone invalide",
    }),
  careType: z.enum(["soins-infirmiers", "garde-malade"], {
    error: "Veuillez choisir un type de soin",
  }),
});

export default function EtreAppele() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [careType, setCareType] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      phone,
      careType: String(formData.get("careType") || ""),
    };

    const result = callbackSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/etre-appele", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error();
      toast({
        title: "Demande envoyée",
        description: "Nous vous rappelons dans les plus brefs délais.",
      });
      router.push("/");
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-14 relative overflow-hidden">
        {/* Decorative gradient backdrop */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-20 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT — copy */}
            <div>
              <p className="text-primary text-sm font-medium mb-4 tracking-wide uppercase">
                Être rappelé · Sans engagement
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-5">
                Laissez-nous vos coordonnées,{" "}
                <span className="text-primary">on vous rappelle.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                Une question, un soin à planifier ou un proche à accompagner ?
                Remplissez le formulaire et un membre de notre équipe vous
                contactera rapidement.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Réponse rapide
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Rappel dans la journée, 7j/7.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Confidentiel
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Vos données restent strictement privées.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Préférez appeler ?
                    </p>
                    <a
                      href="tel:+32456872138"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +32 456 87 21 38
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — liquid glass form */}
            <div className="relative lg:-mr-4">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-2xl -z-10" />
              <div className="relative rounded-3xl border border-white/40 dark:border-white/10 bg-background/40 backdrop-blur-2xl shadow-2xl shadow-primary/10 p-8 md:p-10 lg:translate-y-2">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent dark:from-white/5 pointer-events-none" />
                <div className="relative">
                  <h2 className="text-2xl text-foreground mb-1">
                    Demander un rappel
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Réponse rapide, sans engagement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName" className="text-xs">
                          Prénom
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          maxLength={50}
                          className="mt-1.5 bg-background/60 backdrop-blur"
                          placeholder="Marie"
                        />
                        {errors.firstName && (
                          <p className="text-xs text-destructive mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-xs">
                          Nom
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          maxLength={50}
                          className="mt-1.5 bg-background/60 backdrop-blur"
                          placeholder="Dupont"
                        />
                        {errors.lastName && (
                          <p className="text-xs text-destructive mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-xs">
                        Téléphone
                      </Label>
                      <PhoneField
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={setPhone}
                        placeholder="4XX XX XX XX"
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label className="text-xs">Type de soin</Label>
                      <RadioGroup
                        name="careType"
                        value={careType}
                        onValueChange={setCareType}
                        className="grid grid-cols-2 gap-2 mt-1.5"
                      >
                        <label
                          htmlFor="soins-infirmiers"
                          className={`cursor-pointer rounded-lg border px-3 py-3 text-sm transition-all bg-background/60 backdrop-blur ${
                            careType === "soins-infirmiers"
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem
                            value="soins-infirmiers"
                            id="soins-infirmiers"
                            className="sr-only"
                          />
                          Soins infirmiers
                        </label>
                        <label
                          htmlFor="garde-malade"
                          className={`cursor-pointer rounded-lg border px-3 py-3 text-sm transition-all bg-background/60 backdrop-blur ${
                            careType === "garde-malade"
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem
                            value="garde-malade"
                            id="garde-malade"
                            className="sr-only"
                          />
                          Garde malade
                        </label>
                      </RadioGroup>
                      {errors.careType && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.careType}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2 mt-2"
                      disabled={submitting}
                    >
                      {submitting ? "Envoi…" : "Être rappelé"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center">
                      En envoyant, vous acceptez d'être recontacté par Maysanté.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
