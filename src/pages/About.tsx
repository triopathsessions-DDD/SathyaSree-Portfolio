import PageHeader from '@/components/PageHeader';
import { professionalSummary, aboutSections, profile } from '@/data/portfolio';
import { Sparkles, Eye, Store } from 'lucide-react';
import { AboutTiltCard } from '@/components/AboutTiltCard';

const icons = [Sparkles, Eye, Store];

export default function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="The Designer"
        subtitle="A fashion designer and visual merchandiser bridging creative craft and commercial retail strategy."
      />

      {/* Summary section */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="opacity-0 animate-slide-in-left">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Professional Summary
            </p>
            <div className="mt-4 h-px w-16 bg-wine dark:bg-terracotta" />
          </div>
          <div className="space-y-6">
            {professionalSummary.map((paragraph, idx) => (
              <p
                key={idx}
                className="opacity-0 animate-fade-up text-lg leading-relaxed text-charcoal/75 dark:text-cream/65"
                style={{ animationDelay: `${idx * 150 + 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-charcoal/15 to-transparent dark:via-cream/10" />
      </div>

      {/* Background sections with 3D Tilt + BorderTrail Cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {aboutSections.map((section, idx) => (
            <AboutTiltCard
              key={idx}
              section={section}
              Icon={icons[idx] || Sparkles}
              idx={idx}
            />
          ))}
        </div>
      </section>

      {/* Quote / positioning */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br from-cream/60 to-ivory/60 p-10 text-center dark:border-cream/10 dark:from-charcoal/40 dark:to-charcoal-deep/40 md:p-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-wine/5 blur-2xl dark:bg-terracotta/10" />
          <p className="relative font-display text-3xl font-light italic leading-relaxed text-charcoal dark:text-cream md:text-4xl">
            "Design is the bridge between creative vision and the commercial floor —
            where every silhouette, colour, and display tells a brand's story."
          </p>
          <p className="relative mt-8 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {profile.name}
          </p>
        </div>
      </section>
    </>
  );
}