import { bundledLanguages, getHighlighter } from "shiki/bundle/web";

export const codeToHtml = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) => {
  const highlighter = await getHighlighter({
    themes: ["github-light", "github-dark"],
    langs: [...Object.keys(bundledLanguages)],
  });

  return highlighter.codeToHtml(code, {
    lang: lang,
    theme: "github-dark",
  });
};
