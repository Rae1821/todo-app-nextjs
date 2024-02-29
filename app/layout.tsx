import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'


const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-josefin-sans'
 })


export const metadata: Metadata = {
  title: 'To Do App',
  description: 'Frontend Mentor Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefinSans.variable}>{children}</body>
    </html>
  )
}
