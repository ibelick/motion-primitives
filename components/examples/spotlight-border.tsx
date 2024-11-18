import { Spotlight } from '@/components/core/spotlight';

export function SpotlightBorder() {
  return (
    <div className='relative aspect-video h-[200px] overflow-hidden rounded-xl bg-zinc-800/30 p-[1px]'>
      <Spotlight
        className='from-blue-200 via-blue-300 to-blue-400 blur-3xl'
        size={124}
      />
      <div className='relative h-full w-full rounded-xl bg-[#070707]'></div>
    </div>
  );
}
