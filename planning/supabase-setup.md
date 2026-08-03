# supabase setup — activity log + session completions

Two Supabase tables power the admin visibility:

1. **`session_plans`** — one row per submitted 3–5 day plan (`/plan/session` → `/plan/log`).
2. **`session_completions`** — one row every time a teacher taps *mark this session done* on any 5+ programme plan (`/[programme]/plan` → `/plan/completions`).

Until you do these steps, the plans still work as a **run-sheet** and mark-done ticks still persist per-device — the app just can't log across devices. ~10 minutes.

## 1 · create the project (or reuse one)
- go to [supabase.com](https://supabase.com) → new project. (You can reuse the project your parent-toddler app uses, but a fresh one keeps this data separate.)
- copy the **Project URL** and the **anon public** key from *Project settings → API*.

## 2 · create the tables (SQL editor → run this)
```sql
-- 3–5 planner: one row per submitted day plan.
create table public.session_plans (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_date date not null,
  teacher_name text not null,
  teacher_username text,
  centre text,
  strand text not null,
  strand_label text not null,
  picks jsonb not null default '{}'::jsonb
);

alter table public.session_plans enable row level security;

create policy "anon can insert a plan"
  on public.session_plans for insert to anon with check (true);

create policy "anon can read plans"
  on public.session_plans for select to anon using (true);

-- 5+ programmes: one row per "mark this session done" tap.
create table public.session_completions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  completed_at timestamptz not null default now(),
  session_number int not null,
  teacher_name text not null,
  teacher_username text,
  centre text,
  programme_slug text not null,
  programme_label text not null,
  category text,   -- 'art' | 'language' | 'stem'
  age_band text    -- '3-5' | '5-8' | '8-12'
);

alter table public.session_completions enable row level security;

create policy "anon can insert a completion"
  on public.session_completions for insert to anon with check (true);

create policy "anon can read completions"
  on public.session_completions for select to anon using (true);
```

> **security note:** this is a low-stakes internal tool, so the policies above let anyone with the anon key insert/read the log (matching the app's soft-gate login). That's fine for a centre activity log. If you ever need it locked down, switch to real Supabase Auth and gate the policies to authenticated users — say the word and I'll wire that.

## 3 · add the keys (two places)
**locally** — create `.env.local` in the project root:
```
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-public-key>
```
**production (Vercel)** — project → *Settings → Environment Variables* → add the same two → redeploy (or just `git push`).

`.env.local` is gitignored, so the keys never get committed.

## done
- `/plan/session` → 3–5 teacher picks strand + resources → **submit today's plan** → row in `session_plans`.
- `/plan/log` (admin only) → every submitted plan: teacher · strand · date · centre · picks.
- `/[programme]/plan` → 5+ teacher taps **mark this session done** → prompts for name (remembered per device) → row in `session_completions`.
- `/plan/completions` (admin only) → sessions completed, grouped by **category × age band × teacher**.

## what gets logged
- `session_plans`: session_date · teacher_name · teacher_username · centre · strand · strand_label · picks
- `session_completions`: completed_at · session_number · teacher_name · teacher_username · centre · programme_slug · programme_label · category · age_band
