import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from '@/components/core/dialog';

export function DialogCustomBackdrop() {
  return (
    <Dialog>
      <DialogTrigger className='bg-zinc-950 px-4 py-2 text-sm text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100'>
        Join the waitlist
      </DialogTrigger>
      <DialogContent className='w-full max-w-md p-6 shadow-[0_4px_12px_#0000001a] backdrop:bg-white/80 backdrop:backdrop-blur-xs'>
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
            className='h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-hidden focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm'
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
