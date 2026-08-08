import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { DISPATCHES, TICKER } from "@/data/headlines";

const TITLE = "Ravens from the Realm \u2014 WarWatch dispatches, 299 AC";
const DESCRIPTION =
  "Longer dispatches from the War of the Five Kings: death tolls at the Twins and the Blackwater, captured territories, burnt harvests and the Citadel's winter warning.";

export const Route = createFileRoute("/ravens")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ravens,
});

function Ravens() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="font-display text-3xl tracking-wide">Ravens from the Realm</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Dispatches gathered this turn of the moon, in the year 299 after Aegon's Conquest. Read
          them or do not; the winter comes regardless.
        </p>

        <p className="mt-4 border-l-2 border-seal pl-3 text-sm italic text-muted-foreground">
          {TICKER[0]}
        </p>

        {DISPATCHES.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="border-b border-border pb-2 font-display text-xl tracking-wide">
              {section.heading}
            </h2>
            <p className="mt-2 text-sm italic text-muted-foreground">{section.blurb}</p>
            <div className="mt-4 space-y-6">
              {section.items.map((item) => (
                <article key={item.title} className="border border-border bg-card p-4">
                  <h3 className="font-display text-lg tracking-wide">{item.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed">{item.body}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.by}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        WarWatch &middot; book canon only, no white ravens yet.
      </footer>
    </div>
  );
}
