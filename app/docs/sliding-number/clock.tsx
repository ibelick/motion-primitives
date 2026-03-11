'use client';
import { SlidingNumber } from '@/components/core/sliding-number';
import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center gap-0.5 font-mono'>
      <SlidingNumber value={time.getHours()} padStart={true} />
      <span className='text-zinc-500'>:</span>
      <SlidingNumber value={time.getMinutes()} padStart={true} />
      <span className='text-zinc-500'>:</span>
      <SlidingNumber value={time.getSeconds()} padStart={true} />
    </div>
  );
}
