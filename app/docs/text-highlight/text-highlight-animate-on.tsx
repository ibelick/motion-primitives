import { TextHighlight } from '@/components/core/text-highlight';

export function TextHighlightAnimateOn() {
  return (
    <div className='space-y-6'>
      <div>
        <p className='mb-2 text-sm text-zinc-600 dark:text-zinc-400'>
          Hover to highlight:
        </p>
        <TextHighlight animateOn='hover'>Hover over this text</TextHighlight>
      </div>
      <div>
        <p className='mb-2 text-sm text-zinc-600 dark:text-zinc-400'>
          Click to toggle highlight:
        </p>
        <TextHighlight animateOn='click'>Click this text</TextHighlight>
      </div>
      <div>
        <p className='mb-2 text-sm text-zinc-600 dark:text-zinc-400'>
          Auto highlight on mount:
        </p>
        <TextHighlight animateOn='mount'>
          This highlights automatically
        </TextHighlight>
      </div>
    </div>
  );
}
