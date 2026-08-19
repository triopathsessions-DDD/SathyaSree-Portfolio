
import { ArrowUpRight, Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Strip non-digit characters (spaces, +, dashes) to form a clean wa.me URL
  const cleanPhone = (profile.whatsapp || profile.phone || '+447721087479').replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  return (
    <footer className="border-t border-charcoal/10 bg-cream/30 dark:border-cream/10 dark:bg-charcoal-deep">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12">
        {/* Main "Let's Connect" Section */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-wine dark:text-terracotta">
            Let's Connect
          </p>

          {/* Tagline */}
          <h2 className="mt-2 max-w-xl font-display text-2xl font-light leading-snug text-charcoal dark:text-cream md:text-3xl">
            Open to creative opportunities, collaborations, and fashion-focused projects.
          </h2>

          {/* Prominent Email Address */}
          <a
            href={`mailto:${profile.email}`}
            className="group mt-4 font-display text-lg font-light text-charcoal/90 transition-colors duration-300 hover:text-wine dark:text-cream/90 dark:hover:text-terracotta md:text-xl"
          >
            {profile.email}
            <span className="block h-px max-w-0 bg-wine transition-all duration-300 group-hover:max-w-full dark:bg-terracotta" />
          </a>

          {/* Responsive Action Buttons / Icons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/80 transition-all duration-500 hover:-translate-y-1 hover:border-black/80 hover:bg-wine hover:text-cream dark:border-cream/15 dark:text-cream/80 dark:hover:border-cream/60 dark:hover:bg-terracotta dark:hover:text-white sm:h-auto sm:w-auto sm:gap-1.5 sm:px-5 sm:py-2 sm:text-xs sm:font-medium sm:uppercase sm:tracking-wider"
            >
              <Mail size={18} className="sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">Email</span>
              <ArrowUpRight size={13} strokeWidth={1.5} className="hidden sm:inline" />
            </a>

            {/* Call */}
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              aria-label="Call Phone Number"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/80 transition-all duration-500 hover:-translate-y-1 hover:border-black/80 hover:bg-wine hover:text-cream dark:border-cream/15 dark:text-cream/80 dark:hover:border-cream/60 dark:hover:bg-terracotta dark:hover:text-white sm:h-auto sm:w-auto sm:gap-1.5 sm:px-5 sm:py-2 sm:text-xs sm:font-medium sm:uppercase sm:tracking-wider"
            >
              <Phone size={18} className="sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">Call</span>
              <ArrowUpRight size={13} strokeWidth={1.5} className="hidden sm:inline" />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/80 transition-all duration-500 hover:-translate-y-1 hover:border-black/80 hover:bg-wine hover:text-cream dark:border-cream/15 dark:text-cream/80 dark:hover:border-cream/60 dark:hover:bg-terracotta dark:hover:text-white sm:h-auto sm:w-auto sm:gap-1.5 sm:px-5 sm:py-2 sm:text-xs sm:font-medium sm:uppercase sm:tracking-wider"
            >
              <Linkedin size={18} className="sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">LinkedIn</span>
              <ArrowUpRight size={13} strokeWidth={1.5} className="hidden sm:inline" />
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send WhatsApp Message"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/80 transition-all duration-500 hover:-translate-y-1 hover:border-black/80 hover:bg-wine hover:text-cream dark:border-cream/15 dark:text-cream/80 dark:hover:border-cream/60 dark:hover:bg-terracotta dark:hover:text-white sm:h-auto sm:w-auto sm:gap-1.5 sm:px-5 sm:py-2 sm:text-xs sm:font-medium sm:uppercase sm:tracking-wider"
            >
              <MessageCircle size={18} className="sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
              <ArrowUpRight size={13} strokeWidth={1.5} className="hidden sm:inline" />
            </a>
          </div>
        </div>

        {/* Thin bottom divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-charcoal/10 to-transparent dark:via-cream/10 md:mt-10" />

        {/* Bottom Sub-bar */}
        <div className="mt-5 flex flex-col items-center justify-between gap-2 text-xs tracking-wider text-muted sm:flex-row">
          <p>© {currentYear} Sathya Sree Papabathina</p>
          <p className="uppercase tracking-[0.2em]">{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}