"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ClipboardCheck, ClipboardList, Home } from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { getTeacher, hasDashboardAccess, type TeacherState } from "@/lib/teacher-state";

/**
 * The 3-5 planner is paused for now — surfaces here just show a "closed"
 * state. Admins (openhouse team + centre admins) get shortcut links to
 * the activity log and completions dashboard so they can still get in.
 */
export default function PlanHubPage() {
  return (
    <TeacherGate>
      <PlanClosed />
    </TeacherGate>
  );
}

function PlanClosed() {
  const [teacher, setTeacher] = useState<TeacherState | null>(null);
  useEffect(() => {
    setTeacher(getTeacher());
  }, []);

  const admin = hasDashboardAccess(teacher);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-120px)] w-full max-w-2xl flex-col items-center justify-center px-4 py-10 md:px-8">
      <div className="w-full rounded-2xl bg-brand-white p-6 shadow-card ring-1 ring-ink/5 md:p-8">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-orange">
          3–5 planner
        </p>
        <h1 className="mt-1 text-[22px] font-extrabold leading-tight text-ink md:text-[26px]">
          paused for now
        </h1>
        <p className="mt-3 text-[13px] leading-relaxed text-ink-muted md:text-[14px]">
          the 3–5 day-planner is being redesigned and is not available at the moment. the 5+ programme plans (art &amp; design, language, robotics) are unaffected — open them from the home page.
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-[13px] font-bold text-white shadow-card transition hover:opacity-95"
        >
          <Home className="h-4 w-4" /> back to home
        </Link>

        {admin && (
          <div className="mt-6 border-t border-ink/5 pt-5">
            <p className="text-[11px] font-bold uppercase tracking-wide text-ink-muted">
              admin
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="/plan/completions"
                className="inline-flex items-center gap-1.5 rounded-chip bg-brand-white px-3 py-1.5 text-[12px] font-semibold text-ink ring-1 ring-ink/10 transition hover:bg-ink/5"
              >
                <ClipboardCheck className="h-3.5 w-3.5 text-brand-orange" />{" "}
                session completions dashboard
              </Link>
              <Link
                href="/plan/log"
                className="inline-flex items-center gap-1.5 rounded-chip bg-brand-white px-3 py-1.5 text-[12px] font-semibold text-ink ring-1 ring-ink/10 transition hover:bg-ink/5"
              >
                <ClipboardList className="h-3.5 w-3.5 text-brand-orange" />{" "}
                activity log
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
