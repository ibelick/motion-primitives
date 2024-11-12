'use client';
import { cn } from '@/lib/utils';
import { useState, createContext, useContext } from 'react';
import {
  motion,
  MotionValue,
  SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

const ImageComparisonContext = createContext<
  | {
      sliderPosition: number;
      setSliderPosition: (pos: number) => void;
      motionSliderPosition: MotionValue<number>;
    }
  | undefined
>(undefined);

type ImageComparisonProps = {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
  springOptions?: SpringOptions;
};

const DEFAULT_SPRING_OPTIONS = {
  bounce: 0,
  duration: 0,
};

export function ImageComparison({
  children,
  className,
  enableHover,
  springOptions,
}: ImageComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const motionValue = useMotionValue(50);
  const motionSliderPosition = useSpring(
    motionValue,
    springOptions ?? DEFAULT_SPRING_OPTIONS
  );
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && !enableHover) return;

    const containerRect = (
      event.currentTarget as HTMLElement
    ).getBoundingClientRect();
    const x =
      'touches' in event
        ? event.touches[0].clientX - containerRect.left
        : (event as React.MouseEvent).clientX - containerRect.left;

    const percentage = Math.min(
      Math.max((x / containerRect.width) * 100, 0),
      100
    );
    motionValue.set(percentage);
    setSliderPosition(percentage);
  };

  return (
    <ImageComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition }}
    >
      <div
        className={cn(
          'relative select-none overflow-hidden',
          enableHover && 'cursor-ew-resize',
          className
        )}
        onMouseMove={handleDrag}
        onMouseDown={() => !enableHover && setIsDragging(true)}
        onMouseUp={() => !enableHover && setIsDragging(false)}
        onMouseLeave={() => !enableHover && setIsDragging(false)}
        onTouchMove={handleDrag}
        onTouchStart={() => !enableHover && setIsDragging(true)}
        onTouchEnd={() => !enableHover && setIsDragging(false)}
      >
        {children}
      </div>
    </ImageComparisonContext.Provider>
  );
}

const ImageComparisonImage = ({
  className,
  alt,
  src,
  position,
}: {
  className?: string;
  alt: string;
  src: string;
  position: 'left' | 'right';
}) => {
  const { motionSliderPosition } = useContext(ImageComparisonContext)!;
  const leftClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 0 0 ${value}%)`
  );
  const rightClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 ${100 - value}% 0 0)`
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn('absolute inset-0 h-full w-full object-cover', className)}
      style={{
        clipPath: position === 'left' ? leftClipPath : rightClipPath,
      }}
    />
  );
};

const ImageComparisonSlider = ({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}) => {
  const { motionSliderPosition } = useContext(ImageComparisonContext)!;

  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      className={cn('absolute bottom-0 top-0 w-1 cursor-ew-resize', className)}
      style={{
        left,
      }}
    >
      {children}
    </motion.div>
  );
};

export function ImageComparisonExample() {
  return (
    <ImageComparison className='h-64 w-[300px]'>
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/c06c0cf2-935f-4005-85ae-72615a6dc52a?format=jpeg'
        alt='img 1'
        position='left'
      />
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/c06c0cf2-935f-4005-85ae-72615a6dc52a?format=jpeg'
        alt='img 2'
        position='right'
        className='grayscale'
      />
      <ImageComparisonSlider className='bg-white' />
    </ImageComparison>
  );
}

export function ImageComparisonExample2() {
  return (
    <ImageComparison className='h-64 w-[300px]' enableHover>
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/4242876e-4ecb-4c2f-b0e3-faa10fc1b4ca?format=jpeg'
        alt='img 1'
        position='left'
      />
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/4242876e-4ecb-4c2f-b0e3-faa10fc1b4ca?format=jpeg'
        alt='img 2'
        className='sepia'
        position='right'
      />
      <ImageComparisonSlider className='bg-white' />
    </ImageComparison>
  );
}

export function ImageComparisonExample3() {
  return (
    <ImageComparison
      className='h-64 w-[300px] border border-zinc-200 dark:border-zinc-800 rounded-lg'
      enableHover
      springOptions={{
        bounce: 0.3,
      }}
    >
      <ImageComparisonImage
        src='/mp_dark.jpg'
        alt='Motion Primitives Dark'
        position='left'
      />
      <ImageComparisonImage
        src='/mp_light.jpg'
        alt='Motion Primitives Light'
        position='right'
        className='grayscale'
      />
      <ImageComparisonSlider className='bg-white' />
    </ImageComparison>
  );
}

export function ImageComparisonExample4() {
  return (
    <ImageComparison className='h-64 w-[300px]'>
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/b8a45229-b9e4-4273-9320-d19409184522?format=jpeg'
        alt='img 1'
        position='left'
      />
      <ImageComparisonImage
        src='https://images.beta.cosmos.so/b8a45229-b9e4-4273-9320-d19409184522?format=jpeg'
        alt='img 2'
        position='right'
        className='grayscale'
      />
      <ImageComparisonSlider className='w-2 bg-white/50 backdrop-blur-sm transition-colors hover:bg-white/80'>
        <div className='absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white' />
      </ImageComparisonSlider>
    </ImageComparison>
  );
}
