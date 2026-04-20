import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { sendNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nom, telephone, email, message } = body;

  if (!nom || !email || !message)
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });

  const [result] = await pool.query(
    "INSERT INTO contacts (nom, email, telephone, message) VALUES (?, ?, ?, ?)",
    [nom, email, telephone ?? null, message]
  );
  const id = (result as { insertId: number }).insertId;
  const adminUrl = `${process.env.ADMIN_URL_PREFIX}/demandes/contact/${id}`;

  await sendNotification({
    subject: "Nouvelle demande de contact — Maysanté",
    html: `
      <h2 style="margin:0 0 4px;font-size:18px;color:#0a0a0a">Nouvelle demande de contact</h2>
      <p style="margin:0 0 20px;font-size:13px;color:#737373">Reçue le ${new Date().toLocaleString("fr-BE")}</p>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;width:110px;vertical-align:top">Nom</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#0a0a0a">${nom}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;vertical-align:top">Email</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${email}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;vertical-align:top">Téléphone</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${telephone ?? "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#737373;font-size:13px;vertical-align:top">Message</td><td style="padding:8px 0;font-size:13px;color:#0a0a0a">${message.replace(/\n/g, "<br/>")}</td></tr>
      </table>
      <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap">
        <a href="${adminUrl}" style="display:inline-block;padding:10px 20px;background:#0a0a0a;color:#fff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">Voir la demande →</a>
        ${telephone ? `
        <a href="tel:${telephone}" style="display:inline-block;padding:10px 20px;background:#f3f3f3;color:#0a0a0a;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">📞 Appeler</a>
        <a href="https://wa.me/${telephone.replace(/\D/g, "")}" style="display:inline-block;padding:10px 20px;background:#25D366;color:#fff;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600">💬 WhatsApp</a>
        ` : ""}
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
