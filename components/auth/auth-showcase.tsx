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
          "absolute inset-0 opacity-80",
          accent === "aurora"
            ? "bg-[radial-gradient(circle_at_20%_10%,rgba(76,242,210,0.18),transparent_25%),radial-gradient(circle_at_80%_28%,rgba(47,129,247,0.18),transparent_22%)]"
            : "bg-[radial-gradient(circle_at_25%_15%,rgba(255,122,89,0.18),transparent_26%),radial-gradient(circle_at_80%_28%,rgba(255,205,86,0.16),transparent_24%)]"
        )}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.65, ease: "easeOut" }}
          className="mt-8 max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em]"
        >
          <span className="text-gradient">{title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65, ease: "easeOut" }}
          className="mt-6 max-w-lg text-lg leading-8 text-white/62"
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mt-2 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <div className="flex flex-wrap gap-3">
            {featureLabels.map((label, index) => {
              const Icon = featureIcons[index];

              return (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1326] px-4 py-2 text-sm text-white/78"
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
                className="rounded-3xl border border-white/10 bg-black/10 p-4 backdrop-blur"
              >
                <p className="text-2xl font-semibold tracking-[-0.04em]">{stat.value}</p>
                <p className="mt-2 text-sm text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-white/40">Spotlight</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{spotlightTitle}</h2>
          <p className="mt-4 text-base leading-7 text-white/56">{spotlightDescription}</p>
          <div className="mt-10 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-[#0b1326] p-4">
              <p className="text-sm text-white/50">Momentum Score</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-aurora to-coral"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0b1326] p-4">
              <p className="text-sm text-white/50">Next unlock</p>
              <p className="mt-3 text-base font-medium text-white/82">
                Verified builder badge after completing onboarding
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
