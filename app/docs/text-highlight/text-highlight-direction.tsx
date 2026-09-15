import { TextHighlight } from '@/components/core/text-highlight';

export function TextHighlightDirection() {
  return (
    <div className='space-y-4'>
      <div>
        <TextHighlight direction='right'>
          Highlight from left to right
        </TextHighlight>
      </div>
      <div>
        <TextHighlight direction='left'>
          Highlight from right to left
        </TextHighlight>
      </div>
    </div>
  );
}
