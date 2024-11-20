import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/core/carousel';

export function CarouselBasic() {
  return (
    <div className='relative w-full max-w-xs'>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              1
            </div>
          </CarouselItem>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              2
            </div>
          </CarouselItem>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              3
            </div>
          </CarouselItem>
          <CarouselItem className='p-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              4
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}
