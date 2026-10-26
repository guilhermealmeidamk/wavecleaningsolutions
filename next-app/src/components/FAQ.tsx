"use client";

import { useState } from "react";
import { PHONE_TEL } from "./ContactCTA";

const FAQS = [
  {
    q: "Are you fully insured and licensed?",
    a: "Yes. Waves is a fully licensed and insured business. Every team member is covered, so your home and belongings are protected on every visit.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. Many of our clients give us access while they're at work or running errands. We treat your home with the utmost care and respect.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We use eco-friendly, pet-safe, professional-grade products and equipment. Have specific preferences or allergies? Just let us know.",
  },
  {
    q: "Is your service pet-friendly?",
    a: "Absolutely. Our team is trained to work around pets safely and our products are non-toxic for furry family members.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve Kent County and the surrounding Delaware communities — Dover, Smyrna, Middletown, Milford, Camden and many more. Don't see your city? Give us a call.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "100% satisfaction guaranteed. If something isn't right, call us within 24 hours and we'll come back to make it right — no questions asked.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
          <span className="h-px w-7 md:w-14 bg-rose/60" />
          <span className="flex items-center gap-2">
            FAQ
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-rose">
              <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
            </svg>
          </span>
          <span className="h-px w-7 md:w-14 bg-rose/60" />
        </div>

        <h2 className="font-display font-medium leading-[1.1] tracking-tight text-[30px] md:text-[46px] mb-10 md:mb-14 text-ink">
          Common <span className="italic text-rose-dark">Questions</span>
        </h2>

        <ul className="flex flex-col gap-2.5 text-left">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="rounded-[18px] bg-white border border-pastel-soft/60 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[16px] md:text-[18px] text-ink">{f.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    className={`shrink-0 text-rose-dark transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13.5px] text-muted leading-relaxed px-5 pb-5">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 md:mt-12 relative inline-block">
          <div className="relative bg-ink text-white rounded-[22px] rounded-bl-sm px-6 py-5 shadow-lg text-left max-w-xs">
            <p className="text-[13.5px] leading-relaxed">
              Still have a question? <br />
              <span className="text-rose-soft">Text us — we usually reply in minutes ⚡</span>
            </p>
          </div>
          <a
            href={`sms:${PHONE_TEL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-dark text-white py-3 px-6 text-[12px] font-bold tracking-[0.12em] shadow-md hover:bg-rose hover:-translate-y-0.5 transition"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.2}>
              <path d="M21 11.5a8.5 8.5 0 01-12.8 7.4L3 20l1.2-4.4A8.5 8.5 0 1121 11.5z" />
            </svg>
            SEND A TEXT
          </a>
        </div>
      </div>
    </section>
  );
}
