import { Link } from "@tanstack/react-router";
import { TICKER } from "@/data/headlines";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-baseline gap-4 px-4 py-3">
        <Link to="/" className="font-display text-2xl font-bold tracking-[0.06em] text-foreground">
          War<span className="text-seal">Watch</span>
        </Link>
        <span className="hidden text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
          The realm, posting &middot; 299 AC
        </span>
        <nav className="ml-auto flex gap-4 font-display text-sm tracking-wide">
          <Link to="/" className="hover:text-seal" activeProps={{ className: "text-seal" }}>
            Feed
          </Link>
          <Link to="/ravens" className="hover:text-seal" activeProps={{ className: "text-seal" }}>
            Ravens
          </Link>
        </nav>
      </div>
      <div className="overflow-hidden border-t border-border bg-vellum-deep">
        <div className="ticker flex w-max gap-10 py-1.5 text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-10">
              {TICKER.map((t) => (
                <span key={t} className="whitespace-nowrap">
                  <span className="text-seal">&#9758;</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
