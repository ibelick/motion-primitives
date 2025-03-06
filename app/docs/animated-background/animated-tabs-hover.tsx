import { AnimatedBackground } from '@/components/core/animated-background';

export function AnimatedTabsHover() {
  const TABS = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className='flex flex-row'>
      <AnimatedBackground
        defaultValue={TABS[0]}
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab, index) => (
          <button
            key={index}
            data-id={tab}
            type='button'
            className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
          >
            {tab}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  );
}
