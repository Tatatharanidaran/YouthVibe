"use client";

import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { AuthShowcase } from "@/components/auth/auth-showcase";
import { SectionTransition } from "@/components/motion/section-transition";
import { cn } from "@/utils/cn";

type AuthPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  spotlightTitle: string;
  spotlightDescription: string;
  footerLabel: string;
  footerText: string;
  footerHref: Route;
  accent: "aurora" | "coral";
  stats: Array<{
    label: string;
    value: string;
  }>;
  children: ReactNode;
  panelClassName?: string;
};

export function AuthPageShell({
  eyebrow,
  title,
  description,
  spotlightTitle,
  spotlightDescription,
  footerLabel,
  footerText,
  footerHref,
  accent,
  stats,
  children,
  panelClassName
}: AuthPageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "absolute inset-x-auto top-[-140px] h-[360px] w-[360px] rounded-full blur-3xl",
          accent === "aurora" ? "right-[-120px] bg-aurora/20" : "left-[-120px] bg-coral/20"
        )}
      />

      <SectionTransition className="relative mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-[90rem] overflow-hidden rounded-[32px] border border-white/10 glass-panel lg:grid-cols-[1.08fr_0.92fr]">
        <AuthShowcase
          eyebrow={eyebrow}
          title={title}
          description={description}
          spotlightTitle={spotlightTitle}
          spotlightDescription={spotlightDescription}
          stats={stats}
          accent={accent}
        />

        <div className="relative flex items-center justify-center p-5 sm:p-8 lg:p-10 xl:p-12">
          <div
            className={cn(
              "premium-surface w-full max-w-md rounded-[28px] bg-[#09101f]/80 p-6 shadow-panel sm:p-8",
              panelClassName
            )}
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                  <Sparkles className="h-3.5 w-3.5" />
                  YouthVibe
                </div>
                <p className="text-sm text-white/45">
                  Student-first growth platform for builders, not browsers.
                </p>
              </div>
            </div>

            {children}

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
              <span>{footerLabel}</span>
              <Link
                href={footerHref}
                className="inline-flex items-center gap-2 text-white transition hover:text-aurora"
              >
                {footerText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionTransition>
    </main>
  );
}
