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
        <label htmlFor={inputId} className="block text-sm font-medium tracking-[-0.01em] text-white/82">
          {label}
        </label>
        <motion.div
          animate={{
            borderColor: isFocused ? "rgba(91, 110, 245, 0.4)" : "rgba(255, 255, 255, 0.08)",
            boxShadow: isFocused
              ? "0 0 0 3px rgba(91, 110, 245, 0.12)"
              : "0 8px 24px rgba(4, 10, 24, 0.08)"
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="group relative flex h-12 items-center gap-3 rounded-xl border bg-white/[0.03] px-4 backdrop-blur"
        >
          {icon ? (
            <span
              className={cn(
                "relative text-white/38 transition-colors duration-200",
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
        {error ? <p className="text-sm text-rose-300/90">{error}</p> : null}
        {!error && hint ? <p className="text-sm leading-6 text-white/40">{hint}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
