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

export function ScrollProgressBasic3() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='h-[350px] overflow-auto px-8 pb-16 pt-16'
      ref={containerRef}
    >
      <div className='pointer-events-none absolute left-0 top-0 h-24 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-950' />
      <div className='pointer-events-none absolute left-0 top-0 w-full'>
        <div className='absolute left-0 top-0 h-0.5 w-full dark:bg-[#111111]' />
        <ScrollProgress
          className='absolute top-0 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]'
          containerRef={containerRef}
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />
      </div>
      {dummyContent}
    </div>
  );
}
