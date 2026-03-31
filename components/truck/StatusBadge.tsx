"use client";

import { cn, STATUS_CONFIG, formatLastUpdated } from "@/lib/utils";
import type { TruckLiveStatus } from "@/types";

interface StatusBadgeProps {
  liveStatus: TruckLiveStatus;
  size?: "sm" | "md";
}

export function StatusBadge({ liveStatus, size = "md" }: StatusBadgeProps) {
  const config = STATUS_CONFIG[liveStatus.status];
  const isSm = size === "sm";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-body font-semibold",
        isSm ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
        "bg-surface-muted/60 border border-surface-border"
      )}
    >
      {/* Live pulse dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        {config.pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
              config.dotColor
            )}
          />
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            config.dotColor
          )}
        />
      </span>
      <span className={config.color}>{config.label}</span>
      {liveStatus.stale_state !== "fresh" && !isSm && (
        <span className="text-zinc-500 font-normal ml-0.5">
          · {liveStatus.stale_state === "stale" || liveStatus.stale_state === "expired"
            ? "unconfirmed"
            : formatLastUpdated(liveStatus.last_updated_at)}
        </span>
      )}
    </span>
  );
}
