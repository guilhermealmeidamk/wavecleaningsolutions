import { PHONE_DISPLAY, PHONE_TEL } from "./ContactCTA";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background_padrao.png')" }}
    >
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
          <span className="h-px w-7 md:w-14 bg-rose/60" />
          <span className="flex items-center gap-2">
            READY WHEN YOU ARE
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-rose">
              <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
            </svg>
          </span>
          <span className="h-px w-7 md:w-14 bg-rose/60" />
        </div>

        <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[34px] md:text-[52px] mb-4 text-ink">
          Let&apos;s give your home<br />
          the <span className="italic text-rose-dark">care it deserves</span>
        </h2>
        <p className="text-muted text-[14px] md:text-[15px] mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
          Pick what works for you. We respond fast — day or night.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl mx-auto">
          <a
            href={`tel:${PHONE_TEL}`}
            className="group relative overflow-hidden rounded-[22px] bg-white text-ink px-6 py-7 shadow-lg hover:-translate-y-1 transition text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-dark text-white">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/>
                </svg>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                Call
              </span>
            </div>
            <strong className="block font-display text-[26px] md:text-[28px] leading-tight group-hover:text-rose-dark transition">
              {PHONE_DISPLAY}
            </strong>
            <span className="block text-[12.5px] text-muted mt-1">Tap to call now</span>
          </a>

          <a
            href={`sms:${PHONE_TEL}`}
            className="group relative overflow-hidden rounded-[22px] bg-rose-dark text-white px-6 py-7 shadow-lg hover:-translate-y-1 transition text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-dark">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 11.5a8.5 8.5 0 01-12.8 7.4L3 20l1.2-4.4A8.5 8.5 0 1121 11.5z" />
                </svg>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                Text
              </span>
            </div>
            <strong className="block font-display text-[26px] md:text-[28px] leading-tight">
              Send a message
            </strong>
            <span className="block text-[12.5px] text-white/80 mt-1">Replies in minutes ⚡</span>
          </a>
        </div>
      </div>
    </section>
  );
}
