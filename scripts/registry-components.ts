import path from 'path';
import { Schema, RegistryType } from './registry-schema';

type ComponentDefinition = Partial<
  Pick<
    Schema,
    | 'dependencies'
    | 'devDependencies'
    | 'registryDependencies'
    | 'cssVars'
    | 'tailwind'
  >
> & {
  name: string;
  path: string;
  description: string;
  files?: {
    name: string;
    path: string;
    type?: RegistryType;
  }[];
};

export const components: ComponentDefinition[] = [
  {
    name: 'accordion',
    path: path.join(__dirname, '../components/core/accordion.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A collapsible content component with smooth animations for showing and hiding content.',
  },
  {
    name: 'animated-background',
    path: path.join(__dirname, '../components/core/animated-background.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that provides animated background effects for UI elements.',
  },
  {
    name: 'animated-group',
    path: path.join(__dirname, '../components/core/animated-group.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A container component that applies coordinated animations to a group of child elements.',
  },
  {
    name: 'animated-number',
    path: path.join(__dirname, '../components/core/animated-number.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that animates number changes with smooth transitions.',
  },
  {
    name: 'border-trail',
    path: path.join(__dirname, '../components/core/border-trail.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'An effect that creates animated border trails around elements on interaction.',
  },
  {
    name: 'carousel',
    path: path.join(__dirname, '../components/core/carousel.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component for cycling through elements with smooth transitions.',
  },
  {
    name: 'cursor',
    path: path.join(__dirname, '../components/core/cursor.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A custom cursor component with animated effects and interactions.',
  },
  {
    name: 'dialog',
    path: path.join(__dirname, '../components/core/dialog.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A modal dialog component with smooth entrance and exit animations.',
    files: [
      {
        name: 'hooks/usePreventScroll.tsx',
        path: path.join(__dirname, '../hooks/usePreventScroll.tsx'),
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'disclosure',
    path: path.join(__dirname, '../components/core/disclosure.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that shows and hides content with animated transitions.',
  },
  {
    name: 'in-view',
    path: path.join(__dirname, '../components/core/in-view.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that triggers animations when elements enter the viewport.',
  },
  {
    name: 'infinite-slider',
    path: path.join(__dirname, '../components/core/infinite-slider.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'react-use-measure'],
    description:
      'A slider component that loops infinitely through its content.',
  },
  {
    name: 'transition-panel',
    path: path.join(__dirname, '../components/core/transition-panel.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A panel component with smooth transitions between different states.',
  },
  {
    name: 'text-effect',
    path: path.join(__dirname, '../components/core/text-effect.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description: 'A component that applies animated effects to text content.',
  },
  {
    name: 'text-loop',
    path: path.join(__dirname, '../components/core/text-loop.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that cycles through different text phrases with animations.',
  },
  {
    name: 'text-morph',
    path: path.join(__dirname, '../components/core/text-morph.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that morphs between different text strings with smooth transitions.',
  },
  {
    name: 'text-roll',
    path: path.join(__dirname, '../components/core/text-roll.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description: 'A component that animates text with a rolling effect.',
  },
  {
    name: 'text-scramble',
    path: path.join(__dirname, '../components/core/text-scramble.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that creates a scrambling text effect during transitions.',
  },
  {
    name: 'text-shimmer',
    path: path.join(__dirname, '../components/core/text-shimmer.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description: 'A component that applies a shimmering effect to text.',
  },
  {
    name: 'text-shimmer-wave',
    path: path.join(__dirname, '../components/core/text-shimmer-wave.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description: 'A component that creates a wave-like shimmer effect on text.',
  },
  {
    name: 'magnetic',
    path: path.join(__dirname, '../components/core/magnetic.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that creates a magnetic attraction effect on hover.',
  },
  {
    name: 'morphing-dialog',
    path: path.join(__dirname, '../components/core/morphing-dialog.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A dialog that morphs from its trigger element with smooth transitions.',
    files: [
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'morphing-popover',
    path: path.join(__dirname, '../components/core/morphing-popover.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A popover component that morphs from its trigger with fluid animations.',
    files: [
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'dock',
    path: path.join(__dirname, '../components/core/dock.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A macOS-style dock component with scaling and movement effects.',
  },
  {
    name: 'glow-effect',
    path: path.join(__dirname, '../components/core/glow-effect.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that creates a glowing effect on elements based on cursor movement.',
  },
  {
    name: 'image-comparison',
    path: path.join(__dirname, '../components/core/image-comparison.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component for comparing two images with an interactive slider.',
  },
  {
    name: 'toolbar-dynamic',
    path: path.join(__dirname, '../components/core/toolbar-dynamic.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A toolbar component with dynamic appearance based on user interaction.',
    files: [
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'toolbar-expandable',
    path: path.join(__dirname, '../components/core/toolbar-expandable.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'react-use-measure'],
    description:
      'An expandable toolbar that reveals additional options with animations.',
    files: [
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'progressive-blur',
    path: path.join(__dirname, '../components/core/progressive-blur.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that applies progressive blur effects to elements.',
  },
  {
    name: 'scroll-progress',
    path: path.join(__dirname, '../components/core/scroll-progress.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that visualizes scroll progress with animated indicators.',
  },
  {
    name: 'sliding-number',
    path: path.join(__dirname, '../components/core/sliding-number.tsx'),
    registryDependencies: [],
    dependencies: ['motion', 'react-use-measure'],
    description:
      'A component that transitions between numbers with a sliding animation.',
  },
  {
    name: 'spotlight',
    path: path.join(__dirname, '../components/core/spotlight.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that creates a spotlight effect following cursor movement.',
  },
  {
    name: 'spinning-text',
    path: path.join(__dirname, '../components/core/spinning-text.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that animates text with a spinning rotation effect.',
  },
  {
    name: 'tilt',
    path: path.join(__dirname, '../components/core/tilt.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
    description:
      'A component that applies 3D tilt effects to elements based on cursor position.',
  },
];
