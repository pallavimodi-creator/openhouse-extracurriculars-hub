/* ───────────────────────────────────────────────────────────────
 * The at-centre 3–5 rotating calendar.
 *
 * One strand runs per working day, rotating in a fixed loop:
 *   art → language → stem → music & fitness → (repeat)
 *
 * December 2026 is pre-allocated below. Sessions run every day,
 * Monday–Sunday. The winter break is 26–31 December (no session).
 *
 * The same calendar drives three surfaces:
 *   • the overview — parents/educators see what runs each day
 *   • the daily log — the educator marks the allocated day done / not
 *   • the admin dashboard — a tick/cross grid of every day
 * ─────────────────────────────────────────────────────────────── */

export type StrandKey = "art" | "language" | "stem" | "music";

export interface Strand {
  key: StrandKey;
  label: string; // full label, e.g. "art & design"
  short: string; // compact label for the grid, e.g. "art"
  emoji: string;
  // tailwind tokens
  dot: string; // solid bg for a dot/pill
  bg: string; // tinted background
  text: string; // coloured text
  ring: string; // ring colour
  programmeSlug: string; // the 3–5 programme this strand opens
}

/** The rotation loop, in order. Index = position in the cycle. */
export const STRANDS: Strand[] = [
  {
    key: "art",
    label: "art & design",
    short: "art",
    emoji: "🎨",
    dot: "bg-category-art",
    bg: "bg-category-art/15",
    text: "text-category-art",
    ring: "ring-category-art/50",
    programmeSlug: "art-design-3-5",
  },
  {
    key: "language",
    label: "language & storytelling",
    short: "language",
    emoji: "📖",
    dot: "bg-category-language",
    bg: "bg-category-language/20",
    text: "text-category-language",
    ring: "ring-category-language/50",
    programmeSlug: "language-storytelling-3-5",
  },
  {
    key: "stem",
    label: "stem & robotics",
    short: "stem",
    emoji: "🤖",
    dot: "bg-category-stem",
    bg: "bg-category-stem/15",
    text: "text-category-stem",
    ring: "ring-category-stem/50",
    programmeSlug: "robotics-3-5",
  },
  {
    key: "music",
    label: "music & fitness",
    short: "music",
    emoji: "🎵",
    dot: "bg-category-music",
    bg: "bg-category-music/20",
    text: "text-category-music",
    ring: "ring-category-music/50",
    programmeSlug: "music-fitness-3-5",
  },
];

export const STRAND_BY_KEY: Record<StrandKey, Strand> = Object.fromEntries(
  STRANDS.map((s) => [s.key, s]),
) as Record<StrandKey, Strand>;

export interface CalendarDay {
  date: string; // ISO "YYYY-MM-DD"
  day: number; // day-of-month
  weekday: string; // "mon" … "sun"
  holiday: boolean; // true = no session (winter break)
  strand: StrandKey | null; // the allocated strand, or null on a holiday
  sessionIndex: number | null; // 1-based count of working days so far
}

const WEEKDAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

/**
 * Build a month's rotating calendar.
 * @param year     full year, e.g. 2026
 * @param month0   0-based month, e.g. 11 for December
 * @param holidays day-of-month numbers that are holidays (no session)
 * @param startIndex where in the rotation the first WORKING day lands
 *                  (0 = art). Lets the loop continue across months.
 */
export function buildMonthCalendar(
  year: number,
  month0: number,
  holidays: number[],
  startIndex = 0,
): CalendarDay[] {
  const holidaySet = new Set(holidays);
  const daysInMonth = new Date(year, month0 + 1, 0).getDate();
  const out: CalendarDay[] = [];
  let working = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const dt = new Date(year, month0, d);
    const holiday = holidaySet.has(d);
    const iso = `${year}-${String(month0 + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    if (holiday) {
      out.push({ date: iso, day: d, weekday: WEEKDAYS[dt.getDay()], holiday: true, strand: null, sessionIndex: null });
    } else {
      const strand = STRANDS[(startIndex + working) % STRANDS.length].key;
      working += 1;
      out.push({ date: iso, day: d, weekday: WEEKDAYS[dt.getDay()], holiday: false, strand, sessionIndex: working });
    }
  }
  return out;
}

/** December 2026 — sessions every day 1–25, winter break 26–31. */
export const DECEMBER_2026: CalendarDay[] = buildMonthCalendar(
  2026,
  11,
  [26, 27, 28, 29, 30, 31],
  0,
);

/** The current month shown on the overview + log + dashboard. */
export const CURRENT_CALENDAR = {
  label: "december 2026",
  monthShort: "dec",
  year: 2026,
  month0: 11,
  days: DECEMBER_2026,
};

/** Find the allocated strand for an ISO date, or null (holiday / not in month). */
export function strandForDate(iso: string): StrandKey | null {
  return CURRENT_CALENDAR.days.find((d) => d.date === iso)?.strand ?? null;
}
