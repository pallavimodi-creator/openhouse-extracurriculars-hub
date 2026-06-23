import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Supabase is used only for the teacher day-planner activity log. The rest
// of the hub is fully static. Configure with two public env vars (in
// .env.local locally, and in the Vercel project settings for production):
//
//   NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon public key>
//
// See planning/supabase-setup.md for the table SQL + RLS. If the env vars
// are absent, the client is null and the planner still works as a run-sheet
// (it just can't log) — so the app never crashes when Supabase isn't set up.

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;

// One submitted day plan = one row in `session_plans`.
export interface SessionPlanRow {
  id?: string;
  created_at?: string;
  session_date: string; // YYYY-MM-DD
  teacher_name: string; // the individual teacher (typed on submit)
  teacher_username: string | null; // the logged-in account
  centre: string | null; // the building/centre
  strand: string; // programme slug (e.g. "language-storytelling-3-5")
  strand_label: string; // human label (e.g. "language through storytelling")
  // segmentId -> { resourceId, resourceLabel } the teacher chose
  picks: Record<string, { resourceId: string; resourceLabel: string }>;
}
