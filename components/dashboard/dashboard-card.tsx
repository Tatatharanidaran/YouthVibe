"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

type DashboardCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function DashboardCard({ children, className, ...props }: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={cn(
        "premium-surface relative rounded-[28px] p-5 shadow-panel transition-[border-color,box-shadow,transform] duration-300 sm:p-6",
        "hover:border-white/14 hover:shadow-floating",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
