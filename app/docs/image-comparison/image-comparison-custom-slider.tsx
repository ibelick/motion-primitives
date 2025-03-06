import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/core/image-comparison';

export function ImageComparisonCustomSlider() {
  return (
    <ImageComparison className='aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800'>
      <ImageComparisonImage
        src='/mp_dark.png'
        alt='Motion Primitives Dark'
        position='left'
      />
      <ImageComparisonImage
        src='/mp_light.png'
        alt='Motion Primitives Light'
        position='right'
      />
      <ImageComparisonSlider className='w-2 bg-white/50 backdrop-blur-xs transition-colors hover:bg-white/80'>
        <div className='absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white' />
      </ImageComparisonSlider>
    </ImageComparison>
  );
}
