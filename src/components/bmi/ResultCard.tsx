import type { BmiCategory, BmiResult } from "@/lib/bmi";

type ResultCardProps = {
  result: BmiResult | null;
};

const RESULT_STYLES: Record<
  BmiCategory,
  { badge: string; glow: string; value: string }
> = {
  underweight: {
    badge: "bg-amber-100 text-amber-800",
    glow: "bg-amber-200/70",
    value: "text-amber-700",
  },
  healthy: {
    badge: "bg-emerald-100 text-emerald-800",
    glow: "bg-emerald-200/70",
    value: "text-emerald-700",
  },
  overweight: {
    badge: "bg-orange-100 text-orange-800",
    glow: "bg-orange-200/70",
    value: "text-orange-700",
  },
  obesity: {
    badge: "bg-rose-100 text-rose-800",
    glow: "bg-rose-200/70",
    value: "text-rose-700",
  },
};

export function ResultCard({ result }: ResultCardProps) {
  if (!result) {
    return (
      <section
        aria-label="BMI result"
        aria-live="polite"
        aria-atomic="true"
        className="relative flex min-h-80 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/80 bg-white/55 p-8 text-center shadow-sm"
      >
        <div className="absolute -right-12 -top-12 size-36 rounded-full bg-amber-200/45 blur-2xl" />
        <div className="absolute -bottom-14 -left-10 size-40 rounded-full bg-emerald-200/55 blur-2xl" />
        <div className="relative mb-5 grid size-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-8"
          >
            <path
              d="M7 18.5a7 7 0 1 1 10 0M12 12l3-3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M5.5 16h13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="relative text-xl font-bold text-slate-800">
          Your result will appear here
        </h2>
        <p className="relative mt-2 max-w-xs text-sm leading-6 text-slate-500">
          Enter your height and weight to get your BMI and a simple range guide.
        </p>
      </section>
    );
  }

  const styles = RESULT_STYLES[result.category];

  return (
    <section
      aria-label="BMI result"
      aria-live="polite"
      aria-atomic="true"
      className="relative flex min-h-80 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/80 bg-white/65 p-8 text-center shadow-sm"
    >
      <div
        className={`absolute -right-16 -top-16 size-48 rounded-full blur-3xl ${styles.glow}`}
      />
      <h2 className="relative text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        Your BMI
      </h2>
      <p
        className={`relative mt-2 text-7xl font-bold tracking-tight ${styles.value}`}
      >
        {result.value.toFixed(1)}
      </p>
      <p
        className={`relative mt-5 rounded-full px-4 py-2 text-sm font-bold ${styles.badge}`}
      >
        {result.label}
      </p>
      <p className="relative mt-5 max-w-sm text-sm leading-6 text-slate-600">
        {result.message}
      </p>
    </section>
  );
}
