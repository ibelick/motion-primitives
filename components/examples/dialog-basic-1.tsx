import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
} from '@/components/core/dialog';
import { PlusIcon } from 'lucide-react';

export function DialogBasicOne() {
  return (
    <Dialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.3,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <DialogImage
          src='/eb-27-lamp-edouard-wilfrid-buquet.jpg'
          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
          className='h-48 w-full object-cover'
        />
        <div className='flex flex-grow flex-row items-end justify-between p-2'>
          <div>
            <DialogTitle className='text-zinc-950 dark:text-zinc-50'>
              EB27
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              Edouard Wilfrid Buquet
            </DialogSubtitle>
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent
        style={{
          borderRadius: '24px',
        }}
        className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
      >
        <DialogImage
          src='/eb-27-lamp-edouard-wilfrid-buquet.jpg'
          alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
          className='h-full w-full'
        />
        <div className='p-6'>
          <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
            EB27
          </DialogTitle>
          <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
            Edouard Wilfrid Buquet
          </DialogSubtitle>
          <DialogDescription
            disableLayoutAnimation
            variants={{
              initial: { opacity: 0, scale: 0.8, y: 100 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.8, y: 100 },
            }}
          >
            <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
              Little is known about the life of Édouard-Wilfrid Buquet. He was
              born in France in 1866, but the time and place of his death is
              unfortunately a mystery.
            </p>
            <p className='text-zinc-500'>
              Research conducted in the 1970s revealed that he’d designed the
              “EB 27” double-arm desk lamp in 1925, handcrafting it from
              nickel-plated brass, aluminium and varnished wood.
            </p>
            <a
              className='mt-2 inline-flex text-zinc-500 underline'
              href='https://www.are.na/block/12759029'
              target='_blank'
              rel='noopener noreferrer'
            >
              Are.na block
            </a>
          </DialogDescription>
        </div>
        <DialogClose className='text-zinc-50' />
      </DialogContent>
    </Dialog>
  );
}
