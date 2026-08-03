// ─── Teacher & admin credentials ─────────────────────────────
// One HQ login plus, per centre, one teacher login and one admin login.
// No DB — auth is purely against this static list.

import type { TeacherCategory } from "@/lib/teacher-state";

export interface Credential {
  username: string;
  password: string;
  programmeSlug: string; // "*" for admin, or a default programme slug for category teachers
  displayName: string;
  role: "teacher" | "admin";
  category?: TeacherCategory; // when set, teacher sees every programme in this category
  ageScope?: "3-5"; // when set, the educator runs the integrated 3-5 centre programme (all three strands)
  /**
   * When set, the centre is auto-selected on sign-in — no building picker
   * needed. Used by per-centre logins so each centre's progress log stays
   * scoped to its own building without an extra click.
   */
  defaultBuilding?: string;
  /**
   * Super-admin — the openhouse HQ login. Sees cross-centre data
   * (both dashboards, unfiltered). Every centre-admin has
   * dashboardAccess but only super-admin sees other centres.
   */
  superAdmin?: boolean;
  /**
   * Can view the dashboards (activity log + completions).
   * - super-admin: true, sees all centres
   * - centre-admin: true, scoped to their centre
   * - centre-teacher (and everyone else): false → dashboards are hidden
   */
  dashboardAccess?: boolean;
}

// Every centre uses this shape: two logins each.
// - <slug>admin    / Learn@<Centre>    → dashboardAccess: true  (their centre only)
// - <slug>educator / Educate@<Centre>  → dashboardAccess: false (plan + mark-done, no dashboards)
// Both auto-tag their centre so nothing is per-picker.
interface Centre {
  slug: string;      // username stem, lowercase (e.g. "jayanagar")
  suffix: string;    // password suffix (e.g. "Jayanagar", "JPNagar")
  building: string;  // display name of the centre (e.g. "JP Nagar")
  display: string;   // shown to the teacher in-app (e.g. "oh. jp nagar")
}

const CENTRES: Centre[] = [
  { slug: "jayanagar",     suffix: "Jayanagar",     building: "Jayanagar",     display: "oh. jayanagar" },
  { slug: "jpnagar",       suffix: "JPNagar",       building: "JP Nagar",      display: "oh. jp nagar" },
  { slug: "sarjapur",      suffix: "Sarjapur",      building: "Sarjapur",      display: "oh. sarjapur" },
  { slug: "whitefield",    suffix: "Whitefield",    building: "Whitefield",    display: "oh. whitefield" },
  { slug: "hsrlayout",     suffix: "HSRLayout",     building: "HSR Layout",    display: "oh. hsr layout" },
  { slug: "indiranagar",   suffix: "Indiranagar",   building: "Indiranagar",   display: "oh. indiranagar" },
  { slug: "sahakarnagar",  suffix: "SahakarNagar",  building: "Sahakar Nagar", display: "oh. sahakar nagar" },
  { slug: "haralur",       suffix: "Haralur",       building: "Haralur",       display: "oh. haralur" },
  { slug: "sadashivnagar", suffix: "Sadashivnagar", building: "Sadashivnagar", display: "oh. sadashivnagar" },
  { slug: "hrbrlayout",    suffix: "HRBRLayout",    building: "HRBR Layout",   display: "oh. hrbr layout" },
];

function centreAdmin(c: Centre): Credential {
  return {
    username: `${c.slug}admin`,
    password: `Learn@${c.suffix}`,
    programmeSlug: "*",
    displayName: `${c.display} · admin`,
    role: "admin",
    defaultBuilding: c.building,
    dashboardAccess: true, // scoped to their centre
  };
}

function centreEducator(c: Centre): Credential {
  return {
    username: `${c.slug}educator`,
    password: `Educate@${c.suffix}`,
    programmeSlug: "*",
    displayName: `${c.display} · educator`,
    role: "admin", // wide programme access; NOT a dashboard signal
    defaultBuilding: c.building,
    // dashboardAccess intentionally omitted — educators can't see dashboards.
  };
}

export const CREDENTIALS: Credential[] = [
  // ─── HQ ──────────────────────────────────────────────────
  // Openhouse team — sees every centre's data across both dashboards.
  {
    username: "admin",
    password: "openhouselxd",
    programmeSlug: "*",
    displayName: "openhouse hq",
    role: "admin",
    superAdmin: true,
    dashboardAccess: true,
  },

  // ─── Per-centre logins ───────────────────────────────────
  // Each centre gets two: educator (plan + mark-done, no dashboard) and
  // admin (same + centre-scoped dashboard). Educator-name capture
  // happens on the mark-done button, so a single shared educator login
  // per centre is enough — each individual educator types their own name.
  ...CENTRES.flatMap((c) => [centreEducator(c), centreAdmin(c)]),
];

export function validateCredentials(
  username: string,
  password: string
): Credential | null {
  const u = username.trim().toLowerCase();
  const found = CREDENTIALS.find(
    (c) => c.username.toLowerCase() === u && c.password === password
  );
  return found ?? null;
}
