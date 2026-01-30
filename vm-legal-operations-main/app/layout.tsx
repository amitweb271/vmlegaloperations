// app/layout.tsx
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          /* Global CSS Reset */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: white;
            color: #111827;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          a {
            text-decoration: none;
            color: inherit;
          }
          
          button {
            font-family: inherit;
          }
          
          h1, h2, h3, h4, h5, h6 {
            line-height: 1.2;
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}