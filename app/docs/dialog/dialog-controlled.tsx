'use client';
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/core/dialog';
import { useState } from 'react';

export function DialogControlled() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} type='button'>
        Open Dialog
      </button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
    </div>
  );
}
