import { SpinningText } from '@/components/core/spinning-text';

export function SpinningTextCustomTransition() {
  return (
    <SpinningText
      radius={7}
      fontSize={1}
      duration={6}
      transition={{
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className='font-mono'
    >
      {`motion-primitives • motion-primitives • `}
    </SpinningText>
  );
}
