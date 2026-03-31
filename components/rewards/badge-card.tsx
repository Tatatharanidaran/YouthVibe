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
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <DashboardCard
        className={cn(
          "h-full overflow-hidden",
          unlocked
            ? "border-aurora/20 bg-[linear-gradient(180deg,rgba(14,24,38,0.94),rgba(10,16,30,0.88))]"
            : "border-white/8 opacity-90"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-60",
            unlocked
              ? "bg-[radial-gradient(circle_at_top_left,rgba(76,242,210,0.16),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,122,89,0.12),transparent_24%)]"
              : "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_28%)]"
          )}
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-[#0a1225]",
                unlocked ? "border-aurora/20 text-aurora" : "border-white/10 text-white/42"
              )}
            >
              {unlocked ? <ShieldCheck className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
            </div>
            <div
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
                unlocked
                  ? "border-aurora/20 bg-aurora/10 text-aurora"
                  : "border-white/10 bg-white/[0.03] text-white/44"
              )}
            >
              {status}
            </div>
          </div>

          <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">{name}</h3>
          <p className="mt-3 text-sm leading-6 text-white/54">{detail}</p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium">
            <Sparkles className={cn("h-4 w-4", unlocked ? "text-coral" : "text-white/35")} />
            <span className={cn(unlocked ? "text-coral" : "text-white/46")}>{xp}</span>
          </div>
        </div>
      </DashboardCard>
    </motion.div>
  );
}
