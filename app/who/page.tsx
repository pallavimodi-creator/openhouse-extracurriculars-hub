"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Palette, MessageCircle, FlaskConical } from "lucide-react";
import {
  getBuilding,
  getRememberedTeacherName,
  getSessionFocus,
  getTeacher,
  hasDashboardAccess,
  setSessionFocus,
  type TeacherCategory,
} from "@/lib/teacher-state";

/**
 * "Who's teaching today?" — the educator picks a name (remembered on
 * this device) and a category (art / language / stem). Filters the rest
 * of the app to just that category and stamps mark-done rows with the
 * chosen name.
 *
 * Admins bypass this — they're not teaching, they're reviewing. Only
 * shown to non-admin logins (educators).
 */
export default function WhoPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [centre, setCentre] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<TeacherCategory | null>(null);

  useEffect(() => {
    const t = getTeacher();
    if (!t) {
      router.replace("/login");
      return;
    }
    // Admins don't teach — bounce them straight to home.
    if (hasDashboardAccess(t)) {
      router.replace("/");
      return;
    }
    setCentre(getBuilding() ?? t.building ?? null);
    // Pre-fill from any existing focus or the remembered name.
    const focus = getSessionFocus();
    setName(focus?.teacherName ?? getRememberedTeacherName());
    if (focus?.category) setCategory(focus.category);
    setReady(true);
  }, [router]);

  const canContinue = name.trim().length > 0 && category !== null;

  const handleContinue = () => {
    if (!category || !name.trim()) return;
    setSessionFocus({ teacherName: name, category });
    router.push("/");
  };

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-[12px] font-medium text-ink-subtle">loading…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-60px)] w-full max-w-md flex-col items-center px-4 pt-8 pb-16 md:pt-12">
      <div className="w-full text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-orange">
          {centre ? `oh. ${centre.toLowerCase()}` : "who's teaching today?"}
        </p>
        <h1 className="mt-1 text-[26px] font-extrabold leading-tight text-ink md:text-[30px]">
          who&apos;s teaching today?
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
          pick your name and the category you&apos;re running. we&apos;ll show only that category&apos;s programmes and log your sessions under your name.
        </p>
      </div>

      <div className="mt-8 w-full rounded-card bg-brand-white p-5 shadow-card ring-1 ring-ink/5 md:p-6">
        <label
          htmlFor="who-name"
          className="text-[11px] font-bold uppercase tracking-wide text-ink-muted"
        >
          your name
        </label>
        <input
          id="who-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Rhea"
          autoFocus
          className="mt-1.5 block w-full rounded-lg border border-ink/10 bg-bg/40 px-3 py-2.5 text-[15px] focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
        />

        <p className="mt-6 text-[11px] font-bold uppercase tracking-wide text-ink-muted">
          which category are you running?
        </p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <CategoryButton
            id="art"
            label="art & design"
            icon={Palette}
            selected={category === "art"}
            onSelect={setCategory}
          />
          <CategoryButton
            id="language"
            label="language"
            icon={MessageCircle}
            selected={category === "language"}
            onSelect={setCategory}
          />
          <CategoryButton
            id="stem"
            label="robotics"
            icon={FlaskConical}
            selected={category === "stem"}
            onSelect={setCategory}
          />
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!canContinue}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-card bg-brand-orange py-3.5 text-[14px] font-bold text-white shadow-card transition hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
        >
          continue
        </button>

        <p className="mt-3 text-center text-[10.5px] text-ink-subtle">
          you can switch category from the nav any time — nothing is locked.
        </p>
      </div>
    </div>
  );
}

function CategoryButton({
  id,
  label,
  icon: Icon,
  selected,
  onSelect,
}: {
  id: TeacherCategory;
  label: string;
  icon: typeof Palette;
  selected: boolean;
  onSelect: (id: TeacherCategory) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={
        selected
          ? "flex flex-col items-center gap-1.5 rounded-card border-2 border-brand-orange bg-brand-orange/10 px-3 py-3 text-[12px] font-bold text-ink transition active:scale-[0.98]"
          : "flex flex-col items-center gap-1.5 rounded-card border-2 border-transparent bg-ink/[0.04] px-3 py-3 text-[12px] font-semibold text-ink-muted transition hover:bg-ink/[0.08] active:scale-[0.98]"
      }
    >
      <Icon
        className={selected ? "h-5 w-5 text-brand-orange" : "h-5 w-5"}
        strokeWidth={selected ? 2.4 : 2}
      />
      <span className="text-center leading-tight">{label}</span>
    </button>
  );
}
