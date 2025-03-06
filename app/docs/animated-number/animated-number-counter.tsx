'use client';
import { useState } from 'react';
import { AnimatedNumber } from '@/components/core/animated-number';
import { Minus, Plus } from 'lucide-react';

export function AnimatedNumberCounter() {
  const [value, setValue] = useState(1000);

  return (
    <div className='flex w-full items-center justify-center space-x-2 text-zinc-800 dark:text-zinc-50'>
      <button
        aria-label='Decrement'
        onClick={() => setValue((prev) => prev - 100)}
      >
        <Minus className='h-4 w-4' />
      </button>
      <AnimatedNumber
        className='inline-flex items-center font-mono text-2xl font-light'
        springOptions={{
          bounce: 0,
          duration: 1000,
        }}
        value={value}
      />
      <button
        aria-label='Increment'
        onClick={() => setValue((prev) => prev + 100)}
      >
        <Plus className='h-4 w-4' />
      </button>
    </div>
  );
}
