export default function MoreTime() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[260px] md:min-h-[420px] flex items-center -mt-20 md:-mt-32"
      style={{ backgroundImage: "url('/images/background_more.png')" }}
      aria-label="A cleaner home — more time for what you love"
    >
      <div className="ml-auto w-full md:w-1/2 px-6 md:px-14 py-10 md:py-16 text-right">
        <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-ink mb-3">
          A CLEANER HOME
        </p>
        <h2 className="font-display font-medium leading-[1.05] tracking-tight text-[34px] md:text-[56px] text-ink">
          More Time<br />
          for What<br />
          <span className="italic">You Love</span>
        </h2>
        <div className="mt-4 flex items-center justify-end gap-2 text-rose">
          <span className="h-px w-14 md:w-24 bg-rose/60" />
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
          </svg>
        </div>
      </div>
    </section>
  );
}
