"use client";

import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";

import { calculateBmi, type BmiResult } from "@/lib/bmi";

import { NumberField } from "./NumberField";
import { ResultCard } from "./ResultCard";

type FieldName = "height" | "weight";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const INITIAL_VALUES: FormValues = { height: "", weight: "" };

function validateValue(value: string, label: string): string | undefined {
  if (!value.trim()) return `${label} alanı zorunludur.`;

  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) {
    return `${label} için sıfırdan büyük bir değer girin.`;
  }

  return undefined;
}

export function BmiCalculator() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<BmiResult | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as FieldName;
    const value = event.target.value;

    setValues((current) => ({ ...current, [field]: value }));
    setResult(null);

    if (errors[field]) {
      const label = field === "height" ? "Boy" : "Kilo";
      setErrors((current) => ({
        ...current,
        [field]: validateValue(value, label),
      }));
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const field = event.target.name as FieldName;
    const label = field === "height" ? "Boy" : "Kilo";
    const error = validateValue(event.target.value, label);

    setErrors((current) => ({ ...current, [field]: error }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {
      height: validateValue(values.height, "Boy"),
      weight: validateValue(values.weight, "Kilo"),
    };

    setErrors(nextErrors);

    if (nextErrors.height || nextErrors.weight) {
      setResult(null);
      const firstInvalidField = nextErrors.height ? "height" : "weight";
      const field = event.currentTarget.elements.namedItem(firstInvalidField);

      if (field instanceof HTMLInputElement) {
        field.focus();
      }

      return;
    }

    setResult(calculateBmi(Number(values.height), Number(values.weight)));
  }

  return (
    <div className="grid gap-5 rounded-[2rem] border border-white/90 bg-white/75 p-4 shadow-[0_24px_70px_-30px_rgba(15,118,110,0.35)] backdrop-blur-sm sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 lg:p-7">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white p-6 sm:p-8"
      >
        <div className="mb-7 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              <path
                d="M12 3v18M3 12h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div>
            <h2 className="font-bold text-slate-900">Ölçüm bilgileriniz</h2>
            <p className="text-sm text-slate-500">
              Güncel boy ve kilonuzu girin
            </p>
          </div>
        </div>

        <NumberField
          id="height"
          name="height"
          label="Boy"
          unit="cm"
          placeholder="örn. 170"
          value={values.height}
          error={errors.height}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <NumberField
          id="weight"
          name="weight"
          label="Kilo"
          unit="kg"
          placeholder="örn. 65"
          value={values.weight}
          error={errors.weight}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type="submit"
          className="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 active:translate-y-0 motion-reduce:transform-none"
        >
          BMI Hesapla
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="size-5"
          >
            <path
              d="m7 4 6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>

      <div className="flex flex-col gap-3">
        <ResultCard result={result} />
        <p className="px-3 text-center text-xs leading-5 text-slate-500">
          Bu hesaplama yalnızca bilgilendirme amaçlıdır. Kesin değerlendirme ve
          kişiye özel beslenme planı için Uzman Diyetisyen desteği almanız
          önerilir.
        </p>
      </div>
    </div>
  );
}
