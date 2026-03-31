"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavBarProps {
  /** When true, nav starts transparent and transitions to opaque on scroll */
  transparent?: boolean;
}

export function NavBar({ transparent = false }: NavBarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const isTransparent = transparent && !scrolled && !menuOpen;

  const navLinks = [
    { href: "/explore", label: "Explore" },
    { href: "/events",  label: "Events"  },
    { href: "/owners",  label: "For Owners" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-surface-bg/90 backdrop-blur-md border-b border-surface-border"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-bold text-lg text-white leading-none">
            truckspot
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-body font-semibold rounded bg-brand-500/20 text-brand-400 border border-brand-500/30 leading-none">
            LIVE
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-colors",
                pathname === link.href
                  ? "text-white bg-surface-card"
                  : "text-zinc-400 hover:text-white hover:bg-surface-card/50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/sign-in"
            className="px-3 py-1.5 text-sm font-body font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/explore"
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-body font-semibold",
              "bg-brand-500 hover:bg-brand-600 text-white",
              "transition-all duration-150 shadow-sm shadow-brand-900/20"
            )}
          >
            Open Live Map
          </Link>
        </div>

        {/* Mobile: just the CTA + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/explore"
            className="px-3 py-1.5 rounded-lg text-xs font-body font-semibold bg-brand-500 hover:bg-brand-600 text-white transition-colors"
          >
            Open Map
          </Link>
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-surface-card transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-bg/95 backdrop-blur-md border-t border-surface-border px-4 py-3 flex flex-col gap-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-body font-medium text-zinc-300 hover:text-white hover:bg-surface-card transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="my-1 border-t border-surface-border" />
          <Link
            href="/sign-in"
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-body font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
