import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Plus, X } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

export default function ProductCardModal({ product }: { product: ProductItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. Base Card Preview on Home Page */}
      <div className="w-full max-w-[340px] overflow-hidden rounded-3xl border border-charcoal/10 bg-[#1e2022] shadow-xl transition-all duration-600 dark:border-cream/10 sm:max-w-[380px]">
        {/* Top Image */}
        <div className="aspect-[4/5] w-full bg-white dark:bg-[#18181b]">
          <img
            src={product.imageSrc}
            alt={product.title}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Bottom Details Bar */}
        <div className="flex items-center justify-between p-5 text-white">
          <div className="flex flex-col pr-2">
            <h3 className="text-base font-semibold tracking-wide text-white">
              {product.title}
            </h3>
            <p className="mt-0.5 text-xs text-neutral-400">
              {product.subtitle}
            </p>
          </div>

          {/* Plus Button to Open Modal */}
          <button
            type="button"
            aria-label="Open details"
            onClick={() => setIsOpen(true)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/90 text-neutral-300 transition-all hover:border-neutral-400 hover:bg-neutral-700 hover:text-white"
          >
            <Plus size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* 2. Responsive Centered 50/50 Modal (Rendered at Body Level) */}
      {isOpen && mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6 md:p-10"
          >
            {/* Modal Card Box */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[#1e2022] text-white shadow-2xl md:flex-row md:items-stretch"
            >
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/80"
              >
                <X size={18} strokeWidth={2} />
              </button>

              {/* LEFT SIDE: 50% Image */}
              <div className="relative flex h-64 w-full shrink-0 items-center justify-center bg-[#151517] sm:h-80 md:h-auto md:w-1/2">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* RIGHT SIDE: 50% Content */}
              <div className="flex flex-1 flex-col justify-between overflow-y-auto p-6 sm:p-8 md:w-1/2 md:p-10">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-wine dark:text-terracotta">
                    {product.subtitle}
                  </p>

                  <div className="mt-6 whitespace-pre-line text-sm leading-relaxed text-neutral-300 sm:text-base">
                    {product.description}
                  </div>
                </div>

                {product.linkText && (
                  <div className="mt-8 pt-4">
                    <a
                      href={product.linkUrl || '#'}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center text-sm font-medium text-white underline decoration-neutral-500 underline-offset-8 transition-colors hover:decoration-white"
                    >
                      {product.linkText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}