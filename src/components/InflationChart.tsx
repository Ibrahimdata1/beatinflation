"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import { moneySupplyData, purchasingPowerData } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export function MoneySupplyChart() {
  const { lang } = useLang();

  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        {t("chart.m2.title", lang)}
      </h3>
      <p className="text-muted text-sm mb-4">
        {t("chart.m2.description", lang)}
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={moneySupplyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => `${v}%`} />
          <Tooltip
            contentStyle={{
              background: "#141414",
              border: "1px solid #2a2a2a",
              borderRadius: 8,
              color: "#ededed",
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any, name: any) => [
              `${value}%`,
              name === "m2"
                ? t("chart.m2.tooltipM2", lang)
                : t("chart.m2.tooltipCpi", lang),
            ]}
          />
          <Legend
            formatter={(value) =>
              value === "m2"
                ? t("chart.m2.legendM2", lang)
                : t("chart.m2.legendCpi", lang)
            }
          />
          <Bar dataKey="m2" fill="#C87941" radius={[4, 4, 0, 0]} />
          <Bar dataKey="cpi" fill="#888888" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PurchasingPowerChart() {
  const { lang } = useLang();

  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        {t("chart.purchasing.title", lang)}
      </h3>
      <p className="text-muted text-sm mb-4">
        {t("chart.purchasing.description", lang)}
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={purchasingPowerData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => `$${v}`} domain={[0, 110]} />
          <Tooltip
            contentStyle={{
              background: "#141414",
              border: "1px solid #2a2a2a",
              borderRadius: 8,
              color: "#ededed",
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any, name: any) => [
              `$${value}`,
              name === "austrian"
                ? t("chart.purchasing.tooltipAustrian", lang)
                : t("chart.purchasing.tooltipCpi", lang),
            ]}
          />
          <Legend
            formatter={(value) =>
              value === "austrian"
                ? t("chart.purchasing.legendAustrian", lang)
                : t("chart.purchasing.legendCpi", lang)
            }
          />
          <Area
            type="monotone"
            dataKey="govCpi"
            stroke="#888888"
            fill="#888888"
            fillOpacity={0.15}
          />
          <Area
            type="monotone"
            dataKey="austrian"
            stroke="#C87941"
            fill="#C87941"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// ===== Main chart: Wave (Area) CAGR comparison =====
export function AssetVsInflationChart() {
  const { lang } = useLang();
  const INFLATION = 6.2;

  const assets = [
    { key: "btc", label: "Bitcoin", labelTh: "Bitcoin", cagr: 100.0, color: "#f7931a" },
    { key: "eth", label: "Ethereum", labelTh: "Ethereum", cagr: 85.0, color: "#627eea" },
    { key: "xmr", label: "XMR", labelTh: "XMR", cagr: 50.0, color: "#ff6600" },
    { key: "gold", label: "Gold", labelTh: "ทองคำ", cagr: 10.9, color: "#E8B878" },
    { key: "sp500", label: "S&P 500", labelTh: "S&P 500", cagr: 7.9, color: "#4ade80" },
    { key: "silver", label: "Silver", labelTh: "เงิน", cagr: 7.2, color: "#c0c0c0" },
    { key: "realEstate", label: "Real Estate", labelTh: "อสังหาฯ", cagr: 4.7, color: "#60a5fa" },
    { key: "bonds", label: "Bonds", labelTh: "พันธบัตร", cagr: 3.7, color: "#a78bfa" },
    { key: "savings", label: "Savings", labelTh: "เงินฝาก", cagr: 0.4, color: "#94a3b8" },
    { key: "cash", label: "Cash", labelTh: "เงินสด", cagr: 0, color: "#cbd5e1" },
  ];

  const chartData = assets.map((a) => ({
    name: lang === "th" ? a.labelTh : a.label,
    cagr: a.cagr,
    color: a.color,
    beats: a.cagr > INFLATION,
  }));

  // Custom bar with bright gradient — always visible on dark bg
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomBar = (props: any) => {
    const { x, y, width, height, payload } = props;
    const beats = payload.cagr > INFLATION;
    const id = `grad-${payload.name.replace(/[^a-zA-Z0-9]/g, "")}`;
    return (
      <g>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={payload.color} stopOpacity={1} />
            <stop offset="100%" stopColor={payload.color} stopOpacity={beats ? 0.5 : 0.35} />
          </linearGradient>
        </defs>
        {/* Min height so tiny bars are still visible */}
        <rect
          x={x}
          y={payload.cagr < 1 ? y - 6 : y}
          width={width}
          height={payload.cagr < 1 ? Math.max(height, 6) : height}
          rx={5}
          ry={5}
          fill={`url(#${id})`}
          stroke={payload.color}
          strokeWidth={2}
          strokeOpacity={1}
        />
      </g>
    );
  };

  // Label with dark outline so it's readable over any background
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomLabel = (props: any) => {
    const { x, y, width, value, index } = props;
    const asset = chartData[index];
    const beats = asset.beats;
    const labelY = value < 1 ? y - 28 : y - 14;
    const labelText = `${value > 0 ? "+" : ""}${value}%`;
    const fillColor = beats ? "#4ade80" : "#f87171";
    return (
      <g>
        {/* Dark shadow/outline behind text */}
        <text
          x={x + width / 2}
          y={labelY}
          textAnchor="middle"
          fontSize={13}
          fontWeight="900"
          fontFamily="var(--font-geist-mono)"
          stroke="#0a0a0a"
          strokeWidth={4}
          paintOrder="stroke"
          fill={fillColor}
        >
          {labelText}
        </text>
      </g>
    );
  };

  return (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold mb-1">
        {lang === "th"
          ? "ผลตอบแทนเฉลี่ยต่อปี (CAGR) vs เงินเฟ้อจริง"
          : "Average Annual Return (CAGR) vs Real Inflation"}
      </h3>
      <p className="text-muted text-sm mb-2">
        {lang === "th"
          ? "สินทรัพย์ต้องโตเร็วกว่า 6.2%/ปี (เส้นประ) ถึงจะไม่เสียกำลังซื้อ"
          : "Assets must grow faster than 6.2%/yr (dashed line) to not lose purchasing power"}
      </p>

      <ResponsiveContainer width="100%" height={440}>
        <BarChart data={chartData} margin={{ top: 28, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#ccc" }}
            axisLine={false}
            tickLine={false}
            interval={0}
            angle={-30}
            textAnchor="end"
            height={55}
          />
          <YAxis
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11, fill: "#888" }}
            axisLine={false}
            tickLine={false}
            domain={[0, "auto"]}
          />
          <Tooltip
            cursor={{ fill: "rgba(200,121,65,0.06)" }}
            contentStyle={{
              background: "#141414",
              border: "1px solid #2a2a2a",
              borderRadius: 8,
              color: "#ededed",
            }}
            labelStyle={{ color: "#ededed" }}
            itemStyle={{ color: "#ededed" }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => [
              `${value}%/${lang === "th" ? "ปี" : "yr"}`,
              "CAGR",
            ]}
          />
          {/* Inflation reference line at 6.2% */}
          <ReferenceLine
            y={INFLATION}
            stroke="#C87941"
            strokeWidth={2.5}
            strokeDasharray="8 4"
            label={{
              value: `${lang === "th" ? "เงินเฟ้อ" : "Inflation"} ${INFLATION}%`,
              position: "right",
              fill: "#C87941",
              fontSize: 12,
              fontWeight: "bold",
            }}
          />
          {/* Asset bars */}
          <Bar
            dataKey="cagr"
            shape={<CustomBar />}
            label={<CustomLabel />}
            isAnimationActive={true}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-1 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <div className="w-5 border-t-2 border-dashed border-accent" />
          <span>{lang === "th" ? `เงินเฟ้อจริง (M2) ${INFLATION}%/ปี` : `Real Inflation (M2) ${INFLATION}%/yr`}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-green font-bold">+%</span>
          <span>{lang === "th" ? "= ชนะเงินเฟ้อ" : "= beats inflation"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-red font-bold">+%</span>
          <span>{lang === "th" ? "= แพ้เงินเฟ้อ" : "= loses to inflation"}</span>
        </div>
      </div>

      <p className="text-muted text-[10px] mt-3 italic">
        {lang === "th"
          ? "* Crypto CAGR จากปีเริ่มเทรด (BTC: 2011, XMR: 2014, ETH: 2016) อื่นๆ จาก 2000-2025"
          : "* Crypto CAGR from trading start (BTC: 2011, XMR: 2014, ETH: 2016). Others 2000-2025"}
      </p>
    </div>
  );
}
