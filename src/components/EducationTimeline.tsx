import { education } from '@/data/portfolio';

export default function EducationTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-wine/40 via-charcoal/15 to-transparent dark:from-terracotta/40 dark:via-cream/10" />

      {education.map((item, idx) => (
        <div
          key={idx}
          className="relative mb-12 pl-12 opacity-0 animate-fade-up last:mb-0"
          style={{ animationDelay: `${idx * 200 + 200}ms` }}
        >
          {/* Dot */}
          <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-wine/30 bg-ivory dark:border-terracotta/30 dark:bg-charcoal-deep">
            <span className="h-2 w-2 rounded-full bg-wine dark:bg-terracotta" />
          </div>

          <div className="group rounded-xl border border-charcoal/10 bg-ivory/60 p-7 transition-all duration-300 hover:border-wine/25 hover:shadow-md dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {item.period}
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-charcoal dark:text-cream">
              {item.degree}
            </h3>
            <p className="mt-2 text-sm font-medium text-wine dark:text-terracotta">
              {item.institution}
            </p>
            <p className="mt-1 text-sm text-muted">{item.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/65 dark:text-cream/55">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
