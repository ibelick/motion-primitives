import { Spotlight } from '@/components/core/spotlight';

export function SpotlightBasic1() {
  return (
    <div className='relative aspect-video h-[200px] rounded border border-zinc-800/30 bg-[#070707]'>
      <Spotlight className='bg-zinc-700 blur-2xl' size={64} />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-black p-2'>
        <svg
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 70 70'
          aria-label='MP Logo'
          width='70'
          height='70'
          className='h-8 w-auto'
          fill='none'
        >
          <path
            stroke='white'
            stroke-linecap='round'
            stroke-width='3'
            d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
          ></path>
        </svg>
      </div>
    </div>
  );
}
