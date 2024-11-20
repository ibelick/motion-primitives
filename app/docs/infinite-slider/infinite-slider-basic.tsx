import { InfiniteSlider } from '@/components/core/infinite-slider';

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
        src='/apple_music_logo.svg'
        alt='Apple Music logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/chrome_logo.svg'
        alt='Chrome logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/strava_logo.svg'
        alt='Strava logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/nintendo_logo.svg'
        alt='Nintendo logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/jquery_logo.svg'
        alt='Jquery logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/prada_logo.svg'
        alt='Prada logo'
        className='h-[120px] w-auto'
      />
    </InfiniteSlider>
  );
}
