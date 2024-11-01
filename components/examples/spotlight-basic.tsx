'use client';

import { Spotlight } from '@/components/core/spotlight';

export function SpotlightBasic() {
  return (
    <div className='h-[400px] w-full'>
      <div className='h-full bg-zinc-900 p-20'>
        <Spotlight
          spotlightSize={250}
          color='rgba(161, 161, 170, 0.25)'
          blur={25}
          opacity={0.7}
        />
        <div className='flex flex-col items-center justify-center space-y-8 text-center'>
          <h2 className='text-5xl font-bold tracking-tight text-white'>
            Interactive Spotlight
          </h2>
          <p className='max-w-lg text-lg text-slate-300'>
            Move your cursor around to reveal the dynamic spotlight effect.
            Perfect for creating engaging user experiences.
          </p>
          <button className='rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20'>
            Try it out
          </button>
        </div>
      </div>
    </div>
  );
}
