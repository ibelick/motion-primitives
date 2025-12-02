import { TextHighlight } from '@/components/core/text-highlight';

export function TextHighlightSpeed() {
  return (
    <div className='space-y-4'>
      <div>
        <TextHighlight speed={0.5}>Slow highlight (speed: 0.5)</TextHighlight>
      </div>
      <div>
        <TextHighlight speed={1}>Normal highlight (speed: 1)</TextHighlight>
      </div>
      <div>
        <TextHighlight speed={2}>Fast highlight (speed: 2)</TextHighlight>
      </div>
    </div>
  );
}
