import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';

export function AccordionBasic() {
  return (
    <Accordion className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'>
      <AccordionItem value='getting-started'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          Getting Started
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
      <AccordionItem value='animation-properties'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          Animation Properties
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
      <AccordionItem value='advanced-usage'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          Advanced Usage
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
      <AccordionItem value='community-and-support'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          Community and Support
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
