"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl": variant === "primary",
          "bg-purple-600 text-white shadow-lg hover:bg-purple-700": variant === "secondary",
          "border-2 border-blue-600 text-blue-600 hover:bg-blue-50": variant === "outline",
          "text-gray-600 hover:bg-gray-100": variant === "ghost",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg"
        },
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";

export default Button;
export type { ButtonProps };

