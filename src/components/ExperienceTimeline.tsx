import { experience } from '@/data/portfolio';

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-wine/40 via-charcoal/15 to-transparent dark:from-terracotta/40 dark:via-cream/10 md:left-1/2" />

      {/* Header card */}
      <div className="relative mb-12 pl-12 md:pl-0 md:text-center">
        <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-wine/30 bg-ivory dark:border-terracotta/30 dark:bg-charcoal-deep md:left-1/2 md:-translate-x-1/2">
          <span className="h-2 w-2 rounded-full bg-wine dark:bg-terracotta" />
        </div>
        <div className="md:mx-auto md:max-w-lg">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {experience.period}
          </p>
          <h3 className="mt-2 font-display text-3xl font-medium text-charcoal dark:text-cream">
            {experience.company}
          </h3>
          <p className="mt-1 text-sm text-wine dark:text-terracotta">
            {experience.role}
          </p>
          <p className="mt-1 text-sm text-muted">{experience.location}</p>
        </div>
      </div>

      {/* Highlight cards */}
      {experience.highlights.map((item, idx) => (
        <div
          key={idx}
          className={`relative mb-6 pl-12 opacity-0 animate-fade-up md:w-1/2 md:pl-0 ${
            idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
          }`}
          style={{ animationDelay: `${idx * 80 + 200}ms` }}
        >
          {/* Dot */}
          <div
            className={`absolute left-0 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-charcoal/20 bg-ivory dark:border-cream/20 dark:bg-charcoal-deep md:left-1/2 md:-translate-x-1/2 ${
              idx % 2 === 0 ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
            }`}
          >
            <span className="text-[10px] font-medium text-muted">{idx + 1}</span>
          </div>

          <div className="group rounded-lg border border-charcoal/10 bg-ivory/60 p-5 transition-all duration-300 hover:border-wine/30 hover:shadow-sm dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/30">
            <h4 className="font-display text-lg font-medium text-charcoal dark:text-cream">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/65 dark:text-cream/55">
              {item.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
