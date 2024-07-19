import {
  DialogRoot,
  DialogTrigger,
  DialogContainer,
  DialogClose,
  DialogTitle,
  DialogSubtitle,
  DialogDescription,
  DialogContent,
  DialogLink,
} from '@/components/core/dialog';
import { PlusIcon, XIcon } from 'lucide-react';

function DialogBasicExample() {
  return (
    <DialogRoot>
      <DialogTrigger className='w-[250px]'>
        <DialogContent className='flex flex-grow flex-row items-end justify-between p-2'>
          <div>
            <DialogTitle className='text-base'>Title</DialogTitle>
            <DialogSubtitle>Subtitle</DialogSubtitle>
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
          <DialogContent className='bg-white'>
            <DialogTitle>Title</DialogTitle>
            <DialogSubtitle>Subtitle</DialogSubtitle>
            <DialogDescription>dialog description</DialogDescription>
            <DialogLink url='https://ibelick.com/'>Link</DialogLink>
          </DialogContent>
          <DialogClose>
            <XIcon size={24} />
          </DialogClose>
        </div>
      </DialogContainer>
    </DialogRoot>
  );
}

export default DialogBasicExample;
