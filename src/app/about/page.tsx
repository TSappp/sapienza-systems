import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProfilePhoto from "@/components/ProfilePhoto";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thomas Sapienza — restaurant operations consultant in Boston. 16 years in hospitality, 14 behind the bar. I build practical systems that make restaurants run the same way whether you're in the building or not.",
};

const timeline = [
  {
    period: "2008–2012",
    title: "Every Station in the Building",
    description:
      "Busboy. Dishwasher. Host. Prep cook. Line cook. Barback. I learned how a restaurant works by doing every job nobody wants to do — and understanding why each one matters when it's done right.",
  },
  {
    period: "2012–2024",
    title: "14 Years Behind the Bar",
    description:
      "Neighborhood bars, Irish pubs, nightlife, high-volume restaurants like Stephanie's on Newbury, private clubs, and hotel bar operations at The Lenox. Every format runs differently, but the problems are the same: workflow that breaks under pressure, training that doesn't transfer, standards that depend on whoever's working.",
  },
  {
    period: "Parallel Track",
    title: "Process Development & Scientific Operations",
    description:
      "Worked in process development in a cGMP environment — building documentation systems, writing technical reports, mapping workflows, and designing processes that had to be precise, repeatable, and auditable. This is where I learned to write the kind of clear, durable systems I now build for restaurants.",
  },
  {
    period: "Present",
    title: "Sapienza Systems",
    description:
      "Now I bring both backgrounds together — restaurant operations instinct plus documentation rigor — to help Boston restaurants and bars build the systems that make standards portable and execution consistent.",
  },
];

const approach = [
  {
    title: "Watch a Real Shift",
    description:
      "Not the version in the handbook — the version that happens on a Tuesday night when you're short-staffed. I look for where people improvise, repeat themselves, or work around something broken.",
  },
  {
    title: "Name the Actual Problem",
    description:
      "Slow service isn't a people problem — it's a bar setup problem. High turnover isn't a culture problem — it's a training problem. I find the root cause and call it what it is.",
  },
  {
    title: "Build the Fix",
    description:
      "A one-page checklist. A shift guide. An onboarding doc. A manager handoff log. Whatever the operation actually needs — written clearly enough that someone can use it on day one.",
  },
  {
    title: "Make Sure It Sticks",
    description:
      "Documentation that sits in a Google Drive folder isn't a system. I help teams put the tools into practice and adjust until they hold under real conditions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            16 Years Inside Restaurants. Now I Fix the Systems.
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <ProfilePhoto />
            </div>

            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-stone-900 mb-2">
                Thomas Sapienza
              </h2>
              <p className="text-sm text-stone-500 mb-6">
                Restaurant Operations Systems Consultant &middot; Boston
              </p>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I spent 16 years in restaurants and hospitality. Started as a
                  busboy and dishwasher. Worked every station: host, prep cook,
                  line cook, barback. Bartended for 14 years across high-volume
                  and craft-focused bars. I didn&rsquo;t study operations from
                  a textbook. I learned them on a Friday night with a full rail
                  and a short staff.
                </p>
                <p>
                  That experience spanned multiple hospitality formats &mdash;
                  neighborhood bars, Irish pubs, nightlife, high-volume
                  restaurants like Stephanie&rsquo;s on Newbury, private clubs,
                  and hotel bar operations at The Lenox. Each environment ran
                  differently, but the problems were the same: workflow that
                  broke under pressure, training that didn&rsquo;t transfer,
                  and standards that depended on whoever was working.
                </p>
                <p>
                  Alongside hospitality, I built a parallel track in scientific
                  operations &mdash; working as a process development scientist
                  in a cGMP environment. That&rsquo;s where I learned to write
                  the kind of precise, repeatable, durable documentation that
                  most restaurants never get. I bring that rigor to every
                  checklist, SOP, and training system I build.
                </p>
                <p>
                  Now I do this full-time for restaurant and bar operators. I
                  come into the operation, spot the friction, and leave behind
                  the systems that fix it: checklists, training roadmaps, shift
                  guides, manager handoff logs, SOPs. The practical tools that
                  make a restaurant run the same way whether you&rsquo;re in
                  the building or not.
                </p>
                <p className="text-stone-900 font-medium">
                  I don&rsquo;t build bloated consultant deliverables. I build
                  one-page tools people can use during a real shift.
                </p>
              </div>

              <div className="mt-8 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <p className="text-sm text-stone-500">
                  Want to talk about your restaurant?{" "}
                  <a
                    href="/contact"
                    className="text-amber-700 font-medium hover:text-amber-800"
                  >
                    Start the conversation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Experience"
            title="The Long Way Around — And Why It Matters"
            centered={false}
          />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-amber-700">
                    {item.period}
                  </span>
                </div>
                <div className="flex-shrink-0 w-px bg-stone-300 relative">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-stone-900" />
                </div>
                <div className="pb-2">
                  <h3 className="font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-1 text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="My Approach"
            title="How I Work"
            description="No decks. No discovery phases that last six weeks. I look at the operation, find the problems, and build the fix."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, i) => (
              <div
                key={step.title}
                className="p-6 bg-white border border-stone-200 rounded-lg"
              >
                <div className="text-amber-700 font-bold text-sm mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bartender Trainer */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Projects"
            title="When I See a Problem, I Build the Fix"
            centered={false}
          />
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              <a
                href="https://bartender-trainer.replit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-medium hover:text-amber-800"
              >
                Bartender Trainer
              </a>{" "}
              came from 14 years behind the bar and watching training systems
              that stopped after week one. It&rsquo;s a tool for reinforcing
              drink knowledge and service consistency through active recall
              &mdash; the kind of thing I wished existed when I was training
              new bartenders.
            </p>
            <p>
              It reflects how I think about work: find the friction, build
              something practical, ship it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Let's Talk About Your Operation"
            description="I work with restaurants, bars, and hospitality groups in Boston. Tell me what's not working and I'll tell you what I'd do about it."
          />
          <Button href="/contact">Start the Conversation</Button>
        </div>
      </section>
    </>
  );
}
