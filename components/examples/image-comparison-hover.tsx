import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/core/image-comparison';

export function ImageComparisonHover() {
  return (
    <ImageComparison className='h-64 w-[300px]' enableHover>
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/c06c0cf2-935f-4005-85ae-72615a6dc52a?format=jpeg'
        alt='img 1'
        position='left'
      />
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/c06c0cf2-935f-4005-85ae-72615a6dc52a?format=jpeg'
        alt='img 2'
        position='right'
        className='grayscale'
      />
      <ImageComparisonSlider className='bg-white' />
    </ImageComparison>
  );
}
