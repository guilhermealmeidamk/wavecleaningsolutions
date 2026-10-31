import { PHONE_TEL } from "./ContactCTA";

const STEPS = [
  {
    n: "01",
    title: "Request a Quote",
    desc: "Call, text, or fill out the form. We'll give you a personalized estimate in minutes.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h10M4 18h7" />
        <circle cx="18" cy="17" r="4" />
        <path d="M18 15v4M16 17h4" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "We Clean",
    desc: "Our uniformed and trained team arrives with pro-grade products and equipment.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M6 21V8l6-5 6 5v13" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Enjoy Your Home",
    desc: "Come back to a spotless space. 100% satisfaction guaranteed — or we come back.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
          <span className="h-px w-7 md:w-14 bg-rose/60" />
          <span className="flex items-center gap-2">
            HOW IT WORKS
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-rose">
              <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
            </svg>
          </span>
          <span className="h-px w-7 md:w-14 bg-rose/60" />
        </div>

        <h2 className="font-display font-medium leading-[1.1] tracking-tight text-[30px] md:text-[46px] mb-10 md:mb-14 text-ink">
          Clean Home in <span className="italic text-rose-dark">3 Simple Steps</span>
        </h2>

        <ol className="grid md:grid-cols-3 gap-5 md:gap-6 text-left">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative rounded-[22px] bg-white/90 border border-pastel-soft/50 shadow-sm px-6 py-7"
            >
              <span className="absolute -top-3 left-6 text-[11px] font-bold tracking-[0.2em] text-rose-dark bg-cream-50 px-2">
                STEP {s.n}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-soft text-rose-dark mb-4">
                {s.icon}
              </span>
              <h3 className="font-display text-[22px] text-ink mb-1.5">{s.title}</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>

        <a
          href={`tel:${PHONE_TEL}`}
          className="group mt-10 md:mt-12 inline-flex items-center gap-3 rounded-full bg-ink text-white pl-2 pr-6 py-2 shadow-lg hover:bg-black hover:-translate-y-0.5 transition"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-dark text-white font-display text-[14px] font-bold">
            01
          </span>
          <span className="font-bold tracking-[0.12em] text-[12px]">START STEP 1 NOW</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
