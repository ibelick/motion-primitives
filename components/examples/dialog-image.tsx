import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
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
          src='https://64.media.tumblr.com/a56381366ceaab29b760aabe5e88df07/f3b5e9af4d3103f3-97/s2048x3072/caec6beeee2cbeb80b05e88c917b187926749703.jpg'
          alt='Sony Style Store in the Sony Center complex - Berlin, Germany (2000)'
          className='max-w-xs'
        />
      </DialogTrigger>
      <DialogContent className='relative'>
        <DialogImage
          src='https://64.media.tumblr.com/a56381366ceaab29b760aabe5e88df07/f3b5e9af4d3103f3-97/s2048x3072/caec6beeee2cbeb80b05e88c917b187926749703.jpg'
          alt='Sony Style Store in the Sony Center complex - Berlin, Germany (2000)'
          className='h-[90vh] w-full max-w-[90vw] object-cover'
        />
        <DialogClose
          className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className='h-5 w-5 text-zinc-500' />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
