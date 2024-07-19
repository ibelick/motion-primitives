'use client';

import React, { useEffect, useId, useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

const transition = {
  type: 'spring',
  bounce: 0.05,
  duration: 0.3,
};

type WithClassName = {
  className?: string;
};

type WithUrl = {
  url?: string;
};

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
}

const DialogContext = React.createContext<DialogContextType | null>(null);

const DialogRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen, uniqueId }}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogContext.Provider>
  );
};

const DialogTrigger: React.FC<React.PropsWithChildren<WithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(DialogContext);
  if (!context)
    throw new Error('DialogTrigger must be used within a DialogRoot');

  return (
    <motion.div
      className={cn('relative cursor-pointer', className)}
      initial='initial'
      whileHover='animate'
      animate={context.isOpen ? 'open' : 'closed'}
      onClick={() => context.setIsOpen(!context.isOpen)}
    >
      <motion.div
        layoutId={`dialog-${context.uniqueId}`}
        className={cn(
          'bg-card border-border flex flex-col overflow-hidden border bg-white'
        )}
        style={{ borderRadius: context.isOpen ? '24px' : '12px' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const DialogContainer: React.FC<React.PropsWithChildren<WithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(DialogContext);
  if (!context)
    throw new Error('DialogContent must be used within a DialogRoot');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (context.isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        context.setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [context.isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence initial={false} mode='sync'>
      {context.isOpen && (
        <>
          <motion.div
            key={`backdrop-${context.uniqueId}`}
            className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm dark:bg-white/40'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => context.setIsOpen(false)}
          />
          <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <motion.div
              layoutId={`dialog-${context.uniqueId}`}
              className={cn(
                'bg-card w-full max-w-lg overflow-hidden',
                className
              )}
              style={{ borderRadius: '24px' }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

const DialogImage: React.FC<{
  src: string;
  alt?: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const context = React.useContext(DialogContext);
  if (!context) throw new Error('DialogImage must be used within a DialogRoot');

  return (
    <motion.div
      layoutId={`dialog-img-${context.uniqueId}`}
      className={cn(className)}
    >
      <img src={src} alt={alt} className={cn('h-auto w-full')} />
    </motion.div>
  );
};

const DialogTitle: React.FC<React.PropsWithChildren<WithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(DialogContext);
  if (!context) throw new Error('DialogTitle must be used within a DialogRoot');

  return (
    <motion.div
      layoutId={`dialog-title-${context.uniqueId}`}
      className={cn('text-2xl text-zinc-950 dark:text-zinc-50', className)}
      layout
    >
      {children}
    </motion.div>
  );
};

const DialogSubtitle: React.FC<React.PropsWithChildren<WithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(DialogContext);
  if (!context)
    throw new Error('DialogSubtitle must be used within a DialogRoot');

  return (
    <motion.div
      layoutId={`dialog-subtitle-${context.uniqueId}`}
      className={cn('text-primary', className)}
      layout
    >
      {children}
    </motion.div>
  );
};

const DialogDescription: React.FC<React.PropsWithChildren<WithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(DialogContext);
  if (!context)
    throw new Error('DialogDescription must be used within a DialogRoot');

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: 0.2, ...transition }}
    >
      {children}
    </motion.div>
  );
};

const DialogContent: React.FC<React.PropsWithChildren<WithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(DialogContext);
  if (!context)
    throw new Error('DialogContent must be used within a DialogRoot');

  return (
    <motion.div
      className={cn('p-6', className)}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const DialogClose: React.FC<React.PropsWithChildren<WithClassName>> = ({
  children,
  className,
}) => {
  const context = React.useContext(DialogContext);
  if (!context) throw new Error('DialogClose must be used within a DialogRoot');

  return (
    <button
      onClick={() => context.setIsOpen(false)}
      className={cn('text-primary absolute right-6 top-6', className)}
      type='button'
      aria-label='Close dialog'
    >
      {children}
    </button>
  );
};

const DialogLink: React.FC<
  React.PropsWithChildren<WithClassName> & WithUrl
> = ({ children, className, url }) => {
  const context = React.useContext(DialogContext);
  if (!context) throw new Error('DialogLink must be used within a DialogRoot');

  return (
    <motion.a
      className={cn(
        'text-muted-foreground mt-2 inline-flex underline',
        className
      )}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      {children}
    </motion.a>
  );
};

export {
  DialogRoot,
  DialogTrigger,
  DialogContainer,
  DialogClose,
  DialogImage,
  DialogTitle,
  DialogSubtitle,
  DialogDescription,
  DialogContent,
  DialogLink,
};
