"use client";

import { CURRENT_CALENDAR, STRANDS, STRAND_BY_KEY, type CalendarDay } from "@/content/calendar";

/* The month calendar for the 3–5 rotating programme. Each working day is
 * tinted by the strand that runs that day; the winter break is greyed.
 * Used on the overview so educators can see what runs when. */

const WEEK = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Monday-first column index for a weekday string.
const colOf = (wd: string) => (WEEK.indexOf(wd) === -1 ? 0 : WEEK.indexOf(wd));

export function RotationCalendar() {
  const days = CURRENT_CALENDAR.days;
  const lead = days.length ? colOf(days[0].weekday) : 0;
  const cells: (CalendarDay | null)[] = [...Array(lead).fill(null), ...days];

  return (
    <div className="rounded-3xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05] md:p-5">
      <div className="flex items-baseline justify-between">
        <h3 className="text-[15px] font-extrabold lowercase text-ink">{CURRENT_CALENDAR.label}</h3>
        <span className="text-[11px] font-semibold text-ink-subtle">one strand per day · sessions every day</span>
      </div>

      {/* weekday header */}
      <div className="mt-3 grid grid-cols-7 gap-1.5">
        {WEEK.map((w) => (
          <div key={w} className="text-center text-[10px] font-bold uppercase tracking-wide text-ink-subtle">
            {w}
          </div>
        ))}
      </div>

      {/* day cells */}
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
                <span className="mt-0.5 text-[8px] font-semibold uppercase text-ink-subtle/80">break</span>
              </div>
            );
          }
          const s = STRAND_BY_KEY[c.strand!];
          return (
            <div
              key={c.date}
              className={`flex aspect-square flex-col items-center justify-center rounded-xl ${s.bg} ring-1 ${s.ring}`}
              title={`${c.day} dec · ${s.label}`}
            >
              <span className="text-[12px] font-extrabold text-ink">{c.day}</span>
              <span className="mt-0.5 text-[13px] leading-none" aria-hidden>{s.emoji}</span>
            </div>
          );
        })}
      </div>

      {/* legend */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
        {STRANDS.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink-muted">
            <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} /> {s.short}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink-subtle">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" /> break (26–31)
        </span>
      </div>
    </div>
  );
}
