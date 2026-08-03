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
}

export const CREDENTIALS: Credential[] = [
  // centre — the shared centre login for the extra-curriculars hub.
  // Sees every programme; this is the centre's reference point.
  {
    username: "openhousecentre",
    password: "oh.centre.eca",
    programmeSlug: "*",
    displayName: "openhouse centre",
    role: "admin",
  },
  // admin — sees every programme
  {
    username: "admin",
    password: "openhouselxd",
    programmeSlug: "*",
    displayName: "admin",
    role: "admin",
  },
  // public speaking teacher — sees both PS programmes (5-8 and 8-12)
  {
    username: "psteacher",
    password: "publicspeaking123",
    programmeSlug: "public-speaking-5-8",
    displayName: "public speaking teacher",
    role: "teacher",
    category: "language",
  },
  // art & design teacher — sees both art programmes (5-8 and 8-12)
  {
    username: "artteacher",
    password: "artteacher123",
    programmeSlug: "art-design-5-8",
    displayName: "art & design teacher",
    role: "teacher",
    category: "art",
  },
  // robotics teacher — sees both robotics programmes (5-8 and 8-12)
  {
    username: "roboticsteacher",
    password: "roboticsteacher123",
    programmeSlug: "robotics-5-8",
    displayName: "robotics teacher",
    role: "teacher",
    category: "stem",
  },
  // 3-5 centre educator — runs the integrated at-centre programme (all
  // three rotating strands: art · stem · language). Lands on the /plan
  // hub and sees the three 3-5 strands in the library + planner.
  {
    username: "eccteacher",
    password: "eccteacher123",
    programmeSlug: "art-design-3-5",
    displayName: "3–5 educator",
    role: "teacher",
    ageScope: "3-5",
  },

  // ─── Per-centre admin logins ─────────────────────────────
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
