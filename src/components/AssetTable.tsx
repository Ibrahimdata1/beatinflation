"use client";

import { assetComparisons } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function AssetTable() {
  const { lang } = useLang();

  return (
    <div className="card overflow-x-auto">
      <div className="p-4 md:p-6 border-b border-border">
        <h3 className="text-lg font-semibold">
          {t("assetTable.title", lang)}
        </h3>
        <p className="text-muted text-sm mt-1">
          {t("assetTable.description", lang)}
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>{t("assetTable.header.asset", lang)}</th>
            <th className="hidden md:table-cell">{t("assetTable.header.annualReturn", lang)}</th>
            <th className="hidden md:table-cell">{t("assetTable.header.realInflation", lang)}</th>
            <th>{t("assetTable.header.realReturn", lang)}</th>
            <th className="hidden sm:table-cell">{t("assetTable.header.volatility", lang)}</th>
            <th>{t("assetTable.header.result", lang)}</th>
          </tr>
        </thead>
        <tbody>
          {assetComparisons.map((a) => (
            <tr key={a.nameEn}>
              <td className="font-medium">
                <span className="inline-block w-6 text-center mr-2">{a.icon}</span>
                <span className="hidden sm:inline">{lang === "th" ? a.name : a.nameEn}</span>
                <span className="sm:hidden">{a.nameEn}</span>
              </td>
              <td className="hidden md:table-cell font-mono text-green">
                +{a.annualReturn}%
              </td>
              <td className="hidden md:table-cell font-mono text-red">
                -{a.austrianInflation}%
              </td>
              <td
                className={`font-mono font-bold ${
                  a.realReturn >= 0 ? "text-green" : "text-red"
                }`}
              >
                {a.realReturn >= 0 ? "+" : ""}
                {a.realReturn}%
              </td>
              <td className="hidden sm:table-cell font-mono text-muted">
                {a.volatility}%
              </td>
              <td>
                {a.beatsInflation ? (
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-green/10 text-green border border-green/20">
                    {t("assetTable.beats", lang)}
                  </span>
                ) : (
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-red/10 text-red border border-red/20">
                    {t("assetTable.loses", lang)}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 space-y-2">
        {assetComparisons.map((a) => (
          <div key={a.nameEn + "-verdict"} className="flex gap-2 text-sm">
            <span className="inline-block w-6 text-center shrink-0">{a.icon}</span>
            <span className="text-muted">{lang === "th" ? a.verdict : a.verdictEn}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
