type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

export const NAVIGATION: NavigationGroup[] = [
  {
    name: 'Getting started',
    children: [
      {
        name: 'Introduction',
        href: '/docs',
      },
      {
        name: 'Installation',
        href: '/docs/installation',
      },
    ],
  },
  {
    name: 'Core Components',
    children: [
      {
        name: 'Accordion',
        href: '/docs/accordion',
      },
      {
        name: 'Animated Background',
        href: '/docs/animated-background',
      },
      {
        name: 'Animated Group',
        href: '/docs/animated-group',
      },
      {
        name: 'Animated Number',
        href: '/docs/animated-number',
      },
      {
        name: 'Border Trail',
        href: '/docs/border-trail',
      },
      {
        name: 'Carousel',
        href: '/docs/carousel',
      },
      {
        name: 'Cursor',
        href: '/docs/cursor',
      },
      {
        name: 'Dialog',
        href: '/docs/dialog',
        isNew: true,
      },
      {
        name: 'Disclosure',
        href: '/docs/disclosure',
      },
      {
        name: 'In View',
        href: '/docs/in-view',
      },
      {
        name: 'Infinite Slider',
        href: '/docs/infinite-slider',
      },
      {
        name: 'Transition Panel',
        href: '/docs/transition-panel',
      },
    ],
  },
  {
    name: 'Text',
    children: [
      {
        name: 'Text Effect',
        href: '/docs/text-effect',
        isUpdated: true,
      },
      {
        name: 'Text Loop',
        href: '/docs/text-loop',
        isUpdated: true,
      },
      {
        name: 'Text Morph',
        href: '/docs/text-morph',
        isUpdated: true,
      },
      {
        name: 'Text Roll',
        href: '/docs/text-roll',
        isNew: true,
      },
      {
        name: 'Text Scramble',
        href: '/docs/text-scramble',
      },
      {
        name: 'Text Shimmer',
        href: '/docs/text-shimmer',
      },
      {
        name: 'Text Shimmer Wave',
        href: '/docs/text-shimmer-wave',
        isNew: true,
      },
    ],
  },
  {
    name: 'Extras Components',
    children: [
      {
        name: 'Dock',
        href: '/docs/dock',
      },
      {
        name: 'Glow Effect',
        href: '/docs/glow-effect',
        isNew: true,
      },
      {
        name: 'Image Comparison',
        href: '/docs/image-comparison',
      },
      {
        name: 'Toolbar Dynamic',
        href: '/docs/toolbar-dynamic',
      },
      {
        name: 'Toolbar Expandable',
        href: '/docs/toolbar-expandable',
      },
      {
        name: 'Popover',
        href: '/docs/popover',
      },
      {
        name: 'Scroll Progress',
        href: '/docs/scroll-progress',
      },
      {
        name: 'Spotlight',
        href: '/docs/spotlight',
      },
      {
        name: 'Spinning Text',
        href: '/docs/spinning-text',
      },
      {
        name: 'Tilt',
        href: '/docs/tilt',
      },
      {
        name: 'Magnetic',
        href: '/docs/magnetic',
        isNew: true,
      },
      {
        name: 'Morphing Dialog',
        href: '/docs/morphing-dialog',
      },
    ],
  },
];
