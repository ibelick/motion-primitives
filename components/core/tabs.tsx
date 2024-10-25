'use client';

import { createContext, useContext, useId, useMemo, useState } from 'react';
import { motion, Transition } from 'framer-motion';
import { cn } from '@/lib/utils';

type TTabsContext = {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  uniqueId: string;
};

type TTabsProps = {
  children: React.ReactNode;
  defaultTab?: string;
  className?: string;
  onValueChange?: (tabId: string) => void;
  value?: string;
};

type TTabsListProps = {
  children: React.ReactNode;
  className?: string;
};

type TTabsTriggerProps = {
  children: React.ReactNode;
  tabId: string;
  className?: string;
  Transition?: Transition;
};

type TTabsContentProps = {
  children: React.ReactNode;
  tabId: string;
  forceMount?: boolean;
};

const TabsContext = createContext<TTabsContext | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

// Tabs Root
export default function Tabs({
  children,
  defaultTab,
  className,
  onValueChange,
  value,
}: TTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? '');
  const uniqueId = useId();

  const handleSetActiveTab = (tabId: string) => {
    !value && setActiveTab(tabId);
    return onValueChange?.(tabId);
  };

  const values = useMemo(
    () => ({
      activeTab: value ?? activeTab,
      setActiveTab: handleSetActiveTab,
      uniqueId,
    }),
    [activeTab, uniqueId, value]
  );

  return (
    <TabsContext.Provider value={values}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
}

const TabsList = ({ children, className }: TTabsListProps) => {
  return (
    <div className={cn('flex gap-3', className)} role='tablist'>
      {children}
    </div>
  );
};

const TabsTrigger = ({
  children,
  tabId,
  className,
  Transition = { type: 'spring', bounce: 0.2, duration: 0.6 },
}: TTabsTriggerProps) => {
  const { activeTab, setActiveTab, uniqueId } = useTabs();

  const isActive = activeTab === tabId;
  return (
    <button
      className={cn(
        'relative rounded-md bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400',
        {
          'text-zinc-900 dark:text-zinc-100': isActive,
        },
        className
      )}
      aria-selected={isActive}
      aria-controls={`tabpanel-${tabId}-${uniqueId}`}
      role='tab'
      onClick={() => setActiveTab(tabId)}
    >
      {isActive && (
        <motion.span
          transition={Transition}
          className='absolute inset-0 z-10 h-full w-full rounded-md bg-zinc-200 dark:bg-zinc-800'
          layoutId={`tab-trigger-${uniqueId}`}
        />
      )}

      <span className='relative z-20'>{children}</span>
    </button>
  );
};

const TabsContent = ({ children, tabId, forceMount }: TTabsContentProps) => {
  const { activeTab, uniqueId } = useTabs();
  if (activeTab !== tabId && !forceMount) return null;

  return (
    <div id={`tabpanel-${tabId}-${uniqueId}`} role='tabpanel'>
      {children}
    </div>
  );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
