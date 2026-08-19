import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300 hover:border-wine hover:text-wine dark:border-cream/20 dark:text-cream dark:hover:border-terracotta dark:hover:text-terracotta"
    >
      <span
        className={`absolute transition-all duration-500 ${
          theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      >
        <Moon size={16} strokeWidth={1.5} />
      </span>
      <span
        className={`absolute transition-all duration-500 ${
          theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`}
      >
        <Sun size={16} strokeWidth={1.5} />
      </span>
    </button>
  );
}
