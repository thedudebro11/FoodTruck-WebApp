"use client";

import { cn } from "@/lib/utils";
import type { ExploreFilters } from "@/types";

interface FilterBarProps {
  filters: ExploreFilters;
  availableCuisines: string[];
  onFiltersChange: (filters: ExploreFilters) => void;
  resultCount: number;
}

export function FilterBar({
  filters,
  availableCuisines,
  onFiltersChange,
  resultCount,
}: FilterBarProps) {
  const toggleOpenNow = () =>
    onFiltersChange({ ...filters, openNow: !filters.openNow });

  const toggleCuisine = (cuisine: string) => {
    const updated = filters.cuisines.includes(cuisine)
      ? filters.cuisines.filter((c) => c !== cuisine)
      : [...filters.cuisines, cuisine];
    onFiltersChange({ ...filters, cuisines: updated });
  };

  const toggleEventOnly = () =>
    onFiltersChange({ ...filters, eventOnly: !filters.eventOnly });

  const hasActiveFilters =
    filters.openNow ||
    filters.cuisines.length > 0 ||
    filters.eventOnly;

  const clearAll = () =>
    onFiltersChange({ openNow: false, cuisines: [], eventOnly: false });

  return (
    <div className="flex flex-col gap-2">
      {/* Scrollable pill row */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
        {/* Open Now toggle */}
        <button
          onClick={toggleOpenNow}
          className={cn(
            "shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold",
            "border transition-all duration-150 whitespace-nowrap",
            filters.openNow
              ? "bg-brand-500 border-brand-500 text-white"
              : "bg-surface-card border-surface-border text-zinc-400 hover:border-zinc-500 hover:text-zinc-300"
          )}
        >
          {filters.openNow && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
          )}
          Open Now
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-surface-border shrink-0" />

        {/* Cuisine filters */}
        {availableCuisines.map((cuisine) => {
          const active = filters.cuisines.includes(cuisine);
          return (
            <button
              key={cuisine}
              onClick={() => toggleCuisine(cuisine)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-body font-medium",
                "border transition-all duration-150 whitespace-nowrap",
                active
                  ? "bg-brand-500/15 border-brand-500/40 text-brand-300"
                  : "bg-surface-card border-surface-border text-zinc-500 hover:text-zinc-300 hover:border-zinc-500"
              )}
            >
              {cuisine}
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-surface-border shrink-0" />

        {/* Events only */}
        <button
          onClick={toggleEventOnly}
          className={cn(
            "shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold",
            "border transition-all duration-150 whitespace-nowrap",
            filters.eventOnly
              ? "bg-purple-600/20 border-purple-500/40 text-purple-300"
              : "bg-surface-card border-surface-border text-zinc-500 hover:text-zinc-300 hover:border-zinc-500"
          )}
        >
          🎪 Events Only
        </button>
      </div>

      {/* Active filter summary */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 text-xs font-body">
          <span className="text-zinc-400">
            {resultCount} {resultCount === 1 ? "truck" : "trucks"} found
          </span>
          <button
            onClick={clearAll}
            className="text-brand-400 hover:text-brand-300 underline underline-offset-2"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
