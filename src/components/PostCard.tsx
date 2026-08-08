import { Link } from "@tanstack/react-router";
import { getCharacter } from "@/data/characters";
import type { Post } from "@/data/posts";
import { HouseTag, Sigil, Verified } from "./Sigil";

const TOPIC_LABEL: Record<Post["topic"], string> = {
  war: "War Report",
  famine: "Grain & Famine",
  gossip: "Court Gossip",
};

export function PostCard({
  post,
  liked,
  onQuill,
  onDelete,
}: {
  post: Post;
  liked: boolean;
  onQuill: (id: string) => void;
  onDelete?: (id: string) => void;
}) {
  const author = getCharacter(post.author);
  if (!author) return null;

  return (
    <article className="flex gap-3 border-b border-border px-4 py-5 transition-colors hover:bg-vellum-deep/40">
      <Link to="/lord/$handle" params={{ handle: author.handle }}>
        <Sigil house={author.house} />
      </Link>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Link
            to="/lord/$handle"
            params={{ handle: author.handle }}
            className="font-display text-[15px] font-semibold tracking-wide text-foreground hover:underline"
          >
            {author.name}
          </Link>
          {author.verified && <Verified />}
          <span className="text-sm text-muted-foreground">@{author.handle}</span>
          <span className="text-muted-foreground">&middot;</span>
          <span className="text-sm text-muted-foreground">{post.when}</span>
          <span className="ml-auto text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {TOPIC_LABEL[post.topic]}
          </span>
        </div>

        <p className="mt-2 whitespace-pre-wrap text-[17px] leading-relaxed text-foreground">
          {post.body}
        </p>

        <div className="mt-3 flex items-center gap-5 text-sm text-muted-foreground">
          <HouseTag house={author.house} />
          <span title="Whispers (replies)">&#8763; {post.whispers.toLocaleString()}</span>
          <span title="Ravens (reposts)">&#9758; {post.ravens.toLocaleString()}</span>
          <button
            type="button"
            onClick={() => onQuill(post.id)}
            className={`transition-colors hover:text-seal ${liked ? "text-seal" : ""}`}
            title="Quill it (like)"
          >
            &#10022; {(post.quills + (liked ? 1 : 0)).toLocaleString()}
          </button>
          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(post.id)}
              className="ml-auto text-xs uppercase tracking-widest hover:text-seal"
            >
              Burn it
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
