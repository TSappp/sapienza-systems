import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "HouseList — Guest-Return Pilot for Restaurants",
  description:
    "HouseList is a lightweight QR-based guest-return system built for restaurants that want verified visits, staff-controlled rewards, and a clean manager dashboard — without a bloated POS loyalty add-on.",
};

const problems = [
  {
    title: "Punch cards",
    issue: "Lost, faked, forgotten. No data, no insight, no follow-up.",
  },
  {
    title: "Generic QR forms",
    issue:
      "Collect an email, maybe. No visit tracking, no return behavior, no reason for the guest to come back.",
  },
  {
    title: "POS loyalty add-ons",
    issue:
      "Expensive, bloated, built for chains. Most independent restaurants pay for features nobody uses and dashboards nobody checks.",
  },
];

const features = [
  {
    title: "QR Join, No App Download",
    description:
      "Guest scans a QR code at the venue and joins in seconds. No app store, no account creation friction.",
  },
  {
    title: "Verified Visits",
    description:
      "Visits are confirmed through venue check-in — not self-reported, not GPS-guessed. The data is real.",
  },
  {
    title: "Staff-Controlled Rewards",
    description:
      "Managers and bartenders decide when to reward and what to offer. No automatic discount spirals.",
  },
  {
    title: "Manager Dashboard",
    description:
      "See who comes back, how often, and when. Actionable guest signals — not vanity metrics.",
  },
];

const steps = [
  { step: "01", title: "Guest scans QR at the venue", description: "Table tent, check presenter, bar card — wherever it fits the flow." },
  { step: "02", title: "Quick join — no app, no friction", description: "Name, phone or email. Done in seconds." },
  { step: "03", title: "Visit gets verified on-site", description: "Staff or location-based confirmation. No gaming the system." },
  { step: "04", title: "Return visits tracked automatically", description: "The system knows who comes back and how often." },
  { step: "05", title: "Rewards triggered by staff, not software", description: "Manager or bartender decides when to reward — keeps it personal, keeps it controlled." },
];

const audiences = [
  "Independent restaurants building regular guest relationships",
  "Cocktail bars and hotel bars that want repeat visibility without a points program",
  "Chef-owned concepts that care about guest experience but hate bloated software",
  "Hospitality groups piloting a lightweight guest-return system before committing to enterprise tools",
];

export default function HouseListPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Live Hospitality Pilot
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            HouseList: A Lightweight Guest-Return Pilot for Restaurants
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            A live hospitality system I built for venues that want QR join,
            verified visits, controlled rewards, and better guest insight —
            without a bloated POS loyalty add-on.
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
            title="Why Most Restaurant Loyalty Fails"
            description="Punch cards are too dumb. POS loyalty is too bloated. Generic QR forms collect emails nobody uses. Restaurants deserve something in between."
            centered={false}
          />
          <div className="space-y-6">
            {problems.map((p) => (
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
            label="What It Does"
            title="A Guest-Return System Built for Real Restaurants"
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
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

      {/* How It Works on Shift */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            label="On Shift"
            title="How It Works During a Real Shift"
            centered={false}
          />
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 text-amber-700 font-bold text-sm pt-1">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See the Pilot in Action */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Live Preview"
            title="See the Pilot in Action"
            description="A live hospitality system is more convincing when you can see the guest flow and manager view together."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Guest QR Join",
                description: "Scan, tap, join — no app download required.",
                src: "/images/houselist/guest-qr-join.png",
                alt: "Guest QR join page for HouseList",
              },
              {
                label: "Visit Verification",
                description: "Staff confirms the visit. Data stays real.",
                src: "/images/houselist/visit-verification.png",
                alt: "HouseList shift-tools visit verification screen",
              },
              {
                label: "Manager Dashboard",
                description: "See who comes back, how often, and when.",
                src: "/images/houselist/manager-dashboard.png",
                alt: "HouseList manager dashboard",
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
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-stone-900 text-sm">{panel.label}</p>
                  <p className="mt-1 text-stone-600 text-xs leading-relaxed">{panel.description}</p>
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

      {/* What This Proves */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            What This Proves
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            I Don&rsquo;t Just Advise on Operations — I Build the Systems Too
          </h2>
          <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-2xl">
            Most consultants write recommendations. I write recommendations,
            then build the tools. HouseList is a working example: I identified a
            gap in how restaurants handle guest returns, designed a system that
            fits real shift workflows, and built it.
          </p>
          <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-2xl">
            If your operation needs a practical internal tool, a guest-facing
            workflow, or a pilot system that actually works on shift — that is
            something I can help with.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Book a Free 15-Minute Ops Call
            </Button>
          </div>
        </div>
      </section>

      {/* Who It&rsquo;s For */}
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

      {/* What This Means for Your Operation */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-6 bg-stone-50 border border-stone-200 rounded-lg">
            <p className="text-sm font-semibold text-stone-900 mb-2">
              What this means for your operation
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              HouseList is one example of the kind of hospitality system I can
              design when the problem calls for a practical tool, not just more
              meetings. If your venue needs a guest-facing workflow, an internal
              ops tool, or a pilot system that works on a real shift — I can
              scope it, build it, and help your team put it into practice.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Interested in a Pilot Like This?"
            description="Whether you want to explore HouseList for your venue or need a different hospitality systems build, let's talk."
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="https://houselist-demo.vercel.app" variant="primary">
              View HouseList Live
            </Button>
            <Button href="/contact" variant="outline">
              Ask About a Hospitality Systems Pilot
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
