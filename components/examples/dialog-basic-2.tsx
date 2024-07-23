import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
} from '@/components/core/dialog';

export function DialogBasicTwo() {
  return (
    <Dialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className='bg-gray-100'
      >
        <div className='flex items-center space-x-2 p-2'>
          <DialogImage
            src='https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg'
            alt='Profile picture'
            className='h-12'
            style={{
              borderRadius: '4px',
            }}
          />
          <div className='flex flex-col items-start justify-center space-y-1'>
            <DialogTitle className='text-xs font-medium text-black'>
              What I Talk About When I Talk About Running
            </DialogTitle>
            <DialogSubtitle className='text-xs text-gray-600'>
              Haruki Murakami
            </DialogSubtitle>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        style={{
          borderRadius: '12px',
        }}
        className='relative w-[500px] border border-gray-100 bg-white'
      >
        <div className='relative p-6'>
          <div className='px-20 py-10'>
            <DialogImage
              src='https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg'
              alt='Profile picture'
              className='w-full'
            />
          </div>
          <div className=''>
            <DialogTitle className='font-medium text-black'>
              What I Talk About When I Talk About Running
            </DialogTitle>
            <DialogSubtitle className='text-gray-600'>
              Haruki Murakami
            </DialogSubtitle>
            <button
              type='button'
              className='relative mt-2 flex h-7 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-[4px] border border-gray-950/10 px-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:ring-2'
            >
              Read more
            </button>
          </div>
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
