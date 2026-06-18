"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

// The extra-curriculars hub has no day-by-day plan runner — the centre's
// programme structure is different, so plans / daily structure / timings
// were removed. The programme overview is the reference page, so any
// `/{slug}` link redirects straight to `/{slug}/overview`.
export default function ProgrammeIndexRedirect() {
  const params = useParams();
  const router = useRouter();
  const slug = params.programmeSlug as string;

  useEffect(() => {
    router.replace(`/${slug}/overview`);
  }, [slug, router]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[12px] font-medium text-ink-subtle">loading...</p>
    </div>
  );
}
