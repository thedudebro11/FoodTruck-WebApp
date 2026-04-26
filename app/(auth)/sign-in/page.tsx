"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { signInSchema, type SignInValues } from "@/lib/validators/auth";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof SignInValues, string>>;
type AuthMode = "password" | "magic-link";

export default function SignInPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("password");
  const [values, setValues] = useState<SignInValues>({ email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [magicSent, setMagicSent] = useState(false);

  const set = (field: keyof SignInValues, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    // Re-validate touched fields live after first submit attempt
    if (touched) validate(next);
  };

  const validate = (v = values): boolean => {
    const schema =
      mode === "magic-link"
        ? z.object({ email: signInSchema.shape.email, password: z.string() })
        : signInSchema;

    const result = schema.safeParse(v);
    if (!result.success) {
      const errs: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof SignInValues;
        if (!errs[key]) errs[key] = issue.message;
      });
      setErrors(errs);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!validate()) return;

    setLoading(true);

    // ── TODO: replace with Supabase auth ─────────────────
    await new Promise((r) => setTimeout(r, 1000));

    if (mode === "magic-link") {
      setMagicSent(true);
      setLoading(false);
      return;
    }

    // Placeholder: redirect to home
    // Real: role-aware redirect after session is established
    router.push("/");
  };

  if (magicSent) {
    return (
      <div className="text-center py-8">
        <div className="h-12 w-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
          <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
        </div>
        <h2 className="font-display font-bold text-xl text-white mb-2">Check your email</h2>
        <p className="text-sm font-body text-zinc-500 mb-6">
          We sent a magic link to <span className="text-zinc-300">{values.email}</span>
        </p>
        <button
          onClick={() => { setMagicSent(false); setMode("password"); }}
          className="text-sm font-body text-brand-400 hover:text-brand-300 transition-colors"
        >
          Back to sign in
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl text-white mb-1">Welcome back</h1>
        <p className="text-sm font-body text-zinc-500">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-brand-400 hover:text-brand-300 transition-colors">
            Sign up
          </Link>
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-1 p-1 rounded-xl bg-surface-card border border-surface-border mb-6">
        {(["password", "magic-link"] as AuthMode[]).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setErrors({}); setTouched(false); }}
            className={cn(
              "flex-1 py-2 rounded-lg text-xs font-body font-semibold transition-all",
              mode === m
                ? "bg-surface-muted text-white"
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            {m === "password" ? "Password" : "Magic link"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-body font-semibold text-zinc-400 mb-1.5">
            Email address
          </label>
          <input
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            className={cn(
              "w-full px-3.5 py-2.5 rounded-xl text-sm font-body text-white placeholder-zinc-600",
              "bg-surface-card border outline-none transition-all",
              "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15",
              errors.email ? "border-red-500/50" : "border-surface-border"
            )}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs font-body text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Password (hidden in magic-link mode) */}
        {mode === "password" && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-body font-semibold text-zinc-400">Password</label>
              <button
                type="button"
                className="text-xs font-body text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              autoComplete="current-password"
              value={values.password}
              onChange={(e) => set("password", e.target.value)}
              placeholder="••••••••"
              className={cn(
                "w-full px-3.5 py-2.5 rounded-xl text-sm font-body text-white placeholder-zinc-600",
                "bg-surface-card border outline-none transition-all",
                "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15",
                errors.password ? "border-red-500/50" : "border-surface-border"
              )}
            />
            {errors.password && (
              <p className="mt-1.5 text-xs font-body text-red-400">{errors.password}</p>
            )}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full flex items-center justify-center gap-2 py-3 rounded-xl",
            "bg-brand-500 hover:bg-brand-600 text-white text-sm font-body font-semibold",
            "transition-all shadow-lg shadow-brand-900/20",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          )}
        >
          {loading ? (
            <>
              <Spinner />
              {mode === "magic-link" ? "Sending link..." : "Signing in..."}
            </>
          ) : mode === "magic-link" ? (
            "Send magic link"
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-xs font-body text-zinc-600">
        By continuing, you agree to our{" "}
        <span className="text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors">Terms</span>{" "}
        and{" "}
        <span className="text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors">Privacy Policy</span>.
      </p>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
