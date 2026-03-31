"use client";

import Link from "next/link";
import { cn, formatLastUpdated, STATUS_CONFIG } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";
import type { TruckWithStatus } from "@/types";

interface TruckCardProps {
  data: TruckWithStatus;
  /** Highlights the card — used on explore to sync with map pin */
  isSelected?: boolean;
  /** Extra click handler (e.g. map sync) — card always navigates to detail */
  onClick?: () => void;
}

export function TruckCard({ data, isSelected, onClick }: TruckCardProps) {
  const { truck, liveStatus, distance_miles } = data;
  const isLive = liveStatus.open_now;
  const isOffline = liveStatus.status === "offline";

  return (
    <Link
      href={`/trucks/${truck.slug}`}
      onClick={onClick}
      className={cn(
        "block w-full rounded-xl border transition-all duration-200",
        "bg-surface-card hover:bg-surface-muted/40",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        isSelected
          ? "border-brand-500 shadow-[0_0_0_1px] shadow-brand-500/30"
          : "border-surface-border hover:border-surface-muted"
      )}
    >
      <div className="flex items-start gap-3 p-3.5">
        {/* Avatar / Cuisine initial */}
        <div
          className={cn(
            "h-12 w-12 rounded-lg shrink-0 flex items-center justify-center",
            "font-display font-bold text-lg",
            isOffline
              ? "bg-surface-muted text-zinc-600"
              : "bg-brand-500/10 text-brand-400 border border-brand-500/20"
          )}
        >
          {truck.name.charAt(0)}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Name + verified */}
          <div className="flex items-center gap-1.5 mb-0.5">
            <span
              className={cn(
                "font-display font-semibold text-sm leading-tight truncate",
                isOffline ? "text-zinc-500" : "text-white"
              )}
            >
              {truck.name}
            </span>
            {truck.is_verified && (
              <svg className="h-3.5 w-3.5 text-brand-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            )}
          </div>

          {/* Cuisine + distance */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-zinc-500 font-body">{truck.primary_cuisine}</span>
            {distance_miles !== null && (
              <>
                <span className="text-zinc-700">·</span>
                <span className="text-xs text-zinc-500 font-body">
                  {distance_miles < 1
                    ? `${Math.round(distance_miles * 5280)} ft`
                    : `${distance_miles.toFixed(1)} mi`}
                </span>
              </>
            )}
          </div>

          {/* Status badge */}
          <StatusBadge liveStatus={liveStatus} size="sm" />
        </div>

        {/* Right side: wait time or chevron */}
        <div className="shrink-0 flex flex-col items-end gap-1 self-center">
          {isLive && liveStatus.wait_time_minutes !== null ? (
            <div className="text-right">
              <p className="text-base font-display font-bold text-white leading-none">
                {liveStatus.wait_time_minutes}m
              </p>
              <p className="text-[10px] text-zinc-500 font-body mt-0.5">wait</p>
            </div>
          ) : (
            <svg className="h-4 w-4 text-zinc-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* Location strip — only for live trucks */}
      {isLive && liveStatus.location_name && (
        <div className="px-3.5 pb-3 flex items-center gap-1.5">
          <svg className="h-3 w-3 text-brand-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
          </svg>
          <span className="text-[11px] text-zinc-500 font-body truncate">{liveStatus.location_name}</span>
          <span className="text-[11px] text-zinc-600 font-body ml-auto shrink-0">
            {formatLastUpdated(liveStatus.last_updated_at)}
          </span>
        </div>
      )}
    </Link>
  );
}
