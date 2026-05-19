import { useApp } from "@/lib/app-context";

export function Footer() {
  const { lang } = useApp();

  return (
    <footer id="docs" className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
        <div>
          <span className="text-neon">mira</span> · {lang === "en" ? "the AI that codes with you" : "ИИ-ассистент, который кодит вместе с тобой"}
        </div>
        <div>
          © {new Date().getFullYear()} mira labs · {lang === "en" ? "built in the terminal" : "создано в терминале"}
        </div>
      </div>
    </footer>
  );
}
