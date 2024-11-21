'use client';
import { useRef } from 'react';
import { ScrollProgress } from '@/components/core/scroll-progress';

const dummyContent = Array.from({ length: 10 }, (_, i) => (
  <p key={i} className='pb-4 font-mono text-sm text-zinc-500'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
    lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra
    nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget
    libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut
    porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies
    a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
));

export function ScrollProgressBasic2() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='h-[350px] overflow-auto px-8 pb-4 pt-16' ref={containerRef}>
      <div className='border-zin-500 absolute left-0 top-0 z-10 h-10 w-full bg-white dark:bg-zinc-950'>
        <ScrollProgress
          className='absolute top-0 h-10 bg-zinc-200 dark:bg-zinc-800'
          containerRef={containerRef}
        />
        <div className='absolute left-0 top-0 flex h-10 items-center space-x-6 px-8 font-[450]'>
          <a
            href='#'
            className='text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
          >
            Magazine
          </a>
          <a
            href='#'
            className='text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
          >
            Blog
          </a>
          <a
            href='#'
            className='text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
          >
            About
          </a>
        </div>
      </div>
      {dummyContent}
    </div>
  );
}
