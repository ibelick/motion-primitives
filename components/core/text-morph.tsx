'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, Transition, Variants } from 'motion/react';
import { useMemo, useId } from 'react';

export type TextMorphProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  variants?: Variants;
  transition?: Transition;
};

export function TextMorph({
  children,
  as: Component = 'p',
  className,
  style,
  variants,
  transition,
}: TextMorphProps) {
  const uniqueId = useId();

  const characters = useMemo(() => {
    const charCounts: Record<string, number> = {};

    return children.split('').map((char, index) => {
      const lowerChar = char.toLowerCase();
      charCounts[lowerChar] = (charCounts[lowerChar] || 0) + 1;

      return {
        id: `${uniqueId}-${lowerChar}${charCounts[lowerChar]}`,
        label:
          char === ' '
            ? '\u00A0'
            : index === 0
              ? char.toUpperCase()
              : lowerChar,
      };
    });
  }, [children, uniqueId]);

  const defaultVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const defaultTransition: Transition = {
    type: 'spring',
    stiffness: 280,
    damping: 18,
    mass: 0.3,
  };

  return (
    <Component className={cn(className)} aria-label={children} style={style}>
      <AnimatePresence mode='popLayout' initial={false}>
        {characters.map((character) => (
          <motion.span
            key={character.id}
            layoutId={character.id}
            className='inline-block'
            aria-hidden='true'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants || defaultVariants}
            transition={transition || defaultTransition}
          >
            {character.label}
          </motion.span>
        ))}
      </AnimatePresence>
    </Component>
  );
}
