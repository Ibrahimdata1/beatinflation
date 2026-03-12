"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

const linkKeys = [
  { href: "#inflation", key: "nav.inflation" as const },
  { href: "#assets", key: "nav.assets" as const },
  { href: "#salary", key: "nav.salary" as const },
  { href: "#portfolio", key: "nav.portfolio" as const },
  { href: "#careers", key: "nav.careers" as const },
  { href: "#ai-risk", key: "nav.aiRisk" as const },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-accent font-mono">&gt;_</span>
          <span className="gradient-text">BeatInflation</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {linkKeys.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {t(l.key, lang)}
            </a>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-muted hover:text-foreground hover:border-accent/30 transition-colors"
          >
            <Globe size={14} />
            {lang === "th" ? "EN" : "TH"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-2 py-1 rounded-full border border-border text-xs text-muted hover:text-foreground"
          >
            <Globe size={12} />
            {lang === "th" ? "EN" : "TH"}
          </button>
          <button
            className="text-muted hover:text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {linkKeys.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {t(l.key, lang)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
