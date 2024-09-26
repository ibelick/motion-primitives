'use client';
import { cn } from '@/lib/utils';
import { cloneElement, useState } from 'react';
import { RotateCw } from 'lucide-react';

export function CardExampleLanding({
  children,
  className,
  hasReTrigger,
}: {
  children: React.ReactElement;
  className?: string;
  hasReTrigger?: boolean;
}) {
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

  const reTrigger = () => {
    setReTriggerKey(Date.now());
  };

  return (
    <div className='relative -mx-6 sm:mx-0'>
      <div className='pointer-events-none absolute left-0 top-[-100px] z-[-1] h-full w-full bg-[radial-gradient(100%_100%_at_50%_50%,hsl(0deg_0%_100%/8%)_0,hsl(0deg_0%_100%/2%)_50%)] blur-2xl md:left-[-100px] md:h-[calc(100%+200px)] md:w-[calc(100%+200px)]' />
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl bg-zinc-50 p-4 shadow-[0px_0px_0px_1px_theme(colors.zinc.100),0px_2px_2px_0px_theme(colors.zinc.50)] dark:border dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none',
          className
        )}
      >
        {hasReTrigger && (
          <div
            className='absolute right-4 top-3 cursor-pointer'
            onClick={reTrigger}
          >
            <RotateCw className='h-4 w-4 text-zinc-500' />
          </div>
        )}
        <div className='flex h-[350px] items-center justify-center'>
          {hasReTrigger
            ? cloneElement(children, { key: reTriggerKey })
            : children}
        </div>
      </div>
    </div>
  );
}
