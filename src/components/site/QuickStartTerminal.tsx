import { useCallback, useState } from "react";
import { Apple, Check, Copy, Monitor, Terminal } from "lucide-react";
import { useApp } from "@/lib/app-context";

type OsId = "windows" | "linux" | "macos";

const COMMANDS: Record<OsId, string> = {
  windows: "irm https://mira.neon.hub/install.ps1 | iex",
  linux: "curl -sS https://mira.neon.hub/install.sh | bash",
  macos: "brew install mira-cli/tap/mira && mira init",
};

const T = {
  en: {
    badge: "// quick start",
    title: "Ship in under 60 seconds.",
    desc: "Pick your OS, copy the command, paste into your terminal — Mira is live.",
    copy: "Copy",
    copied: "Copied!",
    windowTitle: "mira-quickstart — zsh",
    prompt: "user@mira-hub",
    comment: "# one-liner install",
    os: { windows: "Windows", linux: "Linux", macos: "macOS" },
  },
  ru: {
    badge: "// быстрый старт",
    title: "Запуск меньше чем за 60 секунд.",
    desc: "Выбери ОС, скопируй команду, вставь в терминал — Mira уже работает.",
    copy: "Копировать",
    copied: "Скопировано!",
    windowTitle: "mira-quickstart — zsh",
    prompt: "user@mira-hub",
    comment: "# установка одной командой",
    os: { windows: "Windows", linux: "Linux", macos: "macOS" },
  },
};

const OS_META: { id: OsId; icon: typeof Monitor }[] = [
  { id: "windows", icon: Monitor },
  { id: "linux", icon: Terminal },
  { id: "macos", icon: Apple },
];

export function QuickStartTerminal() {
  const { lang } = useApp();
  const t = T[lang];

  const [os, setOs] = useState<OsId>("linux");
  const [copied, setCopied] = useState(false);

  const command = COMMANDS[os];

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = command;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [command]);

  return (
    <section id="quickstart" className="px-6 py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">{t.badge}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{t.title}</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">{t.desc}</p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {OS_META.map(({ id, icon: Icon }) => {
            const active = os === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setOs(id);
                  setCopied(false);
                }}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-xs transition-all ${
                  active
                    ? "border-neon/50 bg-neon/10 text-neon shadow-[0_0_20px_color-mix(in_oklab,var(--neon)_35%,transparent)]"
                    : "border-border bg-card/40 text-muted-foreground hover:border-neon/30 hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {t.os[id]}
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-[#0a0e14] shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-center gap-3 border-b border-border/80 bg-[#060a0f] px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.6)]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
            </div>
            <span className="flex-1 text-center font-mono text-[10px] text-muted-foreground sm:text-[11px]">
              {t.windowTitle}
            </span>
            <span className="hidden w-[52px] sm:block" aria-hidden />
          </div>

          <div className="scanlines relative px-4 py-5 sm:px-6">
            <p className="font-mono text-[11px] text-muted-foreground sm:text-xs">
              <span className="text-neon">{t.prompt}</span>
              <span className="text-slate-accent">:</span>
              <span className="text-foreground">~</span>
              <span className="text-slate-accent">$</span>
            </p>
            <p className="mt-3 font-mono text-[10px] text-slate-accent sm:text-xs">{t.comment}</p>

            <div className="mt-2 overflow-x-auto rounded-lg border border-border/50 bg-black/40 px-3 py-4 sm:px-4">
              <code className="block whitespace-pre-wrap break-all font-mono text-sm text-terminal-foreground sm:text-base">
                <span className="text-neon">$ </span>
                {command}
              </code>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
              {copied && (
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-neon"
                  style={{
                    filter: "drop-shadow(0 0 8px color-mix(in oklab, var(--neon) 80%, transparent))",
                  }}
                  role="status"
                >
                  <Check className="h-3.5 w-3.5" />
                  {t.copied}
                </span>
              )}
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-md border border-neon/40 bg-neon/10 px-4 py-2 font-mono text-xs text-neon transition-all hover:bg-neon/20 hover:shadow-[0_0_18px_color-mix(in_oklab,var(--neon)_40%,transparent)]"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? t.copied : t.copy}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
