import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import pool from "@/lib/db";
import { sendNotification } from "@/lib/mailer";
import { escapeHtml } from "@/lib/sanitize";
import { rateLimit, getIp } from "@/lib/ratelimit";

const schema = z.object({
  nom: z.string().trim().min(1).max(100),
  email: z.string().email().max(150),
  telephone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
});

if (!process.env.ADMIN_URL_PREFIX) throw new Error("ADMIN_URL_PREFIX manquant");

export async function POST(req: NextRequest) {
  if (!rateLimit(`contact:${getIp(req)}`, 5, 10 * 60 * 1000))
    return NextResponse.json({ error: "Trop de demandes. Réessayez dans 10 minutes." }, { status: 429 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Corps invalide." }, { status: 400 });

  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });

  const { nom, email, telephone, message } = parsed.data;
  const tel = telephone || null;

  let id: number;
  try {
    const [result] = await pool.query(
      "INSERT INTO contacts (nom, email, telephone, message) VALUES (?, ?, ?, ?)",
      [nom, email, tel, message]
    );
    id = (result as { insertId: number }).insertId;
  } catch (err) {
    console.error("[contact] DB error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }

  const adminUrl = `${process.env.ADMIN_URL_PREFIX}/demandes/contact/${id}`;
  const sNom = escapeHtml(nom);
  const sEmail = escapeHtml(email);
  const sTel = tel ? escapeHtml(tel) : null;
  const sMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  const telDigits = tel ? tel.replace(/\D/g, "") : null;

  sendNotification({
    subject: "Nouvelle demande de contact — Maysanté",
    html: `
      <h2 style="margin:0 0 4px;font-size:18px;color:#0a0a0a">Nouvelle demande de contact</h2>
      <p style="margin:0 0 20px;font-size:13px;color:#737373">Reçue le ${new Date().toLocaleString("fr-BE")}</p>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;width:110px;vertical-align:top">Nom</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#0a0a0a">${sNom}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;vertical-align:top">Email</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${sEmail}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;vertical-align:top">Téléphone</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${sTel ?? "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;vertical-align:top">Message</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${sMessage}</td></tr>
      </table>
      <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap">
        <a href="${adminUrl}" style="display:inline-block;padding:10px 20px;background:#0a0a0a;color:#fff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">Voir la demande →</a>
        ${sTel ? `
        <a href="tel:${encodeURIComponent(sTel)}" style="display:inline-block;padding:10px 20px;background:#f3f3f3;color:#0a0a0a;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">📞 Appeler</a>
        <a href="https://wa.me/${telDigits}" style="display:inline-block;padding:10px 20px;background:#25D366;color:#fff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">💬 WhatsApp</a>
        ` : ""}
      </div>
    `,
  }).catch((err) => console.error("[contact] Email error:", err));

  return NextResponse.json({ ok: true });
}
