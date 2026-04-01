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
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <DashboardCard className="h-full">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/34">{label}</p>
        <p className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white">{value}</p>
        <p className="mt-3 text-sm leading-6 text-white/48">{caption}</p>
      </DashboardCard>
    </motion.div>
  );
}
