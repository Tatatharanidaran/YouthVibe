import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { ProfileStatCard } from "@/components/profile/profile-stat-card";
import { profile } from "@/data/profile";

export function ProfileStats() {
  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Signals"
        title="Stats that reflect real progress"
        description="These numbers give the profile weight without turning it into an analytics dashboard."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {profile.stats.map((stat) => (
          <ProfileStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            caption={stat.caption}
          />
        ))}
      </div>
    </section>
  );
}
