import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { SectionTransition } from "@/components/motion/section-transition";
import { ProfileDetails } from "@/sections/profile/profile-details";
import { ProfileOverview } from "@/sections/profile/profile-overview";
import { ProfileStats } from "@/sections/profile/profile-stats";

export default function ProfilePage() {
  return (
    <DashboardShell>
      <div className="space-y-8 sm:space-y-10 xl:space-y-12">
        <SectionTransition>
          <ProfileOverview />
        </SectionTransition>

        <SectionTransition>
          <ProfileStats />
        </SectionTransition>

        <SectionTransition>
          <ProfileDetails />
        </SectionTransition>
      </div>
    </DashboardShell>
  );
}
