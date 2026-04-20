import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import pool from "@/lib/db";
import { sendNotification } from "@/lib/mailer";
import { escapeHtml } from "@/lib/sanitize";
import { rateLimit, getIp } from "@/lib/ratelimit";

const schema = z.object({
  firstName: z.string().trim().min(1).max(50),
  lastName: z.string().trim().min(1).max(50),
  phone: z.string().trim().min(1).max(30),
  careType: z.enum(["soins-infirmiers", "garde-malade"]),
});

if (!process.env.ADMIN_URL_PREFIX) throw new Error("ADMIN_URL_PREFIX manquant");

export async function POST(req: NextRequest) {
  if (!rateLimit(`appel:${getIp(req)}`, 5, 10 * 60 * 1000))
    return NextResponse.json({ error: "Trop de demandes. Réessayez dans 10 minutes." }, { status: 429 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Corps invalide." }, { status: 400 });

  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });

  const { firstName, lastName, phone, careType } = parsed.data;

  let id: number;
  try {
    const [result] = await pool.query(
      "INSERT INTO appels (prenom, nom, telephone, type_soin) VALUES (?, ?, ?, ?)",
      [firstName, lastName, phone, careType]
    );
    id = (result as { insertId: number }).insertId;
  } catch (err) {
    console.error("[etre-appele] DB error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }

  const adminUrl = `${process.env.ADMIN_URL_PREFIX}/demandes/appel/${id}`;
  const careLabel = careType === "soins-infirmiers" ? "Soins infirmiers" : "Garde malade";
  const sFirst = escapeHtml(firstName);
  const sLast = escapeHtml(lastName);
  const sPhone = escapeHtml(phone);
  const phoneDigits = phone.replace(/\D/g, "");

  sendNotification({
    subject: "Nouvelle demande de rappel — Maysanté",
    html: `
      <h2 style="margin:0 0 4px;font-size:18px;color:#0a0a0a">Nouvelle demande de rappel</h2>
      <p style="margin:0 0 20px;font-size:13px;color:#737373">Reçue le ${new Date().toLocaleString("fr-BE")}</p>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;width:110px">Prénom</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#0a0a0a">${sFirst}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px">Nom</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#0a0a0a">${sLast}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px">Téléphone</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${sPhone}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px">Type de soin</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${careLabel}</td></tr>
      </table>
      <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap">
        <a href="${adminUrl}" style="display:inline-block;padding:10px 20px;background:#0a0a0a;color:#fff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">Voir la demande →</a>
        <a href="tel:${encodeURIComponent(sPhone)}" style="display:inline-block;padding:10px 20px;background:#f3f3f3;color:#0a0a0a;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">📞 Appeler</a>
        <a href="https://wa.me/${phoneDigits}" style="display:inline-block;padding:10px 20px;background:#25D366;color:#fff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">💬 WhatsApp</a>
      </div>
    `,
  }).catch((err) => console.error("[etre-appele] Email error:", err));

  return NextResponse.json({ ok: true });
}
