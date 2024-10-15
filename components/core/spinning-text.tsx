'use client';
import { motion } from 'framer-motion';
import React, { CSSProperties, useMemo } from 'react';

type SpinningTextProps = {
  children: string;
  size?: number;
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
};

export function SpinningText({
  children,
  duration = 10,
  style,
  className = '',
  reverse = false,
  fontSize = 1,
  radius = 5,
}: SpinningTextProps) {
  const letters = children.split('');
  const totalLetters = letters.length;

  return (
    <motion.div
      className={className}
      style={{
        position: 'relative',
        ...style,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <span aria-hidden='true'>
        {letters.map((letter, index) => (
          <span
            key={`${index}-${letter}`}
            className='absolute left-1/2 top-1/2 inline-block'
            style={
              {
                '--index': index,
                '--total': totalLetters,
                '--font-size': fontSize,
                '--radius': radius,
                fontSize: `calc(var(--font-size, 2) * 1rem)`,
                transform: `translate(-50%, -50%) rotate(calc(360deg / var(--total) * var(--index))) translateY(calc(var(--radius, 5) * -1ch))`,
                transformOrigin: 'center',
              } as React.CSSProperties
            }
          >
            {letter}
          </span>
        ))}
      </span>
      <span className='sr-only'>{children}</span>
    </motion.div>
  );
}
