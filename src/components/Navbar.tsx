"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLang, LANGUAGES } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

const linkKeys = [
  { href: "#inflation", key: "nav.inflation" as const },
  { href: "#assets", key: "nav.assets" as const },
  { href: "#salary", key: "nav.salary" as const },
  { href: "#portfolio", key: "nav.portfolio" as const },
  { href: "#careers", key: "nav.careers" as const },
  { href: "#ai-risk", key: "nav.aiRisk" as const },
];

function LangDropdown() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-muted hover:text-foreground hover:border-accent/30 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <Globe size={14} />
        <span className="hidden sm:inline">{current?.label ?? "English"}</span>
        <span className="sm:hidden">{lang.toUpperCase()}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          {/* Mobile: bottom sheet style overlay */}
          <div className="sm:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
          <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border rounded-t-2xl py-4 px-2 max-h-[70vh] overflow-y-auto animate-slide-up">
            <div className="w-10 h-1 rounded-full bg-border mx-auto mb-4" />
            <div className="grid grid-cols-2 gap-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                    l.code === lang
                      ? "bg-accent/15 text-accent font-semibold border border-accent/30"
                      : "text-foreground hover:bg-surface-light active:bg-surface-light"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop/tablet: dropdown */}
          <div className="hidden sm:block absolute right-0 top-full mt-1 z-50 min-w-[160px] rounded-xl border border-border bg-surface shadow-2xl py-1.5 max-h-80 overflow-y-auto">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  l.code === lang
                    ? "text-accent font-semibold bg-accent/10"
                    : "text-muted hover:text-foreground hover:bg-surface-light"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

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
          <LangDropdown />
        </div>

        {/* Mobile/Tablet */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangDropdown />
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
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-1">
          {linkKeys.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-3 py-2.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface-light transition-colors"
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
