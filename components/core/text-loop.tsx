'use client';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, Transition, Variants } from 'framer-motion';
import React from 'react';
import { useState, useEffect } from 'react';

type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants;
};

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);

  useEffect(() => {
    const intervalMs = interval * 1000;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div className={cn('relative inline-block', className)}>
      <div className='overflow-hidden whitespace-nowrap'>
        <AnimatePresence mode='popLayout' initial={false}>
          <motion.div
            key={currentIndex}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={transition}
            variants={variants || motionVariants}
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function TextLoopBasic() {
  return (
    <TextLoop>
      <span>What can I help with?</span>
      <span>Generate a logo</span>
      <span>Create a component</span>
      <span>Draw a diagram</span>
    </TextLoop>
  );
}

export function TextLoopCustomVariantsTransition() {
  return (
    <p className='inline-flex whitespace-pre-wrap'>
      Animate{' '}
      <TextLoop
        className='overflow-y-clip'
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
          animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: 'blur(4px)',
            position: 'absolute',
            left: 0,
          },
        }}
      >
        <span>Text</span>
        <span>Loop</span>
        <span>Component</span>
        <span>Example</span>
      </TextLoop>
    </p>
  );
}

export function TextLoopCustomVariantsTransition2() {
  return (
    <p className='inline-flex whitespace-pre-wrap text-black'>
      The perfect UI kit for{' '}
      <TextLoop
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 1, scale: 0 },
        }}
      >
        <span>developers</span>
        <span>designers</span>
        <span>design engineers</span>
        <span>founders</span>
      </TextLoop>
    </p>
  );
}
