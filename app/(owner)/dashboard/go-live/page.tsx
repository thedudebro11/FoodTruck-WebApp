"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { goLiveSchema, LIVE_STATUSES, LIVE_STATUS_META, WAIT_TIME_OPTIONS, getDefaultTimes, formatTimeDisplay, type GoLiveValues, type LiveStatus } from "@/lib/validators/go-live";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof GoLiveValues, string>>;
type PageState = "form" | "publishing" | "live";

// ─── Placeholder truck for owner context ─────────────────────────────────────
// TODO: replace with real authenticated owner's truck from Supabase
const OWNER_TRUCK = { name: "Smoky Soul BBQ", primary_cuisine: "BBQ" };

export default function GoLivePage() {
  const defaults = getDefaultTimes();

  const [pageState, setPageState] = useState<PageState>("form");
  const [values, setValues] = useState<Partial<GoLiveValues>>({
    status: "serving_now",
    venue_name: "",
    address_line1: "",
    city: "",
    start_time: defaults.start,
    end_time: defaults.end,
    wait_time_minutes: null,
    latitude: null,
    longitude: null,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState(false);
  const [geoState, setGeoState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [publishedValues, setPublishedValues] = useState<GoLiveValues | null>(null);

  const set = <K extends keyof GoLiveValues>(field: K, value: GoLiveValues[K]) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched) validate(next);
  };

  const validate = (v = values): boolean => {
    const result = goLiveSchema.safeParse(v);
    if (!result.success) {
      const errs: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof GoLiveValues;
        if (!errs[key]) errs[key] = issue.message;
      });
      setErrors(errs);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleGeolocate = useCallback(() => {
    if (!navigator.geolocation) {
      setGeoState("error");
      return;
    }
    setGeoState("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setValues((v) => ({
          ...v,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }));
        setGeoState("success");
      },
      () => setGeoState("error"),
      { timeout: 8000, maximumAge: 60000 }
    );
  }, []);

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!validate()) return;

    setPageState("publishing");
    // ── TODO: replace with Supabase upsert to truck_live_status ──────────────
    await new Promise((r) => setTimeout(r, 1200));
    setPublishedValues(values as GoLiveValues);
    setPageState("live");
  };

  const handleGoOffline = async () => {
    setPageState("publishing");
    await new Promise((r) => setTimeout(r, 800));
    // Reset to blank form
    const d = getDefaultTimes();
    setValues({ status: "serving_now", venue_name: "", address_line1: "", city: "", start_time: d.start, end_time: d.end, wait_time_minutes: null, latitude: null, longitude: null });
    setPublishedValues(null);
    setTouched(false);
    setErrors({});
    setGeoState("idle");
    setPageState("form");
  };

  // ── Publishing overlay ────────────────────────────────────────────────────
  if (pageState === "publishing") {
    return <PublishingOverlay />;
  }

  // ── Live / success state ──────────────────────────────────────────────────
  if (pageState === "live" && publishedValues) {
    return (
      <LiveSuccessScreen
        truck={OWNER_TRUCK}
        values={publishedValues}
        onGoOffline={handleGoOffline}
        onUpdateStatus={() => setPageState("form")}
      />
    );
  }

  // ── Go Live form ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-surface-bg/90 backdrop-blur-md border-b border-surface-border">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-body text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            Dashboard
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm text-white">{OWNER_TRUCK.name}</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-700 text-zinc-400 text-[10px] font-body">OFFLINE</span>
          </div>
        </div>
      </div>

      <form onSubmit={handlePublish} noValidate>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 pb-32">

          {/* Page title */}
          <div>
            <h1 className="font-display font-bold text-2xl text-white">Go Live</h1>
            <p className="text-sm font-body text-zinc-500 mt-1">
              Publish your current status so customers can find you now.
            </p>
          </div>

          {/* ── 1. Status selector ────────────────────────── */}
          <Section title="What's your status?">
            <div className="grid grid-cols-2 gap-2">
              {LIVE_STATUSES.map((status) => {
                const meta = LIVE_STATUS_META[status];
                const active = values.status === status;
                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => set("status", status)}
                    className={cn(
                      "flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-150",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                      active
                        ? `${meta.bg} ${meta.border}`
                        : "bg-surface-card border-surface-border hover:border-surface-muted"
                    )}
                  >
                    <span className={cn("relative flex h-2.5 w-2.5 mt-1 shrink-0")}>
                      {active && (
                        <span className={cn("absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping", meta.dot)} />
                      )}
                      <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", active ? meta.dot : "bg-surface-muted")} />
                    </span>
                    <div>
                      <p className={cn("text-sm font-body font-semibold", active ? meta.color : "text-zinc-400")}>
                        {meta.label}
                      </p>
                      <p className="text-xs font-body text-zinc-600 mt-0.5">{meta.hint}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            {errors.status && <FieldError msg={errors.status} />}
          </Section>

          {/* ── 2. Location ───────────────────────────────── */}
          <Section title="Where are you?">
            {/* GPS button */}
            <button
              type="button"
              onClick={handleGeolocate}
              disabled={geoState === "loading"}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-body font-semibold transition-all",
                geoState === "success"
                  ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                  : geoState === "error"
                  ? "bg-red-500/10 border-red-500/30 text-red-400"
                  : "bg-surface-card border-surface-border text-zinc-300 hover:border-zinc-500 hover:text-white"
              )}
            >
              {geoState === "loading" ? (
                <>
                  <GeoSpinner />
                  Getting your location...
                </>
              ) : geoState === "success" ? (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Location captured
                  <span className="text-emerald-600 font-normal ml-auto text-xs">
                    {values.latitude?.toFixed(4)}, {values.longitude?.toFixed(4)}
                  </span>
                </>
              ) : geoState === "error" ? (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                  Location unavailable — enter manually
                </>
              ) : (
                <>
                  <svg className="h-4 w-4 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                  </svg>
                  Use my location
                </>
              )}
            </button>

            <div className="mt-3 space-y-3">
              <FormField
                label="Venue / location name"
                placeholder="e.g. Congress Ave & 6th St"
                value={values.venue_name ?? ""}
                onChange={(v) => set("venue_name", v)}
                error={errors.venue_name}
                hint="What customers will see as the location"
              />
              <FormField
                label="Street address"
                placeholder="e.g. 600 Congress Ave"
                value={values.address_line1 ?? ""}
                onChange={(v) => set("address_line1", v)}
                error={errors.address_line1}
              />
              <FormField
                label="City"
                placeholder="e.g. Austin"
                value={values.city ?? ""}
                onChange={(v) => set("city", v)}
                error={errors.city}
              />
            </div>
          </Section>

          {/* ── 3. Hours ──────────────────────────────────── */}
          <Section title="Hours today">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-body font-semibold text-zinc-400 mb-1.5">
                  Start time
                </label>
                <input
                  type="time"
                  value={values.start_time ?? ""}
                  onChange={(e) => set("start_time", e.target.value)}
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-xl text-sm font-body text-white",
                    "bg-surface-card border outline-none transition-all",
                    "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15",
                    "[color-scheme:dark]",
                    errors.start_time ? "border-red-500/50" : "border-surface-border"
                  )}
                />
                {errors.start_time && <FieldError msg={errors.start_time} />}
              </div>
              <div>
                <label className="block text-xs font-body font-semibold text-zinc-400 mb-1.5">
                  End time
                </label>
                <input
                  type="time"
                  value={values.end_time ?? ""}
                  onChange={(e) => set("end_time", e.target.value)}
                  className={cn(
                    "w-full px-3.5 py-2.5 rounded-xl text-sm font-body text-white",
                    "bg-surface-card border outline-none transition-all",
                    "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15",
                    "[color-scheme:dark]",
                    errors.end_time ? "border-red-500/50" : "border-surface-border"
                  )}
                />
                {errors.end_time && <FieldError msg={errors.end_time} />}
              </div>
            </div>
          </Section>

          {/* ── 4. Wait time ──────────────────────────────── */}
          <Section title="Wait time" optional>
            <div className="flex flex-wrap gap-2">
              {WAIT_TIME_OPTIONS.map((mins) => {
                const active = values.wait_time_minutes === mins;
                return (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => set("wait_time_minutes", active ? null : mins)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-body font-semibold border transition-all",
                      active
                        ? "bg-brand-500/15 border-brand-500/40 text-brand-400"
                        : "bg-surface-card border-surface-border text-zinc-500 hover:text-zinc-300 hover:border-zinc-500"
                    )}
                  >
                    {mins} min
                  </button>
                );
              })}
              {values.wait_time_minutes !== null && (
                <button
                  type="button"
                  onClick={() => set("wait_time_minutes", null)}
                  className="px-4 py-2 rounded-full text-sm font-body text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="text-xs font-body text-zinc-600 mt-2">
              Shown to customers so they can plan ahead.
            </p>
          </Section>

          {/* ── 5. Public preview ─────────────────────────── */}
          <Section title="Customer preview">
            <p className="text-xs font-body text-zinc-600 mb-3">
              This is how your truck will appear on the live map.
            </p>
            <PublicPreview truck={OWNER_TRUCK} values={values} />
          </Section>
        </div>

        {/* ── Sticky publish bar ─────────────────────────── */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-bg/95 backdrop-blur-md border-t border-surface-border px-4 py-3">
          <div className="max-w-2xl mx-auto flex gap-3">
            <button
              type="submit"
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl",
                "bg-brand-500 hover:bg-brand-600 text-white font-body font-bold text-sm",
                "transition-all shadow-lg shadow-brand-900/30 hover:-translate-y-0.5 hover:shadow-brand-900/50"
              )}
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.105 2.288a.75.75 0 00-.826.95l1.414 4.926A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.897 28.897 0 0015.293-7.155.75.75 0 000-1.114A28.897 28.897 0 003.105 2.288z" />
              </svg>
              Go Live Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// ─── Live success screen ──────────────────────────────────────────────────────

function LiveSuccessScreen({
  truck,
  values,
  onGoOffline,
  onUpdateStatus,
}: {
  truck: typeof OWNER_TRUCK;
  values: GoLiveValues;
  onGoOffline: () => void;
  onUpdateStatus: () => void;
}) {
  const meta = LIVE_STATUS_META[values.status];

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-surface-bg/90 backdrop-blur-md border-b border-surface-border">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 text-sm font-body text-zinc-400 hover:text-white transition-colors">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm text-white">{truck.name}</span>
            <span className={cn("px-2 py-0.5 rounded text-[10px] font-body font-semibold", meta.bg, meta.color)}>
              LIVE
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6 pb-32">
        {/* Success banner */}
        <div
          className="relative grain-overlay overflow-hidden rounded-2xl px-6 py-8 text-center"
          style={{ background: "linear-gradient(135deg, #0d2b0d 0%, #1a1a1a 100%)" }}
        >
          <div className="absolute inset-0 rounded-2xl border border-emerald-500/20" />
          <div className="relative z-10">
            <div className="h-14 w-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400" />
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl text-white mb-1">You&apos;re live!</h2>
            <p className="text-sm font-body text-zinc-400">
              Customers can now find you on the map.
            </p>
          </div>
        </div>

        {/* Live details card */}
        <div className="rounded-xl border border-surface-border bg-surface-card p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className={cn("inline-flex items-center gap-1.5 text-sm font-body font-semibold", meta.color)}>
              <span className={cn("h-2 w-2 rounded-full", meta.dot)} />
              {meta.label}
            </span>
            <span className="text-xs font-body text-zinc-600">Updated just now</span>
          </div>

          <div className="space-y-2 pt-1 border-t border-surface-border">
            <div className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 text-brand-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-body text-white">{values.venue_name}</p>
            </div>
            <p className="text-xs font-body text-zinc-500 ml-5">
              {values.address_line1}, {values.city}
            </p>
            <div className="flex items-center gap-4 ml-5 mt-1">
              <span className="text-xs font-body text-zinc-500">
                {formatTimeDisplay(values.start_time)} – {formatTimeDisplay(values.end_time)}
              </span>
              {values.wait_time_minutes && (
                <span className="text-xs font-body text-zinc-500">
                  ~{values.wait_time_minutes} min wait
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div>
          <p className="text-xs font-body font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            How customers see you
          </p>
          <PublicPreview truck={truck} values={values} isLive />
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/explore"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-surface-border bg-surface-card text-sm font-body font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
            </svg>
            View on map
          </Link>
          <button
            onClick={onUpdateStatus}
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-surface-border bg-surface-card text-sm font-body font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
            </svg>
            Update status
          </button>
        </div>
      </div>

      {/* Go offline bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-bg/95 backdrop-blur-md border-t border-surface-border px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onGoOffline}
            className="w-full py-3 rounded-xl border border-surface-border bg-surface-card text-sm font-body font-semibold text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
          >
            Go Offline
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Publishing overlay ───────────────────────────────────────────────────────

function PublishingOverlay() {
  return (
    <div className="fixed inset-0 bg-surface-bg z-50 flex flex-col items-center justify-center gap-4">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-2 border-brand-500/20 animate-ping" />
        <div className="relative h-16 w-16 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
          <svg className="h-7 w-7 text-brand-400 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      </div>
      <p className="font-display font-bold text-lg text-white">Publishing...</p>
      <p className="text-sm font-body text-zinc-500">Updating your live status</p>
    </div>
  );
}

// ─── Public preview card ──────────────────────────────────────────────────────

function PublicPreview({
  truck,
  values,
  isLive = false,
}: {
  truck: { name: string; primary_cuisine: string };
  values: Partial<GoLiveValues>;
  isLive?: boolean;
}) {
  const status = (values.status ?? "serving_now") as LiveStatus;
  const meta = LIVE_STATUS_META[status];
  const hasLocation = !!(values.venue_name);

  return (
    <div className={cn(
      "rounded-xl border p-3.5",
      isLive ? `${meta.bg} ${meta.border}` : "bg-surface-card border-surface-border"
    )}>
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className={cn(
          "h-12 w-12 rounded-lg shrink-0 flex items-center justify-center font-display font-bold text-lg",
          "bg-brand-500/10 text-brand-400 border border-brand-500/20"
        )}>
          {truck.name.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-sm text-white">{truck.name}</p>
          <p className="text-xs text-zinc-500 font-body mb-2">{truck.primary_cuisine}</p>

          {/* Status badge */}
          <span className={cn(
            "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-body font-semibold",
            "bg-surface-muted/60 border border-surface-border"
          )}>
            <span className="relative flex h-2 w-2">
              {["serving_now", "arriving_soon"].includes(status) && (
                <span className={cn("absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping", meta.dot)} />
              )}
              <span className={cn("relative inline-flex rounded-full h-2 w-2", meta.dot)} />
            </span>
            <span className={meta.color}>{meta.label}</span>
          </span>
        </div>

        {/* Wait time */}
        {values.wait_time_minutes && (
          <div className="text-right shrink-0">
            <p className="text-base font-display font-bold text-white">{values.wait_time_minutes}m</p>
            <p className="text-[10px] text-zinc-500">wait</p>
          </div>
        )}
      </div>

      {/* Location strip */}
      {hasLocation && (
        <div className="mt-2.5 pt-2.5 border-t border-surface-border/50 flex items-center gap-1.5">
          <svg className="h-3 w-3 text-brand-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.387 1.445-.966 2.274-1.765C15.302 15.1 17 12.462 17 9A7 7 0 103 9c0 3.462 1.698 6.1 3.354 7.584.829.799 1.653 1.378 2.274 1.766.311.192.571.336.757.432a5.742 5.742 0 00.281.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
          </svg>
          <span className="text-[11px] text-zinc-500 font-body truncate">{values.venue_name}</span>
          <span className="text-[11px] text-zinc-600 font-body ml-auto shrink-0">just now</span>
        </div>
      )}

      {!hasLocation && (
        <p className="mt-2 text-xs font-body text-zinc-700 italic">
          Add venue name to show location to customers
        </p>
      )}
    </div>
  );
}

// ─── Shared small components ──────────────────────────────────────────────────

function Section({
  title,
  optional,
  children,
}: {
  title: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <h2 className="font-display font-semibold text-base text-white">{title}</h2>
        {optional && (
          <span className="text-xs font-body text-zinc-600 bg-surface-card border border-surface-border px-1.5 py-0.5 rounded-full">
            Optional
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function FormField({
  label,
  placeholder,
  value,
  onChange,
  error,
  hint,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-body font-semibold text-zinc-400 mb-1.5">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full px-3.5 py-2.5 rounded-xl text-sm font-body text-white placeholder-zinc-600",
          "bg-surface-card border outline-none transition-all",
          "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15",
          error ? "border-red-500/50" : "border-surface-border"
        )}
      />
      {hint && !error && <p className="mt-1 text-xs font-body text-zinc-600">{hint}</p>}
      {error && <FieldError msg={error} />}
    </div>
  );
}

function FieldError({ msg }: { msg: string }) {
  return <p className="mt-1.5 text-xs font-body text-red-400">{msg}</p>;
}

function GeoSpinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
