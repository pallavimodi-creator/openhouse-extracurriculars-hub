-- Daily logs for the 3–5 rotating programme.
-- Run this once in the Supabase SQL editor (same project as the other hub tables).
-- The form at /log-today inserts rows; the admin dashboard at /daily reads them.

create table if not exists public.daily_logs (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  log_date         date not null,
  centre           text,                 -- building / centre (e.g. "Indiranagar")
  teacher_username text,                 -- the logged-in centre account
  teacher_name     text not null,        -- the individual educator (typed on submit)
  programme        text not null check (programme in ('art','language','stem')),
  status           text not null check (status in ('completed','partial','challenges')),
  notes            text default ''
);

create index if not exists daily_logs_centre_date_idx
  on public.daily_logs (centre, log_date desc);

-- RLS: the hub uses the anon public key from the browser, like the other
-- tables. Allow anon insert (educators log) and select (admin dashboard).
alter table public.daily_logs enable row level security;

drop policy if exists daily_logs_insert on public.daily_logs;
create policy daily_logs_insert on public.daily_logs
  for insert to anon with check (true);

drop policy if exists daily_logs_select on public.daily_logs;
create policy daily_logs_select on public.daily_logs
  for select to anon using (true);
