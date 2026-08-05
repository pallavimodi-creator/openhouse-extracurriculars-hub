"use client";

import { useState } from "react";
import { Download } from "lucide-react";

// Generates a real PDF file download (one brochure section per page) —
// no print dialog. Libraries are dynamically imported so they stay out of
// the main bundle.
export function DownloadBrochureButton({
  containerId = "brochure-pages",
  filename = "openhouse-3-5-brochure.pdf",
}: {
  containerId?: string;
  filename?: string;
}) {
  const [busy, setBusy] = useState(false);

  const handle = async () => {
    setBusy(true);
    try {
      const [{ default: html2canvas }, jspdfMod] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);
      const { jsPDF } = jspdfMod;
      const container = document.getElementById(containerId);
      if (!container) return;
      const sections = Array.from(container.querySelectorAll("section"));
      if (sections.length === 0) return;

      const pdf = new jsPDF({ unit: "px", format: "a4", orientation: "portrait" });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();

      // Anything with data-pdf-hide is skipped by html2canvas — plus the
      // fixed footer nav, which otherwise overlays every captured section
      // because of its position:fixed. And empty scaffold elements (like
      // the outer <nav> wrapping the footer) whose content shouldn't be
      // captured at all.
      const ignore = (el: Element): boolean => {
        if (el instanceof HTMLElement && el.hasAttribute("data-pdf-hide")) {
          return true;
        }
        // Hide anything with fixed positioning — overlays don't belong on
        // per-section captures. This catches the footer nav automatically.
        if (el instanceof HTMLElement) {
          const style = window.getComputedStyle(el);
          if (style.position === "fixed") return true;
        }
        return false;
      };

      let addedAny = false;
      for (let i = 0; i < sections.length; i++) {
        const canvas = await html2canvas(sections[i] as HTMLElement, {
          scale: 2,
          backgroundColor: "#ffffff",
          useCORS: true,
          ignoreElements: ignore,
        });
        // Skip degenerate or invisible sections so they don't become
        // blank pages.
        if (canvas.width === 0 || canvas.height === 0) continue;

        const img = canvas.toDataURL("image/jpeg", 0.95);
        const ratio = canvas.height / canvas.width;
        let w = pw;
        let h = pw * ratio;
        if (h > ph) {
          h = ph;
          w = ph / ratio;
        }
        if (addedAny) pdf.addPage();
        // Top-align the image on the page (was centered → gave huge
        // white space above short sections). Horizontal centering stays
        // for the rare taller-than-page case.
        pdf.addImage(img, "JPEG", (pw - w) / 2, 0, w, h);
        addedAny = true;
      }
      if (!addedAny) return;
      pdf.save(filename);
    } catch {
      // fall back to the print dialog if generation fails
      window.print();
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handle}
      disabled={busy}
      className="inline-flex items-center gap-1.5 rounded-chip bg-brand-orange px-3 py-1.5 text-[11px] font-bold text-white shadow-card transition hover:opacity-95 disabled:opacity-50 print:hidden"
    >
      <Download className="h-3.5 w-3.5" /> {busy ? "preparing…" : "download pdf"}
    </button>
  );
}
