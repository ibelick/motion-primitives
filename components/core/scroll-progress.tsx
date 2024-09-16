"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';


interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        'fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#90e96d] via-[#e85193] to-[#dc8112]',
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}
