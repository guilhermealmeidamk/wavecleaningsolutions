"use client";

import Image from "next/image";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "./ContactCTA";

type FormData = {
  name: string;
  phone: string;
  homeSize: string;
  bedrooms: string;
  bathrooms: string;
  cleaningType: string;
  notes: string;
};

const CLEANING_TYPES = ["Standard Cleaning", "Deep Cleaning", "Move In / Move Out", "Post-Construction"];

function formatUSPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const len = digits.length;
  if (len === 0) return "";
  if (len < 4) return `(${digits}`;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const STATS = [
  {
    strong: "500+",
    label: "Happy Clients",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9" r="2.5" />
        <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    ),
  },
  {
    strong: "100%",
    label: "Satisfaction Guaranteed",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    strong: "Eco-Friendly",
    label: "Cleaning Products",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2C7 8 5 12 5 15a7 7 0 0014 0c0-3-2-7-7-13z" />
      </svg>
    ),
  },
  {
    strong: "Fully",
    label: "Insured",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    strong: "Licensed",
    label: "Business",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
      </svg>
    ),
  },
  {
    strong: "Uniformed",
    label: "Professionals",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="7" r="3.5" />
        <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7M9 14l3 3 3-3" />
      </svg>
    ),
  },
  {
    strong: "Pet-Friendly",
    label: "Cleaning",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="6" cy="10" r="1.6" /><circle cx="10" cy="6" r="1.6" />
        <circle cx="14" cy="6" r="1.6" /><circle cx="18" cy="10" r="1.6" />
        <path d="M8 16c0-2 2-4 4-4s4 2 4 4-2 3-4 3-4-1-4-3z" />
      </svg>
    ),
  },
  {
    strong: "Trained",
    label: "Team",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 3l9 4-9 4-9-4 9-4z" />
        <path d="M5 10v4c0 2 3 4 7 4s7-2 7-4v-4" />
      </svg>
    ),
  },
  {
    strong: "Pro-Grade",
    label: "Products & Equipment",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M10 3h4v4h-4z" />
        <path d="M8 7h8l-1 4h-6zM9 11v8a2 2 0 002 2h2a2 2 0 002-2v-8" />
      </svg>
    ),
  },
];

function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    homeSize: "",
    bedrooms: "",
    bathrooms: "",
    cleaningType: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string) =>
    setData((d) => ({ ...d, [field]: value }));

  const canAdvance =
    (step === 1 && data.name.trim() && data.phone.replace(/\D/g, "").length === 10) ||
    (step === 2 && data.homeSize && data.bedrooms && data.bathrooms) ||
    (step === 3 && data.cleaningType);

  const next = () => {
    if (step < 3) setStep(step + 1);
  };
  const back = () => {
    if (step > 1) setStep(step - 1);
  };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdvance || sending) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setErrorMsg("Form is not configured. Please contact us by phone.");
      return;
    }

    setSending(true);
    setErrorMsg(null);

    try {
      const payload = {
        access_key: accessKey,
        subject: `New lead from ${data.name} — Waves Cleaning`,
        from_name: "Waves Cleaning Website",
        name: data.name,
        phone: data.phone,
        home_size_sqft: data.homeSize,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        cleaning_type: data.cleaningType,
        notes: data.notes || "(none)",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-white rounded-full border border-pastel-soft shadow-sm outline-none py-2.5 px-4 text-[13px] text-ink placeholder:text-[#b7a69f] focus:border-rose";
  const labelClass =
    "block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted mb-1 ml-1";
  const selectClass = `${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23b7a69f%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_14px_center] bg-[length:14px] pr-9`;

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 mx-auto rounded-full bg-pastel-soft flex items-center justify-center mb-3">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={2.5} className="text-rose-dark">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="font-display text-[20px] text-ink mb-1">Thank you, {data.name}!</h3>
        <p className="text-muted text-[13px] leading-snug">
          We&apos;ll contact you shortly at<br />
          <span className="text-ink font-medium">{data.phone}</span>
        </p>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-display font-medium text-[26px] md:text-[24px] mb-1 text-center md:text-left text-ink">
        Get Your <span className="italic">Free Quote</span>
      </h2>

      <div className="flex items-center gap-1.5 mb-3 mt-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-rose-dark" : "bg-pastel-soft"
            }`}
          />
        ))}
      </div>
      <p className="text-muted text-[11.5px] mb-3 md:text-left text-center">
        Step {step} of 3
      </p>

      <form onSubmit={submit} className="flex flex-col gap-2.5 mb-3">
        {step === 1 && (
          <>
            <div>
              <label className={labelClass}>Full name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Phone number</label>
              <input
                type="tel"
                required
                inputMode="numeric"
                placeholder="(555) 123-4567"
                value={data.phone}
                onChange={(e) => update("phone", formatUSPhone(e.target.value))}
                maxLength={14}
                className={inputClass}
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className={labelClass}>Home size (sq ft)</label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  required
                  inputMode="numeric"
                  placeholder="e.g. 1500"
                  value={data.homeSize}
                  onChange={(e) => update("homeSize", e.target.value)}
                  className={`${inputClass} pr-14`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-muted pointer-events-none">
                  sq ft
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className={labelClass}>Bedrooms</label>
                <input
                  type="number"
                  min="0"
                  required
                  inputMode="numeric"
                  placeholder="0"
                  value={data.bedrooms}
                  onChange={(e) => update("bedrooms", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Bathrooms</label>
                <input
                  type="number"
                  min="0"
                  required
                  inputMode="numeric"
                  placeholder="0"
                  value={data.bathrooms}
                  onChange={(e) => update("bathrooms", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label className={labelClass}>Cleaning type</label>
              <select
                required
                value={data.cleaningType}
                onChange={(e) => update("cleaningType", e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>Select a service</option>
                {CLEANING_TYPES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Notes (optional)</label>
              <textarea
                placeholder="Anything we should know?"
                value={data.notes}
                onChange={(e) => update("notes", e.target.value)}
                rows={3}
                className="w-full bg-white rounded-[18px] border border-pastel-soft shadow-sm outline-none py-2.5 px-4 text-[13px] text-ink placeholder:text-[#b7a69f] focus:border-rose resize-none"
              />
            </div>
          </>
        )}

        <div className="flex gap-2 mt-1">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="flex-1 rounded-full border border-pastel-soft bg-white text-ink py-3 px-4 text-[12px] font-bold tracking-[0.12em] hover:bg-cream transition"
            >
              BACK
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={next}
              disabled={!canAdvance}
              className="flex-[2] inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white py-3 px-4 text-[12px] font-bold tracking-[0.12em] shadow-md hover:bg-black hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              NEXT
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canAdvance || sending}
              className="flex-[2] inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white py-3 px-4 text-[12px] font-bold tracking-[0.12em] shadow-md hover:bg-black hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {sending ? "SENDING..." : "GET MY FREE QUOTE"}
              {!sending && (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              )}
            </button>
          )}
        </div>
        {errorMsg && (
          <p className="text-[12px] text-rose-dark text-center mt-1" role="alert">
            {errorMsg}
          </p>
        )}
      </form>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col min-h-[640px] md:h-screen">
      <picture className="absolute inset-0 z-0">
        <source media="(max-width: 640px)" srcSet="/images/background_mobile.png" />
        <img
          src="/images/background-hero.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-top"
        />
      </picture>

      <div className="relative z-10 flex flex-1 flex-col px-4 pt-4 md:px-10 md:pt-5">
        <header className="flex justify-between items-start gap-3">
          <Image
            src="/images/logo.png"
            alt="Waves Cleaning Solutions"
            width={130}
            height={60}
            priority
            className="w-[190px] md:w-[200px] h-auto"
          />
          
        </header>

        <div className="grid md:grid-cols-[1.25fr_0.85fr] gap-6 md:gap-8 mt-4 md:mt-6 flex-1 items-start">
          <div>
            <h1 className="font-display font-medium leading-[1.02] tracking-tight text-[42px] md:text-[clamp(34px,4.4vw,58px)] text-ink mb-3">
              Leave the hard work<br /> to us.
              <span className="italic"> Enjoy the confort of a clean home. </span>
            </h1>
            <p className="text-[10.5px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-2">
              PROFESSIONAL CLEANING SERVICES
            </p>
            <p className="text-[14px] text-muted mb-5 leading-relaxed">
              More time for what you love.<br />
              Let us take care of the cleaning.
            </p>

            <div className="hidden md:inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur border border-pastel-soft/70 shadow-sm pl-2 pr-5 py-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-dark text-white">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.2}>
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/>
                </svg>
              </span>
              <div className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Rather talk?</span>
                <a href={`tel:${PHONE_TEL}`} className="font-display text-[18px] text-ink hover:text-rose-dark transition">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <aside className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-sm bg-white/95 backdrop-blur rounded-[22px] shadow-lg px-5 pt-6 pb-6 md:px-6 md:pt-6 md:pb-5 mt-3 mb-8 md:mt-0 md:mb-0">
            <QuoteForm />

            <ul className="flex flex-wrap md:flex-col justify-between md:justify-start gap-2 md:gap-1.5 text-[11px] md:text-[12px] text-muted">
              {["Quick and easy", "No obligation", "Personalized for your needs"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="relative w-3.5 h-3.5 rounded-full bg-pastel-soft flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth={3} className="text-rose-dark">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <footer
        className="relative z-10 bg-white/75 backdrop-blur border-t border-pastel-soft/50 py-3.5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, #000 60px, #000 calc(100% - 60px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, #000 60px, #000 calc(100% - 60px), transparent 100%)",
        }}
      >
        <style>{`@keyframes waves-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <div
          className="flex w-max"
          style={{ animation: "waves-marquee 40s linear infinite" }}
        >
          {[...STATS, ...STATS].map((s, i) => (
            <div
              key={`${s.strong}-${i}`}
              className="flex items-center gap-2 md:gap-3 px-5 md:px-7 shrink-0 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-6 md:after:h-8 after:bg-pastel-soft"
            >
              <span className="w-7 h-7 md:w-[34px] md:h-[34px] rounded-full bg-cream text-ink flex items-center justify-center shadow-sm shrink-0">
                {s.icon}
              </span>
              <div className="whitespace-nowrap">
                <strong className="block text-[13px] md:text-[15px] font-bold text-ink leading-tight">{s.strong}</strong>
                <span className="text-[10px] md:text-[11.5px] text-muted">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </section>
  );
}
