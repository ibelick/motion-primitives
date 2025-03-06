import { TextShimmer } from '@/components/core/text-shimmer';

export function TextShimmerColor() {
  return (
    <TextShimmer
      duration={1.2}
      className='text-xl font-medium [--base-color:var(--color-blue-600)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]'
    >
      Hi, how are you?
    </TextShimmer>
  );
}
