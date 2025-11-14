"use client";

import type { InputHTMLAttributes } from "react";
import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const baseStyles =
  "flex w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-neutral-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-60";

const errorStyles = "border-error focus-visible:ring-error";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;

    return (
      <div className="flex w-full flex-col gap-2">
        {label ? (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-900">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(baseStyles, error ? errorStyles : "", className)}
          {...props}
        />
        {error ? <span className="text-sm text-error">{error}</span> : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

