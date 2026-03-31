"use client";

import { useState, useMemo } from "react";
import { MapView } from "@/components/map/MapView";
import { TruckCard } from "@/components/truck/TruckCard";
import { FilterBar } from "@/components/truck/FilterBar";
import { MOCK_TRUCKS, CUISINE_OPTIONS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import type { ExploreFilters, TruckWithStatus } from "@/types";

export default function ExplorePage() {
  const [filters, setFilters] = useState<ExploreFilters>({
    openNow: false,
    cuisines: [],
    eventOnly: false,
  });
  const [sheetExpanded, setSheetExpanded] = useState(false);

  const filteredTrucks = useMemo<TruckWithStatus[]>(() => {
    return MOCK_TRUCKS.filter((t) => {
      if (filters.openNow && !t.liveStatus.open_now) return false;
      if (
        filters.cuisines.length > 0 &&
        !filters.cuisines.some((c) =>
          t.truck.cuisines.includes(c) || t.truck.primary_cuisine === c
        )
      )
        return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="h-screen bg-surface-bg flex flex-col overflow-hidden">
      {/* ── Top nav ─────────────────────────────────────── */}
      <header className="shrink-0 h-14 flex items-center justify-between px-4 border-b border-surface-border bg-surface-bg z-30">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-white leading-none">
            truckspot
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-body font-semibold rounded bg-brand-500/20 text-brand-400 border border-brand-500/30">
            LIVE
          </span>
        </div>

        {/* Location chip */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-surface-border bg-surface-card text-xs font-body text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 transition-colors">
          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
          </svg>
          Austin, TX
          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </header>

      {/* ── Desktop layout ──────────────────────────────── */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        {/* Left: List panel */}
        <div className="w-[380px] shrink-0 flex flex-col border-r border-surface-border overflow-hidden">
          <div className="px-4 py-3 border-b border-surface-border">
            <FilterBar
              filters={filters}
              availableCuisines={CUISINE_OPTIONS}
              onFiltersChange={setFilters}
              resultCount={filteredTrucks.length}
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <TruckList trucks={filteredTrucks} />
          </div>
        </div>

        {/* Right: Map */}
        <div className="flex-1 relative">
          <MapView trucks={filteredTrucks} />
        </div>
      </div>

      {/* ── Mobile layout ───────────────────────────────── */}
      <div className="flex flex-col flex-1 overflow-hidden md:hidden relative">
        {/* Map fills screen */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-300",
            sheetExpanded ? "bottom-[60vh]" : "bottom-[30vh]"
          )}
        >
          <MapView trucks={filteredTrucks} />
        </div>

        {/* Bottom sheet */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-surface-bg rounded-t-2xl",
            "border-t border-surface-border shadow-xl shadow-black/50",
            "transition-all duration-300 flex flex-col overflow-hidden",
            sheetExpanded ? "h-[60vh]" : "h-[30vh]"
          )}
        >
          {/* Sheet handle */}
          <button
            className="flex-shrink-0 flex flex-col items-center pt-2.5 pb-2"
            onClick={() => setSheetExpanded((p) => !p)}
            aria-label={sheetExpanded ? "Collapse list" : "Expand list"}
          >
            <div className="w-10 h-1 rounded-full bg-surface-muted" />
          </button>

          <div className="px-4 pb-2 shrink-0">
            <FilterBar
              filters={filters}
              availableCuisines={CUISINE_OPTIONS}
              onFiltersChange={setFilters}
              resultCount={filteredTrucks.length}
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            <TruckList trucks={filteredTrucks} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TruckList({ trucks }: { trucks: TruckWithStatus[] }) {
  if (trucks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-40 px-6 text-center">
        <p className="text-zinc-400 font-body text-sm">No trucks match your filters.</p>
        <p className="text-zinc-600 font-body text-xs mt-1">Try removing some filters or zooming out.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2 p-3">
      {trucks.map((t) => (
        <li key={t.truck.id}>
          <TruckCard data={t} />
        </li>
      ))}
    </ul>
  );
}
