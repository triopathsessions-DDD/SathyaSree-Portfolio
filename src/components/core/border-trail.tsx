import React from 'react';
import { motion, type Transition } from 'framer-motion';

export type BorderTrailProps = {
  className?: string;
  size?: number; // Exact length in pixels of the visible line
  gap?: number;  // Gap between loops
  transition?: Transition;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className = '',
  size = 40, // Exact small line length in pixels
  gap = 1400, // Large gap so only one short line exists
  transition = {
    ease: 'linear',
    duration: 2,
    repeat: Infinity,
  },
  style,
}: BorderTrailProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]">
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="12"
          ry="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={`${size} ${gap}`}
          strokeLinecap="round"
          className={className}
          style={{
            filter:
              'drop-shadow(0 0 6px rgba(255,255,255,0.8)) drop-shadow(0 0 10px rgba(184,80,66,0.5))',
            ...style,
          }}
          animate={{
            strokeDashoffset: [0, -(gap + size)],
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
}