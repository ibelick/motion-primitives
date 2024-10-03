'use client';
import { useRef } from 'react';
import { ScrollProgress } from '../core/scroll-progress';

const dummyContent = Array.from({ length: 10 }, (_, i) => (
  <p key={i} className='pb-4'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
    lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra
    nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget
    libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut
    porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies
    a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
));

export function ScrollProgressBasic1() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='h-[350px] overflow-auto px-8 pb-16 pt-16'
      ref={containerRef}
    >
      <div className='pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-900' />
      <ScrollProgress
        className='absolute top-0 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 dark:from-transparent dark:via-zinc-900 dark:to-zinc-900'
        ref={containerRef}
      />
      {dummyContent}
    </div>
  );
}
