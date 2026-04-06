import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Restaurant Services",
  description:
    "Restaurant operations consulting services in Boston. Shift systems audits, SOPs, training sprints, bar systems resets, and manager operating systems for restaurants and bars.",
};

const services = [
  {
    id: "shift-systems-audit",
    title: "Shift Systems Audit",
    whoFor:
      "Owners, GMs, and bar managers who know the operation works better on some shifts than others but don't have a clear view of why.",
    whatItSolves:
      "Inconsistency, friction, preventable mistakes, weak handoffs, and manager bottlenecks.",
    deliverables: [
      "Live shift observation",
      "Friction scorecard",
      "Written findings",
      "Priority action plan",
      "3 custom quick-win tools",
    ],
  },
  {
    id: "sop-training-sprint",
    title: "Restaurant SOP + Training Sprint",
    whoFor:
      "Restaurants where standards depend too much on memory, and onboarding takes too long.",
    whatItSolves:
      "Slow training, inconsistent execution, and knowledge loss when strong employees leave.",
    deliverables: [
      "Role-specific SOPs",
      "Onboarding roadmap",
      "Training sign-off sheets",
      "Service standards guide",
      "Shift quick-reference guides",
    ],
  },
  {
    id: "bar-systems-reset",
    title: "Bar Systems Reset",
    whoFor:
      "Cocktail bars and beverage-driven restaurants that need tighter standards, better flow, and more consistent bar execution.",
    whatItSolves:
      "Station inefficiency, inconsistent specs, slow service, weak bartender training, and unclear setup standards.",
    deliverables: [
      "Bar workflow audit",
      "Station setup standards",
      "Opening and closing bar systems",
      "Sidework structure",
      "Recipe/spec organization",
      "Bartender training support",
    ],
  },
  {
    id: "manager-operating-system",
    title: "Manager Operating System Build",
    whoFor:
      "Restaurants where managers are repeating themselves, carrying too much in their heads, and dropping follow-through between shifts.",
    whatItSolves:
      "Poor handoffs, inconsistent pre-shifts, weak recaps, recurring issues, and lack of accountability.",
    deliverables: [
      "Manager shift log",
      "Pre-shift template",
      "Shift recap workflow",
      "Issue tracker",
      "Weekly ops review structure",
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools for Restaurant Managers",
    whoFor:
      "Operators who already know where the friction is and want to speed up documentation, communication, and training.",
    whatItSolves:
      "Too much repetitive admin writing and not enough usable systems.",
    deliverables: [
      "SOP generator",
      "Pre-shift note generator",
      "Manager recap generator",
      "Review response assistant",
      "Training support GPT",
      "Prompt library for recurring tasks",
    ],
    isAddOn: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Restaurant Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Named Services for Real Restaurant Problems
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            Every engagement is built around a specific operational problem.
            I come in, find where execution breaks, and leave behind practical
            tools your team can use on the next shift.
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
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                  {service.title}
                </h2>
                {service.isAddOn && (
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                    Add-On
                  </span>
                )}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                  <p className="text-sm font-semibold text-stone-900 mb-1">
                    Who it&rsquo;s for
                  </p>
                  <p className="text-sm text-stone-600">{service.whoFor}</p>
                </div>
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                  <p className="text-sm font-semibold text-stone-900 mb-1">
                    What it solves
                  </p>
                  <p className="text-sm text-stone-600">{service.whatItSolves}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                  Deliverables
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-stone-600"
                    >
                      <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button href="/contact" variant="outline">
                  Ask About This Service
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
            title="Not Sure Which Service Fits?"
            description="Tell me what's breaking down in the operation and I'll tell you what I'd fix first."
          />
          <Button href="/contact">Start the Conversation</Button>
        </div>
      </section>
    </>
  );
}
