import { InfiniteSlider } from '@/components/core/infinite-slider';

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <img
        src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
        alt='Dean blunt - Black Metal 2'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
        alt='Yung Lean - Stardust'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
        alt='Lana Del Rey - Ultraviolence'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
        alt='A$AP Rocky - Tailor Swif'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[120px] rounded-[4px]'
      />
    </InfiniteSlider>
  );
}
