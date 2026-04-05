import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sapienza Systems offers operations consulting, SOPs, training systems, technical documentation, and AI workflow setup. We fix the systems that slow your team down.",
};

const services = [
  {
    id: "hospitality-operations",
    title: "Hospitality Operations Consulting",
    description:
      "Your opening routine changes depending on who's working. Your best bartender's standards don't transfer to the rest of the team. Shift transitions are sloppy. FOH and BOH talk past each other. The operation works—but only when the right people are on. I fix that. I audit how your operation actually runs, identify where it breaks down, and build the systems that make execution consistent regardless of who's on the floor.",
    idealClient:
      "Restaurant owners, bar operators, GMs, and hospitality groups whose operations depend too much on specific people instead of repeatable systems.",
    deliverables: [
      "Full service flow and shift audit with written findings",
      "Bar station setup and workflow redesign",
      "Opening, closing, and shift transition checklists",
      "FOH/BOH communication and handoff protocols",
      "Training consistency framework for key roles",
      "Sidework, prep, and daily task standardization",
    ],
    credibilityNote:
      "I also built Bartender Trainer—a drink knowledge and recall tool born from 14 years behind the bar—because I think training should be built into the workflow, not something that stops after week one.",
    outcomes: [
      "Shifts run the same way regardless of who's working",
      "Less time spent fixing preventable problems",
      "Faster, more consistent service during peak hours",
      "Your operation holds up when you're not in the building",
    ],
  },
  {
    id: "sops-playbooks",
    title: "SOPs, Playbooks & Training Systems",
    description:
      "Your team knows how to do the job—but that knowledge lives in their heads. When they leave, call out, or have an off night, the standard drops. New hires take weeks to get up to speed because there's nothing written down. I extract the knowledge your team carries, organize it, and turn it into documents that anyone can pick up and follow. Not binders that collect dust—scannable, practical tools that work during a real shift.",
    idealClient:
      "Teams where onboarding is slow, training varies by trainer, institutional knowledge walks out the door when people leave, or there's no single source of truth for how things should be done.",
    deliverables: [
      "Role-specific SOPs (e.g., bartender opening, server sidework, closing manager duties)",
      "New-hire onboarding checklist with day-by-day milestones",
      "Training guides with sign-off checkpoints",
      "Service standards playbook",
      "Quick-reference shift guides for each position",
      "Process documentation for recurring workflows",
    ],
    outcomes: [
      "New hires contribute in days instead of weeks",
      "Training quality stays consistent even when your best people aren't training",
      "Knowledge is preserved when employees leave",
      "Your team has one clear answer for \u201chow do we do this?\u201d",
    ],
  },
  {
    id: "technical-documentation",
    title: "Technical Documentation & Workflow Support",
    description:
      "Your processes work—but they're not documented well enough for someone new to follow. Reports come out inconsistent depending on who writes them. Context from last week's meeting evaporates by Monday. I bring the same systems-thinking I use in hospitality to labs, biotech teams, and technical organizations. The deliverables look different. The discipline is the same: clear documentation, repeatable processes, and workflows that don't depend on someone's memory.",
    idealClient:
      "Biotech teams, labs, and technical organizations where documentation quality directly affects compliance, onboarding, or operational reliability.",
    deliverables: [
      "Process documentation and standard workflow write-ups",
      "Report template standardization across the team",
      "Meeting-to-action-item systems (notes that become tasks)",
      "Technical writing cleanup and formatting overhaul",
      "Workflow mapping with clear ownership and handoff points",
      "Onboarding documentation for technical roles",
    ],
    outcomes: [
      "New team members get oriented without shadowing someone for a month",
      "Reports are consistent in format and quality, every time",
      "Processes are visible, documented, and owned—not assumed",
      "Meetings produce clear next steps instead of vague follow-ups",
    ],
  },
  {
    id: "ai-workflow",
    title: "AI Workflow Setup",
    description:
      "You write the same kinds of reports, summaries, SOPs, and emails every week. AI tools like ChatGPT, Copilot, and Warp can cut that work in half—but only if they're set up for your specific tasks, not generic use. I build custom AI workflows tailored to the work you already do: prompt systems, templates, and repeatable pipelines that turn rough notes into polished deliverables.",
    idealClient:
      "Managers, operators, and professionals who produce recurring written work—reports, documentation, communications—and want to do it faster without losing quality.",
    deliverables: [
      "Custom prompt library for your recurring tasks (SOPs, reports, emails)",
      "Note-to-summary and meeting-to-action-item workflows",
      "Reusable document templates paired with AI generation",
      "Writing and editing pipeline setup",
      "Tool selection and configuration (ChatGPT, Copilot, Warp)",
      "Training session on daily AI use for your specific work",
    ],
    credibilityNote:
      "I don't just advise on AI tools—I build with them. Philosopher Council is a full AI-powered platform I designed and shipped, using the same structured-thinking approach I bring to client workflows.",
    outcomes: [
      "Written deliverables take half the time to produce",
      "Documentation quality improves because the starting point is better",
      "Raw notes and meeting context turn into usable documents automatically",
      "You build compounding workflows—each week is faster than the last",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Four Ways I Fix What's Slowing Your Team Down
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            Every engagement is focused on a specific operational problem.
            I find the friction, build the system that eliminates it, and
            make sure your team can run it without me.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 space-y-20">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                {service.title}
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <p className="text-sm font-semibold text-stone-900 mb-1">
                  Ideal Client
                </p>
                <p className="text-sm text-stone-600">{service.idealClient}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                    Example Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-stone-600"
                      >
                        <span className="text-amber-700 mt-1 flex-shrink-0">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                    Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {service.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-stone-600"
                      >
                        <span className="text-amber-700 mt-1 flex-shrink-0">
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {service.credibilityNote && (
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {service.credibilityNote}
                  </p>
                </div>
              )}

              <div className="mt-8">
                <Button href="/contact" variant="outline">
                  Discuss This Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Not Sure Where to Start?"
            description="You don't need to know the service name. Tell me what's broken and I'll tell you what I'd fix first."
          />
          <Button href="/contact">Let&rsquo;s Talk</Button>
        </div>
      </section>
    </>
  );
}
