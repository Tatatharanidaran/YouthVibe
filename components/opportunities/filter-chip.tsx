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
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
        active
          ? "border-aurora/25 bg-aurora/10 text-white shadow-[0_8px_18px_rgba(91,110,245,0.12)]"
          : "border-white/10 bg-white/[0.03] text-white/58 hover:border-white/16 hover:bg-white/[0.05] hover:text-white"
      )}
    >
      {label}
    </motion.button>
  );
}
