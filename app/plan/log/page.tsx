"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ClipboardList } from "lucide-react";
import { getTeacher } from "@/lib/teacher-state";
import { supabase, isSupabaseConfigured, type SessionPlanRow } from "@/lib/supabase";

export default function ActivityLogPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<SessionPlanRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const t = getTeacher();
    if (!t) {
      router.replace("/login");
      return;
    }
    const admin = t.role === "admin" || t.programmeSlug === "*";
    if (!admin) {
      router.replace("/plan");
      return;
    }
    setAuthed(true);

    (async () => {
      if (!isSupabaseConfigured || !supabase) {
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("session_plans")
        .select("*")
        .order("session_date", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(500);
      if (error) setError(error.message);
      else setRows((data ?? []) as SessionPlanRow[]);
      setLoading(false);
    })();
  }, [router]);

  if (!authed) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-[12px] font-medium text-ink-subtle">loading…</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-4 pt-4 pb-10 md:px-8">
      <Link
        href="/plan"
        className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
      >
        <ChevronLeft className="h-3.5 w-3.5" /> back to planner
      </Link>
      <h1 className="flex items-center gap-2 text-[22px] font-bold text-ink">
        <ClipboardList className="h-5 w-5 text-brand-orange" /> activity log
      </h1>
      <p className="mt-1 text-[13px] text-ink-muted">what each teacher ran, by day and centre.</p>

      {!isSupabaseConfigured ? (
        <div className="mt-6 rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/5">
          <p className="text-[13px] font-bold text-ink">the log isn&apos;t connected yet</p>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">
            add the two <span className="font-semibold">NEXT_PUBLIC_SUPABASE_*</span> env vars and run the table SQL — full steps in <span className="font-semibold">planning/supabase-setup.md</span>. once connected, every plan a teacher submits appears here.
          </p>
        </div>
      ) : loading ? (
        <p className="mt-6 text-[12px] text-ink-subtle">loading log…</p>
      ) : error ? (
        <p className="mt-6 rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">{error}</p>
      ) : rows.length === 0 ? (
        <p className="mt-6 text-[13px] text-ink-subtle">no plans logged yet.</p>
      ) : (
        <div className="mt-5 space-y-3">
          <p className="text-[11px] font-medium text-ink-subtle">{rows.length} {rows.length === 1 ? "plan" : "plans"} logged</p>
          {rows.map((r) => (
            <div key={r.id ?? `${r.teacher_name}-${r.session_date}-${r.strand}`} className="rounded-card bg-brand-white p-4 shadow-card ring-1 ring-ink/5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[14px] font-extrabold text-ink">
                  {r.teacher_name} · <span className="lowercase text-brand-orange">{r.strand_label}</span>
                </p>
                <p className="text-[11px] text-ink-subtle">
                  {r.session_date}{r.centre ? ` · ${r.centre.toLowerCase()}` : ""}
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {Object.entries(r.picks ?? {}).map(([segId, v]) => (
                  <span key={segId} className="inline-flex items-center gap-1 rounded-chip bg-ink/5 px-2 py-0.5 text-[10px] text-ink-muted">
                    <span className="font-semibold lowercase text-ink-subtle">{segId.replace(/-/g, " ")}:</span> {v.resourceLabel}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
