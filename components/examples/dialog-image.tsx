import {
  DialogRoot,
  DialogTrigger,
  DialogContainer,
  DialogClose,
  DialogImage,
  DialogTitle,
  DialogSubtitle,
  DialogDescription,
  DialogContent,
  DialogLink,
} from '@/components/core/dialog';
import { PlusIcon, XIcon } from 'lucide-react';

function DialogImageExample() {
  return (
    <DialogRoot>
      <DialogTrigger className='w-[250px]'>
        <DialogImage
          src='/eb-27-lamp-edouard-wilfrid-buquet.jpg'
          className='max-w-96'
        />
        <DialogContent className='flex flex-grow flex-row items-end justify-between p-2'>
          <div>
            <DialogTitle className='text-base'>EB27</DialogTitle>
            <DialogSubtitle>Edouard Wilfrid Buquet</DialogSubtitle>
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </DialogContent>
      </DialogTrigger>
      <DialogContainer className=''>
        <div className='relative bg-white'>
          <DialogImage
            src='/eb-27-lamp-edouard-wilfrid-buquet.jpg'
            alt='EB27 lamp'
          />
          <DialogContent className='bg-white'>
            <DialogTitle>EB27</DialogTitle>
            <DialogSubtitle>Edouard Wilfrid Buquet</DialogSubtitle>
            <DialogDescription>
              <p className='text-muted-foreground mt-2'>
                Little is known about the life of Édouard-Wilfrid Buquet. He was
                born in France in 1866, but the time and place of his death is
                unfortunately a mystery.
              </p>
              <p className='text-muted-foreground mt-2'>
                Research conducted in the 1970s revealed that he'd designed the
                "EB 27" double-arm desk lamp in 1925, handcrafting it from
                nickel-plated brass, aluminium and varnished wood.
              </p>
            </DialogDescription>
            <DialogLink url='https://www.are.na/block/12759029'>
              Are.na block
            </DialogLink>
          </DialogContent>
          <DialogClose>
            <XIcon size={24} />
          </DialogClose>
        </div>
      </DialogContainer>
    </DialogRoot>
  );
}

export default DialogImageExample;
