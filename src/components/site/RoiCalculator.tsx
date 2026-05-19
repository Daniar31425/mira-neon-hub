import { useMemo, useState } from "react";
import { TrendingUp, Zap, DollarSign } from "lucide-react";
import { useApp } from "@/lib/app-context";

type Currency = "USD" | "RUB" | "KZT";

const CURRENCY_META: Record<Currency, { symbol: string; rate: number; locale: string }> = {
  USD: { symbol: "$", rate: 1, locale: "en-US" },
  RUB: { symbol: "₽", rate: 90, locale: "ru-RU" },
  KZT: { symbol: "₸", rate: 450, locale: "ru-KZ" },
};

const T = {
  en: {
    badge: "// roi calculator",
    title: "Calculate your unfair advantage.",
    desc: "Drag the sliders. Watch how Mira's neon prompts turn budget into measurable profit.",
    traffic: "Current Monthly Traffic",
    budget: "Ad Budget",
    visitors: "visitors",
    currency: "Currency",
    perfLabel: "Performance Boost",
    perfSub: "vs. your current baseline funnel",
    moneyLabel: "Money Saved",
    moneySub: "projected monthly uplift with Mira",
    perMonth: "/ month",
    footnote: "* Demo projection based on aggregated Mira user data. Your numbers may vary.",
  },
  ru: {
    badge: "// калькулятор окупаемости",
    title: "Посчитай свое нечестное преимущество.",
    desc: "Двигай слайдеры. Смотри, как нейро-промпты Mira превращают бюджет в измеримую прибыль.",
    traffic: "Текущий трафик в месяц",
    budget: "Рекламный бюджет (в месяц)",
    visitors: "посетителей",
    currency: "Валюта",
    perfLabel: "Прирост эффективности",
    perfSub: "по сравнению с базовой воронкой",
    moneyLabel: "Экономия средств",
    moneySub: "прогноз ежемесячного прироста с Mira",
    perMonth: "/ месяц",
    footnote: "* Демо-прогноз на основе агрегированных данных пользователей Mira. Ваши цифры могут отличаться.",
  },
};

function formatNumber(n: number, locale: string) {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function RoiCalculator() {
  const { lang } = useApp();
  const t = T[lang];

  const [traffic, setTraffic] = useState(50_000);
  const [budgetUsd, setBudgetUsd] = useState(2_000);
  const [currency, setCurrency] = useState<Currency>("USD");

  const meta = CURRENCY_META[currency];

  // Динамика: при росте трафика буст немного снижается; при росте бюджета — растёт
  const conversionLiftPct = useMemo(() => {
    const base = 28;
    const trafficFactor = Math.min(18, Math.log10(traffic) * 4);
    const budgetFactor = Math.min(20, Math.log10(budgetUsd) * 3.5);
    return Math.round(base + trafficFactor + budgetFactor);
  }, [traffic, budgetUsd]);

  const extraProfitUsd = useMemo(() => {
    // Грубая модель: посетители * базовая AOV * lift% - доля бюджета
    const baselineRevenue = traffic * 0.02 * 35; // 2% conv, $35 AOV
    const uplift = baselineRevenue * (conversionLiftPct / 100);
    const efficiencySaving = budgetUsd * 0.18; // экономия рекламного бюджета
    return uplift + efficiencySaving;
  }, [traffic, budgetUsd, conversionLiftPct]);

  const displayBudget = budgetUsd * meta.rate;
  const displayProfit = extraProfitUsd * meta.rate;
  const budgetMaxDisplay = 50_000 * meta.rate;
  const budgetMinDisplay = 100 * meta.rate;

  return (
    <section id="calculator" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">{t.badge}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.title}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">{t.desc}</p>
        </div>

        <div className="relative grid gap-6 rounded-2xl border border-border bg-card/60 p-6 md:p-10 lg:grid-cols-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 right-0 h-60 w-60 rounded-full opacity-40 blur-3xl"
            style={{ background: "color-mix(in oklab, var(--neon) 50%, transparent)" }}
          />

          {/* CONTROLS */}
          <div className="relative space-y-8">
            {/* Currency toggle */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-accent">
                  {t.currency}
                </span>
              </div>
              <div className="inline-flex rounded-md border border-border bg-background p-1 font-mono text-xs">
                {(Object.keys(CURRENCY_META) as Currency[]).map((c) => {
                  const active = currency === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`rounded px-3 py-1.5 transition-all ${
                        active
                          ? "bg-neon/15 text-neon shadow-[0_0_15px_color-mix(in_oklab,var(--neon)_50%,transparent)]"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {CURRENCY_META[c].symbol} {c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Traffic slider */}
            <NeonSlider
              label={t.traffic}
              valueLabel={`${formatNumber(traffic, meta.locale)} ${t.visitors}`}
              min={1000}
              max={500_000}
              step={1000}
              value={traffic}
              onChange={setTraffic}
            />

            {/* Budget slider — slider works in USD, display converted */}
            <NeonSlider
              label={t.budget}
              valueLabel={`${meta.symbol}${formatNumber(displayBudget, meta.locale)}`}
              min={100}
              max={50_000}
              step={100}
              value={budgetUsd}
              onChange={setBudgetUsd}
              minLabel={`${meta.symbol}${formatNumber(budgetMinDisplay, meta.locale)}`}
              maxLabel={`${meta.symbol}${formatNumber(budgetMaxDisplay, meta.locale)}`}
            />
          </div>

          {/* RESULTS */}
          <div className="relative grid gap-4 content-start">
            <ResultCard
              icon={<TrendingUp className="h-4 w-4" />}
              label={t.perfLabel}
              sub={t.perfSub}
              value={`+${conversionLiftPct}%`}
              glow="cyan"
            />
            <ResultCard
              icon={<DollarSign className="h-4 w-4" />}
              label={t.moneyLabel}
              sub={t.moneySub}
              value={`${meta.symbol}${formatNumber(displayProfit, meta.locale)}`}
              suffix={t.perMonth}
              glow="green"
            />
            <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
              <Zap className="h-3 w-3 text-neon" />
              <span>{t.footnote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeonSlider({
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (n: number) => void;
  minLabel?: string;
  maxLabel?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-wider text-slate-accent">{label}</span>
        <span className="font-mono text-sm text-neon text-glow">{valueLabel}</span>
      </div>
      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, color-mix(in oklab, var(--neon) 40%, transparent), var(--neon))",
            boxShadow: "0 0 12px color-mix(in oklab, var(--neon) 70%, transparent)",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="neon-range relative w-full"
        />
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>{minLabel ?? min.toLocaleString()}</span>
        <span>{maxLabel ?? max.toLocaleString()}</span>
      </div>
    </div>
  );
}

function ResultCard({
  icon,
  label,
  sub,
  value,
  suffix,
  glow,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  value: string;
  suffix?: string;
  glow: "cyan" | "green";
}) {
  const glowColor = glow === "green" ? "rgba(74,222,128,0.55)" : "rgba(56,189,248,0.55)";
  const textColor = glow === "green" ? "text-emerald-300" : "text-neon";
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background/60 p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(120px 60px at 90% 0%, ${glowColor}, transparent 70%)`,
        }}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-accent">
          <span className="grid h-6 w-6 place-items-center rounded-md border border-border bg-card text-neon">
            {icon}
          </span>
          {label}
        </div>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span
          className={`flicker font-mono text-4xl font-bold tracking-tight md:text-5xl ${textColor}`}
          style={{
            textShadow: `0 0 18px ${glowColor}, 0 0 40px ${glowColor}`,
            filter: `drop-shadow(0 0 12px ${glowColor}) drop-shadow(0 0 28px ${glowColor})`,
          }}
        >
          {value}
        </span>
        {suffix && (
          <span className="font-mono text-xs text-muted-foreground">{suffix}</span>
        )}
      </div>
      <p className="mt-2 font-mono text-[11px] text-muted-foreground">{sub}</p>
    </div>
  );
}
