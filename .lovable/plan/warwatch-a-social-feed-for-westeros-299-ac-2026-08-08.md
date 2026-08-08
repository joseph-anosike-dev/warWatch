# WarWatch — a social feed for Westeros, 299 AC

A humorous but book-canon social network set in the days right after the Red Wedding. Verified high lords and kings post; smallfolk complain about grain prices; a rolling news crawl reports death tolls and burned holdfasts. You pick a POV character and post alongside them.

## The experience

**Feed (home page `/`)**
- Sticky top bar: raven-scroll wordmark, a live "Ravens from the Realm" news ticker of canon headlines (Red Wedding aftermath, Winterfell a ruin, the Mountain foraging in the Riverlands, Tyrion's marriage to Sansa, ironborn holding Moat Cailin, wildlings south of the Wall).
- Chronological post feed. Each post: house sigil avatar, character name, handle (`@kingslayer`), verified mark for kings/lords paramount/Small Council, allegiance tag (Lannister / Stark / Baratheon of Dragonstone / Baratheon of Storm's End / Greyjoy / Tyrell / Martell / Night's Watch / Smallfolk), timestamp in-world ("iii days ago"), body text, and Ravens / Quills / Whispers counters (retweet / like / reply equivalents).
- Filter chips: All, Verified only, War Reports, Grain & Famine, Smallfolk Gossip.
- Right rail: "Kings Remaining" scoreboard (Joffrey, Stannis, Balon just dead by Faceless Man, Robb dead, Renly dead — with a tasteful crossed-out treatment), plus a "Trending in the Riverlands" list.

**Post as a character**
- A character picker in the top bar: choose from a canon roster (Tyrion, Arya, Sansa, Davos, Jon, Cersei, Brienne, Sam, an anonymous Flea Bottom baker, etc.).
- Composer posts to the top of the feed with your chosen persona, correct sigil, verified state, and a maester-ish character counter ("parchment remaining").
- Your posts, likes, and chosen persona persist in browser localStorage — no account needed.

**Profile pages (`/lord/$handle`)**
- Banner with house colours and words, verified badge, "Titles" list (canon, e.g. "Lord of Casterly Rock, Warden of the West" — with a struck-through claim where the war took it), current status line ("Whereabouts: Riverrun, besieged"), and that character's posts.

**News page (`/ravens`)**
- Longer canon-accurate dispatches grouped by theme: death tolls, captured territories, scarcity and famine, and the winter warning from the Citadel.

## Canon guardrails

All content is book-only (A Storm of Swords timeframe, late 299 AC): no show-only events, no show-invented characters, no show-only deaths. Concretely honoured: Balon Greyjoy dead and the kingsmoot brewing, Stannis on Dragonstone before Sam's raven reaches him, Winterfell sacked by Ramsay (not Theon burning it down), the Red Wedding executed by Frey/Bolton/Lannister, Joffrey still alive and betrothed to Margaery, Sansa married to Tyrion, Tywin as Hand, Lady Stoneheart not yet public knowledge. Copy stays wry, never crude — the joke is medieval people using a feed, not modern slang.

## Design direction

Not a generic Twitter clone in blue. Parchment-and-ink: warm aged-vellum background, iron-black text, house colours as accent per post, a blackletter/serif display face for names and headlines paired with a readable serif body, hairline rules instead of card shadows, wax-seal-red verified marks. Sigils generated as small illustrated crests.

## Technical notes

- TanStack Start, no backend. Canon content lives in typed data modules (`src/data/characters.ts`, `posts.ts`, `headlines.ts`).
- Routes: `src/routes/index.tsx` (feed, replaces placeholder), `src/routes/ravens.tsx`, `src/routes/lord.$handle.tsx`, each with its own `head()` metadata.
- User-authored posts, likes and persona in localStorage behind a small `useWarWatch` hook, read after hydration to avoid SSR mismatch.
- Design tokens (parchment palette, fonts, radii) defined in `src/styles.css`; fonts loaded via `<link>` in `__root.tsx`.
- Sigil/crest imagery generated into `src/assets/`.

If you later want real accounts and persistent shared posts, that's a Lovable Cloud add-on — this build stays local.
