import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ProfilePhoto from "@/components/ProfilePhoto";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sapienza Systems was founded by Thomas Sapienza. 16 years in restaurants, process development background, and a focus on building systems that actually work.",
};

const timeline = [
  {
    period: "2008–2012",
    title: "Every Station in the Building",
    description:
      "Busboy. Dishwasher. Host. Prep cook. Line cook. Barback. I learned how a restaurant works by doing every job nobody wants to do—and understanding why each one matters when it’s done right.",
  },
  {
    period: "2012–2024",
    title: "14 Years Behind the Bar",
    description:
      "High-volume service, craft cocktail programs, late nights, double shifts, and every kind of operational chaos a bar can produce. This is where I learned what separates a smooth shift from a trainwreck—and it’s almost never the staff. It’s the systems.",
  },
  {
    period: "Parallel Track",
    title: "Process Development & Scientific Operations",
    description:
      "Worked in process development and scientific operations, building documentation systems, writing technical reports, mapping workflows, and designing processes that had to be precise, repeatable, and auditable. Different industry, same core discipline.",
  },
  {
    period: "Present",
    title: "Sapienza Systems",
    description:
      "Now I do the same work through Sapienza Systems—spotting inefficiency, documenting processes, tightening execution—for clients who need it. Restaurants, bars, hospitality groups, labs, and operators who are tired of inconsistent results.",
  },
];

const approach = [
  {
    title: "Watch the Real Operation",
    description:
      "Not the version in the handbook—the version that happens on a Tuesday night when you’re short-staffed. I look for where people improvise, repeat themselves, or work around something broken.",
  },
  {
    title: "Name the Actual Problem",
    description:
      "Slow service isn’t a people problem—it’s a bar setup problem. High turnover isn’t a culture problem—it’s a training problem. I find the root cause and call it what it is.",
  },
  {
    title: "Build What Fixes It",
    description:
      "A one-page checklist. A shift guide. An onboarding doc. A workflow map. Whatever the operation actually needs—written clearly enough that someone can use it on day one.",
  },
  {
    title: "Make Sure It Sticks",
    description:
      "Documentation that sits in a Google Drive folder isn’t a system. I help teams put the work into practice and adjust until it holds.",
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
            The Story Behind Sapienza Systems
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
                Founder, Sapienza Systems
              </p>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I spent 16 years in restaurants and hospitality. Started as a
                  busboy and dishwasher. Worked every station: host, prep cook,
                  line cook, barback. Bartended for 14 years across high-volume
                  and craft-focused bars. I didn&rsquo;t study operations from a
                  textbook. I learned them on a Friday night with a full rail
                  and a short staff.
                </p>
                <p>
                  That experience spanned multiple hospitality
                  formats&mdash;neighborhood bars, Irish pubs, nightlife,
                  high-volume restaurants like Stephanie&rsquo;s on Newbury,
                  private clubs, and hotel bar operations at The Lenox. Each
                  environment ran differently, but the problems were the
                  same: workflow that broke under pressure, training that
                  didn&rsquo;t transfer, and standards that depended on
                  whoever was working.
                </p>
                <p>
                  Alongside hospitality, I built a parallel track in education
                  and scientific operations&mdash;eventually working as a
                  process development scientist in a cGMP environment. That
                  dual background is why I approach operations differently: not
                  from abstraction, but from the level where systems actually
                  succeed or fail.
                </p>
                <p>
                  Now I do the same thing for clients. I walk into an operation,
                  spot the friction, and build the systems that eliminate it:
                  SOPs, training documents, shift guides, workflow maps,
                  checklists. The stuff that makes a team run the same way
                  whether you&rsquo;re in the building or not.
                </p>
                <p>
                  The problems are the same everywhere&mdash;restaurants, labs,
                  growing companies. Unclear processes. Tribal knowledge.
                  Inconsistent training. Documentation that doesn&rsquo;t exist
                  or doesn&rsquo;t get used. That&rsquo;s why I started
                  Sapienza Systems: to do this work full-time, for the teams
                  that need it most.
                </p>
              </div>

              {/*
                PDF DOWNLOAD: When ready, place your PDF at public/sapienza-systems-overview.pdf
                and uncomment the download block below.
              */}
              <div className="mt-8 p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <p className="text-sm text-stone-500">
                  Want to learn more about working together?{" "}
                  <a
                    href="/contact"
                    className="text-amber-700 font-medium hover:text-amber-800"
                  >
                    Start a conversation
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
            title="The Long Way Around—And Why It Matters"
            centered={false}
          />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 relative"
              >
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

      {/* Projects */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Projects"
            title="When I See a Problem, I Build the Fix"
            centered={false}
          />
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Consulting isn&rsquo;t the only way I work. When I see a gap in how
              people train, learn, or think through problems&mdash;and no good tool
              exists&mdash;I build one.
            </p>
            <p>
              <a
                href="https://bartender-trainer.replit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-medium hover:text-amber-800"
              >
                Bartender Trainer
              </a>{" "}
              came from 14 years behind the bar and watching training systems that
              stopped after week one. It&rsquo;s a tool for reinforcing drink
              knowledge and service consistency through active recall&mdash;the
              kind of thing I wished existed when I was training new bartenders.
            </p>
            <p>
              <a
                href="https://philosophercouncil.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 font-medium hover:text-amber-800"
              >
                Philosopher Council
              </a>{" "}
              is a different kind of build&mdash;an AI-powered platform for
              structured multi-perspective thinking. Different domain, same
              instinct: take something complex, design a clear system around it,
              and make the output useful.
            </p>
            <p>
              Both projects reflect how I think about work: find the friction,
              build something practical, ship it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Let’s Talk About What’s Broken"
            description="I work with restaurants, hospitality groups, labs, and technical teams. Tell me what’s not working and I’ll tell you what I’d do about it."
          />
          <Button href="/contact">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}
