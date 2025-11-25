import Link from 'next/link';
import React from 'react';
import { MorphingDialogBasicOne } from '@/app/docs/morphing-dialog/morphing-dialog-basic-1';
import XIcon from '@/components/website/icons/x';
import GitHubIcon from '@/components/website/icons/github';
import ThemeSwitch from '@/components/website/theme-switch';
import { MorphingPopoverTextarea } from '@/app/docs/morphing-popover/morphing-popover-textarea';
import { ChevronRight } from 'lucide-react';
import { CardExampleLanding } from '@/components/website/card-example-landing';
import { AnimatedGroupPreset } from '@/app/docs/animated-group/animated-group-preset';
import { InViewImagesGrid } from '@/app/docs/in-view/in-view-images-grid';
import { InfiniteSliderHoverSpeed } from '@/app/docs/infinite-slider/infinite-slider-hover-speed';
import { Cursor1 } from '@/app/docs/cursor/cursor-1';
import { SegmentedControl } from '@/app/docs/animated-background/segmented-control';
import { MPLogo } from '@/components/website/icons/motion-primitives-logo';
import LaunchBanner from '@/components/website/launch-banner';
import { TextLoopBasic } from './docs/text-loop/text-loop-basic';
import { TextShimmerBasic } from './docs/text-shimmer/text-shimmer-basic';
import { BorderTrailCard1 } from './docs/border-trail/border-trail-card-1';
import { TextEffectSpeed } from './docs/text-effect/text-effect-speed';
import { TextScrambleBasic } from './docs/text-scramble/text-scramble-basic';
import { ProBadge } from '@/components/website/header';

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
    <header className='relative top-0 z-10 bg-white px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0 dark:border-white/10 dark:bg-zinc-950'>
      <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
        <a href='/' className='relative flex items-center space-x-2'>
          <MPLogo className='h-6 w-auto' />
          <div className='text-sm font-medium text-zinc-950 dark:text-white'>
            motion-primitives
          </div>
          <span className='mb-4 ml-0 rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50 select-none'>
            beta
          </span>
        </a>

        <div className='flex items-center space-x-6'>
          <nav className='hidden items-center space-x-6 sm:flex'>
            <a
              href='https://www.prompt-kit.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden items-center text-sm font-medium text-zinc-700 hover:text-zinc-950 md:inline-flex dark:text-zinc-300 dark:hover:text-white'
            >
              IA
            </a>
            <a
              href='https://pro.motion-primitives.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden items-center text-sm font-medium text-zinc-700 hover:text-zinc-950 md:inline-flex dark:text-zinc-300 dark:hover:text-white'
            >
              Advanced
            </a>
            <Link
              href='/docs/text-effect'
              className='text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
            >
              Components
            </Link>
          </nav>
          <div className='hidden h-8 w-[0.5px] bg-zinc-200 sm:flex dark:bg-zinc-800' />
          <nav className='flex items-center space-x-2'>
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
              UI kit to make beautiful, animated interfaces, faster.
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
                <ChevronRight className='ml-1.5 h-4 w-4' />
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
            <MorphingDialogBasicOne />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding hasReTrigger>
            <AnimatedGroupPreset />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding
            className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'
            hasReTrigger
          >
            <TextEffectSpeed />
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
          <CardExampleLanding className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'>
            <TextLoopBasic />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'>
            <TextShimmerBasic />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding
            className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'
            hasReTrigger
          >
            <TextScrambleBasic />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <MorphingPopoverTextarea />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <BorderTrailCard1 />
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
