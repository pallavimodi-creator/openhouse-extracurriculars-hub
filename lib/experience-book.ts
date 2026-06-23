"use client";

// Digital experience book — one per child, filled by the educator, stored
// on-device (localStorage), scoped per centre (building). The dashboard
// summarises every child's progress. Upgradeable to Supabase later without
// changing the UI (swap these read/write functions).

import { getBuilding } from "@/lib/teacher-state";

// The 3-5 strands and their skills (the LO-ladder skills). The educator
// sets each child's current rung per skill.
export const EXP_STRANDS: {
  key: string;
  label: string;
  dot: string;
  tint: string;
  skills: string[];
}[] = [
  {
    key: "language",
    label: "language",
    dot: "bg-category-language",
    tint: "bg-category-language/12",
    skills: ["listening", "speaking", "storytelling", "vocabulary", "pre-writing"],
  },
  {
    key: "art",
    label: "art",
    dot: "bg-category-art",
    tint: "bg-category-art/12",
    skills: ["fine motor", "colour", "creative expression"],
  },
  {
    key: "stem",
    label: "stem",
    dot: "bg-category-stem",
    tint: "bg-category-stem/12",
    skills: ["curiosity", "problem solving", "logic", "number sense"],
  },
];

// rung scale (shared with the LO ladders): 0 = not started.
export const RUNGS = [
  { v: 0, label: "—", name: "not started" },
  { v: 1, label: "starting out", name: "starting out" },
  { v: 2, label: "getting there", name: "getting there" },
  { v: 3, label: "going strong ★", name: "going strong" },
];

export const ALL_SKILL_KEYS: string[] = EXP_STRANDS.flatMap((s) =>
  s.skills.map((sk) => `${s.key}:${sk}`),
);

export interface ChildBook {
  id: string;
  name: string;
  bloom: { moment: string; superpower: string; improved: string; favourite: string };
  levels: Record<string, number>; // "language:listening" -> 0..3
  notes: string;
  updatedAt: number;
}

function key(): string {
  const b = getBuilding();
  return `oh-experience-${(b ?? "default").trim().toLowerCase()}`;
}

export function listChildren(): ChildBook[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key());
    if (!raw) return [];
    const list = JSON.parse(raw) as ChildBook[];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveAll(list: ChildBook[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key(), JSON.stringify(list));
}

export function getChild(id: string): ChildBook | null {
  return listChildren().find((c) => c.id === id) ?? null;
}

export function addChild(name: string): ChildBook {
  const child: ChildBook = {
    id: `c-${Math.floor(performance.now() * 1000)}-${listChildren().length}`,
    name: name.trim(),
    bloom: { moment: "", superpower: "", improved: "", favourite: "" },
    levels: {},
    notes: "",
    updatedAt: Date.now(),
  };
  saveAll([...listChildren(), child]);
  return child;
}

export function updateChild(child: ChildBook): void {
  const next = listChildren().map((c) =>
    c.id === child.id ? { ...child, updatedAt: Date.now() } : c,
  );
  saveAll(next);
}

export function removeChild(id: string): void {
  saveAll(listChildren().filter((c) => c.id !== id));
}

// progress summary for the dashboard
export function summary(child: ChildBook): { strong: number; total: number; needsHelp: string[] } {
  const total = ALL_SKILL_KEYS.length;
  let strong = 0;
  const needsHelp: string[] = [];
  for (const sk of ALL_SKILL_KEYS) {
    const v = child.levels[sk] ?? 0;
    if (v >= 3) strong++;
    // "needs help" = touched the book but a skill is still not started after others moved
    if (v === 0) needsHelp.push(sk);
  }
  return { strong, total, needsHelp };
}
