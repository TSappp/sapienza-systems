import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sapienza Systems. Tell me what's not working in your restaurant and I'll tell you what I'd fix first. Boston restaurant operations consultant.",
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
            Tell me what keeps slipping, what your team keeps having to
            re-explain, or where the shift breaks down. I&rsquo;ll tell you
            what I&rsquo;d fix first and whether I&rsquo;m the right fit.
          </p>
          <p className="mt-3 text-sm text-stone-400">
            Interested in a{" "}
            <a href="/houselist" className="text-amber-400 hover:text-amber-300 transition-colors">HouseList</a>-style
            guest-return pilot or another hospitality systems build? Mention it here.
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
