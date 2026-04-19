"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Nos services", to: "/nos-services" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-5 pt-3">
        <div className="flex items-center justify-between h-12 px-4 rounded-full bg-background/80 backdrop-blur-xl border border-border/50 shadow-sm">
          <Link href="/" className="shrink-0">
            <img src={logo.src} alt="Maysanté" className="h-7 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.to}
                className={`text-[13px] px-3 py-1.5 rounded-full transition-all ${
                  pathname === l.to
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+32456872138"
              className="flex items-center gap-1.5 text-[13px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors px-4 py-1.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              +32 456 87 21 38
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-lg overflow-hidden">
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm py-2.5 px-3 rounded-xl transition-all ${
                    pathname === l.to
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+32456872138"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors px-4 py-2.5 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                +32 456 87 21 38
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
