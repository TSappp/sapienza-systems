import type { Metadata } from "next";
import AuditForm from "./AuditForm";

export const metadata: Metadata = {
  title: "Shift Systems Audit | Boston Restaurant Operations",
  description:
    "A practical review of where your restaurant operation breaks down, where standards slip, and what to fix first. Boston-based, built from 16 years inside restaurants.",
};

const painPoints = [
  "Shifts run differently depending on who's working",
  "Opening and closing routines drift week to week",
  "New hires take too long to get up to speed",
  "Managers repeat the same instructions every shift",
  "Bar setup varies by bartender",
  "You're still the bottleneck on too many decisions",
];

const auditDeliverables = [
  "Live shift observation at your location",
  "Written friction scorecard with priorities",
  "Findings report with specific recommendations",
  "3 practical tools customized to your operation",
  "30-day action plan your team can start using immediately",
];

const steps = [
  {
    step: "01",
    title: "Quick Call",
    description: "15 minutes. You tell me what's not working. I ask the right questions.",
  },
  {
    step: "02",
    title: "Shift Observation",
    description: "I watch a real shift at your restaurant and document where execution breaks.",
  },
  {
    step: "03",
    title: "Action Plan + Tools",
    description: "You get written findings, a priority list, and practical tools your team can use the next day.",
  },
];

const faqs = [
  {
    q: "How long does the audit take?",
    a: "The observation is one shift. You'll have findings and tools within a week.",
  },
  {
    q: "Do you work with bars too?",
    a: "Yes. I spent 14 years behind the bar across high-volume, craft, hotel, and nightlife settings.",
  },
  {
    q: "What if I'm not sure what's broken?",
    a: "That's what the audit is for. I find the friction points you've gotten used to working around.",
  },
  {
    q: "Is the first call free?",
    a: "Yes. 15 minutes, no obligation. I'll tell you whether I'm the right fit.",
  },
];

export default function ShiftSystemsAuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Boston Restaurant Operations
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Your Operation Should Run the Same Whether You&rsquo;re There or Not
          </h1>
          <p className="mt-6 text-lg text-stone-300 leading-relaxed">
            I help Boston restaurant owners, GMs, and bar managers turn messy
            handoffs, inconsistent standards, and tribal knowledge into practical
            systems their teams can actually use.
          </p>
          <div className="mt-8">
            <a
              href="#book"
              className="inline-block px-6 py-3.5 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors"
            >
              Book a Free 15-Minute Ops Call
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-stone-800 text-stone-300 py-4">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider">
          <span>Boston-Based</span>
          <span className="text-stone-500">&middot;</span>
          <span>16 Years in Restaurants</span>
          <span className="text-stone-500">&middot;</span>
          <span>14 Years Behind the Bar</span>
          <span className="text-stone-500">&middot;</span>
          <span>Practical Systems, Not Binders</span>
        </div>
      </section>

      {/* Pain Bullets */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight mb-2">
            Sound Familiar?
          </h2>
          <p className="text-stone-500 text-sm mb-8">
            These are systems problems, not people problems.
          </p>
          <div className="space-y-3">
            {painPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <span className="text-amber-700 mt-0.5 flex-shrink-0 text-sm">&mdash;</span>
                <p className="text-stone-700 text-sm font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shift Systems Audit Offer */}
      <section className="py-14 md:py-20 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Start Here
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Shift Systems Audit
          </h2>
          <p className="mt-4 text-stone-300 leading-relaxed">
            A practical review of where your operation breaks down, where
            standards slip, and what should be fixed first. I observe a real
            shift, document the friction, and leave you with an action plan
            plus tools your team can use immediately.
          </p>
          <div className="mt-8 space-y-2">
            {auditDeliverables.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-stone-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#book"
              className="inline-block px-6 py-3.5 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors"
            >
              Book a Free 15-Minute Ops Call
            </a>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight mb-8">
            Why Operators Work With Me
          </h2>
          <div className="space-y-3">
            {[
              "I've held every position in a restaurant — busboy to bartender",
              "14 years behind the bar across high-volume, nightlife, hotel, and craft settings",
              "I build one-page tools people actually use mid-shift, not bloated manuals",
              "Background in process development gives my documentation unusual rigor",
              "I work locally in Boston — I come to your restaurant",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-700 mt-2" />
                <p className="text-stone-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-14 md:py-20 bg-stone-50 border-y border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 text-amber-700 font-bold text-sm pt-1">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-1 text-stone-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight mb-8">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-stone-900 text-sm">{faq.q}</h3>
                <p className="mt-1 text-stone-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section id="book" className="py-14 md:py-20 bg-stone-900 text-white scroll-mt-16">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Book a Free 15-Minute Ops Call
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-8">
            Tell me what keeps slipping, what your team keeps having to
            re-explain, or where the shift breaks down. I&rsquo;ll tell you
            what I&rsquo;d fix first and whether I&rsquo;m the right fit.
          </p>
          <AuditForm />
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-stone-900 border-t border-stone-700 px-4 py-3 safe-bottom">
        <a
          href="#book"
          className="block w-full text-center px-6 py-3 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors"
        >
          Book a Free 15-Minute Ops Call
        </a>
      </div>
    </>
  );
}
