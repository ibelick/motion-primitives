import { ProgressiveBlur } from '@/components/core/progressive-blur';

export function ProgressiveBlurBasic() {
  return (
    <div className='relative my-4 aspect-square w-[300px] overflow-hidden rounded-[4px]'>
      <img
        src='https://cdn.cosmos.so/c4653e73-d082-42e9-87d2-5377d7e6a7f3?format=jpeg'
        alt='Benjamin Spiers - Moonlight 2023'
        className='absolute inset-0'
      />
      <ProgressiveBlur
        className='pointer-events-none absolute bottom-0 left-0 h-[50%] w-full'
        blurIntensity={6}
      />
      <div className='absolute bottom-0 left-0'>
        <div className='flex flex-col items-start gap-0 px-5 py-4'>
          <p className='text-base font-medium text-white'>Benjamin Spiers</p>
          <span className='mb-2 text-base text-zinc-300'>Moonlight 2023</span>
          <p className='text-base text-white'>Oil on linen. 40cm by 30cm</p>
        </div>
      </div>
    </div>
  );
}
