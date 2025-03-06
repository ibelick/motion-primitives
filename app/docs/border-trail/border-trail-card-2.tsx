'use client';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/core/border-trail';
import { useState } from 'react';

export function BorderTrailCard2() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = () => {
    setIsLoading(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleLoad = () => {
    setIsLoading(true);
    setIsVisible(true);
  };

  return (
    <div className='relative h-[200px] w-[300px] rounded-md border border-zinc-300/40 bg-zinc-100 px-4 py-3 dark:border-zinc-700/40 dark:bg-zinc-900'>
      {isVisible && (
        <BorderTrail
          className={cn(
            'bg-linear-to-l from-green-300 via-green-500 to-green-300 transition-opacity duration-300 dark:from-green-700/30 dark:via-green-500 dark:to-green-700/30',
            isLoading ? 'opacity-100' : 'opacity-0'
          )}
          size={120}
          transition={{
            ease: [0, 0.5, 0.8, 0.5],
            duration: 4,
            repeat: 2,
          }}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
      <div className='flex h-full flex-col items-end justify-end'>
        <button
          className='relative ml-1 flex h-8 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-white px-2 text-sm text-zinc-500 focus-visible:ring-2 active:scale-[0.96] dark:border-zinc-50/10'
          type='button'
          aria-label='Load'
          onClick={handleLoad}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
