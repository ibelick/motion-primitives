'use client';
import React, { useRef, useState, useCallback } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
  spotlightSize?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  transition?: {
    type?: 'spring' | 'tween';
    stiffness?: number;
    damping?: number;
    duration?: number;
  };
};
export function Spotlight({
  children,
  className = '',
  spotlightSize = 200,
  color = 'rgba(255, 255, 255, 0.85)',
  opacity = 0.15,
  blur = 40,
  transition = { type: 'spring', stiffness: 400, damping: 25 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, transition);
  const mouseY = useSpring(0, transition);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <motion.div
      ref={containerRef}
      className={cn("relative overflow-hidden transition-transform duration-300 ease-in-out", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
     <motion.div
        className="pointer-events-none absolute"
        style={{
          width: spotlightSize,
          height: spotlightSize,
          background: `radial-gradient(circle ${spotlightSize}px at center, ${color}, transparent 80%)`,
          opacity: isHovered ? opacity : 0,
          left: useTransform(mouseX, (x) => `${x - spotlightSize / 2}px`),
          top: useTransform(mouseY, (y) => `${y - spotlightSize / 2}px`),
          filter: `blur(${blur}px)`,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      {children}
    </motion.div>
  );
}