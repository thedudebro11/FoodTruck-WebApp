import { z } from "zod";
import type { LiveStatusValue } from "@/types";

// Statuses available when going live — excludes "offline" (that's going offline)
export const LIVE_STATUSES = [
  "serving_now",
  "arriving_soon",
  "busy",
  "sold_out",
  "closed_early",
] as const satisfies readonly LiveStatusValue[];

export type LiveStatus = (typeof LIVE_STATUSES)[number];

export const LIVE_STATUS_META: Record<
  LiveStatus,
  { label: string; hint: string; color: string; bg: string; border: string; dot: string }
> = {
  serving_now: {
    label: "Serving Now",
    hint: "Open and ready",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/40",
    dot: "bg-emerald-400",
  },
  arriving_soon: {
    label: "Arriving Soon",
    hint: "On my way",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/40",
    dot: "bg-amber-400",
  },
  busy: {
    label: "Busy",
    hint: "Long wait expected",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/40",
    dot: "bg-orange-400",
  },
  sold_out: {
    label: "Sold Out",
    hint: "Done for today",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/40",
    dot: "bg-red-400",
  },
  closed_early: {
    label: "Closed Early",
    hint: "Closing now",
    color: "text-zinc-400",
    bg: "bg-zinc-500/10",
    border: "border-zinc-500/30",
    dot: "bg-zinc-500",
  },
};

export const WAIT_TIME_OPTIONS = [5, 10, 15, 20, 30] as const;

// ─── Go Live form schema ──────────────────────────────────────────────────────
export const goLiveSchema = z.object({
  status: z.enum(LIVE_STATUSES, { error: "Select a status" }),
  venue_name: z.string().min(1, "Venue name is required").max(120),
  address_line1: z.string().min(1, "Address is required").max(200),
  city: z.string().min(1, "City is required").max(100),
  start_time: z.string().min(1, "Start time is required"),
  end_time: z.string().min(1, "End time is required"),
  wait_time_minutes: z.number().int().min(1).max(180).nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
});

export type GoLiveValues = z.infer<typeof goLiveSchema>;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns default start (now rounded up to next 30 min) and end (+3h) as HH:MM */
export function getDefaultTimes(): { start: string; end: string } {
  const now = new Date();
  const mins = now.getMinutes();
  const rounded = Math.ceil(mins / 30) * 30;
  now.setMinutes(rounded, 0, 0);

  const pad = (n: number) => String(n).padStart(2, "0");
  const start = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  const endDate = new Date(now.getTime() + 3 * 60 * 60 * 1000);
  const end = `${pad(endDate.getHours())}:${pad(endDate.getMinutes())}`;

  return { start, end };
}

/** Convert HH:MM string to 12-hour display e.g. "11:00" → "11:00 AM" */
export function formatTimeDisplay(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}
