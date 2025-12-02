import { TextHighlight } from '@/components/core/text-highlight';

export function TextHighlightColor() {
  return (
    <div className='space-y-4'>
      <div>
        <TextHighlight highlightColor='bg-blue-300 dark:bg-blue-500'>
          Blue highlight
        </TextHighlight>
      </div>
      <div>
        <TextHighlight highlightColor='bg-green-300 dark:bg-green-500'>
          Green highlight
        </TextHighlight>
      </div>
      <div>
        <TextHighlight highlightColor='bg-pink-300 dark:bg-pink-500'>
          Pink highlight
        </TextHighlight>
      </div>
    </div>
  );
}
