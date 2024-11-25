import { Tilt } from '@/components/core/tilt';

export function TiltCard1() {
  return (
    <Tilt>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <img
          src='/eb-27-lamp-edouard-wilfrid-buquet.jpg'
          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
          className='h-48 w-full object-cover'
        />

        <div className='p-2'>
          <h1 className='text-zinc-950 dark:text-zinc-50'>EB27</h1>
          <h2 className='text-zinc-700 dark:text-zinc-400'>
            Edouard Wilfrid Buquet
          </h2>
        </div>
      </div>
    </Tilt>
  );
}
