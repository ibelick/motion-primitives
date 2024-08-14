import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from '@/components/core/carousel';

export function CarouselCustomSizes() {
  return (
    <div className='relative w-full max-w-xs'>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='basis-1/3'>
            <div className='flex aspect-square items-center justify-center border-b border-l border-t border-zinc-200 dark:border-zinc-800'>
              1
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              2
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
              3
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
              4
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
              5
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
              6
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800'>
              7
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </div>
  );
}
