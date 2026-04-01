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
    <DashboardCard>
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-aurora">
          <BriefcaseBusiness className="h-4.5 w-4.5" />
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/56">
          {type}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-2 text-sm text-white/42">
          <Sparkles className="h-4 w-4 text-aurora" />
          {format}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/50">{description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <motion.div
            key={tag}
            whileHover={{ y: -1 }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/54"
          >
            {tag}
          </motion.div>
        ))}
      </div>

      <Button variant="secondary" className="mt-7 h-11 justify-between rounded-xl px-4">
        {cta}
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </DashboardCard>
  );
}
