import type { ChangeEventHandler, FocusEventHandler } from "react";

type NumberFieldProps = {
  id: string;
  name: string;
  label: string;
  unit: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

export function NumberField({
  id,
  name,
  label,
  unit,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}: NumberFieldProps) {
  const errorId = `${id}-error`;
  const unitId = `${id}-unit`;
  const describedBy = error ? `${unitId} ${errorId}` : unitId;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type="number"
          inputMode="decimal"
          min="0.1"
          step="any"
          required
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          aria-errormessage={error ? errorId : undefined}
          className={`h-14 w-full rounded-2xl border bg-white px-4 pr-14 text-base font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
            error
              ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
              : "border-slate-200 hover:border-emerald-200 focus:border-emerald-400 focus:ring-emerald-100"
          }`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-400"
        >
          {unit}
        </span>
        <span id={unitId} className="sr-only">
          {unit === "cm" ? "Enter height in centimeters." : "Enter weight in kilograms."}
        </span>
      </div>
      <div className="min-h-6 pt-1.5">
        {error ? (
          <p
            id={errorId}
            role="alert"
            className="text-sm font-medium text-rose-600"
          >
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
