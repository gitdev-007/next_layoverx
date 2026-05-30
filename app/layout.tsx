import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Geist_Mono, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: 'LayoverX - Smart Travel. Better Connections.',
  description: 'Book flights smarter, discover better layovers, and save more on every journey with LayoverX premium travel booking platform.',
  keywords: 'flight booking, hotels, travel deals, layovers, corporate travel',
  generator: 'v0.app',
  openGraph: {
    title: 'LayoverX - Smart Travel. Better Connections.',
    description: 'Book flights smarter and save more with LayoverX premium travel booking platform.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LayoverX - Smart Travel. Better Connections.',
    description: 'Book flights smarter and save more on every journey.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LayoverX',
    url: 'https://layoverx.com',
    logo: 'https://layoverx.com/logo.png',
    description: 'Smart Travel. Better Connections.',
    sameAs: [
      'https://twitter.com/layoverx',
      'https://facebook.com/layoverx',
      'https://linkedin.com/company/layoverx'
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
