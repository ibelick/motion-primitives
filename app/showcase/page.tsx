import { Header } from '@/components/website/header';
import LaunchBanner from '@/components/website/launch-banner';

export default function Showcase() {
  return (
    <>
      <LaunchBanner />
      <Header />
      <div className='px-6 lg:px-8'>
        <div className='mx-auto md:max-w-7xl'>
          <main className='min-w-0 max-w-full flex-1'>
            <div className='relative mx-auto mt-20 max-w-md pb-16 text-center'>
              <h1 className='text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]'>
                Showcase
              </h1>
              <p className='mb-4 mt-6 text-3xl text-zinc-950 dark:text-zinc-50'>
                Building something great with motion-primitives?
              </p>
              <p className='text-base text-zinc-600 dark:text-zinc-200'>
                I’d love to feature it! Send me a DM on{' '}
                <a
                  href='https://x.com/ibelick'
                  target='_blank'
                  className='text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200'
                >
                  X
                </a>{' '}
                or email me at{' '}
                <a
                  href='mailto:julien.thibeaut@gmail.com'
                  className='text-zinc-950 underline hover:text-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-200'
                >
                  julien.thibeaut@gmail.com
                </a>
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
