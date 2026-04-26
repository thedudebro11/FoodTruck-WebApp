"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpSchema, ROLE_META, type SignUpValues, type Role } from "@/lib/validators/auth";
import { cn } from "@/lib/utils";

type Step = "role" | "form";
type FieldErrors = Partial<Record<keyof SignUpValues, string>>;


// Role-aware redirect destinations (will be real routes once owner dashboard exists)
const ROLE_REDIRECT: Record<Role, string> = {
  customer: "/",
  owner:    "/",   // → /dashboard once built
  host:     "/",
};

export default function SignUpPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("role");
  const [values, setValues] = useState<Partial<SignUpValues>>({ role: undefined, full_name: "", email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const selectedRole = values.role as Role | undefined;

  const set = (field: keyof SignUpValues, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched) validate(next);
  };

  const validate = (v = values): boolean => {
    const result = signUpSchema.safeParse(v);
    if (!result.success) {
      const errs: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof SignUpValues;
        if (!errs[key]) errs[key] = issue.message;
      });
      setErrors(errs);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleRoleSelect = (role: Role) => {
    setValues((v) => ({ ...v, role }));
    setStep("form");
  };

  const handleBack = () => {
    setStep("role");
    setErrors({});
    setTouched(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!validate()) return;

    setLoading(true);
    // ── TODO: replace with Supabase signUp ────────────────
    await new Promise((r) => setTimeout(r, 1000));

    router.push(ROLE_REDIRECT[selectedRole!]);
  };

  return (
    <div>
      {step === "role" ? (
        <RoleStep onSelect={handleRoleSelect} />
      ) : (
        <FormStep
          values={values}
          errors={errors}
          loading={loading}
          showPassword={showPassword}
          selectedRole={selectedRole!}
          onSet={set}
          onBack={handleBack}
          onSubmit={handleSubmit}
          onTogglePassword={() => setShowPassword((p) => !p)}
        />
      )}
    </div>
  );
}

// ─── Step 1: Role selection ───────────────────────────────────────────────────

function RoleStep({ onSelect }: { onSelect: (role: Role) => void }) {
  const [hovered, setHovered] = useState<Role | null>(null);

  const ROLE_ICONS: Record<Role, React.ReactNode> = {
    customer: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    owner: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    host: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl text-white mb-1">Create your account</h1>
        <p className="text-sm font-body text-zinc-500">
          Already have one?{" "}
          <Link href="/sign-in" className="text-brand-400 hover:text-brand-300 transition-colors">
            Sign in
          </Link>
        </p>
      </div>

      <p className="text-xs font-body font-semibold text-zinc-400 uppercase tracking-widest mb-4">
        I want to...
      </p>

      <div className="space-y-3">
        {(["customer", "owner", "host"] as Role[]).map((role) => {
          const meta = ROLE_META[role];
          const isHovered = hovered === role;

          return (
            <button
              key={role}
              onClick={() => onSelect(role)}
              onMouseEnter={() => setHovered(role)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                isHovered
                  ? "bg-brand-500/10 border-brand-500/40"
                  : "bg-surface-card border-surface-border hover:border-surface-muted"
              )}
            >
              {/* Icon box */}
              <div
                className={cn(
                  "h-11 w-11 rounded-xl shrink-0 flex items-center justify-center transition-all",
                  isHovered
                    ? "bg-brand-500/20 text-brand-400"
                    : "bg-surface-muted text-zinc-500"
                )}
              >
                {ROLE_ICONS[role]}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "font-display font-semibold text-sm mb-0.5 transition-colors",
                  isHovered ? "text-white" : "text-zinc-200"
                )}>
                  {meta.label}
                </p>
                <p className="text-xs font-body text-zinc-500 leading-relaxed">
                  {meta.description}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className={cn(
                  "h-4 w-4 shrink-0 self-center transition-all",
                  isHovered ? "text-brand-400 translate-x-0.5" : "text-zinc-700"
                )}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 2: Details form ─────────────────────────────────────────────────────

function FormStep({
  values,
  errors,
  loading,
  showPassword,
  selectedRole,
  onSet,
  onBack,
  onSubmit,
  onTogglePassword,
}: {
  values: Partial<SignUpValues>;
  errors: FieldErrors;
  loading: boolean;
  showPassword: boolean;
  selectedRole: Role;
  onSet: (field: keyof SignUpValues, value: string) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onTogglePassword: () => void;
}) {
  const meta = ROLE_META[selectedRole];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-body text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Change role
        </button>

        <div className="flex items-center gap-2 mb-1">
          <h1 className="font-display font-bold text-2xl text-white">Create account</h1>
        </div>
        <p className="text-sm font-body text-zinc-500">
          {meta.description}
        </p>
      </div>

      {/* Selected role chip */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-500/10 border border-brand-500/25 mb-6">
        <svg className="h-3.5 w-3.5 text-brand-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
        </svg>
        <span className="text-xs font-body font-semibold text-brand-400 capitalize">
          {selectedRole === "owner" ? "Truck owner" : selectedRole === "host" ? "Host / Organizer" : "Customer"} account
        </span>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-4">
        {/* Full name */}
        <div>
          <label className="block text-xs font-body font-semibold text-zinc-400 mb-1.5">
            Full name
          </label>
          <input
            type="text"
            autoComplete="name"
            value={values.full_name ?? ""}
            onChange={(e) => onSet("full_name", e.target.value)}
            placeholder="Your name"
            className={cn(
              "w-full px-3.5 py-2.5 rounded-xl text-sm font-body text-white placeholder-zinc-600",
              "bg-surface-card border outline-none transition-all",
              "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15",
              errors.full_name ? "border-red-500/50" : "border-surface-border"
            )}
          />
          {errors.full_name && (
            <p className="mt-1.5 text-xs font-body text-red-400">{errors.full_name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-body font-semibold text-zinc-400 mb-1.5">
            Email address
          </label>
          <input
            type="email"
            autoComplete="email"
            value={values.email ?? ""}
            onChange={(e) => onSet("email", e.target.value)}
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

        {/* Password */}
        <div>
          <label className="block text-xs font-body font-semibold text-zinc-400 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={values.password ?? ""}
              onChange={(e) => onSet("password", e.target.value)}
              placeholder="Min. 8 characters"
              className={cn(
                "w-full px-3.5 py-2.5 pr-10 rounded-xl text-sm font-body text-white placeholder-zinc-600",
                "bg-surface-card border outline-none transition-all",
                "focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/15",
                errors.password ? "border-red-500/50" : "border-surface-border"
              )}
            />
            <button
              type="button"
              onClick={onTogglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
                  <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs font-body text-red-400">{errors.password}</p>
          )}
          {/* Password strength hint */}
          {(values.password?.length ?? 0) > 0 && !errors.password && (
            <PasswordStrength password={values.password ?? ""} />
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full flex items-center justify-center gap-2 py-3 rounded-xl mt-2",
            "bg-brand-500 hover:bg-brand-600 text-white text-sm font-body font-semibold",
            "transition-all shadow-lg shadow-brand-900/20",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          )}
        >
          {loading ? (
            <>
              <Spinner />
              Creating account...
            </>
          ) : (
            meta.cta + " →"
          )}
        </button>
      </form>

      <p className="mt-5 text-center text-xs font-body text-zinc-600">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-brand-400 hover:text-brand-300 transition-colors">
          Sign in
        </Link>
      </p>

      <p className="mt-3 text-center text-xs font-body text-zinc-700">
        By continuing you agree to our Terms and Privacy Policy.
      </p>
    </div>
  );
}

// ─── Password strength indicator ─────────────────────────────────────────────

function PasswordStrength({ password }: { password: string }) {
  const len = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const score = (len >= 8 ? 1 : 0) + (len >= 12 ? 1 : 0) + (hasUpper ? 1 : 0) + (hasNumber ? 1 : 0);

  const labels = ["Weak", "Fair", "Good", "Strong"];
  const colors = ["bg-red-500", "bg-amber-500", "bg-yellow-400", "bg-emerald-500"];
  const textColors = ["text-red-400", "text-amber-400", "text-yellow-400", "text-emerald-400"];

  const idx = Math.max(0, Math.min(score - 1, 3));

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-all duration-300",
              i < score ? colors[idx] : "bg-surface-muted"
            )}
          />
        ))}
      </div>
      <p className={cn("text-[11px] font-body", textColors[idx])}>
        {labels[idx]}
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
