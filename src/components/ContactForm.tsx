"use client";

import { useState, FormEvent } from "react";

/*
  ┌──────────────────────────────────────────────────────────┐
  │  FORMSPREE SETUP — you must do this before the form works│
  │                                                          │
  │  1. Go to https://formspree.io and create a free account │
  │  2. Create a new form (it will give you an ID)           │
  │  3. Replace "YOUR_FORM_ID" below with your real form ID  │
  │     Example: "xyzabc12"                                  │
  │                                                          │
  │  Until you do this, submissions will fail and show the   │
  │  error state with a fallback to your email address.      │
  └──────────────────────────────────────────────────────────┘
*/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqooope";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 bg-stone-50 border border-stone-200 rounded-lg text-center">
        <div className="text-amber-700 text-3xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-stone-900 mb-2">
          Message Sent
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed">
          Thanks for reaching out. I&rsquo;ll get back to you within one
          business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-amber-700 font-medium hover:text-amber-800 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-stone-900 mb-6">
        Send a Message
      </h2>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">
            Something went wrong. Please try again or email me directly at{" "}
            <a
              href="mailto:TSapienza03@gmail.com"
              className="font-medium underline"
            >
              TSapienza03@gmail.com
            </a>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
          disabled={status === "submitting"}
          className="inline-block px-8 py-3 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending\u2026" : "Send Message"}
        </button>
      </form>
    </>
  );
}
