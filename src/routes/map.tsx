import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Sigil } from "@/components/Sigil";
import { HOUSES } from "@/data/characters";
import {
  HOLDINGS,
  ISLANDS,
  WALL,
  WALL_END,
  coastPath,
  shieldPath,
  type Holding,
} from "@/data/map";

const TITLE = "Who Holds What \u2014 WarWatch";
const DESCRIPTION =
  "A map of Westeros, late 299 AC: which house holds which castle, keep or city, marked by sigil.";

export const Route = createFileRoute("/map")({
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
  component: RealmMap,
});

function RealmMap() {
  const [sel, setSel] = useState<Holding>(HOLDINGS.find((h) => h.name === "Winterfell") ?? HOLDINGS[0]);
  const house = HOUSES[sel.house];
  const legend = [...new Set(HOLDINGS.map((h) => h.house))].map((k) => HOUSES[k]);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h1 className="font-display text-lg tracking-wide">Who Holds What</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Holdings as reported to the Citadel, late 299 AC. A maester&rsquo;s sketch, not a
              survey; touch a sigil for the report.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
            <div className="border-b border-border p-2 lg:border-b-0 lg:border-r">
              <svg viewBox="0 0 100 165" className="w-full" role="img" aria-label="Map of Westeros, 299 AC">
                {/* land */}
                <path
                  d={coastPath()}
                  fill="var(--vellum-deep)"
                  stroke="var(--muted-foreground)"
                  strokeWidth={0.6}
                  strokeLinejoin="round"
                />
                {ISLANDS.map((i) => (
                  <ellipse
                    key={`${i.cx}-${i.cy}`}
                    cx={i.cx}
                    cy={i.cy}
                    rx={i.rx}
                    ry={i.ry}
                    fill="var(--vellum-deep)"
                    stroke="var(--muted-foreground)"
                    strokeWidth={0.6}
                  />
                ))}
                {/* the Wall */}
                <line
                  x1={WALL[0]}
                  y1={WALL[1]}
                  x2={WALL_END[0]}
                  y2={WALL_END[1]}
                  stroke="var(--foreground)"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                />
                <text x={48} y={14.5} fontSize={2.6} textAnchor="middle" fill="var(--muted-foreground)" letterSpacing={0.4}>
                  THE WALL
                </text>
                {/* compass */}
                <g>
                  <text x={8} y={9} fontSize={5} fill="var(--muted-foreground)">N</text>
                  <line x1={9} y1={16} x2={9} y2={11} stroke="var(--muted-foreground)" strokeWidth={0.5} />
                  <path d="M 9 10.2 L 8.1 12 L 9.9 12 Z" fill="var(--muted-foreground)" />
                </g>
                {/* holdings */}
                {HOLDINGS.map((h) => {
                  const active = h.name === sel.name;
                  const hh = HOUSES[h.house];
                  return (
                    <g
                      key={h.name}
                      onClick={() => setSel(h)}
                      className="cursor-pointer"
                      style={{ outline: "none" }}
                    >
                      <title>{`${h.name} — ${hh.name}`}</title>
                      {active && (
                        <circle cx={h.x} cy={h.y} r={8.5} fill="none" stroke="var(--seal)" strokeWidth={0.5} strokeDasharray="1.5 1.2" />
                      )}
                      <path
                        d={shieldPath(h.x, h.y)}
                        fill={hh.accent}
                        stroke={active ? "var(--seal)" : "var(--foreground)"}
                        strokeWidth={active ? 0.9 : 0.5}
                      />
                      {active && (
                        <text
                          x={h.x}
                          y={h.y + 11}
                          fontSize={3.4}
                          textAnchor="middle"
                          fill="var(--foreground)"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {h.name}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="space-y-4 p-4">
              <div>
                <div className="flex items-center gap-2">
                  <Sigil house={sel.house} size={36} />
                  <div>
                    <h2 className="font-display text-lg tracking-wide">{sel.name}</h2>
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {house.name}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm">{sel.note}</p>
                <p className="mt-2 font-display text-sm text-muted-foreground">
                  &ldquo;{house.words}&rdquo;
                </p>
              </div>

              <div className="border-t border-border pt-3">
                <h3 className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Banners on the map
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {legend.map((h) => (
                    <li key={h.key} className="flex items-center gap-2 text-sm">
                      <span
                        className="inline-block h-3 w-3 rounded-sm"
                        style={{ background: h.accent }}
                        aria-hidden="true"
                      />
                      {h.name}
                      <span className="text-xs text-muted-foreground">
                        &times;{HOLDINGS.filter((x) => x.house === h.key).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
