"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DashboardSectionHeading } from "@/components/dashboard/dashboard-section-heading";
import { SectionTransition } from "@/components/motion/section-transition";
import { FilterChip } from "@/components/opportunities/filter-chip";
import { OpportunityCard } from "@/components/opportunities/opportunity-card";
import { opportunityFilters, opportunities, type OpportunityFilter } from "@/data/opportunities";

export function OpportunitiesBrowser() {
  const [activeFilter, setActiveFilter] = useState<OpportunityFilter>("All");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 240);

    return () => window.clearTimeout(timeoutId);
  }, [activeFilter, query]);

  const filteredOpportunities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return opportunities.filter((opportunity) => {
      const matchesFilter =
        activeFilter === "All" ||
        opportunity.type === activeFilter ||
        opportunity.format === activeFilter;

      const matchesQuery =
        normalizedQuery.length === 0 ||
        opportunity.title.toLowerCase().includes(normalizedQuery) ||
        opportunity.description.toLowerCase().includes(normalizedQuery) ||
        opportunity.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="space-y-8">
      <SectionTransition>
        <DashboardCard className="overflow-hidden p-0">
          <div className="relative p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,110,245,0.1),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(138,150,184,0.08),transparent_24%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-aurora/18 bg-aurora/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-aurora">
                <Sparkles className="h-3.5 w-3.5" />
                Opportunities
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-[3.2rem] sm:leading-[1.06]">
                Browse roles, programs, and builder tracks made for momentum.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/52">
                Explore curated opportunities across tech, design, business, AI, and startup
                communities without the stale job-board feel.
              </p>
            </div>
          </div>
        </DashboardCard>
      </SectionTransition>

      <SectionTransition>
        <DashboardCard>
          <DashboardSectionHeading
            eyebrow="Discover"
            title="Find your next fit"
            description="Search by role, skill, or interest, then narrow the feed with quick filters."
          />

          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <Search className="h-5 w-5 text-white/34" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search opportunities, tags, or tracks"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/28"
              />
            </div>

            <div className="flex items-center gap-2 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/52">
              <SlidersHorizontal className="h-4 w-4 text-aurora" />
              Personalized filters
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {opportunityFilters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </DashboardCard>
      </SectionTransition>

      <SectionTransition>
        {isLoading ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="h-[320px] rounded-[24px] border border-white/8 bg-white/[0.03]"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.title} {...opportunity} />
            ))}
          </div>
        )}
      </SectionTransition>
    </div>
  );
}
