"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqooope";

export default function AuditForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("source", "shift-systems-audit-landing");
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
      <div className="p-8 bg-stone-800 border border-stone-700 rounded-lg text-center">
        <div className="text-amber-400 text-3xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
        <p className="text-stone-400 text-sm leading-relaxed">
          I&rsquo;ll get back to you within one business day to schedule the call.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-stone-800 border border-stone-600 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-shadow";

  return (
    <>
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg">
          <p className="text-sm text-red-300">
            Something went wrong. Try again or email{" "}
            <a href="mailto:TSapienza03@gmail.com" className="underline font-medium">
              TSapienza03@gmail.com
            </a>
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="audit-name" className="block text-xs font-medium text-stone-400 mb-1.5">
              Name
            </label>
            <input type="text" id="audit-name" name="name" required className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="audit-role" className="block text-xs font-medium text-stone-400 mb-1.5">
              Role
            </label>
            <input type="text" id="audit-role" name="role" className={inputClass} placeholder="Owner, GM, Bar Manager..." />
          </div>
        </div>
        <div>
          <label htmlFor="audit-restaurant" className="block text-xs font-medium text-stone-400 mb-1.5">
            Restaurant / Bar
          </label>
          <input type="text" id="audit-restaurant" name="restaurant" className={inputClass} placeholder="Name of your restaurant or bar" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="audit-email" className="block text-xs font-medium text-stone-400 mb-1.5">
              Email
            </label>
            <input type="email" id="audit-email" name="email" required className={inputClass} placeholder="you@restaurant.com" />
          </div>
          <div>
            <label htmlFor="audit-phone" className="block text-xs font-medium text-stone-400 mb-1.5">
              Phone <span className="text-stone-600">(optional)</span>
            </label>
            <input type="tel" id="audit-phone" name="phone" className={inputClass} placeholder="617-..." />
          </div>
        </div>
        <div>
          <label htmlFor="audit-problem" className="block text-xs font-medium text-stone-400 mb-1.5">
            Biggest operational problem right now
          </label>
          <textarea
            id="audit-problem"
            name="message"
            rows={3}
            required
            className={`${inputClass} resize-y`}
            placeholder="What keeps slipping? What do you keep having to re-explain?"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full px-6 py-3.5 bg-amber-700 text-white text-sm font-semibold rounded hover:bg-amber-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Book a Free 15-Minute Ops Call"}
        </button>
      </form>
    </>
  );
}
