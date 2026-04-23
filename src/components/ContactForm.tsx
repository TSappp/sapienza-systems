"use client";

import { useState, FormEvent } from "react";

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
      if (res.ok) { setStatus("success"); form.reset(); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  if (status === "success") {
    return (
      <div className="p-8 bg-stone-50 border border-stone-200 rounded-lg text-center">
        <div className="text-amber-700 text-3xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-stone-900 mb-2">Message Sent</h3>
        <p className="text-stone-600 text-sm leading-relaxed">
          I&rsquo;ll get back to you within one business day.
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

  const inputClass =
    "w-full px-4 py-3 border border-stone-300 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-shadow";

  return (
    <>
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">
            Something went wrong. Please try again or email{" "}
            <a href="mailto:TSapienza03@gmail.com" className="font-medium underline">
              TSapienza03@gmail.com
            </a>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">Name</label>
            <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-stone-700 mb-1.5">Role</label>
            <input type="text" id="role" name="role" className={inputClass} placeholder="Owner, GM, Bar Manager..." />
          </div>
        </div>

        <div>
          <label htmlFor="restaurant" className="block text-sm font-medium text-stone-700 mb-1.5">
            Restaurant / Bar
          </label>
          <input type="text" id="restaurant" name="restaurant" className={inputClass} placeholder="Name of your restaurant or bar" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
            <input type="email" id="email" name="email" required className={inputClass} placeholder="you@restaurant.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">
              Phone <span className="text-stone-400">(optional)</span>
            </label>
            <input type="tel" id="phone" name="phone" className={inputClass} placeholder="617-..." />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-1.5">
            What are you interested in?
          </label>
          <select
            id="service"
            name="service"
            className={`${inputClass} bg-white`}
          >
            <option value="">Select a service</option>
            <option value="shift-systems-audit">Shift Systems Audit</option>
            <option value="sop-training-sprint">Restaurant SOP + Training Sprint</option>
            <option value="manager-os">Manager Operating System Build</option>
            <option value="bar-systems-reset">Bar Systems Reset</option>
            <option value="ai-tools">AI Tools for Restaurant Managers</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
            Biggest operational problem right now
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={`${inputClass} resize-y`}
            placeholder="What keeps slipping? What do you keep having to re-explain? Where does the shift break down?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-block px-8 py-3.5 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Book a Free 15-Minute Ops Call"}
        </button>
      </form>
    </>
  );
}
