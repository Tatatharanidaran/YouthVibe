import { ArrowUpRight } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { recommendedOpportunities } from "@/data/dashboard";

export function RecommendedOpportunities() {
  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Recommended"
        title="Recommended opportunities"
        description="Personalized picks based on your selected interests and recent activity."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {recommendedOpportunities.map((item) => (
          <DashboardCard key={item.title}>
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                {item.tag}
              </div>
              <span className="text-sm text-aurora">{item.momentum}</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/52">{item.blurb}</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/80">
              Open opportunity
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </DashboardCard>
        ))}
      </div>
    </section>
  );
}
