import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/core/image-comparison';

export function ImageComparisonSpring() {
  return (
    <ImageComparison
      className='h-64 w-[300px] rounded-lg border border-zinc-200 dark:border-zinc-800'
      enableHover
      springOptions={{
        bounce: 0.3,
      }}
    >
      <ImageComparisonImage
        src='/mp_dark.jpg'
        alt='Motion Primitives Dark'
        position='left'
      />
      <ImageComparisonImage
        src='/mp_light.jpg'
        alt='Motion Primitives Light'
        position='right'
        className='grayscale'
      />
      <ImageComparisonSlider className='bg-white' />
    </ImageComparison>
  );
}
