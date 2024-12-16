import { Magnetic } from '@/components/core/magnetic';

export function MagneticBasic() {
  return (
    <Magnetic>
      <button
        type='button'
        className='inline-flex items-center rounded-md border border-zinc-100 bg-transparent px-4 py-2 text-sm text-zinc-950 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-900 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-600'
      >
        <span>Submit</span>
      </button>
    </Magnetic>
  );
}
