import { BadgeCheck, Layers3, Sparkle } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { profile } from "@/data/profile";

export function ProfileDetails() {
  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Highlights"
        title="Skills and interests"
        description="A clean snapshot of what this student is building toward and how they want to be known."
      />

      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <DashboardCard>
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-aurora">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[-0.03em] text-white">Skills</p>
              <p className="text-sm text-white/48">Visible strengths that shape how opportunities match.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/72"
              >
                {skill}
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard>
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1225] text-coral">
              <Layers3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[-0.03em] text-white">Interests</p>
              <p className="text-sm text-white/48">Themes shaping events, rewards, and discovery across YouthVibe.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {profile.interests.map((interest) => (
              <div
                key={interest}
                className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-4 py-4"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Sparkle className="h-4 w-4 text-aurora" />
                  {interest}
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </section>
  );
}
