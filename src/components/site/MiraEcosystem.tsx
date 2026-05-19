import { useState } from "react";
import type { LangType } from "@/lib/app-context";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  CalendarClock,
  Clapperboard,
  Chrome,
  Dumbbell,
  FileText,
  HeartPulse,
  Lock,
  Mail,
  MapPin,
  Palette,
  Play,
  Shield,
  Shirt,
  Sparkles,
  Wallet,
  BookOpen,
  Zap,
} from "lucide-react";

export type MiraEcosystemProps = {
  lang: LangType;
};

type GlowVariant = "cyan" | "fuchsia" | "purple" | "mixed";

type ExpertRole = {
  id: string;
  icon: LucideIcon;
  label: string;
  brief: string;
  accent: string;
  iconGlow: string;
};

const T = {
  en: {
    badge: "// mira ecosystem · holographic layer",
    title: "One assistant. Every workflow.",
    desc: "Generative media, deep integrations, expert personas, daily automations, and privacy — unified inside a multi-layer neon command deck.",
    flagship: "flagship module",
    generative: {
      title: "Generative AI Engine",
      desc: "Route each request to the right model stack. Photos, video, and copy render in isolated preview windows — without leaving Mira.",
    },
    previews: {
      kling: {
        title: "Kling Video AI",
        status: "Synthesizing motion…",
        meta: "4K · 24fps · scene_07",
      },
      seedream: {
        title: "Seedream Photo Render",
        status: "Diffusion pass 3/4",
        meta: "RAW · 4096²",
      },
      nano: {
        title: "Nano Banana Pro",
        status: "Streaming tokens",
        sample: "Neon skyline copy — draft v2 ready for export.",
      },
    },
    integrations: {
      title: "Deep App Integrations",
      desc: "Wallet, design, docs, and cloud services orbit Mira through encrypted sync channels.",
      hub: "Mira sync core",
      synced: "synced",
    },
    experts: {
      title: "Specialized AI Experts",
      desc: "Profile switcher — pick a persona, get domain-tuned reasoning instantly.",
      active: "active profile",
    },
    automations: {
      title: "Daily Automations",
      desc: "Cron-style routines that fire while you stay in flow state.",
    },
    private: {
      title: "Private Mode",
      desc: "Sessions sealed by Cocoon — end-to-end encryption for sensitive workflows.",
      badge: "Powered by Cocoon",
      status: "shield active",
    },
    expertRoles: [
      {
        id: "guide",
        icon: MapPin,
        label: "City Guide",
        brief: "Routes, venues & local context",
        accent: "from-cyan-500/25 to-cyan-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(34,211,238,0.55)] text-cyan-300",
      },
      {
        id: "health",
        icon: HeartPulse,
        label: "Health Assistant",
        brief: "Wellness plans & habit tracking",
        accent: "from-rose-500/25 to-rose-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(251,113,133,0.55)] text-rose-300",
      },
      {
        id: "fitness",
        icon: Dumbbell,
        label: "Fitness Trainer",
        brief: "Workouts & recovery macros",
        accent: "from-amber-500/25 to-amber-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(251,191,36,0.55)] text-amber-300",
      },
      {
        id: "story",
        icon: BookOpen,
        label: "Storyteller",
        brief: "Narratives & script beats",
        accent: "from-violet-500/25 to-violet-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(167,139,250,0.55)] text-violet-300",
      },
      {
        id: "style",
        icon: Shirt,
        label: "Stylist",
        brief: "Outfits, palettes & mood boards",
        accent: "from-fuchsia-500/25 to-fuchsia-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(232,121,249,0.55)] text-fuchsia-300",
      },
    ] as ExpertRole[],
    automationItems: [
      { icon: CalendarClock, text: "Schedule 15:00 meetings" },
      { icon: Mail, text: "Check & triage emails" },
      { icon: Activity, text: "Plan daily workouts" },
      { icon: Clapperboard, text: "Take movie notes" },
    ],
    integrationsList: [
      {
        icon: Wallet,
        name: "TON",
        full: "TON Wallet",
        category: "Wallet",
        glow: "cyan" as const,
        ring: "border-cyan-400/50 shadow-[0_0_22px_rgba(34,211,238,0.45)]",
        chip: "bg-cyan-500/15 text-cyan-200",
      },
      {
        icon: Palette,
        name: "Canva",
        full: "Canva Design",
        category: "Design",
        glow: "fuchsia" as const,
        ring: "border-fuchsia-400/50 shadow-[0_0_22px_rgba(232,121,249,0.45)]",
        chip: "bg-fuchsia-500/15 text-fuchsia-200",
      },
      {
        icon: FileText,
        name: "Notion",
        full: "Notion",
        category: "Productivity",
        glow: "purple" as const,
        ring: "border-purple-400/50 shadow-[0_0_22px_rgba(168,85,247,0.45)]",
        chip: "bg-purple-500/15 text-purple-200",
      },
      {
        icon: Chrome,
        name: "Google",
        full: "Google Services",
        category: "Cloud",
        glow: "emerald" as const,
        ring: "border-emerald-400/50 shadow-[0_0_22px_rgba(52,211,153,0.45)]",
        chip: "bg-emerald-500/15 text-emerald-200",
      },
    ],
  },
  ru: {
    badge: "// экосистема mira · голографический слой",
    title: "Один ассистент. Любой сценарий.",
    desc: "Генерация медиа, интеграции, экспертные роли, автоматизации и приватность — в многослойной неоновой командной панели.",
    flagship: "флагманский модуль",
    generative: {
      title: "Генеративный AI-движок",
      desc: "Каждый запрос уходит в нужный стек моделей. Фото, видео и текст рендерятся в изолированных окнах — без выхода из Mira.",
    },
    previews: {
      kling: {
        title: "Kling Video AI",
        status: "Синтез движения…",
        meta: "4K · 24fps · сцена_07",
      },
      seedream: {
        title: "Seedream Photo Render",
        status: "Диффузия 3/4",
        meta: "RAW · 4096²",
      },
      nano: {
        title: "Nano Banana Pro",
        status: "Поток токенов",
        sample: "Неоновый силуэт города — черновик v2 готов к экспорту.",
      },
    },
    integrations: {
      title: "Глубокие интеграции",
      desc: "Кошелёк, дизайн, документы и облако синхронизируются с Mira по зашифрованным каналам.",
      hub: "ядро синхронизации Mira",
      synced: "синхр.",
    },
    experts: {
      title: "Специализированные эксперты",
      desc: "Переключатель профилей — выбери роль, получи ответы под домен.",
      active: "активный профиль",
    },
    automations: {
      title: "Ежедневные автоматизации",
      desc: "Рутины по расписанию, пока вы остаётесь в потоке.",
    },
    private: {
      title: "Приватный режим",
      desc: "Сессии под защитой Cocoon — сквозное шифрование для чувствительных сценариев.",
      badge: "На базе Cocoon",
      status: "щит активен",
    },
    expertRoles: [
      {
        id: "guide",
        icon: MapPin,
        label: "Гид по городу",
        brief: "Маршруты, места и локальный контекст",
        accent: "from-cyan-500/25 to-cyan-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(34,211,238,0.55)] text-cyan-300",
      },
      {
        id: "health",
        icon: HeartPulse,
        label: "Помощник по здоровью",
        brief: "Планы wellness и привычки",
        accent: "from-rose-500/25 to-rose-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(251,113,133,0.55)] text-rose-300",
      },
      {
        id: "fitness",
        icon: Dumbbell,
        label: "Фитнес-тренер",
        brief: "Тренировки и макросы восстановления",
        accent: "from-amber-500/25 to-amber-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(251,191,36,0.55)] text-amber-300",
      },
      {
        id: "story",
        icon: BookOpen,
        label: "Сторителлер",
        brief: "Сюжеты и структура сценария",
        accent: "from-violet-500/25 to-violet-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(167,139,250,0.55)] text-violet-300",
      },
      {
        id: "style",
        icon: Shirt,
        label: "Стилист",
        brief: "Образы, палитры и mood board",
        accent: "from-fuchsia-500/25 to-fuchsia-950/40",
        iconGlow: "shadow-[0_0_16px_rgba(232,121,249,0.55)] text-fuchsia-300",
      },
    ] as ExpertRole[],
    automationItems: [
      { icon: CalendarClock, text: "Встречи в 15:00 по расписанию" },
      { icon: Mail, text: "Проверка и разбор почты" },
      { icon: Activity, text: "План тренировок на день" },
      { icon: Clapperboard, text: "Заметки по фильмам" },
    ],
    integrationsList: [
      {
        icon: Wallet,
        name: "TON",
        full: "TON Wallet",
        category: "Кошелёк",
        glow: "cyan" as const,
        ring: "border-cyan-400/50 shadow-[0_0_22px_rgba(34,211,238,0.45)]",
        chip: "bg-cyan-500/15 text-cyan-200",
      },
      {
        icon: Palette,
        name: "Canva",
        full: "Canva Design",
        category: "Дизайн",
        glow: "fuchsia" as const,
        ring: "border-fuchsia-400/50 shadow-[0_0_22px_rgba(232,121,249,0.45)]",
        chip: "bg-fuchsia-500/15 text-fuchsia-200",
      },
      {
        icon: FileText,
        name: "Notion",
        full: "Notion",
        category: "Продуктивность",
        glow: "purple" as const,
        ring: "border-purple-400/50 shadow-[0_0_22px_rgba(168,85,247,0.45)]",
        chip: "bg-purple-500/15 text-purple-200",
      },
      {
        icon: Chrome,
        name: "Google",
        full: "Google Services",
        category: "Облако",
        glow: "emerald" as const,
        ring: "border-emerald-400/50 shadow-[0_0_22px_rgba(52,211,153,0.45)]",
        chip: "bg-emerald-500/15 text-emerald-200",
      },
    ],
  },
};

const GLOW_BORDER: Record<GlowVariant, string> = {
  cyan: "from-cyan-400/70 via-cyan-500/20 to-purple-500/40",
  fuchsia: "from-fuchsia-400/70 via-purple-500/30 to-cyan-500/30",
  purple: "from-purple-400/60 via-fuchsia-500/25 to-cyan-400/35",
  mixed: "from-cyan-400/80 via-fuchsia-500/50 to-purple-600/60",
};

const GLOW_DROP: Record<GlowVariant, string> = {
  cyan: "drop-shadow-[0_0_28px_rgba(34,211,238,0.35)] group-hover:drop-shadow-[0_0_42px_rgba(34,211,238,0.55)]",
  fuchsia: "drop-shadow-[0_0_28px_rgba(232,121,249,0.35)] group-hover:drop-shadow-[0_0_42px_rgba(232,121,249,0.55)]",
  purple: "drop-shadow-[0_0_28px_rgba(168,85,247,0.35)] group-hover:drop-shadow-[0_0_42px_rgba(168,85,247,0.55)]",
  mixed: "drop-shadow-[0_0_32px_rgba(34,211,238,0.3)] group-hover:drop-shadow-[0_0_48px_rgba(232,121,249,0.45)]",
};

function CardInner({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex h-full min-h-0 flex-col justify-between gap-5 ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="shrink-0 space-y-2">{children}</div>;
}

function CardBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-h-0 flex-1 flex-col ${className}`}>{children}</div>
  );
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-auto shrink-0">{children}</div>;
}

function HoloCard({
  children,
  className = "",
  glow = "cyan",
  z = 10,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: GlowVariant;
  z?: number;
  id?: string;
}) {
  return (
    <article
      id={id}
      className={`group holo-card relative flex h-full min-h-0 flex-col ${GLOW_DROP[glow]} ${className}`}
      style={{ zIndex: z }}
    >
      {/* Depth layer — back plate */}
      <div
        aria-hidden
        className="absolute inset-0 translate-y-3 scale-[0.98] rounded-2xl bg-black/70 blur-md"
        style={{ zIndex: 0 }}
      />
      <div
        aria-hidden
        className="absolute inset-0 translate-y-1.5 scale-[0.99] rounded-2xl border border-white/5 bg-zinc-950/80"
        style={{ zIndex: 1 }}
      />

      {/* Gradient border shell */}
      <div
        className={`relative flex h-full min-h-0 flex-1 flex-col rounded-2xl bg-gradient-to-br p-[1px] ${GLOW_BORDER[glow]} transition-all duration-500 group-hover:p-[1.5px]`}
        style={{ zIndex: 2 }}
      >
        <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-[15px] bg-black/45 backdrop-blur-2xl">
          {/* Inner glass stack */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-fuchsia-500/[0.04]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-fuchsia-500/12 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50"
          />
          <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col p-5 sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function HoloHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="holo-heading-gradient text-lg font-bold tracking-tight md:text-xl">{children}</h3>;
}

function KlingPreview({ data }: { data: (typeof T)["en"]["previews"]["kling"] }) {
  return (
    <div className="relative flex h-full min-h-[108px] flex-col overflow-hidden rounded-lg border border-cyan-500/30 bg-black/60 shadow-[0_0_30px_rgba(34,211,238,0.25),inset_0_1px_0_rgba(34,211,238,0.2)]">
      <div className="flex items-center justify-between border-b border-cyan-500/20 bg-cyan-950/40 px-2 py-1">
        <span className="font-mono text-[9px] text-cyan-300">{data.title}</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500/20">
          <Play className="h-2 w-2 fill-cyan-300 text-cyan-300" />
        </span>
      </div>
      <div className="relative flex-1 p-2">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.15)_0%,transparent_50%,rgba(168,85,247,0.2)_100%)]" />
        <div className="grid h-full grid-cols-4 gap-0.5 opacity-80">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-sm bg-gradient-to-b from-cyan-400/30 to-purple-600/20"
              style={{ height: `${30 + (i % 4) * 12}%`, alignSelf: "end" }}
            />
          ))}
        </div>
        <div className="absolute bottom-1 left-2 right-2">
          <p className="font-mono text-[8px] text-cyan-200/90">{data.status}</p>
          <p className="font-mono text-[7px] text-zinc-500">{data.meta}</p>
        </div>
      </div>
    </div>
  );
}

function SeedreamPreview({ data }: { data: (typeof T)["en"]["previews"]["seedream"] }) {
  return (
    <div className="relative flex h-full min-h-[108px] flex-col overflow-hidden rounded-lg border border-fuchsia-500/35 bg-black/60 shadow-[0_0_32px_rgba(232,121,249,0.28),inset_0_0_40px_rgba(232,121,249,0.08)]">
      <div className="border-b border-fuchsia-500/25 bg-fuchsia-950/30 px-2 py-1 font-mono text-[9px] text-fuchsia-200">
        {data.title}
      </div>
      <div className="relative flex flex-1 items-center justify-center p-2">
        <div className="absolute inset-2 rounded-md bg-gradient-to-tr from-fuchsia-600/40 via-purple-500/20 to-cyan-400/30 blur-[2px]" />
        <div className="relative h-14 w-14 rounded-lg border border-fuchsia-400/50 bg-gradient-to-br from-fuchsia-500/30 to-purple-900/50 shadow-[0_0_24px_rgba(232,121,249,0.5)]">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="holo-shimmer-bar absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
        </div>
        <div className="absolute bottom-1.5 left-2">
          <p className="font-mono text-[8px] text-fuchsia-200/90">{data.status}</p>
          <p className="font-mono text-[7px] text-zinc-500">{data.meta}</p>
        </div>
      </div>
    </div>
  );
}

function NanoPreview({ data }: { data: (typeof T)["en"]["previews"]["nano"] }) {
  return (
    <div className="relative flex h-full min-h-[108px] flex-col overflow-hidden rounded-lg border border-amber-400/30 bg-black/60 shadow-[0_0_28px_rgba(251,191,36,0.2),inset_0_1px_0_rgba(251,191,36,0.15)]">
      <div className="flex items-center gap-1 border-b border-amber-500/20 bg-amber-950/30 px-2 py-1">
        <Sparkles className="h-2.5 w-2.5 text-amber-300" />
        <span className="font-mono text-[9px] text-amber-200">{data.title}</span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-2">
        <p className="font-mono text-[8px] leading-relaxed text-zinc-300">{data.sample}</p>
        <div className="mt-1 flex items-center gap-1">
          <span className="h-1 w-1 animate-pulse rounded-full bg-amber-400" />
          <span className="font-mono text-[7px] text-amber-300/80">{data.status}</span>
        </div>
      </div>
    </div>
  );
}

const INTEGRATION_SLOTS = [
  "left-[4%] top-[8%] sm:left-[2%] sm:top-[6%]",
  "right-[4%] top-[8%] sm:right-[2%] sm:top-[6%]",
  "left-[4%] bottom-[4%] sm:left-[2%] sm:bottom-[2%]",
  "right-[4%] bottom-[4%] sm:right-[2%] sm:bottom-[2%]",
] as const;

function IntegrationsFlow({
  items,
  hubLabel,
  syncedLabel,
}: {
  items: (typeof T)["en"]["integrationsList"];
  hubLabel: string;
  syncedLabel: string;
}) {
  const hoverBoost: Record<string, string> = {
    cyan: "hover:scale-110 hover:shadow-[0_0_32px_rgba(34,211,238,0.65)]",
    fuchsia: "hover:scale-110 hover:shadow-[0_0_32px_rgba(232,121,249,0.65)]",
    purple: "hover:scale-110 hover:shadow-[0_0_32px_rgba(168,85,247,0.65)]",
    emerald: "hover:scale-110 hover:shadow-[0_0_32px_rgba(52,211,153,0.65)]",
  };

  return (
    <div className="relative mx-auto flex min-h-[200px] w-full max-w-md flex-1 flex-col justify-center py-2 lg:min-h-[220px] lg:max-w-none">
      {/* Connection mesh */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="holo-hub-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.9)" />
            <stop offset="50%" stopColor="rgba(168,85,247,0.85)" />
            <stop offset="100%" stopColor="rgba(232,121,249,0.9)" />
          </linearGradient>
        </defs>
        <path
          d="M 48 42 L 160 100 L 272 42"
          fill="none"
          stroke="url(#holo-hub-grad)"
          strokeWidth="1.25"
          className="holo-flow-line opacity-50"
        />
        <path
          d="M 48 158 L 160 100 L 272 158"
          fill="none"
          stroke="url(#holo-hub-grad)"
          strokeWidth="1.25"
          className="holo-flow-line opacity-50"
          style={{ animationDirection: "reverse" }}
        />
        <path
          d="M 48 42 L 48 158 M 272 42 L 272 158"
          fill="none"
          stroke="url(#holo-hub-grad)"
          strokeWidth="1"
          className="holo-flow-line opacity-35"
        />
        <circle cx="160" cy="100" r="28" fill="rgba(34,211,238,0.06)" stroke="url(#holo-hub-grad)" strokeWidth="1" />
      </svg>

      {/* Central hub */}
      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-black/70 shadow-[0_0_40px_rgba(34,211,238,0.35),0_0_60px_rgba(168,85,247,0.2)] backdrop-blur-xl">
          <div
            aria-hidden
            className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-fuchsia-500/20"
          />
          <Zap className="relative h-6 w-6 text-cyan-300" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-300/90">{hubLabel}</span>
      </div>

      {/* Orbiting badges */}
      {items.map((item, i) => {
        const Icon = item.icon;
        const slot = INTEGRATION_SLOTS[i] ?? INTEGRATION_SLOTS[0];
        return (
          <button
            key={item.name}
            type="button"
            className={`group absolute z-30 flex w-[42%] max-w-[130px] flex-col items-center gap-1.5 transition-all duration-300 sm:w-auto sm:max-w-none ${slot} ${hoverBoost[item.glow]}`}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-zinc-950/90 backdrop-blur-xl transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 ${item.ring}`}
            >
              <Icon className="h-5 w-5 text-zinc-100 sm:h-6 sm:w-6" />
            </span>
            <span className="text-center font-mono text-[10px] leading-tight text-zinc-200 sm:text-xs">
              {item.full}
            </span>
            <span className="flex items-center gap-1">
              <span className={`rounded px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wide ${item.chip}`}>
                {item.category}
              </span>
              <span className="font-mono text-[8px] text-emerald-400/90">● {syncedLabel}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ExpertSwitcher({
  roles,
  activeLabel,
}: {
  roles: ExpertRole[];
  activeLabel: string;
}) {
  const [activeId, setActiveId] = useState(roles[0]?.id ?? "guide");
  const active = roles.find((r) => r.id === activeId) ?? roles[0];

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div className="flex shrink-0 items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        <span>{activeLabel}</span>
        <span className="text-fuchsia-300">{active?.label}</span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-evenly gap-2.5">
        {roles.map((role) => {
          const isActive = role.id === activeId;
          const Icon = role.icon;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => setActiveId(role.id)}
              className={[
                "relative flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left backdrop-blur-xl transition-all duration-300",
                isActive
                  ? `z-20 border-fuchsia-400/50 bg-gradient-to-r ${role.accent} shadow-[0_0_24px_rgba(232,121,249,0.2)]`
                  : "z-10 border-zinc-800/80 bg-black/30 opacity-80 hover:border-zinc-600 hover:opacity-100",
              ].join(" ")}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/50 ${role.iconGlow}`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs font-medium text-zinc-100 sm:text-sm">{role.label}</p>
                <p className="truncate font-mono text-[10px] text-zinc-500">{role.brief}</p>
              </div>
              {isActive && (
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function MiraEcosystem({ lang }: MiraEcosystemProps) {
  const t = T[lang];

  return (
    <section id="ecosystem" className="relative overflow-hidden px-6 py-28">
      {/* Ambient holographic field */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[min(100%,900px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl" style={{ zIndex: 5 }}>
        <header className="mb-14 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neon text-glow">{t.badge}</p>
          <h2 className="holo-title-glitch holo-title-gradient mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:mx-0 md:text-base">
            {t.desc}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:grid-rows-[minmax(300px,auto)_minmax(300px,1fr)] lg:items-stretch lg:gap-5">
          {/* —— Generative AI (hero) —— */}
          <HoloCard glow="mixed" z={20} className="h-full min-h-[300px] md:col-span-2 lg:col-span-7 lg:row-start-1">
            <CardInner>
              <CardHeader>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
              <Zap className="h-3 w-3" />
              {t.flagship}
            </div>
            <HoloHeading>{t.generative.title}</HoloHeading>
            <p className="max-w-lg text-sm leading-relaxed text-zinc-400">{t.generative.desc}</p>
              </CardHeader>
              <CardBody className="flex flex-1 flex-col justify-end pt-2">
                <div className="grid min-h-[140px] flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="relative sm:col-span-1" style={{ zIndex: 12 }}>
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-lg bg-cyan-500/20 blur-md"
                />
                <KlingPreview data={t.previews.kling} />
              </div>
              <div className="relative sm:col-span-1" style={{ zIndex: 14 }}>
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-lg bg-fuchsia-500/20 blur-md"
                />
                <SeedreamPreview data={t.previews.seedream} />
              </div>
              <div className="relative sm:col-span-1" style={{ zIndex: 16 }}>
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-lg bg-amber-500/15 blur-md"
                />
                <NanoPreview data={t.previews.nano} />
              </div>
                </div>
              </CardBody>
            </CardInner>
          </HoloCard>

          {/* —— Integrations —— */}
          <HoloCard
            glow="cyan"
            z={15}
            className="h-full min-h-[300px] md:col-span-2 lg:col-span-5 lg:col-start-8 lg:row-start-1"
            id="integrations"
          >
            <CardInner>
              <CardHeader>
                <HoloHeading>{t.integrations.title}</HoloHeading>
                <p className="text-sm leading-relaxed text-zinc-400">{t.integrations.desc}</p>
              </CardHeader>
              <CardBody className="justify-end">
                <IntegrationsFlow
                  items={t.integrationsList}
                  hubLabel={t.integrations.hub}
                  syncedLabel={t.integrations.synced}
                />
              </CardBody>
            </CardInner>
          </HoloCard>

          <div className="grid h-full min-h-[300px] grid-cols-1 gap-5 sm:grid-cols-7 md:col-span-2 lg:col-span-7 lg:col-start-1 lg:row-start-2">
          {/* —— Automations —— */}
          <HoloCard glow="cyan" z={12} className="h-full sm:col-span-4">
            <CardInner>
              <CardHeader>
                <HoloHeading>{t.automations.title}</HoloHeading>
                <p className="text-sm leading-relaxed text-zinc-400">{t.automations.desc}</p>
              </CardHeader>
              <CardBody className="justify-between">
                <ul className="flex min-h-0 flex-1 flex-col justify-evenly gap-2.5">
                  {t.automationItems.map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      className="flex items-center gap-3 rounded-lg border border-zinc-800/60 bg-black/30 px-3.5 py-3 backdrop-blur-sm transition-colors group-hover:border-cyan-500/30"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cyan-500/10 shadow-[0_0_12px_rgba(34,211,238,0.3)]">
                        <Icon className="h-4 w-4 text-cyan-300" />
                      </span>
                      <span className="text-sm leading-snug text-zinc-300">{text}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </CardInner>
          </HoloCard>

          {/* —— Private mode —— */}
          <HoloCard glow="purple" z={14} className="h-full sm:col-span-3">
            <CardInner>
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/40 bg-purple-950/50 shadow-[0_0_32px_rgba(168,85,247,0.45)]">
                  <Lock className="h-7 w-7 text-purple-200" />
                </div>
                <HoloHeading>{t.private.title}</HoloHeading>
                <p className="text-sm leading-relaxed text-zinc-400">{t.private.desc}</p>
              </CardHeader>
              <CardFooter>
                <div className="space-y-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-950/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-fuchsia-200 shadow-[0_0_20px_rgba(232,121,249,0.25)]">
                    <Shield className="h-3.5 w-3.5" />
                    {t.private.badge}
                  </span>
                  <p className="font-mono text-[10px] text-purple-300/80">● {t.private.status}</p>
                </div>
              </CardFooter>
            </CardInner>
          </HoloCard>
          </div>

          {/* —— Experts —— */}
          <HoloCard
            glow="fuchsia"
            z={18}
            className="h-full min-h-[300px] lg:col-span-5 lg:col-start-8 lg:row-start-2"
          >
            <CardInner className="gap-4">
              <CardHeader>
                <HoloHeading>{t.experts.title}</HoloHeading>
                <p className="text-sm leading-relaxed text-zinc-400">{t.experts.desc}</p>
              </CardHeader>
              <CardBody className="min-h-0 justify-stretch">
                <ExpertSwitcher roles={t.expertRoles} activeLabel={t.experts.active} />
              </CardBody>
            </CardInner>
          </HoloCard>
        </div>
      </div>
    </section>
  );
}





