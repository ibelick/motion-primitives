'use client';
import { useRef } from 'react';
import { ScrollProgress } from '../core/scroll-progress';

const dummyContent = Array.from({ length: 10 }, (_, i) => (
  <p key={i} className='flex items-center justify-center p-4'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
    lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra
    nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget
    libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut
    porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies
    a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
));

export function ScrollProgressPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='h-[350px] overflow-auto' ref={containerRef}>
      <ScrollProgress className='absolute top-0' ref={containerRef} />
      <strong className='flex items-center justify-center font-bold'>
        Note: The scroll progress is shown below the navbar of the page.
      </strong>
      {dummyContent}
    </div>
  );
}
