import { CalendarDays, Clock3 } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { upcomingEvents } from "@/data/dashboard";

export function EventsPreview() {
  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Events"
        title="Events preview"
        description="Live experiences and community moments that fit your track."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {upcomingEvents.map((event) => (
          <DashboardCard key={event.title}>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-coral">
              <CalendarDays className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">{event.title}</h3>
            <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/50">
              <Clock3 className="h-4 w-4 text-aurora" />
              {event.meta}
            </div>
            <p className="mt-4 text-sm leading-6 text-white/52">{event.detail}</p>
          </DashboardCard>
        ))}
      </div>
    </section>
  );
}
