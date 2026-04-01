"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type DashboardCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function DashboardCard({ children, className, ...props }: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn(
        "premium-surface relative rounded-[22px] p-5 shadow-panel transition-[border-color,box-shadow,transform] duration-200 sm:p-6",
        "hover:border-white/10 hover:shadow-panel",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
