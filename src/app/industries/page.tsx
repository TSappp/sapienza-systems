import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "What I Fix",
  description:
    "Restaurant operations problems I fix: shift consistency, training, handoffs, bar standards, SOPs, and documentation that people actually use. Boston restaurant systems consultant.",
};

const categories = [
  {
    title: "Shift Consistency",
    problem: "Your standards shouldn't disappear when the strongest person on the schedule is off.",
    fixes: [
      "Opening and closing checklists that hold every shift",
      "Station setup standards that don't vary by person",
      "Transition routines between day and night crews",
      "Sidework systems with clear ownership",
    ],
  },
  {
    title: "Training & Onboarding",
    problem: "New hires shouldn't need a week of shadowing just to become functional.",
    fixes: [
      "Structured onboarding roadmaps by role",
      "Training sign-off checkpoints",
      "Service standards documentation new hires can actually reference",
      "Quick-reference guides for each position",
    ],
  },
  {
    title: "Handoffs & Manager Communication",
    problem: "Managers shouldn't have to re-explain the same expectations every shift.",
    fixes: [
      "Manager shift handoff logs",
      "Pre-shift templates with structured talking points",
      "Shift recap workflows that capture what happened",
      "Issue tracking that doesn't rely on group texts",
    ],
  },
  {
    title: "Sidework & Opening / Closing Systems",
    problem: "The quality of a close shouldn't depend on who drew the short straw.",
    fixes: [
      "Itemized daily task matrices",
      "Role-assigned closing routines",
      "Opening checklists that include verification steps",
      "Weekly deep-clean and maintenance schedules",
    ],
  },
  {
    title: "Bar Standards & Station Flow",
    problem: "Your best bartender's setup shouldn't be a mystery to the rest of the team.",
    fixes: [
      "Bar station layout standards",
      "Par and spec organization",
      "Cocktail consistency systems",
      "Bartender training modules",
      "Speed and efficiency workflow audits",
    ],
  },
  {
    title: "Documentation People Actually Use",
    problem: "A 40-page operations manual nobody reads is worse than having nothing at all.",
    fixes: [
      "One-page SOPs written for mid-shift reference",
      "Scannable checklists, not paragraph-heavy manuals",
      "Role-specific guides that live where the work happens",
      "Systems designed for a phone screen, not a binder",
    ],
  },
];

export default function WhatIFixPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            What I Fix
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            What I Fix in Restaurant Operations
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            Most restaurant problems aren&rsquo;t people problems. They&rsquo;re
            systems problems that hide in plain sight because the team has
            learned to work around them. I find them and build the fix.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                {category.title}
              </h2>
              <p className="mt-3 text-stone-600 leading-relaxed italic">
                &ldquo;{category.problem}&rdquo;
              </p>
              <ul className="mt-6 space-y-2">
                {category.fixes.map((fix) => (
                  <li
                    key={fix}
                    className="flex items-start gap-2 text-sm text-stone-600"
                  >
                    <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                    {fix}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="See Your Operation Here?"
            description="Tell me what's not working and I'll tell you which service fits and what the fix would look like."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact">Book a Free 15-Minute Ops Call</Button>
            <Button href="/shift-systems-audit" variant="outline">
              See the Shift Systems Audit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
