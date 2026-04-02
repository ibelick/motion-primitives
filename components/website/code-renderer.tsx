'use client';
import { useEffect, useState } from 'react';
import { codeToHtml, disposeHighlighter } from '@/lib/shiki';

type CodeRendererProps = {
  code: string;
  lang: string;
};

export default function CodeRenderer({ code, lang }: CodeRendererProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const generatedHtml = await codeToHtml({ code, lang });
        setHtml(generatedHtml);
      } catch (error) {
        console.error('Error generating HTML:', error);
      }
    };

    fetchHtml();

    return () => {
      // Avoid disposing if the highlighter might still be needed
      // Consider removing or commenting out this line if it's causing issues
      // disposeHighlighter();
    };
  }, [code, lang]);

  return (
    <div className='font-mono'>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
