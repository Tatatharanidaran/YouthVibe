"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Gift, Home, Sparkles, UserCircle2, CalendarDays } from "lucide-react";

import { useUserProfile } from "@/hooks/use-user-profile";
import { cn } from "@/utils/cn";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/opportunities", label: "Opportunities", icon: Compass },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/profile", label: "Profile", icon: UserCircle2 },
  { href: "/rewards", label: "Rewards", icon: Gift }
] as const;

export function AppNavigation() {
  const pathname = usePathname();
  const { firstName, initials } = useUserProfile();

  return (
    <div className="mb-6 space-y-4 sm:mb-8">
      <div className="premium-surface flex flex-col gap-4 rounded-[30px] px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-aurora/20 bg-aurora/10 text-aurora shadow-glow">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-white/44">YOUTHVIBE</p>
              <p className="text-sm text-white/62">Student growth platform</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "border-aurora/30 bg-aurora/12 text-white shadow-glow"
                    : "border-white/10 bg-white/[0.03] text-white/58 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(76,242,210,0.16),rgba(255,122,89,0.16))] text-sm font-semibold text-white">
            {initials}
          </div>
          <div>
            <p className="text-sm font-medium text-white">Hi, {firstName}</p>
            <p className="text-xs uppercase tracking-[0.24em] text-white/36">Builder mode</p>
          </div>
        </div>
      </div>

      <nav className="premium-surface flex gap-2 overflow-x-auto rounded-[24px] px-3 py-3 lg:hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                isActive
                  ? "border-aurora/30 bg-aurora/12 text-white shadow-glow"
                  : "border-white/10 bg-white/[0.03] text-white/58"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
