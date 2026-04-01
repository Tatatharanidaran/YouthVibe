"use client";

import { MapPin, Sparkles, Star } from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useUserProfile } from "@/hooks/use-user-profile";

export function ProfileOverview() {
  const { fullName, initials } = useUserProfile();

  return (
    <DashboardCard className="overflow-hidden p-0">
      <div className="relative grid gap-8 p-6 sm:p-8 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,110,245,0.1),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(138,150,184,0.08),transparent_24%)]" />

        <div className="relative flex flex-col items-start justify-between rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-aurora/18 bg-aurora/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-aurora">
            <Sparkles className="h-3.5 w-3.5" />
            Identity
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.05] text-3xl font-semibold tracking-[-0.06em] text-white">
              {initials}
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{fullName}</p>
              <p className="mt-2 text-base text-white/52">{profile.role}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/48">
                <MapPin className="h-4 w-4 text-aurora" />
                {profile.location}
              </div>
            </div>
          </div>

          <div className="mt-8 w-full rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/36">
              <Star className="h-4 w-4 text-aurora" />
              Profile vibe
            </div>
            <p className="mt-3 text-sm leading-6 text-white/56">
              Curious, high-agency, and shipping-focused. This profile signals someone who builds,
              contributes, and shows up with intent.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-white/42">
              YouthVibe profile
            </div>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-[3.15rem] sm:leading-[1.06]">
              A profile that feels like proof, not just information.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/52">{profile.bio}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="sm:w-auto sm:px-6">Edit profile</Button>
            <Button variant="secondary" className="sm:w-auto sm:px-6">
              Share profile
            </Button>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
