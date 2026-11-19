"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, notFound, useRouter } from "next/navigation";
import { getCurriculumProgramme } from "@/lib/content";
import { DaySelector } from "@/components/DaySelector";
import { DayPlan } from "@/components/DayPlan";
import { TrialSessionCard } from "@/components/TrialSessionCard";
import { MarkDoneButton } from "@/components/MarkDoneButton";
import {
  getTeacher,
  getCompletedDays,
  getNextDay,
  type TeacherState,
} from "@/lib/teacher-state";
import {
  supabase,
  isSupabaseConfigured,
  type DailyLogRow,
} from "@/lib/supabase";

// The 3–5 strands integrate logging into the plan itself (name before the
// plan, remark at the end). Other programmes keep the simple mark-done flow.
const THREE_FIVE = new Set([
  "art-design-3-5",
  "language-storytelling-3-5",
  "stem-3-5",
]);
const NAME_KEY = "oh-daily-educator-name";
const todayISO = () => new Date().toISOString().slice(0, 10);
// Binary day completion — the only two options an educator marks.
const LOG_STATUS = [
  { key: "completed", label: "completed ✓" },
  { key: "not_completed", label: "did not complete ✗" },
] as const;

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
  const [teacher, setTeacherState] = useState<TeacherState | null>(null);

  // 3–5 integrated logging (name before the plan, remark at the end).
  const is35 = THREE_FIVE.has(slug);
  const [logName, setLogName] = useState("");
  const [logStatus, setLogStatus] = useState<
    "completed" | "not_completed" | null
  >(null);
  const [logNotes, setLogNotes] = useState("");
  const [logSaving, setLogSaving] = useState(false);
  const [logSaved, setLogSaved] = useState(false);
  const [logError, setLogError] = useState<string | null>(null);

  // Remember the educator's name across sessions on this device.
  useEffect(() => {
    try {
      const n = localStorage.getItem(NAME_KEY);
      if (n) setLogName(n);
    } catch {}
  }, []);

  // Fresh log form whenever the educator switches session.
  useEffect(() => {
    setLogStatus(null);
    setLogNotes("");
    setLogSaved(false);
    setLogError(null);
  }, [selectedDay]);

  // Auth gate + restore completed days + default to next uncompleted day.
  useEffect(() => {
    if (!programme) return;
    const teacher = getTeacher();
    if (!teacher) {
      router.replace("/login");
      setAuthState("redirect");
      return;
    }
    setTeacherState(teacher);
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
    // Deep-link from the rotation calendar: /plan?session=N opens that session.
    let deepLink: number | null = null;
    try {
      const raw = new URLSearchParams(window.location.search).get("session");
      const n = raw ? parseInt(raw, 10) : NaN;
      if (Number.isInteger(n) && n >= 1 && n <= programme.totalSessions) deepLink = n;
    } catch {}
    const next =
      deepLink ??
      (admin
        ? hasTrialSession
          ? 0
          : 1
        : getNextDay(done, programme.totalSessions, hasTrialSession));
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

  const handleCompletedChange = (nextCompleted: number[]) => {
    setCompletedDays(nextCompleted);
    // After marking done (not undo), jump to the next uncompleted day.
    const wasCompleted = completedDays.includes(selectedDay);
    const isNowCompleted = nextCompleted.includes(selectedDay);
    if (!wasCompleted && isNowCompleted) {
      const nextDay = getNextDay(
        nextCompleted,
        programme.totalSessions,
        hasTrialSession,
      );
      if (nextDay !== selectedDay) {
        setTimeout(() => setSelectedDay(nextDay), 250);
      }
    }
  };

  // When a day is not completed, the reason is required.
  const reasonOk = logStatus !== "not_completed" || !!logNotes.trim();
  const canSubmitLog = !!logName.trim() && !!logStatus && reasonOk && !logSaving;
  const submitLog = async () => {
    if (!is35 || !programme) return;
    const t = teacher ?? getTeacher();
    if (!t || !logName.trim() || !logStatus) return;
    if (logStatus === "not_completed" && !logNotes.trim()) return;
    setLogSaving(true);
    setLogError(null);
    try {
      localStorage.setItem(NAME_KEY, logName.trim());
    } catch {}
    if (!isSupabaseConfigured || !supabase) {
      setLogError(
        "not connected to the log database yet — the operator needs to run the daily-logs setup once.",
      );
      setLogSaving(false);
      return;
    }
    const row: DailyLogRow = {
      log_date: todayISO(),
      centre: t.building ?? null,
      teacher_username: t.username ?? null,
      teacher_name: logName.trim(),
      programme: programme.category as "art" | "language" | "stem" | "music",
      status: logStatus,
      notes: logStatus === "not_completed" ? logNotes.trim() : "",
    };
    const { error } = await supabase.from("daily_logs").insert(row);
    setLogSaving(false);
    if (error) {
      setLogError(error.message);
      return;
    }
    setLogSaved(true);
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
      </section>

      {/* 3–5: dashboard is integrated into the daily plans — admin only. */}
      {is35 && isAdmin && (
        <section className="mt-3 px-4 md:px-8">
          <Link
            href="/daily"
            className="inline-flex items-center gap-1.5 rounded-chip bg-brand-orange/10 px-3 py-1.5 text-[12px] font-extrabold text-brand-orange ring-1 ring-brand-orange/20 transition hover:bg-brand-orange/15"
          >
            admin · daily dashboard — all centres&rsquo; logs →
          </Link>
        </section>
      )}

      {/* 3–5: the educator's name — entered before reading the plan; their
          remark is logged at the end. Centre comes from their login. */}
      {is35 && (
        <section className="mt-4 px-4 md:px-8">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05] md:p-5">
            <div className="flex flex-wrap items-end gap-x-3 gap-y-2">
              <div className="min-w-[180px] flex-1">
                <label htmlFor="log-name" className="text-[11px] font-bold text-ink-muted">
                  before you start — your name
                </label>
                <input
                  id="log-name"
                  type="text"
                  value={logName}
                  onChange={(e) => setLogName(e.target.value)}
                  placeholder="e.g. priya"
                  className="mt-1 block w-full rounded-lg border border-ink/10 bg-bg/40 px-3 py-2.5 text-[14px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                />
              </div>
              {teacher?.building && (
                <span className="rounded-chip bg-brand-cream px-3 py-2 text-[12px] font-bold text-ink-muted">
                  centre · {teacher.building}
                </span>
              )}
            </div>
          </div>
        </section>
      )}

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

      {/* 3–5: log the session right here — remark at the end of the plan,
          feeding the centre's daily dashboard. No separate journey. */}
      {currentSession && selectedDay > 0 && is35 && (
        <section className="mt-5 px-4 md:px-8">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/[0.05] md:p-6">
            <h2 className="text-[15px] font-extrabold lowercase text-ink">
              mark today
            </h2>
            <p className="mt-0.5 text-[12.5px] text-ink-muted">
              did you complete today&rsquo;s session ({todayISO()})?
            </p>

            {logSaved ? (
              <div className="mt-4 rounded-2xl bg-category-language/15 px-4 py-4 text-center ring-1 ring-category-language/30">
                <p className="text-[14px] font-extrabold text-ink">marked ✓</p>
                <p className="mt-1 text-[12.5px] text-ink-muted">
                  thanks{logName.trim() ? `, ${logName.trim()}` : ""} — it&rsquo;s on the daily dashboard.
                </p>
                <button
                  onClick={() => {
                    setLogSaved(false);
                    setLogStatus(null);
                    setLogNotes("");
                  }}
                  className="mt-2 text-[12px] font-bold text-brand-orange"
                >
                  mark another entry
                </button>
              </div>
            ) : (
              <>
                <div className="mt-3 flex flex-wrap gap-2">
                  {LOG_STATUS.map((s) => {
                    const active = logStatus === s.key;
                    const good = s.key === "completed";
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setLogStatus(s.key)}
                        className={`rounded-full px-4 py-2 text-[13px] font-bold transition ${
                          active
                            ? good
                              ? "bg-category-language text-white shadow-card"
                              : "bg-brand-orange text-white shadow-card"
                            : "bg-brand-cream text-ink-muted ring-1 ring-ink/10 hover:bg-ink/5"
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>

                {/* The reason — only asked for (and required) when NOT completed. */}
                {logStatus === "not_completed" && (
                  <div className="mt-3">
                    <label htmlFor="log-reason" className="text-[12px] font-bold text-ink-muted">
                      why couldn&rsquo;t it be completed?
                    </label>
                    <textarea
                      id="log-reason"
                      value={logNotes}
                      onChange={(e) => setLogNotes(e.target.value)}
                      placeholder="e.g. power cut · low attendance · materials not ready…"
                      rows={3}
                      className="mt-1 block w-full rounded-lg border border-ink/10 bg-bg/40 px-3 py-2.5 text-[14px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                    />
                  </div>
                )}

                {logError && (
                  <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
                    {logError}
                  </p>
                )}
                {!logName.trim() && (
                  <p className="mt-2 text-[12px] font-semibold text-brand-orange">
                    add your name at the top first.
                  </p>
                )}
                <button
                  type="button"
                  onClick={submitLog}
                  disabled={!canSubmitLog}
                  className="mt-3 w-full rounded-full bg-brand-orange py-3 text-[14px] font-extrabold text-white shadow-card transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {logSaving ? "saving…" : "mark today"}
                </button>
              </>
            )}
          </div>
        </section>
      )}

      {/* 5+ programmes keep the simple mark-done flow. */}
      {currentSession && selectedDay > 0 && !is35 && (
        <section className="mt-5 px-4 md:px-8">
          <MarkDoneButton
            programme={programme}
            sessionNumber={selectedDay}
            isCompleted={isCompleted}
            onChange={handleCompletedChange}
          />
        </section>
      )}
    </div>
  );
}
