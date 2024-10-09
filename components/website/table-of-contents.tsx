'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Heading = {
  id: string;
  text: string;
  level: number;
};

// can be improved
export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll('h2, h3, h4')).map(
        (elem) => ({
          id: elem.id,
          text: elem.textContent ?? '',
          level: Number(elem.tagName.charAt(1)),
        })
      );
      setHeadings(elements);
    };

    updateHeadings();
  }, [pathname]);

  return (
    <>
      <p className='mb-2 text-sm text-black dark:text-white'>On this page</p>
      <ul
        className='list-none space-y-2 text-sm/6 text-zinc-700 dark:text-zinc-400'
        role='list'
        key={headings.map((heading) => heading.id).join('-')}
      >
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              heading.level === 1 && 'pl-0',
              heading.level === 2 && 'pl-0',
              heading.level === 3 && 'pl-2',
              heading.level === 4 && 'pl-4'
            )}
          >
            <a
              href={`#${heading.id}`}
              className={cn('hover:text-zinc-950 dark:hover:text-white')}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
