const BADGES = [
  {
    title: ["Trusted", "Professionals"],
    subtitle: ["Trained and", "background-checked"],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20C5 20 3 15 3 11 3 7 6 3 12 3c6 0 9 3 9 7 0 6-5 10-10 10z" />
        <path d="M4 20C9 15 13 11 18 7" />
      </svg>
    ),
  },
  {
    title: ["Insured", "& Reliable"],
    subtitle: ["Your home is", "in safe hands"],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: ["Sparkling", "Results"],
    subtitle: ["Consistently", "high standards"],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,3 14.6,9.3 21.4,9.9 16.3,14.3 17.9,21 12,17.3 6.1,21 7.7,14.3 2.6,9.9 9.4,9.3" />
      </svg>
    ),
  },
];

export default function WhyChooseWaves() {
  return (
    <section
      className="relative bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/images/background_why%20choose%20us.png')" }}
    >
      <div className="mx-auto max-w-5xl px-5 pt-32 pb-20 text-center md:pt-44 md:pb-28">
        <span className="inline-flex text-rose mb-3">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
          </svg>
        </span>

        <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
          <span className="h-px w-7 md:w-14 bg-rose/60" />
          WHY CHOOSE WAVES
          <span className="h-px w-7 md:w-14 bg-rose/60" />
        </div>

        <h2 className="font-display font-medium leading-[1.08] tracking-tight text-[32px] md:text-[52px] mb-5 text-ink">
          More Than Cleaning,
          <br />
          <span className="italic text-rose-dark">It&apos;s Peace of Mind</span>
        </h2>

        <p className="mx-auto max-w-xl text-ink text-[14px] md:text-[16px] leading-relaxed mb-10 md:mb-14">
          We provide reliable, high-quality cleaning
          <br className="hidden md:block" /> services so you can focus on what
          <br className="hidden md:block" /> really matters.
        </p>

        <ul className="mx-auto grid max-w-3xl grid-cols-3 gap-3 md:gap-12">
          {BADGES.map((b) => (
            <li key={b.title.join(" ")} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-rose-soft text-ink shadow-sm">
                {b.icon}
              </span>
              <h4 className="text-[12px] md:text-[15px] font-bold leading-tight text-ink">
                {b.title[0]}
                <br />
                {b.title[1]}
              </h4>
              <p className="text-[11px] md:text-[13.5px] leading-snug text-muted">
                {b.subtitle[0]}
                <br />
                {b.subtitle[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
