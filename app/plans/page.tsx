"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";
import { getCurriculumProgramme } from "@/lib/content";
import {
  CURRENT_CALENDAR,
  STRANDS,
  STRAND_BY_KEY,
  type CalendarDay,
} from "@/content/calendar";
import { cn } from "@/lib/utils";

/* The 3–5 centre day plans — driven by the rotation CALENDAR. One strand runs
 * each working day; tapping a day opens that strand's plan at the right session
 * (its Nth occurrence). Reached from the persistent "plans" tab in the nav. */

const WEEK = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const colOf = (wd: string) => {
  const i = WEEK.indexOf(wd);
  return i === -1 ? 0 : i;
};

// A strand's session number on a given day = how many times that strand has
// run so far. The rotation is a clean 4-cycle from index 0, so for a working
// day with sessionIndex W, the strand's occurrence is floor((W-1)/4)+1.
const sessionOf = (d: CalendarDay): number | null =>
  d.holiday || d.sessionIndex == null
    ? null
    : Math.floor((d.sessionIndex - 1) / STRANDS.length) + 1;

function dayHref(d: CalendarDay): string | null {
  if (d.holiday || !d.strand) return null;
  const s = STRAND_BY_KEY[d.strand];
  const prog = getCurriculumProgramme(s.programmeSlug);
  const n = sessionOf(d);
  // music & fitness has no sequenced sessions yet → open its overview instead.
  if (!prog || prog.totalSessions === 0 || n == null)
    return `/${s.programmeSlug}/overview`;
  return `/${s.programmeSlug}/plan?session=${Math.min(n, prog.totalSessions)}`;
}

export default function PlansPage() {
  // Compute "today" on the client only, so the highlight never causes a
  // server/client hydration mismatch.
  const [todayIso, setTodayIso] = useState<string | null>(null);
  useEffect(() => {
    setTodayIso(new Date().toISOString().slice(0, 10));
  }, []);

  const days = CURRENT_CALENDAR.days;
  const lead = days.length ? colOf(days[0].weekday) : 0;
  const cells: (CalendarDay | null)[] = [...Array(lead).fill(null), ...days];
  const today = days.find((d) => d.date === todayIso) ?? null;

  return (
    <TeacherGate>
      <div className="px-4 pt-4 pb-24 md:px-8">
        <h1 className="text-[22px] font-bold text-ink">the 3–5 day plans</h1>
        <p className="mt-1 mb-5 max-w-2xl text-[13px] leading-relaxed text-ink-muted">
          the plan follows the rotation calendar — one strand runs each day, in order.
          tap a day to open that day&apos;s strand and session.
        </p>

        {/* Today's class — a direct jump when today is in the calendar. */}
        {today && !today.holiday && today.strand && (
          <Link
            href={dayHref(today)!}
            className={cn(
              "mb-5 flex items-center gap-3.5 rounded-2xl p-4 shadow-card ring-2 transition active:scale-[0.99]",
              STRAND_BY_KEY[today.strand].bg,
              STRAND_BY_KEY[today.strand].ring,
            )}
          >
            <span className="text-[26px]" aria-hidden>
              {STRAND_BY_KEY[today.strand].emoji}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wide text-ink-muted">
                today&apos;s class
              </p>
              <p className="text-[15px] font-extrabold lowercase text-ink">
                {STRAND_BY_KEY[today.strand].label}
                {sessionOf(today) ? ` · session ${sessionOf(today)}` : ""}
              </p>
            </div>
            <span className="shrink-0 text-[12px] font-bold text-brand-orange">
              open →
            </span>
          </Link>
        )}

        {/* The rotation calendar — every working day links to its plan. */}
        <div className="rounded-3xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05] md:p-5">
          <div className="flex items-baseline justify-between">
            <h2 className="text-[15px] font-extrabold lowercase text-ink">
              {CURRENT_CALENDAR.label}
            </h2>
            <span className="text-[11px] font-semibold text-ink-subtle">
              tap a day → its plan
            </span>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {WEEK.map((w) => (
              <div
                key={w}
                className="text-center text-[10px] font-bold uppercase tracking-wide text-ink-subtle"
              >
                {w}
              </div>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1.5">
            {cells.map((c, i) => {
              if (!c) return <div key={`b${i}`} />;
              if (c.holiday) {
                return (
                  <div
                    key={c.date}
                    className="flex aspect-square flex-col items-center justify-center rounded-xl bg-ink/[0.04] ring-1 ring-ink/5"
                    title="winter break — no session"
                  >
                    <span className="text-[12px] font-bold text-ink-subtle">{c.day}</span>
                    <span className="mt-0.5 text-[8px] font-semibold uppercase text-ink-subtle/80">
                      break
                    </span>
                  </div>
                );
              }
              const s = STRAND_BY_KEY[c.strand!];
              const n = sessionOf(c);
              const isToday = c.date === todayIso;
              return (
                <Link
                  key={c.date}
                  href={dayHref(c)!}
                  title={`${c.day} dec · ${s.label}${n ? ` · session ${n}` : ""}`}
                  className={cn(
                    "flex aspect-square flex-col items-center justify-center rounded-xl ring-1 transition hover:brightness-95 active:scale-[0.97]",
                    s.bg,
                    isToday ? "ring-2 ring-brand-orange" : s.ring,
                  )}
                >
                  <span className="text-[12px] font-extrabold text-ink">{c.day}</span>
                  <span className="mt-0.5 text-[12px] leading-none" aria-hidden>
                    {s.emoji}
                  </span>
                  {n && (
                    <span className="mt-0.5 text-[7.5px] font-bold uppercase text-ink/55">
                      s{n}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            {STRANDS.map((s) => (
              <span
                key={s.key}
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink-muted"
              >
                <span className={cn("h-2.5 w-2.5 rounded-full", s.dot)} /> {s.short}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink-subtle">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" /> break (26–31)
            </span>
          </div>
        </div>

        {/* Or jump straight into a strand's full day-by-day plan. */}
        <p className="mt-7 mb-2 text-[12px] font-bold text-ink-muted">
          or open a strand&apos;s full plan
        </p>
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {STRANDS.map((s) => {
            const prog = getCurriculumProgramme(s.programmeSlug);
            const sessions = prog?.totalSessions ?? 0;
            const href =
              sessions > 0
                ? `/${s.programmeSlug}/plan`
                : `/${s.programmeSlug}/overview`;
            return (
              <Link
                key={s.key}
                href={href}
                className="flex flex-col gap-1.5 rounded-2xl bg-brand-white p-3.5 shadow-card ring-1 ring-ink/5 transition active:scale-[0.99]"
              >
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-[18px]",
                    s.bg,
                  )}
                  aria-hidden
                >
                  {s.emoji}
                </span>
                <span className="text-[12.5px] font-extrabold lowercase leading-tight text-ink">
                  {s.label}
                </span>
                <span className="text-[10.5px] text-ink-muted">
                  {sessions > 0 ? `${sessions} sessions` : "rotating · overview"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </TeacherGate>
  );
}
