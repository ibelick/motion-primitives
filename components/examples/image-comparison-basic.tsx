import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/core/image-comparison';

export function ImageComparisonBasic() {
  return (
    <ImageComparison className='h-64 w-[300px]'>
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/b8a45229-b9e4-4273-9320-d19409184522?format=jpeg'
        alt='img 1'
        position='left'
      />
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/b8a45229-b9e4-4273-9320-d19409184522?format=jpeg'
        alt='img 2'
        className='sepia'
        position='right'
      />
      <ImageComparisonSlider className='bg-white' />
    </ImageComparison>
  );
}
