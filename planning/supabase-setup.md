# supabase setup — the educator activity log

The planner (`/plan`) and the admin log (`/plan/log`) write/read one Supabase table. Until you do these three steps, the planner still works as a **run-sheet** (it just can't log). ~10 minutes.

## 1 · create the project (or reuse one)
- go to [supabase.com](https://supabase.com) → new project. (You can reuse the project your parent-toddler app uses, but a fresh one keeps this data separate.)
- copy the **Project URL** and the **anon public** key from *Project settings → API*.

## 2 · create the table (SQL editor → run this)
```sql
create table public.session_plans (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_date date not null,
  educator_name text not null,
  educator_username text,
  centre text,
  strand text not null,
  strand_label text not null,
  picks jsonb not null default '{}'::jsonb
);

-- the app uses the public anon key, so allow anon insert + read.
alter table public.session_plans enable row level security;

create policy "anon can insert a plan"
  on public.session_plans for insert to anon with check (true);

create policy "anon can read plans"
  on public.session_plans for select to anon using (true);
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
- `/plan` → educator picks strand + a resource per part → **submit today's plan** → a row lands in `session_plans`.
- `/plan/log` (admin only) → see every plan: educator · strand · date · centre · the resources they chose.

## what gets logged (one row per submitted plan)
`session_date · educator_name · educator_username · centre · strand · strand_label · picks{ segmentId → {resourceId, resourceLabel} }`
