// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import StickyChatIcon from '@/components/StickyChatIcon' // ← Add this import

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
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//         <StickyChatIcon /> {/* ← Add this line */}
//       </body>
//     </html>
//   )
// }



import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyChatIcon from '@/components/StickyChatIcon'

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