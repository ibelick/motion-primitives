import path from 'path';
import { Schema } from './registry-schema';

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
};

export const components: ComponentDefinition[] = [
  {
    name: 'accordion',
    path: path.join(__dirname, '../components/core/accordion.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'animated-background',
    path: path.join(__dirname, '../components/core/animated-background.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'animated-group',
    path: path.join(__dirname, '../components/core/animated-group.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'animated-number',
    path: path.join(__dirname, '../components/core/animated-number.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'border-trail',
    path: path.join(__dirname, '../components/core/border-trail.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'carousel',
    path: path.join(__dirname, '../components/core/carousel.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'cursor',
    path: path.join(__dirname, '../components/core/cursor.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'dialog',
    path: path.join(__dirname, '../components/core/dialog.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'disclosure',
    path: path.join(__dirname, '../components/core/disclosure.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'in-view',
    path: path.join(__dirname, '../components/core/in-view.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'infinite-slider',
    path: path.join(__dirname, '../components/core/infinite-slider.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'transition-panel',
    path: path.join(__dirname, '../components/core/transition-panel.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'text-effect',
    path: path.join(__dirname, '../components/core/text-effect.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'text-loop',
    path: path.join(__dirname, '../components/core/text-loop.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'text-morph',
    path: path.join(__dirname, '../components/core/text-morph.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'text-roll',
    path: path.join(__dirname, '../components/core/text-roll.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'text-scramble',
    path: path.join(__dirname, '../components/core/text-scramble.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'text-shimmer',
    path: path.join(__dirname, '../components/core/text-shimmer.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'text-shimmer-wave',
    path: path.join(__dirname, '../components/core/text-shimmer-wave.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'magnetic',
    path: path.join(__dirname, '../components/core/magnetic.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'morphing-dialog',
    path: path.join(__dirname, '../components/core/morphing-dialog.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'dock',
    path: path.join(__dirname, '../components/core/dock.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'glow-effect',
    path: path.join(__dirname, '../components/core/glow-effect.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'image-comparison',
    path: path.join(__dirname, '../components/core/image-comparison.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'toolbar-dynamic',
    path: path.join(__dirname, '../components/core/toolbar-dynamic.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'toolbar-expandable',
    path: path.join(__dirname, '../components/core/toolbar-expandable.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'popover',
    path: path.join(__dirname, '../components/core/popover.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'scroll-progress',
    path: path.join(__dirname, '../components/core/scroll-progress.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'spotlight',
    path: path.join(__dirname, '../components/core/spotlight.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'spinning-text',
    path: path.join(__dirname, '../components/core/spinning-text.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
  {
    name: 'tilt',
    path: path.join(__dirname, '../components/core/tilt.tsx'),
    registryDependencies: [],
    dependencies: ['motion'],
  },
];
