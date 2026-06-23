"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ClipboardList, ChevronRight } from "lucide-react";
import { getTeacher, getBuilding, type TeacherState } from "@/lib/teacher-state";
import { PLANNER_STRANDS, getStrandSegments } from "@/lib/planner";
import { supabase, isSupabaseConfigured, type SessionPlanRow } from "@/lib/supabase";

function todayISO() {
  // Build YYYY-MM-DD from the local date without Date math in module scope.
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export default function PlannerPage() {
  const router = useRouter();
  const [teacher, setTeacher] = useState<TeacherState | null>(null);
  const [centre, setCentre] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const [strand, setStrand] = useState<string | null>(null);
  const [picks, setPicks] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const t = getTeacher();
    if (!t) {
      router.replace("/login");
      return;
    }
    setTeacher(t);
    setCentre(getBuilding());
    setName(t.teacherName && t.teacherName !== "admin" && t.teacherName !== "openhouse centre" ? t.teacherName : "");
    setDate(todayISO());
    setReady(true);
  }, [router]);

  const strandMeta = PLANNER_STRANDS.find((s) => s.slug === strand);
  const segments = useMemo(
    () => (strand ? getStrandSegments(strand) : []),
    [strand],
  );

  const isAdmin = teacher?.role === "admin" || teacher?.programmeSlug === "*";

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-[12px] font-medium text-ink-subtle">loading…</p>
      </div>
    );
  }

  const choosable = segments.filter((s) => s.resources.length > 0);
  const canSubmit =
    !!strand && !!name.trim() && choosable.every((s) => picks[s.id]);

  const handleSubmit = async () => {
    if (!strand || !strandMeta) return;
    setStatus("saving");
    setErrorMsg("");

    const picksOut: SessionPlanRow["picks"] = {};
    for (const seg of choosable) {
      const rid = picks[seg.id];
      const res = seg.resources.find((r) => r.id === rid);
      if (res) picksOut[seg.id] = { resourceId: res.id, resourceLabel: res.label };
    }

    const row: SessionPlanRow = {
      session_date: date,
      teacher_name: name.trim(),
      teacher_username: teacher?.username ?? null,
      centre: centre,
      strand,
      strand_label: strandMeta.label,
      picks: picksOut,
    };

    if (!isSupabaseConfigured || !supabase) {
      // No backend yet — the plan still works as a run-sheet.
      setStatus("saved");
      return;
    }
    const { error } = await supabase.from("session_plans").insert(row);
    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }
    setStatus("saved");
  };

  return (
    <div className="flex flex-col px-4 pt-4 pb-10 md:px-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-[22px] font-bold text-ink">today&apos;s plan</h1>
          <p className="mt-1 text-[13px] text-ink-muted">
            pick today&apos;s strand and the resource for each part — it becomes your run-sheet and is logged for the centre.
          </p>
        </div>
        {isAdmin && (
          <Link
            href="/plan/log"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-chip bg-brand-white px-3 py-1.5 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
          >
            <ClipboardList className="h-3.5 w-3.5" /> activity log
          </Link>
        )}
      </div>

      {status === "saved" ? (
        <SavedCard
          name={name}
          date={date}
          strandLabel={strandMeta?.label ?? ""}
          centre={centre}
          logged={isSupabaseConfigured}
          segments={choosable.map((s) => ({
            name: s.name,
            resource: s.resources.find((r) => r.id === picks[s.id])?.label ?? "",
          }))}
          onReset={() => {
            setStrand(null);
            setPicks({});
            setStatus("idle");
          }}
        />
      ) : (
        <>
          {/* who + when */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-[11px] font-bold text-ink-muted">your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. anjali"
                className="mt-1 block w-full rounded-lg border border-ink/10 bg-brand-white px-3 py-2.5 text-[14px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-ink-muted">date</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-ink/10 bg-brand-white px-3 py-2.5 text-[14px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
              />
            </label>
          </div>
          {centre && (
            <p className="mt-2 text-[11px] text-ink-subtle">centre: <span className="font-semibold text-ink-muted">{centre.toLowerCase()}</span></p>
          )}

          {/* strand chooser */}
          <h2 className="mt-6 text-[13px] font-bold text-ink-muted">1 · which strand today?</h2>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {PLANNER_STRANDS.map((s) => (
              <button
                key={s.slug}
                onClick={() => {
                  setStrand(s.slug);
                  setPicks({});
                }}
                className={
                  strand === s.slug
                    ? "rounded-card bg-brand-orange px-3 py-3 text-[13px] font-extrabold lowercase text-white shadow-card"
                    : "rounded-card bg-brand-white px-3 py-3 text-[13px] font-semibold lowercase text-ink ring-1 ring-ink/10 transition hover:bg-ink/5"
                }
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* per-segment resource pickers */}
          {strand && (
            <>
              <h2 className="mt-6 text-[13px] font-bold text-ink-muted">2 · resource for each part</h2>
              <p className="mt-1 text-[11px] text-ink-subtle">circle time and closing reflection bookend every day (fixed). pick a resource for each part below.</p>
              <div className="mt-3 space-y-2">
                {segments.map((seg) => (
                  <div key={seg.id} className="flex flex-wrap items-center gap-3 rounded-card bg-brand-white p-3 shadow-card ring-1 ring-ink/5">
                    <span className="min-w-[120px] text-[13px] font-extrabold lowercase text-ink">{seg.name}</span>
                    {seg.resources.length > 0 ? (
                      <select
                        value={picks[seg.id] ?? ""}
                        onChange={(e) => setPicks((p) => ({ ...p, [seg.id]: e.target.value }))}
                        className="flex-1 rounded-lg border border-ink/10 bg-bg/40 px-3 py-2 text-[13px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                      >
                        <option value="">— choose —</option>
                        {seg.resources.map((r) => (
                          <option key={r.id} value={r.id}>{r.label}</option>
                        ))}
                      </select>
                    ) : (
                      <span className="flex-1 text-[12px] italic text-ink-subtle">fixed — just run it</span>
                    )}
                  </div>
                ))}
              </div>

              {status === "error" && (
                <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
                  couldn&apos;t save: {errorMsg}
                </p>
              )}
              {!isSupabaseConfigured && (
                <p className="mt-3 rounded-lg bg-brand-orange/8 px-3 py-2 text-[11px] text-ink-muted">
                  note: the centre log isn&apos;t connected yet (Supabase not configured) — your plan still works as a run-sheet. see <span className="font-semibold">planning/supabase-setup.md</span>.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={!canSubmit || status === "saving"}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-card bg-brand-orange py-3 text-[14px] font-extrabold text-white shadow-card transition hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "saving" ? "saving…" : "submit today's plan"}
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

function SavedCard({
  name,
  date,
  strandLabel,
  centre,
  logged,
  segments,
  onReset,
}: {
  name: string;
  date: string;
  strandLabel: string;
  centre: string | null;
  logged: boolean;
  segments: { name: string; resource: string }[];
  onReset: () => void;
}) {
  return (
    <div className="mt-5 rounded-2xl bg-brand-white p-5 shadow-float ring-1 ring-ink/5">
      <div className="flex items-center gap-2 text-category-language">
        <CheckCircle2 className="h-5 w-5" />
        <p className="text-[14px] font-extrabold">
          {logged ? "plan submitted & logged" : "plan ready (run-sheet)"}
        </p>
      </div>
      <p className="mt-1 text-[12px] text-ink-muted">
        {name} · {strandLabel} · {date}{centre ? ` · ${centre.toLowerCase()}` : ""}
      </p>
      <div className="mt-4 divide-y divide-ink/5 rounded-lg bg-brand-cream/40">
        {segments.map((s) => (
          <div key={s.name} className="flex items-center justify-between gap-3 px-3 py-2">
            <span className="text-[12px] font-bold lowercase text-ink">{s.name}</span>
            <span className="text-[12px] text-ink-muted">{s.resource}</span>
          </div>
        ))}
      </div>
      <button
        onClick={onReset}
        className="mt-4 w-full rounded-card border border-ink/10 bg-brand-white py-2.5 text-[12px] font-semibold text-ink transition hover:bg-ink/5"
      >
        plan another day
      </button>
    </div>
  );
}
