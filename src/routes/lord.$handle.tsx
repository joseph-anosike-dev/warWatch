import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { PostCard } from "@/components/PostCard";
import { HOUSES, getCharacter } from "@/data/characters";
import { POSTS } from "@/data/posts";
import { Sigil, Verified } from "@/components/Sigil";
import { useWarWatch } from "@/hooks/useWarWatch";

export const Route = createFileRoute("/lord/$handle")({
  loader: ({ params }) => {
    const character = getCharacter(params.handle);
    if (!character) throw notFound();
    return { character };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "No such person \u2014 WarWatch" }, { name: "robots", content: "noindex" }],
      };
    }
    const { character } = loaderData;
    const title = `${character.name} (@${character.handle}) \u2014 WarWatch`;
    const description = `${character.bio} Whereabouts: ${character.whereabouts}. Posts from the War of the Five Kings, 299 AC.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Profile,
  notFoundComponent: NoSuchPerson,
});

function NoSuchPerson() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-display text-2xl">No such person holds an account.</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Perhaps they are dead. It has been that sort of year.
        </p>
        <Link to="/" className="mt-6 inline-block text-seal underline">
          Back to the feed
        </Link>
      </div>
    </div>
  );
}

function Profile() {
  const { character } = Route.useLoaderData() as { character: Character };
  const { hydrated, ownPosts, liked, toggleQuill, removePost } = useWarWatch();
  const house = HOUSES[character.house];

  const own = hydrated ? ownPosts.filter((p) => p.author === character.handle) : [];
  const posts = [...own, ...POSTS.filter((p) => p.author === character.handle)];
  const ownIds = new Set(own.map((p) => p.id));

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <div className="border border-border bg-card">
          <div
            className="h-28"
            style={{
              background: `linear-gradient(120deg, ${house.accent}, ${house.ink})`,
            }}
          />
          <div className="px-4 pb-5">
            <div className="-mt-8 flex items-end gap-3">
              <Sigil house={character.house} size={64} />
              <div className="pb-1">
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl tracking-wide">{character.name}</h1>
                  {character.verified && <Verified />}
                </div>
                <p className="text-sm text-muted-foreground">@{character.handle}</p>
              </div>
            </div>

            <p className="mt-4 text-[16px] italic">{character.bio}</p>

            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Titles
                </dt>
                <dd className="mt-1 text-sm">
                  {character.titles.length === 0 && (
                    <span className="text-muted-foreground">None to speak of.</span>
                  )}
                  <ul>
                    {character.titles.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                    {character.lostTitles?.map((t) => (
                      <li key={t} className="line-through decoration-seal opacity-70">
                        {t}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Whereabouts
                </dt>
                <dd className="mt-1 text-sm">{character.whereabouts}</dd>
                <dt className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  House words
                </dt>
                <dd className="mt-1 font-display text-sm">{house.words}</dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-border">
            {posts.length === 0 ? (
              <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                Sends no ravens. Reads all of them.
              </p>
            ) : (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  liked={liked.includes(post.id)}
                  onQuill={toggleQuill}
                  {...(ownIds.has(post.id) ? { onDelete: removePost } : {})}
                />
              ))
            )}
          </div>
        </div>

        <Link to="/" className="mt-6 inline-block text-sm text-seal underline">
          &larr; Back to the feed
        </Link>
      </main>
    </div>
  );
}
