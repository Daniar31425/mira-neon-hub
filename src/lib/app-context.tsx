import { createContext, useContext, useState, type ReactNode } from "react";

// Реферальная ссылка из Телеграма
export const MIRA_REF_URL = "https://t.me/mira?start=ref_8012380397";

export type LangType = "en" | "ru";

const AppContext = createContext<{ lang: LangType; setLang: (l: LangType) => void }>({
  lang: "en",
  setLang: () => {},
});

export const useApp = () => useContext(AppContext);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangType>("en");
  return <AppContext.Provider value={{ lang, setLang }}>{children}</AppContext.Provider>;
}
