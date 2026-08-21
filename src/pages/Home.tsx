import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

import { TextRoll } from '@/components/core/TextRoll';
import { profile } from '@/data/portfolio';
import ProductCardModal from '@/components/ProductCardModal';
import heroImage from '@/images/sathyasree_image.jpg';

export default function Home() {
  const [nameRollKey, setNameRollKey] = useState(0);

  const handleNameHover = () => {
    setNameRollKey((prev) => prev + 1);
  };

  // Custom data to match Sathya Sree's profile
  const heroCardData = {
    id: 'sathya-sree-profile',
    title: 'Sathya Sree Papabathina',
    subtitle: 'Fashion Designer & Visual Merchandiser',
    imageSrc: heroImage,
    description:
      profile.tagline ||
      `Specializing in high-fashion concepts, creative visual merchandising, and aesthetic curation. Dedicated to bringing modern silhouettes and artistic styling together seamlessly.`,
    linkText: 'View Projects',
    linkUrl: '/projects',
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-wine/5 blur-3xl dark:bg-terracotta/10" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-rose/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-terracotta/5 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 md:px-10 lg:px-16">
        <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-14">
          {/* LEFT COLUMN: Hero Content */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3 opacity-0 animate-fade-up">
              <span className="h-px w-10 bg-wine dark:bg-terracotta" />
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-muted">
                <Sparkles size={13} strokeWidth={1.5} />
                Portfolio
                <Sparkles size={13} strokeWidth={1.5} />
              </span>
              <span className="h-px w-10 bg-wine dark:bg-terracotta" />
            </div>

            {/* NAME & INTRO */}
            <div className="cursor-default" onMouseEnter={handleNameHover}>
              <h1 className="font-display font-light leading-[0.95] tracking-tight text-charcoal opacity-0 animate-fade-up animation-delay-100 dark:text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                {/* DESKTOP + TABLET */}
                <div className="hidden sm:block">
                  <span className="block font-sans text-2xl font-light tracking-normal text-charcoal/60 dark:text-cream/60 md:text-3xl lg:text-4xl mb-1 mt-[15px]">
                    Hi, Myself
                  </span>
                  
                  <div className="whitespace-nowrap">
                    <TextRoll
                      className="text-inherit"
                      duration={0.3}
                      delay={0}
                      getEnterDelay={(i) => i * 0.04}
                      getExitDelay={(i) => i * 0.04 + 0.12}
                      playKey={nameRollKey}
                    >
                      {profile.name.split(' ')[0]}
                    </TextRoll>
                    {' '}
                    <TextRoll
                      className="text-inherit"
                      duration={0.3}
                      delay={0.5}
                      getEnterDelay={(i) => i * 0.04}
                      getExitDelay={(i) => i * 0.04 + 0.12}
                      playKey={nameRollKey}
                    >
                      {profile.name.split(' ')[1]}
                    </TextRoll>
                  </div>

                  <div className="italic text-wine dark:text-terracotta">
                    <TextRoll
                      className="text-inherit"
                      duration={0.3}
                      delay={1}
                      getEnterDelay={(i) => i * 0.04}
                      getExitDelay={(i) => i * 0.04 + 0.12}
                      playKey={nameRollKey}
                    >
                      {profile.name.split(' ').slice(2).join(' ')}
                    </TextRoll>
                  </div>
                </div>

                {/* MOBILE */}
                <div className="flex flex-col items-center justify-center text-center sm:hidden">
                  <div className="font-sans text-xl font-light tracking-normal text-charcoal/60 dark:text-cream/60 mb-2 mt-3">
                    <div>Hi,</div>
                    <div>Myself</div>
                  </div>

                  <div>
                    <TextRoll
                      className="text-inherit"
                      duration={0.3}
                      delay={0}
                      getEnterDelay={(i) => i * 0.04}
                      getExitDelay={(i) => i * 0.04 + 0.12}
                      playKey={nameRollKey}
                    >
                      {profile.name.split(' ')[0]}
                    </TextRoll>
                  </div>

                  <div className="italic text-wine dark:text-terracotta">
                    <TextRoll
                      className="text-inherit"
                      duration={0.3}
                      delay={0.5}
                      getEnterDelay={(i) => i * 0.04}
                      getExitDelay={(i) => i * 0.04 + 0.12}
                      playKey={nameRollKey}
                    >
                      {profile.name.split(' ')[1]}
                    </TextRoll>
                  </div>

                  <div className="italic text-wine dark:text-terracotta">
                    <TextRoll
                      className="text-inherit"
                      duration={0.3}
                      delay={1}
                      getEnterDelay={(i) => i * 0.04}
                      getExitDelay={(i) => i * 0.04 + 0.12}
                      playKey={nameRollKey}
                    >
                      {profile.name.split(' ').slice(2).join(' ')}
                    </TextRoll>
                  </div>
                </div>
              </h1>
            </div>

            {/* Title */}
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-charcoal/70 opacity-0 animate-fade-up animation-delay-200 dark:text-cream/60 md:text-base">
              {profile.title}
            </p>

            {/* Tagline */}
            <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-charcoal/75 opacity-0 animate-fade-up animation-delay-300 dark:text-cream/70 md:text-lg">
              {profile.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 opacity-0 animate-fade-up animation-delay-500 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
              <Link
                to="/digital-display"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border bg-wine px-8 py-4 text-sm font-medium uppercase tracking-wide text-cream transition-all duration-500 hover:-translate-y-1 hover:bg-wine-deep hover:text-[14.5px] dark:border-white dark:bg-terracotta dark:text-charcoal-deep dark:hover:border-terracotta dark:hover:bg-white"
              >
                View My Work
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
  href={`${import.meta.env.BASE_URL}SathyaSree_Resume.pdf`}
  download="SathyaSree_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-lg border border-charcoal/25 px-8 py-4 text-md font-medium uppercase tracking-wide text-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-wine hover:text-wine dark:border-cream/25 dark:text-cream dark:hover:border-terracotta dark:hover:text-terracotta"
>
  Download CV
  <Download size={22} strokeWidth={1.5} />
</a>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Product Card Modal */}
          <div className="flex w-full items-center justify-center opacity-0 animate-fade-up animation-delay-700 lg:justify-end">
            <ProductCardModal product={heroCardData} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-px bg-gradient-to-b from-wine/40 to-transparent dark:from-terracotta/40" />
          </div>
        </div>
      </section>
    </div>
  );
}