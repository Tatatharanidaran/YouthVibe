"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { Button } from "@/components/ui/button";

type EventCardProps = {
  title: string;
  date: string;
  time: string;
  type: string;
  cta: string;
};

export function EventCard({ title, date, time, type, cta }: EventCardProps) {
  return (
    <DashboardCard className="group overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,89,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(76,242,210,0.1),transparent_24%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-coral">
            <CalendarDays className="h-5 w-5" />
          </div>
          <motion.div
            whileHover={{ y: -1 }}
            className="rounded-full border border-coral/20 bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-coral"
          >
            {type}
          </motion.div>
        </div>

        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/56">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
            <CalendarDays className="h-4 w-4 text-aurora" />
            {date}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
            <Clock3 className="h-4 w-4 text-aurora" />
            {time}
          </div>
        </div>

        <Button variant="secondary" className="mt-8 h-12 justify-between rounded-xl px-4">
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </DashboardCard>
  );
}
