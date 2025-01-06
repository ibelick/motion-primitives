import { TextShimmerWave } from '@/components/core/text-shimmer-wave';

export function TextShimmerWaveBasic() {
  return (
    <TextShimmerWave className='font-mono text-sm' duration={1}>
      Generating code...
    </TextShimmerWave>
  );
}
