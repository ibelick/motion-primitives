'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/core/carousel';

function CarouselMP() {
  const ITEMS = new Array(4).fill(null).map((_, index) => index + 1);
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <>
      <CarouselContent className='relative'>
        {ITEMS.map((item) => {
          return (
            <CarouselItem key={item} className='p-4'>
              <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                {item}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className='flex w-full justify-center space-x-3 px-4'>
        {ITEMS.map((item) => {
          return (
            <button
              key={item}
              type='button'
              aria-label={`Go to slide ${item}`}
              onClick={() => setIndex(item - 1)}
              className='h-12 w-12 border border-zinc-200 dark:border-zinc-800'
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}

export function CarouselCustomIndicator() {
  return (
    <div className='relative w-full max-w-xs py-8'>
      <Carousel>
        <CarouselMP />
      </Carousel>
    </div>
  );
}
