import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './components/website/tabs';

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
    Step: ({ className, children, ...props }: React.ComponentProps<'h3'>) => (
      <h3
        id={generateId(children?.toString() || '')}
        className={cn('step', className)}
        data-heading='3'
        {...props}
      >
        {children}
      </h3>
    ),
    Steps: ({ ...props }) => (
      <div
        className='steps mb-12 ml-4 border-l pl-8 [counter-reset:step]'
        {...props}
      />
    ),
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn('relative mt-6 w-full', className)} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList className={cn(className)} {...props} />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger className={cn(className)} {...props} />
    ),
    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent className={cn('border-none', className)} {...props} />
    ),
  };
}
