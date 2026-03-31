"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Layers3, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { InterestChip } from "@/components/onboarding/interest-chip";
import { interests, type Interest } from "@/data/interests";

export function InterestSelection() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>(["Tech", "AI", "Startups"]);

  const toggleInterest = (interest: Interest) => {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest]
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-aurora/20 bg-aurora/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-aurora">
          <Sparkles className="h-3.5 w-3.5" />
          Onboarding
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
          Choose the spaces you want to grow in.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/52">
          We’ll tailor your dashboard, opportunities, and rewards to match the interests that
          matter most to you.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {interests.map((interest, index) => (
          <InterestChip
            key={interest}
            label={interest}
            selected={selectedInterests.includes(interest)}
            onClick={() => toggleInterest(interest)}
            index={index}
          />
        ))}
      </div>

      <div className="grid gap-4">
        <motion.div
          layout
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
        >
          <div className="flex items-center gap-3 text-sm text-white/50">
            <Compass className="h-4 w-4 text-aurora" />
            Selected interests
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {selectedInterests.length > 0 ? (
              selectedInterests.map((interest) => (
                <motion.div
                  key={interest}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  className="rounded-full border border-aurora/25 bg-aurora/10 px-4 py-2 text-sm font-medium text-white"
                >
                  {interest}
                </motion.div>
              ))
            ) : (
              <p className="text-sm text-white/40">Pick at least one interest to continue.</p>
            )}
          </div>
        </motion.div>

        <div className="rounded-[28px] border border-white/10 bg-[#0a1020]/88 p-5">
          <div className="flex items-center gap-3 text-sm text-white/52">
            <Layers3 className="h-4 w-4 text-coral" />
            {selectedInterests.length} selected
          </div>
          <p className="mt-3 text-sm leading-6 text-white/46">
            Lock in your interests and move into your personalized dashboard.
          </p>
          <Button
            className="mt-6 sm:w-auto sm:min-w-[260px]"
            disabled={selectedInterests.length === 0}
            onClick={() => router.push("/dashboard")}
          >
            Continue to Dashboard
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
