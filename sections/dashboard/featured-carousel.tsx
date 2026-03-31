"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { Button } from "@/components/ui/button";
import { featuredOpportunities } from "@/data/dashboard";

export function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = featuredOpportunities[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredOpportunities.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === featuredOpportunities.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section>
      <DashboardSectionHeading
        eyebrow="Featured"
        title="Featured opportunities"
        description="High-signal picks curated around your current momentum and stated interests."
        action={
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        }
      />

      <DashboardCard className="overflow-hidden p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.title}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-coral">
                <Sparkles className="h-3.5 w-3.5" />
                {activeItem.category}
              </div>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
                {activeItem.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/56">
                {activeItem.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/62">
                  <MapPin className="h-4 w-4 text-aurora" />
                  {activeItem.location}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/62">
                  {activeItem.timeline}
                </div>
              </div>

              <Button className="mt-8 sm:w-auto sm:px-6">View details</Button>
            </div>

            <div className="grid gap-4">
              {featuredOpportunities.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-[24px] border p-4 text-left transition ${
                    activeIndex === index
                      ? "border-aurora/35 bg-aurora/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/38">{item.category}</p>
                  <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/50">{item.timeline}</p>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </DashboardCard>
    </section>
  );
}
