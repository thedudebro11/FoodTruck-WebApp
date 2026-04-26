import { z } from "zod";

export const ROLES = ["customer", "owner", "host"] as const;
export type Role = (typeof ROLES)[number];

export const ROLE_META: Record<
  Role,
  { label: string; description: string; cta: string }
> = {
  customer: {
    label: "I'm looking for food",
    description: "Find trucks live near you, follow favorites, and never show up to an empty lot.",
    cta: "Find trucks",
  },
  owner: {
    label: "I own a food truck",
    description: "Go live in seconds, manage your schedule, and keep customers updated automatically.",
    cta: "List my truck",
  },
  host: {
    label: "I'm booking trucks",
    description: "Request trucks for events, track responses, and coordinate vendors without the chaos.",
    cta: "Book trucks",
  },
};

// ─── Sign In ──────────────────────────────────────────────────────────────────
export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export type SignInValues = z.infer<typeof signInSchema>;

// ─── Sign Up ──────────────────────────────────────────────────────────────────
export const signUpSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128),
  role: z.enum(ROLES, { error: "Please select a role" }),
});

export type SignUpValues = z.infer<typeof signUpSchema>;
