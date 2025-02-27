import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import CodePreview from './code-preview';
import CodeRenderer from './code-renderer';
import ComponentPreview from './component-preview';
import { extractCodeFromFilePath } from '@/lib/code';

type ComponentCodePreview = {
  component: React.ReactElement;
  filePath: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
};

export default function ComponentCodePreview({
  component,
  filePath,
  hasReTrigger,
  classNameComponentContainer,
}: ComponentCodePreview) {
  const fileContent = extractCodeFromFilePath(filePath);

  return (
    <div className='not-prose relative z-0 flex items-center justify-between pb-4'>
      <Tabs defaultValue='preview' className='relative mr-auto w-full'>
        <TabsList className=''>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
          <TabsTrigger value='code'>Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value='preview'
          className='border border-zinc-200 dark:border-zinc-800'
        >
          <ComponentPreview
            component={component}
            hasReTrigger={hasReTrigger}
            className={classNameComponentContainer}
            filePath={filePath}
          />
        </TabsContent>
        <TabsContent
          value='code'
          className='border border-zinc-200 dark:border-zinc-800'
        >
          <CodePreview code={fileContent}>
            <CodeRenderer code={fileContent} lang='tsx' />
          </CodePreview>
        </TabsContent>
      </Tabs>
    </div>
  );
}
