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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,242,210,0.18),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(255,122,89,0.16),transparent_24%)]" />

        <div className="relative flex flex-col items-start justify-between rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-aurora/20 bg-aurora/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-aurora">
            <Sparkles className="h-3.5 w-3.5" />
            Identity
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(76,242,210,0.16),rgba(255,122,89,0.16))] text-3xl font-semibold tracking-[-0.06em] text-white shadow-glow">
              {initials}
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{fullName}</p>
              <p className="mt-2 text-base text-white/58">{profile.role}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/48">
                <MapPin className="h-4 w-4 text-coral" />
                {profile.location}
              </div>
            </div>
          </div>

          <div className="mt-8 w-full rounded-[24px] border border-white/10 bg-[#0a1225] p-4">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-white/40">
              <Star className="h-4 w-4 text-coral" />
              Profile vibe
            </div>
            <p className="mt-3 text-sm leading-6 text-white/62">
              Curious, high-agency, and shipping-focused. This profile signals someone who builds,
              contributes, and shows up with intent.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/48">
              YouthVibe profile
            </div>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              A profile that feels like proof, not just information.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">{profile.bio}</p>
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
