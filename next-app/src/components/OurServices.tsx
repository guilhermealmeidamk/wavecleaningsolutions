import { PHONE_DISPLAY, PHONE_TEL } from "./ContactCTA";

const SERVICES = [
  {
    label: ["Residential", "Cleaning"],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    label: ["Vacation", "Home Cleaning"],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: ["Move-In /", "Move-Out"],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
      </svg>
    ),
  },
  {
    label: ["Commercial", "Cleaning"],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      </svg>
    ),
  },
];

export default function OurServices() {
  return (
    <section
      className="relative overflow-hidden pt-16 md:pt-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background_padrao.png')" }}
    >
      <div className="relative mx-auto max-w-5xl px-4 pb-20 md:pb-28 text-center">
        <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
          <span className="h-px w-7 md:w-14 bg-rose/60" />
          <span className="flex items-center gap-2">
            OUR SERVICES
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-rose">
              <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
            </svg>
          </span>
          <span className="h-px w-7 md:w-14 bg-rose/60" />
        </div>

        <h2 className="font-display font-medium leading-[1.1] tracking-tight text-[30px] md:text-[46px] mb-8 md:mb-12 text-ink">
          Cleaning for Every Chapter<br />
          of <span className="italic text-rose-dark">Your Life</span>
        </h2>

        <ul
          className="flex gap-3 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((s) => (
            <li
              key={s.label.join(" ")}
              className="snap-center shrink-0 basis-[45%] sm:basis-[32%] md:basis-[23%] flex flex-col items-center gap-3 md:gap-4 rounded-[18px] md:rounded-[22px] bg-white/90 border border-pastel-soft/40 shadow-sm px-3 py-5 md:px-5 md:py-7"
            >
              <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-rose-soft text-rose-dark">
                {s.icon}
              </span>
              <h3 className="font-body font-semibold text-[12px] md:text-[14px] leading-tight text-ink text-center">
                {s.label[0]}<br />{s.label[1]}
              </h3>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
          {SERVICES.map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-rose-dark/40 first:bg-rose-dark" />
          ))}
        </div>

        <div className="mt-12 md:mt-16 mx-auto max-w-xl rounded-[22px] bg-white/90 border border-pastel-soft/60 shadow-md p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-soft text-rose-dark">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M8 10h.01M12 10h.01M16 10h.01" />
              <path d="M21 12a8 8 0 11-15.5 2.8L4 20l5.2-1.5A8 8 0 0121 12z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <strong className="block font-display text-[18px] text-ink leading-tight">Not sure which service?</strong>
            <span className="text-[13px] text-muted">Chat with our team — we&apos;ll match you to the right fit.</span>
          </div>
          <a
            href={`sms:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white py-3 px-5 text-[12px] font-bold tracking-[0.12em] shadow-md hover:bg-black hover:-translate-y-0.5 transition"
          >
            TEXT {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
