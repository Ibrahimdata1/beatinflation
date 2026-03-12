"use client";

import { useState } from "react";
import { salaryData } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

const regions = [
  { key: "northAmerica" as const, label: "North America" },
  { key: "europe" as const, label: "Europe" },
  { key: "asia" as const, label: "Asia" },
  { key: "middleEast" as const, label: "Middle East" },
  { key: "latinAmerica" as const, label: "Latin America" },
];

const fmt = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;

export default function SalaryTable() {
  const [sort, setSort] = useState<"salary" | "growth" | "risk">("salary");
  const { lang } = useLang();

  const sorted = [...salaryData].sort((a, b) => {
    if (sort === "salary") return b.northAmerica - a.northAmerica;
    if (sort === "growth") return b.salaryGrowthRate - a.salaryGrowthRate;
    const riskOrder = { high: 3, medium: 2, low: 1 };
    return riskOrder[b.aiRisk] - riskOrder[a.aiRisk];
  });

  return (
    <div className="card overflow-x-auto">
      <div className="p-4 md:p-6 border-b border-border">
        <h3 className="text-lg font-semibold">
          {t("salaryTable.title", lang)}
        </h3>
        <p className="text-muted text-sm mt-1">
          {t("salaryTable.description", lang)}
        </p>
        <div className="flex gap-2 mt-3">
          {(
            [
              ["salary", t("salaryTable.sort.salary", lang)],
              ["growth", t("salaryTable.sort.growth", lang)],
              ["risk", t("salaryTable.sort.risk", lang)],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSort(key as "salary" | "growth" | "risk")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                sort === key
                  ? "btn-gradient text-background"
                  : "bg-surface-light text-muted hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>{t("salaryTable.header.profession", lang)}</th>
            {regions.map((r) => (
              <th key={r.key} className="hidden lg:table-cell">
                {r.label}
              </th>
            ))}
            <th className="lg:hidden">{t("salaryTable.header.northAmericaShort", lang)}</th>
            <th>{t("salaryTable.header.growthPerYear", lang)}</th>
            <th>{t("salaryTable.header.vsInflation", lang)}</th>
            <th>{t("salaryTable.header.aiRisk", lang)}</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.profession}>
              <td className="font-medium">
                <div>{lang === "th" ? s.professionTh : s.profession}</div>
                {lang === "th" && (
                  <div className="text-xs text-muted">{s.profession}</div>
                )}
              </td>
              {regions.map((r) => (
                <td
                  key={r.key}
                  className={`hidden lg:table-cell font-mono text-sm ${
                    r.key === "northAmerica" ? "" : "text-muted"
                  }`}
                >
                  {fmt(s[r.key])}
                </td>
              ))}
              <td className="lg:hidden font-mono text-sm">
                {fmt(s.northAmerica)}
              </td>
              <td
                className={`font-mono font-bold ${
                  s.salaryGrowthRate >= 6.2 ? "text-green" : "text-red"
                }`}
              >
                {s.salaryGrowthRate}%
              </td>
              <td>
                {s.beatsInflation ? (
                  <span className="text-green text-xs font-semibold">
                    {t("salaryTable.beats", lang)}
                  </span>
                ) : (
                  <span className="text-red text-xs font-semibold">
                    {t("salaryTable.loses", lang)} ({(s.salaryGrowthRate - 6.2).toFixed(1)}%)
                  </span>
                )}
              </td>
              <td>
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                    s.aiRisk === "high"
                      ? "bg-red/10 text-red border border-red/20"
                      : s.aiRisk === "medium"
                      ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      : "bg-green/10 text-green border border-green/20"
                  }`}
                >
                  {s.aiRisk === "high"
                    ? t("salaryTable.aiRisk.high", lang)
                    : s.aiRisk === "medium"
                    ? t("salaryTable.aiRisk.medium", lang)
                    : t("salaryTable.aiRisk.low", lang)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
