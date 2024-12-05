import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/core/dialog';
import { Variants, Transition } from 'motion/react';

export function DialogCustomExit() {
  const customVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
  };

  const customTransition: Transition = {
    type: 'spring',
    bounce: 0,
    duration: 0.25,
  };

  return (
    <Dialog variants={customVariants} transition={customTransition}>
      <DialogTrigger className='bg-zinc-950 px-4 py-2 text-sm text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100'>
        Join the waitlist
      </DialogTrigger>
      <DialogContent className='w-full max-w-md bg-white p-6 dark:bg-zinc-900'>
        <DialogHeader>
          <DialogTitle className='text-zinc-900 dark:text-white'>
            Join the waitlist
          </DialogTitle>
          <DialogDescription className='text-zinc-600 dark:text-zinc-400'>
            Enter your email address to receive updates when we launch.
          </DialogDescription>
        </DialogHeader>
        <div className='mt-6 flex flex-col space-y-4'>
          <label htmlFor='name' className='sr-only'>
            Email
          </label>
          <input
            id='name'
            type='email'
            className='h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5'
            placeholder='Enter your email'
          />
          <button
            className='inline-flex items-center justify-center self-end rounded-lg bg-black px-4 py-2 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900'
            type='submit'
          >
            Join now
          </button>
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
