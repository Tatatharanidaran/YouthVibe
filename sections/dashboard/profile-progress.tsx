"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ChevronRight, Gauge, UserRound } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";

const progressItems = [
  { label: "Profile essentials", value: "80%" },
  { label: "Skills showcase", value: "65%" },
  { label: "Visibility score", value: "72%" }
] as const;

export function ProfileProgress() {
  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Profile"
        title="Profile progress"
        description="A stronger profile improves matching, visibility, and trust signals across the platform."
      />

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <DashboardCard>
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-aurora/15 bg-aurora/10 text-aurora">
                <UserRound className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">Builder profile</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">
                Add proof of work, role interests, and a short intro to stand out faster.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/45">
              In progress
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <svg className="h-28 w-28 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="48" stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="url(#profile-progress-gradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={301.6}
                  initial={{ strokeDashoffset: 301.6 }}
                  animate={{ strokeDashoffset: 60.32 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="profile-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4CF2D2" />
                    <stop offset="100%" stopColor="#FF7A59" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">80%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/40">Complete</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {progressItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/58">{item.label}</span>
                    <span className="font-medium text-white">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DashboardCard>

        <DashboardCard>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: BadgeCheck,
                title: "Verified signals",
                text: "Connect project links and achievements to strengthen trust."
              },
              {
                icon: Gauge,
                title: "Better matching",
                text: "Complete fields unlock more relevant opportunities and events."
              },
              {
                icon: ChevronRight,
                title: "Next step",
                text: "Add your portfolio headline and top three skills."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-aurora">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/52">{item.text}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </section>
  );
}
