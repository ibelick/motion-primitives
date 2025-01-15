import { GlowEffect } from '@/components/core/glow-effect';

export function GlowEffectCardBackground() {
  return (
    <div className='relative h-44 w-64'>
      <GlowEffect
        colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
        mode='static'
        blur='medium'
      />
      <div className='relative h-44 w-64 rounded-lg bg-black p-2 text-white dark:bg-white dark:text-black'>
        <svg
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 70 70'
          aria-label='MP Logo'
          width='70'
          height='70'
          className='absolute bottom-4 right-4 h-8 w-8'
          fill='none'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth='3'
            d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
          ></path>
        </svg>
      </div>
    </div>
  );
}
