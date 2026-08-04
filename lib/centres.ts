// The 10 Bangalore centres. Single source of truth for anywhere the app
// needs to enumerate every centre — the credentials factory (a login
// per centre × 2) and the completions dashboard's centre filter
// dropdown both read from here.

export interface Centre {
  slug: string;      // username stem, lowercase (e.g. "jayanagar")
  suffix: string;    // password suffix (e.g. "Jayanagar", "JPNagar")
  building: string;  // display name of the centre (e.g. "JP Nagar")
  display: string;   // shown to the teacher in-app (e.g. "oh. jp nagar")
}

export const CENTRES: Centre[] = [
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

/** Just the building names, in the same order — for centre pickers. */
export const CENTRE_NAMES: string[] = CENTRES.map((c) => c.building);
