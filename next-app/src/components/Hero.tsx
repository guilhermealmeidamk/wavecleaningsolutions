import Image from "next/image";

const NAV_BADGES = [
  {
    label: ["Trusted", "Professionals"],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 3l7 4v5c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: ["Insured", "& Reliable"],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 3l8 4v6c0 4-3 7.5-8 8-5-.5-8-4-8-8V7l8-4z" />
      </svg>
    ),
  },
  {
    label: ["Sparkling", "Results"],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="12,2 15,9 22,9.5 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.5 9,9" />
      </svg>
    ),
  },
];

const SERVICES = [
  {
    label: ["Residential", "Cleaning"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    label: ["Vacation", "Home Cleaning"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: ["Move-In /", "Move-Out"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" />
      </svg>
    ),
  },
  {
    label: ["Commercial", "Cleaning"],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="4" y="3" width="16" height="18" />
        <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      </svg>
    ),
  },
];

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
];

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
            className="w-[110px] md:w-[130px] h-auto"
          />
          <ul className="flex gap-2.5 md:gap-6">
            {NAV_BADGES.map((b) => (
              <li key={b.label.join(" ")} className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] font-medium leading-tight text-ink">
                <span className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] inline-flex items-center justify-center rounded-full bg-cream text-ink shadow-sm">
                  {b.icon}
                </span>
                <span>
                  {b.label[0]}<br />{b.label[1]}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <div className="grid md:grid-cols-[1.25fr_0.85fr] gap-6 md:gap-8 mt-4 md:mt-6 flex-1 items-start">
          <div>
            <h1 className="font-display font-medium leading-[1.02] tracking-tight text-[42px] md:text-[clamp(34px,4.4vw,58px)] text-ink mb-3">
              A Cleaner,<br />
              <span className="italic">Healthier Home</span>
            </h1>
            <p className="text-[10.5px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-2">
              PROFESSIONAL CLEANING SERVICES
            </p>
            <p className="text-[14px] text-muted mb-5 leading-relaxed">
              More time for what you love.<br />
              Let us take care of the cleaning.
            </p>

            <ul className="flex gap-3 md:gap-5 mb-5">
              {SERVICES.map((s) => (
                <li key={s.label.join(" ")} className="text-center text-[10.5px] md:text-[11px] font-medium leading-tight text-ink w-[72px] md:w-[76px]">
                  <div className="w-[54px] h-[54px] md:w-[46px] md:h-[46px] mx-auto mb-1.5 rounded-full bg-ink text-white flex items-center justify-center shadow-md">
                    {s.icon}
                  </div>
                  {s.label[0]}<br />{s.label[1]}
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-sm bg-white/95 backdrop-blur rounded-[22px] shadow-lg px-5 pt-12 pb-6 md:px-6 md:pt-6 md:pb-5 mt-3 mb-8 md:mt-0 md:mb-0">
      

            <h2 className="font-display font-medium text-[26px] md:text-[24px] mb-2 text-center md:text-left text-ink">
              Get Your <span className="italic">Free Quote</span>
            </h2>
            <p className="text-muted text-[12.5px] md:text-left text-center mb-3.5 leading-snug">
              Fill in your email and receive a personalized<br />
              quote for your cleaning needs.
            </p>

            <form className="flex flex-col gap-2.5 mb-3">
              <label className="relative flex items-center bg-white rounded-full pr-1 pl-3.5 border border-pastel-soft shadow-sm">
                <span className="text-rose inline-flex mr-2">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 bg-transparent outline-none py-2.5 px-2 text-[13px] text-ink placeholder:text-[#b7a69f]"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 w-full rounded-full bg-ink text-white py-3.5 px-4 text-[12px] font-bold tracking-[0.12em] shadow-md hover:bg-black hover:-translate-y-0.5 transition"
              >
                GET MY FREE QUOTE
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </button>
            </form>

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

      <footer className="relative z-10 bg-white/75 backdrop-blur border-t border-pastel-soft/50 py-3.5 px-4 md:px-10 grid grid-cols-3 gap-2.5 md:gap-6">
        {STATS.map((s, i) => (
          <div key={s.strong} className={`flex items-center gap-2 md:gap-3 relative ${i < STATS.length - 1 ? "after:absolute after:-right-1 md:after:-right-3 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-6 md:after:h-8 after:bg-pastel-soft" : ""}`}>
            <span className="w-7 h-7 md:w-[34px] md:h-[34px] rounded-full bg-cream text-ink flex items-center justify-center shadow-sm">
              {s.icon}
            </span>
            <div>
              <strong className="block text-[13px] md:text-[15px] font-bold text-ink leading-tight">{s.strong}</strong>
              <span className="text-[10px] md:text-[11.5px] text-muted">{s.label}</span>
            </div>
          </div>
        ))}
      </footer>
    </section>
  );
}
