import { PHONE_DISPLAY, PHONE_TEL } from "./ContactCTA";

const AREAS = [
  "Kenton",
  "Cheswold",
  "Leipsic",
  "Woodland Beach",
  "Little Creek",
  "Hartly",
  "Marydel",
  "Clayton",
  "Smyrna",
  "Blackbird",
  "Townsend",
  "Middletown",
  "Odessa",
  "Glasgow",
  "Bear",
  "Dover",
  "Camden",
  "Kitts Hummock",
  "Magnolia",
  "Woodside East",
  "Viola",
  "Bowers",
  "Felton",
  "Frederica",
  "Harrington",
  "Houston",
  "Milford",
  "Lincoln",
  "Slaughter Beach",
  "Staytonville",
  "Oakley",
  "Ellendale",
];

export default function ServiceAreas() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background_padrao.png')" }}
    >
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
          <span className="h-px w-7 md:w-14 bg-rose/60" />
          <span className="flex items-center gap-2">
            SERVICE AREAS
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-rose">
              <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
            </svg>
          </span>
          <span className="h-px w-7 md:w-14 bg-rose/60" />
        </div>

        <h2 className="font-display font-medium leading-[1.1] tracking-tight text-[30px] md:text-[46px] mb-3 text-ink">
          Proudly Serving <span className="italic text-rose-dark">Kent County</span>
        </h2>
        <p className="text-muted text-[14px] md:text-[15px] mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
          Serving Kent County and surrounding areas with professional cleaning across Delaware.
        </p>

        <ul className="flex flex-wrap justify-center gap-2 md:gap-2.5">
          {AREAS.map((area) => (
            <li
              key={area}
              className="group inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-pastel-soft shadow-sm px-3.5 py-2 md:px-4 md:py-2.5 text-[12px] md:text-[13px] text-ink hover:bg-rose-soft hover:border-rose transition"
            >
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="text-rose-dark shrink-0"
              >
                <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              {area}
            </li>
          ))}
        </ul>

        <a
          href={`tel:${PHONE_TEL}`}
          className="group mt-10 md:mt-12 inline-flex items-center gap-4 rounded-[18px] bg-white border border-pastel-soft/70 shadow-sm px-5 py-4 hover:border-rose hover:-translate-y-0.5 transition"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-rose-dark">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </span>
          <div className="text-left">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Don&apos;t see your city?</span>
            <span className="block font-display text-[22px] text-ink group-hover:text-rose-dark transition">
              Call {PHONE_DISPLAY}
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
