import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const problems = [
  "Inconsistent shifts depending on who's working",
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

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Restaurant Operations Consultant &middot; Boston
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            Operations Systems for Boston Restaurants &amp; Bars
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed">
            I help restaurants and bars turn tribal knowledge into practical
            systems so shifts run cleaner, training gets faster, and standards
            hold without constant owner involvement.
          </p>
          <p className="mt-4 text-sm text-stone-400 max-w-2xl leading-relaxed">
            Built from 16 years inside restaurants and bars — and a systems
            mindset focused on checklists, handoffs, training, documentation,
            and manager execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Book a Shift Systems Audit
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900"
            >
              View Restaurant Services
            </Button>
          </div>
        </div>
      </section>

      {/* What I Help Fix */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Common Problems"
            title="What I Help Fix"
            description="If any of these sound familiar, your operation has a systems problem — not a people problem."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div
                key={problem}
                className="p-5 bg-white border border-stone-200 rounded-lg"
              >
                <p className="text-stone-700 text-sm font-medium leading-relaxed">
                  &mdash; {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Offer: Shift Systems Audit */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Start Here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Shift Systems Audit
          </h2>
          <p className="mt-6 text-stone-300 text-lg leading-relaxed max-w-2xl">
            Not sure what&rsquo;s actually slowing the operation down? I observe
            a real shift, identify where execution breaks, and leave you with a
            written action plan plus practical tools your team can use
            immediately.
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
              Ask About the Audit
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
              <div
                key={item.title}
                className="p-5 bg-white border border-stone-200 rounded-lg"
              >
                <h3 className="font-semibold text-stone-900 mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline">
              See All Restaurant Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Restaurant Operators Hire Me */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Why Me"
            title="Why Restaurant Operators Hire Me"
          />
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

      {/* Proof: Bartender Trainer */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Built From Real Experience"
            title="I Build Tools, Not Just Documents"
          />
          <div className="p-6 bg-white border border-stone-200 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-stone-900">
                Bartender Trainer
              </h3>
              <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                Hospitality
              </span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              A training tool built from real bar operations experience to
              improve recipe recall, standards retention, and day-to-day
              consistency. Born from 14 years behind the bar and the belief that
              training shouldn&rsquo;t stop after someone&rsquo;s first week.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-stone-600">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                Reinforces drink specs and service standards through active recall
              </li>
              <li className="flex items-start gap-2 text-sm text-stone-600">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                Built to work inside daily bar workflow, not as a separate chore
              </li>
              <li className="flex items-start gap-2 text-sm text-stone-600">
                <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                Demonstrates the same systems thinking I bring to every client engagement
              </li>
            </ul>
            <a
              href="https://bartender-trainer.replit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 text-sm font-semibold border-2 border-stone-900 text-stone-900 rounded hover:bg-stone-900 hover:text-white transition-all"
            >
              Try Bartender Trainer &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      {recentPosts.length > 0 && (
        <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              label="Insights"
              title="Writing on What Makes Restaurants Run Well"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                    <time>{post.date}</time>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-semibold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-stone-600 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/insights" variant="outline">
                All Insights
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            label="Get Started"
            title="Your Operation Deserves Better Systems"
            description="Tell me what's breaking down and I'll tell you what I'd fix first."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact">Start the Conversation</Button>
            <Button href="/services" variant="outline">
              View Restaurant Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
