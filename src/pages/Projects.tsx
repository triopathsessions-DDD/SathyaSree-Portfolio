import PageHeader from '@/components/PageHeader';
import ProjectCards from '@/components/ProjectCards';

export default function Projects() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="Selected Work"
        subtitle="A showcase of fashion collections developed end-to-end — from concept and illustration through technical specification and runway presentation."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
            Case Studies
          </h2>
          <div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />
          <span className="text-sm text-muted">02 Projects</span>
        </div>
        <ProjectCards />
      </section>

      {/* Process note */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { num: '01', label: 'Concept', text: 'Inspiration, mood, and visual direction' },
            { num: '02', label: 'Design', text: 'Illustration, flat sketches, and boards' },
            { num: '03', label: 'Specification', text: 'Tech packs, costing, and sourcing' },
            { num: '04', label: 'Presentation', text: 'Final collection and runway execution' },
          ].map((step, idx) => (

            <div
              key={idx}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 100 + 300}ms` }}
            >
              <p className="font-display text-2xl font-light text-wine/40 dark:text-terracotta/40">
                {step.num}
              </p>
              <h4 className="mt-2 font-display text-lg font-medium text-charcoal dark:text-cream">
                {step.label}
              </h4>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
