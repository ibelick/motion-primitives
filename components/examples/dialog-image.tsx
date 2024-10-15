import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from '@/components/core/dialog';
import { XIcon } from 'lucide-react';

export function DialogBasicImage() {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <DialogTrigger>
        <DialogImage
          src='https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Sony Style Store in the Sony Center complex - Berlin, Germany (2000)'
          className='max-w-xs rounded-[4px]'
        />
      </DialogTrigger>
      <DialogContainer>
        <DialogContent className='relative'>
          <DialogImage
            src='https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Sony Style Store in the Sony Center complex - Berlin, Germany (2000)'
            className='h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]'
          />
        </DialogContent>
        <DialogClose
          className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className='h-5 w-5 text-zinc-500' />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  );
}
