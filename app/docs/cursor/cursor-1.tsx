'use client';
import { useRef, useState } from 'react';
import { Cursor } from '@/components/core/cursor';
import { AnimatePresence, motion } from 'motion/react';
import { PlusIcon } from 'lucide-react';

export function Cursor1() {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <div className='flex h-[400px] w-full items-center justify-center'>
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        onPositionChange={handlePositionChange}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 16,
            height: isHovering ? 32 : 16,
          }}
          className='flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40'
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='inline-flex w-full items-center justify-center'
              >
                <div className='inline-flex items-center text-sm text-white dark:text-black'>
                  More <PlusIcon className='ml-1 h-4 w-4' />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </Cursor>
      <div ref={targetRef}>
        <img
          src='https://i.pinimg.com/564x/75/3c/3f/753c3f1a9f85871ffa7a7a78bcf49f66.jpg'
          alt='Olympic logo Paris 2024'
          className='h-52 w-full max-w-48 rounded-[8px] border border-zinc-100 object-cover'
        />
      </div>
    </div>
  );
}
