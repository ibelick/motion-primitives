'use client';

import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className='inline-flex h-9 w-9 items-center justify-center'
          aria-label='Toggle theme'
          type='button'
        >
          {theme === 'light' ? (
            <SunIcon className='h-4 w-4' />
          ) : (
            <MoonIcon className='h-4 w-4' />
          )}
          <span className='sr-only'>Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
