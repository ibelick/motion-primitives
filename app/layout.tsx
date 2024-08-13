import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Motion-Primitives',
  description:
    'Motion-Primitives, a collection of open-source, customizable motion components built with Framer Motion and Tailwind CSS. Perfect for enhancing your web projects with beautiful, smooth animations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang='en' suppressHydrationWarning>
      {!isDev ? (
        <Script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='17e8fc96-321d-43a6-94e7-d571c4c66a04'
        />
      ) : null}
      <body
        className={`${inter.className} ${GeistMono.variable} bg-white dark:bg-zinc-950`}
      >
        <ThemeProvider attribute='class'>
          <div className='isolate min-h-screen'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
