import { motion } from 'motion/react';

export function TextRoll({
  children,
  duration = 0,
  delay = 0,
  getEnterDelay = (i) => i * 0.08,
  getExitDelay = (i) => i * 0.08 + 0.2,
  className,
  transition = { ease: 'easeInOut' },
  variants,
  playKey = 0,
}) {
  const defaultVariants = {
    enter: {
      initial: { rotateX: 0 },
      animate: { rotateX: 90 },
    },
    exit: {
      initial: { rotateX: 90 },
      animate: { rotateX: 0 },
    },
  };

  const letters = children.split('');

  return (
    <span className={className}>
      {letters.map((letter, i) => (
        /*
         * OUTER = clipping viewport
         *
         * This is the important part.
         * The rotating text is NOT allowed to escape
         * this box.
         */
        <span
          key={`${playKey}-${i}`}
          className="
            relative
            inline-block
            h-[1em]
            overflow-hidden
            align-bottom
          "
          aria-hidden="true"
        >
          {/*
           * INNER = 3D animation space
           *
           * Perspective and 3D transforms live here,
           * NOT on the clipping element.
           */}
          <span
            className="
              absolute
              inset-0
              [perspective:10000px]
            "
          >
            {/* ENTER */}
            <motion.span
              key={`enter-${playKey}-${i}`}
              className="
                absolute
                left-0
                top-0
                whitespace-pre
                [backface-visibility:hidden]
                [transform-origin:50%_25%]
              "
              initial={
                variants?.enter?.initial ??
                defaultVariants.enter.initial
              }
              animate={
                variants?.enter?.animate ??
                defaultVariants.enter.animate
              }
              transition={{
                ...transition,
                duration,
                delay: delay + getEnterDelay(i),
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>

            {/* EXIT */}
            <motion.span
              key={`exit-${playKey}-${i}`}
              className="
                absolute
                left-0
                top-0
                whitespace-pre
                [backface-visibility:hidden]
                [transform-origin:50%_100%]
              "
              initial={
                variants?.exit?.initial ??
                defaultVariants.exit.initial
              }
              animate={
                variants?.exit?.animate ??
                defaultVariants.exit.animate
              }
              transition={{
                ...transition,
                duration,
                delay: delay + getExitDelay(i),
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          </span>

          {/*
           * Invisible spacer.
           *
           * This keeps the original width and prevents
           * the animation from changing the layout.
           */}
          <span className="invisible whitespace-pre">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        </span>
      ))}

      {/* Accessibility */}
      <span className="sr-only">{children}</span>
    </span>
  );
}