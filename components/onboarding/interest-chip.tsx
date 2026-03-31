"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import { cn } from "@/utils/cn";

type InterestChipProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  index?: number;
};

export function InterestChip({
  label,
  selected,
  onClick,
  index = 0
}: InterestChipProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.08 + index * 0.05,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-[24px] border p-4 text-left transition-all duration-300",
        "min-h-[132px] bg-white/[0.03] shadow-[0_18px_40px_rgba(4,9,24,0.18)]",
        selected
          ? "border-aurora/70 bg-gradient-to-br from-aurora/18 via-[#10213a] to-coral/12 shadow-glow"
          : "border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
      )}
      aria-pressed={selected}
    >
      <motion.div
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0.6
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-aurora/40 bg-aurora/14 text-aurora"
      >
        <Check className="h-4 w-4" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%)] opacity-70" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-white/72 transition-colors duration-300 group-hover:text-aurora">
          <Sparkles className="h-5 w-5" />
        </div>

        <div className="mt-7">
          <p className="text-lg font-semibold tracking-[-0.03em] text-white">{label}</p>
          <p className="mt-2 text-sm leading-6 text-white/46">
            {selected ? "Selected for your YouthVibe feed." : "Tap to personalize your growth path."}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
