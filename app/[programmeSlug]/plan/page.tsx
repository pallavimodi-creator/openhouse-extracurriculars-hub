"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, notFound, useRouter } from "next/navigation";
import { CheckCircle2, Circle } from "lucide-react";
import { getCurriculumProgramme } from "@/lib/content";
import { DaySelector } from "@/components/DaySelector";
import { DayPlan } from "@/components/DayPlan";
import { TrialSessionCard } from "@/components/TrialSessionCard";
import {
  getTeacher,
  getCompletedDays,
  markDayCompleted,
  unmarkDayCompleted,
  getNextDay,
} from "@/lib/teacher-state";

/**
 * The day-by-day session plan for a 5+ programme. Pick a session and see
 * exactly how that day runs — its FIXED segments in order plus the
 * FLEXIBLE (rotating) picks the educator makes. The segment-level fixed /
 * flexible key lives on the overview page ("the day · fixed & flexible");
 * this page is the session-by-session build of it.
 */
export default function ProgrammePlanPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.programmeSlug as string;
  const programme = getCurriculumProgramme(slug);

  // The trial (day 0) is no longer offered in the plan — the plan starts at
  // day 1. (Trial rows may still exist in the data; they're just not shown.)
  const hasTrialSession = false;

  const [selectedDay, setSelectedDay] = useState<number>(hasTrialSession ? 0 : 1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [authState, setAuthState] = useState<"loading" | "ok" | "redirect">(
    "loading",
  );
  const [isAdmin, setIsAdmin] = useState(false);

  // Auth gate + restore completed days + default to next uncompleted day.
  useEffect(() => {
    if (!programme) return;
    const teacher = getTeacher();
    if (!teacher) {
      router.replace("/login");
      setAuthState("redirect");
      return;
    }
    const admin = teacher.programmeSlug === "*" || teacher.role === "admin";
    setIsAdmin(admin);
    const allowed =
      admin ||
      (teacher.category
        ? programme.category === teacher.category
        : teacher.programmeSlug === slug);
    if (!allowed) {
      router.replace(`/${teacher.programmeSlug}/overview`);
      setAuthState("redirect");
      return;
    }
    const done = admin ? [] : getCompletedDays(slug);
    setCompletedDays(done);
    const next = admin
      ? hasTrialSession
        ? 0
        : 1
      : getNextDay(done, programme.totalSessions, hasTrialSession);
    setSelectedDay(next);
    setAuthState("ok");
  }, [slug, programme, hasTrialSession, router]);

  if (!programme) {
    notFound();
    return null;
  }

  if (programme.totalSessions === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <p className="text-[14px] text-ink-subtle">
          the day-by-day plan for this programme is coming soon.
        </p>
      </div>
    );
  }

  if (authState !== "ok") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-[12px] font-medium text-ink-subtle">loading...</p>
      </div>
    );
  }

  const checkpointDays = (programme.checkpoints ?? []).map((c) => c.afterSession);
  const currentSession = programme.sessionTable.find(
    (s) => s.sessionNumber === selectedDay,
  );
  const isCompleted = completedDays.includes(selectedDay);

  const handleToggleComplete = () => {
    if (isCompleted) {
      setCompletedDays(unmarkDayCompleted(slug, selectedDay));
      return;
    }
    const next = markDayCompleted(slug, selectedDay);
    setCompletedDays(next);
    const nextDay = getNextDay(next, programme.totalSessions, hasTrialSession);
    if (nextDay !== selectedDay) {
      setTimeout(() => setSelectedDay(nextDay), 250);
    }
  };

  return (
    <div className="flex flex-col pb-8">
      {/* Back link + compact header */}
      <div className="px-4 pt-3">
        <Link
          href={`/${slug}/overview`}
          className="text-[12px] font-bold text-brand-orange hover:underline"
        >
          ← {programme.title.toLowerCase()} · overview
        </Link>
      </div>
      <section className="px-4 pt-4 md:px-8">
        <h1 className="text-[22px] font-extrabold lowercase leading-tight text-ink md:text-[28px]">
          the day-by-day plan
        </h1>
        <p className="mt-1 text-[12px] font-semibold text-ink/60">
          {programme.ageLabel} · {programme.totalSessions} sessions
        </p>
        <p className="mt-2 text-[12px] leading-relaxed text-ink-muted md:text-[13px]">
          pick a session to see how that day runs — its{" "}
          <span className="font-bold text-ink">fixed</span> parts in order and
          the <span className="font-bold text-ink">flexible</span> games the
          educator picks. the fixed / flexible key is on the{" "}
          <Link
            href={`/${slug}/overview`}
            className="font-semibold text-brand-orange underline-offset-2 hover:underline"
          >
            overview
          </Link>
          .
        </p>
        <p className="mt-2 rounded-xl bg-brand-cream/60 p-3 text-[11.5px] leading-relaxed text-ink-muted ring-1 ring-ink/5">
          <span className="font-semibold text-ink">note · the experience book</span> — every session also ends with{" "}
          <span className="font-semibold text-ink">10–15 minutes in class</span> for the experience book, where each child
          records what they did and discovered. It&apos;s filled during the session, not homework. (Being finalised — not a
          separate resource here yet.)
        </p>
      </section>

      {/* Day selector */}
      <section className="mt-5 px-4 md:px-8">
        <h2 className="mb-2 text-[12px] font-bold text-ink-muted">
          select a session
        </h2>
        <DaySelector
          totalDays={programme.totalSessions}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          category={programme.category}
          checkpointDays={checkpointDays}
          hasTrialSession={hasTrialSession}
          completedDays={completedDays}
        />
      </section>

      {/* Daily plan — framed like a planner page. */}
      <section className="mt-6 px-4 md:px-8">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-brand-cream shadow-card ring-1 ring-ink/5">
          {programme.category !== "language" && (
            <div
              className={`flex items-center justify-around px-3 py-2 ${
                programme.category === "stem"
                  ? "bg-segment-blue/70"
                  : programme.category === "art"
                    ? "bg-segment-yellow/70"
                    : "bg-segment-green/70"
              }`}
            >
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="h-2.5 w-2.5 rounded-full bg-brand-white shadow-[inset_0_1px_2px_rgba(44,43,40,0.25)] ring-1 ring-ink/15"
                />
              ))}
            </div>
          )}
          <div className="px-4 pb-5 pt-4 md:px-6">
            {selectedDay === 0 && programme.trialSession ? (
              <TrialSessionCard trial={programme.trialSession} />
            ) : currentSession ? (
              <DayPlan programme={programme} session={currentSession} />
            ) : (
              <p className="py-8 text-center text-[13px] text-ink-subtle">
                no plan available for this session.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Mark as done — teacher-only; admin is in view mode. */}
      {currentSession && !isAdmin && (
        <section className="mt-5 px-4 md:px-8">
          <button
            onClick={handleToggleComplete}
            className={
              isCompleted
                ? "flex w-full items-center justify-center gap-2 rounded-card border-2 border-category-language bg-segment-green/20 py-3.5 text-[14px] font-bold text-green-900 transition hover:bg-segment-green/30 active:scale-[0.99]"
                : "flex w-full items-center justify-center gap-2 rounded-card bg-brand-orange py-3.5 text-[14px] font-bold text-white shadow-card transition hover:opacity-95 active:scale-[0.99]"
            }
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="h-5 w-5" />
                <span>session done · tap to undo</span>
              </>
            ) : (
              <>
                <Circle className="h-5 w-5" />
                <span>mark this session done</span>
              </>
            )}
          </button>
        </section>
      )}
    </div>
  );
}
