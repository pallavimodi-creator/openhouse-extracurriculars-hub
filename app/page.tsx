"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  listCurriculumProgrammes,
  getCurriculumProgramme,
  getProgrammeStage,
} from "@/lib/content";
import { HeroBanner } from "@/components/HeroBanner";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { getTeacher, type TeacherState } from "@/lib/teacher-state";
import type { ProgrammeStage } from "@/content/types";

// Three-step guide tile — consistent layout for the "how to go
// through the website" sequence. The emoji floats gently and wobbles
// on hover to draw the eye along the steps without distracting.
function GuideStep({
  step,
  emoji,
  tone,
  title,
  body,
}: {
  step: number;
  emoji: string;
  tone: "yellow" | "green" | "blue";
  title: string;
  body: ReactNode;
}) {
  const toneBg =
    tone === "yellow"
      ? "bg-segment-yellow/15 ring-segment-yellow/40"
      : tone === "green"
        ? "bg-segment-green/15 ring-segment-green/40"
        : "bg-segment-blue/15 ring-segment-blue/40";
  return (
    <li
      className={`group/step relative rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift hover:ring-ink/[0.08] md:p-5`}
    >
      {/* Floating emoji badge sitting partly outside the card */}
      <div className="relative mb-3 flex items-center gap-2">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full text-[22px] ring-1 ${toneBg} animate-float-soft group-hover/step:[animation-play-state:paused] group-hover/step:animate-wobble`}
          aria-hidden
        >
          {emoji}
        </span>
        <span className="ml-auto rounded-chip bg-brand-cream px-2 py-0.5 text-[10px] font-bold text-ink-muted">
          step {step}
        </span>
      </div>
      <p className="text-[13.5px] font-extrabold lowercase leading-tight text-ink md:text-[14.5px]">
        {title}
      </p>
      <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted md:text-[12.5px]">
        {body}
      </p>
    </li>
  );
}

// One track section (live / trial). Inside, programmes are grouped by
// category so the six live programmes read cleanly (art / language &
// speaking / stem & robotics); the trial track shows its three 3-5
// programmes the same way.
function TrackSection({
  label,
  blurb,
  tone,
  items,
}: {
  label: string;
  blurb: string;
  tone: "live" | "trial";
  items: ReturnType<typeof listCurriculumProgrammes>;
}) {
  if (items.length === 0) return null;

  const categoryOrder: Array<{ key: string; label: string }> = [
    { key: "art", label: "art & design" },
    { key: "language", label: "language through storytelling and public speaking" },
    { key: "stem", label: "stem & robotics" },
  ];
  const byCategory = categoryOrder
    .map((c) => ({ ...c, items: items.filter((p) => p.category === c.key) }))
    .filter((c) => c.items.length > 0);

  const chip =
    tone === "live"
      ? "bg-segment-green/20 text-category-language ring-segment-green/40"
      : "bg-brand-orange/15 text-brand-orange ring-brand-orange/30";

  return (
    <section className="px-4 pt-2 md:px-8">
      <div className="flex flex-wrap items-center gap-2.5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-chip px-2.5 py-1 text-[11px] font-extrabold lowercase ring-1 ${chip}`}
        >
          {tone === "live" && (
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-category-language/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-category-language" />
            </span>
          )}
          {label}
        </span>
        <span className="text-[11px] font-medium text-ink-muted md:text-[12px]">
          {blurb}
        </span>
      </div>

      {tone === "trial" && (
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/plan/docs"
            className="inline-flex items-center gap-1.5 rounded-chip bg-brand-orange px-3 py-1.5 text-[11px] font-bold text-white shadow-card transition hover:opacity-95"
          >
            review the full 2-hour plan
          </Link>
          <Link
            href="/plan"
            className="inline-flex items-center gap-1.5 rounded-chip bg-brand-white px-3 py-1.5 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
          >
            plan a session
          </Link>
        </div>
      )}

      <div className="mt-4 space-y-6">
        {byCategory.map((c) => (
          <div key={c.key}>
            <h4 className="mb-2 text-[13px] font-extrabold lowercase text-ink">
              {c.label}
            </h4>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {c.items.map((p) => (
                <ProgrammeCard key={p.id} programme={p} desktop />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [teacher, setTeacher] = useState<TeacherState | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = getTeacher();
    if (!t) {
      router.replace("/login");
      return;
    }
    // Non-admin teachers need to have picked a building this session
    // before they can land on home. Admins skip this — they're reviewing,
    // not running a class.
    const admin = t.role === "admin" || t.programmeSlug === "*";
    if (!admin && !t.building) {
      router.replace("/building");
      return;
    }
    setTeacher(t);
    setLoaded(true);
  }, [router]);

  if (!loaded || !teacher) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-[12px] font-medium text-ink-subtle">loading...</p>
      </div>
    );
  }

  const isAdmin = teacher.programmeSlug === "*" || teacher.role === "admin";
  // Show every programme on the homepage. ProgrammeCard renders a
  // "coming soon" tag for any programme whose totalSessions === 0, so
  // teachers see what's coming next.
  const programmes = isAdmin
    ? listCurriculumProgrammes()
    : teacher.category
      ? listCurriculumProgrammes().filter(
          (p) => p.category === teacher.category,
        )
      : (() => {
          const p = getCurriculumProgramme(teacher.programmeSlug);
          return p ? [p] : [];
        })();

  // Split the visible programmes into the two landing tracks. Live = the
  // 5-8 / 8-12 programmes running at the centre; trial = the three 3-5
  // programmes (overviews kept, timings WIP).
  const live = programmes.filter((p) => getProgrammeStage(p) === "live");
  const trial = programmes.filter((p) => getProgrammeStage(p) === "trial");

  return (
    <div className="flex flex-col">
      <HeroBanner />

      {/* Welcome */}
      <section className="px-4 pt-6 pb-2 md:px-8 md:pt-10">
        <h2 className="text-[22px] font-extrabold leading-tight text-ink md:text-[28px]">
          hello, {teacher.teacherName}.
        </h2>
      </section>

      {/* How to go through the hub — three-step sequence with hand-drawn
          doodle squiggles connecting the steps. */}
      <section className="px-4 pt-6 md:px-8 md:pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05] md:p-7">
          {/* Decorative doodles — subtle, low contrast, behind content */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 text-brand-orange/15 md:h-20 md:w-20"
            viewBox="0 0 80 80"
            fill="none"
          >
            <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="3 5" />
            <path d="M14 14 Q22 6 30 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg
            aria-hidden
            className="pointer-events-none absolute -bottom-2 -left-3 h-14 w-14 text-brand-orange/15 md:h-16 md:w-16"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path d="M8 50 Q18 38 28 50 T48 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M58 14 L60 4 L66 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="relative">
            <p className="text-[11px] font-bold tracking-normal text-brand-orange">
              how to use this hub
            </p>
            <p className="mt-1 text-[15px] font-extrabold lowercase leading-tight text-ink md:text-[18px]">
              three steps · in this order
            </p>

            <ol className="relative mt-5 grid gap-3 md:mt-7 md:grid-cols-3 md:gap-4">
              {/* Connecting squiggle on desktop only */}
              <svg
                aria-hidden
                className="pointer-events-none absolute left-[16%] right-[16%] top-[34px] hidden h-6 text-brand-orange/30 md:block"
                viewBox="0 0 600 24"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 12 Q60 -8 120 12 T240 12 T360 12 T480 12 Q540 -4 598 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                  className="animate-squiggle"
                />
              </svg>

              <GuideStep
                step={1}
                emoji="🧭"
                tone="yellow"
                title="pick a track"
                body={
                  <>
                    Programmes are split into{" "}
                    <span className="font-semibold text-brand-orange">live</span> (running now) and{" "}
                    <span className="font-semibold text-brand-orange">trial</span> (3–5, being piloted). Choose one and open a programme.
                  </>
                }
              />
              <GuideStep
                step={2}
                emoji="📖"
                tone="green"
                title="read the overview"
                body={
                  <>
                    <span className="font-semibold text-brand-orange">Get a gist of the programme</span> — what&apos;s taught, the skills it builds, and the games and resources in each segment.
                  </>
                }
              />
              <GuideStep
                step={3}
                emoji="📚"
                tone="blue"
                title="search the library"
                body={
                  <>
                    Want a particular game or resource?{" "}
                    <Link href="/library" className="text-ink-muted underline-offset-2 hover:underline">
                      Open the library
                    </Link>{" "}
                    and{" "}
                    <span className="font-semibold text-brand-orange">search by name, segment, or keyword</span>.
                  </>
                }
              />
            </ol>
          </div>
        </div>
      </section>

      {/* Programme tracks — live first, then trial */}
      <section className="px-4 pt-8 pb-8 md:px-8 md:pt-10 md:pb-12">
        <div className="space-y-10">
          <TrackSection
            label="live"
            blurb="running at the centre"
            tone="live"
            items={live}
          />
          <TrackSection
            label="trial"
            blurb="3–5 programmes being piloted · overviews ready, timings wip"
            tone="trial"
            items={trial}
          />
        </div>
      </section>
    </div>
  );
}
