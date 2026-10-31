"use client";

import { useCallback, useState } from "react";
import { PHONE_TEL } from "./ContactCTA";

type Review = {
  author: string;
  initial: string;
  avatarBg: string;
  localGuide?: boolean;
  reviewCount: number;
  photoCount: number;
  rating: number;
  date: string;
  isNew?: boolean;
  title?: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    author: "Taylor McNally",
    initial: "T",
    avatarBg: "bg-rose",
    reviewCount: 4,
    photoCount: 1,
    rating: 5,
    date: "3 days ago",
    isNew: true,
    title: "Reasonable price · $200–250",
    text:
      "I truly cannot say enough wonderful things about Taynara! She was our housekeeper in Delaware, but over time, she became so much more than that. She became family. Our boys absolutely adored her, and we all love her dearly!\n\nHer attention to detail, quality of cleaning, and communication were exceptional. She took such pride in her work, and it showed every single time. Beyond being incredibly reliable and thorough, she brought so much warmth and kindness into our home.\n\nWhen we moved away from Delaware, leaving Taynara was genuinely one of the hardest goodbyes. Anyone who welcomes her into their home is getting so much more than an amazing housekeeper. They're getting someone who truly cares. We miss her terribly and couldn't recommend her more highly! ❤️",
  },
  {
    author: "Konswella Bentley",
    initial: "K",
    avatarBg: "bg-rose-dark",
    localGuide: true,
    reviewCount: 30,
    photoCount: 4,
    rating: 5,
    date: "Yesterday",
    isNew: true,
    title: "Great price",
    text:
      "I cannot recommend Waves Cleaning Solutions enough! They have been cleaning my home for almost two years, and I have always been impressed with their professionalism, attention to detail, and friendly service. Great price, consistent quality, and a team you can truly trust.",
  },
  {
    author: "Jess Tomko",
    initial: "J",
    avatarBg: "bg-pastel",
    reviewCount: 1,
    photoCount: 0,
    rating: 5,
    date: "3 days ago",
    isNew: true,
    text:
      "Excellent service! Incredibly flexible in managing our constant home projects, add-on cleanings, etc. Waves services our regular home cleanings as well as rental deep cleans!",
  },
];

const GOOGLE_PROFILE_URL = "https://share.google/F9jyN8wIXxaVIfJRg";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill={i < count ? "#F5B400" : "#E6D5C7"}
        >
          <polygon points="12,2 15,9 22,10 17,15 18,22 12,18 6,22 7,15 2,10 9,9" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" width="18" height="18">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.1 17.6 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 2.9-2.3 5.4-4.8 7.1l7.4 5.8c4.3-4 6.8-9.9 6.8-17.4z"/>
      <path fill="#FBBC05" d="M10.4 28.7c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.8-4.5l-7.8-6.1C.9 17 0 20.4 0 24s.9 7 2.6 10.3l7.8-6.1z"/>
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.8c-2.1 1.4-4.8 2.3-8.5 2.3-6.4 0-11.7-3.6-13.6-9.8l-7.8 6.1C6.5 42.6 14.6 48 24 48z"/>
    </svg>
  );
}

function ReviewCard({ r }: { r: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.text.length > 180;
  const bodyPreview = isLong && !expanded ? r.text.slice(0, 180).trim() + "…" : r.text;

  return (
    <article className="rounded-[22px] bg-white border border-pastel-soft/60 shadow-sm p-6 md:p-7">
      <header className="flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white font-bold text-[18px] ${r.avatarBg}`}
          aria-hidden
        >
          {r.initial}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 font-semibold text-ink">
            <span>{r.author}</span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2} className="text-muted">
              <path d="M14 3h7v7M10 14l11-11M21 14v7h-7M3 10V3h7" />
            </svg>
          </div>
          <p className="text-[12px] text-muted">
            {r.localGuide && (
              <>
                <span className="font-medium">Local Guide</span>
                <span className="mx-1">·</span>
              </>
            )}
            {r.reviewCount} {r.reviewCount === 1 ? "review" : "reviews"}
            <span className="mx-1">·</span>
            {r.photoCount} photos
          </p>
        </div>
      </header>

      <div className="mt-3 flex items-center gap-2.5 flex-wrap">
        <Stars count={r.rating} />
        <span className="text-[12.5px] text-muted">{r.date}</span>
        {r.isNew && (
          <span className="inline-block text-[10px] font-bold tracking-[0.1em] text-ink border border-pastel rounded px-1.5 py-0.5">
            NEW
          </span>
        )}
      </div>

      {r.title && (
        <h3 className="mt-3 font-semibold text-[14.5px] text-ink">{r.title}</h3>
      )}
      <p className="mt-2 text-[14px] text-ink/85 leading-relaxed whitespace-pre-line">
        {bodyPreview}
        {isLong && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-rose-dark hover:underline font-medium"
            >
              {expanded ? "Show less" : "View full review"}
            </button>
          </>
        )}
      </p>

    </article>
  );
}

function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);
  const total = REVIEWS.length;
  const go = useCallback(
    (delta: number) => setIdx((i) => (i + delta + total) % total),
    [total]
  );

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-[22px]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {REVIEWS.map((r) => (
            <div key={r.author} className="shrink-0 basis-full px-1">
              <ReviewCard r={r} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous review"
        onClick={() => go(-1)}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 h-12 w-12 items-center justify-center rounded-full bg-white text-rose-dark border border-pastel-soft shadow-md hover:bg-rose-soft hover:-translate-x-0.5 transition z-10"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next review"
        onClick={() => go(1)}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 h-12 w-12 items-center justify-center rounded-full bg-white text-rose-dark border border-pastel-soft shadow-md hover:bg-rose-soft hover:translate-x-0.5 transition z-10"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => go(-1)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-dark border border-pastel-soft shadow-sm active:bg-rose-soft transition"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {REVIEWS.map((r, i) => {
            const active = i === idx;
            return (
              <button
                key={r.author}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  active ? "w-8 bg-rose-dark" : "w-2 bg-pastel-soft hover:bg-rose"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next review"
          onClick={() => go(1)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-dark border border-pastel-soft shadow-sm active:bg-rose-soft transition"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const avg =
    REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length;

  return (
    <section className="relative py-20 md:py-28 bg-pastel-soft/30">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
            <span className="h-px w-7 md:w-14 bg-rose/60" />
            <span className="flex items-center gap-2">
              GOOGLE REVIEWS
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-rose">
                <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
              </svg>
            </span>
            <span className="h-px w-7 md:w-14 bg-rose/60" />
          </div>

          <h2 className="font-display font-medium leading-[1.1] tracking-tight text-[30px] md:text-[46px] mb-5 text-ink">
            What Our <span className="italic text-rose-dark">Clients Say</span>
          </h2>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white border border-pastel-soft shadow-sm px-5 py-3 mb-10 md:mb-12 hover:border-rose transition"
          >
            <GoogleG />
            <div className="flex items-center gap-2 text-left">
              <strong className="font-display text-[22px] text-ink leading-none">{avg.toFixed(1)}</strong>
              <Stars count={Math.round(avg)} />
            </div>
            <span className="text-[12px] text-muted">
              {REVIEWS.length} Google review{REVIEWS.length === 1 ? "" : "s"}
            </span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} className="text-muted">
              <path d="M14 3h7v7M10 14l11-11M21 14v7h-7M3 10V3h7" />
            </svg>
          </a>
        </div>

        <ReviewsCarousel />



        <div className="text-center mt-10 md:mt-14 inline-flex flex-wrap items-center justify-center gap-5 w-full">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-pastel-soft shadow-sm py-3 px-5 text-[12px] font-bold tracking-[0.12em] text-ink hover:border-rose transition"
          >
            <GoogleG />
            SEE ALL ON GOOGLE
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group inline-flex items-center gap-1.5 text-ink hover:text-rose-dark transition font-semibold text-[14px]"
          >
            Loved by our neighbors — join them
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.2} className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
