"use client";

import { careerAdvice } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

const tierColors: Record<string, string> = {
  "Tier S": "text-green border-green/30 bg-green/5",
  "Tier A": "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  "Tier B": "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
  "Tier C": "text-orange-400 border-orange-400/30 bg-orange-400/5",
  "Tier D": "text-red border-red/30 bg-red/5",
};

export default function CareerSection() {
  const { lang } = useLang();

  return (
    <div className="space-y-4">
      {careerAdvice.map((tier) => {
        const tierKey = tier.tier.split(" - ")[0];
        const colorClass = tierColors[tierKey] || "text-muted border-border";

        return (
          <div key={tier.tier} className={`card p-5 border ${colorClass}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="font-bold text-base">
                {lang === "th" ? tier.tier : tier.tierEn}
              </h3>
              <span className="font-mono text-sm">
                {t("careers.avgGrowthLabel", lang)}{" "}
                <span
                  className={`font-bold ${
                    tier.avgSalaryGrowth >= 6.2 ? "text-green" : "text-red"
                  }`}
                >
                  {tier.avgSalaryGrowth > 0 ? "+" : ""}
                  {tier.avgSalaryGrowth}%{t("portfolio.perYear", lang)}
                </span>
                <span className="text-muted ml-1">
                  {t("careers.inflationRef", lang)}
                </span>
              </span>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 mb-3">
              {(lang === "th" ? tier.careers : tier.careersEn).map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-2 text-sm text-foreground/90"
                >
                  <span className="text-accent mt-0.5">&#9654;</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted italic">
              {lang === "th" ? tier.reason : tier.reasonEn}
            </p>
          </div>
        );
      })}
    </div>
  );
}
