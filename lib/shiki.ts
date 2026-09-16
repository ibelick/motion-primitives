import { createHighlighter } from 'shiki/bundle/web';
import { noir } from './custom-theme';

const highlighterPromise = createHighlighter({
  themes: [noir],
  langs: ['tsx', 'ts', 'bash'],
});

const htmlCache = new Map<string, string>();

export const codeToHtml = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) => {
  const cacheKey = `${lang}\0${code}`;
  const cachedHtml = htmlCache.get(cacheKey);

  if (cachedHtml) {
    return cachedHtml;
  }

  const highlighter = await highlighterPromise;
  const html = highlighter.codeToHtml(code, {
    lang,
    theme: 'noir',
  });

  htmlCache.set(cacheKey, html);

  return html;
};
