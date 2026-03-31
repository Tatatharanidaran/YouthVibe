import type { ReactNode } from "react";

type DashboardSectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function DashboardSectionHeading({
  eyebrow,
  title,
  description,
  action
}: DashboardSectionHeadingProps) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
