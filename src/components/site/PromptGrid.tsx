import { Bug, FileCode2, GitPullRequest, Rocket, Shield, Sparkles, TestTube2, Wand2, Zap } from "lucide-react";
import { useState } from "react";
import { useApp, MIRA_REF_URL } from "@/lib/app-context";

const PROMPTS_TRANSLATIONS = {
  en: [
    { icon: Wand2, tag: "refactor", title: "Convert this REST endpoint to tRPC", body: "Keep validation, add zod schemas, and update callers automatically." },
    { icon: Bug, tag: "debug", title: "Find the memory leak in this worker", body: "Profile heap snapshots and surface retaining paths with fix suggestions." },
    { icon: TestTube2, tag: "test", title: "Generate Vitest suites for untested exports", body: "Include edge cases, mocks, and a coverage delta in the PR description." },
    { icon: GitPullRequest, tag: "review", title: "Review this PR like a senior engineer", body: "Flag risks, suggest renames, and write a clear merge summary." },
    { icon: Rocket, tag: "ship", title: "Draft a deploy plan for this feature flag", body: "Stage rollout, rollback triggers, and observability checkpoints." },
    { icon: Shield, tag: "secure", title: "Audit this repo for common OWASP issues", body: "Open one PR per finding with a minimal, reviewable patch." },
    { icon: FileCode2, tag: "docs", title: "Write a README from the codebase", body: "Infer install steps, scripts, and architecture diagrams in Mermaid." },
    { icon: Zap, tag: "perf", title: "Make this page render under 100ms", body: "Lighthouse-driven plan with concrete diffs for each bottleneck." },
    { icon: Sparkles, tag: "ux", title: "Polish empty + error states across the app", body: "Consistent copy, retry affordances, and design-token-correct visuals." },
  ],
  ru: [
    { icon: Wand2, tag: "refactor", title: "Перепиши этот эндпоинт Go на Clean Architecture", body: "Вынеси бизнес-логику в usecase, склеи интерфейсы и обнови DI-контейнер." },
    { icon: Bug, tag: "debug", title: "Найди утечку памяти в горутинах", body: "Проанализируй pprof трейсы, найди незакрытые каналы и предложи патч." },
    { icon: TestTube2, tag: "test", title: "Сгенерируй Go unit-тесты для функций", body: "Покрой граничные случаи, табличные тесты (table-driven) и сделай моки для БД." },
    { icon: GitPullRequest, tag: "review", title: "Проведи ревью пулл-реквеста как тимлид", body: "Подсвети архитектурные риски, найди race condition и напиши понятный summary." },
    { icon: Rocket, tag: "ship", title: "Напиши манифест для деплоя в Kubernetes", body: "Подготовь rolling-update стратегию, liveness/readiness пробы и лимиты ресурсов." },
    { icon: Shield, tag: "secure", title: "Проверь Dockerfile и код на уязвимости", body: "Найди CVE в базовых образах, жестко зашитые секреты и предложи безопасный фикс." },
    { icon: FileCode2, tag: "docs", title: "Напиши техническую документацию для API", body: "Сгенерируй Swagger/OpenAPI спецификацию и схемы архитектуры прямо из кодовой базы." },
    { icon: Zap, tag: "perf", title: "Оптимизируй SQL-запрос для PostgreSQL", body: "Разбери тяжелый EXPLAIN ANALYZE, предложи правильные индексы или реструктуризацию." },
    { icon: Sparkles, tag: "linux", title: "Автоматизируй бэкапы через bash-скрипт", body: "Напиши отказоустойчивый скрипт для ротации логов и отправки дампов в S3." },
  ]
};

export function PromptGrid() {
  const { lang } = useApp();
  const [copied, setCopied] = useState<number | null>(null);

  const uiTranslations = {
    en: {
      badge: "// prompt library",
      title: "Ready-to-run prompts.",
      desc: "Click any prompt to copy it and open Mira. Curated by engineers who actually use her in production.",
      info: "prompts · updated daily",
      action: "click to copy & run",
      copied: "✓ copied! opening Telegram..."
    },
    ru: {
      badge: "// библиотека промптов",
      title: "Готовые промпты к запуску.",
      desc: "Кликни на промпт, чтобы скопировать его и автоматически открыть в Mira. Проверено инженерами в продакшене.",
      info: "промптов · обновляется ежедневно",
      action: "копировать и запустить",
      copied: "✓ скопировано! открываем Telegram..."
    }
  };

  const ui = uiTranslations[lang];
  const currentPrompts = PROMPTS_TRANSLATIONS[lang];

  const handleCopyAndRedirect = (i: number, body: string, title: string) => {
    // Копируем промпт в буфер обмена
    navigator.clipboard.writeText(`${title}\n${body}`).catch(() => {});
    setCopied(i);
    
    // Перенаправляем пользователя по твоей реф-ссылке в Телеграм через 600мс
    setTimeout(() => {
      window.open(MIRA_REF_URL, '_blank');
    }, 600);

    setTimeout(() => setCopied((c) => (c === i ? null : c)), 2000);
  };

  return (
    <section id="prompts" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">
              {ui.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {ui.title}
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              {ui.desc}
            </p>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            {currentPrompts.length} {ui.info}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentPrompts.map((p, i) => {
            const Icon = p.icon;
            const isCopied = copied === i;
            return (
              <button
                key={i}
                onClick={() => handleCopyAndRedirect(i, p.body, p.title)}
                className="group relative flex flex-col items-start gap-3 overflow-hidden rounded-xl border border-border bg-card/60 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-neon/50 hover:bg-card w-full"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  style={{ background: "color-mix(in oklab, var(--neon) 50%, transparent)" }}
                />
                <div className="flex w-full items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-background text-neon">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-accent">
                    /{p.tag}
                  </span>
                </div>
                <h3 className="font-mono text-sm font-medium text-foreground">
                  &gt; {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
                <div className="mt-2 flex w-full items-center justify-between border-t border-border/60 pt-3 font-mono text-[11px] w-full">
                  <span className="text-muted-foreground">{ui.action}</span>
                  <span className={isCopied ? "text-neon" : "text-slate-accent"}>
                    {isCopied ? ui.copied : "⌘ + C"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
