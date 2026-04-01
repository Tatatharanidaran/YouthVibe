"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { useUserProfile } from "@/hooks/use-user-profile";

export function WelcomeHero() {
  const { firstName } = useUserProfile();

  return (
    <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
      <DashboardCard className="overflow-hidden p-0">
        <div className="relative p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,110,245,0.1),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(138,150,184,0.08),transparent_20%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-aurora/20 bg-aurora/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-aurora">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome back
            </div>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-[3.25rem] sm:leading-[1.05]">
              Good evening, {firstName}. Your next move is already taking shape.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/52">
              Your feed is tuned for building momentum: new opportunities, relevant events, and
              rewards that reflect actual progress.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button className="sm:w-auto sm:px-6">
                Explore opportunities
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/54">
                <TrendingUp className="h-4 w-4 text-aurora" />
                Momentum score increased by 12% this week
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>

      <DashboardCard className="flex flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/36">Today’s vibe</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
            You’re in a strong zone for discovery.
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/50">
            Two new opportunities match your AI and startup interests, and a live event is trending
            in your circle.
          </p>
        </div>

        <div className="mt-8 grid gap-3">
          {[
            ["Top focus", "Startup + AI paths"],
            ["Live event", "Design Crit Night"],
            ["Best next action", "Finish profile details"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/32">{label}</p>
              <p className="mt-2 text-sm font-medium text-white/74">{value}</p>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}
