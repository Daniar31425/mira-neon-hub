import { ArrowRight, Sparkles } from "lucide-react";
import { useApp, MIRA_REF_URL } from "@/lib/app-context";

export function Hero() {
  // Забираем текущий язык из глобального контекста
  const { lang } = useApp();

  // Полный словарь для Hero секции
  const heroTranslations = {
    en: {
      badge: "v0.4.2 — now with streaming diffs",
      titleFirst: "Pair-program with ",
      titleAccent: "Mira",
      titleMiddle: ", your terminal-native ",
      titleGradient: "AI engineer",
      titleLast: ".",
      description: "Mira lives inside your shell. Ship features, refactor legacy code, and debug production — without leaving the keyboard.",
      ctaCurl: "🎫 Promo: /promo MIRAGROWTH2026",
      ctaSee: "See it run →",
      featShell: "◆ Works with zsh · bash · fish",
      featContext: "◆ Local-first context",
      featCore: "◆ Open-source core"
    },
    ru: {
      badge: "v0.4.2 — теперь с потоковым выводом diff'ов",
      titleFirst: "Пиши код вместе с ",
      titleAccent: "Mira",
      titleMiddle: " — ИИ-инженером прямо в твоем ",
      titleGradient: "терминале",
      titleLast: ".",
      description: "Mira живет внутри твоей командной строки. Создавай фичи, рефактори старый код и дебажь продакшен, не отрывая рук от клавиатуры.",
      ctaCurl: "🎫 Промокод: /promo MIRAGROWTH2026",
      ctaSee: "Посмотреть в действии →",
      featShell: "◆ Работает с zsh · bash · fish",
      featContext: "◆ Локальный контекст проекта",
      featCore: "◆ Открытое ядро (Open-source)"
    }
  };

  const t = heroTranslations[lang];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        
        {/* Бадж с версией */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
          <Sparkles className="h-3 w-3 text-neon" />
          <span>{t.badge}</span>
        </div>

        {/* Главный заголовок H1 */}
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          {t.titleFirst}
          <span className="text-neon text-glow flicker">{t.titleAccent}</span>
          {t.titleMiddle}
          <br />
          <span className="bg-gradient-to-r from-neon to-foreground bg-clip-text text-transparent">
            {t.titleGradient}
          </span>
          {t.titleLast}
        </h1>

        {/* Подзаголовок / Описание */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {t.description}
        </p>

        {/* Кнопки призыва к действию */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {/* Главная реферальная кнопка */}
          <a
            href={MIRA_REF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-neon px-5 py-3 font-mono text-sm font-medium text-primary-foreground glow transition-transform hover:-translate-y-0.5"
            onClick={() => {
              navigator.clipboard.writeText("/promo MIRAGROWTH2026");
            }}
          >
            {t.ctaCurl}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 font-mono text-sm text-foreground hover:border-neon/60 hover:text-neon transition-colors"
          >
            {t.ctaSee}
          </a>
        </div>

        {/* Фичи в футере Hero */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground">
          <span>{t.featShell}</span>
          <span>{t.featContext}</span>
          <span>{t.featCore}</span>
        </div>
      </div>
    </section>
  );
}
