import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { PLAN_DOCS, getPlanDoc } from "@/lib/plans";
import { DocViewer } from "./DocViewer";

// Statically generate one page per planning doc; the markdown is read at
// build time from /planning so it's baked into the deployed app.
export function generateStaticParams() {
  return PLAN_DOCS.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export default function PlanDocPage({ params }: { params: { slug: string } }) {
  const doc = getPlanDoc(params.slug);
  if (!doc) notFound();

  let content = "";
  try {
    content = fs.readFileSync(
      path.join(process.cwd(), "planning", `${params.slug}.md`),
      "utf8",
    );
  } catch {
    notFound();
  }

  return <DocViewer content={content} />;
}
