import type { LangType } from "@/lib/app-context";
import {
  Activity,
  CalendarClock,
  Clapperboard,
  Chrome,
  Dumbbell,
  FileText,
  HeartPulse,
  Image,
  Lock,
  Mail,
  MapPin,
  Palette,
  Shield,
  Shirt,
  Sparkles,
  Video,
  Wallet,
  Wand2,
  BookOpen,
} from "lucide-react";

export type MiraEcosystemProps = {
  lang: LangType;
};

const T = {
  en: {
    badge: "// mira ecosystem",
    title: "One assistant. Every workflow.",
    desc: "Generative media, deep integrations, expert personas, daily automations, and privacy — unified under a single neon hub.",
    flagship: "flagship",
    generative: {
      title: "Generative AI Engine",
      desc: "Create studio-grade photos, cinematic videos, and polished copy without leaving the chat. Mira routes the right model for each asset.",
      tags: ["Photos", "Videos", "Text"],
    },
    integrations: {
      title: "Deep App Integrations",
      desc: "Connect wallets, design tools, docs, and cloud — Mira acts across your stack, not beside it.",
    },
    experts: {
      title: "Specialized AI Experts",
      desc: "Switch personas in one message. Each expert ships domain-tuned answers.",
    },
    automations: {
      title: "Daily Automations",
      desc: "Hands-free routines that run while you focus on what matters.",
    },
    private: {
      title: "Private Mode",
      desc: "Your data stays yours. Cocoon technology encrypts sessions end-to-end so sensitive workflows never leak.",
      badge: "Powered by Cocoon",
    },
    expertRoles: [
      { icon: MapPin, label: "City Guide" },
      { icon: HeartPulse, label: "Health Assistant" },
      { icon: Dumbbell, label: "Fitness Trainer" },
      { icon: BookOpen, label: "Storyteller" },
      { icon: Shirt, label: "Stylist" },
    ],
    automationItems: [
      { icon: CalendarClock, text: "Schedule 15:00 meetings" },
      { icon: Mail, text: "Check & triage emails" },
      { icon: Activity, text: "Plan daily workouts" },
      { icon: Clapperboard, text: "Take movie notes" },
    ],
    integrationsList: [
      { icon: Wallet, name: "TON Wallet", color: "from-cyan-400/20 to-cyan-500/5" },
      { icon: Palette, name: "Canva", color: "from-fuchsia-400/20 to-fuchsia-500/5" },
      { icon: FileText, name: "Notion", color: "from-zinc-400/20 to-zinc-500/5" },
      { icon: Chrome, name: "Google", color: "from-emerald-400/20 to-emerald-500/5" },
    ],
  },
  ru: {
    badge: "// экосистема mira",
    title: "Один ассистент. Любой сценарий.",
    desc: "Генерация медиа, глубокие интеграции, экспертные роли, ежедневные автоматизации и приватность — в одном неоновом хабе.",
    flagship: "флагман",
    generative: {
      title: "Генеративный AI-движок",
      desc: "Создавай фото студийного качества, видео и тексты прямо в чате. Mira подбирает модель под каждый формат.",
      tags: ["Фото", "Видео", "Текст"],
    },
    integrations: {
      title: "Глубокие интеграции",
      desc: "Кошельки, дизайн, документы и облако — Mira работает внутри вашего стека, а не рядом с ним.",
    },
    experts: {
      title: "Специализированные эксперты",
      desc: "Меняй роль одним сообщением. Каждый эксперт заточен под свою область.",
    },
    automations: {
      title: "Ежедневные автоматизации",
      desc: "Рутины на автопилоте, пока вы занимаетесь главным.",
    },
    private: {
      title: "Приватный режим",
      desc: "Ваши данные остаются вашими. Технология Cocoon шифрует сессии end-to-end — чувствительные сценарии не утекают.",
      badge: "На базе Cocoon",
    },
    expertRoles: [
      { icon: MapPin, label: "Гид по городу" },
      { icon: HeartPulse, label: "Помощник по здоровью" },
      { icon: Dumbbell, label: "Фитнес-тренер" },
      { icon: BookOpen, label: "Сторителлер" },
      { icon: Shirt, label: "Стилист" },
    ],
    automationItems: [
      { icon: CalendarClock, text: "Встречи в 15:00 по расписанию" },
      { icon: Mail, text: "Проверка и разбор почты" },
      { icon: Activity, text: "План тренировок на день" },
      { icon: Clapperboard, text: "Заметки по фильмам" },
    ],
    integrationsList: [
      { icon: Wallet, name: "TON Wallet", color: "from-cyan-400/20 to-cyan-500/5" },
      { icon: Palette, name: "Canva", color: "from-fuchsia-400/20 to-fuchsia-500/5" },
      { icon: FileText, name: "Notion", color: "from-zinc-400/20 to-zinc-500/5" },
      { icon: Chrome, name: "Google", color: "from-emerald-400/20 to-emerald-500/5" },
    ],
  },
} as const;

function BentoCard({
  className = "",
  children,
  glow = "cyan",
}: {
  className?: string;
  children: React.ReactNode;
  glow?: "cyan" | "fuchsia" | "mixed";
}) {
  const hoverShadow =
    glow === "fuchsia"
      ? "hover:shadow-[0_0_40px_rgba(232,121,249,0.15),inset_0_1px_0_rgba(232,121,249,0.2)]"
      : glow === "mixed"
        ? "hover:shadow-[0_0_35px_rgba(34,211,238,0.12),0_0_35px_rgba(232,121,249,0.12)]"
        : "hover:shadow-[0_0_40px_rgba(34,211,238,0.15),inset_0_1px_0_rgba(34,211,238,0.2)]";

  const borderHover =
    glow === "fuchsia"
      ? "hover:border-fuchsia-500/40"
      : glow === "mixed"
        ? "hover:border-cyan-500/30"
        : "hover:border-cyan-500/40";

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 backdrop-blur-xl transition-all duration-300",
        "hover:scale-[1.02]",
        borderHover,
        hoverShadow,
        className,
      ].join(" ")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative z-10">{children}</div>
    </article>
  );
}

function GradientHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-lg font-bold tracking-tight text-transparent md:text-xl">
      {children}
    </h3>
  );
}

export function MiraEcosystem({ lang }: MiraEcosystemProps) {
  const t = T[lang];

  return (
    <section id="ecosystem" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">{t.badge}</p>
          <h2 className="mt-3 bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:mx-0">{t.desc}</p>
        </header>

        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:grid-rows-3">
          {/* Card 1 — Large highlight */}
          <BentoCard
            glow="mixed"
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[320px]"
          >
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.flagship}
                </div>
                <GradientHeading>{t.generative.title}</GradientHeading>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">{t.generative.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.generative.tags.map((tag, i) => {
                  const icons = [Image, Video, Wand2];
                  const Icon = icons[i] ?? Sparkles;
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900/80 px-3 py-2 font-mono text-xs text-zinc-200 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-100"
                    >
                      <Icon className="h-4 w-4 text-cyan-400" />
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[Image, Video, Wand2].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex aspect-video items-center justify-center rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 transition-all group-hover:border-cyan-500/20"
                  >
                    <Icon className="h-8 w-8 text-cyan-400/40 transition-colors group-hover:text-cyan-400/80" />
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Card 2 — Integrations */}
          <BentoCard glow="cyan" className="md:col-span-2 lg:col-span-2">
            <GradientHeading>{t.integrations.title}</GradientHeading>
            <p className="mt-2 text-sm text-zinc-400">{t.integrations.desc}</p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {t.integrationsList.map(({ icon: Icon, name, color }) => (
                <div
                  key={name}
                  className={`flex flex-col items-center gap-2 rounded-xl border border-zinc-800 bg-gradient-to-b ${color} p-3 transition-transform group-hover:scale-[1.03]`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-950/80">
                    <Icon className="h-5 w-5 text-zinc-200" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-300 sm:text-xs">{name}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 3 — Experts */}
          <BentoCard glow="fuchsia" className="lg:col-span-1 lg:row-span-2">
            <GradientHeading>{t.experts.title}</GradientHeading>
            <p className="mt-2 text-sm text-zinc-400">{t.experts.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {t.expertRoles.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-3 py-2.5 transition-colors group-hover:border-fuchsia-500/25 group-hover:bg-zinc-900/80"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-fuchsia-500/10 text-fuchsia-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs text-zinc-200 sm:text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Card 4 — Automations */}
          <BentoCard glow="cyan" className="lg:col-span-1">
            <GradientHeading>{t.automations.title}</GradientHeading>
            <p className="mt-2 text-sm text-zinc-400">{t.automations.desc}</p>
            <ul className="mt-4 space-y-2">
              {t.automationItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Card 5 — Private mode */}
          <BentoCard glow="fuchsia" className="lg:col-span-1">
            <div className="flex h-full flex-col justify-between gap-4">
              <div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 shadow-[0_0_24px_rgba(232,121,249,0.2)]">
                  <Lock className="h-6 w-6 text-fuchsia-300" />
                </div>
                <GradientHeading>{t.private.title}</GradientHeading>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t.private.desc}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-950/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-fuchsia-200">
                <Shield className="h-3.5 w-3.5" />
                {t.private.badge}
              </span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
