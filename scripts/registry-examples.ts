import path from 'path';

type ExampleDependentFile = {
  name: string;
  path: string;
};

type ExampleFile = {
  name: string;
  path: string;
};

type ExampleDefinition = {
  name: string;
  path: string;
  description: string;
  componentName: string;
  dependentFiles?: ExampleDependentFile[];
  files?: ExampleFile[];
};

export const examples: ExampleDefinition[] = [
  {
    name: 'accordion-basic',
    path: path.join(__dirname, '../app/docs/accordion/accordion-basic.tsx'),
    description: 'Basic implementation of the accordion component with default styles.',
    componentName: 'accordion',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
      }
    ]
  },

  {
    name: 'accordion-icons',
    path: path.join(__dirname, '../app/docs/accordion/accordion-icons.tsx'),
    description: 'Accordion implementation with custom icons that animate on state change.',
    componentName: 'accordion',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
      }
    ]
  },

  {
    name: 'accordion-variant',
    path: path.join(__dirname, '../app/docs/accordion/accordion-variant.tsx'),
    description: 'Styled variant of the accordion component with custom appearance.',
    componentName: 'accordion',
    files: [
      {
        name: 'accordion.tsx',
        path: path.join(__dirname, '../components/core/accordion.tsx'),
      }
    ]
  },

  {
    name: 'animated-card-background-hover',
    path: path.join(__dirname, '../app/docs/animated-background/animated-card-background-hover.tsx'),
    description: 'Card component with animated background effects on hover.',
    componentName: 'animated-background',
    dependentFiles: [
      {
        name: 'card.tsx',
        path: path.join(__dirname, '../components/ui/card.tsx'),
      }
    ],
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(__dirname, '../components/core/animated-background.tsx'),
      }
    ]
  },

  {
    name: 'animated-tabs-hover',
    path: path.join(__dirname, '../app/docs/animated-background/animated-tabs-hover.tsx'),
    description: 'Animated background tabs that respond to hover interactions.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(__dirname, '../components/core/animated-background.tsx'),
      }
    ]
  },

  {
    name: 'animated-tabs',
    path: path.join(__dirname, '../app/docs/animated-background/animated-tabs.tsx'),
    description: 'Tab interface with animated background highlighting the active tab.',
    componentName: 'animated-background',
    files: [
      {
        name: 'animated-background.tsx',
        path: path.join(__dirname, '../components/core/animated-background.tsx'),
      }
    ]
  },

  {
    name: 'segmented-control',
    path: path.join(__dirname, '../app/docs/animated-background/segmented-control.tsx'),
    description: 'Segmented control UI element with animated background transitions.',
    componentName: 'animated-background',
  },

  {
    name: 'animated-group-custom-variants-2',
    path: path.join(__dirname, '../app/docs/animated-group/animated-group-custom-variants-2.tsx'),
    description: 'Advanced custom variants for animated groups with additional animations.',
    componentName: 'animated-group',
  },

  {
    name: 'animated-group-custom-variants',
    path: path.join(__dirname, '../app/docs/animated-group/animated-group-custom-variants.tsx'),
    description: 'Custom animation variants for the animated group component.',
    componentName: 'animated-group',
  },

  {
    name: 'animated-group-preset',
    path: path.join(__dirname, '../app/docs/animated-group/animated-group-preset.tsx'),
    description: 'Preset animations for the animated group component.',
    componentName: 'animated-group',
  },

  {
    name: 'animated-number-basic',
    path: path.join(__dirname, '../app/docs/animated-number/animated-number-basic.tsx'),
    description: 'Basic implementation of the animated number component.',
    componentName: 'animated-number',
  },

  {
    name: 'animated-number-counter',
    path: path.join(__dirname, '../app/docs/animated-number/animated-number-counter.tsx'),
    description: 'Animated counter implementation that smoothly transitions between numbers.',
    componentName: 'animated-number',
  },

  {
    name: 'animated-number-in-view',
    path: path.join(__dirname, '../app/docs/animated-number/animated-number-in-view.tsx'),
    description: 'Animated number that activates when scrolled into view.',
    componentName: 'animated-number',
    dependentFiles: [
      {
        name: 'in-view.tsx',
        path: path.join(__dirname, '../components/core/in-view.tsx'),
      }
    ],
  },

  {
    name: 'border-trail-card-1',
    path: path.join(__dirname, '../app/docs/border-trail/border-trail-card-1.tsx'),
    description: 'Card component with animated border trail effect.',
    componentName: 'border-trail',
  },

  {
    name: 'border-trail-card-2',
    path: path.join(__dirname, '../app/docs/border-trail/border-trail-card-2.tsx'),
    description: 'Enhanced card component with custom border trail animations.',
    componentName: 'border-trail',
  },

  {
    name: 'border-trail-textarea',
    path: path.join(__dirname, '../app/docs/border-trail/border-trail-textarea.tsx'),
    description: 'Text area input with animated border trail effect on focus.',
    componentName: 'border-trail',
  },

  {
    name: 'carousel-basic',
    path: path.join(__dirname, '../app/docs/carousel/carousel-basic.tsx'),
    description: 'Basic implementation of the carousel component.',
    componentName: 'carousel',
  },

  {
    name: 'carousel-custom-indicator',
    path: path.join(__dirname, '../app/docs/carousel/carousel-custom-indicator.tsx'),
    description: 'Carousel with custom indicators for navigation.',
    componentName: 'carousel',
  },

  {
    name: 'carousel-custom-sizes',
    path: path.join(__dirname, '../app/docs/carousel/carousel-custom-sizes.tsx'),
    description: 'Carousel with custom sized slides and responsive behavior.',
    componentName: 'carousel',
  },

  {
    name: 'carousel-spacing',
    path: path.join(__dirname, '../app/docs/carousel/carousel-spacing.tsx'),
    description: 'Carousel with custom spacing between slides.',
    componentName: 'carousel',
  },

  {
    name: 'cursor-1',
    path: path.join(__dirname, '../app/docs/cursor/cursor-1.tsx'),
    description: 'Basic cursor effect following pointer movement.',
    componentName: 'cursor',
  },

  {
    name: 'cursor-2',
    path: path.join(__dirname, '../app/docs/cursor/cursor-2.tsx'),
    description: 'Advanced cursor effect with interactive elements.',
    componentName: 'cursor',
  },

  {
    name: 'cursor-3',
    path: path.join(__dirname, '../app/docs/cursor/cursor-3.tsx'),
    description: 'Complex cursor effect with state changes and animations.',
    componentName: 'cursor',
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
      }
    ]
  },

  {
    name: 'dialog-controlled',
    path: path.join(__dirname, '../app/docs/dialog/dialog-controlled.tsx'),
    description: 'Dialog with controlled state management.',
    componentName: 'dialog',
  },

  {
    name: 'dialog-custom-backdrop',
    path: path.join(__dirname, '../app/docs/dialog/dialog-custom-backdrop.tsx'),
    description: 'Dialog with custom backdrop design and animations.',
    componentName: 'dialog',
  },

  {
    name: 'dialog-custom-exit',
    path: path.join(__dirname, '../app/docs/dialog/dialog-custom-exit.tsx'),
    description: 'Dialog with custom exit animations and transitions.',
    componentName: 'dialog',
  },

  {
    name: 'dialog-custom-variants-transtion',
    path: path.join(__dirname, '../app/docs/dialog/dialog-custom-variants-transtion.tsx'),
    description: 'Dialog with custom variant transitions and effects.',
    componentName: 'dialog',
  },

  {
    name: 'disclosure-basic',
    path: path.join(__dirname, '../app/docs/disclosure/disclosure-basic.tsx'),
    description: 'Basic implementation of the disclosure component.',
    componentName: 'disclosure',
  },

  {
    name: 'disclosure-card',
    path: path.join(__dirname, '../app/docs/disclosure/disclosure-card.tsx'),
    description: 'Card-based disclosure component with expanded content.',
    componentName: 'disclosure',
    dependentFiles: [
      {
        name: 'card.tsx',
        path: path.join(__dirname, '../components/ui/card.tsx'),
      }
    ],
    files: [
      {
        name: 'disclosure.tsx',
        path: path.join(__dirname, '../components/core/disclosure.tsx'),
      }
    ]
  },

  {
    name: 'apple-style-dock',
    path: path.join(__dirname, '../app/docs/dock/apple-style-dock.tsx'),
    description: 'macOS-style dock with scaling and movement effects.',
    componentName: 'dock',
  },

  {
    name: 'glow-effect-button',
    path: path.join(__dirname, '../app/docs/glow-effect/glow-effect-button.tsx'),
    description: 'Button with interactive glow effect on hover.',
    componentName: 'glow-effect',
  },

  {
    name: 'glow-effect-card-background',
    path: path.join(__dirname, '../app/docs/glow-effect/glow-effect-card-background.tsx'),
    description: 'Card with glow effect background that follows cursor movement.',
    componentName: 'glow-effect',
  },

  {
    name: 'glow-effect-card-mode',
    path: path.join(__dirname, '../app/docs/glow-effect/glow-effect-card-mode.tsx'),
    description: 'Card with various glow effect modes and customization.',
    componentName: 'glow-effect',
  },

  {
    name: 'image-comparison-basic',
    path: path.join(__dirname, '../app/docs/image-comparison/image-comparison-basic.tsx'),
    description: 'Basic implementation of the image comparison component.',
    componentName: 'image-comparison',
  },

  {
    name: 'image-comparison-custom-slider',
    path: path.join(__dirname, '../app/docs/image-comparison/image-comparison-custom-slider.tsx'),
    description: 'Image comparison with custom slider design and behavior.',
    componentName: 'image-comparison',
  },

  {
    name: 'image-comparison-hover',
    path: path.join(__dirname, '../app/docs/image-comparison/image-comparison-hover.tsx'),
    description: 'Image comparison that responds to hover interactions.',
    componentName: 'image-comparison',
  },

  {
    name: 'image-comparison-spring',
    path: path.join(__dirname, '../app/docs/image-comparison/image-comparison-spring.tsx'),
    description: 'Image comparison with spring physics for smoother interactions.',
    componentName: 'image-comparison',
  },

  {
    name: 'in-view-basic-multiple',
    path: path.join(__dirname, '../app/docs/in-view/in-view-basic-multiple.tsx'),
    description: 'Multiple elements with animations triggered when scrolled into view.',
    componentName: 'in-view',
  },

  {
    name: 'in-view-basic',
    path: path.join(__dirname, '../app/docs/in-view/in-view-basic.tsx'),
    description: 'Basic implementation of the in-view component for scroll animations.',
    componentName: 'in-view',
  },

  {
    name: 'in-view-images-grid',
    path: path.join(__dirname, '../app/docs/in-view/in-view-images-grid.tsx'),
    description: 'Grid of images with staggered animations when scrolled into view.',
    componentName: 'in-view',
  },

  {
    name: 'infinite-slider-basic',
    path: path.join(__dirname, '../app/docs/infinite-slider/infinite-slider-basic.tsx'),
    description: 'Basic implementation of the infinite slider component.',
    componentName: 'infinite-slider',
  },

  {
    name: 'infinite-slider-hover-speed',
    path: path.join(__dirname, '../app/docs/infinite-slider/infinite-slider-hover-speed.tsx'),
    description: 'Infinite slider with speed changes on hover interaction.',
    componentName: 'infinite-slider',
  },

  {
    name: 'infinite-slider-vertical',
    path: path.join(__dirname, '../app/docs/infinite-slider/infinite-slider-vertical.tsx'),
    description: 'Vertical orientation of the infinite slider component.',
    componentName: 'infinite-slider',
  },

  {
    name: 'magnetic-basic',
    path: path.join(__dirname, '../app/docs/magnetic/magnetic-basic.tsx'),
    description: 'Basic implementation of the magnetic attraction effect.',
    componentName: 'magnetic',
  },

  {
    name: 'magnetic-nested',
    path: path.join(__dirname, '../app/docs/magnetic/magnetic-nested.tsx'),
    description: 'Nested magnetic elements with compound attraction effects.',
    componentName: 'magnetic',
  },

  {
    name: 'morphing-dialog-basic-1',
    path: path.join(__dirname, '../app/docs/morphing-dialog/morphing-dialog-basic-1.tsx'),
    description: 'Basic implementation of the morphing dialog effect.',
    componentName: 'morphing-dialog',
  },

  {
    name: 'morphing-dialog-basic-2',
    path: path.join(__dirname, '../app/docs/morphing-dialog/morphing-dialog-basic-2.tsx'),
    description: 'Alternative implementation of the morphing dialog with different animations.',
    componentName: 'morphing-dialog',
  },

  {
    name: 'morphing-dialog-image',
    path: path.join(__dirname, '../app/docs/morphing-dialog/morphing-dialog-image.tsx'),
    description: 'Morphing dialog that transitions from an image to a full dialog.',
    componentName: 'morphing-dialog',
  },

  {
    name: 'morphing-popover-basic',
    path: path.join(__dirname, '../app/docs/morphing-popover/morphing-popover-basic.tsx'),
    description: 'Basic implementation of the morphing popover component.',
    componentName: 'morphing-popover',
  },

  {
    name: 'morphing-popover-custom-transition-variants',
    path: path.join(__dirname, '../app/docs/morphing-popover/morphing-popover-custom-transition-variants.tsx'),
    description: 'Morphing popover with custom transition variants and animations.',
    componentName: 'morphing-popover',
  },

  {
    name: 'morphing-popover-textarea',
    path: path.join(__dirname, '../app/docs/morphing-popover/morphing-popover-textarea.tsx'),
    description: 'Morphing popover integrated with a textarea input.',
    componentName: 'morphing-popover',
    dependentFiles: [
      {
        name: 'textarea.tsx',
        path: path.join(__dirname, '../components/ui/textarea.tsx'),
      }
    ],
  },

  {
    name: 'progressive-blur-basic',
    path: path.join(__dirname, '../app/docs/progressive-blur/progressive-blur-basic.tsx'),
    description: 'Basic implementation of the progressive blur effect.',
    componentName: 'progressive-blur',
  },

  {
    name: 'progressive-blur-hover',
    path: path.join(__dirname, '../app/docs/progressive-blur/progressive-blur-hover.tsx'),
    description: 'Progressive blur effect that responds to hover interactions.',
    componentName: 'progressive-blur',
  },

  {
    name: 'progressive-blur-slider',
    path: path.join(__dirname, '../app/docs/progressive-blur/progressive-blur-slider.tsx'),
    description: 'Progressive blur effect with interactive slider control.',
    componentName: 'progressive-blur',
  },

  {
    name: 'scroll-progress-basic-1',
    path: path.join(__dirname, '../app/docs/scroll-progress/scroll-progress-basic-1.tsx'),
    description: 'Basic implementation of the scroll progress indicator.',
    componentName: 'scroll-progress',
  },

  {
    name: 'scroll-progress-basic-2',
    path: path.join(__dirname, '../app/docs/scroll-progress/scroll-progress-basic-2.tsx'),
    description: 'Alternative scroll progress indicator with different styling.',
    componentName: 'scroll-progress',
  },

  {
    name: 'scroll-progress-basic-3',
    path: path.join(__dirname, '../app/docs/scroll-progress/scroll-progress-basic-3.tsx'),
    description: 'Enhanced scroll progress indicator with additional features.',
    componentName: 'scroll-progress',
  },

  {
    name: 'clock',
    path: path.join(__dirname, '../app/docs/sliding-number/clock.tsx'),
    description: 'Digital clock implementation using the sliding number component.',
    componentName: 'sliding-number',
  },

  {
    name: 'sliding-basic',
    path: path.join(__dirname, '../app/docs/sliding-number/sliding-basic.tsx'),
    description: 'Basic implementation of the sliding number component.',
    componentName: 'sliding-number',
  },

  {
    name: 'sliding-slider',
    path: path.join(__dirname, '../app/docs/sliding-number/sliding-slider.tsx'),
    description: 'Sliding number component with interactive slider control.',
    componentName: 'sliding-number',
  },

  {
    name: 'spinning-text-basic',
    path: path.join(__dirname, '../app/docs/spinning-text/spinning-text-basic.tsx'),
    description: 'Basic implementation of the spinning text effect.',
    componentName: 'spinning-text',
  },

  {
    name: 'spinning-text-custom-transition',
    path: path.join(__dirname, '../app/docs/spinning-text/spinning-text-custom-transition.tsx'),
    description: 'Spinning text with custom transition timing and effects.',
    componentName: 'spinning-text',
  },

  {
    name: 'spinning-text-custom-variants',
    path: path.join(__dirname, '../app/docs/spinning-text/spinning-text-custom-variants.tsx'),
    description: 'Spinning text with custom animation variants.',
    componentName: 'spinning-text',
  },

  {
    name: 'spotlight-basic',
    path: path.join(__dirname, '../app/docs/spotlight/spotlight-basic.tsx'),
    description: 'Basic implementation of the spotlight effect.',
    componentName: 'spotlight',
  },

  {
    name: 'spotlight-border',
    path: path.join(__dirname, '../app/docs/spotlight/spotlight-border.tsx'),
    description: 'Spotlight effect applied to element borders.',
    componentName: 'spotlight',
  },

  {
    name: 'spotlight-custom-color',
    path: path.join(__dirname, '../app/docs/spotlight/spotlight-custom-color.tsx'),
    description: 'Spotlight effect with custom colors and gradients.',
    componentName: 'spotlight',
  },

  {
    name: 'text-effect-custom-delay',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-custom-delay.tsx'),
    description: 'Text effect with custom animation delay settings.',
    componentName: 'text-effect',
  },

  {
    name: 'text-effect-exit',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-exit.tsx'),
    description: 'Text effect with custom exit animations.',
    componentName: 'text-effect',
  },

  {
    name: 'text-effect-line',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-line.tsx'),
    description: 'Line-by-line text animation effect.',
    componentName: 'text-effect',
  },

  {
    name: 'text-effect-per-char',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-per-char.tsx'),
    description: 'Character-by-character text animation effect.',
    componentName: 'text-effect',
  },

  {
    name: 'text-effect-per-word',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-per-word.tsx'),
    description: 'Word-by-word text animation effect.',
    componentName: 'text-effect',
  },

  {
    name: 'text-effect-preset',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-preset.tsx'),
    description: 'Text effect with preset animation configurations.',
    componentName: 'text-effect',
  },

  {
    name: 'text-effect-speed',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-speed.tsx'),
    description: 'Text effect with customizable animation speed.',
    componentName: 'text-effect',
  },

  {
    name: 'text-effect-variants',
    path: path.join(__dirname, '../app/docs/text-effect/text-effect-variants.tsx'),
    description: 'Various animation variants for the text effect component.',
    componentName: 'text-effect',
  },

  {
    name: 'text-loop-basic',
    path: path.join(__dirname, '../app/docs/text-loop/text-loop-basic.tsx'),
    description: 'Basic implementation of the text loop animation.',
    componentName: 'text-loop',
  },

  {
    name: 'text-loop-custom-variants-transition',
    path: path.join(__dirname, '../app/docs/text-loop/text-loop-custom-variants-transition.tsx'),
    description: 'Text loop with custom transition variants and animations.',
    componentName: 'text-loop',
  },

  {
    name: 'text-loop-on-index',
    path: path.join(__dirname, '../app/docs/text-loop/text-loop-on-index.tsx'),
    description: 'Text loop with index-based animations and transitions.',
    componentName: 'text-loop',
  },

  {
    name: 'text-morph-button',
    path: path.join(__dirname, '../app/docs/text-morph/text-morph-button.tsx'),
    description: 'Button with morphing text animations on interaction.',
    componentName: 'text-morph',
    dependentFiles: [
      {
        name: 'button.tsx',
        path: path.join(__dirname, '../components/ui/button.tsx'),
      }
    ],
    files: [
      {
        name: 'text-morph.tsx',
        path: path.join(__dirname, '../components/core/text-morph.tsx'),
      }
    ]
  },

  {
    name: 'text-morph-input',
    path: path.join(__dirname, '../app/docs/text-morph/text-morph-input.tsx'),
    description: 'Input field with morphing text placeholder animations.',
    componentName: 'text-morph',
    dependentFiles: [
      {
        name: 'input.tsx',
        path: path.join(__dirname, '../components/ui/input.tsx'),
      }
    ],
  },

  {
    name: 'text-roll-basic',
    path: path.join(__dirname, '../app/docs/text-roll/text-roll-basic.tsx'),
    description: 'Basic implementation of the text roll animation effect.',
    componentName: 'text-roll',
  },

  {
    name: 'text-roll-custom-transition-delay',
    path: path.join(__dirname, '../app/docs/text-roll/text-roll-custom-transition-delay.tsx'),
    description: 'Text roll animation with custom transition delays.',
    componentName: 'text-roll',
  },

  {
    name: 'text-roll-custom-variants',
    path: path.join(__dirname, '../app/docs/text-roll/text-roll-custom-variants.tsx'),
    description: 'Text roll with custom animation variants.',
    componentName: 'text-roll',
  },

  {
    name: 'text-scramble-basic',
    path: path.join(__dirname, '../app/docs/text-scramble/text-scramble-basic.tsx'),
    description: 'Basic implementation of the text scramble effect.',
    componentName: 'text-scramble',
  },

  {
    name: 'text-scramble-custom-char-duration',
    path: path.join(__dirname, '../app/docs/text-scramble/text-scramble-custom-char-duration.tsx'),
    description: 'Text scramble with custom character animation durations.',
    componentName: 'text-scramble',
  },

  {
    name: 'text-scramble-custom-trigger',
    path: path.join(__dirname, '../app/docs/text-scramble/text-scramble-custom-trigger.tsx'),
    description: 'Text scramble with custom trigger mechanisms.',
    componentName: 'text-scramble',
  },

  {
    name: 'text-shimmer-wave-basic',
    path: path.join(__dirname, '../app/docs/text-shimmer-wave/text-shimmer-wave-basic.tsx'),
    description: 'Basic implementation of the wave-based text shimmer effect.',
    componentName: 'text-shimmer-wave',
  },

  {
    name: 'text-shimmer-wave-color',
    path: path.join(__dirname, '../app/docs/text-shimmer-wave/text-shimmer-wave-color.tsx'),
    description: 'Wave-based text shimmer with custom color configurations.',
    componentName: 'text-shimmer-wave',
  },

  {
    name: 'text-shimmer-basic',
    path: path.join(__dirname, '../app/docs/text-shimmer/text-shimmer-basic.tsx'),
    description: 'Basic implementation of the text shimmer effect.',
    componentName: 'text-shimmer',
  },

  {
    name: 'text-shimmer-color',
    path: path.join(__dirname, '../app/docs/text-shimmer/text-shimmer-color.tsx'),
    description: 'Text shimmer with custom color configurations.',
    componentName: 'text-shimmer',
  },

  {
    name: 'tilt-card-1',
    path: path.join(__dirname, '../app/docs/tilt/tilt-card-1.tsx'),
    description: 'Card component with 3D tilt effect on hover.',
    componentName: 'tilt',
  },

  {
    name: 'tilt-spotlight',
    path: path.join(__dirname, '../app/docs/tilt/tilt-spotlight.tsx'),
    description: 'Tilt effect combined with spotlight for enhanced hover interactions.',
    componentName: 'tilt',
    dependentFiles: [
      {
        name: 'spotlight.tsx',
        path: path.join(__dirname, '../components/core/spotlight.tsx'),
      }
    ],
    files: [
      {
        name: 'tilt.tsx',
        path: path.join(__dirname, '../components/core/tilt.tsx'),
      }
    ]
  },

  {
    name: 'transition-panel-card',
    path: path.join(__dirname, '../app/docs/transition-panel/transition-panel-card.tsx'),
    description: 'Card component with transition panel animations.',
    componentName: 'transition-panel',
  },

  {
    name: 'transition-panel-tabs',
    path: path.join(__dirname, '../app/docs/transition-panel/transition-panel-tabs.tsx'),
    description: 'Tab interface using transition panel for smooth content switching.',
    componentName: 'transition-panel',
  },
];
