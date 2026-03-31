import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { RewardsHub } from "@/sections/rewards/rewards-hub";

export default function RewardsPage() {
  return (
    <DashboardShell>
      <div className="space-y-8 sm:space-y-10 xl:space-y-12">
        <RewardsHub />
      </div>
    </DashboardShell>
  );
}
