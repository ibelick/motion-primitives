'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/website/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/website/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/website/popover";
import { NAVIGATION } from "@/lib/navigation-links";

export default function NavigationMobile() {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);
    const [selectedHref, setSelectedHref] = React.useState(pathname);

    const handleSelect = (href: string) => {
        setSelectedHref(href);
        setOpen(false);
        router.push(href);
    };

    const getSelectedLabel = () => {
        for (const group of NAVIGATION) {
            const child = group.children.find(child => child.href === selectedHref);
            if (child) return child.name;
        }
        return "Select page...";
    };

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // 1024px is the default breakpoint for 'lg'
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='block w-full pt-8 lg:hidden'>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                    >
                        {getSelectedLabel()}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[calc(100vw-2rem)] mx-4 p-0">
                    <Command className="w-full">
                        <CommandInput placeholder="Search pages..." />
                        <CommandList>
                            <CommandEmpty>No page found.</CommandEmpty>
                            {NAVIGATION.map((group) => (
                                <CommandGroup key={group.name} heading={group.name}>
                                    {group.children.map((item) => (
                                        <CommandItem
                                            key={item.href}
                                            value={item.href}
                                            onSelect={handleSelect}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    selectedHref === item.href ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {item.name}
                                            {item.isNew && (
                                                <span className="ml-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                                                    New
                                                </span>
                                            )}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}