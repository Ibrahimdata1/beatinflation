"use client";

import Navbar from "@/components/Navbar";
import {
  MoneySupplyChart,
  PurchasingPowerChart,
  AssetVsInflationChart,
} from "@/components/InflationChart";
import AssetTable from "@/components/AssetTable";
import SalaryTable from "@/components/SalaryTable";
import PortfolioSection from "@/components/PortfolioSection";
import CareerSection from "@/components/CareerSection";
import AIRiskSection from "@/components/AIRiskSection";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-medium mb-6">
            {t("hero.badge", lang)}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">{t("hero.title.inflation", lang)}</span>
            {t("hero.title.making", lang)}
            <br />
            {t("hero.title.you", lang)}
            <span className="gradient-text">{t("hero.title.poorer", lang)}</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("hero.description", lang)}
            <br />
            <span className="text-foreground font-medium">
              {t("hero.description.highlight", lang)}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#inflation"
              className="btn-gradient px-6 py-3 rounded-lg text-background font-semibold text-sm"
            >
              {t("hero.cta.data", lang)}
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-accent/30 transition-colors"
            >
              {t("hero.cta.portfolio", lang)}
            </a>
          </div>
        </div>

        {/* Quick stats */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            {
              label: t("stats.m2.label", lang),
              value: t("stats.m2.value", lang),
              sub: t("stats.m2.sub", lang),
              color: "text-accent",
            },
            {
              label: t("stats.cpi.label", lang),
              value: t("stats.cpi.value", lang),
              sub: t("stats.cpi.sub", lang),
              color: "text-muted",
            },
            {
              label: t("stats.purchasing.label", lang),
              value: t("stats.purchasing.value", lang),
              sub: t("stats.purchasing.sub", lang),
              color: "text-red",
            },
            {
              label: t("stats.salary.label", lang),
              value: t("stats.salary.value", lang),
              sub: t("stats.salary.sub", lang),
              color: "text-red",
            },
          ].map((s) => (
            <div key={s.label} className="card p-4 text-center">
              <div className="text-muted text-xs mb-1">{s.label}</div>
              <div className={`text-2xl md:text-3xl font-bold font-mono ${s.color}`}>
                {s.value}
              </div>
              <div className="text-muted text-xs mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Section: Real Inflation */}
      <section id="inflation" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">{t("inflation.title.real", lang)}</span>{" "}
            {t("inflation.title.vs", lang)}
          </h2>
          <p className="text-muted max-w-3xl">
            {t("inflation.description", lang)}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <MoneySupplyChart />
          <PurchasingPowerChart />
        </div>

        <div className="mt-8 card p-5">
          <h3 className="font-semibold mb-3 text-accent">
            {t("inflation.why.title", lang)}
          </h3>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-muted">
            <div className="flex gap-2">
              <span className="text-accent shrink-0">1.</span>
              <span>
                <strong className="text-foreground">{t("inflation.why.hedonic.title", lang)}</strong>{" "}
                &mdash; {t("inflation.why.hedonic.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">2.</span>
              <span>
                <strong className="text-foreground">{t("inflation.why.substitution.title", lang)}</strong>{" "}
                &mdash; {t("inflation.why.substitution.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">3.</span>
              <span>
                <strong className="text-foreground">{t("inflation.why.geometric.title", lang)}</strong>{" "}
                &mdash; {t("inflation.why.geometric.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">4.</span>
              <span>
                <strong className="text-foreground">{t("inflation.why.assets.title", lang)}</strong>{" "}
                &mdash; {t("inflation.why.assets.desc", lang)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Section: Asset Comparison */}
      <section id="assets" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">{t("assets.title.assets", lang)}</span>
            {t("assets.title.suffix", lang)}
          </h2>
          <p className="text-muted max-w-3xl">
            {t("assets.description", lang)}
          </p>
        </div>

        <AssetVsInflationChart />
        <div className="mt-6">
          <AssetTable />
        </div>
      </section>

      <div className="section-divider" />

      {/* Section: Salary */}
      <section id="salary" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">{t("salary.title.salary", lang)}</span>
            {t("salary.title.suffix", lang)}
          </h2>
          <p className="text-muted max-w-3xl">
            {t("salary.description", lang)}
          </p>
        </div>
        <SalaryTable />
      </section>

      <div className="section-divider" />

      {/* Section: Portfolio */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">{t("portfolio.title.portfolio", lang)}</span>
            {t("portfolio.title.suffix", lang)}
          </h2>
          <p className="text-muted max-w-3xl">
            {t("portfolio.description", lang)}
          </p>
        </div>
        <PortfolioSection />

        <div className="mt-8 card p-5">
          <h3 className="font-semibold mb-3 text-accent">
            {t("portfolio.principles.title", lang)}
          </h3>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-muted">
            <div className="flex gap-2">
              <span className="text-accent shrink-0">&#9654;</span>
              <span>
                <strong className="text-foreground">{t("portfolio.principles.gold.title", lang)}</strong>{" "}
                &mdash; {t("portfolio.principles.gold.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">&#9654;</span>
              <span>
                <strong className="text-foreground">{t("portfolio.principles.btc.title", lang)}</strong>{" "}
                &mdash; {t("portfolio.principles.btc.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">&#9654;</span>
              <span>
                <strong className="text-foreground">{t("portfolio.principles.stocks.title", lang)}</strong>{" "}
                &mdash; {t("portfolio.principles.stocks.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent shrink-0">&#9654;</span>
              <span>
                <strong className="text-foreground">{t("portfolio.principles.cash.title", lang)}</strong>{" "}
                &mdash; {t("portfolio.principles.cash.desc", lang)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Section: Careers */}
      <section id="careers" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t("careers.title.prefix", lang)}
            <span className="gradient-text">{t("careers.title.career", lang)}</span>
            {t("careers.title.suffix", lang)}
          </h2>
          <p className="text-muted max-w-3xl">
            {t("careers.description", lang)}
          </p>
        </div>
        <CareerSection />
      </section>

      <div className="section-divider" />

      {/* Section: AI Risk */}
      <section id="ai-risk" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">{t("aiRisk.title.ai", lang)}</span>
            {t("aiRisk.title.suffix", lang)}
          </h2>
          <p className="text-muted max-w-3xl">
            {t("aiRisk.description", lang)}
          </p>
        </div>
        <AIRiskSection />

        <div className="mt-8 card p-5">
          <h3 className="font-semibold mb-3 text-accent">
            {t("aiRisk.strategy.title", lang)}
          </h3>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-muted">
            <div className="flex gap-2">
              <span className="text-green shrink-0 font-bold">1.</span>
              <span>
                <strong className="text-foreground">{t("aiRisk.strategy.1.title", lang)}</strong>{" "}
                &mdash; {t("aiRisk.strategy.1.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-green shrink-0 font-bold">2.</span>
              <span>
                <strong className="text-foreground">{t("aiRisk.strategy.2.title", lang)}</strong>{" "}
                &mdash; {t("aiRisk.strategy.2.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-green shrink-0 font-bold">3.</span>
              <span>
                <strong className="text-foreground">{t("aiRisk.strategy.3.title", lang)}</strong>{" "}
                &mdash; {t("aiRisk.strategy.3.desc", lang)}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-green shrink-0 font-bold">4.</span>
              <span>
                <strong className="text-foreground">{t("aiRisk.strategy.4.title", lang)}</strong>{" "}
                &mdash; {t("aiRisk.strategy.4.desc", lang)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="gradient-text text-xl font-bold mb-3">
          {t("footer.headline", lang)}
        </p>
        <p className="text-muted text-sm max-w-lg mx-auto mb-6">
          {t("footer.disclaimer", lang)}
        </p>
        <p className="text-muted/50 text-xs">
          {t("footer.copyright", lang)}
        </p>
      </footer>
    </>
  );
}
