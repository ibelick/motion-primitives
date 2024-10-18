'use client';
import React, { useState } from 'react';
import { TextMorph } from '../core/text-morph';

export function TextMorphInput() {
  const [text, setText] = useState('Craft');

  return (
    <div className='flex flex-col items-center justify-end space-y-4'>
      <TextMorph className='text-5xl font-[450] text-black'>{text}</TextMorph>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-none'
        placeholder='Type your text here'
      />
    </div>
  );
}
