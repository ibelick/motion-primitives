import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { ChevronUp } from 'lucide-react';

export function AccordionIcons() {
  return (
    <Accordion
      className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <AccordionItem value='getting-started' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>Getting Started</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Discover the fundamental concepts of Motion-Primitives. This section
            guides you through the installation process and provides an overview
            of how to integrate these components into your projects. Learn about
            the core functionalities and how to set up your first animation
            effectively.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='animation-properties' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>Animation Properties</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Explore the comprehensive range of animation properties available in
            Motion-Primitives. Understand how to manipulate timing, easing, and
            delays to create smooth, dynamic animations. This segment also
            covers the customization of animations to fit the flow and style of
            your web applications.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='advanced-usage' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>Advanced Usage</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Dive deeper into advanced techniques and features of
            Motion-Primitives. Learn about chaining animations, creating complex
            sequences, and utilizing motion sensors for interactive animations.
            Gain insights on how to leverage these advanced features to enhance
            user experience and engagement.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='community-and-support' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>Community and Support</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Engage with the Motion-Primitives community to gain additional
            support and insight. Find out how to participate in discussions,
            contribute to the project, and access a wealth of shared knowledge
            and resources. Learn about upcoming features, best practices, and
            how to get help with your specific use cases.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
