import { useState } from "react";
import { CHARACTERS, getCharacter } from "@/data/characters";
import type { Topic } from "@/data/posts";
import { Sigil, Verified } from "./Sigil";

const LIMIT = 240;

const TOPICS: { value: Topic; label: string }[] = [
  { value: "war", label: "War Report" },
  { value: "famine", label: "Grain & Famine" },
  { value: "gossip", label: "Court Gossip" },
];

export function Composer({
  persona,
  onPersona,
  onPost,
}: {
  persona: string;
  onPersona: (handle: string) => void;
  onPost: (body: string, topic: Topic) => void;
}) {
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState<Topic>("war");
  const me = getCharacter(persona);
  const remaining = LIMIT - body.length;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const trimmed = body.trim();
        if (!trimmed || remaining < 0) return;
        onPost(trimmed, topic);
        setBody("");
      }}
      className="border-b border-border bg-vellum-deep/50 px-4 py-4"
    >
      <div className="flex gap-3">
        {me && <Sigil house={me.house} />}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Posting as
            </label>
            <select
              value={persona}
              onChange={(e) => onPersona(e.target.value)}
              className="rounded-sm border border-border bg-background px-2 py-1 font-display text-sm text-foreground"
            >
              {CHARACTERS.filter((c) => c.playable).map((c) => (
                <option key={c.handle} value={c.handle}>
                  {c.name}
                </option>
              ))}
            </select>
            {me?.verified && <Verified />}
          </div>

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={3}
            placeholder="Send a raven to the realm&hellip;"
            className="mt-3 w-full resize-none border-b border-border bg-transparent pb-2 text-[17px] leading-relaxed text-foreground outline-none placeholder:text-muted-foreground focus:border-seal"
          />

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {TOPICS.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setTopic(t.value)}
                className={`rounded-sm border px-2 py-1 text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  topic === t.value
                    ? "border-seal bg-seal text-seal-foreground"
                    : "border-border text-muted-foreground hover:border-seal"
                }`}
              >
                {t.label}
              </button>
            ))}
            <span
              className={`ml-auto text-xs ${remaining < 0 ? "text-seal" : "text-muted-foreground"}`}
            >
              {remaining} of parchment remaining
            </span>
            <button
              type="submit"
              disabled={!body.trim() || remaining < 0}
              className="rounded-sm bg-seal px-4 py-1.5 font-display text-sm tracking-wide text-seal-foreground transition-opacity disabled:opacity-40"
            >
              Send Raven
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
