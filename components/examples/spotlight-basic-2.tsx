import { Spotlight } from '@/components/core/spotlight';

export function SpotlightBasic2() {
  return (
    <div className='relative aspect-video h-[200px] rounded border border-zinc-800/30 bg-[#070707]'>
      <Spotlight
        className='from-blue-50 via-blue-300 to-blue-400 blur-2xl'
        size={46}
        springOptions={{
          bounce: 0,
        }}
      />
      <div className='absolute inset-0'>
        <svg className='h-full w-full'>
          <defs>
            <pattern
              id='grid-pattern'
              width='8'
              height='8'
              patternUnits='userSpaceOnUse'
            >
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M0 4H4M4 4V0M4 4H8M4 4V8'
                stroke='black'
                strokeOpacity='0.3'
              />
              <rect
                x='3'
                y='3'
                width='2'
                height='2'
                fill='black'
                fillOpacity='0.25'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid-pattern)' />
        </svg>
      </div>
    </div>
  );
}
