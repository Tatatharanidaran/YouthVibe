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
      initial={{ opacity: 0, y: 26, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
