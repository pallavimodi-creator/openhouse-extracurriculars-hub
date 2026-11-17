"use client";

/* Admin daily dashboard — a tick / cross grid of every working day in the
 * month, per educator. ✓ = completed, ✗ = not completed (with the reason),
 * · = not logged. HQ super-admin sees all centres (with a filter); a
 * centre-admin sees only their own centre. Reads Supabase daily_logs. */

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
import { CURRENT_CALENDAR, STRAND_BY_KEY } from "@/content/calendar";

type Cell = { status: DailyLogRow["status"]; notes: string } | null;
type Row = { key: string; name: string; centre: string | null; byDate: Record<string, Cell> };

const isDone = (s: DailyLogRow["status"]) => s === "completed";
const isNotDone = (s: DailyLogRow["status"]) =>
  s === "not_completed" || s === "partial" || s === "challenges";

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
      try {
        let q = supabase
          .from("daily_logs")
          .select("*")
          .order("log_date", { ascending: true })
          .order("created_at", { ascending: true })
          .limit(2000);
        if (!isSuperAdmin(teacher) && teacher.building) q = q.eq("centre", teacher.building);
        const { data } = await q;
        setRows((data as DailyLogRow[]) ?? []);
      } catch {
        setRows([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [teacher]);

  const hq = teacher ? isSuperAdmin(teacher) : false;

  // The working days of the month (holidays skipped) are the grid columns.
  const workingDays = useMemo(
    () => CURRENT_CALENDAR.days.filter((d) => !d.holiday),
    [],
  );

  const filtered = useMemo(
    () => (hq && centre !== "all" ? rows.filter((r) => r.centre === centre) : rows),
    [rows, centre, hq],
  );

  // Build one grid row per educator (name + centre). Latest log wins per date.
  const gridRows = useMemo<Row[]>(() => {
    const map = new Map<string, Row>();
    for (const r of filtered) {
      const name = (r.teacher_name || "unnamed").trim();
      const key = `${name}@@${r.centre ?? ""}`;
      const row = map.get(key) ?? { key, name, centre: r.centre ?? null, byDate: {} };
      row.byDate[r.log_date] = { status: r.status, notes: r.notes ?? "" };
      map.set(key, row);
    }
    return Array.from(map.values()).sort(
      (a, b) => (a.centre ?? "").localeCompare(b.centre ?? "") || a.name.localeCompare(b.name),
    );
  }, [filtered]);

  // The not-completed reasons, newest first — surfaced under the grid.
  const reasons = useMemo(
    () =>
      filtered
        .filter((r) => isNotDone(r.status) && (r.notes ?? "").trim())
        .sort((a, b) => (b.log_date).localeCompare(a.log_date)),
    [filtered],
  );

  const totals = useMemo(() => {
    let done = 0, notDone = 0;
    for (const r of filtered) {
      if (isDone(r.status)) done++;
      else if (isNotDone(r.status)) notDone++;
    }
    return { done, notDone };
  }, [filtered]);

  if (!teacher) return null;

  return (
    <div className="px-4 pb-12 pt-4 md:px-8">
      <section className="rounded-3xl bg-brand-orange px-6 py-6 text-brand-white shadow-card md:px-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-white/80">
          {hq ? "all centres" : teacher.building ?? "centre"} · daily dashboard
        </p>
        <h1 className="mt-1 text-[24px] font-extrabold lowercase md:text-[30px]">
          daily 3–5 logs · {CURRENT_CALENDAR.label}
        </h1>
        <p className="mt-1.5 text-[13px] font-medium text-brand-white/90">
          every educator&rsquo;s day — ✓ completed, ✗ not completed (reason below), · not logged.
        </p>
      </section>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {hq && (
          <>
            <span className="text-[12px] font-extrabold lowercase text-ink-muted">centre</span>
            <select
              value={centre}
              onChange={(e) => setCentre(e.target.value)}
              className="rounded-full bg-brand-white px-4 py-2 text-[13px] font-bold text-ink shadow-card ring-1 ring-ink/10"
            >
              <option value="all">all centres</option>
              {CENTRE_NAMES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </>
        )}
        <span className="ml-auto flex items-center gap-3 text-[12px] font-bold">
          <span className="text-category-language">✓ {totals.done}</span>
          <span className="text-brand-orange">✗ {totals.notDone}</span>
        </span>
      </div>

      {!isSupabaseConfigured && (
        <p className="mt-5 rounded-2xl bg-category-art/20 px-4 py-3 text-[13px] font-semibold text-ink ring-1 ring-category-art/40">
          not connected to the log database yet — add the Supabase env vars and run <b>planning/supabase-daily-logs.sql</b>, then every daily log shows here.
        </p>
      )}

      {loading ? (
        <p className="mt-8 text-center text-[13px] text-ink-muted">loading…</p>
      ) : gridRows.length === 0 ? (
        <p className="mt-8 rounded-2xl bg-brand-white px-4 py-6 text-center text-[13px] font-semibold text-ink-muted ring-1 ring-ink/[0.05]">
          no logs yet. once educators start marking their day, the grid fills in here.
        </p>
      ) : (
        <>
          {/* The grid — educators down, days across. Scrolls sideways. */}
          <div className="mt-5 overflow-x-auto rounded-2xl bg-brand-white shadow-card ring-1 ring-ink/[0.05]">
            <table className="border-collapse text-[12px]">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-brand-white px-3 py-2 text-left font-extrabold lowercase text-ink-muted">
                    educator
                  </th>
                  {workingDays.map((d) => {
                    const s = STRAND_BY_KEY[d.strand!];
                    return (
                      <th key={d.date} className="px-1.5 py-2 text-center font-bold" title={`${d.day} dec · ${s.label}`}>
                        <span className="block text-[11px] text-ink">{d.day}</span>
                        <span className={`mx-auto mt-0.5 block h-1.5 w-1.5 rounded-full ${s.dot}`} />
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {gridRows.map((row) => (
                  <tr key={row.key} className="border-t border-ink/5">
                    <td className="sticky left-0 z-10 bg-brand-white px-3 py-2 font-bold text-ink">
                      {row.name}
                      {hq && row.centre && (
                        <span className="block text-[10px] font-semibold text-ink-subtle">{row.centre}</span>
                      )}
                    </td>
                    {workingDays.map((d) => {
                      const c = row.byDate[d.date];
                      let glyph = "·", cls = "text-ink-subtle/40";
                      if (c && isDone(c.status)) { glyph = "✓"; cls = "text-category-language font-extrabold"; }
                      else if (c && isNotDone(c.status)) { glyph = "✗"; cls = "text-brand-orange font-extrabold"; }
                      return (
                        <td key={d.date} className="px-1.5 py-2 text-center" title={c && isNotDone(c.status) && c.notes ? c.notes : undefined}>
                          <span className={`text-[14px] ${cls}`}>{glyph}</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reasons — every ✗ with its reason. */}
          {reasons.length > 0 && (
            <section className="mt-6">
              <h2 className="text-[13px] font-extrabold lowercase text-ink-muted">not completed — reasons</h2>
              <div className="mt-2 space-y-2">
                {reasons.map((r, i) => {
                  const strand = STRAND_BY_KEY[r.programme as keyof typeof STRAND_BY_KEY];
                  return (
                    <div key={r.id ?? i} className="rounded-xl bg-brand-white p-3 shadow-card ring-1 ring-ink/[0.05]">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="text-brand-orange" aria-hidden>✗</span>
                        <span className="text-[13px] font-extrabold text-ink">{r.teacher_name}</span>
                        {hq && r.centre && <span className="text-[12px] font-bold text-ink-muted">· {r.centre}</span>}
                        {strand && (
                          <span className={`rounded-chip px-2 py-0.5 text-[10px] font-bold ${strand.bg} ${strand.text}`}>{strand.short}</span>
                        )}
                        <span className="ml-auto text-[12px] font-semibold text-ink-subtle">{r.log_date}</span>
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{r.notes}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
