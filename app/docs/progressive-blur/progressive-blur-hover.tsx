'use client';

import { useState } from 'react';
import { ProgressiveBlur } from '@/components/core/progressive-blur';
import { motion } from 'motion/react';

export function ProgressiveBlurHover() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className='relative my-4 aspect-square h-[300px] overflow-hidden rounded-[4px]'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src='https://cdn.cosmos.so/2d774ea0-4b4f-4d9f-a634-6b6c5a130e91?format=jpeg'
        alt='John Martin - Pandemonium'
        className='absolute inset-0'
      />
      <ProgressiveBlur
        className='pointer-events-none absolute bottom-0 left-0 h-[75%] w-full'
        blurIntensity={0.5}
        animate={isHover ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      <motion.div
        className='absolute bottom-0 left-0'
        animate={isHover ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className='flex flex-col items-start gap-0 px-5 py-4'>
          <p className='text-base font-medium text-white'>John Martin</p>
          <span className='text-base text-zinc-300'>Pandemonium</span>
        </div>
      </motion.div>
    </div>
  );
}
