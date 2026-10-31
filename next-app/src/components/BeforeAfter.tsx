"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Pair = {
  label: string;
  before: string;
  after: string;
};

const PAIRS: Pair[] = [
  { label: "TV & Living Area", before: "/images/Tv-antes.jpeg", after: "/images/Tv-depois.jpeg" },
  { label: "Floors", before: "/images/chao_antes.JPG", after: "/images/chao_depois.JPG" },
  { label: "Windows", before: "/images/janela_antes.JPG", after: "/images/janela_depois.JPG" },
];

function CompareSlider({ before, after, altBase }: { before: string; after: string; altBase: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-[22px] border border-pastel-soft/70 shadow-lg select-none touch-none"
      onPointerDown={(e) => {
        draggingRef.current = true;
        (e.target as Element).setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
      }}
    >
      <Image
        src={after}
        alt={`${altBase} after Waves cleaning`}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${altBase} before Waves cleaning`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-ink/80 text-white text-[10px] md:text-[11px] font-bold tracking-[0.2em] px-3 py-1.5">
        BEFORE
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-rose-dark text-white text-[10px] md:text-[11px] font-bold tracking-[0.2em] px-3 py-1.5">
        AFTER
      </span>

      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <button
          type="button"
          aria-label="Drag to compare"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-rose-dark shadow-lg border border-pastel-soft cursor-ew-resize"
          onPointerDown={(e) => {
            e.stopPropagation();
            draggingRef.current = true;
            (e.target as Element).setPointerCapture?.(e.pointerId);
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-5 6 5 6" />
            <path d="M15 6l5 6-5 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [idx, setIdx] = useState(0);
  const total = PAIRS.length;
  const current = PAIRS[idx];

  const go = useCallback(
    (delta: number) => setIdx((i) => (i + delta + total) % total),
    [total]
  );

  return (
    <section className="relative py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mb-5 inline-flex items-center gap-3 text-[10px] md:text-[12px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase text-ink">
          <span className="h-px w-7 md:w-14 bg-rose/60" />
          <span className="flex items-center gap-2">
            BEFORE &amp; AFTER
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-rose">
              <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
            </svg>
          </span>
          <span className="h-px w-7 md:w-14 bg-rose/60" />
        </div>

        <h2 className="font-display font-medium leading-[1.1] tracking-tight text-[30px] md:text-[46px] mb-3 text-ink">
          See the <span className="italic text-rose-dark">Difference</span>
        </h2>
        <p className="text-muted text-[14px] md:text-[15px] mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
          Drag the slider to reveal real results from a Waves cleaning.
        </p>

        <div className="relative mx-auto max-w-3xl">
          <CompareSlider
            key={current.label}
            before={current.before}
            after={current.after}
            altBase={current.label}
          />

          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(-1)}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-6 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-rose-dark border border-pastel-soft shadow-md hover:bg-rose-soft hover:-translate-x-0.5 transition z-10"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(1)}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-6 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-rose-dark border border-pastel-soft shadow-md hover:bg-rose-soft hover:translate-x-0.5 transition z-10"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="font-display text-[16px] md:text-[18px] text-ink">{current.label}</span>
          <div className="flex items-center gap-2">
            {PAIRS.map((p, i) => {
              const active = i === idx;
              return (
                <button
                  key={p.label}
                  type="button"
                  aria-label={`Go to ${p.label}`}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    active ? "w-8 bg-rose-dark" : "w-2 bg-pastel-soft hover:bg-rose"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
