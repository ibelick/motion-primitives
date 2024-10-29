import { extractCodeFromFilePath } from '@/lib/code';
import CodePreview from './code-preview';
import CodeRenderer from './code-renderer';
import { cn } from '@/lib/utils';

type CodeBlockProps = {
  filePath?: string;
  code?: string;
  lang?: string;
  className?: string;
};

export default function CodeBlock({
  filePath,
  code = '',
  lang = 'tsx',
  className,
}: CodeBlockProps) {
  const fileContent = filePath ? extractCodeFromFilePath(filePath) : code;

  return (
    <div
      className={cn(
        'not-prose max-h-[650px] overflow-auto overflow-x-auto overflow-y-hidden rounded-md text-sm dark:border dark:border-zinc-800',
        className
      )}
    >
      <CodePreview code={fileContent}>
        <CodeRenderer code={fileContent} lang={lang} />
      </CodePreview>
    </div>
  );
}
