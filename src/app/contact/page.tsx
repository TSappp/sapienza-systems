import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sapienza Systems. Tell me what\u2019s not working in your operations and I\u2019ll tell you what I\u2019d fix. No sales pitch\u2014just a straight conversation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Contact Sapienza Systems
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            Tell Me What&rsquo;s Not Working
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl leading-relaxed">
            You don&rsquo;t need a project brief. Just tell me what&rsquo;s
            broken, what&rsquo;s slow, or what your team keeps getting wrong.
            I&rsquo;ll tell you what I&rsquo;d do about it.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                  Email
                </h2>
                <a
                  href="mailto:TSapienza03@gmail.com"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  TSapienza03@gmail.com
                </a>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                  LinkedIn
                </h2>
                <a
                  href="https://www.linkedin.com/in/thomassapienza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  linkedin.com/in/thomassapienza
                </a>
              </div>

              {/*
                SCHEDULING LINK: When ready, replace the mailto below with your
                Calendly or booking URL, e.g.:
                <a href="https://calendly.com/your-link">Schedule a free intro call</a>
              */}
              <div>
                <h2 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
                  Consultation
                </h2>
                <a
                  href="mailto:TSapienza03@gmail.com?subject=Intro%20call%20request"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Request a free intro call
                </a>
              </div>

              <div className="p-5 bg-stone-50 border border-stone-200 rounded-lg">
                <p className="text-sm text-stone-600 leading-relaxed">
                  <strong className="text-stone-900">
                    What to expect:
                  </strong>{" "}
                  I reply within one business day. First conversation is free
                  and zero-pressure. I&rsquo;ll ask what your operation looks
                  like, where things break down, and whether I&rsquo;m the
                  right person to fix it. If I&rsquo;m not, I&rsquo;ll tell
                  you.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Send a Message
              </h2>
              {/*
                FORM BACKEND: Connect this form to one of the following:

                Option 1 \u2014 Formspree (fastest):
                  Add action="https://formspree.io/f/YOUR_FORM_ID" method="POST" to the <form> tag.
                  Sign up at https://formspree.io and create a form to get your ID.

                Option 2 \u2014 Next.js API route:
                  Create src/app/api/contact/route.ts with a POST handler that
                  sends email via Resend, SendGrid, or similar. Then submit via
                  fetch('/api/contact', { method: 'POST', body: ... }).

                Option 3 \u2014 Netlify Forms:
                  Add data-netlify="true" and name="contact" to the <form> tag.

                Until connected, the form renders but does not submit.
              */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-shadow"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Company / Organization{" "}
                    <span className="text-stone-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-shadow"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    What are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-shadow bg-white"
                  >
                    <option value="">Select a service area</option>
                    <option value="hospitality">
                      Hospitality Operations Consulting
                    </option>
                    <option value="sops">
                      SOPs, Playbooks &amp; Training Systems
                    </option>
                    <option value="technical">
                      Technical Documentation &amp; Workflow Support
                    </option>
                    <option value="ai">AI Workflow Setup</option>
                    <option value="other">Not sure yet / Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-shadow resize-y"
                    placeholder="What does your team do? What's not working? What would 'fixed' look like?"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
