'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'motion/react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import useMeasure from 'react-use-measure';

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [containerRef, { width: containerWidth, height }] = useMeasure();
  const [contentRef, { width: contentWidth }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const [duplicatedContent, setDuplicatedContent] = useState<React.ReactNode[]>(
    []
  );

  // Calculate required duplicates
  const calculateDuplicates = useCallback(() => {
    if (!containerWidth || !contentWidth) return [];

    const requiredWidth = containerWidth * 2;
    const copiesNeeded = Math.ceil(requiredWidth / contentWidth);
    return Array(copiesNeeded)
      .fill(null)
      .map((_, i) =>
        React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, {
            key: `${i}-${index}-${child?.toLocaleString()}`,
          })
        )
      )
      .flat();
  }, [containerWidth, contentWidth, children]);

  useEffect(() => {
    setDuplicatedContent(calculateDuplicates());
  }, [calculateDuplicates]);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? containerWidth : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentSpeed,
    containerWidth,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <motion.div className={cn('overflow-hidden', className)} ref={containerRef}>
      {/* Hidden measurement element */}
      <div
        ref={contentRef}
        style={{ position: 'absolute', visibility: 'hidden' }}
      >
        {children}
      </div>

      {/* Actual slider */}
      <motion.div
        ref={contentRef}
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        {...hoverProps}
      >
        {duplicatedContent}
      </motion.div>
    </motion.div>
  );
}
