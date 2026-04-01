"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Sparkles } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { cn } from "@/utils/cn";

type BadgeCardProps = {
  name: string;
  status: "locked" | "unlocked";
  detail: string;
  xp: string;
};

export function BadgeCard({ name, status, detail, xp }: BadgeCardProps) {
  const unlocked = status === "unlocked";

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <DashboardCard
        className={cn(
          "h-full overflow-hidden",
          unlocked
            ? "border-aurora/14 bg-white/[0.02]"
            : "border-white/8 opacity-90"
        )}
      >
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white/[0.03]",
                unlocked ? "border-aurora/16 text-aurora" : "border-white/10 text-white/42"
              )}
            >
              {unlocked ? <ShieldCheck className="h-4.5 w-4.5" /> : <Lock className="h-4.5 w-4.5" />}
            </div>
            <div
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]",
                unlocked
                  ? "border-aurora/16 bg-aurora/10 text-aurora"
                  : "border-white/10 bg-white/[0.03] text-white/44"
              )}
            >
              {status}
            </div>
          </div>

          <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">{name}</h3>
          <p className="mt-3 text-sm leading-6 text-white/48">{detail}</p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium">
            <Sparkles className={cn("h-4 w-4", unlocked ? "text-aurora" : "text-white/35")} />
            <span className={cn(unlocked ? "text-white/70" : "text-white/46")}>{xp}</span>
          </div>
        </div>
      </DashboardCard>
    </motion.div>
  );
}
