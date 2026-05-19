import { Terminal } from "lucide-react";
import { useApp, MIRA_REF_URL } from "@/lib/app-context";

export function Navbar() {
  // Подтягиваем язык, функцию смены языка и реф-ссылку из нашего контекста
  const { lang, setLang } = useApp();

  // Словарь для навигации, чтобы не тратить кредиты ИИ
  const navTranslations = {
    en: {
      showcase: "~/showcase",
      prompts: "~/prompts",
      docs: "~/docs",
      install: "$ install mira",
    },
    ru: {
      showcase: "~/демо",
      prompts: "~/промпты",
      docs: "~/доки",
      install: "$ поставить mira",
    },
  };

  const t = navTranslations[lang];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Логотип */}
        <a href="#" className="flex items-center gap-2 font-mono text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-card text-neon glow">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="text-foreground">
            mira<span className="text-neon">.</span>dev
          </span>
        </a>

        {/* Меню навигации */}
        <ul className="hidden gap-8 font-mono text-xs text-muted-foreground md:flex">
          <li>
            <a href="#showcase" className="hover:text-neon transition-colors">
              {t.showcase}
            </a>
          </li>
          <li>
            <a href="#prompts" className="hover:text-neon transition-colors">
              {t.prompts}
            </a>
          </li>
          <li>
            <a href="#docs" className="hover:text-neon transition-colors">
              {t.docs}
            </a>
          </li>
        </ul>

        {/* Правая часть: Язык + Реферальная кнопка */}
        <div className="flex items-center gap-4">
          {/* Переключатель языков */}
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="font-mono text-xs text-muted-foreground hover:text-neon border border-border/40 hover:border-neon/40 rounded px-2 py-1 bg-card/50 transition-all cursor-pointer"
          >
            {lang === "en" ? "RU" : "EN"}
          </button>

          {/* Главная кнопка-конвертер с твоей реф-ссылкой */}
          <a
            href={MIRA_REF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neon/40 bg-neon/10 px-3 py-1.5 font-mono text-xs text-neon hover:bg-neon/20 transition-colors shadow-[0_0_15px_rgba(var(--neon-rgb),0.1)]"
          >
            {t.install}
          </a>
        </div>
      </nav>
    </header>
  );
}
