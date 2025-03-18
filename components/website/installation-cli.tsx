'use client';

import { useState } from 'react';
import { MPLogo } from './icons/motion-primitives-logo';
import { ShadcnLogo } from './icons/shadcn-logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { CheckIcon, CopyIcon } from 'lucide-react';

type Command = {
  label: string;
  icon: React.ReactNode;
  code: string;
};

export type InstallationCliProps = {
  value: string;
  className?: string;
};

export function InstallationCli({ value, className }: InstallationCliProps) {
  const commands: Command[] = [
    {
      label: 'motion-primitives',
      icon: <MPLogo className='size-4' />,
      code: `npx motion-primitives@latest add ${value}`,
    },
    {
      label: 'shadcn',
      icon: <ShadcnLogo className='size-4' />,
      code: `npx shadcn@latest add "https://motion-primitives.com/c/${value}.json"`,
    },
  ];

  const [activeTab, setActiveTab] = useState(commands[0].label);
  const [isCopied, setIsCopied] = useState(false);
  const activeCommand = commands.find((cmd) => cmd.label === activeTab);

  const onCopy = async () => {
    if (!activeCommand?.code) return;

    try {
      await navigator.clipboard.writeText(activeCommand.code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Tabs
      defaultValue={commands[0].label}
      onValueChange={setActiveTab}
      className={cn('group overflow-hidden rounded-md border-none', className)}
    >
      <div className='bg-secondary flex flex-row items-center justify-between overflow-hidden rounded-t-md border border-b-0 border-zinc-200 dark:border-zinc-800'>
        <TabsList className='rounded-none border-b-0'>
          {commands.map((command) => (
            <TabsTrigger
              key={command.label}
              value={command.label}
              className='gap-1.5'
              classNameIndicator='opacity-0'
            >
              <span
                className={cn(
                  'flex items-center gap-1',
                  activeTab === command.label
                    ? 'text-zinc-950 dark:text-white'
                    : 'opacity-50'
                )}
              >
                {command.icon}
                {command.label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <Button
          variant='ghost'
          size='icon'
          onClick={onCopy}
          className={cn(
            'relative opacity-0 transition-opacity group-hover:opacity-100',
            isCopied && 'pointer-events-none'
          )}
        >
          <CopyIcon
            className={cn(
              'size-4 transition-all',
              isCopied && 'scale-0 opacity-0'
            )}
          />
          <CheckIcon
            className={cn(
              'absolute size-4 transition-all',
              isCopied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            )}
          />
        </Button>
      </div>
      {commands.map((command) => (
        <TabsContent
          key={command.label}
          value={command.label}
          className='mt-0 mb-0 border-none'
        >
          <pre
            className='not-prose p-4 font-mono text-sm text-zinc-50'
            style={{
              backgroundColor: '#18181b',
            }}
          >
            {command.code}
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  );
}
