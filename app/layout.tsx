import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const siteDescription =
  'Customer-focused early-career professional with experience in operations, service recovery, structured tracking, sales support and workflow automation.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ardakinc.com'),
  alternates: {
    canonical: 'https://www.ardakinc.com',
  },
  title: 'Arda Emirhan Kinç | Customer Operations & Growth',
  description: siteDescription,
  keywords: [
    'Arda Emirhan Kinç',
    'Arda Emirhan Kinc',
    'Customer Success',
    'Customer Support',
    'Customer Operations',
    'Sales Operations',
    'Business Development',
    'Kocaeli',
    'Türkiye',
  ],
  authors: [{ name: 'Arda Emirhan Kinç', url: 'https://www.ardakinc.com' }],
  creator: 'Arda Emirhan Kinç',
  openGraph: {
    title: 'Arda Emirhan Kinç | Customer Operations & Growth',
    description: siteDescription,
    url: 'https://www.ardakinc.com',
    siteName: 'Arda Emirhan Kinç',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arda Emirhan Kinç — Customer Operations, Sales Support and Business Development',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arda Emirhan Kinç | Customer Operations & Growth',
    description: siteDescription,
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

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arda Emirhan Kinç',
  alternateName: 'Arda Emirhan Kinc',
  url: 'https://www.ardakinc.com',
  email: 'mailto:kincardaemirhan@gmail.com',
  telephone: '+90 538 563 61 07',
  homeLocation: {
    '@type': 'Place',
    name: 'Kocaeli, Türkiye',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Kocaeli University',
  },
  sameAs: [
    'https://linkedin.com/in/arda-emirhan-kinc',
    'https://github.com/ardaemirhankinc',
  ],
  knowsLanguage: ['Turkish', 'English'],
  knowsAbout: [
    'Customer Operations',
    'Customer Success',
    'Sales Operations',
    'Business Development',
    'Workflow Automation',
  ],
  description: siteDescription,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#080808] font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
