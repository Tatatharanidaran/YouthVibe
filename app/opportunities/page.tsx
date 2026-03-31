import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { OpportunitiesBrowser } from "@/sections/opportunities/opportunities-browser";

export default function OpportunitiesPage() {
  return (
    <DashboardShell>
      <div className="space-y-8 sm:space-y-10 xl:space-y-12">
        <OpportunitiesBrowser />
      </div>
    </DashboardShell>
  );
}
