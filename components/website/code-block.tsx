import { extractCodeFromFilePath } from '@/lib/code';
import CodePreview from './code-preview';
import CodeRenderer from './code-renderer';

type CodeBlockProps = {
  filePath: string;
};

export default function CodeBlock({ filePath }: CodeBlockProps) {
  const fileContent = extractCodeFromFilePath(filePath);

  return (
    <div className='not-prose max-h-[650px] overflow-auto overflow-x-auto overflow-y-hidden rounded-md text-sm dark:border dark:border-zinc-800'>
      <CodePreview code={fileContent}>
        <CodeRenderer code={fileContent} lang='tsx' />
      </CodePreview>
    </div>
  );
}
