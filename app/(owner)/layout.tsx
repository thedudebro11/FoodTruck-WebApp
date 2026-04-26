// Minimal owner layout wrapper — dashboard sidebar added in Step 6
// Auth guard added when Supabase is wired up
export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-bg">
      {children}
    </div>
  );
}
