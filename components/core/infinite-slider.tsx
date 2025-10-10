'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  fillElements?: boolean;
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
  fillElements = true,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [containerRef, { width: containerWidth, height }] = useMeasure();
  const [contentRef, { width: contentWidth, height: contentHeight }] =
    useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const contentSize =
      (direction === 'horizontal' ? contentWidth : contentHeight) + gap;
    const from = reverse ? -contentSize : 0;
    const to = reverse ? 0 : -contentSize;

    const duration = Math.abs(contentSize) / currentSpeed;

    if (isTransitioning) {
      const current = translation.get();
      controls = animate(translation, [current, to], {
        ease: 'linear',
        duration: Math.abs(to - current) / currentSpeed,
        onComplete: () => {
          setIsTransitioning(false);
          translation.set(from);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentSpeed,
    contentWidth,
    contentHeight,
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
        key={key}
        className='flex w-max'
        style={{
          [direction === 'horizontal' ? 'x' : 'y']: translation,
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        {...hoverProps}
      >
        {fillElements ? (
          <GetFillesElements
            containerWidth={containerWidth}
            height={height}
            contentHeight={contentHeight}
            contentWidth={contentWidth}
            direction={direction}
          >
            {children}
          </GetFillesElements>
        ) : (
          <>
            {children}
            {children}
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

// Calculate filled children based on container and content size
const GetFillesElements = ({
  children,
  containerWidth,
  contentHeight,
  contentWidth,
  direction,
  height,
}: {
  containerWidth: number;
  contentWidth: number;
  height: number;
  contentHeight: number;
  direction: 'horizontal' | 'vertical';
  children: React.ReactNode;
}) => {
  if (!containerWidth || !contentWidth) return [];

  const requiredSize =
    direction === 'horizontal' ? containerWidth * 2 : height * 2;
  const contentSize = direction === 'horizontal' ? contentWidth : contentHeight;
  if (contentSize === 0) return [];

  const copiesNeeded = Math.ceil(requiredSize / contentSize) + 1; // +1 to ensure enough coverage
  return Array(copiesNeeded)
    .fill(null)
    .map((_, i) =>
      React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          key: `duplicate-${i}-${index}`,
        })
      )
    )
    .flat();
};
