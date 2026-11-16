"use client";

/* Admin daily dashboard — every centre's daily 3–5 logs.
 * HQ super-admin sees all centres (with a filter); a centre-admin sees
 * only their own centre. Reads Supabase daily_logs. */

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getTeacher,
  hasDashboardAccess,
  isSuperAdmin,
  type TeacherState,
} from "@/lib/teacher-state";
import { CENTRE_NAMES } from "@/lib/centres";
import {
  supabase,
  isSupabaseConfigured,
  type DailyLogRow,
} from "@/lib/supabase";

const PROG = {
  art: { label: "art & design", cls: "bg-category-art/25 text-ink" },
  language: { label: "language & storytelling", cls: "bg-category-language/30 text-ink" },
  stem: { label: "stem & robotics", cls: "bg-category-stem/25 text-ink" },
} as const;
const STATUS = {
  completed: { label: "completed", cls: "text-category-language" },
  partial: { label: "partly done", cls: "text-category-art" },
  challenges: { label: "faced challenges", cls: "text-brand-orange" },
} as const;

export default function DailyDashboardPage() {
  const router = useRouter();
  const [teacher, setTeacher] = useState<TeacherState | null>(null);
  const [rows, setRows] = useState<DailyLogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [centre, setCentre] = useState<string>("all");

  useEffect(() => {
    const t = getTeacher();
    if (!t) { router.replace("/login"); return; }
    if (!hasDashboardAccess(t)) { router.replace("/rotating"); return; }
    setTeacher(t);
  }, [router]);

  useEffect(() => {
    if (!teacher) return;
    (async () => {
      setLoading(true);
      if (!isSupabaseConfigured || !supabase) { setRows([]); setLoading(false); return; }
      let q = supabase.from("daily_logs").select("*").order("log_date", { ascending: false }).order("created_at", { ascending: false }).limit(500);
      // centre-admins only see their own centre
      if (!isSuperAdmin(teacher) && teacher.building) q = q.eq("centre", teacher.building);
      const { data } = await q;
      setRows((data as DailyLogRow[]) ?? []);
      setLoading(false);
    })();
  }, [teacher]);

  const hq = teacher ? isSuperAdmin(teacher) : false;
  const filtered = useMemo(
    () => (hq && centre !== "all" ? rows.filter((r) => r.centre === centre) : rows),
    [rows, centre, hq]
  );
  // quick counts per centre for HQ
  const byCentre = useMemo(() => {
    const m = new Map<string, number>();
    rows.forEach((r) => m.set(r.centre || "—", (m.get(r.centre || "—") || 0) + 1));
    return m;
  }, [rows]);

  if (!teacher) return null;

  return (
    <div className="px-4 pb-12 pt-4 md:px-8">
      <section className="rounded-3xl bg-brand-orange px-6 py-6 text-brand-white shadow-card md:px-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-white/80">
          {hq ? "all centres" : teacher.building ?? "centre"} · daily dashboard
        </p>
        <h1 className="mt-1 text-[24px] font-extrabold lowercase md:text-[30px]">daily 3–5 logs</h1>
        <p className="mt-1.5 text-[13px] font-medium text-brand-white/90">
          every educator&rsquo;s daily entry — which strand ran, how it went, and their notes.
        </p>
      </section>

      {hq && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-[12px] font-extrabold lowercase text-ink-muted">centre</span>
          <select
            value={centre}
            onChange={(e) => setCentre(e.target.value)}
            className="rounded-full bg-brand-white px-4 py-2 text-[13px] font-bold text-ink shadow-card ring-1 ring-ink/10"
          >
            <option value="all">all centres</option>
            {CENTRE_NAMES.map((c) => (
              <option key={c} value={c}>
                {c}{byCentre.get(c) ? ` (${byCentre.get(c)})` : ""}
              </option>
            ))}
          </select>
          <span className="ml-auto text-[12px] font-bold text-ink-muted">{filtered.length} entries</span>
        </div>
      )}

      {!isSupabaseConfigured && (
        <p className="mt-5 rounded-2xl bg-category-art/20 px-4 py-3 text-[13px] font-semibold text-ink ring-1 ring-category-art/40">
          not connected to the log database yet — add the Supabase env vars and run <b>planning/supabase-daily-logs.sql</b>, then every daily log shows here.
        </p>
      )}

      {loading ? (
        <p className="mt-8 text-center text-[13px] text-ink-muted">loading…</p>
      ) : filtered.length === 0 ? (
        <p className="mt-8 rounded-2xl bg-brand-white px-4 py-6 text-center text-[13px] font-semibold text-ink-muted ring-1 ring-ink/[0.05]">
          no logs yet. once educators start logging their day, they appear here.
        </p>
      ) : (
        <div className="mt-5 space-y-2.5">
          {filtered.map((r, i) => {
            const p = PROG[r.programme] ?? { label: r.programme, cls: "bg-ink/10 text-ink" };
            const s = STATUS[r.status] ?? { label: r.status, cls: "text-ink-muted" };
            return (
              <div key={r.id ?? i} className="rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className={`rounded-chip px-2.5 py-0.5 text-[11px] font-extrabold lowercase ${p.cls}`}>{p.label}</span>
                  <span className="text-[14px] font-extrabold text-ink">{r.teacher_name}</span>
                  {hq && <span className="text-[12px] font-bold text-ink-muted">· {r.centre || "—"}</span>}
                  <span className={`text-[12px] font-extrabold ${s.cls}`}>· {s.label}</span>
                  <span className="ml-auto text-[12px] font-semibold text-ink-subtle">{r.log_date}</span>
                </div>
                {r.notes && <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{r.notes}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
