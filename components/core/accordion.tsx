'use client';
import {
  motion,
  AnimatePresence,
  Transition,
  Variants,
  Variant,
  MotionConfig,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AccordionContextType = {
  expandedValue: React.Key | null;
  toggleItem: (value: React.Key) => void;
  variants?: { expanded: Variant; collapsed: Variant };
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
}

type AccordionProviderProps = {
  children: ReactNode;
  variants?: { expanded: Variant; collapsed: Variant };
};

function AccordionProvider({ children, variants }: AccordionProviderProps) {
  const [expandedValue, setExpandedValue] = useState<React.Key | null>(null);

  const toggleItem = (value: React.Key) => {
    setExpandedValue(expandedValue === value ? null : value);
  };

  return (
    <AccordionContext.Provider value={{ expandedValue, toggleItem, variants }}>
      {children}
    </AccordionContext.Provider>
  );
}

type AccordionProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
  variants?: { expanded: Variant; collapsed: Variant };
};

function Accordion({
  children,
  className,
  transition,
  variants,
}: AccordionProps) {
  return (
    <MotionConfig transition={transition}>
      <div className={cn('relative', className)} aria-orientation='vertical'>
        <AccordionProvider variants={variants}>{children}</AccordionProvider>
      </div>
    </MotionConfig>
  );
}

type AccordionItemProps = {
  value: React.Key;
  children: ReactNode;
  className?: string;
};

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { expandedValue, toggleItem } = useAccordion();
  const isExpanded = value === expandedValue;

  return (
    <div
      className={cn('overflow-hidden', className)}
      {...(isExpanded ? { 'data-expanded': '' } : {})}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          expanded: isExpanded,
          onToggle: () => toggleItem(value),
        })
      )}
    </div>
  );
}

type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
  onToggle?: () => void;
  expanded?: boolean;
};

function AccordionTrigger({
  children,
  className,
  onToggle,
  expanded,
}: AccordionTriggerProps) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={expanded}
      type='button'
      className={cn('group', className)}
      {...(expanded ? { 'data-expanded': '' } : {})}
    >
      {children}
    </button>
  );
}

type AccordionContentProps = {
  children: ReactNode;
  expanded?: boolean;
  className?: string;
};

function AccordionContent({
  children,
  expanded,
  className,
}: AccordionContentProps) {
  const { variants } = useAccordion();
  const BASE_VARIANTS: Variants = {
    expanded: { height: 'auto' },
    collapsed: { height: 0 },
  };

  const combinedVariants = {
    expanded: { ...BASE_VARIANTS.expanded, ...variants?.expanded },
    collapsed: { ...BASE_VARIANTS.collapsed, ...variants?.collapsed },
  };

  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial='collapsed'
          animate='expanded'
          exit='collapsed'
          variants={combinedVariants}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
