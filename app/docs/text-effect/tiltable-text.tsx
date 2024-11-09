import { Tilt } from '@/components/core/tiltable';

export function TiltText() {
  return (
    <Tilt
      rotationFactor={10}
      className='inline-block'
      style={{
        transformOrigin: 'center center',
      }}
    >
      <p className='text-5xl font-medium text-black dark:text-white'>
        Tilting Text
      </p>
    </Tilt>
  );
}
