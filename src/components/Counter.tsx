import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface CounterProps {
  value: string; // e.g. "10+", "3", "5+"
  duration?: number;
}

export function Counter({ value, duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract the numeric part and any suffix (like '+')
  const numericTarget = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, numericTarget, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth easeOutCubic curve
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, numericTarget, duration, count]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}












