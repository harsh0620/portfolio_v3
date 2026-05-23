import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/app/components/providers/theme-provider'
import { Nav } from '@/app/components/ui/nav'
import { GoUpButton } from '@/app/components/ui/go-up-button'

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

const siteUrl = 'https://harshchandravanshi.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Harsh Chandravanshi — Software Engineer',
    template: '%s | Harsh Chandravanshi',
  },
  description:
    'Software Engineer specializing in React, Next.js, and Node.js. Building beautiful, functional web and mobile experiences.',
  keywords: [
    'Software Engineer',
    'React Developer',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Harsh Chandravanshi',
    'Web Developer India',
    'Bengaluru Developer',
  ],
  authors: [{ name: 'Harsh Chandravanshi', url: siteUrl }],
  creator: 'Harsh Chandravanshi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Harsh Chandravanshi',
    title: 'Harsh Chandravanshi — Software Engineer',
    description:
      'Software Engineer specializing in React, Next.js, and Node.js. Building beautiful, functional web and mobile experiences.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Chandravanshi — Software Engineer',
    description:
      'Software Engineer specializing in React, Next.js, and Node.js.',
    creator: '@harshcvb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <GoUpButton />
        </ThemeProvider>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
