import { TextShimmer } from '@/components/core/text-shimmer';

export function TextShimmerColor() {
  return <TextShimmer speed={20} spread={60} className='font-medium text-xl [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'>Hi, how are you?</TextShimmer>;
}
  