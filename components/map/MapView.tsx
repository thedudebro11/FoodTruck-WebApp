"use client";

import Link from "next/link";
import { cn, STATUS_CONFIG } from "@/lib/utils";
import type { TruckWithStatus } from "@/types";

interface MapPin {
  id: string;
  slug: string;
  x: number;
  y: number;
  data: TruckWithStatus;
}

interface MapViewProps {
  trucks: TruckWithStatus[];
  selectedTruckId?: string | null;
}

// Deterministic pseudo-random position from truck id
// In production: real lat/lng → Mapbox/Google Maps
function getMapPosition(truck: TruckWithStatus): { x: number; y: number } {
  const seed = truck.truck.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const phi = (1 + Math.sqrt(5)) / 2;
  return {
    x: 8 + ((seed * phi * 37) % 84),
    y: 10 + ((seed * phi * 23) % 75),
  };
}

export function MapView({ trucks, selectedTruckId }: MapViewProps) {
  const pins: MapPin[] = trucks
    .filter((t) => t.liveStatus.status !== "offline")
    .map((t) => ({
      id: t.truck.id,
      slug: t.truck.slug,
      ...getMapPosition(t),
      data: t,
    }));

  return (
    <div className="relative w-full h-full overflow-hidden rounded-none md:rounded-xl bg-[#1c1f26]">
      <MapBackground />

      {/* User location dot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3 h-3 rounded-full bg-blue-400 border-2 border-white shadow-lg shadow-blue-400/50" />
      </div>

      {/* Truck pins — each is a Link */}
      {pins.map((pin) => (
        <TruckPin
          key={pin.id}
          pin={pin}
          isSelected={pin.id === selectedTruckId}
        />
      ))}

      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/40 text-[10px] text-zinc-500 font-body pointer-events-none">
        Map placeholder · Replace with Mapbox
      </div>
    </div>
  );
}

function TruckPin({
  pin,
  isSelected,
}: {
  pin: MapPin;
  isSelected: boolean;
}) {
  const { data } = pin;
  const config = STATUS_CONFIG[data.liveStatus.status];
  const isLive = data.liveStatus.open_now;

  return (
    <Link
      href={`/trucks/${pin.slug}`}
      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
      className={cn(
        "absolute -translate-x-1/2 -translate-y-full z-10",
        "transition-transform duration-200",
        isSelected ? "scale-125 z-20" : "hover:scale-110"
      )}
    >
      <div
        className={cn(
          "relative flex items-center gap-1 px-2 py-1 rounded-full",
          "font-body text-xs font-semibold whitespace-nowrap shadow-lg",
          "border transition-all duration-200",
          isSelected
            ? "bg-brand-500 border-brand-400 text-white shadow-brand-500/40 shadow-xl"
            : isLive
            ? "bg-surface-card border-surface-border text-white"
            : "bg-surface-muted border-surface-border text-zinc-500"
        )}
      >
        {config.pulse && isLive && (
          <span className="relative flex h-1.5 w-1.5">
            <span className={cn("absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping", config.dotColor)} />
            <span className={cn("relative inline-flex rounded-full h-1.5 w-1.5", config.dotColor)} />
          </span>
        )}
        {data.truck.name.split(" ")[0]}
      </div>
      {/* Pin tail */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 w-0 h-0",
          "border-l-[5px] border-r-[5px] border-t-[6px]",
          "border-l-transparent border-r-transparent",
          isSelected ? "border-t-brand-500" : "border-t-surface-card"
        )}
      />
    </Link>
  );
}

function MapBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid-large" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="url(#grid)" />
          <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#4b5563" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-large)" />
      <line x1="0" y1="35%" x2="100%" y2="38%" stroke="#374151" strokeWidth="3" />
      <line x1="0" y1="65%" x2="100%" y2="62%" stroke="#374151" strokeWidth="2" />
      <line x1="30%" y1="0" x2="32%" y2="100%" stroke="#374151" strokeWidth="3" />
      <line x1="65%" y1="0" x2="68%" y2="100%" stroke="#374151" strokeWidth="2" />
      <rect x="0" y="78%" width="25%" height="22%" fill="#1e3a5f" opacity="0.4" rx="4" />
      <rect x="68%" y="20%" width="18%" height="25%" fill="#1a3a1a" opacity="0.5" rx="4" />
    </svg>
  );
}
