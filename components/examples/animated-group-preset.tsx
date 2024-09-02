import { AnimatedGroup } from '@/components/core/animated-group';

export function AnimatedGroupPreset() {
  return (
    <AnimatedGroup
      className='grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4'
      preset='scale'
    >
      <img
        src='https://images.beta.cosmos.so/fc6fdd93-552c-47e6-98aa-b8fb3ba070a2?format=jpeg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
      <img
        src='https://images.beta.cosmos.so/cb674d14-ebd1-4408-bab1-79df895017b6?format=jpeg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
      <img
        src='https://images.beta.cosmos.so/e5a6c3ed-82ad-4084-9a11-1eccd7bc91aa?format=jpeg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
      <img
        src='https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
    </AnimatedGroup>
  );
}
