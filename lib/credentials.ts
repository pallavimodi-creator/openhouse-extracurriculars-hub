// ─── Teacher & admin credentials ─────────────────────────────
// One shared teacher per category + one admin. No DB — auth is
// purely against this static list.

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
   * Super-admin — the openhouse team logins that see cross-centre data
   * (the activity log at /plan/log and the completions dashboard at
   * /plan/completions). Per-centre admin logins are NOT super-admins:
   * they can mark sessions done but can't see other centres' data.
   */
  superAdmin?: boolean;
}

export const CREDENTIALS: Credential[] = [
  // centre — the shared centre login for the extra-curriculars hub.
  // Sees every programme AND the cross-centre admin dashboards.
  {
    username: "openhousecentre",
    password: "oh.centre.eca",
    programmeSlug: "*",
    displayName: "openhouse centre",
    role: "admin",
    superAdmin: true,
  },
  // admin — openhouse team, sees every programme + admin dashboards
  {
    username: "admin",
    password: "openhouselxd",
    programmeSlug: "*",
    displayName: "admin",
    role: "admin",
    superAdmin: true,
  },
  // ─── Per-centre admin logins ─────────────────────────────
  // Subject-specific teacher logins have been retired. Teachers now sign
  // in with their centre's shared login (below) and type their own name
  // when they tap "mark this session done" — that's what feeds the
  // per-teacher counts on the completions dashboard.
  // One login per Bangalore centre. Each sees every programme (scope "*")
  // and is auto-tagged to its own building, so progress logs stay
  // separated per centre without an extra picker click.
  {
    username: "jayanagaradmin",
    password: "Learn@Jayanagar",
    programmeSlug: "*",
    displayName: "oh. jayanagar",
    role: "admin",
    defaultBuilding: "Jayanagar",
  },
  {
    username: "jpnagaradmin",
    password: "Learn@JPNagar",
    programmeSlug: "*",
    displayName: "oh. jp nagar",
    role: "admin",
    defaultBuilding: "JP Nagar",
  },
  {
    username: "sarjapuradmin",
    password: "Learn@Sarjapur",
    programmeSlug: "*",
    displayName: "oh. sarjapur",
    role: "admin",
    defaultBuilding: "Sarjapur",
  },
  {
    username: "whitefieldadmin",
    password: "Learn@Whitefield",
    programmeSlug: "*",
    displayName: "oh. whitefield",
    role: "admin",
    defaultBuilding: "Whitefield",
  },
  {
    username: "hsrlayoutadmin",
    password: "Learn@HSRLayout",
    programmeSlug: "*",
    displayName: "oh. hsr layout",
    role: "admin",
    defaultBuilding: "HSR Layout",
  },
  {
    username: "indiranagaradmin",
    password: "Learn@Indiranagar",
    programmeSlug: "*",
    displayName: "oh. indiranagar",
    role: "admin",
    defaultBuilding: "Indiranagar",
  },
  {
    username: "sahakarnagaradmin",
    password: "Learn@SahakarNagar",
    programmeSlug: "*",
    displayName: "oh. sahakar nagar",
    role: "admin",
    defaultBuilding: "Sahakar Nagar",
  },
  {
    username: "haraluradmin",
    password: "Learn@Haralur",
    programmeSlug: "*",
    displayName: "oh. haralur",
    role: "admin",
    defaultBuilding: "Haralur",
  },
  {
    username: "sadashivnagaradmin",
    password: "Learn@Sadashivnagar",
    programmeSlug: "*",
    displayName: "oh. sadashivnagar",
    role: "admin",
    defaultBuilding: "Sadashivnagar",
  },
  {
    username: "hrbrlayoutadmin",
    password: "Learn@HRBRLayout",
    programmeSlug: "*",
    displayName: "oh. hrbr layout",
    role: "admin",
    defaultBuilding: "HRBR Layout",
  },
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
