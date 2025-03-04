'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const Tabs = TabsPrimitive.Root;

const TabsContext = React.createContext<string>('');

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ ...props }, ref) => {
  const uniqueId = React.useId();
  return (
    <TabsContext.Provider value={uniqueId}>
      <Tabs ref={ref} {...props} />
    </TabsContext.Provider>
  );
});

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 w-full items-center justify-start border-b border-zinc-200 bg-transparent text-zinc-900 dark:border-zinc-800 dark:text-zinc-50',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    classNameIndicator?: string;
  }
>(({ className, children, classNameIndicator, ...props }, ref) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = React.useState(false);
  const tabsId = React.useContext(TabsContext);

  React.useEffect(() => {
    const element = triggerRef.current;
    if (element) {
      setIsActive(element.dataset.state === 'active');

      const observer = new MutationObserver(() => {
        setIsActive(element.dataset.state === 'active');
      });

      observer.observe(element, { attributes: true });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <TabsPrimitive.Trigger
      ref={triggerRef}
      className={cn(
        'ring-offset-background focus-visible:ring-ring group relative inline-flex h-10 items-center justify-center rounded-none bg-transparent px-4 py-1 pt-2 pb-3 text-sm font-medium whitespace-nowrap text-zinc-500 transition-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-zinc-950 dark:text-zinc-500 dark:data-[state=active]:text-white',
        className
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layout
          className='absolute bottom-0 flex h-0.5 w-full justify-center'
          transition={{
            type: 'spring',
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
          layoutId={`underline-${tabsId}`}
        >
          <div
            className={cn(
              'h-0.5 w-4/5 bg-zinc-950 dark:bg-white',
              classNameIndicator
            )}
          />
        </motion.div>
      )}
      {children}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'focus-visible:ring-ring relative mt-2 rounded-md ring-offset-blue-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent };
