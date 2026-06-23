"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  ChevronRight,
  Sparkles,
  Info,
  CalendarRange,
  Layers,
  Megaphone,
} from "lucide-react";
import { TeacherGate } from "@/components/TeacherGate";
import { getTeacher } from "@/lib/teacher-state";

// "About the programme" — the combined intro the whole 3-5 programme shares.
const ABOUT = [
  {
    title: "the parent brochure",
    blurb: "the 3–5 positioning — why play-based, and the three strands",
    href: "/plan/brochure",
    icon: Megaphone,
  },
  {
    title: "why three strands",
    blurb: "the split into art · stem · language, and the parent story",
    href: "/plan/docs/parent-positioning",
    icon: Info,
  },
  {
    title: "the experience book",
    blurb: "the live, fillable book — one per child, with a class progress dashboard",
    href: "/plan/experience",
    icon: BookOpen,
    wip: true,
  },
  {
    title: "how to fill the experience book",
    blurb: "the educator guide — worked example + golden rules",
    href: "/plan/docs/how-to-fill-the-experience-book",
    icon: ChevronRight,
  },
];

// The three programmes — each opens its full overview (daily structure ·
// skills · games with images); the chips jump to the deeper docs.
const PROGRAMMES: {
  label: string;
  slug: string;
  note: string;
  day: string;
  accent: string;
  blurb: string;
  extra?: { slug: string; label: string };
}[] = [
  {
    label: "art & design",
    slug: "art-design-3-5",
    note: "art-programme-note",
    day: "pilot-05-art-day-2hr",
    accent: "bg-category-art/15 text-category-art",
    blurb: "fine motor · colour · creative expression",
  },
  {
    label: "stem",
    slug: "robotics-3-5",
    note: "stem-programme-note",
    day: "pilot-06-stem-day-2hr",
    extra: { slug: "imagine-playground-activities", label: "imagine playground · by level" },
    accent: "bg-category-stem/15 text-category-stem",
    blurb: "curiosity · problem solving · logic · number sense",
  },
  {
    label: "language through storytelling",
    slug: "language-storytelling-3-5",
    note: "language-programme-note",
    day: "pilot-01-language-day-2hr",
    accent: "bg-category-language/15 text-category-language",
    blurb: "listening · speaking · storytelling · vocabulary · pre-writing",
  },
];

export default function PlanHubPage() {
  return (
    <TeacherGate>
      <Hub />
    </TeacherGate>
  );
}

function Hub() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const t = getTeacher();
    setIsAdmin(!!t && (t.role === "admin" || t.programmeSlug === "*"));
  }, []);

  return (
    <div className="flex flex-col px-4 pt-4 pb-12 md:px-8">
      <h1 className="text-[22px] font-bold text-ink">the 3–5 at-centre programme</h1>
      <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-ink-muted">
        one integrated programme, three single-subject strands that rotate day to day — <span className="font-semibold text-ink">art</span>, <span className="font-semibold text-ink">stem</span>, and <span className="font-semibold text-ink">language</span> — across a 2-hour day. <span className="italic">music and fitness strands will be added.</span>
      </p>

      {/* ① ABOUT */}
      <SectionHeading n="1" label="about the programme" />
      <div className="grid gap-2.5 sm:grid-cols-2">
        {ABOUT.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-start gap-3 rounded-card bg-brand-white p-3.5 shadow-card ring-1 ring-ink/5 transition hover:shadow-float hover:ring-ink/10"
          >
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
              <a.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
            <span className="flex-1">
              <span className="flex items-center gap-1.5 text-[13px] font-bold leading-tight text-ink">
                {a.title}
                {"wip" in a && a.wip && (
                  <span className="rounded-chip bg-segment-yellow/50 px-1.5 py-0.5 text-[9px] font-bold lowercase text-ink-muted">work in progress</span>
                )}
              </span>
              <span className="mt-0.5 block text-[11px] leading-relaxed text-ink-muted">{a.blurb}</span>
            </span>
            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-subtle transition group-hover:text-brand-orange" />
          </Link>
        ))}
      </div>

      {/* ② THE THREE PROGRAMMES */}
      <SectionHeading n="2" label="the three programmes" />
      <p className="-mt-1 mb-3 text-[11px] text-ink-subtle">
        each opens its full overview — daily structure, skills &amp; LOs, and every game with its picture.
      </p>
      <div className="space-y-2.5">
        {PROGRAMMES.map((p) => (
          <div
            key={p.slug}
            className="rounded-card bg-brand-white p-3.5 shadow-card ring-1 ring-ink/5"
          >
            <Link
              href={`/${p.slug}/overview`}
              className="group flex items-center gap-3"
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${p.accent}`}>
                <Layers className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="flex-1">
                <span className="block text-[14px] font-extrabold lowercase text-ink">{p.label}</span>
                <span className="mt-0.5 block text-[11px] text-ink-muted">{p.blurb}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange">
                open <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
            <div className="mt-2.5 flex flex-wrap gap-1.5 border-t border-ink/5 pt-2.5">
              <Chip href={`/plan/docs/${p.note}`} icon={Layers}>skills &amp; LOs</Chip>
              <Chip href={`/plan/docs/${p.day}`} icon={CalendarRange}>the 2-hour day</Chip>
              {p.extra && (
                <Chip href={`/plan/docs/${p.extra.slug}`} icon={Layers}>{p.extra.label}</Chip>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ③ RUN A SESSION */}
      <SectionHeading n="3" label="run a session" />
      <div className="space-y-2.5">
        <Link
          href="/plan/session"
          className="flex items-center gap-2 rounded-card bg-brand-orange py-3 pl-4 pr-3 text-[14px] font-extrabold text-white shadow-card transition hover:opacity-95 active:scale-[0.99]"
        >
          <ClipboardList className="h-4 w-4" />
          plan today&apos;s session
          <ChevronRight className="ml-auto h-4 w-4" />
        </Link>
        <div className="flex flex-wrap gap-2">
          {isAdmin && (
            <Chip href="/plan/log" icon={ClipboardList}>activity log</Chip>
          )}
          <Chip href="/plan/docs" icon={BookOpen}>all planning docs &amp; packs</Chip>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-3 mt-8 flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[11px] font-extrabold text-brand-white">
        {n}
      </span>
      <h2 className="text-[13px] font-extrabold lowercase text-ink">{label}</h2>
    </div>
  );
}

function Chip({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: typeof BookOpen;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-chip bg-ink/5 px-3 py-1.5 text-[11px] font-semibold text-ink-muted transition hover:bg-ink/10"
    >
      <Icon className="h-3.5 w-3.5" /> {children}
    </Link>
  );
}
