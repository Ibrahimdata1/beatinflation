"use client";

import { aiJobRisks } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function AIRiskSection() {
  const { lang } = useLang();

  return (
    <div className="space-y-3">
      {aiJobRisks.map((job) => (
        <div key={job.category} className="card p-4 md:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
            <div className="flex items-center gap-3 flex-1">
              <h4 className="font-semibold text-sm md:text-base">
                {lang === "th" ? job.category : job.categoryEn}
              </h4>
              <span
                className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  job.riskLevel === "high"
                    ? "bg-red/10 text-red border border-red/20"
                    : job.riskLevel === "medium"
                    ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    : "bg-green/10 text-green border border-green/20"
                }`}
              >
                {job.riskLevel === "high"
                  ? t("aiRisk.riskLevel.high", lang)
                  : job.riskLevel === "medium"
                  ? t("aiRisk.riskLevel.medium", lang)
                  : t("aiRisk.riskLevel.low", lang)}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted">{t("aiRisk.disappearsIn", lang)}</span>
              <span className="font-mono font-bold text-accent">
                {lang === "th" ? job.timeframe : job.timeframeEn}
              </span>
            </div>
          </div>

          {/* Risk bar */}
          <div className="w-full bg-surface-light rounded-full h-2 mb-3">
            <div
              className={`h-2 rounded-full transition-all ${
                job.riskLevel === "high"
                  ? "bg-red"
                  : job.riskLevel === "medium"
                  ? "bg-yellow-400"
                  : "bg-green"
              }`}
              style={{ width: `${job.riskScore}%` }}
            />
          </div>

          <div className="grid gap-2 text-sm">
            <div>
              <span className="text-muted">{t("aiRisk.relatedJobs", lang)} </span>
              <span>{lang === "th" ? job.jobs : job.jobsEn}</span>
            </div>
            <div>
              <span className="text-muted">{t("aiRisk.reason", lang)} </span>
              <span>{lang === "th" ? job.reason : job.reasonEn}</span>
            </div>
            <div className="p-2 rounded-lg bg-accent/5 border border-accent/20">
              <span className="text-accent font-semibold">{t("aiRisk.recommendation", lang)} </span>
              <span>{lang === "th" ? job.recommendation : job.recommendationEn}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
