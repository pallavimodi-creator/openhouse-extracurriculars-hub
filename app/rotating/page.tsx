"use client";

import { RotationCalendar } from "@/components/RotationCalendar";
import { STRANDS } from "@/content/calendar";

/* The 3–5 rotating-programme landing page.
 * Infographic-first: the rotation cycle + the month calendar + why we
 * rotate. One strand per day: art → language → stem → music & fitness. */

// Day-cards show the loop, then it repeats.
const CYCLE = [...STRANDS];

export default function RotatingPage() {
  return (
    <div className="px-4 pb-10 pt-4 md:px-8">
      {/* hero */}
      <section className="overflow-hidden rounded-3xl bg-brand-orange px-6 py-7 text-brand-white shadow-card md:px-9 md:py-9">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-white/80">
          ages 3–5 · at the centre
        </p>
        <h1 className="mt-2 max-w-[20ch] text-[26px] font-extrabold lowercase leading-[1.05] md:text-[36px]">
          one rotating programme — every child gets it all
        </h1>
        <p className="mt-3 max-w-[50ch] text-[13.5px] font-medium leading-relaxed text-brand-white/90 md:text-[15px]">
          each day runs a different strand — art, then language, then stem, then
          music &amp; fitness — and then loops. come any days you like; the
          rotation makes sure you meet all four.
        </p>
        <p className="mt-3 text-[12px] font-medium text-brand-white/80">
          this page explains how the day works and what runs when. the daily plans, the song library and the dashboard are on the home page.
        </p>
      </section>

      {/* the rotation */}
      <section className="mt-7">
        <h2 className="text-[13px] font-extrabold lowercase text-ink-muted">
          how the rotation works
        </h2>
        <p className="mt-0.5 text-[12.5px] text-ink-muted">
          one strand per day, in order, on repeat.
        </p>

        <div className="mt-4 flex items-stretch gap-2 overflow-x-auto pb-1 md:gap-3">
          {CYCLE.map((p, i) => (
            <div key={p.key} className="flex items-stretch gap-2 md:gap-3">
              <div
                className={`flex w-[150px] shrink-0 flex-col justify-between rounded-2xl bg-brand-white p-4 shadow-card ring-1 ${p.ring} md:w-[170px]`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-[22px] ring-1 ${p.bg} ${p.ring}`}
                    aria-hidden
                  >
                    {p.emoji}
                  </span>
                  <span className="rounded-chip bg-brand-cream px-2 py-0.5 text-[10px] font-bold text-ink-muted">
                    day {i + 1}
                  </span>
                </div>
                <p className={`mt-3 text-[13.5px] font-extrabold lowercase leading-tight ${p.text}`}>
                  {p.label}
                </p>
              </div>
              {/* arrow between cards; the last one loops back */}
              <div className="flex items-center" aria-hidden>
                <span className="text-[20px] text-ink-subtle">
                  {i === CYCLE.length - 1 ? "↻" : "→"}
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-center" aria-hidden>
            <span className="rounded-chip bg-brand-cream px-2.5 py-1 text-[11px] font-bold lowercase text-ink-muted">
              and repeat…
            </span>
          </div>
        </div>
      </section>

      {/* the month calendar — what runs on each day */}
      <section className="mt-8">
        <h2 className="text-[13px] font-extrabold lowercase text-ink-muted">
          the month at a glance
        </h2>
        <p className="mt-0.5 text-[12.5px] text-ink-muted">
          each day is pre-allocated to a strand. sessions run every day; the winter break is 26–31 december.
        </p>
        <div className="mt-3">
          <RotationCalendar />
        </div>
      </section>

      {/* why we rotate */}
      <section className="mt-8">
        <h2 className="text-[13px] font-extrabold lowercase text-ink-muted">
          why we rotate
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05]">
            <p className="text-[15px] font-extrabold lowercase leading-snug text-ink md:text-[16px]">
              children come on different days — but no one misses out.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
              because the strand changes every day and loops, each child builds
              up <b className="text-ink">all four</b> over their visits — whether
              they come twice a week or every day.
            </p>
          </div>

          {/* mini infographic: 3 children, each ends up with all four dots */}
          <div className="rounded-2xl bg-brand-cream/60 p-5 ring-1 ring-ink/[0.05]">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-wide text-ink-subtle">
              over a few visits
            </p>
            <ul className="space-y-3">
              {[
                { name: "comes mon + thu" },
                { name: "comes tue + fri" },
                { name: "comes every day" },
              ].map((kid, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-white text-[15px] shadow-card ring-1 ring-ink/[0.05]" aria-hidden>
                    {["🧒", "👧", "🧑"][i]}
                  </span>
                  <span className="min-w-[96px] text-[12px] font-bold text-ink-muted">
                    {kid.name}
                  </span>
                  <span className="ml-auto flex items-center gap-1.5">
                    {STRANDS.map((p) => (
                      <span
                        key={p.key}
                        className={`h-4 w-4 rounded-full ${p.dot}`}
                        title={p.label}
                      />
                    ))}
                    <span className="ml-1 text-[12px] font-extrabold text-category-language">✓ all four</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold text-ink-muted">
              {STRANDS.map((p) => (
                <span key={p.key} className="inline-flex items-center gap-1.5">
                  <span className={`h-3 w-3 rounded-full ${p.dot}`} /> {p.short}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 rounded-2xl bg-category-language/15 px-4 py-3 text-center text-[13.5px] font-extrabold lowercase text-ink ring-1 ring-category-language/30">
          different days, same full experience — art, language, stem &amp; music for every child.
        </p>
      </section>
    </div>
  );
}
