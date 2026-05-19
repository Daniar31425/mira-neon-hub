import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TerminalShowcase } from "@/components/site/TerminalShowcase";
import { PromptGrid } from "@/components/site/PromptGrid";
import { RoiCalculator } from "@/components/site/RoiCalculator";
import { QuickStartTerminal } from "@/components/site/QuickStartTerminal";
import { Footer } from "@/components/site/Footer";
import { MiraEcosystem } from "@/components/site/MiraEcosystem";
import { AppProvider, useApp } from "@/lib/app-context";

export { MIRA_REF_URL, useApp } from "@/lib/app-context";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mira — Your terminal-native AI engineer" },
      {
        name: "description",
        content:
          "Mira is a developer AI assistant that lives in your terminal. Refactor, debug, test and ship without leaving the keyboard.",
      },
      { property: "og:title", content: "Mira — Your terminal-native AI engineer" },
      {
        property: "og:description",
        content: "Pair-program with Mira. A cyberpunk-fast AI coding companion for your shell.",
      },
    ],
  }),
});

// MiraEcosystem already imported above.
// Its rendering is already present in <IndexPage /> as: <MiraEcosystem lang={lang} />
// Ensure placement is directly under <Hero />, i.e., after <Hero /> and before <TerminalShowcase />:

// In IndexPage, update the order if needed:
function IndexPage() {
  const { lang } = useApp();

  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <MiraEcosystem lang={lang} /> {/* Moved here per instruction */}
      <TerminalShowcase />
      <RoiCalculator />
      <QuickStartTerminal />
      <PromptGrid />
      <Footer />
    </main>
  );
}

function Index() {
  return (
    <AppProvider>
      <IndexPage />
    </AppProvider>
  );
}
