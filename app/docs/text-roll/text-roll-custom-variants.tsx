import { TextRoll } from '@/components/core/text-roll';

export function TextRollCustomVariants() {
  return (
    <TextRoll
      className='text-4xl text-black dark:text-white'
      variants={{
        enter: {
          initial: { rotateX: 0, filter: 'blur(0px)' },
          animate: { rotateX: 90, filter: 'blur(2px)' },
        },
        exit: {
          initial: { rotateX: 90, filter: 'blur(2px)' },
          animate: { rotateX: 0, filter: 'blur(0px)' },
        },
      }}
    >
      motion-primitives
    </TextRoll>
  );
}
