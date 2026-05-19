import { useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "@/lib/app-context";

type Scene = {
  prompt: string;
  output: string[];
};

// Переносим SCENES в мультиязычный объект, чтобы кодеры видели родной контекст
const SCENES_TRANSLATIONS = {
  en: [
    {
      prompt: "mira refactor ./api/users.ts --to hono",
      output: [
        "↳ analyzing 3 files · 247 LOC",
        "↳ rewriting handlers → hono router",
        "↳ inferring zod schemas from existing types",
        "✓ patched api/users.ts",
        "✓ patched api/index.ts",
        "✓ added tests/users.spec.ts",
        "─ 0 errors · 0 warnings · 1.4s",
      ],
    },
    {
      prompt: "mira explain 'why is /checkout 500ing in prod?'",
      output: [
        "↳ pulling last 50 logs from observability",
        "↳ correlating with deploy a91f2c (12m ago)",
        "↳ found: Stripe webhook secret missing in env",
        "→ fix: add STRIPE_WEBHOOK_SECRET to prod",
        "→ pr drafted at github.com/acme/web/pull/482",
      ],
    },
    {
      prompt: "mira test --watch --gen-missing",
      output: [
        "↳ scanning untested exports … 14 found",
        "↳ generating vitest suites",
        "✓ utils/parse.ts          12 tests",
        "✓ services/billing.ts       8 tests",
        "✓ hooks/useDebounce.ts     4 tests",
        "─ coverage 71% → 93%",
      ],
    },
  ],
  ru: [
    {
      prompt: "mira refactor ./api/users.go --to clean-arch",
      output: [
        "↳ анализ структуры проекта · 3 файла · 247 строк кода",
        "↳ перенос хэндлеров → инверсия зависимостей",
        "↳ автоматическая генерация DTO и интерфейсов",
        "✓ изменен файл api/users.go",
        "✓ обновлен файл api/router.go",
        "✓ добавлены юнит-тесты в users_test.go",
        "─ 0 ошибок · 0 предупреждений · 1.4сек",
      ],
    },
    {
      prompt: "mira explain 'почему падает контейнер в prod?'",
      output: [
        "↳ чтение последних 50 логов из Docker окружения",
        "↳ сопоставление с деплоем a91f2c (12 мин назад)",
        "↳ найдено: Ошибка подключения к DB (неверный порт в .env)",
        "→ решение: изменить DB_PORT на 5432 в конфиге",
        "→ патч подготовлен для ветки main",
      ],
    },
    {
      prompt: "mira test --watch --gen-missing",
      output: [
        "↳ сканирование функций без тестов … найдено: 14",
        "↳ генерация тестовых сценариев для Go",
        "✓ utils/prime.go          12 тестов",
        "✓ services/solver.go       8 тестов",
        "✓ math/logic.go            4 теста",
        "─ покрытие тестами выросло: 71% → 93%",
      ],
    },
  ]
};

export function TerminalShowcase() {
  const { lang } = useApp();
  const [sceneIdx, setSceneIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Тексты обертки компонента
  const uiTranslations = {
    en: {
      badge: "// live showcase",
      title: "Watch Mira think in your terminal.",
      scenesLabels: ["refactor", "debug", "test"]
    },
    ru: {
      badge: "// живая демонстрация",
      title: "Смотри, как Mira думает в твоем терминале.",
      scenesLabels: ["рефакторинг", "отладка", "тесты"]
    }
  };

  const ui = uiTranslations[lang];
  
  // Берем сцены под выбранный язык
  const currentScenes = SCENES_TRANSLATIONS[lang];
  const scene = currentScenes[sceneIdx];

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setTyped("");
    setLines([]);
    setDone(false);

    let i = 0;
    const typeChar = () => {
      i++;
      setTyped(scene.prompt.slice(0, i));
      if (i < scene.prompt.length) {
        timers.current.push(setTimeout(typeChar, 32));
      } else {
        scene.output.forEach((line, idx) => {
          timers.current.push(
            setTimeout(() => {
              setLines((prev) => [...prev, line]);
              if (idx === scene.output.length - 1) setDone(true);
            }, 350 + idx * 280),
          );
        });
      }
    };
    timers.current.push(setTimeout(typeChar, 400));

    return () => timers.current.forEach(clearTimeout);
  }, [sceneIdx, scene]);

  // auto-advance
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setSceneIdx((s) => (s + 1) % currentScenes.length), 3200);
    return () => clearTimeout(t);
  }, [done, currentScenes.length]);

  const sceneLabel = useMemo(
    () => ui.scenesLabels[sceneIdx],
    [sceneIdx, ui.scenesLabels],
  );

  return (
    <section id="showcase" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">
            {ui.badge}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {ui.title}
          </h2>
        </div>

        <div className="relative rounded-xl border border-border bg-terminal shadow-[var(--shadow-card)]">
          {/* tabs */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
            </div>
            <div className="font-mono text-[11px] text-muted-foreground">
              ~/projects/mira-hub — mira — 100×30
            </div>
            <div className="flex gap-1">
              {currentScenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSceneIdx(i)}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    i === sceneIdx ? "bg-neon" : "bg-border"
                  }`}
                  aria-label={`scene ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* body */}
          <div className="scanlines relative min-h-[340px] px-5 py-5 font-mono text-sm text-terminal-foreground">
            <div className="text-muted-foreground">
              <span className="text-neon">mira</span>
              <span className="text-slate-accent">@dev</span>:
              <span className="text-foreground">~/{sceneLabel}</span>$
            </div>
            <div className="mt-1">
              <span className="text-neon">$</span>{" "}
              <span className={!done && lines.length === 0 ? "terminal-caret" : ""}>
                {typed}
              </span>
            </div>
            <div className="mt-3 space-y-1.5">
              {lines.map((l, i) => (
                <div
                  key={i}
                  className={
                    l.startsWith("✓")
                      ? "text-neon"
                      : l.startsWith("→")
                        ? "text-foreground"
                        : l.startsWith("─")
                          ? "text-slate-accent"
                          : "text-muted-foreground"
                  }
                >
                  {l}
                </div>
              ))}
              {done && (
                <div className="pt-2 text-muted-foreground">
                  <span className="text-neon">$</span> <span className="terminal-caret" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
