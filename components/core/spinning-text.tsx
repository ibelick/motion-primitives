'use client';
import { motion } from 'framer-motion';
import React, { CSSProperties, ReactElement } from 'react';

// Define the props types for the SpinningText component
interface SpinningTextProps {
  children: ReactElement;
  width?: number;
  textStyle?: CSSProperties;
  degree?: number;
}

export const SpinningText: React.FC<SpinningTextProps> = ({
  children,
  width = 200,
  textStyle = {},
  degree = 180,
}) => {
  const textEl = children.props.children || children.props.content || '';
  const toArr = typeof textEl === 'string' ? textEl.split('') : [];
  console.log(toArr);
  const fraction = degree / toArr.length;

  return (
    <motion.div
      className='border-3 relative flex items-center justify-center rounded-full border-current'
      style={{
        height: `${width}px`,
        width: `${width}px`,
      }}
      animate={{ rotate: 360 }} // Rotate the entire circle
      transition={{
        duration: 10, // Full rotation time
        ease: 'linear',
        repeat: Infinity, // Infinite rotation
      }}
    >
      <div className='absolute h-full w-full'>
        {toArr.map((v, i) => (
          <span
            className='absolute'
            key={i}
            style={{
              transform: `rotate(${fraction * i}deg)`,
              transformOrigin: `0 ${width / 2}px`,
              top: 0,
              left: '50%',
              color: 'inherit', // Adjust text color as needed
              ...textStyle, // Apply custom text styles
            }}
          >
            {v}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
