
import PageHeader from '@/components/PageHeader';
import SkillGroups from '@/components/SkillGroups';

export default function Skills() {
  return (
    <>
      <PageHeader
        label="Skills"
        title="The Craft"
        subtitle="A multidisciplinary skill set spanning fashion design, technical specification, visual merchandising, and retail operations."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
            Expertise
          </h2>
          <div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />
          <span className="text-sm text-muted">07 Categories</span>
        </div>
        <SkillGroups />
      </section>

      {/* Note */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="rounded-2xl border border-charcoal/10 bg-cream/40 p-8 dark:border-cream/10 dark:bg-charcoal/30 md:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Approach
          </p>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/70 dark:text-cream/60">
            Skills are applied across the full creative-to-commercial pipeline — from mood board curation, fashion illustration, and concept development through technical specification, garment construction, planogram execution, visual merchandising, and team leadership on the retail floor. This combines creative design thinking with practical retail knowledge to develop visually engaging collections and commercially effective store experiences.
          </p>
        </div>
      </section>
    </>
  );
}