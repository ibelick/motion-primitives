import {
  bundledLanguages,
  createHighlighter,
  Highlighter,
} from 'shiki/bundle/web';
import { noir } from './custom-theme';

// This variable will hold the cached highlighter instance
let highlighter: Highlighter | null = null;

const getHighlighter = async (): Promise<Highlighter> => {
  if (!highlighter) {
    // Create it only once
    highlighter = await createHighlighter({
      themes: [noir],
      langs: [...Object.keys(bundledLanguages)],
    });
  }
  return highlighter;
};

export const codeToHtml = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}): Promise<string> => {
  const highlighterInstance = await getHighlighter();

  // Ensure highlighterInstance is not null
  if (!highlighterInstance) {
    throw new Error('Highlighter instance is null');
  }

  return highlighterInstance.codeToHtml(code, {
    lang: lang,
    theme: 'noir',
  });
};

// Function to dispose of the highlighter when done (e.g., server-side cleanup)
export const disposeHighlighter = async (): Promise<void> => {
  if (highlighter) {
    highlighter.dispose();
    highlighter = null; // Reset the cached instance
  }
};
