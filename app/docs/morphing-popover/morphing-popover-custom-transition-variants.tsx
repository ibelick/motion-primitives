import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from '@/components/core/morphing-popover';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import * as motion from 'motion/react-client';

export function MorphingPopoverCustomTransitionVariants() {
  return (
    <MorphingPopover
      variants={{
        initial: { opacity: 0, filter: 'blur(10px)' },
        animate: { opacity: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, filter: 'blur(10px)' },
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
    >
      <MorphingPopoverTrigger asChild>
        <Button variant='outline'>
          <motion.span
            layoutId='morphing-popover-custom-transition-variants-label'
            layout='position'
            className='inline-block'
          >
            Open popover
          </motion.span>
        </Button>
      </MorphingPopoverTrigger>
      <MorphingPopoverContent className='w-80 p-4 shadow-sm'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <motion.h4
              layoutId='morphing-popover-custom-transition-variants-label'
              layout='position'
              className='leading-none font-medium'
            >
              Dimensions
            </motion.h4>
            <p className='text-muted-foreground text-sm'>
              Set the dimensions for the layer.
            </p>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>Width</Label>
              <Input
                id='width'
                defaultValue='100%'
                className='col-span-2 h-8'
                autoFocus
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxWidth'>Max. width</Label>
              <Input
                id='maxWidth'
                defaultValue='300px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='height'>Height</Label>
              <Input
                id='height'
                defaultValue='25px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxHeight'>Max. height</Label>
              <Input
                id='maxHeight'
                defaultValue='none'
                className='col-span-2 h-8'
              />
            </div>
          </div>
        </div>
      </MorphingPopoverContent>
    </MorphingPopover>
  );
}
