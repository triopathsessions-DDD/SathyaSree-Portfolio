import { projects } from '@/data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCards() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {projects.map((project, idx) => (
  
        <article
          key={idx}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-ivory/60 transition-all duration-500 hover:border-wine/25 hover:shadow-lg dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25 opacity-0 animate-fade-up"
          style={{ animationDelay: `${idx * 150 + 200}ms` }}
        >
          {/* Number watermark */}
          <div className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[120px] font-light leading-none text-charcoal/[0.04] dark:text-cream/[0.05]">
            {String(idx + 1).padStart(2, '0')}
          </div>

          <div className="relative flex flex-1 flex-col p-8 md:p-10">
            {/* Meta */}
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-wine/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wine dark:border-terracotta/25 dark:text-terracotta">
                {project.type}
              </span>
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-wine dark:group-hover:text-terracotta"
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 font-display text-2xl font-medium leading-tight text-charcoal dark:text-cream md:text-3xl">
              {project.name}
            </h3>

            {/* Context */}
            <p className="mt-2 text-sm text-muted">
              {project.context} · {project.date}
              {project.role && ` · ${project.role}`}
            </p>

            {/* Summary */}
            <p className="mt-5 text-sm leading-relaxed text-charcoal/70 dark:text-cream/60">
              {project.summary}
            </p>

            {/* Details */}
            <ul className="mt-6 space-y-2.5">
              {project.details.map((detail, dIdx) => (
                <li
                  key={dIdx}
                  className="flex gap-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/55"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wine/50 dark:bg-terracotta/50" />
                  {detail}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-charcoal/10 px-2.5 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-wine/20 dark:border-cream/10 dark:group-hover:border-terracotta/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}




