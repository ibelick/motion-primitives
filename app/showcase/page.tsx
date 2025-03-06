import { AnimatedGroup } from '@/components/core/animated-group';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/website/header';
import LaunchBanner from '@/components/website/launch-banner';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Showcase() {
  return (
    <>
      <LaunchBanner />
      <Header />
      <div className='px-6 lg:px-8'>
        <div className='mx-auto md:max-w-7xl'>
          <main className='max-w-full min-w-0 flex-1'>
            <div className='relative mx-auto mt-20 max-w-md pb-16 text-center'>
              <h1 className='text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]'>
                Showcase
              </h1>
              <p className='mt-6 mb-4 text-3xl text-zinc-950 dark:text-zinc-50'>
                Building something great with motion-primitives?
              </p>
              <Link href='https://forms.gle/TYMK7RmuvKtqg33U9' target='_blank'>
                <Button className='mt-2'>
                  Submit your project <ArrowRightIcon className='size-4' />
                </Button>
              </Link>
            </div>
            <AnimatedGroup
              className='mx-auto grid max-w-5xl grid-cols-1 gap-6 [mask-image:linear-gradient(to_bottom,black_30%,transparent)] md:grid-cols-2 lg:grid-cols-3'
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: 'blur(4px)',
                    scale: 0.8,
                  },
                  visible: { opacity: 1, filter: 'blur(0px)', scale: 1 },
                },
              }}
            >
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
              <div className='h-48 rounded-2xl bg-zinc-100 dark:bg-zinc-900'></div>
            </AnimatedGroup>
          </main>
        </div>
      </div>
    </>
  );
}
