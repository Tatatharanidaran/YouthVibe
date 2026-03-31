"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { Button } from "@/components/ui/button";

type OpportunityCardProps = {
  title: string;
  type: string;
  format: string;
  tags: readonly string[];
  description: string;
  cta: string;
};

export function OpportunityCard({
  title,
  type,
  format,
  tags,
  description,
  cta
}: OpportunityCardProps) {
  return (
    <DashboardCard className="group">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-aurora">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
        <div className="rounded-full border border-coral/20 bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-coral">
          {type}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/45">
          <Sparkles className="h-4 w-4 text-aurora" />
          {format}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/54">{description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <motion.div
            key={tag}
            whileHover={{ y: -1 }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/58"
          >
            {tag}
          </motion.div>
        ))}
      </div>

      <Button variant="secondary" className="mt-8 h-12 justify-between rounded-xl px-4">
        {cta}
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </DashboardCard>
  );
}
