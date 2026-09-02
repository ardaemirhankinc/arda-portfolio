import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ardakinc.com'),
  alternates: {
    canonical: 'https://www.ardakinc.com',
  },
  title: 'Arda Emirhan Kinc | Operations & Corporate Communications Specialist',
  description:
    'Bilingual (English & Turkish) Operations & Communications Specialist bridging stakeholder communication, process coordination, and digital execution.',
  keywords: [
    'Arda Emirhan Kinc',
    'Arda Kinc',
    'ardakinc',
    'Operations Specialist',
    'Corporate Communications Specialist',
    'Operations & Corporate Communications',
    'Bilingual Operations Specialist',
    'Process Coordination',
    'Digital Execution',
  ],
  authors: [{ name: 'Arda Emirhan Kinc', url: 'https://www.ardakinc.com' }],
  creator: 'Arda Emirhan Kinc',
  openGraph: {
    title: 'Arda Emirhan Kinc | Operations & Corporate Communications Specialist',
    description:
      'Bilingual (English & Turkish) Operations & Communications Specialist bridging stakeholder communication, process coordination, and digital execution.',
    url: 'https://www.ardakinc.com',
    siteName: 'Arda Emirhan Kinc Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arda Emirhan Kinc - Operations & Corporate Communications Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arda Emirhan Kinc | Operations & Corporate Communications Specialist',
    description:
      'Bilingual (English & Turkish) Operations & Communications Specialist bridging stakeholder communication, process coordination, and digital execution.',
    images: ['/og-image.jpg'],
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

const cx = (...classes) => classes.filter(Boolean).join(' ')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arda Emirhan Kinc',
  url: 'https://www.ardakinc.com',
  jobTitle: 'Operations & Corporate Communications Specialist',
  email: 'mailto:kincardaemirhan@gmail.com',
  telephone: '+90 538 563 61 07',
  sameAs: [
    'https://linkedin.com/in/arda-emirhan-kinc',
    'https://github.com/ardaemirhankinc',
  ],
  description:
    'Bilingual (English & Turkish) Operations & Communications Specialist bridging stakeholder communication, process coordination, and digital execution.',
}

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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