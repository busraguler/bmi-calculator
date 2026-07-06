import { BmiCalculator } from "@/components/bmi/BmiCalculator";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-[-7rem] -z-10 size-80 rounded-full bg-emerald-200/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-7rem] top-[18%] -z-10 size-72 rounded-full bg-amber-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-9rem] left-[38%] -z-10 size-80 rounded-full bg-orange-200/35 blur-3xl"
      />

      <div className="mx-auto w-full max-w-5xl">
        <header className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-emerald-200/80 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm backdrop-blur-sm">
            <span className="size-2 rounded-full bg-emerald-500" />
            A simple health check-in
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
            BMI Calculator:
            <span className="text-emerald-600"> feel informed.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
            Calculate your Body Mass Index in seconds and see where it falls on
            the general health range.
          </p>
        </header>

        <BmiCalculator />

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-500">
          BMI is a general screening measure and does not account for individual
          factors such as muscle mass, age, or body composition.
        </p>
      </div>
    </main>
  );
}
