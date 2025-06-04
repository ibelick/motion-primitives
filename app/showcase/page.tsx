import { AnimatedGroup } from '@/components/core/animated-group';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/website/header';
import LaunchBanner from '@/components/website/launch-banner';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'zola.chat',
    description:
      'The open-source interface for AI chat. Self-hostable, developer-first, and model-agnostic.',
    href: 'https://www.zola.chat',
    thumbnail: 'https://www.zola.chat/cover_zola.webp',
  },
  {
    title: 'prompt-kit',
    description: 'AI-powered chatbot for your website',
    href: 'https://www.prompt-kit.com',
    thumbnail: 'https://www.prompt-kit.com/opengraph-image.jpg',
  },
  {
    title: 'oonkoo',
    description:
      "Transform your business with OonkoO's cutting-edge digital solutions. We specialize in web development, mobile apps, and enterprise solutions.",
    href: 'https://oonkoo.com',
    thumbnail: 'https://www.oonkoo.com/og-image.png',
  },
  {
    title: 'Turbostarter',
    description:
      'Turbostarter is a platform for creating and managing your startup.',
    href: 'https://www.turbostarter.dev/',
    thumbnail: 'https://www.turbostarter.dev/opengraph-image.png',
  },
  {
    title: 'Devraj Chatribin — Software Engineer | UI/UX Designer',
    description:
      'Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.',
    href: 'https://devrajchatribin.com',
    thumbnail: 'https://devrajchatribin.com/opengraph-image.png',
  },
];

export default function Showcase() {
  return (
    <>
      <LaunchBanner />
      <Header />
      <div className='px-6 pb-16 lg:px-8'>
        <div className='mx-auto md:max-w-7xl'>
          <main className='max-w-full min-w-0 flex-1'>
            <div className='relative mx-auto mt-20 max-w-md pb-16 text-center'>
              <h1 className='text-sm font-medium text-[#0D74CE] dark:text-[#70B8FF]'>
                Showcase
              </h1>
              <p className='mt-6 mb-4 text-3xl text-zinc-950 dark:text-zinc-50'>
                Building something great with motion-primitives?
              </p>
              <Link
                href='https://github.com/ibelick/motion-primitives/issues/new?title=Showcase+submission:&body=Please+add+your+project+to+the+showcase+by+opening+a+PR+and+editing+the+file+`app/showcase/page.tsx`.+Follow+this+format%3A%0A%0A```ts%0A%7B%0A++title%3A+%27Your+Project+Name%27%2C%0A++description%3A+%27Short+description+of+your+project.%27%2C%0A++href%3A+%27https%3A%2F%2Fyourwebsite.com%27%2C%0A++thumbnail%3A+%27https%3A%2F%2Fyourwebsite.com%2Fpreview.png%27%2C%0A%7D%0A```%0A%0AOnce+done%2C+submit+your+PR+for+review.'
                target='_blank'
              >
                <Button className='mt-2'>
                  Submit your project <ArrowRightIcon className='size-4' />
                </Button>
              </Link>
            </div>
            <AnimatedGroup
              className='mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2'
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
              {projects.map((project) => (
                <div className='relative isolate w-full overflow-hidden rounded-2xl max-md:aspect-1200/630 md:h-56'>
                  <Image
                    priority
                    src={project.thumbnail}
                    alt={project.title}
                    unoptimized
                    width={1200}
                    height={630}
                    className='h-full w-full object-cover'
                  />

                  <div
                    aria-hidden
                    className='absolute bottom-2 left-2 rounded-[6px] bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white'
                  >
                    {project.title}
                  </div>

                  <Link
                    href={`${project.href}?utm_source=motion-primitives.com&utm_medium=referral`}
                    target='_blank'
                    className='absolute inset-0'
                  >
                    <span className='sr-only'>Visit {project.title}</span>
                  </Link>
                </div>
              ))}
              <div className='rounded-2xl bg-zinc-100 max-md:aspect-1200/630 md:h-56 dark:bg-zinc-900'></div>
            </AnimatedGroup>
          </main>
        </div>
      </div>
    </>
  );
}
