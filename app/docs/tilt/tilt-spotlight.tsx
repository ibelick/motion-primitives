import { Spotlight } from '@/components/core/spotlight';
import { Tilt } from '@/components/core/tilt';

export function TiltSpotlight() {
  return (
    <div className='aspect-video max-w-sm'>
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative rounded-lg'
      >
        <Spotlight
          className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
          size={248}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <img
          // src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          src='https://images.beta.cosmos.so/40fbc749-6796-485b-9588-20204dd7c8f0?format=jpeg'
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0'
        />
      </Tilt>
      <div className='flex flex-col space-y-0.5 pb-0 pt-3'>
        <h3 className='font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400'>
          2001: A Space Odyssey
        </h3>
        <p className='text-sm text-black dark:text-white'>Stanley Kubrick</p>
      </div>
    </div>
  );
}
