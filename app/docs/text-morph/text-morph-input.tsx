'use client';
import { useState } from 'react';
import { TextMorph } from '../../../components/core/text-morph';

export function TextMorphInput() {
  const [text, setText] = useState('Craft');

  return (
    <div className='flex flex-col items-center justify-end space-y-12'>
      <TextMorph className='text-5xl font-medium text-black dark:text-white'>
        {text}
      </TextMorph>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-hidden dark:border-zinc-50/10 dark:text-white dark:placeholder-zinc-400'
        placeholder='Type your text here'
      />
    </div>
  );
}
