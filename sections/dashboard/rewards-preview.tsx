"use client";

import { motion } from "framer-motion";
import { Gift, Trophy } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { rewardHighlights } from "@/data/dashboard";

export function RewardsPreview() {
  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Rewards"
        title="Rewards preview"
        description="Recognition and unlocks that turn visible progress into tangible milestones."
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <DashboardCard>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-coral/20 bg-coral/10 text-coral">
                <Gift className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                640 points available
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/52">
                You’re close to your next unlock. Attend one event and complete one profile upgrade
                to cross the next threshold.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/42">
              Active streak
            </div>
          </div>

          <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "71%" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="h-full rounded-full bg-gradient-to-r from-aurora to-coral"
            />
          </div>
        </DashboardCard>

        <div className="grid gap-4">
          {rewardHighlights.map((reward) => (
            <DashboardCard key={reward.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold tracking-[-0.03em] text-white">{reward.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/52">{reward.detail}</p>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-aurora">
                  <Trophy className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-5 text-sm font-medium text-coral">{reward.points}</p>
            </DashboardCard>
          ))}
        </div>
      </div>
    </section>
  );
}
