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
    <DashboardCard className="overflow-hidden">
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-aurora">
            <CalendarDays className="h-4.5 w-4.5" />
          </div>
          <motion.div
            whileHover={{ y: -1 }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/56"
          >
            {type}
          </motion.div>
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/52">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
            <CalendarDays className="h-4 w-4 text-aurora" />
            {date}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
            <Clock3 className="h-4 w-4 text-aurora" />
            {time}
          </div>
        </div>

        <Button variant="secondary" className="mt-7 h-11 justify-between rounded-xl px-4">
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </DashboardCard>
  );
}
