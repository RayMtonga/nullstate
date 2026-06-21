import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nullstate – Professional Websites & Digital Solutions',
  description: 'We build high-converting websites, secure e-commerce stores, and custom web applications for businesses, startups, and entrepreneurs.',
  keywords: 'digital agency, web development, custom software, landing pages, nextjs, tailwindcss, zambia web development, e-commerce zambia, startup design',
  authors: [{ name: 'Nullstate' }],
  metadataBase: new URL('https://nullstate.co'),
  openGraph: {
    title: 'Nullstate – Professional Websites & Digital Solutions',
    description: 'We build high-converting websites, secure e-commerce stores, and custom web applications for businesses, startups, and entrepreneurs.',
    url: 'https://nullstate.co',
    siteName: 'Nullstate',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nullstate – Professional Websites & Digital Solutions',
    description: 'We build high-converting websites, secure e-commerce stores, and custom web applications for startups and businesses.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
