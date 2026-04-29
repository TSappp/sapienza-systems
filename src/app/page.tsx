import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const problems = [
  "Shifts run differently depending on who's working",
  "Sloppy handoffs between managers and teams",
  "Training that varies by trainer",
  "Opening and closing routines that drift",
  "Bar standards that live in one person's head",
  "Too much owner or GM babysitting",
];

const deliverables = [
  { title: "Opening / Closing Checklists", description: "Shift-ready routines that hold regardless of who's working." },
  { title: "Sidework & Daily Task Systems", description: "Clear ownership of every recurring task, every shift." },
  { title: "Manager Handoff Logs", description: "Nothing falls through the cracks between shifts or days off." },
  { title: "Role-Specific SOPs", description: "Bartender, server, host, closer — each role documented clearly." },
  { title: "Onboarding & Training Roadmaps", description: "New hires contribute in days, not weeks of shadowing." },
  { title: "Bar Setup & Workflow Standards", description: "Station layout, pars, specs — consistent every night." },
  { title: "Pre-Shift & Shift Recap Tools", description: "Structured communication that replaces verbal chaos." },
];

const trustPoints = [
  "16 years in restaurants and hospitality",
  "14 years behind the bar",
  "Experience across high-volume, neighborhood, nightlife, hotel, and craft settings",
  "Systems built for real shifts, not binders that collect dust",
  "Practical AI tools that help managers move faster",
];

const serviceCards = [
  { title: "Shift Systems Audit", href: "/services#shift-systems-audit", description: "I observe a real shift and leave you with findings, priorities, and 3 custom tools." },
  { title: "Manager Operating System Build", href: "/services#manager-operating-system", description: "Shift logs, pre-shift templates, recap workflows, issue tracking — everything managers need to stop repeating themselves." },
  { title: "Restaurant SOP + Training Sprint", href: "/services#sop-training-sprint", description: "Role-specific SOPs, onboarding roadmaps, and training sign-offs that actually get used." },
  { title: "Bar Systems Reset", href: "/services#bar-systems-reset", description: "Station standards, workflow audits, spec organization, and bartender training support." },
  { title: "AI Tools for Restaurant Managers", href: "/services#ai-tools", description: "SOP generators, pre-shift note builders, and prompt libraries that cut admin time in half." },
];

const faqs = [
  { q: "What kind of restaurants do you work with?", a: "Independent restaurants, cocktail bars, chef-owned concepts, multi-unit groups. Anywhere shifts need to run more consistently." },
  { q: "How does the Shift Systems Audit work?", a: "I observe a real shift at your restaurant. Then I deliver written findings, a priority action plan, and 3 practical tools your team can use immediately." },
  { q: "Do you work with bars specifically?", a: "Yes. I spent 14 years behind the bar across high-volume, craft, hotel, and nightlife settings. Bar systems are a specialty." },
  { q: "Is the first conversation free?", a: "Yes. 15 minutes, no obligation. You tell me what's not working, I ask the right questions, and I'll tell you whether I'm the right fit." },
  { q: "What do you actually leave behind?", a: "Practical tools: checklists, SOPs, training roadmaps, manager handoff logs, shift guides. One-page documents people can use during a real shift." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Restaurant Operations Consultant &middot; Boston
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            Restaurant Operations Systems for Boston Teams That Need Cleaner
            Shifts, Faster Training, and Better Follow-Through
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed">
            I help owners, GMs, and bar managers turn messy handoffs,
            inconsistent standards, and tribal knowledge into practical systems
            their teams can actually use.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Book a Free 15-Minute Ops Call
            </Button>
            <Button
              href="/shift-systems-audit"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900"
            >
              See the Shift Systems Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-stone-800 text-stone-300 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider">
          <span>Boston-Based</span>
          <span className="text-stone-500">&middot;</span>
          <span>16 Years in Restaurants</span>
          <span className="text-stone-500">&middot;</span>
          <span>14 Years Behind the Bar</span>
          <span className="text-stone-500">&middot;</span>
          <span>Practical Systems, Not Binders</span>
        </div>
      </section>

      {/* What's Breaking Down */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Common Problems"
            title="What I Help Fix"
            description="If any of these sound familiar, your operation has a systems problem — not a people problem."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div key={problem} className="p-5 bg-white border border-stone-200 rounded-lg">
                <p className="text-stone-700 text-sm font-medium leading-relaxed">
                  &mdash; {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shift Systems Audit */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Start Here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Shift Systems Audit
          </h2>
          <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-2xl">
            A practical review of where the operation breaks down, where
            standards slip, and what should be fixed first. I observe a real
            shift, document the friction, and leave you with an action plan
            plus tools your team can use immediately.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Live shift observation",
              "Friction scorecard",
              "Written findings and priorities",
              "3 practical tools customized to the operation",
              "30-day action plan",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-stone-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Book a Free 15-Minute Ops Call
            </Button>
          </div>
        </div>
      </section>

      {/* What I Leave Behind */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Deliverables"
            title="What I Leave Behind"
            description="Every engagement ends with practical tools your team can use on the next shift — not a report that sits in a drawer."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="p-5 bg-white border border-stone-200 rounded-lg">
                <h3 className="font-semibold text-stone-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Operators Hire Me */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading label="Why Me" title="Why Restaurant Operators Hire Me" />
          <div className="space-y-3 max-w-xl mx-auto">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-700 mt-2" />
                <p className="text-stone-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Services"
            title="How I Work With Restaurants"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline">
              See All Restaurant Services
            </Button>
          </div>
        </div>
      </section>

      {/* Live Example — HouseList */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Live Example
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A Live Hospitality Pilot I Built
          </h2>
          <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-2xl">
            HouseList is a lightweight guest-return and reward system I built for
            restaurants that don&rsquo;t want a bloated POS loyalty program.
            Guests join by QR, visits are verified, rewards stay
            staff-controlled, and managers get a clean dashboard that actually
            helps the operation.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "QR join, no app download",
              "Verified visits and staff-controlled rewards",
              "Manager dashboard with actionable guest signals",
              "Built for restaurant shifts, not generic loyalty software",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-stone-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/houselist" variant="primary">
              View HouseList Live
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900"
            >
              Ask About a Hospitality Systems Pilot
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading title="Common Questions" />
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-stone-900 text-sm">{faq.q}</h3>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            label="Get Started"
            title="Your Operation Deserves Better Systems"
            description="Tell me what's breaking down and I'll tell you what I'd fix first."
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
