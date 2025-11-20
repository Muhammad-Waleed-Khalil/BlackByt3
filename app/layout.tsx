import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from './ClientProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Black Byt3 — Silent. Swift. Secure.',
    template: '%s | Black Byt3'
  },
  description: 'Black Byt3 is a cyber space combining ethical hackers, AI engineers, and practical R&D. We deliver penetration testing, red teaming, threat intelligence, and AI-driven solutions so enterprises, startups, and students can innovate without fear.',
  keywords: ['cybersecurity', 'penetration testing', 'red teaming', 'threat intelligence', 'AI security', 'ethical hacking', 'Pakistan cybersecurity', 'OCMP', 'CTF', 'Black Labs', 'IoT security', 'hardware hacking'],
  authors: [{ name: 'Black Byt3', url: 'https://blackbyt3.com' }],
  creator: 'Black Byt3',
  publisher: 'Black Byt3',
  applicationName: 'Black Byt3 Cyber Space',
  category: 'Cybersecurity',
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
  openGraph: {
    title: 'Black Byt3 — Silent. Swift. Secure.',
    description: 'Empowering Secure Innovation in the Digital Age. Penetration Testing, Red Teaming, AI Security, and Elite Cyber Training.',
    type: 'website',
    url: 'https://blackbyt3.com',
    siteName: 'Black Byt3',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Black Byt3 - Silent. Swift. Secure. Cybersecurity & AI Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Byt3 — Silent. Swift. Secure.',
    description: 'Empowering Secure Innovation in the Digital Age',
    images: ['/og-image.png'],
    creator: '@blackbyt3',
    site: '@blackbyt3',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ff0000' }
    ]
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#000000' }
  ],
  verification: {
    // Add google/bing verification codes here when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
