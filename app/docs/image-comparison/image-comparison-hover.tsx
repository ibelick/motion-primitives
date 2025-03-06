import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/core/image-comparison';

export function ImageComparisonHover() {
  return (
    <ImageComparison
      className='aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800'
      enableHover
    >
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
      <ImageComparisonSlider className='bg-white' />
    </ImageComparison>
  );
}
