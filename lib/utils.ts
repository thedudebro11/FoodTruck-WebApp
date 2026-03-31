import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LiveStatusValue, StaleState } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Status display helpers ───────────────────────────────────────────────────

export const STATUS_CONFIG: Record<
  LiveStatusValue,
  { label: string; color: string; dotColor: string; pulse: boolean }
> = {
  serving_now:  { label: "Serving Now",   color: "text-emerald-400", dotColor: "bg-emerald-400", pulse: true },
  arriving_soon:{ label: "Arriving Soon", color: "text-amber-400",   dotColor: "bg-amber-400",   pulse: true },
  busy:         { label: "Busy",          color: "text-orange-400",  dotColor: "bg-orange-400",  pulse: false },
  sold_out:     { label: "Sold Out",      color: "text-red-400",     dotColor: "bg-red-400",     pulse: false },
  closed_early: { label: "Closed Early",  color: "text-zinc-500",    dotColor: "bg-zinc-500",    pulse: false },
  offline:      { label: "Offline",       color: "text-zinc-600",    dotColor: "bg-zinc-600",    pulse: false },
};

export const STALE_CONFIG: Record<
  StaleState,
  { label: string; show: boolean }
> = {
  fresh:   { label: "",               show: false },
  aging:   { label: "~{n} min ago",   show: true  },
  stale:   { label: "Unconfirmed",    show: true  },
  expired: { label: "May be outdated",show: true  },
};

export function formatLastUpdated(isoString: string): string {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "just now";
  if (diffMin === 1) return "1 min ago";
  return `${diffMin} min ago`;
}
