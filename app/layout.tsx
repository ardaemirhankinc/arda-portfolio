import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ardakinc.com'), // This forces absolute URLs for WhatsApp
  title: 'Arda Emirhan Kinc | Sales Development Representative',
  description: 'Methodical Sales Development Representative (SDR) leveraging an authoritative vocal presence and structured communication to drive B2B pipeline.',
  openGraph: {
    title: 'Arda Emirhan Kinc | SDR Portfolio',
    description: 'Methodical Sales Development Representative (SDR) leveraging an authoritative vocal presence and structured communication to drive B2B pipeline.',
    url: 'https://www.ardakinc.com',
    siteName: 'Arda Emirhan Kinc Portfolio',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Arda Emirhan Kinc - SDR Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arda Emirhan Kinc | SDR Portfolio',
    description: 'Methodical Sales Development Representative (SDR) leveraging an authoritative vocal presence and structured communication to drive B2B pipeline.',
    images: ['/og-image.jpg'],
  },
}
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

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-2 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-2 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}