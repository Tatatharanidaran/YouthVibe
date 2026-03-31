"use client";

import { motion } from "framer-motion";

import { DashboardCard } from "@/components/dashboard/dashboard-card";

type ProfileStatCardProps = {
  label: string;
  value: string;
  caption: string;
};

export function ProfileStatCard({ label, value, caption }: ProfileStatCardProps) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <DashboardCard className="h-full">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">{label}</p>
        <p className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white">{value}</p>
        <p className="mt-3 text-sm leading-6 text-white/52">{caption}</p>
      </DashboardCard>
    </motion.div>
  );
}
