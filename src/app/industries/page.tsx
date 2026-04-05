import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sapienza Systems provides operations consulting for restaurants, bars, hospitality groups, labs, biotech teams, and growing companies.",
};

const industries = [
  {
    title: "Restaurants & Bars",
    description:
      "I\u2019ve spent 16 years inside these operations. I know what a bad bar setup costs you in ticket times. I know why your Tuesday closer does it differently than your Saturday closer. I know the difference between a training program and just telling someone to shadow the good bartender for a week. If your operation runs well when the A-team is on but falls apart when they\u2019re not\u2014the problem is systems, and I can fix it.",
    problems: [
      "The quality of a shift depends on who\u2019s working it",
      "Opening and closing routines change by the person",
      "Training means \u201cshadow someone for a few shifts\u201d",
      "FOH and BOH communicate through shouting or guessing",
      "Your best people carry the weight of broken systems",
    ],
    improvements: [
      "Service flow audit with specific, written recommendations",
      "Bar station redesign and workflow tightening",
      "Standardized open/close/transition checklists",
      "Training documents built from how the job is actually done",
      "FOH/BOH handoff and communication protocols",
    ],
    outcomes: [
      "Consistent execution across every shift",
      "New hires productive in days, not weeks",
      "Your operation survives without you in the building",
      "Less chaos, better service, lower stress",
    ],
  },
  {
    title: "Hospitality Groups & Multi-Unit Teams",
    description:
      "When one location runs great and another doesn\u2019t, the difference is almost never the people. It\u2019s that the good location has systems\u2014even if nobody calls them that\u2014and the other one is running on improvisation. I help hospitality groups build the operational infrastructure that makes standards portable: documentation, training, and workflows that work the same everywhere.",
    problems: [
      "Quality and standards differ between locations",
      "Training depends on whoever\u2019s doing the training that day",
      "GMs spend their time putting out fires instead of leading",
      "Scaling means the problems get bigger, not better",
      "Institutional knowledge leaves when managers leave",
    ],
    improvements: [
      "Scalable SOPs and role-specific playbooks",
      "Structured onboarding programs with milestone checkpoints",
      "Service standards documentation for each position",
      "Operational audits that surface the real problems",
      "Documentation systems that grow with the organization",
    ],
    outcomes: [
      "Same standard at every location, every shift",
      "GMs lead instead of troubleshoot",
      "New units open faster because the playbook already exists",
      "Knowledge stays in the system when people move on",
    ],
  },
  {
    title: "Labs & Technical Teams",
    description:
      "I worked in process development and scientific operations before consulting. I know what it looks like when documentation is a month behind, when reports come out differently depending on who writes them, and when a team member leaves and takes half the institutional knowledge with them. In technical environments, unclear processes aren\u2019t just inconvenient\u2014they create compliance risk, wasted cycles, and compounding confusion.",
    problems: [
      "Processes exist but aren\u2019t documented well enough to hand off",
      "Reports vary in format, depth, and quality by author",
      "Meeting context disappears between sessions",
      "Onboarding a new scientist or technician takes months",
      "Workflow gaps hide until something goes wrong",
    ],
    improvements: [
      "Process documentation and workflow mapping",
      "Report templates that enforce consistency",
      "Meeting-to-action-item systems that capture decisions",
      "Technical writing cleanup and standardization",
      "Onboarding documentation for technical and lab roles",
    ],
    outcomes: [
      "Documentation that\u2019s current, clear, and actually referenced",
      "New hires get oriented without draining senior staff for weeks",
      "Reports are consistent regardless of who produces them",
      "Process ownership is visible\u2014not assumed",
    ],
  },
  {
    title: "Founders & Operators",
    description:
      "You built the company, and now you\u2019re the bottleneck. Every question routes through you because nothing is written down. Onboarding is you explaining things over Zoom for the third time. Quality varies because the standard lives in your head. I build the documentation and systems that let your team operate without you in every loop\u2014so you can focus on growing the business instead of explaining how it works.",
    problems: [
      "Nothing is documented\u2014everything runs on your availability",
      "Hiring means re-explaining the same things from scratch",
      "Quality drops when you\u2019re not directly involved",
      "The team can\u2019t scale because the systems can\u2019t scale",
      "You\u2019re spending operator time on manager problems",
    ],
    improvements: [
      "Core process documentation and operational SOPs",
      "Onboarding system design with clear milestones",
      "Workflow mapping and delegation frameworks",
      "AI workflow setup for writing, reporting, and documentation",
      "Operational clarity that frees you to focus on growth",
    ],
    outcomes: [
      "Your team answers their own questions because the answers are documented",
      "New hires contribute without weeks of hand-holding",
      "Quality stays consistent as headcount grows",
      "You spend your time on strategy, not explaining how things work",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Industries
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Different Floor. Same Discipline.
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            A restaurant kitchen and a biotech lab have more in common than
            people think. Both break when processes are unclear, training is
            inconsistent, and documentation doesn\u2019t exist. I fix that in
            both.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 space-y-24">
          {industries.map((industry) => (
            <div key={industry.title}>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                {industry.title}
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed">
                {industry.description}
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-lg">
                  <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                    Common Problems
                  </h3>
                  <ul className="space-y-2">
                    {industry.problems.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-stone-600 leading-relaxed"
                      >
                        &mdash; {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-lg">
                  <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                    What I Help With
                  </h3>
                  <ul className="space-y-2">
                    {industry.improvements.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-stone-600 leading-relaxed"
                      >
                        &bull; {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-lg">
                  <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                    Expected Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {industry.outcomes.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-stone-600 leading-relaxed"
                      >
                        &#10003; {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="See Your Team Here?"
            description="Tell me what\u2019s not working. I\u2019ll tell you what I\u2019d fix and what it would look like when it\u2019s done."
          />
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </section>
    </>
  );
}
