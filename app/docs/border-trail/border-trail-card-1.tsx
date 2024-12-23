import { BorderTrail } from '@/components/core/border-trail';

export function BorderTrailCard1() {
  return (
    <div className='relative flex h-[200px] w-[300px] flex-col items-center justify-center rounded-md bg-zinc-200 px-5 py-2 dark:bg-zinc-800'>
      <BorderTrail
        style={{
          boxShadow:
            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
        }}
        size={100}
      />
      <div
        className='flex h-full animate-pulse flex-col items-start justify-center space-y-2'
        role='status'
        aria-label='Loading...'
      >
        <div className='h-1 w-4 rounded-[4px] bg-zinc-600'></div>
        <div className='h-1 w-10 rounded-[4px] bg-zinc-600'></div>
        <div className='h-1 w-12 rounded-[4px] bg-zinc-600'></div>
        <div className='h-1 w-12 rounded-[4px] bg-zinc-600'></div>
        <div className='h-1 w-12 rounded-[4px] bg-zinc-600'></div>
      </div>
    </div>
  );
}
