import type { ReactNode } from "react";

import { AppNavigation } from "@/components/navigation/app-navigation";
import { cn } from "@/utils/cn";

type DashboardShellProps = {
  children: ReactNode;
  className?: string;
};

export function DashboardShell({ children, className }: DashboardShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="absolute left-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-aurora/12 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-80px] h-[280px] w-[280px] rounded-full bg-coral/12 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.03] to-transparent" />

      <div className={cn("relative mx-auto max-w-[90rem]", className)}>
        <AppNavigation />
        {children}
      </div>
    </main>
  );
}
