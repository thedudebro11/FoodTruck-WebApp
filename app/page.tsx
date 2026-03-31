"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { NavBar } from "@/components/layout/NavBar";
import { MOCK_TRUCKS } from "@/lib/mock-data";
import { StatusBadge } from "@/components/truck/StatusBadge";
import { cn, STATUS_CONFIG, formatLastUpdated } from "@/lib/utils";
import type { TruckWithStatus } from "@/types";

// ─── Live truck count hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, delay = 800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return count;
}

// ─── Ticker items ─────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  { dot: "bg-emerald-400", text: "Smoky Soul BBQ is serving now · Congress Ave" },
  { dot: "bg-orange-400",  text: "Taco Loco is busy — 25 min wait · South Congress" },
  { dot: "bg-emerald-400", text: "Viet Bites just went live · Mueller" },
  { dot: "bg-amber-400",   text: "Seoul Bowl arriving soon · East 6th" },
  { dot: "bg-emerald-400", text: "The Burger Lab just opened · Domain" },
  { dot: "bg-zinc-500",    text: "Napoli Slice sold out for the day" },
  { dot: "bg-emerald-400", text: "Curry Culture is serving now · Rainey St" },
  { dot: "bg-orange-400",  text: "Lobster Me is busy — 15 min wait · 2nd St" },
];
// Duplicate for seamless infinite loop
const TICKER_DOUBLED = [...TICKER_ITEMS, ...TICKER_ITEMS];

// ─── How it works steps ────────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    number: "01",
    title: "See it. Live.",
    body: "Status updates every few minutes from the owner — serving now, arriving soon, busy, or closed. Always know before you go.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Filter fast.",
    body: "Open now. Your cuisine. Within walking distance. Sort by wait time. Find your match in seconds, not scroll-sessions.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get there.",
    body: "One tap opens directions in your maps app. No copying addresses. No Instagram DMs. Just go.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const liveCount = useCountUp(47, 1400, 900);
  const [locationQuery, setLocationQuery] = useState("");

  const liveTrucks = MOCK_TRUCKS.filter((t) => t.liveStatus.open_now);

  return (
    <div className="bg-surface-bg min-h-screen">
      <NavBar transparent />

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative grain-overlay min-h-[100dvh] flex flex-col"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% 100%, rgba(255,118,17,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 82% 15%, rgba(255,188,113,0.07) 0%, transparent 55%),
            #0d0d0d
          `,
        }}
      >
        {/* Live ticker strip */}
        <div className="relative z-10 pt-14 overflow-hidden border-b border-surface-border/50 bg-surface-bg/20 backdrop-blur-sm">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {TICKER_DOUBLED.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-6 text-xs font-body text-zinc-400">
                <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", item.dot)} />
                {item.text}
                <span className="text-zinc-700 mx-2">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-8 pb-20 text-center max-w-5xl mx-auto w-full">
          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-body font-semibold border"
            style={{
              background: "rgba(255,118,17,0.1)",
              borderColor: "rgba(255,118,17,0.3)",
              color: "#ff9438",
              animationDelay: "0ms",
              animationFillMode: "both",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            <span className="tabular-nums">{liveCount}</span>
            <span>trucks live near Austin, TX</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold leading-none tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
          >
            <span
              className="block animate-[fadeInUp_0.6s_ease-out_100ms_both]"
            >
              Find food trucks
            </span>
            <span
              className="block animate-[fadeInUp_0.6s_ease-out_200ms_both]"
              style={{
                backgroundImage: "linear-gradient(135deg, #ff9438 0%, #ff7611 40%, #ffbc71 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              live near you.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-zinc-400 font-body text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.6s_ease-out_300ms_both]"
          >
            Real-time locations. Live status. No more showing up to an empty parking lot.
          </p>

          {/* Search input */}
          <div className="w-full max-w-lg mx-auto mb-4 animate-[fadeInUp_0.6s_ease-out_400ms_both]">
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-brand-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-surface-card border border-surface-border group-focus-within:border-brand-500/50 transition-colors">
                <svg className="h-5 w-5 text-zinc-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  placeholder="Search neighborhood, city, or ZIP..."
                  className="flex-1 bg-transparent text-sm font-body text-white placeholder-zinc-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 animate-[fadeInUp_0.6s_ease-out_500ms_both]">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-surface-border bg-surface-card text-sm font-body font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors">
              <svg className="h-4 w-4 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              Use my location
            </button>
            <Link
              href="/explore"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-body font-semibold transition-all duration-150 shadow-lg shadow-brand-900/30 hover:shadow-brand-900/50 hover:-translate-y-0.5"
            >
              Explore the live map
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-bg to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── 2. LIVE RIGHT NOW ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-body font-semibold text-emerald-400 uppercase tracking-widest">
                  Live now
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Serving near you right now
              </h2>
            </div>
            <Link
              href="/explore"
              className="shrink-0 text-sm font-body text-brand-400 hover:text-brand-300 transition-colors flex items-center gap-1"
            >
              View all
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Horizontal scroll row */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6">
            {MOCK_TRUCKS.map((truck) => (
              <LivePreviewCard key={truck.truck.id} data={truck} />
            ))}
            {/* View all card */}
            <Link
              href="/explore"
              className="shrink-0 w-52 h-full min-h-[148px] rounded-xl border border-dashed border-surface-border bg-surface-card/30 flex flex-col items-center justify-center gap-2 text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              <span className="text-xs font-body font-medium text-center px-4">
                Open live map
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-surface-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <p className="text-xs font-body font-semibold text-brand-500 uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white max-w-lg">
              Stop guessing. Start finding.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.number} className="group">
                {/* Number + divider */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="font-display font-extrabold text-5xl leading-none tabular-nums"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #3a3a3a 0%, #252525 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-surface-border group-hover:bg-brand-500/40 transition-colors" />
                </div>

                {/* Icon */}
                <div className="mb-4 text-brand-500 group-hover:text-brand-400 transition-colors">
                  {step.icon}
                </div>

                {/* Text */}
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-body text-zinc-500 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OWNER CTA ─────────────────────────────────────────────────── */}
      <section className="py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative grain-overlay overflow-hidden rounded-2xl px-8 py-12 sm:px-12 sm:py-16"
            style={{
              background: "linear-gradient(135deg, #c74508 0%, #ff7611 50%, #ff9438 100%)",
            }}
          >
            {/* Background texture blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <p className="text-orange-200/70 text-xs font-body font-semibold uppercase tracking-widest mb-3">
                  For truck owners
                </p>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white leading-tight mb-3">
                  Run your truck smarter.
                </h2>
                <p className="text-orange-100/80 font-body text-sm sm:text-base max-w-md leading-relaxed">
                  Go live in seconds. Keep customers updated without the manual posting. Turn every stop into revenue.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/sign-up"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-700 text-sm font-body font-bold hover:bg-orange-50 transition-colors shadow-xl shadow-orange-900/30 whitespace-nowrap"
                >
                  Claim your truck
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <p className="text-xs text-orange-200/60 font-body text-center">
                  Free to list · No credit card
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOST CTA ──────────────────────────────────────────────────── */}
      <section className="py-4 px-4 sm:px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-surface-border bg-surface-card/30 px-8 py-10 sm:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-body font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                For venues & event organizers
              </p>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                Book food trucks without the chaos.
              </h2>
              <p className="text-zinc-500 font-body text-sm max-w-md leading-relaxed">
                Submit a request, get responses, confirm your vendor. No more DM threads and missed calls.
              </p>
            </div>
            <Link
              href="/sign-up"
              className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl border border-surface-border bg-surface-card hover:border-zinc-500 hover:bg-surface-muted/30 text-sm font-body font-semibold text-zinc-300 hover:text-white transition-all whitespace-nowrap"
            >
              Request a truck
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-surface-border px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display font-bold text-base text-white">truckspot</span>
              <span className="px-1.5 py-0.5 text-[10px] font-body font-semibold rounded bg-brand-500/20 text-brand-400 border border-brand-500/30">
                LIVE
              </span>
            </div>
            <p className="text-xs font-body text-zinc-600">
              Real-time food truck discovery and operations.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "/explore", label: "Explore" },
              { href: "/events",  label: "Events"  },
              { href: "/sign-in", label: "Sign In"  },
              { href: "/sign-up", label: "Sign Up"  },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-body text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs font-body text-zinc-700">
            © {new Date().getFullYear()} Truckspot
          </p>
        </div>
      </footer>
    </div>
  );
}

// ─── Live preview card ─────────────────────────────────────────────────────────
function LivePreviewCard({ data }: { data: TruckWithStatus }) {
  const { truck, liveStatus, distance_miles } = data;
  const config = STATUS_CONFIG[liveStatus.status];
  const isOffline = liveStatus.status === "offline";

  return (
    <Link
      href={`/trucks/${truck.slug}`}
      className={cn(
        "shrink-0 w-52 rounded-xl border bg-surface-card p-4 flex flex-col gap-3",
        "hover:border-surface-muted transition-all duration-200 hover:-translate-y-0.5",
        isOffline ? "border-surface-border opacity-50" : "border-surface-border hover:bg-surface-muted/20"
      )}
    >
      {/* Avatar */}
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "h-10 w-10 rounded-lg flex items-center justify-center font-display font-bold text-base",
            isOffline
              ? "bg-surface-muted text-zinc-600"
              : "bg-brand-500/10 text-brand-400 border border-brand-500/20"
          )}
        >
          {truck.name.charAt(0)}
        </div>
        {truck.is_verified && (
          <svg className="h-4 w-4 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
        )}
      </div>

      {/* Name + cuisine */}
      <div>
        <p className={cn("font-display font-semibold text-sm leading-snug truncate", isOffline ? "text-zinc-500" : "text-white")}>
          {truck.name}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-xs font-body text-zinc-500">{truck.primary_cuisine}</span>
          {distance_miles !== null && (
            <>
              <span className="text-zinc-700 text-xs">·</span>
              <span className="text-xs font-body text-zinc-500">
                {distance_miles < 1
                  ? `${Math.round(distance_miles * 5280)} ft`
                  : `${distance_miles.toFixed(1)} mi`}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Status */}
      <div className="mt-auto">
        <StatusBadge liveStatus={liveStatus} size="sm" />
        {liveStatus.open_now && liveStatus.location_name && (
          <p className="text-[11px] font-body text-zinc-600 mt-1.5 truncate">
            📍 {liveStatus.location_name}
          </p>
        )}
        <p className="text-[10px] font-body text-zinc-700 mt-1">
          {formatLastUpdated(liveStatus.last_updated_at)}
        </p>
      </div>
    </Link>
  );
}
