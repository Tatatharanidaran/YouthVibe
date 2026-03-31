"use client";

import { motion } from "framer-motion";
import { forwardRef, useId, useState, type InputHTMLAttributes, type FocusEvent, type ReactNode } from "react";

import { cn } from "@/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, icon, id, onFocus, onBlur, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    return (
      <div className="space-y-2.5">
        <label htmlFor={inputId} className="block text-sm font-semibold tracking-[-0.01em] text-white/88">
          {label}
        </label>
        <motion.div
          animate={{
            borderColor: isFocused ? "rgba(76, 242, 210, 0.75)" : "rgba(255, 255, 255, 0.08)",
            boxShadow: isFocused
              ? "0 0 0 4px rgba(76, 242, 210, 0.12), 0 24px 50px rgba(4, 9, 24, 0.34)"
              : "0 14px 34px rgba(4, 9, 24, 0.18)"
          }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="group relative flex h-14 items-center gap-3 rounded-2xl border bg-white/[0.04] px-4 backdrop-blur"
        >
          <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)] opacity-60" />
          {icon ? (
            <span
              className={cn(
                "relative text-white/45 transition-colors duration-200",
                isFocused && "text-aurora"
              )}
            >
              {icon}
            </span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "relative h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/28",
              className
            )}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </motion.div>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        {!error && hint ? <p className="text-sm leading-6 text-white/42">{hint}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
