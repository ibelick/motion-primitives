'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

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
      <p className='mb-2 text-sm'>On this page</p>
      <ul
        className='mt-3.5 list-none space-y-3 text-sm/6 text-zinc-700 dark:text-zinc-400'
        role='list'
      >
        {headings.map((heading) => (
          <li key={heading.id} className=''>
            <a
              href={`#${heading.id}`}
              className='hover:text-zinc-950 dark:hover:text-white'
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
