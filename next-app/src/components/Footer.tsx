import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL } from "./ContactCTA";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-pastel-soft">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-14 grid gap-10 md:grid-cols-3 md:gap-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="Waves Cleaning Solutions"
            width={160}
            height={70}
            className="w-[170px] h-auto mb-4"
          />
          <p className="text-[13px] text-muted leading-relaxed max-w-xs">
            Professional, fully insured cleaning services across Kent County, Delaware.
          </p>
        </div>

        <div>
          <h4 className="font-display text-[18px] text-ink mb-3">Contact</h4>
          <ul className="flex flex-col gap-2 text-[13.5px] text-muted">
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 hover:text-rose-dark transition"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`sms:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 hover:text-rose-dark transition"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 11.5a8.5 8.5 0 01-12.8 7.4L3 20l1.2-4.4A8.5 8.5 0 1121 11.5z" />
                </svg>
                Text us
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Kent County, Delaware
            </li>
            <li>
              <a
                href="https://www.instagram.com/wcleaningsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-rose-dark transition"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @wcleaningsolutions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[18px] text-ink mb-3">Services</h4>
          <ul className="flex flex-col gap-1.5 text-[13.5px] text-muted">
            <li>Residential Cleaning</li>
            <li>Vacation Home Cleaning</li>
            <li>Move-In / Move-Out</li>
            <li>Commercial Cleaning</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pastel-soft/60">
        <div className="mx-auto max-w-5xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-muted">
          <span>© 2026 Waves Cleaning Solutions. All rights reserved.</span>
          <span>Licensed · Insured · Pet-Friendly</span>
        </div>
      </div>
    </footer>
  );
}
