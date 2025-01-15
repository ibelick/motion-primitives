'use client';
import { motion } from 'motion/react';
import { TextMorph } from '@/components/core/text-morph';
import { GlowEffect } from '@/components/core/glow-effect';
import { useState } from 'react';

export function GlowEffectCardMode() {
  const [isVisible, setIsVisible] = useState(false);

  const handleLoad = () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  };

  return (
    <div className='relative h-[200px] w-[300px]'>
      <motion.div
        className='pointer-events-none absolute inset-0'
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
      >
        <GlowEffect
          colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
          mode='colorShift'
          blur='medium'
          duration={4}
        />
      </motion.div>
      <div className='relative flex h-full flex-col items-end justify-end rounded-md border border-zinc-300/40 bg-zinc-100 px-4 py-3 dark:border-zinc-700/40 dark:bg-zinc-900'>
        <button
          className='relative ml-1 flex h-8 scale-100 select-none appearance-none items-center justify-center overflow-hidden rounded-lg border border-zinc-950/10 bg-white px-2 text-sm text-zinc-950 focus-visible:ring-2 active:scale-[0.96] dark:border-zinc-50/10'
          type='button'
          aria-label='Load'
          onClick={handleLoad}
        >
          <TextMorph>{isVisible ? 'Submitting...' : 'Submit'}</TextMorph>
        </button>
      </div>
    </div>
  );
}
