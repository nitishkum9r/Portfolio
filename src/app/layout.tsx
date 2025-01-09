import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jane Smith - Full Stack Developer',
  description: 'Portfolio showcasing my work as a Full Stack Developer specializing in React, Node.js, and cloud technologies.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Jane Smith' }],
  openGraph: {
    title: 'Jane Smith - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and cloud technologies',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}