"use client";

import { portfolios } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function PortfolioSection() {
  const { lang } = useLang();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {portfolios.map((p) => (
        <div key={p.name} className="card p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-base">
              {lang === "th" ? p.name : p.nameEn}
            </h3>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                p.riskLevel === "low"
                  ? "bg-green/10 text-green"
                  : p.riskLevel === "medium"
                  ? "bg-yellow-500/10 text-yellow-400"
                  : "bg-red/10 text-red"
              }`}
            >
              {p.riskLevel}
            </span>
          </div>
          <p className="text-muted text-sm mb-4">
            {lang === "th" ? p.description : p.descriptionEn}
          </p>

          {/* Visual bar */}
          <div className="flex rounded-lg overflow-hidden h-8 mb-4">
            {p.allocations.map((a) => (
              <div
                key={a.asset}
                style={{
                  width: `${a.pct}%`,
                  backgroundColor: a.color,
                }}
                className="flex items-center justify-center text-[10px] font-bold text-background"
                title={`${lang === "th" ? a.asset : a.assetEn} ${a.pct}%`}
              >
                {a.pct >= 15 ? `${a.pct}%` : ""}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="space-y-1.5 mb-4 flex-1">
            {p.allocations.map((a) => (
              <div key={a.asset} className="flex items-center gap-2 text-sm">
                <span
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{ backgroundColor: a.color }}
                />
                <span className="text-muted flex-1">
                  {lang === "th" ? a.asset : a.assetEn}
                </span>
                <span className="font-mono">{a.pct}%</span>
              </div>
            ))}
          </div>

          {/* Returns */}
          <div className="border-t border-border pt-3 mt-auto space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted">{t("portfolio.expectedReturn", lang)}</span>
              <span className="font-mono text-green">
                +{p.expectedReturn}%{t("portfolio.perYear", lang)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">{t("portfolio.realReturn", lang)}</span>
              <span
                className={`font-mono font-bold ${
                  p.expectedRealReturn >= 0 ? "text-green" : "text-red"
                }`}
              >
                {p.expectedRealReturn >= 0 ? "+" : ""}
                {p.expectedRealReturn}%{t("portfolio.perYear", lang)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
