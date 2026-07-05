"use client";

import Link from "next/link";

const INPUT_CLASS =
  "w-full rounded-chip border border-surface-muted bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 transition focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30";

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}

export function TextField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  textarea,
}: TextFieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">
        {label} {required && <span className="text-brand-red">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={INPUT_CLASS}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={INPUT_CLASS}
        />
      )}
    </label>
  );
}

export interface FieldOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: FieldOption[];
  required?: boolean;
}

export function RadioGroup({ label, name, value, onChange, options, required }: RadioGroupProps) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-medium text-navy">
        {label} {required && <span className="text-brand-red">*</span>}
      </legend>
      <div className="grid gap-2 sm:grid-cols-3">
        {options.map((opt) => {
          const checked = value === opt.value;
          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center justify-center rounded-chip border px-4 py-3 text-center text-sm font-medium transition ${
                checked
                  ? "border-neon-cyan bg-navy text-white shadow-glow-cyan"
                  : "border-surface-muted bg-white text-navy/80 hover:border-neon-cyan/60"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => onChange(opt.value)}
                required={required}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

interface CheckboxGroupProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  options: FieldOption[];
}

export function CheckboxGroup({ label, values, onChange, options }: CheckboxGroupProps) {
  function toggle(value: string) {
    onChange(values.includes(value) ? values.filter((v) => v !== value) : [...values, value]);
  }

  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-medium text-navy">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt) => {
          const checked = values.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-2 rounded-chip border px-4 py-3 text-sm font-medium transition ${
                checked
                  ? "border-neon-cyan bg-navy text-white"
                  : "border-surface-muted bg-white text-navy/80 hover:border-neon-cyan/60"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ConsentCheckbox({ checked, onChange }: ConsentCheckboxProps) {
  return (
    <label className="flex items-start gap-3 text-sm text-navy/70">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-surface-muted text-brand-red focus:ring-neon-cyan"
      />
      <span>
        Autorizo o uso dos meus dados para contato comercial, conforme a{" "}
        <Link href="/privacidade" className="font-medium text-brand-red underline underline-offset-2">
          Política de Privacidade
        </Link>
        . <span className="text-brand-red">*</span>
      </span>
    </label>
  );
}

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function HoneypotField({ value, onChange }: HoneypotFieldProps) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label>
        Não preencha este campo
        <input
          type="text"
          name="empresa_website"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </div>
  );
}

interface SubmitButtonProps {
  label: string;
  loading?: boolean;
}

export function SubmitButton({ label, loading }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex w-full items-center justify-center gap-2 rounded-chip bg-brand-red px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:shadow-glow-cyan disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {loading ? "Enviando..." : label}
    </button>
  );
}

interface FormStatusProps {
  status: "success" | "error";
  message: string;
}

export function FormStatus({ status, message }: FormStatusProps) {
  return (
    <p
      role="status"
      className={`rounded-chip border px-4 py-3 text-sm font-medium ${
        status === "success"
          ? "border-neon-cyan/40 bg-neon-cyan/10 text-navy"
          : "border-brand-red/40 bg-brand-red/5 text-brand-red"
      }`}
    >
      {message}
    </p>
  );
}
