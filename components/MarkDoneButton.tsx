"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import type { CurriculumProgramme } from "@/content/types";
import {
  getBuilding,
  getRememberedTeacherName,
  getSessionFocus,
  getTeacher,
  markDayCompleted,
  setRememberedTeacherName,
  unmarkDayCompleted,
} from "@/lib/teacher-state";
import {
  isSupabaseConfigured,
  supabase,
  type SessionCompletionRow,
} from "@/lib/supabase";

/**
 * "Mark this session done" — the button teachers tap at the end of a
 * class. If the educator has already set a session focus (name + category
 * on /who), tapping submits immediately using that name — no re-prompt.
 * Otherwise an inline form asks for a name (remembered per device +
 * centre for next time). Writes a row to session_completions and syncs
 * into the local "completed days" store so the DaySelector tick keeps
 * working across pages.
 */
export function MarkDoneButton({
  programme,
  sessionNumber,
  isCompleted,
  onChange,
}: {
  programme: CurriculumProgramme;
  sessionNumber: number;
  isCompleted: boolean;
  onChange: (completedDays: number[]) => void;
}) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [focusName, setFocusName] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedNote, setSavedNote] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Read the session focus on mount so we know whether to skip the
    // inline form. Falls back to the remembered name for the form.
    const focus = getSessionFocus();
    setFocusName(focus?.teacherName ?? null);
    setName(focus?.teacherName ?? getRememberedTeacherName());
  }, [showForm]);

  const handleUndo = () => {
    onChange(unmarkDayCompleted(programme.slug, sessionNumber));
    setSavedNote(null);
  };

  const openForm = () => {
    setError(null);
    setSavedNote(null);
    setShowForm(true);
  };

  const submit = async (rawName: string) => {
    const trimmed = rawName.trim();
    if (!trimmed) {
      setError("please add your name so we can log this session.");
      return;
    }
    setSaving(true);
    setError(null);
    setRememberedTeacherName(trimmed);

    // Local tick first — never fail on the tick regardless of Supabase.
    const nextCompleted = markDayCompleted(programme.slug, sessionNumber);
    onChange(nextCompleted);

    // Best-effort remote log. If Supabase isn't wired up, we still show
    // success — the tick works either way.
    if (isSupabaseConfigured && supabase) {
      const teacher = getTeacher();
      const row: SessionCompletionRow = {
        session_number: sessionNumber,
        teacher_name: trimmed,
        teacher_username: teacher?.username ?? null,
        centre: getBuilding(),
        programme_slug: programme.slug,
        programme_label: programme.title,
        category: programme.category ?? null,
        age_band: programme.ageGroup ?? null,
      };
      const { error: supaError } = await supabase
        .from("session_completions")
        .insert(row);
      if (supaError) {
        setError(`local tick saved, but centre log failed: ${supaError.message}`);
        setSaving(false);
        return;
      }
    }

    setSavedNote(`marked done by ${trimmed}.`);
    setSaving(false);
    setShowForm(false);
  };

  const handleSubmit = () => submit(name);
  const handleQuickSubmit = () => {
    if (focusName) submit(focusName);
    else openForm();
  };

  if (isCompleted) {
    return (
      <div className="flex flex-col gap-2">
        <button
          onClick={handleUndo}
          className="flex w-full items-center justify-center gap-2 rounded-card border-2 border-category-language bg-segment-green/20 py-3.5 text-[14px] font-bold text-green-900 transition hover:bg-segment-green/30 active:scale-[0.99]"
        >
          <CheckCircle2 className="h-5 w-5" />
          <span>session done · tap to undo</span>
        </button>
        {savedNote && (
          <p className="text-center text-[11px] text-ink-subtle">{savedNote}</p>
        )}
      </div>
    );
  }

  if (!showForm) {
    // Focus set → one-tap submit (no re-prompt), name shown on the button
    // so the educator knows who they're logging as. No focus → open the
    // inline form and ask for a name.
    return (
      <button
        onClick={handleQuickSubmit}
        disabled={saving}
        className="flex w-full flex-col items-center justify-center gap-0.5 rounded-card bg-brand-orange py-3.5 text-[14px] font-bold text-white shadow-card transition hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="flex items-center gap-2">
          <Circle className="h-5 w-5" />
          <span>{saving ? "saving…" : "mark this session done"}</span>
        </span>
        {focusName && !saving && (
          <span className="text-[10.5px] font-semibold opacity-80">
            as {focusName.toLowerCase()}
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="rounded-card bg-brand-white p-4 shadow-card ring-1 ring-ink/10">
      <label
        htmlFor="mark-done-teacher-name"
        className="text-[11px] font-bold uppercase tracking-wide text-ink-muted"
      >
        who ran this session?
      </label>
      <input
        id="mark-done-teacher-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Rhea"
        autoFocus
        className="mt-1.5 block w-full rounded-lg border border-ink/10 bg-bg/40 px-3 py-2.5 text-[14px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
      />
      {error && (
        <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
          {error}
        </p>
      )}
      <div className="mt-3 flex gap-2">
        <button
          onClick={handleSubmit}
          disabled={saving || !name.trim()}
          className="flex flex-1 items-center justify-center gap-2 rounded-card bg-brand-orange py-3 text-[13px] font-bold text-white shadow-card transition hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <CheckCircle2 className="h-4 w-4" />
          {saving ? "saving…" : "confirm — mark done"}
        </button>
        <button
          onClick={() => setShowForm(false)}
          disabled={saving}
          className="rounded-card bg-ink/5 px-4 py-3 text-[13px] font-semibold text-ink-muted hover:bg-ink/10 disabled:opacity-40"
        >
          cancel
        </button>
      </div>
      <p className="mt-2 text-[10.5px] text-ink-subtle">
        your name is remembered for this centre — next time it&apos;ll pre-fill.
      </p>
    </div>
  );
}
