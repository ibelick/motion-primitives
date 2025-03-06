import { AnimatedBackground } from '@/components/core/animated-background';

export function SegmentedControl() {
  return (
    <div className='rounded-[8px] bg-gray-100 p-[2px] dark:bg-zinc-800'>
      <AnimatedBackground
        defaultValue='Day'
        className='rounded-lg bg-white dark:bg-zinc-700'
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
        }}
      >
        {['Day', 'Week', 'Month', 'Year'].map((label, index) => {
          return (
            <button
              key={index}
              data-id={label}
              type='button'
              aria-label={`${label} view`}
              className='inline-flex w-20 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50'
            >
              {label}
            </button>
          );
        })}
      </AnimatedBackground>
    </div>
  );
}
