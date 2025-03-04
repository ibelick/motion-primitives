import { cn } from '@/lib/utils';
import * as React from 'react';
import type { SVGProps } from 'react';

export function ShadcnLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      width={70}
      height={70}
      className={cn('text-zinc-950 dark:text-white', props.className)}
      fill='none'
      {...props}
    >
      <rect width='256' height='256' fill='none'></rect>
      <line
        x1='208'
        y1='128'
        x2='128'
        y2='208'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
      ></line>
      <line
        x1='192'
        y1='40'
        x2='40'
        y2='192'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
      ></line>
    </svg>
  );
}
