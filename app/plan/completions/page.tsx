"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ClipboardCheck } from "lucide-react";
import { getBuilding, getTeacher, isAdmin, isSuperAdmin } from "@/lib/teacher-state";
import {
  isSupabaseConfigured,
  supabase,
  type SessionCompletionRow,
} from "@/lib/supabase";

/**
 * Admin dashboard — "which teachers have completed how many sessions",
 * grouped by category and age band. Reads every row in the
 * `session_completions` Supabase table and aggregates client-side.
 */
export default function CompletionsDashboardPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<SessionCompletionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [centreFilter, setCentreFilter] = useState<string>("all");
  // When a centre-admin views the dashboard, we lock it to their centre.
  // Super-admins get the full cross-centre view + centre filter.
  const [lockedCentre, setLockedCentre] = useState<string | null>(null);

  useEffect(() => {
    const t = getTeacher();
    if (!t) {
      router.replace("/login");
      return;
    }
    if (!isAdmin(t)) {
      // Non-admin teachers (single-programme + category teachers) don't
      // see the dashboard — they only mark their own sessions done.
      router.replace("/plan");
      return;
    }
    const superAdmin = isSuperAdmin(t);
    const centre = superAdmin ? null : (t.building ?? getBuilding());
    setLockedCentre(centre);
    if (centre) setCentreFilter(centre);
    setAuthed(true);

    (async () => {
      if (!isSupabaseConfigured || !supabase) {
        setLoading(false);
        return;
      }
      let query = supabase
        .from("session_completions")
        .select("*")
        .order("completed_at", { ascending: false })
        .limit(2000);
      // Centre-admins are scoped to their building server-side too —
      // don't pull other centres' rows into their browser.
      if (centre) query = query.eq("centre", centre);
      const { data, error } = await query;
      if (error) setError(error.message);
      else setRows((data ?? []) as SessionCompletionRow[]);
      setLoading(false);
    })();
  }, [router]);

  const centres = useMemo(() => {
    const s = new Set<string>();
    for (const r of rows) if (r.centre) s.add(r.centre);
    return Array.from(s).sort();
  }, [rows]);

  const filtered = useMemo(
    () => (centreFilter === "all" ? rows : rows.filter((r) => r.centre === centreFilter)),
    [rows, centreFilter],
  );

  // Group by category → age_band → teacher_name.
  const groups = useMemo(() => aggregate(filtered), [filtered]);

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
        href="/"
        className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-ink-muted ring-1 ring-ink/10 transition hover:bg-ink/5"
      >
        <ChevronLeft className="h-3.5 w-3.5" /> back
      </Link>
      <h1 className="flex items-center gap-2 text-[22px] font-bold text-ink">
        <ClipboardCheck className="h-5 w-5 text-brand-orange" /> session completions
      </h1>
      <p className="mt-1 text-[13px] text-ink-muted">
        every session a teacher marked done, grouped by category and age band.
      </p>
      {lockedCentre && (
        <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-chip bg-brand-orange/10 px-2.5 py-1 text-[11px] font-semibold text-brand-orange">
          scoped to {lockedCentre.toLowerCase()}
        </p>
      )}

      {!isSupabaseConfigured ? (
        <NotConnected />
      ) : loading ? (
        <p className="mt-6 text-[12px] text-ink-subtle">loading dashboard…</p>
      ) : error ? (
        <p className="mt-6 rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
          {error}
        </p>
      ) : rows.length === 0 ? (
        <p className="mt-6 text-[13px] text-ink-subtle">
          no sessions marked done yet. teachers tap the &quot;mark this session done&quot; button on any programme plan.
        </p>
      ) : (
        <>
          {/* Top-line summary + centre filter */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[12px] font-medium text-ink-muted">
              <span className="font-extrabold text-ink">{filtered.length}</span>{" "}
              session{filtered.length === 1 ? "" : "s"} logged{" "}
              {centreFilter === "all" ? "across all centres" : `at ${centreFilter}`}
            </p>
            {!lockedCentre && centres.length > 0 && (
              <div className="flex items-center gap-1.5">
                <label className="text-[11px] font-bold text-ink-muted">centre</label>
                <select
                  value={centreFilter}
                  onChange={(e) => setCentreFilter(e.target.value)}
                  className="rounded-lg border border-ink/10 bg-brand-white px-2 py-1 text-[12px] font-medium text-ink focus:border-brand-orange focus:outline-none"
                >
                  <option value="all">all centres</option>
                  {centres.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Category cards */}
          <div className="mt-5 space-y-5">
            {groups.map((group) => (
              <CategoryCard key={group.category} group={group} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function NotConnected() {
  return (
    <div className="mt-6 rounded-2xl bg-brand-white p-5 shadow-card ring-1 ring-ink/5">
      <p className="text-[13px] font-bold text-ink">the dashboard isn&apos;t connected yet</p>
      <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">
        add the two <span className="font-semibold">NEXT_PUBLIC_SUPABASE_*</span> env vars to Vercel and run the two table SQL blocks — full steps in <span className="font-semibold">planning/supabase-setup.md</span>. once connected, every session a teacher marks done shows up here.
      </p>
    </div>
  );
}

// ─── Aggregation ──────────────────────────────────────────────

type TeacherStat = {
  name: string;
  count: number;
  lastCompletedAt?: string;
  centres: string[];
};

type AgeBandGroup = {
  ageBand: string;
  totalCount: number;
  teachers: TeacherStat[];
};

type CategoryGroup = {
  category: string;
  totalCount: number;
  ageBands: AgeBandGroup[];
};

const CATEGORY_ORDER = ["language", "art", "stem"] as const;
const CATEGORY_LABEL: Record<string, string> = {
  language: "language",
  art: "art & design",
  stem: "stem",
};
const CATEGORY_COLOR: Record<string, string> = {
  language: "bg-category-language/15 text-category-language",
  art: "bg-category-art/15 text-category-art",
  stem: "bg-category-stem/15 text-category-stem",
};
const AGE_ORDER = ["3-5", "5-8", "8-12"] as const;

function aggregate(rows: SessionCompletionRow[]): CategoryGroup[] {
  const byCategory = new Map<string, Map<string, Map<string, TeacherStat>>>();

  for (const r of rows) {
    const cat = r.category ?? "other";
    const age = r.age_band ?? "other";
    const name = r.teacher_name.trim() || "unnamed";
    const catMap = byCategory.get(cat) ?? new Map();
    const ageMap = catMap.get(age) ?? new Map();
    const stat = ageMap.get(name) ?? {
      name,
      count: 0,
      lastCompletedAt: undefined,
      centres: [] as string[],
    };
    stat.count += 1;
    if (r.completed_at && (!stat.lastCompletedAt || r.completed_at > stat.lastCompletedAt)) {
      stat.lastCompletedAt = r.completed_at;
    }
    if (r.centre && !stat.centres.includes(r.centre)) stat.centres.push(r.centre);
    ageMap.set(name, stat);
    catMap.set(age, ageMap);
    byCategory.set(cat, catMap);
  }

  const categorySort = (a: string, b: string) => {
    const ai = CATEGORY_ORDER.indexOf(a as typeof CATEGORY_ORDER[number]);
    const bi = CATEGORY_ORDER.indexOf(b as typeof CATEGORY_ORDER[number]);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  };
  const ageSort = (a: string, b: string) => {
    const ai = AGE_ORDER.indexOf(a as typeof AGE_ORDER[number]);
    const bi = AGE_ORDER.indexOf(b as typeof AGE_ORDER[number]);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  };

  const out: CategoryGroup[] = [];
  const catKeys = Array.from(byCategory.keys()).sort(categorySort);
  for (const cat of catKeys) {
    const ageMap = byCategory.get(cat)!;
    const ageKeys = Array.from(ageMap.keys()).sort(ageSort);
    const ageBands: AgeBandGroup[] = [];
    let catTotal = 0;
    for (const age of ageKeys) {
      const teacherMap = ageMap.get(age)!;
      const teachers = Array.from(teacherMap.values()).sort(
        (a, b) => b.count - a.count || a.name.localeCompare(b.name),
      );
      const ageTotal = teachers.reduce((s, t) => s + t.count, 0);
      catTotal += ageTotal;
      ageBands.push({ ageBand: age, totalCount: ageTotal, teachers });
    }
    out.push({ category: cat, totalCount: catTotal, ageBands });
  }
  return out;
}

// ─── UI blocks ────────────────────────────────────────────────

function CategoryCard({ group }: { group: CategoryGroup }) {
  const label = CATEGORY_LABEL[group.category] ?? group.category;
  const chip = CATEGORY_COLOR[group.category] ?? "bg-ink/10 text-ink-muted";
  return (
    <section className="rounded-card bg-brand-white shadow-card ring-1 ring-ink/5">
      <header className="flex items-baseline justify-between gap-3 border-b border-ink/5 px-4 py-3 md:px-5">
        <div className="flex items-baseline gap-2">
          <h2 className="text-[15px] font-extrabold lowercase text-ink">{label}</h2>
          <span className={`rounded-chip px-2 py-0.5 text-[10px] font-bold ${chip}`}>
            {group.totalCount} session{group.totalCount === 1 ? "" : "s"}
          </span>
        </div>
      </header>
      <div className="divide-y divide-ink/5">
        {group.ageBands.map((band) => (
          <AgeBandRow key={band.ageBand} band={band} />
        ))}
      </div>
    </section>
  );
}

function AgeBandRow({ band }: { band: AgeBandGroup }) {
  return (
    <div className="px-4 py-3 md:px-5">
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-[12px] font-bold uppercase tracking-wide text-ink-muted">
          ages {band.ageBand}
        </p>
        <p className="text-[11px] font-semibold text-ink-subtle">
          {band.totalCount} session{band.totalCount === 1 ? "" : "s"}
        </p>
      </div>
      <ul className="mt-2 space-y-1.5">
        {band.teachers.map((t) => (
          <li
            key={t.name}
            className="flex items-baseline justify-between gap-3 rounded-lg bg-ink/[0.03] px-3 py-1.5"
          >
            <div className="min-w-0">
              <p className="truncate text-[13px] font-bold text-ink">{t.name}</p>
              {t.centres.length > 0 && (
                <p className="mt-0.5 truncate text-[10.5px] text-ink-subtle">
                  {t.centres.join(" · ").toLowerCase()}
                </p>
              )}
            </div>
            <p className="shrink-0 text-[13px] font-extrabold text-brand-orange">
              {t.count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
