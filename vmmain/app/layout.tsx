import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyChatIcon from '@/components/StickyChatIcon'
import './globals.css'  // ✅ Global styles - common for all pages

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VM Legal Operations - Offshore Legal Support for U.S. Law Firms',
  description: 'Clarity. Consistency. Control. Non-legal administrative support for U.S. law firms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyChatIcon />
      </body>
    </html>
  )
}