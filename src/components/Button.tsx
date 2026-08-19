import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-wine text-cream hover:bg-wine-deep dark:bg-terracotta dark:text-charcoal-deep dark:hover:bg-terracotta/80',
  outline:
    'border border-charcoal/25 text-charcoal hover:border-wine hover:text-wine dark:border-cream/25 dark:text-cream dark:hover:border-terracotta dark:hover:text-terracotta',
  ghost:
    'text-charcoal hover:text-wine dark:text-cream dark:hover:text-terracotta',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const base = `group relative inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
