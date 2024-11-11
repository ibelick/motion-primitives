import { Tilt } from '@/components/core/tiltable';

export function TiltCard2() {
  return (
    <Tilt
      transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 2 }}
      rotationFactor={25}
      isRevese
    >
      <div className='max-w-sm rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 shadow-lg'>
        <div className='mb-4 flex h-32 w-full items-center justify-center rounded-lg bg-white/10'>
          <span className='text-4xl'>🎮</span>
        </div>
        <h3 className='mb-2 text-xl font-bold text-white'>Gaming Setup</h3>
        <p className='text-white/80'>
          Experience smooth animations with custom spring physics and enhanced
          rotation effect.
        </p>
      </div>
    </Tilt>
  );
}
