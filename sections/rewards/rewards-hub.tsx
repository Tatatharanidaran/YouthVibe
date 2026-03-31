"use client";

import { motion } from "framer-motion";
import { Award, Gift, Sparkles, TrendingUp } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { SectionTransition } from "@/components/motion/section-transition";
import { BadgeCard } from "@/components/rewards/badge-card";
import { Button } from "@/components/ui/button";
import { badgeGroups, progressTracks, rewardsSummary } from "@/data/rewards";

export function RewardsHub() {
  const xpProgress = Math.round((rewardsSummary.xp / rewardsSummary.nextLevelXp) * 100);

  return (
    <div className="space-y-8">
      <SectionTransition>
        <DashboardCard className="overflow-hidden p-0">
          <div className="relative grid gap-6 p-6 sm:p-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,242,210,0.16),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(255,122,89,0.16),transparent_24%)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-aurora/20 bg-aurora/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-aurora">
                <Sparkles className="h-3.5 w-3.5" />
                Rewards
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Progress that feels earned, visible, and worth showing.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/56">
                YouthVibe rewards consistent action with badges, XP, and unlocks that reflect real
                growth without slipping into a childish game aesthetic.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="sm:w-auto sm:px-6">View all unlocks</Button>
                <Button variant="secondary" className="sm:w-auto sm:px-6">
                  Earn more XP
                </Button>
              </div>
            </div>

            <div className="relative grid gap-4">
              <DashboardCard className="border-aurora/15 bg-[linear-gradient(180deg,rgba(8,18,32,0.94),rgba(8,14,28,0.9))]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/40">Current XP</p>
                    <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-white">
                      {rewardsSummary.xp}
                    </p>
                    <p className="mt-3 text-sm text-white/52">
                      {rewardsSummary.currentLevel} · {rewardsSummary.streak}
                    </p>
                  </div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-coral/20 bg-coral/10 text-coral">
                    <Gift className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-3 flex items-center justify-between text-sm text-white/50">
                    <span>{rewardsSummary.currentLevel}</span>
                    <span>{rewardsSummary.nextLevel}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${xpProgress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-aurora to-coral"
                    />
                  </div>
                </div>
              </DashboardCard>

              <div className="grid gap-4 sm:grid-cols-2">
                <DashboardCard>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-aurora">
                    <Award className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {rewardsSummary.completion}%
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/52">Badge journey completed so far.</p>
                </DashboardCard>

                <DashboardCard>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-coral">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {rewardsSummary.nextLevelXp - rewardsSummary.xp} XP
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/52">Needed to reach the next level.</p>
                </DashboardCard>
              </div>
            </div>
          </div>
        </DashboardCard>
      </SectionTransition>

      <SectionTransition>
        <section>
          <DashboardSectionHeading
            eyebrow="Progress"
            title="XP tracks"
            description="Clear paths that show where your next unlocks will come from."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {progressTracks.map((track) => (
              <DashboardCard key={track.title}>
                <p className="text-lg font-semibold tracking-[-0.03em] text-white">{track.title}</p>
                <p className="mt-3 text-sm leading-6 text-white/52">{track.detail}</p>
                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${track.progress}%` }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-aurora to-coral"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-white/72">{track.progress}% complete</p>
              </DashboardCard>
            ))}
          </div>
        </section>
      </SectionTransition>

      {badgeGroups.map((group) => (
        <SectionTransition key={group.title}>
          <section>
            <DashboardSectionHeading
              eyebrow="Badges"
              title={group.title}
              description={group.description}
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map((badge) => (
                <BadgeCard
                  key={badge.name}
                  name={badge.name}
                  status={badge.status}
                  detail={badge.detail}
                  xp={badge.xp}
                />
              ))}
            </div>
          </section>
        </SectionTransition>
      ))}
    </div>
  );
}
