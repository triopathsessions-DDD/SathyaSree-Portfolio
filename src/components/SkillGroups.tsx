import React from 'react';
import { skillGroups } from '@/data/portfolio';

export default function SkillGroups() {
  const primaryGroups = skillGroups.slice(0, 4);
  const supportingGroups = skillGroups.slice(4, 7);

  return (
    <div className="space-y-6">
      {/* 01–04: Primary Expertise Cards (2x2 Desktop Grid) */}
      <div className="grid gap-6 md:grid-cols-2">
        {primaryGroups.map((group) => (
          <div
            key={group.label}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory/60 p-8 shadow-sm transition-all duration-300 hover:border-wine/25 hover:shadow-lg dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25"
          >
            <div>
              {/* Header */}
              <div className="flex items-baseline justify-between border-b border-charcoal/10 pb-4 dark:border-cream/10">
                <h3 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
                  {group.title}
                </h3>
                <span className="text-xs font-medium tracking-[0.2em] text-wine dark:text-terracotta">
                  {group.label}
                </span>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center rounded-lg border border-charcoal/10 bg-cream/40 px-3.5 py-1.5 text-xs font-medium tracking-wide text-charcoal/80 transition-colors duration-200 group-hover:border-charcoal/20 dark:border-cream/10 dark:bg-charcoal/60 dark:text-cream/80 dark:group-hover:border-cream/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 05–07: Supporting Skills Full-Width Panel (3 Columns on Desktop) */}
      <div className="rounded-2xl border border-charcoal/10 bg-ivory/60 p-8 shadow-sm transition-all duration-300 dark:border-cream/10 dark:bg-charcoal/40 md:p-10">
        <div className="grid gap-8 divide-y divide-charcoal/10 dark:divide-cream/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {supportingGroups.map((group, idx) => (
            <div
              key={group.label}
              className={`flex flex-col justify-start ${
                idx !== 0 ? 'pt-8 md:pl-8 md:pt-0' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-baseline justify-between border-b border-charcoal/10 pb-3 dark:border-cream/10">
                <h4 className="font-display text-lg font-medium text-charcoal dark:text-cream">
                  {group.title}
                </h4>
                <span className="text-xs font-medium tracking-[0.2em] text-wine dark:text-terracotta">
                  {group.label}
                </span>
              </div>

              {/* Skills Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center rounded-lg border border-charcoal/10 bg-cream/40 px-3 py-1.5 text-xs font-medium tracking-wide text-charcoal/80 dark:border-cream/10 dark:bg-charcoal/60 dark:text-cream/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}