interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Decorative shape */}
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-wine/5 blur-3xl dark:bg-terracotta/10" />
      <div className="pointer-events-none absolute -left-20 top-40 h-48 w-48 rounded-full bg-rose/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="opacity-0 animate-fade-up animation-delay-100">
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-muted">
            <span className="h-px w-8 bg-wine dark:bg-terracotta" />
            {label}
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-up animation-delay-200 font-display text-5xl font-light leading-[1.05] tracking-tight text-charcoal dark:text-cream md:text-7xl lg:text-8xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-8 max-w-2xl opacity-0 animate-fade-up animation-delay-300 text-lg leading-relaxed text-charcoal/70 dark:text-cream/60">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
