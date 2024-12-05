import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/core/dialog';

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger className='bg-zinc-950 px-4 py-2 text-white hover:bg-zinc-900'>
        Open Dialog
      </DialogTrigger>
      <DialogContent className='w-full max-w-md p-6'>
        <DialogHeader>
          <DialogTitle>Subscribe to our Newsletter</DialogTitle>
          <DialogDescription>
            Enter your email address to receive latest updates.
          </DialogDescription>
        </DialogHeader>
        <div className='mt-6 flex flex-col space-y-4'>
          <label htmlFor='name' className='sr-only'>
            Email
          </label>
          <input
            id='name'
            type='email'
            className='h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-zinc-900 outline-none focus:ring-2 focus:ring-black/5'
            placeholder='Enter your email'
          />
          <button
            className='inline-flex items-center justify-center self-end rounded-lg bg-black px-4 py-2 font-medium text-zinc-50'
            type='submit'
          >
            Subscribe
          </button>
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
