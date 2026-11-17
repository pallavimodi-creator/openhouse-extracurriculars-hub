"use client";

import Link from "next/link";
import { TeacherGate } from "@/components/TeacherGate";

/**
 * Puppet characters — printable A4 worksheets. Print, let the children
 * colour, cut along the dashed line, and tape each to a craft stick (or a
 * finger loop). A reusable set of friendly story characters for the
 * Wordsmiths / storytelling puppet-character activity, plus two blank
 * templates so a child can invent their own. Original art — colour-in
 * line drawings, print clean in black & white.
 */

type Puppet = { name: string; svg: React.ReactNode };

// Each puppet is a simple head mounted on a handle tab, drawn with a black
// outline and white fill so it prints clean and children can colour it.
const stroke = { fill: "#fff", stroke: "#2C2B28", strokeWidth: 4, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
const line = { fill: "none", stroke: "#2C2B28", strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const dot = { fill: "#2C2B28" };

function Handle() {
  // The grip tab every puppet sits on.
  return <rect x="78" y="210" width="44" height="120" rx="12" {...stroke} />;
}

const PUPPETS: Puppet[] = [
  {
    name: "mouse",
    svg: (
      <>
        <Handle />
        <circle cx="62" cy="86" r="34" {...stroke} />
        <circle cx="138" cy="86" r="34" {...stroke} />
        <circle cx="100" cy="128" r="66" {...stroke} />
        <circle cx="86" cy="118" r="5" {...dot} />
        <circle cx="114" cy="118" r="5" {...dot} />
        <circle cx="100" cy="138" r="7" {...stroke} />
        <path d="M100 145 v16" {...line} />
        <path d="M100 161 q-18 4 -30 -4 M100 161 q18 4 30 -4" {...line} />
      </>
    ),
  },
  {
    name: "lion",
    svg: (
      <>
        <Handle />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x = 100 + Math.cos(a) * 86;
          const y = 120 + Math.sin(a) * 86;
          return <circle key={i} cx={x} cy={y} r="16" {...stroke} />;
        })}
        <circle cx="100" cy="120" r="62" {...stroke} />
        <circle cx="84" cy="112" r="5" {...dot} />
        <circle cx="116" cy="112" r="5" {...dot} />
        <path d="M100 126 l-10 10 h20 z" {...stroke} />
        <path d="M100 146 v8 M100 154 q-12 6 -22 0 M100 154 q12 6 22 0" {...line} />
      </>
    ),
  },
  {
    name: "bird",
    svg: (
      <>
        <Handle />
        <circle cx="100" cy="118" r="70" {...stroke} />
        <path d="M70 60 q-6 -34 24 -28 M130 60 q6 -34 -24 -28" {...line} />
        <circle cx="84" cy="108" r="5" {...dot} />
        <circle cx="116" cy="108" r="5" {...dot} />
        <path d="M86 126 l14 10 l14 -10 l-14 10 z" {...stroke} />
        <path d="M40 150 q22 22 48 10 M160 150 q-22 22 -48 10" {...line} />
      </>
    ),
  },
  {
    name: "cat",
    svg: (
      <>
        <Handle />
        <path d="M54 70 l10 44 l34 -14 z" {...stroke} />
        <path d="M146 70 l-10 44 l-34 -14 z" {...stroke} />
        <circle cx="100" cy="122" r="66" {...stroke} />
        <circle cx="84" cy="116" r="5" {...dot} />
        <circle cx="116" cy="116" r="5" {...dot} />
        <path d="M100 128 l-8 8 h16 z" {...stroke} />
        <path d="M100 136 v8 M100 144 q-10 6 -20 2 M100 144 q10 6 20 2" {...line} />
        <path d="M60 128 h-26 M62 140 h-26 M140 128 h26 M138 140 h26" {...line} />
      </>
    ),
  },
  {
    name: "rabbit",
    svg: (
      <>
        <Handle />
        <ellipse cx="78" cy="56" rx="16" ry="44" {...stroke} />
        <ellipse cx="122" cy="56" rx="16" ry="44" {...stroke} />
        <circle cx="100" cy="128" r="64" {...stroke} />
        <circle cx="84" cy="122" r="5" {...dot} />
        <circle cx="116" cy="122" r="5" {...dot} />
        <circle cx="100" cy="138" r="6" {...stroke} />
        <path d="M100 144 v8 M100 152 q-10 5 -18 0 M100 152 q10 5 18 0" {...line} />
      </>
    ),
  },
  {
    name: "fish",
    svg: (
      <>
        <Handle />
        <path d="M150 120 l44 -34 v68 z" {...stroke} />
        <ellipse cx="96" cy="120" rx="74" ry="58" {...stroke} />
        <circle cx="70" cy="110" r="6" {...dot} />
        <path d="M44 132 q14 12 30 2" {...line} />
        <path d="M120 70 q16 18 0 36 M120 134 q16 18 0 36" {...line} />
      </>
    ),
  },
  {
    name: "bear",
    svg: (
      <>
        <Handle />
        <circle cx="58" cy="78" r="26" {...stroke} />
        <circle cx="142" cy="78" r="26" {...stroke} />
        <circle cx="100" cy="124" r="70" {...stroke} />
        <circle cx="84" cy="116" r="5" {...dot} />
        <circle cx="116" cy="116" r="5" {...dot} />
        <ellipse cx="100" cy="140" rx="22" ry="16" {...stroke} />
        <circle cx="100" cy="134" r="6" {...dot} />
        <path d="M100 140 v8 M100 148 q-8 6 -16 2 M100 148 q8 6 16 2" {...line} />
      </>
    ),
  },
  {
    name: "sun",
    svg: (
      <>
        <Handle />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 100 + Math.cos(a) * 66, y1 = 120 + Math.sin(a) * 66;
          const x2 = 100 + Math.cos(a) * 92, y2 = 120 + Math.sin(a) * 92;
          return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} {...line} />;
        })}
        <circle cx="100" cy="120" r="58" {...stroke} />
        <circle cx="84" cy="114" r="5" {...dot} />
        <circle cx="116" cy="114" r="5" {...dot} />
        <path d="M80 138 q20 18 40 0" {...line} />
      </>
    ),
  },
];

const BLANKS: Puppet[] = [
  {
    name: "draw your own — animal",
    svg: (
      <>
        <Handle />
        <circle cx="62" cy="80" r="26" {...stroke} />
        <circle cx="138" cy="80" r="26" {...stroke} />
        <circle cx="100" cy="124" r="70" {...stroke} />
      </>
    ),
  },
  {
    name: "draw your own — person",
    svg: (
      <>
        <Handle />
        <circle cx="100" cy="112" r="74" {...stroke} />
      </>
    ),
  },
];

function PuppetCard({ p }: { p: Puppet }) {
  return (
    <div className="pw-card">
      <svg viewBox="0 0 200 340" className="pw-svg" role="img" aria-label={`${p.name} puppet`}>
        {/* dashed cut outline */}
        <rect x="6" y="6" width="188" height="328" rx="18" fill="none" stroke="#2C2B28" strokeWidth="2" strokeDasharray="7 7" opacity="0.5" />
        {p.svg}
      </svg>
      <p className="pw-name">{p.name}</p>
      <p className="pw-scissors" aria-hidden>✂ — — — — — — — —</p>
    </div>
  );
}

export default function PuppetWorksheetsPage() {
  return (
    <TeacherGate>
      <style>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          html, body { background:#fff !important; }
          .pw-screen-only { display:none !important; }
          .pw-page { break-after: page; page-break-after: always; }
          .pw-page:last-child { break-after: auto; page-break-after: auto; }
        }
        @media screen { .pw-book { background:#efe9df; padding:16px 12px 56px; } }
        .pw-page { width:100%; max-width:820px; margin:0 auto 20px; background:#fff; border-radius:10px;
          padding:22px 22px 28px; box-shadow:0 6px 26px rgba(44,43,40,.14); }
        @media print { .pw-page { box-shadow:none; border-radius:0; margin:0; padding:0; } }
        .pw-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin-top:14px; }
        .pw-card { display:flex; flex-direction:column; align-items:center; }
        .pw-svg { width:100%; max-width:230px; height:auto; }
        .pw-name { margin:2px 0 0; font-weight:800; text-transform:lowercase; color:#2C2B28; font-size:15px; }
        .pw-scissors { margin:2px 0 0; color:#A5A29B; font-size:11px; letter-spacing:2px; }
      `}</style>

      {/* toolbar — screen only */}
      <div className="pw-screen-only sticky top-0 z-40 flex items-center gap-3 border-b border-ink/10 bg-brand-cream/95 px-4 py-2.5 backdrop-blur md:px-8">
        <Link href="/library" className="text-[13px] font-bold text-brand-orange hover:underline">← library</Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-[13px] font-extrabold text-white shadow-card transition hover:opacity-95"
        >
          🖨 print / save as PDF
        </button>
      </div>

      <div className="pw-book text-ink">
        {/* page 1 — intro + first 4 puppets */}
        <section className="pw-page">
          <div className="pw-screen-only md:block">
            <p className="text-[12px] font-extrabold uppercase tracking-wide text-brand-orange">language &amp; storytelling · ages 3–5</p>
          </div>
          <h1 className="text-[26px] font-extrabold lowercase text-ink">puppet characters</h1>
          <p className="mt-1 max-w-[70ch] text-[13.5px] leading-relaxed text-ink-muted">
            print, let the children colour, then cut along the dashed line and tape each puppet to a craft stick
            (or a folded paper loop for a finger puppet). children speak <b className="text-ink">as</b> their
            character for the storytelling &amp; puppet-character games.
          </p>
          <div className="pw-grid">
            {PUPPETS.slice(0, 4).map((p) => <PuppetCard key={p.name} p={p} />)}
          </div>
        </section>

        {/* page 2 — next 4 puppets */}
        <section className="pw-page">
          <div className="pw-grid">
            {PUPPETS.slice(4, 8).map((p) => <PuppetCard key={p.name} p={p} />)}
          </div>
        </section>

        {/* page 3 — blank templates */}
        <section className="pw-page">
          <h2 className="text-[20px] font-extrabold lowercase text-ink">make your own</h2>
          <p className="mt-1 text-[13px] text-ink-muted">give a child a blank and let them invent a character — a face, a name, a voice.</p>
          <div className="pw-grid">
            {BLANKS.map((p) => <PuppetCard key={p.name} p={p} />)}
          </div>
        </section>
      </div>
    </TeacherGate>
  );
}
