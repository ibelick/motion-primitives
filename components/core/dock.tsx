'use client';

import {
  motion,
  MotionValue,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from 'framer-motion';
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { cn } from '@/lib/utils';

/** Constants */
const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
/** End of constants */

/** Types */
type TDock = {
  className?: string;
  children: React.ReactNode;
  spring?: SpringOptions;
  magnification?: number;
  distance?: number;
};
type TDockItem = {
  className?: string;
  children: React.ReactNode;
};
type TDockLabel = {
  className?: string;
  children: React.ReactNode;
};
type TDockIcon = {
  className?: string;
  children: React.ReactNode;
};

type DocContextType = {
  mouseX: MotionValue;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};
type DockProviderProps = {
  children: React.ReactNode;
  value: DocContextType;
};
/** End of types */

/** Context */
const DockContext = createContext<DocContextType | undefined>(undefined);

function DockProvider({ children, value }: DockProviderProps) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}
/** End of context */

/** Hooks */
function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within an DockProvider');
  }
  return context;
}
/** End of hooks */

function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}: TDock) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const height = useTransform(
    isHovered,
    [0, 1],
    ['auto', Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4)]
  );

  return (
    <motion.div
      style={{
        height: height,
        scrollbarWidth: 'none',
      }}
      className='mx-2 flex max-w-full items-end overflow-x-auto'
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          'mx-auto flex h-16 w-fit items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 dark:bg-neutral-900',
          className
        )}
        role='toolbar'
        aria-label='Application dock'
      >
        <DockProvider value={{ mouseX, spring, distance, magnification }}>
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

function DockItem({ children, className }: TDockItem) {
  const ref = useRef<HTMLDivElement>(null);

  const { distance, magnification, mouseX, spring } = useDock();

  // To control hovered animation for label
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - domRect.x - domRect.width / 2;
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        'relative inline-flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800',
        className
      )}
      tabIndex={0}
      role='button'
      aria-haspopup='true'
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement, { width, isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className, ...rest }: TDockLabel) {
  const restProps = rest as Record<string, unknown>;
  const isHovered = restProps['isHovered'] as MotionValue<number>;

  const labelAnimation = useAnimation();

  useEffect(() => {
    const unsubscribe = isHovered.on('change', (latest) => {
      if (latest === 1) {
        labelAnimation.start({ opacity: 1, y: -10 });
      } else {
        labelAnimation.start({ opacity: 0, y: 0 });
      }
    });

    return () => unsubscribe();
  }, [isHovered, labelAnimation]);

  return (
    <motion.div
      animate={labelAnimation}
      initial={{ x: '-50%', opacity: 0, y: 0 }}
      className={cn(
        'absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white',
        className
      )}
      role='tooltip'
    >
      {children}
    </motion.div>
  );
}

function DockIcon({ children, className, ...rest }: TDockIcon) {
  const restProps = rest as Record<string, unknown>;
  const width = restProps['width'] as MotionValue<number>;

  const widthTransform = useTransform(width, (val) => val / 2);

  return (
    <motion.div
      style={{ width: widthTransform }}
      className={cn('flex items-center justify-center', className)}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };
