'use client';
import { TextScramble } from '@/components/core/text-scramble';
import { useState } from 'react';

export function TextScrambleCustomTrigger() {
  const [isTrigger, setIsTrigger] = useState(false);

  console.log('isTrigger', isTrigger);

  return (
    <a href='#' className='text-zinc-500 transition-colors hover:text-black'>
      <TextScramble
        className='text-sm'
        as='span'
        speed={0.01}
        trigger={isTrigger}
        onHoverStart={() => setIsTrigger(true)}
        onScrambleComplete={() => setIsTrigger(false)}
      >
        Tyler, The Creator - I Hope You Fin Your Way Home
      </TextScramble>
    </a>
  );
}
