'use client';
import Tabs from '@/components/core/tabs';
import { Home, Settings, User } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TABS = [
  {
    label: 'Home',
    icon: <Home className='h-5 w-5' />,
    description: 'This is the home tab',
  },
  {
    label: 'Account',
    icon: <User className='h-5 w-5' />,
    description: 'This is the user tab',
  },
  {
    label: 'Settings',
    icon: <Settings className='h-5 w-5' />,
    description: 'This is the  settings tab',
  },
];

function TabsControlled() {
  const [activeTab, setActiveTab] = useState(TABS[0].label);
  return (
    <Tabs
      className='mx-10 flex h-[200px] flex-col items-center gap-4'
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <Tabs.List className='justify-center'>
        {TABS.map((tab) => (
          <Tabs.Trigger tabId={tab.label} key={tab.label}>
            {tab.icon}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <AnimatePresence mode='wait' initial={false} key={'tabs-controlled'}>
        {TABS.map(
          (tab) =>
            tab.label === activeTab && (
              <motion.div
                key={tab.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='w-full'
              >
                <Tabs.Content tabId={tab.label} forceMount>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-lg font-medium'>{tab.label}</h3>
                    <p className='text-sm'>{tab.description}</p>
                  </div>
                </Tabs.Content>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </Tabs>
  );
}

export default TabsControlled;
