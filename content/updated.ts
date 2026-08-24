// Hub-only marker: programmes recently synced/updated from at-apartment.
// Kept OUT of the synced programme .ts files on purpose, so a future content
// sync from at-apartment never clobbers these "updated" flags.
export const UPDATED_SLUGS = new Set<string>([
  "robotics-5-8",
  "robotics-8-12",
  "robotics-electronics-5-8",
  "robotics-electronics-8-12",
]);
