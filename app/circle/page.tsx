"use client";

/* Circle time songs — the shared playlist for every 3–5 session.
 * Two circles: an OPENING circle (gather · greet · break the ice · warm up
 * little hands) and a CLOSING circle (get the energy out, then calm down and
 * say goodbye — pick one accessory for the day here). A small tidy-up &
 * transitions set sits underneath. All songs are YouTube links (no lyrics). */

type Song = { title: string; purpose: string; age?: string; by?: string; url: string };

const yt = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

/* ── opening circle = greeting + settling + finger warm-ups ── */
const OPENING: Song[] = [
  { title: "circle time song", by: "Patty Shukla", purpose: "gather everyone and settle into the circle", age: "2–5", url: "https://www.youtube.com/watch?v=9hqex2P5fy8" },
  { title: "make a circle big and small", purpose: "gathering · spatial awareness · following instructions", age: "2–5", url: "https://www.youtube.com/watch?v=ALcL3MuU4xQ" },
  { title: "good morning good morning", purpose: "greeting · routine · social connection", age: "1–5", url: "https://www.youtube.com/watch?v=AaXtjozD1ws" },
  { title: "hello how are you today?", purpose: "greeting · communication · emotional check-in", age: "2–5", url: "https://www.youtube.com/watch?v=pqDEwPi7vxg" },
  { title: "hello hello what's your name?", purpose: "names · turn-taking · social interaction", age: "2–5", url: "https://www.youtube.com/watch?v=yqlbn_nI2w8" },
  { title: "how do you feel? — emotions song", purpose: "identifying and expressing emotions", age: "3–5", url: "https://www.youtube.com/watch?v=0uCw649dBec" },
  { title: "what's the weather today?", purpose: "weather vocabulary · observation", age: "3–5", url: "https://www.youtube.com/watch?v=a9m000UA0VE" },
  { title: "days of the week", purpose: "sequencing · memory · calendar awareness", age: "3–5", url: "https://www.youtube.com/watch?v=5zqJa60FTSc" },
  { title: "mr. golden sun", purpose: "morning routine · nature · language", age: "2–5", url: "https://www.youtube.com/watch?v=hlzvrEfyL2Y" },
  { title: "listening ears", by: "Patty Shukla", purpose: "a quick icebreaker to tune in before we begin", age: "2–5", url: "https://www.youtube.com/watch?v=MUZuRufNrBE" },
  // finger warm-ups — settle little hands before the making segment
  { title: "hickety pickety", purpose: "finger warm-up · rhythm · memory", age: "1–4", url: "https://www.youtube.com/watch?v=qHQ9nLLhAq4" },
  { title: "open shut them", purpose: "finger warm-up · fine motor · opposites", age: "1–4", url: "https://www.youtube.com/watch?v=loqrGRHUxWY" },
  { title: "one little finger", purpose: "finger warm-up · pointing · coordination", age: "1–4", url: "https://www.youtube.com/watch?v=EqVHR2vIwIE" },
  { title: "who took the cookie from the cookie jar?", purpose: "finger warm-up · turn-taking · language", age: "3–5", url: "https://www.youtube.com/watch?v=OzKY5YHnOTg" },
  { title: "itsy bitsy spider", purpose: "finger warm-up · sequencing · storytelling", age: "2–5", url: "https://www.youtube.com/watch?v=dGIBlGzoFlA" },
];

/* ── closing circle = energy out, then calm down & goodbye ── */
const CLOSING: Song[] = [
  { title: "stop (freeze dance)", by: "Patty Shukla", purpose: "move, then freeze when the music stops", age: "2–5", url: "https://www.youtube.com/watch?v=MWlnhqtpQX0" },
  { title: "wiggle it", by: "Patty Shukla", purpose: "shake the wiggles out", age: "2–5", url: "https://www.youtube.com/watch?v=MUmJ11ABEmg" },
  { title: "head shoulders knees and toes", purpose: "body awareness · coordination", age: "2–5", url: "https://www.youtube.com/watch?v=RuqvGiZi0qg" },
  { title: "stand up sit down", purpose: "listening · impulse control · gross motor", age: "2–5", url: "https://www.youtube.com/watch?v=-iMGSD_35pM" },
  { title: "ram sam sam", purpose: "rhythm · coordination · imitation", age: "2–5", url: "https://www.youtube.com/watch?v=9RUqTwR1KEA" },
  { title: "if you are happy", purpose: "emotions · actions · expression", age: "2–5", url: "https://www.youtube.com/watch?v=M6LoRZsHMSs" },
  { title: "walking walking", purpose: "gross motor · speed · stop/go", age: "1–5", url: "https://www.youtube.com/watch?v=P-uznC3AmaE" },
  { title: "follow me", purpose: "imitation · listening · coordination", age: "2–5", url: "https://www.youtube.com/watch?v=hW2DDGX7Tcc" },
  { title: "me — body parts song", purpose: "body awareness · vocabulary", age: "2–5", url: "https://www.youtube.com/watch?v=EAx6VZteAwQ" },
  { title: "skidamarink", purpose: "calm down · connection · belonging", age: "2–5", url: "https://www.youtube.com/watch?v=6-mvLkMRNsc" },
  { title: "you are my sunshine", purpose: "calming · emotional connection", age: "2–5", url: "https://www.youtube.com/watch?v=4Oc6PTtcthA" },
  { title: "goodbye everybody", purpose: "closure · routine · social connection", age: "1–5", url: "https://www.youtube.com/watch?v=SRyFiVeNjWs" },
  { title: "so long now", purpose: "closure · goodbye routine", age: "2–5", url: "https://www.youtube.com/watch?v=lR9YzDRkN-Q" },
];

/* ── tidy-up & transitions (between activities / clean-up) ── */
const TIDY: Song[] = [
  { title: "clean up song", purpose: "cleaning up · responsibility · routine", age: "1–5", url: "https://www.youtube.com/watch?v=SFE0mMWbA-Y" },
  { title: "clean up clean up", purpose: "tidying · routine · independence", age: "1–5", url: "https://www.youtube.com/watch?v=1mjMdudwtRc" },
  { title: "ants go marching", purpose: "walking · rhythm · lining up", age: "2–5", url: "https://www.youtube.com/watch?v=2S__fbCGwOM" },
  { title: "line up line up", purpose: "following instructions · lining up", age: "2–5", url: "https://www.youtube.com/watch?v=ciE3JOaiU_k" },
  { title: "line up line up in a row", purpose: "order · spatial awareness · transition", age: "2–5", url: "https://www.youtube.com/watch?v=sOHJeXw_Bj8" },
  { title: "walking in the jungle", purpose: "imagination · movement · listening", age: "2–5", url: "https://www.youtube.com/watch?v=GoSq-yZcJ-4" },
];

/* ── accessory of the day — for the CLOSING circle movement ── */
type Accessory = { emoji: string; name: string; idea: string; song: { label: string; url: string } };
const ACCESSORIES: Accessory[] = [
  { emoji: "⭕", name: "hula hoops", idea: "step in & out on the beat · spin it · roll-and-chase · stand inside your hoop when the music stops.", song: { label: "stop — freeze song", url: "https://www.youtube.com/watch?v=MWlnhqtpQX0" } },
  { emoji: "🌈", name: "pool noodles", idea: "tap the beat on the floor · gallop like a horse · wiggle it high & low · go under the limbo.", song: { label: "wiggle it", url: "https://www.youtube.com/watch?v=MUmJ11ABEmg" } },
  { emoji: "🔶", name: "cones", idea: "weave and run around the cones · slalom · freeze at the cone you're nearest when the song stops.", song: { label: "freeze dance", url: yt("the kiboomers freeze dance") } },
  { emoji: "⚽", name: "balls", idea: "roll & catch with a partner · bounce to the beat · pass the ball around the circle.", song: { label: "shake your sillies out", url: yt("shake your sillies out learning station") } },
  { emoji: "🔳", name: "floor-tape hopscotch", idea: "hop the squares · two feet then one foot · jump to the number called out.", song: { label: "counting / jumping song", url: yt("jump counting song for kids") } },
  { emoji: "🧣", name: "scarves", idea: "toss & catch · wave high and low with the music · float slowly, then fast.", song: { label: "scarf movement song", url: yt("scarf movement song for preschool") } },
];

function SongRow({ s }: { s: Song }) {
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-2xl bg-brand-white p-3.5 shadow-card ring-1 ring-ink/[0.05] transition hover:-translate-y-0.5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-[15px] text-brand-orange" aria-hidden>▶</span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-[14px] font-extrabold lowercase leading-tight text-ink">{s.title}</span>
          {s.age && <span className="rounded-chip bg-brand-cream px-1.5 py-0.5 text-[10px] font-bold text-ink-muted">ages {s.age}</span>}
        </span>
        {s.by && <span className="block text-[11px] font-semibold text-ink-subtle">{s.by}</span>}
        <span className="mt-0.5 block text-[12px] text-ink-muted">{s.purpose}</span>
      </span>
      <span className="shrink-0 text-[11px] font-extrabold text-brand-orange">youtube ↗</span>
    </a>
  );
}

export default function CirclePage() {
  return (
    <div className="px-4 pb-10 pt-4 md:px-8">
      <section className="rounded-3xl bg-category-movement/90 px-6 py-6 text-brand-charcoal shadow-card md:px-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-charcoal/70">ages 3–5</p>
        <h1 className="mt-1 text-[24px] font-extrabold lowercase md:text-[32px]">song library</h1>
        <p className="mt-1.5 max-w-[54ch] text-[13.5px] font-medium leading-relaxed text-brand-charcoal/85">
          every song for the day, in one place — the <b>opening circle</b>, the <b>closing circle</b>, and tidy-up. tagged by what they&rsquo;re for and the ages they suit.
        </p>
      </section>

      {/* opening circle */}
      <section className="mt-7">
        <div className="rounded-2xl bg-category-movement/25 px-4 py-3 ring-1 ring-ink/[0.05]">
          <h2 className="text-[15px] font-extrabold lowercase text-ink">opening circle</h2>
          <p className="mt-0.5 text-[12.5px] text-ink-muted">gather, greet, break the ice — then warm up little hands before making.</p>
        </div>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {OPENING.map((s) => <SongRow key={s.title} s={s} />)}
        </div>
      </section>

      {/* closing circle + accessory of the day */}
      <section className="mt-9">
        <div className="rounded-2xl bg-category-movement/25 px-4 py-3 ring-1 ring-ink/[0.05]">
          <h2 className="text-[15px] font-extrabold lowercase text-ink">closing circle</h2>
          <p className="mt-0.5 text-[12.5px] text-ink-muted">get the energy out with a movement song, then calm down and say goodbye.</p>
        </div>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {CLOSING.map((s) => <SongRow key={s.title} s={s} />)}
        </div>

        {/* accessory of the day — only for the closing circle */}
        <div className="mt-4 rounded-2xl bg-brand-cream/70 p-4 ring-1 ring-ink/[0.05] md:p-5">
          <h3 className="text-[13px] font-extrabold lowercase text-ink">also: pick one accessory for the day</h3>
          <p className="mt-0.5 text-[12px] text-ink-muted">add a single prop to the closing circle for a movement game — rotate through these so it stays fresh.</p>
          <div className="mt-3 grid gap-2.5 md:grid-cols-2">
            {ACCESSORIES.map((a) => (
              <div key={a.name} className="rounded-2xl bg-brand-white p-4 shadow-card ring-1 ring-ink/[0.05]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-[20px]" aria-hidden>{a.emoji}</span>
                  <h4 className="text-[15px] font-extrabold lowercase text-ink">{a.name}</h4>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{a.idea}</p>
                <a href={a.song.url} target="_blank" rel="noopener noreferrer" className="mt-2.5 inline-flex items-center gap-1.5 text-[12px] font-extrabold text-brand-orange">
                  ▶ {a.song.label} <span className="text-[11px]">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tidy-up & transitions — smaller, between activities */}
      <section className="mt-9">
        <div className="rounded-2xl bg-brand-cream/60 px-4 py-3 ring-1 ring-ink/[0.05]">
          <h2 className="text-[14px] font-extrabold lowercase text-ink-muted">tidy-up & transitions</h2>
          <p className="mt-0.5 text-[12.5px] text-ink-muted">for moving between activities and cleaning up.</p>
        </div>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {TIDY.map((s) => <SongRow key={s.title} s={s} />)}
        </div>
      </section>

      <p className="mt-7 rounded-2xl bg-brand-cream/70 px-4 py-3 text-center text-[12.5px] font-semibold text-ink-muted ring-1 ring-ink/[0.05]">
        more circle-time songs from the artist we use most:{" "}
        <a href="https://www.youtube.com/channel/UC1J5R-2zsrrICAYmkt5g_6Q" target="_blank" rel="noopener noreferrer" className="font-extrabold text-brand-orange">Patty Shukla Kids TV ↗</a>
      </p>
    </div>
  );
}
