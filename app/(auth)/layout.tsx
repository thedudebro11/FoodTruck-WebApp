import Link from "next/link";

// ── Auth layout — split panel (brand left, form right) ────────────────────────
// No top nav — auth pages are standalone focused flows
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-bg flex">
      {/* ── Left brand panel (desktop only) ──────────────── */}
      <div
        className="hidden lg:flex lg:w-[42%] xl:w-[38%] shrink-0 flex-col relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 100%, rgba(255,118,17,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 10%, rgba(255,188,113,0.08) 0%, transparent 55%),
            #0d0d0d
          `,
        }}
      >
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
            backgroundSize: "256px 256px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full px-10 py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 w-fit">
            <span className="font-display font-bold text-xl text-white">truckspot</span>
            <span className="px-1.5 py-0.5 text-[10px] font-body font-semibold rounded bg-brand-500/20 text-brand-400 border border-brand-500/30">
              LIVE
            </span>
          </Link>

          {/* Center content */}
          <div className="flex-1 flex flex-col justify-center max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-body font-semibold text-emerald-400 uppercase tracking-widest">
                47 trucks live now
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl xl:text-4xl text-white leading-tight mb-4">
              Find food trucks live.{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #ff9438 0%, #ff7611 50%, #ffbc71 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Run yours smarter.
              </span>
            </h2>

            <p className="text-sm font-body text-zinc-500 leading-relaxed">
              Real-time locations, live status updates, and the tools truck owners actually need.
            </p>
          </div>

          {/* Bottom quote */}
          <div className="border-t border-surface-border pt-6">
            <p className="text-xs font-body text-zinc-600 leading-relaxed italic">
              "No more showing up to an empty parking lot."
            </p>
          </div>
        </div>
      </div>

      {/* ── Right form panel ─────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 px-6 pt-6 pb-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-white">truckspot</span>
            <span className="px-1.5 py-0.5 text-[10px] font-body font-semibold rounded bg-brand-500/20 text-brand-400 border border-brand-500/30">
              LIVE
            </span>
          </Link>
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
