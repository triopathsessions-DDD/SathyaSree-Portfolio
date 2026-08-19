import PageHeader from '@/components/PageHeader';
import EducationTimeline from '@/components/EducationTimeline';

export default function Education() {
  return (
    <>
      <PageHeader
        label="Education"
        title="Academic Path"
        subtitle="Formal training in fashion design and international business, building creative and commercial foundations."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
            Qualifications
          </h2>
          <div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />
          <span className="text-sm text-muted">02 Credentials</span>
        </div>
        <EducationTimeline />
      </section>

      {/* Path note */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              label: 'Creative Foundation',
              text: 'Four years of intensive fashion design training — illustration, pattern making, garment construction, and collection development.',
            },
            {
              label: 'Commercial Extension',
              text: 'Postgraduate study in international business, building the commercial and cross-cultural acumen to complement a creative practice.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-charcoal/10 bg-ivory/60 p-7 dark:border-cream/10 dark:bg-charcoal/40 opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 150 + 300}ms` }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70 dark:text-cream/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
