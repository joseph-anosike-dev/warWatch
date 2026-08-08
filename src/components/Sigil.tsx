import { HOUSES, type HouseKey } from "@/data/characters";

export function Sigil({ house, size = 44 }: { house: HouseKey; size?: number }) {
  const h = HOUSES[house];
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center border border-border/60 font-display"
      style={{
        width: size,
        height: size,
        background: h.accent,
        color: h.ink,
        fontSize: size * 0.5,
        lineHeight: 1,
        borderRadius: "3px 3px 45% 45% / 3px 3px 30% 30%",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
      }}
    >
      {h.initial}
    </span>
  );
}

export function Verified({ className = "" }: { className?: string }) {
  return (
    <span
      title="Verified by the Citadel"
      className={`inline-flex h-4 w-4 items-center justify-center rounded-full bg-seal text-[9px] font-bold text-seal-foreground ${className}`}
    >
      &#10003;
    </span>
  );
}

export function HouseTag({ house }: { house: HouseKey }) {
  const h = HOUSES[house];
  return (
    <span
      className="rounded-sm px-1.5 py-0.5 text-[10px] uppercase tracking-[0.14em]"
      style={{ background: h.accent, color: h.ink }}
    >
      {h.name}
    </span>
  );
}
