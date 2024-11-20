'use client';
import { TextLoop } from '@/components/core/text-loop';
import { Music } from 'lucide-react';
import { useState } from 'react';

export function TextLoopOnIndexChange() {
  const [direction, setDirection] = useState(-1);

  return (
    <TextLoop
      className='text-sm'
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 19,
        mass: 1.2,
      }}
      interval={2.5}
      onIndexChange={(index) => {
        setDirection(index === 0 ? -1 : 1);
      }}
      variants={{
        initial: {
          position: 'absolute',
          left: 0,
          y: -direction * 20,
          rotateX: -direction * 90,
          opacity: 0,
          filter: 'blur(4px)',
        },
        animate: {
          y: 0,
          rotateX: 0,
          opacity: 1,
          filter: 'blur(0px)',
          position: 'relative',
        },
        exit: {
          y: -direction * 20,
          rotateX: -direction * 90,
          opacity: 0,
          filter: 'blur(4px)',
          position: 'absolute',
          left: 0,
        },
      }}
    >
      <span>
        <Music size={12} className='mr-1 inline-block' />
        Paper Planes・M.I.A.
      </span>
      <span>Fort-de-France, Martinique</span>
    </TextLoop>
  );
}
