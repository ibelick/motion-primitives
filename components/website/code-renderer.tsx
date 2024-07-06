import { codeToHtml } from "@/lib/shiki";

type CodeRenderer = {
  code: string;
  lang: string;
};

export default async function CodeRenderer({ code, lang }: CodeRenderer) {
  const html = await codeToHtml({
    code,
    lang,
  });

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
