import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from '@/components/core/carousel';

export function CarouselSpacing() {
  return (
    <div className='relative w-full px-4'>
      <Carousel>
        <CarouselContent className='-ml-4'>
          <CarouselItem className='basis-1/3 pl-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              1
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3 pl-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              2
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3 pl-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              3
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3 pl-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              4
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3 pl-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              5
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3 pl-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              6
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3 pl-4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              7
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation
          className='absolute -bottom-14 left-auto top-auto w-full justify-end gap-2'
          classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
