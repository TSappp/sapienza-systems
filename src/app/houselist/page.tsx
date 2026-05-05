import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "HouseList — Shift Intelligence for Guest Recognition",
  description:
    "HouseList gives restaurants a live shift brief of VIPs, reward-ready guests, at-risk returns, and private feedback — so managers and staff know who to recognize tonight.",
};

const revenueOutcomes = [
  {
    title: "Increase Second and Third Visits",
    description:
      "Second and third visits are where a first-time guest starts becoming a regular. HouseList makes those return moments visible and actionable.",
  },
  {
    title: "Recover At-Risk Regulars",
    description:
      "When a regular stops coming in, the manager sees it before it becomes permanent. A well-timed gesture can bring them back.",
  },
  {
    title: "Turn Private Feedback Into Manager Action",
    description:
      "Guests leave private ratings and notes. Managers see unresolved feedback before the next visit — not after a bad review goes public.",
  },
  {
    title: "Track Reward-to-Return Conversion",
    description:
      "Know which hospitality gestures actually drive return visits, and which ones don\u2019t move the needle.",
  },
  {
    title: "Help Staff Recognize Valuable Guests",
    description:
      "Staff see who matters tonight before service starts — not after the regular already left unrecognized.",
  },
  {
    title: "Estimate Repeat Revenue From Verified Returns",
    description:
      "Verified visits multiplied by average spend gives managers a real number for how much repeat business the system is driving.",
  },
];

const tonightExamples = [
  "VIP regular in house \u2014 greet by name, offer their usual",
  "Reward-ready guest \u2014 manager approves a hospitality gesture",
  "At-risk regular returning after a gap \u2014 recognize the comeback",
  "First-time guest worth capturing well \u2014 make the first impression count",
  "Private feedback that needs attention \u2014 resolve before the next visit",
];

const staffActions = [
  "Greet a regular by name",
  "Offer the guest\u2019s usual drink",
  "Verify a return visit",
  "Redeem a manager-approved gesture",
  "Address private feedback",
  "Add a note to the guest record",
  "Mark the action handled",
];

const pilotMetrics = [
  "QR join rate",
  "Second-visit conversion",
  "Third-visit conversion",
  "Verified returning guests",
  "At-risk guests recovered",
  "Reward-to-return conversion",
  "Staff action completion",
  "Private feedback resolved",
  "Estimated repeat revenue",
];

const pilotIncludes = [
  "Setup and configuration",
  "QR placement plan for your venue",
  "Manager training",
  "Tonight rules configuration",
  "Staff action workflow setup",
  "Printable shift brief",
  "Weekly review during the pilot",
  "Pilot success metrics and reporting",
];

const audiences = [
  "Independent restaurants that want to know who matters tonight",
  "Cocktail bars and hotel bars that want repeat visibility without a points program",
  "Chef-owned concepts that care about guest recognition but hate bloated software",
  "Small restaurant groups piloting shift intelligence before committing to enterprise tools",
];

export default function HouseListPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Shift Intelligence for Restaurants
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Know Who Matters Tonight — and Turn More Guests Into Regulars
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            HouseList gives restaurants a live shift view of VIPs, reward-ready
            guests, at-risk returns, first-time visitors, private feedback, and
            next-best staff actions — so managers know who to recognize, what to
            do, and what impact it created.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              href="https://houselist-demo.vercel.app"
              variant="primary"
              className="bg-amber-700 hover:bg-amber-800"
            >
              View Live Demo
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900"
            >
              Book a Free 15-Minute Ops Call
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="The Problem"
            title="Most Restaurants Have No Idea Who Matters Tonight"
            description="Punch cards are dead. POS loyalty is bloated. Generic QR forms collect emails nobody acts on. And reservation systems only see guests who book — not the regulars who walk in."
            centered={false}
          />
          <div className="space-y-6">
            {[
              {
                title: "No guest recognition on shift",
                issue:
                  "Staff don\u2019t know who\u2019s a first-timer, who\u2019s a regular, or who hasn\u2019t been back in months. Every guest gets the same generic service.",
              },
              {
                title: "Rewards without intelligence",
                issue:
                  "Loyalty programs hand out points but never tell the manager which guests are worth a personal gesture tonight.",
              },
              {
                title: "Feedback that goes nowhere",
                issue:
                  "Private guest feedback sits in a dashboard nobody checks. By the time someone sees it, the guest has already decided not to come back.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-5 bg-white border border-stone-200 rounded-lg"
              >
                <h3 className="font-semibold text-stone-900 text-sm">
                  {p.title}
                </h3>
                <p className="mt-1 text-stone-600 text-sm leading-relaxed">
                  {p.issue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What HouseList Does */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="The System"
            title="What HouseList Does"
            description="Restaurants don&rsquo;t need another loyalty dashboard. They need a shift tool that helps staff recognize the right guests and act before the opportunity is missed."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "QR Guest Join", description: "Guests scan a QR code at the venue and join in seconds. No app download, no account friction." },
              { title: "Verified Visits", description: "Visits are confirmed through venue check-in — not self-reported, not GPS-guessed. The data is real." },
              { title: "Who Matters Tonight", description: "A live shift view of VIPs, regulars, at-risk returns, first-timers, reward-ready guests, and unresolved feedback." },
              { title: "Configurable Rules", description: "Define what makes a VIP, when a regular becomes at-risk, and when a guest becomes reward-eligible. Your rules, not a default algorithm." },
              { title: "Next Best Action", description: "Staff see what to do for each guest — greet by name, offer the usual, verify a visit, redeem a gesture — prompted by the system." },
              { title: "One-Tap Staff Actions", description: "Staff complete actions directly in the shift tools. Managers see what was done and what was missed." },
              { title: "Staff-Controlled Gestures", description: "Managers approve hospitality gestures. No automatic discount spirals. The team stays in control." },
              { title: "Printable Tonight Brief", description: "A concise shift brief with top guests, next-best actions, checkboxes, and manager notes. Print it, hand it out, run the shift." },
              { title: "Repeat Revenue Signals", description: "Verified visits multiplied by average spend gives managers a directional number for repeat business the system is driving." },
            ].map((f) => (
              <div
                key={f.title}
                className="p-5 bg-white border border-stone-200 rounded-lg"
              >
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  {f.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the Manager Sees Before Service */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Who Matters Tonight
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            What the Manager Sees Before Service
          </h2>
          <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-2xl">
            Instead of another generic dashboard, HouseList creates a shift view
            of the guests worth recognizing, recovering, rewarding, or watching
            tonight.
          </p>
          <div className="mt-8 space-y-3">
            {tonightExamples.map((example) => (
              <div key={example} className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                <span className="text-stone-300 text-sm">{example}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              href="https://houselist-demo.vercel.app"
              variant="primary"
            >
              See the Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* What Staff Actually Do */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="On the Floor"
            title="What Staff Actually Do"
            description="HouseList should not become another screen people ignore. The value comes from turning guest intelligence into simple staff actions."
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {staffActions.map((action) => (
              <div
                key={action}
                className="flex items-start gap-2 p-4 bg-white border border-stone-200 rounded-lg"
              >
                <span className="text-amber-700 mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                <span className="text-stone-700 text-sm">{action}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-stone-400">
            Designed to support actions like these during real service. Feature
            availability may vary during early pilot.
          </p>
        </div>
      </section>

      {/* Revenue Outcomes */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Revenue Impact"
            title="Revenue Outcomes This Is Built to Drive"
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {revenueOutcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="p-5 bg-white border border-stone-200 rounded-lg"
              >
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  {outcome.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-stone-400">
            Revenue estimates are directional until connected to POS or sales
            exports.
          </p>
        </div>
      </section>

      {/* See the Pilot in Action */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Live Preview"
            title="See the Pilot in Action"
            description="A shift-intelligence system is more convincing when you can see the guest flow and manager view together."
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Who Matters Tonight",
                description:
                  "A live shift view of VIPs, at-risk returns, and reward-ready guests.",
                src: "/images/houselist/manager-dashboard.png",
                alt: "HouseList Who Matters Tonight dashboard view",
              },
              {
                label: "Next Best Action",
                description:
                  "Staff see what to do for each guest and complete it in one tap.",
                src: "/images/houselist/visit-verification.png",
                alt: "HouseList next best action shift tools",
              },
              {
                label: "Guest QR Join",
                description:
                  "Scan, tap, join — no app download required.",
                src: "/images/houselist/guest-qr-join.png",
                alt: "Guest QR join page for HouseList",
              },
              {
                label: "Printable Tonight Brief",
                description:
                  "Top guests, actions, checkboxes — printed for the shift.",
                /*
                  TODO: Replace with real screenshot when available.
                  Drop image at: public/images/houselist/tonight-brief-print.png
                  Then update src below.
                */
                src: "/images/houselist/manager-dashboard.png",
                alt: "HouseList printable Tonight Brief",
              },
            ].map((panel) => (
              <div
                key={panel.label}
                className="bg-white border border-stone-200 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-stone-100">
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-stone-900 text-sm">
                    {panel.label}
                  </p>
                  <p className="mt-1 text-stone-600 text-xs leading-relaxed">
                    {panel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button
              href="https://houselist-demo.vercel.app"
              variant="primary"
            >
              Try the Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* How a Pilot Should Be Measured */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Pilot Metrics"
            title="How a Pilot Should Be Measured"
            description="A serious pilot needs serious metrics. These are the numbers that tell you whether HouseList is working for your venue."
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {pilotMetrics.map((metric) => (
              <div
                key={metric}
                className="flex items-start gap-2 p-4 bg-white border border-stone-200 rounded-lg"
              >
                <span className="text-amber-700 mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                <span className="text-stone-700 text-sm">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="How It Fits"
            title="Why Not Just Toast, SevenRooms, Resy, or OpenTable?"
            centered={false}
          />
          <div className="space-y-6">
            <div className="p-5 bg-white border border-stone-200 rounded-lg">
              <h3 className="font-semibold text-stone-900 text-sm">
                Toast and POS loyalty
              </h3>
              <p className="mt-1 text-stone-600 text-sm leading-relaxed">
                Strong for POS-tied rewards and transaction data. Less useful for
                shift-level guest recognition and staff-controlled hospitality
                gestures.
              </p>
            </div>
            <div className="p-5 bg-white border border-stone-200 rounded-lg">
              <h3 className="font-semibold text-stone-900 text-sm">
                SevenRooms, Resy, and OpenTable
              </h3>
              <p className="mt-1 text-stone-600 text-sm leading-relaxed">
                Strong for reservation management and guest data aggregation.
                Less useful for walk-in regulars, bar guests, and the kind of
                shift-level staff action that independent venues care about.
              </p>
            </div>
            <div className="p-5 bg-stone-900 text-white rounded-lg">
              <h3 className="font-semibold text-sm">HouseList</h3>
              <p className="mt-1 text-stone-300 text-sm leading-relaxed">
                Built for a narrower operational wedge: help the team know who to
                recognize tonight, what action to take, and whether those actions
                are driving return visits. Lightweight, shift-focused, and
                staff-controlled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start With a 60-Day Pilot */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Start With a 60-Day HouseList Pilot
          </h2>
          <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-2xl">
            Every pilot includes setup, training, and weekly review so the system
            actually gets used on shift — not just installed and forgotten.
          </p>
          <div className="mt-8 space-y-2">
            {pilotIncludes.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                <span className="text-stone-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-stone-400 text-sm leading-relaxed max-w-xl">
            Pilot pricing depends on venue size and setup needs. Most pilots
            start with a setup phase and a monthly venue fee.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Ask About a HouseList Pilot
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Who It&rsquo;s For"
            title="Built for Independent Hospitality"
            centered={false}
          />
          <div className="space-y-3 max-w-xl">
            {audiences.map((a) => (
              <div key={a} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-700 mt-2" />
                <p className="text-stone-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Proves */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-6 bg-stone-50 border border-stone-200 rounded-lg">
            <p className="text-sm font-semibold text-stone-900 mb-2">
              What this means for your operation
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              HouseList is one example of the kind of hospitality system I can
              design when the problem calls for a practical tool, not just more
              meetings. I help restaurants fix operating problems, and when the
              right problem calls for a system instead of a checklist, I can
              build that too.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Ready to Know Who Matters Tonight?"
            description="Whether you want to pilot HouseList at your venue or need a different hospitality systems build, let's talk."
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="https://houselist-demo.vercel.app" variant="primary">
              View HouseList Live
            </Button>
            <Button href="/contact" variant="outline">
              Ask About a HouseList Pilot
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
