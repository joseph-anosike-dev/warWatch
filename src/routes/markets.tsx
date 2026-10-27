import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Sparkline } from "@/components/Sparkline";
import { MARKETS, changePct, fmt, type Commodity } from "@/data/markets";

const TITLE = "Markets of the Realm \u2014 WarWatch";
const DESCRIPTION =
  "Prices across Westeros in the War of the Five Kings: bread, steel, sellswords and the coin of rival kings. 299 AC.";

export const Route = createFileRoute("/markets")({
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
  component: Markets,
});

function Change({ pct }: { pct: number }) {
  if (Math.round(pct) === 0) return <span className="text-xs">&mdash; steady</span>;
  const up = pct > 0;
  return (
    <span className={`text-xs ${up ? "text-seal" : "text-muted-foreground"}`}>
      {up ? "\u25B2" : "\u25BC"} {Math.abs(Math.round(pct))}%
    </span>
  );
}

function MainChart({ c }: { c: Commodity }) {
  const W = 320;
  const H = 130;
  const L = 40;
  const R = 10;
  const T = 12;
  const B = 18;
  const min = Math.min(...c.history);
  const max = Math.max(...c.history);
  const pad = (max - min) * 0.1 || max * 0.05 || 1;
  const lo = min - pad;
  const hi = max + pad;
  const n = c.history.length;
  const pts = c.history.map((v, i) => {
    const x = L + (i * (W - L - R)) / (n - 1);
    const y = T + (1 - (v - lo) / (hi - lo)) * (H - T - B);
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const areaPath = `M ${pts[0][0]} ${H - B} L ${line.replace(/ /g, " L ")} L ${
    pts[n - 1][0]
  } ${H - B} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`${c.name} price chart`}>
      {[hi, (hi + lo) / 2, lo].map((v, i) => {
        const y = T + (1 - (v - lo) / (hi - lo)) * (H - T - B);
        return (
          <g key={i}>
            <line x1={L} y1={y} x2={W - R} y2={y} stroke="var(--border)" strokeWidth={0.5} />
            <text x={L - 4} y={y + 2} textAnchor="end" fontSize={6} fill="var(--muted-foreground)">
              {fmt(v)}
            </text>
          </g>
        );
      })}
      <path d={areaPath} fill="var(--vellum-deep)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--seal)"
        strokeWidth={1.4}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={pts[n - 1][0]} cy={pts[n - 1][1]} r={2.4} fill="var(--seal)" />
      <text x={L} y={H - 4} fontSize={6} fill="var(--muted-foreground)">
        the war&rsquo;s start
      </text>
      <text x={W - R} y={H - 4} fontSize={6} textAnchor="end" fill="var(--muted-foreground)">
        today, late 299 AC
      </text>
    </svg>
  );
}

function Markets() {
  const [sel, setSel] = useState(MARKETS[0].id);
  const c = MARKETS.find((m) => m.id === sel) ?? MARKETS[0];
  const pct = changePct(c);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h1 className="font-display text-lg tracking-wide">Markets of the Realm</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Prices as gathered by the Citadel from maesters, harbours, and one very loud baker.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
            <ul className="border-b border-border lg:border-b-0 lg:border-r">
              {MARKETS.map((m) => {
                const active = m.id === c.id;
                return (
                  <li key={m.id}>
                    <button
                      type="button"
                      onClick={() => setSel(m.id)}
                      className={`flex w-full items-center gap-3 border-b border-border px-4 py-3 text-left transition-colors ${
                        active ? "bg-vellum-deep" : "hover:bg-vellum-deep/50"
                      }`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-sm">{m.name}</span>
                        <span className="block text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                          {m.unit}
                        </span>
                      </span>
                      <Sparkline history={m.history} />
                      <span className="w-16 text-right">
                        <span className="block font-display text-sm">{fmt(m.history[m.history.length - 1])}</span>
                        <Change pct={changePct(m)} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="px-4 py-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-xl tracking-wide">{c.name}</h2>
                <span className="text-sm text-muted-foreground">{c.unit}</span>
                <span className="font-display text-2xl text-seal">
                  {fmt(c.history[c.history.length - 1])}
                </span>
                <Change pct={pct} />
              </div>

              <div className="mt-3">
                <MainChart c={c} />
              </div>

              <p className="mt-3 border-t border-border pt-3 text-sm italic text-muted-foreground">
                {c.note}
              </p>

              <h3 className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Where it trades
              </h3>
              <ul className="mt-2 divide-y divide-border">
                {c.quotes.map((q) => (
                  <li key={q.place} className="flex flex-wrap items-baseline gap-x-3 py-2 text-sm">
                    <span className="font-display">{q.place}</span>
                    <span className="text-seal">{fmt(q.price)}</span>
                    {q.note && <span className="text-muted-foreground">&mdash; {q.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
