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

export function ScrollProgressBasic1() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='h-[350px] overflow-auto px-8 pb-16 pt-16'
      ref={containerRef}
    >
      <div className='pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-900' />
      <div className='pointer-events-none absolute left-0 top-0 w-full'>
        <div className='absolute left-0 top-0 h-1 w-full bg-[#E6F4FE] dark:bg-[#111927]' />
        <ScrollProgress
          containerRef={containerRef}
          className='absolute top-0 bg-[#0090FF]'
        />
      </div>
      {dummyContent}
    </div>
  );
}
