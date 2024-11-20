'use client';
import { AnimatedGroup } from '@/components/core/animated-group';

export function AnimatedGroupCustomVariants2() {
  return (
    <AnimatedGroup
      className='grid h-full grid-cols-2 gap-8 p-12 md:grid-cols-3 lg:grid-cols-4'
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: -60,
            rotateX: 90,
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            rotateX: 0,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 1,
            },
          },
        },
      }}
    >
      <div key={1}>
        <img
          src='/national_geographic_logo.svg'
          alt='Apple Music logo'
          className='h-auto w-full'
        />
      </div>
      <div key={2}>
        <img src='/sony_logo.svg' alt='Chrome logo' className='h-auto w-full' />
      </div>
      <div key={3}>
        <img
          src='/strava_logo.svg'
          alt='Strava logo'
          className='h-auto w-full'
        />
      </div>
      <div key={4}>
        <img
          src='/nintendo_logo.svg'
          alt='Nintendo logo'
          className='h-auto w-full'
        />
      </div>
    </AnimatedGroup>
  );
}
