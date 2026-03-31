import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { SectionTransition } from "@/components/motion/section-transition";
import { EventsPreview } from "@/sections/dashboard/events-preview";
import { FeaturedCarousel } from "@/sections/dashboard/featured-carousel";
import { ProfileProgress } from "@/sections/dashboard/profile-progress";
import { QuickActions } from "@/sections/dashboard/quick-actions";
import { RecommendedOpportunities } from "@/sections/dashboard/recommended-opportunities";
import { RewardsPreview } from "@/sections/dashboard/rewards-preview";
import { WelcomeHero } from "@/sections/dashboard/welcome-hero";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-8 sm:space-y-10 xl:space-y-12">
        <SectionTransition>
          <WelcomeHero />
        </SectionTransition>

        <SectionTransition>
          <ProfileProgress />
        </SectionTransition>

        <SectionTransition>
          <FeaturedCarousel />
        </SectionTransition>

        <SectionTransition>
          <RecommendedOpportunities />
        </SectionTransition>

        <SectionTransition>
          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            <EventsPreview />
            <RewardsPreview />
          </div>
        </SectionTransition>

        <SectionTransition>
          <QuickActions />
        </SectionTransition>
      </div>
    </DashboardShell>
  );
}
