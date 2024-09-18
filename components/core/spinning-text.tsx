'use client';
import { motion } from 'framer-motion';
import React, { CSSProperties, ReactElement } from 'react';

interface SpinningTextProps {
  children: ReactElement;
  width?: number;
  textStyle?: CSSProperties;
  degree?: number;
  duration: number;
  className: string;
}

export const SpinningText: React.FC<SpinningTextProps> = ({
  children,
  duration = 10,
  width = 200,
  textStyle = {},
  degree = 180,
  className = children.props?.className || '',
}) => {
  const textEl = children.props?.children || children.props?.content || '';
  const toArr = typeof textEl === 'string' ? textEl.split('') : [];
  const fraction = degree / toArr.length;

  return (
    <motion.div
      className='relative flex items-center justify-center'
      style={{
        height: `${width}px`,
        width: `${width}px`,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <div className='absolute h-full w-full'>
        {toArr.map((v, i) => (
          <span
            className={`absolute ${className}`}
            key={i}
            style={{
              transform: `rotate(${fraction * i}deg)`,
              transformOrigin: `0 ${width / 2}px`,
              top: 0,
              left: '50%',
              color: 'inherit',
              ...textStyle,
            }}
          >
            {v}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
