import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './components/website/tabs';
import { InstallationCli } from './components/website/installation-cli';
import CodeBlock from './components/website/code-block';

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
      <TabsContent className={cn(className)} {...props} />
    ),
    table: ({ className, ...props }: React.ComponentProps<'table'>) => (
      <div className='not-prose relative w-full table-auto overflow-auto rounded-lg border border-zinc-200 text-sm dark:border-zinc-800'>
        <table className={cn('w-full', className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }: React.ComponentProps<'thead'>) => (
      <thead
        className={cn(
          'bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100',
          className
        )}
        {...props}
      />
    ),
    tbody: ({ className, ...props }: React.ComponentProps<'tbody'>) => (
      <tbody
        className={cn(
          'divide-y divide-zinc-200 dark:divide-y dark:divide-zinc-600',
          className
        )}
        {...props}
      />
    ),
    tr: ({ className, ...props }: React.ComponentProps<'tr'>) => (
      <tr className={cn('h-10', className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<'th'>) => (
      <th
        className={cn('px-4 pb-0 text-left align-middle font-[450]', className)}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.ComponentProps<'td'>) => (
      <td
        className={cn('px-4 py-2 text-left align-middle', className)}
        {...props}
      />
    ),
    CodeBlock: ({
      className,
      ...props
    }: React.ComponentProps<typeof CodeBlock>) => (
      <CodeBlock className={cn(className)} {...props} />
    ),
    InstallationCli: ({
      ...props
    }: React.ComponentProps<typeof InstallationCli>) => (
      <InstallationCli {...props} />
    ),
  };
}
