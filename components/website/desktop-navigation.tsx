'use client';
import { ScrollArea } from '@/components/website/scroll-area';
import { NAVIGATION } from '@/lib/navigation-links';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function NavigationDesktop() {
    const pathname = usePathname();

    return (
        <aside className='sticky hidden h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 pt-8 md:block lg:pt-12'>
            <ScrollArea>
                <nav>
                    <ul role='list' className='h-full'>
                        {NAVIGATION.map((item, index) => {
                            return (
                                <li className='mb-6' key={`${item.name}-${index}`}>
                                    <div className='text-sm/6 font-medium text-zinc-950 dark:text-white'>
                                        {item.name}
                                    </div>
                                    <ul
                                        role='list'
                                        className='mt-4 space-y-3.5 border-l border-zinc-200 dark:border-zinc-800'
                                    >
                                        {item.children.map((child) => {
                                            const isActive = pathname === child.href;

                                            return (
                                                <li key={child.href}>
                                                    <Link
                                                        className={cn(
                                                            'relative inline-flex items-center space-x-1 pl-4 text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white',
                                                            isActive &&
                                                            'text-zinc-950 before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full before:bg-zinc-950 dark:text-white dark:before:bg-white'
                                                        )}
                                                        href={child.href}
                                                    >
                                                        <span>{child.name}</span>
                                                        {child?.isNew && (
                                                            <span className='whitespace-nowrap rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold text-emerald-800'>
                                                                New
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </ScrollArea>
        </aside>
    );
}
