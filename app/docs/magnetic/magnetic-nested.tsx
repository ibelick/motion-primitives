import { Magnetic } from '@/components/core/magnetic';

export function MagneticNested() {
  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic
      intensity={0.2}
      springOptions={springOptions}
      actionArea='global'
      range={200}
    >
      <button
        type='button'
        className='inline-flex items-center rounded-lg border border-zinc-100 bg-zinc-100 px-4 py-2 text-sm text-zinc-950 transition-all duration-200 hover:bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600'
      >
        <Magnetic
          intensity={0.1}
          springOptions={springOptions}
          actionArea='global'
          range={200}
        >
          <span>Submit</span>
        </Magnetic>
      </button>
    </Magnetic>
  );
}
