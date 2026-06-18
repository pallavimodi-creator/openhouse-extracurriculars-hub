"use client";

import { TeacherGate } from "@/components/TeacherGate";

export default function GuidePage() {
  return (
    <TeacherGate>
      <GuideContent />
    </TeacherGate>
  );
}

function GuideContent() {
  return (
    <div className="flex flex-col px-4 pt-4 pb-6 md:px-8 md:pt-6">
      <h1 className="text-[24px] font-extrabold text-ink md:text-[32px]">
        guide
      </h1>
      <p className="mt-1 text-[13px] font-medium text-ink-muted md:text-[15px]">
        how to find your way around the programme resources
      </p>

      <div className="mt-6 space-y-8">
        {/* How to use this hub */}
        <section className="rounded-card bg-brand-white p-5 shadow-card ring-1 ring-ink/5 md:p-8">
          <h2 className="text-[16px] font-extrabold text-ink md:text-[20px]">how to use this hub</h2>
          <p className="mt-2 text-[13px] text-ink-muted md:text-[14px]">three steps to get started</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-card bg-brand-orange/5 p-4">
              <span className="inline-block rounded-chip bg-brand-orange/15 px-2.5 py-0.5 text-[10px] font-bold text-brand-orange">step 1</span>
              <h3 className="mt-2 text-[14px] font-bold text-ink">pick a track</h3>
              <p className="mt-1 text-[12px] text-ink-muted">on the home page, programmes are split into live (running now) and trial (3–5, being piloted). tap "dive in" on any programme.</p>
            </div>
            <div className="rounded-card bg-brand-orange/5 p-4">
              <span className="inline-block rounded-chip bg-brand-orange/15 px-2.5 py-0.5 text-[10px] font-bold text-brand-orange">step 2</span>
              <h3 className="mt-2 text-[14px] font-bold text-ink">read the overview</h3>
              <p className="mt-1 text-[12px] text-ink-muted">each programme overview lays out the skills it builds and the games and resources in every segment. tap any segment to see what's inside.</p>
            </div>
            <div className="rounded-card bg-brand-orange/5 p-4">
              <span className="inline-block rounded-chip bg-brand-orange/15 px-2.5 py-0.5 text-[10px] font-bold text-brand-orange">step 3</span>
              <h3 className="mt-2 text-[14px] font-bold text-ink">explore the library</h3>
              <p className="mt-1 text-[12px] text-ink-muted">use the library to search and browse all activities across all programmes. filter by segment type. tap any activity for the complete game card.</p>
            </div>
          </div>
          <div className="mt-4">
            <a href="/book" className="flex items-center gap-3 rounded-card bg-brand-orange/10 p-4 transition hover:bg-brand-orange/15">
              <span className="text-[20px]">📓</span>
              <div>
                <h3 className="text-[14px] font-bold text-ink">experience books</h3>
                <p className="mt-0.5 text-[12px] text-ink-muted">browse all experience books for art & design and public speaking.</p>
              </div>
              <span className="ml-auto text-[12px] font-bold text-brand-orange">view →</span>
            </a>
          </div>
        </section>

        {/* Talking to Parents */}
        <GuideSection title="talking to parents">
          <div className="space-y-4">
            <div>
              <p className="text-[12px] font-bold text-category-language mb-2">do</p>
              <ul className="space-y-1.5">
                <li className="flex gap-2 text-[13px] text-ink md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-category-language" />
                  share one specific thing from a recent session — not "doing well" but what you actually observed
                </li>
                <li className="flex gap-2 text-[13px] text-ink md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-category-language" />
                  use the report card as a conversation starter, not a verdict
                </li>
                <li className="flex gap-2 text-[13px] text-ink md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-category-language" />
                  listen to what parents tell you about their child at home
                </li>
                <li className="flex gap-2 text-[13px] text-ink md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-category-language" />
                  if a conversation needs more than 2 minutes, schedule a dedicated time
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-bold text-brand-orange mb-2">do not</p>
              <ul className="space-y-1.5">
                <li className="flex gap-2 text-[13px] text-ink-muted md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/60" />
                  compare children to each other
                </li>
                <li className="flex gap-2 text-[13px] text-ink-muted md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/60" />
                  use internal programme terminology — describe what you saw in plain language
                </li>
                <li className="flex gap-2 text-[13px] text-ink-muted md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/60" />
                  make promises about outcomes
                </li>
                <li className="flex gap-2 text-[13px] text-ink-muted md:text-[14px]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/60" />
                  have difficult conversations at drop-off or pick-up
                </li>
              </ul>
            </div>
          </div>
        </GuideSection>

        {/* FAQs */}
        <GuideSection title="faqs — what to say when parents ask">
          <div className="space-y-4">
            <FaqItem q="how is this programme play-based?">
              every session is structured around activities — games, making, building, or storytelling. children develop skills because the activity requires it, not because they are being tested. there is no performance pressure. the learning happens inside the doing.
            </FaqItem>
            <FaqItem q="how does this support my child's learning?">
              skills are built through repetition across many sessions. a child who does the same type of activity repeatedly over a programme builds a real habit — not because they were drilled, but because the structure kept returning to it. the skills transfer directly into school and everyday life.
            </FaqItem>
            <FaqItem q="how do you keep us updated?">
              three ways. the experience book comes home after every session — filled in by the child in their own words and drawings. the report card is issued at the end of every month — specific to your child, written by the educator. the educator is available at drop-off and pick-up for brief conversations. longer conversations can be scheduled.
            </FaqItem>
            <FaqItem q="my child is shy — will this work for them?">
              the programme is built for children who are not naturally confident. no child is ever put on the spot alone without preparation. every activity is designed so children participate at the same time — no one is singled out or waiting to be watched. reluctant children have a gradual pathway and are never forced.
            </FaqItem>
            <FaqItem q="how do I know if my child is progressing?">
              the report card describes what the educator actually observed — specific, real, and behavioural. you may also notice it at home over time. we track each child against where they started, not against a standard or against other children.
            </FaqItem>
            <FaqItem q="what can i do at home?">
              one thing — ask your child one question about what they did in class today. not "what did you learn?" but "what did you do?" or "what was the best part?" then listen without filling in the gaps. that conversation is the most useful thing you can do.
            </FaqItem>
          </div>
        </GuideSection>

        {/* One Rule */}
        <div className="rounded-card border-2 border-brand-orange/30 bg-brand-orange/5 p-5 md:p-8">
          <h2 className="text-[15px] font-extrabold text-ink md:text-[18px]">
            one rule that applies to every session
          </h2>
          <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink md:text-[16px]">
            at the end of every session, ask yourself: "what did i notice today — specifically — about each child?"
          </p>
          <p className="mt-2 text-[13px] text-ink-muted md:text-[14px]">
            if you can answer that for every child in the room, you ran a good session.
          </p>
        </div>
      </div>
    </div>
  );
}

function GuideSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[16px] font-extrabold text-ink md:text-[20px]">{title}</h2>
      {subtitle && (
        <p className="mt-0.5 text-[12px] font-medium text-ink-muted md:text-[13px]">{subtitle}</p>
      )}
      <div className="mt-3 space-y-2">{children}</div>
    </section>
  );
}

function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-card bg-brand-white p-4 shadow-card ring-1 ring-ink/5 md:p-5">
      <p className="text-[13px] font-bold text-ink md:text-[15px]">"{q}"</p>
      <p className="mt-2 text-[12px] leading-relaxed text-ink-muted md:text-[14px]">{children}</p>
    </div>
  );
}
