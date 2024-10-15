'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, SpringOptions, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  children?: React.ReactNode;
  className?: string;
  spotlightSize?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  springOptions?: SpringOptions;
  attachToParent?: boolean;
};

export function Spotlight({
  children,
  className = '',
  spotlightSize = 200,
  color = 'rgba(255, 255, 255, 0.85)',
  opacity = 0.85,
  blur = 40,
  springOptions = { stiffness: 400, damping: 25 },
  attachToParent = false,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(!attachToParent);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(
    mouseX,
    (x) => `${x - spotlightSize / 2}px`
  );
  const spotlightTop = useTransform(
    mouseY,
    (y) => `${y - spotlightSize / 2}px`
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    }, [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (attachToParent) {
      setIsVisible(false);
    }
  }, [attachToParent]);

  useEffect(() => {
    if (attachToParent && containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
      }
    }
  }, [attachToParent]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className='pointer-events-none absolute'
        style={{
          width: spotlightSize,
          height: spotlightSize,
          borderRadius: '50%',
          background: `radial-gradient(circle ${spotlightSize}px at center, ${color}, transparent 80%)`,
          opacity: isHovered ? opacity : 0,
          left: spotlightLeft,
          top: spotlightTop,
          filter: `blur(${blur}px)`,
          transition: 'opacity 0.3s ease-in-out',
          display: isVisible ? 'block' : 'none',
        }}
          />
          {children}
        </div>
      );
    }
    