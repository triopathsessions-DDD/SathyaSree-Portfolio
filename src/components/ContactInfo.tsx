import {  Phone, MapPin, MessageCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function ContactInfo() {
  const items = [
    {
      icon: MessageCircle,
      label: 'Whatsapp',
      value: profile.whatsapp,
      // href: `https://wa.me/${profile.whatsapp}`,
      href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`,

    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => {
        const Icon = item.icon;
        const content = (
          <div className="group flex items-center gap-5 rounded-xl border border-charcoal/10 bg-ivory/60 p-5 transition-all duration-300 hover:border-wine/25 hover:shadow-sm dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-wine transition-colors duration-300 group-hover:border-wine group-hover:bg-wine/5 dark:border-cream/15 dark:text-terracotta dark:group-hover:border-terracotta dark:group-hover:bg-terracotta/10">
              <Icon size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {item.label}
              </p>
              <p className="mt-1 text-charcoal dark:text-cream">{item.value}</p>
            </div>
          </div>
        );

        if (item.href) {
          return (
            <a
              key={idx}
              href={item.href}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 100 + 200}ms` }}
            >
              {content}
            </a>
          );
        }
        return (
          <div
            key={idx}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${idx * 100 + 200}ms` }}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
