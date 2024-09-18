import Link from 'next/link';
import React from 'react';
import { DialogBasicOne } from '@/components/examples/dialog-basic-1';
import XIcon from '@/components/website/icons/x';
import GitHubIcon from '@/components/website/icons/github';
import ThemeSwitch from '@/components/website/theme-switch';
import Popover from '@/components/core/popover';
import ToolbarExpandable from '@/components/core/toolbar-expandable';
import ToolbarDynamic from '@/components/core/toolbar-dynamic';
import { ChevronRight } from 'lucide-react';
import { CardExampleLanding } from '@/components/website/card-example-landing';
import { AnimatedGroupPreset } from '@/components/examples/animated-group-preset';
import { TextEffectWithExit } from '@/components/examples/text-effect-exit';
import { InViewImagesGrid } from '@/components/examples/in-view-images-grid';
import { InfiniteSliderHoverSpeed } from '@/components/examples/infinite-slider-hover-speed';
import { Cursor1 } from '@/components/examples/cursor-1';
import { CarouselCustomSizes } from '@/components/examples/carousel-custom-sizes';
import { CarouselSpacing } from '@/components/examples/carousel-spacing';
import { SegmentedControl } from '@/components/examples/segmented-control';

function Button({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const buttonVariants = {
    primary:
      'bg-zinc-50 border border-zinc-100 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-50 dark:border-zinc-900',
    secondary:
      'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950',
  };

  return (
    <button
      className={`inline-flex items-center rounded-md px-2.5 py-1.5 text-sm ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}

function Header() {
  return (
    <header className='relative top-0 z-10 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <a href='/' className='relative flex items-center'>
          <div className='text-zinc-950 dark:text-white'>motion-primitives</div>
          <span className='mb-4 ml-2 select-none rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-50'>
            beta
          </span>
        </a>
        <nav className='flex items-center gap-2'>
          <a
            href='https://twitter.com/Ibelick'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-9 w-9 items-center justify-center'
          >
            <XIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
          </a>
          <a
            href='https://github.com/ibelick/motion-primitives'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-9 w-9 items-center justify-center'
          >
            <GitHubIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
          </a>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}

export default function Motion() {
  return (
    <>
      <Header />
      <div className='px-6 py-4 pb-20'>
        <section className='flex h-full flex-col items-center justify-center pt-20'>
          <div className='flex w-full max-w-lg flex-col items-center justify-center text-center'>
            <h1 className='relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50'>
              Build beautiful animated components
            </h1>
            <p className='text-center text-zinc-600 dark:text-zinc-200'>
              Beautifully designed motions components. Easy copy-paste.
              Customizable. Open Source. Built for engineers and designers.
            </p>
          </div>
          <div className='flex items-center space-x-4 py-6'>
            <Link href='/docs'>
              <Button>
                Explore Docs
                <ChevronRight className='ml-1.5 h-4 w-4 fill-white dark:fill-zinc-950' />
              </Button>
            </Link>
            <a
              href='https://github.com/ibelick/motion-primitives'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='secondary'>
                <GitHubIcon className='mr-1.5 h-4 w-4 fill-white dark:fill-zinc-950' />
                Star on GitHub
              </Button>
            </a>
          </div>
          <span className='mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400'>
            Free updates and new components released regularly.
          </span>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <DialogBasicOne />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding hasReTrigger>
            <AnimatedGroupPreset />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding hasReTrigger>
            <TextEffectWithExit />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding hasReTrigger>
            <InViewImagesGrid />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding className='px-0'>
            <InfiniteSliderHoverSpeed />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <Cursor1 />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding >
            <CarouselSpacing />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <Popover />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <ToolbarDynamic />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <SegmentedControl />
          </CardExampleLanding>
        </section>
        <div className='text-center text-sm text-zinc-500 dark:text-zinc-400'>
          <Link href='/docs'>and more...</Link>
        </div>
      </div>
    </>
  );
}
