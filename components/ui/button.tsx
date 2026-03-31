"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-white/10 bg-gradient-to-r from-aurora via-cyan-300 to-coral text-slate-950 shadow-glow hover:brightness-110",
  secondary:
    "border border-white/10 bg-white/[0.05] text-white hover:border-white/20 hover:bg-white/[0.08]",
  ghost: "bg-transparent text-white/80 hover:bg-white/[0.06] hover:text-white"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", loading = false, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
        className={cn(
          "group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 text-sm font-semibold tracking-wide transition-all duration-300",
          "disabled:cursor-not-allowed disabled:opacity-70 focus-visible:shadow-[0_0_0_4px_rgba(76,242,210,0.2)]",
          variants[variant],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_45%)] opacity-80" />
        <span className="absolute inset-y-0 left-0 w-20 -translate-x-[120%] bg-white/25 blur-xl transition-transform duration-500 group-hover:translate-x-[300%]" />
        <span className="relative flex items-center gap-2">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
