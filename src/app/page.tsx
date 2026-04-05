import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const services = [
  {
    title: "Hospitality Operations Consulting",
    description:
      "Your bar setup shouldn\u2019t change depending on who\u2019s working. I audit service flow, fix coordination gaps, and build systems that keep shifts tight even when you\u2019re not there.",
    href: "/services#hospitality-operations",
  },
  {
    title: "SOPs, Playbooks & Training Systems",
    description:
      "If your best employee quit tomorrow, could someone else do their job by Friday? I turn the knowledge stuck in people\u2019s heads into documents your whole team can follow.",
    href: "/services#sops-playbooks",
  },
  {
    title: "Technical Documentation & Workflow Support",
    description:
      "Underdocumented processes, inconsistent reporting, context that disappears between meetings. I clean it up and build systems that make information usable.",
    href: "/services#technical-documentation",
  },
  {
    title: "AI Workflow Setup",
    description:
      "You\u2019re already writing reports, SOPs, and emails every week. I set up practical AI workflows so those tasks take less time and come out cleaner, faster, and more usable.",
    href: "/services#ai-workflow",
  },
];

const audiences = [
  {
    label: "Restaurant & Bar Owners",
    description:
      "Shifts that run clean without you babysitting. Opening checklists that don\u2019t depend on who\u2019s on the schedule.",
  },
  {
    label: "GMs & Hospitality Groups",
    description:
      "Consistent standards across shifts and locations. Training that works without your best people doing all the heavy lifting.",
  },
  {
    label: "Labs & Technical Teams",
    description:
      "Documentation that\u2019s current and useful. Processes that survive when someone leaves or a new hire starts.",
  },
  {
    label: "Founders & Operators",
    description:
      "The systems and documentation your team needs so you can stop being the answer to every question.",
  },
];

const differentiators = [
  {
    title: "16 Years in Restaurants",
    description:
      "Busboy, dishwasher, prep cook, line cook, barback, bartender. I\u2019ve held every position in a restaurant and know exactly where operations fall apart.",
  },
  {
    title: "Two Industries, One Skill Set",
    description:
      "Hospitality taught me pace, pressure, and people. Process development and scientific operations taught me documentation, precision, and system design. Both inform everything I build.",
  },
  {
    title: "I Build Things People Actually Use",
    description:
      "A 40-page manual nobody reads is worthless. I write one-page checklists, scannable SOPs, and shift guides that work at 8pm on a Saturday.",
  },
  {
    title: "I See the Problem Fast",
    description:
      "Most operational friction hides in plain sight. I find it quickly because I\u2019ve lived inside the same systems your team is struggling with.",
  },
];

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Sapienza Systems
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            I Help Teams Run Smarter
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed">
            I build systems, documentation, and training that help hospitality
            and technical teams work with more consistency, less friction, and
            less dependence on any one person.{" "}
            <span className="text-stone-400">
              Built on 16 years in restaurants and a process development
              mindset.
            </span>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/services" variant="primary">
              View Services
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900"
            >
              Work With Me
            </Button>
            <Button
              href="/insights"
              variant="outline"
              className="border-stone-500 text-stone-300 hover:bg-stone-700 hover:text-white"
            >
              Read Insights
            </Button>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="What I Do"
            title="Fix the Workflow. Document the Standards. Train the Team."
            description="Every team has friction they\u2019ve learned to live with. I identify it, fix it, and build systems that keep it from coming back."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-lg font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Who I Work With"
            title="Built for People Who Run Things"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.label}
                className="p-6 bg-white border border-stone-200 rounded-lg"
              >
                <h3 className="font-semibold text-stone-900 mb-2">
                  {audience.label}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Why Work With Me"
            title="I\u2019ve Done the Work You\u2019re Trying to Fix"
            description="Most consultants study operations from a distance. I spent 16 years inside them."
          />
          <p className="text-stone-600 text-sm leading-relaxed -mt-6 mb-10 max-w-3xl mx-auto text-center">
            My perspective was built from the ground up\u2014from busboy to
            bartender, from student to teacher, and from manufacturing tech to
            process development scientist. I build systems that work where they
            matter most: in the day-to-day execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">
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

      {/* Selected Projects */}
      <section className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Selected Projects"
            title="I Build Tools, Not Just Documents"
            description="When I see a gap in training, thinking, or execution, I build something to close it."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bartender Trainer */}
            <div className="p-6 bg-white border border-stone-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-stone-900">
                  Bartender Trainer
                </h3>
                <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                  Hospitality
                </span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                A training tool built to improve drink knowledge, recipe recall,
                and operational consistency for bartenders and bar teams. Born
                from 14 years behind the bar and the belief that training
                shouldn\u2019t stop after someone\u2019s first week.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                  Reinforces drink specs and service standards through active recall
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                  Demonstrates how training systems can be built into daily workflow
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                  Applied hospitality expertise in a product format
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <a
                  href="https://bartender-trainer.replit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 text-sm font-semibold border-2 border-stone-900 text-stone-900 rounded hover:bg-stone-900 hover:text-white transition-all"
                >
                  Try Bartender Trainer &rarr;
                </a>
                <p className="text-xs text-stone-400 max-w-[10rem] text-right leading-snug">
                  Built from real bar operations experience
                </p>
              </div>
            </div>

            {/* Philosopher Council */}
            <div className="p-6 bg-white border border-stone-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-stone-900">
                  Philosopher Council
                </h3>
                <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                  AI &middot; Product
                </span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                An AI-powered platform that lets users convene multiple
                philosophers in parallel, compare viewpoints, and explore
                debate and consensus. A different kind of build\u2014but the
                same discipline: clear systems, structured thinking, and
                useful output from complex inputs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                  Full product design, build, and deployment from scratch
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                  Demonstrates practical AI integration beyond simple prompts
                </li>
                <li className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-amber-700 mt-0.5 flex-shrink-0">&#10003;</span>
                  Structured thinking applied to unstructured problems
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <a
                  href="https://philosophercouncil.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 text-sm font-semibold border-2 border-stone-900 text-stone-900 rounded hover:bg-stone-900 hover:text-white transition-all"
                >
                  Visit Philosopher Council &rarr;
                </a>
                <p className="text-xs text-stone-400 max-w-[10rem] text-right leading-snug">
                  AI product thinking in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      {recentPosts.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              label="Insights"
              title="Writing on What Makes Teams Run Well"
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
      <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            label="Get Started"
            title="Your Team Deserves Better Systems"
            description="Tell me what\u2019s not working. I\u2019ll tell you what I\u2019d change and why."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact">Work With Me</Button>
            <Button href="/services" variant="outline">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
