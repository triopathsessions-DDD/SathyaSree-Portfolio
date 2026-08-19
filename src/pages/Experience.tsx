import PageHeader from '@/components/PageHeader';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { experience } from '@/data/portfolio';
import ScrollReveal from '@/components/ScrollReveal';

export default function Experience() {
  return (
    <>
      <PageHeader
        label="Experience"
        title="The Journey"
        subtitle="Professional experience shaping visual merchandising, retail operations, and team leadership."
      />

      {/* Stats highlight */}
      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: '10+', label: 'Seasonal Displays / Quarter' },
            { value: '3', label: 'Departments Managed' },
            { value: '5+', label: 'Zones Restructured' },
            { value: '8+', label: 'Team Members Trained' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-charcoal/10 bg-ivory/60 p-6 text-center transition-all duration-300 hover:border-wine/25 dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25 opacity-0 animate-scale-in "
              style={{ animationDelay: `${idx * 100 + 200}ms` }}
            >
              <p className="font-d text-3xl font-light text-wine dark:text-terracotta">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <ScrollReveal>        
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
            Role & Responsibilities
          </h2>
          <div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />
        </div>
        <ExperienceTimeline />
      </section>
      </ScrollReveal>

      {/* Overview card */}
      <ScrollReveal>
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 hover:scale-105">
        <div className="rounded-2xl border border-charcoal/10 bg-gradient-to-br from-cream/50 to-ivory/50 p-8 dark:border-cream/10 dark:from-charcoal/40 dark:to-charcoal-deep/30 md:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Overview</p>
          <h3 className="mt-3 font-display text-3xl font-medium text-charcoal dark:text-cream">
            {experience.role}
          </h3>
          <p className="mt-2 text-sm text-wine dark:text-terracotta">
            {experience.company} · {experience.location}
          </p>
          <p className="mt-2 text-sm text-muted">{experience.period}</p>
          <p className="mt-6 max text-base leading-relaxed text-charcoal/70 dark:text-cream/60 break-all">
            Led visual merchandising and department management across three departments, delivering seasonal window and floor displays, aligning promotional calendars, and driving performance through data-informed display strategy. Combined creative presentation with operational discipline — managing inventory, vendors, budgets, and stakeholder reporting while training and onboarding the retail team. Conducted competitor benchmarking and regional trend analysis to keep visual presentations relevant and commercially competitive, while restructuring underperforming zones based on footfall and conversion data. Coordinated planograms, promotional campaigns, and point-of-purchase displays to maintain consistent brand presentation across departments.
          </p>
        </div>
      </section>
      </ScrollReveal>

    </>
  );
}
