import { ArrowRight, LayoutGrid, Medal, UserCircle2 } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { quickActions } from "@/data/dashboard";

const icons = [UserCircle2, LayoutGrid, Medal];

export function QuickActions() {
  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Actions"
        title="Quick actions"
        description="High-leverage moves to keep your profile and discovery engine moving."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {quickActions.map((action, index) => {
          const Icon = icons[index];

          return (
            <DashboardCard key={action.title}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-aurora">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{action.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/52">{action.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/78">
                Open action
                <ArrowRight className="h-4 w-4" />
              </div>
            </DashboardCard>
          );
        })}
      </div>
    </section>
  );
}
