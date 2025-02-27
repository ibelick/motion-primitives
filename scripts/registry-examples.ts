import path from 'path';

type ExampleDefinition = {
  name: string;
  path: string;
  description: string;
  componentName: string;
  dependencies?: string[];
  files?: {
    name: string;
    path: string;
    type?: 'registry:hook' | 'registry:ui' | 'registry:lib';
  }[];
};

export const examples: ExampleDefinition[] = [
  {
    name: 'accordion-basic',
    path: path.join(__dirname, '../app/docs/accordion/accordion-basic.tsx'),
    description:
      'Basic implementation of the accordion component with default styles.',
    componentName: 'accordion-basic',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'accordion-icons',
    path: path.join(__dirname, '../app/docs/accordion/accordion-icons.tsx'),
    description:
      'Accordion implementation with custom icons that animate on state change.',
    componentName: 'accordion-icons',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'accordion-variant',
    path: path.join(__dirname, '../app/docs/accordion/accordion-variant.tsx'),
    description:
      'Styled variant of the accordion component with custom appearance.',
    componentName: 'accordion-variant',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'animated-card-background-hover',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/animated-card-background-hover.tsx'
    ),
    description: 'Card component with animated background effects on hover.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'animated-tabs-hover',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/animated-tabs-hover.tsx'
    ),
    description: 'Animated background tabs that respond to hover interactions.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'animated-tabs',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/animated-tabs.tsx'
    ),
    description:
      'Tab interface with animated background highlighting the active tab.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'segmented-control',
    path: path.join(
      __dirname,
      '../app/docs/animated-background/segmented-control.tsx'
    ),
    description:
      'Segmented control UI element with animated background transitions.',
    componentName: 'segmented-control',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(
          __dirname,
          '../components/core/animated-background.tsx'
        ),
      },
    ],
  },

  {
    name: 'animated-group-custom-variants-2',
    path: path.join(
      __dirname,
      '../app/docs/animated-group/animated-group-custom-variants-2.tsx'
    ),
    description:
      'Advanced custom variants for animated groups with additional animations.',
    componentName: 'animated-group-custom-variants-2',
    files: [
      {
        name: 'animated-group.tsx',
        path: path.join(__dirname, '../components/core/animated-group.tsx'),
      },
    ],
  },

  {
    name: 'animated-group-custom-variants',
    path: path.join(
      __dirname,
      '../app/docs/animated-group/animated-group-custom-variants.tsx'
    ),
    description: 'Custom animation variants for the animated group component.',
    componentName: 'animated-group-custom-variants',
    files: [
      {
        name: 'animated-group.tsx',
        path: path.join(__dirname, '../components/core/animated-group.tsx'),
      },
    ],
  },

  {
    name: 'animated-group-preset',
    path: path.join(
      __dirname,
      '../app/docs/animated-group/animated-group-preset.tsx'
    ),
    description: 'Preset animations for the animated group component.',
    componentName: 'animated-group-preset',
    files: [
      {
        name: 'animated-group.tsx',
        path: path.join(__dirname, '../components/core/animated-group.tsx'),
      },
    ],
  },

  {
    name: 'animated-number-basic',
    path: path.join(
      __dirname,
      '../app/docs/animated-number/animated-number-basic.tsx'
    ),
    description: 'Basic implementation of the animated number component.',
    componentName: 'animated-number-basic',
    files: [
      {
        name: 'animated-number.tsx',
        path: path.join(__dirname, '../components/core/animated-number.tsx'),
      },
    ],
  },

  {
    name: 'animated-number-counter',
    path: path.join(
      __dirname,
      '../app/docs/animated-number/animated-number-counter.tsx'
    ),
    description:
      'Animated counter implementation that smoothly transitions between numbers.',
    componentName: 'animated-number-counter',
    files: [
      {
        name: 'animated-number.tsx',
        path: path.join(__dirname, '../components/core/animated-number.tsx'),
      },
    ],
  },

  {
    name: 'animated-number-in-view',
    path: path.join(
      __dirname,
      '../app/docs/animated-number/animated-number-in-view.tsx'
    ),
    description: 'Animated number that activates when scrolled into view.',
    componentName: 'animated-number-in-view',
    dependencies: ['motion'],
    files: [
      {
        name: 'animated-number.tsx',
        path: path.join(__dirname, '../components/core/animated-number.tsx'),
      },
    ],
  },

  {
    name: 'border-trail-card-1',
    path: path.join(
      __dirname,
      '../app/docs/border-trail/border-trail-card-1.tsx'
    ),
    description: 'Card component with animated border trail effect.',
    componentName: 'border-trail-card-1',
    files: [
      {
        name: 'border-trail.tsx',
        path: path.join(__dirname, '../components/core/border-trail.tsx'),
      },
    ],
  },

  {
    name: 'border-trail-card-2',
    path: path.join(
      __dirname,
      '../app/docs/border-trail/border-trail-card-2.tsx'
    ),
    description: 'Enhanced card component with custom border trail animations.',
    componentName: 'border-trail-card-2',
    files: [
      {
        name: 'border-trail.tsx',
        path: path.join(__dirname, '../components/core/border-trail.tsx'),
      },
    ],
  },

  {
    name: 'border-trail-textarea',
    path: path.join(
      __dirname,
      '../app/docs/border-trail/border-trail-textarea.tsx'
    ),
    description: 'Text area input with animated border trail effect on focus.',
    componentName: 'border-trail-textarea',
    files: [
      {
        name: 'border-trail.tsx',
        path: path.join(__dirname, '../components/core/border-trail.tsx'),
      },
    ],
  },

  {
    name: 'carousel-basic',
    path: path.join(__dirname, '../app/docs/carousel/carousel-basic.tsx'),
    description: 'Basic implementation of the carousel component.',
    componentName: 'carousel-basic',
    files: [
      {
        name: 'carousel.tsx',
        path: path.join(__dirname, '../components/core/carousel.tsx'),
      },
    ],
  },

  {
    name: 'carousel-custom-indicator',
    path: path.join(
      __dirname,
      '../app/docs/carousel/carousel-custom-indicator.tsx'
    ),
    description: 'Carousel with custom indicators for navigation.',
    componentName: 'carousel-custom-indicator',
    files: [
      {
        name: 'carousel.tsx',
        path: path.join(__dirname, '../components/core/carousel.tsx'),
      },
    ],
  },

  {
    name: 'carousel-custom-sizes',
    path: path.join(
      __dirname,
      '../app/docs/carousel/carousel-custom-sizes.tsx'
    ),
    description: 'Carousel with custom sized slides and responsive behavior.',
    componentName: 'carousel-custom-sizes',
    files: [
      {
        name: 'carousel.tsx',
        path: path.join(__dirname, '../components/core/carousel.tsx'),
      },
    ],
  },

  {
    name: 'carousel-spacing',
    path: path.join(__dirname, '../app/docs/carousel/carousel-spacing.tsx'),
    description: 'Carousel with custom spacing between slides.',
    componentName: 'carousel-spacing',
    files: [
      {
        name: 'carousel.tsx',
        path: path.join(__dirname, '../components/core/carousel.tsx'),
      },
    ],
  },

  {
    name: 'cursor-1',
    path: path.join(__dirname, '../app/docs/cursor/cursor-1.tsx'),
    description: 'Basic cursor effect following pointer movement.',
    componentName: 'cursor-1',
    dependencies: ['motion'],
    files: [
      {
        name: 'cursor.tsx',
        path: path.join(__dirname, '../components/core/cursor.tsx'),
      },
    ],
  },

  {
    name: 'cursor-2',
    path: path.join(__dirname, '../app/docs/cursor/cursor-2.tsx'),
    description: 'Advanced cursor effect with interactive elements.',
    componentName: 'cursor-2',
    files: [
      {
        name: 'cursor.tsx',
        path: path.join(__dirname, '../components/core/cursor.tsx'),
      },
    ],
  },

  {
    name: 'cursor-3',
    path: path.join(__dirname, '../app/docs/cursor/cursor-3.tsx'),
    description: 'Complex cursor effect with state changes and animations.',
    componentName: 'cursor-3',
    files: [
      {
        name: 'cursor.tsx',
        path: path.join(__dirname, '../components/core/cursor.tsx'),
      },
    ],
  },

  {
    name: 'dialog-basic',
    path: path.join(__dirname, '../app/docs/dialog/dialog-basic.tsx'),
    description: 'Basic implementation of the dialog component.',
    componentName: 'dialog',
    files: [
      {
        name: 'dialog.tsx',
        path: path.join(__dirname, '../components/core/dialog.tsx'),
      },
      {
        name: 'hooks/usePreventScroll.tsx',
        path: path.join(__dirname, '../hooks/usePreventScroll.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'dialog-controlled',
    path: path.join(__dirname, '../app/docs/dialog/dialog-controlled.tsx'),
    description: 'Implementing controlled state with the dialog component.',
    componentName: 'dialog',
    files: [
      {
        name: 'dialog.tsx',
        path: path.join(__dirname, '../components/core/dialog.tsx'),
      },
      {
        name: 'hooks/usePreventScroll.tsx',
        path: path.join(__dirname, '../hooks/usePreventScroll.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'dialog-custom-backdrop',
    path: path.join(__dirname, '../app/docs/dialog/dialog-custom-backdrop.tsx'),
    description:
      'Dialog implementation with a customized backdrop and transition.',
    componentName: 'dialog',
    files: [
      {
        name: 'dialog.tsx',
        path: path.join(__dirname, '../components/core/dialog.tsx'),
      },
      {
        name: 'hooks/usePreventScroll.tsx',
        path: path.join(__dirname, '../hooks/usePreventScroll.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'dialog-custom-exit',
    path: path.join(__dirname, '../app/docs/dialog/dialog-custom-exit.tsx'),
    description: 'Dialog implementation with a customized exit animation.',
    componentName: 'dialog',
    files: [
      {
        name: 'dialog.tsx',
        path: path.join(__dirname, '../components/core/dialog.tsx'),
      },
      {
        name: 'hooks/usePreventScroll.tsx',
        path: path.join(__dirname, '../hooks/usePreventScroll.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'dialog-custom-variants-transtion',
    path: path.join(
      __dirname,
      '../app/docs/dialog/dialog-custom-variants-transtion.tsx'
    ),
    description: 'Dialog implementation with custom variants and transitions.',
    componentName: 'dialog',
    files: [
      {
        name: 'dialog.tsx',
        path: path.join(__dirname, '../components/core/dialog.tsx'),
      },
      {
        name: 'hooks/usePreventScroll.tsx',
        path: path.join(__dirname, '../hooks/usePreventScroll.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'disclosure-basic',
    path: path.join(__dirname, '../app/docs/disclosure/disclosure-basic.tsx'),
    description: 'Basic implementation of the disclosure component.',
    componentName: 'disclosure',
    files: [
      {
        name: 'disclosure.tsx',
        path: path.join(__dirname, '../components/core/disclosure.tsx'),
      },
    ],
  },

  {
    name: 'disclosure-card',
    path: path.join(__dirname, '../app/docs/disclosure/disclosure-card.tsx'),
    description: 'Card-based disclosure component with expanded content.',
    componentName: 'disclosure',
    dependencies: ['motion'],
    files: [
      {
        name: 'disclosure.tsx',
        path: path.join(__dirname, '../components/core/disclosure.tsx'),
      },
    ],
  },

  {
    name: 'apple-style-dock',
    path: path.join(__dirname, '../app/docs/dock/apple-style-dock.tsx'),
    description: 'macOS-style dock with scaling and movement effects.',
    componentName: 'dock',
    dependencies: ['motion'],
    files: [
      {
        name: 'dock.tsx',
        path: path.join(__dirname, '../components/core/dock.tsx'),
      },
    ],
  },

  {
    name: 'glow-effect-button',
    path: path.join(
      __dirname,
      '../app/docs/glow-effect/glow-effect-button.tsx'
    ),
    description: 'Button with interactive glow effect on hover.',
    componentName: 'glow-effect-button',
  },

  {
    name: 'glow-effect-card-background',
    path: path.join(
      __dirname,
      '../app/docs/glow-effect/glow-effect-card-background.tsx'
    ),
    description:
      'Card with glow effect background that follows cursor movement.',
    componentName: 'glow-effect-card-background',
    dependencies: ['motion'],
    files: [
      {
        name: 'glow-effect.tsx',
        path: path.join(__dirname, '../components/core/glow-effect.tsx'),
      },
    ],
  },

  {
    name: 'glow-effect-card-mode',
    path: path.join(
      __dirname,
      '../app/docs/glow-effect/glow-effect-card-mode.tsx'
    ),
    description: 'Card with various glow effect modes and customization.',
    componentName: 'glow-effect-card-mode',
    dependencies: ['motion'],
    files: [
      {
        name: 'glow-effect.tsx',
        path: path.join(__dirname, '../components/core/glow-effect.tsx'),
      },
      {
        name: 'text-morph.tsx',
        path: path.join(__dirname, '../components/core/text-morph.tsx'),
      },
    ],
  },

  {
    name: 'image-comparison-basic',
    path: path.join(
      __dirname,
      '../app/docs/image-comparison/image-comparison-basic.tsx'
    ),
    description: 'Basic implementation of the image comparison component.',
    componentName: 'image-comparison-basic',
    files: [
      {
        name: 'image-comparison.tsx',
        path: path.join(__dirname, '../components/core/image-comparison.tsx'),
      },
    ],
  },

  {
    name: 'image-comparison-custom-slider',
    path: path.join(
      __dirname,
      '../app/docs/image-comparison/image-comparison-custom-slider.tsx'
    ),
    description: 'Image comparison with custom slider design and behavior.',
    componentName: 'image-comparison-custom-slider',
    files: [
      {
        name: 'image-comparison.tsx',
        path: path.join(__dirname, '../components/core/image-comparison.tsx'),
      },
    ],
  },

  {
    name: 'image-comparison-hover',
    path: path.join(
      __dirname,
      '../app/docs/image-comparison/image-comparison-hover.tsx'
    ),
    description: 'Image comparison that responds to hover interactions.',
    componentName: 'image-comparison-hover',
    files: [
      {
        name: 'image-comparison.tsx',
        path: path.join(__dirname, '../components/core/image-comparison.tsx'),
      },
    ],
  },

  {
    name: 'image-comparison-spring',
    path: path.join(
      __dirname,
      '../app/docs/image-comparison/image-comparison-spring.tsx'
    ),
    description:
      'Image comparison with spring physics for smoother interactions.',
    componentName: 'image-comparison-spring',
    files: [
      {
        name: 'image-comparison.tsx',
        path: path.join(__dirname, '../components/core/image-comparison.tsx'),
      },
    ],
  },

  {
    name: 'in-view-basic-multiple',
    path: path.join(
      __dirname,
      '../app/docs/in-view/in-view-basic-multiple.tsx'
    ),
    description:
      'Multiple elements with animations triggered when scrolled into view.',
    componentName: 'in-view-basic-multiple',
    files: [
      {
        name: 'in-view.tsx',
        path: path.join(__dirname, '../components/core/in-view.tsx'),
      },
    ],
  },

  {
    name: 'in-view-basic',
    path: path.join(__dirname, '../app/docs/in-view/in-view-basic.tsx'),
    description:
      'Basic implementation of the in-view component for scroll animations.',
    componentName: 'in-view-basic',
    files: [
      {
        name: 'in-view.tsx',
        path: path.join(__dirname, '../components/core/in-view.tsx'),
      },
    ],
  },

  {
    name: 'in-view-images-grid',
    path: path.join(__dirname, '../app/docs/in-view/in-view-images-grid.tsx'),
    description:
      'Grid of images with staggered animations when scrolled into view.',
    componentName: 'in-view-images-grid',
    dependencies: ['motion'],
    files: [
      {
        name: 'in-view.tsx',
        path: path.join(__dirname, '../components/core/in-view.tsx'),
      },
    ],
  },

  {
    name: 'infinite-slider-basic',
    path: path.join(
      __dirname,
      '../app/docs/infinite-slider/infinite-slider-basic.tsx'
    ),
    description: 'Basic implementation of the infinite slider component.',
    componentName: 'infinite-slider-basic',
    files: [
      {
        name: 'infinite-slider.tsx',
        path: path.join(__dirname, '../components/core/infinite-slider.tsx'),
      },
    ],
  },

  {
    name: 'infinite-slider-hover-speed',
    path: path.join(
      __dirname,
      '../app/docs/infinite-slider/infinite-slider-hover-speed.tsx'
    ),
    description: 'Infinite slider with speed changes on hover interaction.',
    componentName: 'infinite-slider-hover-speed',
    files: [
      {
        name: 'infinite-slider.tsx',
        path: path.join(__dirname, '../components/core/infinite-slider.tsx'),
      },
    ],
  },

  {
    name: 'infinite-slider-vertical',
    path: path.join(
      __dirname,
      '../app/docs/infinite-slider/infinite-slider-vertical.tsx'
    ),
    description: 'Vertical orientation of the infinite slider component.',
    componentName: 'infinite-slider-vertical',
    files: [
      {
        name: 'infinite-slider.tsx',
        path: path.join(__dirname, '../components/core/infinite-slider.tsx'),
      },
    ],
  },

  {
    name: 'magnetic-basic',
    path: path.join(__dirname, '../app/docs/magnetic/magnetic-basic.tsx'),
    description: 'Basic implementation of the magnetic attraction effect.',
    componentName: 'magnetic-basic',
    files: [
      {
        name: 'magnetic.tsx',
        path: path.join(__dirname, '../components/core/magnetic.tsx'),
      },
    ],
  },

  {
    name: 'magnetic-nested',
    path: path.join(__dirname, '../app/docs/magnetic/magnetic-nested.tsx'),
    description: 'Nested magnetic elements with compound attraction effects.',
    componentName: 'magnetic-nested',
    files: [
      {
        name: 'magnetic.tsx',
        path: path.join(__dirname, '../components/core/magnetic.tsx'),
      },
    ],
  },

  {
    name: 'morphing-dialog-basic-1',
    path: path.join(
      __dirname,
      '../app/docs/morphing-dialog/morphing-dialog-basic-1.tsx'
    ),
    description: 'Basic implementation of the morphing dialog effect.',
    componentName: 'morphing-dialog-basic-1',
    files: [
      {
        name: 'morphing-dialog.tsx',
        path: path.join(__dirname, '../components/core/morphing-dialog.tsx'),
      },
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'morphing-dialog-basic-2',
    path: path.join(
      __dirname,
      '../app/docs/morphing-dialog/morphing-dialog-basic-2.tsx'
    ),
    description:
      'Alternative implementation of the morphing dialog with different animations.',
    componentName: 'morphing-dialog-basic-2',
    files: [
      {
        name: 'morphing-dialog.tsx',
        path: path.join(__dirname, '../components/core/morphing-dialog.tsx'),
      },
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'morphing-dialog-image',
    path: path.join(
      __dirname,
      '../app/docs/morphing-dialog/morphing-dialog-image.tsx'
    ),
    description:
      'Morphing dialog that transitions from an image to a full dialog.',
    componentName: 'morphing-dialog',
    files: [
      {
        name: 'morphing-dialog.tsx',
        path: path.join(__dirname, '../components/core/morphing-dialog.tsx'),
      },
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'morphing-popover-basic',
    path: path.join(
      __dirname,
      '../app/docs/morphing-popover/morphing-popover-basic.tsx'
    ),
    description: 'Basic implementation of the morphing popover component.',
    componentName: 'morphing-popover',
    files: [
      {
        name: 'morphing-popover.tsx',
        path: path.join(__dirname, '../components/core/morphing-popover.tsx'),
      },
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'morphing-popover-custom-transition-variants',
    path: path.join(
      __dirname,
      '../app/docs/morphing-popover/morphing-popover-custom-transition-variants.tsx'
    ),
    description:
      'Morphing popover with custom transition variants and animations.',
    componentName: 'morphing-popover',
    files: [
      {
        name: 'morphing-popover.tsx',
        path: path.join(__dirname, '../components/core/morphing-popover.tsx'),
      },
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'morphing-popover-textarea',
    path: path.join(
      __dirname,
      '../app/docs/morphing-popover/morphing-popover-textarea.tsx'
    ),
    description: 'Morphing popover integrated with a textarea input.',
    componentName: 'morphing-popover',
    files: [
      {
        name: 'morphing-popover.tsx',
        path: path.join(__dirname, '../components/core/morphing-popover.tsx'),
      },
      {
        name: 'hooks/useClickOutside.tsx',
        path: path.join(__dirname, '../hooks/useClickOutside.tsx'),
        type: 'registry:hook',
      },
    ],
  },

  {
    name: 'progressive-blur-basic',
    path: path.join(
      __dirname,
      '../app/docs/progressive-blur/progressive-blur-basic.tsx'
    ),
    description: 'Basic implementation of the progressive blur effect.',
    componentName: 'progressive-blur',
    files: [
      {
        name: 'progressive-blur.tsx',
        path: path.join(__dirname, '../components/core/progressive-blur.tsx'),
      },
    ],
  },

  {
    name: 'progressive-blur-hover',
    path: path.join(
      __dirname,
      '../app/docs/progressive-blur/progressive-blur-hover.tsx'
    ),
    description: 'Progressive blur effect that responds to hover interactions.',
    componentName: 'progressive-blur',
    files: [
      {
        name: 'progressive-blur.tsx',
        path: path.join(__dirname, '../components/core/progressive-blur.tsx'),
      },
    ],
  },

  {
    name: 'progressive-blur-slider',
    path: path.join(
      __dirname,
      '../app/docs/progressive-blur/progressive-blur-slider.tsx'
    ),
    description: 'Progressive blur effect with interactive slider control.',
    componentName: 'progressive-blur',
    files: [
      {
        name: 'progressive-blur.tsx',
        path: path.join(__dirname, '../components/core/progressive-blur.tsx'),
      },
    ],
  },

  {
    name: 'scroll-progress-basic-1',
    path: path.join(
      __dirname,
      '../app/docs/scroll-progress/scroll-progress-basic-1.tsx'
    ),
    description: 'Basic implementation of the scroll progress indicator.',
    componentName: 'scroll-progress',
    files: [
      {
        name: 'scroll-progress.tsx',
        path: path.join(__dirname, '../components/core/scroll-progress.tsx'),
        type: 'registry:ui',
      },
    ],
  },

  {
    name: 'scroll-progress-basic-2',
    path: path.join(
      __dirname,
      '../app/docs/scroll-progress/scroll-progress-basic-2.tsx'
    ),
    description:
      'Alternative scroll progress indicator with different styling.',
    componentName: 'scroll-progress',
    files: [
      {
        name: 'scroll-progress.tsx',
        path: path.join(__dirname, '../components/core/scroll-progress.tsx'),
      },
    ],
  },

  {
    name: 'scroll-progress-basic-3',
    path: path.join(
      __dirname,
      '../app/docs/scroll-progress/scroll-progress-basic-3.tsx'
    ),
    description: 'Enhanced scroll progress indicator with additional features.',
    componentName: 'scroll-progress',
    files: [
      {
        name: 'scroll-progress.tsx',
        path: path.join(__dirname, '../components/core/scroll-progress.tsx'),
      },
    ],
  },

  {
    name: 'clock',
    path: path.join(__dirname, '../app/docs/sliding-number/clock.tsx'),
    description:
      'Digital clock implementation using the sliding number component.',
    componentName: 'sliding-number',
    files: [
      {
        name: 'sliding-number.tsx',
        path: path.join(__dirname, '../components/core/sliding-number.tsx'),
      },
    ],
  },

  {
    name: 'sliding-basic',
    path: path.join(__dirname, '../app/docs/sliding-number/sliding-basic.tsx'),
    description: 'Basic implementation of the sliding number component.',
    componentName: 'sliding-number',
    files: [
      {
        name: 'sliding-number.tsx',
        path: path.join(__dirname, '../components/core/sliding-number.tsx'),
      },
    ],
  },

  {
    name: 'sliding-slider',
    path: path.join(__dirname, '../app/docs/sliding-number/sliding-slider.tsx'),
    description: 'Sliding number component with interactive slider control.',
    componentName: 'sliding-number',
    files: [
      {
        name: 'sliding-number.tsx',
        path: path.join(__dirname, '../components/core/sliding-number.tsx'),
      },
    ],
  },

  {
    name: 'spinning-text-basic',
    path: path.join(
      __dirname,
      '../app/docs/spinning-text/spinning-text-basic.tsx'
    ),
    description: 'Basic implementation of the spinning text effect.',
    componentName: 'spinning-text',
    files: [
      {
        name: 'spinning-text.tsx',
        path: path.join(__dirname, '../components/core/spinning-text.tsx'),
      },
    ],
  },

  {
    name: 'spinning-text-custom-transition',
    path: path.join(
      __dirname,
      '../app/docs/spinning-text/spinning-text-custom-transition.tsx'
    ),
    description: 'Spinning text with custom transition timing and effects.',
    componentName: 'spinning-text',
    files: [
      {
        name: 'spinning-text.tsx',
        path: path.join(__dirname, '../components/core/spinning-text.tsx'),
      },
    ],
  },

  {
    name: 'spinning-text-custom-variants',
    path: path.join(
      __dirname,
      '../app/docs/spinning-text/spinning-text-custom-variants.tsx'
    ),
    description: 'Spinning text with custom animation variants.',
    componentName: 'spinning-text',
    files: [
      {
        name: 'spinning-text.tsx',
        path: path.join(__dirname, '../components/core/spinning-text.tsx'),
      },
    ],
  },

  {
    name: 'spotlight-basic',
    path: path.join(__dirname, '../app/docs/spotlight/spotlight-basic.tsx'),
    description: 'Basic implementation of the spotlight effect.',
    componentName: 'spotlight',
    files: [
      {
        name: 'spotlight.tsx',
        path: path.join(__dirname, '../components/core/spotlight.tsx'),
      },
    ],
  },

  {
    name: 'spotlight-border',
    path: path.join(__dirname, '../app/docs/spotlight/spotlight-border.tsx'),
    description: 'Spotlight effect applied to element borders.',
    componentName: 'spotlight',
    files: [
      {
        name: 'spotlight.tsx',
        path: path.join(__dirname, '../components/core/spotlight.tsx'),
      },
    ],
  },

  {
    name: 'spotlight-custom-color',
    path: path.join(
      __dirname,
      '../app/docs/spotlight/spotlight-custom-color.tsx'
    ),
    description: 'Spotlight effect with custom colors and gradients.',
    componentName: 'spotlight',
    files: [
      {
        name: 'spotlight.tsx',
        path: path.join(__dirname, '../components/core/spotlight.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-custom-delay',
    path: path.join(
      __dirname,
      '../app/docs/text-effect/text-effect-custom-delay.tsx'
    ),
    description: 'Text effect with custom animation delay settings.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-exit',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-exit.tsx'),
    description: 'Text effect with custom exit animations.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-line',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-line.tsx'),
    description: 'Line-by-line text animation effect.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-per-char',
    path: path.join(
      __dirname,
      '../app/docs/text-effect/text-effect-per-char.tsx'
    ),
    description: 'Character-by-character text animation effect.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-per-word',
    path: path.join(
      __dirname,
      '../app/docs/text-effect/text-effect-per-word.tsx'
    ),
    description: 'Word-by-word text animation effect.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-preset',
    path: path.join(
      __dirname,
      '../app/docs/text-effect/text-effect-preset.tsx'
    ),
    description: 'Text effect with preset animation configurations.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-speed',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-speed.tsx'),
    description: 'Text effect with customizable animation speed.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-effect-variants',
    path: path.join(
      __dirname,
      '../app/docs/text-effect/text-effect-variants.tsx'
    ),
    description: 'Various animation variants for the text effect component.',
    componentName: 'text-effect',
    files: [
      {
        name: 'text-effect.tsx',
        path: path.join(__dirname, '../components/core/text-effect.tsx'),
      },
    ],
  },

  {
    name: 'text-loop-basic',
    path: path.join(__dirname, '../app/docs/text-loop/text-loop-basic.tsx'),
    description: 'Basic implementation of the text loop animation.',
    componentName: 'text-loop',
    files: [
      {
        name: 'text-loop.tsx',
        path: path.join(__dirname, '../components/core/text-loop.tsx'),
      },
    ],
  },

  {
    name: 'text-loop-custom-variants-transition',
    path: path.join(
      __dirname,
      '../app/docs/text-loop/text-loop-custom-variants-transition.tsx'
    ),
    description: 'Text loop with custom transition variants and animations.',
    componentName: 'text-loop',
    files: [
      {
        name: 'text-loop.tsx',
        path: path.join(__dirname, '../components/core/text-loop.tsx'),
      },
    ],
  },

  {
    name: 'text-loop-on-index',
    path: path.join(__dirname, '../app/docs/text-loop/text-loop-on-index.tsx'),
    description: 'Text loop with index-based animations and transitions.',
    componentName: 'text-loop',
    files: [
      {
        name: 'text-loop.tsx',
        path: path.join(__dirname, '../components/core/text-loop.tsx'),
      },
    ],
  },

  {
    name: 'text-morph-button',
    path: path.join(__dirname, '../app/docs/text-morph/text-morph-button.tsx'),
    description: 'Button with morphing text animations on interaction.',
    componentName: 'text-morph',
    files: [
      {
        name: 'text-morph.tsx',
        path: path.join(__dirname, '../components/core/text-morph.tsx'),
      },
    ],
  },

  {
    name: 'text-morph-input',
    path: path.join(__dirname, '../app/docs/text-morph/text-morph-input.tsx'),
    description: 'Input field with morphing text placeholder animations.',
    componentName: 'text-morph',
    files: [
      {
        name: 'text-morph.tsx',
        path: path.join(__dirname, '../components/core/text-morph.tsx'),
      },
    ],
  },

  {
    name: 'text-roll-basic',
    path: path.join(__dirname, '../app/docs/text-roll/text-roll-basic.tsx'),
    description: 'Basic implementation of the text roll animation effect.',
    componentName: 'text-roll',
    files: [
      {
        name: 'text-roll.tsx',
        path: path.join(__dirname, '../components/core/text-roll.tsx'),
      },
    ],
  },

  {
    name: 'text-roll-custom-transition-delay',
    path: path.join(
      __dirname,
      '../app/docs/text-roll/text-roll-custom-transition-delay.tsx'
    ),
    description: 'Text roll animation with custom transition delays.',
    componentName: 'text-roll',
    files: [
      {
        name: 'text-roll.tsx',
        path: path.join(__dirname, '../components/core/text-roll.tsx'),
      },
    ],
  },

  {
    name: 'text-roll-custom-variants',
    path: path.join(
      __dirname,
      '../app/docs/text-roll/text-roll-custom-variants.tsx'
    ),
    description: 'Text roll with custom animation variants.',
    componentName: 'text-roll',
    files: [
      {
        name: 'text-roll.tsx',
        path: path.join(__dirname, '../components/core/text-roll.tsx'),
      },
    ],
  },

  {
    name: 'text-scramble-basic',
    path: path.join(
      __dirname,
      '../app/docs/text-scramble/text-scramble-basic.tsx'
    ),
    description: 'Basic implementation of the text scramble effect.',
    componentName: 'text-scramble',
    files: [
      {
        name: 'text-scramble.tsx',
        path: path.join(__dirname, '../components/core/text-scramble.tsx'),
      },
    ],
  },

  {
    name: 'text-scramble-custom-char-duration',
    path: path.join(
      __dirname,
      '../app/docs/text-scramble/text-scramble-custom-char-duration.tsx'
    ),
    description: 'Text scramble with custom character animation durations.',
    componentName: 'text-scramble',
    files: [
      {
        name: 'text-scramble.tsx',
        path: path.join(__dirname, '../components/core/text-scramble.tsx'),
      },
    ],
  },

  {
    name: 'text-scramble-custom-trigger',
    path: path.join(
      __dirname,
      '../app/docs/text-scramble/text-scramble-custom-trigger.tsx'
    ),
    description: 'Text scramble with custom trigger mechanisms.',
    componentName: 'text-scramble',
    files: [
      {
        name: 'text-scramble.tsx',
        path: path.join(__dirname, '../components/core/text-scramble.tsx'),
      },
    ],
  },

  {
    name: 'text-shimmer-wave-basic',
    path: path.join(
      __dirname,
      '../app/docs/text-shimmer-wave/text-shimmer-wave-basic.tsx'
    ),
    description: 'Basic implementation of the wave-based text shimmer effect.',
    componentName: 'text-shimmer-wave',
    files: [
      {
        name: 'text-shimmer-wave.tsx',
        path: path.join(__dirname, '../components/core/text-shimmer-wave.tsx'),
      },
    ],
  },

  {
    name: 'text-shimmer-wave-color',
    path: path.join(
      __dirname,
      '../app/docs/text-shimmer-wave/text-shimmer-wave-color.tsx'
    ),
    description: 'Wave-based text shimmer with custom color configurations.',
    componentName: 'text-shimmer-wave',
    files: [
      {
        name: 'text-shimmer-wave.tsx',
        path: path.join(__dirname, '../components/core/text-shimmer-wave.tsx'),
      },
    ],
  },

  {
    name: 'text-shimmer-basic',
    path: path.join(
      __dirname,
      '../app/docs/text-shimmer/text-shimmer-basic.tsx'
    ),
    description: 'Basic implementation of the text shimmer effect.',
    componentName: 'text-shimmer',
    files: [
      {
        name: 'text-shimmer.tsx',
        path: path.join(__dirname, '../components/core/text-shimmer.tsx'),
      },
    ],
  },

  {
    name: 'text-shimmer-color',
    path: path.join(
      __dirname,
      '../app/docs/text-shimmer/text-shimmer-color.tsx'
    ),
    description: 'Text shimmer with custom color configurations.',
    componentName: 'text-shimmer',
    files: [
      {
        name: 'text-shimmer.tsx',
        path: path.join(__dirname, '../components/core/text-shimmer.tsx'),
      },
    ],
  },

  {
    name: 'tilt-card-1',
    path: path.join(__dirname, '../app/docs/tilt/tilt-card-1.tsx'),
    description: 'Card component with 3D tilt effect on hover.',
    componentName: 'tilt',
    files: [
      {
        name: 'tilt.tsx',
        path: path.join(__dirname, '../components/core/tilt.tsx'),
      },
    ],
  },

  {
    name: 'tilt-spotlight',
    path: path.join(__dirname, '../app/docs/tilt/tilt-spotlight.tsx'),
    description:
      'Tilt effect combined with spotlight for enhanced hover interactions.',
    componentName: 'tilt',
    files: [
      {
        name: 'tilt.tsx',
        path: path.join(__dirname, '../components/core/tilt.tsx'),
      },
      {
        name: 'spotlight.tsx',
        path: path.join(__dirname, '../components/core/spotlight.tsx'),
      },
    ],
  },

  {
    name: 'transition-panel-card',
    path: path.join(
      __dirname,
      '../app/docs/transition-panel/transition-panel-card.tsx'
    ),
    description: 'Card component with transition panel animations.',
    componentName: 'transition-panel',
    files: [
      {
        name: 'transition-panel.tsx',
        path: path.join(__dirname, '../components/core/transition-panel.tsx'),
      },
    ],
  },

  {
    name: 'transition-panel-tabs',
    path: path.join(
      __dirname,
      '../app/docs/transition-panel/transition-panel-tabs.tsx'
    ),
    description:
      'Tab interface using transition panel for smooth content switching.',
    componentName: 'transition-panel',
    files: [
      {
        name: 'transition-panel.tsx',
        path: path.join(__dirname, '../components/core/transition-panel.tsx'),
      },
    ],
  },
];
