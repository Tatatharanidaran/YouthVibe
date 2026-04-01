"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { forwardRef, type ReactNode } from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  variant?: ButtonVariant;
  loading?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-aurora/20 bg-aurora text-white shadow-[0_6px_18px_rgba(79,95,215,0.14)] hover:bg-[#4858cb]",
  secondary:
    "border border-white/10 bg-white/[0.03] text-white/88 hover:border-white/14 hover:bg-white/[0.05]",
  ghost: "bg-transparent text-white/72 hover:bg-white/[0.05] hover:text-white"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", loading = false, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={cn(
          "group relative inline-flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 text-sm font-medium tracking-[-0.01em] transition-all duration-200",
          "disabled:cursor-not-allowed disabled:opacity-70 focus-visible:shadow-[0_0_0_3px_rgba(91,110,245,0.18)]",
          variants[variant],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        <span className="relative flex items-center gap-2">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
