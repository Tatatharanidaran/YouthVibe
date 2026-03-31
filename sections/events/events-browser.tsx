"use client";

import { motion } from "framer-motion";
import { CalendarRange, MapPin, Sparkles, Zap } from "lucide-react";
import { useMemo, useState } from "react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { SectionTransition } from "@/components/motion/section-transition";
import { EventCard } from "@/components/events/event-card";
import { FilterChip } from "@/components/opportunities/filter-chip";
import { Button } from "@/components/ui/button";
import { eventCategories, featuredEvent, upcomingEvents, type EventCategory } from "@/data/events";

export function EventsBrowser() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("All");

  const filteredEvents = useMemo(() => {
    if (activeCategory === "All") {
      return upcomingEvents;
    }

    return upcomingEvents.filter((event) => event.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <SectionTransition>
        <DashboardCard className="overflow-hidden p-0">
          <div className="relative grid gap-6 p-6 sm:p-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,89,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(76,242,210,0.14),transparent_24%)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-coral">
                <Sparkles className="h-3.5 w-3.5" />
                Featured event
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                {featuredEvent.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/56">
                {featuredEvent.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
                  <CalendarRange className="h-4 w-4 text-aurora" />
                  {featuredEvent.date} · {featuredEvent.time}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
                  <MapPin className="h-4 w-4 text-aurora" />
                  {featuredEvent.venue}
                </div>
              </div>

              <Button className="mt-8 sm:w-auto sm:px-6">{featuredEvent.cta}</Button>
            </div>

            <div className="relative grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-white/42">
                  <Zap className="h-4 w-4 text-coral" />
                  Why it stands out
                </div>
                <div className="mt-5 space-y-3">
                  {featuredEvent.highlights.map((highlight) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="rounded-2xl border border-white/10 bg-[#0a1225] px-4 py-3 text-sm text-white/72"
                    >
                      {highlight}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-white/42">Event type</p>
                <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                  {featuredEvent.type}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/52">
                  Built for students who want high-energy rooms, real conversations, and practical
                  momentum.
                </p>
              </div>
            </div>
          </div>
        </DashboardCard>
      </SectionTransition>

      <SectionTransition>
        <DashboardCard>
          <DashboardSectionHeading
            eyebrow="Categories"
            title="Browse by event type"
            description="Jump into the energy you want right now, from community rooms to hands-on sessions."
          />

          <div className="flex flex-wrap gap-3">
            {eventCategories.map((category) => (
              <FilterChip
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </DashboardCard>
      </SectionTransition>

      <SectionTransition>
        <section>
          <DashboardSectionHeading
            eyebrow="Upcoming"
            title="Upcoming events"
            description="A live calendar of high-signal events tailored to ambitious students."
          />

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </section>
      </SectionTransition>
    </div>
  );
}
