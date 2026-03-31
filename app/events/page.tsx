import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { EventsBrowser } from "@/sections/events/events-browser";

export default function EventsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8 sm:space-y-10 xl:space-y-12">
        <EventsBrowser />
      </div>
    </DashboardShell>
  );
}
