type NavigationItem = {
    name: string;
    href: string;
    isNew?: boolean;
};

type NavigationGroup = {
    name: string;
    children: NavigationItem[];
};

export const NAVIGATION: NavigationGroup[] = [
    {
        name: 'Getting started',
        children: [
            {
                name: 'Introduction',
                href: '/docs',
            },
        ],
    },
    {
        name: 'Components',
        children: [
            {
                name: 'Accordion',
                href: '/docs/accordion',
            },
            {
                name: 'Animated background',
                href: '/docs/animated-background',
            },
            {
                name: 'Cursor',
                href: '/docs/cursor',
                isNew: true,
            },
            {
                name: 'Dialog',
                href: '/docs/dialog',
            },
            {
                name: 'In view',
                href: '/docs/in-view',
                isNew: true,
            },
            {
                name: 'Popover',
                href: '/docs/popover',
            },
            {
                name: 'Text effect',
                href: '/docs/text-effect',
                isNew: true,
            },
            {
                name: 'Toolbar Dynamic',
                href: '/docs/toolbar-dynamic',
            },
            {
                name: 'Toolbar Expandable',
                href: '/docs/toolbar-expandable',
            },
            {
                name: 'Transition Panel',
                href: '/docs/transition-panel',
            },
        ],
    },
];
