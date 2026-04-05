import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sapienza Systems was founded by Thomas Sapienza. 16 years in restaurants, process development background, and a focus on building systems that actually work.",
};

const timeline = [
  {
    period: "2008\u20132012",
    title: "Every Station in the Building",
    description:
      "Busboy. Dishwasher. Host. Prep cook. Line cook. Barback. I learned how a restaurant works by doing every job nobody wants to do\u2014and understanding why each one matters when it\u2019s done right.",
  },
  {
    period: "2012\u20132024",
    title: "14 Years Behind the Bar",
    description:
      "High-volume service, craft cocktail programs, late nights, double shifts, and every kind of operational chaos a bar can produce. This is where I learned what separates a smooth shift from a trainwreck\u2014and it\u2019s almost never the staff. It\u2019s the systems.",
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
      "Now I do the same work through Sapienza Systems\u2014spotting inefficiency, documenting processes, tightening execution\u2014for clients who need it. Restaurants, bars, hospitality groups, labs, and operators who are tired of inconsistent results.",
  },
];

const approach = [
  {
    title: "Watch the Real Operation",
    description:
      "Not the version in the handbook\u2014the version that happens on a Tuesday night when you\u2019re short-staffed. I look for where people improvise, repeat themselves, or work around something broken.",
  },
  {
    title: "Name the Actual Problem",
    description:
      "Slow service isn\u2019t a people problem\u2014it\u2019s a bar setup problem. High turnover isn\u2019t a culture problem\u2014it\u2019s a training problem. I find the root cause and call it what it is.",
  },
  {
    title: "Build What Fixes It",
    description:
      "A one-page checklist. A shift guide. An onboarding doc. A workflow map. Whatever the operation actually needs\u2014written clearly enough that someone can use it on day one.",
  },
  {
    title: "Make Sure It Sticks",
    description:
      "Documentation that sits in a Google Drive folder isn\u2019t a system. I help teams put the work into practice and adjust until it holds.",
  },
];

export default function AboutPage() {
  return (
    <>
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

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/*
              PROFILE PHOTO: Replace the div below with:
              <Image src="/images/thomas-sapienza.jpg" alt="Thomas Sapienza" ... />
              Place your photo at: public/images/thomas-sapienza.jpg
              Recommended: 600x800px or similar 3:4 ratio, professional headshot
            */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] bg-stone-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-stone-500 text-3xl font-bold tracking-tight block">TS</span>
                  <span className="text-stone-600 text-xs mt-1 block">Sapienza Systems</span>
                </div>
              </div>
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
                  I&rsquo;ve built my career from the ground up across
                  hospitality, education, and technical operations\u2014from
                  busboy to bartender, from student to teacher, and from
                  manufacturing tech to process development scientist in a cGMP
                  environment. That experience is why I approach operations the
                  way I do: not from abstraction, but from the level where
                  systems actually succeed or fail. I build training,
                  documentation, and workflows that hold up in real-world
                  execution.
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

      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Experience"
            title="The Long Way Around\u2014And Why It Matters"
            centered={false}
          />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-sm font-semibold text-amber-700">{item.period}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-stone-300 relative">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-stone-900" />
                </div>
                <div className="pb-2">
                  <h3 className="font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-1 text-stone-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="My Approach"
            title="How I Work"
            description="No decks. No discovery phases that last six weeks. I look at the operation, find the problems, and build the fix."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, i) => (
              <div key={step.title} className="p-6 bg-white border border-stone-200 rounded-lg">
                <div className="text-amber-700 font-bold text-sm mb-3">0{i + 1}</div>
                <h3 className="font-semibold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <a href="https://bartender-trainer.replit.app/" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-medium hover:text-amber-800">Bartender Trainer</a>{" "}
              came from 14 years behind the bar and watching training systems that
              stopped after week one. It&rsquo;s a tool for reinforcing drink
              knowledge and service consistency through active recall&mdash;the
              kind of thing I wished existed when I was training new bartenders.
            </p>
            <p>
              <a href="https://philosophercouncil.net" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-medium hover:text-amber-800">Philosopher Council</a>{" "}
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

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="Let\u2019s Talk About What\u2019s Broken"
            description="I work with restaurants, hospitality groups, labs, and technical teams. Tell me what\u2019s not working and I\u2019ll tell you what I\u2019d do about it."
          />
          <Button href="/contact">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}
