import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { PostCard } from "@/components/PostCard";
import { Composer } from "@/components/Composer";
import { POSTS, type Topic } from "@/data/posts";
import { FIVE_KINGS, TRENDING } from "@/data/headlines";
import { CHARACTERS, getCharacter } from "@/data/characters";
import { useWarWatch } from "@/hooks/useWarWatch";

const TITLE = "WarWatch \u2014 the realm posts through the War of the Five Kings";
const DESCRIPTION =
  "A Westeros social feed set days after the Red Wedding, 299 AC. Verified kings and high lords, smallfolk grain complaints, and death tolls straight from the books.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Feed,
});

type Filter = "all" | "verified" | Topic;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "verified", label: "Verified only" },
  { value: "war", label: "War Reports" },
  { value: "famine", label: "Grain & Famine" },
  { value: "gossip", label: "Smallfolk Gossip" },
];

function Feed() {
  const [filter, setFilter] = useState<Filter>("all");
  const { hydrated, persona, ownPosts, liked, setPersona, addPost, removePost, toggleQuill } =
    useWarWatch();

  const all = useMemo(() => (hydrated ? [...ownPosts, ...POSTS] : POSTS), [hydrated, ownPosts]);

  const visible = all.filter((p) => {
    if (filter === "all") return true;
    if (filter === "verified") return getCharacter(p.author)?.verified ?? false;
    return p.topic === filter;
  });

  const ownIds = new Set(ownPosts.map((p) => p.id));

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="border border-border bg-card">
          <h1 className="border-b border-border px-4 py-3 font-display text-lg tracking-wide">
            The Feed &middot; days after the Twins
          </h1>

          <div className="flex flex-wrap gap-2 border-b border-border px-4 py-3">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`rounded-sm border px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  filter === f.value
                    ? "border-seal bg-seal text-seal-foreground"
                    : "border-border text-muted-foreground hover:border-seal"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <Composer persona={persona} onPersona={setPersona} onPost={addPost} />

          {visible.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              liked={liked.includes(post.id)}
              onQuill={toggleQuill}
              {...(ownIds.has(post.id) ? { onDelete: removePost } : {})}
            />
          ))}
        </div>

        <aside className="space-y-6">
          <section className="border border-border bg-card p-4">
            <h2 className="font-display text-base tracking-wide">Kings Remaining</h2>
            <ul className="mt-3 space-y-3">
              {FIVE_KINGS.map((k) => (
                <li key={k.name} className="text-sm">
                  <span
                    className={
                      k.status === "dead"
                        ? "font-display line-through decoration-seal decoration-2 opacity-70"
                        : "font-display"
                    }
                  >
                    {k.name}
                  </span>
                  <div className="text-xs text-muted-foreground">{k.claim}</div>
                  <div className="mt-0.5 text-xs italic text-muted-foreground">{k.note}</div>
                </li>
              ))}
            </ul>
            <p className="mt-3 border-t border-border pt-2 text-xs text-muted-foreground">
              Two kings standing. The realm has stopped counting the smallfolk.
            </p>
          </section>

          <section className="border border-border bg-card p-4">
            <h2 className="font-display text-base tracking-wide">Trending in the Riverlands</h2>
            <ul className="mt-3 space-y-2">
              {TRENDING.map((t) => (
                <li key={t.tag}>
                  <div className="text-sm text-foreground">{t.tag}</div>
                  <div className="text-xs text-muted-foreground">{t.count}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-border bg-card p-4">
            <h2 className="font-display text-base tracking-wide">Verified Highborn</h2>
            <ul className="mt-3 space-y-1 text-sm">
              {CHARACTERS.filter((c) => c.verified)
                .slice(0, 10)
                .map((c) => (
                  <li key={c.handle}>
                    <a href={`/lord/${c.handle}`} className="hover:text-seal">
                      {c.name}{" "}
                      <span className="text-xs text-muted-foreground">@{c.handle}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </section>
        </aside>
      </main>

      <footer className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground">
        WarWatch is a work of parody set in the books of A Song of Ice and Fire, late 299 AC. Book
        canon only.
      </footer>
    </div>
  );
}
