"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+32456872138";
const PHONE_DISPLAY = "+32 456 87 21 38";
const WHATSAPP = "32456872138";

const StickyCallButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex gap-2">
        <a
          href={`tel:${PHONE}`}
          aria-label={`Appeler Maysanté au ${PHONE_DISPLAY}`}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter Maysanté sur WhatsApp"
          className="flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-lg active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default StickyCallButton;
