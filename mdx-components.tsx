import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';

const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || '');
      return (
        <h1 id={id} data-heading='1' {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || '');
      return (
        <h2 id={id} data-heading='2' {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || '');
      return (
        <h3 id={id} data-heading='3' {...props}>
          {children}
        </h3>
      );
    },
    h4: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || '');
      return (
        <h4 id={id} data-heading='4' {...props}>
          {children}
        </h4>
      );
    },
  };
}
