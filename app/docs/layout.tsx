'use client';
import { ScrollArea } from '@/components/website/scroll-area';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { TableOfContents } from '@/components/website/table-of-contents';
import LaunchBanner from '@/components/website/launch-banner';
import { Header } from '@/components/website/header';
import { motion } from 'motion/react';
import { NAVIGATION } from './navigation';

function NavigationDesktop() {
  const pathname = usePathname();
  const activeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
      });
    }
  }, [pathname]);

  return (
    <aside className='sticky top-14 hidden h-[calc(100dvh-(--spacing(16)))] w-[220px] shrink-0 pt-8 md:block lg:pt-12'>
      <ScrollArea className='h-full w-full'>
        <nav>
          <ul
            role='list'
            className='h-full pb-9 [&>li:not(:first-child)>div]:pt-6'
          >
            {NAVIGATION.map((item, index) => {
              return (
                <li key={`${item.name}-${index}`}>
                  <div className='relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-[450] text-zinc-950 dark:bg-zinc-950 dark:text-white'>
                    {item.name}
                  </div>
                  <ul
                    role='list'
                    className='space-y-3.5 border-l border-zinc-200 dark:border-zinc-800'
                  >
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;

                      return (
                        <li key={child.href} ref={isActive ? activeRef : null}>
                          <Link
                            className={cn(
                              'relative inline-flex items-center pl-4 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white',
                              isActive && 'text-zinc-950'
                            )}
                            href={child.href}
                          >
                            {isActive && (
                              <motion.div
                                layout
                                className='absolute top-0 -left-[1px] -z-1 h-full w-0.5 rounded-[4px] bg-zinc-950 dark:bg-white'
                                transition={{
                                  type: 'spring',
                                  stiffness: 26.7,
                                  damping: 4.1,
                                  mass: 0.2,
                                }}
                                layoutId='underline-sidebar'
                              />
                            )}
                            <span>{child.name}</span>
                            {child?.isNew && (
                              <span className='ml-2 rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold whitespace-nowrap text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50'>
                                New
                              </span>
                            )}
                            {child?.isUpdated && (
                              <span className='ml-2 rounded-lg bg-amber-100 px-2 text-[10px] font-semibold whitespace-nowrap text-amber-800 dark:bg-amber-950 dark:text-amber-50'>
                                Updated
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

function NavigationMobile() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedHref, setSelectedHref] = React.useState(pathname);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = e.target.value;
    setSelectedHref(href);
    router.push(href);
  };

  return (
    <div className='block w-full pt-8 md:hidden'>
      <select
        className='block w-full appearance-none rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white'
        value={selectedHref}
        onChange={handleChange}
      >
        {NAVIGATION.map((item) => {
          return (
            <optgroup label={item.name} key={item.name}>
              {item.children.map((child) => (
                <option key={child.href} value={child.href}>
                  {child.name}
                </option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
}

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className='px-6 lg:px-8'>
        <div className='mx-auto md:max-w-7xl'>
          <div className='mx-auto flex w-full flex-col items-start md:flex-row md:space-x-12'>
            <NavigationDesktop />
            <NavigationMobile />
            <main className='prose prose-zinc dark:prose-invert prose-h1:scroll-m-20 prose-h1:text-2xl prose-h1:font-semibold prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-xl prose-h2:font-medium prose-h3:scroll-m-20 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-20 prose-h5:scroll-m-20 prose-h6:scroll-m-20 prose-strong:font-medium prose-table:block prose-table:overflow-y-auto mr-0 max-w-full min-w-0 flex-1 pt-8 pb-16 lg:pt-12 xl:mr-12 xl:max-w-2xl'>
              {children}
            </main>
            <aside className='sticky top-14 hidden h-[calc(100dvh-(--spacing(16)))] w-[220px] shrink-0 pt-8 lg:pt-12 xl:block'>
              <ScrollArea className='h-full w-full'>
                <TableOfContents />
              </ScrollArea>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
