'use client';
import { TextRoll } from '@/components/core/text-roll';

export function TextRollCustomTransitionDelay() {
  return (
    <TextRoll
      className='overflow-clip text-4xl text-black dark:text-white'
      variants={{
        enter: {
          initial: { y: 0 },
          animate: { y: 40 },
        },
        exit: {
          initial: { y: -40 },
          animate: { y: 0 },
        },
      }}
      duration={0.3}
      getEnterDelay={(i) => i * 0.05}
      getExitDelay={(i) => i * 0.05 + 0.05}
      transition={{
        ease: [0.175, 0.885, 0.32, 1.1],
      }}
    >
      motion-primitives
    </TextRoll>
  );
}
