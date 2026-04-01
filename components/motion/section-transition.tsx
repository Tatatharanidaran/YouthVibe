"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function SectionTransition({ children, className }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
