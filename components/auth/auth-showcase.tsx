"use client";

import { motion } from "framer-motion";
import { CalendarRange, Medal, Sparkle, Zap } from "lucide-react";

import { cn } from "@/utils/cn";

const featureIcons = [Sparkle, Zap, CalendarRange, Medal];
const featureLabels = ["Discover", "Build", "Showcase", "Earn"];

type AuthShowcaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  spotlightTitle: string;
  spotlightDescription: string;
  accent: "aurora" | "coral";
  stats: Array<{
    label: string;
    value: string;
  }>;
};

export function AuthShowcase({
  eyebrow,
  title,
  description,
  spotlightTitle,
  spotlightDescription,
  accent,
  stats
}: AuthShowcaseProps) {
  return (
    <section className="relative hidden min-h-full overflow-hidden p-8 lg:flex lg:flex-col lg:justify-start lg:gap-12 lg:p-10 xl:gap-14 xl:p-14">
      <div
        className={cn(
          "absolute inset-0 opacity-70",
          accent === "aurora"
            ? "bg-[radial-gradient(circle_at_20%_10%,rgba(91,110,245,0.12),transparent_24%),radial-gradient(circle_at_80%_28%,rgba(138,150,184,0.08),transparent_20%)]"
            : "bg-[radial-gradient(circle_at_25%_15%,rgba(138,150,184,0.1),transparent_24%),radial-gradient(circle_at_80%_28%,rgba(91,110,245,0.08),transparent_22%)]"
        )}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/48"
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04, duration: 0.38, ease: "easeOut" }}
          className="mt-8 max-w-xl text-5xl font-semibold leading-[1.06] tracking-[-0.05em] text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.38, ease: "easeOut" }}
          className="mt-6 max-w-lg text-base leading-8 text-white/56"
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.4, ease: "easeOut" }}
        className="relative z-10 mt-2 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-wrap gap-3">
            {featureLabels.map((label, index) => {
              const Icon = featureIcons[index];

              return (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/68"
                >
                  <Icon className="h-4 w-4 text-aurora" />
                  {label}
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-2xl font-semibold tracking-[-0.04em]">{stat.value}</p>
                <p className="mt-2 text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-white/36">Spotlight</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{spotlightTitle}</h2>
          <p className="mt-4 text-base leading-7 text-white/52">{spotlightDescription}</p>
          <div className="mt-8 space-y-4">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-white/42">Momentum Score</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ delay: 0.18, duration: 0.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-aurora"
                />
              </div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-white/42">Next unlock</p>
              <p className="mt-3 text-base font-medium text-white/76">
                Verified builder badge after completing onboarding
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
