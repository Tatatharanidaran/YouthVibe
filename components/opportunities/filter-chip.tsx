"use client";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

type FilterChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 360, damping: 24 }}
      className={cn(
        "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
        active
          ? "border-aurora/35 bg-aurora/12 text-white shadow-glow"
          : "border-white/10 bg-white/[0.03] text-white/62 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
      )}
    >
      {label}
    </motion.button>
  );
}
