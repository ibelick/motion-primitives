import { extractCodeFromFilePath } from "@/lib/code";
import CodePreview from "./code-preview";
import CodeRenderer from "./code-renderer";

type CodeBlockProps = {
  filePath: string;
};

export default function CodeBlock({ filePath }: CodeBlockProps) {
  const fileContent = extractCodeFromFilePath(filePath);

  return (
    <div className="not-prose max-h-[650px] overflow-auto overflow-x-auto rounded-md text-sm">
      <CodePreview code={fileContent}>
        <CodeRenderer code={fileContent} lang="tsx" />
      </CodePreview>
    </div>
  );
}
