"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_TRUCKS, MOCK_MENUS, MOCK_SCHEDULES } from "@/lib/mock-data";
import { StatusBadge } from "@/components/truck/StatusBadge";
import { cn, STATUS_CONFIG, STALE_CONFIG, formatLastUpdated } from "@/lib/utils";
import type { TruckWithStatus, TruckMenu, TruckScheduleStop } from "@/types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatScheduleDate(iso: string): string {
  const d = new Date(iso);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (d.toDateString() === today.toDateString()) return "Today";
  if (d.toDateString() === tomorrow.toDateString()) return "Tomorrow";

  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2).replace(".00", "")}`;
}

function getDirectionsUrl(lat: number | null, lng: number | null, address: string | null): string {
  if (lat && lng) return `https://maps.google.com/?q=${lat},${lng}`;
  if (address) return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  return "https://maps.google.com/";
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TruckDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const entry = MOCK_TRUCKS.find((t) => t.truck.slug === slug);

  if (!entry) notFound();

  const { truck, liveStatus, distance_miles } = entry as TruckWithStatus;
  const menu: TruckMenu | undefined = MOCK_MENUS[truck.id];
  const schedule: TruckScheduleStop[] = MOCK_SCHEDULES[truck.id] ?? [];
  const featuredItems = menu?.categories.flatMap((c) => c.items).filter((i) => i.is_featured) ?? [];

  const [followed, setFollowed] = useState(false);

  const isLive = liveStatus.open_now;
  const isStale = liveStatus.stale_state === "stale" || liveStatus.stale_state === "expired";
  const staleConfig = STALE_CONFIG[liveStatus.stale_state];
  const statusConfig = STATUS_CONFIG[liveStatus.status];

  const directionsUrl = getDirectionsUrl(
    liveStatus.latitude,
    liveStatus.longitude,
    liveStatus.address_line1
      ? `${liveStatus.address_line1}, ${liveStatus.city ?? ""} TX`
      : null
  );

  // Next scheduled stop (first future stop)
  const nextStop = schedule.find((s) => new Date(s.start_time) > new Date());

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* ── Sticky top bar ─────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-surface-bg/90 backdrop-blur-md border-b border-surface-border">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link
            href="/explore"
            className="flex items-center gap-1.5 text-sm font-body text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            Explore
          </Link>

          <p className="font-display font-semibold text-sm text-white truncate">{truck.name}</p>

          {/* Desktop follow + directions */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => setFollowed((p) => !p)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-semibold border transition-all",
                followed
                  ? "bg-brand-500/10 border-brand-500/40 text-brand-400"
                  : "bg-surface-card border-surface-border text-zinc-400 hover:text-white hover:border-zinc-500"
              )}
            >
              {followed ? (
                <>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-2.184C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                  </svg>
                  Following
                </>
              ) : (
                <>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  Follow
                </>
              )}
            </button>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-body font-semibold",
                "bg-brand-500 hover:bg-brand-600 text-white transition-colors"
              )}
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.452 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.5 4.683l5 2.068v8.572l-5-2.069V4.683zm-1.5.099L3 6.02v8.573l3-1.241V4.782zm8 .099v8.573l3 1.242V6.124l-3-1.242z" clipRule="evenodd" />
              </svg>
              Directions
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-32 sm:pb-8">

        {/* ── Hero section ─────────────────────────────── */}
        <div
          className="relative grain-overlay rounded-xl mt-4 overflow-hidden px-6 py-8"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 100%, rgba(255,118,17,0.15) 0%, transparent 65%),
              radial-gradient(ellipse 40% 50% at 90% 0%, rgba(255,188,113,0.08) 0%, transparent 55%),
              #1a1a1a
            `,
          }}
        >
          <div className="relative z-10 flex items-start gap-5">
            {/* Avatar */}
            <div
              className={cn(
                "h-16 w-16 rounded-xl shrink-0 flex items-center justify-center",
                "font-display font-extrabold text-2xl border",
                liveStatus.status === "offline"
                  ? "bg-surface-muted border-surface-border text-zinc-600"
                  : "bg-brand-500/15 border-brand-500/30 text-brand-400"
              )}
            >
              {truck.name.charAt(0)}
            </div>

            {/* Identity */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="font-display font-bold text-2xl text-white leading-tight">
                  {truck.name}
                </h1>
                {truck.is_verified && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-400 text-xs font-body font-semibold">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>

              {/* Cuisine tags */}
              <div className="flex items-center gap-1.5 flex-wrap mb-3">
                {truck.cuisines.map((c) => (
                  <span key={c} className="px-2 py-0.5 rounded-full bg-surface-muted text-zinc-400 text-xs font-body">
                    {c}
                  </span>
                ))}
              </div>

              {truck.description && (
                <p className="text-sm font-body text-zinc-400 leading-relaxed">{truck.description}</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Stale warning ────────────────────────────── */}
        {isStale && (
          <div className="mt-3 flex items-start gap-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/25">
            <svg className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-xs font-body font-semibold text-amber-400">Status unconfirmed</p>
              <p className="text-xs font-body text-amber-400/70 mt-0.5">
                Last updated {formatLastUpdated(liveStatus.last_updated_at)}. This may not reflect current status.
              </p>
            </div>
          </div>
        )}

        {/* ── Live status block ────────────────────────── */}
        <div className="mt-3 rounded-xl border border-surface-border bg-surface-card p-4">
          <div className="flex items-center justify-between mb-3">
            <StatusBadge liveStatus={liveStatus} />
            <span className="text-xs font-body text-zinc-600">
              {formatLastUpdated(liveStatus.last_updated_at)}
            </span>
          </div>

          {/* Live location details */}
          {isLive && liveStatus.location_name && (
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-body font-medium text-white">{liveStatus.location_name}</p>
                  {liveStatus.address_line1 && (
                    <p className="text-xs font-body text-zinc-500 mt-0.5">
                      {liveStatus.address_line1}, {liveStatus.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Hours + wait */}
              <div className="flex items-center gap-4 pt-1">
                {liveStatus.start_time && liveStatus.end_time && (
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-zinc-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-body text-zinc-400">
                      {formatTime(liveStatus.start_time)} – {formatTime(liveStatus.end_time)}
                    </span>
                  </div>
                )}
                {liveStatus.wait_time_minutes !== null && (
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-zinc-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-body text-zinc-400">
                      ~{liveStatus.wait_time_minutes} min wait
                    </span>
                  </div>
                )}
                {distance_miles !== null && (
                  <span className="text-xs font-body text-zinc-500">
                    {distance_miles < 1
                      ? `${Math.round(distance_miles * 5280)} ft away`
                      : `${distance_miles.toFixed(1)} mi away`}
                  </span>
                )}
              </div>

              {/* Directions button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-muted hover:bg-surface-border text-sm font-body font-semibold text-white transition-colors border border-surface-border"
              >
                <svg className="h-4 w-4 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.452 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.5 4.683l5 2.068v8.572l-5-2.069V4.683zm-1.5.099L3 6.02v8.573l3-1.241V4.782zm8 .099v8.573l3 1.242V6.124l-3-1.242z" clipRule="evenodd" />
                </svg>
                Get Directions
                <svg className="h-3.5 w-3.5 text-zinc-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          )}

          {/* Not live — show next stop if available */}
          {!isLive && nextStop && (
            <div className="mt-1 flex items-start gap-2 pt-1">
              <svg className="h-4 w-4 text-zinc-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-xs font-body text-zinc-500 mb-0.5">Next stop</p>
                <p className="text-sm font-body font-medium text-zinc-300">{nextStop.venue_name}</p>
                <p className="text-xs font-body text-zinc-500 mt-0.5">
                  {formatScheduleDate(nextStop.start_time)} · {formatTime(nextStop.start_time)} – {formatTime(nextStop.end_time)}
                </p>
              </div>
            </div>
          )}

          {/* Offline with no next stop */}
          {!isLive && !nextStop && (
            <p className="text-xs font-body text-zinc-600 mt-1">
              No upcoming stops scheduled.
            </p>
          )}
        </div>

        {/* ── Mini map placeholder ─────────────────────── */}
        {isLive && (
          <div className="mt-3 rounded-xl overflow-hidden border border-surface-border h-40 relative bg-[#1c1f26]">
            <MiniMapPlaceholder truckName={truck.name} locationName={liveStatus.location_name} />
          </div>
        )}

        {/* ── Menu preview ─────────────────────────────── */}
        {menu && (
          <section className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display font-bold text-lg text-white">Menu</h2>
            </div>

            {featuredItems.length > 0 && (
              <>
                <p className="text-xs font-body font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                  Featured
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {featuredItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-card border border-surface-border"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-body font-semibold text-white truncate">{item.name}</p>
                          {!item.is_available && (
                            <span className="text-[10px] font-body text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded-full shrink-0">
                              Sold out
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs font-body text-zinc-500 mt-0.5 line-clamp-2">{item.description}</p>
                        )}
                      </div>
                      <p className="text-sm font-body font-bold text-brand-400 shrink-0">
                        {formatPrice(item.price_cents)}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Full menu by category */}
            <div className="space-y-4">
              {menu.categories.map((cat) => (
                <div key={cat.name}>
                  <p className="text-xs font-body font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    {cat.name}
                  </p>
                  <div className="space-y-1.5">
                    {cat.items.map((item) => (
                      <div
                        key={item.id}
                        className={cn(
                          "flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg",
                          "bg-surface-card border border-surface-border",
                          !item.is_available && "opacity-50"
                        )}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-body text-white truncate">{item.name}</p>
                            {!item.is_available && (
                              <span className="text-[10px] font-body text-red-400 shrink-0">Sold out</span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs font-body text-zinc-600 mt-0.5 truncate">{item.description}</p>
                          )}
                        </div>
                        <p className="text-sm font-body font-semibold text-zinc-300 shrink-0">
                          {formatPrice(item.price_cents)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Upcoming schedule ────────────────────────── */}
        {schedule.length > 0 && (
          <section className="mt-6">
            <h2 className="font-display font-bold text-lg text-white mb-3">Upcoming Stops</h2>
            <div className="space-y-2">
              {schedule.map((stop) => (
                <div
                  key={stop.id}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl bg-surface-card border border-surface-border"
                >
                  {/* Date block */}
                  <div className="shrink-0 text-center w-12">
                    <p className="text-[10px] font-body font-semibold text-zinc-500 uppercase">
                      {new Date(stop.start_time).toLocaleDateString("en-US", { weekday: "short" })}
                    </p>
                    <p className="font-display font-bold text-lg text-white leading-tight">
                      {new Date(stop.start_time).getDate()}
                    </p>
                  </div>
                  <div className="w-px self-stretch bg-surface-border shrink-0" />
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-body font-medium text-white truncate">{stop.venue_name}</p>
                    <p className="text-xs font-body text-zinc-500 mt-0.5">
                      {stop.address_line1}, {stop.city}
                    </p>
                    <p className="text-xs font-body text-zinc-600 mt-1">
                      {formatTime(stop.start_time)} – {formatTime(stop.end_time)}
                    </p>
                    {stop.notes && (
                      <p className="text-xs font-body text-brand-400 mt-1">{stop.notes}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── About / contact / social ─────────────────── */}
        <section className="mt-6 rounded-xl border border-surface-border bg-surface-card p-4 space-y-3">
          <h2 className="font-display font-bold text-base text-white">About & Contact</h2>

          <div className="space-y-2.5">
            {truck.phone && (
              <ContactRow
                icon={<PhoneIcon />}
                label={truck.phone}
                href={`tel:${truck.phone.replace(/\D/g, "")}`}
              />
            )}
            {truck.email && (
              <ContactRow
                icon={<EmailIcon />}
                label={truck.email}
                href={`mailto:${truck.email}`}
              />
            )}
            {truck.website_url && (
              <ContactRow
                icon={<WebIcon />}
                label="Website"
                href={truck.website_url}
                external
              />
            )}
            {truck.instagram_url && (
              <ContactRow
                icon={<InstagramIcon />}
                label="Instagram"
                href={truck.instagram_url}
                external
              />
            )}
            {truck.facebook_url && (
              <ContactRow
                icon={<FacebookIcon />}
                label="Facebook"
                href={truck.facebook_url}
                external
              />
            )}
          </div>

          <div className="pt-1 border-t border-surface-border">
            <p className="text-xs font-body text-zinc-600">
              Based in {truck.city}, {truck.state}
            </p>
          </div>
        </section>
      </div>

      {/* ── Mobile sticky bottom actions ─────────────── */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-surface-bg/95 backdrop-blur-md border-t border-surface-border px-4 py-3 flex gap-3">
        <button
          onClick={() => setFollowed((p) => !p)}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-body font-semibold border transition-all",
            followed
              ? "bg-brand-500/10 border-brand-500/40 text-brand-400"
              : "bg-surface-card border-surface-border text-zinc-300"
          )}
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill={followed ? "currentColor" : "none"} stroke="currentColor" strokeWidth={followed ? 0 : 1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          {followed ? "Following" : "Follow"}
        </button>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-body font-semibold transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.452 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.5 4.683l5 2.068v8.572l-5-2.069V4.683zm-1.5.099L3 6.02v8.573l3-1.241V4.782zm8 .099v8.573l3 1.242V6.124l-3-1.242z" clipRule="evenodd" />
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
}

// ─── Mini map placeholder ─────────────────────────────────────────────────────
function MiniMapPlaceholder({
  truckName,
  locationName,
}: {
  truckName: string;
  locationName: string | null;
}) {
  return (
    <>
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mini-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#374151" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mini-grid)" />
        <line x1="0" y1="45%" x2="100%" y2="48%" stroke="#374151" strokeWidth="2" />
        <line x1="40%" y1="0" x2="42%" y2="100%" stroke="#374151" strokeWidth="2" />
      </svg>
      {/* Pin */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center">
          <div className="px-3 py-1.5 rounded-full bg-brand-500 text-white text-xs font-body font-semibold shadow-lg shadow-brand-900/40">
            {truckName.split(" ")[0]}
          </div>
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-brand-500" />
        </div>
      </div>
      {locationName && (
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/50 text-[10px] text-zinc-400 font-body">
          {locationName}
        </div>
      )}
      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/50 text-[10px] text-zinc-500 font-body">
        Map placeholder
      </div>
    </>
  );
}

// ─── Contact row ──────────────────────────────────────────────────────────────
function ContactRow({
  icon,
  label,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2.5 text-sm font-body text-zinc-400 hover:text-white transition-colors group"
    >
      <span className="h-7 w-7 rounded-lg bg-surface-muted flex items-center justify-center text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0">
        {icon}
      </span>
      <span className="truncate">{label}</span>
      {external && (
        <svg className="h-3 w-3 text-zinc-600 shrink-0 ml-auto" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
        </svg>
      )}
    </a>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
  );
}
function WebIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
