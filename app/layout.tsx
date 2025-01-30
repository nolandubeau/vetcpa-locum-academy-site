import type { Metadata } from 'next'
import './globals.css'
import { Footer } from './components/footer'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'VetCPA Locum Academy',
  description: 'Master Your Canadian Veterinary Locum Finances & Taxes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
