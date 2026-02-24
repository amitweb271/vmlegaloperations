// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import StickyChatIcon from '@/components/StickyChatIcon'
// import './globals.css'  // ✅ Global styles - common for all pages

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'VM Legal Operations - Offshore Legal Support for U.S. Law Firms',
//   description: 'Clarity. Consistency. Control. Non-legal administrative support for U.S. law firms',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.className} antialiased`}>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//         <StickyChatIcon />
//       </body>
//     </html>
//   )
// }



// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyChatIcon from '@/components/StickyChatIcon'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

// Viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e40af',
}

// Enhanced metadata with Google Verification
export const metadata: Metadata = {
  metadataBase: new URL('https://vmlegaloperations.com'),
  title: {
    default: 'VM Legal Operations - Offshore Legal Support for U.S. Law Firms',
    template: '%s | VM Legal Operations'
  },
  description: 'Clarity. Consistency. Control. Remote legal operations and paralegal support exclusively for licensed U.S. law firms. Attorney-supervised, confidential, process-driven.',
  keywords: [
    'legal operations',
    'paralegal support',
    'offshore legal support',
    'U.S. law firms',
    'litigation support',
    'case management',
    'document review',
    'personal injury support',
    'immigration case support',
    'legal outsourcing'
  ],
  authors: [{ name: 'VM Legal Operations' }],
  creator: 'VM Tech Solutions',
  publisher: 'VM Legal Operations',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'VM Legal Operations - Offshore Legal Support for U.S. Law Firms',
    description: 'Clarity. Consistency. Control. Remote legal operations and paralegal support exclusively for licensed U.S. law firms.',
    url: 'https://vmlegaloperations.com',
    siteName: 'VM Legal Operations',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VM Legal Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VM Legal Operations - Offshore Legal Support',
    description: 'Clarity. Consistency. Control. Remote legal operations for U.S. law firms.',
    images: ['/twitter-image.jpg'],
    creator: '@vmlegalops',
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
  verification: {
    google: '_Hs4EBTxzD_Rz8ZqbtNVOe3zxi8vFAx5vqlT8C_tyQ0', // ✅ YOUR CODE HERE
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'legal services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vmlegaloperations.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyChatIcon />
        
        {/* Schema.org JSON-LD for Organization */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "VM Legal Operations",
              "description": "Remote legal operations and paralegal support for U.S. law firms",
              "url": "https://vmlegaloperations.com",
              "logo": "https://vmlegaloperations.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/vmlegaloperations",
                "https://twitter.com/vmlegalops"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "areaServed": "US",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00"
            })
          }}
        />
      </body>
    </html>
  )
}