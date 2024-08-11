import ThemeSwitch from '@/components/website/theme-switch';
import GitHubIcon from '@/components/website/icons/github';
import XIcon from '@/components/website/icons/x';

export default function Header() {
    return (
        <header className='sticky top-0 z-10 flex h-14 items-center justify-center border-b border-zinc-950/10 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950'>
            <div className='mx-auto flex w-full items-center justify-between md:max-w-7xl'>
                <a href='/' className='relative flex items-center'>
                    <div className='text-zinc-950 dark:text-white'>motion-primitives</div>
                    <span className='mb-4 ml-2 select-none rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-50'>
                        beta
                    </span>
                </a>
                <nav className='flex items-center gap-2'>
                    <a
                        href='https://twitter.com/Ibelick'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex h-9 w-9 items-center justify-center'
                    >
                        <XIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
                    </a>
                    <a
                        href='https://github.com/ibelick/motion-primitives'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex h-9 w-9 items-center justify-center'
                    >
                        <GitHubIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
                    </a>
                    <ThemeSwitch />
                </nav>
            </div>
        </header>
    );
}