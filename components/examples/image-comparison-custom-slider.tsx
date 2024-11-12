import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "../core/image-comparison";

export function ImageComparisonCustomSlider() {
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
		  position='right'
		  className='grayscale'
		/>
		<ImageComparisonSlider className='w-2 bg-white/50 backdrop-blur-sm transition-colors hover:bg-white/80'>
		  <div className='absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white' />
		</ImageComparisonSlider>
	  </ImageComparison>
	);
  }
  