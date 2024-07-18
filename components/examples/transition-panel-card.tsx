'use client';
import React, { useState } from 'react';
import { TransitionPanel } from '@/components/core/transition-panel';
import useMeasure from 'react-use-measure';

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='relative flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800'
    >
      {children}
    </button>
  );
}

export function TransitionPanelCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, bounds] = useMeasure();

  const FEATURES = [
    {
      title: 'Brand',
      description:
        'Develop a distinctive brand identity with tailored logos and guidelines to ensure consistent messaging across all platforms.',
    },
    {
      title: 'Product',
      description:
        'Design and refine products that excel in user experience, meeting needs effectively and creating memorable interactions. We specialize in web applications.',
    },
    {
      title: 'Website',
      description:
        'Create impactful websites that combine beautiful aesthetics with functional design, ensuring a superior online presence.',
    },
    {
      title: 'Design System',
      description:
        'Develop a design system that unifies your brand identity, ensuring consistency across all platforms and products.',
    },
  ];

  return (
    <div className='w-[364px] overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700'>
      <TransitionPanel
        activeIndex={activeIndex}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        variants={{
          enter: {
            opacity: 0,
            x: 364,
            height: bounds.height,
            filter: 'blur(4px)',
          },
          center: { opacity: 1, x: 0, height: 'auto', filter: 'blur(0px)' },
          exit: {
            opacity: 0,
            x: -364,
            height: bounds.height,
            filter: 'blur(4px)',
          },
        }}
      >
        {FEATURES.map((feature, index) => (
          <div key={index} className='px-4 pt-4' ref={ref}>
            <h3 className='mb-0.5 font-medium text-zinc-800 dark:text-zinc-100'>
              {feature.title}
            </h3>
            <p className='text-zinc-600 dark:text-zinc-400'>
              {feature.description}
            </p>
          </div>
        ))}
      </TransitionPanel>
      <div className='flex justify-between p-4'>
        {activeIndex > 0 ? (
          <Button onClick={() => setActiveIndex(activeIndex - 1)}>
            Previous
          </Button>
        ) : (
          <div />
        )}
        {activeIndex === FEATURES.length - 1 ? (
          <Button onClick={() => {}}>Close</Button>
        ) : (
          <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
        )}
      </div>
    </div>
  );
}
