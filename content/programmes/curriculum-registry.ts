import type { CurriculumProgramme } from "@/content/types";
import { publicSpeaking58 } from "./public-speaking-5-8";
import { publicSpeaking812 } from "./public-speaking-8-12";
import { artDesign58 } from "./art-design-5-8";
import { artDesign812 } from "./art-design-8-12";
import { robotics58 } from "./robotics-5-8";
import { robotics812 } from "./robotics-8-12";
import {
  roboticsElectronics58,
  roboticsElectronics812,
} from "./robotics-electronics";
import { musicProgrammes } from "./music-levels";

// The three 3-5 programmes — the "3-5 trial" track on the home.
import { artDesign35 } from "./art-design-3-5";
import { languageStorytelling35 } from "./language-storytelling-3-5";
import { stem35 } from "./stem-3-5";

// Registry of every programme surfaced to teachers — powers the
// homepage grid and the library page. Ordered by category
// (art → language / speaking → robotics) then age (youngest → oldest).
export const curriculumProgrammes: CurriculumProgramme[] = [
  // ── Art & Design ──
  artDesign35,
  artDesign58,
  artDesign812,

  // ── Language & Public Speaking ──
  languageStorytelling35,
  publicSpeaking58,
  publicSpeaking812,

  // ── Robotics / STEM ──
  // Robotics runs as a track: level 1 (mechanics) then level 2
  // (electronics). Only level 1 shows on the home grid — level 2 is
  // reached from inside the programme, via the level switcher.
  stem35,
  robotics58,
  roboticsElectronics58,
  robotics812,
  roboticsElectronics812,

  // ── Music ──
  // Music — two age bands (5–8 · 8–12), each a level-based track (l1/l2/l3).
  // Level 1 of each band shows on the home grid; levels 2–3 via the switcher.
  ...musicProgrammes,
];
